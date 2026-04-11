---
type: query
title: "India Launch Principal Entity ID Requirements"
query: "What is the India Principal Entity ID and when is it required?"
answered: 2026-04-10
tags: [india, launch, compliance, regional]
---

## Answer

The `indiaPrincipalEntityId` is a regulatory compliance field required specifically for launching RCS agents on Indian carriers.

### What Is It?

The Principal Entity ID is a unique identifier assigned to businesses registered with the Telecom Regulatory Authority of India (TRAI) for A2P messaging. It's part of India's Distributed Ledger Technology (DLT) regulatory framework for commercial messaging.

### When Is It Required?

| Scenario | Required? |
|----------|-----------|
| Launching on Indian carriers (Jio, Airtel, Vi, BSNL) | **Yes** |
| Launching on non-Indian carriers | No |
| Testing with Indian test devices (pre-launch) | No |
| Launching globally but excluding India | No |

### Agent Schema Field

```json
{
  "rcsBusinessMessagingAgent": {
    "indiaPrincipalEntityId": "1234567890123456"
  }
}
```

### How to Obtain

1. **Register with TRAI**: Business must register on India's DLT platform
2. **Get PE ID**: Upon approval, TRAI assigns a Principal Entity ID
3. **Add to Agent**: Include in agent configuration before requesting India launch

### Validation

- Field is validated when requesting launch on Indian carriers
- If missing or invalid, launch request for India will fail
- Does not affect launches to other regions

### Important Notes

1. **Single PE ID Per Business**: One Principal Entity ID covers all your agents for India

2. **Cannot Be Changed Easily**: Like other compliance fields, verify accuracy before submission

3. **India-Specific Only**: Other countries don't require this field - it's purely for Indian regulatory compliance

4. **Test First**: You can test agents with Indian phone numbers using test devices without the PE ID. It's only required for production launch.

### Timeline Consideration

Obtaining a TRAI Principal Entity ID can take several weeks. If India launch is planned, start the DLT registration process early while developing the agent.

## Sources Consulted

- [api-resource-agents](../sources/api-resource-agents.md)
- [create-agent](../sources/create-agent.md)

## New Insights

- PE ID registration timeline not documented in Google docs
- Unclear if PE ID can be updated after initial submission
- No validation endpoint to verify PE ID before launch submission
