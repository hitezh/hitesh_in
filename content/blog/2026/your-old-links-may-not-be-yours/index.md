---
title: "Your company's oldest links may not be yours anymore"
seoTitle: "Old Bitly links hijacked: what every company should audit"
slug: "your-old-links-may-not-be-yours"
date: "2026-11-16"
description: "Bitly links from 2011 now open pages Burger King never chose. Anything you published on a vendor's namespace is a lease, and most leadership teams don't know when it ends."
categories:
  - "technology"
tags:
  - "security"
  - "strategy"
  - "governance"
  - "infrastructure"
  - "ai-agents"
image: images/cover.svg
linkedin_hook: "A 2011 Burger King tweet now links to a page Burger King never chose. No account was hacked: the vendor let someone re-register an old short link. What else have you published on someone else's namespace?"
takeaways:
  - "List every identifier you published but a vendor owns: short links, QR codes, tracking redirects, sender domains. If the list takes more than a week, nobody owns it."
  - "Stop printing vendor short links on anything permanent. Use a short domain you own, so you can repoint it in minutes without asking anyone."
  - "Check what happens to your links if the account lapses. If you cannot say who gets the link next, treat it as already lost."
linkedin_question: "Which links, QR codes or identifiers your company published years ago would hurt you most if someone else controlled them tomorrow?"
---

On November 15, a 2011 Burger King tweet about its restaurant locator started opening Wikipedia's list of Nazi concentration camps. A McDonald's tweet from the same year opened the article on the September 11 attacks. Neither company was hacked. Bitly [said](https://ransomnews.com/burger-king-tweet-bitly-link-hijack-2026/) it had found an issue that "allowed bad actors to repurpose certain old, inactive links," and [CNN](https://www.cnn.com/2026/11/15/business/political-and-corporate-x-posts-have-links-redirecting-to-vulgar-racist-or-random-websites) reported the same pattern in old posts from other political and corporate accounts.

One independent [audit](https://dev.to/frankchu/57-of-97-trump-bitly-links-arent-the-original-anymore-3ofp) of 97 Bitly links in Donald Trump's early tweets found only 40 still original. I could not verify that count myself, and it is one blogger's work. The mechanism is simple enough to trust anyway: the part of the link after the slash was claimed by someone new, and every copy of the old link followed.

I read this as a story about leases, and most companies have more of them than they have counted.

## The attacker borrows your credibility

Nobody stole a password here. The attacker took over a link that sits inside a verified, fifteen-year-old post, which is about the most trusted placement a link can have. What makes the hijack valuable is the reputation of the place the link lives, and that reputation only grows with age. Time works for the attacker.

That inverts how most security reviews rank risk. We worry about what is new and exposed. The expensive exposure here was the oldest and quietest asset in the company's history.

## "Inactive" is the vendor's definition

Bitly decided those links were inactive. Burger King printed them into the permanent record. Those two clocks run at different speeds, and the vendor controls only one of them.

A free or cheap namespace has to be recycled sooner or later, because abandoned entries cost money to keep. That is a reasonable business decision for the vendor, and a lease for you. Phone numbers get reassigned, domains lapse, and DNS records [point at things nobody owns anymore](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/10-Test_for_Subdomain_Takeover). The pattern repeats wherever an identifier outlives the contract behind it.

I covered a version of this with [platform vendors holding your secrets](/2026/assume-vendor-loses-your-secrets/) and with [a vendor's rounding error becoming your outage](/2026/vendors-rounding-error-your-outage/). The common thread is that the vendor's incentives are fine, and your assumption of permanence is the part that was never written down.

Retail and loyalty teams should look hardest. SMS campaigns, receipts, packaging and in-store QR codes all lean on short links, and many of those get printed or sent years before anyone audits them.

## The next reader is a machine

This part is my inference, not something I have seen documented with Bitly. A person who lands on a strange page after clicking a 2011 link usually notices. An AI agent that reads an old README, PDF or email thread and follows the link has no such instinct. Whatever the redirect returns goes straight into its context, which makes a hijacked link a delivery route for instructions you never wrote.

I raised the same worry in [Your coding agent now takes instructions from your software vendors](/2026/vendors-write-your-agents-instructions/). Old documents are about to become an input channel for software that acts on what it reads, so their links deserve the scrutiny you give to new ones.

## What I would do on Monday

1. **Inventory what you published but do not own.** Short links, QR codes, tracking redirects, email sender domains, webhook URLs in partner documentation. If assembling the list takes more than a week, you have found the real problem: nobody owns it.
2. **Check creation dates on the links you can.** For Bitly, adding a plus sign to the link shows when it was created. A link created after the post that contains it is suspect.
3. **Move new links to a short domain you own.** A redirect service is a small amount of engineering. The test is whether you could repoint a link in minutes without asking a vendor.
4. **Stop printing vendor links on permanent things.** Packaging, books, signage and annual reports will outlive the account.
5. **Read the lapse terms.** If you cannot say who gets your link after you stop paying, assume a stranger does. When the fee is trivial, keep paying it.
6. **Constrain what your agents will follow.** Allow named domains, and treat redirects to anything else as untrusted input. Test it by pointing an agent at a link you control and seeing whether it follows.

## The question to carry into Monday

Which links, codes and identifiers did your company publish years ago that would hurt most if someone else controlled them tomorrow? If you are mapping which of your software and AI dependencies you actually control, that is the kind of problem I work through in an [AI advisory hour](/work-with-me/).
