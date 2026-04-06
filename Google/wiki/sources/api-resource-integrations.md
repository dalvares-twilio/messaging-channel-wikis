---
type: source
title: "API Resource: brands.agents.integrations"
source_file: "[[raw/REST Resource brands.agents.integrations    RCS for Business.md]]"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents.integrations"
ingested: 2026-04-05
tags: [api, schema, integrations, webhooks, dialogflow]
---

## Summary

The `brands.agents.integrations` resource defines webhook and Dialogflow integrations for agents. Supports Dialogflow ES, Dialogflow CX, and custom webhooks.

## Integration Schema

```json
{
  "name": "string",           // Unique ID (read-only)
  "status": "ENABLED|DISABLED",
  
  // One of:
  "dialogflowEsIntegration": { ... },
  "dialogflowCxIntegration": { ... },
  "agentWebhookIntegration": { ... }
}
```

## AgentWebhookIntegration

```json
{
  "webhookUri": "string",       // Required - delivery URL
  "verificationToken": "string" // Input only - for validation
}
```

## DialogflowEsIntegration

| Field | Description |
|-------|-------------|
| `dialogflowProjectId` | Required, non-editable |
| `autoResponseStatus` | ENABLED/DISABLED — auto-send responses |
| `dialogflowServiceAccountEmail` | Output only — needs "Dialogflow Console Agent Editor" + "API Client" roles |
| `dialogflowKnowledgeBases[]` | Optional FAQ knowledge bases |

## DialogflowCxIntegration

| Field | Description |
|-------|-------------|
| `dialogflowProjectId` | Required, non-editable |
| `dialogflowAgentId` | Required |
| `autoResponseStatus` | ENABLED/DISABLED |
| `dialogflowServiceAccountEmail` | Output only |

## Knowledge Base Support

For Dialogflow ES:
- `DialogflowKnowledgebase` with `displayName` and `documents[]`
- Documents can be `faqUrl` (public URL) or `rawContent` (base64 CSV)
- CSV format: one question/answer pair per row

## Methods

| Method | Endpoint |
|--------|----------|
| `create` | POST `/v1/{parent}/integrations` |
| `delete` | DELETE `/v1/{name}` |
| `get` | GET `/v1/{name}` |
| `list` | GET `/v1/{parent}/integrations` |
| `patch` | PATCH `/v1/{name}` |

## Notes

- Agent-level webhook overrides partner-level webhook
- In practice, agents only have one webhook integration
- Dialogflow project ID cannot be changed — must delete and recreate

## Related Concepts

- [[wiki/concepts/async-processing]]
- [[wiki/concepts/message-verification]]

## Related Entities

- [[wiki/entities/dialogflow]]
- [[wiki/entities/rbm-management-api]]
