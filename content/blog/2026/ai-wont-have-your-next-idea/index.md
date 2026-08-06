---
title: "AI won't have your next idea"
slug: "ai-wont-have-your-next-idea"
date: "2026-08-06"
description: "A DeepMind researcher argues LLMs can reason and prove but never originate. That boundary decides where AI multiplies your team and where it just recycles the past."
categories:
  - "technology"
tags:
  - "ai"
  - "ai-strategy"
  - "product-strategy"
  - "strategy"
  - "engineering-leadership"
image: images/cover.svg
draft: false
---

Tom Zahavy, a researcher at Google DeepMind who worked on [AlphaProof](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/), published a [position paper](https://www.tomzahavy.com/projects/llms-cant-jump) with a title that reads like a shrug: "LLMs can't jump." The argument underneath is one every executive placing AI bets should sit with for a minute.

He borrows a distinction the philosopher [Charles Sanders Peirce](https://en.wikipedia.org/wiki/Abductive_reasoning) drew more than a century ago. Reasoning comes in three modes. Induction finds patterns in data. Deduction works out the consequences of rules you already hold. Abduction is the odd one: the leap from a pile of observations to a new explanation that was not sitting inside them. Zahavy's claim is that models have gotten very good at the first two and cannot do the third, and that no amount of scaling or clever prompting closes the gap.

His test is clean. Give a model everything humanity knew by 1905, every paper and dataset and equation Einstein had in front of him, and ask it to produce general relativity. It won't. Feed it relativity after the fact and it will reconstruct the theory beautifully, extend it, teach it back to you. It just can't make the jump that put the idea there in the first place.

## Why a founder should care about a physics thought experiment

Because you are running a version of the Einstein test every time you point AI at a problem, and mostly you don't notice which side of the line you're standing on.

Almost everything a company does all day is induction and deduction. Draft the contract from the last fifty contracts. Reconcile the ledger. Turn the ticket into code that looks like the rest of the codebase. Summarize the research, tag the support queue, write the variant of the email that worked last quarter. That is most of the payroll, and AI genuinely multiplies it. It is why "AGI isn't here" and "AI is already worth a fortune to us" are both true at the same time. You do not need a machine that can jump to get enormous value from one that can interpolate across everything ever written about your problem.

The trouble starts when someone hands the model an abductive job and mistakes a fluent answer for a real one. Ask it "what should our product be" or "find us a new market," and you get something confident and well-written. It will be a smooth average of every product strategy already on the internet. That is the tool working as designed. Interpolation is all it has, so it gives you the center of the distribution, and the center of the distribution is exactly where no advantage lives.

## The jump is the last thing that doesn't commoditize

The paper stops at science. The strategy version is sharper, and it is the part I'd put in front of a board.

When your competitors run the same three frontier models on the same public data, their output drifts toward the same mean, and so does yours. I made this case about [why the model was never your moat](/2026/your-model-was-never-your-moat/): as intelligence gets cheap, advantage moves to whatever stays scarce. Abduction is what stays scarce. The hypothesis nobody has written down, the customer pain nobody has named yet, the bet that looks wrong until it doesn't, none of that is in the training data, because it hasn't happened. The competent middle of your business is now a commodity you rent by the token. The jump is the only asset the machine can't hand your rival too.

## There is no benchmark for the leap

Notice what this does to the leaderboard chase. Every benchmark that matters to buyers measures deduction and induction: can the model pass the bar exam, solve the math set, retrieve the right passage, write the passing test. Those are all "does the answer match a known key" tasks. There is no benchmark for abduction, because a genuine leap has no answer key by definition. So a model can top every chart you can find and tell you nothing about whether it can do the one part of your business that actually compounds. A high score measures how well it recombines the past, not whether it can see past it.

## The honest objection

The strongest rebuttal is DeepMind's own work. AlphaZero found move 37. AlphaProof discovered proofs no human handed it. Those were real leaps, and the honest thing is to take the objection seriously. But look at what those systems have that a chatbot doesn't: a closed world with fixed rules and a cheap, automatic referee for whether a new idea is correct. In Go or a formal proof you can search wildly, and the rules tell you instantly whether the jump landed. Most business problems don't ship with that referee. This is the same reason I keep telling teams to [point AI where the checking is cheap](/2026/point-ai-where-checking-is-cheap/). Where you can verify an answer mechanically, let the machine roam and be wrong a thousand times. Where the only judge is a human with taste and a market that takes two quarters to answer, the model's confidence is a liability.

Some researchers argue the models already [extrapolate a little past their training](https://arxiv.org/abs/2505.23323), and maybe they do. Even granting it, the leaps are short and stay inside the distribution. The founder's job is the long jump, and that is still yours.

## What I'd actually do with this

Three things. First, map your work by reasoning mode before you buy anything. The deductive and inductive piles are where you automate and augment hard; the abductive pile is where you keep humans and use AI to argue with them, not for them.

Second, change how you use the model on strategy work. Don't ask it for the hypothesis. Give it yours, then make it deduce the consequences, generate the variants, and mount the best case against you. That plays to its strengths and keeps the leap where it belongs.

Third, protect the jump when you cut costs. The instinct will be to thin out the competent middle, because that is what got cheap. But the middle was also where people learned to make the jump. Cut it to the bone and you save on the [understanding you don't see on the invoice](/2026/automation-is-cheap-understanding-is-the-bill/) until the year you need a new idea and find nobody left who can have one.

The most valuable skill in your company is about to be the one your tools can't reach: seeing the axiom nobody has written down yet. If you want a second pair of eyes on where that line runs through your own roadmap, that is the kind of question I like to work on in an [AI advisory hour](/work-with-me/).
