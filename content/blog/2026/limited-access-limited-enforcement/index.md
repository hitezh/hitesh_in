---
title: "A limited shell account is only as limited as the software enforcing it"
slug: "limited-access-limited-enforcement"
date: "2026-10-28"
description: "Tailscale is patching SSH flaws that let an authorized user exceed their account. Before you give an AI agent a scoped shell, ask what enforces the scope."
categories:
  - "technology"
tags:
  - "ai"
  - "ai-agents"
  - "security"
  - "infrastructure"
  - "governance"
image: images/cover.svg
draft: false
---

On October 25, a researcher named Erica Windisch published a report called Tailworm, describing 11 findings in Tailscale and the open-source headscale server, most of them in Tailscale SSH. Her lab tests, run on [Tailscale 1.104.2](https://thehackernews.com/2026/10/unpatched-tailscale-ssh-flaws-could-let.html), showed a person who is allowed to log in as an ordinary user reaching root on the same machine. Tailscale has not confirmed every claim in the report. Its [own update](https://tailscale.com/ssh-investigation-update) calls the issues serious, says most of them are privilege escalation, and promised a patched client by the end of October 27. Check its security bulletins for where that stands.

I'm not a security researcher and I'm not going to grade the exploit. What interests me is the shape of the flaw, because it is the same shape as the decision many companies are about to make with AI agents.

## Authorized and contained are different properties

Tailscale SSH answers one question very well: who may connect to this machine. Identity comes from your login provider, rules live in one policy file, and nobody manages keys. That is a real improvement over the shared-key sprawl it replaced.

It does not, by itself, answer a second question: once connected, what can this person become? That answer depends on the local account, and on the software that keeps a session inside that account. The reported issues sit in that second layer. Someone already trusted to be on the box as a limited user could allegedly climb out of the limit.

In my experience, teams review the first layer carefully and assume the second. The policy file gets code review. The daemon that enforces it gets a version number. Those two things deserve different amounts of paranoia, and they rarely get it.

## Convenience consolidates trust

The appeal of tools like this is that they collapse several controls into one: network access, identity, and shell. Fewer moving parts is a fair thing to want. It also means defense in depth quietly turns into defense in one. The traditional setup had separate, boring components, each hardened over decades, and a failure in one did not hand over the others. Here a single process that runs as root on every host holds all three jobs.

I'd still use it. Plenty of teams are safer with a well-run identity-aware layer than with the key spreadsheet they had before. The mistake is to count the consolidation as free. When you adopt one component for three jobs, you've also decided that component gets patched within hours, on every machine, every time. Most fleets cannot say that about anything.

## Agents make "authorized but untrusted" the normal case

Leadership teams tend to underestimate this part. A human contractor with a limited shell account is rarely hostile, so privilege escalation from that account is mostly a theoretical insider risk. An AI agent with the same account is different. It reads web pages, tickets, and log files written by strangers, and any of them can try to steer it. I wrote about [what a goal can reach once an agent has tools](/2026/blast-radius-of-a-goal/), and the same logic applies here: the agent's shell scope is the blast radius, and the blast radius is only as real as its enforcement.

So the useful design assumption for an agent is that it will occasionally act as an untrusted party who happens to be authorized. A flaw that lets such a party exceed its account stops being an edge case. It is the main case.

## What I would change on Monday

- Put agents on disposable machines. If the box holds nothing and can be rebuilt in minutes, an escalation to root costs you very little. This works whatever the next vulnerability turns out to be, which is why I prefer it to any single mitigation.
- Ask for the second answer in writing. For every tool that grants agents or vendors shell access, name what enforces the account limit, who patches it, and how long that takes. If the answer is "the same daemon that grants the access," treat the limit as a hope until you've tested it.
- Keep one independent control. An old-fashioned, separate layer, such as short-lived credentials or host-level monitoring that does not share code with your access tool, is cheap insurance against a shared flaw. This is the [autonomy budget](/2026/the-autonomy-budget/) argument applied to infrastructure: how much freedom you grant should follow how much a single failure can reach.

There is a vendor lesson too. When an access layer fails, you inherit the vendor's patch schedule, the same dynamic I described when [your AI gateway holds every key](/2026/your-ai-gateway-holds-every-key/). Read an interim statement like Tailscale's for what it commits to. It names a time, it gives a mitigation you can apply today, and it declines to tell everyone to switch the feature off. That is a reasonable response, though not one you should have to rely on.

The practical question for this week is short: which of your agents, contractors, or automation jobs hold a shell today, and what exactly stops them from being more than their account says? If you're mapping that out for an agent rollout, an [AI advisory hour](/work-with-me/) is a good place to pressure-test it.
