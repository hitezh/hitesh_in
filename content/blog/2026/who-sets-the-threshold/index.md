---
title: "Your AI now returns probabilities. Who sets the threshold?"
slug: "who-sets-the-threshold"
date: "2026-10-07"
description: "OpenAI's new Decisions API makes classification nearly free. The model's answer was never the hard part; the number at which your business acts on it is."
image: images/cover.svg
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "decision-making"
  - "economics"
  - "product-strategy"
draft: false
---

OpenAI put a [Decisions API](https://developers.openai.com/api/docs/guides/decisions) into public beta this week. You give it text or an image and a question, and it returns a typed answer: a probability that something is true, a pick from a fixed list, or a score against a rubric. It is priced at $0.10 per million input tokens, with no charge for output, and OpenAI says it runs about ten times faster than its Responses API. Around the same time, the Strands Agents team released [a 2B-parameter open-source decision model](https://strandsagents.com/blog/introducing-strands-decider/) that makes a call in roughly 115 milliseconds on a single consumer GPU.

Most commentary will be about price and speed. I think the more interesting part is the word "probability," because it quietly hands a business decision to someone who may not know they own it.

## The threshold is a P&L setting

When a model says 0.82 probability that a shipment arrived damaged, somebody has to decide at what number you refund the customer, or flag it, or ignore it. In most teams I have seen, that number gets picked by whoever wires up the integration, usually 0.5 or 0.7, because it feels sensible.

It is an economics question with a short formula. Act when the chance of being right, times what a miss costs you, beats the chance of being wrong, times what a false alarm costs you. Take an illustrative case: a missed damaged shipment costs Rs 4,000 in refund and goodwill, and a false flag costs Rs 150 of reviewer time. The break-even is about 4%, not 70%. You should be flagging far more than the default would, because wrongly flagging is cheap and missing is not.

Flip the costs, say an automated account block that angers a good customer, and the right threshold climbs above 95%. Same model, same API call, opposite settings. The model is a commodity. The threshold encodes what your business is afraid of.

That makes it a leadership question. Someone in finance or operations should be able to say what a false positive and a false negative cost, and sign off on the number. I would ask any team shipping an AI classifier a plain question: who approved the threshold, and on what numbers?

## Calibration is the switching cost nobody prices

There is a catch hiding in the API's own design. A probability is only useful if 0.8 really means right about eight times in ten. That property is called calibration, and it is separate from accuracy. A model can pick the right answer most of the time and still report confidence numbers that mean nothing. It is why the Strands team ranks its model on accuracy and calibration together.

Now connect that to vendor choice. Your threshold was tuned against one model's score distribution. Swap in a cheaper model, or let the vendor ship a new version, and the same 0.82 can mean something different. The threshold you carefully derived is now wrong, and nothing in your system will tell you.

So the real cost of switching between decision models is not the price per million tokens. It is the work of re-tuning, which needs a set of labelled outcomes you trust. My expectation (an inference, not something I have measured) is that the teams who keep a few hundred recent, human-verified cases will switch vendors in a week, and the teams who don't will stay put for years and call it loyalty. If you are [already thinking about where your advantage sits](/2026/your-model-was-never-your-moat/), this is one candidate: your labelled outcomes belong to you, and no vendor can ship them.

## Cheap decisions move the bottleneck

At $0.10 per million tokens, scoring a 500-token support ticket costs about five thousandths of a cent. Scoring ten thousand of them costs fifty paise. At that price you will stop asking which decisions are worth automating and start scoring everything: every email, every pull request, every lead, every invoice line.

Economists call this pattern Jevons paradox. When something gets cheaper, you use so much more of it that total spending rises. Decisions are about to become the next example. The model call is no longer the expense. The expense is what happens after, because every flagged item still needs somebody to act, and that somebody is a person with a finite queue.

I would budget for that before the pilot starts. If scoring tickets surfaces 3,000 "likely churn risk" accounts and you have four customer success managers, the system has produced a backlog, not insight. [Earlier I wrote](/2026/where-jev-shines/) about the places in an agent stack where a cheap, fast decision beats a frontier model. The follow-up question is what the organization does with a thousand times more decisions than it used to make.

## What I would do

Before wiring any decision API into a workflow, I would settle three things:

- **Put a cost on both kinds of error,** in rupees, and derive the threshold from them. Write down who agreed it.
- **Keep a labelled sample from your own operations,** refreshed quarterly, so you can recalibrate on any model change in days.
- **Size the action capacity first.** A decision with nobody to execute it is just a notification.

None of this requires a large AI program. It does mean treating a classifier as a business policy with a model underneath, which is a different habit from treating it as a feature. It also fits the principle behind [the autonomy budget](/2026/the-autonomy-budget/): automate the judgment you can price, and keep a person on the cases where a mistake is expensive.

If a team is staring at a list of candidate decisions and trying to decide which ones are worth scoring first, that is the kind of problem an [AI advisory hour](/work-with-me/) is good for.
