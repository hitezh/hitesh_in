#!/usr/bin/env node
// Warns (never fails) when a pull request publishes a post that would make the
// blog look machine-produced: posts bunched too close together, or a title in
// the "X didn't... Y did." reframe shape that AGENTS.md calls the biggest AI tell.
// See AGENTS.md, "Rhythm and titles". Usage: BASE=<sha> node check-post-rhythm.mjs
import { execSync } from "node:child_process";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const MIN_GAP_DAYS = 3; // no two published posts closer than this
const MAX_PER_WEEK = 2; // published posts in any 7-day window
const BASE = process.env.BASE || "origin/master";

const git = (cmd) => execSync(`git ${cmd}`, { encoding: "utf8" });

function frontMatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const get = (k) => {
    const r = m[1].match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, "m"));
    return r ? r[1] : "";
  };
  return { title: get("title"), date: get("date").slice(0, 10), draft: get("draft") === "true" };
}

function fileAt(rev, path) {
  try { return git(`show ${rev}:${path}`); } catch { return null; }
}

// Titles that set something up only to knock it down, or split into a
// two-sentence setup and payoff.
function formulaReasons(title) {
  const reasons = [];
  const sentences = title.split(/(?<=[.?!])\s+/).filter(Boolean);
  const negation = /\b(?:\w+n't|not|never|no longer)\b/i;
  if (sentences.length >= 2 && negation.test(sentences[0])) reasons.push("negate-then-reframe across two sentences");
  else if (sentences.length >= 2) reasons.push("two-sentence setup and payoff");
  if (/,\s*not\s+/i.test(title)) reasons.push('"X, not Y" contrast');
  if (/\bthat (?:wasn't|isn't)$/i.test(title.replace(/[.?!"']+$/, ""))) reasons.push('"the X that wasn\'t" shape');
  return reasons;
}

const days = (a, b) => Math.abs(Date.parse(a) - Date.parse(b)) / 86400000;

// All published posts at HEAD.
const published = [];
for (const year of readdirSync("content/blog")) {
  const dir = join("content/blog", year);
  if (!/^\d{4}$/.test(year)) continue;
  for (const slug of readdirSync(dir)) {
    const p = join(dir, slug, "index.md");
    if (!existsSync(p)) continue;
    const fm = frontMatter(readFileSync(p, "utf8"));
    if (fm && !fm.draft && fm.date) published.push({ path: p, ...fm });
  }
}

const changed = git(`diff --name-status --diff-filter=AM ${BASE}...HEAD -- "content/blog/**/index.md"`)
  .trim().split("\n").filter(Boolean).map((l) => l.split(/\s+/));

let warnings = 0;
const warn = (file, msg) => { warnings++; console.log(`::warning file=${file}::${msg}`); };

for (const [status, path] of changed) {
  const now = frontMatter(readFileSync(path, "utf8"));
  if (!now || now.draft) continue;
  if (status === "M") {
    const before = frontMatter(fileAt(BASE, path) || "");
    if (before && !before.draft) continue; // ordinary edit of a published post
  }
  // Newly published in this PR.
  const others = published.filter((p) => p.path !== path);
  const close = others.filter((p) => days(p.date, now.date) < MIN_GAP_DAYS);
  if (close.length) {
    warn(path, `Published within ${MIN_GAP_DAYS} days of: ${close.map((p) => `"${p.title}" (${p.date})`).join(", ")}. Space posts out; see AGENTS.md "Rhythm and titles".`);
  }
  const week = others.filter((p) => Date.parse(p.date) <= Date.parse(now.date) && days(p.date, now.date) < 7);
  if (week.length + 1 > MAX_PER_WEEK) {
    warn(path, `${week.length + 1} posts in the 7 days ending ${now.date}; the house rhythm is at most ${MAX_PER_WEEK} a week.`);
  }
  const reasons = formulaReasons(now.title);
  if (reasons.length) {
    warn(path, `Title "${now.title}" uses a formula shape (${reasons.join("; ")}). State the claim plainly; see AGENTS.md "Rhythm and titles".`);
  }
}

console.log(warnings ? `${warnings} warning(s). These are advisory and do not block the merge.` : "Post rhythm and titles look fine.");
