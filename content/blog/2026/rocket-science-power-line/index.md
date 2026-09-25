---
title: "Google would rather solve rocket science than wait for a power line"
slug: "rocket-science-power-line"
date: "2026-09-25"
description: "Google is testing AI chips in orbit instead of waiting years for a grid connection. That choice, not the satellites, is the real signal for anyone planning an AI roadmap."
categories:
  - "technology"
tags:
  - "ai"
  - "infrastructure"
  - "economics"
  - "strategy"
image: images/cover.svg
draft: false
---

On October 1, a SpaceX Falcon 9 is due to carry four of Google's TPUs into orbit under [Project Suncatcher](https://blog.google/innovation-and-ai/models-and-research/google-research/google-project-suncatcher-facts/), the company's bet that AI chips can run on satellites bathed in eight times more sunlight than any panel on Earth gets. The coverage has mostly treated this as a curiosity: can you really cool a chip in a vacuum, will radiation fry it, is this science fiction with a launch date. Those are fine questions. They are not the interesting one.

The interesting question is why a company with Google's balance sheet is racing toward a problem this hard, rather than solving the much more boring one sitting right in front of it: getting a new data center connected to the electric grid.

## The boring problem is the real one

Here is what that boring problem looks like from the inside. [Dominion Energy](https://inflect.com/blog/data-center-power-shortage-2026-why-grid-capacity-is-now-the-bigger-constraint-than-gpus), which powers Virginia's Data Center Alley, is now quoting wait times of three years for a new substation and up to seven for a 100-megawatt connection in its most constrained territory. PJM, the grid operator covering a swath of the mid-Atlantic and Midwest, missed its own reliability target for the first time ever in December, short by more than 6,600 megawatts, with data centers responsible for the great majority of the demand growth behind it. Across the whole US grid, [more than 2,000 gigawatts](https://inflect.com/blog/data-center-power-shortage-2026-why-grid-capacity-is-now-the-bigger-constraint-than-gpus) of generation and storage capacity is sitting in interconnection queues, and only about a quarter of it has a confirmed timeline. In 2008, the average PJM interconnection took under two years start to finish. Today it takes over eight.

That is the constraint Google is trying to route around. Not Nvidia's roadmap, not model architecture. A power line.

## The math doesn't work yet, and Google knows it

Space is not a shortcut. Its own numbers say so. Suncatcher's white paper puts the launch cost needed for orbital compute to make sense at roughly $200 per kilogram. A reusable Falcon 9 costs about [$3,600 per kilogram](https://techcrunch.com/2026/02/11/why-the-economics-of-orbital-ai-are-so-brutal/) today, eighteen times too expensive, and Google's own timeline for closing that gap is "the 2030s," contingent on Starship actually working at the cadence SpaceX has promised for years and not yet delivered. Independent estimates from space engineer Andrew McCalip put a 1-gigawatt orbital data center at roughly $42 billion, nearly three times an equivalent facility on the ground, and satellites still cost close to $1,000 a kilo to build, needing to roughly halve before any of this pencils out.

Google is not confused about any of this. A company that ships TPUs for a living can do arithmetic on launch costs. The bet is not "space is cheaper." The bet is "space might eventually be cheaper than waiting."

## Read it as an option, not a plan

The move makes much more sense once you stop reading it as a product roadmap and start reading it as a real option, the same instrument an oil major uses when it buys an exploration lease it may never drill. Suncatcher costs Google a rounding error against its capex budget. What it buys, if the physics and the launch costs cooperate a decade out, is the right to keep scaling compute without ever again standing in a seven-year queue behind a public utility. You do not need to believe the option pays off to see why it is rational to hold it. You just need to believe the queue is real, and Google clearly does, because it is the only reason any of this pencils out at all as a research program.

I would put this alongside a shift I have written about from other angles: [someone is subsidizing your AI compute](/2026/subsidized-ai-compute/), and the depreciation schedule underneath the buildout runs on [a two-year asset financed with six-year money](/2026/ai-duration-mismatch/). All three point at the same thing from different directions. The price and availability of AI compute that you are extrapolating a business plan from is being propped up, in one way or another, by arrangements that do not hold at their current shape indefinitely. This time the prop is a power grid that cannot clear its own backlog, and the company with the most reason to know that has just told you so with an actual rocket.

## What changes because of this

The practical shift is who needs a seat at the table when you plan an AI rollout. For the last three years, the binding constraint on an AI strategy was something a CTO could requisition: GPUs, model access, engineering time. Increasingly it is something a CTO cannot requisition at all: a substation upgrade, a grid interconnection slot, a utility's multi-year queue. That is not a technology problem your engineering org can solve by hiring better people. It is closer to a real-estate and utilities negotiation, and most AI strategy conversations I sit in still have nobody in the room who has ever read an interconnection agreement.

Nobody is choosing between space and the grid for the next several years. Compute keeps coming from data centers built the old way. But if a company Google's size is quietly pricing in a decade where the grid stays the bottleneck, that is worth pricing into your own plan too, whether that means longer contracted lead times on capacity, a harder look at on-site or off-grid power for anything you build yourself, or just not assuming the compute you are planning around three years from now will be as available, or as cheap, as it is this quarter.

*If grid and power constraints are quietly showing up in your AI infrastructure planning, that is exactly the kind of assumption worth pressure-testing in an [AI advisory hour](/work-with-me/).*
