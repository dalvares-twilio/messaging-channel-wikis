---
type: source
title: "Business Communications API Reference"
source_file: "[Business Communications    RCS for Business.md](../../raw/Business Communications    RCS for Business.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest"
ingested: 2026-04-05
tags: [api, reference, endpoints]
---

## Summary

The Business Communications API (`businesscommunications.googleapis.com`) is the REST API for managing RBM agents, brands, integrations, testers, and analytics programmatically.

## Key Points

### Service Endpoint
```
https://businesscommunications.googleapis.com
```

### REST Resources

| Resource | Methods | Description |
|----------|---------|-------------|
| `v1.brands` | create, delete, get, list, patch | Brand management |
| `v1.brands.agents` | create, get, list, patch, requestLaunch, requestVerification, getLaunch, getVerification, updateLaunch, updateVerification | Agent lifecycle |
| `v1.brands.agents.integrations` | create, delete, get, list, patch | Webhook/Dialogflow integrations |
| `v1.partners` | get, patch | Partner configuration |
| `v1.regions` | list | List available carriers |
| `v1.testers` | create, delete, get, list | Test device management |
| `v1.analytics.agentPerformances` | list | Agent analytics |

### Key Endpoints

| Operation | Method | Endpoint |
|-----------|--------|----------|
| Create brand | POST | `/v1/brands` |
| Create agent | POST | `/v1/{parent=brands/*}/agents` |
| Request launch | POST | `/v1/{name=brands/*/agents/*}:requestLaunch` |
| Request verification | POST | `/v1/{name=brands/*/agents/*}:requestVerification` |
| List carriers | GET | `/v1/regions` |
| Add tester | POST | `/v1/testers` |

### Notes
- `brands.agents.delete` is **deprecated** — agents cannot be deleted
- OAuth scope: `https://www.googleapis.com/auth/businesscommunications`

## Related Concepts

- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [carrier-launch](../concepts/carrier-launch.md)

## Related Entities

- [rbm-management-api](../entities/rbm-management-api.md)
