---
type: source
title: "Business Customer Phone Numbers"
source_file: "[[raw/Business customer phone numbers.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-phone-numbers"
ingested: 2026-04-05
tags: [phone-numbers, solution-partners, management]
---

## Summary

Guide for Solution Partners managing customer phone numbers on WABAs.

## Basics

- Dedicated number required (no personal WhatsApp app numbers)
- WhatsApp Business app numbers can be registered
- Must register within 14 days of Embedded Signup

## Get Phone Numbers

```
GET /<WABA_ID>/phone_numbers
```

Returns: `verified_name`, `code_verification_status`, `display_phone_number`, `quality_rating`, `throughput`, `id`

## Name Status Values

| Status | Description |
|--------|-------------|
| `APPROVED` | Name approved |
| `DECLINED` | Name rejected |
| `EXPIRED` | Approved name expired |
| `PENDING_REVIEW` | Under review |
| `NONE` | No name set |

## OTP Verification Status

```
GET /<WABA_ID>/phone_numbers?fields=code_verification_status
```

Values: `VERIFIED`, `NOT_VERIFIED`

## Filter by Account Mode

```
GET /<WABA_ID>/phone_numbers?filtering=[{"field":"account_mode","operator":"EQUAL","value":"SANDBOX|LIVE"}]
```

## Adding Numbers

1. **Recommended**: Re-run Embedded Signup, select existing WABA
2. Via WhatsApp Manager (requires partner to verify)

## Related Concepts
- [[wiki/concepts/solution-partners]]
- [[wiki/concepts/embedded-signup]]
