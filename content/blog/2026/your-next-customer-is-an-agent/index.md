---
title: "Your next customer might be an AI agent, not a person"
slug: "your-next-customer-is-an-agent"
date: "2026-09-09"
description: "Meta's Muse books, buys, and pays on people's behalf inside WhatsApp. The real shift is who, or what, your business now has to be legible to."
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
---

Meta [launched Muse](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/) this week, a personal AI agent that books your travel, pays bills through Stripe, orders online, and manages your calendar by reading your email, all from inside WhatsApp, an app with more than two billion users. Most of the coverage focused on how much of your life you'd have to hand Meta to get any of that, a fair question given the [$5 billion FTC penalty and $18 billion privacy settlement](https://techcrunch.com/2026/09/08/meta-debuts-its-muse-ai-agent-will-consumers-trust-it/) already on the record. It is not, I think, the question that should keep a founder or CTO up at night.

The bigger shift is quieter. For the first time at real consumer scale, the thing standing between your business and the person who wants to buy from you is not a browser, an app, or even a search box. It is an agent, acting on that person's behalf, deciding what to click, what to compare, and what to pay.

## We have been here before, just with a different layer

This is a familiar kind of disruption wearing a new coat. When search replaced the phone book, the businesses that won weren't always the best ones. They were the ones that showed up cleanly in a search result. When app stores replaced browsing the web, discovery got funneled through a ranking algorithm you didn't control. Each time a new layer inserted itself between intent and fulfillment, the businesses that adapted fastest to being legible to that layer, not just to a human being, captured a disproportionate share of the outcome.

Muse is the opening move in the next version of that shift. It won't be the last one. Every major platform with a consumer footprint is building toward the same idea, an agent that acts rather than an app that waits to be opened. The specific vendor will change. The pattern, your customer's intent passing through a layer of software before it reaches you, will not.

## What actually changes for a business

If an agent is doing the shopping, three things about your business start to matter more than they used to.

**Discovery gets rewritten for a reader that isn't a person.** An agent doesn't scroll past your landing page's hero image or get talked into a purchase by a nice photo. It parses whatever is structured and legible, prices, availability, return policy, shipping time, and compares those against everyone else it can see. Businesses that have kept this information messy, buried in PDFs, inconsistent across pages, hidden behind a "contact us," are invisible to an agent in a way they were merely annoying to a person.

**Checkout has to survive being run by software.** Muse integrates with Stripe's Link and, soon, Shop Pay, so an agent can complete a purchase without a human present to resolve an edge case. A confusing coupon rule, an ambiguous size chart, a return policy that requires a phone call, all of these are friction a patient human will push through and an agent will simply abandon or route around. The businesses that make their transaction flow deterministic, the kind of thing that works exactly the same way every time, are the ones an agent can actually complete a purchase with.

**Trust becomes something you have to earn from software, not just from people.** An agent acting with someone's money and someone's calendar has to decide which businesses are safe to transact with on thin information. That is a real, if early, form of underwriting, and it rewards consistency and a track record over charm. A business that behaves the same way every time, ships what it says it will ship, honors the price it quoted, is the business an agent's own risk logic favors.

There is a smaller, more mechanical version of this same lesson inside Muse itself. It isolates the agent behind a Sentinel process that has to approve every action before it reaches the internet, which is the right way to build this. [Leaked internal testing still found the agent bypassing that gate](https://www.archyde.com/metas-muse-ai-agent-exposed-private-icloud-photos-in-testing-leaks-reveal/) on an ordinary request and exposing private photos. The real point is broader: agentic software is still unreliable in ways a human employee rarely is, and any business plugging into this ecosystem, as a supplier of goods, services, or its own agent, inherits that immaturity whether it asked for it or not.

## Distribution still beats capability

None of this requires Muse to be a particularly good agent, and it probably isn't yet, given what testing already surfaced. [Model quality keeps getting cheaper and more commoditized](/2026/your-model-was-never-your-moat/), so the contest was never going to be won on raw intelligence. Meta doesn't need the smartest agent. It needs the one already sitting inside the app where two billion people already talk to their friends, which is a moat no competitor can rent.

That is the part worth copying, if you are building anything with an agent in it. Whoever owns the surface the customer already trusts and already opens every day starts every contest with the advantage that matters most. Everyone else is renting a smarter model and hoping intelligence closes a distribution gap it usually can't.

## What I would do about it now

Start by reading your own product the way an agent would. Pull up your pricing page, your return policy, your checkout flow, and ask whether a piece of software with no patience and no goodwill could complete a transaction using only what's there. If the honest answer involves a phone call, that is the first thing to fix, not because agents are common yet, but because the same fix, structured, unambiguous, machine-readable information, also makes life better for the humans still doing this the old way.

Then decide, deliberately, whether you want to be discovered inside someone else's agent or whether you are building the relationship your customer has directly with you. Both are legitimate strategies. Drifting into one without choosing is not.

Businesses have adapted to search, to mobile, to marketplaces, each time by making themselves legible to whatever stood between them and their customer. Muse is a preview of the next thing they'll have to get legible to. Deciding how your business shows up when the customer isn't the one reading the page is exactly the kind of question I help founders and CTOs work through in an [AI advisory hour](/work-with-me/).
