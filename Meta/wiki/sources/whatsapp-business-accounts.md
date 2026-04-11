---
type: source
title: WhatsApp Business Accounts
source_file: "[WhatsApp Business Accounts  Developer Documentation](WhatsApp Business Accounts  Developer Documentation.md)"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/whatsapp-business-accounts
ingested: 2026-04-05
tags:
  - waba
  - accounts
  - business
---

## Summary

WhatsApp Business Accounts (WABAs) are the fundamental unit representing a business on the WhatsApp Business Platform. A WABA is required to send/receive messages and manage templates. WABAs can be created via App Dashboard, solution providers, or Meta Business Suite.

## Key Points

- **Max 250 templates** per WABA
- **Max 2 phone numbers** initially (can increase to 20)
- **Max 20 WABAs** per Meta Business Account
- **Single owner**: WABA belongs to only one Business Manager
- **Cannot migrate** WABA between businesses once credit line attached
- **Time zone/currency** locked after credit line attached

## Creation Methods

| Method | Use Case |
|--------|----------|
| App Dashboard | Direct Cloud API developers |
| Solution Provider | Businesses using third-party messaging services |
| Meta Business Suite | Working with providers via MBS instead of API |

## Partner Sharing

- Can share WABA with up to 2 partners
- Partner must share credit line before you can send messages
- Configure via Meta Business Suite > Settings > WhatsApp accounts

## API Operations

- **Get WABA data**: `GET /<WABA_ID>?fields=name,status,currency,country,business_verification_status`

## Webhooks

Subscribe to `account_update` webhook for:
- Policy violations (e.g., `ACCOUNT_VIOLATION` with `violation_type`)
- Status changes
- Offboarding events

## Related Concepts
- [webhooks](webhooks.md)
- [webhook-fields](webhook-fields.md)

## Related Entities
- [whatsapp-business-account](whatsapp-business-account.md)
- [account-alerts-webhook](account-alerts-webhook.md)
- [meta-business-suite](meta-business-suite.md)
