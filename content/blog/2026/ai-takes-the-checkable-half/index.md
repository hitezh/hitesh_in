---
title: "AI takes the half of the job you can check cheaply"
slug: "ai-takes-the-checkable-half"
date: "2026-09-06"
description: "A new benchmark has AI acing circuit schematics and stalling on the physical board. The split down the middle of one job predicts where automation reaches next."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "strategy"
  - "engineering"
image: images/cover.svg
draft: false
---

A benchmark went up this week that scores AI models on designing circuit boards, and the leaderboard is the least interesting thing on it. eebench had the models do real electronics work, and the [top model cleared about 69 out of 100](https://eebench.org/blog/can-ai-design-circuit-boards-yet/) with the rest strung out behind. Fine. What the single score hides is where the points came from and where they didn't, because that split is the most useful thing anyone has published about AI adoption in a while.

Read past the number and the same discipline breaks cleanly in two. The models are genuinely good at the schematic: the netlist, the bill of materials, cross-checking a part against its datasheet, flagging a missing decoupling capacitor, reviewing a human's board and finding a real bug. They fall apart on routing the physical layout, on analog and RF, on thermal behavior. One engineer, one job, two halves, opposite outcomes. That is the pattern worth taking to work, and it has nothing to do with circuit boards.

## Not difficulty. The feedback loop.

The tempting explanation is that routing is just harder than drawing a schematic. It isn't, not in any deep sense. Reasoning about a control loop is plenty hard and the models do it. The real dividing line is how fast and how cheaply you find out you were wrong.

A schematic is text, and text has a fast oracle sitting right next to it: a rule check, a simulator, a compiler that answers in seconds and costs nothing to run again. Routing a board doesn't. You don't truly know a dense layout works until you fabricate it, assemble it, and put a scope on it, and even good SPICE won't tell you for certain before then. That is weeks and real money per attempt. AI gets good exactly where it can try, be told it was wrong, and try again before the cost mounts. Where the loop is slow, it stays a bright intern who has read every textbook and soldered nothing.

I've argued before that [verification, not generation, is the real constraint on AI](/2026/point-ai-where-checking-is-cheap/), and that [reviewing the output is the job now](/2026/reviewing-is-the-job/). The circuit board case sharpens both. The line doesn't only run between disciplines, coding on one side and law on the other. It runs straight down the middle of a single one.

## The unit AI changes is the task, not the job

Most leadership teams I talk to are still asking which roles AI replaces. That is the wrong altitude. AI doesn't take jobs whole; it fractures them, and the fault line inside almost every job separates the tasks with a cheap, fast check from the tasks gated by a slow, expensive one.

Look at your own org through that lens and it resolves quickly. A financial analyst pulling and reconciling numbers has an oracle: it ties out or it doesn't, today. The same analyst judging whether a deal is actually good has no oracle for years. A lawyer drafting a standard clause can be checked against a template in minutes; a novel argument is only tested in front of a judge months later. A marketer running ad variants learns the answer from an A/B test by Friday; a brand repositioning reports back in a year, if ever.

Here is the prediction that falls out of it. AI will look stuck in exactly the departments where being wrong is expensive to discover, and people will misread that as those problems being intellectually harder. Usually they are not harder. The loop is just longer. Knowing the difference tells you where to push and where to wait.

## The axis is loop latency, not one check's cost

One check's price is only part of it. What really matters is speed: how soon the answer comes back, and how cheaply you can go around again. A model needs two things to improve at a task: a signal that it was wrong, and the room to retry before the bill lands. Software hands it both in seconds.

This also explains the habit every engineer in that benchmark complained about: the models over-build, belt and suspenders, an extra component nobody needs. A system that never feels the cost of a wasted part optimizes to pass review, so it hedges. Taste is what a slow loop never gets to teach it. You cannot train judgment into a thing that only hears whether it was right once a quarter.

## The move most people miss: shorten the loop

If the loop decides, then the highest-leverage AI investment in a verification-slow domain is not a better model. It is making the loop itself faster and cheaper. Better simulation, a digital twin, staged rollouts, synthetic environments, more instrumentation, anything that converts a slow physical check into a fast automated one. Do that and you move a workflow that looked safe from AI into range, deliberately. The hardware teams that get real value first won't be the ones renting the best model; they'll be the ones whose simulation got good enough that the model can iterate against it before anything reaches a fab.

That is the part a CTO controls. You [rent generation, and it gets cheaper by the month](/2026/your-model-was-never-your-moat/); you cannot buy a feedback loop off a menu. The proprietary check, the ground truth you own, the environment where trying again is free, is the asset that decides whether AI compounds in your business or stalls in a demo. For a CEO the reframe is a budgeting one: rank workflows by how fast the loop closes, not by how impressive the demo looks. For a head of product it is a moat question: in an AI-heavy category, the durable edge is the feedback loop you own, not the model everyone can call.

The benchmark score will climb; they always do once a target has a name. The shape won't. AI compounds fastest wherever it can be told it was wrong, cheaply and soon, and it waits wherever the answer is slow and dear. Map your business on that one axis and you can read, roughly, the order in which automation arrives, and which slow loops are worth the money to make fast.

If you are trying to work out which of your workflows already have a tight enough loop for AI to help, and which need one built first, that is the conversation I have in an [AI advisory hour](/work-with-me/).
