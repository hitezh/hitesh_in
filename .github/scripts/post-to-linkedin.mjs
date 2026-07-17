// Announce newly published blog posts on LinkedIn.
//
// Invoked by .github/workflows/linkedin-announce.yml. Given a git commit range,
// it finds blog posts that were newly published in that range, composes a short
// blurb from each post's front matter, and shares it via the LinkedIn Posts API:
// the post carries the article's featured image, and the link to the article is
// posted as the first comment (keeping the post body link-free, which reads
// better and avoids LinkedIn's reach penalty on in-body outbound links).
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
import { readFileSync, existsSync } from "node:fs";
import { basename, dirname, extname, join } from "node:path";

const SITE = (process.env.SITE_BASE_URL || "https://hitesh.in").trim().replace(/\/$/, "");
const TOKEN = (process.env.LINKEDIN_ACCESS_TOKEN || "").trim();
let AUTHOR = (process.env.LINKEDIN_AUTHOR_URN || "").trim(); // e.g. urn:li:person:abc123
const API_VERSION = (process.env.LINKEDIN_API_VERSION || "202605").trim(); // YYYYMM, bump as LinkedIn deprecates
const INCLUDE_HASHTAGS = process.env.INCLUDE_HASHTAGS !== "false";
// Attach the post's featured image, and move the article link into the first
// comment (keeps the post body link-free). Both default on; set either env var
// to "false" to opt out (e.g. LINK_IN_COMMENT=false keeps the link in the body).
const POST_IMAGE = process.env.POST_IMAGE !== "false";
const LINK_IN_COMMENT = process.env.LINK_IN_COMMENT !== "false";
const DEFAULT_IMAGE = "static/images/default.jpg"; // raster fallback, mirrors head.html
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
    slug: scalar("slug"),
    draft: (scalar("draft") || "false").toLowerCase() === "true",
    tags: list("tags"),
    image: scalar("image"),
  };
}

function fileAt(rev, path) {
  try {
    return git(`show ${rev}:"${path}"`);
  } catch {
    return null;
  }
}

