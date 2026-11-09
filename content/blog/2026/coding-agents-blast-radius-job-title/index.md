---
title: "Goldman limited coding agents by job title. Limit them by blast radius."
slug: "coding-agents-blast-radius-job-title"
date: "2026-11-09"
description: "Goldman Sachs pulled coding agents from most traders and bankers. The control that works is narrower permissions per agent, and it lets you keep the demand."
categories:
  - "technology"
tags:
  - "ai"
  - "ai-agents"
  - "governance"
  - "security"
  - "engineering-leadership"
image: images/cover.svg
linkedin_hook: "Goldman Sachs pulled coding agents from most traders and bankers but kept them for about 12,000 engineers. Job title is a blunt proxy for the real risk: what the agent is allowed to touch."
takeaways:
  - "List what each coding agent can do when it runs as its user. If it can place an order or read client data, the agent has that power too."
  - "Before you remove a tool, write down the ten things people built with it. Those are requirements, and they will resurface as spreadsheets."
  - "Give non-engineers a sandbox with copies of data and no write access. Promote anything useful through a named engineer who owns it."
linkedin_question: "If a non-engineer at your company built a useful tool with an AI agent last month, who would own it when it breaks?"
---

In October, Goldman Sachs [updated its internal guidance](https://www.thestateofai.com/news/goldman-sachs-claude-code-traders-bankers) so that coding agents such as Claude Code and GitHub's tools stay with its engineers, about 12,000 of roughly 47,000 staff. Most traders and bankers lost access. I'm relying on that report of Bloomberg's original story, and I could not read the Bloomberg piece itself, so treat the details as secondhand.

The decision is reasonable. The way it was drawn is the interesting part, because it sorts people by job title when the risk sits somewhere else.

## The agent inherits the user's authority

A coding agent runs with whatever access its user has. On an engineer's laptop that is a repository and a test environment. On a trader's workstation it can be the ability to book a trade, send an order, or read positions across a desk. The agent never needed a special grant. It borrowed the human's.

That is why the reported concerns (code that skips review and deployment, tools that may ignore information barriers between deal bankers and traders) are about entitlements more than about model quality. An engineer's agent has the same capability, but it sits inside a pipeline of review, test and approval. A trader's agent mostly doesn't. The job title was standing in for "is there a pipeline around this person's code?", and I think that proxy is too coarse to last.

If I were advising a firm in Goldman's position, I would stop asking who may use the tool and start asking what each agent is allowed to touch. Give the agent its own identity, narrower than its user's, with read-only access to copies of data by default. Then the question of who gets one becomes a lot less frightening.

## Banning the tool leaves the demand in place

Goldman's CIO praised "vibe coding" by non-technical staff in July, and traders had been using the agents to monitor client flows, model positions and produce charts. Those tools were passed to engineers to be improved. One engineer on the receiving end of such tools commented that "improved" was doing heavy lifting, and I believe it. Rewriting a trader's prototype into something operable is real work.

Still, those prototypes were free requirements discovery. Someone who sits next to the problem all day showed engineering exactly which tool was missing. Remove the agent and the need doesn't go away. Finance has a long history of this: when a sanctioned tool is withdrawn, the need reappears in spreadsheets and macros, and end-user computing controls exist because of it. The new versions will be less visible, which is worse.

One habit I'd copy from the strongest teams is simple. Before taking a tool away, record what people built with it. That list is your roadmap, and it is better than anything a survey will produce.

## Cost arrives before the compliance case does

The same report mentions Amazon shutting down an internal leaderboard and Accenture capping Claude spending at $29 per employee per month. I can't verify those figures independently, but the mechanism is easy to see. Agents bill per token, so spend scales with curiosity and with how many steps a task takes (I wrote about that arithmetic in [the autonomy budget](/2026/the-autonomy-budget/)). A flat license looks like a rounding error. A usage meter makes someone in finance ask what the money bought.

My guess is that rollbacks like this one have mixed causes. Security gets the headline, and a budget line often does the quiet work. Leaders should know which one they are actually responding to, because the fixes differ.

## What I would do instead

Engineers are not immune either. Plenty of them now merge code they didn't write and can't fully explain, which is the [review problem](/2026/reviewing-is-the-job/) in another form. Restricting by title doesn't fix that. A few things do:

1. **Map each agent's real permissions.** Pick your three most used agents and list what each can do as its user. If any can move money, send customer messages or change production, you've found where the blast radius is large.
2. **Give agents their own identities.** Start with read-only, scoped to copies of data. If the agent can't be given less than its user has, that is a finding about your platform.
3. **Separate building from shipping.** Let anyone build in a sandbox. Anything that touches live data needs a named engineer who owns it, the way [Goldman's own engineering teams](https://www.thestateofai.com/news/goldman-sachs-claude-code-traders-bankers) run the agents Anthropic helped build.
4. **Record what was built before any rollback.** Treat the list as backlog.
5. **Check who pays.** Put the per-token bill in front of the team that benefits, early.

The failure mode here is old and mundane, much like the [blast radius of a goal](/2026/blast-radius-of-a-goal/): the system does what it is allowed to do, and nobody checked how much that was.

Most firms will meet the same question within a year, usually after a surprising bill or an unreviewed script rather than a policy memo. Working out which agents deserve which permissions is a good use of an [AI advisory hour](/work-with-me/).
