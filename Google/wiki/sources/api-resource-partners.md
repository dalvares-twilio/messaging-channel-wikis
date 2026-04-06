---
type: source
title: "API Resource: partners"
source_file: "[[raw/REST Resource partners    RCS for Business.md]]"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/partners"
ingested: 2026-04-05
tags: [api, schema, partners]
---

## Summary

The `partners` resource represents an RBM partner account — the entity onboarded with the platform that manages brands and agents.

## Partner Schema

```json
{
  "name": "string",           // Immutable unique ID
  "displayName": "string",    // Required
  "company": "string",        // Optional
  "contactEmails": ["string"],
  "technicalContact": {
    "name": "string",
    "email": "string",
    "phoneNumber": { "number": "string" }
  },
  "productCapabilities": [{
    "product": "RCS_BUSINESS_MESSAGING",
    "rcsBusinessMessagingCapability": {
      "webhookUrl": "string"   // Partner-level webhook
    }
  }],
  "dialogflowServiceAccountEmail": "string"  // Output only
}
```

## Key Fields

| Field | Description |
|-------|-------------|
| `name` | Unique partner identifier (immutable) |
| `displayName` | Display name shown to businesses |
| `company` | Public company name |
| `contactEmails[]` | Contact email list |
| `technicalContact` | Technical POC details |
| `webhookUrl` | Partner-level webhook (applies to all agents without agent-level webhook) |
| `dialogflowServiceAccountEmail` | Service account for Dialogflow access (platform-created) |

## Products

- `RCS_BUSINESS_MESSAGING` — RCS for Business product

## Methods

| Method | Endpoint | Description |
|--------|----------|-------------|
| `get` | GET `/v1/{name=partners/*}` | Get partner info |
| `patch` | PATCH `/v1/{partner.name=partners/*}` | Update partner info |

## Related Concepts

- [[wiki/concepts/async-processing]]

## Related Entities

- [[wiki/entities/rbm-management-api]]
- [[wiki/entities/developer-console]]
