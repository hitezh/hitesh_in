---
title: "Sampling was a budget decision, and AI just changed the budget"
seoTitle: "AI audit agents: what happens when checking everything is cheap"
slug: "sampling-was-a-budget-decision"
date: "2026-11-19"
description: "KPMG says its AI audit agents asked deeper questions than the human team. The bigger change is that exhaustive checking is cheap, and the scarce skill is now deciding what matters."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "governance"
  - "decision-making"
  - "ai-strategy"
image: images/cover.svg
linkedin_hook: "KPMG UK ran 100+ AI agents on a FTSE 250 audit and says they asked deeper questions than the human team. Cheap exhaustive checking will break controls built around sampling."
takeaways:
  - "List every control you run on a sample: QA calls, code review, expense checks. For each, write down who decides what happens when a full check finds 400 issues instead of 12."
  - "Write your materiality rule before you turn exhaustive AI review on. Without one, the first scan produces a backlog nobody is authorized to close."
  - "Track question yield: of the questions your AI raised last month, how many changed a decision? Below a few percent, you are buying noise."
linkedin_question: "Which review process in your company only samples because checking everything used to be too expensive?"
draft: false
---

KPMG UK has been testing more than 100 AI agents on the financial statements of an unnamed FTSE 250 company, according to a [report in the European Business Magazine](https://europeanbusinessmagazine.com/ai-agents-better-questions-kpmg/) that draws on the Financial Times. The agents gathered evidence, documented analysis, drafted conclusions and divided the work among themselves, while a conventional audit team ran alongside. KPMG's head of audit, Cath Burnet, says the agents sometimes went considerably deeper than the human team and raised questions the auditors had not asked.

Treat that with some care. It was not a statutory audit, nothing was used to approve the accounts, KPMG has not said whether fees will fall, and "better questions" is KPMG's own judgment, with no published rubric. I could not independently confirm the details beyond that one report. Still, the interesting part is not whether the agents beat the accountants. It is what happens to a business process once the thing it was designed to ration becomes cheap.

## Sampling was never a principle

An auditor does not test every transaction. They test a sample and extrapolate, and the profession has built a careful science around how large the sample must be. Most of us treat that as a statistical idea. It is closer to a budget line. Nobody could afford to read every invoice, so we invented methods for not reading them.

The same compromise sits all over your company. QA teams review a few percent of support calls. Code review skims the diff and trusts the rest. Procurement spot-checks contracts, finance spot-checks expenses, compliance samples the alerts. Each of these controls was sized to the attention available, and then the sample size quietly became the policy.

If an agent can read everything for the price of a few API calls, the sample stops being a design choice and becomes an arbitrary limit. The question moves from "how do we check enough?" to "what do we do with everything we can now see?"

## The new bottleneck is materiality

A full read of a mid-sized company's records will find a lot. Most of it will be small, some of it will be wrong in harmless ways, and a few items will matter a great deal. A sample used to hide that distribution. Exhaustive review exposes it, and someone has to sort it.

One pattern I've noticed in teams adopting AI review is that they budget for the finding and forget the deciding. The tool is bought, the scan runs, and a few weeks later there is a list of several hundred flagged items and no one who owns the call on which to chase. Judgment about what is material is still human work, and it is now the slowest step in the chain. This is the same logic as [pointing AI where checking is cheap](/2026/point-ai-where-checking-is-cheap), applied one level up: once the check is cheap, the scarce thing is the person allowed to say "this one matters, that one doesn't."

That has a hiring consequence. The valuable auditor, reviewer or compliance lead is the one with enough standing to dismiss ninety-five of a hundred flags and defend the decision. The junior who used to do the tick-and-tie work is the role the agents absorb.

## A question, once asked, has to be answered

Here is the part I think leadership teams underestimate. A sampled process leaves a comfortable amount of unknown. An exhaustive one leaves a record of what the system noticed and what your people did about it. If an agent flagged an odd revenue-recognition pattern in March and the file shows no response by year-end, you have not saved yourself an awkward conversation. You have documented that you knew.

That is an incentive problem, and a [familiar one](/2026/what-your-agent-did): the log that helps you in an investigation is the same log that can be used against you. Some organizations will react by turning the scrutiny down. The better reaction is to set a response standard first, with an owner, a deadline and a written reason for every dismissal, so that the record shows a process working and not a backlog ignored.

## Measure question yield

KPMG's claim rests on questions being deeper. Depth is easy to claim and hard to value, because a question is only worth what it changes. The metric I would want from any exhaustive-review pilot is how many questions led to a different decision, a correction or an escalation. A tool that raises 2,000 questions and moves three decisions is expensive, however thorough it looks in a demo. A tool that raises 40 and moves ten is the one to scale. This is the same discipline as [building the benchmark from your own backlog](/2026/your-backlog-is-the-benchmark): judge the tool on your work, not on its own description of itself.

## What I would do before turning it on

1. **Inventory your sampled controls.** Write down every review you run on a subset, and what the sample size was based on. If the honest answer is "what we could afford," that control is a candidate.
2. **Write the materiality rule first.** Agree what size, type and pattern of issue deserves a human, and who can overrule the rule.
3. **Name the owner of every flag.** One person per category, with a deadline. If the owner is "the team", nobody owns it.
4. **Decide how dismissals are recorded.** A one-line reason per dismissal is enough. It is what separates diligence from an ignored alert.
5. **Pilot on a process where a mistake is cheap.** Internal expense checks before statutory accounts.
6. **Measure question yield for ninety days.** Questions raised, decisions changed, hours spent triaging. Kill it if the third number outgrows the second.
7. **Re-staff for judgment, not tick-and-tie.** Plan the career path for the people whose first-year work just disappeared, or you will have no senior reviewers in five years.

The question to carry into your next leadership meeting: if we could check everything tomorrow, are we ready to hear everything we find, and who is empowered to decide what it means?

If you're working through where AI review belongs in your own controls, that is the kind of problem I like to think through in an [AI advisory hour](/work-with-me/).
