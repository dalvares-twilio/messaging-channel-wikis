---
type: entity
title: "Business-Scoped User ID (BSUID)"
entity_type: identifier
---

## Description

A Business-Scoped User ID (BSUID) is a unique identifier for WhatsApp users, scoped to a specific business portfolio. BSUIDs enable messaging users without knowing their phone numbers, supporting the upcoming WhatsApp usernames feature.

## Timeline

| Date | Milestone |
|------|-----------|
| April 2026 | BSUIDs appear in webhooks |
| May 2026 | APIs support sending to BSUIDs |
| Late 2026 | Usernames feature launches |

## Format

```
<COUNTRY_CODE>.<ALPHANUMERIC>
```

Example: `US.13491208655302741918`

- Country code: ISO 3166 alpha-2 (2 letters)
- Up to 128 alphanumeric characters after period
- **Use entire value** in API requests (including country code)

## Parent BSUID (Linked Portfolios)

```
<COUNTRY_CODE>.ENT.<ALPHANUMERIC>
```

Example: `US.ENT.11815799212886844830`

- Works across all linked business portfolios
- Requires Meta eligibility

## Key Properties

- Unique per business portfolio + user pair
- Regenerated if user changes phone number
- Cannot use across different portfolios
- Cannot send auth templates (one-tap, zero-tap, copy code)

## Webhook Presence

BSUIDs appear in:
- All `messages` webhooks (incoming messages)
- `delivered` and `read` status webhooks
- Assigned to `user_id` property

## Related Concepts
- [user-identification](user-identification.md)
- [webhooks](webhooks.md)

## Related Entities
- [contact-book](contact-book.md)
- [messages-webhook](messages-webhook.md)

## Sources
- [business-scoped-user-ids](business-scoped-user-ids.md)
