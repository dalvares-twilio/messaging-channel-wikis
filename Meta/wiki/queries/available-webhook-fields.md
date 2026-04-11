---
type: query
title: "Available Webhook Fields"
query: "What webhook fields can I subscribe to in the WhatsApp Business Platform?"
answered: 2026-04-10
tags: [webhooks, fields, subscriptions, events]
---

## Answer

The WhatsApp Business Platform offers numerous webhook fields organized by category:

### Message-Related
| Field | Description |
|-------|-------------|
| `messages` | Incoming messages and outbound message status |
| `message_echoes` | Messages sent via companion devices |
| `smb_message_echoes` | Messages from onboarded Business app users |

### Account & Business
| Field | Description |
|-------|-------------|
| `account_alerts` | Messaging limit, business profile, OBA status changes |
| `account_review_update` | Policy guideline review results |
| `account_update` | Partner verification, rate eligibility, violations, deletion |
| `business_capability_update` | WABA/portfolio capability changes |

### Template-Related
| Field | Description |
|-------|-------------|
| `message_template_status_update` | Template status changes |
| `message_template_quality_update` | Template quality score changes |
| `message_template_components_update` | Template component changes |
| `template_category_update` | Template category changes |

### Phone Number
| Field | Description |
|-------|-------------|
| `phone_number_name_update` | Display name verification outcomes |
| `phone_number_quality_update` | Throughput level changes |
| `security` | Security settings changes (two-step verification) |

### Other
| Field | Description |
|-------|-------------|
| `history` | Chat history sync for onboarded users |
| `automatic_events` | Purchase/lead detection from CTWA ads |
| `partner_solutions` | Multi-Partner Solution status changes |
| `payment_configuration_update` | Payments API config changes |
| `user_preferences` | Marketing message preferences |

### Permissions Required
- **whatsapp_business_messaging** - for `messages` webhooks
- **whatsapp_business_management** - for all other webhooks

Solution providers need advanced access via App Review.

## Sources Consulted
- [webhook-fields](../concepts/webhook-fields.md)
- [webhooks-overview](../sources/webhooks-overview.md)
- [messages-webhook](../entities/messages-webhook.md)

## New Insights
None - field list is comprehensive in existing sources.
