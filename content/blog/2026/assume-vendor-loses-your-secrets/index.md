---
title: "Assume your platform vendor will lose your secrets"
slug: "assume-vendor-loses-your-secrets"
date: "2026-10-31"
description: "Railway, OpenCode and Northflank each told customers to rotate their secrets within two weeks. The useful question is what a stolen key costs you before you notice."
linkedin_hook: "In 13 days, Railway, OpenCode and Northflank each told customers to rotate their secrets. Assume your platform vendor is next."
takeaways:
  - "Time a full secret rotation. If it takes more than a day, that is your real risk."
  - "Put hard spend caps on every AI key. A capped leak is an annoyance. An uncapped one is an incident."
  - "Plant a few fake keys next to the real ones and alert on any use. It is the cheapest early warning you can buy."
linkedin_question: "How long would it take your team to rotate every secret you have stored with a vendor?"
categories:
  - "technology"
tags:
  - "ai"
  - "security"
  - "infrastructure"
  - "governance"
  - "engineering-leadership"
image: images/cover.svg
---

In thirteen days, three platforms that hold other companies' secrets told their customers to rotate them. OpenCode [confirmed on October 17](https://www.paubox.com/blog/opencode-console-breach-puts-openai-and-other-api-keys-at-risk) that attackers had reached its Console service, where users store keys for OpenAI, Anthropic and Google. Railway [disclosed on October 21](https://blog.railway.com/p/security-disclosure-wednesday-october-21st) that an unauthorized party may have decrypted some customer environment variables. On October 30, [Northflank's status page](https://status.northflank.com) went further: "Assume all environment variables have been decrypted. Disable/rotate all keys." Customers were already reporting that their AI keys had been used by someone else.

I would not read this as three unlucky vendors. All three are modern platforms that sell the idea of keeping your workloads safe, and I assume they had reasonable defenses. I read it as a pattern, and the pattern changes what a CTO should plan for.

## An AI key is the most liquid credential you own

Most stolen credentials need a second step. A database password is only useful if the attacker can reach the database and then do something with the data. An AI provider key needs nothing else. Whoever holds it can run inference at your expense immediately, or resell the access, from anywhere, with no interest in your product or your customers.

That is why these platforms are attractive. A multi-tenant platform is a single place where thousands of companies' keys sit together, so one successful intrusion pays out thousands of times. Northflank's own status page ties the reports to a wider pattern of attacks on AI credentials. I could not independently confirm the report it cites, so treat that attribution as theirs, but the economics hold without it.

## "Encrypted at rest" does not mean what leaders think it means

A platform that injects your secrets into your running workloads has to be able to decrypt them. That is the product. So "your secrets are encrypted" tells you about a stolen disk and nothing about an attacker inside the platform, which is the case Railway and Northflank described. Both ended up telling customers to assume decryption had happened.

If the vendor can read your secret, an attacker who gets into the vendor can too. Plan on that basis.

## Your response time is the control

Look at the Northflank timeline. A threat alert fired at 11:43 UTC, engineers were reviewing it a minute later, and the first patches went out within about twenty minutes. The vendor moved fast, and customers were still told hours later to rotate everything. By that evening, AI keys had been abused.

Once a vendor has an incident, your exposure depends on how quickly you can rotate and how much damage a key can do in the meantime. Neither is in the vendor's hands. I would guess most teams have never timed the first and have not thought hard about the second.

The same logic applies closer to home. The [LiteLLM compromise](/2026/your-ai-gateway-holds-every-key) hit a gateway that holds every provider key. This week a backdoored Claude Code extension spent about eleven hours on the Cursor marketplace, and [Cursor's advice](https://cursor.com/blog/claude-code-extension-security-notice) for affected machines was to rebuild them and rotate every credential they could reach. Different entry points, one question: what can be stolen from the place I keep my keys, and how fast can I replace it?

## What I would put in place

None of this needs a transformation program. Most of it is a few days of work for a small team, and I would do it in roughly this order:

1. Time a full rotation. Pick a Friday and rotate every secret your team has stored with a platform vendor. If it takes more than a day, or nobody can list them all, you have found the real risk. Make rotation a script, not a scramble.
2. Cap what a stolen key can spend. Set per-key and per-project budgets at the AI provider, with hard limits rather than alerts alone. Use separate keys per service so one leak does not become every leak. A bill capped at a few hundred dollars is an annoyance. An uncapped one is an incident.
3. Plant tripwires. Put a few fake keys next to the real ones in each environment, wired to something that alerts a person when they are used. An attacker who sweeps environment variables will try them. It is the cheapest early warning you can buy.
4. Watch provider usage like you watch production. Route billing and usage anomalies from your AI and cloud providers to whoever is on call, not to a finance inbox read monthly. Northflank's customers found the abuse in their own usage logs.
5. Stop storing what you can fetch. Prefer short-lived credentials and workload identity over static keys sitting in a platform's settings. For the few secrets that really are crown jewels, consider encrypting them in your own application with a key the platform never holds.
6. Know who holds what. Keep a simple register of every vendor that stores a credential of yours, what it can reach, and whether you can see audit logs. Northflank only [enabled audit logs for all customers](https://status.northflank.com), including free users, in the middle of the incident.
7. Write the first hour down. When a vendor says "assume compromise," who rotates, who checks billing, who tells customers, and who do you call for forensic help? One page, agreed in advance, is enough.
8. Ask vendors better questions at purchase time. Where are secrets decrypted, who can reach that system, can I bring my own cloud, and what do I get to see when something goes wrong? Choose on those answers as well as on developer experience.

Some people reading these incidents are calling this an emergency, and given the last two weeks I understand why. I would still choose calm and rehearsed over alarmed. The companies that come through the next one well will be the ones that already know how long their rotation takes.

If you are working out how much of your AI stack is exposed and in what order to fix it, that is a good use of an [AI advisory hour](/work-with-me/).
