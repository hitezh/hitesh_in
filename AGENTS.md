# Guide for writing a new blog post

## Purpose and scope

Use this guide whenever creating or substantially editing a post under `content/blog/`. The site is Hitesh Sarda's personal Hugo blog about life, technology, education, entrepreneurship, and, more recently, banking. A post should read like Hitesh sharing a useful observation or an opinion earned through experience—not like generic content marketing or an AI-generated essay.

## Project structure relevant to posts

- `config.toml` contains the Hugo configuration, taxonomies, and permalink rule. Blog URLs use `/:year/:slug`.
- `archetypes/default.md` is Hugo's minimal default front matter, but a publishable blog post needs the fuller front matter shown below.
- `content/blog/<year>/<slug>/index.md` contains one post. Each post is a Hugo page bundle.
- `content/blog/<year>/<slug>/images/` contains that post's images.
- `layouts/index.html` renders recent-post cards and uses the front-matter `image` when present; otherwise it uses the first resource under `images/`, then the site default.
- `layouts/_default/single.html` renders an individual post.
- `static/images/` is for site-wide assets, not images belonging only to one post.
- `themes/twenty-twenty-hugo/` is a Git submodule. Do not edit it merely to add a post.

## Creating a post

1. Choose one clear point the post will make. Phrase it in one sentence before drafting.
2. Create a lowercase, hyphen-separated slug that is short but descriptive.
3. Create the page bundle at `content/blog/YYYY/<slug>/index.md`, using the publication year's four digits for `YYYY`.
4. Put post-specific images in `content/blog/YYYY/<slug>/images/`.
5. Draft using the front matter and writing guidance below.
6. Preview drafts with `hugo server -D` and inspect the home-page card and individual post.
7. Before publishing, remove `draft: true` or change it to `draft: false`, verify links and images, and run `hugo --minify`.

`hugo new blog/YYYY/<slug>/index.md` may be used to create the initial file, but the generated front matter must be completed before publication.

## Front matter

Use YAML front matter delimited by `---`. Follow the established format:

```yaml
---
title: "A concise, human title"
date: "YYYY-MM-DD"
categories:
  - "technology"
tags:
  - "specific-topic"
image: images/descriptive-image-name.jpg
draft: true
---
```

Rules:

- `title`, `date`, and at least one `categories` entry are required.
- Quote the title and ISO date for consistency with existing posts.
- Choose one or, when genuinely useful, two existing categories: `banking`, `education`, `entrepreneurship`, `life`, `others`, `sketches`, or `technology`. Do not create a near-duplicate category.
- `tags` are optional. Use them for specific subjects a reader may want to find again. Keep them lowercase and hyphen-separated; reuse an existing tag where possible.
- `slug` should be set explicitly to a short, hyphenated value that matches the page-bundle directory name. Blog URLs use `/:year/:slug`, and if `slug` is omitted Hugo derives it from the *title*—including punctuation such as the period in "AI Writes the Code. Who Governs It?"—producing long or surprising URLs like `/2026/ai-writes-the-code.-who-governs-it/`. Setting `slug` keeps the URL clean and predictable.
- `image` is optional but recommended. Use the bundle-relative form `images/<filename>` and ensure the file exists. Use a descriptive filename, not `image1.jpg`.
- Prefer `image`; do not add the legacy `coverImage` field to new posts.
- Do not add `author`; the site is Hitesh's personal blog and existing posts omit it.
- Keep `draft: true` while drafting. Published posts in the repository normally omit `draft`.
- The directory year and the year in `date` must match.

If the featured image is also essential to understanding the body—such as a comic, sketch, or diagram—include it in the Markdown body too:

```markdown
![Useful description of the image](images/descriptive-image-name.jpg)
```

Always write meaningful alt text. Credit the creator and link to the source when using an image or other work that is not Hitesh's.

## Hitesh's voice

### Core qualities

- **First-person and experience-led.** Start from something Hitesh noticed, tried, learned, disagrees with, or would do differently. Use `I` naturally and `we` only when it refers to a real group or invites the reader into the thought process.
- **Direct and conversational.** Write as if explaining the idea to a thoughtful colleague over coffee. Prefer plain words, short paragraphs, and active voice.
- **Opinionated but open.** Make the argument clearly, explain why, and acknowledge meaningful limitations or opposing views without burying the point in caveats.
- **Practical.** Move from observation to implication, example, or action. Technical and business posts should help readers make a decision or do something better.
- **Curious and reflective.** It is fine to reconsider an old belief, share an unfinished idea, or ask the reader what was missed.
- **Lightly witty.** Dry humor, a playful analogy, or an italicized aside can make the point memorable. Keep it occasional and natural.

