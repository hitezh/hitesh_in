---
title: "Cheap code removed the editor your product never knew it had"
slug: "the-editor-your-product-lost"
date: "2026-10-19"
description: "Linear's CEO says products now feel assembled, not shaped. Free code removed the cost that used to veto weak features, and most teams have not replaced it."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "product-strategy"
  - "product-development"
  - "engineering-leadership"
image: images/cover.svg
---

Karri Saarinen, the CEO of Linear, [wrote last week](https://karrisaarinen.com/posts/someone-behind-the-software/) that many products, including ones from very successful companies, are starting to feel messy. His diagnosis is that people now work with agents to produce changes independently, "each operating a small software factory," and the product turns into the average of all those outputs.

I think he is right about the symptom. I would place the cause somewhere more specific: building used to be expensive, and the expense was doing a job nobody had written down.

## Cost used to do the editing

A feature needed a reason to exist because it took two engineers a quarter. Somebody had to defend the roadmap slot, and in that conversation someone would usually ask whether the thing belonged in the product at all. Nobody called it editing. It was a side effect of the price.

That price is falling toward zero. An engineer with an agent can ship the extra setting, the export, the integration, the small improvement, all in an afternoon, and the conversation never happens because there is nothing to ask permission for. Every change is reasonable on its own, which is why none of them gets stopped.

Fred Brooks made the case in [The Mythical Man-Month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month) that conceptual integrity is the most important consideration in system design, and that a system is better off leaving out good ideas than carrying many good but uncoordinated ones. His answer was a small number of minds with the authority to decide. Most teams never needed that answer, because the budget made the decisions for them. The budget is gone. The need for the minds is not.

## Agents give every engineer a team with no meetings

[Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law) says a system ends up mirroring the communication structure of the organization that built it. An engineer with several agents is a small team with no communication overhead, which sounds like efficiency. But that overhead was where coherence got negotiated: the design review, the argument over naming, the "wait, we already have a way to do that."

Remove it and each person plus their agents becomes a fiefdom shipping at several times the old speed. The seams between them are now where the product gets worse. The other place this could be caught is code review, and as I wrote in [writing code got free, reviewing it is the job](/2026/reviewing-is-the-job/), review is already overloaded with a different question: does this change work, not does it belong.

## Adding got cheap, removing did not

This is the part I think gets missed. Agents cut the cost of building sharply. They did nothing to the cost of changing what customers already know. Removing a workflow or rethinking one still means someone's habit changes, a support team retrains, a customer's internal runbook breaks.

So the ratio drifts. Adding is nearly free and subtracting costs what it always did, and a product under those conditions only grows. Customers pay for that growth in comprehension, even for features that are off by default, because they have to wonder what else the product does.

## The Jira objection

The fair counterargument is that coherence is a luxury. Plenty of enterprise software with no discernible point of view makes a lot of money, because the economic buyer compares feature checklists and picks the longest one.

That works while features are hard to match. When any competitor can clone any feature in a sprint, the checklist stops separating vendors. What is left is the part a checklist cannot capture: whether the product holds together. Coherence is hard to copy because it is a pattern of decisions rather than a feature you can list. I would not bet a company on that for next quarter. Over three years, I would.

## What I would change on Monday

**Give each product surface one owner with the right to reject.** The owner's test is whether the product is better with the change, which is a different question from whether the change works. Then count the rejections. A team that never says no is not coherent, it just isn't looking.

**Write the no list.** In 1985 Peter Naur [argued](https://pages.cs.wisc.edu/~remzi/Naur.pdf) that programming is building a theory of the problem, and that the theory lives in people's heads, not in the source code. When agents write the code, the theory is what the team still has to hold, and agents do not have it. A page that says what the product refuses to do, and why, is the cheapest version of that theory. It helps the human reviewers and the agents reading it as context. I have not seen enough teams try this to call it proven, but it costs a page.

**Make additions pay for themselves.** When a change adds a path, ask what it retires. And measure the journey instead of the feature: time to first value, steps to finish the core job. Feature adoption will look healthy right up to the point where the product is unusable.

None of this needs a new tool. It needs a decision about who is accountable for the whole, made by someone who funds the agent rollout and is currently measuring output. Ask your teams how many changes they rejected last quarter. If nobody can answer, you have found the missing editor.

If you are working out who should hold that role as your teams adopt agents, that is a good use of an [AI advisory hour](/work-with-me/).
