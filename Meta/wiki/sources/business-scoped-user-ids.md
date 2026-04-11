---
type: source
title: Business-scoped User IDs
source_file: "[Business-scoped user IDs  Developer Documentation](Business-scoped user IDs  Developer Documentation.md)"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids
ingested: 2026-04-05
tags:
  - bsuid
  - usernames
  - privacy
  - identifiers
---

## Summary

Business-scoped user IDs (BSUIDs) are new user identifiers being introduced to support WhatsApp usernames (launching late 2026). BSUIDs uniquely identify WhatsApp users per business portfolio, allowing messaging without knowing phone numbers. This is a major platform change affecting API requests, responses, and webhooks.

## Key Points

- **BSUIDs in webhooks**: Early April 2026
- **API support for BSUIDs**: May 2026
- **Usernames optional** for users and businesses
- **Phone numbers may be hidden** if user enables usernames
- **30-day lookback**: Phone numbers included if recent interaction

## BSUID Format

- Prefix: ISO 3166 alpha-2 country code + period
- Example: `US.13491208655302741918`
- Up to 128 alphanumeric characters after prefix
- Unique per business portfolio-user pair
- Regenerated if user changes phone number

## Parent BSUIDs

For managed businesses with linked portfolios:
- Format: `US.ENT.11815799212886844830` (includes `ENT`)
- Works across all linked portfolios
- Requires Meta eligibility check

## Phone Number Visibility

Phone numbers included in webhooks if:
1. Messaged/called user's number within 30 days
2. Received message/call from user within 30 days
3. User is in your contact book

## Contact Book

- Launches early April 2026
- Hosted by Meta, no integration required
- Stores phone number + BSUID on interaction
- Scoped to business portfolio level
- Can disable via Meta Business Suite

## New Features

### Request Contact Info Button
- New `REQUEST_CONTACT_INFO` button type
- Available for `utility` and `marketing` templates
- User shares vCard with phone number
- Available early May 2026

### Business Usernames
- Optional for businesses
- Does NOT hide business phone number
- 3-35 characters, alphanumeric + period + underscore
- Reserved usernames can be claimed before launch

## Related Concepts
- [webhooks](webhooks.md)
- [user-identification](user-identification.md)

## Related Entities
- [bsuid](bsuid.md)
- [contact-book](contact-book.md)
- [messages-webhook](messages-webhook.md)
