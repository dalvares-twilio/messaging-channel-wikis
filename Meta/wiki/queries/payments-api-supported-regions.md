---
type: query
title: "Which regions and payment gateways does the WhatsApp Payments API support?"
asked: 2026-04-10
tags: [payments, india, brazil, gateways]
---

## Question

Which regions and payment gateways does the WhatsApp Payments API support?

## Answer

The Payments API enables businesses to accept payments directly within WhatsApp conversations. It is currently available in two regions with specific payment gateway integrations.

### Supported Regions and Gateways

| Region | Payment Gateways |
|--------|------------------|
| India | Razorpay, PayU, BillDesk, Zaakpay |
| Brazil | Region-specific gateways |

### Payment Configuration Status

When configuring a payment gateway, the status can be:

| Status | Description | Can Accept Payments? |
|--------|-------------|----------------------|
| `Active` | Tested in WhatsApp Manager, ready for Payments API | Yes |
| `Needs Connecting` | Disconnected from gateway, needs reconnection | No |
| `Needs Testing` | Connected but needs testing in WhatsApp Manager | No |

### Webhook Notifications

The `payment_configuration_update` webhook notifies of payment configuration changes:
- Payment config connected to payment gateway
- Payment config disconnected from gateway
- Payment config now active

### Setup Process

1. Connect to a supported payment gateway for your region
2. Configure payment settings in WhatsApp Manager
3. Test the integration in WhatsApp Manager
4. Status changes to `Active` when ready
5. Subscribe to `payment_configuration_update` webhook for status changes

### Important Notes

- Payments API is region-specific - different gateways for India vs Brazil
- Gateway must be fully configured and tested before accepting live payments
- Monitor the `payment_configuration_update` webhook for disconnection events

## References

- [payments-api](../concepts/payments-api.md)
- [payment-config-webhook-reference](../sources/payment-config-webhook-reference.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/payment_configuration_update
