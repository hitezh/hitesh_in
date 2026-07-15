---
title: "The AI boom is funding a two-year asset with six-year money"
slug: "ai-duration-mismatch"
date: "2026-07-15"
description: "Hyperscalers finance AI chips over six years but the hardware is obsolete in two or three. That gap quietly sets the compute price every AI product is planning around."
categories:
  - "technology"
tags:
  - "ai"
  - "strategy"
  - "infrastructure"
  - "economics"
image: images/cover.svg
draft: false
---

In November, Michael Burry told his followers that the biggest names in AI were flattering their profits with an accounting choice, and put a number on it: about [$176 billion of understated depreciation](https://www.cnbc.com/2025/11/11/big-short-investor-michael-burry-accuses-ai-hyperscalers-of-artificially-boosting-earnings.html) across the hyperscalers between 2026 and 2028, enough in his math to overstate Oracle's earnings by roughly a quarter and Meta's by a fifth. He was short Nvidia at the time, so weigh the motive however you like. The argument underneath it outlasts the trade.

Here it is in one line. The chips inside an AI data center earn their keep for maybe two or three years before a faster, cheaper-to-run generation makes them uneconomic. The companies buying them depreciate them over five or six. If you are a founder or a CTO who buys compute rather than shorts the stock, that gap is not an investor's curiosity. It sets the price you pay.

## A two-year asset on a six-year schedule

Over the last few years the big cloud providers [stretched the assumed useful life of their servers](https://www.indmoney.com/blog/us-stocks/meta-microsoft-google-ai-earnings-risk) from three or four years to six, which by itself lifted their reported profits by something like $18 billion a year; Meta's extension alone booked a $2.9 billion cut to depreciation expense. On paper the machines last longer. In practice Nvidia now ships a more powerful, more power-efficient generation [roughly once a year](https://www.cnbc.com/2026/03/16/nvidia-gtc-2026-ceo-jensen-huang-keynote-blackwell-vera-rubin.html), and [each step makes the previous one less economic](https://www.stanleylaman.com/signals-and-noise/gpus-how-long-do-they-really-last) to keep running for frontier work.

A banker would recognize the shape of this instantly. You are funding a short-lived asset with long-dated money and calling the difference profit. That is a duration mismatch, the same failure that undoes banks which borrow short and lend long, just pointed the other way. The first honest correction has already happened: in early 2025 Amazon [shortened the life of some of its servers from six years back to five](https://footnotebrief.com/hyperscaler-depreciation-ai-capex-circularity/), citing "the increased pace of technology development, particularly in the area of artificial intelligence," and swallowed roughly a $700 million cut to operating income for the honesty. One firm marking closer to reality does not settle the debate. It does tell you which direction reality is pulling.

## Why this is your problem, not the hyperscaler's

The reason it reaches your P&L is how the build-out is paid for. The scale of AI capex has outgrown even these companies' cash flows, so the funding is [shifting from cash flows to debt](https://www.bis.org/publ/bisbull120.pdf): the Bank for International Settlements notes the five largest hyperscalers are on track to spend over a trillion dollars on AI capex across 2025 and 2026, private credit funds wrote more than $40 billion of AI-related loans in 2025 against about $3 billion in 2010, and a growing share of the machines sits in off-balance-sheet vehicles that turn upfront capex into years of committed operating expense.

Stack the two facts together. The hardware is being financed as if it lasts six years, and much of that financing is now debt and long-term lease commitments that genuinely do last six years. The debt outlives the chips. When the mismatch closes, it closes through price, because the loans and the leases still have to be serviced after the silicon inside is obsolete. The per-token cost you are extrapolating downward sits on top of that arrangement. I argued a related version of this when I wrote that [someone is subsidizing your AI compute](/2026/subsidized-ai-compute/): there the distortion was vendor financing corrupting the demand signal. This is the same distortion one layer down, on the asset side of the ledger rather than the demand side.

## Obsolete is not the same as cheap

Here is the part that catches teams out. It is tempting to assume that each aging generation simply becomes the cheap tier you rent for light work, so the curve only bends in your favour. That is not how capital behaves. When a far more efficient generation arrives every year, the rational move is to route demand to the newest silicon and let the old fleet go dark rather than keep paying to power and cool it. Obsolete hardware does not reliably come back as a bargain for you; much of it just leaves the market. The cheap old tier you planned to ride may never be offered.

There is also a bill being socialized while all this settles. In the largest US grid region, data centers have already driven [about $23 billion in higher electricity costs onto ordinary ratepayers](https://fortune.com/2026/07/14/data-centers-23-billion-electricity-bills/) through at least 2028. That is another way today's compute price is being held below its true cost, and it is the kind of subsidy that ends the moment voters notice and regulators reallocate. Both the depreciation schedule and the power bill point the same way: the number you are paying today is lower than the number the economics eventually demand.

## What I'd tell a company building on it

Manage it the way a decent treasurer manages duration. Match the length of your commitments to the life of the thing underneath them, not to the vendor's financing. If a chip generation is economic for two years, a three-year committed-spend contract priced on today's rates is you absorbing the duration risk the hyperscaler is busy laying off. Keep your compute commitments short and repriceable, and treat portability as insurance rather than hygiene, which is the same reason [your model was never your moat](/2026/your-model-was-never-your-moat/): a team that can move suppliers can survive a repricing that a locked-in team cannot.

Then do two unglamorous things. Read the depreciation footnotes and the utility rate-case filings, not only the model leaderboards, because that is where the real cost signal shows up first. And pressure-test which of your features still make sense if inference is priced on an un-extended asset life. If a feature only pencils at a subsidized token price, it is not a product; it is an option on the compute market, and the people who write that market are not planning around your survival. That was the [$26 trillion question about how we value AI](/2026/when-your-tam-is-bigger-than-gdp/), and it comes back every time the price looks too good to plan a business on.

The demand for AI is real, and so is the technology. What is not yet real is the price, partly because a two-year asset is being paid for over six. Build as though that will correct, because on a long enough contract it will.

*If you are about to sign a multi-year AI commitment and want a second pair of eyes on the cost assumptions and the contract duration underneath it, that is exactly the kind of problem I work through in an [AI advisory hour](/work-with-me/).*
