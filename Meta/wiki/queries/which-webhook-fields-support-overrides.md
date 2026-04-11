---
type: query
title: "Which Webhook Fields Support Overrides"
query: "Which webhook fields can be routed to alternate callback URLs using overrides?"
answered: 2026-04-10
tags: [webhooks, overrides, fields, routing]
---

## Answer

Not all webhook fields support callback URL overrides. Here's the complete breakdown:

### Fields That Support Overrides

| Field | Description |
|-------|-------------|
| `messages` | Incoming messages and status updates |
| `message_echoes` | Messages sent via companion devices |
| `calls` | Voice/video call notifications |
| `consumer_profile` | User profile updates |
| `messaging_handovers` | Handover protocol events |
| `group_lifecycle_update` | Group creation/deletion |
| `group_participants_update` | Group membership changes |
| `group_settings_update` | Group settings changes |
| `group_status_update` | Group status changes |
| `smb_message_echoes` | WhatsApp Business app message echoes |
| `smb_app_state_sync` | Business app state sync |
| `history` | Chat history sync |
| `account_settings_update` | Account settings changes |

### Fields That Do NOT Support Overrides

These always go to your app's default callback URL:

- **All template webhooks:**
  - `message_template_status_update`
  - `message_template_quality_update`
  - `message_template_components_update`
  - `template_category_update`

- **Account-level webhooks:**
  - `account_update`
  - `account_review_update`
  - `account_alerts`
  - `business_capability_update`

- **Other:**
  - `phone_number_name_update`
  - `phone_number_quality_update`
  - `security`
  - `payment_configuration_update`
  - `partner_solutions`
  - `user_preferences`

### Why This Matters

If you're a solution provider routing webhooks per-customer:
- Message webhooks can be routed to customer-specific endpoints
- Template and account webhooks must be handled at your app's default endpoint and routed internally

### Workaround for Non-Supported Fields

For fields that don't support overrides, implement routing logic in your default webhook handler:
1. Receive webhook at default endpoint
2. Identify the WABA/phone number from payload
3. Forward to appropriate customer endpoint internally

## Sources Consulted
- [webhook-fields](../concepts/webhook-fields.md)
- [webhook-overrides](../concepts/webhook-overrides.md)
- [webhook-overrides](../sources/webhook-overrides.md)

## New Insights
None - override support is clearly documented. Key insight: the split is roughly "real-time messaging" (supports overrides) vs "administrative/account" (no override support).
