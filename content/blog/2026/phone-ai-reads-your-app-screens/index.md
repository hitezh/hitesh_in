---
title: "The phone's AI can read every screen in your app"
seoTitle: "On-device AI reads your app screens: a security checklist"
slug: "phone-ai-reads-your-app-screens"
date: "2026-11-21"
description: "Signal says OS-level AI assistants capture what its app displays. Any app showing balances or customer records has a second reader that its encryption never covered."
categories:
  - "technology"
  - "security"
tags:
  - "ai"
  - "ai-agents"
  - "security"
  - "governance"
  - "banking"
image: images/cover.svg
linkedin_hook: "Signal says AI assistants in iOS, Android and Windows read its screens after the encryption has done its job. Your banking app or CRM shows more sensitive data than a chat does."
takeaways:
  - "Turn on the OS assistants on a test phone and ask each one what is on your ten most sensitive screens. Whatever it can answer, a vendor's AI can read."
  - "Decide per screen whether an AI may read it. A balance enquiry may benefit from an assistant. An OTP or KYC document screen never does."
  - "Add one line to your risk review: which OS or third-party agents can see this screen, and where does that data go?"
linkedin_question: "If a phone assistant summarized the most sensitive screen in your product today, would anyone in your company know?"
draft: false
---

Signal's encryption has not been broken. Its [latest privacy post](https://signal.org/blog/protecting-your-privacy/) is about something that sits after the encryption: AI assistants built into the operating system, such as Google's Gemini Intelligence and Apple's Siri with Onscreen Awareness, that read what is on the screen so they can answer questions about it. Signal says that once content is captured this way it flows to whatever local database or remote server the agent uses, "outside of Signal's control." It compares the problem to Microsoft Recall, which screenshots your display every few seconds.

Signal is a chat app, and its response is a list of workarounds: screenshot blocking on Windows, a "Block Siri AI" setting on iOS 27, an automatic screen-security mode on Android when an assistant is detected, and a manual exclusion list on macOS. It also says it had to run its own forensic investigations on Android and iOS because the vendors' documentation is thin. I haven't tested these assistants myself, so I am relying on Signal's account of how they behave.

I'm interested in a different audience for the same facts. If this is hard for Signal, what does it mean for the app that shows a customer's balance, a KYC document or a full CRM record?

## Security has a third state, and nobody reviews it

Most security reviews ask two questions: is the data encrypted in transit, and is it encrypted at rest? Data in view is the third state, and until recently the only readers were the user and anyone looking over their shoulder. An assistant that reads the screen adds a new reader to every sensitive page you render, and it reads after all your cryptography has finished.

That is why this is a leadership issue and not a mobile-team curiosity. Your most carefully engineered controls end one step before the place where the data becomes useful.

## Your tooling is built to catch attackers

The reader in question is a first-party feature, switched on by the user, shipped by the platform. Data loss prevention tools look for exfiltration, and device attestation checks whether the phone has been tampered with. Neither has a category for "the operating system's own assistant did what it was designed to do."

I find this uncomfortable for banks in particular. Banking apps routinely refuse to run on devices that fail attestation, which is a reasonable control. But the attestation says the device is genuine. It says nothing about which assistant is reading your app from inside a perfectly genuine device.

## The default is open, and you pay for every exclusion

Context is what makes an assistant useful, and it is also what makes a platform sticky. So the platform has every reason to read by default and to make opting out the app developer's job. Signal's two asks of Apple, Google and Microsoft are an easy, documented opt-out and proper technical documentation, which suggests neither is good enough today.

Treat this as a product decision, and not only a security one. Some screens benefit from being readable: a customer who asks their phone "what did I spend on food this month?" is getting something useful, and an app that blocks every assistant may find itself left out of the next generation of interfaces. Other screens should never be readable. Deciding which is which, screen by screen, is exactly the kind of judgment that should not be left to whichever engineer happens to implement it.

## Accountability does not move with the data

India's DPDP Act is clear that the company collecting the data remains responsible for it. [Section 8](https://www.indiacode.nic.in/bitstream/123456789/22037/2/a2023-22.pdf) keeps the data fiduciary responsible for compliance even where a contract with a processor says otherwise. Whether an OS assistant counts as a processor of your data is untested as far as I know, and I am not a lawyer. A regulator or a customer asking "who else saw this?" will not wait for that question to be settled. The answer "the phone's AI, and we did not look into it" is a poor one.

The same pattern shows up with agents elsewhere in the stack. A [vendor installer writing instructions into your engineers' coding agents](/2026/vendors-write-your-agents-instructions) and a [limited account that is only as limited as its enforcer](/2026/limited-access-limited-enforcement) have the same shape: someone else's software acting inside a boundary you assumed was yours.

## What I would do this month

1. **List your ten most sensitive screens.** Balances, KYC documents, OTP entry, customer records, anything a regulator would care about. If you cannot produce the list in an hour, that is the first finding.
2. **Test them with assistants switched on.** Use a test phone, open each screen and ask the assistant what it sees. Whatever it can answer, a vendor's AI can read.
3. **Apply the platform's secure-window setting where it fits.** On Android that is [FLAG_SECURE](https://developer.android.com/reference/android/view/WindowManager.LayoutParams#FLAG_SECURE), which keeps content out of screenshots and off non-secure displays. Signal itself notes that screenshot blocking does not stop every route, so treat it as one layer.
4. **Ask your device-management vendor what controls exist for OS assistants.** Do this for staff phones that open customer data. If the answer is "none yet", you have found a gap to record.
5. **Decide per screen: readable by AI or private.** Write the rule down and name who can change it.
6. **Add one question to vendor and privacy reviews.** Which OS-level or third-party agents can see this screen, and where does the data go afterwards?
7. **Say what you do in your privacy notice.** If you block assistants, it is a selling point. If you cannot, customers should hear it from you first.
8. **Rerun the test on every major OS release.** The defaults are set by someone else, and they change in release notes nobody on your team reads.

The question to take to your next security review: what does the screen show that we would not be comfortable handing to a vendor, and who decided that?

If you are working out which of your products should be readable by AI and which should not, that is the kind of problem I enjoy thinking through in an [AI advisory hour](/work-with-me/).
