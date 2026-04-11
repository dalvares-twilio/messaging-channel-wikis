---
type: query
title: "How do pre-verified phone numbers work in Embedded Signup?"
asked: 2026-04-10
tags: [phone-numbers, verification, embedded-signup, partners]
---

## Question

How do pre-verified phone numbers work in Embedded Signup?

## Answer

Solution Partners can offer pre-verified phone numbers to customers, eliminating the OTP verification step during Embedded Signup.

### Requirements

- Approved Solution Partner status
- `business_management` permission
- Valid phone numbers to verify

### Workflow Steps

#### Step 1: Add Phone Number to Business Portfolio

```
POST /<BUSINESS_PORTFOLIO_ID>/add_phone_numbers?phone_number=<NUMBER>
```

Returns: Pre-verified phone number ID

#### Step 2: Request Verification Code

```
POST /<PREVERIFIED_ID>/request_code?code_method=SMS&language=en_US
```

#### Step 3: Verify the Code

```
POST /<PREVERIFIED_ID>/verify_code?code=<CODE>
```

#### Step 4: Surface in Embedded Signup

```javascript
setup: {
  preVerifiedPhone: {
    ids: ['<PREVERIFIED_ID>']
  }
}
```

### Important Time Limits

| Period | Deadline |
|--------|----------|
| Claim after verification | 90 days (reverts to unverified) |
| Register after claim | 90 days |
| Re-verify before expiration | 45 days minimum |

### After Customer Claims

The pre-verified object is replaced by a WhatsApp Business Phone Number. Get the new ID via:
- Session logging event during Embedded Signup
- `GET /<WABA_ID>/phone_numbers` API call

### Sharing with Other Partners

```
POST /<BUSINESS_ID>/share_preverified_numbers
?partner_business_id=<ID>&preverified_id=<ID>
```

Partners must track which numbers have been claimed since the pre-verified object is consumed upon claim.

## References

- [pre-verified-phone-numbers](../sources/pre-verified-phone-numbers.md)
- [embedded-signup](../concepts/embedded-signup.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers
