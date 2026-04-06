---
type: source
title: "App-Only Install"
source_file: "[[raw/App-Only Install  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/app-only-install"
ingested: 2026-04-05
tags: [embedded-signup, security, tokens]
---

## Summary

Configure Embedded Signup to only allow business tokens (not system tokens) for customer asset access. Enhances security by reducing token compromise impact.

## Configuration

```json
{
  "extras": {
    "version": "v3",
    "features": [{"name": "app_only_install"}]
  }
}
```

## With Multi-Partner Solution

Add `setup.solutionID` alongside the feature flag.

## Events

| Event | Trigger |
|-------|---------|
| `FINISH_GRANT_ONLY_API_ACCESS` | Session logging on completion |
| `PARTNER_APP_INSTALLED` | account_update webhook on install |
| `PARTNER_APP_UNINSTALLED` | account_update webhook on removal |

## Get Business Token

```
POST /<BUSINESS_PORTFOLIO_ID>/system_user_access_tokens
?fetch_only=true&system_user_id=<ID>
```

## Limitations

Cannot be used for WhatsApp Business app user onboarding.

## Related Concepts
- [[wiki/concepts/embedded-signup]]
- [[wiki/concepts/solution-partners]]
