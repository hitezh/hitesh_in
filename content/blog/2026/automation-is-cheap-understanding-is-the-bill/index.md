---
title: "Automation is cheap. Understanding is the bill you don't see."
slug: "automation-is-cheap-understanding-is-the-bill"
date: "2026-07-13"
description: "AI makes producing work nearly free while draining the human judgment that catches it when it's wrong. Deciding which understanding to keep in-house is now strategic."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "opinion"
---

A recent arXiv paper by the mathematician Jun-Yong Park, [Automation Without Understanding](https://arxiv.org/abs/2607.06377), opens with an uncomfortable moment: the May 2026 disproof of a longstanding Erdős conjecture on unit distances in the plane, produced by an AI system, in a form few mathematicians could actually follow. The proof checks out. The understanding behind it does not sit in any human head. Park's worry is that a field can keep producing results while quietly losing the capacity to interpret, verify, and challenge them, and that this capacity takes generations to build and no time at all to lose.

Mathematics is the clean laboratory version of a problem every company adopting AI is walking into. When you automate a piece of work, you get the output immediately. What you lose is slower and harder to see: the human understanding that used to come bundled with doing the work by hand.

## You are buying two different things

Automating a function delivers two things that are easy to confuse. The first is production: the report, the code, the risk score, the marketing site. The second is understanding: the accumulated judgment that lets someone look at the output and say that number is wrong, or that assumption broke last quarter.

Production is a flow. You can meter it, and AI makes it almost free. Understanding is a stock. It builds slowly, through people who have made the mistakes and seen the edge cases, and it drains just as slowly and invisibly once nobody is doing the work by hand. Every dashboard you own measures the flow. None of them measures the stock.

That asymmetry is the whole problem. You see the productivity gain the same week you deploy the tool. You do not see the understanding you gave up until the day you need it, which is usually the day something has gone wrong.

## The paradox is old; only the scale is new

This is not a new failure mode, which is why I trust it. In 1983 the psychologist Lisanne Bainbridge published [Ironies of Automation](https://ckrybus.com/static/papers/Bainbridge_1983_Automatica.pdf), still one of the most cited papers in human factors engineering. Her point was that the more you automate a process, the more the human is left with only the rare, hard cases, and the less everyday practice they get at handling them. Automation does not remove the need for skilled operators. It removes the routine work that kept them skilled, then calls on them in the emergency.

Aviation learned this the expensive way, with a generation of pilots who could manage the autopilot but had lost the feel for flying the plane when it disengaged. Finance learned it in 2008, when banks priced mortgage risk with models almost nobody on the relevant boards could explain, [a single formula](https://www.wired.com/2009/02/wp-quant/) doing work its own author had warned against trusting too far. In both cases the production was excellent right up to the moment understanding was required, and then it was catastrophically absent.

AI does not invent this trap. It industrializes it, and pushes it out of the cockpit and the trading desk into ordinary functions: support, analysis, engineering, underwriting, content. Places where no one thinks of themselves as running critical infrastructure.

## The bottleneck moves to the person who can tell it's wrong

Here is the part leadership teams underestimate. When production becomes cheap and abundant, the scarce resource is no longer the work. It is the judgment to know when the work is wrong. I've [written before](/2026/when-ai-passes-every-test-and-still-gets-it-wrong) about AI output that passes every test and is still confidently wrong; the failure is no longer loud. So the constraint in an AI-heavy organization is not how fast you can generate. It is how fast you can verify, and verification runs on exactly the stock you stopped replenishing.

The teams pulling ahead treat this as a real constraint. They generate freely and they guard the review seat. Before automating anything, they ask a question most roadmaps skip: if this output were subtly wrong for six months, who would notice, and how?

## Decide which understanding is load-bearing

I've argued before that the hard part of software was never the typing; it is the understanding, and [code you can't explain](/2026/the-code-you-cant-explain) stays a liability however fast it arrived. The same logic scales to the whole company, and it sharpens the usual build-versus-buy question into a better one: you can outsource almost any production, and you cannot outsource the capacity to know when that production has failed you.

So name the judgments your business actually rests on, and keep humans fluent in exactly those. A bank can automate the drafting of a credit memo and must keep people who understand why a portfolio is drifting. A retailer can automate a thousand campaign variants and must keep someone who knows what its best customers will not tolerate. Automate around the load-bearing understanding, not through it.

The rest follows from treating understanding as a stock you fund rather than a byproduct you assume. That means keeping the junior roles that were always the training ground, even when an agent looks cheaper this quarter, because those roles are how the stock refills. It means measuring your verification capacity, not just your output. And it means being honest that the [autonomy you hand an agent](/2026/the-autonomy-budget) is borrowed against understanding you had better still hold.

Automation is cheap now, and getting cheaper. Understanding never was. The companies that come out of this decade ahead will be the ones that noticed the second bill before it came due.

If you are working out which parts of your business you can safely automate and which understanding you need to keep close, that is exactly the conversation I have in an [AI advisory hour](/work-with-me/).
