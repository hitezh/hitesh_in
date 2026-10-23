---
title: "A vendor's 1% business can be your 100% dependency"
slug: "vendor-one-percent-your-hundred"
date: "2026-10-23"
description: "eMudhra quit TLS certificates after its CA keys turned out to be guessable. Browsers were patched in hours. The harder question is who patches everything else you run."
categories:
  - "technology"
tags:
  - "security"
  - "platform-risk"
  - "ai-agents"
  - "governance"
  - "decision-making"
image: images/cover.svg
---

On October 22, India's eMudhra [announced](https://emudhra.com/en/press-release/emudhra-to-exit-global-ssl-tls-certificate-business) that it is leaving the global SSL/TLS certificate business, which it says is about 1% of its revenue. Five days earlier a researcher had reported that eight of its intermediate certificate authority keys were tiny numbers. On a curve where a key should be a random 384-bit value, [one of them was 4](https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/).

Most of the argument online is about competence. I find the exit more instructive, because it shows who carries the cost when a vendor decides a product line is not worth the trouble.

## Quitting is the cheapest fix, and only the vendor gets to use it

For a certificate authority whose whole business is certificates, a failure like this is existential. For eMudhra it is a rounding line next to digital signatures, eSign and enterprise PKI, all of which it says continue. So the board can ring-fence the damage and walk away from it. That is a rational decision. It is also one customers have no equivalent of.

To be fair to the company, it says it revoked the affected CAs within 14 hours of discovery, found no evidence of exploitation, and will replace customer certificates free of charge. [BleepingComputer](https://www.bleepingcomputer.com/news/security/mozilla-google-apple-block-compromised-emudhra-ca-certificates/) reports its explanation: a script error in an April 2025 key ceremony created a second, weaker key pair, and similar labels led to the wrong one being used.

Reputation is the main enforcement a certificate vendor faces, and it only disciplines a vendor in the lines where the vendor needs a good name. I wrote last week about [how a vendor's tiny usage number hides your risk](/2026/vendors-rounding-error-your-outage/). This is the sharper version: the vendor did not deprecate a feature, it deprecated the whole line.

So for every vendor you depend on, find out what share of *its* revenue the thing you rely on represents. If it is small, you are renting something the vendor can drop after its first bad quarter. That does not mean avoid it. It means you write the exit plan yourself.

## The browsers were patched in hours. Your estate is mostly not browsers

Chrome and Firefox blocked the intermediates within hours of the report. Scott Helme, who verified the keys himself, also tested what happens outside the browser. On Linux and macOS, default curl, Python and Node [accepted a forged certificate](https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/) for api.stripe.com. Non-browser clients mostly do not check revocation, and many carry their own frozen bundle of trusted roots.

The protection landed where somebody is paid full-time to keep trust current. Everything else waits for a package update: CI jobs, container images built last spring, scripts nobody remembers, devices that never get patched.

AI agents add a new entry to that list. Every tool call an agent makes to an outside API is an HTTP client with no human watching and credentials in memory. Its trust settings are whatever the base image shipped with. Ask who owns the CA bundle inside your agent runtime. My guess is that in most companies the honest answer is nobody, and a forged certificate in front of an agent holding API keys is the interception that matters. It is the same concentration I described when [your AI gateway holds every key](/2026/your-ai-gateway-holds-every-key/): the more credentials sit behind one client, the more its boring defaults matter.

## Every structural check passed

According to Helme, the keys were valid points on the curve, correctly encoded, and passed every structural check. The only test that exposed them was trying to recover the private key, which takes at most 255 guesses and under a second. The keys had existed since April 2025, roughly a year and a half, before an outside researcher scanning public data looked. Certificate Transparency logs show no certificates issued from these CAs, so the damage is probably limited, but that is luck plus a good public log rather than design.

I see the same shape in AI systems that [pass every test and still get it wrong](/2026/when-ai-passes-every-test-and-still-gets-it-wrong/). Tests that check form tell you the thing is well-formed. They say nothing about whether it is strong. Anything that generates a secret, a model output, or a trust relationship needs at least one check written by someone trying to break it.

The obvious objection is that the system store should solve this: update one place and everything follows. It helps, and where it exists you should use it. It does not reach containers with their own bundle, vendored language runtimes, or hardware with a certificate list frozen at the factory.

## What I'd ask on Monday

1. **How long would it take to replace a root of trust?** Pick one CA from your bundle and count the places it lives: images, runtimes, devices, agent sandboxes. Time the replacement as a drill, not a hypothetical.
2. **What share of each critical vendor's revenue are you depending on?** Anything below a few percent needs a written exit path.
3. **Who owns the unattended clients?** Include agents and CI. Where an agent talks to three APIs, let it trust those three issuers rather than the whole public store.
4. **Where is the adversarial check?** For key generation, model evaluations, anything that creates trust, someone should be paid to try to break it before an outsider does.

Trust is bought from a supplier, but the cost of replacing it is paid by whoever runs the software. If you want a second pair of eyes on what your AI agents trust and who owns it, that is a good use of an [advisory hour](/work-with-me/).
