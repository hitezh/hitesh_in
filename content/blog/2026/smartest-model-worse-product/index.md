---
title: "Why the smartest model can make your product worse"
slug: "smartest-model-worse-product"
date: "2026-07-10"
description: "Frontier models keep setting records, yet what decides whether a real-time AI product works is the second your user waits, not the model's score."
image: images/cover.svg
categories:
  - "technology"
tags:
  - "ai"
  - "product-strategy"
  - "ai-agents"
  - "latency"
  - "product-development"
---

Yesterday OpenAI shipped [GPT-5.6](https://simonwillison.net/2026/Jul/9/gpt-5-6/), a family of three models with a record score on a coding benchmark and a 1.5 million token context window. The feeds did what they always do: everyone raced to re-rank their tools against the new frontier. The most useful AI story I read this week was not about any of that. It was a reading-tutor startup explaining how it [teaches a child in under a second](https://www.ello.com/blog/teaching-a-child-in-1000-ms), and it quietly makes the case that most teams are optimising the wrong number.

The company, Ello, builds a voice tutor that listens to four-to-nine-year-olds read aloud and coaches them in real time. Their hard constraint was not intelligence. It was time: sub-1000ms on every turn. Miss it and the product doesn't get slightly worse, it stops being a tutor.

## The child has a clock. The benchmark doesn't.

Here is the problem Ello ran into. Frontier models take two to three seconds to produce a first token and then decode at around thirty tokens a second. Add a safety classifier that runs 500 to 1000ms, plus network round-trips and audio playback, and a naive loop leaves three to four seconds of dead air between sentences. A benchmark doesn't care about those seconds; it is scored offline, after the fact. A six-year-old cares immediately. One of them, mid-lesson, asked "why is he not doing anything? When is this starting. It's boring."

That is the gap most AI roadmaps miss. We evaluate models the way they are ranked, on accuracy against a static set of tasks, and then we deploy them into live moments that have a tempo. Human conversation turns over in roughly a fifth of a second. A child's attention is shorter still. The benchmark has no clock, but every product a human actually talks to does, and the clock is set by the person on the other end, not by the model.

## Speed and intelligence are pulling in opposite directions

The obvious fix is to reach for a smaller, faster model. Ello tried, and found the smaller models "struggled to follow instructions across that breadth," constantly giving the answer away instead of coaching toward it. So the trade was real: the fast model was dumb in the ways that mattered, and the smart model was too slow to hold a child's attention.

What they did next is the part worth stealing. Rather than choose, they built a streaming harness where the model emits several actions in one response and an interpreter executes each one while the model is still generating the next. The child waits for the first action about thirty tokens in, not for the whole reply to finish. The defensible engineering here was not the model. It was the plumbing around the model that made a capable-but-slow model feel instant. That is the same lesson I keep coming back to: [your model was never your moat](/2026/your-model-was-never-your-moat/), because the scarce work sits in the layer that fits the model into a real workflow.

OpenAI is telling you the same thing, if you read the release rather than the leaderboard. GPT-5.6 didn't ship as one model. It shipped as three, Sol for the hard problems, Terra for high-volume work, Luna for fast and cheap. The vendor has segmented its own frontier by latency and cost and is openly advising you to match the tier to the task. Reaching for the flagship by default is now a decision you are making against the vendor's own guidance.

## A slow tutor is not a slow tutor

The sharpest observation in Ello's write-up is about a different child. She worked out that she only needed to pay attention part of the time and could still keep up with the laggy tutor. As they put it, latency had taught her to tune the tutor out, and that was the moment she stopped learning.

Sit with the second-order effect there, because it generalises well beyond tutoring. A slow AI does not just cost you a few seconds per turn. It trains your users to disengage, and a user who has learned to ignore your product is invisible to the metric you were watching. Your accuracy dashboard can read 100% while the value quietly leaks out, because correctness only counts when someone is still paying attention when the answer arrives. This is why [the real benchmark is your own workflow](/2026/your-backlog-is-the-benchmark/), not a public score. A leaderboard measures whether the model can be right. It cannot measure whether anyone was still listening.

## What I would tell a team building this

Three things, and they are cheap, which is usually a good sign.

First, set a latency budget before you pick a model, and derive it from the human on the other end rather than from your infrastructure. A tutor for a distractible six-year-old, a support agent for a caller already on hold, and a nightly report generator live on completely different clocks. Write the number down first; it constrains every choice after it.

Second, treat the frontier model as a fallback, not a default. Pick the smallest model that clears your quality bar for the common case, and route only the genuinely hard turns to the expensive one. This is the same discipline as spending an [autonomy budget](/2026/the-autonomy-budget/) carefully: capability you don't need on this turn is a cost, not a cushion.

Third, measure disengagement, not just accuracy. Track how often users interrupt, abandon, or stop responding, and treat a rising number there as a product failure even when every answer is correct. The child who tuned out is the signal that no accuracy metric will ever show you.

The industry will keep celebrating each record on each benchmark, and those records are real. But for anything a person talks to in real time, the winning move this year is often to go down the model ladder and spend the saved milliseconds on the interaction. The best AI product I saw this week wasn't the one that topped the leaderboard. It was the one fighting for 300 milliseconds so a child would keep looking at the screen.

If you are trying to work out where your own product's clock actually is, and which model fits inside it, that is exactly the kind of question I like to dig into in an [AI advisory hour](/work-with-me/).
