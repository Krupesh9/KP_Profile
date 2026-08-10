const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const phase = process.argv[2] || "before";
const pagePath = process.argv[3] || "index.html";
const root = "/private/tmp/kp-profile-regression";
const outputDir = path.join(root, phase);
fs.mkdirSync(outputDir, { recursive: true });

const browserPaths = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"
];

const viewports = [
    { name: "desktop", width: 1440, height: 1000 },
    { name: "tablet", width: 834, height: 1112 },
    { name: "mobile", width: 390, height: 844 }
];

async function revealPage(page) {
    await page.evaluate(() => {
        document.querySelectorAll("img").forEach(image => {
            image.dataset.qaOriginalLoading = image.getAttribute("loading") || "";
            image.loading = "eager";
        });
    });
    await page.evaluate(async () => {
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        const step = Math.max(360, Math.floor(innerHeight * .72));
        for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
            scrollTo(0, y);
            await delay(45);
        }
        scrollTo(0, 0);
        await delay(180);
    });
    await page.evaluate(async () => {
        const images = [...document.images].filter(image => image.id !== "gallery-image");
        await Promise.all(images.map(image => image.complete ? Promise.resolve() : new Promise(resolve => {
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", resolve, { once: true });
            setTimeout(resolve, 5000);
        })));
    });
}

