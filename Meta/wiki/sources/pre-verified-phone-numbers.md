---
type: source
title: "Pre-verified Phone Numbers"
source_file: "[[raw/Pre-verified phone numbers  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers"
ingested: 2026-04-05
tags: [phone-numbers, verification, embedded-signup]
---

## Summary

Solution Partners can offer pre-verified phone numbers to customers, eliminating OTP verification during Embedded Signup.

## Requirements

- Approved Solution Partner
- business_management permission
- Valid phone numbers

## Limitations

- Partner tracks who claimed numbers
- 90 days to claim after verification (reverts to unverified)
- 90 days to register after claim
- Cannot re-verify until 45 days before expiration

## Create Pre-verified Number

### Step 1: Add Number
```
POST /<BUSINESS_PORTFOLIO_ID>/add_phone_numbers?phone_number=<NUMBER>
```
Returns: Pre-verified phone number ID

### Step 2: Request Code
```
POST /<PREVERIFIED_ID>/request_code?code_method=SMS&language=en_US
```

### Step 3: Verify
```
POST /<PREVERIFIED_ID>/verify_code?code=<CODE>
```

## Surface in Embedded Signup

```javascript
setup: {
  preVerifiedPhone: {
    ids: ['<PREVERIFIED_ID>']
  }
}
```

## After Claim

Pre-verified object is replaced by WhatsApp Business Phone Number. Get new ID via:
- Session logging event
- `GET /<WABA_ID>/phone_numbers`

## Sharing with Partners

```
POST /<BUSINESS_ID>/share_preverified_numbers
?partner_business_id=<ID>&preverified_id=<ID>
```

## Related Concepts
- [[wiki/concepts/embedded-signup]]
