---
type: query
title: "Webhook Permissions Required"
query: "What permissions do I need to receive WhatsApp webhooks?"
answered: 2026-04-10
tags: [webhooks, permissions, access, app-review]
---

## Answer

WhatsApp webhooks require specific permissions depending on the webhook field:

### Permission Mapping

| Permission | Webhook Fields |
|------------|----------------|
| `whatsapp_business_messaging` | `messages` webhook only |
| `whatsapp_business_management` | All other webhooks |

### Detailed Breakdown

**whatsapp_business_messaging** enables:
- Incoming message notifications
- Outbound message status updates (sent, delivered, read)
- Message echoes

**whatsapp_business_management** enables:
- Account-level webhooks (`account_alerts`, `account_update`, `account_review_update`)
- Template webhooks (`message_template_status_update`, quality, components, category)
- Phone number webhooks (`phone_number_name_update`, `phone_number_quality_update`)
- Business capability updates
- Security webhooks
- Partner solutions webhooks
- Payment configuration webhooks

### Solution Provider Requirements

Solution providers need **advanced access** via App Review to receive webhooks for their customers' WABAs. This involves:

1. Submitting your app for review
2. Demonstrating legitimate business use case
3. Explaining how you'll handle customer data

### Setup Steps

1. Request appropriate permissions in App Dashboard
2. Complete App Review if required (solution providers)
3. Subscribe to webhook fields in App Dashboard > WhatsApp > Configuration
4. Configure your endpoint and verify token
5. Ensure your endpoint passes the verification handshake

## Sources Consulted
- [webhooks-overview](../sources/webhooks-overview.md)
- [permissions](../concepts/permissions.md)
- [messages-webhook](../entities/messages-webhook.md)

## New Insights
None - permission model is clearly documented. Key insight: the separation between messaging and management permissions allows granular access control.
