---
title: "The European Commission built a Teams backup. Your AI stack needs one too"
seoTitle: "AI vendor fallback strategy: what the EU Commission did"
slug: "commission-teams-backup-ai-fallback"
date: "2026-11-20"
description: "The Commission put a Matrix chat tool in front of 40,000 staff while Teams stays primary. The same design works for AI vendors, but only if someone uses the backup."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai-strategy"
  - "strategy"
  - "architecture"
  - "open-source"
image: images/cover.svg
linkedin_hook: "The European Commission rolled a Matrix chat tool out to 40,000+ staff and kept Teams as the main channel. That is the right shape for an AI vendor fallback, if anyone actually uses it."
takeaways:
  - "Run one real workload on a second AI vendor in production. A fallback that only exists in a sandbox will not work on the day you need it."
  - "Swap your primary and backup model for a day. If the switch takes more than a week of engineering, that is your lock-in cost, so put a number on it."
  - "Keep prompts, evals and tool definitions in your own repo. If you could not hand them to a new vendor tomorrow, you do not own them."
linkedin_question: "If your main AI vendor doubled its price or changed its terms next quarter, which of your workflows could run elsewhere by Tuesday morning?"
---

The European Commission has put a chat tool built on [Matrix and Element](https://element.io/blog/how-the-european-commission-rolled-out-matrix-to-more-than-40-000-staff/) in front of more than 40,000 staff, with the desktop client on Commission laptops by September, according to Element's own account. Teams is still the main channel. Press coverage has leaned on staff who compare the new tool unfavorably, and officials describe it as a complement to Teams, not a replacement.

Most readers took that as a story about a clunky government rollout. I read it as a good purchase with a hidden condition. The Commission is not buying a chat app. It is buying the ability to say no to one vendor, and any company building on AI should be buying the same thing right now.

I could not independently confirm the Commission's numbers beyond Element's account and secondary coverage, so treat them as reported. The design is what interests me.

## A fallback nobody uses will not be there when you need it

Teams has years of habits, integrations and administrators behind it. A second system starts with none of that, and it loses ground every month it sits idle: permissions drift, the integration breaks quietly, the two people who knew how it worked move on. This is the same reason untested backups fail. You find out at the worst possible moment.

The Commission seems to understand this. Pointing sensitive communication at Matrix gives it a standing reason to be used daily by real staff, which keeps the fallback alive. A backup needs a job.

It also changes the commercial conversation. A vendor can tell the difference between a customer with a slide that says "multi-vendor" and one with a system in production. Only the second has leverage at renewal.

## Test the plumbing, not the features

The complaints about Matrix are about features, and parity with Teams will never arrive. The more interesting fixes were in the plumbing. The Commission integrated the tool with its staff login system, and staff initially struggled to find colleagues on other servers until a unified user search was added. Neither is a chat feature. Both are the glue that makes a tool usable inside an organization.

That is where switching costs hide in AI too. Moving from one model to another is rarely about the model. It is the prompts tuned to one vendor's quirks, the evaluation set that only runs against one API, the retrieval index, the tool permissions, the logging. If I were advising a company on this, I would skip the feature comparison table and ask which workload they could run on the second vendor for a full week.

## Decide what you would switch off under load

One more detail: the online and offline presence indicators were switched off because they overloaded the servers. At scale, the first thing to go is the nice-to-have that nobody budgeted for.

Do that exercise before the incident. List what your product does that depends on one vendor's specific behavior, whether that is a tool-calling format, a long context window or a fine-tune. The ones you could not replicate on a second vendor are your real lock-in, and they are usually fewer than people fear. My earlier piece on [why the model was never the moat](/2026/your-model-was-never-your-moat/) argues that durable advantage sits elsewhere, and a fallback is how you find out whether that is true for you.

## The objection is cost, and it is fair

Running two systems costs more than one, and a CFO will say so. That is correct: it is an insurance premium. You keep it small by routing a slice of work to the second vendor, not by mirroring everything. Pick a workload where mistakes are cheap and volume is steady. The Commission did something similar by giving Matrix the sensitive conversations, not all of them.

I have written before about [renting the harness and owning what it learns](/2026/rent-the-harness-own-what-it-learns/), and about how [a vendor's rounding error can become your outage](/2026/vendors-rounding-error-your-outage/). A working fallback is what turns both ideas from advice into a plan.

## What I would do on Monday

1. Pick one real workload and run it on a second AI vendor in production. If it only runs in a sandbox, it does not count.
2. Keep prompts, evaluation sets and tool definitions in your own repository, not a vendor console. If you could not hand them to a new vendor tomorrow, you do not own them.
3. Put a thin gateway between your application and the model so a swap is a configuration change.
4. Swap primary and fallback for one day each quarter. If it takes more than a week of engineering, you have found your lock-in cost.
5. List the features that depend on one vendor's specific behavior and rank them by revenue at risk.
6. Bring the drill results to the next contract renewal. Numbers beat a threat.

If you are working out which of your AI workloads deserve a fallback first, that is a good use of an [AI advisory hour](/work-with-me/).

*What would your company lose the day your primary AI vendor changed its terms, and who would notice first?*
