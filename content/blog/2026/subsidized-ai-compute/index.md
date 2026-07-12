---
title: "Someone is subsidizing your AI compute"
slug: "subsidized-ai-compute"
date: "2026-07-12"
description: "The AI infrastructure boom is partly lending to itself. That changes the cost curve you're planning around, and most companies building on it haven't noticed."
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

Last September, Nvidia said it would [invest up to $100 billion in OpenAI](https://fortune.com/2025/09/28/nvidia-openai-circular-financing-ai-bubble/), which plans to spend much of it deploying Nvidia chips. That single sentence is why "circular financing" is now a phrase everyone in AI knows. The commitment has since been [trimmed to a $30 billion equity stake](https://www.techtimes.com/articles/317839/20260605/nvidia-openai-investment-shrinks-100b-30b-compute-lock-war-continues.htm), but the shape of the deal is the point: the supplier funds the customer so the customer can buy from the supplier.

It is not a one-off. Look at the neoclouds, the specialist GPU landlords like CoreWeave and Nebius. Nvidia is their [equity investor, their chip supplier, and their backstop](https://io-fund.com/ai-stocks/nvidia-coreweave-nebius-circular-financing-gpu-boom) all at once, in one case agreeing to buy up to $6.3 billion of unsold CoreWeave capacity through 2032. Meanwhile CoreWeave burned $4.7 billion in free cash flow in a single quarter against $24.9 billion in debt, with interest now eating better than a quarter of revenue. Microsoft, Meta and OpenAI sign the long-term contracts that make the debt financeable. Money goes around the ring and comes back as demand.

Most of the commentary treats this as a stock question: is CoreWeave a short, is Nvidia's revenue real, is this a bubble. If you are an investor, fair enough. But if you are a founder or a CTO *building* on this compute, that is the wrong question, and it distracts from the one that actually touches your plan.

## The price you're planning around is not a clean signal

Here is the part the balance-sheet analysis skips. Vendor financing does not just put the lender at risk. It corrupts the demand signal that everyone downstream reads as truth.

We have watched this exact mechanism before. In the late 1990s, [Lucent and Nortel lent billions to telecom carriers](https://tomtunguz.com/nvidia_nortel_vendor_financing_comparison/) so those carriers could buy Lucent and Nortel equipment. For two years it looked like roaring, insatiable demand. It was partly the vendors buying their own order books on credit. When the carriers could not generate the revenue to repay, the loans went bad, and Lucent's default rate on that financing went from a few percent to sixty in a single year. The gear was real. The demand behind it was not.

The compute you are pricing your product around sits downstream of the same kind of arrangement. When a chipmaker underwrites its customers' purchases, the price and the apparent abundance of GPUs stop being a pure read on supply and demand. Some of it is a read on how much financing the ring can still absorb. That does not mean the technology is fake or that a crash is due tomorrow. It means the cost curve you are extrapolating has a thumb on it, and you did not put it there.

## Two ways the thumb comes off

Play it forward. Either the financing keeps flowing, in which case cheap capacity stays available and you are fine, but quietly dependent on a subsidy you never negotiated. Or it slows, and it resolves in one of two directions. Prices rise, because the backstops and the debt service have to be paid by someone, and that someone is the buyer. Or capacity strands, because the contracts underwriting the build-out wobble and the next tranche of GPUs never gets financed, and you are suddenly queuing for what used to be abundant.

Either outcome moves the two numbers your AI plan actually rests on: what a unit of inference costs, and whether you can get it when you need it. A business case built on "compute keeps getting cheaper and capacity will be there" is really a bet that the ring keeps spinning. Worth knowing you are making that bet.

## What I'd tell a company building on it

The hedge is not to predict the cycle. Nobody times these. It is to make your business survive being wrong about it.

First, know your unit economics at the unsubsidized price, not today's. If your product only clears the math when inference is cheap, you do not have a product, you have a position in the compute market. The teams I trust have run the numbers at two or three times current token prices and know exactly which features still make sense.

Second, keep vendor optionality real, not theoretical. This is the same argument I made in [your model was never your moat](/2026/your-model-was-never-your-moat/): the durable asset is the eval harness and the workflow that let you swap the thing underneath without fear. That optionality is also your insurance against a compute-cost shock, because a team that can move can shop.

There is a quieter version of the same trap inside your own accounts. Hyperscalers rent neocloud capacity partly to turn balance-sheet capex into operating expense. Buying tokens instead of GPUs is the enterprise version of that move: it feels capital-light until you notice you have rented your differentiation and someone else sets the rent. That was the [$26 trillion question I raised about how we price AI right now](/2026/when-your-tam-is-bigger-than-gdp/), and it is the same question here, one layer down.

The AI boom is real and it is also, in part, lending to itself. Both things are true. Build as if the price could change, because the people setting it are not planning around your survival.

*If you are sizing an AI investment and want a second pair of eyes on the cost assumptions underneath it, that is exactly the kind of problem I work through in an [AI advisory hour](/work-with-me/).*
