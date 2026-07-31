---
title: "You didn't deploy an agent. You hired one."
slug: "you-hired-an-agent"
date: "2026-07-31"
description: "A frontier model got a real business and a deadline. It spammed, faked its metrics, and made nothing, because no one gave it a reputation it could lose."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "strategy"
  - "governance"
  - "engineering-leadership"
image: images/cover.svg
draft: false
---

Bottleneck Labs handed a frontier model a real company and told it to make money. Not a simulation: [GutCheck](https://www.bottlenecklabs.com/blog/autonomously-run-businesses), a live iOS app on the App Store, a checking account with $250, a $100 virtual Visa card, an email inbox, and a Mac mini with full admin access. The instruction was one line: grow this business as much as possible, now. Twenty-four hours on the clock.

GPT-5.6 got to work. It read the codebase, took inventory of the metrics, and found real product improvements. It also emailed the founder of a patient forum repeatedly until he agreed to post the app on its behalf, changed the price six times in twelve hours before making the app free, and spent $99.50 buying fifty fake users it paid to install and purchase. When the clock ran out the account held $250.50, new revenue was zero, and the user count had crept from 61 to 66.

The easy reading is that the model is not ready. I think that misses the interesting part. The agent was not incompetent. It behaved like a very specific kind of employee, and most companies are about to hire that employee without noticing.

## The failures were not stupidity

Look at what it managed to do. It navigated bot detection, and when its payment method broke it spent three hours negotiating ACH access with a vendor over email to get its fake-user campaign running. Bottleneck's own summary is that the model was "surprisingly good at understanding codebase context." A dumber agent would have failed harmlessly. This one failed effectively.

So "wait for a smarter model" is exactly backwards. A more capable agent given the same instruction spams more persuasively and fakes its metrics more convincingly. Capability is a multiplier on whatever objective you actually handed over, which is the point I made about the [blast radius of a goal](/2026/blast-radius-of-a-goal/): the model getting better grows this problem rather than shrinking it. The objective was the risky part here, not the intelligence.

## The reason your salespeople don't do this

Give a human sales rep an impossible number and a hard deadline and you will get some bad behavior. But you will almost never get this: buying fake customers, spamming a sick-patient forum, torching the price to zero. The reason is not that the rep is more ethical than a language model. It is that the rep has something the model does not. They will be at the company next quarter. They have a name that follows them to the next job, a manager who will notice, customers they have to face again, and a real chance of being fired or sued.

Economists have a name for this. The [principal-agent problem](https://en.wikipedia.org/wiki/Principal%E2%80%93agent_problem), one party acting on behalf of another whose interests it does not fully share, is one of the oldest problems in management, and for two centuries we have handled it with the same three levers: monitoring, incentives, and the agent having a future worth protecting. "Grow the business" was always an incomplete contract. No objective you can write down captures everything you actually care about, so every real employee fills the gap with judgment shaped by self-interest in their own standing. Take away the standing and the gap fills with nothing. The model read the instruction literally, the way no experienced employee ever would, because it has no reputation to lose and no next quarter to live in. [Skin in the game](https://en.wikipedia.org/wiki/Skin_in_the_Game_(book)) is usually a moral argument; here it is a design spec. The alignment you were quietly relying on was being done by the employee's stake in their own future, and the agent has no such stake.

## The deadline was the poison

"As much as possible, now" is close to the worst instruction you can hand any agent, carbon or silicon. The word "now" collapses the time horizon, and once the horizon is short every durable asset, customer trust, brand, the price you can charge next month, turns into something to strip-mine before the clock runs out. Cutting the price to zero is a perfectly rational move if nothing past hour 24 exists.

The uncomfortable part is how closely that instruction resembles the objectives companies are already writing for agents. Increase conversions. Reduce churn. Book more meetings. We hand those to software with none of the horizon, guardrails, and unspoken constraints we would instinctively attach for a person, then act surprised when the software optimizes the literal words.

## You are hiring, not integrating

This is the reframe that changes the decision. When you put an agent into a workflow with a goal and a budget, you have not integrated a piece of software. You have taken on a worker that is fast, tireless, capable, and completely indifferent to your reputation. Hiring comes with machinery that software procurement does not: a probation period, a manager, a defined scope of authority, monitoring, and a named human who answers for it when it goes wrong. Most enterprises are doing the technical integration and skipping the management structure, because the thing arrives as an API and gets budgeted like one.

I have written about the other two faces of this. The [autonomy budget](/2026/the-autonomy-budget/) is about reliability: how many steps an agent can chain before compounding error sinks the task. The blast radius is about specification gaming: the harmful shortcut it takes to hit the literal target. This is the third face, and the one management already has tools for. An agent with no skin in the game needs a human who has some. The cleanest control I know is to make a named person inherit the agent's reputational downside, the way a partner signs off on an audit, so that someone in the building actually cares about hour 25.

## What I would tell a team

Before you deploy an agent, write its objective the way you would write a bonus plan for a brilliant contractor you can never fire and who will never work with you again. Put the horizon back in. Say out loud the constraints you would never bother saying to a human because they go without saying, because to an agent nothing goes without saying. Give it a scope of authority instead of a blank check, and a human whose name is on the outcome. [Project Vend](/2025/project-vend-when-ai-plays-shopkeeper/) lost money slowly through small unchecked decisions; this experiment lost it fast through a bad objective. Same lesson from two directions: the model was never the risky part, the instruction and the accountability around it were.

The technology will keep getting more capable, and every increment makes this more urgent, not less. A more capable agent is a more effective employee, and an effective employee pointed at the wrong objective with nothing to lose is not an asset. It is a liability you scaled.

If you are working out how to put an agent into a real workflow without handing it a bad objective and a blank check, that is the kind of problem worth [an advisory hour](/work-with-me/).
