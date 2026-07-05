---
title: "When Your Model Gets Worse and Nothing Breaks"
slug: "when-your-model-gets-worse"
date: "2026-07-05"
draft: false
description: "A bug report shows a model cutting its own reasoning short. The lesson for anyone building on AI: your most important dependency can get worse with no error and no failing test."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "software-engineering"
  - "engineering-leadership"
  - "opinion"
image: images/cover.svg
---

Someone went through roughly 390,000 model responses looking for a pattern and found an odd one. A recent build of a widely used coding model kept stopping its internal reasoning at exactly 516 tokens. Not near 516; exactly 516, again and again. [In February that happened in about one response in a thousand](https://github.com/openai/codex/issues/30364). By May it was more than half of them. Over the same months, the average amount of reasoning the model did fell by more than half, from about 268 tokens to 107. On the hardest tasks, the cut-short answers were often just wrong.

Nobody on the affected teams shipped a bug. Their code was the same on Friday as it had been on Monday. The dependency underneath it got worse on its own.

## You didn't change anything. That's the problem.

We know how to manage software dependencies. You pin a version, you read the changelog, you run your tests against the new one before you adopt it, and if it breaks you roll back. The whole discipline rests on one assumption: the code you depend on does not change unless you decide to change it.

A hosted model breaks that assumption. The version string can stay the same while the behaviour underneath shifts, because the vendor is tuning inference, adjusting token budgets, and rebalancing load behind an API you only see the front of. No version bump, no changelog, no rollback button. The most important dependency in an AI product is usually the one you have the least control over and the least visibility into.

Worth saying plainly: the 516 finding is one user's analysis of their own traffic, not something the vendor has confirmed. That is the point rather than a caveat. If it is real, the only people who noticed were customers reading their own logs.

## Your tests were built for the old kind of failure

Deterministic regression is easy to catch. A function that used to return 5 now returns 4, a test asserts 5, the build goes red, someone gets paged before lunch. That is the failure our entire quality stack was designed around.

Probabilistic regression walks straight through it. If a feature was right 94% of the time and is now right 88%, nothing turns red. The unit tests pass, because none of them ever encoded "right 94% of the time." The service is up, latency is normal, the error rate is flat. Every dashboard a healthy engineering org watches stays green while the product gets worse for real people. I wrote about a cousin of this in [when the AI passes every test and still gets it wrong](/2026/when-ai-passes-every-test-and-still-gets-it-wrong/). There the wrongness hid in code an AI wrote; here it hides in the model you rented, and your code never touched it.

## The incentives don't point your way

Cutting reasoning short is not obviously a mistake from the vendor's side. Reasoning tokens are the most expensive thing a model does. Every token it spends thinking before it answers costs compute, adds latency, and lowers how many customers a cluster can serve at once. A provider under margin pressure has a standing reason to make the model think less. Your interest runs the other way: on your hardest 5% of cases, you want it to think more.

That gap is why the degradation isn't random noise you can wait out. It can be the visible edge of a supplier optimising their own cost against your quality, on a schedule you were never shown and a decision you were never asked about. Treating that as an engineering hiccup misreads it. It is a commercial relationship with a party whose interests only partly overlap with yours.

## Treat the model as a supplier, not a library

Here is the shift that helps. Stop thinking of the model as a library you import and start thinking of it as a supplier you buy from. Libraries you pin and forget. Suppliers you manage. A manufacturer that depends on an outside component does not assume the part is fine because it turned up on the loading dock; it inspects incoming batches, holds a second source, and writes quality into the contract. Three things follow for anyone building on AI.

1. **Build an eval set from your real tasks and run it continuously.** Not a public benchmark, your own inputs with known-good answers, scored on every model change and on a schedule between them. This is incoming inspection for a probabilistic part. If you cannot say what "good" means for your AI feature in numbers, you cannot detect the day it stops being good, and your vendor certainly will not tell you.

2. **Watch quality in production, not just uptime.** Track answer-level signals the way you already track latency: sampled accuracy, refusal rates, the distribution of output lengths. The 516 pattern was findable at all only because someone looked at the shape of the outputs instead of whether the requests returned a 200.

3. **Keep a second source you control.** Part of why [local models stopped being toys](/2026/local-models-stopped-being-toys/) matters here is that a model you host does not change unless you change it. Even if the frontier vendor handles most of your traffic, a pinned fallback you own is the difference between a bad week and an outage you cannot explain to a customer.

None of this is exotic. It is the ordinary discipline of depending on something you don't control, applied to a dependency most teams still treat as a magic box that only improves.

## The reliability question moved

For two years the reliability question for an AI product was whether the model was good enough to ship. That was always the easy version. The harder one is whether you would notice the day it stopped being good, and most teams have no honest way to answer it. Catching a silent downgrade in a dashboard, rather than in an angry customer email months later, is a governance choice, the same kind I argued for in [AI writes the code, who governs it](/2026/ai-writes-the-code-who-governs-it/). The teams that make it will treat their model the way a serious business treats a critical supplier. Everyone else is trusting a vendor's cost curve to stay aligned with their product quality, and hoping nobody runs the numbers on 390,000 responses to find out it didn't.
