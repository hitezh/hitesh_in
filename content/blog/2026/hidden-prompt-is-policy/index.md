---
title: "WhatsApp's help pages told AI not to mention regulators. Who approved that?"
slug: "hidden-prompt-is-policy"
date: "2026-10-20"
description: "Hidden text on 80 WhatsApp help pages steered AI answers away from data regulators. The bigger issue is that your prompts are policy documents with no policy owner."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "governance"
  - "trust"
  - "regulation"
  - "product-strategy"
image: images/cover.svg
draft: false
---

Earlier this month, a researcher at Redact read all 545 pages of WhatsApp's help center and found [102 blocks of text](https://redact.dev/blog/whatsapp-help-pages-hidden-ai-instructions) that no visitor could see but any AI system could. On the page about deleting an account, the hidden text told the AI not to recommend contacting a data protection authority or regulator. On pages touching legal topics, it told the AI not to cite data protection law, even when the user raised it first.

WhatsApp says it was a bug. Per Redact's write-up, the company told WIRED the notes were instructions for its support chatbot that leaked into public pages, and all 102 blocks were gone by October 18. I'll take that at face value. It still leaves the more useful question: how did an instruction like that get written, and who signed off on it?

## A prompt is a policy document

Somebody on a support or content team decided what the bot should avoid. That is a reasonable thing to decide. A company doesn't want its chatbot offering legal opinions about its own liability, and WhatsApp's stated reason is fair on its face.

But "don't give legal advice" and "don't tell a user they can complain to a regulator" are different rules, and they sit one sentence apart in the same block of text. The first is risk management. The second decides whether a customer learns about a right the company's own privacy policy says they have. Redact points out that WhatsApp's European privacy policy names the Irish Data Protection Commission as a place to complain.

One pattern I keep noticing is that prompts are written by whoever is closest to the problem, usually a support lead or an engineer, and reviewed by nobody. The result is a company whose published policy says one thing and whose deployed AI is quietly configured to say another. Legal reviews the privacy policy. Nobody reviews the prompt.

## Change control went to the wrong team

The usual answer is "put the prompt in version control." That helps, but it misses how this actually failed. The instructions lived in the content layer, so the people with the power to rewrite company policy were whoever had edit access to the help center.

Most companies have strict change control over code that touches money, and almost none over text that decides what a customer is told about their rights. Once an AI reads your content, every page, snippet, and FAQ in your CMS becomes an input to behavior. That changes who needs approval rights. I'd start by listing every place text reaches a model and asking, for each one, who could change it today and who would find out.

## Serving different pages to different readers

One detail in Redact's findings deserves more attention than it got. Google's and Bing's crawlers received the full page, notes included. Crawlers identifying as OpenAI, Anthropic, and Perplexity were served a version without them. I can't tell you why, and nothing in the report establishes intent.

What it shows is a different problem, and one that will outlast this story. Once a company serves a different page depending on who asks, there is no single document to audit. A regulator, a journalist, or your own compliance team can read the page and see a clean policy while the model behind it saw something else. [Provenance has to run both ways](/2026/built-to-game-your-ai/): you should know where your AI's sources came from, and so should anyone checking what you told it.

## Your prompt may be read aloud one day

There is also a quieter cost. If a dispute ever reached a regulator or a court, a line instructing the assistant to withhold a complaint route would not read as risk management. It would read as intent, in the company's own words, with a timestamp. "Bug" is a fine explanation for how the text got published. It is a weaker answer to why the text existed.

I'd write every instruction as if it would be quoted back to me. Most prompts would survive that. A few wouldn't, and those are exactly the ones worth a second look.

## What I would do on Monday

- **Inventory every instruction that shapes a customer-facing answer.** Prompts, help-center text, retrieval sources, tool descriptions. Name an owner for each.
- **Route any instruction touching legal rights, refunds, complaints, or data through the same review as the policy it mirrors.** If legal wouldn't approve the sentence in a terms page, it doesn't belong in a prompt.
- **Test the bot against your own published policy.** Ask it how to complain, how to delete data, how to cancel. Compare the answer to what your site says. I'd run this monthly, because prompts drift the same way code does.
- **Serve one version of the truth.** If humans and machines see different pages, you have built something you can't audit.

An [agent that can't be audited](/2026/what-your-agent-did/) is one failure. A customer-facing assistant whose instructions contradict your public promises is another, and it is cheaper to catch. Europe already learned with the [cookie banner](/2026/consent-theater/) that what a company says and what its interface does can drift apart without anyone deciding it should.

If your AI support layer is going live and nobody has asked who owns what it is told to say, that is a good problem to work through in an [AI advisory hour](/work-with-me/).
