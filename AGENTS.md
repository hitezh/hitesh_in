# Guide for writing a new blog post

## Purpose and scope

Use this guide whenever creating or substantially editing a post under `content/blog/`. The site is Hitesh Sarda's personal Hugo blog about life, technology, education, entrepreneurship, and, more recently, banking. A post should read like Hitesh sharing a useful observation or an opinion earned through experience, not like generic content marketing or an AI-generated essay.

## Why this blog exists

This blog is not a technology news site.
It is a public record of how Hitesh thinks about technology, software, AI, products, and business.
Every article should help readers make better decisions rather than simply understand new technology.
The intended audience is founders, CTOs, product leaders, executives, and entrepreneurs responsible for making strategic technology decisions.
The long-term objective is to build trust.
A successful article should make readers think:

> "I'd like Hitesh to help us think through this problem."

The blog is therefore a form of public advisory rather than content marketing.
Lead generation is a consequence of demonstrating sound judgment, not the primary objective.



## Project structure relevant to posts

- `hugo.toml` is the active Hugo configuration (taxonomies, permalink rule, menu). Blog URLs use `/:year/:slug`. The old `config.toml` is a superseded leftover; do not edit it.
- `archetypes/default.md` is Hugo's minimal default front matter, but a publishable blog post needs the fuller front matter shown below.
- `content/blog/<year>/<slug>/index.md` contains one post. Each post is a Hugo page bundle.
- `content/blog/<year>/<slug>/images/` contains that post's images.
- `themes/hitesh/layouts/index.html` renders the home page and its recent-post cards, and `themes/hitesh/layouts/_default/single.html` renders an individual post. Both show the front-matter `image` and the `description`. A post without an `image` gets no thumbnail; only the social (Open Graph) card falls back to `static/images/default.jpg`. So every post should set `image`.
- The `description` also feeds the `<meta>` description and the social cards.
- `static/images/` is for site-wide assets, not images belonging only to one post.
- `themes/hitesh/` is the active theme (layouts and `static/css/style.css`). Do not edit the theme merely to add a post.
- Merging to `master` deploys on Netlify, and the LinkedIn workflow announces any non-draft post that is new in that merge (see [`.github/README-linkedin.md`](.github/README-linkedin.md)).

## Creating a post

1. Choose one clear point the post will make. Phrase it in one sentence before drafting.
2. Create a lowercase, hyphen-separated slug that is short but descriptive.
3. Create the page bundle at `content/blog/YYYY/<slug>/index.md`, using the publication year's four digits for `YYYY`.
4. Put post-specific images in `content/blog/YYYY/<slug>/images/`.
5. Draft using the front matter and writing guidance below.
6. Preview drafts with `hugo server -D` and inspect the home-page card and individual post.
7. Ask Hitesh for a review pass before publishing. A green build is not the finish line. Send the draft or the deploy preview and ask specifically for a read on cadence and voice, not only on facts. Expect notes, and expect more than one round; prose feedback is normal here, not a sign something went wrong.
8. Before merging, make sure the post is not a draft, verify links and images, and run `hugo --minify` (or check the Netlify deploy preview if Hugo is not installed). Merging publishes and triggers the LinkedIn announcement, so the pull request is the last chance to change anything.

`hugo new blog/YYYY/<slug>/index.md` may be used to create the initial file, but the generated front matter must be completed before publication.

## Long-term positioning

Across many articles, reinforce recurring ideas where appropriate.

These are not slogans.

They are beliefs readers should gradually associate with Hitesh.

Examples include:

- AI changes business models before it changes technology.
- Software is becoming probabilistic rather than deterministic.
- AI should improve decision making before automation.
- Companies compete on execution rather than model selection.
- Product thinking matters more than prompt engineering.
- AI adoption is primarily an organizational challenge.
- Most companies should buy before they build.
- AI MVPs exist to reduce business uncertainty.
- The best AI products disappear into existing workflows.
- Enterprise AI succeeds through incremental adoption rather than big-bang transformation.

Do not force these themes into every article.

Over time they should naturally emerge across the body of work.

## Build posts around a claim, not a topic

A post commits to one specific, debatable statement. It does not survey a topic. The test: could a reasonable person disagree with the title? If not, it's a topic wearing a title.

- Weak: "The future of AI in software engineering." Better: "AI won't replace software engineers. It will replace the way we measure a good one."
- Weak: "Lessons from [Company]." Better: "[Company] is solving the wrong problem, and that's exactly why its product is so popular."
- Weak: "The future of work." Better: "The next productivity problem isn't finding AI tools. It's managing too many of them."

