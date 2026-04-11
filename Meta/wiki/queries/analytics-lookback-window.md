---
type: query
title: "What are the lookback windows for WhatsApp analytics?"
asked: 2026-04-10
tags: [analytics, reporting, limits]
---

## Question

How far back can I query WhatsApp analytics data? What are the lookback windows?

## Answer

WhatsApp analytics have different lookback windows depending on the analytics type:

| Analytics Type | Lookback Window |
|----------------|-----------------|
| Messaging analytics | 1 year |
| Conversation analytics | 1 year |
| Pricing analytics | 1 year |
| Template analytics | 90 days |
| Call analytics | 1 year |
| Group analytics | 1 year |

**Note**: The 1-year lookback for messaging/conversation/pricing changed in December 2025 (previously different).

### Granularity Options

Messaging and conversation analytics support these granularity levels:
- `HALF_HOUR`
- `DAY`
- `MONTH`

### Important Limitation

Cost data is **not available** for WABAs that share a Solution Partner's credit line. If you need cost analytics, the customer must have their own payment method attached.

## References

- [analytics](../sources/analytics.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/analytics