// content/blog/2026/<dir>/index.md -> https://site/2026/<slug>/  (permalink :year/:slug)
// Prefer the front-matter `slug`, since that is what Hugo uses for the URL when
// it is set; fall back to the directory name only when no slug is declared.
function urlForPost(path, fm) {
  const parts = path.split("/");
  const year = parts[2];
  const slug = fm && fm.slug ? fm.slug : parts[3];
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

function composeCommentary(fm) {
  const lines = [fm.title];
  if (fm.description) lines.push("", fm.description);
  if (INCLUDE_HASHTAGS && fm.tags?.length) {
    const tags = fm.tags.slice(0, 3).map(toHashtag).filter(Boolean).join(" ");
    if (tags) lines.push("", `#Blog ${tags}`);
  }
  return lines.join("\n");
}

// Common headers for the versioned (/rest) LinkedIn API.
function restliHeaders() {
  return {
    Authorization: `Bearer ${TOKEN}`,
    "X-Restli-Protocol-Version": "2.0.0",
    "LinkedIn-Version": API_VERSION,
  };
}

const RASTER_EXT = new Set([".jpg", ".jpeg", ".png", ".gif"]);

function mimeForImage(p) {
  const e = extname(p).toLowerCase();
  if (e === ".png") return "image/png";
  if (e === ".gif") return "image/gif";
  return "image/jpeg";
}

// Resolve a post's featured image to a raster file LinkedIn will accept
// (JPG/PNG/GIF). Mirrors the OG-image rule in
// themes/hitesh/layouts/partials/head.html: an SVG is swapped for its .png
// (then .jpg) sibling, and anything unresolved falls back to
// static/images/default.jpg. Paths are relative to the repo root, which is the
// CI working directory. Returns a path or null.
function resolveRasterImage(postPath, imageField) {
  const bundleDir = dirname(postPath);
  const candidates = [];
  if (imageField) {
    const img = imageField.trim();
    if (/\.svg$/i.test(img)) {
      candidates.push(img.replace(/\.svg$/i, ".png"), img.replace(/\.svg$/i, ".jpg"));
    } else {
      candidates.push(img);
    }
  }
  for (const rel of candidates) {
    // Bundle-relative (images/x.png) or site-absolute (/images/x.png -> static/).
    const abs = rel.startsWith("/") ? join("static", rel.slice(1)) : join(bundleDir, rel);
    if (RASTER_EXT.has(extname(abs).toLowerCase()) && existsSync(abs)) return abs;
  }
  return existsSync(DEFAULT_IMAGE) ? DEFAULT_IMAGE : null;
}

// Upload an image via the Images API (initializeUpload -> upload the bytes) and
// return its urn:li:image URN, or null on any failure — in which case the post
// still goes out, just without an image.
async function uploadImage(absPath, owner) {
  let initRes;
  try {
    initRes = await fetch("https://api.linkedin.com/rest/images?action=initializeUpload", {
      method: "POST",
      headers: { ...restliHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({ initializeUploadRequest: { owner } }),
    });
  } catch (err) {
    console.warn(`Image initializeUpload could not be reached (${err.message}); posting without an image.`);
    return null;
  }
  if (!initRes.ok) {
    console.warn(`Image initializeUpload failed (${initRes.status}): ${await initRes.text()}`);
    return null;
  }
  const init = await initRes.json();
  const uploadUrl = init?.value?.uploadUrl;
  const imageUrn = init?.value?.image;
  if (!uploadUrl || !imageUrn) {
    console.warn("Image initializeUpload returned no uploadUrl/urn; posting without an image.");
    return null;
  }

  const bytes = readFileSync(absPath);
  const contentType = mimeForImage(absPath);
  // The upload endpoint has accepted both PUT and POST across API versions; try
  // PUT, then fall back to POST before giving up.
  for (const method of ["PUT", "POST"]) {
    let up;
    try {
      up = await fetch(uploadUrl, {
        method,
        headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": contentType },
        body: bytes,
      });
    } catch (err) {
      console.warn(`Image byte upload (${method}) errored: ${err.message}`);
      continue;
    }
    if (up.ok) {
      console.log(`Uploaded image ${basename(absPath)} -> ${imageUrn}`);
      return imageUrn;
    }
    console.warn(`Image byte upload (${method}) failed (${up.status}): ${await up.text()}`);
  }
  return null;
}

// Post the article link as the first comment on the freshly created post. Never
// throws: a comment failure (e.g. a scope gap) is logged but does not fail the
// run, since the post itself already published. Tries the raw post URN in the
// path first, then a URL-encoded form if that looks like a path-parse error.
async function commentWithLink(postUrn, actor, url) {
  const body = JSON.stringify({ actor, object: postUrn, message: { text: `Read more: ${url}` } });
  let lastStatus = 0;
  let lastDetail = "";
  for (const target of [postUrn, encodeURIComponent(postUrn)]) {
    let res;
    try {
      res = await fetch(`https://api.linkedin.com/rest/socialActions/${target}/comments`, {
        method: "POST",
        headers: { ...restliHeaders(), "Content-Type": "application/json" },
        body,
      });
    } catch (err) {
      console.warn(`Could not reach the comments endpoint (${err.message}); the post published fine.`);
      return false;
    }
    if (res.ok) {
      console.log(`Added link comment on ${postUrn}`);
      return true;
    }
    lastStatus = res.status;
    lastDetail = await res.text();
    // Only a path-parse-type failure is worth retrying with a different encoding.
    if (res.status !== 400 && res.status !== 404) break;
  }
  const hint =
    lastStatus === 403
      ? "\n  → Creating comments via the API requires LinkedIn's Community Management API, which is " +
        "partner-gated (w_member_social alone cannot create comments). The post and image still " +
        "published. Either request Community Management API access for the app, or set " +
        "LINK_IN_COMMENT=false to put the link in the post body instead."
      : "";
  console.warn(`Could not add the link comment (${lastStatus}): ${lastDetail}${hint}`);
  return false;
}

async function postToLinkedIn(commentary, media) {
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
  if (media && media.id) {
    body.content = {
      media: { id: media.id, ...(media.altText ? { altText: media.altText } : {}) },
    };
  }

  const res = await fetch("https://api.linkedin.com/rest/posts", {
    method: "POST",
    headers: { ...restliHeaders(), "Content-Type": "application/json" },
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
  return res.headers.get("x-restli-id") || "";
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
    const url = urlForPost(path, fm);
    const commentary = composeCommentary(fm);
    const imagePath = POST_IMAGE ? resolveRasterImage(path, fm.image) : null;

    console.log("\n--- Post ---\n" + commentary + "\n------------");
    if (POST_IMAGE) console.log(`Image: ${imagePath || "(none resolved — will post text-only)"}`);
    console.log(LINK_IN_COMMENT ? `First comment: Read more: ${url}` : `Link (in body): ${url}`);

    if (DRY_RUN) {
      console.log(`[dry-run] Would announce ${url} — not posting.`);
      continue;
    }

    try {
      const imageUrn = imagePath ? await uploadImage(imagePath, AUTHOR) : null;
      const media = imageUrn ? { id: imageUrn, altText: fm.title } : null;
      const commentaryToPost = LINK_IN_COMMENT ? commentary : `${commentary}\n\nRead more: ${url}`;
      const postUrn = await postToLinkedIn(commentaryToPost, media);
      console.log(`Announced ${url} -> ${postUrn || "(posted)"}`);
      if (LINK_IN_COMMENT) {
        if (/^urn:li:(share|ugcPost):/.test(postUrn)) {
          await commentWithLink(postUrn, AUTHOR, url);
        } else {
          console.warn(`Skipping link comment: no usable post URN returned (got "${postUrn}").`);
        }
      }
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
