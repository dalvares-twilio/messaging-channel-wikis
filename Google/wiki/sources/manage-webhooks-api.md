---
type: source
title: "Manage Webhooks (API)"
source_file: "[[raw/Manage webhooks    RCS for Business.md]]"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/webhooks"
ingested: 2026-04-05
tags: [api, management, webhooks]
---

## Summary

Programmatic webhook management via RBM Management API. By default, agents use partner-level webhook. API allows configuring agent-level webhooks for distinct behavior.

## Key Points

### Default Behavior
- All agents created via API use single partner-level webhook
- Configured in Developer Console

### Agent-Level Webhooks
- Good for multiple agents with distinct behavior
- In practice, RBM agent only ever has single webhook integration

### Operations
- **Create**: `brands.agents.integrations.create`
  - Requires URL and validation token
  - Must configure webhook to follow validation steps first
- **List**: `brands.agents.integrations.list`
- **Get details**: `brands.agents.integrations.get`
- **Delete**: `brands.agents.integrations.delete`

### Webhook Integration Object
```json
{
  "name": "brands/.../agents/.../integrations/...",
  "status": "ENABLED",
  "agentWebhookIntegration": {
    "webhookUri": "https://myrbmserviceendpoint.somewhere.com/callback"
  }
}
```

## Related Concepts

- [[wiki/concepts/async-processing]]
- [[wiki/concepts/message-verification]]

## Related Entities

- [[wiki/entities/rbm-management-api]]
- [[wiki/entities/developer-console]]
