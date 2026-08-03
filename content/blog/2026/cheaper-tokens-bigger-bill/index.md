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

A team at Manifest built an LLM router in March, ran it across 7,000 users for four months, and then switched it off. The router did what these systems are meant to do: it looked at each incoming request, estimated how demanding it was, and sent the easy work to a cheaper model while reserving the expensive one for the harder cases. A lot of AI infrastructure teams are building something similar right now, which is what makes the decision to retire it interesting. Manifest [wrote up why they killed theirs](https://manifest.build/blog/why-we-deprecated-our-llm-router/), and the reasoning turned out to be more valuable than the feature ever was.

At first glance, routing sounds like free money. If you are already paying for several models, and most of the requests coming in are fairly trivial, then it seems obvious to send those to something cheap and keep the expensive model for the work that genuinely needs it. On paper the economics look compelling. The catch is that the paper has one column, and the real costs live in the others.

## Routing and caching pull in opposite directions

The first problem is caching. Cache reads cost [75% to 90% less](https://manifest.build/blog/why-we-deprecated-our-llm-router/) than fresh input, and in agent workloads you hit the cache most of the time, so it is already doing a lot of the cost-saving work on its own. I wrote a while ago about how [the same model can cost ten times as much](/2026/same-model-ten-times-the-bill/) depending on nothing more than whether its cache is warm. A router that moves a request to a different model gives all of that up, because the new model starts cold. Once you count the lost cache, the cheaper option often turns out to be the more expensive one.

The bigger problem is that the two optimizations work against each other. Routing wants requests to move; caching pays out when they stay. The pricing already tells you which one the vendors expect you to use, because a cache hit costs about a tenth of a miss. A router works against that.

## Complexity is hard to judge from a prompt

The router tries to estimate how demanding a request is by looking only at the prompt, and that is harder than it sounds. Asking an agent to run the tests and fix what breaks is the same sentence whether it is pointed at a small marketing site or the Linux kernel, and the prompt gives you almost no way to tell them apart. Since the router cannot see that difference, it guesses. Every wrong guess costs you twice, once in the retry and once in an answer the user no longer trusts. So a feature meant to save money can end up spending more, just through ordinary misclassification.

## Where the cost actually goes

This is the part that matters well beyond routers. The token bill goes down, and that is the number with a dashboard and a line in the monthly review. The costs that go up do not have a dashboard. They are the engineer who loses a day working out why the agent behaves differently this week, the [evaluation suite](/2026/your-backlog-is-the-benchmark/) that now has to cover four models instead of one, and the user who trusts the output a little less after it changed character mid-task. The bill fell. The cost did not. It just moved into engineering time, testing effort, and a slow loss of confidence in the system, and none of those are easy to put a number on.

I have watched the same thing happen well outside AI. A caching layer that trades a clear latency win for a cache-invalidation bug you eventually find at two in the morning. A service split that shortens one team's deploy time and adds a coordination tax to five other teams. The pattern is fairly consistent: the benefit gets measured in the exact unit the project set out to improve, while the cost turns up somewhere vaguer, as a general sense that things have become harder, with no line item to point at.

## You are adding a variable to a system that already has too many

There is a second cost, and it is structural rather than financial. Building on these models is mostly an exercise in managing unpredictability. The same prompt already gives you slightly different answers on a good day, and a router adds another layer of variation on top, because now even the choice of model is uncertain. Every extra source of variability grows the surface you have to test, observe, and debug. The teams that ship AI products people can rely on tend to remove sources of surprise, not add clever new ones. Usually the calmer path is a dull one: pick one model for a workflow, learn its strengths and its rough edges, and take advantage of the cache. In production, predictable almost always beats clever.

## The cost you are chasing is already falling

There is one last reason to leave this one alone. The price of a token is falling on its own, without any help from a routing layer. Open-weight models now [match frontier quality at about a fifth of the cost](/2026/your-model-was-never-your-moat/), and that curve only bends one way. So you would be building infrastructure to shave a cost the market is already shaving for you, and paying for it with the attention of the people you can least afford to distract. There is also nothing special about the work. It's commodity engineering. Your gateway provider will ship it, several startups already have, and it will never be something a competitor cannot copy.

If a team came to me before building a routing layer, I would ask one thing before any code got written: name the budget the saved money moves into. Someone always pays it. If you can point to that budget, the project might well be worth doing; if you cannot, you are probably not cutting the cost so much as moving it somewhere you have stopped looking. The efficiency worth having is the kind you can still account for six months later. That, more than the choice of model, is what we usually end up talking about in an [AI advisory hour](/work-with-me/): less about which model to pick, and more about whether the clever thing a team is about to build is quietly moving its costs instead of removing them.
