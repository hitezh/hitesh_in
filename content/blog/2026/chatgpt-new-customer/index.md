---
title: "ChatGPT's new customer isn't you"
slug: "chatgpt-new-customer"
date: "2026-07-22"
description: "OpenAI now sells ads inside ChatGPT. That changes who the product serves, and turns assistant distribution into rented, auctioned ground for anyone building on it."
image: images/cover.svg
categories:
  - "technology"
tags:
  - "ai"
  - "product-strategy"
  - "business-model"
  - "advertising"
  - "openai"
---

Since May, any verified US business can go to ads.openai.com, put in a card, set a twenty-five dollar daily budget, and [buy a placement inside ChatGPT](https://www.axios.com/2026/05/05/openai-self-serve-ad-platform). OpenAI started [testing ads in February](https://openai.com/index/testing-ads-in-chatgpt/) and now runs a self-serve ad manager with the usual cost-per-click and cost-per-impression bidding. The company that spent three years telling you the answer was for you has quietly signed up a second customer. The second one pays more.

That is the story, and it is bigger than a new ad unit. It is worth sitting with what happens to a product when the person paying for it changes hands.

## The channel that has no sidebar

Search made its peace with advertising a long time ago, and it worked because of geometry. When you google something, the ad sits above or beside ten organic links you can see, compare, and ignore. You do the final pick. The ad is boxed, labelled, and structurally separate from the thing you came for. You can resent it and still trust the page.

An assistant deletes that geometry. Ask ChatGPT which CRM to use for a twenty-person team and it doesn't hand you ten blue links, it hands you a recommendation. Collapsing the search is the entire value. There is no organic layer sitting beside the answer to act as a control group. So when a sponsor arrives, it isn't competing for attention in a sidebar. It is competing for the answer itself, because the answer is the only surface the product has.

OpenAI knows this, which is why the current design puts ads in labelled, tinted boxes at the bottom of a response and promises they never influence the answer above. I take the promise as sincere and I still think it's the wrong thing to be reassured by. In a single-answer channel, the most valuable real estate is the answer, not the box beneath it. Advertiser money flows toward the highest-value surface it is allowed to touch, and then it leans on the edge of what it is allowed to touch. That pressure only points one way. The wall between commerce and advice holds exactly as long as the company would rather keep your trust than take the revenue. That makes it a preference, and preferences move with the balance sheet.

## The product optimizes for whoever pays for it

Here is the shift that matters more than any ad format. For most of ChatGPT's life you were the customer. You paid twenty dollars, or you cost OpenAI money on the free tier, and either way the product had one job: answer your question well enough that you came back. A subscriber wants the fastest correct answer and then wants to leave. That incentive is beautifully aligned with a good product.

An advertiser wants the opposite of leaving. Advertisers pay for consideration, for time-in-app, for a nudge toward a purchase you weren't certain about. Once a real slice of revenue starts arriving from advertisers, the quiet north-star metric drifts from "resolved your question" toward "kept you in the conversation long enough to show you something." Nobody has to be cynical for this to happen. Metrics follow money, roadmaps follow metrics, and a year later the product is optimizing for a different thing than it was, with no villain anywhere in the room.

This is also why the pivot arrived now and not two years ago. OpenAI is spending far faster than subscriptions can cover, and advertising is the highest-margin way ever invented to close that gap. I wrote recently that [someone is subsidizing your AI compute](/2026/subsidized-ai-compute/). This is the subsidy starting to ask for its money back, and it is asking in the currency of your attention.

## For anyone building on top of it, the ground moved

If your go-to-market quietly assumes ChatGPT will keep recommending you for free because you are genuinely the best answer, that assumption now has a price tag. Being the recommended answer is becoming an auction. Search taught a generation of marketers to fight over the first page; an assistant offers one slot, and a competitor can now buy a sponsored nudge that lands at the exact moment your customer is deciding. The economics are harsher than search engine optimization, because there is one position instead of ten, and you don't own the surface it appears on.

One pattern I keep seeing: teams treat assistant distribution as if it were organic and permanent, the way people treated Facebook reach in 2012 or app-store discovery in 2015. It is neither. It is rented, and the landlord just opened a revenue line that competes with your access to your own customer. If I were advising a company that gets real traffic through an AI assistant today, I would model that channel the way I model paid acquisition: assume the cost climbs, assume the platform eventually sells your slot to the highest bidder, and make sure you hold a direct relationship with the customer that survives the assistant changing its mind. It is the same discipline as [owning the customer rather than the transaction](/2026/stripe-won-the-merchants/), arriving through a different door. Your model was never your moat, and now neither is your ranking; [the durable advantage sits in the relationship](/2026/your-model-was-never-your-moat/) nobody can auction out from under you.

## The uncomfortable part is about your own business model

There is a mirror here for anyone building an AI product, and it is the most useful thing to carry away. Decide who your customer is before you design the product, because the metric will follow the money whether you choose deliberately or not. If the user pays, you can afford to help them leave quickly. If an advertiser pays, you will eventually be paid to keep them. Those are two different products wearing the same interface.

For most enterprise and business software, this argues hard for charging the user, through subscription or outcome-based pricing, and treating advertising as the last lever you reach for when you can't charge anyone. Ads are what a product does when it has given up on being valuable enough to bill for. That may well be the right call at OpenAI's scale and burn rate. It is almost never the right call for the AI products the rest of us are building, and the teams that keep their incentives pointed squarely at the user will, over a few years, be the ones users still trust.

Trust is the whole game with an assistant, and trust has an ugly asymmetry: it accrues slowly and reprices instantly. ChatGPT built its reserve as a product that was unambiguously on your side. It is now beginning to spend that reserve down. The first time a user plainly catches a sponsored recommendation dressed as advice, the repricing will not be gradual.

If you are weighing where your own AI product's revenue should come from, and what that choice quietly does to the thing you end up optimizing for, that is exactly the kind of question I like to work through in an [AI advisory hour](/work-with-me/).
