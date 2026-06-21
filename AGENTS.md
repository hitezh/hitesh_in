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
- `themes/hitesh/` is the active theme (layouts and `static/css/style.css`). Do not edit the theme merely to add a post.

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
slug: "matches-the-directory-name"
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
- Set `slug` to the post's directory name. Hugo derives the URL from the *title* otherwise, so any `:`, `.`, or `?` in the title leaks into the URL (a two-sentence title becomes `.../my-post.-second-part.`). The LinkedIn announcer also builds the link from the directory name, so `slug` and the directory must match or the announced URL 404s.
- Choose one or, when genuinely useful, two existing categories: `banking`, `education`, `entrepreneurship`, `life`, `others`, `sketches`, or `technology`. Do not create a near-duplicate category.
- `tags` are optional. Use them for specific subjects a reader may want to find again. Keep them lowercase and hyphen-separated; reuse an existing tag where possible.
- `image` is optional but recommended. Use the bundle-relative form `images/<filename>` and ensure the file exists. Use a descriptive filename, not `image1.jpg`.
- Prefer `image`; do not add the legacy `coverImage` field to new posts.
- Do not add `author`; the site is Hitesh's personal blog and existing posts omit it.
- Keep `draft: true` while drafting. Published posts in the repository normally omit `draft`.
- The directory year and the year in `date` must match.
- `date` must be the real current date, never in the future. Hugo does not build future-dated posts by default, so a post dated ahead of the deploy clock silently fails to appear on the published site (the build still succeeds, the post just goes missing).

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

There is no mandatory length, and the idea sets the length, not the other way round. But the blog has a house rhythm worth matching: most posts run **300–700 words**, the median is around 400, and almost nothing exceeds ~1,200. Use these as targets, not rules:

- **Short take or sketch:** 150–400 words. One observation and its implication; an image post with just enough context.
- **Standard essay or explainer:** 500–900 words. The sweet spot — long enough to make and ground one argument, short enough to stay sharp.
- **Deep dive:** up to ~1,200 words, and only when the subject genuinely earns it. If a draft pushes past that, the usual cause is one-point dilution (see the AI tells) — cut, don't pad. A long post is a series of tight sections, never a long one.

For a normal essay or explainer, use this shape:

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

### Make it engaging

Engagement here comes from substance and specificity, not tricks. The anti-AI rules above already rule out the cheap moves (manufactured suspense, fake hooks, stakes inflation); these are the honest ones:

- **Earn the first line.** Open with a concrete claim, a number, or something you actually saw — not a windup. "A survey of 831 engineers found 97% use AI to code and 30% govern it" beats "AI is changing everything." The reader should know within two sentences why this is worth their time.
- **Have a stake in the ground.** A clear, mildly contrarian opinion is more engaging than a balanced survey. Say what you think and why; then deal fairly with the best objection.
- **Front-load, don't bury.** Put the point up top. Use the body to earn it, not to delay it.
- **Make headings carry the argument.** A reader skimming only the `##` headings should still get the through-line.
- **Trade abstraction for specifics.** One real example, named company, dated event, or hard number does more work than a paragraph of generalities.
- **Keep momentum.** Short opening paragraph. Vary sentence length. Cut any sentence that doesn't advance the idea — tightening is the highest-leverage edit.
- **Close with something to chew on.** An implication, a prediction you'd stake, a question you actually want answered, or what you'd do differently. Not a summary.

### Flowy, conversational, link-dense

For technology and industry analysis, lean into a flowing, link-dense register, the kind good commentary blogs use. It is still Hitesh writing in the first person, just with more momentum and more receipts. The habits that make it work:

- **Write a moving argument, not a list of statements.** Let each sentence hand off to the next so the reasoning builds. Short paragraphs are good; staccato one-line fragments stacked for drama are not. Favor connected prose over bullets and tables in this mode.
- **Link generously, inline, as you write.** When you cite a number, a report, a product, or someone else's take, link it right there in the sentence, not in a footnote or a dump at the end. A reader should be able to chase any claim in one click. High link density is a feature: it shows the work and earns trust.
- **React and rebut.** Summarize the prevailing take, link it, then say where it is right and where it is wrong. Correcting a popular framing, or tightening a sloppy one, is more interesting than a neutral survey.
- **Be confident, then handle the objection.** State the claim plainly and answer the strongest counter-argument in your own words. Earned skepticism reads as authority; reflexive hedging reads as filler.
- **Conversational connective tissue is welcome when it does real work.** Short directional turns ("Look at Dell." "Start with what is known.") move the reader along. This is not license for manufactured suspense: still no "here's the kicker," no windup that promises a reveal.
- **Still no em dashes.** This register is flowy, not punctuation-heavy. Use commas, colons, full stops, and the occasional parenthesis for the pause an em dash would have taken.

This is a register, not a costume. Keep the first-person, experience-led core: ground the analysis in what you have seen, advised on, or built, and say "I" where you have a view. Borrow the flow and the links from commentary writing; do not slide into anonymous third-person punditry.

### Style details to preserve

- Keep paragraphs compact—usually one to four sentences.
- Use `##` headings for major sections and sentence-style capitalization for headings.
- Use bullets or numbered lists when the items are the point; do not force prose into a list or pad a short list.
- Use bold sparingly for the lead phrase in a list and italics for a brief aside or measured emphasis.
- Prefer concrete nouns and verbs over abstractions: say what a bank, founder, developer, or reader actually does.
- Explain acronyms on first use unless the intended audience certainly knows them.
- Use examples relevant to work, technology, entrepreneurship, banking, family, or everyday Indian life when they arise naturally.
- Link to sources for statistics, laws, standards, quotations, and claims that may have changed. For time-sensitive topics, verify facts immediately before publishing.
- Preserve intentional personality, but fix spelling, punctuation, broken links, and unclear sentences. The voice comes from the perspective and rhythm, not from errors.

### Sound like Hitesh, not an AI

Most "AI-sounding" writing isn't factually wrong, it's textured wrong: the same handful of rhetorical reflexes, repeated until the rhythm gives the machine away. Any one of these used once can be fine. The tell is **density and repetition** — three negated reframes in one post, an em dash in every paragraph, a metaphor flogged ten times. Aim for prose that is varied, specific, and a little imperfect, the way a person actually writes. When in doubt, read it aloud: if it sounds like a confident stranger performing insight, rewrite it; if it sounds like Hitesh explaining something to a sharp colleague over coffee, keep it.

#### Don't — the AI tells

Sentence reflexes:

- **Negative parallelism** — "It's not X, it's Y", "not because X, but because Y", "The question isn't X. The question is Y." This is the single biggest tell. Cut it almost everywhere and just say the thing.
- **The countdown** — "Not a bug. Not a feature. A design flaw." Don't negate two things to unveil a third.
- **Self-answered questions** — "The result? Devastating." Don't pose a question nobody asked so you can answer it dramatically.
- **Anaphora and stacked tricolons** — repeating the same sentence opener, or rule-of-three after rule-of-three ("Products solve problems; platforms create worlds…"). One tricolon can be elegant; three in a row is a pattern.
- **Tacked-on "-ing" analysis** — "…, highlighting its importance", "…, reflecting broader trends", "…, underscoring its role." Delete these; they assert significance instead of earning it.
- **False ranges** — "from innovation to cultural transformation." Only use "from X to Y" when there's a real spectrum with a middle.
- **Fragments for drama** — "He published this. Openly. In a book." Write the sentence.

Tone reflexes:

- **Manufactured suspense** — "Here's the kicker", "Here's the thing", "Here's where it gets interesting."
- **Teacher mode** — "Let's break this down", "Let's unpack this", "Think of it as…". You're writing for peers, not a classroom.
- **"Imagine a world where…" futurism** and **stakes inflation** — "this will reshape everything", "define the next era of computing."
- **Performative honesty** — "Let's be honest…", "this isn't a rant, it's a diagnosis." Real candour is specific and slightly uncomfortable, not a flourish.
- **Asserting clarity instead of showing it** — "the truth is simple", "history is unambiguous." If it were obvious you wouldn't need to say so.

Vocabulary:

