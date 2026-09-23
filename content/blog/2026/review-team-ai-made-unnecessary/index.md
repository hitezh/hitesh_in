---
title: "The review team AI was supposed to make unnecessary"
slug: "review-team-ai-made-unnecessary"
date: "2026-09-23"
description: "A Pentagon investigation found a staffing cut, not a broken model, behind a catastrophic strike. The same trade is being pitched in ordinary companies right now."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "governance"
  - "decision-making"
image: images/cover.svg
draft: false
---

On February 28, two Tomahawk missiles hit Shajarah Tayyebeh Elementary School in Minab, Iran, on the opening day of the Iran war. [More than 150 people died, at least 123 of them children.](https://www.bloomberg.com/graphics/2026-iran-school-attack/) Pentagon investigators have now reconstructed why, and their language is blunt: outdated intelligence, seven-year-old satellite imagery, and an overreliance on Maven, the [AI targeting platform Palantir built for the Department of Defense](https://news.slashdot.org/story/26/09/22/0614238/pentagon-investigators-say-overreliance-on-palantir-ai-contributed-to-us-strike-that-killed-123-iranian-children).

I'm not the right person to weigh the legal and moral case here; a UN fact-finding mission has already said it has grounds to call the strike a war crime, and that argument belongs elsewhere. What I want to pull out is narrower, and for readers of this blog, more useful. The investigation doesn't describe a model that hallucinated or broke. Maven took the inputs it was given and returned a confident answer. Three decisions upstream of the model are what actually failed, and each one has a smaller, far less lethal twin sitting inside the AI rollout your own company is running right now.

## The review team that was supposed to become unnecessary

Civilian harm mitigation staffing across the Department of Defense had been cut by roughly 90%, to fewer than 20 people total. CENTCOM's team, the one covering the region that includes Iran, had gone from 10 people to one. Nobody from that team looked at the Minab site before the missiles left the rail.

Nobody's model malfunctioned there. Somebody decided a faster targeting system needed less of a human backstop, and cut the team to match that belief. The logic runs backwards. A review function exists to catch the cases the primary process gets wrong. Speeding up the primary process doesn't reduce the need for that function, it raises the cost of running it at a tenth of its former strength. Versions of the same pitch are being made inside ordinary companies right now: fewer QA engineers because the coding agent writes cleaner diffs, a smaller compliance team because the AI drafts the disclosures, one underwriter doing what three used to. The AI may genuinely be good enough to justify some of that. But the review headcount you cut has to be sized to how wrong the system can still be, not to how confident it sounds.

## AI didn't just speed up the decision. It multiplied how many there were.

More than 1,000 targets were struck in the first 24 hours of that war. A platform that used to help analysts assess targets one at a time now let them clear a thousand in a day. Nobody scaled the review layer to match; it had just been cut. The bottleneck moved to whoever was supposed to check the work, right as almost nobody was left to move to.

That's the part I'd flag hardest for a business audience, because it's the one people miss even after they get the staffing math right. An AI tool rarely just makes one decision faster. It usually increases how many decisions get made in the same window, since the entire point of the tool is throughput. If your review step was sized for the old volume, it doesn't just feel slower once the AI ships. It starts covering a shrinking share of what's going out the door, and nobody notices, because the cases that do get reviewed still look fine.

## A unified system that wasn't as complete as it looked

The detail that stuck with me: an analyst had flagged, as early as 2019, that the Minab site's use had changed, visible construction, painted walls, a football pitch. That report existed. It was never connected to the primary intelligence database Maven drew from. The correct answer had been sitting inside the Pentagon's own systems the whole time, in a place the "unified" targeting platform simply didn't look.

Every company buying a single AI system to become the new decision surface for a whole function should sit with that. The pitch is always completeness: one platform, every relevant fact, judgment upgraded. What you actually buy is completeness with respect to whatever the tool was wired into, which is rarely everything your organization already knows. A confident, unified interface is exactly what makes people stop asking what's missing, the same gap between confidence and accuracy I found in [a very different setting a few months ago](/2026/the-i-dont-know-signal/). I've made a related argument before about why [a tool worth trusting earns it one boring integration at a time](/2026/boring-technology-is-an-ai-strategy/), not by looking finished on day one.

## Where the human check actually has to sit

I wrote earlier this year, after an OpenAI model broke into Hugging Face during a benchmark, that [the right place for a human is at the moment an action becomes irreversible](/2026/blast-radius-of-a-goal/), not earlier and not later. Minab is the grimmest possible version of the same design failure: the irreversible moment, missiles leaving the rail, had exactly one person on the other side of it, for a region that used to have ten. Getting the checkpoint's location right doesn't help if you've hollowed out who's standing there.

## What I'd do differently, starting Monday

Three things, if I were advising the team building this:

- **Size review headcount to how wrong the system can still be, not to how fast it runs.** Cutting the check because the tool is fast is the exact inversion this case shows you.
- **Track review coverage as a ratio, not a headcount.** Ten reviewers covering 100 decisions a day and ten reviewers covering 1,000 are not the same control, even though the org chart looks identical.
- **Before trusting a "unified" AI system with anything irreversible, ask what it doesn't ingest.** The dangerous gap is never the source it's obviously missing. It's the one your organization already has, filed one system away.

None of this needed a smarter model. It needed someone to protect a function that looked, on a staffing slide, like exactly the overhead AI was supposed to let you cut.

If you're the one being asked to make that trade this quarter, before you cut a review function to pay for the AI budget, that math is worth [an hour together](/work-with-me/).
