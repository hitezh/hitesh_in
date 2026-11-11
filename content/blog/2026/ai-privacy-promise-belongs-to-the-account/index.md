---
title: "Your AI vendor's privacy promise belongs to the account, not the product"
slug: "ai-privacy-promise-belongs-to-the-account"
seoTitle: "AI privacy promises attach to accounts: the Gemini human review lesson"
date: "2026-11-10"
description: "Google says a subset of Gemini Connected Apps data is human reviewed on consumer accounts, while Workspace says it is not. Which login your team uses is the control."
categories:
  - "technology"
tags:
  - "ai"
  - "ai-strategy"
  - "governance"
  - "security"
  - "data-privacy"
image: images/cover.svg
linkedin_hook: "Google's own help page says a subset of consumer Gemini Connected Apps data is reviewed by humans. Its Workspace page says the opposite. Same product name, different promise, decided by the login."
takeaways:
  - "Ask five employees which account they use for AI tools at work. If any answer is personal, your enterprise privacy terms do not cover that usage."
  - "Treat vendor privacy pages as a dependency. Put the two or three pages your contracts rely on in a calendar review and diff them quarterly."
  - "Do not test for data exposure by asking the model. Retrieval is probabilistic, so a clean result proves nothing. Use account and admin settings instead."
linkedin_question: "If an employee connected a personal AI account to their work Drive today, would anyone at your company find out?"
draft: false
---

Google's [help page for Gemini Connected Apps](https://support.google.com/gemini/answer/16836988) says that "a subset of Connected Apps data processed by Gemini is reviewed by human reviewers," and lists what they may see: "interactions, summaries, excerpts and inferences from your relevant emails and files." It also advises people not to connect apps that contain confidential information.

A GitHub write-up that [hit the top of Hacker News](https://github.com/thisisme6598/gemini_files/) went further, claiming Google reversed an earlier promise and that ordinary chats can trigger background lookups of your Drive and Gmail. I could not verify those parts. The author offers anecdotal tests, with no logs or sample sizes, and I could not confirm the 2023 wording it says was changed. Google's help page is the primary source, and it is enough for what follows.

## The promise is attached to the login

The same page is about consumer accounts. Google's [Workspace privacy hub](https://knowledge.workspace.google.com/admin/generative-ai/generative-ai-in-google-workspace-privacy-hub) says Workspace content is "not human reviewed or otherwise used for Generative AI model training outside your domain." Same company, same model family, same name on the button. The difference is the contract behind the account that is signed in.

One pattern I've noticed is that leadership teams negotiate the enterprise agreement and then assume it follows the product. It follows the identity. An engineer who opens the AI assistant in a personal browser profile, connects it to a shared folder because it is convenient, and pastes in a customer spreadsheet has stepped outside every term you negotiated. Nothing malicious happened. A login did.

That makes identity the new data-loss boundary. Your DLP (data loss prevention) tooling probably classifies files and email. Very few teams classify which account an employee is using when the file is read.

## Reviewers see derived data, which your controls were not built for

The help page says reviewers may see summaries, excerpts and inferences, not only the original file. That matters because most controls attach to the document: a label, a folder permission, a retention rule. A summary of a board deck is a new artifact with none of those attached. If your policy says "confidential files stay in Drive," the answer to "where did the summary go?" is often nobody's job.

## Policies get edited in place

The write-up alleges that a 2023 blog post was edited later to reflect the new position. I can't confirm that. What I can say is that vendor privacy language changes, usually without a press release, and that most companies treat it as fixed at signing. Treat the pages your decisions rely on like any other dependency: record what they said on the day you approved the tool, and check them on a schedule. The same logic applies to [vendors writing instructions into your coding agents](/2026/vendors-write-your-agents-instructions/): the terms you reviewed are not necessarily the terms in force today.

## You cannot test your way to safety

The write-up describes four outcomes for the same prompt: no retrieval, a generic summary, a short excerpt, or full ingestion. If that is accurate, the useful lesson is general. When retrieval is probabilistic, a test that returns nothing proves nothing. Exposure has to be controlled upstream, through which accounts and connectors are allowed at all, because you cannot enumerate the prompts that might trigger a lookup. This is also why I'd rather an AI pilot [start from the workflow and its data](/2026/your-backlog-is-the-benchmark/) than from the tool someone already likes.

## What I would do this month

1. Ask five people from different teams which account they use for AI tools at work. If one says personal, you have found the real policy.
2. Block or alert on personal AI accounts connecting to company storage where your admin console allows it. If it can't, record that as a known gap.
3. List the AI tools your teams use and mark each as consumer, business or enterprise tier. Any tool you cannot place is a risk.
4. Decide which data classes may never reach a consumer-tier assistant, and write them as three or four examples, not a policy document.
5. Save the current privacy and human-review pages for each tool you approve, with the date.
6. Re-read them every quarter. A change in who may read your data is a change in your risk register.
7. Give people an approved option that is as easy as the consumer one. Convenience is the actual competitor.

The question to carry into your next leadership meeting is which of your AI tools your employees are signed into, and what that login promises you.

If you want a second pair of eyes on how your team uses AI tools and where the data goes, that is what the [AI advisory hour](/work-with-me/) is for.