async function auditPage(page) {
    return page.evaluate(() => {
        const rgba = value => {
            const match = value.match(/rgba?\(([^)]+)\)/);
            if (!match) return null;
            const parts = match[1].split(/[ ,/]+/).filter(Boolean).map(Number);
            return { r: parts[0], g: parts[1], b: parts[2], a: parts.length > 3 ? parts[3] : 1 };
        };
        const luminance = color => {
            const channel = value => {
                const normalized = value / 255;
                return normalized <= .04045 ? normalized / 12.92 : Math.pow((normalized + .055) / 1.055, 2.4);
            };
            return .2126 * channel(color.r) + .7152 * channel(color.g) + .0722 * channel(color.b);
        };
        const ratio = (a, b) => {
            const high = Math.max(luminance(a), luminance(b));
            const low = Math.min(luminance(a), luminance(b));
            return (high + .05) / (low + .05);
        };
        const effectiveBackground = element => {
            let current = element;
            while (current) {
                const color = rgba(getComputedStyle(current).backgroundColor);
                if (color && color.a >= .92) return color;
                current = current.parentElement;
            }
            return rgba(getComputedStyle(document.body).backgroundColor) || { r: 255, g: 255, b: 255, a: 1 };
        };
        const contrastFor = selector => [...document.querySelectorAll(selector)].slice(0, 20).map(element => {
            const style = getComputedStyle(element);
            const foreground = rgba(style.color);
            const background = effectiveBackground(element);
            return {
                text: element.textContent.trim().replace(/\s+/g, " ").slice(0, 70),
                color: style.color,
                background: `rgb(${background.r}, ${background.g}, ${background.b})`,
                fontSize: style.fontSize,
                ratio: foreground ? Number(ratio(foreground, background).toFixed(2)) : null
            };
        });

        const images = [...document.images];
        const undersizedTargets = [...document.querySelectorAll("a, button")].filter(element => {
            const rect = element.getBoundingClientRect();
            return rect.width > 0 && (rect.width < 44 || rect.height < 44);
        }).map(element => {
            const rect = element.getBoundingClientRect();
            return { text: element.textContent.trim().replace(/\s+/g, " ").slice(0, 40), width: Math.round(rect.width), height: Math.round(rect.height) };
        }).slice(0, 40);

        const clippedText = [...document.querySelectorAll("h1,h2,h3,strong,span,p,li")].filter(element => {
            const style = getComputedStyle(element);
            return !element.matches(".brand-monogram, .brand-initials") && style.opacity !== "0" && style.visibility !== "hidden" && style.overflow !== "visible" && (element.scrollWidth > element.clientWidth + 1 || element.scrollHeight > element.clientHeight + 1);
        }).map(element => ({ tag: element.tagName, text: element.textContent.trim().replace(/\s+/g, " ").slice(0, 70) })).slice(0, 30);

        const resumeActions = [...document.querySelectorAll(".resume-actions a")].map(anchor => {
            const rect = anchor.getBoundingClientRect();
            const iconRect = anchor.querySelector("svg")?.getBoundingClientRect();
            return {
                width: Math.round(rect.width),
                height: Math.round(rect.height),
                fontSize: Number.parseFloat(getComputedStyle(anchor).fontSize),
                iconSize: iconRect ? Math.round(iconRect.width) : 0,
                borderRadius: Number.parseFloat(getComputedStyle(anchor).borderRadius)
            };
        });

        return {
            theme: document.documentElement.dataset.theme,
            viewport: [innerWidth, innerHeight],
            documentHeight: document.documentElement.scrollHeight,
            overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
            brokenImages: images.filter(image => image.id !== "gallery-image" && (!image.complete || image.naturalWidth === 0)).map(image => image.src),
            fontsReady: document.fonts.status,
            fontFamilies: [...new Set([...document.querySelectorAll("body *")].slice(0, 600).map(element => getComputedStyle(element).fontFamily))],
            companyLogos: [...document.querySelectorAll(".company-logo-card")].map(card => {
                const image = card.querySelector("img");
                const rect = image.getBoundingClientRect();
                return {
                    company: card.querySelector("strong")?.textContent.trim(),
                    source: image.getAttribute("src"),
                    natural: [image.naturalWidth, image.naturalHeight],
                    rendered: [Math.round(rect.width), Math.round(rect.height)],
                    filter: getComputedStyle(image).filter,
                    cardBackground: getComputedStyle(card).backgroundColor
                };
            }),
            technologyLogos: document.querySelectorAll(".technology-logo img").length,
            experienceMarks: [...document.querySelectorAll(".experience-mark")].map(mark => {
                const image = mark.querySelector("img");
                const style = getComputedStyle(mark);
                return {
                    background: style.backgroundColor,
                    border: style.borderColor,
                    filter: getComputedStyle(image).filter
                };
            }),
            resumeActions,
            resumePlacement: {
                heroActionCount: document.querySelectorAll(".hero-copy .resume-actions").length,
                platformActionCount: document.querySelectorAll(".platform-ribbon-copy .resume-actions").length
            },
            contrast: {
                sectionHeadings: contrastFor(".section-intro h2"),
                body: contrastFor(".about-story p, .project-description, .project-copy li, .experience-body li"),
                labels: contrastFor(".technology-logo span, .company-logo-card strong, .company-logo-card span, .rating-label")
            },
            undersizedTargets,
            clippedText
        };
    });
}

