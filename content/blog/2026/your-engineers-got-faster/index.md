---
title: "Your engineers got faster. Your company didn't."
slug: "your-engineers-got-faster"
date: "2026-08-30"
description: "AI reliably speeds up the people writing code, yet DORA's data shows delivery grew less stable. The gain lands where your real constraint isn't."
image: images/cover.svg
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "software-engineering"
  - "engineering-leadership"
  - "productivity"
  - "strategy"
draft: false
---

Gregor Ojstersek made a claim last week that sounds like a truism and isn't: [the biggest productivity hack is not AI, it's a good culture](https://newsletter.eng-leadership.com/p/good-culture-is-the-biggest-productivity). I want to take it seriously, because the numbers underneath the slogan are stranger than the slogan.

Google's [2024 DORA report](https://dora.dev/research/2024/dora-report/) surveyed enough engineering teams to be worth listening to. It found that a 25% increase in AI adoption was associated with a [1.5% drop in delivery throughput and a 7.2% drop in delivery stability](https://redmonk.com/rstephens/2024/11/26/dora2024/). The same teams reported that AI made individuals faster, more focused, and happier in the work. Both things are true at once. The people writing the code got quicker, and the software got out the door slower and broke more often.

The tools aren't broken. The problem is where the constraint actually lives, and most companies buy AI as if they already knew.

## Speeding up the wrong step

Every system that turns inputs into finished work has one step that sets the pace. Eli Goldratt built a whole management philosophy, the [Theory of Constraints](https://en.wikipedia.org/wiki/Theory_of_constraints), on one unglamorous observation: an hour saved anywhere except the bottleneck is an illusion. Speed up a machine that was never the slow one and you don't get more finished goods. You get a taller pile of half-finished ones waiting in front of the machine that was slow all along.

Writing code was rarely the slow machine. In most teams the slow step is downstream: the reviewer who has to actually understand the change, the one architect everything routes through, the integration step, the decision sitting in someone's inbox for three days. AI makes the fast step faster. The pile in front of the slow step just grows quicker. DORA's stability number is that pile showing up as defects and rollbacks.

I've argued before that [writing code got free and reviewing it is the job now](/2026/reviewing-is-the-job). The DORA data is the same point measured for the whole company instead of a single pull request.

## Culture is your clock speed

This is where Ojstersek's word "culture" needs to be made concrete, because culture is where good arguments go to get vague.

Strip away the posters and what a good culture leaves behind is measurable: how long a decision waits before someone owns it, how fast a review comes back, whether an engineer can ship a change without three meetings, whether people trust each other enough to work in small batches instead of hoarding one giant branch. Those are the clearing rates of the queues AI can't reach. A high-trust team clears them fast. A low-trust team clears them slowly, and no coding assistant changes that, because the assistant isn't in the meeting.

Conway's Law usually gets quoted as "you ship your org chart." The sharper version is that you ship at the speed your org chart clears decisions. AI raises the supply of code flowing into that org chart and does nothing to the clearing rate. In a slow-clearing org you've just widened the gap between how much work gets started and how much can finish. That gap is the instability DORA measured.

## The measurement trap

Here is the part that should worry anyone signing the invoice. The metrics companies use to justify AI spend are, almost without exception, production metrics. Pull requests merged. Tickets closed. Lines written. Tokens consumed. Seats activated. Every one of them measures the step AI actually speeds up, which means every one of them looks great whether or not the company got faster at delivering anything.

You see the local win. You are structurally blind to the missing system win. That gap is where AI budgets get renewed on evidence that proves nothing. It's also why I keep telling teams to [build their benchmark out of their own delivered work](/2026/your-backlog-is-the-benchmark) rather than trusting a number that only counts output.

## If I were advising the company

Start by finding the constraint. Where does work sit and wait? Between which two steps does the queue build? For most teams the honest answer is not "we can't write code fast enough." It's review, or testing, or a decision one overloaded person has to make.

Then the choice is a business one, not a tooling one. Either point AI at the constraint (agents that draft the review, generate the tests, or prepare the decision so it clears in an hour instead of a week, within [the autonomy you can actually trust them with](/2026/the-autonomy-budget)) or fix the constraint the old-fashioned way by moving authority closer to the work. Both are legitimate. Buying more production speed for a system that was never short on production is not.

That is what AI opportunity discovery honestly looks like: constraint discovery first, model selection a distant second. The company that speeds up its slow step quietly pulls ahead of the one that gave everybody a faster keyboard and wondered why its delivery numbers went the wrong way.

Your engineers getting faster is real, and it feels like progress, which is exactly what makes it easy to misread. Progress you can feel is not the same as progress you can ship. Before the next round of licenses, I'd spend a week finding out where your work actually waits. That week is cheaper than the year you'll otherwise spend accelerating the wrong step.

If you want a second pair of eyes on where your real constraint sits before you scale AI across the org, that's the conversation I keep having in an [AI advisory hour](/work-with-me/).
