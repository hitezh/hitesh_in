---
title: "The guardrail your AI can't see"
slug: "guardrail-your-ai-cant-see"
date: "2026-08-18"
description: "A Copilot autofix reintroduced a shell-injection hole in Snowflake's CI, and an AI agent found it in five days. The fix isn't more review, it's encoding the rule."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "security"
  - "software-engineering"
  - "ai-agents"
---

In June, an AI tool called Copilot Autofix opened a pull request on one of Snowflake's public repositories. On paper it was a cleanup. It took a piece of awkward-looking shell code that escaped quotes by hand and replaced it with something simpler. The change merged. Five days later, an autonomous agent run by the security firm Wiz [walked straight through the hole](https://www.wiz.io/blog/red-agent-snowflake-copilot-cicd-bug) that "simpler" code had opened and read Jira tokens belonging to a Snowflake QA account, with visibility across engineering, security compliance, and the bug bounty program.

Snowflake patched it the same day it was found and says no attacker got there first. Which makes it more useful than a breach story: a clean look at how AI changes the shape of risk inside a codebase, and why the standard advice about it is only half right.

## The pattern looked like clutter

The code the autofix removed was defensive. The original used an environment variable and a real JSON parser to handle a GitHub issue title. That title is untrusted input; anyone on the internet can open an issue and type whatever they like into it. The old code treated it that way. The new code dropped the title straight into a shell command, which meant a carefully written issue title could run commands on the build machine.

The autofix did not fail at security. It failed at archaeology. The safe pattern carried no sign of what it was protecting against. To anything optimizing for tidy code, the parser and the environment variable looked like ceremony, the sort of thing a senior engineer adds and a junior one deletes to "simplify." The reason it existed lived in someone's head, or in a code review from two years ago, not in the code itself.

Programmers have a name for this. [Chesterton's Fence](https://fs.blog/chestertons-fence/): don't take down a fence until you know why it went up. Humans break the rule too. What's new is the speed and the scale. An agent that files hundreds of improvements will meet thousands of fences, and it has no way to see any of them. Every defensive quirk you can't explain from the code alone is a fence your AI will eventually walk up to and remove.

## Two agents, five days

The second half of the story is the timeline. The bug went live on a Wednesday and was exploited the following Monday. Both ends were automated. An AI wrote the vulnerability; an AI found it.

That symmetry kills an assumption a lot of security programs still run on: that an obscure bug in a CI file buried in a public repo will sit undiscovered long enough for you to find it first. That was a fair bet when finding such a bug meant a human getting curious. It stops being a fair bet when the other side runs agents that read every public repository looking for exactly this. I've argued before that AI [pays off wherever checking an answer is cheap](/2026/point-ai-where-checking-is-cheap), and exploiting a CI injection is about the cheapest check there is: the token either comes back or it doesn't. Assume same-week exploitation and design for it.

## The advice that's only half right

The tidy lesson everyone drew was "review AI-generated code as carefully as human code." True, and not enough. I've made the [reviewing-is-the-job](/2026/reviewing-is-the-job) case myself. But a review is a human catching a specific mistake, and the whole problem here is that the mistake is invisible unless the reviewer already knows the history. You are asking a person to reconstruct, at LGTM speed, a threat model nobody wrote down.

The move that actually holds is to stop relying on anyone, human or model, to remember. Encode the invariant, not the instance. "Never interpolate untrusted input into a shell" is a rule a linter can enforce on every pull request, forever, without curiosity and without memory. Snowflake's real fix isn't the one-line patch; it's making the unsafe pattern impossible to merge. Static checks for exactly this class of CI bug already exist and are free. The teams pulling ahead treat hard-won security knowledge as [something the machine enforces](/2026/ai-writes-the-code-who-governs-it), not something the team is trusted to recall on a Friday afternoon.

## What this means if you run engineering

The cost structure moved, and most org charts haven't caught up. AI made producing changes nearly free, which reads like pure leverage until you notice it also made producing plausible, well-formatted, subtly wrong changes nearly free. I've called this the [bill you don't see](/2026/automation-is-cheap-understanding-is-the-bill): the savings show up on the dashboard, the verification burden doesn't.

So three things I'd push a leadership team on. First, go find your fences. The defensive code your team can't explain from the code alone is your real risk register, and right now it lives nowhere. Second, promote your best tribal knowledge into policy that runs on every commit, because tribal knowledge does not survive contact with an agent. Third, measure your exposure window in days, not quarters, because whoever is looking at your repositories already does.

Letting AI write code is fine. Pretending it can see the fences is where teams get hurt. A model can generate the fence. It cannot tell you why the last person built one.

If you're trying to work out which of those fences actually matter before an agent finds the gap, that's the kind of problem I like thinking through in an [AI advisory hour](/work-with-me/).
