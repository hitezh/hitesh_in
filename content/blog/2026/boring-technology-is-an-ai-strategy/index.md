---
title: "Boring technology is an AI strategy"
slug: "boring-technology-is-an-ai-strategy"
date: "2026-08-14"
description: "A decade-old rule for choosing dull, predictable tools turns out to be the sharpest discipline for deciding where AI belongs in your product, and where it does not."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "engineering"
  - "opinion"
---

Dan McKinley's 2015 essay [Choose Boring Technology](https://mcfunley.com/choose-boring-technology) climbed back onto engineers' feeds this week, sitting a few lines above a new frontier model and a faster coding agent. That juxtaposition is the whole argument. The oldest idea on the page is the most useful one for the newest problem on it.

McKinley's claim is simple. A company has roughly three innovation tokens to spend, and every genuinely novel piece of technology you adopt costs one. New tools aren't bad; you just don't yet know their failure modes, and finding them out is expensive. Boring technology, in his sense, is not dull technology. It is technology whose ways of breaking you already understand. MySQL, Postgres, a queue you have run for years. You spend a token when a problem is important enough that the boring option genuinely cannot solve it, and you spend it deliberately, because you only get a few.

Every leadership team I talk to is now being asked to spend all three tokens on AI at once, and to do it again next quarter.

## AI never gets to be boring

Here is the part that breaks the original framework in an interesting way. McKinley's whole case rests on one property: mature technology has *well-understood failure modes*. That is what makes it safe to lean on. AI does not have this property, and structurally it never will. A large model is probabilistic by construction. It fails in ways that are correlated with nothing you can see, on inputs that looked identical to the ones it handled perfectly yesterday. You can characterize the failure rate; you cannot enumerate the failures.

So an AI component permanently occupies an innovation token you can't fully pay back. It does not graduate into the boring column the way Postgres did after a few uneventful years. This sounds like a reason to be timid. It is actually the opposite: it tells you exactly how to budget. If AI is the one part of your stack that will always cost a token, then the disciplined move is to refuse to spend tokens anywhere near it. Keep the database boring. Keep the queue boring. Keep the deployment boring. Put your whole novelty budget into the AI capability that is genuinely core to your product, and buy or borrow everything else in the most unfashionable, well-worn form you can find.

I watch teams do the reverse. They chase a new model, a new vector database, a new agent framework, and a new orchestration layer in the same quarter, and then wonder why nothing is stable. They spent four tokens on infrastructure and none on the problem.

## Spend the token where customers can feel it

The token belongs on the part of AI that customers can feel and competitors cannot copy: the specific judgment your product makes, the proprietary data it makes it on, the workflow it lives inside. Almost everything underneath that should be treated as commodity plumbing and chosen for boredom.

That includes the model itself. The instinct is to spend novelty on always running the newest, smartest model, but the smartest model is often [the wrong default](/2026/smartest-model-worse-product/), and the newest one is the least understood thing you could put on a critical path. The boring choice is a mature model on a stable API, wrapped so you can swap it without ceremony. I've argued that [your model was never your moat](/2026/your-model-was-never-your-moat/); the corollary is that model choice should be a routing decision made behind a good evaluation suite, not a monthly identity crisis. The eval harness is the boring infrastructure that lets the exciting part stay swappable.

## The weekly release is a tax, not a gift

A new model or agent lands most weeks now. Each is nominally better, and each carries a quiet pressure to migrate. Treated as opportunities, they are a standing tax on your attention. Treated as inputs to a schedule, they are manageable. The strongest teams I see pick a re-evaluation rhythm, quarterly for most, and let releases accumulate against it instead of reacting to each launch. They can do this precisely because they invested in the boring layer: an eval suite that answers "is the new one actually better for us" in an afternoon, not a heroic month.

McKinley's other advice ages just as well. Before adopting anything new, ask whether the boring stack already in the building can solve the problem. Shopify [scaled checkout by removing a system, not adding one](/2026/count-your-systems/), and a surprising amount of "we need AI here" turns out to be a workflow problem an existing tool already handles. And when you do reach for AI, contain it: put it where a cheaper deterministic layer [catches its mistakes](/2026/stack-that-catches-ai-mistakes/) before a customer does. You are wrapping a component with unknown failure modes in scaffolding whose failure modes you know cold. That is boring technology doing exactly the job it was invented for.

## What this changes for a leadership team

The real scarce resource in AI adoption was never compute, and it is not even talent. It is the organization's capacity to absorb change without breaking, and that capacity is finite in the same way McKinley's tokens are. Boring technology is a way of rationing it. Every novel dependency you add is attention you are borrowing from the one bet that actually differentiates you.

So the question I would put to a CTO is not "which new tools should we adopt." It is "what is the single AI capability worth spending our novelty on, and how boring can we make everything else so that bet has room to work." Answer that well and you get to be adventurous exactly once, where it counts, and predictable everywhere it doesn't. That is not a compromise. In a field that reinvents itself weekly, deliberate boredom is the closest thing to a durable advantage on offer.

If you are trying to work out where your one AI bet belongs and what to keep boring around it, that is exactly the conversation I have in an [AI advisory hour](/work-with-me/).
