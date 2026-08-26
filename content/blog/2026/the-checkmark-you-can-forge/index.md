---
title: "The authenticity checkmark you can forge"
slug: "the-checkmark-you-can-forge"
date: "2026-08-26"
description: "Cameras and AI labs now cryptographically sign media to prove it's real. A researcher just forged those signatures, which changes where trust has to live."
categories:
  - "technology"
tags:
  - "ai"
  - "security"
  - "trust"
  - "product-strategy"
image: images/cover.svg
draft: false
---

David Buchanan recently took an AI-generated picture of a frog and [signed it as a genuine camera photo](https://www.da.vidbuchanan.co.uk/blog/android-c2pa.html). The official verification tools agreed. The frog was never real, the camera never fired, and the little "captured by a real device" badge sat there, green and confident, telling everyone the opposite.

That badge is the point of a standard called C2PA, and it is worth understanding why breaking it matters far beyond one clever hack.

## What the checkmark was supposed to do

C2PA, marketed to the public as Content Credentials, is the industry's answer to "how do we know what's real anymore." Cameras sign a photo at the moment of capture. AI tools stamp their output as generated. A verifier reads the signature and shows a provenance trail. The [member list](https://contentauthenticity.org/blog/5000-members-building-momentum-for-a-more-trustworthy-digital-world) is the entire establishment: Adobe, Google, Microsoft, Meta, OpenAI, Sony, Canon, Nikon, Leica, the BBC, the Associated Press. Leica shipped [the first camera](https://www.lumethic.com/en/articles/cameras-with-c2pa-content-credentials) with it in 2023. The spec is now an ISO standard. This is not a fringe experiment. It is the plan.

The pitch to a newsroom, an insurer, or a bank is simple: stop guessing whether a photo is authentic, and check the signature instead. Move the messy human judgment of "is this real" into a clean cryptographic yes or no.

## Why it breaks, and stays broken

The problem lives at the one place the whole scheme depends on: the capture device. On Android, C2PA leans on hardware key attestation to guarantee that only a genuine camera app signed the image. Buchanan got root on a fully patched phone, once through a low-cost hardware glitching attack and once through a software exploit, then asked the phone's secure hardware to sign whatever he handed it. The private key never leaves the chip, and it does not need to. You just borrow the chip's willingness to sign.

Two things make this more than a patch-and-move-on bug. First, some of these attacks are physical, and you cannot patch silicon in the field. Second, the economics run entirely against the defender. An attacker has to break exactly one model of one device, once, in a lab. The forged photo it produces then verifies as authentic everywhere, forever. Nikon already [suspended its signing certificate program](https://www.softwareseni.com/c2pa-adoption-in-2026-hardware-platforms-and-verification-reality/) after a vulnerability and, as of early this year, has not restored it.

We have seen this movie. It is the DRM story again. For twenty years the entertainment industry tried to use cryptography to control content on hardware it did not fully own, and it lost every round to the same weakness: the analog hole. You can always point a camera at a screen. C2PA has its own analog hole, and even flawless key hardware cannot close it. Photograph a monitor showing a fake and the capture is, by the standard's own logic, perfectly real.

## A forgeable checkmark is worse than no checkmark

Here is the part the standard's backers underplay. A trust signal that can be forged does not fail neutrally. It fails in favor of the attacker.

Absent any badge, a claims adjuster or a KYC reviewer stays a little skeptical of every image, which is the correct posture. Add a badge that most people believe is unbreakable, and skepticism collapses. The forger gets a green checkmark; the honest user who edited their photo in the wrong app gets a scary warning. You have built a system that vouches for the sophisticated liar and doubts the ordinary user. The confidence is real and the ground under it is not.

This is the same shape as the [consent theater](/2026/consent-theater/) I wrote about with cookie banners: a compliance artifact that looks like protection, produces the paperwork, and quietly relocates the risk onto whoever trusted it. And it lands hardest in exactly the places betting on it. If your fraud model treats a signed document as settled, the [government ID or selfie](/2026/when-your-ai-asks-for-a-government-id/) a customer uploads becomes a stronger attack, not a weaker one, once the signature can be manufactured.

## Trust the accountable party, not the artifact

Banks worked this out a century ago. A cheque is trivially forgeable, so the system was never built on the paper. It was built on an accountable chain: a bank that vouches, a penalty for fraud, a name attached to the loss. The artifact is weak by design; the accountability is where the trust lives.

C2PA quietly tries to invert that, to make the artifact self-proving so no one has to be on the hook. It is a lovely idea and it does not survive contact with a rooted phone. So if you are building anything that has to answer "can I believe this image, this document, this face," I would stop shopping for a checkmark and design instead for a world where any single piece of content is forgeable:

- **Treat provenance as one weak signal, never as ground truth.** A valid C2PA manifest can raise a score. It must never close a case on its own.
- **Corroborate across independent signals.** Device history, account behavior, cross-references, timing, the boring metadata around the artifact. Fraud teams already live this way, because they never had the luxury of a magic badge.
- **Keep a human, and a liable party, in the loop for high-stakes calls.** The point of provenance was to remove the accountable human. That is precisely the thing you cannot remove.

This is the recurring lesson of the AI era, and it echoes the [accountability gap in AI-generated evidence](/2026/when-the-evidence-is-ai-generated/): the technology to fake reality convincingly is here and cheap, and the layer that assigns responsibility for a wrong answer is what actually holds. A cryptographic signature felt like it could carry that weight. It cannot.

The uncomfortable takeaway for any leader who was hoping to buy their way out of the authenticity problem: there is no product that makes doubt go away. There is only the harder work of designing systems that stay useful when you cannot fully trust what you are looking at. If that is a decision on your roadmap this year, it is [worth thinking through carefully](/work-with-me/) before you wire a forgeable checkmark into the middle of it.
