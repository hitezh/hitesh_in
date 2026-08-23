---
title: "The hard part of agentic AI isn't the AI"
slug: "hard-part-of-agentic-ai"
date: "2026-08-23"
description: "Three of the five priorities in the new agent-protocol roadmap are plumbing: identity, authorization, transport. That is a signal about where enterprise AI actually stalls."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "ai-strategy"
  - "architecture"
  - "engineering-leadership"
image: images/cover.svg
draft: false
---

The Model Context Protocol [published its roadmap](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/) on August 22, and the notable thing about it is how little of it is about intelligence. MCP is the standard that lets an AI agent talk to your tools, your data, and your internal APIs. If you opened the roadmap for the connective tissue of agentic AI expecting reasoning, planning, and autonomy, you opened the wrong document. It reads like the minutes of an enterprise security review.

Count the five priorities. One is agent identity and authorization: proving which agent is calling, using OAuth, [proof-of-possession tokens](https://datatracker.ietf.org/doc/html/rfc9449), and workload identity federation instead of a shared API key. One is server-initiated messaging, so agents stop polling for results. One is unifying the transport on plain HTTP. That leaves two priorities for anything you would call AI, and even those are mostly about not drowning the model in a thousand tool definitions. Three of the five are plumbing. The intelligence is assumed. The integration is the frontier.

## We have run this movie before

Every integration wave I have worked through has had the same shape. CORBA, then SOAP and the WS-\* stack, then the enterprise service bus, then REST winning by being simple enough to ignore. In loyalty, retail, and banking, the smart part of a project rarely blew the timeline. What blew the timeline was authentication between two systems that each thought they owned the customer, a webhook that fired twice, a partner whose token expired at 2am. The reasoning was almost never the hard part. The hard part was always the same thing: who is allowed to touch what, and whether you can prove it afterward.

Agents inherit that problem and make it sharper, because an agent acts on its own initiative and at machine speed. A misconfigured integration used to leak slowly. An agent with the wrong permissions and a plausible goal can do a quarter's worth of damage before lunch. The roadmap is honest about this in the only way a spec can be: it spends its attention on identity and messaging, not on cleverness.

## Agent identity is the sleeper problem

"Give the agent an API key" is fine in a demo and radioactive in production. The moment an agent acts, someone has to answer a question that compliance, security, and your own auditors will all ask: on whose authority did it act, and can you prove that later? A shared key answers none of that. It cannot be scoped to a single task, it cannot be traced to a specific run, and when it leaks you rotate one credential and pray.

This is why the roadmap leans on boring, decades-old identity machinery rather than inventing something AI-shaped. It is the industry admitting that the interesting question about an enterprise agent is what it is allowed to do, on whose behalf, and how you reconstruct the trail when something goes wrong. Capability is the part you can buy. That other question is governance wearing a technical costume, and most organizations are worse at it than they think. I made a version of this argument about accountability when I wrote that [you don't deploy an agent, you hire one](/2026/you-hired-an-agent): the thing that makes an agent safe to trust is not its capability, it is the consequences it is exposed to.

## Don't marry the protocol

The sharpest voices in the discussion around the roadmap were the skeptics, and they were half right. One camp says you do not need any of this: a REST endpoint and a short instructions file already let a model call your API. Another says the versioning is immature, that every update is close to a breaking change, and that you should only build on standards that have survived three years in the wild. Both are describing real risk. Adopting an unstable standard early quietly transfers that instability from the vendor to you.

The useful move is to keep the protocol at arm's length rather than either betting on a winner or sitting the round out. Put a thin adapter between your systems and whatever agent standard you try, so the protocol is a detail you can swap, not a dependency you have married. Standardize inside your own walls on the capability, which is scoped tool access and a real identity per agent, and let the wire format be replaceable. That instinct is the same one behind [choosing boring technology on purpose](/2026/boring-technology-is-an-ai-strategy): let the fast-moving, load-bearing layer be the one you can most easily rip out.

## What this means for the person signing off

Here is the reframe I would put in front of a leadership team. The gate to useful enterprise agents is the state of your identity, authorization, and integration hygiene, and no vendor will fix that for you. Model capability, the part everyone fixates on, is the part you can rent, and it gets better on its own every few months. If your groundwork is a mess today, agents do not route around the mess. They industrialize it, at speed, with a plausible explanation attached.

That is why I keep telling founders and CTOs that [the model was never the moat](/2026/your-model-was-never-your-moat). The durable advantage, and the durable risk, sits in the layer this roadmap is actually about: who your systems trust, what they expose, and whether you can prove what happened. A roadmap that spends three-fifths of its attention on plumbing is telling you, plainly, where the real work is.

If you are trying to work out which agent opportunities your identity and integration groundwork can actually support today, that is exactly the conversation I have in an [AI advisory hour](/work-with-me/).
