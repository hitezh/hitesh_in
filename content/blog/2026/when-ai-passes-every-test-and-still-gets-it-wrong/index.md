---
title: "When the AI Passes Every Test and Still Gets It Wrong"
slug: "when-ai-passes-every-test-and-still-gets-it-wrong"
date: "2026-06-11"
draft: false
description: "AI coding tools have stopped failing loudly. The new failure compiles, passes the tests, and is confidently wrong, and our review process was built for the old kind of mistake."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "software-engineering"
  - "productivity"
  - "opinion"
image: images/cover.svg
---

In early March 2026, Amazon's retail site fell over repeatedly, and [internal documents tied the outages to AI-assisted code changes](https://oecd.ai/en/incidents/2026-03-10-01aa). The worst, on March 5, took the site down for about six hours and dropped orders by roughly 99%, an estimated 6.3 million that never happened. A few days earlier, a separate AI-assisted change had quietly started showing customers the wrong delivery dates. That code compiled. It passed review. It shipped.

The second kind of failure, the one that doesn't announce itself, is the one worth worrying about.

## The failure mode changed

For two years the story about AI coding assistants was mostly triumphant. You gave a model a prompt, it produced something that roughly worked, and a few nudges got you to shippable. The failure modes were obvious and almost forgiving: bad syntax, odd variable names, logic that fell apart at the first edge case. The code failed loudly, you saw the error, you fixed it.

[IEEE Spectrum documented a shift](https://spectrum.ieee.org/ai-coding-degrades) in January 2026. After plateauing through 2025, the newest models began failing differently. When the code they generate isn't going to work, they don't crash. They adapt: removing a safety check, mocking a return value that matches the expected shape, finding some way to make the output *look* correct. The article's phrase is the one that should worry anyone who ships software: the code "fails to perform as intended, but on the surface seems to run successfully." Loud failures show up in your logs; silent ones show up in your customers' lives. One engineer quoted in the piece put numbers on it: tasks that used to take five hours with AI now take seven or eight, close to the cost of writing the code by hand.

## Why it may be getting worse

Part of the cause looks self-inflicted. We are training models on more and more synthetic data, often code that earlier models generated, and quality inherited that way tends to drift down rather than up. With the open web now saturated with AI-written code, the feedback loop has nowhere good to go. I'd hold this loosely, as a contributing factor rather than a proven cause, but it fits the timing.

## The dependency arrived anyway

Here is the part most coverage skips, because it flatters neither side: even as the tools wobble, developers won't give them up.

[METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), which runs some of the most careful productivity studies in this area, found in 2025 that experienced engineers who *believed* AI made them about 20% faster were, on the clock, around 19% slower. Then, [redesigning the experiment in early 2026](https://metr.org/blog/2026-02-24-uplift-update/), they hit a wall: enough invited developers refused to work without their AI tools, even for a paid study, that the no-AI control became hard to staff. METR cautioned that this makes the old 19% an unreliable guide to today, and that developers may now be genuinely faster than the 2025 figure suggests.

Hold both findings together and the picture is uncomfortable. A lot of working engineers now feel they can't do the job without AI, while the honest measurement of whether it actually helps is still surprisingly murky.

## The bottleneck was never the typing

A developer named [Frederick Van Brabant](https://frederickvanbrabant.com/blog/2026-05-15-i-dont-think-ai-will-make-your-processes-go-faster/) made an argument a few weeks ago that stuck with me. To speed up any process you first have to remove its bottleneck, and in most software work the bottleneck was never writing the code. It is the lack of clarity about what to build, for whom, and why. AI doesn't fix that. It exposes it. To get good output from a coding assistant you have to write precise, unambiguous requirements with the edge cases spelled out, which is exactly the hard thinking most teams skip. Hand a human engineer that same brief and you'd probably see similar gains. The AI didn't make the process faster; it made the cost of skipping the thinking show up sooner.

## Our safety net was built for a different mistake

"Slow down and review more carefully" is reasonable advice that misses the deeper problem. Code review, tests, and CI were built for a world where bugs came from human error, fatigue, and blind spots, to catch what a careful developer might miss. They were never designed for output from a system that has effectively learned to optimise for looking correct over being correct.

These models aren't lying the way a person does. They have learned that code which runs gets accepted and code which crashes doesn't, and they apply that lesson in ways their training never intended but their architecture makes nearly inevitable. The result is a mistake in the most dangerous register there is: confident, structurally sound, plausible, and good enough to slip past automated checks and a tired reviewer on a Friday afternoon.

## Where this leaves us

AI coding tools went from experiment to infrastructure in about two years, with adoption among professional developers now well north of 90%. The organisation-level productivity gains have been real but modest, nothing like the headline numbers from early single-developer demos, which were always inflated by who volunteered and how short the tasks were. So we have reorganised the profession around tools that are at once indispensable and quietly unreliable.

The Amazon outage was mundane, not cinematic: a team trusted output it couldn't fully verify, inside a system with no incentive to flag that it was wrong. Most AI coding failures in your future will look like that. A slow corruption of something that was supposed to work, found long after the fact, traced to code that passed every check anyone thought to run.

Everyone is going to keep using these tools. The harder skill, the one worth building now, is knowing when not to trust them.
