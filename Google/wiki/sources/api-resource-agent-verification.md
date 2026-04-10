---
type: source
title: "REST Resource: AgentVerification"
source_file: "[[raw/REST Resource AgentVerification.md]]"
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

- [[wiki/concepts/agent-lifecycle]]
- [[wiki/concepts/carrier-launch]]

## Related Entities

- [[wiki/entities/rbm-api]]
