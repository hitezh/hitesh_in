// Builds the downloadable PDFs in static/downloads/ from the HTML sources in
// lead-magnets/. Each source is an HTML fragment (see lead-magnets/README.md);
// this script wraps it in the print stylesheet, appends a standard closing
// page, and prints it to A4 with headless Chromium (Playwright).
//
// Usage: node .github/scripts/build-lead-magnets.cjs [name ...]
// The PDFs are committed, so this only needs to run after editing a source.
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const SRC = "lead-magnets";
const OUT = "static/downloads";
const css = fs.readFileSync(path.join(SRC, "_print.css"), "utf8");

const closing = `
<section class="about">
  <h2>About the author</h2>
  <p><strong>Dr. Hitesh Sarda</strong> is an AI advisor based in Hyderabad and the founder of 256 Technologies, an applied AI lab. He has spent more than 25 years building production software and now helps leadership teams decide what AI to build, buy or skip. He is the author of <em>Implementing AI Agents in Your Company</em> and writes at <a href="https://hitesh.in/">hitesh.in</a>.</p>
  <div class="cta">
    <p><strong>Want a second pair of eyes on what you filled in?</strong></p>
    <p>Bring this document to an advisory hour. We go through your answers, and you leave with the simplest next step, or an honest view that AI is not the answer yet.</p>
    <p><a href="https://hitesh.in/work-with-me/">hitesh.in/work-with-me</a> &nbsp;&middot;&nbsp; <a href="mailto:hitesh@256tec.com">hitesh@256tec.com</a></p>
  </div>
  <p style="margin-top:8mm;font-size:8.5pt;color:#8A827A">You are welcome to use and adapt this document inside your own organisation. Please do not republish or resell it.</p>
</section>`;

(async () => {
  const want = process.argv.slice(2);
  const names = fs.readdirSync(SRC)
    .filter((f) => f.endsWith(".html") && !f.startsWith("_"))
    .map((f) => f.replace(/\.html$/, ""))
    .filter((n) => want.length === 0 || want.includes(n));
  const browser = await chromium.launch();
  for (const name of names) {
    let body = fs.readFileSync(path.join(SRC, `${name}.html`), "utf8");
    const title = (body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, name])[1].replace(/<[^>]+>/g, "").trim();
    // Author line on the cover.
    body = body.replace(/(<section class="cover">[\s\S]*?)(<\/section>)/, `$1<p class="byline"><strong>Dr. Hitesh Sarda</strong><br>AI advisor, Hyderabad &nbsp;&middot;&nbsp; hitesh.in</p>$2`);
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${title} | Dr. Hitesh Sarda</title><meta name="author" content="Dr. Hitesh Sarda"><style>${css}</style></head><body>${body}${closing}</body></html>`;
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load" });
    await page.pdf({
      path: path.join(OUT, `${name}.pdf`),
      format: "A4",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: "<span></span>",
      footerTemplate: `<div style="width:100%;font-family:Inter,Arial,sans-serif;font-size:7.5pt;color:#8A827A;padding:0 18mm;display:flex;justify-content:space-between"><span>${title.replace(/&/g, "&amp;")} &middot; hitesh.in</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
      margin: { top: "20mm", bottom: "20mm", left: "18mm", right: "18mm" },
    });
    await page.close();
    console.log(`built ${OUT}/${name}.pdf`);
  }
  await browser.close();
})();
