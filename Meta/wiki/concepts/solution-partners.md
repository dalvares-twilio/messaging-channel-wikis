---
type: concept
title: "Solution Partners"
tags: [partners, multi-partner, integrations]
---

## Definition

Solution Partners are third-party providers that help businesses integrate with the WhatsApp Business Platform. Partners can manage WABAs on behalf of businesses and provide value-added services.

## Multi-Partner Solutions

Businesses can work with multiple solution partners simultaneously. The `partner_solutions` webhook tracks the lifecycle of these partnerships.

## Solution Status Values

| Status | Description |
|--------|-------------|
| ACTIVE | Partner accepted, solution ready |
| DEACTIVATED | Solution deactivated |
| DRAFT | Created but not sent |
| INITIATED | Request sent, awaiting response |
| PENDING_DEACTIVATION | Deactivation requested |
| REJECTED | Partner rejected request |

## Related Webhooks

- `partner_solutions` — Solution status changes
- `account_update` — Partner added/removed events

## Sources

- [partner-solutions-webhook-reference](../sources/partner-solutions-webhook-reference.md)
- [account-update-webhook-reference](../sources/account-update-webhook-reference.md)