async function testInteractions(page) {
    const results = {};
    await page.locator('a[href="#experience"]').first().click();
    await page.waitForTimeout(250);
    results.navExperience = await page.evaluate(() => location.hash);
    results.headerPortraitAfterScroll = await page.evaluate(() => ({
        enabled: document.querySelector(".site-header").classList.contains("show-profile"),
        imageOpacity: getComputedStyle(document.querySelector(".brand-monogram img")).opacity
    }));

    const initialTheme = await page.evaluate(() => document.documentElement.dataset.theme);
    await page.click("#theme-toggle-v2");
    results.themeToggle = {
        before: initialTheme,
        after: await page.evaluate(() => document.documentElement.dataset.theme)
    };
    await page.click("#theme-toggle-v2");

    const projectCountBefore = await page.locator('[data-project-count="0"]').textContent();
    await page.click('[data-project-next="0"]');
    results.projectCarousel = {
        before: projectCountBefore.trim(),
        after: (await page.locator('[data-project-count="0"]').textContent()).trim()
    };

    await page.click('[data-project-gallery="0"]');
    results.galleryOpened = !(await page.locator("#project-gallery").getAttribute("hidden"));
    results.galleryAccessibility = await page.evaluate(() => ({
        initialFocusIsClose: document.activeElement?.classList.contains("gallery-close"),
        backgroundInert: document.querySelector("main").inert
    }));
    await page.keyboard.press("Shift+Tab");
    results.galleryAccessibility.focusTrapped = await page.evaluate(() => document.querySelector(".gallery-dialog").contains(document.activeElement));
    await page.click("[data-gallery-next]");
    results.galleryAdvanced = (await page.locator("#gallery-count").textContent()).trim();
    await page.click("[data-gallery-rotate]");
    await page.waitForTimeout(400);
    results.galleryRotation = await page.evaluate(() => {
        const imageRect = document.querySelector("#gallery-image").getBoundingClientRect();
        const shellRect = document.querySelector(".gallery-image-shell").getBoundingClientRect();
        return {
            transform: document.querySelector("#gallery-image").style.transform,
            contained: imageRect.left >= shellRect.left - 1 && imageRect.right <= shellRect.right + 1 && imageRect.top >= shellRect.top - 1 && imageRect.bottom <= shellRect.bottom + 1
        };
    });
    await page.click(".gallery-close");
    results.galleryClosed = (await page.locator("#project-gallery").getAttribute("hidden")) !== null;
    results.galleryAccessibility.focusRestored = await page.evaluate(() => document.activeElement?.hasAttribute("data-project-gallery"));

    results.resumeActions = await page.evaluate(() => [...document.querySelectorAll(".resume-actions a")].map(anchor => {
        const rect = anchor.getBoundingClientRect();
        const iconRect = anchor.querySelector("svg")?.getBoundingClientRect();
        return {
            text: anchor.textContent.trim().replace(/\s+/g, " "),
            href: anchor.href,
            download: anchor.hasAttribute("download"),
            target: anchor.target,
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            fontSize: getComputedStyle(anchor).fontSize,
            iconSize: iconRect ? Math.round(iconRect.width) : 0,
            borderRadius: getComputedStyle(anchor).borderRadius
        };
    }));
    for (const action of results.resumeActions) {
        if (action.href.startsWith("http://127.0.0.1:4173/")) action.status = (await page.request.get(action.href)).status();
    }
    results.resumePlacement = await page.evaluate(() => ({
        heroActionCount: document.querySelectorAll(".hero-copy .resume-actions").length,
        platformActionCount: document.querySelectorAll(".platform-ribbon-copy .resume-actions").length
    }));
    results.assetOptimization = await page.evaluate(() => ({
        portraitSources: [...document.querySelectorAll('.brand-monogram img, .portrait-card img')].map(image => image.getAttribute("src")),
        favicon: document.querySelector('link[rel="icon"]')?.getAttribute("href"),
        lazyCompanyImages: [...document.querySelectorAll('.experience-mark img, .company-logo-card img')].every(image => image.dataset.qaOriginalLoading === "lazy"),
        galleryStartsWithoutSource: !document.querySelector("#gallery-image").hasAttribute("src"),
        structuredProfileValid: (() => {
            try { return JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)["@type"] === "Person"; }
            catch { return false; }
        })()
    }));
    const onePageHtml = await (await page.request.get("http://127.0.0.1:4173/resume/Krupesh_Patel_AI_and_Power_Platform_One_Page_V2.html")).text();
    results.assetOptimization.onePageUsesOptimizedPortrait = onePageHtml.includes("../assets/krupesh-profile-480.jpg");
    return results;
}

