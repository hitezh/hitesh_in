# Guide for writing a weekly newsletter

## Purpose and scope

Use this guide when creating or substantially editing an issue under `content/newsletter/`. The newsletter is a weekly briefing that connects Hitesh's published posts with one or two observations that did not fit the blog.

The audience is the same as the blog: founders, CTOs, product leaders, executives, and entrepreneurs making technology decisions. The format is more personal and connective than a blog post. A good issue should make a busy reader feel caught up and better prepared for Monday.

## Hugo structure

Each issue is a Hugo page bundle:

```text
content/newsletter/YYYY/week-XX/
  index.md
  images/
```

Use the ISO week number in the directory name, lowercase and zero-padded. Newsletter URLs follow `/newsletter/YYYY/week-XX/` unless a specific slug is set. The section archive lives at `/newsletter/`, and the RSS feed is available at `/newsletter/index.xml`.

## Front matter

Use YAML front matter delimited by `---`:

```yaml
---
title: "Weekly AI Brief: Week 28, 2026"
slug: "week-28"
date: "2026-07-12"
subject: "A plain, specific email subject"
description: "One sentence summary for the archive and social cards."
week: "2026-W28"
featured_articles:
  - "/2026/example-post/"
draft: true
---
```

Rules:

- `title`, `date`, `subject`, `description`, and `week` are required.
- `slug` must match the directory name.
- `date` must be today or earlier when publishing. Keep `draft: true` while preparing an issue.
- `featured_articles` is a list of public article URLs featured in the issue. Use it with the `newsletter-articles` shortcode when possible.
- Use `image: images/cover.svg` only when the issue has its own cover art. Commit the SVG only; CI renders the raster sibling.

## Subject line rules

- Keep subject lines under 70 characters when possible.
- Be specific about the week's decision theme, not just the news.
- Avoid clickbait, manufactured suspense, emoji, and generic claims like "AI changed everything this week".
- Prefer: "This week in AI: where the pilot breaks" over "The future of AI is here".

## Structure

A standard issue should be 600 to 1,000 words and use this shape:

1. **Opening note**: 100 to 200 words. One personal observation or decision frame for the week.
2. **Featured writing**: Two to four blog posts from the week, each with a short reason to read it. Use `newsletter_summary` from the article when available.
3. **Exclusive note**: 150 to 300 words that is not published as a blog post. This is the reason to subscribe.
4. **One practical question**: A question a founder, CTO, or product leader can take into the week.
5. **Links back**: Link to the featured articles and, when natural, to the AI advisory hour or training page.

Shorter issues are fine when the week was light. Do not pad.

## Tone

Write like Hitesh connecting dots for a thoughtful operator on Sunday evening. Use first person where there is a real view. Keep paragraphs compact. Link sources inline. Be opinionated, practical, and calm.

Avoid the AI tells from `AGENTS.md`: no manufactured suspense, no negative parallelism as a default move, no em-dash addiction, no generic futurism, and no inflated stakes.

## How articles are selected

Start with posts published in the issue week. Prefer posts with:

```yaml
newsletter: true
newsletter_priority: high
newsletter_summary: >
  One or two sentences explaining why this article matters.
```

Priority order:

1. `newsletter_priority: high`
2. `newsletter_priority: normal`
3. Timely posts without newsletter metadata, if they help the week's theme
4. `newsletter_priority: low`, only when needed for context

Do not feature every post automatically. The newsletter should have a coherent weekly argument.

## Exclusive content

Each issue should include at least one subscriber-first idea:

- a short advisory note from recent work,
- a practical checklist,
- a trade-off that did not fit the blog,
- a prediction Hitesh would actually stand behind,
- or one question leaders should ask their team.

Do not invent client stories, numbers, or private conversations. If a detail cannot be shared, generalize it honestly.

## Publishing checklist

- [ ] Directory year matches the issue date.
- [ ] Week number matches the `week` field.
- [ ] `slug` matches the directory.
- [ ] `subject` is specific and under 70 characters when possible.
- [ ] Featured article links resolve.
- [ ] The issue includes exclusive content.
- [ ] `hugo --minify` succeeds.
