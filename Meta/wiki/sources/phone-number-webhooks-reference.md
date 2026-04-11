---
type: source
title: "Phone Number Webhooks Reference"
source_file: "[phone_number_quality_update webhook reference  Developer Documentation.md](../../raw/phone_number_quality_update webhook reference  Developer Documentation.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_quality_update"
ingested: 2026-04-05
tags: [webhooks, phone-number, quality, reference]
---

## Summary

Two webhook fields cover phone number events: quality/throughput updates and display name verification outcomes.

## Phone Number Webhook Fields

| Field | Triggers |
|-------|----------|
| `phone_number_quality_update` | Throughput level changes |
| `phone_number_name_update` | Display name verification outcomes |

## Quality Update Events

| Event | Description |
|-------|-------------|
| `ONBOARDING` | Phone number still being registered |
| `THROUGHPUT_UPGRADE` | Throughput increased to higher tier |

## Messaging Limit Tiers

| Tier | Limit |
|------|-------|
| `TIER_50` | 50 conversations/day |
| `TIER_250` | 250 conversations/day |
| `TIER_2K` | 2,000 conversations/day |
| `TIER_10K` | 10,000 conversations/day |
| `TIER_100K` | 100,000 conversations/day |
| `TIER_UNLIMITED` | Higher throughput |
| `TIER_NOT_SET` | Not yet used for messaging |

## Display Name Update

The `phone_number_name_update` webhook notifies of display name verification outcomes:
- `decision`: `APPROVED` or `REJECTED`
- Triggers re-registration workflow when approved

## Related Concepts
- [phone-number-management](../concepts/phone-number-management.md)

## Related Entities
- [business-phone-number](../entities/business-phone-number.md)
- [display-name](../entities/display-name.md)
