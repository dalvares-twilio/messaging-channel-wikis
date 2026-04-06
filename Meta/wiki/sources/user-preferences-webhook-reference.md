---
type: source
title: "user_preferences Webhook Reference"
source_file: "[[raw/user_preferences webhook reference  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/user_preferences"
ingested: 2026-04-05
tags: [webhooks, preferences, marketing, reference]
---

## Summary

The `user_preferences` webhook notifies of changes to WhatsApp user marketing message preferences.

## Triggers

- WhatsApp user stops marketing messages
- WhatsApp user resumes marketing messages

## Preference Values

| Value | Description |
|-------|-------------|
| `stop` | User opted to stop receiving marketing messages |
| `resume` | User opted to resume receiving marketing messages |

## Payload Fields

| Field | Description |
|-------|-------------|
| `wa_id` | WhatsApp user ID |
| `category` | Always `marketing_messages` |
| `value` | `stop` or `resume` |
| `detail` | Human-readable description |

## Related Concepts
- [[wiki/concepts/marketing-messages]]

## Related Entities
- [[wiki/entities/message-template-webhooks]]
