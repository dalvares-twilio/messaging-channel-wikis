---
type: query
title: "What template status events can I receive via webhook?"
asked: 2026-04-10
tags: [webhooks, templates, status]
---

## Question

What template status events does WhatsApp send via webhooks? What should I handle in my integration?

## Answer

WhatsApp sends template lifecycle events via the `message_template_status_update` webhook field.

### Status Events

| Event | Description | Action Needed |
|-------|-------------|---------------|
| `APPROVED` | Template approved for use | Can start using template |
| `REJECTED` | Template rejected | Edit and resubmit, or appeal |
| `DISABLED` | Disabled due to user feedback | Review and revise template |
| `FLAGGED` | At risk of being disabled | Proactively review quality |
| `PAUSED` | Temporarily paused | Wait for automatic resumption |
| `REINSTATED` | No longer flagged/disabled | Can resume using template |
| `PENDING` | Under review | Wait for approval |
| `LOCKED` | Cannot be edited | Create new template if changes needed |
| `ARCHIVED` | Archived from active list | Template no longer in use |
| `LIMIT_EXCEEDED` | WABA at template limit (250) | Delete unused templates |

### Rejection Reasons

When a template is rejected, the webhook includes a reason:

| Reason | Description |
|--------|-------------|
| `INVALID_FORMAT` | Template has formatting issues |
| `INCORRECT_CATEGORY` | Content doesn't match selected category |
| `ABUSIVE_CONTENT` | Violates Meta policies |
| `PROMOTIONAL` | Promotional content violates policies |
| `SCAM` | Suspected scam content |

### Other Template Webhooks

| Field | Purpose |
|-------|---------|
| `message_template_quality_update` | Quality score changes |
| `message_template_components_update` | Template components modified |
| `template_category_update` | Category reclassification |

## References

- [template-webhooks-reference](../sources/template-webhooks-reference.md)
- [message-template-webhooks](../entities/message-template-webhooks.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/message_template_status_update
