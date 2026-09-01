---
title: "Your platform's roadmap is its business model in disguise"
slug: "platform-roadmap-business-model"
date: "2026-09-01"
description: "Google finished removing uBlock Origin and every Manifest V2 extension from Chrome. The upgrade that hardened security also guarded its ad revenue."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "strategy"
  - "ai-strategy"
  - "platforms"
image: images/cover.svg
draft: false
---

As of this week, uBlock Origin is gone from the Chrome Web Store, and so is every other Manifest V2 extension. Google [finished the removal it began in 2024](https://webiterate.dev/google-removed-extensions-ublock-origin-108/), the ad blocker that ran for tens of millions of people now ships only as a stripped-down "Lite" version, and the official reason is [security, privacy, and performance](https://thenextweb.com/news/chrome-manifest-v3-ublock-origin-content-blockers-disabled).

I don't want to argue about ad blocking. The useful thing here is not the outcome but the shape of it, because the same shape is about to play out on the AI platforms half of you are building your company on right now.

## Run the alignment test

Here is the check I apply whenever a platform explains a change with security or performance: does the change also happen to protect the platform's own revenue? If the answer is yes, weight the revenue over the explanation. If the change genuinely costs the platform money, a real fix that dents its own numbers, then the stated reason is probably the real one and you can relax.

Manifest V3 fails that test about as cleanly as a change can. The new extension model makes it materially harder to block ads at the network level, and Google's core business is selling ads. Both facts are true, and I don't need to accuse anyone of lying to make the point. Chrome's new model probably is more locked down, and in narrow ways more private. What the alignment test buys you is not moral judgment, it's forecasting. When the roadmap and the P&L point the same direction, the P&L is the better predictor of the *next* change. The press release is a lagging indicator of a decision the incentives already made.

That is the first thing I'd put in front of a leadership team: a vendor roadmap is a strategy document, not an engineering one. Deprecations, new rate limits, "hardening," pricing tiers, they are the platform telling you where its margin wants to go. Read them that way.

## Watch for imperative turning into permission

There's a technical tell underneath this one worth naming. The old extension API, webRequest, let an extension inspect each network request and decide what to do with it. The replacement, declarativeNetRequest, asks the extension to file a list of rules in advance that Chrome then enforces, with a fixed ceiling on how many. The capability didn't just shrink. It changed hands. You went from "I decide" to "I request, and the platform decides."

That imperative-to-declarative downgrade is one of the most reliable signals in platform economics, and almost nobody prices it. Every time a vendor replaces "you can inspect and act" with "you can configure, and we act," control over the thing that matters has quietly moved from your side of the boundary to theirs. Sometimes that trade is worth it for the convenience. The mistake is not noticing you made it.

## The same script is now running on AI

If you build on a model API, you are the extension developer, and the model lab is Google. You depend on a capability, priced and shaped by a company that is also moving up the stack into the exact application space you occupy. The coding-tool startups building on the frontier labs are watching those labs ship their own coding tools. This is why I keep saying [your model was never your moat](/2026/your-model-was-never-your-moat/): the model you pick matters far less than the shape of the dependency you take on underneath it.

The reassuring story is that AI vendors compete, so no single one can pull a Manifest V3 on you. Partly true, and it's why keeping two viable providers wired up is worth the engineering. But competition doesn't protect you from the capability being narrowed across the board, from a pricing change that turns your unit economics upside down, or from the model of your workflow becoming a first-party feature. Cheaper switching helps only if you built the seam to switch through, which most teams [put off until it's expensive](/2026/cheap-to-fork-costly-to-keep/).

## What I'd actually do

Three moves, none of them dramatic.

**Audit your single points of platform dependency.** For each critical capability, ask two questions together: could the platform narrow this, and would narrowing it help the platform's business? Two yeses means you are on a countdown the platform hasn't shown you, and you should price it like one.

**Build the abstraction seam before you need it.** uBlock Origin still runs in full on Firefox and Brave because the capability lived at more than one layer. Portability is insurance: cheap to buy before the deprecation notice, impossible to buy after. A model router, a storage adapter, a thin boundary at the vendor edge, all boring, all worth more than they cost.

**Read every roadmap as competitive intelligence.** The next "we're simplifying this for security" is the platform showing you its hand a year early. Take the free look.

Platform risk is a line item, not a footnote. The cost of building on someone else's rails was never the monthly bill. It's the option the platform holds to change the rules, and this week Google just reminded a hundred million people that the option is real. If you're trying to work out which of your dependencies carry that option and what a seam would cost to build, that's [exactly the kind of problem I like to think through with teams](/work-with-me/).
