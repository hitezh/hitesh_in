---
title: "A ban on AI agents is a statement about your margins"
seoTitle: "United bans AI booking agents: what it says about margins"
slug: "ban-ai-agents-margin-statement"
date: "2026-11-12"
description: "United now bars unauthorized personal AI agents from booking flights. Block, license or build is a pricing decision, and the answer depends on where your margin comes from."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "ai-strategy"
  - "product-strategy"
  - "economics"
linkedin_hook: "United just banned unauthorized personal AI agents from booking its flights, while Southwest opened its inventory to ChatGPT. Same technology, opposite bet on where the margin lives."
takeaways:
  - "List your top five revenue lines and mark which depend on the customer not comparing. Those are the ones an agent hits first, whatever policy you write."
  - "If your answer to agents is a ban, ask what enforces it. A rule you cannot detect is a rule only honest customers follow."
  - "Give agents a sanctioned door: scoped, revocable access that is not the customer's password. Test it by asking whether you could cut off one agent without logging out the human."
linkedin_question: "Which part of your pricing or loyalty program would look different if every customer had a patient assistant comparing you against three competitors?"
---

United Airlines has said it will [prohibit unauthorized third-party personal AI agents](https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/) from booking flights, on its own channels and through agencies and aggregators. Its stated reasons are sensible ones: handing account credentials to an assistant can expose sensitive information, an agent may buy something or spend MileagePlus miles the traveler never meant to, and some federal rules expect a human to confirm things like what is in their luggage. Meanwhile, according to the same report, Southwest has made its inventory viewable to ChatGPT users.

Same technology, opposite bets. I think the interesting question is not which airline is right. It is what each one believes about where its money comes from.

## The security argument is real, and it is also the easy part

Take United at its word first. Sharing a login with a third-party agent is a bad idea, and "the agent bought the wrong fare" is a support cost that lands on the airline. Those problems are real and fixable: scoped tokens, spending limits, confirmation steps, an audit trail. Banks solved a version of this years ago by separating "the customer's password" from "an app the customer has authorized to do one thing". India's consent-based Account Aggregator framework rests on the same distinction.

If credentials were the whole story, the answer would be to build the sanctioned door. A ban is what you write when the door is expensive to build, or when you would rather not have one.

## Search was never free, but it was never the real cost

The analyst quoted in the coverage points out that [flight searches cost airlines money](https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/). True, but United has lived with Google Flights, Kayak and a long tail of metasearch for years, and the same report says fares remain bookable there. A machine that searches ten times more often is a bill, and bills can be priced.

What an agent changes is the patience of the buyer. Most consumer pricing quietly depends on customers not doing the comparison: not checking the fare class, not noticing the fee, not pricing the loyalty points against cash, not rechecking tomorrow. A person gives up after three tabs. An agent does not get tired, and it does not feel loyal. I am not claiming that is why United acted, and the company has not said so. But any business that is deciding between block, license and build should know which of its margins are made of customer inattention, because those are the margins an agent erodes first.

## Loyalty is where this gets expensive

I work on loyalty software, and the pattern I would watch is what happens to the program. Points and miles are a store of value that customers manage badly: they let them expire, redeem at poor rates and forget the status tier. An agent managing that balance will redeem at the best rate every time and will compare your program against a competitor's without sentiment.

That is good for the customer and uncomfortable for a program whose economics assume breakage. It also explains why the loyalty balance is exactly where a company would worry about an agent acting with the customer's password. The risk is partly fraud and partly that the customer's agent starts to understand the program better than the marketing team does. I covered the earlier version of this problem in [your next customer might be an AI agent](/2026/your-next-customer-is-an-agent/), and the retail angle in [what an AI agent can't skip at Instacart](/2026/instacart-what-agents-cant-skip/).

## A ban you cannot detect is a ban on honest customers

Here the practical weakness shows. An agent that drives a customer's own browser looks, from the server side, like the customer. Blocking it means fingerprinting behavior, and fingerprinting is an arms race against tools that improve every quarter. Cloudflare has already built a business around [metering AI traffic at the edge](/2026/ai-toll-booth-cloudflare/), which tells you that enforcement is becoming infrastructure, not policy.

So the likely outcome of a flat ban is selective: customers who follow the rules lose a convenience, and the ones who do not carry on. The company has then paid the goodwill cost of a restriction without getting the control.

## What I would decide before writing the policy

If I were advising a company facing this choice, I would not start with the legal text. I would answer four questions in this order.

1. Which of your revenue lines survive a perfectly patient comparison shopper? If the answer is "most", license agents and compete on product. If it is "few", you have a pricing problem that no policy fixes.
2. What is the actual harm you are blocking: credential exposure, wrong purchases, or lost information advantage? Each has a different remedy, and only the first two justify a technical control.
3. Can you offer a sanctioned path with limited scope, such as read-only inventory, capped spend and a revocable token? Test it by asking whether you could cut off a single agent without logging out the customer.
4. What will you measure? Track conversion and complaint rates for agent-originated sessions against human ones for a quarter before you decide the policy is working.

A recurring mistake with any new channel is writing the policy before anyone has looked at the margin structure it protects. Do the exercise first, and you may find you were defending one product line, and not the one in the press release.

If you want to pressure-test that exercise for your own business, that is the kind of problem I work through in an [AI advisory hour](/work-with-me/).
