---
title: "The Autonomy Budget: Deploying AI Agents Before They're Reliable"
date: "2026-07-06"
slug: "the-autonomy-budget"
draft: false
description: "Meta is spending $145B on AI yet says agents have stalled. The real limit is compounding math, and it decides which workflows you can safely hand to an agent today."
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

Last week Mark Zuckerberg told Meta staff that agentic AI development ["hasn't really accelerated in the way that we expected"](https://techcrunch.com/2026/07/02/mark-zuckerberg-tells-staff-that-ai-agents-havent-progressed-as-quickly-as-hed-hoped/) over the past four months. This from the company that branded 2026 the year agents would "really begin to work," and that still plans to spend around $145 billion on AI infrastructure this year.

When the person with the most compute and the most reason to make agents work tells his own staff it is harder than the roadmap promised, it is worth asking what he has seen. I don't think the models got worse. I think most of us mispriced what an agent is, and the mispricing is arithmetic.

## The demo is one run. Production is ten thousand.

A chatbot that is wrong 10% of the time is still useful; you read the answer, shrug, and try again. An agent that is wrong 10% of the time is sending the wrong email, calling the wrong API, and refunding the wrong customer while you are at lunch.

Agents work in chains, and every link has to hold. At 90% per step, a five-step task finishes correctly about 59% of the time (0.9^5). Ten steps drops it to 35%. Twenty steps, roughly what "book my trip and expense it" involves, lands near 12%. The model is identical in the demo and in production. What changed is how many times you multiplied a number below one by itself. A demo is a single run where the dice fell right. Production is that same agent meeting the messy tail of reality thousands of times a day, and the gap between the two is multiplication.

## Software agents got a head start the real world won't give

Coding agents improved fast this year, and the reason is not that code is easy. Code comes with cheap verification and cheap undo. It compiles or it doesn't, tests pass or fail, a bad commit reverts in seconds. The environment hands the agent honest feedback and a reset button, so it can be wrong repeatedly and still converge on right.

The physical and financial world offers neither. When an agent books a non-refundable fare there is no compiler to reject it and no `git revert` for your calendar. In [Project Vend](/2025/project-vend-when-ai-plays-shopkeeper/), an AI ran a small office shop for a month and slowly lost money through a hundred small, unverified decisions it could not take back. The question that matters for any workflow is how cheaply you can check the agent's work and how easily you can undo it. Those two properties decide whether autonomy is safe, more than raw model quality does, and they vary wildly between workflows inside the same company.

## You have an autonomy budget, and you've probably never counted it

Put those together and you get a rough planning number. For any workflow there is a count of consecutive steps you can hand to an agent before compounding error drags the success rate below what you can ship. I think of that as the workflow's autonomy budget. It is generous for drafting, summarising, classifying, or staging a change a human approves. It is tiny for moving money, messaging customers, or touching production. Same model, different budget, because the budget belongs to the task, not the technology.

Most teams never work this out. They ask whether the agent can do the task, when the sharper question is how many steps it can own before a human has to look. That number tells you where the checkpoint goes, how to price the feature, and whether the project is viable at all. The best teams I've worked with treat the checkpoint as part of the design: let the agent run the reversible, easily-checked stretch on its own, and put a human or a hard guardrail right before the step where a mistake becomes expensive or permanent.

## Why the capex war is the wrong war for almost everyone

Meta is betting that scale closes the gap, and some of it will. But the wall Zuckerberg described is a systems problem: memory, long-horizon planning, reliable tool use, grounding, and verification. Those are engineering problems around the model rather than things you buy by the gigawatt.

That is good news if you don't have $145 billion. What decides whether agents work in your business is the scaffolding around the model, the verification and guardrails and checkpoints and workflow design, and that is cheap next to the model itself. It is also where a focused team beats a giant, because you understand your own workflow and your own cost of error better than any frontier lab will. This is the shift I called the [sovereign engineer](/2026/beyond-the-chatbox-the-rise-of-the-sovereign-engineer/): working actions are becoming abundant, and the scarce thing is the judgment to decide which of them are safe to delegate.

## You can't reorganise past multiplication

The revealing detail is what Zuckerberg blamed. The slowdown, he said, was partly a reorganisation that "wasn't as clean" as hoped, with bets that "haven't come to fruition yet." Meta had laid off thousands and moved thousands more into AI groups to go faster. I have watched this reflex up close. When a capability disappoints, leadership reaches for the org chart before asking whether the ceiling is organisational or physical. A new reporting line is visible, decisive, and photographs well in a strategy update. It also does nothing to a ten-step task that succeeds 35% of the time. You can restructure your way past a coordination problem. You cannot restructure your way past 0.9^n.

So before you move the boxes, ask what you would expect to see if this were purely an execution problem, and whether you actually see it. Often the honest answer is that the technology has not reached the reliability the plan assumed, and the real fix is to narrow the scope and make verification cheaper. That is the discipline I argued for in [AI Writes the Code. Who Governs It?](/2026/ai-writes-the-code-who-governs-it/): the speed is real, but it is only worth having once you have built the controls to trust it.

## Where this leaves you

The advice that falls out of all this is cheap and a little dull, which is usually a good sign. Count the steps in a workflow before you automate it, put the human checkpoint where the math says it belongs, and let agents loose first where undo is cheap: draft rather than send, stage rather than commit, recommend rather than execute.

Agents already work. They work well inside a small autonomy budget and fall apart outside it, and most teams have never measured where their own line sits. The companies that get the next two years right will be the ones that found that line and built their products and their teams around the arithmetic, instead of waiting for the arithmetic to change.

Working out where that line sits in your own workflows is the kind of question I like to dig into in an [AI advisory hour](/work-with-me/).
