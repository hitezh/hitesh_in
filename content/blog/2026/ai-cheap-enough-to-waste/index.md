---
title: "AI got cheap enough to waste. Most teams still ration it."
slug: "ai-cheap-enough-to-waste"
date: "2026-10-09"
description: "A developer says a near-free model changed what he bothers to attempt. For leaders, the useful question is which work never got funded, and who checks the results."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "economics"
  - "llm"
  - "deepseek"
  - "engineering-leadership"
image: images/cover.svg
draft: false
---

One developer spent a month [using DeepSeek 4.1 Flash heavily across a dozen projects](https://www.dgt.is/blog/2026-10-07-deepseek-freek-out/) and reports that, mid-session, he can't tell it from Opus. His day-long sessions rarely cost more than a dollar. That is one person's subjective report, so weigh it that way. What I find more useful is the behavior he describes: "there is no shame now in spinning up mindless tasks," including exploratory UI testing and tidying files, which costs $0.003 instead of $1.

Most of the commentary will be about which lab is losing. I'd rather ask what a leadership team does differently when attempts cost almost nothing.

## Cheap changes which work gets attempted

Every company has a line below which work simply doesn't happen. Exhaustively clicking through an admin screen looking for breakage, reading every support ticket from last quarter, reconciling ten thousand product descriptions against a style guide: the value is real but small, and a person's time priced it out. Even at a dollar an attempt, much of it stayed marginal.

When the attempt costs a fraction of a cent, the line moves, and a whole category of work becomes worth doing. Cloud storage did something similar. Nobody mainly saved money; companies started keeping data they used to throw away. Teams that judge AI by "cost per task we already did" will see modest savings and miss the new category entirely.

So the question I would put to a CTO is this: what is on the list you stopped writing down because nobody would ever fund it?

## Rationing habits outlive the scarcity

Most AI budgets are built around caps, seats, and usage counts, which makes sense when a heavy session is expensive. Under that regime engineers learn to feel guilty about a speculative run. I [wrote yesterday](/2026/who-sees-the-ai-bill/) about how blunt a cap is, and cheap models make the problem sharper: the same cap that protects you from a runaway frontier bill also discourages the thousand harmless experiments that would have found something.

A sensible policy separates the tiers. Leave the cheap tier effectively unmetered, so people experiment freely. Meter the expensive tier, where a careless loop really does cost money. Budget by class of work rather than by head.

## The expensive model becomes the auditor

The part of the post I'd underline is easy to skip. He still pays for Opus, but uses it for a final review on critical tasks, then hands the fixes back to the cheap model. In his words, it is "less about quality and capabilities and more about getting new eyes on a problem."

That is how audit works in finance. The auditor adds value mainly by being independent of the people who prepared the books. My reasoning, and it is a hypothesis rather than something I have measured, is that models from different labs share fewer blind spots than one model reviewing its own output. If that holds, the premium model earns its price at the point where independence and consequence meet, and nowhere else. This is the same shift I described in [writing code got free, reviewing it is the job](/2026/reviewing-is-the-job/), applied to model spend: pay for the checking, not the typing.

## Why the labs aren't panicking

The top comments on the original post offered a few explanations, and I think the sturdiest one is mundane. Large companies sign longer contracts with the vendors they already know, and a cloud sales rep has to tell them a cheaper option exists. There is real friction too: some buyers will want legal review before using a model from a Chinese lab, and others will route to a US-hosted provider serving the same open weights.

Underneath all of it sits an evaluation problem. Many enterprises are paying their vendor to avoid answering "is the cheaper model good enough on our work?" A team with a small test set built from its own merged work, the kind I described in [your backlog is the only benchmark that matters](/2026/your-backlog-is-the-benchmark/), can answer that in an afternoon. A team without one will pay a premium for peace of mind, and keep paying it.

## What I'd do on Monday

1. Write down ten tasks your team considers not worth doing, then price each at a fraction of a cent per attempt and see how many flip.
2. Split your AI policy into an unmetered cheap tier and a metered expensive tier.
3. Build the small evaluation, and decide which model reviews the work of which.

The gap between the best model and a good-enough one will keep moving. The gap between companies that know what good enough means for their own work, and those that don't, is the one worth closing. If you want to think through where that line sits for your business, that is what an [advisory hour](/work-with-me/) is for.