async function testMobileHeader(page) {
    await page.evaluate(() => scrollTo(0, 0));
    await page.waitForTimeout(300);
    const initial = await page.evaluate(() => ({
        menuOpen: document.querySelector("#mobile-nav-v2").classList.contains("open"),
        initialsOpacity: getComputedStyle(document.querySelector(".brand-initials")).opacity,
        menuRightGap: Math.round(innerWidth - document.querySelector("#menu-toggle-v2").getBoundingClientRect().right),
        menuIsRightmost: document.querySelector("#menu-toggle-v2").getBoundingClientRect().left > document.querySelector("#theme-toggle-v2").getBoundingClientRect().right
    }));
    await page.click("#menu-toggle-v2");
    const opened = await page.evaluate(() => ({
        menuOpen: document.querySelector("#mobile-nav-v2").classList.contains("open"),
        expanded: document.querySelector("#menu-toggle-v2").getAttribute("aria-expanded")
    }));
    await page.click('#mobile-nav-v2 a[href="#skills"]');
    await page.waitForTimeout(300);
    const afterScroll = await page.evaluate(() => ({
        menuOpen: document.querySelector("#mobile-nav-v2").classList.contains("open"),
        headerShowsProfile: document.querySelector(".site-header").classList.contains("show-profile"),
        imageOpacity: getComputedStyle(document.querySelector(".brand-monogram img")).opacity,
        menuLabel: document.querySelector("#menu-toggle-v2").getAttribute("aria-label")
    }));
    await page.locator('[data-project-gallery="0"]').click();
    await page.click("[data-gallery-rotate]");
    await page.waitForTimeout(400);
    const galleryRotation = await page.evaluate(() => {
        const imageRect = document.querySelector("#gallery-image").getBoundingClientRect();
        const shellRect = document.querySelector(".gallery-image-shell").getBoundingClientRect();
        return {
            transform: document.querySelector("#gallery-image").style.transform,
            contained: imageRect.left >= shellRect.left - 1 && imageRect.right <= shellRect.right + 1 && imageRect.top >= shellRect.top - 1 && imageRect.bottom <= shellRect.bottom + 1
        };
    });
    await page.click(".gallery-close");
    return { initial, opened, afterScroll, galleryRotation };
}

async function testLegacyRedirect(browser) {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:4173/profile-v2.html?review=redirect-check#experience", { waitUntil: "domcontentloaded" });
    await page.waitForURL(url => url.pathname.endsWith("/index.html") && url.search === "?review=redirect-check" && url.hash === "#experience");
    const result = { url: page.url(), headingVisible: await page.locator("#experience h2").isVisible() };
    await context.close();
    return result;
}

async function testNoScriptFallback(browser) {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:4173/index.html", { waitUntil: "domcontentloaded" });
    const result = {
        headingVisible: await page.locator("#noscript-profile-title").isVisible(),
        summaryVisible: await page.locator(".noscript-profile").isVisible(),
        resumeLinks: await page.locator(".noscript-profile .resume-actions a").count(),
        staticProfileVisible: await page.locator(".about-story").isVisible()
    };
    await context.close();
    return result;
}

