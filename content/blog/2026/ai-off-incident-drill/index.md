---
title: "Run your next incident drill with the AI turned off"
slug: "ai-off-incident-drill"
date: "2026-10-31"
description: "AI is absorbing the routine incidents that used to train on-call engineers. A timed drill with the AI off shows whether your team can still handle the one that matters."
linkedin_hook: "Endoscopists' unassisted detection rate fell from 28% to 22% after a stretch with AI help. Test whether your on-call engineers have the same problem."
takeaways:
  - "Replay a real past incident once a quarter with the AI off, and time how long your team takes to a correct first hypothesis."
  - "Before anyone asks the model, have them write their own hypothesis in the incident channel. It costs a minute and keeps the habit alive."
  - "Check that on-call can still reach logs and rollbacks when the AI vendor is down or its keys have been rotated."
linkedin_question: "When did your on-call team last handle a real incident without asking an AI first?"
categories:
  - "technology"
tags:
  - "ai"
  - "ai-agents"
  - "engineering-leadership"
  - "governance"
  - "infrastructure"
image: images/cover.svg
---

A study in The Lancet Gastroenterology & Hepatology, cited in a recent [SigNoz essay on SRE work](https://newsletter.signoz.io/p/ai-isnt-replacing-sres-its-deskilling), found that [endoscopists' unassisted polyp detection](https://www.thelancet.com/journals/langas/article/PIIS2468-1253(25)00133-5/abstract) fell from 28% to 22% after a period of working with AI assistance. They had not forgotten any medicine. They had stopped using the skill.

SigNoz asks the same question of site reliability engineers: if the AI resolves the routine incidents, the humans only meet the hard ones, with less practice than before. That is Lisanne Bainbridge's 1983 argument about automation, and I made the general case for it [in July](/2026/automation-is-cheap-understanding-is-the-bill). This post is about the operational version, because on-call is where the cost of getting it wrong shows up as an outage.

## The routine incidents were the training program

Restarting a crashed pod, scaling a service that is running hot, rolling back a bad deploy: these are boring, and they are also how a new engineer learns what normal looks like. They learn which dependency is flaky, which dashboard lies, and who to call. Senior judgment in a novel outage is built mostly from hundreds of unremarkable ones.

When an agent resolves those incidents, nobody sees the apprenticeship disappear. The hiring plan assumes senior engineers will keep appearing. The vendor's business case counts the hours saved and has no line for the experience that was never gained. Engineers who have only ever joined after the toil was automated are what the SigNoz piece calls never-skilled, and they will carry the pager for the incident nobody has seen before.

## The incidents that need humans tend to break the AI too

Think about what a truly novel outage looks like. A shared dependency fails. A vendor has an incident. Credentials expire or get rotated. A tool in the chain turns out to be compromised. Your AI diagnosis path depends on a model API, on credentials to read your logs, and on the network between them, and the events that break production can break each of those.

Two examples from this week alone. When a platform vendor [tells every customer to rotate their secrets](/2026/assume-vendor-loses-your-secrets), the keys your AI tooling uses to read telemetry are among the secrets in play. And a developer machine running [a backdoored editor extension](https://cursor.com/blog/claude-code-extension-security-notice) is a poor place to run an incident from. In both cases the humans and the AI fail in the same hour, so the fallback has to be people who can still work without it. Engineers describe watching two colleagues paste model output back and forth during a major outage. I can't say how common that is. I'd want to know whether it is happening on my team.

## Nobody believes a backup they have never restored

A backup you have never restored is a hope. On-call without AI is the same: you believe the team can do it, and nobody has checked. Backups get tested because the disk is rarely the problem on any given Tuesday, and the cost of being wrong on the one day it is the problem is enormous. The same arithmetic applies here, which answers the objection that the AI will be there 99.9% of the time. You are insuring the other 0.1%, and that is the part of the year that gets written up in post-mortems.

The drill is simple. Pick a real incident from the last year, replay it with the AI off, and time how long the team takes to reach a correct first hypothesis. Compare it with how the same team does with the AI on. The gap is a number most companies don't have, and it is a better indicator of readiness than any tool adoption metric.

## What I would put in place

None of this means giving up the tools. They are good at correlation across signals and tedious investigation, and they are getting better. It means keeping people able to do the job when the tools are not available.

1. Run an AI-off drill every quarter. Replay a real incident, time the first correct hypothesis, and track the gap against the AI-on baseline.
2. Ask for a hypothesis before a prompt. During real incidents, the person on point writes their own guess in the channel before consulting the model. It is the cheapest habit that keeps the reasoning alive.
3. Test the fallback path. Confirm that on-call can reach logs, dashboards, and rollback controls when the AI vendor is down, and when the keys your AI tooling uses have been rotated.
4. Keep the owners on call. Engineers who carry the pager for what they ship, including code an agent wrote, review that code differently from engineers who never get woken up by it.
5. Protect the apprenticeship. Put junior engineers on the first pass of routine incidents, with the AI as a reviewer afterward rather than the first responder.
6. Count it. Track how many incidents were resolved with no AI input and how long the first hypothesis took. A falling trend is an early warning, long before an outage shows it.

The measure of an AI-assisted on-call team is how it performs in the hour the assistant is unavailable.

If you are deciding how much incident response to hand to an agent, and what your team needs to keep practiced, that is a good use of an [AI advisory hour](/work-with-me/).
