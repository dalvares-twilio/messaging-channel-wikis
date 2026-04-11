---
type: query
title: "What is a Multi-Partner Solution (MPS)?"
asked: 2026-04-10
tags: [multi-partner-solutions, partners, mps]
---

## Question

What is a Multi-Partner Solution and when should it be used?

## Answer

A **Multi-Partner Solution (MPS)** allows a Solution Partner and a Tech Provider to jointly manage customer WhatsApp assets. It is useful when Tech Providers cannot offer full messaging services alone (e.g., lack billing infrastructure).

### Solution States

| State | Description |
|-------|-------------|
| Active | Accepted, can onboard customers |
| Deactivated | Cannot onboard |
| Draft | Not yet sent to partner |
| Inactive | Partner declined |
| Pending | Awaiting partner response |
| Pending deactivation | Deactivation requested |

### How It Works

1. **Solution Partner** handles billing (credit line sharing)
2. **Tech Provider** handles technical integration (webhooks, messaging)
3. Both have access to the customer's WABA

### Setup Steps

1. Determine solution details with partner
2. Subscribe to `account_update` and `partner_solutions` webhooks
3. Create solution via App Dashboard > WhatsApp > Partner Solutions
4. Partner accepts via Dashboard or API
5. Configure Embedded Signup with `solutionID` in extras.setup
6. Listen for `PARTNER_ADDED` webhook events

### Onboarding Limits

- Tech Providers in solutions: **200 new customers per rolling 7 days**
- Standard partners: 10 new customers per rolling 7-day window

### Billing

Customers onboarded via MPS share the Solution Partner's credit line.

## References

- [multi-partner-solutions](../sources/multi-partner-solutions.md)
- [solution-partners](../concepts/solution-partners.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions
