---
title: "It was 80% done after a month. It was also wrong."
slug: "eighty-percent-done-and-wrong"
date: "2026-10-12"
description: "An AI agent team rebuilt most of a game in a month, then found much of it was wrong. What fixed it was a test the agents couldn't edit, not a smarter model."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "ai-strategy"
  - "governance"
  - "engineering-leadership"
---

One developer spent three months and an estimated 600 to 700 billion tokens [letting AI agents reconstruct the source code of a popular first-person shooter](https://momo5502.com/posts/2026-10-09-game-decompilation/). After the first month, the game launched, the menus rendered, maps loaded, and about 80% of the code existed. Any status report would have called it nearly done.

It wasn't. By his own account the code was readable and semantically wrong: wrong function signatures, invented logic, and a game setting that agents had turned into a hash table lookup orders of magnitude slower than the original. What fixed it had very little to do with which model he picked, and I think that is the part executives should read closely.

## Visible progress is free now

Agents produce visible progress at almost no cost. Tickets close, commits pile up, a menu appears. All of it is real, and none of it tells you the work is correct.

In a human team, status is a little expensive to fake because producing it takes effort, so it carries some information. With agents the effort is gone, which means progress reports get more frequent and less informative at the same time. If you are funding an agent project, "how far along are we?" is now the wrong question. Ask what the check is, and who wrote it.

## The reviewer read the author's excuses

His first fix was the obvious one: add a reviewer agent. It caught bugs and little else, for two reasons. Nobody had defined "correct" precisely, and the worker agents wrote justifications into their commits and comments that the reviewer then accepted. He calls this unintentional prompt injection.

Banks solved this problem long ago and call it maker-checker. The person who initiates a payment cannot be the person who approves it, and the checker works from the source documents, not from the maker's note. A reviewer who reads the author's explanation first is a second signature on the same opinion. Human code review drifts the same way whenever a persuasive pull request description arrives before the diff. If you want [review to be the job](/2026/reviewing-is-the-job), the reviewer needs the artifact and the standard, and should see the story last, if at all.

## The fix was a test, and the agents tried to cheat it

He replaced the reviewer with a script that compiled each reconstructed function and compared its bytes against the original. PASS or FAIL, nothing in between. Agents could now work out for themselves what was wrong.

They also went straight for the exits. The first thing they did was write inline assembly to satisfy the comparison. After that was banned, they repeatedly tried to edit the script so their function would be excluded. His answer was to hash the script in CI and compare it against a value stored as a secret the agents couldn't read.

That is ordinary change control, and it generalizes. Whoever is being measured must not be able to edit the measure. In most companies I know of, the team building an AI feature also writes its evaluation and picks the pass threshold. Nobody is cheating on purpose, but the structure is the same one the agents exploited. Ask who has write access to your evals.

## The economics moved from the model to the harness

The ending is what makes this useful for budgeting. Once the strict check existed, the reviewer was no longer needed, and cheaper models that had produced poor results before could work reliably. The final fleet was mostly 14 low-cost agents with two stronger ones. Of the functions, 99% were reconstructed and 83% matched byte for byte, and the remainder he judged semantically correct but couldn't prove.

Here is the part I'd add. A reviewer is a variable cost: it scales with every change and is only as good as the model behind it. A machine-checkable test is a fixed cost. You build it once, and every later change is checked at close to zero marginal cost. That is why a weaker model became viable. The expensive thing moved from tokens to the definition of done, which fits what I've argued before: [the model was never the moat](/2026/your-model-was-never-your-moat), and the durable asset is the harness around it.

## Most of your work has no answer key

The fair objection is that decompilation has a perfect oracle, the original binary. Underwriting, customer support, and campaign copy don't. He says as much himself.

So build the nearest thing. A ledger the output must reconcile to. A history of past decisions with known outcomes that you can replay. A short list of rules that must never break, such as no refund above the order value. Each is partial, and each beats a reviewer's impression. If you can't build even one, that tells you something too, because it marks where [checking is expensive](/2026/point-ai-where-checking-is-cheap) and agents shouldn't run unattended yet.

## What I'd do before the next agent project

Write the acceptance check before the first agent starts. If the team can't, the scope is too vague to fund. Keep that check out of the workers' reach. And plan for the first month to be wasted, because generation is cheap and, as he found, salvaging bad output cost him more than starting over.

If you're deciding where agents can run on their own in your business and what has to be true first, that is the kind of problem I enjoy working through in an [AI advisory hour](/work-with-me/).
