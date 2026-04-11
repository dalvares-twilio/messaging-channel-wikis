---
type: concept
title: "Payments API"
tags: [payments, india, brazil]
---

## Definition

The Payments API enables businesses to accept payments directly within WhatsApp conversations. Currently available in India and Brazil with region-specific payment gateway integrations.

## Supported Regions

| Region | Payment Gateways |
|--------|------------------|
| India | Razorpay, PayU, BillDesk, Zaakpay |
| Brazil | Region-specific gateways |

## Payment Configuration Status

| Status | Description |
|--------|-------------|
| Active | Tested and ready for use |
| Needs Connecting | Disconnected from gateway |
| Needs Testing | Connected but requires testing |

## Related Webhooks

- `payment_configuration_update` — Payment gateway configuration changes

## Sources

- [payment-config-webhook-reference](../sources/payment-config-webhook-reference.md)
