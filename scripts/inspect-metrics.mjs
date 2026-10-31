import { chromium } from "playwright";

async function inspectLayout() {
  const browser = await chromium.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1680, height: 927 });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

  const metrics = await page.evaluate(() => {
    const header = document.querySelector("header")?.getBoundingClientRect();
    const heroH1 = document.querySelector("h1")?.getBoundingClientRect();
    const ide = document.querySelector(".bg-\\[\\#0d0e0f\\]")?.getBoundingClientRect();
    const statusPanel = document.querySelectorAll(".bg-\\[\\#0d0e0f\\]")[1]?.getBoundingClientRect();
    return {
      headerHeight: header?.height,
      nameTop: heroH1?.top,
      nameHeight: heroH1?.height,
      ideTop: ide?.top,
      ideWidth: ide?.width,
      ideHeight: ide?.height,
      statusPanelWidth: statusPanel?.width,
      windowInnerHeight: window.innerHeight,
    };
  });

  console.log("Layout metrics at 1680x927:", metrics);
  await browser.close();
}

inspectLayout().catch(console.error);
