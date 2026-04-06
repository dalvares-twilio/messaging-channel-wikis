---
type: source
title: "smb_app_state_sync Webhook Reference"
source_file: "[[raw/smb_app_state_sync webhook reference  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/smb_app_state_sync"
ingested: 2026-04-05
tags: [webhooks, contacts, sync, smb, reference]
---

## Summary

The `smb_app_state_sync` webhook synchronizes contacts for WhatsApp Business app users onboarded by solution providers.

## Triggers

- Solution provider initiates contacts sync
- Business customer adds a contact
- Business customer removes a contact
- Business customer edits a contact

## Action Values

| Action | Description |
|--------|-------------|
| `add` | User added or edited a contact |
| `remove` | User removed a contact |

## Contact Fields

| Field | Description |
|-------|-------------|
| `full_name` | Contact's full name (not included on remove) |
| `first_name` | Contact's first name (not included on remove) |
| `phone_number` | Contact's WhatsApp phone number |

## Related Concepts
- [[wiki/concepts/embedded-signup]]

## Related Entities
- [[wiki/entities/business-phone-number]]
