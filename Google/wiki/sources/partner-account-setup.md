---
type: source
title: "Partner Account Setup"
source_file: "[Partner Account Setup.md](../../raw/Partner Account Setup.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/get-started/partner-account"
ingested: 2026-04-09
tags: [partner, webhook, setup, onboarding]
---

## Summary

How to set up an RBM partner account, including partner-level webhook configuration. The partner webhook is the default endpoint for ALL agents under your account.

## Key Points

### Prerequisites
- Google Developer Account
- HTTPS webhook endpoint
- Service for handling webhook requests

### Partner Account Setup
1. Register at [Business Communications Developer Console](https://business-communications.cloud.google.com/)
2. Configure partner info: name, display name, technical POC, webhook URL
3. Set up service account and download key
4. Configure and validate partner webhook

### User Roles
| Role | Access |
|------|--------|
| Owner | Initial creator, full access |
| Manager | Full console access |
| Reader | Read-only access |

### Partner Webhook Configuration

**Requirements:**
- HTTPS endpoint
- Accept POST requests
- Validate `clientToken`
- Return `200 OK` with `secret` value

**Validation flow:**
```json
// Google sends:
{ "clientToken": "YOUR_TOKEN", "secret": "RANDOM_VALUE" }

// You respond:
200 OK
body: RANDOM_VALUE
```

**Message verification (HMAC-SHA512):**
```javascript
let payload = Buffer.from(requestBody.message.data, 'base64');
let hmac = crypto.createHmac('sha512', CLIENT_TOKEN);
let expectedSig = hmac.update(payload).digest('base64');
let actualSig = req.header('X-Goog-Signature');

if (actualSig === expectedSig) {
  // Message is authentic
}
```

### Partner vs Agent Webhook
- Partner webhook = default for all agents
- Agent webhook = override for specific agent
- One queue per partner — failed webhooks impact all agents

## Related Concepts

- [message-verification](../concepts/message-verification.md)
- [async-processing](../concepts/async-processing.md)

## Related Entities

- [developer-console](../entities/developer-console.md)
- [rbm-management-api](../entities/rbm-management-api.md)
