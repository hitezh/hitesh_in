---
title: "AI will not shrink your hard problems. It will concentrate them."
slug: "ai-concentrates-hard-problems"
date: "2026-09-09"
description: "OpenAI's contested Navier-Stokes proof shows AI clearing well-posed problems fastest. The messier work it leaves behind is where your people now add the value."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "strategy"
  - "opinion"
---

Last week OpenAI said one of its unreleased models had [produced a proof](https://www.quantamagazine.org/ai-has-solved-one-of-maths-1-million-millennium-prize-problems-20260908/) that three-dimensional fluid flow can break down in finite time, a result inside the Navier-Stokes problem that has sat open for about ninety years and carries a million-dollar Millennium Prize. Within a day the story was less about the math and more about the fight. Two mathematicians, Tristan Buckmaster and Levent Alpöge, had reached [almost the same result](https://fortune.com/2026/09/08/openai-says-it-cracked-navier-stokes-math-grand-challenge-buckmaster-accusation-cheating-intimidation-tao-lament/) independently, and Buckmaster says OpenAI [pushed hard](https://techcrunch.com/2026/09/08/openai-fought-dirty-on-career-making-math-problem-says-nyu-mathematician/) on credit, down to whose name could stay on the paper.

The proof is contested and I am not the person to adjudicate it. The pattern underneath is what matters, because it says something about where AI will help your company and where it is quietly going to make your life harder.

## AI is best where the problem is already well-posed

Navier-Stokes did not fall because it was easy. It fell, if it fell, because it was clean: a precisely stated question with a machine-checkable notion of what counts as an answer. That trait is what AI is chewing through fastest, and it is not the same trait as "hard." Competitive programming, formal proofs, protein structures, chip layout are all difficult, but they are difficult in a well-posed way. The target is crisp and a checker can tell you whether you hit it.

Most of the work inside a company is not like that. "Should we enter this segment," "why did churn jump in month two," "what is the right onboarding for this customer" are not well-posed questions. Half the work is deciding what the question even is. AI is weakest exactly where the problem is muddy, and strongest exactly where someone has already done the hard part of making it crisp.

Terence Tao made the sharp version of this about his own field. He argues that good open problems have become [something like a non-renewable resource](https://mathstodon.xyz/@tao/117237320796901560): there are infinitely many problems, but the supply of ripe, worth-solving ones is finite, and automated solvers are, in his words, strip-mining them. Once mined, they are gone as frontier.

## Clearing the easy work concentrates the hard work

Here is the part leadership teams miss. If AI clears the well-posed problems fast, the problems it leaves behind are, on average, the mushy ones. It does not reduce your hard problems. It removes the tractable middle and hands you a backlog that is harder per item than the one you started with.

That runs against every productivity dashboard. Throughput climbs, tickets close faster, and the average difficulty of what remains rises at the same time. A team can look more productive while sitting on a residue of exactly the ambiguous, judgment-heavy work it was always worst at. I have watched teams celebrate the velocity number and walk straight into the harder half without noticing the mix had changed.

The [verification cost I wrote about earlier](/2026/point-ai-where-checking-is-cheap/) is one face of this. The other face is supply. It is not only that checking is the expensive step; it is that the stock of cleanly checkable problems is finite, and AI draws it down.

## The value moved from answering to posing

Economists have a tidy way to see where this goes. When one input to production becomes cheap and abundant, the money flows to whatever scarce thing sits next to it. Cheap steam did not enrich the people who made steam. It enriched the people who knew what to build with it. Answers are becoming that cheap input. The scarce complement is the ability to take a vague business situation and turn it into a problem sharp enough to be worth answering.

Read the Navier-Stokes fight through that lens. When the answer becomes something several models can reach in a weekend, the value and the entire argument move to who owns the problem, whose name goes on it, who framed it first. Watch where the fight actually broke out. When answers commoditize, people compete for what stays scarce, and what stays scarce is ownership of the question.

This is why "[AI won't have your next idea](/2026/ai-wont-have-your-next-idea/)" and "[your model was never your moat](/2026/your-model-was-never-your-moat/)" keep turning out to be the same point from two sides. The model is rentable. The framed problem is not.

## What I would change

If I were advising a company on this, I would start in three places.

Reweight how you judge work. A person who closes ten well-posed tickets is doing commodity work a model will soon do more cheaply. A person who takes something nobody could even state and turns it into three checkable problems is doing the scarce thing. Most performance systems reward the first and are blind to the second.

Then treat your clean problems as a wasting asset. Tao's warning has a corporate version: your library of sharp, checkable problems, your good test cases and well-specified edge cases, is being consumed faster than you refill it. Do not let AI clear it while your team learns nothing about why the answers worked. A solution nobody on the team understands is a debt, and it is the specific debt that stops you posing the next good problem.

Last, put your best judgment upstream. The strongest teams I see are moving their sharpest people away from producing answers and toward two things: posing the problem, and owning the calls where no checker exists. That is the ill-posed, important quadrant, and it is the one AI cannot enter until a human makes the problem legible first.

The uncomfortable reading of the Navier-Stokes week is not that a machine did some math. It is that the machine went straight for the one problem in the room that was already perfectly posed, and left the humans to fight over who owned it. Your company is full of the opposite kind of problem. Deciding which of them is worth making crisp, and which of your people should be doing that instead of clearing tickets, is the work that pays for the next decade. If you want a second pair of eyes on where that line runs in your own business, that is the conversation I have in an [AI advisory hour](/work-with-me/).