- **Magic adverbs** — quietly, deeply, fundamentally, remarkably, arguably.
- **AI house vocab** — delve, leverage (as a verb), utilize, robust, streamline, harness, seamless, ecosystem, paradigm, tapestry, landscape, synergy.
- **Pompous copulas** — "serves as", "stands as", "represents", "marks." Usually the word you want is "is".
- **Vague authorities** — "experts say", "industry reports suggest", "observers note." Name the person and link the source, or drop the claim.
- **Invented concept labels** — coining "the supervision paradox" or "the acceleration trap" and using them as if they're established terms. Make the argument; don't name a thing to skip it.
- **Fabrication** — never invent anecdotes, professional experience, quotes, statistics, or sources to fill a gap. If it didn't happen or you can't cite it, leave it out.

Structure and formatting:

- **One point, ten ways** — don't pad a single idea to feel comprehensive. Make the argument once.
- **Listicle in a trench coat** — "The first… The second… The third…" prose, and **fractal summaries** where every section recaps itself.
- **Signposted conclusions** — "In conclusion", "To sum up." End on the implication and stop.
- **"Despite its challenges…"** — naming a problem only to wave it away.
- **A single metaphor flogged** across the whole piece, or **historical-analogy stacking** ("Apple didn't build Uber. Stripe didn't build Shopify…").
- **Em-dash addiction** — a couple per piece, used naturally, not one in every paragraph.
- **Bold-lead bullets on every item**, decorative emoji, clickbait titles, and excessive heading levels.
- **Smart quotes and unicode arrows** (→, "curly quotes"). Type straight quotes and a plain `->`.

#### Do — Hitesh's fingerprints

- **Open from something real** — something you noticed, tried, got wrong, or argued about at OptCulture or across banking, retail, and loyalty work. Lead with the observation, not a scene-setting intro.
- **Use plain verbs and plain copulas** — "is", "does", "breaks". Let the idea carry the weight.
- **Vary the rhythm** — mix short and long sentences; let paragraphs run one to four sentences as the thought needs. Don't flatten every line into one-thought-per-sentence "readability".
- **Be concrete, and Indian-specific where it fits** — a real bank, a real founder, a UPI quirk, a hiring story, a number you can cite. Specifics beat abstractions every time.
- **Make one argument, then trust the reader** to follow it. Engage the strongest opposing view honestly, in your own words.
- **Keep the wit dry and occasional** — one good aside or an italicised half-joke, then back to the point.
- **Use a metaphor once** if it clarifies, then move on.
- **Link real sources** for stats, laws, standards, and claims, and name names. Verify anything time-sensitive right before publishing.
- **End on the implication, the next question, or what you'd do differently** — never a recap.
- **Let a small idea stay a small post.** Don't force every piece into a long-form template.

## Drafting checklist

Before considering a post complete, confirm:

- [ ] The post has one clear central idea and the title reflects it.
- [ ] The opening reaches that idea quickly.
- [ ] The writing sounds like an experienced person sharing a considered view, not a generic brand.
- [ ] Every section, example, and list earns its place.
- [ ] Technical terms are explained at the right level for the intended reader.
- [ ] Factual and time-sensitive claims have been checked and linked to reliable sources.
- [ ] Claims, numbers, and references a reader would want to verify are linked inline where they appear, not collected at the end.
- [ ] Front matter uses the correct date, existing categories, focused tags, and `image` syntax.
- [ ] The directory year matches the publication date's year.
- [ ] The `date` is today or earlier, never in the future, or Hugo will drop the post from the deployed site.
- [ ] Images exist in the page bundle, render correctly, have useful alt text, and include credit where needed.
- [ ] The post has been proofread aloud for Hitesh's conversational rhythm.
- [ ] Scanned against "Sound like Hitesh, not an AI" — no negative parallelism, self-answered questions, "Here's the…" suspense, "-ing" analysis tails, em-dash overuse, bold-lead bullets, or the AI house vocab; any single trope that remains is deliberate and isolated.
- [ ] Straight quotes and plain ASCII throughout (no smart quotes, no `→` arrows).
- [ ] `hugo server -D` shows a good home-page card and post page.
- [ ] `hugo --minify` completes without errors before publication.
