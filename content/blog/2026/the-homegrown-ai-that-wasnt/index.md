---
title: "The homegrown AI that wasn't"
slug: "the-homegrown-ai-that-wasnt"
date: "2026-06-15"
categories:
  - "technology"
tags:
  - "ai"
  - "llm"
  - "government"
draft: false
image: images/cover.svg
---

Rio de Janeiro's planning agency released a 397-billion-parameter language model this month and called it homegrown. The framing was clear: a municipal government had built something of its own, a city-specific AI that demonstrated sovereign capability.

Within days, a small AI lab called NexAGI published [a technical analysis](https://github.com/nex-agi/Nex-N2/issues/4) showing the model was a weighted blend of roughly 60% their model and 40% Qwen3.5, merged without attribution. Remove the system prompt and the model identifies itself as NexAGI's about eight times out of ten. Every weight tensor across all 60 layers matched the predicted 0.6/0.4 ratio to thousands of standard deviations. There was no novel training, no fine-tuning on city data, no original work. There was a rename.

The technique itself is legitimate. Merging two models at some weight ratio is a real method -- one that often produces something better than either parent on benchmarks. Research groups have used it since at least 2022. There is nothing wrong with the engineering here.

The problem is the claim. "We built this" and "we assembled this from existing parts" are different statements -- both can describe something valuable, but only one was true in Rio.

## Every city wants an AI strategy

The pressure to show AI credentials is approximately universal right now. Every government, every large institution, every bank is expected to have an AI story. That story usually involves three escalating claims: we are using AI, we are deploying AI responsibly, we are building AI.

The third one is the hardest to deliver, which is why it gets fabricated the most creatively.

Renaming a merged model is one version. Another is procuring a closed-source API, wrapping it in a government-branded interface, and calling it your system. Another is hiring a team to fine-tune an existing model on domain data -- legitimate work, but very different from building from scratch. All of these produce a demo. None of them produce the thing being claimed.

## Why the claim matters beyond attribution

If a government says it built a homegrown AI, it is also implicitly claiming it can maintain, audit, and improve that thing. It is claiming some form of intellectual control over the system it has deployed on behalf of its citizens.

A model that is actually a blend of weights the institution didn't write, trained on data it didn't curate, with failure modes it hasn't mapped -- that control claim is hollow. You can't audit something you don't understand how to reproduce. Open-source licenses for large models typically require attribution; when a public institution skips that, it's not just an ethical shortcut, it's a legal exposure the institution probably hasn't disclosed to anyone.

The subtler problem is downstream. If your team genuinely believes it built the model, it will behave differently than if it knows it repackaged one. Fewer security audits. More confidence in the model's alignment with local needs and values. Less investment in actually understanding what's inside. A false belief about provenance warps every decision that follows.

## The question worth asking about every government AI announcement

India has been running several significant AI initiatives -- the India AI Mission, state-level chatbots, citizen-service deployments across departments. Some of this is genuine engineering work. Some of it involves substantial fine-tuning. Some of it, almost certainly, is a commercial API with a local coat of paint.

I'm not saying the wrong thing is the norm. I'm saying the gap between "we are using AI" and "we built AI" is hard to close from the outside. It took a direct technical investigation by the people whose model was allegedly used to surface the Rio story. Most cities don't have a NexAGI looking over their shoulder.

The minimum a public institution deploying AI should provide: which base model was used, what training or fine-tuning was applied, and what the licensing terms are. Not as a bureaucratic formality, but because it's the baseline information a citizen or an auditor needs to evaluate the system.

"We built it" is a claim that should require evidence before it's made, not after it gets challenged.
