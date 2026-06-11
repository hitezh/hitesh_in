// Announce newly published blog posts on LinkedIn.
//
// Invoked by .github/workflows/linkedin-announce.yml. Given a git commit range,
// it finds blog posts that were newly published in that range, composes a short
// blurb from each post's front matter, and shares it via the LinkedIn Posts API.
//
// "Newly published" means either:
//   - a brand-new content/blog/**/index.md that is not a draft, or
//   - an existing post whose front matter flipped from draft:true to draft:false.
// Ordinary edits to an already-published post are ignored, so re-running on a
// fix-up commit will not re-announce.
//
// Requires no npm dependencies — relies on Node 20+ global fetch and git.
//
// Behaviour without credentials: if LINKEDIN_ACCESS_TOKEN / LINKEDIN_AUTHOR_URN
// are absent (or DRY_RUN=true), it prints what it *would* post and exits 0.

import { execSync } from "node:child_process";

const SITE = (process.env.SITE_BASE_URL || "https://hitesh.in").replace(/\/$/, "");
const TOKEN = process.env.LINKEDIN_ACCESS_TOKEN;
const AUTHOR = process.env.LINKEDIN_AUTHOR_URN; // e.g. urn:li:person:abc123
const API_VERSION = process.env.LINKEDIN_API_VERSION || "202506"; // YYYYMM, bump as LinkedIn deprecates
const INCLUDE_HASHTAGS = process.env.INCLUDE_HASHTAGS !== "false";
const BEFORE = process.env.GIT_BEFORE || "";
const AFTER = process.env.GIT_AFTER || "HEAD";
const ZERO = "0000000000000000000000000000000000000000";
const DRY_RUN = process.env.DRY_RUN === "true" || !TOKEN || !AUTHOR;

function git(args) {
  return execSync(`git ${args}`, { encoding: "utf8" });
}

// Files that changed in the range, with their status (A = added, M = modified).
function changedPosts() {
  const range = !BEFORE || BEFORE === ZERO ? `${AFTER}^!` : `${BEFORE}..${AFTER}`;
  let out = "";
  try {
    out = git(`diff --name-status --diff-filter=AM ${range} -- "content/blog/**/index.md"`);
  } catch {
    // First commit in repo, or BEFORE not present locally: fall back to this commit only.
    try {
      out = git(`show --name-status --diff-filter=AM --format= ${AFTER} -- "content/blog/**/index.md"`);
    } catch {
      out = "";
    }
  }
  return out
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const [status, ...rest] = l.split(/\s+/);
      return { status: status[0], path: rest.join(" ") };
    });
}

// Minimal front-matter reader for the handful of fields we need.
function parseFrontMatter(text) {
  const m = text.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!m) return null;
  const block = m[1];
  const lines = block.split("\n");

  const scalar = (key) => {
    const hit = block.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
    if (!hit) return undefined;
    return hit[1].trim().replace(/^["']|["']$/g, "");
  };

  const list = (key) => {
    const out = [];
    let inBlock = false;
    for (const raw of lines) {
      if (new RegExp(`^${key}:\\s*$`).test(raw)) {
        inBlock = true;
        continue;
      }
      if (inBlock) {
        const item = raw.match(/^\s+-\s*(.+)$/);
        if (item) out.push(item[1].trim().replace(/^["']|["']$/g, ""));
        else if (raw.trim() !== "") break; // next key
      }
    }
    return out;
  };

  return {
    title: scalar("title"),
    description: scalar("description"),
    draft: (scalar("draft") || "false").toLowerCase() === "true",
    tags: list("tags"),
  };
}

function fileAt(rev, path) {
  try {
    return git(`show ${rev}:"${path}"`);
  } catch {
    return null;
  }
}

// content/blog/2026/<slug>/index.md -> https://site/2026/<slug>/  (permalink :year/:slug)
function urlForPost(path) {
  const parts = path.split("/");
  const year = parts[2];
  const slug = parts[3];
  return `${SITE}/${year}/${slug}/`;
}

function toHashtag(tag) {
  const pascal = tag
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
  return pascal ? `#${pascal}` : "";
}

function composeCommentary(fm, url) {
  const lines = [fm.title];
  if (fm.description) lines.push("", fm.description);
  lines.push("", `Read more: ${url}`);
  if (INCLUDE_HASHTAGS && fm.tags?.length) {
    const tags = fm.tags.slice(0, 3).map(toHashtag).filter(Boolean).join(" ");
    if (tags) lines.push("", tags);
  }
  return lines.join("\n");
}

async function postToLinkedIn(commentary) {
  const body = {
    author: AUTHOR,
    commentary,
    visibility: "PUBLIC",
    distribution: {
      feedDistribution: "MAIN_FEED",
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },
    lifecycleState: "PUBLISHED",
    isReshareDisabledByAuthor: false,
  };

  const res = await fetch("https://api.linkedin.com/rest/posts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0",
      "LinkedIn-Version": API_VERSION,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`LinkedIn API ${res.status}: ${detail}`);
  }
  return res.headers.get("x-restli-id") || "(posted)";
}

async function main() {
  const changes = changedPosts();
  if (changes.length === 0) {
    console.log("No added or modified blog posts in this range. Nothing to announce.");
    return;
  }

  const toAnnounce = [];
  for (const { status, path } of changes) {
    const current = fileAt(AFTER, path);
    if (!current) continue;
    const fm = parseFrontMatter(current);
    if (!fm || !fm.title) {
      console.log(`Skipping ${path}: no usable front matter.`);
      continue;
    }
    if (fm.draft) {
      console.log(`Skipping ${path}: still a draft.`);
      continue;
    }
    if (status === "M") {
      // Only announce a modification if it represents a draft -> published flip.
      const prev = BEFORE && BEFORE !== ZERO ? fileAt(BEFORE, path) : null;
      const prevFm = prev ? parseFrontMatter(prev) : null;
      const wasDraft = prevFm ? prevFm.draft : false;
      if (!wasDraft) {
        console.log(`Skipping ${path}: already published, ordinary edit.`);
        continue;
      }
      console.log(`${path}: draft -> published.`);
    } else {
      console.log(`${path}: newly added, published.`);
    }
    toAnnounce.push({ path, fm });
  }

  if (toAnnounce.length === 0) {
    console.log("No newly published posts to announce.");
    return;
  }

  let failures = 0;
  for (const { path, fm } of toAnnounce) {
    const url = urlForPost(path);
    const commentary = composeCommentary(fm, url);
    console.log("\n--- Post ---\n" + commentary + "\n------------");
    if (DRY_RUN) {
      console.log(`[dry-run] Would announce ${url} (set LINKEDIN_ACCESS_TOKEN + LINKEDIN_AUTHOR_URN to go live).`);
      continue;
    }
    try {
      const id = await postToLinkedIn(commentary);
      console.log(`Announced ${url} -> ${id}`);
    } catch (err) {
      failures += 1;
      console.error(`Failed to announce ${url}: ${err.message}`);
    }
  }

  if (failures > 0) {
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
