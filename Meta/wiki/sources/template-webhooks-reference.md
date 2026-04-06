---
type: source
title: "Template Webhooks Reference"
source_file: "[[raw/message_template_status_update webhook reference  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/message_template_status_update"
ingested: 2026-04-05
tags: [webhooks, templates, reference, payload]
---

## Summary

Four webhook fields cover template lifecycle events: status updates, quality changes, component updates, and category updates.

## Template Webhook Fields

| Field | Triggers |
|-------|----------|
| `message_template_status_update` | Approved, rejected, disabled, paused, reinstated |
| `message_template_quality_update` | Quality score changes |
| `message_template_components_update` | Component modifications |
| `template_category_update` | Category reclassification |

## Status Events

| Event | Description |
|-------|-------------|
| `APPROVED` | Template approved for use |
| `REJECTED` | Template rejected — edit or appeal |
| `DISABLED` | Disabled due to user feedback |
| `FLAGGED` | At risk of being disabled |
| `PAUSED` | Temporarily paused |
| `REINSTATED` | No longer flagged/disabled |
| `PENDING` | Under review |
| `LOCKED` | Cannot be edited |
| `ARCHIVED` | Archived from active list |
| `LIMIT_EXCEEDED` | WABA at template limit (250) |

## Rejection Reasons

| Reason | Description |
|--------|-------------|
| `INVALID_FORMAT` | Template has format issues |
| `INCORRECT_CATEGORY` | Content doesn't match category |
| `ABUSIVE_CONTENT` | Violates policies |
| `PROMOTIONAL` | Violates policies |
| `SCAM` | Violates policies |

## Template Categories

- `MARKETING`
- `UTILITY`
- `AUTHENTICATION`

## Related Entities
- [[wiki/entities/message-template-webhooks]]
