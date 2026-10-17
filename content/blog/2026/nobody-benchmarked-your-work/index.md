---
title: "Nobody has benchmarked AI on 90% of the work your company does"
slug: "nobody-benchmarked-your-work"
date: "2026-10-17"
description: "Public AI benchmarks cover the work that is cheap to grade, not the work that pays your bills. Why the unmeasured majority is where private evidence becomes an advantage."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "strategy"
  - "decision-making"
image: images/cover.svg
draft: false
---

Mercor mapped 29 public AI benchmarks onto the US Department of Labor's catalog of work, [O*NET](https://www.onetonline.org/), which breaks 923 occupations into 18,797 tasks. Only [208 occupations have even one task with five or more benchmark prompts](https://www.mercor.com/research/labor-index/benchmark-map/), and only 924 tasks are covered at all. Weighted by time, they estimate that about 90% of American working hours go to tasks with little or no benchmark coverage.

Mercor says the numbers are provisional, and they are an estimate built on 29 benchmarks they chose. I would still treat the direction as reliable. It changes how I would read every AI claim that lands on an executive's desk.

## Benchmarks exist where grading is cheap

Look at what is covered: software engineering, financial analysis, a lot of legal drafting. Look at what is not: the long tail of mid-income knowledge work. Legal secretaries and court clerks have roughly the same AI exposure as the lawyers they support, and almost no coverage. Mercor also found that, even after controlling for exposure, occupations with larger wage bills are overrepresented.

Part of that is incentive, because high-wage work is where the money is. My reading is that the bigger part is that benchmarks get built where a right answer can be checked cheaply. Code compiles or it doesn't. A financial model reconciles or it doesn't. Whether a collections call kept the customer, or an exception in an insurance claim was handled sensibly, takes someone who knows the business to judge.

So a vendor's strongest evidence sits on the work that is easiest to grade. That isn't dishonest. It just means "the model scores 80% on the benchmark" tells you about the benchmark's neighborhood, and your company probably lives somewhere else.

## Public evidence cannot be an advantage

Every competitor reads the same leaderboards. If your decision rests on public benchmarks, you will buy the same tools, for the same tasks, at about the same time as everyone else in your market. Benchmarked work gets commoditized first, and whatever productivity it releases shows up in your competitors' prices as quickly as in your margins.

The advantage sits in the 90% nobody has measured, because private evidence is the only kind a rival cannot copy. A company that builds a small, honest test of AI on its own claims handling or onboarding or reconciliation knows something the market does not. I made the engineering version of this argument in [your backlog is the only benchmark that matters](/2026/your-backlog-is-the-benchmark/). Mercor's data suggests it is true well beyond engineering.

There is an objection worth taking seriously. An unbenchmarked task might be unbenchmarked because AI is bad at it. Absence of evidence is not evidence of capability, and it is not evidence of safety either. Both mistakes are available: the executive who assumes uncovered work is untouchable, and the one who assumes the vendor's demo generalizes. The only fix is to measure.

## A covered job is not a covered role

Here is a number I found useful. Mercor counts 29 of 36 computer and math occupations as covered. That sounds like software is thoroughly measured. But coverage is counted per task, and 924 of 18,797 tasks is under 5%. A role is a bundle of tasks, and the benchmark touches a sliver of that bundle.

Think about what a staff engineer or a product manager does in a week: negotiating scope, chasing a dependency, deciding what not to build. None of that is in a benchmark, and all of it decides whether the code matters. Planning AI adoption by job title ("AI can do 40% of customer support") mixes up exposure with evidence. The planning unit that works is the task, and most companies have never listed theirs.

## What I would do with this

If I were advising a leadership team, I would start with three moves.

1. Take a task inventory before choosing a tool. List the 20 workflows that consume the most hours in a function, and mark which ones have any public evidence of AI performance. Expect most to have none.
2. Pick the first pilot where the output is easy to check. A workflow with a tight feedback loop (an invoice either matches or it doesn't) can be tested in weeks. That is the same reason benchmarks exist for code, and it is why such work makes a good first MVP: it reduces uncertainty cheaply.
3. Build the test before the rollout. Fifty real cases, a clear definition of a good outcome, and a human baseline. It takes less time than the vendor evaluation most companies already run, and unlike the vendor evaluation, you own the result.

The same logic applies to risk. If you cannot say how often an agent is wrong on a task, you cannot size [how much autonomy to give it](/2026/the-autonomy-budget/), and you will find out the hard way when it [passes every test and still gets it wrong](/2026/when-ai-passes-every-test-and-still-gets-it-wrong/).

The leaderboard will keep telling you which model is best at the work that is easy to score. Which work in your business is worth giving it is a question only you can measure. If you want help working out where to start, an [AI advisory hour](/work-with-me/) is a good way to build that task inventory.