function validateResults(results) {
    const failures = [...results.consoleErrors];
    const transparent = value => value === "rgba(0, 0, 0, 0)" || value === "transparent";

    for (const [key, scenario] of Object.entries(results.scenarios)) {
        if (scenario.overflowX) failures.push(`${key}: horizontal overflow`);
        if (scenario.brokenImages.length) failures.push(`${key}: broken images: ${scenario.brokenImages.join(", ")}`);
        if (scenario.fontsReady !== "loaded") failures.push(`${key}: fonts did not finish loading`);
        if (scenario.undersizedTargets.length) failures.push(`${key}: controls below 44px: ${JSON.stringify(scenario.undersizedTargets)}`);
        if (scenario.clippedText.length) failures.push(`${key}: clipped text: ${JSON.stringify(scenario.clippedText)}`);
        const lowContrast = Object.values(scenario.contrast).flat().filter(item => item.ratio === null || item.ratio < 4.5);
        if (lowContrast.length) failures.push(`${key}: low contrast text: ${JSON.stringify(lowContrast)}`);
        if (!scenario.technologyLogos || !scenario.companyLogos.length || !scenario.experienceMarks.length) failures.push(`${key}: expected logo groups are missing`);
        if (scenario.resumePlacement.heroActionCount !== 0 || scenario.resumePlacement.platformActionCount !== 1) failures.push(`${key}: résumé actions are not in the technology section`);
        if (scenario.resumeActions.length !== 2) {
            failures.push(`${key}: expected two résumé actions`);
        } else {
            const [first, second] = scenario.resumeActions;
            if (Math.abs(first.width - second.width) > 1 || Math.abs(first.height - second.height) > 1) failures.push(`${key}: résumé actions are not equal size`);
            if (Math.abs(first.fontSize - second.fontSize) > .1 || Math.abs(first.iconSize - second.iconSize) > 1) failures.push(`${key}: résumé typography or icons do not match`);
            if (first.borderRadius >= first.height / 2 || second.borderRadius >= second.height / 2) failures.push(`${key}: résumé actions use a pill shape`);
        }

        if (key.endsWith("-dark")) {
            if (scenario.companyLogos.some(logo => logo.filter === "none")) failures.push(`${key}: company logo dark-mode filter missing`);
            if (scenario.experienceMarks.some(mark => !transparent(mark.background) || !transparent(mark.border))) failures.push(`${key}: experience logo container has a dark-theme tile`);
            if (scenario.experienceMarks.some(mark => mark.filter === "none")) failures.push(`${key}: experience logo dark-mode filter missing`);
        }
    }

    const interactions = results.interactions;
    if (interactions.navExperience !== "#experience") failures.push("desktop navigation did not reach experience");
    if (!interactions.headerPortraitAfterScroll?.enabled || interactions.headerPortraitAfterScroll.imageOpacity !== "1") failures.push("header portrait did not replace KP after scroll");
    if (interactions.themeToggle?.before !== "light" || interactions.themeToggle.after !== "dark") failures.push("theme toggle state transition failed");
    if (interactions.projectCarousel?.before === interactions.projectCarousel?.after) failures.push("project carousel did not advance");
    if (!interactions.galleryOpened || interactions.galleryAdvanced !== "3 / 4" || !interactions.galleryRotation?.transform.startsWith("rotate(90deg)") || !interactions.galleryRotation.contained || !interactions.galleryClosed) failures.push("project gallery interaction or rotation-fit flow failed");
    if (!interactions.galleryAccessibility?.initialFocusIsClose || !interactions.galleryAccessibility.backgroundInert || !interactions.galleryAccessibility.focusTrapped || !interactions.galleryAccessibility.focusRestored) failures.push("project gallery focus management failed");
    if (interactions.resumePlacement?.heroActionCount !== 0 || interactions.resumePlacement?.platformActionCount !== 1) failures.push("resume actions are not located in the technology section");
    if (interactions.resumeActions?.length !== 2) failures.push("expected two resume actions");
    if (interactions.resumeActions?.some(action => action.status !== 200)) failures.push("a resume artifact failed its HTTP check");
    if (Math.abs((interactions.resumeActions?.[0]?.width || 0) - (interactions.resumeActions?.[1]?.width || 0)) > 1) failures.push("resume actions do not have equal widths");
    if (Math.abs((interactions.resumeActions?.[0]?.height || 0) - (interactions.resumeActions?.[1]?.height || 0)) > 1) failures.push("resume actions do not have equal heights");
    const assets = interactions.assetOptimization;
    if (assets?.portraitSources.some(source => source !== "assets/krupesh-profile-480.jpg") || assets?.favicon !== "favicon.svg" || !assets?.lazyCompanyImages || !assets?.galleryStartsWithoutSource || !assets?.structuredProfileValid || !assets?.onePageUsesOptimizedPortrait) failures.push("asset optimization or structured profile fallback failed");

    const mobile = results.mobileHeader;
    if (mobile.initial?.menuOpen || Number(mobile.initial?.initialsOpacity) < .99 || !mobile.initial?.menuIsRightmost || mobile.initial?.menuRightGap > 20) failures.push("mobile header initial state or right alignment failed");
    if (!mobile.opened?.menuOpen || mobile.opened?.expanded !== "true") failures.push("mobile hamburger did not open");
    if (mobile.afterScroll?.menuOpen || !mobile.afterScroll?.headerShowsProfile || mobile.afterScroll?.imageOpacity !== "1" || mobile.afterScroll?.menuLabel !== "Open navigation menu") failures.push("mobile menu close or header portrait state failed after navigation");
    if (!mobile.galleryRotation?.transform.startsWith("rotate(90deg)") || !mobile.galleryRotation.contained) failures.push("mobile gallery rotation is clipped");
    if (!results.legacyRedirect?.url.endsWith("index.html?review=redirect-check#experience") || !results.legacyRedirect.headingVisible) failures.push("legacy profile-v2 redirect did not preserve query/hash or reach experience");
    if (!results.noScriptFallback?.headingVisible || !results.noScriptFallback.summaryVisible || results.noScriptFallback.resumeLinks !== 2 || !results.noScriptFallback.staticProfileVisible) failures.push("non-JavaScript profile fallback failed");
    return failures;
}

