---
type: source
title: "security Webhook Reference"
source_file: "[[raw/security webhook reference  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/security"
ingested: 2026-04-05
tags: [webhooks, security, two-step-verification, reference]
---

## Summary

The `security` webhook notifies of changes to a business phone number's security settings.

## Triggers

- User clicks "Turn off two-step verification" in WhatsApp Manager
- User completes instructions in "WhatsApp Two-Step Verification Reset" email
- User changes or enables phone number PIN via WhatsApp Manager

## Event Values

- `PIN_RESET_REQUEST`

## Payload Fields

| Field | Description |
|-------|-------------|
| `display_phone_number` | Business phone number |
| `event` | Security event type |
| `requester` | Meta Business Suite user ID who triggered the action |

## Related Concepts
- [[wiki/concepts/two-step-verification]]

## Related Entities
- [[wiki/entities/business-phone-number]]
