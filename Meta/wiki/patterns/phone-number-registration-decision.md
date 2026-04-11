---
type: pattern
title: "Phone Number Registration Decision Tree"
applies_to: "Adding and registering phone numbers for Cloud API"
confidence: "high"
learned_from: "phone-number-lifecycle-stages query, business-phone-numbers source"
---

## Pattern

Follow the strict lifecycle sequence: Add to WABA, verify ownership, then register for Cloud API. Choose phone number type based on verification capability; prefer mobile numbers when possible.

## When to Apply

- Adding new phone numbers to a WABA
- Migrating numbers from WhatsApp Business app
- Troubleshooting "not registered" messaging failures

## Decision Tree

```
Do you have the phone number?
├── No → Acquire number first
│   └── For partners: Consider pre-verified number workflow
└── Yes → What type of number?
    ├── Mobile → Recommended (SMS + Voice verification)
    ├── Fixed line → Voice OTP only
    ├── Toll-free → Voice OTP only  
    ├── VoIP → Voice OTP only
    └── Short code → NOT SUPPORTED (stop here)
```

## Lifecycle Steps

1. **Add to WABA** (via App Dashboard, MBS, WhatsApp Manager, or Embedded Signup)
2. **Verify Ownership** (`POST /<PHONE_ID>/request_code` then `POST /<PHONE_ID>/verify_code`)
3. **Register for Cloud API** (`POST /<PHONE_NUMBER_ID>/register`) - REQUIRED for messaging
4. **Configure** (display name, business profile, 2FA, conversational components)
5. **Use** (status must be CONNECTED)
6. **Delete** (WhatsApp Manager only, not API)

## Key Limits to Remember

| Constraint | Value |
|------------|-------|
| Initial numbers per portfolio | 2 |
| Maximum numbers per portfolio | 20 |
| Registration attempts | 10 per 72 hours |
| Display name changes | 10 per 30 days |

## When NOT to Apply

- Pre-verified phone numbers from partners (skip verification step)
- Numbers already registered (check status first)

## Examples

- New customer signup: Full lifecycle from step 1
- Partner providing numbers: Use pre-verified workflow, skip step 2
- Migrating from WA Business app: Use Embedded Signup migration flow

## Related

- [phone-number-management](../concepts/phone-number-management.md)
- [pre-verified-phone-numbers-workflow](../queries/pre-verified-phone-numbers-workflow.md)

## Sources

- [business-phone-numbers](../sources/business-phone-numbers.md)
- [phone-number-registration](../sources/phone-number-registration.md)
- [pre-verified-phone-numbers](../sources/pre-verified-phone-numbers.md)
