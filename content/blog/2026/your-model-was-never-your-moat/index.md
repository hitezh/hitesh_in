---
title: "Your model was never your moat"
slug: "your-model-was-never-your-moat"
date: "2026-07-07"
description: "Open-weight models now match frontier quality at a fifth of the cost. For anyone building on AI, that shifts where durable advantage has to come from."
categories:
  - "technology"
tags:
  - "ai"
  - "llm"
  - "strategy"
image: images/cover.svg
draft: false
---

An open-weight model just matched the best in the world for a fifth of the price, and the internet decided this was Anthropic's problem. I think it is mostly yours.

GLM 5.2, an open-weight model from Zhipu AI, now does agentic coding work that is [hard to tell apart from Claude Opus](https://martinalderson.com/posts/the-upcoming-ai-margin-collapse-part-1-glm-5-2/) at roughly $4.40 per million tokens, against Opus at about $25 and GPT-5.5 at about $30. Martin Alderson calls what follows the AI margin collapse: frontier labs make most of their money on inference, inference is exactly where an open competitor can undercut them by 80 percent, and switching costs almost nothing. The reaction treated this as a story about the labs' income statements. The more useful reading, if you build anything on top of these models, is that it is a story about you.

If a $4.40 model can stand in for a $25 one with an API key change, then model access was never the thing protecting your product. It was rented differentiation, and the rent just fell. That sounds like bad news. For most companies building on AI it is the opposite, as long as you were honest with yourself about where your advantage actually came from.

## The switching-cost argument misses the real lock-in

The common objection is that switching is not as easy as it looks, and at the wiring level that is fair. Tool-call formats differ, prompt caching works differently, and every model has quirks you have quietly tuned around. But that friction is the lock-in the lab builds around you, and it shrinks a little every month as routers and compatible endpoints standardize.

The lock-in that matters is the one you build around the model: the evaluation suite that tells you a swap is safe, the guardrails, the domain data, the measured behavior on your specific tasks. Teams that own that layer can treat models as interchangeable parts and shop on price. Teams that do not are stuck paying frontier rates out of fear rather than need. Your eval harness, not the model, is the durable asset. It is also the thing almost nobody is investing in.

## Commoditization has a familiar shape

We have watched this film in other layers of the stack. Raw compute commoditized and the margin moved up to managed services. Databases went open source and the money moved to hosting, tooling, and support; Redis and Elastic still charge real prices in a world full of free alternatives. Linux won the server and the value moved up to distributions and the cloud.

The pattern repeats: when your input commoditizes, you do not win by being the cheapest supplier of that input. You win by owning the layer above it. So the strategic question for a founder is simple and slightly uncomfortable. If intelligence trends toward free, what part of my product stays scarce? If the honest answer is "nothing, we are a thin wrapper on a model," the collapse is a warning. If the answer is a workflow customers depend on, proprietary data, a distribution advantage, or trust in a regulated setting, the collapse is a tailwind. I made a version of this argument when [SpaceX paid $60 billion for Cursor](/2026/when-your-tam-is-bigger-than-gdp/), a genuinely good product that is largely an interface on models it does not own, while those same model providers ship their own coding tools.

## Treat model choice as a routing decision

The leaderboards mislead about the thing that matters. GLM 5.2 looks like Opus in benchmarks, and in practice it is genuinely close on routine coding and noticeably weaker at hard multi-step decomposition, tool use, and staying out of correction loops. That is the same [junior-versus-senior gap](/2026/local-ai-coding-cost/) I have written about between local and frontier models: fine for the boilerplate, risky when you are working at the edge of a problem.

The question that actually moves money, then, is what fraction of your workload is routine enough for the cheap model and what fraction genuinely needs the expensive one. That split is a margin lever most teams have never measured. Route the boilerplate majority to the cheap model, reserve the frontier model for the minority of work that truly needs it, and you cut the inference bill sharply without losing quality where it counts. The move is to architect for portability now, while models are still differentiated enough that the choice matters, so you can arbitrage price later when they converge.

## Price for where the cost is going

The second-order effect is the one worth sitting with. When tokens are expensive, you ration them and cost per call is the binding constraint. When they approach free, the constraint moves to being wrong. You can afford to run a task through two models and compare, to verify an output before trusting it, to retry cheaply until you are confident. Compute stops being the bottleneck and evaluation becomes it. The scarce resource is no longer intelligence; it is knowing whether the intelligence was right. That is a very different thing to build a company around, and it rewards the teams that treated trust and measurement as product features instead of afterthoughts.

## What I would tell a team building on this

Assume the model gets cheaper and better on a curve steeper than you are comfortable planning for, and design as if that is already true. Do not price your product on today's token cost. Do not let "we use the best model" stand in for a strategy. Put the effort into the eval suite, the workflow, the data, and the customer relationship, because that is where advantage survives a price collapse. The strongest teams I see are already model-agnostic by design and spend their scarce engineering time on the parts a cheaper model cannot copy.

The model was always going to commoditize. The only real question was whether you built anything around it worth keeping.

If you are trying to work out which parts of your product depend on a specific model and which do not, that is exactly the kind of question worth [an advisory hour](/work-with-me/).
