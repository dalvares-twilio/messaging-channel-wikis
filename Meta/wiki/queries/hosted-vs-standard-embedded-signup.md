---
type: query
title: "What is the difference between Hosted and Standard Embedded Signup?"
asked: 2026-04-10
tags: [embedded-signup, hosted, onboarding]
---

## Question

What is the difference between Hosted Embedded Signup and Standard Embedded Signup?

## Answer

### Standard Embedded Signup

Partners integrate the Facebook JavaScript SDK into their own website:

- **Full customization** — Pre-fill screens, skip steps, inject business data
- **Direct control** — Session logging, response callbacks, error handling
- **More development work** — Requires SSL, SDK integration, allowed domains

```javascript
FB.login(callback, {
  config_id: '<CONFIGURATION_ID>',
  response_type: 'code',
  override_default_response_type: true,
  extras: {
    setup: {
      business: { ... },
      preVerifiedPhone: { ... }
    }
  }
});
```

### Hosted Embedded Signup ("Hosted ES")

Meta hosts the signup page — partners just link to it:

- **Zero integration** — No coding required
- **No customization** — Cannot pre-fill or skip screens
- **Cloud API only** — On-Premises API not supported
- **Simpler setup** — Just get URL from App Dashboard

### Feature Comparison

| Feature | Standard | Hosted |
|---------|----------|--------|
| Customizable flow | Yes | No |
| Pre-fill business data | Yes | No |
| Bypass screens | Yes | No |
| Requires coding | Yes | No |
| On-Premises API | Yes | No |
| Development effort | High | None |

### Hosted ES Steps

1. Create Facebook Login for Business configuration
2. Get Hosted ES URL from App Dashboard > WhatsApp > Quickstart
3. Capture customer asset IDs from `account_update` webhook (PARTNER_ADDED event)
4. Generate HMAC-SHA256 hash of app secret and system token
5. Get business token via POST /<BUSINESS_PORTFOLIO_ID>/system_user_access_tokens
6. Complete onboarding steps

### When to Use Each

- **Hosted ES** — Quick setup, low volume, no custom requirements
- **Standard ES** — Higher volume, custom onboarding flow, pre-verified numbers

## References

- [hosted-embedded-signup](../sources/hosted-embedded-signup.md)
- [embedded-signup-implementation](../sources/embedded-signup-implementation.md)
- [pre-filling-screens](../sources/pre-filling-screens.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/hosted-es
