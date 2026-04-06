---
type: entity
title: "account_alerts Webhook Field"
entity_type: webhook-field
---

## Description

The `account_alerts` webhook field notifies you of changes to a business phone number's:
- **Messaging limit** — tier changes, limit increases/decreases
- **Business profile** — profile information updates
- **Official Business Account (OBA) status** — verification status changes

## Permission Required

`whatsapp_business_management`

## Override Support

No — account-level webhooks always go to app's default callback URL.

## Use Cases

- Monitor when messaging limits are upgraded/downgraded
- Track business profile changes
- Get notified of OBA verification outcomes

## Related Concepts
- [[webhooks]]
- [[webhook-fields]]
- [[permissions]]

## Related Entities
- [[message-template-webhooks]]

## Sources
- [[webhooks-overview]]
