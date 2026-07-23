---
title: "The AI boom's collateral is a team you can't repossess"
slug: "collateral-you-cant-repossess"
date: "2026-07-23"
description: "Tens of billions in AI debt is secured by GPU clusters. But the part that makes a cluster worth the loan is the team running it, and that is the one asset no lender can seize."
categories:
  - "technology"
tags:
  - "ai"
  - "infrastructure"
  - "economics"
  - "strategy"
  - "engineering-leadership"
image: images/cover.svg
draft: false
---

A lender will happily write a loan against a warehouse, a fleet of aircraft, or a bulk carrier. The deal underneath is always the same. If the borrower stops paying, the lender takes the thing and sells it to somebody else, and the sale mostly covers the loan. That deal is now being applied, at enormous scale, to GPU clusters. The trouble is that a cluster does not behave like a warehouse, and I think the people writing the checks half-know it.

The mechanics are real and large. CoreWeave built its business on borrowing against Nvidia chips, starting with a [$2.3 billion facility in 2023](https://www.investing.com/news/stock-market-news/coreweave-raises-23-billion-in-debt-collateralized-by-nvidia-chips-3143942) and now carrying north of $20 billion, each tranche parked in a [bankruptcy-remote special purpose vehicle](https://qz.com/gpu-collateralized-debt-ai-neocloud-coreweave-financing-risks-050526) that owns the GPUs and pledges them, plus the customer contract, as collateral. xAI's Colossus sites are financed the same way, chips backing the debt rather than the parent company. One [recent analysis](https://ciphertalk.substack.com/p/nobody-knows-what-a-used-gpu-cluster) points out that lenders on this paper charge six or seven points over the benchmark rate, against one or two points for aircraft, and the honest reason is that they are guessing. Aircraft have had ISTAT-certified appraisers and residual-value registries since the 1970s. GPU clusters have a price index that is barely a year old.

## The market exists. That is not the point.

The obvious rebuttal, and the one that filled the comment threads when this argument went around, is that a secondhand market plainly exists. A used box of MI300s trades around a quarter of a million dollars. Datacenter GPUs turn up on eBay, refurbishers move them by the thousand, and older cards keep earning on inference long after they stop being cutting edge. All true. And all beside the point, because it prices the wrong thing.

There are three different numbers hiding inside "what is this cluster worth." There is face value, the depreciated figure on the loan covenant. There is liquidation value, what the bare hardware fetches on the secondary market, maybe half to seventy percent of new in calm conditions and a good deal less in a fire sale. And there is going-concern value, what the cluster is worth as a running, revenue-producing machine. The loans are written against the third number. The market that everyone points to only clears the second.

## What actually makes a cluster valuable

The gap between those two numbers is not hardware. It is the team.

A frontier cluster is not a pile of chips, it is a temperamental industrial process. GPUs fail at roughly nine percent a year, which at a 200,000-card site is dozens of failures a day, and at the million-card scale being planned is a failure every few minutes. Keeping a training run alive through that, without silent data corruption quietly poisoning a week of compute, is a craft. Which racks run hot in August, which cooling loop has a flaky sensor, which failure signatures mean stop-everything and which mean carry-on. None of that is written down. It lives in the heads of the people who built and babysat the thing.

That is the asset the loan is really secured by, and it is the one asset a lender cannot repossess.

Here is why that matters more for GPUs than for any of the older collateral. When you foreclose on an aircraft, you seize the plane and hire a crew from a deep, liquid pool of people who can fly that model. The operating knowledge is standardized and portable, so the asset keeps its going-concern value through the change of hands. A GPU cluster is the opposite. The knowledge is specific to that build and lives in a small, non-fungible team, and the moment the borrower defaults, that team updates its LinkedIn. Going-concern value collapses to liquidation value at the exact instant you need to claim it. Collateral that is only worth its full price while you don't have to seize it isn't really collateral. It is an unsecured bet on a workforce, wearing the costume of a secured loan.

## What a leader should take from this

The first read is a financing warning: a chunk of the AI buildout is underwritten on an asset value that is real on the way up and partly imaginary on the way down. Peter Thiel's fund [sold its entire Nvidia stake](https://www.bloomberg.com/news/articles/2025-11-17/peter-thiel-s-fund-sold-off-entire-nvidia-stake-in-third-quarter) and rotated into Apple and Microsoft, and the patient infrastructure money has been buying the buildings, power, and land under these sites rather than the chips inside them. They can tell the durable asset from the depreciating one.

But the sharper lesson is for anyone building on top of this, not trading it. If lenders with real diligence budgets can't value a cluster you own, you can't either, and owning frontier compute means holding an asset you can't mark, can't easily sell, and can only keep whole by retaining a specific team. That is the clearest financial case I've seen for renting the compute and owning the things that actually compound: your data, your workflows, your customer relationships. It is the same conclusion the [duration mismatch](/2026/ai-duration-mismatch) and the [circular financing](/2026/subsidized-ai-compute) underneath this boom keep pointing to from other directions. Rent the part that depreciates and walks out the door. Own the part that stays.

The most portable lesson has nothing to do with GPUs. Every company holds value that lives only in its people, the going-concern value no buyer, lender, or successor can underwrite because it can't be transferred. AI makes this worse, because it lets you [produce output without retaining the understanding](/2026/automation-is-cheap-understanding-is-the-bill) behind it. The exercise I'd run with a leadership team is blunt: draw the line between the value a new owner could take delivery of, and the value that walks out with a resignation letter. The second column is your real key-person risk, and on the AI balance sheet it is getting longer.

If you're weighing whether to own or rent the infrastructure under your AI plans, [that is a conversation worth having](/work-with-me/) before the financing decision is made rather than after.
