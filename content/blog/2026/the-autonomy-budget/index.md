---
title: "The Autonomy Budget: Deploying AI Agents Before They're Reliable"
date: "2026-07-06"
draft: false
description: "Meta is spending $145B on AI while admitting agents stalled. The cause isn't model quality but compounding math — and it changes where you should deploy autonomy first."
image: images/autonomy-budget.svg
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "product-development"
  - "engineering-leadership"
  - "future-of-work"
---

Last week Mark Zuckerberg told Meta's staff that agentic AI development "hasn't really accelerated in the way that we expected" over the past four months. This is the same company that called 2026 the year agents would "really begin to work," and that still plans to spend [around $145 billion](https://techcrunch.com/2026/07/02/mark-zuckerberg-tells-staff-that-ai-agents-havent-progressed-as-quickly-as-hed-hoped/) on AI infrastructure this year.

That gap is the interesting part. The person with the most money, the most compute, and the most incentive to make agents work is quietly telling his own people it is harder than the roadmap promised. When the biggest bettor at the table hedges, it is worth asking what he has seen that the marketing decks haven't.

I think the answer is not that the models got worse. It is that a lot of us — vendors, boards, and the executives funding all this — mispriced what an agent actually is. And the mispricing is arithmetic, not opinion.

## The demo is one run. Production is ten thousand.

Here is the sentence I'd tattoo on every agent roadmap. A chatbot that is wrong 10% of the time is still useful; you read the answer, shrug, and try again. An agent that is wrong 10% of the time is sending the wrong email, calling the wrong API, and refunding the wrong customer — and it does it while you're at lunch.

The reason is that agents don't do one thing. They do a chain of things, and each link has to hold. If a single step succeeds 90% of the time, a five-step task succeeds about 59% of the time (0.9⁵). A ten-step task succeeds 35% of the time. A twenty-step task — roughly what "book my trip and expense it" involves — succeeds around 12% of the time.

Nothing about the model changed between the demo and production. What changed is the number of times you multiplied a number smaller than one by itself. **Agents don't fail linearly; they fail geometrically.** A demo is a single happy-path run where all the dice came up right. Production is the same agent meeting the long, messy tail of reality thousands of times a day. The distance between those two is not a bug you can patch. It is a property of multiplication.

This is why so many teams feel whiplash: the prototype was magic on Tuesday and the rollout was a mess by Friday, and nobody did anything wrong in between. They just went from one roll of the dice to ten thousand.

## Software agents got a head start the real world won't give

If you've watched coding agents genuinely improve this year, you might reasonably ask why booking a flight is so much harder than writing a function. Both are multi-step. Both use tools.

The difference is that software comes with cheap verification and cheap undo. Code either compiles or it doesn't. Tests pass or fail. A bad commit gets reverted in seconds and nobody gets hurt. The environment hands the agent a constant stream of honest feedback and a reset button. That is an enormous, underappreciated gift — it lets an agent be wrong repeatedly and still converge on right, because every mistake is caught and cheaply reversed.

The physical and financial world offers neither. When an agent books a non-refundable fare, there is no compiler to reject it and no `git revert` for your calendar. It cannot easily check whether the booking truly succeeded, and it cannot take the action back if it didn't. I wrote about this failure mode in [Project Vend](/2025/project-vend-when-ai-plays-shopkeeper/), where an AI ran a small shop for a month and slowly lost money — not through one dramatic error but through a hundred small, unverified, irreversible decisions that compounded exactly the way the math predicts.

So the useful mental model isn't "how smart is the agent." It is **how cheap is verification, and how reversible is the action.** Those two properties, not raw model quality, decide whether autonomy is safe. And they vary wildly from one workflow to the next inside the same company.

## You have an autonomy budget, and you've probably never counted it

Put those two ideas together and a planning tool falls out. For any workflow you're tempted to automate, there is a number of consecutive steps you can safely delegate before compounding error drags the success rate below what you can ship. Call it the **autonomy budget** for that workflow.

The budget is generous when steps are reliable, verification is cheap, and mistakes are reversible — drafting, summarising, classifying, staging a change for review. It is tiny when steps are unreliable, outcomes are hard to verify, and actions can't be undone — moving money, messaging customers, changing production infrastructure. Same model, radically different budgets, because the budget is a property of the *task*, not the *technology*.

