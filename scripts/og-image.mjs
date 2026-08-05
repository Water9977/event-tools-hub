// Regenerates public/og-image.png (1200x630) via local Playwright.
// Deliberately NO stats baked in (tool count, guest numbers, etc) — matches
// the sibling eventrentalcosts.com site's own og-image.mjs, which learned
// this the hard way (a prior version baked in "85+ companies, 6 metros"
// and silently went stale as the site grew).
// Run: node scripts/og-image.mjs   (from project root)
import { chromium } from 'playwright';

const html = `<!doctype html><html><head><style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #fbfaf8;
    display: flex; flex-direction: column; justify-content: center;
    padding: 80px;
    border-bottom: 14px solid #b5502f;
  }
  .brand { font-size: 34px; font-weight: 800; color: #1f1b16; margin-bottom: 36px; }
  .brand span { color: #6b6257; font-weight: 500; }
  h1 { font-size: 66px; line-height: 1.1; color: #1f1b16; font-weight: 800; max-width: 980px; }
  h1 em { color: #b5502f; font-style: normal; }
  .sub { margin-top: 28px; font-size: 30px; color: #6b6257; max-width: 900px; line-height: 1.35; }
</style></head><body>
  <div class="brand">Event<span>Tools</span></div>
  <h1>Plan your event with <em>real numbers</em></h1>
  <div class="sub">Free calculators and planners for parties, weddings &amp; events — no signup, runs in your browser.</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.screenshot({ path: 'public/og-image.png' });
await browser.close();
console.log('og-image.png regenerated (1200x630, no stats to go stale)');
