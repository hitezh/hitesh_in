---
title: "Tuning an AI model just got cheap. Knowing what better means didn't"
slug: "tuning-a-model-got-cheap"
date: "2026-11-03"
description: "A frontier model edited 0.016% of a small model's weights and lifted its math score from 8% to 48%. What that does to your build-versus-buy math, and what to own."
categories:
  - "technology"
tags:
  - "ai"
  - "ai-strategy"
  - "llm"
  - "build-vs-buy"
  - "governance"
image: images/cover.svg
linkedin_hook: "An LLM edited 0.016% of Qwen's weights, no training run, and its MATH-500 score went from 7.9% to 48.1%. Customizing a model is about to get cheap. Defining 'better' will not."
takeaways:
  - "Write down ten cases a customized model must get right and ten it must never get wrong. If you cannot, you are not ready to tune anything."
  - "Before paying to customize, test whether the model has the skill and fails to show it. Editing removes obstacles; it does not add abilities."
  - "Ask any vendor who tunes your model for the diff: what changed, on what evidence, and how to roll it back."
linkedin_question: "If someone handed you a customized version of a model tomorrow, how would your team decide in a day whether it is better?"
---

A frontier model, working only from a task description and the weights themselves, [raised Qwen3.5-0.8B's score on MATH-500 from 7.9% to 48.1%](https://rikiyat.github.io/blog/weight-space-programming/). It did not run a training loop. It read the weights, worked out that one behavior was tracing back to a single direction written by two layers, and subtracted that direction from a few output columns. The edit touched 0.016% of the model.

The authors call it weight-space programming, and the replies were what you would expect: singularity, recursive self-improvement, alignment dread. I'd set that aside. The result is early, a far larger model is editing a very small one, and the authors say as much. What interests me is the narrower point for anyone who customizes models: if an LLM can do this, producing a tuned model gets cheap, and the scarce thing moves somewhere else.

## Most of the gain was a fix, not a new skill

Look at the other number in the table. The share of answers that ran into the token limit fell from 93% to 33%. The base model was looping, never finishing its answers, and the edit removed the loop. I can't say how much of the 48% is that alone, since I haven't reproduced anything, but a jump this large from 0.016% of the weights suggests the model could already do more math than it was allowed to show.

The authors found the same boundary from the other side. Run against a Gemma 3 model that rarely loops, the method gave no meaningful gain. In their words, editing "could remove an obstacle that hid an ability, but it could not add an ability the model lacked."

That distinction is worth money. Before you pay anyone to customize a model, find out whether yours has the skill and fails to show it, or lacks the skill. The first problem is now close to a cheap patch. The second is still a model you need to replace. I'd bet many "we need to fine-tune" projects are the first kind, and we have been pricing them as the second.

## The edit is a diff, and diffs can be governed

The other thing I notice is the size. Changing 131,072 weights out of 800 million is a reviewable change. You can say what it touched, what it was meant to do, and subtract it again if it misbehaves. A classic fine-tune moves nearly everything a little, and the honest answer to "what changed?" is "everything, and we ran tests."

Banks have a name for what comes next: model risk management. Every change to a credit model gets a ticket, an owner, evidence and a rollback. Hardly any company treats a customized language model that way, because until now there was nothing to attach the ticket to. I expect that to change, and not only for compliance. The same channel that lets a model patch a loop lets it plant a backdoor, and I wrote recently about [open-weight models whose training data was chosen](/2026/open-weight-model-trained-to-know-less) before release. A tuned model with no change record is a supply chain you cannot inspect.

## When tuning is cheap, the evaluation is the product

Here is the uncomfortable part. An editor that can see a failing episode and a task description will fix whatever you measure. If your definition of better is a public benchmark, you will get a model that is better at the benchmark. I argued earlier that [your backlog is the only benchmark that matters](/2026/your-backlog-is-the-benchmark), and cheap tuning raises the stakes on that. When customizing cost a month of engineering, a vague target slowed you down. When it costs an afternoon, a vague target gets optimized quickly and wrongly.

It also finishes the argument from [your model was never your moat](/2026/your-model-was-never-your-moat). If tuned weights can be produced on demand, they are not what a competitor cannot copy. What they cannot copy is the set of cases that encodes your customers, your edge conditions and your definition of a bad outcome. That is also where the question from [your best AI use case may not need a frontier model](/2026/your-best-ai-use-case-may-not-need-a-frontier-model) gets answered. The right model for a task is whichever one passes your own tests at the lowest cost, and that will be a different answer every quarter.

## What I would do this quarter

1. Write down the test first. Collect ten cases a customized model must get right and ten it must never get wrong, drawn from real tickets or transactions. If this takes more than a week, you have found the real project.
2. Diagnose before you customize. Run the base model with generous limits and a better prompt. If it gets there some of the time, you have an obstacle problem and a cheap fix is plausible. If it never does, move on.
3. Ask vendors for the diff. Whoever tunes or hosts a model for you should be able to say what changed, on what evidence, and how to undo it.
4. Keep the held-out set to yourself. Anything a tuning process sees, it can fit. Hold back a slice of cases that nobody, human or model, optimizes against.
5. Give every customized model an owner and a rollback. If nobody can name who approved the last change, treat it as unreviewed software.

None of this needs the technology to mature further. The part I'd ask a leadership team to settle now is what "better" means for them, in writing, with examples. If you want a second pair of eyes on that, an [AI advisory hour](/work-with-me/) is a reasonable place to start.
