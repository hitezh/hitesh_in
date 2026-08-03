---
title: "84% of developers use AI. Only 29% trust it."
slug: "adoption-is-not-trust"
date: "2026-08-03"
description: "Most AI rollouts track seat usage and call it progress. The number that predicts real return is whether teams trust the output enough to stop re-checking it."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "strategy"
  - "developer-tools"
---

Stack Overflow's [2025 developer survey](https://survey.stackoverflow.co/2025/) has two numbers that belong in every board deck about AI. The share of developers using AI tools rose to 84%, up from 76% the year before. The share who trust the accuracy of what those tools produce fell to 29%, down from around 40%. Usage went up. Trust went down.

Most AI rollouts I see are built to move the first number and are blind to the second. That is the whole problem in one sentence.

## The number your dashboard shows, and the one it hides

Adoption metrics are easy to collect and easy to celebrate: seats provisioned, monthly active users, percentage of engineers with a copilot turned on. Those all track the first number. But 84% usage against 29% trust means most of that usage is *un-trusted* usage. Engineers run the tool, then re-check everything it hands back, because they have to. That is the single most expensive way to operate: you pay for generation and then you pay again for full verification. The dashboard reports "AI-adopted." The P&L shows you bought a confident second draft that nobody relies on.

I made this point in a different frame when I argued you should [point your AI where the checking is cheap](/2026/point-ai-where-checking-is-cheap/). The trust gap is the same economics seen from the org chart instead of the task. Where verification is expensive and trust is low, adoption produces motion without leverage.

## What tool attachment is actually protecting

The reflexive reading of a senior engineer who won't give up vim, or a linter, or a hand-rolled bash script, is that they are resistant to change. I think that reading is lazy. What they are protecting is calibration: the hard-won, mostly unconscious sense of exactly when this tool lies to them and when it can be believed. Stack Overflow's own writers make a version of this point, that a tool encodes trust built through years of repetition, and that switching tools means rebuilding all of it.

Here is the part that changes how you should manage it. The expensive switching cost is not retraining fingers, it is rebuilding that calibration from zero. Senior people resist harder because they have more of it to lose, which makes their resistance a risk signal rather than a culture problem. Scott Hanselman has noted that a deterministic bash script sometimes beats an AI agent for a given job. Of course it does. You have already underwritten the script. You know precisely where it fails.

## Trust is a stock. Probabilistic tools keep resetting it.

Predictable tools accumulate trust like compound interest. Same input, same output, a thousand times over, and your confidence converges toward "I can ship this without looking." A probabilistic tool that also changes underneath you never gets there. A vendor tweaks the model weights or the system prompt on a Tuesday, and the thing you calibrated on last month is not quite the thing you are using today. Every silent update is an un-versioned dependency update to your team's judgment.

That inverts the comfortable story about capability. I have written before that [better models can raise the checking bill, not lower it](/2026/point-ai-where-checking-is-cheap/), because plausible-but-wrong output is costlier to reject than obvious garbage. Delivered through constant churn, capability does something worse: the frontier model that leaps ahead every week is, from a trust standpoint, a stranger every week. It never earns the calibration that would let you stop double-checking. More capable, less trusted, at the same time.

## Underwrite it the way a bank underwrites credit

There is a cleaner analogy for what is going on, and it comes from lending. A bank extends unsecured credit on the strength of a repayment history. A counterparty with no track record who keeps changing their name gets no unsecured credit; you demand collateral first. Re-reviewing every AI output is exactly that collateral, and demanding it is the rational response to a borrower you cannot yet underwrite.

The way you build a real lending relationship is a sequence of small, repeated, verifiable transactions where the downside is bounded. That is also how trust in a tool is built, and it is the precise opposite of a big-bang rollout that hands a high-autonomy agent the keys on day one. When you [deploy an agent, you have hired a colleague with no reviews](/2026/you-hired-an-agent/), and you onboard it the way you would onboard a new hire you don't yet know: narrow scope, close supervision, widening autonomy as the track record accrues. Incremental adoption is not timidity. It is underwriting.

## What should change for the people deciding

- **For the CEO and the board.** Stop reporting adoption. Ask instead for *trusted* adoption: the share of AI output shipped without a human redoing the work. That one metric separates the companies capturing return from the ones quietly paying twice.
- **For the CTO and engineering leaders.** Pin your tools. Treat vendor-side model and prompt changes as dependency updates that get versioned, tested, and rolled out deliberately, not absorbed silently. A tool that changes without telling you cannot be calibrated and cannot be debugged. Then aim early adoption at the surfaces where checking is cheap, so trust rebuilds in small, bounded steps.
- **For product leaders building AI features.** The attribute that wins is legibility and stability, not raw capability. Show the work, bound the blast radius, behave the same way twice. In a market drowning in capability, determinism is a feature you can charge for.

The market will underprice this for a while, because capability is visible and trust is not. Model access is becoming universal and, [as open weights close the gap, rentable by the month](/2026/your-model-was-never-your-moat/). The scarce, compounding asset is a workforce and a toolchain that have earned each other's trust, and you can only build that the slow way.

So the number to watch is not how many of your engineers use AI. It is how many have stopped double-checking it, and whether they were right to.

If you are trying to tell trusted adoption from the kind that only looks good on a dashboard, that is the conversation I have in an [AI advisory hour](/work-with-me/).
