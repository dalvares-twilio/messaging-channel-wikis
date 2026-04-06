---
type: concept
title: "Webhook Fields"
aliases: [webhook subscriptions, webhook events]
sources: 2
---

## Overview

Webhook fields are the specific event types you can subscribe to in the WhatsApp Business Platform. Each field represents a category of events that will trigger webhook notifications to your endpoint.

## Available Fields

### Message-Related
| Field | Description |
|-------|-------------|
| `messages` | Incoming messages and outbound message status |
| `message_echoes` | Messages sent via companion devices |
| `smb_message_echoes` | Messages from onboarded Business app users |

### Account & Business
| Field | Description |
|-------|-------------|
| `account_alerts` | Messaging limit, business profile, OBA status |
| `account_review_update` | Policy guideline review results |
| `account_update` | Partner verification, violations, deletion |
| `business_capability_update` | WABA capability changes |

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
| `security` | Security settings changes |

### Other
| Field | Description |
|-------|-------------|
| `history` | Chat history sync for onboarded users |
| `automatic_events` | Purchase/lead detection from CTWA ads |
| `partner_solutions` | Multi-Partner Solution status changes |
| `payment_configuration_update` | Payments API config changes |
| `user_preferences` | Marketing message preferences |

## Override Support

Only certain fields support [[Knowledge-Bases/Channels/Meta/wiki/concepts/webhook-overrides|callback overrides]]:
- `messages`, `message_echoes`, `calls`, `consumer_profile`
- `messaging_handovers`, `group_*` fields
- `smb_*` fields, `history`, `account_settings_update`

**Not supported for override**: All template and account-level webhooks.

## Related Concepts
- [[webhooks]]
- [[Knowledge-Bases/Channels/Meta/wiki/concepts/webhook-overrides]]
- [[permissions]]

## Related Entities
- [[messages-webhook]]
- [[account-alerts-webhook]]
- [[message-template-webhooks]]

## Sources
- [[webhooks-overview]]
- [[Knowledge-Bases/Channels/Meta/wiki/sources/webhook-overrides]]
