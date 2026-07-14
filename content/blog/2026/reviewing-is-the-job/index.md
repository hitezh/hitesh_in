---
title: "Writing code got free. Reviewing it is the job now."
slug: "reviewing-is-the-job"
date: "2026-07-14"
description: "Microsoft's engineers merged 24% more pull requests with AI. The constraint didn't vanish; it moved to review, and most teams are still counting the wrong thing."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "software-engineering"
  - "llm"
  - "strategy"
---

Microsoft ran the experiment most companies are only talking about. Over four months in early 2026 it put command-line coding agents, Claude Code and GitHub Copilot CLI, in front of tens of thousands of its own engineers and [measured what happened](https://arxiv.org/abs/2607.01418). The adopters merged about 24% more pull requests than they otherwise would have, and the lift held for the whole study rather than fading as a novelty. If you sell AI tooling, that is the slide.

Read one line further and the study undercuts its own headline. The authors note, plainly, that "a merged PR is not the same as the value it delivers." They used merged pull requests as a proxy because it is countable, not because it is the thing that matters. That caveat is the whole story, and most teams are about to learn it the expensive way.

## Speeding up the wrong step

Writing code was never the bottleneck in a healthy engineering org. Understanding the problem, deciding what to build, and being confident the change is safe were. AI made the one cheap step, typing the code, far cheaper, and left the expensive steps roughly where they were.

Operations people have a name for what happens next. [Goldratt's theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints) says that speeding up any step that is not the bottleneck does not raise throughput; it piles up inventory in front of the step that still is. In a software team that inventory is pull requests waiting to be reviewed, understood, and vouched for. Twenty-four percent more PRs flowing into the same review capacity does not mean 24% more value shipped. It means the queue got longer, or the reviews got shallower, or both. Generation got faster, verification did not, and the pressure moved downstream and sat there.

That is why the proxy is dangerous rather than merely imprecise. Counting merged PRs redefines productivity as generation, which is exactly the part AI just made free. Optimise the number and you train the whole org to pump more code into a review pipeline that was already the constraint. It is the same trap as chasing a public leaderboard, except now the misleading benchmark is [your own dashboard](/2026/your-backlog-is-the-benchmark/).

## The tools were built for writers

The deeper shift is not about dashboards at all. Almost every tool in the stack assumes a human writes the code. Programming languages are the clearest case. We spent decades optimising them for authoring ergonomics: Python won on readability, but readability in the service of a person *writing* and later maintaining what they wrote. The reviewer was assumed to be the author, a little older and wiser.

Flip the authorship and that assumption breaks. When a machine writes most of the code and a human only reviews it, the language should optimise for a different question: what can this code touch, and how sure am I, without reading every line? That is close to the design goal of [Jacquard](https://github.com/jbwinters/jacquard-lang), a new language built for AI-written, human-reviewed code. Every function signature declares its effects, so a type like `(text) ->{net} text` tells a reviewer this thing can reach the network before they read the body. There are no ambient capabilities to go hunting for. Whether Jacquard itself wins is beside the point. It is an early, honest attempt to re-tool for the constraint that actually binds now: reviewability, not writability.

You do not need a new language to act on this. Architecture that makes blast radius legible, clear module boundaries, capability limits, effects visible at the edge, is worth more than it was two years ago, because a reviewer now spends their scarcest resource on code they did not write and cannot fully trust. The [code you can't explain](/2026/the-code-you-cant-explain/) is a liability whoever typed it.

## The asset you can't buy by the seat

Generation capacity is now something you purchase per seat. Review capacity is not. It is your senior engineers' comprehension bandwidth, and it does not scale with a bigger contract. That inverts a quiet assumption in most engineering orgs, where reviewing was the tax you paid to write, the chore between the real work. Review is now the senior skill and the binding constraint, and it should show up in how you hire, how the career ladder reads, and where your strongest people spend their day.

I have argued before that [almost every team codes with AI and only a third governs it](/2026/ai-writes-the-code-who-governs-it/). This is the mechanism underneath that gap. Governance is not a policy document. It is review capacity, plus the tooling that makes review possible at the speed generation now runs.

## What I would do

If I were advising a team riding this wave, I would stop celebrating merged-PR counts and instrument the actual constraint. Measure review latency, the time a change waits for a human. Measure defect escape rate and reverts, which tell you whether faster merging bought quality or borrowed against it. Treat those as the real productivity numbers and merged PRs as vanity until proven otherwise.

Then spend on the bottleneck. That means tooling and architecture that shrink the cost of understanding a change, not just the cost of producing one, and it means protecting reviewers' time as the genuinely scarce input it has become.

The companies that pull ahead over the next few years will not be the ones that generate the most code. Generation is a commodity you can buy by the seat. They will be the ones that can still understand, trust, and stand behind what all that generation produced. Throughput went up 24%. The number worth your attention is what share of it you can actually vouch for.

If you are working out where your real AI constraint sits, generation or the review and judgment behind it, that is the kind of problem worth [an advisory hour](/work-with-me/).
