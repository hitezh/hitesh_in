---
title: "Same model, ten times the bill"
slug: "same-model-ten-times-the-bill"
date: "2026-07-17"
description: "A cached token costs a tenth of a fresh one, and coding agents hit cache most of the time. Your AI cost curve is an engineering choice, and most teams make it by accident."
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

Kimi K3, the new 2.8-trillion-parameter open model from Moonshot, shipped this week with a price list, and the number worth staring at is not the one everyone quoted. The headline was that an open model landed within a benchmark point or two of Claude and GPT. The number I keep coming back to is lower down the page: input costs $3.00 per million tokens on a cache miss and $0.30 on a cache hit, and in real coding workloads the [cache hit rate runs above 90%](https://www.kimi.com/blog/kimi-k3). The price you actually pay, for the same model doing the same work, swings by a factor of ten depending on something the pricing page treats as a footnote.

This is not a Kimi quirk. Anthropic prices [cache reads at a tenth of base input](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) too: Sonnet's fresh input is $3.00 a million and a cached read is $0.30, the same 10x. The industry has quietly converged on the same shape, and almost nobody building on top of it treats that shape as a strategic variable. That is odd, because it is the closest thing to a free margin lever most AI products have.

## What the cache actually charges you for

A model has no memory between calls. Every request re-reads the whole context: the system prompt, the retrieved documents, the conversation so far, the files an agent is holding in its working set. In an agentic coding loop that context is huge and it barely changes step to step, the same repo and instructions with one more message appended. Recomputing all of it every time is pure waste, so the providers cache the intermediate state and charge you a tenth to reuse it instead of rebuilding it.

The discount only lands if your prefix is stable. Reuse depends on the front of your prompt matching, near enough byte for byte, what you sent last time. Reorder your retrieved chunks, stamp a fresh timestamp into the system prompt, slip a new tool result into the middle of otherwise-stable context, and you bust the cache and pay full freight for all of it again. The saving is real, but you earn it in architecture, not in procurement.

## Two teams, same model, ten times apart

The part that lands on a P&L is this. Take two teams building the same coding assistant on the same model. One keeps a stable prompt prefix, appends new turns rather than rebuilding context, pins the document order, and keeps sessions warm. The other reassembles the prompt each call, shuffles retrieved context, and starts cold every request. Same model, same output quality, and the second team pays close to ten times as much for input. In long-context agent work input is most of the bill, because these systems send enormous context and generate small diffs, so the cache hit rate is not a detail. It is the cost structure.

Nobody chose that gap in a meeting. It falls out of a hundred small engineering defaults and lands on the gross margin. I argued once that [your model was never your moat](/2026/your-model-was-never-your-moat/); the cache economics are the sequel. The model is not the main thing setting your cost. How you feed it is.

## The comparison unit everyone uses is wrong

Leaderboards and pricing pages compare sticker input and output rates. But the sticker rate is what you pay for doing it wrong. Your real number is the effective rate after caching, and that depends on your workload, not the vendor's list. A model with an alarming headline price can be cheap in your actual usage, and a cheap-looking one expensive, and no benchmark will tell you which, because nobody benchmarks effective cost under realistic cache behavior. When a team tells me they switched models to save money, my first question is whether they measured effective cost or list price. It is almost always list price, and the saving tends to shrink once you account for how each provider caches.

This is also the asterisk on "just self-host the open model." When you run the weights yourself, that 10x discount is not handed to you. You have to build prefix caching into your own serving stack, and if you skip it you pay full compute for every token on every call, which can make the [cheaper open model](/2026/local-models-stopped-being-toys/) more expensive per useful request than the API you were trying to leave. Open weights buy you control. They do not buy you the cache for free.

## The cheap path and the portable path pull apart

There is a tension here worth naming. The way you cut the bill is to build long, stable, provider-shaped context you keep hitting. That is exactly the thing most specific to one provider's endpoint and its cache rules. So the optimization that saves you money quietly rebuilds the switching cost that commoditization was supposed to erode. The cheapest architecture and the most portable architecture are not the same architecture. You have to decide, on purpose, how much lock-in you will rent for how much margin. The teams that make that call deliberately are fine. The ones that back into it wake up a year later unable to move without a rewrite.

## What I would do about it

None of this needs a research team. Instrument your cache hit rate first, because most teams cannot tell you what theirs is, and you cannot manage a number you never see. Design prompts prefix-first: everything stable at the front, everything volatile at the back, so a late change does not invalidate everything before it. Price the product on effective cost, not sticker cost, and re-check it whenever you change models. And treat the trade between cache-shaped lock-in and portability as a decision you make, the same discipline I pushed for when I said to [know your unit economics at the unsubsidized price](/2026/subsidized-ai-compute/).

The story everyone told about Kimi K3 was that intelligence keeps getting cheaper. True, and slightly beside the point. Intelligence is already cheap enough that it is not the thing to optimize. The thing to optimize is the ten-times gap between using it well and using it carelessly, and that one sits entirely in your hands.

*If you are trying to work out where your AI spend is actually going, and how much of it is architecture rather than price, that is the kind of question I dig into in an [AI advisory hour](/work-with-me/).*
