---
type: source
title: "smb_message_echoes Webhook Reference"
source_file: "[[raw/smb_message_echoes webhook reference  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/smb_message_echoes"
ingested: 2026-04-05
tags: [webhooks, messages, echoes, smb, reference]
---

## Summary

The `smb_message_echoes` webhook notifies of messages sent via WhatsApp Business app or companion (linked) devices by onboarded business customers.

## Triggers

- Business customer sends message via WhatsApp Business app
- Business customer sends message via companion device

## Use Case

Allows solution providers to mirror messages sent directly through the WhatsApp Business app, maintaining a complete conversation history across both API and app-initiated messages.

## Payload Fields

| Field | Description |
|-------|-------------|
| `from` | Business display phone number |
| `to` | WhatsApp user phone number |
| `id` | WhatsApp message ID |
| `timestamp` | When message was sent |
| `type` | Message type (text, image, etc.) |

## Related Concepts
- [[wiki/concepts/embedded-signup]]

## Related Entities
- [[wiki/entities/business-phone-number]]
