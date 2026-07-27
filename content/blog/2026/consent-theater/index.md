---
title: "The cookie banner was consent theater. AI is building its own."
slug: "consent-theater"
date: "2026-07-27"
description: "Cookie banners produced 90% opt-in and almost no real consent. As Europe tries to fix them with a browser signal, the same design mistake is being wired into AI rules."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "regulation"
  - "governance"
  - "product-strategy"
  - "privacy"
image: images/cover.svg
draft: false
---

Roughly [90% of people click "accept"](https://www.advance-metrics.com/en/blog/cookie-behaviour-study/) on a cookie banner when rejecting takes an extra click or two. Ask those same people whether they actually want to be tracked and [about 3%](https://killthecookiebanner.eu/) say yes. That gap, between the click and the wish, is the most instructive number in technology policy right now, and almost nobody arguing about AI is looking at it.

A cookie banner never measured consent. It measured how much friction a person will absorb before they surrender and hit the biggest button. Europe ran that experiment across its entire internet for over a decade, and the verdict is in: consent collected at the moment of maximum annoyance is worthless as a signal and expensive as a habit. We are now wiring the same machine into how AI gets governed, and the people making product and policy calls can still decline to build it.

## A click is not a decision

The industry reports opt-in rates as if they were preferences. A retailer sees 90% acceptance and concludes its customers are comfortable with tracking. They are not comfortable; they are tired. One [large study](https://www.advance-metrics.com/en/blog/cookie-behaviour-study/) found that nearly half of the people who accepted said, in the same breath, that they did not want to. The banner did not discover a preference. It manufactured a click and relabeled it as one.

This is the part worth sitting with, because it generalizes far beyond cookies. Any time you extract a decision from someone at the point of maximum friction, you find out what they will tolerate to reach the thing they came for, and their actual preference never enters the data. A 90% opt-in rate does not tell you your data practices are welcome. It tells you your consent mechanism is broken, and that you are now steering by an instrument you rigged yourself. Building strategy on that number is building on sand.

## The fix that works moves the decision, not the dialog

There is a version of consent that does work, and it looks nothing like a banner. Let people set the preference once, cheaply, in a place they already trust, and have every site honor it by default. California already does this: the browser's [Global Privacy Control](https://globalprivacycontrol.org/) is a legally binding opt-out signal, and in 2022 Sephora [paid $1.2 million](https://www.faegredrinker.com/en/insights/publications/2022/9/sephora-settles-with-california-ag-for-1-2m-for-alleged-ccpa-violations) for ignoring it. The EU proposed [the same idea](https://www.iubenda.com/en/blog/browser-level-consent-signals-digital-omnibus/) in late 2025 inside its Digital Omnibus reform: express your choice at the browser, and the banners disappear.

There is an economics reason this design is the right one, and it is old. When negotiating a right at every single transaction is too costly, you assign that right once, at the layer where the cost of deciding is lowest. A cookie banner forces the negotiation at the worst possible moment, thousands of times a year, per person. A browser signal settles it once. The friction does not vanish; it moves to where it barely registers.

Which is exactly why the fix keeps failing politically. In [June 2026 the EU Council dropped the browser-signal provision](https://ppc.land/eu-council-drops-cookie-signal-after-google-lobbying-eur-40-50-bn-at-stake/) from the reform after heavy lobbying in which [Google played a central role](https://noyb.eu/en/eu-member-states-and-google-suddenly-want-keep-cookie-banners), with tens of billions of euros in ad revenue at stake. The banner survives not because it protects anyone, but because a low-friction signal would let people say the "no" the banner is designed to wear down. The theater is the product.

## AI is already growing its banner layer

Now watch the same pattern arrive in AI. The EU AI Act's [Article 50](https://artificialintelligenceact.eu/article/50/) requires that people be told when they are talking to a machine and that AI-generated content be labeled. Product teams are bolting on consent-to-train toggles, "this was made with AI" badges, and disclosure pop-ups. The intent is good, the same way the cookie law's intent was good. And the delivery is heading straight for the same failure: a layer of dismissable notices that users learn to click past in a week, generating another set of compliance metrics that look reassuring and mean nothing.

The alternative is the one that has been sitting in plain sight. Policy that machines can read and honor beats notices that humans must dismiss. It is the logic behind [Cloudflare's pay-per-crawl toll booth](/2026/ai-toll-booth-cloudflare/) for AI traffic and behind the old robots.txt: state the rule once, in a place the software checks by default, instead of asking a person to adjudicate it on every encounter. If your AI governance lives in a dialog box, you have chosen theater. If it lives at a layer, you have chosen something that might actually hold. The same question I keep returning to applies here too: [whoever owns the layer](/2026/ai-toll-booth-cloudflare/) owns the outcome, so it is worth deciding early whether that is you, a platform, or nobody.

## What this changes for anyone shipping a product

The executive lesson is a decision rule, and it is uncomfortable. Be suspicious of any compliance number that only ever goes up. A metric that looks great and changes nothing is not a win; it is a liability wearing a KPI's clothes. If your opt-in rate is 90% and you know most of those people would opt out given a fair default, you are not compliant. You are exposed, and you have paid for the privilege with your customers' patience and your own credibility.

One pattern I have watched play out repeatedly: teams treat "the box is checked" as the end of the question when it is the start of it. The strongest teams I work with design the default first, because the default is the actual policy; everything else is decoration. They also refuse to confuse the data their own dark patterns produce with what customers want, which is the difference between [knowing what to build](/2026/the-commons-that-trained-your-ai/) and flattering yourself into building the wrong thing.

Cookie banners were a fifteen-year, continent-scale experiment in faking consent, and the results are unambiguous enough to learn from before we repeat them. The AI version is being drafted now, in regulation and in your product backlog. The choice is the same one Europe keeps flinching from: regulate the incentive, not the interface, and put the decision at the layer instead of the dialog. If you are working out where consent and disclosure should actually live in your AI product, [an advisory hour](/work-with-me/) is a good place to pressure-test it before it ships.
