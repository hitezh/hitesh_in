// Rasterize blog cover/slide SVGs to PNG siblings for social sharing.
//
// Social platforms (LinkedIn, Twitter/X, Facebook, Slack) don't render SVG, so
// every `cover.svg` (and, for a LinkedIn carousel, each `slide-N.svg`) needs a
// raster PNG sibling. Authors only draw the SVG; this script produces the PNG.
// It is run automatically in CI by .github/workflows/cover-image.yml whenever
// a cover.svg or slide-N.svg changes, and can be run by hand locally.
//
// Usage:
//   node .github/scripts/rasterize-cover.mjs                 # covers/slides whose PNG is missing
//   node .github/scripts/rasterize-cover.mjs --all           # force-regenerate every one
//   node .github/scripts/rasterize-cover.mjs path/to/cover.svg [more.svg ...]  # exactly these
//
// The default renders only files with no PNG yet, so it never churns existing
// rasters. To re-render after editing an SVG, pass that file explicitly (CI does
// this for the files changed in a push) or use --all.
//
// Each SVG's own `width`/`height` attributes set its render size (falling back
// to 1200x630, the Open Graph card size, if absent) — so `cover.svg` keeps its
// usual 1200x630 frame while a `slide-N.svg` can declare a different aspect
// ratio (e.g. a 4:5 portrait card for a LinkedIn carousel) simply by setting
// its own width/height. Rendering goes through headless Chromium (Playwright)
// so the font stack and layout match how a browser would show the SVG.
//
// Chromium resolution: honours PLAYWRIGHT_BROWSERS_PATH (set in the managed dev
// environment and installed in CI). Playwright itself may be a local or a global
// module; we resolve it from NODE_PATH-independent locations before importing.

import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const DEFAULT_WIDTH = 1200;
const DEFAULT_HEIGHT = 630;
const REPO_ROOT = resolve(dirname(new URL(import.meta.url).pathname), "..", "..");

// Locate the SVG covers/slides to (re)render.
function coversFromGit() {
  try {
    return execSync(
      'git -c core.quotepath=false ls-files "content/blog/**/images/cover.svg" "content/blog/**/images/slide-*.svg"',
      { cwd: REPO_ROOT, encoding: "utf8" },
    )
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

// Read the render size from the SVG's own width/height attributes, falling
// back to the OG card size if either is missing or unparseable.
function readSvgDims(svgPath) {
  const svg = readFileSync(svgPath, "utf8");
  const tag = svg.match(/<svg\b[^>]*>/)?.[0] || "";
  const w = tag.match(/\bwidth="(\d+(?:\.\d+)?)"/);
  const h = tag.match(/\bheight="(\d+(?:\.\d+)?)"/);
  return {
    width: w ? Math.round(parseFloat(w[1])) : DEFAULT_WIDTH,
    height: h ? Math.round(parseFloat(h[1])) : DEFAULT_HEIGHT,
  };
}

function pngMissing(svgPath) {
  return !existsSync(svgPath.replace(/\.svg$/i, ".png"));
}

function selectTargets(argv) {
  const args = argv.filter((a) => a !== "--all");
  const forceAll = argv.includes("--all");
  // Explicit paths win: render exactly those (used by CI for changed covers).
  if (args.length) return args.map((p) => resolve(REPO_ROOT, p));
  const all = coversFromGit().map((p) => resolve(REPO_ROOT, p));
  // Default renders only missing PNGs so it never rewrites existing rasters.
  return forceAll ? all : all.filter(pngMissing);
}

// Import Playwright whether it is installed locally (node_modules) or globally
// (as in the managed environment / CI after `npm i -g playwright`).
async function loadChromium() {
  const require = createRequire(import.meta.url);
  const candidates = [
    "playwright",
    "playwright-core",
    join(execSync("npm root -g", { encoding: "utf8" }).trim(), "playwright"),
    join(execSync("npm root -g", { encoding: "utf8" }).trim(), "playwright-core"),
  ];
  for (const c of candidates) {
    try {
      const mod = await import(pathToFileURL(require.resolve(c)).href);
      // Playwright is CommonJS: under an ESM import its API is on `.default`.
      const chromium = mod.chromium || mod.default?.chromium;
      if (chromium) return chromium;
    } catch {
      // try next candidate
    }
  }
  throw new Error(
    "Could not load Playwright. Install it with `npm i -g playwright` (or `npm i playwright`) " +
      "and ensure a Chromium build is available (PLAYWRIGHT_BROWSERS_PATH or `npx playwright install chromium`).",
  );
}

async function main() {
  const targets = selectTargets(process.argv.slice(2));
  if (targets.length === 0) {
    console.log("All cover PNGs are up to date; nothing to render.");
    return;
  }

  const chromium = await loadChromium();
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ deviceScaleFactor: 1 });
    for (const svgPath of targets) {
      if (!existsSync(svgPath)) {
        console.warn(`Skipping missing file: ${svgPath}`);
        continue;
      }
      const pngPath = svgPath.replace(/\.svg$/i, ".png");
      const svg = readFileSync(svgPath, "utf8");
      const { width, height } = readSvgDims(svgPath);
      await page.setViewportSize({ width, height });
      // Load the SVG as a full-bleed document so it fills the frame.
      const html = `<!doctype html><meta charset="utf-8">
<style>html,body{margin:0;padding:0}svg{display:block;width:${width}px;height:${height}px}</style>
${svg}`;
      await page.setContent(html, { waitUntil: "networkidle" });
      await page.screenshot({ path: pngPath, clip: { x: 0, y: 0, width, height } });
      console.log(`Rendered ${pngPath.replace(REPO_ROOT + "/", "")} (${width}x${height})`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
