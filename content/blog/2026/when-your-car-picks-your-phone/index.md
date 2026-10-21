---
title: "When your car picks your phone"
slug: "when-your-car-picks-your-phone"
date: "2026-06-18"
description: "Volkswagen's companion app now refuses to run on GrapheneOS through a Google Play Integrity check. That is a car company delegating its gatekeeping to Google -- and a preview of what connected-car ownership actually means."
categories:
  - "technology"
tags:
  - "privacy"
  - "android"
  - "software"
draft: false
---

Volkswagen's companion app stopped working on GrapheneOS recently. Not a bug -- VW shipped an update that added [Google Play Integrity](https://developer.android.com/google/play/integrity/overview) checks, and GrapheneOS fails those checks. The app now refuses to run on a phone it worked fine with before the update.

GrapheneOS is a security-hardened Android build with near-complete app compatibility. It gets regular security patches, maintains sandboxed Google Play as an option, and is used by security professionals, journalists, and people who want Android without Google's data infrastructure included by default. The app didn't break. VW chose to break it. The [thread documenting this](https://discuss.grapheneos.org/d/35949-volkswagen-app) is worth reading.

## What Play Integrity actually does

The Play Integrity API lets apps ask Google to certify that a device is running approved software. Banking apps use it. Some games use it to block cheating. The premise is reasonable -- don't let compromised or rooted devices access services that depend on a secure baseline.

The problem is that "secure baseline" and "Google-certified Android" have been collapsed into the same definition. GrapheneOS isn't compromised. Its security posture matches or exceeds stock Android on most devices. But it doesn't include Google Play Services, so it fails the check. Google has appointed itself the arbiter of what "trusted" means on Android hardware it didn't manufacture.

VW didn't build a safety requirement. They adopted Google's certification apparatus, with Google's commercial logic attached.

## The car-as-platform model in action

Cars are increasingly managed through apps. Remote locking, EV charging, over-the-air updates, service scheduling -- these features live in software, not on the dashboard. The car becomes more capable over time, but only if you maintain the software relationship the manufacturer has designed.

Tesla made this explicit from the start: the vehicle was built around app-based access, and core ownership functions depend on the app working. Other manufacturers have moved more gradually, but the direction is consistent.

VW's Play Integrity requirement is a small move in that direction. The car company now decides -- through the software it ships -- what phone is acceptable. That decision can be revised server-side, at any time, with no obligation to inform buyers.

## Who this affects beyond GrapheneOS

GrapheneOS users are a small minority, and VW probably knows the commercial exposure is low. That's not the point.

Play Integrity is configurable. Google can adjust what "passing" means -- by OS version, by whether the device has an active Google account, by sideloading behaviour -- and any manufacturer that has adopted the API inherits that change automatically. VW doesn't need to update their app to tighten the restriction. They just need to not object when Google does.

There is a particular irony here: the EU has spent years fining American tech companies for anti-competitive behaviour, frequently citing forced dependencies on dominant platforms. Volkswagen, a German manufacturer, just voluntarily adopted Google's certification requirement in its own customer-facing software. A regulator can fine Google for tying practices on one side of the room while European manufacturers absorb those same ties on the other.

## What "owning" a connected product actually means

The right-to-repair debate started with physical parts -- farmers blocked from fixing their own tractors, mechanics shut out of diagnostic codes. Software is running the same restriction, less visibly.

You paid for a car that needs an app to access its full feature set. The app now requires an OS that Google has certified.

If a manufacturer can degrade your experience with a policy change you had no vote on and have no recourse against, it is worth being clear-eyed about what ownership of a connected product actually is. You own the object. The manufacturer owns the conditions.

That's a reasonable trade-off for some buyers. It's worth knowing you're making it.
