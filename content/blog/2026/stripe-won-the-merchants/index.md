---
title: "Stripe won the merchants. Now it needs the shoppers."
slug: "stripe-won-the-merchants"
date: "2026-07-16"
description: "Stripe and Advent bid $53 billion for PayPal. The real target is 440 million consumer accounts, arriving just as AI agents begin doing the buying for people."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "strategy"
  - "payments"
  - "fintech"
image: images/cover.svg
draft: false
---

Stripe and the private equity firm Advent International have offered [around $53 billion for PayPal](https://techcrunch.com/2026/07/15/stripe-and-advent-reportedly-offered-to-buy-paypal-for-around-53-4b/), $60.50 a share, roughly a 28% premium, backed by about $50 billion in committed financing. The headline writes itself: a fallen giant, [once worth $360 billion in 2021](https://finance.yahoo.com/markets/stocks/articles/once-360-billion-giant-paypal-122727991.html) and now worth about $42 billion, gets picked up on the cheap.

That framing is true and mostly beside the point. The more useful way to read this deal is that Stripe is buying the one thing it has never had and cannot build at any speed: the consumer. And the timing tells you it is buying that consumer for a world where the shopper is increasingly an AI agent.

## Stripe owns the merchant. It has never owned the shopper.

Stripe is a merchant-side, developer-first company. It processed [around $1.9 trillion in payments](https://techcrunch.com/2026/07/15/stripe-and-advent-reportedly-offered-to-buy-paypal-for-around-53-4b/) last year, and almost all of that relationship runs to the business: the API, the checkout an engineer wired in, the dashboard a finance team logs into. The person tapping "pay" is the merchant's customer, not Stripe's.

PayPal is the mirror image. Its value is roughly 440 million consumer accounts, the Venmo network, and a brand people trust enough to click "pay with PayPal" on a site they have never used before. Braintree, PayPal's developer arm, actually competes with Stripe and is the least interesting part of the deal. The prize is the demand side: the funded, verified, trusted wallet sitting in hundreds of millions of pockets. Stripe spent a decade being brilliant at the half of the transaction that is now becoming a commodity.

## The timing is the tell

Look at what Stripe built in the year before this bid. It launched an [Agentic Commerce Protocol](https://stripe.com/blog/agentic-commerce-suite) with OpenAI and Meta, shipped Shared Payment Tokens that let an AI agent spend from a saved payment method without ever seeing the card, and turned on stablecoin payments so software can pay software. Stripe is openly building for a world where the buyer is a machine acting on behalf of a person.

In that world, the merchant integration Stripe dominates turns into plumbing. What gets scarce is a trusted, funded consumer identity that an agent can spend from and a merchant will accept without argument. Which is a fairly exact description of a PayPal account. I argued a couple of weeks ago that [your model was never your moat](/2026/your-model-was-never-your-moat), and the same logic runs through payments. The rail commoditizes. The consumer relationship sitting on top of it does not.

There is a subtler shift underneath. When an agent does the shopping, the checkout screen stops being the battleground and the authorization layer becomes it. The valuable object is the token that says "this agent may spend up to this much of this person's money, at this merchant, until Tuesday." That is a trust-and-identity product, and PayPal's entire brand, buyer protection and all, is a trust product. Stripe is buying trust that would take a decade to earn.

## Why $360 billion fell to $53 billion

The fall itself carries the sharper lesson. PayPal did not lose its consumer side to a better product. It lost it to a default. Apple Pay and Google Pay came pre-installed on the device, and being the default beat being trusted. A two-sided network with a weak consumer hook erodes quietly until someone offers a premium for what is left.

The lesson runs deeper than "payments are hard." Distribution-by-default is a stronger moat than brand loyalty, and a company can own the technology, the volume, and the mindshare and still watch its position get commoditized from the side it took for granted. It is the same question I keep circling around [valuations that assume the whole market](/2026/when-your-tam-is-bigger-than-gdp): what here is actually durable?

## What this changes for the rest of us

If you build products, three things follow.

First, ask which side of the transaction you actually own. Merchant integrations, model access, generic rails: all commoditizing. A trusted relationship with the end user is the scarce asset, and it is worth auditing honestly whether you own one or are renting it.

Second, start designing for the agent as a first-class user. Scoped, bounded, revocable authorization (the shape of Stripe's Shared Payment Tokens, and not unrelated to why [AI systems are starting to demand government ID](/2026/when-your-ai-asks-for-a-government-id)) is the new primitive. If a machine cannot safely act on your customer's behalf, you are building for the last era of software.

Third, judge buy-versus-build by un-buildability. Stripe is not paying $53 billion for code. It is paying for 440 million accounts it cannot recreate with better engineering. When you weigh an acquisition, or your own moat, the useful question is whether a competitor could build the thing if they tried, not whether it is growing this quarter. Rails they can build. Networks and trust they cannot.

My hunch is that if this deal closes, it gets remembered less as payments consolidation and more as the moment the industry admitted the consumer wallet is the thing worth owning once agents do the buying. If you are working out which side of that line your own product sits on, that is exactly the conversation I have in an [AI advisory hour](/work-with-me/).
