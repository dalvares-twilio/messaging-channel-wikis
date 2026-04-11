---
type: source
title: "history Webhook Reference"
source_file: "[history webhook reference  Developer Documentation.md](../../raw/history webhook reference  Developer Documentation.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/history"
ingested: 2026-04-05
tags: [webhooks, history, sync, reference]
---

## Summary

The `history` webhook synchronizes WhatsApp Business app chat history for businesses onboarded by solution providers.

## Triggers

- Solution provider requests chat history sync (customer approved sharing)
- Solution provider requests chat history sync (customer declined sharing)

## Chat History Details

- Messages from past 180 days (from onboarding time)
- Group chat messages excluded
- Media asset IDs only for messages within 14 days

## Phases

| Phase | Time Range |
|-------|------------|
| 0 | Day 0 through day 1 |
| 1 | Day 1 through day 90 |
| 2 | Day 90 through day 180 |

## Progress Tracking

| Field | Description |
|-------|-------------|
| `chunk_order` | Order chunks sequentially |
| `phase` | Value 2 = phase complete |
| `progress` | Value 100 = sync complete |

## Message Status Values

- `DELIVERED`
- `ERROR`
- `PENDING`
- `PLAYED`
- `READ`
- `SENT`

## Declined Sharing Error

Error code `2593109`: "History sync is turned off by the business from the WhatsApp Business App"

## Related Concepts
- [embedded-signup](../concepts/embedded-signup.md)

## Related Entities
- [business-phone-number](../entities/business-phone-number.md)
