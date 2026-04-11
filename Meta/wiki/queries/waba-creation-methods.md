---
type: query
title: "What are the different ways to create a WhatsApp Business Account?"
asked: 2026-04-10
tags:
  - waba
  - onboarding
  - embedded-signup
---

## Question

What are the different methods available to create a WhatsApp Business Account (WABA)?

## Answer

There are three main methods to create a WABA:

**1. App Dashboard**
- **Use case**: Direct Cloud API developers
- Best for businesses building their own WhatsApp integration
- Creates WABA directly in your Meta Business Account

**2. Solution Provider (Embedded Signup)**
- **Use case**: Businesses using third-party messaging services
- Customer onboards through Solution Partner's Embedded Signup flow
- WABA is created and shared with the Solution Partner

**3. Meta Business Suite**
- **Use case**: Working with providers via MBS instead of API
- Manual creation through Meta Business Suite UI
- Configure via Meta Business Suite > Settings > WhatsApp accounts

**Partner Considerations:**
- Can share WABA with up to 2 partners
- Partner must share credit line before you can send messages
- Solution Partners can use Embedded Signup to streamline customer onboarding

**After Creation:**
- WABA starts with max 2 phone numbers (can increase to 20)
- Can create up to 250 message templates per WABA
- Subscribe to `account_update` webhook for status changes

## References

- [whatsapp-business-accounts](../sources/whatsapp-business-accounts.md)
- [embedded-signup-overview](../sources/embedded-signup-overview.md)
- [whatsapp-business-account](../entities/whatsapp-business-account.md)
- [meta-business-suite](../entities/meta-business-suite.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/whatsapp-business-accounts
