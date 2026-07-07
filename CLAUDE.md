# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this is

The personal blog of **Hitesh Sarda** (hitesh.in) — a static site built with
**Hugo**, deployed on **Netlify**. It is content-first: Hugo templates plus
Markdown posts. There is no application backend.

## ✍️ Writing or editing posts → read AGENTS.md first

**[`AGENTS.md`](AGENTS.md) is the source of truth for all writing.** Before
creating or substantially editing anything under `content/blog/`, follow it. It
covers:

- Front matter, slugs, page-bundle layout, and categories/tags.
- **Hitesh's voice**, and the **"Sound like Hitesh, not an AI"** do's and don'ts
  — the AI tropes to avoid (negative parallelism, manufactured suspense, em-dash
  addiction, AI house vocab, etc.) and the habits to keep.
- **Length** (house rhythm: ~300–700 words; ~1,200 ceiling) and **engagement**.
- The drafting checklist to run before a post is done.

Do not restate or contradict `AGENTS.md` here — defer to it.

## Project layout

```
config.toml            legacy config (twenty-twenty-hugo theme) — superseded, unused
hugo.toml              ACTIVE config (theme = "hitesh")
netlify.toml           build: `hugo`; Hugo 0.162.0, Node 22
AGENTS.md              writing guide (read this for any post work)
archetypes/            `hugo new` scaffold
content/
  about/index.md
  blog/<year>/<slug>/  one post per page bundle
      index.md         post + front matter
      images/          post-specific images (referenced bundle-relative)
static/images/         site-wide assets (e.g. default.jpg, the OG fallback)
themes/hitesh/         ACTIVE custom theme (layouts + static/css/style.css)
.github/workflows/     CI, incl. the LinkedIn auto-announce workflow
```

- Blog permalink rule: `/:year/:slug`. The directory year must match the
  post's `date`.
- Hugo loads `hugo.toml` in preference to `config.toml`, so the **hitesh** theme
  is what renders; the legacy `config.toml` is dead. (The old `twenty-twenty-hugo`
  submodule it referenced has been removed.)

## Commands

```sh
hugo server -D     # local preview (includes drafts)
hugo --minify      # production build into public/
hugo new blog/YYYY/<slug>/index.md
```

CI uses Hugo `0.162.0` (pinned in `netlify.toml`). `public/` is gitignored.

## Conventions

- Featured images use the front-matter `image: images/<file>` field; the theme
  resolves it as a page-bundle resource (`single.html`). Social previews need a
  raster: `head.html` points the OG/Twitter card at a PNG/JPG sibling of the
  cover, and the LinkedIn announcer does the same. When the cover is an SVG, the
  matching `cover.png` is generated automatically in CI by
  `.github/workflows/cover-image.yml` (which runs
  `.github/scripts/rasterize-cover.mjs` under headless Chromium) and committed
  back to the branch, so **commit only the `cover.svg`** and let CI produce the
  PNG; do not hand-make it. To preview the raster locally, run
  `node .github/scripts/rasterize-cover.mjs`. If no raster resolves at all,
  `head.html` falls back to `static/images/default.jpg`.
- Develop on a feature branch and open a pull request; Netlify deploys on merge
  to `master`, and the LinkedIn workflow announces newly published posts. See
  `.github/README-linkedin.md` for that pipeline.
