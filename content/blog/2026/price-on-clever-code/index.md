---
title: "AI just put a price on clever code"
slug: "price-on-clever-code"
date: "2026-08-12"
description: "Google's case for Go is really a case against magic. When a model reads and rewrites your code, legibility stops being a matter of taste and starts showing up in the budget."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "software-engineering"
  - "ai-strategy"
  - "strategy"
---

Google published a post last week arguing that [Go is an ideal language for AI-assisted software engineering](https://developers.googleblog.com/why-go-is-an-ideal-language-for-ai-assisted-software-engineering/). The reflex reaction wrote itself: Go is Google's language, so of course Google thinks you should use it. Fair enough. But the conclusion is the least interesting part. Strip the word "Go" out of the argument and what remains is a claim about legibility that applies to every stack you run, and it quietly settles a fight engineering teams have been having for twenty years.

The honest core of the post is this: when a machine generates most of the code, the expensive step stops being writing and becomes reading. I've [made that argument before](/2026/reviewing-is-the-job) and won't relitigate it. What Google adds is a list of properties that make code cheap to review, and then attaches them to Go. One obvious way to do a thing. A formatter nobody argues with. Explicit errors instead of hidden control flow. A small dependency surface. A compiler that rejects a plausible-looking hallucination in milliseconds rather than at 2am in production. None of that is unique to Go. It is a description of any codebase that a stranger can read without a guide.

## What actually got repriced

For most of my career, "boring, explicit code" was a taste argument, and it usually lost. It lost to the engineer who shipped a feature in a day using a clever abstraction, a bit of metaprogramming, a framework that did nine things by convention so you only wrote one. Those tricks trade onboarding cost for expert velocity. They were never free. The bill just landed on the next person who had to change the clever bit and couldn't, and that person was rare enough to blame quietly.

Now that person is a model, and it is your most prolific contributor. It re-onboards from scratch on every task. It sees what fits in its context window and nothing else. It cannot walk over to the developer who wrote the magic and ask what it does. Metaprogramming that used to cost you one confused junior a quarter now taxes every single change the AI makes to that file. The cost of cleverness didn't appear out of nowhere. It moved to where the volume is, and volume multiplied it.

That is the actual shift. Your codebase has a second reader now, and unlike the human one, it touches everything and remembers nothing.

## The part Google left out

The post is philosophical about why a model likes Go, and it skips the blunt reason: training data and tooling. A model is good at mainstream, heavily represented languages because it has seen millions of examples of them and the surrounding ecosystem has decades of linters, type checkers, and test runners to lean on. That makes this a rich-get-richer dynamic. Python, JavaScript, TypeScript, Java, Go: they each get an AI dividend that compounds.

Which means the elegant niche language you love now carries an AI tax. Choose it and you are opting your most productive contributor out of its strengths. Sometimes that is the right call, when the domain genuinely pays for the language's safety or expressiveness. But it is now a line item in the architecture decision, not a free aesthetic preference. The uncomfortable second-order effect is that AI may flatten language diversity over time. The boring languages didn't get better. Their tooling did, and that turned out to be enough.

## What I'd tell a leadership team

Three things, in order.

**Don't switch languages.** The gains are mostly available where you already are. Most of what Google credits to Go is habits, not syntax: strong types over dynamic guessing, explicit over implicit, one obvious way over five clever ones, a small dependency surface, a formatter and linter that end the argument, a CI pipeline that rejects nonsense in seconds. You can buy the large majority of that benefit in Python or TypeScript by cutting magic and tightening conventions. A rewrite buys you the last slice at ten times the price.

**Fund legibility as a real criterion.** Add one question to architecture review and mean it: could a competent stranger change this safely with only what is in the repository? The stranger used to be a hire you interviewed once a quarter, so the answer rarely justified slowing down. Now the stranger is a model touching every pull request, and the cleanup you kept deferring finally has a number attached. AI didn't change what good code is. It handed you the budget line to justify getting there.

**Treat your tooling as a management layer.** Linters, formatters, type checkers, and CI stopped being hygiene the day a model started writing production code. They are how you supervise your most prolific and least accountable developer, one that will confidently ship something that compiles and does the wrong thing. If you cannot yet [explain what your agents are producing](/2026/the-code-you-cant-explain), that layer is where you get the explanation back.

The Go post reads like a language pitch. It's really a memo about where advantage is moving. When code is cheap to generate, the scarce thing is code that is cheap to trust, and that comes from your conventions and your discipline, not from your model and not really from your language either. Your [model was never your moat](/2026/your-model-was-never-your-moat), and neither is your syntax. The teams that pull ahead over the next few years won't be the ones with the cleverest abstractions. They'll be the ones boring enough that a machine, and a new hire, can change anything without asking permission.

If you're weighing where AI actually changes your stack and where it just changes your habits, that's the kind of question I like to work through in an [advisory hour](/work-with-me/).
