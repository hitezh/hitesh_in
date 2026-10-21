---
title: "AI automated your apprenticeship program"
slug: "ai-automated-apprenticeship"
date: "2026-08-13"
description: "The debate over whether juniors or mid-levels are safe misses the real risk: AI commodified the exact grunt work that used to turn people into senior engineers."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "software-engineering"
  - "hiring"
  - "leadership"
  - "future-of-work"
image: images/cover.svg
draft: false
---

The current argument about AI and engineering careers runs along one axis: which tier is safe. One popular version says the [middle class of software engineering is being wiped out](https://blog.florianherrengt.com/ai-removing-middle-class-software-engineering.html), that solid mid-level implementation work is now commodity output from an agent, so good engineers get more valuable and average ones get more expensive to justify. It's a sharp observation and mostly right. It also aims at the wrong horizon.

Whichever rung is exposed today, a CTO should be losing sleep over something further out: where the next senior engineer comes from, once the work that produced seniors is the first thing you handed to a machine.

## Seniority was a byproduct, not a hire

Nobody is born knowing which database denormalization will haunt you in eighteen months. You learn it by shipping the denormalization, watching it rot, and spending a bad week untangling it. Senior judgment is the residue of a few hundred of those small disasters. The apprenticeship was never a training program with a budget line. It was the ordinary grind of building things, badly at first, under someone slightly more scarred than you.

That grind is exactly what AI now does in minutes. The junior no longer writes the naive query and feels it get slow. The agent writes a competent query on the first pass. This looks like pure progress, and in output terms it is. But the naive query was the lesson. We have automated the work and kept the job title, and deleted the years in between that turned one into the other.

## The market you plan to buy from is fixed

The comfortable response is to stop growing seniors and just hire them. If mid-level work is commodity, buy the judgment you need at the top and let agents do the rest. That plan has a supply problem it doesn't survive.

Senior engineers are a fixed and slowly shrinking pool. You cannot mint one in a quarter, and if the whole industry stops feeding the bottom of the funnel at once, the funnel runs dry on a five-to-ten year delay that nobody feels until it's too late to fix. The bifurcation the source article describes, elite talent commanding a premium while average talent gets priced out, is not a stable equilibrium. It's the first year of a market where the scarce good gets scarcer because everyone stopped manufacturing it. "Just hire seniors" is a plan that clears at a price no one can pay.

I spend a lot of my advisory time arguing that [most companies should buy before they build](/2026/your-model-was-never-your-moat) their AI capability, because the buy option is real and cheap. Talent is the one place that logic inverts. There is no vendor selling you a ten-year engineer, and the ones that exist are about to get a lot more expensive.

## You automated the thing you now depend on

Here's the part that should worry the leadership teams celebrating their velocity numbers. The industry has decided, correctly, that [reviewing AI output is the real job now](/2026/reviewing-is-the-job). The constraint moved from writing code to judging it. Fine. But reviewing well is not a separate skill you can hire around the building skill. You review a schema change well because you have shipped bad schema changes. You smell the load-bearing hack because you wrote one at 2 a.m. once. The reviewing you're now betting the company on is downstream of the building you just stopped letting people learn.

So the two moves compound the wrong way. You automate the building, which starves the pipeline of judgment, and then you promote everyone into a reviewing role that only judgment qualifies them for. It works for exactly as long as your current seniors last. This is a version of a pattern I keep [seeing across AI adoption](/2026/hardest-work-not-messiest): the machine takes the verifiable, structured work and leaves the human the part that requires having done the structured work for years. If you never do the years, the human half has nobody to hand it to.

## Treat talent like a build decision

None of this is an argument against the tools. It's an argument for treating your seniority pipeline as an engineered system rather than something that happens to you. A few things I'd change if I were advising a team on this today.

- **Reserve deliberate difficulty.** Keep some work slow on purpose. Let a mid-level engineer struggle through a problem the agent could finish in a minute, and book the lost hour as training cost, not waste. The struggle is the asset. A team that AI-completes everything is optimizing this quarter's throughput by mortgaging its own bench.
- **Move juniors up the stack early, not out the door.** Cutting junior hiring to save money is eating your seed corn. Change what juniors do instead. Give them the agent as the implementer and put them on supervised judgment reps sooner: reading diffs, reproducing bugs, defending a design out loud. Fewer typing hours, more deciding hours, with a senior watching.
- **Watch your internal promotion rate as a leading indicator.** If every senior on your team was hired, not grown, you don't have a staffing plan, you have a supply-chain risk with a long fuse. Track the ratio the way you'd track any dependency you can't buy on demand.

The firms that win the next decade of engineering won't be the ones that adopted agents fastest. Adoption is table stakes and the tools converge. They'll be the ones that figured out how to keep manufacturing judgment after they automated the assembly line that used to produce it as a side effect. That's a management problem, not a model problem, and it's the kind of thing I like to help teams reason through before the funnel runs dry. If you're staring at rising velocity and a thinning bench, that's a good conversation to have now, not in five years. You can [book an advisory hour](/work-with-me/) whenever it's useful.
