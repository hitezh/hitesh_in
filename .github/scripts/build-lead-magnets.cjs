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
const { execFileSync } = require("node:child_process");

const SRC = "lead-magnets";
const OUT = "static/downloads";
const IMG = "static/images/resources";
const DATA = "data/lead_magnets.json";
const meta = {};
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


// Designed covers. The same HTML is the first page of each PDF and, rendered
// to a JPEG, the cover image on the site (static/images/resources/<name>.jpg).
const COVERS = {
  "ai-readiness-assessment": { bg: "#7A2E10", motif: "dots" },
  "ai-use-case-prioritization-matrix": { bg: "#21443B", motif: "matrix" },
  "ai-agent-governance-framework": { bg: "#1D2942", motif: "rings" },
  "ai-vendor-evaluation-checklist": { bg: "#3B2640", motif: "checks" },
};
const WARM = "#F2A47C";
const LINE = "rgba(255,255,255,0.55)";
const MOTIFS = {
  // Five areas, each scored 0, 1 or 2.
  dots: () => {
    const fill = [2, 1, 2, 0, 1];
    let g = "";
    fill.forEach((f, r) => {
      for (let c = 0; c < 3; c++) {
        const on = c < f + 1 && c <= f;
        g += `<circle cx="${60 + c * 64}" cy="${40 + r * 52}" r="18" fill="${c <= f ? (r === 2 ? WARM : "rgba(255,255,255,0.85)") : "none"}" stroke="${c <= f ? "none" : LINE}" stroke-width="3"/>`;
      }
      g += `<line x1="250" y1="${40 + r * 52}" x2="${290 + [120, 70, 150, 30, 90][r]}" y2="${40 + r * 52}" stroke="${LINE}" stroke-width="3" stroke-linecap="round"/>`;
    });
    return g;
  },
  // Value against feasibility, one idea standing out.
  matrix: () => `
    <line x1="40" y1="20" x2="40" y2="270" stroke="${LINE}" stroke-width="3"/>
    <line x1="40" y1="270" x2="440" y2="270" stroke="${LINE}" stroke-width="3"/>
    <line x1="240" y1="20" x2="240" y2="270" stroke="${LINE}" stroke-width="2" stroke-dasharray="6 8"/>
    <line x1="40" y1="145" x2="440" y2="145" stroke="${LINE}" stroke-width="2" stroke-dasharray="6 8"/>
    <circle cx="110" cy="210" r="16" fill="rgba(255,255,255,0.5)"/>
    <circle cx="170" cy="90" r="22" fill="rgba(255,255,255,0.5)"/>
    <circle cx="300" cy="215" r="13" fill="rgba(255,255,255,0.5)"/>
    <circle cx="390" cy="200" r="19" fill="rgba(255,255,255,0.5)"/>
    <circle cx="350" cy="72" r="34" fill="${WARM}"/>`,
  // Blast radius: what an agent can reach.
  rings: () => {
    let g = "";
    [130, 92, 54].forEach((r) => { g += `<circle cx="240" cy="145" r="${r}" fill="none" stroke="${LINE}" stroke-width="3"/>`; });
    [[240, 15], [370, 145], [148, 237], [174, 81], [332, 210], [278, 93]].forEach(([x, y]) => { g += `<circle cx="${x}" cy="${y}" r="9" fill="rgba(255,255,255,0.85)"/>`; });
    return g + `<circle cx="240" cy="145" r="22" fill="${WARM}"/>`;
  },
  // Three vendors, question by question.
  checks: () => {
    const marks = [[1, 1, 0], [1, 0, 1], [0, 1, 1], [1, 1, 0], [1, 0, 0]];
    let g = "";
    marks.forEach((row, r) => {
      const y = 22 + r * 52;
      g += `<line x1="20" y1="${y + 17}" x2="${110 + [60, 30, 80, 45, 20][r]}" y2="${y + 17}" stroke="${LINE}" stroke-width="3" stroke-linecap="round"/>`;
      row.forEach((on, c) => {
        const x = 230 + c * 76;
        const col = c === 0 ? WARM : "rgba(255,255,255,0.85)";
        g += `<rect x="${x}" y="${y}" width="34" height="34" rx="6" fill="none" stroke="${on ? col : LINE}" stroke-width="3"/>`;
        if (on) g += `<polyline points="${x + 8},${y + 18} ${x + 15},${y + 25} ${x + 27},${y + 10}" fill="none" stroke="${col}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
      });
    });
    return g;
  },
};
const esc = (t) => t.replace(/&(?!amp;)/g, "&amp;");
function coverHTML(name, kicker, h1) {
  const d = COVERS[name] || { bg: "#3A3330", motif: "dots" };
  const i = h1.indexOf(":");
  const head = i > 0 ? h1.slice(0, i) : h1;
  let tail = i > 0 ? h1.slice(i + 1).trim() : "";
  tail = tail.charAt(0).toUpperCase() + tail.slice(1);
  return `<section class="designed-cover" style="background:${d.bg}">
  <p class="dc-kicker">${esc(kicker)}</p>
  <svg class="dc-motif" viewBox="0 0 480 290" aria-hidden="true">${MOTIFS[d.motif]()}</svg>
  <div class="dc-titles"><h1 class="dc-title">${esc(head)}</h1>${tail ? `<p class="dc-tail">${esc(tail)}</p>` : ""}</div>
  <p class="dc-by"><span><strong>Dr. Hitesh Sarda</strong> &nbsp;&middot;&nbsp; AI advisor, Hyderabad</span><span>hitesh.in</span></p>
</section>`;
}
const coverCSS = `
@page :first { margin: 0; }
.designed-cover { width: 210mm; height: 297mm; margin: 0; padding: 26mm 22mm 20mm; color: #fff; display: flex; flex-direction: column; break-after: page; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.dc-kicker { font-family: Inter, Arial, sans-serif; font-size: 11pt; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: ${WARM}; margin: 0; }
.dc-motif { width: 128mm; height: auto; margin: 26mm 0 auto; }
.dc-titles { margin-top: 18mm; }
.dc-title { font-family: "Bitstream Charter", Charter, Georgia, serif; font-size: 44pt; line-height: 1.06; color: #fff; margin: 0 0 6mm; letter-spacing: -0.01em; border: 0; }
.dc-tail { font-family: "Bitstream Charter", Charter, Georgia, serif; font-size: 19pt; line-height: 1.3; color: rgba(255,255,255,0.82); margin: 0; max-width: 150mm; }
.dc-by { display: flex; justify-content: space-between; margin: 22mm 0 0; padding-top: 5mm; border-top: 0.75pt solid rgba(255,255,255,0.35); font-family: Inter, Arial, sans-serif; font-size: 10.5pt; color: rgba(255,255,255,0.8); }
.dc-by strong { color: #fff; }`;

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
    // Replace the plain cover with the designed one; keep its subtitle as an
    // introduction at the top of page two.
    const kicker = (body.match(/<p class="kicker">([\s\S]*?)<\/p>/) || [, ""])[1].trim();
    const sub = (body.match(/<p class="sub">([\s\S]*?)<\/p>/) || [, ""])[1].trim();
    const cover = coverHTML(name, kicker, title);
    body = body.replace(/<section class="cover">[\s\S]*?<\/section>/, `${cover}${sub ? `<p class="lede">${sub}</p>` : ""}`);
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${title} | Dr. Hitesh Sarda</title><meta name="author" content="Dr. Hitesh Sarda"><style>${css}${coverCSS}</style></head><body>${body}${closing}</body></html>`;
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
    // Cover image for the site.
    const shot = await browser.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 1 });
    await shot.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>body{margin:0}${css}${coverCSS}</style></head><body>${cover}</body></html>`, { waitUntil: "load" });
    fs.mkdirSync(IMG, { recursive: true });
    await shot.locator(".designed-cover").screenshot({ path: path.join(IMG, `${name}.jpg`), type: "jpeg", quality: 84 });
    await shot.close();
    await page.close();
    const pdfPath = path.join(OUT, `${name}.pdf`);
    meta[name] = { pages: (fs.readFileSync(pdfPath, "latin1").match(/\/Type\s*\/Page(?!s)/g) || []).length };
    // Inside pages for the landing page preview, if poppler is installed.
    try {
      execFileSync("pdftoppm", ["-f", "2", "-l", "3", "-r", "56", "-jpeg", "-jpegopt", "quality=82", pdfPath, path.join(IMG, `${name}-page`)]);
    } catch (e) { console.warn(`  (no page previews for ${name}: ${e.message})`); }
    console.log(`built ${pdfPath} (${meta[name].pages} pages) and ${IMG}/${name}.jpg`);
  }
  await browser.close();
  fs.mkdirSync("data", { recursive: true });
  const all = fs.existsSync(DATA) ? JSON.parse(fs.readFileSync(DATA, "utf8")) : {};
  fs.writeFileSync(DATA, JSON.stringify({ ...all, ...meta }, null, 2) + "\n");
})();
