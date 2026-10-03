---
title: "Rent the AI harness. Own what it learns."
slug: "rent-the-harness-own-what-it-learns"
date: "2026-10-03"
description: "A harness around a model is where a company's judgment will live. Most firms can buy the loop and should keep the two parts that compound: corrections and review rules."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "ai-agents"
  - "build-vs-buy"
image: images/cover.svg
draft: false
---

Shrivu Shankar argues that [every SaaS business will become a harness around a model](https://blog.sshh.io/p/the-harness-is-the-company): the infrastructure, interfaces, context and state wrapped around an LLM that has no memory of its own. In his telling, companies move from engineers pairing with agents, to humans triggering background agents, to a harness that runs work proactively while people sample the output. His conclusion is that the harness stops being a tool you buy and becomes something you no more outsource than your product team or your sales team.

I think the diagnosis is right and the conclusion is half right. The half that's wrong is expensive, because it sends a lot of companies off to build something they will have to rebuild.

## The loop is the part that gets cheaper

A harness has a loop in it: take a task, call a model, use tools, check the result, try again. That loop is where the engineering effort goes today, and it's also where vendors and open-source projects are converging fastest. The same observation was made in the discussion around the post, that most harnesses look basically the same. Anything that looks the same from the outside, and improves every time the underlying models do, is a poor place to put your own headcount.

The article points to Ramp, Stripe and DoorDash building internal developer tooling. They are real examples, and also companies with large engineering teams, strong internal platforms and an appetite for this work. A bank, a retailer or a 200-person SaaS company isn't in that position. Their closest comparison is the [build-versus-buy math I wrote about earlier](/2026/cheap-to-fork-costly-to-keep): producing the thing got cheap, and keeping it right did not.

There's also a timing problem. A lot of today's harness code exists to compensate for model weaknesses. As models improve, that scaffolding gets deleted. I'd rather not own a codebase whose best case is shrinking.

## What compounds is the state

The source describes the model as stateless. True, but a company is not. Every time a person overrides an agent's draft, rejects a proposed change or rewrites a customer reply, the company has produced a small piece of information about what "good" means here. Almost nobody records it.

Over a year, those corrections become a labeled history of your standards: which refunds you approve, which risks you accept, which phrases your brand never uses. It's the raw material for evaluations, for fine-tuning if you ever want it, and for onboarding the next model, the next vendor and the next employee. A competitor can rent the same loop tomorrow. They can't rent your year of corrections.

If I were advising a leadership team, the first question wouldn't be which harness to adopt. It would be whether the corrections are being captured in a format you control, and whether you could move them to a different runner within a quarter. If the answer is no, you have built a dependency, whatever it's called.

## The review policy is an org chart

The article makes a quiet point that deserves more attention: in the final stage, humans sample the output instead of producing it. Someone has to decide what gets sampled, at what rate, and what gets escalated to a person with authority. That policy is the real management layer of an AI-run process.

Think about what it encodes. Which decisions an agent may take alone. Which ones need a product lead, and which need legal. How often a mature workflow gets spot-checked. These are decision rights, the same thing an org chart and a delegation-of-authority matrix describe, only now written in configuration and enforced automatically. I've argued before that [reviewing is the job now](/2026/reviewing-is-the-job) and that every workflow has an [autonomy budget](/2026/the-autonomy-budget). The harness is where both get set, usually by whoever configured it first.

That makes it a CEO and COO question, not a tooling choice. The sampling rate is a risk appetite expressed as a number, and it should be owned by the person accountable for the outcome.

## Three things I'd do on Monday

1. **Log corrections as data.** Every human edit, rejection and override of an agent's output gets stored with the reason, in your own storage and a plain format. This is the cheapest asset you can start building and the hardest to reconstruct later.
2. **Write the escalation rules down and give them an owner.** Start by reviewing everything, then lower the rate task by task as the evidence earns it. Put a date on the next review of those thresholds.
3. **Buy the loop, keep it swappable.** Choose the runner on price, reliability and fit, and test the exit: can your memory and your rules move to another one without a rewrite? Build in-house only for the workflows where nothing on the market understands your business.

## The moat sits one layer up

If the harness becomes the company, the advantage won't be in who wrote the best orchestration code. [Your model was never your moat](/2026/your-model-was-never-your-moat), and I suspect the loop won't be either. What's left is the accumulated judgment of the business, captured well enough that a machine can use it, plus a clear view of who decides when the machine is wrong.

Companies that start recording that now will have something their competitors cannot copy by next quarter. If you want to pressure-test where that line sits in your own workflows, an [AI advisory hour](/work-with-me/) is a good place to start.
