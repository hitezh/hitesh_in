---
title: "Your AI agents need a ground stop, and a plan for the restart"
seoTitle: "AI agent kill switch: design the stop and the restart"
slug: "ai-agent-ground-stop"
date: "2026-11-14"
description: "The FAA halted every departure in the US for about four hours. Stopping took minutes, recovery took the evening. Most agent rollouts have only planned for the first half."
linkedin_hook: "On Friday the FAA stopped every departing flight in the US, with over 3,500 planes already airborne. The stop was the easy part. Is your agent kill switch tested for the restart?"
takeaways:
  - "Write down who may halt your agents without asking anyone, and what they are allowed to halt. If the answer needs a meeting, you do not have a stop."
  - "Count what is in flight when you stop: half-finished refunds, emails, ticket updates. That number is your restart cost, and it grows with autonomy."
  - "Decide in advance what keeps running during a halt, the way medical flights did. Do it before the incident, not during it."
linkedin_question: "If you paused every AI agent in your company right now, which of its half-finished actions would you have to clean up by hand?"
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai-agents"
  - "governance"
  - "infrastructure"
  - "engineering-leadership"
image: images/cover.svg
---

On Friday afternoon the FAA [ordered a nationwide ground stop](https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247) "due to extraordinary circumstances and for reasons of safety." It was issued at 3:54 p.m. Eastern and cancelled that evening, a little over four hours later. By then more than 7,000 flights had been cancelled, and Transportation Secretary Sean Duffy said over 3,500 planes had been in the air when it began. He blamed overloaded routers on an outdated air traffic control system. Homeland Security said it saw no sign of a cyberattack but could not fully rule one out. I can't verify the cause, and the facts may still shift.

What I find more useful than the cause is the shape of the event. A national system was able to halt, deliberately and everywhere, within about twenty minutes of the first instability being detected. Then it took the rest of the night to get moving again. Anyone planning to give AI agents real work should study that asymmetry.

## Somebody had pre-authorized the stop

Nobody convened a committee at 3:36 p.m. The stop is an existing power held by the Command Center, with a known procedure and a known audience (every aircraft operator reads the same advisory). It was ugly, expensive and still the right call, because the alternative was controllers working with unreliable radar and radio.

Most companies deploying agents have no equivalent. They have an off switch in theory, but nobody is named as allowed to use it, nobody knows what it covers (one agent, one workflow, the whole gateway), and using it feels like an accusation against whoever shipped the thing. In a real incident, the minutes lost deciding who may press the button are the expensive ones. The question to settle before launch is who can halt, how fast, and with what scope, and it should be settled while nobody is under pressure.

## Stopping is cheap and restarting is not

The 3,500 airborne aircraft are the interesting number. A halt on departures leaves those planes, crews and passengers in the system, and each one has to land somewhere with capacity. The [Reagan National and O'Hare reports](https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247) that evening were the restart cost showing up: aircraft and crews in the wrong cities, gates full, a queue of departures that all want to leave at once.

Agents have the same property, and it gets worse as they get more autonomous. An agent that is halted halfway through a workflow leaves a refund approved but not issued, a customer emailed about a change that was never made, a ticket closed with the fix unapplied. Each one is a small plane in the air. I made the case in [the autonomy budget](/2026/the-autonomy-budget) that small error rates compound across steps. The halt version of that is that in-flight state compounds too, and the person cleaning it up is rarely the person who built the agent.

This is the part leadership teams tend to underestimate. They test whether the kill switch works and never test what the world looks like ten minutes after it is used. The better test is to halt a staging agent mid-task and ask how many records need a human to decide what state they are in. If the answer is "we don't know", then the switch is a stop button with no plan behind it.

## Design what keeps flying

The ground stop did not stop everything. Duffy said medical flights, such as organ transplant flights, were not halted. That is a priority class somebody defined long before Friday, and it is the detail I would copy first.

A blanket halt on agents is rarely what you want either. Fraud detection should probably keep running while a marketing agent is paused. A read-only agent that summarizes tickets can stay up while one with write access to billing is stopped. This is [blast radius](/2026/coding-agents-blast-radius-job-title) applied to the off switch: the same scoping logic you use for permissions tells you what to halt first and what to leave alone. Decide the tiers while nobody is panicking.

## What I would put in place

1. Name who can halt each class of agent without approval, and put it in the runbook. If the answer is "the CTO, if reachable", add a second name.
2. Make the halt scoped. You should be able to stop one agent, one workflow or one vendor connection without stopping everything.
3. Log every action in a way that lets you list what an agent had started and not finished. If you can't produce that list in an hour, fix the logging before widening autonomy.
4. Write the restart procedure before launch: who verifies state, in what order agents come back, and what gets replayed versus abandoned.
5. Define the exemptions, the agents or functions that keep running during a halt, and say why.
6. Run a halt drill once a quarter and time two things: minutes to stop, and hours until the business is back to normal. Track the second number. It is the one that gets written up afterwards.

None of this assumes the agents are bad. The FAA runs one of the most safety-minded systems there is, and it still needed a stop procedure. A better agent gives you fewer incidents, and it does nothing about how the next one plays out.

If you are deciding how much autonomy to give an agent and what the stop and restart plan should look like, that is a good use of an [AI advisory hour](/work-with-me/).
