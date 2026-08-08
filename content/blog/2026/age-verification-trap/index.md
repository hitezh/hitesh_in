---
title: "The age verification trap"
slug: "age-verification-trap"
date: "2026-06-26"
description: "Governments worldwide are mandating age verification for social media in the name of child safety. The 70% failure rate in Australia tells you everything: the system doesn't protect kids, but it does collect their parents' government IDs. That data sticks around."
categories:
  - "technology"
tags:
  - "privacy"
  - "surveillance"
  - "internet"
draft: false
---

Australia banned under-16s from social media in December 2025. Platforms had to verify users' ages using biometric data, government IDs, or third-party apps. Weeks before the law took effect, a [Discord breach](https://expression.fire.org/p/the-papers-please-era-of-the-internet) exposed the government ID images of nearly 70,000 Australians. The ban ran anyway. Around 70% of underage users found their way back in regardless.

So: the IDs got collected, some got leaked, and the kids kept scrolling. That is a fairly clean summary of how age verification works in practice.

I have been watching this wave build for a while. Australia was first, but France, Spain, the UK, and the EU are all moving the same direction. In the US, at least 19 states have passed social media age restriction bills, and over 20 states have enacted adult-content age verification laws. The framing is always "protecting children." The mechanism is always identity verification.

That is the core problem. Age verification, in any practically enforceable form, requires identity verification. You cannot prove you are 18 without proving who you are. And once you have proved who you are, the platform knows who you are, the government can request who you are, and that data can be breached to anyone with sufficient motivation.

Anonymous credential systems using zero-knowledge proofs exist in theory. The idea is that a certificate authority could confirm "this person is over 18" without revealing which person. Cryptographically elegant. But the moment you need to prevent token sharing (because teenagers will share tokens), you need to tie the credential to a real identity to create legal accountability. The elegant solution collapses into the same problem it was trying to avoid.

The UK has already drawn the logical next conclusion. Officials have proposed blocking VPN usage as a way to prevent evasion. Blocking VPNs to enforce age gates is not child protection. It is general-purpose censorship infrastructure, justified by child safety, which is precisely how China and Russia built their filtered internets. The UK is one or two legislative cycles away from that comparison being accurate rather than hyperbolic.

## What this infrastructure actually does

Surveillance systems do not get dismantled when the original rationale fades. CCTV cameras installed for anti-terrorism now cover most of London and get used for parking enforcement and tracking protest attendance. Post-9/11 surveillance authorities sold as temporary emergency measures became permanent. Infrastructure built for one problem is always available for the next.

Age verification systems, once operational, give governments the capability to require identity verification for any online activity. The legal precedent is set. The technical plumbing is in place. What changes over time is only the stated justification.

This matters especially in the Indian context. We have Aadhaar, one of the world's largest biometric ID systems with over a billion enrolled individuals. India's IT Rules (2021) already require major social media platforms to identify users when the government requests it. Mandatory age verification with Aadhaar as the verification mechanism would mean every social media account is linkable to a government-issued biometric identity. That is not speculation -- it is the straightforward result of combining policies that already exist.

## What actually protects children

The 70% failure rate is worth sitting with. After requiring platforms to collect government IDs, after a breach that exposed those IDs, most underage users were back online within weeks. The system successfully built identity infrastructure and failed at its stated goal. These are not equal failures.

Device-level parental controls exist. Content classification systems exist. Browser filters exist. These protect children without constructing a national internet identity checkpoint. They are also less attractive to legislate, because they do not give governments new visibility into what citizens are doing online.

I am not dismissing the harms of social media on young people -- they are real and the research on adolescent mental health and platform design bears reading. But a response that fails at protecting children while succeeding at collecting their families' biometric data is not a child protection policy. It is surveillance expansion with good PR, and the window to push back on it is before the systems get built. After is too late.
