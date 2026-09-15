---
title: "When your buyer is software, the interface stops being a moat"
slug: "when-your-buyer-is-software"
date: "2026-09-15"
description: "A federal court just ruled Amazon can't use hacking law to keep Perplexity's shopping agent out. The more useful question is where a platform's defensibility actually lives."
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
  - "ecommerce"
---

On August 4 the Ninth Circuit [vacated an injunction](https://www.engadget.com/2230471/perplexity-has-successfully-overturned-amazon-injunction-on-its-ai-shopping-bot/) Amazon had won against Perplexity, and in doing so told every platform something it did not want to hear: you probably cannot use anti-hacking law to keep AI shopping agents off your site.

The mechanics matter, so start with them. Amazon sued under the Computer Fraud and Abuse Act, the 1986 statute written to prosecute people who break into computers. Its claim was that Perplexity's Comet agent, which logs in and buys on a customer's behalf, was accessing Amazon "without authorization." The court disagreed on a narrow technical point that turns out to be a strategic one. The CFAA, it held, [contemplates access by a person](https://www.jonesday.com/en/insights/2026/09/ninth-circuit-vacates-cfaa-injunction-against-perplexitys-comet-ai-agent), and the agent is a tool, not a person. The person doing the accessing was the customer, using their own account, in their own browser, on their own device. Comet took a screenshot, sent it to Perplexity for a decision, and clicked. Perplexity never touched Amazon's servers. The customer did, and the customer was allowed to be there.

## Reaching for a hacking law tells you something

Watch what Amazon chose to argue. When your defense against a competitor is a criminal statute about breaking into machines, you are conceding that the contest was already lost at the product layer. The interesting part is what Amazon was reaching to protect. It was protecting the screen, not its prices or its selection.

This is the [scraping fight](https://en.wikipedia.org/wiki/HiQ_Labs_v._LinkedIn) one layer up. When hiQ scraped public LinkedIn profiles, the courts kept landing on the same instinct: if a user is allowed to see something, the software they point at it is an extension of them, not an intruder. A founder betting that terms of service and a hacking claim will keep agents out is betting against a direction the courts have been consistent about for years.

## The interface was the moat. Now it is overhead.

For twenty-five years the screen was where platforms earned their margin on attention. The buy box, the sponsored row, "customers also bought," the small nudge to add one more thing to the cart. An agent ignores all of it. It reads price, availability, ratings, shipping time, and return policy as structured data, then compares you against everyone else it can reach. The persuasion layer that product teams have polished for two decades is invisible to it.

Follow that to the money and you see what Amazon was really defending. Its advertising business [crossed $56 billion in 2024](https://www.emarketer.com/content/amazon-retail-media-ad-revenues-will-pass-60-billion-2025) and kept climbing through 2025. It is the fastest-growing, highest-margin part of the company, and analysts are blunt that without it the retail operation would be close to unprofitable. Every one of those dollars depends on a human looking at a screen. An agent checkout is a checkout with the ads switched off. Amazon did not file a security case. It filed a margin case wearing a security case's clothes.

## What actually defends you when the buyer is software

The court left Amazon other tools, mainly contract claims under its terms of service. But blocking is a fight you lose slowly. Amazon accused Perplexity of [disguising Comet as an ordinary Chrome browser](https://www.retaildive.com/news/amazon-sues-perplexity-ai-shopping-agents/804871/) to avoid detection, which is exactly the detect-and-evade arms race publishers already lost to ad blockers. You do not win by out-detecting software that is acting for a paying customer.

So the question flips. It stops being "how do I keep the agent out" and becomes "when an agent lines me up against everyone else, why does it pick me?" The honest answer is unglamorous. The real price after the coupon math, whether the item is actually in stock, whether it ships when you said and returns without a phone call. Legibility and reliability, the things a patient human forgives and an impatient piece of software will not. I wrote recently about [making your business legible to an agent buyer](/2026/your-next-customer-is-an-agent/); this ruling is the reason that work is no longer optional. The layer you were competing on is being ruled out from under you.

## What I would tell a platform team

One pattern I keep seeing: leadership teams badly underestimate how much of their margin depends on a human looking at a screen. So do the audit. Take the P&L and mark every line that only works because a person is watching: ad placements, upsells, impulse adds, the friction you happen to profit from. That column is now exposed, and the courts just shortened the timeline.

Then choose, on purpose, whether you are a destination or a supplier. If agents are going to sit between you and the customer regardless, you can try to be the surface the agent runs on, which is hard and mostly reserved for companies the size of the one that just lost this case, or you can be the option the agent keeps choosing because you are genuinely the best answer. Both are real strategies. What [rarely survives](/2026/your-model-was-never-your-moat/) is drifting into one without deciding.

The CFAA was written to punish people who break into machines. A court just used it to draw a line that matters more for business than for security: your customer's software is an extension of your customer, and your customer is allowed to bring it through the front door. The platforms that do well over the next decade will stop treating that as trespass and start treating it as the new front door itself.

Working out which parts of your margin depend on a human looking at a screen, and what to fix before an agent stops looking, is exactly the kind of question I work through with founders and CTOs in an [AI advisory hour](/work-with-me/).
