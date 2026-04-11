---
type: source
title: "Pre-filling Screens"
source_file: "[Pre-filling screens  Developer Documentation.md](../../raw/Pre-filling screens  Developer Documentation.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data"
ingested: 2026-04-05
tags: [embedded-signup, pre-fill, customization]
---

## Summary

Inject known business data to pre-fill or bypass Embedded Signup screens, improving customer experience.

## Benefits of Pre-filling

- Pre-fills business portfolio screen
- Bypasses WABA selection/creation screens
- Bypasses phone number selection/verification screens
- Sets phone number profile automatically

## Data Objects

### Business Object
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

### Pre-verified Phone Object
```javascript
setup: {
  preVerifiedPhone: {
    ids: ['<PHONE_NUMBER_ID>']
  }
}
```

### Phone Profile Object
```javascript
setup: {
  phone: {
    displayName: '<NAME>',
    category: 'APPAREL',
    description: '<DESCRIPTION>'
  }
}
```

### WABA Object
```javascript
setup: {
  whatsAppBusinessAccount: {
    ids: ['<WABA_ID>']
  }
}
```

## Best Practice

Inject business portfolio data + pre-verified number + phone profile for optimal flow.

## Related Concepts
- [embedded-signup](../concepts/embedded-signup.md)
