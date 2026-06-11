---
title: "We Stopped Laughing at GenAI"
date: "2026-06-11"
draft: false
description: "For a while we treated generative AI as a parlor trick with bad hands and a habit of making things up. Five kinds of story I keep seeing have quietly ended that phase — and left me with a more uncomfortable question than 'will it take my job?'"
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "llm"
  - "future-of-work"
  - "software-engineering"
  - "vibe-coding"
---

For a couple of years we lived comfortably in what I'd call the quaint-dismissal phase. We laughed at the mangled six-fingered hands in image generators. We collected screenshots of confident nonsense from early chatbots. We repeated "[stochastic parrot](https://dl.acm.org/doi/10.1145/3442188.3445922)" at conferences and went back to work, reassured that our professional moats — built on decades of hard-won, specialised knowledge — were safe from a glorified autocomplete.

That phase is over. Not because of a single model release, but because the kind of story people tell about these tools has changed. A year ago the stories were "look at the silly mistake it made." Now they're "I did a thing in one evening that I had assumed was impossible for someone like me." The tone in the room has shifted from amused to a quiet *oh.*

I don't think the headline is "AI will take your job." It's subtler and, for me, more interesting: the cost of attempting something hard has collapsed, and that changes the calculus for everyone — including the people whose expertise used to be the barrier. Here are five kinds of account that moved me from amused to paying close attention. I haven't lived all of them myself; they're the stories piling up in my feeds, and the pattern is the point.

## Dead hardware is coming back to life

Reviving "bricked" or genuinely ancient hardware used to be the domain of a small priesthood — people who'd spent months living inside Ghidra and disassemblers. That gate is being kicked open.

One account that stuck with me: someone navigated the undocumented wave-file format of a 1990s Alesis synthesiser and built a modern, cross-platform tool to work with it — in a single night, with an LLM doing the heavy reverse-engineering. Another recovered a piano bricked by a failed firmware update by having the model walk them through decompiling an Android app, pulling out a hardcoded encryption key, decrypting the firmware, and reflashing the instrument over Bluetooth. In under an hour. By someone who is not, in any normal sense, a reverse engineer.

As one person put it, you can still follow every step and appreciate how hard it is — but it'll only take a generation for this to feel like *magic*, with the rest of us beseeching the machine spirits for a blessing. That line is funny because it's close to true.

## The 20-year technical-debt moat is evaporating

For most of my career, complexity *was* the moat. If your business sat on thirty years of legacy code, you were safe, because rewriting it was too expensive and too risky to seriously contemplate. That math is changing fast.

There's a widely shared account of a developer pointing Claude Opus and Gemini at roughly 800,000 lines of legacy Python and C — three decades of work by dozens of engineers — and distilling it into about 10,000 lines of modern code in ten days. The detail that should worry incumbents isn't the speed. It's that the person found the rewritten code *easier to understand* than the original, despite not having written a line of it.

I'd treat the exact numbers as folklore until I'd seen the repo. But the direction is real, and I see it in advisory conversations: when the labour of a generation can be refactored over a long weekend, technical debt stops being a fortress and starts being raw material. "We're protected because our system is too complex to replace" is aging badly.

## Vision turned the model into a diagnostician

The part that surprised me most is how quickly this left the screen. With live video, these tools have become a diagnostic equaliser for the physically curious.

The stories are mundane in the best way. Someone points a phone at a dead furnace and gets talked through identifying a stuck exhaust fan and safely restoring heat over a holiday. Someone diagnoses an ailing plant with something close to professional confidence. My favourite: at a science fair, a model watching through a live feed spotted a single wire where the insulation hadn't been fully scraped off — invisible to the people standing right there, obvious to the camera.

One line from these accounts lodged in my head: *GenAI made me lose trust in my HVAC company, and more GenAI let me replace them and do the repair myself, all in one day.* That is a small story about a furnace and a large story about who gets to be an expert.

## The "vibe coder" is real, and they understand the problem better than you

A new kind of builder is showing up: the domain expert who cares about the outcome and is happy to let the model handle the syntax. They're not waiting for an engineering team because they understand the pain point better than any engineer could.

A student in Spain with no technical background ships a study app for public-administration exams that picks up real users on a modern stack. A lawyer builds a bespoke redlining tool around their own workflow. A salesperson spins up a website for a golf trip in minutes. None of these are impressive *as software*. They're impressive as a signal: domain knowledge is now more valuable than syntax knowledge, because the model supplies the *how* and the human supplies the far scarcer *what*.

For professional developers, this is the uncomfortable one. I don't read it as "engineers are obsolete." I read it as "the part of engineering that was about typing the right incantation is no longer where the value lives." That's been true in spirit for a long time. Now it's true in practice.

## The same speed cuts both ways

Here's where my enthusiasm picks up a cold edge. The capability that fixes your printer also compresses the distance between a security flaw and a working weapon.

A researcher described handing a frontier model a proof-of-concept exploit that only worked under non-default, contrived conditions — and watching it cheerfully rework the thing into a version that hit default configurations and crashed systems immediately. The gap between "a patch exists" and "anyone can exploit it" shrinks toward zero. That's the same tool, on the same day, that helped someone solve a Linux printing bug that thirty years of expertise hadn't cracked.

This is what people mean by *jagged intelligence*: superhuman in one cell of the grid, alarmingly naive in the next, and not reliably aware of which is which. The uneven competence is manageable. The thing I actually lose sleep over is what's underneath it — that we increasingly *command* systems we couldn't audit ourselves. Call it cognitive debt. We're borrowing capability against understanding, and the bill comes due the day the magic stops and something has to be fixed by hand.

## The calculus has shifted

Step back and the through-line is clear: the barrier to hard things hasn't been lowered, it's been mostly removed. We're sliding from *software as a service* to *AI as a partner* — and the partner is wildly capable and only intermittently trustworthy.

The genuinely Asimovian worry isn't the robots. It's the atrophy. In his 1958 story [*The Feeling of Power*](https://en.wikipedia.org/wiki/The_Feeling_of_Power), a far-future society has forgotten how to do arithmetic by hand, because the machines always did it — until someone rediscovers multiplication and it's treated as a marvel. That's the failure mode I'd actually bet on: not a dramatic takeover, but a slow trade of thinking muscles for conversational architecture, until one day the skill simply isn't in the building anymore.

And the part every strategist should sit with: whatever frontier model you're using today — Opus 4.8, the latest Gemini, whatever GPT you reach for — is the *worst* version you will ever use. The capability only compounds from here.

So I've stopped laughing. The open question for me isn't whether the tools get good enough. It's whether, as the hard work becomes a coffee-break task, we'll keep enough people around who still know how to fix the machine when the magic stops.
