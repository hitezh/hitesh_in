---
title: "Most of your AI agent bill pays for runs that fail"
seoTitle: "AI agent cost: why cost per accepted result beats cost per token"
slug: "agent-bill-pays-for-failed-runs"
date: "2026-11-18"
description: "A 27,280-run benchmark found 64.5% of agent spend went to attempts that failed. Cost per accepted result is the number to track, and few invoices report it."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "economics"
  - "agents"
  - "llm"
image: images/cover.svg
linkedin_hook: "In a 27,280-run agent benchmark, 64.5% of the spend went to attempts that failed. Your invoice prices tokens. The number that matters is cost per accepted result."
takeaways:
  - "Pull 20 tasks your team already finished and run your agent on them. Divide the total spend by the number of results a reviewer accepted."
  - "Log accept or reject every time someone reviews agent output. If you cannot state last month's reject rate in a minute, the waste is invisible to you."
  - "Set a step budget per task and see how many passes you lose. Cost tracked steps in the benchmark, so the cap is where savings start."
linkedin_question: "What share of your agent runs does a human reject, and who in your company could tell you that number today?"
---

Runta recently published an [agent harness benchmark](https://runta.com/blog/introducing-frontierharness-eval-v1-1/): 22 harnesses (the software loop that wraps a model and lets it use tools), 5 open models, 62 terminal tasks, 4 attempts each, 27,280 runs in all. Most of the discussion has been about which harness won. The line I keep returning to is further down the page: 64.5% of the list-price cost went to runs that did not pass.

I should be careful with that. Runta sells an agent execution layer, the costs are list-price estimates, the models are open-weight and served by a single provider, and each pass rate carries an uncertainty of roughly ten points. Commenters on the discussion thread also questioned why only 62 tasks were used. I would not quote any ranking from it. The shape of the finding is a different matter, because it matches how agent spend behaves everywhere.

## Token price is the cost of the wafer

Semiconductor fabs do not judge themselves on the cost of a silicon wafer. They judge on the cost of a good die, which is the wafer cost divided by yield. A cheap wafer with poor yield is an expensive chip.

Cost per token is the cost of the wafer. What a business actually buys is a result someone accepts, and the cost of that is spend divided by pass rate. At a 40% pass rate, a ten-point improvement cuts cost per accepted result by 20%, the same as a 20% price cut from the vendor. It also cuts the review time spent on bad output, which no price cut does.

## Failed runs are paid for twice

The benchmark prices only the tokens. It leaves out the person who opens the failed output, works out what went wrong, and decides to retry. That time is usually the larger line, and it never shows up on the vendor's invoice.

It also hides behind a second problem: between 68% and 82% of failed runs ended with a confident final answer rather than a timeout or a crash. A failure that announces itself gets fixed. A failure that sounds finished is passed along to a reviewer, and the only people who know how often that happens are the reviewers. Finance sees spend. Engineering sees merged work. Nobody holds the ratio.

## The model sets the price, the pairing sets the waste

The study's variance split is useful. The model explained 92.8% of the difference in cost per task, the harness alone just 2.3%, and the specific model-harness pairing another 4.9%. So the model choice sets the level, as you would expect. But with the model held fixed, the most expensive harness cost between 1.8 and 5.0 times the cheapest, and one harness went from first place with one model to sixteenth with another. In the authors' words, "a harness that is cheap with one model can be expensive with another."

That is a procurement problem more than a technical one. A coding agent bundled with one vendor's model has been tuned for that pairing. Swap the model underneath because a competitor's list price dropped, and your cost per accepted result can move in either direction without anyone noticing. I made a related argument about [owning what the harness learns](/2026/rent-the-harness-own-what-it-learns/); this is the cost side of it.

## A vendor paid per token is not paid for passes

This part is my inference, not the study's. If a vendor charges per token, a long, failing loop earns more than a short, successful one. I am not suggesting anyone designs it that way. But the pricing unit gives the vendor no financial reason to push the pass rate up, and it gives your finance team no way to see that it has not moved. The [engineer who chooses the model](/2026/who-sees-the-ai-bill/) usually does not see this bill either.

Seat pricing hides the same issue differently: the vendor absorbs the failures, so expect that to come back as usage caps or a price change later.

## What I would do on Monday

1. Build a small test set from your own work. Take 20 tasks your team already finished and use their accepted solutions as the answer key. This is the same idea as [using your backlog as the benchmark](/2026/your-backlog-is-the-benchmark/), and public leaderboards cannot replace it.
2. Compute cost per accepted result: total spend divided by the number of results a reviewer accepted. If the figure is more than double the per-run cost, most of what you pay for is waste.
3. Record the review outcome. Add accept and reject to whatever tool people already use. The test: can someone tell you last month's reject rate in under a minute?
4. Re-run the test set whenever the model changes. The pairing moves the cost, so a cheaper model is a hypothesis until it passes your tasks.
5. Set a step budget. The study found steps per pass tracked cost, and it did not test stopping runs early, so try it yourself and count the passes you lose.
6. Ask your vendor for pass rates on tasks like yours. If they cannot give one, you have found out what they are measuring.

The question for your next budget meeting is how many agent runs a human rejected last month and what that cost. If nobody can answer it, the test set above is the place to start, and an [AI advisory hour](/work-with-me/) is a reasonable way to set one up.