Think of every post as claim plus evidence plus perspective, not as "personal" versus "professional." The evidence can be a personal experience, a company's product, a photograph of something built, or an industry number, but the post exists to argue the claim, not to report on the evidence. Aim for the reader thinking "I hadn't looked at it that way," not "that was informative."

### The title, the opening and the cover each do a different job

A post's title, its first paragraph and its cover image are three chances to be read, and they fail when all three say the same sentence in different words. Give each one its own work:

- **The title** states the claim, in plain words someone could disagree with.
- **The opening** earns the claim. Start from something concrete (what the company did, what happened, a number) and let the reader reach the claim a paragraph later. It should not open by announcing the claim again, and it should not begin so abruptly that a reader has to guess the context.
- **The cover** carries the sharpest version of the claim plus one fact, written for a feed rather than copied from the title.

Before finishing, read the three together. If someone could delete two of them without losing anything, rewrite them.

### The editorial mix

Not rigid quotas, but a rough shape to notice across a quarter of posts, not to plan post by post:

- Contrarian company/product takes, for reach and discussion, about 30%.
- Personal stories and experiences, for trust and connection, about 25%.
- AI/tech/business observations, for authority, about 20%.
- Real artifact/photo stories, for authenticity and engagement, about 15%.
- Practical frameworks and how-tos, for save/share value, about 10%.

Don't force a post into a bucket it doesn't fit.

## Front matter

Use YAML front matter delimited by `---`. Follow the established format:

```yaml
---
title: "A concise, human title"
slug: "matches-the-directory-name"
date: "YYYY-MM-DD"
description: "140 to 180 characters that say why the post is worth reading, without repeating the title."
categories:
  - "technology"
tags:
  - "specific-topic"
image: images/descriptive-image-name.jpg
linkedin_hook: "The claim plus one concrete fact, under about 200 characters."
takeaways:
  - "An action or judgment the reader can use this week, with its own test."
  - "A second one."
  - "A third one."
linkedin_question: "One question a founder or CTO could answer about their own company."
draft: true
---
```

Rules:

- `title`, `date`, `description`, and at least one `categories` entry are required.
- `description` runs 140 to 180 characters. It shows on the post page, the home-page cards, search results and social previews, so it should add something the title does not: the evidence, the stake, or who it is for. No questions, no hype, no repeating the headline.
- Quote the title and ISO date for consistency with existing posts.
- Set `slug` to the post's directory name. Hugo derives the URL from the *title* otherwise, so any `:`, `.`, or `?` in the title leaks into the URL (a two-sentence title becomes `.../my-post.-second-part.`). The LinkedIn announcer also builds the link from the directory name, so `slug` and the directory must match or the announced URL 404s.
- Choose one or, when genuinely useful, two existing categories: `banking`, `education`, `entrepreneurship`, `life`, `others`, `sketches`, or `technology`. Do not create a near-duplicate category.
- `tags` are optional. Use them for specific subjects a reader may want to find again. Keep them lowercase and hyphen-separated; reuse an existing tag where possible.
- `image` is optional but recommended. Use the bundle-relative form `images/<filename>` and ensure the file exists. Use a descriptive filename, not `image1.jpg`.
- Prefer `image`; do not add the legacy `coverImage` field to new posts.
- Every cover has to answer one question: what is the provocative thing this post is saying? The claim is the brand, not the template, so pick one of two visual modes, and don't blend them:
  - **No standout real visual.** Author `images/cover.svg`, starting from [`.github/templates/blog-cover.svg`](.github/templates/blog-cover.svg), then make it specific to the post. The template is styled as a screenshot of an X post (avatar, name and handle, the claim as the post text, a trailing hashtag, and the timestamp) because that format reads well and gets clicked in a fast-moving feed. Keep the illusion: regular-weight text running nearly full width, no card frame, no decorative diagram, no colour beyond the verified check and the hashtag (both X-blue, `#1D9BF0`). Open with the claim in caps across two lines, then write a short paragraph of up to five lines (about 300 characters) that gives the reader the substance: what happened, the real names and numbers, why it matters, and the question or decision it should change. A cover is the first thing a reader sees and may be the only thing, so it should inform them, not tease them; do not reduce it to a cryptic slogan to save space. End with the hashtag. The claim itself has to be the provocative statement, not a summary of one: "AWS ISN'T THE PROBLEM.", "AI DIDN'T MAKE ENGINEERS FASTER.", "YOUR NEXT CO-WORKER MAY BE AN AI AGENT." SVG does not wrap text, so break the lines by hand and preview the result. Use the post's real publish date and change the `aria-label` to describe the finished image. Do not add a view count, likes or any other engagement number: the screenshot is a styling device, and an invented metric is fabricated social proof that any reader can check against the real X account. Social platforms cannot render SVG, so a raster `cover.png` sibling is required for the Open Graph card and the LinkedIn announcement. **You only commit the SVG.** CI (`.github/workflows/cover-image.yml`) renders `cover.png` from it with headless Chromium and commits it back to the branch. To generate or preview it locally, run `node .github/scripts/rasterize-cover.mjs`. Do not hand-edit the generated PNG.
  - **A real photo, screenshot, or artifact is central to the story**: something built, designed, attended, received, or measured. Don't manufacture a template cover for it; let the artifact be the cover. Set `image: images/<descriptive-name>.jpg` directly; there's no `cover.svg` and nothing for CI to rasterize. This beat the template on reaction count for the one post that tried it ("I designed my Ganpati wall with AI, then had it laser cut").
