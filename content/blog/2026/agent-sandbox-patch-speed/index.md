---
title: "The real price of an agent sandbox is the team that patches it"
slug: "agent-sandbox-patch-speed"
date: "2026-11-07"
description: "Replit went through 6,211 Linux kernel advisories in five months to keep agent code contained. Ask who does that work before you pick a sandbox vendor or decide to build."
categories:
  - "technology"
tags:
  - "ai"
  - "ai-agents"
  - "security"
  - "infrastructure"
  - "engineering-leadership"
image: images/cover.svg
linkedin_hook: "Replit went through 6,211 Linux kernel advisories in five months to keep agent code contained. Whoever sells you a sandbox is either doing that work or leaving it to you."
takeaways:
  - "Ask your sandbox vendor how many hours pass between a kernel or hypervisor fix landing upstream and reaching your workloads. If they can't answer, assume weeks."
  - "Move credentials out of the sandbox. If an escaped agent finds no API keys, the escape is worth far less."
  - "Put egress filtering on the host side, where the workload cannot switch it off. Test it by trying to reach an unapproved domain from inside."
linkedin_question: "If an agent running in your sandbox were fully compromised tomorrow, what would it be able to reach, and who would find out first?"
---

A coding agent writes code and then runs it, often before any person has read it. That is why companies building agents end up needing a sandbox, a sealed environment where the code can run without touching anything that matters. Replit does this for hundreds of millions of projects, and it recently [described how it rebuilt its sandbox engine](https://frontier.replit.com/sandbox-engine-microvms-part-1/). The part I keep coming back to is a maintenance number. Between June 1 and November 4 it went through 6,211 Linux kernel vulnerabilities to work out which ones could affect its setup, and it reports that about 96% did not, either because the fix had landed upstream before disclosure or because its kernel configuration left the vulnerable code out.

Even so, at least 15 could have helped code escalate its privileges, and a team had to read all 6,211 entries to find them. When a company buys or builds a sandbox, that reading is the cost nobody puts in the budget, and it is what I want to talk about.

## A separate kernel for each sandbox is a stronger wall, and it still has bugs

Replit moved from Docker containers, which share the host's kernel, to microVMs, where each sandbox runs its own kernel under the hypervisor. A compromised guest then does not by itself compromise the host. That is a sound design, and I would choose it too.

It does not make the problem go away, though. In the same week a researcher published [a guest-to-host escape from Firecracker](https://pwn.ai/blog/firecracker-escape), a widely used microVM monitor, ending with root on the host. The write-up ran its test without Firecracker's jailer, the layer that drops privileges in production, and says what an attacker could reach behind it needs a separate assessment, so how bad this is in practice is arguable. That bugs exist at this boundary is not. I think of isolation strength as the quality of the wall multiplied by how quickly its operator can fix it, and buyers tend to inspect only the first half.

## A smaller kernel means fewer advisories, and a kernel of your own to maintain

Replit builds its guest kernel from a near-empty configuration, drops hardware support it does not need, and disables module loading. The obvious benefit is less attack surface. The less obvious one is that every subsystem it does not compile is a vulnerability nobody has to triage, which is how 676 of those 6,211 entries were dismissed on configuration alone.

The catch is that a custom kernel becomes a product you maintain, and the volume of advisories is high enough that reading them is a real job. I expect that volume to rise as AI makes bugs cheaper to find, the same pressure I described in [AI just raised the interest rate on your technical debt](/2026/ai-raised-the-interest-on-technical-debt/). Replit has the scale to justify a team for this. A company running an internal coding-agent platform usually does not, and should be honest with itself about that before choosing to build.

## Keep keys and network rules outside the sandbox, so an escape finds little

The design choice I found most useful is the one outside the VM. Egress filtering, DNS filtering and bandwidth limits run on the host, where the workload cannot turn them off, and credential brokers keep upstream API keys out of the sandbox altogether. If an attacker does get out of the guest, there are no keys to steal and the network only reaches approved places, so the wall can fail at a much lower price.

It is the same reasoning as [assuming your platform vendor will lose your secrets](/2026/assume-vendor-loses-your-secrets/): plan for the day the control breaks. The OpenAI model that [escaped its evaluation sandbox](/2026/blast-radius-of-a-goal/) is a reminder that agents may find that day sooner than people do.

## Rent the isolation, then ask the vendor these seven things

Most companies should buy this. Replit says four agent-infrastructure startups, Daytona, E2B, Runloop and Blaxel, raised $59.3 million between them this year, so there are vendors who do it full time. I could not verify Replit's figures beyond its own post, and the vendors differ a lot, so treat what follows as questions rather than a ranking. Before the demo, I would want evidence on each of these:

1. Name the isolation layer. Ask whether each sandbox gets its own kernel or shares the host's. With a shared kernel, the vendor's patch process is your entire security model.
2. Time the fix path. Ask how long a fix takes to reach your workloads after it lands upstream. Anything beyond a few days needs a compensating control.
3. Check where enforcement runs. Egress rules inside the sandbox can be rewritten by whatever runs in it, so insist on host-side enforcement.
4. Keep keys outside. Use short-lived tokens issued per task through a broker, never long-lived keys in environment variables.
5. Cap the blast radius per task. Give each agent run its own network scope and spend limit, then test by trying to exceed both.
6. Ask for the incident record. A vendor that has never disclosed anything has either been lucky or is not looking.
7. Rehearse the escape. Assume the sandbox fails once this year and run the drill: what does the agent reach, how fast do you notice, how fast do you rotate?

Isolation technology is improving quickly, but whether your team benefits depends on who is reading the advisories. If you want a second pair of eyes on an agent platform decision, that is what the [AI advisory hour](/work-with-me/) is for.
