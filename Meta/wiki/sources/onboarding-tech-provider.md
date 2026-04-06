---
type: source
title: "Onboarding as Tech Provider"
source_file: "[[raw/Onboarding business customers as a Tech Provider or Tech Partner.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-tech-provider"
ingested: 2026-04-05
tags: [onboarding, tech-provider, embedded-signup]
---

## Summary

Steps for Tech Providers and Tech Partners to complete after a business customer finishes Embedded Signup.

## Required Data

- Customer's WABA ID
- Customer's business phone number ID
- Your app ID and secret

## Steps

### 1. Exchange Token Code for Business Token
```
GET /oauth/access_token?client_id=<APP_ID>&client_secret=<APP_SECRET>&code=<CODE>
```

### 2. Subscribe App to Webhooks
```
POST /<WABA_ID>/subscribed_apps
Authorization: Bearer <BUSINESS_TOKEN>
```

### 3. Register Phone Number
```
POST /<BUSINESS_PHONE_NUMBER_ID>/register
{
  "messaging_product": "whatsapp",
  "pin": "<6_DIGIT_PIN>"
}
```

### 4. Send Test Message (Optional)
Verify messaging works.

### 5. Instruct Customer to Add Payment Method
Customer must add payment method via WhatsApp Manager > Overview > Add payment method.

## Key Difference from Solution Partners

Tech Providers do NOT share credit lines. Customers pay directly.

## Related Concepts
- [[wiki/concepts/solution-partners]]
- [[wiki/concepts/embedded-signup]]
