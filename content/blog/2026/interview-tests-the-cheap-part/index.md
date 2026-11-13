---
title: "Your engineering interview still tests the part AI made cheap"
seoTitle: "Engineering interviews in the AI era: test review, not code"
slug: "interview-tests-the-cheap-part"
date: "2026-11-13"
description: "Jane Street is trialing interview rounds that test design and code review. Most hiring loops still grade drafting, then promote the same way. Here is how to audit yours."
categories:
  - "technology"
tags:
  - "ai"
  - "software-engineering"
  - "engineering-leadership"
  - "future-of-work"
  - "decision-making"
image: images/cover.svg
linkedin_hook: "Jane Street has trialed interview rounds since summer where candidates write less code and judge more of it. Most hiring loops still grade drafting, the skill AI just made cheap."
takeaways:
  - "Label every round in your loop as drafting, reviewing, deciding or communicating. If drafting is more than half, you are measuring the cheap part."
  - "Hand a candidate a plausible diff with two flaws, one obvious and one subtle. Run it on your best reviewer first. If they miss the subtle one, fix the exercise."
  - "Write down when your hiring loop will next be revised and what evidence would change it. An interview that never changes is a policy nobody owns."
linkedin_question: "If you had to name the one engineer on your team who catches the flaw everyone else approved, would your interview loop have hired them?"
---

On November 2, Jane Street engineer Matthew Saffer [published a short note](https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/) on how the firm interviews software engineers. Since summer it has been trialing onsite rounds where candidates write less code and spend more time on software design, judging the quality and intent of code, and using LLMs to produce it. Most rounds stay traditional, with no LLM. The post is deliberately vague about formats because he'd rather not describe something today that "looks different in six months."

The vagueness drew some grumbling. I think it is the most honest part, and the rest of the note is a useful prompt for any company that hires engineers.

## Your loop measures the part of the job that got cheap

A technical interview is a measuring instrument. For decades the whiteboard or the live coding round was a decent proxy for the job, because writing correct code was slow and expensive and the people who could do it well were rare. Testing the writer made sense.

Generating code is now close to free, and Saffer's note says as much: taste about what to build, choosing abstractions that last and making sure the result is correct are what matter more. A loop with four coding rounds still measures the skill that just got cheaper, with great precision. I wrote earlier that [reviewing is the job now](/2026/reviewing-is-the-job/), and the interview is where that claim is easiest to act on, because you control it completely.

There is a mechanism here that is easy to miss. You cannot test review skill with correct code. A candidate only shows they can judge code when there is something wrong with it, and the interesting flaws are the plausible ones, the diff that passes its tests and misses what the business needed. Most interview material has no flaw in it, so it cannot reveal this skill even if you wanted it to. Universities hit the same wall with [take-home exams](/2026/take-home-exam-is-over/): once the artifact is free, you have to ask the person to defend it.

## The trial is running on the people least likely to have taste

Jane Street says the new rounds are in campus onsites. That is the part I would think about longest.

Taste, in the sense of knowing what to build and which abstraction will age badly, is mostly accumulated scar tissue. Campus candidates have the least of it by definition. So either these rounds measure something adjacent, such as how a person reasons about trade-offs they have never lived through, or they reward whoever sounds most decisive. Both are fine to learn about, and neither is the same as judgment. This is my inference, and I have no visibility into how Jane Street scores it.

The longer-term issue is supply. Judgment comes from writing a lot of code, being wrong, and having someone senior show you why. If companies hire juniors on the strength of how well they steer an LLM and then let the LLM do the writing, they shorten the path to the senior engineers they will need in five years. Your 2030 staff engineers are being hired in 2026, and a hiring loop quietly decides how many of them will exist. Few leadership teams budget for that.

## A hiring loop is also a statement about what you reward

Candidates read your process and adapt to it, and so do the engineers already inside. If you now interview for review and design but still promote people on output, tickets closed and features shipped, the new hires will learn quickly which of the two actually counts. The loop and the performance review have to agree, or the loop only changes who gets hired and not what the company does.

The same applies to the experiment itself. Jane Street is treating its interview as something that gets revised, with a stated direction and a promise to publish more. Most companies treat theirs as a fixed policy that survives three reorganizations, and nobody can say who owns it or what would change it.

## What I would do this quarter

If I were advising a company redesigning its engineering loop, I would start here, in this order:

1. Label every round as drafting, reviewing, deciding or communicating. If drafting is more than half, you are measuring the cheap part.
2. Add one review round. Use a realistic diff, AI-generated is fine, with two flaws, one obvious and one subtle. Run it on your best current reviewer first. If they miss the subtle flaw, the exercise is broken.
3. Decide where LLMs are allowed and say so in advance. Put them in specific rounds and tell the candidate. Surprising someone with a tool policy tests nerves.
4. Grade the questions the candidate asked and the scope they chose to cut, not only the output. If everyone's code would look the same, ask what you would still be able to score.
5. Keep one round without tools for fundamentals. You cannot judge what you could never do yourself, and this round tells you which candidates are borrowing their judgment.
6. Hire juniors on purpose. Give each one real, small production work with a named senior who reads every diff. If you cannot name the senior, you are not ready to hire the junior.
7. Put a date on the loop. In six months, compare interview scores with how the last cohort actually performed, and change the rounds that did not predict anything.

None of this needs a new tool or a consultant. It needs someone senior to own the question of what the company is actually hiring for. If your leadership team is working through how AI changes hiring and the shape of your engineering organization, that is the kind of problem I like thinking through in an [AI advisory hour](/work-with-me/).
