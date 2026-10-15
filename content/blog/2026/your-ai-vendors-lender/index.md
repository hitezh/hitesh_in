---
title: "Your AI vendor's lender has already done the due diligence"
slug: "your-ai-vendors-lender"
date: "2026-10-15"
description: "Banks have spent over six months trying to sell a $38 billion AI data center loan. What that delay prices in is something every AI buyer should read before signing a contract."
categories:
  - "technology"
tags:
  - "ai"
  - "ai-strategy"
  - "infrastructure"
  - "economics"
  - "build-vs-buy"
image: images/cover.svg
---

A group of banks led by JPMorgan and MUFG has spent [more than six months](https://startupfortune.com/banks-are-now-trying-to-offload-the-ai-data-center-debt-they-just-underwrote/) trying to sell down a $38 billion construction loan for data centers in Texas and Wisconsin, leased to Oracle. Some lenders are now offering pieces to non-bank buyers at a discount, and the [Financial Times reports](https://the-decoder.com/building-ai-data-centers-is-becoming-a-stress-test-for-banks/) that JPMorgan, Morgan Stanley and SMBC have explored risk transfers to move part of the default risk elsewhere.

The comment threads filled up with 2008 analogies, and a smaller camp pointed out that banks syndicate big loans all the time. Both camps are looking at the wrong part of the story. Selling debt is routine. The unusual bit is how long this one has taken, and what the delay tells a buyer of AI services.

## A slow syndication is a price disagreement

A loan this size normally clears in weeks. When it sits for six months, the sellers and the buyers disagree about the price of the risk, and the sellers are the ones with the best information, because they did the underwriting. They know the lease terms, the construction schedule and who guarantees what.

I read that as a banker would. Nobody refused the loan. The market has not yet found a price at which the people who made it are willing to let go, and the people who made it are reluctant to sell at the price on offer. That is information, and it is free.

## The same building, a different price

The most useful number in the story is a spread. According to the same report, bonds backed by data centers leased to CoreWeave yield roughly [7.00% to 9.875%](https://startupfortune.com/banks-are-now-trying-to-offload-the-ai-data-center-debt-they-just-underwrote/), against 5.70% to 7.875% for those leased to the big hyperscalers. Same kind of building, same kind of chips, two or three points of yield apart. The difference is who signs the lease.

So the market is telling you the risk in AI infrastructure sits with the counterparty far more than with the technology. Procurement teams in manufacturing and banking have long read a supplier's credit rating before they sign a long contract. Software buyers rarely do it for AI vendors, and they should, because many of those vendors are reselling capacity financed by exactly this kind of debt. Oracle itself was cut to BBB-, one notch above junk, by S&P in July.

## Your prepayment is a loan to the vendor

Here is the part I think most leadership teams miss. The big AI contracts on offer right now are committed-spend deals: pay for a year up front, or commit to a volume, and get a discount. We treat that as a pricing decision. It is a credit decision.

A prepaid annual commitment is an unsecured loan to your vendor, at a rate equal to the discount you were offered. If the vendor is a hyperscaler, that is probably a fine loan to make. If the vendor is a young company renting capacity from a lessee that the bond market charges eight or nine percent to fund, the discount is the interest, and you are the lender of last resort in the chain. The banks, at least, can buy protection and sell down their exposure. You cannot.

The off-balance-sheet structures behind the build-out work the same way. A special purpose vehicle (SPV) moves debt off the borrower's books, and the risk goes to whoever financed it. Risk does not disappear in these structures. It moves to the party that was not looking, and in your vendor chain that party is often the customer.

I wrote earlier about [the duration mismatch](/2026/ai-duration-mismatch/) in how this hardware is financed and about [who is subsidizing your compute](/2026/subsidized-ai-compute/). This is the third leg: whoever funds the capacity decides how stable your price and your access will be.

## What I would do on Monday

None of this needs a forecast of a crash. Plenty of loans get sold slowly and repaid in full. It needs a change in what you check before you sign.

- **Put the vendor's balance sheet in the scorecard.** For a public company, read the rating and the spreads. For a startup, ask who funds its compute and how many months of runway sit behind your contract.
- **Treat commitments as credit exposure.** Cap prepayments, prefer quarterly terms to annual ones where the discount allows, and insist on exit rights for price changes and insolvency, with data export you have tested.
- **Keep a second model provider warm.** Not a slide about portability. A working fallback on your real traffic, rehearsed, because as I argued in [rent the harness, own what it learns](/2026/rent-the-harness-own-what-it-learns/), what you own is the layer above the model.

The banks that financed the build-out are now doing what careful lenders do when concentration gets uncomfortable: reducing exposure and demanding a better price. Customers are the only party in the chain who still sign long contracts without doing the same. If you are working out which AI vendors and commitments your company can safely lean on, an [advisory hour](/work-with-me/) is a good place to pressure-test that list.
