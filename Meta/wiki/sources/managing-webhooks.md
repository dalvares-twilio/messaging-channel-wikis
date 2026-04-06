---
type: source
title: "Managing Webhooks"
source_file: "[[raw/Managing Webhooks  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks"
ingested: 2026-04-05
tags: [webhooks, subscriptions, management]
---

## Summary

How to subscribe apps to webhooks on customer WABAs and manage webhook subscriptions.

## Key Principle

**Must subscribe to every WABA individually** to receive webhooks for it.

## Subscribe to WABA

```
POST /<WABA_ID>/subscribed_apps
Authorization: Bearer <ACCESS_TOKEN>
```

## Get Subscriptions

```
GET /<WABA_ID>/subscribed_apps
```

## Unsubscribe

```
DELETE /<WABA_ID>/subscribed_apps
```

## Available Webhook Fields

| Field | Description |
|-------|-------------|
| `account_alerts` | Messaging limits, profile, OBA status |
| `account_review_update` | Policy review outcomes |
| `account_update` | Partner events, violations, offboarding |
| `automatic_events` | Click-to-WhatsApp purchase/lead detection |
| `business_capability_update` | Limit changes |
| `history` | Chat history sync |
| `message_template_*` | Template status, quality, components |
| `messages` | Incoming messages and delivery status |
| `partner_solutions` | Multi-partner solution changes |
| `payment_configuration_update` | Payment gateway changes |
| `phone_number_name_update` | Display name verification |
| `phone_number_quality_update` | Throughput changes |
| `security` | 2FA/PIN changes |
| `smb_app_state_sync` | Contact sync |
| `smb_message_echoes` | WA Business app messages |
| `template_category_update` | Template recategorization |
| `user_preferences` | Marketing opt-out |

## Related Concepts
- [[wiki/concepts/webhooks]]
- [[wiki/concepts/webhook-fields]]