async function main() {
    const executablePath = browserPaths.find(candidate => fs.existsSync(candidate));
    if (!executablePath) throw new Error("No supported Chromium browser found.");
    const browser = await chromium.launch({ headless: true, executablePath });
    const results = { phase, scenarios: {}, interactions: {}, mobileHeader: {}, consoleErrors: [] };

    for (const viewport of viewports) {
        for (const theme of ["light", "dark"]) {
            const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1, colorScheme: theme });
            const page = await context.newPage();
            page.on("console", message => { if (message.type() === "error") results.consoleErrors.push(`${viewport.name}/${theme}: ${message.text()}`); });
            page.on("pageerror", error => results.consoleErrors.push(`${viewport.name}/${theme}: ${error.message}`));
            await page.goto(`http://127.0.0.1:4173/${pagePath}?review=43#top`, { waitUntil: "domcontentloaded" });
            await page.evaluate(selectedTheme => {
                localStorage.setItem("kp-profile-v2-theme", selectedTheme);
                document.documentElement.dataset.theme = selectedTheme;
            }, theme);
            await page.reload({ waitUntil: "domcontentloaded" });
            await page.waitForTimeout(1100);
            await revealPage(page);
            const key = `${viewport.name}-${theme}`;
            results.scenarios[key] = await auditPage(page);
            await page.screenshot({ path: path.join(outputDir, `${key}-full.png`), fullPage: true });
            await page.locator(".platform-ribbon").screenshot({ path: path.join(outputDir, `${key}-technology.png`) });
            if (viewport.name === "desktop") {
                await page.locator(".experience-section").screenshot({ path: path.join(outputDir, `${key}-experience.png`) });
                await page.locator(".brand-wall").screenshot({ path: path.join(outputDir, `${key}-logos.png`) });
                await page.locator(".credential-section").screenshot({ path: path.join(outputDir, `${key}-credentials.png`) });
            }
            if (viewport.name === "desktop" && theme === "light") results.interactions = await testInteractions(page);
            if (viewport.name === "mobile" && theme === "light") results.mobileHeader = await testMobileHeader(page);
            await context.close();
        }
    }

    results.legacyRedirect = await testLegacyRedirect(browser);
    results.noScriptFallback = await testNoScriptFallback(browser);
    results.validation = { failures: validateResults(results) };
    fs.writeFileSync(path.join(outputDir, "audit.json"), JSON.stringify(results, null, 2));
    process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
    await browser.close();
    if (results.validation.failures.length) throw new Error(`Regression failed:\n- ${results.validation.failures.join("\n- ")}`);
}

main().catch(error => {
    process.stderr.write(`${error.stack || error}\n`);
    process.exitCode = 1;
});
