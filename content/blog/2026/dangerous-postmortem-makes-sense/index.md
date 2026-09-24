---
title: "The most dangerous postmortem is the one that makes sense"
slug: "dangerous-postmortem-makes-sense"
date: "2026-09-24"
description: "AI can now write a flawless-sounding incident report in seconds. That's not a safety win. It's the exact trap that keeps organizations from fixing what's actually broken."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "leadership"
  - "decision-making"
  - "engineering-leadership"
  - "postmortems"
image: images/cover.svg
draft: false
---

Michael Heap tells a story about an SVP who, five minutes into a detailed incident readout, stopped the meeting. "I already believe you did your best," he said. "Now let's talk about what happens next." No interest in the timeline, no interrogation of who missed what. Heap [wrote it up](https://michaelheap.com/i-dont-want-the-details/) as a case for skipping the details, and the reaction split almost exactly down the middle: half the readers called it real leadership, delegation done right; half called it an executive signing off on fixes he had no way to evaluate. Both camps are arguing about trust. I think they are missing the more useful question, which is why a good explanation feels like enough in the first place, when it so rarely is.

## Explanations that exonerate

Heap's real argument isn't about executive style. It's that a thorough, reasonable-sounding account of a failure is often the thing that kills the fix. Once a room agrees that everyone acted sensibly given what they knew, the urgency to change anything drains out of it. The explanation did its job. It made people feel resolved. It did nothing for the system that produced the failure.

That is an old trap, and not just in engineering. A postmortem earns trust by being detailed, and detail is exactly what lets an organization conclude the failure was a one-off, an unlucky alignment of reasonable decisions, rather than a defect in how the place runs. The more convincing the narrative, the easier it is to stop there.

## Two jobs, one document

A postmortem is actually doing two jobs at once, and they pull in opposite directions. One job is exoneration: showing that nobody was reckless, that people acted on the information in front of them. The other is diagnosis: naming the specific structural thing that let reasonable people fail anyway. Exoneration is comfortable to write and satisfying to read. Diagnosis usually means saying the process itself, not any person in it, was the defect, and that's the part nobody volunteers.

Most postmortems lean hard toward the first job, because whoever writes one has an interest in the room feeling resolved. Heap's SVP was trying to force the second job by refusing the comfort of the first. That's a fine instinct. It doesn't survive contact with what happens next.

## What AI actually breaks here

What happens next is that a fluent, well-organized, entirely plausible explanation now costs about the same as a bad one. Most of the AI-agent incidents worth writing about this year have had the opposite problem: an agent does something, and [months later nobody, including the vendor, can produce an honest account of what it actually did](/2026/what-your-agent-did/). That's a real failure, but at least it announces itself. A missing explanation is visible.

A too-good explanation isn't. Ask a model to draft the incident report and it will hand you a clean timeline, contributing factors, and three action items, in the house style of a company that's been doing this for a decade. Nothing in it will be false. It will also, by construction, satisfy exactly the itch Heap is warning about: the room reads it, nods, and moves on. [The effort a thorough writeup used to take was itself a signal](/2026/the-effort-signal/), evidence that someone sat with the failure long enough to notice the part that didn't add up. AI keeps the polish and removes the effort. The signal is gone, and nobody agreed to stop trusting it.

## Grade the fix, not the prose

None of this argues for throwing out written postmortems, human or AI-assisted. It argues for changing what you grade. A postmortem isn't a literature review. The only output that matters is whether it names one specific change to the system, with an owner and a date, that makes the same class of failure less likely. If a document can't answer that in one sentence, its thoroughness isn't evidence of anything, and a model's fluency should make you more suspicious of it, not less.

That's the same discipline I've argued belongs in [reviewing AI-written code](/2026/reviewing-is-the-job/): the scarce resource was never production, it was the judgment to tell whether the output actually changes anything. Postmortems just make the stakes easier to see, because the thing being produced is a story about why you don't need to change, and stories like that have always been easy to want to believe.

Ask your next postmortem, human-written or machine-drafted, one question before you thank whoever produced it: what, specifically, changes because of this. If the honest answer is "we understand it better now," you have a well-written document and an unfixed system, and soon a much cheaper way of producing more of exactly that. If your team is rethinking how it reviews AI-touched work in general, that's usually the first thing I dig into in an [AI advisory hour](/work-with-me/).
