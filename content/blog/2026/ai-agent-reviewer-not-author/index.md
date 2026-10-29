---
title: "The best AI agent passes 10.8% of real tax work. Make it the reviewer."
slug: "ai-agent-reviewer-not-author"
date: "2026-10-29"
description: "Surge AI's tax benchmark shows agents missing the issue the client never raised, and repeating the same miss. What that means for where you put agents in professional work."
image: images/cover.svg
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "ai-strategy"
  - "decision-making"
  - "governance"
---

Surge AI just published [DAYJOB: Tax](https://surgehq.ai/blog/dayjob-tax), a benchmark of 50 professional tax assignments. Each one hands an agent a client request and a folder of records (a median of 30 files, up to 123, many of them scanned PDFs, a photographed handwritten receipt, a dispatch log) and asks for a finished deliverable. To pass, an attempt has to meet 95% of an expert-written rubric. The best model, Claude Sonnet 5.5, passed 10.8% of the time. Claude Fable 5.1 got 9.6% and Claude Opus 5.5 got 9.2%.

Ten percent sounds like a verdict on whether to use AI for tax. I think it is more useful as a map of where agents fail, and that map says something about every workflow where the valuable part is the thing nobody asked for.

## The expensive part of the job is the question the client didn't ask

The authors say the benchmark is built around whether an agent finds issues the client never raised. One of their cases is a condo sale where the client is comparing an October 2026 closing against January 2027. The right answer notices that a residence requirement lapses around August 2027, which changes the whole decision. A client doesn't ask about that because a client doesn't know it exists. That's why they hired someone.

An agent is built to answer the request in front of it, and it does that well. So the gap shows up exactly where the money is. If you run a finance team, a legal function or a compliance process, ask what share of the value you pay for comes from answering questions versus raising ones nobody posed. In my experience that share is larger than leaders assume, and it is mostly invisible because nobody writes it down.

## The misses repeat, so retries won't save you

Surge ran each task several times, and the case studies show something I hadn't seen stated plainly. In the condo case one model flagged the lapse in all five attempts, while another never did. In a separate divorce case, Opus told a separating couple they weren't legally married by applying Florida law without asking about their Texas residence and Colorado ceremony. It made that same error in five out of five attempts.

My inference from that is that these are habits of a given model, not dice rolls. Many teams assume a shaky agent can be made safe by running it three times and taking the majority, or by asking it to double-check itself. If the same blind spot sits behind every run, you just get the same wrong answer with more confidence. A second opinion has to come from somewhere with different blind spots: another model, a rule written by someone who has been burned, or a person.

## Put the agent in the reviewer's seat

A 95% pass bar is the right bar for an author. Whoever signs the return owns every line. It is the wrong bar for a second reader. A reviewer that flags a non-issue costs someone ten minutes. An author that misses a deadline costs the client, and then it costs you the client.

That asymmetry points to a deployment pattern I would try first: let a professional produce the work, then run an agent over the file and the draft with one instruction, which is to find what's missing and what looks wrong. You are buying recall, and false alarms are cheap to dismiss. I wrote about [why reviewing is becoming the real job](/2026/reviewing-is-the-job/) in software, and the same logic holds here. Which side of the table the AI sits on decides whether its errors are cheap or expensive.

There is an objection. A reviewer that cries wolf gets ignored, and a tired human will approve whatever the machine doesn't flag. That is a real risk, and it argues for measuring the reviewer's hit rate on your own cases before you rely on it.

## What I would do with this

1. **Audit one workflow for unraised issues.** Pick a recurring piece of professional work and list the three things your best person catches that the request never mentioned. That list is both your evaluation set and the part you should not hand to an agent unsupervised.
2. **Plant known problems in old files.** Take completed cases where something was caught late, strip the fix, and see whether an agent finds it. Public leaderboards won't tell you this, as I argued in [Nobody has benchmarked AI on 90% of the work your company does](/2026/nobody-benchmarked-your-work/).
3. **Decide who owns the signature before you pick a model.** Whoever signs is the author. The agent can draft or review, but it cannot carry the liability, and your staffing should reflect that.

A caveat on the source. The top three scores are all Claude models, I used Claude to help research this piece, and the write-up I read gives no human baseline, so I can't say how an average preparer would score against that 95% bar. I'd want that number before drawing conclusions about replacing anyone.

If you want to work out where an agent belongs in a professional workflow of your own, that is what an [AI advisory hour](/work-with-me/) is for.
