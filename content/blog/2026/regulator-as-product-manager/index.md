---
title: "When the regulator becomes your product manager"
slug: "regulator-as-product-manager"
date: "2026-07-08"
description: "Every new car in Europe now ships an eye-tracking AI model no buyer chose. How that feature is failing is a preview of what happens when AI gets mandated onto a product."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "product-strategy"
  - "regulation"
  - "governance"
image: images/cover.svg
draft: false
---

Yesterday a feature shipped in every new car sold in Europe, and not one buyer chose it. From 7 July 2026, [Regulation (EU) 2019/2144](https://eur-lex.europa.eu/eli/reg/2019/2144/oj), the General Safety Regulation, requires every newly registered car to carry an Advanced Driver Distraction Warning system: an infrared camera near the wheel that watches your eyes and [warns you](https://allaboutcookies.org/eu-mandatory-distracted-driver-system) when your gaze leaves the road for more than 3.5 seconds. It runs above 20 km/h and cannot be permanently switched off.

Most of the reaction has been about surveillance, which is fair but not the most useful lens. The interesting fact is that a compliance requirement, not a customer and not a product manager, just deployed an AI model into tens of millions of units. This is one of the largest forced rollouts of edge AI in history, pulled by no demand at all. And it is failing in the way mandated features reliably fail.

## A feature nobody bought

The goal is real. The EU expects these systems to help prevent tens of thousands of serious injuries over the next decade, and inattention genuinely kills people. I have no quarrel with the intent.

The execution is the problem. Early road testing already finds the camera firing when you glance at scenery or reach for the infotainment screen, in some cases every ten minutes or so. A safety alert that cries wolf that often gets tuned out, and then switched off at the first legal opportunity. The feature meant to keep your attention on the road ends up training you to ignore it.

That is not bad luck. When a capability ships because you have to, the team building it optimizes to pass the test, not to be useful. The spec says detect gaze-off-road for 3.5 seconds, so that is what gets built and measured. Genuine usefulness, the thing a real user would actually thank you for, was never the acceptance criterion. It rarely is when the buyer is a regulation.

## A mandate is a spec, not a quality bar

Read the requirement closely and you notice what it does not say. It says the camera must exist and what it must detect. It says nothing about how good the model has to be, what false-positive rate is tolerable, or who audits the system. It requires the data to stay in a closed loop on the vehicle, but names no independent audit and sets no retention period.

I see the same shape inside companies constantly. Leadership decides the product needs AI, picks the feature, and announces it. What nobody writes down is the part that decides whether it works: the target accuracy, the [failure budget](/2026/the-autonomy-budget/), what the system does when it is wrong, and who reviews the output. The mandate hands the team a capability and leaves the hard half blank. The strongest teams I have worked with treat that blank as their job. They write the acceptance criteria the mandate skipped, because [governing the output](/2026/ai-writes-the-code-who-governs-it/) is where the real work lives, and no one above them is going to do it.

## The asset you build today, the bill that arrives later

A camera watching every driver is also a dataset. The regulation says it stays on the device. History says driver data finds a market anyway. In March 2024 the New York Times [reported](https://www.nytimes.com/2024/03/11/technology/carmakers-driver-tracking-insurance.html) that GM, Honda, Hyundai and others had been feeding driving behaviour to brokers like LexisNexis, which turned it into risk scores and sold it to insurers; one driver pulled his file and it ran 258 pages. GM stopped after the reporting and was later [barred by the FTC](https://www.ftc.gov/news-events/news/press-releases/2026/01/ftc-finalizes-order-settling-allegations-gm-onstar-collected-sold-geolocation-data-without-consumers) from sharing that data for five years.

The lesson is about sequence. The governance you set on the day you deploy a sensor is the only governance that ever really sticks. Once the hardware is in the field and the data exists, the gradient always tilts toward monetizing it, and someone eventually follows that slope. It is the same question I kept coming back to with [Cloudflare's toll booth for AI traffic](/2026/ai-toll-booth-cloudflare/): the mechanism is fine, but whoever ends up owning the meter owns the outcome.

## Every product is about to get this

You may not sell cars, but a mandate is coming for you too, if not from a regulator then from your own board. "The board wants AI in the product" produces the same pathology as "Brussels wants a camera in the car": a feature nobody asked for, built to pass rather than to help, with the quality bar and the data rules left unspecified.

The teams that come out of this well do the unglamorous thing. They decide what good looks like before they ship, they set the false-positive budget as a real number, and they treat "users disabled it" as the failure it is rather than a footnote in the release notes. The ones that struggle ship the capability, hit the deadline, and discover a year later that they built an asset, a liability, and a trust problem in one go.

If I were advising a company staring at an AI mandate, the first question would not be whether we can build the thing. It would be what good looks like, and who watches the data once it exists. The camera in the dashboard is a preview of that conversation. It is worth studying how it fails before the same brief lands on your desk. If you are having that conversation now, [an advisory hour](/work-with-me/) is a good place to pressure-test it.
