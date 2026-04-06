---
type: entity
title: "WhatsApp Business Account (WABA)"
entity_type: account
---

## Description

A WhatsApp Business Account (WABA) is the fundamental container representing a business on the WhatsApp Business Platform. It's required to send/receive messages and manage templates.

## Limitations

| Limit | Value |
|-------|-------|
| Max templates | 250 per WABA |
| Max phone numbers | 2 initially, up to 20 |
| Max WABAs per Meta Business Account | 20 |
| Ownership | Single Business Manager only |

## Key Properties

| Field | Description |
|-------|-------------|
| `name` | WABA display name |
| `status` | `ACTIVE`, `INACTIVE`, etc. |
| `currency` | Payment currency (locked after credit line) |
| `country` | Country code |
| `business_verification_status` | `verified`, `pending`, etc. |

## Creation Methods

1. **App Dashboard** — for direct Cloud API developers
2. **Solution Provider** — via Embedded Signup flow
3. **Meta Business Suite** — for MBS-based integrations

## API Reference

```
GET /<WABA_ID>?fields=name,status,currency,country
```

## Related Webhooks

- `account_update` — policy violations, status changes
- `account_alerts` — messaging limits, profile changes
- `account_review_update` — policy review outcomes

## Related Concepts
- [[webhooks]]

## Related Entities
- [[official-business-account]]
- [[meta-business-suite]]
- [[subscribed-apps-api]]

## Sources
- [[whatsapp-business-accounts]]
- [[webhooks-overview]]
