---
title: "An AI agent filed a false murder tip. It took 72 days to notice."
slug: "ai-agent-false-tip-72-days"
date: "2026-10-10"
description: "A test model submitted a fake tip to Philadelphia's unsolved-murder site. The lesson for leaders is about outbound actions, detection time, and controls you borrow from others."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "governance"
  - "security"
  - "ai-strategy"
image: images/cover.svg
draft: false
---

On July 18, an Anthropic model running an automated test [submitted a false tip](https://www.nbcphiladelphia.com/news/local/anthropic-ai-model-submits-false-tip-on-unsolved-philly-murder-police-say/4477051/) on an unsolved Philadelphia homicide, through the police department's public tip site. According to NBC10, the test involved interacting with randomly selected websites, and this was one of them. Anthropic found it on September 28, shut the process down, and told the police on October 7.

Nobody was harmed. The tip landed in a spam folder, and police say nothing is acted on without human review. But look at the timeline: 72 days from submission to discovery, nine more to tell the people affected. That gap is the story, and it applies to anyone running agents, not only the lab that got caught.

## Your agent's blast radius ends at someone else's system

Most agent rollout plans focus on what the agent can do inside the company's own walls: which databases it reads, which tickets it closes. Far fewer list what it can do to *other people's* systems. A form submission, an email, a comment, a booking, an API call to a partner. Every one of those is an action with a recipient who never agreed to deal with your software.

In this case the recipient was a police tip line, which is about the worst place to send fabricated information. A support inbox or a vendor's order form would have been less dramatic and exactly as unmonitored.

## The control that worked belonged to someone else

Read what stopped this from becoming a real problem. Police review tips before acting, which is a sound process. And the email notification went to spam, which is luck. Neither was designed by the company whose agent sent the tip.

That is the pattern I would worry about in any enterprise rollout. A lot of agent risk gets waved off with "a human reviews it downstream." Maybe. But that human works for somebody else, has their own volume problem, and has no idea your input came from a machine. If your safety argument depends on your counterparty's filters, you don't have a safety argument. You have a hope.

It also means the cost of agent-generated input is not zero for the receiver. Forms, tip lines, and contact pages were all built on an unstated assumption that sending something takes a person some effort. Agents remove that effort, and the receiving side pays for the difference. I made a related argument about [agents as customers](/2026/your-next-customer-is-an-agent/): the other end of your agent's action has to be legible to it, and you are now responsible for what happens when it isn't.

## Track time-to-notice, not accuracy

Teams measure agent quality with evals, task success, and cost per run. Almost nobody measures how quickly they would find out that an agent did something it should not have done outside the system. Ten weeks is a long time for that. A company with thinner logging and no safety team watching could easily take longer, or never find out.

I would put one question on the agenda of any leadership team shipping agents: if an agent sent something wrong to a customer, a regulator, or a public website today, how would we learn about it, and how long would that take? If the honest answer is "when they complain," that is the real state of your governance, whatever the policy document says.

## "It's only a test" is not a scope

A fair question to ask is whether this test needed live write access to the open web at all. Anthropic says it added a validation mechanism afterward. Scoping the access first would have been cheaper.

Teams do this all the time. A pilot runs with production credentials because it is faster, and "pilot" becomes a reason to skip the review a production system would get. An agent with an outbound action is a production system from its first call, because the people on the receiving end can't tell the difference.

## What I would do on Monday

If I were advising a company with agents in flight, I would ask for three things:

1. An inventory of every write action each agent can take outside the company, with an owner for each.
2. A log of those outbound actions that a person actually reads, and an alert for anything unusual.
3. A named contact and a one-page procedure for the day an agent sends something it shouldn't, written before that day.

None of that needs a bigger model or a new platform. It needs someone to decide that outbound actions are part of the product. I wrote earlier that [you didn't deploy an agent, you hired one](/2026/you-hired-an-agent/): an employee who can email strangers on your behalf gets an access review and a manager. An agent should get the same. And as I argued after the [Derbyshire evidence case](/2026/when-the-evidence-is-ai-generated/), trust layers designed for human effort fail quietly when machines start feeding them.

Fortunately the Philadelphia story ended in a spam folder. The next one may not, and it may not involve a lab with a safety team that eventually checks. If you are working out where your own agents can act and who would notice when they get it wrong, that is exactly the kind of problem I take on in an [AI advisory hour](/work-with-me/).
