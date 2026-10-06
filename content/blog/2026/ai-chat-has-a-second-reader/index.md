---
title: "A woman used Claude as a diary. Your team uses it as a whiteboard."
slug: "ai-chat-has-a-second-reader"
date: "2026-10-06"
description: "A Florida woman's Claude diary entry reached the police through a human reviewer. Every AI tool has a second reader, and most company data policies never mention who it is."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "governance"
  - "security"
  - "ai-strategy"
  - "trust"
image: images/cover.svg
draft: false
---

A Florida woman who used Claude as a diary is now facing a felony charge. According to [TechSpot's account of the arrest report](https://www.techspot.com/news/114091-florida-woman-used-claude-diary-anthropic-reported-shoot.html), she wrote that she planned to "shoot up" the local Sheriff's office, Anthropic's safety systems flagged the entry, a human reviewer judged it a credible threat, and the company passed it to law enforcement. Deputies were at her door soon after.

I am not going to argue about whether that call was right. Reasonable people are already fighting about it, and the facts will come out in court. The part that matters for a company is smaller and more boring: **a chat window with an AI vendor has a second reader**, and that reader has a policy you did not write.

## Your vendor's threshold is set by its own liability

Look at the incentives the same report describes. A month earlier, OpenAI was [sued by British Columbia](https://www.techspot.com/news/114091-florida-woman-used-claude-diary-anthropic-reported-shoot.html) over a mass shooting, after its safety team had flagged the shooter's conversations and decided they did not meet the bar for a referral. A vendor in that position has one safe direction to err in. Reporting a false positive costs the vendor a bad news cycle. Missing a true positive costs it a lawsuit.

That asymmetry is not a criticism, it is just arithmetic, and it means the threshold will drift toward over-reporting. The person who absorbs the cost of a false positive is the customer. I made a similar point about [ID requirements for frontier models](/2026/when-your-ai-asks-for-a-government-id/): vendor policies look like safety features, but they are also product decisions made for the vendor's own protection, and you inherit them.

## The whiteboard is more candid than the email

The diary use case is a leading indicator, not a curiosity. People type things into a chat box that they would never send in email, because it feels like thinking rather than communicating. The corporate version is easy to picture: a draft of a layoff list, an HR complaint someone is trying to word carefully, a half-formed acquisition thesis, a customer's account details pasted in to get a summary.

Most AI usage policies I have seen are organized around one question: will the vendor train on our data? That is a fair question, but it is the wrong center of gravity. The better questions are who can read this, under what trigger, and what do they do next. Companies learned in the early 2000s that email is a record, usually the hard way, in discovery. A chat transcript is the same lesson, with a third party sitting in the room.

## Context is the first thing a reviewer lacks

A classifier and a reviewer at the vendor see a snippet. They do not see your org chart, your job titles, or the fact that this is a Tuesday in a security team's calendar.

Consider who writes alarming text for a living. A fraud analyst drafting how a scam works. A red team writing an attack narrative. A bank compliance officer describing a money-laundering typology so a model can help build detection rules. A trust and safety lead summarizing threats made against staff. Their ordinary work, read without context, looks like the thing a safety system exists to catch. The vendor's reviewer is making a judgment about intent with none of the facts that would settle it.

If I were advising a company with teams like that, I would not start with a ban. I would separate the work by sensitivity and decide, deliberately, where each kind of work is allowed to happen.

## Three things I would change on Monday

**Ask the escalation question in procurement.** Add one section to your vendor questionnaire: what content triggers human review, who sees it, when does the vendor disclose to authorities, and will it notify you first where the law permits. The answer will differ by plan and by vendor. Having it written down is the point, the same way you would ask for a SOC 2 report.

**Match the deployment to the sensitivity.** Everyday drafting and coding help can sit on a hosted tool under enterprise terms. Work whose normal vocabulary looks alarming, or whose content is genuinely privileged, is a candidate for a deployment where you control the logs. [Local models have stopped being toys](/2026/local-models-stopped-being-toys/), and this is one of the places that fact earns its keep.

**Rewrite the policy as examples.** "Do not enter confidential data" is a sentence people nod at and then ignore. A list of five concrete things that should not go into a hosted chat, and why, gets read. Also tell people plainly that the tool is not a diary. They are going to treat it as one anyway, so say it before they find out otherwise.

## Governance that follows the data

The logging gap I wrote about in [what your agents did](/2026/what-your-agent-did/) and this one are two halves of the same problem. In one, you cannot see what the AI did. In the other, you did not know who could see what your people told it. Both are visibility problems, and both are cheap to fix before an incident and expensive after.

The companies that handle this well will not be the ones with the strictest AI policy. They will be the ones that can answer, in one page, where each category of work is allowed to go and who else is reading when it gets there.

If you are working out where that line should sit for your teams, that is exactly the kind of question I take on in an [AI advisory hour](/work-with-me/).
