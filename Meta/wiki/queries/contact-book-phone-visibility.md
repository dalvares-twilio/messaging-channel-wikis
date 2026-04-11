---
type: query
title: "When will phone numbers be visible in webhooks with the new BSUID system?"
asked: 2026-04-10
tags:
  - bsuid
  - contact-book
  - webhooks
  - phone-visibility
---

## Question

With the introduction of BSUIDs and usernames, when will user phone numbers still be visible in webhook payloads?

## Answer

When users enable usernames, their phone numbers may be hidden. However, phone numbers will still be included in webhooks under these conditions:

**Phone numbers appear in webhooks if:**
1. You messaged or called the user's phone number within the **last 30 days**
2. You received a message or call from the user within the **last 30 days**
3. The user is in your **contact book**
4. The user hasn't enabled usernames

**Contact Book:**
The contact book is a Meta-hosted feature (launching April 2026) that automatically stores user contact information:
- Stores phone number + BSUID on any interaction
- Scoped to business portfolio level
- No integration required (hosted by Meta)
- Only captures interactions after launch (not retroactive)

**Storage triggers:**
- You send message/call to user's phone number
- You receive message/call from user's phone number  
- User shares contact via `REQUEST_CONTACT_INFO` button

**Request Contact Info Button:**
New button type available May 2026 for `utility` and `marketing` templates. When clicked, user shares their vCard with phone number.

**Disabling Contact Book:**
Meta Business Suite > Business settings > Business info

**Warning:** Disabling contact book permanently deletes all stored contact data.

## References

- [business-scoped-user-ids](../sources/business-scoped-user-ids.md)
- [contact-book](../entities/contact-book.md)
- [bsuid](../entities/bsuid.md)
- [user-identification](../concepts/user-identification.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids
