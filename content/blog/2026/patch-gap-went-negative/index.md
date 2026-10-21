---
title: "The patch gap just went negative"
slug: "patch-gap-went-negative"
date: "2026-08-29"
description: "Defenders long assumed disclosure bought them time to patch. AI closed that window. The scarce resource in security was never the exploit, only knowing where to look."
image: images/cover.svg
categories:
  - "technology"
tags:
  - "ai-security"
  - "software-engineering"
  - "engineering-leadership"
  - "strategy"
draft: false
---

A security researcher named Anil Madhavapeddy opened a public pull request last week to fix a path-traversal bug in a widely used OCaml web library. Within minutes, his own server logs showed [probes using the exact bug pattern](https://anil.recoil.org/notes/rumour-is-the-exploit) he had just described in the PR. He had not published an exploit. He published a fix. The fix was enough.

For most of the history of software security, that sequence ran the other way. A flaw got disclosed, defenders got a head start measured in weeks, and only later did working exploits circulate. People even track the number. The [mean time to exploit](https://anil.recoil.org/notes/rumour-is-the-exploit) was around 63 days in 2018. It crossed zero in 2024. In some recent cases it now runs negative, meaning a working exploit is live before the patch reaches the people who need it.

What changed is not that AI writes exploits. Exploits were never the expensive part.

## The scarce input was direction, not skill

One study makes the reframe concrete. In [2024, researchers gave GPT-4](https://arxiv.org/abs/2404.08144) a set of real one-day vulnerabilities. Handed the CVE description, the agent built working exploits for 87 percent of them. Handed the same targets with no description, it managed 7 percent. The description was worth more than a tenfold jump.

Sit with that gap. The hard part of attacking software was never writing the exploit once you knew what you were hunting. The hard part was knowing where to look, and it was hard because it took a skilled human squinting at unfamiliar code for hours. AI made that direction cheap. A fix is direction. A changelog line that says "resolved a crash in the parser" is direction. A commit message is a map with an X on it.

That is why a rumour is now enough. An agent does not need your exploit. It needs a hint about which door is unlocked, and it can try the handle far faster than you can change the lock.

## Attack is search. Defense is throughput.

There is an asymmetry here that I don't think most leadership teams have priced in, because attacking and defending are different shapes of problem and AI is much better at one shape than the other.

Attack is a search problem. You need one unlocked door out of a thousand, you can try all thousand at once, and a single success wins the round. That is exactly the work you can point a fleet of agents at. Defense is a coverage problem. You have to fix every door, confirm each fix did not break the house, ship it, and then wait for everyone downstream who copied your lock to update theirs. One job is embarrassingly parallel. The other is a pipeline with a human validating the output at the far end.

AI speeds up the search far more than it speeds up the pipeline. So the same capability makes offense cheaper faster than it makes defense cheaper, and the bottleneck moves from generating the exploit to a defender's remediation throughput. That is not a gap you close by buying a better scanner. It is an organizational speed problem wearing a security costume.

## What this changes for the people making the calls

The uncomfortable part for executives is that most companies were carrying an invisible line item: the assumption that disclosure buys you time. Call it security float. You could batch patches into a maintenance window, run the upgrade next quarter, get to the dependency bump next sprint, because the gap between known and exploited was weeks wide. AI just called that loan. The float is gone, and the risk it was hiding is now on your books at full value.

Three things follow, and none of them is a product you can buy.

**Remediation velocity is now a security control.** The number that matters is how fast you get from "a fix exists" to "the fix is running everywhere it needs to run." If that is measured in weeks, you are exposed for weeks. Chrome ships security fixes to a billion users in days; plenty of enterprises cannot patch their own internal services that fast. Closing that gap is the same execution muscle that decides [how quickly a company learns anything else](/2026/how-fast-your-company-learns).

**Every dependency you carry runs on someone else's disclosure clock.** The more third-party code you embed, the more your exposure is set by other people's commit histories, on their schedule, not yours. This is the unglamorous case for [carrying fewer moving parts](/2026/count-your-systems) and keeping the ones you keep current. Few and up to date now beats clever and sprawling on a security axis, not just a maintenance one.

**Your transparency is targeting data.** The public commit history that makes open source trustworthy is also a map for an agent. I don't think the answer is secrecy. Embargoes leak, and as [the YouTube case showed](/2026/the-vulnerability-google-wont-call-a-bug), vendors are already bad at deciding what even counts as a bug. The answer is to make the window so short that direction stops being worth acting on: ship the fix before the hint has value.

The old model treated a patch as maintenance you scheduled. The new one treats the ability to patch fast as a capability you fund, the way you fund uptime. Companies that already deploy many times a day barely have to change. The ones that ship quarterly are about to learn what that cadence was really costing them all along.

If you are trying to work out whether your organization can actually move at that speed, and where it can't, that is exactly the kind of question I like to think through in an [AI advisory hour](/work-with-me/).
