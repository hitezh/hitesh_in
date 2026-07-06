---
title: "Paying for the tools that power everything"
slug: "paying-for-open-source-tools"
date: "2026-06-23"
description: "Mitchell Hashimoto pledged $700k of his own money to a programming language he partly disagrees with. It's a rare honest answer to who actually pays for the tools the software industry depends on."
categories:
  - "technology"
tags:
  - "open-source"
  - "entrepreneurship"
  - "software"
draft: false
image: images/cover.svg
---

Mitchell Hashimoto just pledged $400,000 to the Zig Software Foundation. That brings his personal total to $700,000 across two donations. If you haven't heard of Zig, it's a systems programming language, a modern alternative to C that has been gaining real traction over the last few years. Hashimoto is the founder of HashiCorp (Terraform, Vault, Consul) and has, since leaving that company, been building Ghostty, a terminal emulator written largely in Zig.

This is not a corporate grant. It came from his personal finances.

The reason he gives is [specific](https://mitchellh.com/writing/zig-donation-2026): "Ghostty exists in large part because Zig made it possible for me to build the kind of software I wanted to build." He used the tool, the tool worked, and now he's paying for it. That much is a clean story.

What makes it interesting is the complication underneath.

## The AI disagreement that doesn't stop him

The Zig Software Foundation has a formal policy banning LLM-generated code contributions. Not an informal norm - an actual policy. Hashimoto, by his own account, uses AI extensively in his own work and has written positively about it. His views and Zig's don't align on this.

He funds them anyway.

His explanation is worth quoting directly: "projects can be weird and different. They can set unusual boundaries, build their own culture, and pursue quality in ways that won't make sense to everyone." Then he writes the check.

This is a more mature position than most of what I've read on AI and open source over the last two years. There are people who think any project not embracing AI tooling is leaving productivity on the table, and maintainers who think LLM-generated contributions degrade code quality in ways that compound over time. Both have real arguments behind them. What's less common is someone who holds one view and still shows up with funding, without demanding the project change to accommodate them.

## The actual problem this addresses

The more important part of this story is the background condition.

Foundational software has a funding problem that's well understood in engineering circles but doesn't get fixed. OpenSSL had roughly 1.5 full-time equivalent developers before Heartbleed in 2014, while running the security layer for a large fraction of the internet. [SQLite is maintained by three people](https://www.sqlite.org/mostdeployed.html) and deployed on billions of devices. The pattern holds: something becomes critical infrastructure, the money doesn't follow.

Zig is in a similar position. It's a real language running on real production systems. Ghostty, with over a million downloads, is one visible example. The Zig Software Foundation chose independence over a corporate patron - Rust had Mozilla, Go has Google, Zig has neither. That means it runs on donations from people who choose to pay for something that was technically free.

Most don't choose that.

I think about this when I look at the open source stack at OptCulture. A lot of what we depend on has obvious corporate backing. A lot of it does not. The tools without a clear sponsor are the ones worth thinking harder about. Not every project needs a $400k pledge - some need a $500 donation, some need a pull request, some need someone to write about them. What they don't need is to be treated as ambient infrastructure that someone else is quietly maintaining for free.

## The right frame

Hashimoto is applying a vendor relationship frame to a tool he depends on. That's the shift worth making.

When a SaaS tool is critical to your business, you budget for it. You think about contract terms and renewal. You think about what happens if the company folds. For some reason, the open source tools that are equally critical get treated differently - as gifts from the internet that will keep arriving indefinitely.

The $700k is unusual because it's real, not because it's large relative to Hashimoto's means. He's treating the infrastructure he depends on as something with a cost, and paying the bill. That's it. The unusualness says something about how most of us are doing it.
