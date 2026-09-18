---
title: "When your AI vendor ships your product"
slug: "when-your-ai-vendor-ships-your-product"
date: "2026-09-18"
description: "OpenAI's move into legal shows what a platform really does when it enters your category: it commoditizes one layer of your stack and leaves you the accountable one."
categories:
  - "technology"
tags:
  - "ai"
  - "strategy"
  - "product-strategy"
  - "openai"
  - "platform-risk"
image: images/cover.svg
draft: false
---

Last week OpenAI shipped [Astra for Law](https://www.lawnext.com/2026/09/openai-releases-astra-for-law-a-gpt-6-model-configured-for-legal-work.html), a legal-research layer on its GPT-6 model with a search index over 230 million pages of US case law, statutes, and court rules. In the announcement it named Harvey and Legora, the two legal-AI companies most closely tied to OpenAI, as partners who would build on top of it.

Read that twice. The supplier every legal-AI startup rents its intelligence from just shipped a product in the legal-AI category, and reassured its biggest customers in the same breath. When a vendor has to promise it won't compete with you while announcing a product in your market, the promise is the risk, not the relief.

The easy story is Sherlocking: big platform copies small app, small app dies. That story is mostly wrong here, and reaching for it costs founders and CTOs the actual lesson. OpenAI is not trying to become a law firm's software vendor. It is doing something more consequential and more useful to understand. It is redrawing the line between what is platform and what is product.

## The 54% is the whole point

The number that matters in the launch is not the size of the index. It is that Astra answered [54% of a 200-question legal research benchmark correctly](https://alphasignal.ai/news/openai-s-astra-for-law-pushes-into-big-firms-with-54-research-accuracy), up from 38.7% with plain web search. OpenAI published that itself. A tool right just over half the time is not something a partner files in court. It is a floor, drawn on purpose.

That floor tells you what OpenAI is claiming and what it is leaving alone. It is claiming the retrieval and base-reasoning layer: the 230-million-page index, the model that reads it, the plumbing nobody wants to assemble and maintain themselves. It is leaving the other 46%. The gap between 54% and something a lawyer will put their name on is the entire business. Verification, the workflow, the accountability, the malpractice exposure all sit in that gap.

Every AI vertical is being cut along the same seam. The platform takes generation and retrieval, which get cheaper every quarter. The application keeps whatever is expensive to check. Law has no compiler. A wrong citation does not turn the build red; it gets a lawyer sanctioned, and the [public database of those cases](https://www.damiencharlotin.com/hallucinations/) passed 1,800 records this year, up from a couple of hundred a year ago. Someone has to answer for the 46%, and that someone is never the foundation model.

## Where value goes when generation is free

Here is the model I keep coming back to when advising teams that build on someone else's AI: generation is being commoditized, and value collects wherever verification stays expensive.

In software, checking is comparatively cheap. You have tests, types, a compiler, a staging environment. So AI coding tools capture less of the value than people expected, because generation and checking both got cheap and the work just moved faster. In law, medicine, audit, tax, and structural engineering, checking is slow, human, and carries liability. That inversion decides where the durable business is. I argued a while back that if you want speed you should [point your AI where the checking is cheap](/2026/point-ai-where-checking-is-cheap). The flip side, for anyone choosing what to build, is that you should own the step where checking is expensive, because that is the step a platform cannot commoditize out from under you.

This reframes the old buy-versus-build question. The reflex after an announcement like this is to ask whether OpenAI will beat you. Wrong question. Ask which layer of your product OpenAI just turned into a utility, and whether the value you capture sits above that line or below it. If your product was a tidy interface over retrieval, you were living below the line and the rent just went to zero. If your product is the relationship, the proprietary matter data, the workflow a firm has wired into how it actually works, and the accountability the firm is paying for, you are above it, and a cheaper retrieval layer underneath you is a gift.

## What changes on Monday

A few things follow if you build on foundation models, which by now is most of us.

Assume your supplier will enter your category. Not might. Inference is a low-margin commodity and applications hold the margin, so every model provider has a standing incentive to move up the stack. Price that in the way you price any concentrated-supplier risk. I made this argument narrowly about model quality in [your model was never your moat](/2026/your-model-was-never-your-moat); Astra is the same argument arriving one layer higher.

Build where being wrong is expensive. That is the ground a platform leaves you, because a platform does not want to own your liability. Proprietary data, deep workflow integration, and accountability are the defensible positions left once the model and the index are shared infrastructure.

And read what platforms ship, not what they say. OpenAI naming Harvey and Legora as partners is a snapshot of a relationship, and snapshots move as margins demand. The [same shift happened when ChatGPT quietly signed up advertisers](/2026/chatgpt-new-customer): the product's real customer changed, and the people building on it found out after.

None of this is a reason to avoid building on OpenAI or Anthropic. It is a reason to be honest about which floor you are standing on, and to build the part of the product that stays yours when the floor moves.

If you are trying to work out which layer of your AI product is actually yours to keep, that is the kind of question I like to think through in an [AI advisory hour](/work-with-me/).
