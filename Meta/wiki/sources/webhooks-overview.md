---
type: source
title: Webhooks | Developer Documentation
source_file: "[[Webhooks  Developer Documentation]]"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview
ingested: 2026-04-05
tags:
  - webhooks
  - whatsapp
  - meta
  - reference
---

## Summary

This is the main reference document for WhatsApp Business Platform webhooks. Webhooks are HTTP requests containing JSON payloads sent from Meta's servers to your designated endpoint. They notify you of incoming messages, outgoing message status, account changes, template updates, and more.

The document provides a complete reference of all subscribable webhook fields, explains the permissions model, covers delivery mechanics (retry behavior, payload size limits), and offers troubleshooting guidance.

## Key Points

- **Payload size**: Up to 3 MB
- **Retry behavior**: On delivery failure, Meta retries with decreasing frequency for up to 7 days
- **Retries go to all subscribed apps** — can cause duplicates
- **mTLS supported** for added security
- **IP addresses** can be queried via `whois -h whois.radb.net` but change periodically

## Webhook Fields Reference

| Field | Purpose |
|-------|---------|
| `messages` | Incoming messages and outbound message status |
| `account_alerts` | Messaging limit, business profile, OBA status changes |
| `account_review_update` | Policy guideline review results |
| `account_update` | Partner verification, rate eligibility, violations, deletion |
| `business_capability_update` | WABA/portfolio capability changes |
| `message_template_*` | Template status, quality, components, category updates |
| `phone_number_name_update` | Display name verification outcomes |
| `phone_number_quality_update` | Throughput level changes |
| `security` | Security settings changes |

## Permissions Required

- **whatsapp_business_messaging** — for `messages` webhooks
- **whatsapp_business_management** — for all other webhooks

Solution providers need advanced access via App Review.

## Related Concepts
- [[webhooks]]
- [[webhook-fields]]
- [[permissions]]
- [[webhook-security]]

## Related Entities
- [[messages-webhook]]
- [[account-alerts-webhook]]
- [[message-template-webhooks]]
