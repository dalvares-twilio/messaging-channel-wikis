---
type: source
title: "payment_configuration_update Webhook Reference"
source_file: "[[raw/payment_configuration_update webhook reference  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/payment_configuration_update"
ingested: 2026-04-05
tags: [webhooks, payments, configuration, reference]
---

## Summary

The `payment_configuration_update` webhook notifies of payment configuration changes for Payments API (India and Brazil).

## Triggers

- Payment config connected to payment gateway
- Payment config disconnected from gateway
- Payment config now active

## Payment Gateway Providers

- billdesk
- payu
- razorpay
- zaakpay

## Configuration Status Values

| Status | Description |
|--------|-------------|
| `Active` | Tested in WhatsApp Manager, ready for Payments API |
| `Needs Connecting` | Disconnected from gateway, needs reconnection |
| `Needs Testing` | Connected but needs testing in WhatsApp Manager |

## Related Concepts
- [[wiki/concepts/payments-api]]
