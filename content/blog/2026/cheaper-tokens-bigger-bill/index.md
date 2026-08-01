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

A team at Manifest built an LLM router in March, ran it across 7,000 users for four months, and switched it off. The router did exactly what routers are supposed to do: read each incoming request, guess how hard it was, and send easy work to a cheap model and hard work to an expensive one. Half the AI infrastructure world is shipping one of these right now. Manifest [wrote up why they killed theirs](https://manifest.build/blog/why-we-deprecated-our-llm-router/), and the reasoning is more useful than the feature ever was.

The pitch for routing sounds like free money. You already pay for a spread of models, most requests are trivial, so send the trivial ones somewhere cheap and pocket the difference. On a spreadsheet it always wins. The trouble is that the spreadsheet has one column.

## Routing and caching want opposite things

The detail that sinks it is caching. Cache reads run [75% to 90% cheaper](https://manifest.build/blog/why-we-deprecated-our-llm-router/) than fresh input, and in agent workloads you hit the cache most of the time. I wrote a while back about how [the same model can cost ten times as much](/2026/same-model-ten-times-the-bill/) depending on nothing but cache behaviour. A router that moves a request to a different model throws that cache away. So the "cheaper" model often arrives more expensive, because it starts cold.

Routing rewards moving. Caching rewards staying put. You cannot have both, and the vendors have already told you which one they will pay you for: they priced cache hits at a tenth of a miss. When the pricing structure and your clever layer point in opposite directions, the pricing structure usually wins.

## The complexity you can't read off a prompt

The router grades difficulty from the prompt. But "run the tests and fix what breaks" against a toy website and against the Linux kernel are the same sentence. You cannot judge the exam from the cover page. So the router guesses, and every wrong guess is paid for twice, once in the retry and once in the answer nobody trusted. The whole point was to spend less, and misclassification quietly spends more.

## The line item that lies

The pattern that matters sits above routers. The token bill went down, and that number has a dashboard. The costs that went up do not: the engineer who lost a day working out why the agent behaves differently this week, the [eval suite](/2026/your-backlog-is-the-benchmark/) that now has to cover four models instead of one, the user who trusted the output less once it changed character mid-task. Efficiency projects rarely delete cost. They relocate it, usually to a budget nobody is watching. A router is a machine for turning a legible cost into an illegible one and booking the difference as a saving.

I have watched this happen well outside AI. A caching layer that trades a clear latency number for a cache-invalidation bug you find at 2am. A service split that shaves one team's deploy time and adds a coordination tax to five others. The tell is always the same shape: the win is counted in the one unit the project was built to reduce, and the loss shows up as "things feel harder now," with no line item to point at.

## You added a variable to a system that needs fewer

There is a second cost, and it is structural. Building on AI is mostly a fight against non-determinism. The model already gives different answers to the same prompt on a good day. A router adds another roll of the die on top: now *which* model answered is variable too. Every axis of variability multiplies the surface you have to test, debug, and reason about. The teams that ship AI products people rely on are the ones removing sources of surprise, not adding ingenious new ones. Pick one model per workflow, learn its edges, lean on the cache. Boring and predictable beats clever and cheap-on-paper, and it beats it in production, where it counts.

## And the number you are shaving is falling on its own

There is a last reason to leave this one alone. The per-token price is collapsing without your help. Open-weight models now [match frontier quality at a fifth of the cost](/2026/your-model-was-never-your-moat/), and that curve only bends one way. So a routing layer is engineering effort spent shaving a number the market is already shaving for you, paid for with the attention of your scarcest people. Routers are undifferentiated middleware. Your gateway vendor will ship one, ten startups already have, and it will never be the thing a competitor cannot copy. That is a strange place to spend a quarter of your roadmap.

If a team asked me before building a routing layer, I would ask one question before any code gets written: name the budget the saved money moves to. If you cannot name it, you are not cutting the cost, you are hiding it. The efficiency worth having is the kind you can still find six months later. That is the conversation I have most often in an [AI advisory hour](/work-with-me/): usually not which model to pick, but whether the clever thing you are about to build is quietly moving your costs instead of removing them.
