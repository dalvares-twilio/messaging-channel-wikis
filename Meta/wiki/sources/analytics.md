---
type: source
title: "Analytics"
source_file: "[[raw/Analytics  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/analytics"
ingested: 2026-04-05
tags: [analytics, metrics, reporting]
---

## Summary

WhatsApp provides analytics for messaging, conversations, pricing, templates, calls, and groups via the Graph API.

## Lookback Windows

- **Messaging/conversation/pricing**: 1 year (changed Dec 2025)
- **Template analytics**: 90 days

## Analytics Types

### Messaging Analytics (`analytics`)
- Messages sent/delivered by phone numbers
- Filters: start, end, granularity, phone_numbers, product_types, country_codes
- Granularity: HALF_HOUR, DAY, MONTH

### Conversation Analytics (`conversation_analytics`)
- Conversation counts and costs
- Categories: AUTHENTICATION, MARKETING, SERVICE, UTILITY
- Types: FREE_ENTRY, FREE_TIER, REGULAR
- Directions: BUSINESS_INITIATED, USER_INITIATED

### Pricing Analytics (`pricing_analytics`)
- Pricing breakdowns for delivered messages
- Volume tier information available
- Categories include AUTHENTICATION_INTERNATIONAL

### Template Analytics (`template_analytics`)
- Sent, delivered, read counts
- Button click tracking (URL and quick reply)
- Cost metrics (amount_spent, cost_per_delivered, cost_per_url_button_click)
- Must enable via `is_enabled_for_insights=true`

### Call Analytics (`call_analytics`)
- Call counts, costs, average duration
- Directions: USER_INITIATED, BUSINESS_INITIATED

### Group Analytics (`group_analytics`)
- Messages sent/delivered/read in groups
- Participant joins/leaves

## Limitations

- Cost not available for WABAs sharing Solution Partner credit line
- Template button analytics only for MARKETING/UTILITY categories
- EU/UK/Japan WABAs excluded from template analytics

## Related Entities
- [[wiki/entities/whatsapp-business-account]]
