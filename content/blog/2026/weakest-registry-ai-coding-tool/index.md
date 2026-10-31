---
title: "Your AI coding tool is only as safe as its weakest registry"
slug: "weakest-registry-ai-coding-tool"
date: "2026-10-31"
description: "A backdoored Claude Code extension sat on the Cursor marketplace for eleven hours. Your vendor review covered the vendor, not the registry that delivered the code."
categories:
  - "technology"
tags:
  - "ai"
  - "security"
  - "developer-tools"
  - "governance"
  - "engineering-leadership"
image: images/cover.svg
---

On October 29, between roughly 2:27am and 1:35pm Pacific, anyone who installed or updated the Claude Code extension from the Cursor marketplace on a Mac or Windows machine could have received a backdoor. [Cursor's notice](https://cursor.com/blog/claude-code-extension-security-notice) is blunt that versions 2.1.312 and 2.1.313 "were not developed by Anthropic." The extension carried the right publisher name and the right product name. It had been modified in transit.

Most of the coverage is about the malware. I think the more useful part is the label. "Official" turned out to mean "published under the vendor's name on a registry the vendor does not run," and nobody's security review had that sentence in it.

## What actually happened

[Phorion's analysis](https://phorion.io/blog/offical-claude-code-vsx-compromise/) shows a snippet of code prepended to the extension bundle, running as soon as the editor loaded the file, before the extension's normal startup and without the user clicking anything. It added an attacker's SSH key to `authorized_keys`, tried to enable remote login, set up a reverse tunnel, and reported the hostname, username, working directories and public IP back to the operator.

The attack was also sloppy. Turning on SSH needs admin rights the extension mostly did not have, and Phorion found a bug in the macOS check that skipped the step on a standard account. Cursor says that on most machines the attacker could not have logged in. Still, the key was planted, persistence was installed, and host details were sent. Cursor's own guidance is to rebuild affected machines and rotate every credential reachable from them, because uninstalling the extension does not remove the scripts it dropped.

## Vendor due diligence stops at the vendor

When a company approves an AI coding tool, the review usually covers the vendor: its SOC 2 report, its data retention terms, where prompts go. All of that matters. None of it says anything about the path the code takes to reach a developer's laptop.

One pattern I've noticed in how security reviews get scoped: they treat a vendor as a single entity with a single perimeter. In practice a vendor's software reaches you through a chain of third parties, each of which can republish it under the vendor's name. The trust you extend to Anthropic, or any vendor, silently extends to every mirror that carries its extension. Your exposure is set by the weakest link in that chain, and the vendor does not control the chain.

This is the same lesson as the [LiteLLM compromise](/2026/your-ai-gateway-holds-every-key) last week, seen from the other end. There the poisoned artifact was a package on PyPI that companies had installed on purpose. Here it is a plugin an individual engineer installs in ten seconds with no ticket attached.

## AI tools are the one category allowed to look like an insider

Any security team that has approved an AI coding assistant has already agreed that it may read the repository, run shell commands, and sit next to cloud credentials and API keys. That is the product. It also means the rules that would flag an unknown program reading your source tree and phoning home are probably loosened for exactly this class of software.

So a compromised AI tool does not need to evade much. It starts from a trust level that every other kind of software has to earn. I would expect attackers to notice this, and the Claude Code extension is not the last place they will try it.

## Luck did the defending

Here is the part I would put in front of a board. The controls that limited the damage were the attacker's bugs and the fact that most developers do not run their editor as an administrator. Nobody designed those. If the macOS check had been written correctly, this would read very differently.

A defense you cannot take credit for is not a defense. The honest question for a CTO is what a compromised laptop would have cost on the day, and that depends mostly on what lives on the laptop. Long-lived cloud keys in a dotfile, production database credentials in an environment variable, and an SSH key with access to everything turn a sloppy backdoor into an expensive incident.

## A small delay would have turned this into a non-event

The malicious versions were live for about eleven hours. Recent VS Code releases [wait two hours before auto-updating an extension](https://code.visualstudio.com/updates/v1_123) to a newly published version, specifically as protection against compromised releases, though the exemption for trusted publishers such as Microsoft, GitHub and OpenAI means the biggest names update immediately. I don't know how Cursor applies the same logic, so treat this as a principle rather than a verdict on this incident.

The principle is solid, though. A freshly published version of anything that runs with developer permissions has not yet been tested by the world. Vendors of AI tools ship updates constantly, so pinning every version is unrealistic. Rings are not: a small pilot group takes updates immediately, and everyone else takes them a day or two later. That is how good IT teams already handle operating system patches, and it costs almost nothing.

## What I would do on Monday

I would not start with a policy document. Three things, in this order:

1. Ask for an inventory. Which AI extensions, agents, and command-line tools are installed on engineering machines, at which versions? If the answer takes more than a day, that is the finding. You cannot respond to an incident like this one in eleven hours if you cannot list what you have.
2. Approve the source, not just the tool. Pick the registries engineers may install from, and put a cooling-off delay on updates outside a pilot ring.
3. Shrink what a laptop can lose. Short-lived credentials, secrets fetched at use rather than stored, and agents that run in containers rather than on the host.

None of this is exotic. Most of it was good practice before AI coding tools existed. What changed is that adoption outran it: seats get counted, versions and sources do not.

If you are trying to work out where your AI tooling decisions have outrun your governance, that is a good use of an [AI advisory hour](/work-with-me/).
