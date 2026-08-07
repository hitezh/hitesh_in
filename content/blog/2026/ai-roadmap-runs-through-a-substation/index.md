---
title: "Your AI roadmap now runs through a substation"
slug: "ai-roadmap-runs-through-a-substation"
date: "2026-07-30"
description: "Frontier labs are paying to train electricians because chips were never the hard part. The constraint moved to power and copper, and capital cannot rush it."
categories:
  - "technology"
  - "economics"
tags:
  - "ai"
  - "infrastructure"
  - "economics"
  - "strategy"
image: images/cover.svg
draft: false
---

Meta, Google, and BlackRock just committed [more than $265 million to train electricians and carpenters](https://www.nytimes.com/2026/07/29/business/economy/data-center-electricians-training.html). Not researchers or GPU specialists but tradespeople, enrolled in month-long courses with housing and transport covered, then sent straight to data center sites. [Google alone](https://www.aol.com/news/google-funding-electrician-training-ai-200254873.html) wants to help pull more than 100,000 new electricians into the trade. When the best-capitalised companies of this cycle start spending real money on the one input everyone assumed was infinite, that is worth reading as a signal.

The striking part is how small the number is. Against the roughly [$725 billion](https://www.tomshardware.com/tech-industry/big-tech/big-techs-ai-spending-plans-reach-725-billion) these companies plan to pour into AI infrastructure this year, $265 million is a rounding error, on the order of a few hours of their combined annual capital spend. You do not ignore a problem for years and then fix it with pocket change unless it only just became the problem that binds. The labour pledge is a revealed preference. It tells you where the constraint actually moved.

## The constraint keeps moving to whatever money can't rush

For most of the last decade the binding constraint on software was more software: hire engineers, ship faster, and the market rewarded you. Then AI briefly made the constraint GPUs, and that turned out to be a supply problem money could mostly solve by placing bigger orders and buying allocation. The constraint has moved again, and this time it has landed somewhere capital cannot compress.

You can pay to jump the queue for chips. You cannot pay a [power transformer](https://www.forbes.com/sites/rrapier/2026/06/07/the-ai-boom-has-a-blue-collar-bottleneck/) to arrive in twelve weeks when the lead time is over two years, and the largest units are quoted four to five years out. You cannot pay an apprentice electrician to be experienced. Grid interconnection queues run for years, and of the roughly sixteen gigawatts of capacity announced for this year, only about five were actually under construction, with analysts expecting a large share of the pipeline to slip or cancel. Money compresses some constraints and not others. The frontier just hit the ones it can't.

## Models move in months, substations in years

Here is the mismatch that should worry anyone planning around AI. A model generation now ships every few months. A substation is a five-year commitment. When your fastest input and your slowest input differ by an order of magnitude in cycle time, planning breaks in a specific way.

I spent years around banking, and this is a duration mismatch dressed in new clothes. A transformer ordered today arrives after two more model generations have shipped, each of which may reset the unit economics of the very workload the transformer was meant to serve. You are funding long-lived, illiquid, physical assets against a revenue stream whose economics reset every quarter. Banks have entire risk functions for that shape of problem. Software teams have never had to carry it, and the [cost curve everyone is planning around](/2026/subsidized-ai-compute/) quietly assumes the physical side shows up on time.

## If you only buy AI, this is still your problem

You may never pour concrete or negotiate with a utility. It does not matter. Your vendor's roadmap now runs through a substation you will never see, and the smooth cost-down curve most companies have penciled into their 2027 plans assumes that capacity arrives on schedule. Some of it will not.

The practical read is to expect inference capacity and price to be lumpy, regional, and a little political, rather than a clean line down and to the right. Build for that. The same discipline that protects a team from [the same model costing ten times as much](/2026/same-model-ten-times-the-bill/) also protects it from capacity that gets rationed or delayed: know your real usage, keep a fallback provider, and do not let a single capacity assumption sit on your critical path.

## The dematerialisation story just inverted

For thirty years the promise of software was escaping atoms. Bits instead of things, asset-light, scale without a loading dock. AI at the frontier reverses that. The marginal unit of intelligence now has a bill of materials measured in copper, concrete, water, and megawatts. The most abstract product we have ever built is once again bounded by the most physical infrastructure we run.

That changes where advantage sits. It moves away from having the best model, which is increasingly [interchangeable](/2026/your-model-was-never-your-moat/), and toward whoever secured atoms early: land, power contracts, utility relationships, a slot in the interconnection queue. The winners of the next phase are being decided in permitting offices and switchyards, not only in research labs.

## What I would tell a leadership team

Three moves. First, treat compute as a supply chain, not a utility. Diversify providers, ask for capacity commitments in writing, and model the case where your vendor's expansion slips two years. Second, put power behind the model in diligence. When you pick an AI vendor or commit to an AI-heavy roadmap, ask where it physically runs and what the grid and queue risk is behind that capacity, the same way you would ask about a supplier's factory. Third, decouple the product from any single capacity assumption, so a delay or a price spike degrades the experience gracefully instead of breaking the plan.

The reflex in this industry is to optimise the part you can see: the model, the prompt, the code. The constraint that decides who ships in 2027 is the part most software leaders have never looked at, and it takes years, not sprints, to relieve. The companies that win the next phase are quietly buying copper while everyone else argues about benchmarks.

If you are trying to work out how much of your AI plan quietly depends on physical capacity showing up on time, that is exactly the kind of question worth [an advisory hour](/work-with-me/).
