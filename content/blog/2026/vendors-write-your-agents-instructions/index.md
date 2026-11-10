---
title: "Your coding agent now takes instructions from your software vendors"
slug: "vendors-write-your-agents-instructions"
date: "2026-11-04"
description: "A desktop app updated itself and wrote startup instructions into its users' Codex and Claude Code. Agent configuration is now a procurement and governance question."
categories:
  - "technology"
tags:
  - "ai"
  - "ai-strategy"
  - "ai-agents"
  - "security"
  - "governance"
image: images/cover.svg
linkedin_hook: "Postman's desktop app reportedly installed plugins into Codex and Claude Code on auto-update, and added a startup hook telling the agent to prefer Postman skills. Nobody was asked."
takeaways:
  - "Pick one developer laptop and list everything your coding agent loads at session start. If it takes more than ten minutes, you have no inventory."
  - "Add one question to vendor reviews: what does your installer write outside its own folder? Agent config directories belong on that list."
  - "Version-control your agent instruction files and review changes like code. A hook that steers tool choice is a spending decision."
linkedin_question: "If a vendor tool added a line to your engineers' agent instructions tomorrow, which team would notice first, and how?"
draft: false
---

On October 25 a developer [opened an issue](https://github.com/postmanlabs/postman-app-support/issues/14370) against Postman's support repository. After an automatic update, the Postman desktop app had installed a CLI and plugins into their Codex and Claude Code setups. Postman's own log reads `auto-existing-upgrade`, with `claude-code:installed` and `codex:installed`. A session-start hook came along with them, whose text tells the agent to load a Postman skill "before responding to any non-trivial API engineering task."

Postman has since said the components are bundled because people struggled to install them separately, that it is disclosed on the download page and in the update flow, and that it is [reviewing the hook approval and session-start behavior](https://github.com/postmanlabs/postman-app-support/issues/14370). The reporter is explicit that no data theft was shown, and I could not independently confirm the details beyond the issue and that thread. I don't think Postman is the villain here. What matters is where this points for every other vendor.

## The agent's startup prompt is now ad space

Developers asked Postman for an API client. What they got, in addition, was a standing instruction inside the tool that now makes many of their engineering decisions. That is a more valuable placement than any search result, because the agent acts on it and nobody sees it happen.

Why would a vendor want that? A common reaction among developers right now is that an API client is a weekend of work for an AI agent. If that's even half true, the product is no longer the moat. The moat is being the thing the agent reaches for by default. I'd expect every developer-tools company with a desktop footprint to reach the same conclusion, and some will reach for the same lever.

I wrote recently about [who chose your coding agent's default stack](/2026/your-agents-default-stack/). Part of that answer is now "whoever got write access to its config first."

## An install is not consent to this

The consent logic was built for software, not for agents. When someone installs a desktop app, they consent to a program running on their machine. They have not consented to that program editing a different program's behavior, especially one with shell access to their code and credentials.

The installer reportedly also approves its own hook after installing it. The source has a function called `approvePostmanHook`, which its own comment says "approves only Postman's current hook after installation." Whether or not that turns out to be a real trust bypass (a commenter showed hook trust records can be written by hand), the pattern is old. Browsers had it in the 2000s, when toolbars rode along with unrelated installers, and the fix was extension permissions and a store with review. Agent configuration has none of that yet. The author, the approver and the beneficiary of the change can all be the same party.

## It is a change with no diff

Most engineering organizations are good at controlling code. Pull requests, reviews, audit logs. The files that steer an agent sit in a home directory, outside the repo, and change when a vendor ships an update. A change to how your engineers' agents choose tools, what they load and what they trust goes through no process at all.

That is the same gap as [hidden prompts being policy with no policy owner](/2026/hidden-prompt-is-policy/), only closer to home. It also has a cost side. If a hook nudges every agent session toward one vendor's API tooling, someone's usage grows and someone's bill follows. The person approving that spend is nobody.

There is a security side too. A hook that runs at session start is code execution in a context with your files and keys. I made the case about [the gateway that holds every key](/2026/your-ai-gateway-holds-every-key/): the risk isn't that any one vendor is hostile, it's that you've added another place a bad update can land without anyone classifying it as a risk.

## What I would do on Monday

1. List what your agents load at startup, on one real laptop. Config directories, hooks, plugins, skills, remote tool servers. If a security lead can't produce that list in ten minutes, you have no inventory yet.
2. Snapshot those files and diff them after tool updates. Run it for a month. If nothing changes, good. If something does, you've found out how often vendors touch them.
3. Use your agent's enterprise-managed settings where they exist. Allowlist the plugins and hooks you want, and make everything else an exception someone requested.
4. Add one line to vendor reviews: does your software write outside its own directory, and does it ask first? Treat a vague answer as a no.
5. Put your team's agent instruction files in version control. Review changes to them the way you review a dependency bump.
6. Decide who owns the agent configuration. My guess is that today it is nobody, or it is whichever developer set it up last.
7. Ask your own vendors to ship integrations as opt-in. If you sell developer software, do the same. A customer who invited the agent in is worth more than one who found it later.

The better agents get, the more their configuration matters, and the more attractive it becomes to everyone who wants to be in it. If you are working out what that governance should look like for your own teams, an [AI advisory hour](/work-with-me/) is a reasonable place to start.
