---
title: "ASML sold zero machines in Europe. That's not a chip story."
slug: "fab-without-a-buyer"
date: "2026-09-27"
description: "ASML's revenue from Europe hit zero this year. The real lesson is about subsidizing factories without lining up a buyer, a mistake AI infrastructure budgets keep repeating."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "strategy"
  - "infrastructure"
  - "economics"
---

Frank Heemskerk, ASML's executive vice president of public affairs, said something blunt at a panel in Amsterdam this month: "[We are selling absolutely nothing in Europe](https://www.datacenterdynamics.com/en/news/asmls-revenue-share-drops-to-zero-percent-in-europe-says-its-sold-absolutely-nothing-in-the-region-this-year/)." He wasn't describing a slow quarter. Europe's share of ASML's revenue hit zero percent in the first half of 2026, down from 1% in 2025 and 5% in 2024. In the most recent quarter, South Korea absorbed 43% of ASML's system sales, Taiwan took 30%, China took 14%, the United States took 9%. ASML builds the only machines on Earth that can print the most advanced chips, and it is headquartered in the Netherlands. It cannot find a single buyer on its own continent.

Sit that next to the [European Chips Act](https://en.wikipedia.org/wiki/European_Chips_Act), the 43 billion euro program the EU passed in 2023 to double its share of global chip production to 20% by 2030. The money went into fabs: land, construction, equipment grants. Three years in, the European Court of Auditors has already concluded the bloc is on pace for something closer to 12%. ASML's number is the mechanism behind that miss, in one sentence. You can subsidize a building. You cannot subsidize a customer.

## Supply-side policy, demand-side problem

The Chips Act bet on a familiar theory: build the capacity and the industry follows. It's the industrial-policy version of "if we build it, they will come," and it has the same blind spot every version of that line has always had. Fabs don't create chip buyers. Chip buyers create fabs.

Look at where ASML's machines actually went. Samsung and SK Hynix in Korea, TSMC in Taiwan, aren't ordering EUV scanners on faith. They're ordering against contracts already signed with Nvidia, Apple, and the hyperscalers building the next round of AI clusters.

Demand showed up first, as a purchase order somebody in Santa Clara had already committed to. Supply followed it. Europe funded the building without first lining up anyone who had committed to buy what came out of it. A factory with no buyer next door is just an expensive building.

There's a second layer to this that policy debates tend to skip. Chip demand is global and moves in real time: a cloud provider deciding where to buy its next batch of accelerators cares about price, lead time, and performance, not the passport of the fab that made them. You cannot wall off that decision by subsidizing a factory inside your own borders. Sovereignty over where the machine sits buys you nothing if the buying decision still gets made somewhere else, by someone with better options.

## The same zero, on a smaller balance sheet

I keep seeing a version of this inside companies, at a scale of millions instead of billions. A CTO funds an internal AI platform: a shared agent framework, an in-house model, a data layer meant to serve "future use cases." Leadership approves it because the capability sounds strategic on a slide. Eighteen months later almost nothing routes through it, because nobody ever named the first team that would send it real traffic on day one, with budget already attached.

That's ASML's zero percent, just internal and quieter. Nobody outside the building notices an unused platform the way an entire industry notices an unused fab.

[AI collapses the cost of forking software you didn't build](/2026/cheap-to-fork-costly-to-keep), which tempts exactly this move: build the thing in-house because building got cheap, without asking who actually depends on it. The timing risk compounds it. [Capacity funded on a multi-year clock ages against a technology cycle that moves in months](/2026/ai-duration-mismatch), whether that capacity is a fab tuned to a chip generation or a platform built around last year's model. By the time either one is ready, the workload it was sized for may already have moved on.

## The question that would have caught this

One question would have stopped both mistakes before the money went out the door: name the specific buyer who takes the first unit of output, on day one, with budget already committed. If nobody can be named, you aren't building capacity. You're building a monument to a roadmap, and somebody eventually has to write it down.

Europe will likely spend the rest of this decade discovering that at continental scale. The cheaper version of the same lesson is sitting on a budget line somewhere on your desk right now, next to a platform nobody has committed to use yet. [If that's the call in front of you, it's exactly the kind of question I like to work through in an AI advisory hour](/work-with-me/).
