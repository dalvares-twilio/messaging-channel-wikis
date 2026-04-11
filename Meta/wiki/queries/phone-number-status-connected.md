---
type: query
title: "What does phone number status CONNECTED mean and why is it important?"
asked: 2026-04-10
tags: [phone-numbers, status, registration]
---

## Question

What does phone number status CONNECTED mean and why is it important?

## Answer

The "CONNECTED" status indicates a phone number is fully registered and ready to send/receive messages via Cloud API.

### Why CONNECTED Status is Important

1. **Required for messaging** - Status must be CONNECTED to send or receive messages
2. **Required for limit increases** - Messaging limit upgrades require CONNECTED status
3. **Deletion requires 2FA PIN** - If status is CONNECTED, you need the 2FA PIN to delete the number

### Checking Phone Number Status

```
GET /<PHONE_NUMBER_ID>?fields=status
```

### Status Values

While the documentation primarily references CONNECTED as the operational state, phone numbers can have different statuses during the lifecycle:
- After adding to WABA (not yet verified/registered)
- After verification (verified but not registered for Cloud API)
- After registration (CONNECTED - fully operational)

### Requirements for Increasing Messaging Limits

For automatic limit tier increases, you need:
1. Phone number status: **CONNECTED**
2. Quality rating: **Medium** or **High**
3. Sufficient messaging volume within current tier

### Related Operations

| Check | Endpoint |
|-------|----------|
| Get status | `GET /<PHONE_ID>?fields=status` |
| Get throughput | `GET /<PHONE_ID>?fields=throughput` |
| Get all numbers | `GET /<WABA_ID>/phone_numbers` |

## References

- [business-phone-numbers](../sources/business-phone-numbers.md)
- [messaging-limits](../concepts/messaging-limits.md)
- [phone-number-management](../concepts/phone-number-management.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers
