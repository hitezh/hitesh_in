---
title: "Browsers distrusted a broken CA in five hours. Your servers will take longer."
slug: "emudhra-ca-keys-patch-speed"
date: "2026-10-21"
description: "Eight weak eMudhra CA keys were blocked in Firefox within hours. Everything else needed a software update. How fast you can patch is a leadership decision, not an IT detail."
categories:
  - "technology"
tags:
  - "security"
  - "infrastructure"
  - "engineering-leadership"
  - "strategy"
  - "india"
image: images/cover.svg
---

On October 17, a researcher told Apple, Chrome, Microsoft and Mozilla that eight intermediate certificates from eMudhra, an Indian certificate authority (CA) listed on the NSE, had private keys anyone could recover. By Mozilla's [own timeline](https://bugzilla.mozilla.org/show_bug.cgi?id=2083449), Firefox users were protected about five hours after the email went out. They did nothing.

The keys had been exposed since April 2025. That is the number I would put in front of a leadership team: eighteen months to notice, five hours to fix, for the people who happen to use a browser.

Everyone else needed a software update, and some were still waiting on one days later.

## The same incident was two different events

A CA vouches for websites, and an intermediate certificate lets it delegate that vouching. If someone holds the private key of an intermediate, they can mint a certificate for any site that clients will accept. [BleepingComputer reports](https://www.bleepingcomputer.com/news/security/mozilla-google-apple-block-compromised-emudhra-ca-certificates/) that some of the keys were integers below 256, so recovering one meant trying at most 256 guesses. One was published as the number 4.

Browsers handled this centrally. Mozilla pushed a revocation list, Chrome did the same for the six TLS intermediates, and Apple and Microsoft followed over the next two days. The rest of the software world needed a release. Go, Python's certifi, rustls and Electron shipped fixes. When BleepingComputer published, Debian, Node.js, Bun and FreeBSD were still pending, and it warned that macOS's built-in curl may keep trusting the certificates.

The pattern is worth noticing. The most protected part of any company's estate is the part it did not build. Every time a team ships its own trust store, in a static Go binary, an Electron app, a container image or a mobile SDK, it takes over a job the browser vendors do centrally. That is often a sensible choice. It is rarely a recorded one.

## Time to remediate is an inventory problem

Manufacturing has a useful comparison. How fast a car maker can run a recall depends less on how loudly it announces the defect and more on whether it can trace affected parts to specific vehicles. Software has no VIN numbers by default.

So the question for a CTO is plain: if I told you today that one root certificate must stop being trusted everywhere, how many hours until you could say it was done? Leadership teams often measure vendor risk by contracts, certifications and uptime guarantees. Very few measure how quickly they can change what is already running. I would argue the second number is the better predictor of how a bad week goes.

It's also why I wouldn't lean on the vendor's compliance story. By eMudhra's account, the keys were generated in hardware security modules (HSMs) it describes as FIPS 140-2 Level 3 compliant. A script bug created a second, weaker key pair, and similar labels led staff to use the wrong one. The audited hardware worked. The human step did not. Certifications describe controls, and incidents happen in the gaps between them. Plan for the vendor failing, because you can't audit the moment it happens.

There is a quieter lesson in the fix list. Two of the eight certificates were for code signing, trusted by Microsoft. Outside the browser, nobody pushes revocation to you, and that is where I would expect the slowest cleanup.

## What limited the damage was not the CA's controls

Three things worked, and none of them belonged to eMudhra. The researcher disclosed to every root program at once. Browsers had revocation plumbing built years ago. And [Certificate Transparency](https://emudhra.we-have-a-problem.com/), the public log of issued certificates, means that clients enforcing it could not have been attacked: no certificates from these keys appear in the logs, according to the disclosure page.

The strongest control in that list is a record nobody can quietly edit. Prevention failed for eighteen months. Visibility is what lets anyone say the damage stopped at zero. I made [the same argument about agents](/2026/what-your-agent-did/): when you can't prove what a system did, you end up trusting the vendor's account of it.

Automation mattered too. eMudhra says it is migrating about 30,000 certificates, mostly issued through ACME, the automated issuance protocol. A company whose certificates renew themselves can switch authorities with a configuration change. A company that orders them by email is running a project.

## What I would do this week

1. **List every place a trust store ships.** Base images, language runtimes, desktop and mobile apps, partner integrations, and the AI agents and tool servers your teams are adding. Each of those is another HTTPS client carrying its own list of who to believe, and the number grows faster than anyone is counting. Put an owner next to each.
2. **Time a drill.** Pick a root, pretend it is gone, and measure the hours until every system is rebuilt and redeployed. Report that number the way you report uptime.
3. **Automate certificate issuance and keep a second CA configured.** Switching vendors should be an afternoon. It's the same logic as [owning what you can't easily leave](/2026/cheap-to-fork-costly-to-keep/).

The strongest teams treat vendor failure as a certainty and design for a short recovery rather than hunting for a spotless supplier. A CA losing its keys is the vendor's problem. Not knowing where those keys were trusted is yours.

If you want help working out how quickly your own estate, including the AI systems quietly adding new clients to it, could absorb a failure like this, that is a good use of an [advisory hour](/work-with-me/).
