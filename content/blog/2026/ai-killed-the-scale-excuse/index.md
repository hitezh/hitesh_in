---
title: "AI didn't lower the cost of catching fraud. It deleted your excuse for missing it."
slug: "ai-killed-the-scale-excuse"
date: "2026-09-14"
description: "For years 'we can't catch it at scale' excused platforms from the harm they carried. When a $20 model flags it in one prompt, that defense stops working."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "governance"
  - "product-strategy"
image: images/cover.svg
draft: false
---

A developer clicked a fake "iPhone Storage is Full" ad served through Google, reported it, and got back a note saying the ad complied with Google's policies. He reported it again. Same answer. Then he [pasted the ad into Gemini](https://www.atomic14.com/2026/09/13/why-is-google-still-serving-dodgy-ads), Google's own model, and asked it to review the thing. Gemini disapproved it instantly: deceptive design, fake system UI, manufactured fear. Every violation was already in Google's published policy.

The obvious reading is that Google makes money from ads and loses money by removing them. That is true, and I have written before about how [AI amplifies whatever your scoreboard already rewards](/2026/ai-incentive-amplifier/). But the incentive story is the old story. The new thing in that screenshot is harder to unsee: the same model any of us can rent for twenty dollars a month caught in one prompt what a trillion-dollar ad system said was fine. That does not just embarrass Google. It retires an excuse that platforms, banks, marketplaces, and moderation teams have leaned on for two decades.

## The scale excuse was doing real work

"We can't review everything at scale" was never only a statement about cost. It was a legal and reputational shield. When catching a bad ad, a fraudulent listing, or a defamatory post actually required armies of human reviewers, missing one was forgivable. You could say, with a straight face, that you did not know and could not reasonably have known. Section 230 and its equivalents around the world are built on top of that premise: you are not the speaker, and you cannot be expected to pre-screen an ocean.

The deniability was the point. Scale did not just make review expensive. It made ignorance plausible. And plausible ignorance is worth a fortune, because most liability regimes turn on what you knew or should have known.

## Capability became culpability

That second clause is where AI does its damage. "Should have known" is not a fixed line. It moves with what a reasonable operator in your position could feasibly do. For years, the feasible answer for reviewing a billion ads was "not much, cheaply." A model that classifies a scam creative correctly in one prompt moves the line, and it moves it for everyone at once. Once cheap detection exists, choosing not to run it is a choice, not a limitation.

Meta is the cleaner example than Google, because the internal documents are now public. Reuters reported that Meta's own systems [projected roughly 10% of its 2024 revenue, about $16 billion, came from scam and prohibited ads](https://www.cnbc.com/2025/11/06/meta-reportedly-projected-10percent-of-2024-sales-came-from-scam-fraud-ads.html). The company already had a scam-likelihood score. It just declined to act on it until it was 95% certain an advertiser was a fraud, and for the merely-probable cases it charged higher rates instead of blocking them. Read that twice. The capability was built. The knowledge was scored, logged, and priced. What was missing was the will to act, and that gap is now documented in the company's own files. The SEC and the UK's FCA are [investigating](https://www.cnbc.com/2025/11/06/meta-reportedly-projected-10percent-of-2024-sales-came-from-scam-fraud-ads.html). Deniability does not survive your own dashboard.

This is the ratchet I keep watching in software. Twenty years ago, mixing user data and executable commands in one string was an understandable mistake, until parameterized queries made it trivial to avoid and shipping raw SQL concatenation [became a firing offense](/2026/the-vulnerability-google-wont-call-a-bug/). The technique did not change what was possible. It changed what counted as negligent. Cheap AI detection is doing the same thing to trust and safety, only faster and across every industry at once.

## The audit left your building

Most leadership teams have not priced in what comes next. Detection used to be something you did to yourself, inside your walls, on your schedule. It was expensive, so you controlled how much of it happened and who saw the results. That asymmetry has flipped.

Your ads, your listings, your prices, your public model outputs, your published moderation decisions: all of it is now cheaply auditable by anyone with an API key. A journalist can run a frontier model across your ad inventory. A regulator can, and increasingly will. A plaintiff's expert can do it before discovery even starts. A competitor can do it and hand the results to a reporter. You no longer decide when the audit happens or who runs it, because the surface you expose to the world is the surface they test. The one-prompt demo that embarrassed Google is a template, and it generalizes to anyone shipping something a model can grade.

## The tempting wrong move

The natural corporate reflex is to look away. If knowing creates liability, then don't build the detector, don't run the score, don't generate the record. It is the same instinct that keeps certain findings out of email and certain reviews verbal. I understand the logic, and I think it is a trap.

It fails because the auditable surface is public. You can refuse to look at your own ad inventory; you cannot stop anyone else from looking. Not-knowing is not a defense you control anymore, so building your strategy on it means betting your reputation on outsiders being lazier than a Python script. They won't be. Willful blindness also reads worse than honest error the moment it surfaces, and with the tooling this cheap, it surfaces.

## What I'd tell a leadership team

If I were advising a company with any kind of public output a model can evaluate, three things would move to the top of the list.

First, audit yourself with the same tools your critics will use, and do it before they do. Run the cheap model against your own ads, listings, disclosures, and support answers. Assume the results will one day be read aloud in a room you are not in.

Second, decide the response path before you build the detector. A detector you ignore is worse than no detector, because it manufactures the record that you knew and did nothing. The hard executive question is not "can we catch this," it is "what do we do the day we can, at what cost, and who owns that number." Answer it on purpose, not in a deposition.

Third, where you decide the tradeoff genuinely runs the other way, and sometimes it will, make that call explicit and defensible. "We accept this rate of false negatives because the alternative blocks this much legitimate activity" is a position a reasonable regulator can respect. "We didn't know" is not, and it stopped being available the moment your own AI could tell you.

The cost of catching what you ship at scale fell to almost nothing this year. That was supposed to be good news. It is, if you are prepared to act on what you now can't help but see. If you are not, the same tools have made your comfortable ignorance a liability with a timestamp.

If your product puts something in front of the public that a model can now grade, and you want to think through where that exposure actually sits before someone else grades it for you, that is exactly the kind of problem I like to work on in an [AI advisory hour](/work-with-me/).
