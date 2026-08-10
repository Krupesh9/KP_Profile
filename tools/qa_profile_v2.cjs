const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const browserPaths = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"
];

async function inspectHero(page) {
    return page.evaluate(() => {
        const proof = document.querySelector(".hero-proof");
        const metrics = [...proof.children].map(element => element.getBoundingClientRect());
        const contacts = [...document.querySelectorAll(".identity-item")].map(element => {
            const rect = element.getBoundingClientRect();
            const style = getComputedStyle(element);
            const icon = element.querySelector(".identity-icon").getBoundingClientRect();
            return {
                text: element.textContent.trim(),
                width: Math.round(rect.width),
                paddingInline: `${style.paddingLeft} / ${style.paddingRight}`,
                iconWidth: Math.round(icon.width)
            };
        });
        const primary = getComputedStyle(document.querySelector(".button.primary"));
        const secondary = getComputedStyle(document.querySelector(".button.secondary"));
        return {
            theme: document.documentElement.dataset.theme,
            viewport: [innerWidth, innerHeight],
            overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
            proofColumns: getComputedStyle(proof).gridTemplateColumns,
            proofCount: metrics.length,
            proofRows: new Set(metrics.map(rect => Math.round(rect.top))).size,
            contacts,
            primary: { background: primary.backgroundImage, color: primary.color },
            secondary: { background: secondary.backgroundColor, color: secondary.color },
            heroNameColor: getComputedStyle(document.querySelector(".hero-name")).color
        };
    });
}

async function main() {
    const executablePath = browserPaths.find(candidate => fs.existsSync(candidate));
    if (!executablePath) throw new Error("No supported local Chromium browser was found.");

    const browser = await chromium.launch({ headless: true, executablePath });
    const page = await browser.newPage({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 });
    await page.goto("http://127.0.0.1:4173/index.html?review=42#top", { waitUntil: "domcontentloaded" });
    await page.evaluate(() => localStorage.removeItem("kp-profile-v2-theme"));
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1200);
    await page.screenshot({ path: "/private/tmp/kp-profile-hero-light.png", clip: { x: 0, y: 0, width: 1440, height: 1100 } });
    const light = await inspectHero(page);

    await page.click("#theme-toggle-v2");
    await page.waitForTimeout(250);
    await page.screenshot({ path: "/private/tmp/kp-profile-hero-dark.png", clip: { x: 0, y: 0, width: 1440, height: 1100 } });
    const dark = await inspectHero(page);

    await page.evaluate(() => localStorage.removeItem("kp-profile-v2-theme"));
    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: "/private/tmp/kp-profile-hero-mobile.png", clip: { x: 0, y: 0, width: 390, height: 844 } });
    const mobile = await inspectHero(page);

    await browser.close();
    process.stdout.write(`${JSON.stringify({ light, dark, mobile }, null, 2)}\n`);
}

main().catch(error => {
    process.stderr.write(`${error.stack || error}\n`);
    process.exitCode = 1;
});
