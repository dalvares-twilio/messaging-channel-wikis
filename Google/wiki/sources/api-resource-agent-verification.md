---
type: source
title: "REST Resource: AgentVerification"
source_file: "[REST Resource AgentVerification.md](../../raw/REST Resource AgentVerification.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/AgentVerification"
ingested: 2026-04-09
tags: [api, verification, rest-resource]
---

## Summary

The `AgentVerification` resource contains verification information for an RBM agent, including its current verification state and contact details.

## Key Points

- Contains `verificationState` enum tracking verification progress
- Requires `AgentVerificationContact` with partner and brand details
- States: UNSPECIFIED → UNVERIFIED → PENDING → VERIFIED
- GMB suspension state applies only to location-based agents

## JSON Structure

```json
{
  "name": string,
  "verificationState": enum (VerificationState),
  "agentVerificationContact": {
    object (AgentVerificationContact)
  }
}
```

## Related Concepts

- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [carrier-launch](../concepts/carrier-launch.md)

## Related Entities

- [rbm-api](../entities/rbm-api.md)
