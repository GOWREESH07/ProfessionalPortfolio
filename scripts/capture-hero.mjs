import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const viewports = [
  { name: "desktop-reference-1680x927", width: 1680, height: 927 },
  { name: "desktop-1440x900", width: 1440, height: 900 },
  { name: "laptop-1280x800", width: 1280, height: 800 },
  { name: "tablet-768x1024", width: 768, height: 1024 },
  { name: "mobile-390x844", width: 390, height: 844 },
];

async function captureHero() {
  const outputDir = path.join(process.cwd(), "docs", "hero-audit");
  fs.mkdirSync(outputDir, { recursive: true });

  console.log("Launching Google Chrome to audit redesigned hero...");
  const browser = await chromium.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
  });
  const context = await browser.newContext();

  for (const vp of viewports) {
    const page = await context.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });

    const url = "http://localhost:3000/";
    await page.goto(url, { waitUntil: "networkidle" });

    // Check horizontal scroll
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const innerWidth = await page.evaluate(() => window.innerWidth);
    console.log(`[VIEWPORT ${vp.name}] scrollWidth: ${scrollWidth}, innerWidth: ${innerWidth}`);

    // Take screenshot of hero viewport
    const screenshotPath = path.join(outputDir, `hero_${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`Saved screenshot: ${screenshotPath}`);

    await page.close();
  }

  await browser.close();
  console.log("Hero visual inspection screenshots captured successfully!");
}

captureHero().catch(err => {
  console.error("Hero capture error:", err);
  process.exit(1);
});
