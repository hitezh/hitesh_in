---
title: "Put your AI where it can search"
slug: "put-ai-where-it-can-search"
date: "2026-09-17"
description: "A $1,200 model beat Postgres's decades-tuned query planner by searching offline. Where you place AI in a system decides its payoff more than which model you pick."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "strategy"
  - "engineering"
  - "economics"
---

Someone spent about $1,200 and trained a 4-billion-parameter model to plan database queries better than PostgreSQL does it itself. On the standard [Join Order Benchmark](https://rohanbansal.com/qorl) the model's plans cut total runtime by close to half, and not a single query came out slower. Read quickly, that is a story about a small AI beating a database refined over decades. Read slowly, it is a story about placement, and placement is the part you can actually use.

## The planner gets one guess

Here is the asymmetry the benchmark hides. Postgres's planner has to choose a plan in a millisecond or two, the moment your query arrives, with no chance to try an alternative and see how it does. It estimates, commits, and runs. The model worked under completely different rules. It was allowed to propose a handful of plans for each query, run them, time them, and keep the fastest. It did not out-think the planner so much as out-search it, because it was placed somewhere searching was allowed.

That distinction matters because it travels and the intelligence does not. You cannot drop a 4B model into the query path; it is thousands of times too slow to pick a plan in the time Postgres has. As I've [argued before](/2026/smartest-model-worse-product/), the number that decides whether a real-time AI product works is the second your user waits, not the model's benchmark score. What you can do is let the model search offline, once, and freeze the answer.

## AI as a compiler, not an interpreter

The pattern underneath is old and worth naming plainly. A compiler does expensive analysis once, ahead of time, and emits something small and fast that runs the same way every time. An interpreter decides on the fly, on every execution. Most people, when they picture AI in their product, picture an interpreter: a model sitting inside the request, deciding live. This result points the other way. The model is the compiler. It does slow, probabilistic, throwaway search at design time and emits a cheap, deterministic artifact, here a query hint, that your boring runtime executes at full speed.

Once you see the shape you find it everywhere heuristics live. Index selection, cache eviction, job scheduling, routing tables, pricing and discount rules, feature-flag rollouts, ad bids. All of these are places where a team hand-tuned some rules years ago, the rules have to run fast and predictably, and nobody has revisited them because the tuning was tedious. A model that searches the space offline and hands back a rule your existing system runs unchanged is a very different proposition from a chatbot, and usually a better one. It also keeps the runtime dull on purpose, which is [its own kind of strategy](/2026/boring-technology-is-an-ai-strategy/).

## The cheap model does the recurring work

The money is the other lesson. The $1,200 was mostly one-time: a few hundred dollars of GPU time, and a few hundred more spent calling a large frontier model to teach the small one. The frontier model was a tutor, hired once. The 4B student now does the recurring work, and its output costs nothing to run, because it is just text a database extension reads. If you were waiting for model prices to fall before AI made sense inside your infrastructure, this is what the answer looks like: rent the big model briefly to create the small one, then own the small one. Your advantage was never [which model you could call](/2026/your-model-was-never-your-moat/).

The search worked for a reason that is easy to miss. Trying a dozen query plans is cheap because checking a plan is cheap: you run it and time it. When verifying an answer costs far less than producing it, you can let a model guess freely and keep only what survives. That gap between generating and checking is [the best predictor I know](/2026/point-ai-where-checking-is-cheap/) of where AI pays off, and it is doing all the work here.

## The frozen answer rots

There is a catch, and it is the most useful part for anyone thinking of building this. A compiled plan is only right for the data it was compiled against. The benchmark ran on a fixed, 8GB, read-only dataset that sat entirely in memory, which is a generous setting. Change the data distribution, add an index, let a table grow, and yesterday's optimal plan can turn into today's slow one. The static artifact does not know the world moved.

So the real engineering is not the model. It is the loop around it: the monitoring that notices when a frozen decision has drifted from reality, and the trigger that recompiles. Treat this as a one-off optimization and you ship a speedup and a time bomb. Treat it as a feedback loop and you keep the speedup. The moat, if there is one, is the loop, not the model.

## Where I would spend first

If I were advising a company on where to put its first serious AI budget, I would spend less time asking which model and more time asking where. The instinct is to bolt a copilot onto the front of the product where customers can see it. The higher return is often invisible: a model that searches offline for a better version of a decision your systems already make badly, then hands back something small your existing stack can run. Nobody sees it. The bill just falls, or the product just gets faster.

The question I would sit with, for any AI you are about to deploy: does this thing get to search, or does it have to answer? If it has to answer, live, in the hot path, you are fighting its worst properties. If it gets to search offline and freeze what it finds, you are using its best ones. Put your AI where it can search.

If you are trying to work out where in your own stack that is, it is exactly the sort of question an [AI advisory hour](/work-with-me/) is meant to answer.
