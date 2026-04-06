---
type: source
title: "Multi-Partner Solutions"
source_file: "[[raw/Multi-Partner Solutions  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions"
ingested: 2026-04-05
tags: [partners, solutions, embedded-signup]
---

## Summary

Multi-Partner Solutions allow Solution Partners and Tech Providers to jointly manage customer WhatsApp assets. Useful when Tech Providers cannot offer full messaging services alone.

## Solution States

| State | Description |
|-------|-------------|
| Active | Accepted, can onboard customers |
| Deactivated | Cannot onboard |
| Draft | Not yet sent to partner |
| Inactive | Partner declined |
| Pending | Awaiting partner response |
| Pending deactivation | Deactivation requested |

## Onboarding Limits

Tech Providers in solutions: 200 new customers per rolling 7 days.

## Setup Steps

1. Determine solution details with partner
2. Subscribe to `account_update` and `partner_solutions` webhooks
3. Create solution via App Dashboard > WhatsApp > Partner Solutions
4. Partner accepts via Dashboard or API
5. Configure Embedded Signup with `solutionID` in extras.setup
6. Listen for `PARTNER_ADDED` webhook events

## Billing

Customers onboarded via solution share Solution Partner's credit line.

## Managing Solutions

- Edit/deactivate via App Dashboard or API
- Deactivation requires partner acceptance
- Get solutions via GET /<APP_ID>/whatsapp_business_solutions

## Related Concepts
- [[wiki/concepts/solution-partners]]
- [[wiki/concepts/embedded-signup]]