### Typical shape of a post

There is no mandatory length. Existing posts range from a single image and sentence to detailed explainers. Let the idea determine the length. For a normal essay or explainer, use this shape:

1. **Open with the point.** In one or two short paragraphs, state the observation, tension, or personal context. Avoid a generic scene-setting introduction.
2. **Develop it in clear sections.** Use descriptive `##` headings. Each section should advance one part of the argument.
3. **Ground it.** Add a concrete example, personal experience, analogy, trade-off, or short list.
4. **End promptly.** Finish with the implication, the next idea in a series, or a sincere question to the reader. Do not repeat the whole post in a formal conclusion.

Other formats that fit the blog include:

- A short, provocative observation followed by a better alternative.
- A personal reflection organized as lessons, choices, or things to do differently.
- A practical guide organized into steps or considerations.
- A technical or industry explainer that translates a complex subject into plain language.
- A sketch, comic, or image post with only the context it needs.

### Style details to preserve

- Keep paragraphs compact—usually one to four sentences.
- Use `##` headings for major sections and sentence-style capitalization for headings.
- Use bullets or numbered lists when the items are the point; do not force prose into a list or pad a short list.
- Use bold sparingly for the lead phrase in a list and italics for a brief aside or measured emphasis.
- Prefer concrete nouns and verbs over abstractions: say what a bank, founder, developer, or reader actually does.
- Explain acronyms on first use unless the intended audience certainly knows them.
- Use examples relevant to work, technology, entrepreneurship, banking, family, or everyday Indian life when they arise naturally.
- Link to sources for statistics, laws, standards, quotations, and claims that may have changed. For time-sensitive topics, verify facts immediately before publishing.
- Use em-dashes (—) sparingly. A page peppered with them reads as AI-generated. Aim for at most one or two per post, and reach first for a period, comma, colon, or parentheses. When two clauses can be two sentences, make them two sentences.
- Preserve intentional personality, but fix spelling, punctuation, broken links, and unclear sentences. The voice comes from the perspective and rhythm, not from errors.

### Avoid

- Generic openings such as “In today's fast-paced world” or “Technology is constantly evolving.”
- Corporate filler such as “leverage synergies,” “game-changing,” “unlock value,” or “delve into,” unless critiquing that language.
- A detached, encyclopedia-like voice when a clear personal perspective would be stronger.
- Unsupported certainty, invented anecdotes, invented professional experience, or claims presented as facts without verification.
- Excessive hedging, throat-clearing, or explaining that the post is about to explain something.
- Repeating the same point in the introduction, body, and conclusion.
- Long walls of text, excessive heading levels, decorative emoji, and clickbait titles.
- Forcing every post into a long-form template. A small idea should remain a small post.

## Internal links and calls to action

- Link to two or three related existing posts where they genuinely strengthen the argument. Do not force links or add a "related posts" list for its own sake.
- Internal post URLs follow `/:year/:slug`. Verify each link against the target's *actual* permalink, not its directory name. If the target post has no `slug` field, its URL is derived from the slugified title and may contain punctuation such as a period. The safest habit is to give every post an explicit `slug` and link to that.
- Where the subject naturally invites it, close with one soft, non-salesy call to action linking to the [AI advisory hour](/work-with-me/) (`/work-with-me/`) or the [AI training page](/ai-training/) (`/ai-training/`). Tie it to the specific problem the post explored, keep it to a single sentence, and never make it read like a brochure. Omit it entirely when it would feel bolted on.

## Drafting checklist

Before considering a post complete, confirm:

- [ ] The post has one clear central idea and the title reflects it.
- [ ] The opening reaches that idea quickly.
- [ ] The writing sounds like an experienced person sharing a considered view, not a generic brand.
- [ ] Every section, example, and list earns its place.
- [ ] Technical terms are explained at the right level for the intended reader.
- [ ] Factual and time-sensitive claims have been checked and linked to reliable sources.
- [ ] Front matter uses the correct date, an explicit `slug`, existing categories, focused tags, and `image` syntax.
- [ ] Em-dashes are rare (one or two at most); other punctuation carries the rhythm.
- [ ] Internal links resolve to the target posts' real permalinks, and any advisory/training call to action is natural and singular.
- [ ] The directory year matches the publication date's year.
- [ ] Images exist in the page bundle, render correctly, have useful alt text, and include credit where needed.
- [ ] The post has been proofread aloud for Hitesh's conversational rhythm.
- [ ] `hugo server -D` shows a good home-page card and post page.
- [ ] `hugo --minify` completes without errors before publication.
