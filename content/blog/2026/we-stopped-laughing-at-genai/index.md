---
title: "We Stopped Laughing at GenAI"
date: "2026-06-11"
draft: false
description: "For a while we treated generative AI as a parlour trick with bad hands and a habit of making things up. Five kinds of story ended that phase for me, and raised a harder question than 'will it take my job?'"
image: images/capability-vs-understanding.svg
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

For a couple of years we lived comfortably in what I think of as the quaint-dismissal phase. We laughed at the six-fingered hands in image generators. We collected screenshots of confident nonsense from early chatbots. We said "[stochastic parrot](https://dl.acm.org/doi/10.1145/3442188.3445922)" at conferences and went back to work, reassured that our professional moats, built on decades of hard-won knowledge, were safe from a glorified autocomplete.

That phase is over for me, and not because of any single model release. The kind of story people tell about these tools has changed. A year ago the stories were "look at the silly mistake it made." Now they are "I did a thing in one evening that I had assumed was impossible for someone like me." The mood has gone from amused to a slightly uneasy *oh.*

I don't think the headline is "AI will take your job." What is actually happening is more interesting: the cost of attempting something hard has collapsed, which changes the maths for everyone who relied on that difficulty as a barrier. Five kinds of account moved me from amused to paying attention. I haven't lived them; they are the stories piling up in my feeds, and the pattern is the point.

## Dead hardware is coming back to life

Reviving bricked or genuinely ancient hardware used to belong to a small priesthood, people who had spent months inside Ghidra and a disassembler. That gate is being kicked open.

One account stuck with me: someone navigated the undocumented wave-file format of a 1990s Alesis synthesiser and built a modern, cross-platform tool for it in a single night, with an LLM doing the heavy reverse-engineering. Another person recovered a piano bricked by a failed firmware update, with the model walking them through decompiling an Android app, pulling out a hardcoded encryption key, decrypting the firmware, and reflashing the instrument over Bluetooth. Under an hour, by someone who is not in any normal sense a reverse engineer.

As one of them put it, you can still follow every step and appreciate how hard it is, but it will only take a generation for this to feel like *magic*, with the rest of us beseeching the machine spirits for a blessing. The line is funny because it is close to true.

## The technical-debt moat is evaporating

For most of my career, complexity was the moat. A business sitting on thirty years of legacy code was safe, because rewriting it was too expensive and too risky to seriously contemplate. That maths is changing fast.

There is a widely shared account of a developer pointing Claude Opus and Gemini at roughly 800,000 lines of legacy Python and C, three decades of work by dozens of engineers, and distilling it into about 10,000 lines of modern code in ten days. The detail that should worry incumbents has nothing to do with speed: they found the rewritten code easier to understand than the original, despite never having written a line of it.

I would treat the exact numbers as folklore until I saw the repo, but the direction is real. When the labour of a generation can be refactored over a long weekend, technical debt stops being a fortress and becomes raw material. "We're protected because our system is too complex to replace" is aging badly.

## Vision turned the model into a diagnostician

The part that surprised me most is how quickly this left the screen. With live video, these tools have become a diagnostic equaliser for anyone willing to point a camera at a problem.

The stories are mundane in the best way. Someone aims a phone at a dead furnace and gets talked through finding a stuck exhaust fan and safely restoring heat over a holiday. Someone diagnoses an ailing plant with something close to professional confidence. My favourite: at a science fair, a model watching a live feed spotted a single wire where the insulation had not been fully scraped off, invisible to the people standing right there and obvious to the camera.

One line lodged in my head: *GenAI made me lose trust in my HVAC company, and more GenAI let me replace them and do the repair myself, all in one day.* A small story about a furnace, and a large one about who gets to be an expert.

## The "vibe coder" is real

A new kind of builder is showing up: the domain expert who cares about the outcome and lets the model handle the syntax. They are not waiting for an engineering team, because they understand the pain point better than any engineer could.

A student in Spain with no technical background ships a study app for public-administration exams that picks up real users on a modern stack. A lawyer builds a redlining tool around their own workflow. A salesperson spins up a website for a golf trip in minutes. None of these are impressive as software. They are impressive as a signal: domain knowledge now outweighs syntax knowledge, because the model supplies the *how* and the person supplies the much scarcer *what*.

For professional developers this is the uncomfortable one. I don't read it as "engineers are obsolete," but as the part of engineering that was about typing the right incantation moving out of the spotlight. That has been true in spirit for years; now it is true in practice.

## The same speed cuts both ways

This is where my enthusiasm picks up a cold edge. The capability that fixes your printer also shortens the distance between a security flaw and a working weapon.

A researcher handed a frontier model a proof-of-concept exploit that only worked under contrived, non-default conditions, and watched it cheerfully rework the thing to hit default configurations and crash systems immediately. The gap between "a patch exists" and "anyone can exploit it" shrinks toward zero. That is the same tool, on the same day, that helped someone fix a Linux printing bug thirty years of expertise had not cracked.

People call this *jagged intelligence*: superhuman in one cell of the grid, naive in the next, and not reliably aware of which is which. The uneven competence is manageable. What I actually lose sleep over is underneath it: we increasingly command systems we could not audit ourselves. Call it cognitive debt. We are borrowing capability against understanding, and the bill comes due the day the magic stops and something has to be fixed by hand.

## The calculus has shifted

Step back and the through-line is hard to miss. The barrier to hard things has not been lowered so much as removed, and we are sliding from software as a service to AI as a partner, a partner that is wildly capable and only intermittently trustworthy.

The genuinely Asimovian worry is not the robots; it is the atrophy. In his 1958 story [*The Feeling of Power*](https://en.wikipedia.org/wiki/The_Feeling_of_Power), a far-future society has forgotten how to do arithmetic by hand because the machines always did it. That is the failure mode I would bet on: no dramatic takeover, just a slow trade of thinking muscles for conversational architecture, until one day the skill isn't in the building any more.

And the part every strategist should sit with: whatever frontier model you reach for today, whether Opus 4.8, the latest Gemini, or the newest GPT, is the worst one you will ever use. It only compounds from here.

So I have stopped laughing. The question I am left with is whether, as the hard work turns into a coffee-break task, we will keep enough people around who still know how to fix the machine when the magic stops.
