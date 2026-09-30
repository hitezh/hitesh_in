---
title: "Delhi cut power theft from 50% to 5%. That's your AI governance playbook."
slug: "meter-before-the-model"
date: "2026-09-30"
description: "Delhi's utilities spent two decades making every unit of lost power attributable to a named owner before losses fell. Most AI rollouts skip that step first."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "governance"
  - "infrastructure"
  - "india"
image: images/cover.svg
draft: true
---

Delhi's electricity distribution companies lost more than half of every unit of power they bought in 2002, with grid reliability sitting near 70 percent. By this year, losses are down to about five percent and reliability is above 99.9 percent. [IEEE Spectrum tells it](https://spectrum.ieee.org/delhi-electricity-loss) as an engineering story: SCADA systems, smart meters, insulated cable. Read past the headline and a different story shows up. The engineering arrived late. What came first was a meter and a name attached to every loss.

## The loss was mostly theft

The industry has a euphemism for the 2002 number: aggregate technical and commercial loss. The honest description is theft, dressed up in an acronym. Line loss and transformer inefficiency don't get anywhere near fifty percent on their own. Most of that power left through illegal connections nobody could pin to a bill, in neighborhoods where the utility's own linemen had no reason to look hard, because nobody's job depended on the number going down.

Privatization in 2002 split Delhi's old state board into Tata Power on one side and BSES on the other. The private-versus-public framing this usually gets filed under misses the actual mechanism: the split put a name on every feeder. A state monopoly with nobody accountable for one specific loop of wire has no urgency about theft on it. A company that eats every unit it can't bill does. Somebody now owned the number. The twenty-year grind that followed, insulated cable, capacitor banks, local collectors hired to work high-loss slums, traces back to that one change.

## Shadow AI is the same loss, dressed differently

I keep meeting companies that can tell you their total AI spend to the dollar and cannot tell you which team, which workflow, or which agent produced it. That's AT&C loss with better branding. The waste isn't invisible because it's small. It's invisible because nothing attributes it to an owner. A model call that burns forty thousand tokens re-reading the same file, an agent retrying a failed action overnight, three overlapping copilot subscriptions nobody consolidated: none of it shows up until someone can point at a meter and say whose number it is.

The reflex in most boardrooms is to treat this as a security problem: lock down which tools people can use, ban unsanctioned models, route everything through one approved gateway. Useful, but it answers the wrong question first. Delhi didn't fix theft by banning illegal wires before anything else. It fixed theft by making every unit attributable, then handing someone the bill. [Tagging cost to the caller](/2026/count-your-systems/) is the same discipline Shopify used to find the connection pool eating its checkout throughput, just run at company scale instead of query scale. A policy memo about acceptable AI use rarely changes behavior. A number somebody has to explain in front of their boss does.

## Smart meters arrived fifteen years late, on purpose

Delhi's smart meters didn't show up in 2002. They showed up in 2017, after electronic meters, automated readings, and a decade of unglamorous cable work and enforcement had already dragged losses from the 50s into the teens. Instrumentation followed accountability by fifteen years.

Most companies buying AI observability dashboards right now have that sequence backwards. They're instrumenting a system nobody owns yet, hoping the dashboard manufactures the accountability that was supposed to come first. A meter on a feeder nobody is responsible for just produces a number nobody acts on. As BSES's own CEO, Abhishek Ranjan, [put it](https://spectrum.ieee.org/delhi-electricity-loss): sustainable loss reduction never comes from technology alone, it comes from disciplined execution and operational accountability alongside it. That line works better in a board meeting than anything an AI vendor will hand you, and it's the same case for [choosing dull, well-understood tools](/2026/boring-technology-is-an-ai-strategy/) over the fanciest observability platform on the market: the tool only earns its keep once someone is on the hook for what it shows.

## The clock runs longer than a fiscal quarter

One detail got buried under the celebration: Delhi isn't done. Illegal e-rickshaw charging is still running up losses in some pockets, twenty-four years in. Nobody in that story treats an unfinished turnaround as failure, because everyone involved understood the timescale going in.

Compare that to how most enterprises fund AI initiatives: a pilot budget that expects payback inside two quarters and gets killed the moment it doesn't arrive. [The autonomy you can safely hand an agent compounds the same way loss reduction does](/2026/the-autonomy-budget/): slowly, unevenly, and only once someone has ground through the boring middle of the problem long enough for the compounding to show up on a chart. Budget AI adoption like a product launch and you'll cancel the program right before the part that pays off.

## What I'd tell a board

Before the next model upgrade, ask a duller question: for every dollar of AI spend in this company, who is the named owner, and can they see their own number? If the honest answer is nobody, you have Delhi's 2002 problem, just running on GPUs instead of copper. Meter it, name an owner for every meter, and let the technology show up once the accountability already exists. That's the order that actually worked, twenty years and one grid ahead of you.

*If your AI spend has grown faster than anyone's ability to say who owns which piece of it, that's exactly the kind of problem my [advisory hour](/work-with-me/) is built to work through.*
