---
type: concept
title: "User Identification"
aliases: [user identifiers, BSUID, usernames]
sources: 1
---

## Overview

User identification on WhatsApp Business Platform is evolving with the introduction of usernames. Businesses will need to handle multiple identifier types: phone numbers, BSUIDs, and usernames.

## Identifier Types

| Type | Format | Scope |
|------|--------|-------|
| Phone Number | `16505551234` | Global |
| BSUID | `US.13491208655302741918` | Per business portfolio |
| Parent BSUID | `US.ENT.11815799212886844830` | Linked portfolios |
| Username | `@username` | Global (optional) |

## Timeline

| Date | Change |
|------|--------|
| April 2026 | BSUIDs in webhooks |
| May 2026 | API accepts BSUIDs |
| Late 2026 | Usernames launch |

## Phone Number Visibility Rules

Phone numbers included in webhooks if:
1. Interaction within 30 days (per business phone number)
2. User in contact book
3. User hasn't enabled usernames

## Best Practices

- Store both phone number AND BSUID when available
- Use contact book for continuity
- Prepare for users who hide phone numbers
- Cannot use BSUID for auth templates

## Related Concepts
- [[webhooks]]

## Related Entities
- [[bsuid]]
- [[contact-book]]
- [[messages-webhook]]

## Sources
- [[business-scoped-user-ids]]
