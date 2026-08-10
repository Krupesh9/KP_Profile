const path = require("path");
const fs = require("fs");
const { pathToFileURL } = require("url");
const { chromium } = require("playwright");

async function main() {
    const projectRoot = path.resolve(__dirname, "..");
    const htmlPath = path.join(projectRoot, "resume", "Krupesh_Patel_AI_and_Power_Platform_One_Page_V2.html");
    const pdfPath = path.join(projectRoot, "resume", "Krupesh_Patel_AI_and_Power_Platform_One_Page_V2.pdf");

    const browserPaths = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"
    ];
    const executablePath = browserPaths.find(candidate => fs.existsSync(candidate));
    if (!executablePath) {
        throw new Error("No supported local Chromium browser was found.");
    }

    const browser = await chromium.launch({ headless: true, executablePath });
    const page = await browser.newPage({ viewport: { width: 1224, height: 1584 }, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts?.ready);
    await page.emulateMedia({ media: "print", colorScheme: "light" });
    await page.pdf({
        path: pdfPath,
        format: "Letter",
        printBackground: true,
        preferCSSPageSize: true,
        margin: { top: "0", right: "0", bottom: "0", left: "0" }
    });
    await browser.close();
    process.stdout.write(`${pdfPath}\n`);
}

main().catch(error => {
    process.stderr.write(`${error.stack || error}\n`);
    process.exitCode = 1;
});
