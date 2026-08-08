---
title: "The AI boom is on your bill of materials"
slug: "ai-boom-bill-of-materials"
date: "2026-08-08"
description: "Memory prices have doubled as AI accelerators eat the wafer supply. Companies that never bought a GPU are now paying for the buildout on every product they ship."
categories:
  - "technology"
tags:
  - "ai"
  - "strategy"
  - "economics"
  - "infrastructure"
  - "hardware"
image: images/cover.svg
draft: false
---

A gigabyte of DDR5 memory cost under seven dollars last September. By December it was [near twenty-seven](https://tech-insider.org/ddr5-ram-prices-2026/). RAM prices roughly quadrupled in a quarter, and nothing went wrong in the memory market to cause it. No factory fire, no shipping crisis. AI accelerators ate the supply. TrendForce now puts first-quarter conventional DRAM contract prices up [90 to 98 percent quarter over quarter](https://www.trendforce.com/presscenter/news/20260202-12911.html), the steepest jump on record, and the industry's revenue rose [81 percent in three months](https://www.trendforce.com/presscenter/news/20260601-13070.html) to about 97 billion dollars. The part worth sitting with is who pays that bill. Mostly, it is companies that never bought a GPU.

The physics is simple enough. High-bandwidth memory, the stacked DRAM that feeds an Nvidia accelerator, eats roughly three to four times the wafer capacity of ordinary DDR5 for the same gigabyte. When Samsung and SK Hynix pour capacity into HBM, they are not adding supply, they are moving it. HBM is [effectively sold out through 2026](https://www.trendforce.com/presscenter/news/20260602-13074.html) under multi-year contracts, and every wafer committed to it is a wafer that no longer makes the memory in a laptop, a phone, a car, or a hospital's server rack. This is crowding-out, and it lasts as long as the capacity does. The scarce thing is fab space, and AI outbids everyone for it.

## The assumption that just broke

For thirty years, memory got cheaper every year, and we built whole businesses on that being true. Product roadmaps assumed next year's bill of materials would come in a little lower. Software got fatter because RAM was cheap enough to waste; that was the old joke about what Intel giveth, Microsoft taketh away. Pricing and margin models quietly baked in a falling input cost that no one wrote down anywhere.

That assumption is now inverted for at least two years. New fabs don't add meaningful supply until [late 2027 at the earliest](https://www.trendforce.com/presscenter/news/20260602-13074.html). If your plan for the next two years still treats memory as a line that drifts down, the plan is wrong, and it's wrong in the direction that shows up in gross margin.

## You're subsidizing a boom you didn't join

I've written before about how [someone is subsidizing your AI compute](/2026/subsidized-ai-compute/): venture and hyperscaler money keeping token prices below what they cost to serve. Memory is the same trade running the other way. The hyperscalers' capital spending has landed on your bill of materials. A firm making insulin pumps or point-of-sale terminals or factory sensors has no AI strategy and no GPU, and it is still paying more this year because a data center in Virginia bought the memory supply out to 2027.

That is a textbook demand externality, and the striking thing is that most of the people absorbing it haven't connected it to AI at all. They just see a component quote that went up and assume it will settle, the way component quotes usually do. This one won't, not on the usual timeline.

## The squeeze lands where you least want it

There's a second-order effect that cuts against everything the industry has been promising. The pitch for [on-device AI](/2026/apple-ai-inference-silicon/), models running on your phone or laptop instead of in a data center, depends on putting more memory into the device. That story now runs straight into a memory market that has doubled. For a while, the cheapest place to run inference drifts back toward the cloud, which sends more demand to the same hyperscalers who caused the squeeze. Scarcity in one layer reinforces concentration in the next. If I were setting an edge-AI roadmap right now, I would assume the hardware to run it just got more expensive and less certain to arrive on time, and I would plan the launch around that rather than hope.

## What actually changes

Three things change once you take this seriously.

First, re-forecast. Any plan that assumed falling memory costs through 2027 needs redoing with memory flat to rising. For a hardware product that gap is often the difference between a healthy margin and one you have to reprice in front of customers.

Second, treat memory as a strategic input with a lead time, not a spot purchase. The scarce resource is not money, it is a contract signed early. The hedge is a purchase order placed in advance, and teams that pre-buy or lock multi-year supply will out-execute the ones waiting for prices to come back. They aren't coming back soon.

Third, memory efficiency has a return again. Right-sizing device specs, quantizing models, and refusing to over-provision because RAM used to be cheap now saves real money. The engineering discipline the industry let slide through the cheap decade is suddenly worth funding.

The wider lesson is the one I keep coming back to: the cost of a technology shift rarely lands where the headline points. I wrote recently about a team whose AI savings [moved to a budget nobody was measuring](/2026/cheaper-tokens-bigger-bill/). The memory squeeze is that same lesson at industrial scale. The buildout's bill is real, it is large, and a good part of it is being quietly settled by companies that were sure they had no exposure. The first useful move is finding out whether you're one of them. Working out where the AI buildout actually touches your costs, and what to do about it before your competitors notice, is most of what an [AI advisory hour](/work-with-me/) is for.
