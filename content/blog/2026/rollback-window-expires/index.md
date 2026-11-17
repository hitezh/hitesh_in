---
title: "Your rollback window has an expiry date"
seoTitle: "Rollback windows expire: lessons from Microsoft's outage"
slug: "rollback-window-expires"
date: "2026-11-17"
description: "Microsoft's July change passed testing and ran for months, then took down email for a day in November. The fix was not a rollback, and that is the lesson for leaders."
categories:
  - "technology"
tags:
  - "infrastructure"
  - "software-engineering"
  - "engineering-leadership"
  - "decision-making"
image: images/cover.svg
linkedin_hook: "Microsoft's 15-hour email outage came from a change shipped in July. By November it could not be rolled back. Ask how old your oldest unrevertable change is."
takeaways:
  - "List the changes in production older than your rollback window that have never faced peak load. Those are your dormant bets, so pick the riskiest and load-test it this quarter."
  - "Check that your test fleet matches production: same core counts, same hardware generation. A hardware refresh is a change and needs the same review as code."
  - "Rehearse recovery from 80% of servers down, not 10%. Time how long a cold restart takes and whether restored servers survive the returning traffic."
linkedin_question: "What is the oldest change running in your production systems that you could no longer roll back if it failed tomorrow?"
---

Microsoft's [preliminary report on last week's Microsoft 365 outage](https://www.theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026), as The Register summarizes it, traces the failure to a change made in July. That change passed load testing and ran for months without incident. On November 12, a Teams failover and a stretch of reduced capacity pushed the network gateways into a lock-contention defect, and within two hours more than 80 percent of the servers were unresponsive. Exchange Online was down for most of a day. I could not find the primary report in time to read it myself, so I'm relying on that account for the details.

Most of the commentary is about quality, or about AI-written code. Nothing in the report says either. What it does say is more useful: engineers could not roll back, because the defect was months old. They had to write a patch for the patch.

## Rollback is a feature that expires

We talk about rollback as if it were a permanent property of a deployment. It isn't. A change is easy to reverse while little has been built on top of it. Every config change, dependency bump and hardware refresh that lands afterwards makes the old state a little less reachable, until "go back" means going back to a version nothing else is compatible with.

So there is a window in which a mistake is cheap, and it closes silently. The cruel part is that the change looks healthiest just before the window closes. It deployed, nothing broke, and everyone moved on. Silence from a change is not evidence that it is safe. It only tells you it has not met the condition that exposes it.

I'd ask any engineering leadership team a plain question: how many of the changes in production today have never been exercised under peak load, and how old is the oldest? Most can't answer. Few track it.

## The test fleet was not the production fleet

Microsoft says its load testing "tended to focus on weaker hardware with fewer cores," and that the contention gets worse on newer, bigger machines. The defect lived in the gap between the machines the tests used and the machines customers' traffic ran on.

Nobody was careless there. Test environments inherit the assumptions of whoever built them, and those assumptions age. A hardware refresh looks like infrastructure housekeeping, so it rarely goes through the review a code change gets, yet it can change which bugs exist. I'd treat any change in core count, memory or network hardware as a release, with its own test plan.

## Two normal events were enough

The trigger was not exotic. Teams failing over to the primary gateway was an expected behavior, and so was a fleet running with about 14 percent of capacity out for maintenance. Either alone was fine. Together they were fatal.

Notice also what the failover design did. Services that could fail out of the gateway, such as Teams and SharePoint, did, and that pushed more load onto the one that couldn't. Exchange Online cannot leave the gateway "for scale reasons," so the redundancy for everything else became pressure on the thing that had none. Resilience at one layer was concentrated risk at another. When I review an architecture, I look for the component everything else is allowed to fall back onto.

## Recovery tooling assumes the failure you imagined

Microsoft's own wording: "Our normally automated recovery processes were not designed to restore service from this broad unresponsive state." Bringing servers back didn't help, because each one was overwhelmed again the moment traffic returned.

That is the pattern I'd generalize. Recovery automation gets written against partial failure, a few hosts or a single zone. Almost nobody rehearses the day when most of the fleet is down at once, because it feels too unlikely to plan for. Then it happens, and the runbook describes a different outage.

## Why this gets sharper with AI-assisted development

I'd resist the claim that AI wrote this bug; there is no evidence for it. The more relevant point is about speed. Teams using coding agents are shipping more changes per week, which means more layers landing on top of each unexercised one, and a shorter window before reversal gets expensive. I wrote earlier about how [review became the bottleneck](/2026/reviewing-is-the-job/) when code got cheap, and how [Anthropic's merge volume forced it to rethink source control](/2026/tools-built-for-human-speed/). Rollback discipline is the same story one stage later: when change volume rises, the safety net designed for the old rate stops holding.

It also raises the value of rehearsing without the assistant. If your first response to an unfamiliar failure is to ask a model, make sure the team has [practiced an incident with the AI turned off](/2026/ai-off-incident-drill/).

## What I would do on Monday

1. **Find your oldest unexercised change.** List what has shipped in the last six months and never faced real peak load. If nobody can produce the list, that is the finding.
2. **Put an age on every change you could not reverse.** Past a threshold you choose, flag it, and schedule a load test or a deliberate canary rather than waiting for the trigger.
3. **Make test hardware match production.** Same core counts and hardware generation. If they differ, write down which bugs that hides.
4. **Review hardware and platform refreshes like releases.** They need an owner, a test plan and a rollback path.
5. **Map where redundancy piles up.** Pick the component that can't fail away from its dependencies, and ask what happens when everything else falls back onto it.
6. **Rehearse recovery from 80 percent down.** Time the cold start, and check whether restored servers survive returning traffic. If the runbook says "restore in batches," confirm someone has actually done it.
7. **Decide what your business does when a vendor is down for 15 hours.** For many companies email is the channel for receipts, OTPs and loyalty messages. Know the manual fallback before you need it.

The vendor's SLA will refund you a few days of service credit. It won't tell you what a day without email cost you. That number is yours to know, and so is the question of who in your company owns it.

If you want a second pair of eyes on where your own systems have gone dormant, that is a good use of an [advisory hour](/work-with-me/).
