---
title: "AI turned every engineer into a manager. Nobody trained the managers."
slug: "every-engineer-a-manager"
date: "2026-08-16"
description: "Working with AI feels like managing a fast junior developer. But you can only delegate what you can verify, and the agent never grows into someone who can check the work for you."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "software-engineering"
  - "strategy"
  - "opinion"
---

Someone whose code I respect wrote this month that [working with AI feels more like leadership than coding](https://allen.bargi.org/notes/working-with-ai-feels-like-leadership/). You stop issuing precise instructions and start setting context, giving examples, correcting, explaining why the work matters. It rang true. Most of my hands-on time with agents lately has felt less like typing and more like running a very fast junior developer who never gets tired and never quite gets it right.

The framing is flattering, which is the first reason to be suspicious of it. It tells every engineer that the skill they have been building on the side, telling other people what to do, is suddenly the scarce one. Maybe. But "leadership" smuggles in a promise the tool can't keep, and it hides the one management failure mode this shift is about to spread through every engineering org.

## Manage the thing, but keep the receipts

There is a tidy objection doing the rounds: you manage things and you lead people, and an agent is a thing that behaves like a person, so the word is wrong. Fair, but it's a vocabulary fight. The useful correction is about what actually transfers.

The skill that transfers is narrower than either word suggests: verification. You can only delegate what you can verify. A good manager doesn't check every line, but they could, and their judgment about whether the work is right was earned by doing the work themselves. Take that away and you don't have a manager. You have someone signing off on things they can't read. We have a word for that too, and it isn't flattering.

That is the quiet condition underneath the whole "AI as your team" story. It works exactly as far as your ability to tell good output from plausible output, and no further. [I've argued before](/2026/reviewing-is-the-job/) that writing code went to nearly free while reviewing it became the actual job. The leadership metaphor is the same fact wearing a nicer suit.

## The apprenticeship you're spending

The metaphor hides one thing. Where does the ability to verify come from? For most engineers it came from doing the boring work: the CRUD endpoints, the test fixtures, the bug that took two days and taught you how the system actually breaks. That grunt work was never only output. It was the training set for judgment.

Agents are very good at exactly that work. So the same tool that makes a senior engineer feel like a manager also removes the rungs a junior used to climb to become one. You get more done this quarter by drawing on a reserve of judgment you built years ago, and you refill it more slowly, or not at all. [Automation is cheap; the understanding it drains is the bill you don't see on the invoice.](/2026/automation-is-cheap-understanding-is-the-bill/)

Real management has an exit from this. Your junior gets better, earns trust, and eventually verifies work for you. The AI never gets promoted. It will produce at ten times your reading speed forever, and the burden of checking stays entirely yours and grows with the output. It is management where the report never grows up and the span of control has no ceiling.

## What a leader should actually change

If this is management, then manage it like a serious operator, not a fan.

**Stop celebrating the wrong number.** Pull requests merged, lines shipped, sprint velocity: AI inflates all of them for free, and they measure production, which is now the cheap part. What you want is verified throughput, and the depth of your bench of people who can actually do the verifying. What a team can't verify, it doesn't own. It's just holding it until it breaks.

**Make checking cheap on purpose.** Tests, types, small diffs, good observability, boring architecture. The unglamorous fundamentals are no longer hygiene; they decide how much AI output you can safely absorb. [Point the agent where checking is cheap](/2026/point-ai-where-checking-is-cheap/) and it pays. Point it where checking is expensive and you have built a machine for generating confident, costly mistakes.

**Protect how judgment is made.** If juniors no longer learn by writing the boring code, they have to learn by reviewing it, which is harder and needs deliberate design. The firm that works out how to manufacture senior judgment in an AI-first shop will out-hire everyone, because that supply is about to get scarce.

When production is nearly free and verification is not, you get the dynamic economists call [a market for lemons](https://en.wikipedia.org/wiki/The_Market_for_Lemons): plenty of output, no cheap way to tell good from bad, and quality rots. Your review process is the thing standing between your codebase and that outcome.

So yes, the work feels like leadership now. Just remember what real leaders know and beginners forget: you can only delegate what you could, in principle, check yourself. AI spends that reserve of judgment faster than anything before it and does nothing to refill it. A CTO's real question this year is less about how much faster the team can ship, and more about where the people who can tell whether it's any good will come from in five.

If that's the question on your desk, [it's the kind of problem I help teams think through](/work-with-me/).
