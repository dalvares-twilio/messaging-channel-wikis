---
type: entity
title: "Contact Book"
entity_type: feature
---

## Description

The contact book is a Meta-hosted feature that stores WhatsApp user contact information (phone number + BSUID) to maintain messaging continuity when users enable usernames.

## Timeline

- **Available**: Early April 2026
- **No integration required** — hosted by Meta

## Behavior

- Stores phone number + BSUID on any interaction
- Scoped to business portfolio level
- Any phone number in portfolio triggers storage
- Only captures interactions after launch (not retroactive)

## Storage Triggers

Contact info stored when:
1. You send message/call to user's phone number
2. You receive message/call from user's phone number
3. User shares contact via `REQUEST_CONTACT_INFO` button

## Phone Number Visibility

With contact book, phone numbers appear in webhooks if:
1. Recent interaction (30 days) with that specific business phone number
2. User is in contact book
3. User hasn't enabled usernames

## Management

### Disable Contact Book
Meta Business Suite > Business settings > Business info

**Warning**: Disabling deletes all stored contact data permanently.

## Scope Limitations

- Scoped to individual business portfolio
- Not shared across linked portfolios
- Each portfolio maintains separate contact book

## Related Concepts
- [[user-identification]]

## Related Entities
- [[bsuid]]
- [[messages-webhook]]

## Sources
- [[business-scoped-user-ids]]
