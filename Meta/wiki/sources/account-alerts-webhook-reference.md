---
type: source
title: "account_alerts Webhook Reference"
source_file: "[[raw/account_alerts webhook reference  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_alerts"
ingested: 2026-04-05
tags: [webhooks, account, alerts, reference]
---

## Summary

The `account_alerts` webhook notifies of changes to messaging limits, business profiles, and Official Business Account (OBA) status.

## Triggers

- Messaging limit increase denied/deferred/needs more info
- OBA status approved or denied
- Business profile photo deleted

## Alert Types

| Type | Description |
|------|-------------|
| `OBA_APPROVED` | Official Business Account status approved |
| `OBA_REJECTED` | OBA status denied |
| `PROFILE_PICTURE_LOST` | Business profile photo deleted |
| `INCREASED_CAPABILITIES_ELIGIBILITY_DEFERRED` | Limit increase deferred |

## Alert Severity

| Severity | Meaning |
|----------|---------|
| `CRITICAL` | Rejection/denial — action may resolve |
| `WARNING` | Action may be needed |
| `INFORMATIONAL` | No action needed |

## Entity Types

| Type | Description |
|------|-------------|
| `BUSINESS` | Change to business portfolio |
| `PHONE_NUMBER` | Change to phone number |
| `CURRENT_STATUS_ID` | Change to business profile |

## Example Payload

```json
{
  "value": {
    "entity_type": "BUSINESS",
    "entity_id": "506914307656634",
    "alert_info": {
      "alert_severity": "WARNING",
      "alert_status": "ACTIVE",
      "alert_type": "INCREASED_CAPABILITIES_ELIGIBILITY_DEFERRED",
      "alert_description": "Limits cannot be increased..."
    }
  }
}
```

## Related Entities
- [[wiki/entities/account-alerts-webhook]]
- [[wiki/entities/official-business-account]]
