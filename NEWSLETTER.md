# Newsletter Guide

This guide defines how to create and maintain the weekly newsletter archive. It is independent from blog-writing guidance.

## Purpose

The newsletter turns the week's published ideas into a practical briefing for founders, CTOs, and technology leaders. Each issue should help readers understand what changed, why it matters, and what to do next.

## Hugo section conventions

Newsletter issues live under `content/newsletter/` and each issue is a leaf bundle:

```text
content/newsletter/YYYY/week-WW/
    index.md
    images/
```

Use ISO week numbers in the directory name (`week-28`, `week-29`, and so on). Store issue-specific images in the local `images/` directory and reference them with relative paths from `index.md`.

## Frontmatter

Every newsletter issue should include:

```yaml
---
title: "Weekly AI Brief: concise issue theme"
date: 2026-07-12T09:00:00Z
draft: false
week: "2026-W28"
subject: "A short, specific subject line"
description: "One sentence describing the issue."
featured_articles:
  - "/blog/2026/example-post/"
exclusive: true
---
```

Optional fields:

```yaml
hero: "images/hero.png"
tags: ["ai", "leadership", "strategy"]
```

## Subject line rules

- Keep subjects under 60 characters when possible.
- Lead with the reader benefit, not the publishing cadence.
- Avoid clickbait, hype, all caps, and vague urgency.
- Use plain language that can stand alone in an inbox.
- Do not repeat the exact page title unless it is already inbox-friendly.

## Structure

Use this order for each issue:

1. **Opening note**: 1-2 short paragraphs connecting the week's theme.
2. **Featured articles**: links to selected blog posts with short summaries.
3. **Exclusive insight**: newsletter-only analysis, recommendation, checklist, or operating principle.
4. **Practical takeaway**: 3-5 bullets readers can apply this week.
5. **Closing prompt**: one thoughtful question or next action.

## Tone

- Practical, calm, and executive-friendly.
- Opinionated but not sensational.
- Clear enough for founders and operators; precise enough for CTOs.
- Prefer concrete tradeoffs, decisions, and examples over abstract commentary.

## Length

Target 700-1,200 words. Shorter issues are fine when the week is light; do not pad. Keep paragraphs short and scannable.

## Article selection

Select posts published during the target week where `newsletter: true` is present in blog frontmatter. Use `newsletter_priority` to decide ordering:

1. `high`
2. `normal`
3. `low`

Use `newsletter_summary` as the default summary. If no weekly posts are marked for inclusion, write an issue around one durable insight and include no more than three relevant archive links.

Blog posts may define these optional fields:

```yaml
newsletter: true
newsletter_priority: normal # low | normal | high
newsletter_summary: >
  One or two sentences explaining why this article matters.
```

## Exclusive content

Every issue should include something not published as a standalone blog post, such as:

- A leadership memo or decision framework.
- A practical checklist.
- A short market interpretation.
- A behind-the-scenes note about why the week's posts connect.
- A recommended experiment for the coming week.

## Linking conventions

- Link every featured article back to its canonical blog URL.
- Blog posts should invite readers to subscribe to the Weekly AI Brief.
- Newsletter pages should link back to all featured articles and expose `/newsletter/index.xml` for RSS-driven delivery.
