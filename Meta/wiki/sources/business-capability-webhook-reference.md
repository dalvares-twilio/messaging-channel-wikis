---
type: source
title: "business_capability_update Webhook Reference"
source_file: "[[raw/business_capability_update webhook reference  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/business_capability_update"
ingested: 2026-04-05
tags: [webhooks, capabilities, limits, reference]
---

## Summary

The `business_capability_update` webhook notifies of WABA or business portfolio capability changes (messaging limits, phone number limits).

## Triggers

- WABA created
- Messaging limits increased/decreased
- Phone number limits increased/decreased

## Payload Fields

| Field | Description |
|-------|-------------|
| `max_daily_conversations_per_business` | Messaging limit tier (TIER_250, TIER_2K, TIER_10K, TIER_100K, TIER_UNLIMITED) |
| `max_phone_numbers_per_business` | Max phones for business portfolio (only when at 250 tier) |
| `max_phone_numbers_per_waba` | Max phones per WABA (when not at 250 tier) |

## Deprecation Note

`max_daily_conversation_per_phone` deprecated February 2026 - use `max_daily_conversations_per_business` instead.

## Related Concepts
- [[wiki/concepts/messaging-limits]]

## Related Entities
- [[wiki/entities/whatsapp-business-account]]
