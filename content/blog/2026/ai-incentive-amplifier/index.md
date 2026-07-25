---
title: "AI didn't make your software worse. Your scoreboard did."
slug: "ai-incentive-amplifier"
date: "2026-07-25"
description: "AI slashed the cost of shipping features but not the cost of reliability, so it amplifies whatever your organization already rewards. Most reward the wrong thing."
image: images/cover.svg
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "software-engineering"
  - "product-strategy"
---

Most people I talk to hold two thoughts at once and don't notice the tension. The first is that AI has made writing code almost free. The second is that the software they actually use keeps getting worse: the banking app that asks for a fingerprint three times, the car screen that lags, the SaaS tool that ships a new button every week and a fresh bug alongside it. Both are true. The gap between them is the most interesting thing happening in software right now, and it is not a technology problem.

The easy explanation is that AI writes bad code. That is partly right and mostly beside the point. [GitClear's analysis](https://www.gitclear.com/ai_assistant_code_quality_2025_research) of 211 million lines of change found code churn roughly doubling since assistants went mainstream, refactoring collapsing from a quarter of all changes to under ten percent, and duplicated blocks rising eightfold. So more of the code is throwaway. But suppose the models wrote clean code tomorrow. The software still wouldn't get better, because the quality problem was never about who, or what, types the code.

## Quality is set at the definition of done, not the keyboard

A feature's quality is decided long before anyone writes it, in the acceptance criteria, the cases you test, and what you are willing to hold a release for. AI changed the cost of production. It left the definition of done exactly where it was. If "done" means the happy path demos and the ticket closes, a faster coder just reaches that same low bar sooner and moves to the next ticket. The bar didn't move. You just get to it quicker, and you get to more of them.

This is why the smartest model can still ship you a worse product. I've argued before that [model quality and product quality are different things](/2026/smartest-model-worse-product/), decided by different people at different moments. The code generator sits at the cheapest, most downstream point in that chain. Pouring capability into it changes how fast you produce, not what you consider acceptable to ship.

## AI amplifies whatever your scoreboard points at

AI multiplies whatever your scoreboard already measures. Give a team rewarded for shipped features a tool that makes shipping cheap, and you get more features. Give a team rewarded for reliability the same tool, and you get more reliability. This is the pattern I keep coming back to when I advise teams on where AI actually lands: it is an amplifier, and an amplifier has no opinion about what it amplifies.

The trouble is that almost every scoreboard points at visible output. Features shipped, tickets closed, story points burned down. These are easy to see and easy to celebrate. Reliability is invisible until it breaks, so it rarely earns a line on the dashboard. AI therefore cheapens the behavior you already over-reward and does almost nothing for the one you under-reward. Whatever gap you had between velocity and quality, AI widens it. This is Goodhart's law with a bigger engine: [when a measure becomes a target it stops being a good measure](https://en.wikipedia.org/wiki/Goodhart%27s_law), and now hitting that target costs a tenth of what it used to.

## Scarcity was doing a job you now have to do on purpose

When shipping a feature took three engineers two weeks, that cost was doing useful work you couldn't see. It forced prioritization. You could not build everything, so you argued about what mattered, and that argument was your quality gate whether you named it or not. Remove the cost and you remove the argument. Scope expands to fill the new capacity, and it keeps expanding until something visible breaks, because nothing else is stopping it.

Economists would recognize this. When a binding constraint disappears, the system does not settle into calm abundance; it runs until it hits the next constraint. In software that next constraint is reliability, and your users reach it before your dashboard does. The velocity chart looks glorious for two quarters. Then the support queue, the churn number, and the on-call rotation start telling a different story. Producing work got nearly free, but [the bill for understanding what you built arrives later](/2026/automation-is-cheap-understanding-is-the-bill/), and it is denominated in incidents.

## What I'd change first, before buying more seats

If I were advising a company that just handed every engineer an AI assistant and expected quality to rise, I would not touch the tooling. I would change the scoreboard, in three moves.

Measure stability next to speed. Google's [DORA research](https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance) tracks throughput and stability together, precisely so a team cannot win on one while losing the other. Their strongest finding is that elite teams refuse the tradeoff: they are fast and safe at once. You only find that out if you watch change failure rate and recovery time, not just deployment frequency.

Put the unhappy paths into the definition of done, and make review a first-class activity rather than a formality. When production is cheap, [reviewing is where the actual engineering now happens](/2026/reviewing-is-the-job/), and it deserves the time you saved by not typing.

Then reward someone, visibly, for the feature that did not break. Whatever you celebrate, AI will help you do more of. That is the whole point of the tool, and the whole risk.

Buying AI seats without changing what you reward is buying a faster printing press for your existing defects. If you are trying to work out what your team should actually be optimizing for before you pour AI into it, that is exactly the kind of question I like to work through in an [AI advisory hour](/work-with-me/).
