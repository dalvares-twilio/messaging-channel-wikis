---
type: query
title: "How do I pre-fill or skip screens in Embedded Signup?"
asked: 2026-04-10
tags: [embedded-signup, pre-fill, customization]
---

## Question

How can I pre-fill business data or skip screens in Embedded Signup to improve the customer experience?

## Answer

Partners can inject known business data to pre-fill or bypass Embedded Signup screens using the `extras.setup` object in the FB.login call.

### Benefits

- Pre-fills business portfolio screen
- Bypasses WABA selection/creation screens
- Bypasses phone number selection/verification screens
- Sets phone number profile automatically

### Data Objects

#### Business Object

Pre-fills business information:

```javascript
setup: {
  business: {
    id: <BUSINESS_PORTFOLIO_ID>,  // or null for new
    name: '<NAME>',
    email: '<EMAIL>',
    website: '<URL>',
    address: { country: 'US', ... },
    phone: { code: 1, number: '6505559999' }
  }
}
```

#### Pre-verified Phone Object

Bypasses phone verification (requires pre-verified number workflow):

```javascript
setup: {
  preVerifiedPhone: {
    ids: ['<PHONE_NUMBER_ID>']
  }
}
```

#### Phone Profile Object

Sets display name and category:

```javascript
setup: {
  phone: {
    displayName: '<NAME>',
    category: 'APPAREL',
    description: '<DESCRIPTION>'
  }
}
```

#### WABA Object

Pre-selects existing WABA:

```javascript
setup: {
  whatsAppBusinessAccount: {
    ids: ['<WABA_ID>']
  }
}
```

### Complete Example

```javascript
FB.login(callback, {
  config_id: '<CONFIG_ID>',
  response_type: 'code',
  override_default_response_type: true,
  extras: {
    setup: {
      business: {
        name: 'Acme Corp',
        email: 'contact@acme.com',
        website: 'https://acme.com'
      },
      preVerifiedPhone: {
        ids: ['123456789']
      },
      phone: {
        displayName: 'Acme Support',
        category: 'RETAIL',
        description: 'Customer support line'
      }
    }
  }
});
```

### Best Practice

Inject business portfolio data + pre-verified number + phone profile for the optimal (shortest) flow.

## References

- [pre-filling-screens](../sources/pre-filling-screens.md)
- [embedded-signup-implementation](../sources/embedded-signup-implementation.md)
- [embedded-signup](../concepts/embedded-signup.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data
