---
title: "Nobody typed install"
slug: "nobody-typed-install"
date: "2026-08-05"
description: "A self-spreading worm hit npm packages with two billion monthly installs. As AI agents pull and run dependencies at machine speed, the human who caught this is gone."
categories:
  - "technology"
tags:
  - "ai"
  - "security"
  - "ai-agents"
  - "ai-strategy"
image: images/cover.svg
draft: false
---

On August 4 a worm called [Shai-Hulud](https://www.aikido.dev/blog/keyv-and-friends-compromised-in-npm-supply-chain-attack) tore through npm. It started with one compromised maintainer account behind `keyv`, a small caching library, and spread into 434 packages across 1,381 versions with combined installs north of two billion a month. It harvested npm tokens, AWS keys, GitHub credentials, Vault and Kubernetes secrets, then used the stolen tokens to republish itself into still more packages. Another entry in a long run of these this year.

One detail is worth stopping on. Among the files it dropped, the worm wrote hooks into `.claude/settings.json` and `.vscode/tasks.json`, the config that tells an AI coding agent and an editor what to run automatically. The attacker was after more than your secrets. They were aiming at the machinery that now runs code on your behalf, which is where the soft spot has moved.

## The throttle nobody noticed was there

For twenty years the software supply chain had a human standing in it, loosely. Someone decided to add a dependency, typed `install`, and once in a while glanced at what came down or wondered why a caching library wanted to run a script on install. That person caught almost nothing. But they were slow, and the slowness did the work. A developer adds a handful of new packages in a busy week. The pace itself was a filter.

Agents remove the pace. An AI coding agent asked to build a feature will pull dozens of transitive dependencies in an afternoon and pause on none of them, because pausing is the one thing it was hired not to do. The attack did not get more clever. Shai-Hulud is an ordinary credential stealer wrapped in a [preinstall script](https://docs.npmjs.com/cli/v10/using-npm/scripts). What changed is that the throttle came out. It is the same trade I keep coming back to: [automation is cheap, and the checking is the bill you stop paying](/2026/automation-is-cheap-understanding-is-the-bill/). Here the bill arrives as your own packages, republished against you.

## The agent is holding your keys

Ask why the theft was so clean. The worm scanned for npm tokens, cloud credentials, and long-lived GitHub access tokens sitting in environment variables and config files. Those secrets were there because that is the frictionless way to make an agent useful. You want it to install packages, push a branch, run the build, maybe touch a cloud resource, so you hand it a broad token and move on. A human employee would find that much access annoying and use almost none of it. An agent uses all of it, at once, the moment its environment is compromised.

Deploying an agent, I argued a few weeks ago, is closer to [hiring a worker with no reputation to lose](/2026/you-hired-an-agent/) than to installing a piece of software. Credentials are the sharpest version of that. You would never give a two-week contractor your root cloud key and your publish rights on the same laptop. We give agents exactly that, because the agent shows up as an API and gets set up like one, fast, by whoever was moving quickest that day.

## Why the popular fix misses

The reflex after each of these incidents is to harden the install step: block postinstall scripts, pin the lockfile, run `npm ci` instead of `npm install`. All worth doing, and none of it sufficient. An attacker who can no longer run code at install time moves the payload into the code that runs at import, which your agent executes the moment it uses the package. You cannot scan your way back to the human you removed.

The control that fits the new shape of the problem is about identity and blast radius, not detection. Three things do most of the work:

- **Give the agent its own credentials, scoped small and short-lived.** Not your personal token, not a role that can both build and publish. The identity that installs dependencies should not be able to reach production or the registry.
- **Put a boundary where the human used to stand.** Run agent installs and untrusted code in a sandbox that holds nothing worth stealing, so a hostile package opens the door onto an empty room.
- **Reintroduce time.** A minimum release age, a refusal to auto-adopt any package version less than a few days old, costs almost nothing and would have stopped a day-zero worm outright. It is the old human delay, rebuilt as a rule.

## The decision that changes

The real move is to stop treating your dependency tree as ambient infrastructure that looks after itself. It is a supply chain you never negotiated, and you now let software draw from it unattended. Companies will run procurement and a security review on a forty-dollar SaaS tool, then absorb ten thousand npm packages without a glance, the same blind spot I wrote about in [paying for the tools that power everything](/2026/paying-for-open-source-tools/). Agents make that blind spot expensive, because they act on every part of it faster than anyone can watch.

If I were advising a team shipping with AI today, I would not start with a new scanner. I would ask one question: what can the agent's credentials actually reach, and what happens in the ninety seconds after one of its dependencies turns hostile? If the honest answer is "our cloud, our registry, and our secrets," you have not adopted an agent. You have widened your attack surface and pointed it at yourself. The fix is boring and architectural, which is usually the sign it is the right one.

If you are working out where an agent can safely sit in your own stack, that is exactly the kind of problem I help teams think through in an [AI advisory hour](/work-with-me/).
