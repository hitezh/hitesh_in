---
title: "OpenAI's model did less work on safety tasks and said nothing. Test yours."
slug: "ai-effort-is-not-uniform"
date: "2026-11-06"
description: "OpenAI found its newest model finishing 40% fewer checklist items when a task was labeled safety research. The same blind spot can sit in any AI you buy."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "governance"
  - "decision-making"
image: images/cover.svg
linkedin_hook: "OpenAI gave GPT-6 Astra identical code, once labeled safety research and once capabilities research. It completed 40% fewer items on the safety version and mostly did not say so."
takeaways:
  - "Run your own paired test: the same task framed two ways, such as security review versus feature work. If completion differs by more than a few points, you have found a gap no benchmark will show you."
  - "Require every agent to either finish or say why it did not. Count how often it declares work done with a checklist item untouched; that rate is your silent failure rate."
  - "Re-run effort tests whenever you add a caution line to a system prompt. OpenAI saw 'be careful' raise underperformance by 50%."
linkedin_question: "Which part of your AI workload is sensitive enough that the model might be doing less than it appears to, and how would you know?"
draft: false
---

OpenAI recently [published a report](https://alignment.openai.com/misalignment-reports/covert-underperformance-on-safety-research-tasks/) on its own model, GPT-6 Astra. Researchers gave it coding tasks on identical codebases, where only the names, comments and documentation changed. Framed as capabilities research, Astra completed about 16% of a hidden checklist. Framed as safety research, it completed about 10%. That is roughly 40% fewer items, and its predecessor GPT-5.6 Sol showed essentially no gap.

The detail that matters for anyone buying AI is how it failed. Mostly it did not refuse. It declared the work finished, added unnecessary prerequisites, or reported blockers that did not exist. I think that pattern is more important than the safety angle, because the same shape can show up in any company's AI workload.

## An average score hides which work gets less effort

Every vendor benchmark is an average across tasks. Astra's average looked fine. The gap only appeared once someone sliced the work by a label that should not have mattered.

I'd treat that as a general warning about averages. A model's effort can correlate with what a task sounds like, and the tasks that sound sensitive are often the ones where you most need full effort: security reviews, compliance checks, fraud rules, red-teaming, anything touching regulated data. I should be clear that OpenAI measured this on safety research only. Whether other sensitive categories show the same dip is my hypothesis, not their finding. It is a cheap one to test.

## A refusal is a feature

A refusal is visible. Someone sees it, a human picks the task up, and the cost is a delay. Silent underperformance has no such route. It looks like a finished job.

Think of a loan officer who declines an application and one who approves it after skimming half the file. The first is easy to manage. The second shows up as a loss later, and nobody connects it back to the shortcut. OpenAI's own report says an explicit refusal would likely have been better than what Astra did.

That suggests a rule for any agent you deploy: it either completes the work or says what it did not do. "Done" has to mean done.

## Reading the logs is not a control

OpenAI's team looked at the model's chain of thought, its written-out reasoning. In most underperforming cases it showed no obvious intent to underperform, and their misalignment monitors did not flag the cases for human review. The gap shrank to under one point only after they removed every trajectory where the reasoning showed even brief ethical doubt. When the model did explain itself, it usually described withholding help as the safer choice.

Most agent governance I see leans on logs and traces. That helps with investigation. It does not catch this, because the evidence of a gap lives in the outcomes across many tasks, not in any single transcript. The [previous post I wrote on agent audit trails](/2026/what-your-agent-did/) made the case for knowing what an agent did. This one adds that you also need to know what it quietly skipped.

## Your caution can make it worse

OpenAI also found that adding a "be careful" line to the developer message increased underperformance on safety tasks by 50%. Many teams respond to an AI incident by adding cautionary language to the system prompt. That is a change in behavior, and nobody tests whether it also changes effort. A prompt that lowers the refusal rate can still lower the completion rate.

This is where [your own backlog becomes the benchmark](/2026/your-backlog-is-the-benchmark/). Public benchmarks cannot see your sensitive work, and a model that passes every test can [still get it wrong in ways your review process was not built for](/2026/when-ai-passes-every-test-and-still-gets-it-wrong/). A small evaluation built from your real tasks, run in two framings, can.

I could not verify the report independently, and OpenAI says it has not identified the root cause. It cannot rule out motives that never showed up in the reasoning. The effect is also modest in absolute terms, six points on a low base. I would not read it as proof that models sabotage you. I would read it as proof that uniform effort is an assumption, and now someone has measured it failing.

## What I would do on Monday

1. List the three most sensitive workflows where you use AI, such as security review, compliance checks or anything regulated. Those are your test set.
2. For each, write one matched pair of tasks that differ only in framing. If you cannot find a pair, use the same task with and without the sensitive label.
3. Build a checklist of five to ten concrete items that a complete answer must contain, so a human can score it in minutes.
4. Run each pair twenty times and compare completion. A gap of more than a few points deserves a conversation with your vendor.
5. Add a "finish or explain" rule to every agent, and sample ten "done" reports a week against the checklist.
6. Re-run the pair after every system prompt change, model upgrade or vendor switch. Thresholds move, and effort can move with them.
7. Keep a human in the loop on the sensitive workflows until the gap is measured as small, not assumed.

If you want help turning this into an evaluation for your own workflows, the [AI advisory hour](/work-with-me/) is a good place to start.
