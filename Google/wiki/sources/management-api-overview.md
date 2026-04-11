---
type: source
title: "RBM Management API Overview"
source_file: "[The RBM Management API    RCS for Business.md](../../raw/The RBM Management API    RCS for Business.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/overview"
ingested: 2026-04-05
tags: [api, management, aggregators]
---

## Summary

The RBM Management API replicates Developer Console capabilities programmatically. Useful for aggregators and partners with their own campaign platforms wanting to integrate RBM as a channel.

## Key Points

### Capabilities
- Create and edit RBM agent definitions
- Upload assets
- Submit agents for verification and launch
- Retrieve verification and launch information

### Authentication
- Requires Service Account created in Developer Console
- OAuth scope: `businesscommunications`
- Use Google OAuth2 to obtain access token
- Tool: `oauth2l` for generating bearer tokens

### Sample Code
- cURL, Python, Java, Node.js samples available
- Client libraries: C#, Java, Node.js

### Workflow
1. Create a brand
2. Create an agent in the brand
3. Add testers to agent
4. Submit agent for verification
5. Submit agent for launch (one or more carriers)
6. Check launch status

## Related Concepts

- [agent-lifecycle](../concepts/agent-lifecycle.md)

## Related Entities

- [rbm-management-api](../entities/rbm-management-api.md)
- [developer-console](../entities/developer-console.md)
