---
title: "The engineer who picks the model never sees the bill"
slug: "who-sees-the-ai-bill"
date: "2026-10-08"
description: "Meta and Microsoft are reportedly cutting internal Claude use. The cut is a symptom: AI budgets run on usage counts until finance steps in, and a cap is a blunt tool."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "economics"
  - "governance"
  - "engineering-leadership"
image: images/cover.svg
draft: false
---

Microsoft had projected at least $1 billion of internal spending on Anthropic this year. According to [The Information's reporting](https://aiweekly.co/alerts/meta-microsoft-scale-back-staff-use-of-anthropics-claude), that estimate has since been cut by more than a third. At Meta, internal Claude Code users have reportedly fallen from about 60,000 to about 30,000. Neither company has confirmed the numbers, and Microsoft's customer-facing spending on Anthropic models is reportedly still growing.

The obvious reading is rivalry. Both companies build competing models and coding tools, so of course they would rather their own engineers used those. That is probably true, and it explains why these two moved. It tells the rest of us very little, because most companies have no in-house model to move to. What the story does show is what happens to an AI budget that nobody was managing: it runs wide open for a year, then gets cut by decree.

## Usage became the scoreboard

A lot of companies measured AI adoption the way it was easiest to measure, with seats, prompts, and tokens consumed, and a few put the numbers on a leaderboard. Anything you rank gets more of itself. Lines of code taught the industry this lesson decades ago, and token counts are the same metric with a bigger invoice attached.

Then the invoice arrives, and finance has exactly one lever: a cap. Cloud went through this around 2016. Teams lifted and shifted, the bill surprised everyone, and the first response was a blanket cut before anyone had built the tagging to know what the spend was buying. FinOps as a discipline came after the pain, not before it.

## A flat cap punishes the wrong people

Cut every engineer to the same monthly limit and you treat two very different people the same. One has an agent stuck in a loop re-reading a repository. The other has an agent that closed forty tickets. Both are heavy users, and often they are the same person on different days.

Without a cost per outcome you cannot tell them apart, so the cut has to be blunt. I'd expect the people getting the most real value from AI to feel it first, and the wasteful pattern to survive in smaller form. The better unit is the cost of a finished piece of work: a merged change, a resolved support case, a reviewed contract. Once you have that, "spend less" becomes "spend less per outcome", which is a conversation engineers can actually have.

## The person choosing the model doesn't pay for it

This is the part I rarely see discussed. Picking a model is a decision made by the person who never sees the price. If the cheaper model gives a worse answer, the engineer owns that failure. If the expensive one costs ten times more, someone in another department owns that. Economists call this moral hazard, and it needs no bad intent. Choosing the most capable model every time is the rational move for anyone whose reputation sits on the output and whose budget sits elsewhere.

Telling people to be efficient doesn't fix it. Moving the price to the point of decision does: show each team its own spend weekly, set a sensible default model per workflow, and make using the expensive one a visible choice rather than the path of least resistance. Attribution has to come first, which is [the Delhi lesson](/2026/meter-before-the-model/). This is the next step, making sure the number reaches the person who can change it.

## Switching is cheap only if you kept your own tests

Meta can move tens of thousands of engineers because it built the tools to move them to. A company of 200 people faces a different problem. The cost of switching vendors is rarely the contract. It is not knowing whether the replacement is any good on your work. Teams that have [a small evaluation built from their own merged pull requests](/2026/your-backlog-is-the-benchmark/) can answer that in a week. Teams that don't will run a quarter-long migration on instinct, or stay put and pay whatever the bill says.

The same goes for the layer around the model. If your corrections, review rules, and workflow logic live inside one vendor's product, you have given them [the part that compounds](/2026/rent-the-harness-own-what-it-learns/). A budget cut then becomes a capability cut.

## What I'd put in place before the cut arrives

If I were advising a leadership team on this today, I'd start with three things:

1. Count outcomes alongside usage. Pick two or three workflows and track the cost per finished unit of work. Retire the token leaderboard.
2. Make the price visible where the model gets chosen. Weekly showback per team, and a default model per workflow that people can override on purpose.
3. Keep a way out. A small evaluation on your own work, and your rules and corrections stored somewhere you control, so a vendor change or a 30% budget cut is a planning exercise and not an emergency.

None of this is exotic. It is the same discipline that every earlier infrastructure cost curve eventually forced on us, just compressed into months. The companies that set it up while budgets are generous will cut cleanly. The rest will cut the way Microsoft and Meta reportedly just did.

*If your AI spend is growing faster than your ability to say what it bought, that is the kind of question I like working through in an [AI advisory hour](/work-with-me/).*
