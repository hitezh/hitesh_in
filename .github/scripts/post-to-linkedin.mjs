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
// Behaviour without credentials: if LINKEDIN_ACCESS_TOKEN is absent (or
// DRY_RUN=true), it prints what it *would* post and exits 0. The author URN is
// derived from the token when LINKEDIN_AUTHOR_URN is not set.
//
// Env values are trimmed, since secrets pasted into a CI UI commonly pick up a
// trailing newline that would otherwise corrupt the Authorization header.

import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const SITE = (process.env.SITE_BASE_URL || "https://hitesh.in").trim().replace(/\/$/, "");
const TOKEN = (process.env.LINKEDIN_ACCESS_TOKEN || "").trim();
let AUTHOR = (process.env.LINKEDIN_AUTHOR_URN || "").trim(); // e.g. urn:li:person:abc123
const API_VERSION = (process.env.LINKEDIN_API_VERSION || "202506").trim(); // YYYYMM, bump as LinkedIn deprecates
const INCLUDE_HASHTAGS = process.env.INCLUDE_HASHTAGS !== "false";
const BEFORE = (process.env.GIT_BEFORE || "").trim();
const AFTER = (process.env.GIT_AFTER || "HEAD").trim();
const ZERO = "0000000000000000000000000000000000000000";
const DRY_RUN = process.env.DRY_RUN === "true" || !TOKEN;

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

// Newest published post in the working tree — used to give dry-runs something
// concrete to preview when no posts changed in the commit range.
function latestPublishedPost() {
  let files = [];
  try {
    files = git(`ls-files "content/blog/**/index.md"`)
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
  } catch {
    return null;
  }
  let best = null;
  for (const path of files) {
    let text;
    try {
      text = readFileSync(path, "utf8");
    } catch {
      continue;
    }
    const fm = parseFrontMatter(text);
    if (!fm || !fm.title || fm.draft || !fm.date) continue;
    const t = Date.parse(fm.date);
    if (Number.isNaN(t)) continue;
    if (!best || t > best.t) best = { path, fm, t };
  }
  return best;
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
    date: scalar("date"),
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
    if (tags) lines.push("#Blog ", tags);
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
    let hint = "";
    if (res.status === 401) {
      hint =
        "\n  → The access token is invalid, expired, or not a w_member_social member token. " +
        "Re-mint it and update the LINKEDIN_ACCESS_TOKEN secret (no trailing spaces/newline). " +
        "A common mistake is pasting the OAuth authorization code instead of the exchanged access token. " +
        'Verify with: curl -H "Authorization: Bearer $TOKEN" https://api.linkedin.com/v2/userinfo';
    } else if (res.status === 403) {
      hint =
        "\n  → The token lacks the w_member_social scope, or the author URN is not this token's member.";
    }
    throw new Error(`LinkedIn API ${res.status}: ${detail}${hint}`);
  }
  return res.headers.get("x-restli-id") || "(posted)";
}

// Validate the token before attempting to post, and derive the author URN when
// possible. Throws (fail fast) only when the token is definitively invalid.
async function preflight() {
  console.log(`Access token present (${TOKEN.length} chars); author URN: ${AUTHOR || "(to be derived)"}.`);

  let res;
  try {
    res = await fetch("https://api.linkedin.com/v2/userinfo", {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
  } catch (err) {
    console.warn(`Could not reach LinkedIn userinfo (${err.message}); proceeding to post anyway.`);
    return;
  }

  if (res.status === 401) {
    throw new Error(
      "LinkedIn rejected the access token (401 INVALID_ACCESS_TOKEN). It is invalid, expired, or " +
        "not a member token. Mint a fresh token with the w_member_social scope and update the " +
        "LINKEDIN_ACCESS_TOKEN secret (paste it with no trailing spaces/newline). Verify locally with:\n" +
        '  curl -H "Authorization: Bearer $TOKEN" https://api.linkedin.com/v2/userinfo',
    );
  }

  if (res.ok) {
    const me = await res.json();
    const derived = me.sub ? `urn:li:person:${me.sub}` : "";
    if (derived && !AUTHOR) {
      AUTHOR = derived;
      console.log(`Token valid. Derived author URN: ${AUTHOR}`);
    } else if (derived && AUTHOR !== derived) {
      console.warn(`Provided LINKEDIN_AUTHOR_URN (${AUTHOR}) does not match the token's member (${derived}); using the token's member.`);
      AUTHOR = derived;
    } else {
      console.log("Token valid; author URN confirmed.");
    }
    return;
  }

  // Other statuses (e.g. 403 when the openid/profile scope is absent): we cannot
  // validate here, but the token may still be usable for posting.
  console.warn(`userinfo returned ${res.status}; skipping validation.`);
  if (!AUTHOR) {
    throw new Error(
      "Could not derive the author URN and LINKEDIN_AUTHOR_URN is not set. " +
        "Set it to urn:li:person:<your-id>.",
    );
  }
}

async function main() {
  // Validate the token against the LinkedIn API up front whenever one is present.
  // This is a read-only call (/v2/userinfo) — it never posts — so it also runs in
  // dry-run, letting you exercise the API path safely.
  if (TOKEN) {
    try {
      await preflight();
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  } else {
    console.log("No LINKEDIN_ACCESS_TOKEN set — running fully offline (no API calls, no posting).");
  }

  const changes = changedPosts();
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
    if (DRY_RUN) {
      const latest = latestPublishedPost();
      if (latest) {
        console.log("\nNo posts changed in this range; previewing the latest published post:");
        toAnnounce.push({ path: latest.path, fm: latest.fm });
      } else {
        console.log("No posts changed and no published post found to preview.");
        return;
      }
    } else {
      console.log("No newly published posts to announce.");
      return;
    }
  }

  let failures = 0;
  for (const { path, fm } of toAnnounce) {
    const url = urlForPost(path);
    const commentary = composeCommentary(fm, url);
    console.log("\n--- Post ---\n" + commentary + "\n------------");
    if (DRY_RUN) {
      console.log(`[dry-run] Would announce ${url} — not posting.`);
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
