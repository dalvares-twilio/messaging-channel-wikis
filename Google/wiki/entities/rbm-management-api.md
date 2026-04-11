---
type: entity
title: "RBM Management API"
entity_type: api
---

## Description

The RBM Management API (part of Business Communications API) handles agent lifecycle operations — creating agents, editing agent info, managing testers.

## Usage

- Create and configure agents programmatically
- Edit agent information
- Send tester invites
- Check tester status
- Remove test devices

### Key Endpoints

| Operation | Endpoint |
|-----------|----------|
| Create agent | `POST /v1/brands.agents` |
| Send tester invite | `POST /v1/testers` |
| Get tester status | `GET /v1/testers/{phone}?agentId={id}` |
| List all testers | `GET /v1/testers?agentId={id}` |
| Remove tester | `DELETE /v1/testers/{phone}?agentId={id}` |

### Base URL

`https://businesscommunications.googleapis.com`

## Related

- [rbm-api](../entities/rbm-api.md)
- [developer-console](../entities/developer-console.md)
- [agent-lifecycle](../concepts/agent-lifecycle.md)

## Sources

- [edit-agent-info](../sources/edit-agent-info.md)
- [test-devices](../sources/test-devices.md)
