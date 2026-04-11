---
type: concept
title: "Phone Number Management"
aliases: [phone number lifecycle, number registration]
sources: 4
---

## Overview

Phone number management encompasses the full lifecycle of business phone numbers on the WhatsApp Business Platform: adding, verifying, registering, configuring, and deleting numbers.

## Lifecycle Stages

```
Add to WABA → Verify Ownership → Register for Cloud API → Configure → Use → Delete
```

### 1. Add to WABA
Methods: App Dashboard, Meta Business Suite, WhatsApp Manager, Embedded Signup

### 2. Verify Ownership
Receive code via SMS or voice call, then submit code to verify endpoint.

### 3. Register for Cloud API
```
POST /<PHONE_NUMBER_ID>/register
```
Required to send/receive messages via API.

### 4. Configure
- Set display name
- Configure business profile
- Enable two-step verification
- Set up conversational components
- Request OBA status

### 5. Delete
- WhatsApp Manager only (no API)
- Cannot delete if paid messages sent within 30 days
- Requires 2FA PIN if status is CONNECTED

## Key Limits

| Limit | Value |
|-------|-------|
| Initial numbers per portfolio | 2 |
| Maximum numbers per portfolio | 20 |
| Registration requests | 10 per 72 hours |
| Display name changes | 10 per 30 days |

## Phone Number Types

| Type | Recommended |
|------|-------------|
| Mobile | Yes |
| Fixed line | Voice OTP only |
| Toll-free | Voice OTP only |
| VoIP | Voice OTP only |
| Short codes | Not supported |

## Related Concepts
- [business-verification](business-verification.md)
- [user-identification](user-identification.md)

## Related Entities
- [business-phone-number](business-phone-number.md)
- [display-name](display-name.md)
- [two-step-verification](../entities/two-step-verification.md)
- [conversational-components](../entities/conversational-components.md)

## Sources
- [business-phone-numbers](business-phone-numbers.md)
- [phone-number-registration](phone-number-registration.md)
- [display-names](display-names.md)
- [two-step-verification](../sources/two-step-verification.md)
