---
type: query
title: "What are BSUIDs and how do they work?"
asked: 2026-04-10
tags:
  - bsuid
  - usernames
  - identifiers
---

## Question

What are Business-Scoped User IDs (BSUIDs), what is their format, and how should they be used?

## Answer

Business-Scoped User IDs (BSUIDs) are unique identifiers for WhatsApp users, scoped to a specific business portfolio. They enable messaging users without knowing their phone numbers, supporting the upcoming WhatsApp usernames feature.

**BSUID Format:**
```
<COUNTRY_CODE>.<ALPHANUMERIC>
```
Example: `US.13491208655302741918`

- Country code: ISO 3166 alpha-2 (2 letters)
- Up to 128 alphanumeric characters after the period
- **Use the entire value** in API requests (including country code)

**Parent BSUID Format (for linked portfolios):**
```
<COUNTRY_CODE>.ENT.<ALPHANUMERIC>
```
Example: `US.ENT.11815799212886844830`
- Works across all linked business portfolios
- Requires Meta eligibility

**Key Properties:**
- Unique per business portfolio + user pair
- Regenerated if user changes phone number
- Cannot use across different portfolios
- Cannot send auth templates (one-tap, zero-tap, copy code) to BSUIDs

**Timeline:**
- April 2026: BSUIDs appear in webhooks
- May 2026: APIs support sending to BSUIDs
- Late 2026: Usernames feature launches

**Where BSUIDs appear:**
- All `messages` webhooks (incoming messages)
- `delivered` and `read` status webhooks
- Assigned to `user_id` property

## References

- [business-scoped-user-ids](../sources/business-scoped-user-ids.md)
- [bsuid](../entities/bsuid.md)
- [user-identification](../concepts/user-identification.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids
