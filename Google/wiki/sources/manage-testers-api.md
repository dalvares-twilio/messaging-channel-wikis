---
type: source
title: "Manage Testers (API)"
source_file: "[[raw/Manage testers    RCS for Business.md]]"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/testers"
ingested: 2026-04-05
tags: [api, management, testing]
---

## Summary

Programmatic management of testers via the RBM Management API. Testers allow unlaunched agents to communicate with designated devices for testing.

## Key Points

### Operations
- **Add tester**: `POST /v1/testers` with `agentId` and `phoneNumber`
- **List testers**: `GET /v1/testers?agentId={id}`
- **Get tester status**: `GET /v1/{testerId}?agentId={id}`
- **Delete tester**: `DELETE /v1/{testerId}?agentId={id}`

### Notes
- Brands must be created before agents
- Agents must be created before adding testers
- Sample code available in Python and cURL

## Related Concepts

- [[wiki/concepts/agent-lifecycle]]
- [[wiki/concepts/rcs-enablement]]

## Related Entities

- [[wiki/entities/rbm-management-api]]
