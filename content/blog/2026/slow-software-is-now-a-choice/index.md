---
title: "AI made optimization cheap. It didn't make software fast."
slug: "slow-software-is-now-a-choice"
date: "2026-08-22"
description: "Slow software was always blamed on cost and scarce talent. AI erased both, and exposed the constraints that actually decide whether your product is fast."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "strategy"
  - "software-engineering"
  - "economics"
  - "performance"
---

Dan Luu recently argued, plainly, that [there's no reason for software to be slow anymore](https://danluu.com/perf-opt/). His case is concrete and mostly right. Coding agents have collapsed the cost of performance work. He pointed an agent at a regex benchmark for a month and got a 2x to 4x speedup on the long queries. In another example, a strong performance engineer interviewing at Anthropic lost a bounded optimization problem to the model, which tried approaches he said he'd never attempt without weeks to burn. Work that used to need a rare specialist now needs a few sentences and some patience.

I believe every word of that, and I still think most software will stay slow. Those two statements only look contradictory if you assume the cost of doing the optimization was ever the thing holding speed back. It wasn't.

## What actually got cheap

One skill got commoditized, and it is a real one. Writing the optimization: profiling a hot loop, trying a different memory layout, running the experiment, reading the result. That work used to sit with a few expensive people, so the math almost never worked. A month of a senior engineer's time to shave a benchmark no customer had complained about was an easy line to cut. Now the same loop costs an afternoon of agent time and a small token bill. Luu is right: this reprices the whole activity.

But look at which part got cheap. The doing got cheap. The deciding did not.

## The constraint that didn't move

Ask what a performance engineer actually does and the coding is the smallest part. The job is knowing which slowness costs money, building a measurement you can trust, and being able to tell whether a change helped or just pushed the problem somewhere you weren't looking. The obvious objection writes itself: to get fast code out of an agent, you still have to know what fast looks like. It will happily hand you a benchmark that improves and a system that doesn't, and do it with total confidence.

This is the same dividing line I keep coming back to. AI is strong where the work is hard but [checking the answer is cheap](/2026/hardest-work-not-messiest); it is weak, and dangerous, where the hard part is deciding what to measure in the first place. Optimization has both halves. The agent nails the half that was expensive and leaves you the half that was scarce.

So the scarce skill inverts. When producing the fix is free, the value moves entirely to problem selection and verification. Performance expertise stops being a moat the moment everyone can rent it, the way [the model stopped being a moat](/2026/your-model-was-never-your-moat) once open weights caught up. What's left worth paying for is judgment about where a millisecond is worth a rupee, and the discipline to prove the machine delivered one.

## Why your software is still slow

Even granting all of that, cheap optimization does not touch the real reason your software is slow: nobody was optimizing because nobody was paid to. Features close sales. Speed rarely shows up in a deck. A product manager choosing between an integration customers keep asking for and a latency win they haven't noticed will pick the integration every quarter, and be right to, given how they are measured.

Cheap optimization does not change that incentive. It removes the excuse. "We couldn't afford to make it fast" was true for twenty years and carried more weight than it looked; it let slow software be a constraint rather than a decision. That sentence is now false. Slow software is a choice, and the choice belongs to whoever sets the priorities, not to the engineer who didn't have three spare weeks. This is why performance stays an organizational problem after the technical part is solved. The tool got cheaper. The org chart didn't.

## The number that changes the business math

There is one place where the incentive has already flipped, and most leadership teams haven't noticed. In anything built on AI inference, latency and cost are the same variable. A slow model call is an expensive one. Optimizing that path isn't a UX nicety you fund if time is left over, it's gross margin, and these costs have a way of [moving to a budget nobody is watching](/2026/cheaper-tokens-bigger-bill). Cut the tokens and round trips on your hottest workflow and you've moved a number the CFO cares about, not just one users feel.

The users feel it too, which the old studies never let us forget. Deloitte and Google's ["Milliseconds Make Millions"](https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html) work found that a 0.1-second load improvement lifted retail conversions by 8.4%. That was true back when optimization was expensive. The input cost has since dropped by orders of magnitude and the output value hasn't. That is the definition of an underpriced investment, and it is sitting in most of your products.

The counterweight is real, so say it plainly. Cheap production also spawns more code, more services, more layers, faster than cheap optimization can claw performance back. [Jevons](https://en.wikipedia.org/wiki/Jevons_paradox) applies to software too: make a thing efficient to produce and you get more of it. A hot loop that runs 4x faster inside a system that adds three services a quarter is a rounding error. Which way net speed goes depends on whether you aim the cheap optimization at the workload that costs real money.

## What I'd tell a leadership team

Three things.

**Put a price on the slow path first.** The fix is cheap now; the wrong fix is still a waste. Before an agent touches anything, write down what this slowness costs you: compute bill, conversion, churn, an SLA you're about to breach. If you can't put a number on it, that is the finding. Optimize the paths that have numbers.

**Fund measurement, not optimization headcount.** The cheap thing is the change. The expensive thing is the harness that proves the change was real and didn't regress something else. Build the benchmark that reflects your actual workload first. It is the part the agent can't do for you, and the part that makes everything after it trustworthy. A team that can measure well can now optimize almost for free. A team that can't will ship fast, confident benchmarks and slow products.

**Don't let a cheap fix license sprawl.** The temptation, once optimization feels free, is to stop minding the architecture and just speed-patch symptoms. That is how you end up with a fast function inside a system nobody can hold in their head. Spend some of the dividend on subtraction, not only acceleration.

The durable lesson is worth carrying to the next thing that suddenly gets cheap. When a cost collapses, the value doesn't vanish. It relocates to whatever is still hard next door. Optimization got cheap, so the money moved to knowing what to optimize and proving that you did. The teams that win the performance race over the next few years won't be the ones with the best optimizers. They'll be the ones who can still tell, quickly and honestly, what is actually slow and what it is costing them.

If you're trying to work out where AI turns a cost you've tolerated for years into a decision you now have to own, that is the kind of problem I like to think through in an [advisory hour](/work-with-me/).