- Optionally, add `images/slide-1.svg`, `slide-2.svg`, ... (same commit-only-the-SVG rule, same CI rasterization) to have the post announced on LinkedIn as a multi-image carousel of 3-5 key facts/insights/takeaways instead of a single cover image. See [`.github/README-linkedin.md`](.github/README-linkedin.md#carousel-slides) for the convention.
- Add `linkedin_hook`, `takeaways` and `linkedin_question` to every new post. They become the LinkedIn announcement. Write them using [Writing the LinkedIn summary](#writing-the-linkedin-summary) below; the mechanics are in [`.github/README-linkedin.md`](.github/README-linkedin.md#takeaway-format).
- Do not add `author`; the site is Hitesh's personal blog and existing posts omit it.
- Use `draft: true` only while the post is not ready to merge. When the pull request itself is the review step, omit `draft` (or set `draft: false`), because merging then publishes it. Published posts normally omit `draft`.
- The directory year and the year in `date` must match.
- `date` must be the real current date, never in the future. Hugo does not build future-dated posts by default, so a post dated ahead of the deploy clock silently fails to appear on the published site (the build still succeeds, the post just goes missing).

If the featured image is also essential to understanding the body, such as a comic, sketch, or diagram, include it in the Markdown body too:

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
- **Standard essay or explainer:** 500–900 words. The sweet spot: long enough to make and ground one argument, short enough to stay sharp.
- **Deep dive:** up to ~1,200 words, and only when the subject genuinely earns it. If a draft pushes past that, the usual cause is one-point dilution (see the AI tells). Cut, don't pad. A long post is a series of tight sections, never a long one.

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

- **Earn the first line.** Open with a concrete claim, a number, or something you actually saw, not a windup. "A survey of 831 engineers found 97% use AI to code and 30% govern it" beats "AI is changing everything." The reader should know within two sentences why this is worth their time.
- **Have a stake in the ground.** A clear, mildly contrarian opinion is more engaging than a balanced survey. Say what you think and why; then deal fairly with the best objection.
- **Attack the hype, by name.** The blog's best-performing LinkedIn posts name a specific company or product and take a stance against its own hype, rather than making a generic industry claim: "Google has the best AI money can buy. Its products still feel broken," "Gemini broke into three companies by guessing passwords," "450 million seats, 7% adoption." The shape: name the company or product, state the popular belief about it, take a clear position against that belief, explain the gap between perception and reality, back it with evidence or a real experience rather than just criticism, and close with the implication for the reader. "Everyone is talking about X. I think they're looking at the wrong thing" beats "5 lessons from X." The caveat matters as much as the technique: don't manufacture negativity to get the shape. The stance has to be genuinely defensible: this is contrarian authority, not rage bait.
- **Front-load, don't bury.** Put the point up top. Use the body to earn it, not to delay it.
- **Make headings carry the argument.** A reader skimming only the `##` headings should still get the through-line.
- **Trade abstraction for specifics.** One real example, named company, dated event, or hard number does more work than a paragraph of generalities.
- **Keep momentum.** Keep the opening focused, with enough context that the reader knows what happened. Vary sentence length. Cut any sentence that doesn't advance the idea. Tightening is the highest-leverage edit right up to the point where the prose stops breathing, and then it inverts. See "Don't over-compress" below.
- **Close with something to chew on.** An implication, a prediction you'd stake, a question you actually want answered, or what you'd do differently. Not a summary. This is about how the *post* ends. Individual paragraphs mostly should not do it.

### Flowy, conversational, link-dense

For technology and industry analysis, lean into a flowing, link-dense register, the kind good commentary blogs use. It is still Hitesh writing in the first person, just with more momentum and more receipts. The habits that make it work:

- **Write a moving argument, not a list of statements.** Let each sentence hand off to the next so the reasoning builds. Short paragraphs are good; staccato one-line fragments stacked for drama are not. Favor connected prose over bullets and tables in this mode.
- **Link generously, inline, as you write.** When you cite a number, a report, a product, or someone else's take, link it right there in the sentence, not in a footnote or a dump at the end. A reader should be able to chase any claim in one click. High link density is a feature: it shows the work and earns trust.
- **React and rebut.** Summarize the prevailing take, link it, then say where it is right and where it is wrong. Correcting a popular framing, or tightening a sloppy one, is more interesting than a neutral survey.
- **Be confident, then handle the objection.** State the claim plainly and answer the strongest counter-argument in your own words. Earned skepticism reads as authority; reflexive hedging reads as filler.
- **Conversational connective tissue is welcome when it does real work.** Short directional turns ("Look at Dell." "Start with what is known.") move the reader along. This is not license for manufactured suspense: still no "here's the kicker," no windup that promises a reveal.
- **Still no em dashes.** This register is flowy, not punctuation-heavy. Use commas, colons, full stops, and the occasional parenthesis for the pause an em dash would have taken.

This is a register, not a costume. Keep the first-person, experience-led core: ground the analysis in what you have seen, advised on, or built, and say "I" where you have a view. Borrow the flow and the links from commentary writing; do not slide into anonymous third-person punditry.

### The advisory shape

For posts that react to industry events, this shape has worked well. The reference example is ["Assume your platform vendor will lose your secrets"](content/blog/2026/assume-vendor-loses-your-secrets/index.md).

- **Open on a pattern when one exists.** "In thirteen days, three platforms told their customers to rotate their secrets" carries more weight than any single incident, and it ages better than news. Before settling on one story, check whether two or three recent ones point the same way.
- **Quote the primary source once, verbatim.** One short line in the vendor's or author's own words ("Assume all environment variables have been decrypted") does more than a paragraph of paraphrase. Link it where it appears.
- **Give each section one mechanism.** Explain *why* something happens in plain words: why an AI key is easier to cash in than a database password, why a platform that injects secrets must be able to decrypt them. Executives remember a mechanism long after they forget the incidents.
- **Draft the headings first.** Read them alone, in order. If they don't state the argument, fix them before writing the body.
- **Say what you couldn't verify.** "I could not independently confirm the report it cites" costs one sentence and buys a lot of trust. Leave out claims you couldn't check rather than hedging them into the post.
- **Argue in prose, then finish with one ordered action list.** The argument stays connected prose. The last section can be a numbered list of five to eight things the reader should do, in the order you would do them. Start each item with a verb, and give most items a test or threshold ("If it takes more than a day, you have found the real risk"). This is the only list in the post, and it gives readers a reason to save and share it.
- **Leave the reader one question to ask about their own company.** For example: "What can be stolen from the place I keep my keys, and how fast can I replace it?"
- **Prefer calm to alarm.** When others are calling something an emergency, a steady "rehearse, don't panic" position reads as an advisor's voice. It is contrarian about tone without needing anyone to be wrong about facts.

### Don't over-compress

Nearly every rule in this guide subtracts something. Follow them hard enough and the prose lands in a different failure mode: clipped, uniform, oddly translated-sounding, with no air in it. It reads as authority without warmth. Signs of having gone too far:

- **Stacked short sentences.** Several short declaratives in a row feel punchy for a line or two and then read as a list of slogans. If the second and third sentence could be joined to the first with a comma, a colon or "because", join them, and let the reasoning show.
- **An abrupt opening.** An intro that jumps straight to a verdict, with no context, reads as performance. Say what happened and why it matters before judging it.
- **Uniform sentence length.** Four sentences in a row at roughly thirty words each is monotonous even when every one of them is good. Break the run with a short one. "That matters." "Someone always pays." A single short sentence resets the reader's ear.
- **Peak fatigue.** If every paragraph ends on a memorable line, none of them land. Essays should have peaks, not a plateau. Make roughly half the paragraph endings deliberately matter-of-fact so the real ones carry weight.
- **Literary diction where a plain word exists.** Use the word you would say out loud.
- **Too finished.** Leave 10 to 20 percent of the prose conversational rather than crafted. Not sloppy, just unpolished. Readers bond with authenticity rather than perfection, and one plain sentence buys more trust than an elegant one.

Compressed on the left, natural on the right:

| Too compressed | Better |
| --- | --- |
| The router grades difficulty from the prompt. | The router tries to estimate how demanding a request is by looking only at the prompt. |
| Routing rewards moving. Caching rewards staying put. You cannot have both. | Routing wants requests to move; caching pays out when they stay. The two work against each other. |
| A machine for turning a legible cost into an illegible one. | The bill fell. The cost did not. It moved into engineering time and testing effort. |
| The vendors have already shown their hand. | The pricing already tells you which one the vendors expect you to use. |
| It is also fairly undifferentiated work. | It's commodity engineering. |

### Style details to preserve

- Keep paragraphs compact, usually one to four sentences.
- Use `##` headings for major sections and sentence-style capitalization for headings.
- Use bullets or numbered lists when the items are the point; do not force prose into a list or pad a short list.
- Use bold sparingly for the lead phrase in a list and italics for a brief aside or measured emphasis.
- Prefer concrete nouns and verbs over abstractions: say what a bank, founder, developer, or reader actually does.
- Explain acronyms on first use unless the intended audience certainly knows them.
- Use American spelling: "optimization", "behavior", "analyze". The archive is split on this, but the majority of posts and Hitesh's own habit are American.
- Use examples relevant to work, technology, entrepreneurship, banking, family, or everyday Indian life when they arise naturally.
- Link to sources for statistics, laws, standards, quotations, and claims that may have changed. For time-sensitive topics, verify facts immediately before publishing.
- Preserve intentional personality, but fix spelling, punctuation, broken links, and unclear sentences. The voice comes from the perspective and rhythm, not from errors.

### Sound like Hitesh, not an AI

Most "AI-sounding" writing isn't factually wrong, it's textured wrong: the same handful of rhetorical reflexes, repeated until the rhythm gives the machine away. Any one of these used once can be fine. The tell is **density and repetition**: three negated reframes in one post, an em dash in every paragraph, a metaphor flogged ten times. Aim for prose that is varied, specific, and a little imperfect, the way a person actually writes. When in doubt, read it aloud: if it sounds like a confident stranger performing insight, rewrite it; if it sounds like Hitesh explaining something to a sharp colleague over coffee, keep it.

#### Don't: the AI tells

Sentence reflexes:

- **Negative parallelism**: "It's not X, it's Y", "not because X, but because Y", "The question isn't X. The question is Y." This is the single biggest tell. Cut it almost everywhere and just say the thing.
- **The countdown**: "Not a bug. Not a feature. A design flaw." Don't negate two things to unveil a third.
- **Self-answered questions**: "The result? Devastating." Don't pose a question nobody asked so you can answer it dramatically.
- **Anaphora and stacked tricolons**: repeating the same sentence opener, or rule-of-three after rule-of-three ("Products solve problems; platforms create worlds…"). One tricolon can be elegant; three in a row is a pattern.
- **Tacked-on "-ing" analysis**: "…, highlighting its importance", "…, reflecting broader trends", "…, underscoring its role." Delete these; they assert significance instead of earning it.
- **False ranges**: "from innovation to cultural transformation." Only use "from X to Y" when there's a real spectrum with a middle.
- **Fragments for drama**: "He published this. Openly. In a book." Don't stack fragments to build a reveal. A single short sentence dropped among long ones is a different thing, and often exactly what a dense paragraph needs; the tell is two or three in a row doing theatre.

Tone reflexes:

- **Manufactured suspense**: "Here's the kicker", "Here's the thing", "Here's where it gets interesting."
- **Teacher mode**: "Let's break this down", "Let's unpack this", "Think of it as…". You're writing for peers, not a classroom.
- **"Imagine a world where…" futurism** and **stakes inflation**: "this will reshape everything", "define the next era of computing."
- **Performative honesty**: "Let's be honest…", "this isn't a rant, it's a diagnosis." Real candour is specific and slightly uncomfortable, not a flourish.
- **Asserting clarity instead of showing it**: "the truth is simple", "history is unambiguous." If it were obvious you wouldn't need to say so.

Vocabulary:

- **Magic adverbs**: quietly, deeply, fundamentally, remarkably, arguably.
- **AI house vocab**: delve, leverage (as a verb), utilize, robust, streamline, harness, seamless, ecosystem, paradigm, tapestry, landscape, synergy.
- **Pompous copulas**: "serves as", "stands as", "represents", "marks." Usually the word you want is "is".
- **Vague authorities**: "experts say", "industry reports suggest", "observers note." Name the person and link the source, or drop the claim.
- **Invented concept labels**: coining "the supervision paradox" or "the acceleration trap" and using them as if they're established terms. Make the argument; don't name a thing to skip it.
- **Fabrication**: never invent anecdotes, professional experience, quotes, statistics, or sources to fill a gap. If it didn't happen or you can't cite it, leave it out.

Structure and formatting:

- **One point, ten ways**: don't pad a single idea to feel comprehensive. Make the argument once.
- **Listicle in a trench coat**: "The first… The second… The third…" prose, and **fractal summaries** where every section recaps itself.
- **Signposted conclusions**: "In conclusion", "To sum up." End on the implication and stop.
- **"Despite its challenges…"**: naming a problem only to wave it away.
- **A single metaphor flogged** across the whole piece, or **historical-analogy stacking** ("Apple didn't build Uber. Stripe didn't build Shopify…").
- **Em dashes**: use none in a post. Commas, colons, full stops and the occasional parenthesis do the same job and avoid the best-known tell.
- **Bold-lead bullets on every item**, decorative emoji, clickbait titles, and excessive heading levels.
- **Smart quotes and unicode arrows** (→, "curly quotes"). Type straight quotes and a plain `->`.

#### Do: Hitesh's fingerprints

- **Open from something real**: something you noticed, tried, got wrong, or argued about at OptCulture or across banking, retail, and loyalty work. Lead with the observation, not a scene-setting intro.
- **Use plain verbs and plain copulas**: "is", "does", "breaks". Let the idea carry the weight.
- **Vary the rhythm**: mix short and long sentences; let paragraphs run one to four sentences as the thought needs. Don't flatten every line into one-thought-per-sentence "readability".
- **Be concrete, and Indian-specific where it fits**: a real bank, a real founder, a UPI quirk, a hiring story, a number you can cite. Specifics beat abstractions every time.
- **Make one argument, then trust the reader** to follow it. Engage the strongest opposing view honestly, in your own words.
- **Keep the wit dry and occasional**: one good aside or an italicised half-joke, then back to the point.
- **Use a metaphor once** if it clarifies, then move on.
- **Link real sources** for stats, laws, standards, and claims, and name names. Verify anything time-sensitive right before publishing.
- **End on the implication, the next question, or what you'd do differently**: never a recap.
- **Drop into plain speech every so often**: "That's just moving the problem." "Someone still pays." "The market will solve this anyway." Sentences that sound said rather than written are what make the polished ones credible.
- **Let a small idea stay a small post.** Don't force every piece into a long-form template.

## Writing the LinkedIn summary

Every post is announced on LinkedIn from three front-matter fields: `linkedin_hook`, `takeaways` and `linkedin_question`. Treat that announcement as a small piece of writing in its own right, not as an ad for the post. Most people who see it will never click. They should still leave with one idea they can use. That is what earns the click from the few who want the reasoning, and it is what makes people remember the name.

The announcer assembles it like this, with the article link and three hashtags added automatically:

```
<linkedin_hook>

Quick takeaways:
1. <takeaway>
2. <takeaway>
3. <takeaway>

<linkedin_question>
```

### The hook

LinkedIn shows roughly the first two lines, about 200 characters, before "see more". The hook is all most people will read, so it has to work alone.

- State the post's claim and anchor it in one concrete thing: a number, a named company, a date, something that happened.
- Put the fact first and the claim second. "In 13 days, Railway, OpenCode and Northflank each told customers to rotate their secrets. Assume your platform vendor is next."
- Write it for the feed, not as the title. A hook can be sharper and more specific than a title that also has to work in search.
- Never open with "New post", "I just published", "I wrote about", "Hot take", or a question.

### The takeaways

Three, occasionally four. This is where the value lives.

- Each takeaway is something the reader can do or decide this week: an action, a threshold, or a judgment. A summary of the argument doesn't count.
- Each one stands alone. A reader who sees only takeaway two should still get something out of it.
- Give it a test where you can. "Time a full secret rotation. If it takes more than a day, that is your real risk" beats "Practice secret rotation".
- Take them from the post's strongest lines, usually its action list or its sharpest plain-speech sentences, never from its headings. Make no claim the post doesn't support.
- One or two short sentences, under about 25 words. Vary how they open; three takeaways that all start with "Make sure" read as a template.
- Plain text only: no bold, emoji, arrows, or hashtags. The list numbers itself.

### The question

One sincere question that a founder, CTO or product leader could answer from their own company's experience. Questions like that turn comments into stories, and stories are what other readers stop for.

- Good: "How long would it take your team to rotate every secret you have stored with a vendor?"
- Avoid yes/no questions, "Thoughts?", "Agree?", "What do you think?", and questions that fish for compliments.

### What to avoid

The "Sound like Hitesh, not an AI" rules apply here too, and LinkedIn adds its own temptations:

- One sentence per line for drama, emoji bullets, "Here's what I learned", "Let that sink in", "This is huge".
- Restating the title and the description. The reader has already seen the cover image, which carries the title.
- Teasing instead of giving: "The third lesson surprised me" withholds the value the summary exists to deliver.
- Extra hashtags or a link in the text; the announcer adds both.
- Total length past about 1,000 characters. LinkedIn allows 3,000, but the format works because it is quick.

### Three tests before publishing

1. **Scroll test.** Would a CTO stop on the hook alone?
2. **Never-clicks test.** If someone reads only the takeaways, do they have something to use on Monday?
3. **Comment test.** Could a founder answer the question with a specific story from their company?

### Before and after

What this morning's post actually said on LinkedIn:

```
Assume your platform vendor will lose your secrets

Railway, OpenCode and Northflank each told customers to rotate their secrets within two weeks. The useful question is what a stolen key costs you before you notice.
```

The same post in the new format:

```
In 13 days, Railway, OpenCode and Northflank each told customers to rotate their secrets. Assume your platform vendor is next.

Quick takeaways:
1. Time a full secret rotation. If it takes more than a day, that is your real risk.
2. Put hard spend caps on every AI key. A capped leak is an annoyance. An uncapped one is an incident.
3. Plant a few fake keys next to the real ones and alert on any use. It is the cheapest early warning you can buy.

How long would it take your team to rotate every secret you have stored with a vendor?
```

The first asks the reader to click before they get anything. The second gives them three things to do and a reason to click for the rest.

## Internal links and calls to action

- Link to two or three related existing posts where they genuinely strengthen the argument. Do not force links or add a "related posts" list for its own sake.
- Internal post URLs follow `/:year/:slug`. Verify each link against the target's *actual* permalink, not its directory name. If the target post has no `slug` field, its URL is derived from the slugified title and may contain punctuation such as a period. The safest habit is to give every post an explicit `slug` and link to that.
- Where the subject naturally invites it, close with one soft, non-salesy call to action linking to the [AI advisory hour](/work-with-me/) (`/work-with-me/`) or the [AI training page](/ai-training/) (`/ai-training/`). Tie it to the specific problem the post explored, keep it to a single sentence, and never make it read like a brochure. Omit it entirely when it would feel bolted on.

## Rhythm and titles

Readers and search engines both judge the blog as a whole, and two patterns make it look machine-produced even when each post is good.

- **Rhythm.** Publish at most two posts a week, at least three days apart. A month with twenty posts after ten silent months reads like a content farm, whatever the quality. If several drafts are ready, schedule them rather than publishing them together.
- **Title shape.** The negate-then-reframe title ("X didn't do Y. Z did.", "It isn't X, it's Y", "X, not Y", "The X that wasn't") is the same tell as negative parallelism in the body. One in a while is fine; never two in a row, and never as the default. Most titles should simply state the claim: "Shopify scaled checkout by removing a system", "Your scoreboard is making AI-written software worse".
- **First-hand evidence.** Every post should carry at least one thing only Hitesh could write: a decision he made, a client conversation (anonymised), a number from his own work, something he got wrong. If a draft has none, ask him for one rather than inventing it.

A pull request that publishes a post runs `.github/workflows/post-rhythm.yml`, which warns (without blocking) when a post is within three days of another, when a week holds more than two, or when the title matches the formula.

## Search and AI discoverability

The site targets two kinds of search: long-tail questions leaders ask (what AI really costs, how to govern agents and coding agents, how to judge an AI pilot, what agentic commerce means for retail and loyalty) and local intent ("AI advisor in Hyderabad" and its variants). The theme handles the technical side: structured data, sitemap, robots.txt, `/llms.txt`, canonical links and the author box. A post only has to do three things:

- **`description`** is the answer in one sentence. Search results and AI answer engines quote it, so it states the finding plainly rather than teasing it.
- **`seoTitle`** (optional) replaces the title only in the browser tab and search results. The visible headline, social cards and LinkedIn post keep the claim. Use it when the claim title would never match what someone types, for example `title: "Cheaper tokens, bigger bill"` with `seoTitle: "Cheaper tokens, bigger bill: why AI costs keep rising"`. Keep the claim first and the search phrase after it, in under about 60 characters.
- **Guides.** If the post belongs to one of the topic guides under `content/guides/`, add its `"YYYY/slug"` to that guide's `posts` list. The guide lists it, and the post links back to the guide automatically.

The phrase each page and guide owns is listed in [`docs/seo-keyword-map.md`](docs/seo-keyword-map.md), along with gaps worth writing for. Check it before choosing a `seoTitle`, so a new post supports a page instead of competing with it.

Press coverage goes in `hugo.toml` under `params.press`, with the image in `static/images/press/`. It renders on the About and Hyderabad pages and in the structured data.

## Drafting checklist

Before considering a post complete, confirm:

- [ ] The post has one clear central idea and the title reflects it.
- [ ] The opening reaches that idea quickly.
- [ ] The writing sounds like an experienced person sharing a considered view, not a generic brand.
- [ ] Every section, example, and list earns its place.
- [ ] Technical terms are explained at the right level for the intended reader.
- [ ] Factual and time-sensitive claims have been checked and linked to reliable sources.
- [ ] Claims, numbers, and references a reader would want to verify are linked inline where they appear, not collected at the end.
- [ ] Front matter uses the correct date, an explicit `slug`, existing categories, focused tags, and `image` syntax.
- [ ] `linkedin_hook`, `takeaways` and `linkedin_question` are set and pass the scroll, never-clicks and comment tests in [Writing the LinkedIn summary](#writing-the-linkedin-summary).
- [ ] Internal links resolve to the target posts' real permalinks, and any advisory/training call to action is natural and singular.
- [ ] The directory year matches the publication date's year.
- [ ] The `date` is today or earlier, never in the future, or Hugo will drop the post from the deployed site.
- [ ] Images exist in the page bundle, render correctly, have useful alt text, and include credit where needed. An SVG cover starts from the X-post-style template, opens with the claim in caps, and follows with an informative paragraph of up to five lines that fits inside the frame (render it and check nothing runs off the edge). Commit only `cover.svg`; CI generates the `cover.png` social raster (run `node .github/scripts/rasterize-cover.mjs` to preview it locally).
- [ ] The post has been proofread aloud for Hitesh's conversational rhythm.
- [ ] Checked against "Don't over-compress": read three consecutive paragraphs and confirm the sentence lengths genuinely vary, that at least half the paragraph endings are flat rather than quotable, and that a few sentences sound spoken rather than written.
- [ ] A review pass has been requested from Hitesh and the resulting notes are addressed.
- [ ] Scanned against "Sound like Hitesh, not an AI": no negative parallelism, self-answered questions, "Here's the…" suspense, "-ing" analysis tails, any em dash, bold-lead bullets, or the AI house vocab; any single trope that remains is deliberate and isolated.
- [ ] Straight quotes and plain ASCII throughout (no smart quotes, no `→` arrows, no em dashes).
- [ ] The post is at least three days after the previous one, the title is not a negate-then-reframe formula, and the post carries at least one first-hand detail.
- [ ] The `description` states the answer plainly; `seoTitle` is set if the title would never match a search; the post is added to the right guide in `content/guides/`.
- [ ] `hugo server -D` shows a good home-page card and post page.
- [ ] `hugo --minify` completes without errors before publication.

## Editorial philosophy

Every article should do at least one of the following:

- challenge conventional wisdom
- connect ideas from different disciplines
- introduce a useful mental model
- explain second-order effects
- improve how leaders make decisions
- simplify a complex topic without oversimplifying it

Avoid writing articles whose only purpose is explaining what happened.

Technology is only interesting because it changes business decisions.

Always ask:

Why should a CEO care?

Why should a CTO care?

Why should a product leader care?

Why should an investor care?
