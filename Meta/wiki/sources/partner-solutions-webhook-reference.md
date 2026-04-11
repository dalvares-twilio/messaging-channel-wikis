---
type: source
title: "partner_solutions Webhook Reference"
source_file: "[partner_solutions webhook reference  Developer Documentation.md](../../raw/partner_solutions webhook reference  Developer Documentation.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/partner_solutions"
ingested: 2026-04-05
tags: [webhooks, partners, solutions, reference]
---

## Summary

The `partner_solutions` webhook notifies of Multi-Partner Solution status changes.

## Triggers

- Solution saved as draft
- Solution request sent to partner
- Partner accepts solution request
- Partner rejects solution request
- Partner requests deactivation
- Solution deactivated

## Events

| Event | Description |
|-------|-------------|
| `SOLUTION_CREATED` | New solution saved as draft or sent as request |
| `SOLUTION_UPDATED` | Existing solution updated |

## Solution Status Values

| Status | Description |
|--------|-------------|
| `ACTIVE` | Partner accepted, solution ready to use |
| `DEACTIVATED` | Solution deactivated |
| `DRAFT` | Drafted but not sent |
| `INITIATED` | Request sent, awaiting response |
| `PENDING_DEACTIVATION` | Deactivation requested, awaiting partner response |
| `REJECTED` | Partner rejected request |

## Related Concepts
- [solution-partners](../concepts/solution-partners.md)
