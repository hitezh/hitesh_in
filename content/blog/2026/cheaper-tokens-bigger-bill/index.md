---
title: "Cheaper tokens, bigger bill"
slug: "cheaper-tokens-bigger-bill"
date: "2026-08-01"
description: "A team ran an AI cost-routing layer for four months, then shut it off. The savings had not vanished. They had moved to a budget nobody was measuring."
categories:
  - "technology"
tags:
  - "ai"
  - "llm"
  - "strategy"
  - "economics"
image: images/cover.svg
draft: false
---

A team at Manifest built an LLM router in March, ran it across 7,000 users for four months, and then switched it off. The router did what these systems are meant to do: it looked at each incoming request, estimated how demanding it was, and sent the easy work to a cheaper model while reserving the expensive one for the harder cases. A lot of AI infrastructure teams are building something similar right now, which is what makes the decision to retire it worth paying attention to. Manifest [wrote up why they killed theirs](https://manifest.build/blog/why-we-deprecated-our-llm-router/), and the reasoning turned out to be more valuable than the feature ever was.

At first glance, routing sounds like free money. If you are already paying for several models, and most of the requests coming in are fairly trivial, then it seems obvious to send those to something cheap and keep the expensive model for the work that genuinely needs it. On paper the economics look compelling. The difficulty is that the paper only has one column, and the real costs tend to live in the others.

## Routing and caching pull in opposite directions

The first problem is caching. Cache reads cost [75% to 90% less](https://manifest.build/blog/why-we-deprecated-our-llm-router/) than fresh input, and in agent workloads you hit the cache most of the time, so it is already doing a great deal of the cost-saving work on its own. I wrote a while ago about how [the same model can cost ten times as much](/2026/same-model-ten-times-the-bill/) depending on nothing more than whether its cache is warm. A router that decides to move a request to a different model gives all of that up, because the new model starts cold. Once you count the lost cache, the cheaper option often turns out to be the more expensive one.

That points to a deeper tension. Routing encourages requests to move between models, while caching delivers its biggest savings when those requests stay on the same one, and the two incentives quietly work against each other. The vendors have already shown their hand here, pricing a cache hit at roughly a tenth of a miss. When the prices you are billed against and the optimisation you are building push in opposite directions, the prices usually win.

## Complexity is hard to judge from a prompt

The router tries to estimate how demanding a request is by looking only at the prompt, and that is harder than it sounds. Asking an agent to run the tests and fix what breaks is the same sentence whether it is pointed at a small marketing site or the Linux kernel, and the prompt gives you almost no way to tell them apart. Since the router cannot see that difference, it ends up guessing, and every guess it gets wrong is paid for twice: once in the retry, and once in an answer the user no longer trusts. A feature meant to reduce spending can, through ordinary misclassification, quietly increase it.

## Where the cost actually goes

This is the part that matters well beyond routers. The token bill goes down, and that is the number with a dashboard and a line in the monthly review. The costs that go up do not have a dashboard. They show up as the engineer who loses a day working out why the agent behaves differently this week, the [evaluation suite](/2026/your-backlog-is-the-benchmark/) that now has to cover four models instead of one, and the user who trusts the output a little less once it started changing character mid-task. The overall cost has not disappeared. It has moved into engineering time, testing effort, and a slow erosion of confidence in the system, and those are much harder to put a figure against than a token bill.

I have watched the same thing happen well outside AI. A caching layer that trades a clear latency win for a cache-invalidation bug you eventually find at two in the morning. A service split that shortens one team's deploy time and adds a coordination tax to five other teams. The pattern is fairly consistent: the benefit gets measured in the exact unit the project set out to improve, while the cost turns up somewhere vaguer, as a general sense that things have become harder, with no line item to point at.

## You are adding a variable to a system that already has too many

There is a second cost, and it is structural rather than financial. Building on top of these models is largely an exercise in managing unpredictability, since the model already gives you slightly different answers to the same prompt on a good day. A router adds another layer of variation on top of that, because now the choice of model is uncertain too, and every extra source of variability enlarges the surface you have to test, observe, and debug. The teams that manage to ship AI products people can rely on tend to be the ones removing sources of surprise rather than introducing clever new ones. In most cases the calmer path is to choose one model for a given workflow, get to know its strengths and its rough edges, and take full advantage of the cache. Predictable and slightly boring tends to win in production, which is the only place the scoreboard actually counts.

## The cost you are chasing is already falling

There is one last reason to leave this particular problem alone. The price of a token is dropping on its own, without any help from a routing layer. Open-weight models now [match frontier quality at about a fifth of the cost](/2026/your-model-was-never-your-moat/), and that curve only bends in one direction. So a router is engineering effort spent reducing a cost that the market is already reducing for you, and it is paid for with the attention of the people you can least afford to distract. It is also fairly undifferentiated work: your gateway provider will eventually ship it, several startups already have, and it is never going to be the thing a competitor cannot copy. That makes it an odd place to spend a meaningful slice of a roadmap.

If a team came to me before building a routing layer, I would ask one question before any code got written: name the budget the saved money is going to move into. If you can find it, the project might well be worth doing. If you cannot, then you are most likely not cutting the cost so much as moving it somewhere you have stopped looking. The efficiency worth having is the kind you can still account for six months later. That, more than the choice of model, is usually what we end up talking about in an [AI advisory hour](/work-with-me/): not which model to pick, but whether the clever thing a team is about to build is quietly relocating its costs instead of removing them.
