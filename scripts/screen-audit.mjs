import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const viewports = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "laptop-1280", width: 1280, height: 800 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "small-mobile-360", width: 360, height: 740 },
];

const routes = [
  { path: "/", name: "home" },
  { path: "/work/agentmesh", name: "work-agentmesh" },
  { path: "/work/brain-tumor-ai", name: "work-brain-tumor-ai" },
  { path: "/work/aegis", name: "work-aegis" },
  { path: "/work/smartedge", name: "work-smartedge" },
  { path: "/work/review-radar", name: "work-review-radar" },
  { path: "/work/software-quality-analyser", name: "work-software-quality" },
  { path: "/work/learnmate", name: "work-learnmate" },
  { path: "/work/quantumcrypt", name: "work-quantumcrypt" },
  { path: "/work/career-guidance", name: "work-career-guidance" },
];

async function runAudit() {
  const outputDir = path.join(process.cwd(), "docs", "screening");
  fs.mkdirSync(outputDir, { recursive: true });

  console.log("Launching system Google Chrome...");
  const browser = await chromium.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
  });
  const context = await browser.newContext();

  for (const vp of viewports) {
    const page = await context.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });

    for (const route of routes) {
      const url = `http://localhost:3000${route.path}`;
      
      const response = await page.goto(url, { waitUntil: "networkidle" });
      if (!response || response.status() !== 200) {
        console.error(`FAILED: ${url} returned ${response ? response.status() : "no response"}`);
      }

      // Check for horizontal overflow
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const innerWidth = await page.evaluate(() => window.innerWidth);
      if (scrollWidth > innerWidth) {
        console.warn(`[OVERFLOW DETECTED] ${route.name} at ${vp.name}: scrollWidth=${scrollWidth} > innerWidth=${innerWidth}`);
      } else {
        console.log(`[PASS] ${route.name} @ ${vp.name} (Status: ${response.status()})`);
      }

      const screenshotPath = path.join(outputDir, `${route.name}_${vp.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: false });
    }
    await page.close();
  }

  await browser.close();
  console.log("Comprehensive visual screening complete across all 10 routes and 5 viewports!");
}

runAudit().catch(err => {
  console.error("Audit error:", err);
  process.exit(1);
});
