---
title: "Local models stopped being toys"
slug: "local-models-stopped-being-toys"
date: "2026-06-30"
description: "Qwen 3.6 27B is running at 30 tokens per second on consumer hardware and doing real development work. That shifts the question from whether local AI is viable to when it is the right call."
categories:
  - "technology"
tags:
  - "ai"
  - "developer-tools"
  - "local-llm"
draft: false
---

For two years my default advice to anyone asking about AI tools for development has been: pick a cloud API, learn to use it well, and don't overthink the hosting question. The local-model path (downloading weights, fiddling with quantization levels, doing the RAM math) looked like a distraction from the actual work.

That advice is starting to age.

## What shifted

A dense 27B model is [now hitting 30 tokens per second](https://quesma.com/blog/qwen-36-is-awesome/) on M5 Max hardware and doing genuine coding work, the kind that survives code review. Qwen 3.6 27B is generating real enthusiasm among developers, and the reason is straightforward: it works on real tasks.

The architecture matters here. A dense 27B model uses all its parameters on every token. A mixture-of-experts model might have 35B total parameters but activates only a fraction per token to stay fast. That difference shows up in practice: the dense model tends to be more consistent, better at holding context across edits, less likely to go sideways mid-function. Fewer active parameters, reliably used, can beat more parameters used selectively.

This kind of model would have been unthinkable for local inference eighteen months ago. The rate of improvement has been fast enough that hardware and use-case advice from late 2024 is already stale.

## Why bother when APIs exist

You can call a frontier model from a cloud API for fractions of a cent per request. The hardware to run 27B locally costs real money: a capable GPU setup, or a MacBook Pro with enough unified memory to keep the weights fully in RAM. The economics of "just use the API" are hard to argue with on pure performance grounds.

But pure performance is not the only variable worth thinking about.

At OptCulture we work with customer data across retail and loyalty programs. Some of that data cannot leave the environment. Cloud providers have strong contractual protections, but our customers have their own constraints about where their data goes, and those constraints are real and non-negotiable. Local inference is, in those cases, the only available inference.

There is also a slower-building cost to cloud model dependency that is easy to miss. Code accumulates assumptions about a particular model's context window, its tool-calling behavior, its quirks. When that model changes or gets deprecated, those assumptions surface everywhere at once. A local model you control changes when you decide to change it.

## What running locally actually teaches

Something that keeps coming up in developer conversations about local models: running inference locally teaches things that calling an API skips.

When you manage weights, quantization levels, and memory constraints yourself, you build intuition about what is actually happening. You notice when a model degrades under long context. You understand why Q4 quantization is fast but occasionally unreliable for tool calls, while Q8 is slower but more predictable. You develop opinions about architecture choices that make you a sharper evaluator of AI output generally.

As AI tools get embedded deeper into development pipelines, the people who understand how they work will make better decisions than the people who treat them as black boxes. The developers I see making the fewest expensive AI mistakes are, consistently, the ones who have spent some time working with models directly rather than exclusively through polished interfaces.

## Where the line is now

Local 27B models have real gaps. Large greenfield agentic tasks on unfamiliar codebases will expose the quality difference against frontier cloud models. That gap is genuine, and worth being honest about rather than waving away.

For refactoring, scoped modifications, privacy-sensitive work, offline development, and learning the mechanics: local inference is a valid choice, not a compromise.

A year ago developers were asking whether a local model could handle real work at all. The question now is when local is the better call. That shift, quiet as it is, changes what conversations about AI tooling should actually be about.
