---
title: "The review bill for AI-found bugs lands on someone else"
seoTitle: "AI-found bugs: who pays the review bill? Lessons from Glasswing"
slug: "ai-found-bugs-review-bill"
date: "2026-11-11"
description: "Anthropic's Glasswing logged 37,966 findings and 217 fixes. For any leader buying AI output, the lesson is to judge it by what your team can verify, not what the tool produces."
categories:
  - "technology"
tags:
  - "ai"
  - "security"
  - "open-source"
  - "economics"
  - "strategy"
image: images/cover.svg
linkedin_hook: "Anthropic's Glasswing has logged 37,966 vulnerability findings in seven months. 217 are marked fixed. Before you buy any AI that produces output, price the people who have to check it."
takeaways:
  - "Before buying an AI scanner or agent, count the hours your team can spend verifying its output each week. That number, not the tool's speed, is your real capacity."
  - "Ask any vendor for the share of findings that end in a fix, not the number of findings. A high find count with a low fix count is a queue, not a result."
  - "Tag every AI-generated report with its confidence, and rate-limit how many you accept per week. Curl's maintainer publishes his gradually for the same reason."
linkedin_question: "When an AI tool produced more output than your team could review, what did you do with the excess?"
draft: false
---

Anthropic launched Project Glasswing in April, saying it had found thousands of high- and critical-severity vulnerabilities in open source software and would help maintainers fix them. Seven months on, [VulnCheck has tallied the results](https://www.vulncheck.com/blog/anthropic-glasswing-november-update) from Anthropic's own public ledger. It lists 37,966 findings, of which 7,349 have been made public and 217 are marked fixed. About 1,670 are duplicates, and 419 were withdrawn.

I'd be careful with these numbers in both directions. VulnCheck sells vulnerability intelligence, so it has a view. The ledger is also incomplete: four in five findings are not public yet, and I couldn't independently check any of them. Still, one detail in the story matters more than the totals, and it applies to almost anyone buying AI right now.

## The tool got faster than the people who check it

In October, [per VulnCheck](https://www.vulncheck.com/blog/anthropic-glasswing-november-update), Anthropic said it had found more than 29,000 candidate vulnerabilities but had manually reviewed only about 6,000. It described itself as "bottlenecked" on human validation, and it sent nearly 5,000 unverified reports to maintainers anyway. It then launched a self-service scanner that sends reports nobody has reviewed.

That is a reasonable engineering decision and a questionable economic one. The scarce resource was review capacity, and Anthropic ran out first. Rather than slow the scanner down, the cost of the remaining review moved to maintainers who never asked for the reports and have no budget for them. Economists have a plain word for a cost you impose on someone outside the transaction. Nobody is acting in bad faith here, but the accounting is the same.

## A finding is a claim, not a result

Consider what VulnCheck reports from curl. Daniel Stenberg received 45 reports from Anthropic, one rated medium and the rest low. Of the 34 published so far, 19 were judged not to be vulnerabilities. Six were confirmed as low severity. VulnCheck also found that the model rated 91.5% of ledger findings critical or high, while maintainers rated about half that.

A finding is a hypothesis that someone with context still has to test. Producing hypotheses at machine speed and testing them at human speed gives you a queue, and queues don't fix anything. Fixes in the ledger rose by 15 between September and November. Findings rose by 11,813.

I noticed one more thing in the numbers, and it's my own inference rather than VulnCheck's. Duplicates went from 2 to roughly 1,670 over the same period. That is what you'd expect when many scans hit the same widely used code: the same bug reported again, and each report costs a maintainer another read. Cheap generation makes the review cost grow faster than the output does.

## This is every AI pilot, not just security

Leaders will recognize the shape. A sales team's AI drafts four times as many outreach emails, and the manager who approves them is the same one as before. A coding agent opens forty pull requests a week into a team with the same three reviewers. A compliance model flags ten times more transactions for an analyst pool that hasn't grown.

In each case, the demo measures output and the business gets billed for verification. Throughput in any pipeline is set by its slowest stage, and for AI work that stage is almost always a person who can say "this is right." I've written before about [pointing AI where checking is cheap](/2026/point-ai-where-checking-is-cheap/), and Glasswing is the mirror image: what happens when you point it where checking is expensive. The same logic sits behind why [AI made the attacker cheap](/2026/the-attacker-just-got-cheap/) while defense stayed expensive.

One objection deserves a fair answer. Some readers on the discussion threads argue that the right test is whether real harm was prevented, and that unfixed findings may simply be under embargo. That's reasonable, and the ledger can't settle it. But the claim doesn't need to be settled to be useful. Even at Anthropic's own claimed 94.2% true-positive rate, a true finding nobody has fixed protects no one.

## What I'd do before buying anything that produces output

If I were advising a team evaluating an AI scanner, agent or analyst tool, I'd run this in order:

1. Measure your review capacity first. Count the hours per week people can honestly spend checking AI output. If you can't name that number, you aren't ready to buy.
2. Pilot on a slice sized to that number. If the tool produces more than your reviewers can clear in a week, the pilot is already failing, whatever the demo shows.
3. Ask the vendor for fix rate, not find rate. What share of output ended in an accepted change? A vendor without that figure hasn't measured the part you pay for.
4. Demand a confidence rating and a proposed fix. Output without either is the most expensive kind, because your people have to do the diagnosis as well as the verification.
5. Cap intake. Accept a set number of AI-generated items per week and rank them. Curl publishes its reports gradually for exactly this reason.
6. Track duplicates and rejections. Rising numbers tell you the tool's marginal output is costing more to read than it's worth. That's the signal to pause it.

The question to take back to your own company is where your AI is already producing more than anyone can check, and who is quietly absorbing the difference. If you want a second opinion on that before the next purchase, [that's what an AI advisory hour is for](/work-with-me/).
