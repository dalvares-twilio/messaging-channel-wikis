---
type: source
title: "Onboarding as Solution Partner"
source_file: "[[raw/Onboarding business customers as a Solution Partner.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-solution-partner"
ingested: 2026-04-05
tags: [onboarding, solution-partner, embedded-signup]
---

## Summary

Steps for Solution Partners to complete after a business customer finishes Embedded Signup.

## Required Data

- Customer's WABA ID
- Customer's business phone number ID
- Your app ID and secret
- Your credit line ID
- Your system user access token

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

### 3. Share Credit Line
```
POST /<EXTENDED_CREDIT_LINE_ID>/whatsapp_credit_sharing_and_attach
?waba_currency=<CURRENCY>&waba_id=<WABA_ID>
```
Currencies: AUD, EUR, GBP, IDR, INR, USD

### 4. Register Phone Number
```
POST /<BUSINESS_PHONE_NUMBER_ID>/register
{
  "messaging_product": "whatsapp",
  "pin": "<6_DIGIT_PIN>"
}
```

### 5. Send Test Message (Optional)
Send message to customer's number to verify messaging works.

## Related Concepts
- [[wiki/concepts/solution-partners]]
- [[wiki/concepts/embedded-signup]]
