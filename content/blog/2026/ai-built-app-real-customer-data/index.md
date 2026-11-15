---
title: "Your AI-built prototype becomes a liability the day it holds real customer data"
slug: "ai-built-app-real-customer-data"
seoTitle: "AI-built apps and customer data: where the liability sits"
date: "2026-11-15"
description: "A study of 159,041 Lovable apps found customer records open to anyone. The builder's work is cheap now, but the review and the legal responsibility still sit with you."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "security"
  - "governance"
  - "ai-strategy"
  - "product-strategy"
image: images/cover.svg
linkedin_hook: "Researchers checked 159,041 Lovable apps. 24,664 handed database records to any browser, some with passport numbers. Your AI-built prototype is a liability the day real customers sign up."
takeaways:
  - "List every app built outside engineering. If you cannot produce that list in a day, you have an inventory problem before you have a security problem."
  - "Open each app logged out and read what the browser receives. If you can see customer records without signing in, so can anyone."
  - "Make a permissions review the condition for the first real customer, not an annual task. Repeat it after any significant change."
linkedin_question: "Which tools in your company were built by someone outside engineering, and who checked who can see what in them?"
---

In November, the security firm Crissy Field, working with the newspaper Handelsblatt, [published an analysis of 159,041 apps built on Lovable](https://www.crissyfield.de/research/lovable-en/), the AI platform that turns plain-language descriptions into web applications. Of the 34,545 that used the Supabase database, 24,664 sent database records to any visitor's browser as soon as the page loaded. In 7,403 of those, a few extra read-only requests returned tables containing email addresses.

The authors are careful to say this is not a confirmed leak rate. Some of that data is meant to be public, and the sample is not representative. The examples they did find were not ambiguous: 80,000 forum profiles and 200,000 chat messages, tenant emails summarized by AI, and more than 1,000 records with passport numbers. No login, no exploit.

I don't read this as a story about Lovable. I read it as a preview of what happens inside any company where AI has made building cheap.

## The prompt describes features, and nobody prompts for permissions

Someone types "a portal where tenants can see their invoices." The app works. Tenant A logs in and sees invoices. The demo passes and everyone is pleased.

Whether tenant B can also see tenant A's invoices is a different question, and the demo never asks it. A permission is a negative requirement: something that must not happen. When a feature is missing you notice immediately. When a permission is missing, nothing breaks and nothing complains, which makes security the one category of defect that sails through a demo. An AI optimizing for an app that visibly works has no signal telling it the rule is absent. The person prompting usually has no idea the rule exists.

## The review used to arrive bundled with the developer

Hiring a developer was never only about typing. A developer, even a mediocre one, came with a second opinion on how data was stored, a vague unease about open tables, and a team that might review the pull request. That review was implicit and never itemized in the cost.

Remove the developer and the review goes with them. Nobody decided to skip it. This is why I think the usual framing of "AI made software cheap" is incomplete. It made the visible part cheap. The invisible part, the judgment about who should see what, is now an explicit task that someone has to be assigned.

## The responsibility stays where the data was collected

The study notes that Lovable's marketing repeatedly says no technical knowledge is needed, while its terms put responsibility for security on the customer. The database vendor's defaults may deserve a share of the blame as well. A regulator will not care. Under data protection law such as the [GDPR](https://gdpr-info.eu/art-33-gdpr/), the business that collected the data owns the breach, including the duty to notify the regulator within 72 hours. I am not a lawyer, but I have not seen a regime where "the platform made it easy" works as a defense.

This is how most platforms that sell "you can do this yourself" work. They capture the revenue from the build and the buyer carries the tail risk. I made a [similar point about vendors that move into your category](/2026/when-your-ai-vendor-ships-your-product/): the platform commoditizes a layer and leaves you the accountable one.

## One mistake becomes ten thousand

The researchers note that Lovable's database integrations follow recurring patterns, so an approach that works against one app may work against many. That is the part executives underestimate. A hand-built app was partly protected by being unique, since an attacker had to study each one. A thousand apps generated from the same template share the same weaknesses, and one scan finds them all.

The cost of creating a vulnerable app fell, and so did the cost of finding one. Attackers got the same productivity boost the builders did. It is the same dynamic I described in [why coding agents should be limited by blast radius](/2026/coding-agents-blast-radius-job-title/): the control that matters is how much damage one mistake can do.

## Gate on the data, not the tool

I'm in favor of non-engineers building prototypes. An AI prototype is a cheap way to reduce uncertainty about whether anyone wants the thing, and I would not slow that down. The risk is the quiet promotion: a demo built for a pilot gets a real customer list, then payments, then someone's ID scan, and on no particular day does anyone decide it is now production.

So draw the line at data. A prototype with synthetic data can be built by anyone, with any tool. The moment it touches real customer data, it needs the review a developer would once have given it for free. The objection is that this adds friction. It does, and a day of review costs far less than a notification letter to 80,000 people.

If I were setting this up, I would do these in order:

1. Inventory every app built outside engineering, including marketing and operations. If you cannot list them in a day, start there.
2. Sort them by data, not by tool: customer personal data, payment details and identity documents go to review first.
3. Open each one logged out and look at what the browser receives. If you can read records, so can everyone else.
4. Log in as one user and try to reach another user's data. A failure here is the most common one.
5. Make the review a condition for the first real customer, and repeat it after significant changes.
6. Read the vendor's terms for who is responsible, and put the review cost in the budget for the app.
7. Write down who must be told, and how fast, if a record leaks. If that takes a meeting to answer, you are not ready.

Any company that lets teams build with AI will soon have more tools than anyone has counted. Deciding which of them are safe to put in front of customers is the kind of judgment call I work through in an [AI advisory hour](/work-with-me/).
