---
type: concept
title: "Embedded Signup"
tags: [onboarding, signup, solution-partners]
---

## Definition

Embedded Signup allows solution providers to onboard business customers directly into the WhatsApp Business Platform. Businesses with existing WhatsApp Business app phone numbers can be migrated to Cloud API while preserving their chat history and contacts.

## Key Features

- Onboard businesses without requiring them to leave the partner's platform
- Migrate WhatsApp Business app phone numbers to Cloud API
- Optionally sync chat history (up to 180 days)
- Sync contacts from WhatsApp Business app

## Related Webhooks

- `history` — Chat history synchronization
- `smb_app_state_sync` — Contact synchronization
- `smb_message_echoes` — Messages sent via WhatsApp Business app

## Sources

- [history-webhook-reference](../sources/history-webhook-reference.md)
- [smb-state-sync-webhook-reference](../sources/smb-state-sync-webhook-reference.md)
- [smb-message-echoes-webhook-reference](../sources/smb-message-echoes-webhook-reference.md)
