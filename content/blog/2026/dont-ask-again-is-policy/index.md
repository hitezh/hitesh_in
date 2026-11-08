---
title: "Every 'Don't ask again' is a security policy nobody reviewed"
slug: "dont-ask-again-is-policy"
date: "2026-11-08"
description: "Apiiro found real passwords in 1,122 public Claude Code settings files. The leak is a symptom: agent approvals are policy, and most teams never review them."
linkedin_hook: "Apiiro found real passwords in 1,122 public Claude Code settings files, 379 of them database logins. Every 'don't ask again' click writes a policy, and nobody reviews it."
takeaways:
  - "Search your GitHub organization, history included, for .claude/settings.local.json. Rotate whatever you find before you clean anything up."
  - "Plant a fake password after PGPASSWORD= in a test commit. If your scanner stays silent, it cannot see agent-shaped secrets."
  - "Find the oldest standing approval on your team. If nobody can say who granted it or why, give approvals an expiry."
linkedin_question: "If you listed every standing permission your team has granted to a coding agent, how many could you explain, and who approved them?"
categories:
  - "technology"
tags:
  - "ai"
  - "ai-agents"
  - "security"
  - "governance"
  - "developer-tools"
image: images/cover.svg
---

Apiiro searched public GitHub for one specific file, `.claude/settings.local.json`, and [found 104,185 copies](https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html). In 1,122 of them was a real secret: 379 database passwords, 43 SSH logins, 42 GitHub, GitLab or npm tokens, 23 AWS keys. They belong to 63 organizations, mostly software companies. The secrets got there because someone clicked "Yes, and don't ask again" on a command that had a password typed into it, and Claude Code saved the command word for word.

The headline has been read as "Claude Code leaks passwords." That is not quite what happened, and the fairer reading is more useful to a CTO.

## Who actually leaked it

The file is meant to stay on one person's machine. Claude Code adds it to the user's global git excludes, [per its settings documentation](https://code.claude.com/docs/en/settings), but it does not touch the project's own `.gitignore`. So protection exists on the laptop where the file was created and nowhere else. A teammate, a second machine or a fresh clone commits it like any other file. Apiiro traced 1,105 repositories and found that in 539 of them a commit co-authored by Claude changed the file, so the agent often did the committing too.

I would not call this a vendor failure or a user failure. It is a default that works for one developer and fails for a team, which is the shape most agent problems take. I could not find a public Anthropic statement in the coverage I read, and Apiiro did not test whether the leaked credentials still work (one notified company confirmed its key was live). A [bug report from August 2025](https://github.com/anthropics/claude-code/issues/5544) described the same behavior, and according to Apiiro it was closed by a stale-issue bot as "not planned".

## A permission prompt is a policy editor

Look at what the click does. A person, mid-task and probably tired, answers a yes or no question. The system turns that answer into a standing rule that applies to every later session, with no owner, no review and no end date. In any other part of the company we would call that an access policy, and we would never let it be written by whoever happened to be at the keyboard.

One pattern worth watching for in any agent rollout is that the interface presents a decision while the system records a permanent rule. Teams govern the first and forget the second. Security reviews ask which commands an agent may run. They rarely ask where the approvals live, who can read them, and how they travel. Here they lived in a plain JSON file inside the repository, so they traveled everywhere the code did, including forks. Apiiro found [211 forks](https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again) carrying the same secrets.

## Your scanner was built for a different kind of secret

Gitleaks and TruffleHog are good tools, and they are built to recognize things that look like keys. Apiiro ran both on the 1,122 files. Between them they missed 215, and the misses were mostly passwords typed inside commands, after `PGPASSWORD=` or `sshpass -p` or `mysql -p`. A command is not a key format. The secret is identifiable only by its position in a sentence.

That is the part I find most useful, because it will repeat. Agents create new kinds of artifacts: saved approvals, memory files, chat transcripts, tool configs. Each one is a place where secrets can end up in shapes your existing controls were never tuned for. Apiiro's wider count, once saved agent transcripts and older versions are included, is 2,539 secrets in 1,994 repositories. Buying an agent also means buying a new class of files to monitor, and nobody puts that in the budget.

## Convenience has no expiry

In half of the repositories with a secret, the file had been sitting on the default branch for at least 217 days. The task that justified the approval ended months ago. The approval did not.

Humans have been through this before. Sudo rules that skip the password prompt and "remember me on this device" both trade a little security for a lot of convenience, and both quietly outlive the reason they were granted. The difference with agents is volume. A developer using a coding agent approves far more commands in a week than they ever typed into sudo, and each approval is a small bet that nobody will ever read the file.

For an executive the question is simple. If a standing approval granted in March can still be exercised in November, who is accountable for it? Today the honest answer is nobody, and that is a governance gap more than a tooling gap. It is also one reason I keep arguing that [you should be able to say what your agents did](/2026/what-your-agent-did) before you widen what they are allowed to do.

## What I would do this week

1. Search your GitHub organization for `.claude/settings.local.json` and `.claude/settings.json`, and check git history, since deleted files live on. Do the same for the equivalent folders of any other agent your people use.
2. Rotate every credential those files have held before you clean anything up. Removing a file from the repository does not remove it from history or from forks. If rotation takes more than a day, [that is the bigger finding](/2026/assume-vendor-loses-your-secrets).
3. Stop approving commands that contain literal secrets. Reference them as variables from a secrets manager, so a saved rule holds a name instead of a password, and approve patterns rather than single commands.
4. Put agent folders on the same footing as `.env` files: organization-wide `.gitignore` templates, pre-commit hooks and CI scanning that include history.
5. Test your scanner on purpose. Commit a fake password after `PGPASSWORD=` in a throwaway repository. If nothing fires, you know what your tooling cannot see.
6. Give approvals an expiry. Review standing agent permissions quarterly, and find the oldest one. If nobody can say who granted it or why, delete it.
7. Add three questions to every agent purchase: where do approvals persist, in what format, and does that location travel with the code? Choose on the answers as well as the demo.

None of this needs a transformation program. It needs someone to treat the click as what it is, a rule being written. The same applies well beyond Claude Code, and as [your AI gateway](/2026/your-ai-gateway-holds-every-key) and your agents multiply, the number of places such rules accumulate will grow faster than the team that reviews them.

If you are rolling out coding agents and want a second opinion on what they are allowed to remember, an [AI advisory hour](/work-with-me/) is a sensible place to start.
