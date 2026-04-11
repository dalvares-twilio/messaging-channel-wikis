---
type: source
title: "REST Resource: VerificationState"
source_file: "[REST Resource VerificationState.md](../../raw/REST Resource VerificationState.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/VerificationState"
ingested: 2026-04-09
tags: [api, verification, rest-resource, enum]
---

## Summary

The `VerificationState` enum represents the state of brand/agent verification in the RBM platform.

## Enum Values

| Value | Description |
|-------|-------------|
| `VERIFICATION_STATE_UNSPECIFIED` | Unspecified state |
| `VERIFICATION_STATE_UNVERIFIED` | Not yet verified |
| `VERIFICATION_STATE_PENDING` | Verification in progress (Google-managed launches) |
| `VERIFICATION_STATE_VERIFIED` | Verification complete |
| `VERIFICATION_STATE_SUSPENDED_IN_GMB` | GMB listing no longer verified (locations only) |

## Key Points

- Google-managed launches use this verification state
- Carrier-managed launches have their own verification processes
- GMB suspension only applies to location-based agents
- Reverifying in GMB automatically reverifies in Business Communications

## Related Concepts

- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [carrier-launch](../concepts/carrier-launch.md)

## Related Entities

- [rbm-api](../entities/rbm-api.md)