Most teams never calculate this. They ask "can the agent do the task?" — a yes/no question — when they should be asking "how many steps of this task can it own before a human has to look?" That reframing changes everything downstream: where the checkpoints go, how you price the feature, what you promise a customer, and honestly whether the project is viable at all.

The strongest teams I've seen treat the human checkpoint not as a failure of ambition but as the design. They spend the autonomy budget deliberately: let the agent run the reversible, easily-verified stretch on its own, and insert a human — or a hard, deterministic guardrail — right before the step where a mistake becomes expensive or permanent. That is not "AI with training wheels." It is the difference between an agent that ships and an agent that becomes a cautionary slide in next year's board deck.

## Why the capex war is the wrong war for almost everyone

Now back to the $145 billion. Meta is betting that scale — more compute, bigger base models — closes the gap. Some of it will. But the constraint Zuckerberg is running into isn't mostly a base-model constraint. It is a systems constraint: memory, long-horizon planning, reliable tool use, grounding, and verification. Those are engineering problems around the model, not properties you buy by the gigawatt.

That distinction is genuinely good news if you don't happen to have $145 billion. The part of the agent stack that actually determines whether it works in your business — the harness of verification, guardrails, human checkpoints, and workflow design — is cheap relative to the model, and it's exactly where a focused team can out-execute a giant. You are not going to win the compute war. You don't need to. You need to win the *harness* war inside your own domain, where you understand the workflow, the failure costs, and the acceptable error rate better than any frontier lab ever will.

This connects to something I've argued before, that the bottleneck has moved from producing output to owning outcomes — the shift I called the [sovereign engineer](/2026/beyond-the-chatbox-the-rise-of-the-sovereign-engineer/). Agents make working actions abundant. What stays scarce is the judgment to decide which actions are safe to delegate, and the discipline to verify the rest. That is a design and governance problem, and it's one you can afford.

## You can't reorganise past multiplication

The tell in Zuckerberg's remarks is what he blamed. The slowdown, he suggested, was partly that the reorganisation "wasn't as clean" as hoped and its bets "haven't come to fruition yet." Meta had laid off thousands and reshuffled thousands more into AI groups precisely to move faster.

I've watched this reflex up close, and it's a recurring mistake: when a capability underdelivers, leadership teams reach for the org chart before they've diagnosed whether the ceiling is organisational or physical. A new reporting line feels like progress. It's visible, it's decisive, it photographs well in a strategy update. But if the real constraint is that ten-step tasks succeed 35% of the time, no reporting structure changes that number. You can restructure your way past a coordination problem. You cannot restructure your way past 0.9ⁿ.

Before you reorganise around a disappointing AI capability, it's worth asking a blunt question: if this were purely an execution problem, what evidence would I expect to see, and do I see it? Often the honest answer is that the technology simply hasn't matured to the reliability the plan assumed — and the fix is to narrow the scope and cheapen verification, not to move boxes on a chart. This is the same discipline I argued for in [AI Writes the Code. Who Governs It?](/2026/ai-writes-the-code-who-governs-it/): the speed is real, but it's only worth having if you've built the review and control to trust it.

## What I'd actually do

If I were advising a company deciding how aggressively to deploy agents this year, I'd hand them three questions, not a platform.

1. **What's the autonomy budget for this specific workflow?** Count the consecutive steps, estimate the per-step reliability honestly, and multiply. If the number lands below what you can ship, you've found where the human checkpoint has to go — before you've built anything, not after an incident.

2. **Where is undo cheap?** Deploy autonomy first where mistakes are reversible and verification is near-free: draft, don't send; stage, don't commit; recommend, don't execute. Irreversibility is the real cost driver, far more than model quality. Earn the right to remove a checkpoint by measuring the error rate with it in place first.

3. **Is this a technology ceiling or an execution problem?** If a capability disappoints, diagnose which before you restructure, rewrite the strategy, or spend more. The two problems look identical on a status slide and have opposite fixes.

The uncomfortable, freeing truth underneath all of this is that agents already work — just not the way the "year of agents" framing implied. They work brilliantly inside a modest autonomy budget and fall apart outside it, and almost nobody has measured where their own line sits. The companies that win the next two years won't be the ones that waited for reliable agents or spent the most on compute. They'll be the ones that learned to spend a small, honest autonomy budget wisely — and designed their products, and their org, around the arithmetic instead of against it.
