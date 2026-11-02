---
title: "Your release date assumed bugs were hard to find"
slug: "release-date-assumed-bugs-were-hard-to-find"
date: "2026-11-02"
description: "Postgres 19 slipped after AI found old bugs faster than maintainers could review the fixes. Plan your roadmap around verification capacity, not discovery."
categories:
  - "technology"
tags:
  - "ai"
  - "software-engineering"
  - "engineering-leadership"
  - "infrastructure"
  - "strategy"
image: images/cover.svg
linkedin_hook: "Postgres 19 is late and three big features were pulled in beta, because AI found old bugs faster than humans could review the fixes. Your roadmap has the same hidden assumption."
takeaways:
  - "Point an AI audit at your oldest critical service. If you cannot triage what it finds within one sprint, you have measured your real review capacity."
  - "Name the people who can approve a fix to your core systems. If one resignation would stall a release, that is your constraint."
  - "Put your riskiest new features behind flags. If pulling one late takes more than a config change, the release date is a bet you cannot hedge."
linkedin_question: "Which of your systems has been stable mainly because nobody looked closely, and who would review the fixes if someone did?"
---

For a decade, PostgreSQL major releases have landed between mid-September and mid-October. [Postgres 19 will most likely ship in November](http://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html), and between August 27 and September 15 the project pulled three large features it had planned to include: UPDATE/DELETE FOR PORTION OF, SQL property graph queries, and partition merge and split. Robert Haas, a long-time Postgres committer, gives the cause in one line: "The short answer is that LLMs happened."

The code did not get worse. It got looked at. The bugs were always there, and what changed, in his words, is that it has become "vastly easier to find those bugs." I think that sentence applies well beyond databases.

## A release date is a bet on how fast bugs surface

Every schedule has an assumption buried in it about how quickly defects will be discovered. For forty years that rate was set by human attention. Very few people have the time and the skill to audit a few million lines of C, so beta periods, freeze dates and stabilization buffers were all sized for a trickle of findings.

Haas says the stable branch took 1,169 commits this year against 724 the year before, and the back-branches took roughly three-quarters more. (Those are his figures and I have not checked them.) That is the trickle becoming a stream. The Postgres team did not get slower. The input to their plan changed, and the plan had no way to know.

Your roadmap has the same hidden input. If the honest answer to "who finds the bugs in our core platform today" is "customers, eventually," then your delivery dates assume a throttle that no longer exists for anyone with a model and an afternoon. It is the same economics I wrote about when [an AI got into three companies by guessing passwords](/2026/the-attacker-just-got-cheap/): effort used to be scarce, and a lot of our defenses were really just that scarcity.

## Finding got free. Fixing did not.

A bug report costs almost nothing to produce now. Deciding what to do with it still takes a person who knows the system: is it real, does it matter, is the proposed fix right, does it break something else. Haas notes that LLM-drafted fixes "aren't always correct or compliant with PostgreSQL standards," so a human still reviews and commits each one.

Seen as a queue, arrivals went up sharply and the number of people who can serve them stayed the same. The cost did not land on the bug list. It landed on the roadmap. Senior reviewers were pulled onto security issues and back-patches, which delayed the decision about what to revert, which is how a release slips.

Here is the part I would want a CEO or CTO to see. Teams are now spending on AI to write more code and on AI to find more defects, and both streams land on the same small group of reviewers. Each tool looks like a productivity gain on its own. Together they are drawing against an account that has a fixed balance, and most companies have never measured that balance.

## Pulling features late is the healthy sign

It is tempting to read three late reversions as a failure of process. I read them the other way. A team that can say "this is not ready" at the release-candidate stage, and then does it, has a quality gate that works. The release I would worry about is the one that hit its usual date in a year when everyone else's findings went up.

There is a fair objection, and the Hacker News discussion of Haas's post raised it. Not every finding matters, and triage is itself work. Some of these bugs may be obscure or low priority, and nobody outside the project can tell how many reports were valid, because Haas does not give a count. He also calls the long-term picture "less clear and in some ways more troubling": if forty years of bugs are now findable, it is not obvious how a project catches up and still innovates. I do not know either. What I would not do is respond by looking away.

## What I would do on Monday

1. Audit your oldest critical service with an AI tool before someone else does. Time the triage. If you cannot sort the findings in one sprint, that is your real review capacity.
2. Write down who can approve a fix to your core systems. If one resignation or one holiday stalls a release, you have found the constraint.
3. Agree a severity bar and a weekly fix budget in advance, so every finding does not become an obligation by default.
4. Watch the age of your review queue. If the median change waits longer than it did a year ago, slow down code generation until reviewers catch up.
5. Put risky new features behind flags. Postgres could pull three late; test whether you could pull one without a crisis.
6. Add a stabilization buffer to every roadmap, and scale it with the age of the codebase, not the size of the team.
7. Ask your vendors the same question. A platform you depend on has this queue too.

Which of your systems has been stable mainly because nobody looked closely? If you want a second opinion on where AI-assisted auditing fits into an engineering plan, that is the kind of problem I like to work through in an [AI advisory hour](/work-with-me/).
