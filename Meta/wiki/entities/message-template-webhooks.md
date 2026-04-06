---
type: entity
title: "Message Template Webhooks"
entity_type: webhook-field
---

## Description

A group of webhook fields that notify you of changes to your message templates.

## Fields

| Field | Description |
|-------|-------------|
| `message_template_status_update` | Template status changes (approved, rejected, paused) |
| `message_template_quality_update` | Template quality score changes |
| `message_template_components_update` | Changes to template components |
| `template_category_update` | Template category changes |

## Permission Required

`whatsapp_business_management`

## Override Support

No — template webhooks always go to app's default callback URL.

## Use Cases

- Get notified when templates are approved/rejected
- Monitor template quality degradation
- Track category re-classification by Meta

## Related Concepts
- [[webhooks]]
- [[webhook-fields]]

## Related Entities
- [[account-alerts-webhook]]

## Sources
- [[webhooks-overview]]
