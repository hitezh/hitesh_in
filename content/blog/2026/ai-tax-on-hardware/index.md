---
title: "The AI tax on hardware that has no AI in it"
slug: "ai-tax-on-hardware"
date: "2026-08-19"
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "strategy"
  - "hardware"
image: images/cover.svg
description: "Three firms make most of the world's memory, and AI buyers just outbid everyone for it. That repriced laptops, servers, and cars, whatever your AI strategy."
draft: false
---

A 128GB kit of DDR5 memory that would have cost a few hundred dollars a year ago now sells for around [$3,399](https://www.tomshardware.com/pc-components/ram/memory-prices-climb-500-percent-in-12-months-up-to-10x-the-lowest-ever-tracked-prices-128gb-of-ddr5-now-usd3-399). DRAM prices are up something like 500% in twelve months. If you build servers, sell laptops, or ship anything with a chip in it, you already know this in your bill of materials.

The part worth sitting with is who caused it and who is paying. Almost none of this is people buying more laptops. It is the AI buildout. And the bill is landing hardest on companies that have nothing to do with AI.

## How memory you never bought for AI got repriced by AI

Three companies, Samsung, SK Hynix, and Micron, make more than 95% of the world's DRAM. The same fabs can turn a wafer into ordinary DDR5 or into the high-bandwidth memory (HBM) that sits next to an AI accelerator. HBM sells for roughly ten times as much per unit and, because it is stacked and harder to make, one wafer of it displaces closer to three wafers of commodity memory. So the makers are doing the obvious thing: sending capacity to the highest bidder. AI has [booked out DRAM and HBM supply well into 2027](https://www.tomshardware.com/tech-industry/artificial-intelligence/samsung-and-sk-hynix-warn-ai-driven-memory-shortages-could-last-until-2027-and-beyond-as-hbm-demand-explodes-customers-already-reserving-supply-years-ahead-while-the-wider-dram-market-begins-to-tighten), and everyone else is being told they can have 60 to 70 percent of what they asked for.

That is why a hospital's patient monitor, a car's infotainment unit, a retailer's point-of-sale terminal, and a mid-range phone all got more expensive this year. None of them run a language model. They just need memory, and they now queue behind a buyer with a much bigger wallet. Samsung itself has [warned that this is an industry-wide price shock](https://www.networkworld.com/article/4113772/samsung-warns-of-memory-shortages-driving-industry-wide-price-surge-in-2026.html), not a niche one.

## The buyer who doesn't care about the price sets yours

Here is the mechanism I'd want a leadership team to internalize, because it generalizes well beyond memory. For a company training or serving a frontier model, memory is a rounding error against the value of the model and the fear of falling behind. They are price-inelastic: they will pay almost anything. For everyone else, memory is a real line item and demand bends when the price rises. They are price-elastic.

In a market with one shared input and both kinds of buyer, the inelastic buyer wins the allocation and sets the clearing price for everybody. That is the uncomfortable bit. If your product competes for an input against someone who genuinely does not care what it costs, you don't lose margin. You lose the input. Margin you can manage. A part you cannot get is a stopped production line.

## The risk is the ordinary input, not the AI one

Memory is just the first place this showed up clearly, because supply is concentrated and the substitution is so direct. The same logic applies to anything AI can also consume: electricity, advanced-node fab time, high-end networking gear, and senior ML engineers. None of those were bought "for AI" by the companies that depend on them. They were repriced by AI anyway.

I wrote a while back that [someone is subsidizing your AI compute](/2026/subsidized-ai-compute/), that the low price you extrapolate has a thumb on the scale you never see. This is the same boom pushing the other way. There, the subsidy made your GPU hours cheap. Here, the same capex makes your memory expensive. Same cycle, opposite sign, and you negotiated neither.

And the relief is asymmetric. When AI demand eventually cools, three makers with pricing power will not flood the consumer market and crater their own margins. Not selling is not an option, so they cut production instead. You eat the spike on the way up and you do not get the crash on the way down. Plan around that shape, not around a return to 2024 prices.

## What I'd tell a company right now

Three things, none of them exotic.

First, look at your bill of materials and your cloud invoice and mark every line that is fungible with AI demand. Memory-heavy, power-heavy, dependent on the latest process node. Those line items no longer move with your business. They move with someone else's capex.

Second, treat procurement timing as a leadership decision, not a purchasing one. If you have a hardware refresh coming in the next 18 to 24 months and the input is spiking, whether to pull it forward or lock a multi-year contract is a call for the people who own the P&L, not a task to delegate to whoever raises the PO.

Third, design for substitution, because efficiency has stopped being hygiene and become a hedge. The team that can ship the same product on less memory, or on last generation's part, holds an option the team that assumed abundance does not. This is where the old default wobbles: for a decade the advice, including mine, was to rent rather than own and defer the capex. That [build-versus-buy math](/2026/cheap-to-fork-costly-to-keep/) breaks when your landlord is the one bidding your inputs away. The company that over-provisioned two years ago now looks less wasteful and more prescient.

The tempting conclusion is that this only matters to hardware companies. It does not. It matters to anyone whose costs include a physical component that a trillion-dollar buildout also wants. "We don't have an AI strategy, so the AI cycle doesn't touch us" was never quite true. This year it is false on the balance sheet.

If you are trying to figure out where your own cost structure is exposed to the AI cycle, that is exactly the kind of problem I like to think through in an [AI advisory hour](/work-with-me/).
