---
type: query
title: "What alert types does the account_alerts webhook send?"
asked: 2026-04-10
tags: [webhooks, alerts, account]
---

## Question

What alert types does the account_alerts webhook send?

## Answer

The `account_alerts` webhook sends notifications for three categories of changes:

### Alert Types

| Type | Description |
|------|-------------|
| `OBA_APPROVED` | Official Business Account status approved |
| `OBA_REJECTED` | OBA status denied |
| `PROFILE_PICTURE_LOST` | Business profile photo deleted |
| `INCREASED_CAPABILITIES_ELIGIBILITY_DEFERRED` | Messaging limit increase deferred |

### Alert Severity Levels

| Severity | Meaning | Action Required |
|----------|---------|-----------------|
| `CRITICAL` | Rejection/denial | May be resolvable |
| `WARNING` | Potential action needed | Review recommended |
| `INFORMATIONAL` | Status update | No action needed |

### Entity Types

The `entity_type` field indicates what changed:
- `BUSINESS` - Change to business portfolio
- `PHONE_NUMBER` - Change to phone number
- `CURRENT_STATUS_ID` - Change to business profile

### Example Payload

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

## References

- [account-alerts-webhook-reference](../sources/account-alerts-webhook-reference.md)
- [account-alerts-webhook](../entities/account-alerts-webhook.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_alerts
