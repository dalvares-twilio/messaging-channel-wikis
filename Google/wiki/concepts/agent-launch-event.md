---
type: concept
title: "AgentLaunchEvent"
aliases: [agent_launch_event, launch event, platform event]
sources: 2
---

## Overview

AgentLaunchEvent is a platform event sent by Google RBM when an agent's launch state changes. It arrives via the partner webhook (NOT agent-level webhook) and must be detected by checking `message.attributes.type == "agent_launch_event"`.

**Critical for Twilio:** This event is how OTTM receives Google's response to launch requests. Without handling it, sender status never updates after `IN_GOOGLE_REVIEW`.

## Payload Structure

### Pub/Sub Message Wrapper

```json
{
  "message": {
    "attributes": {
      "business_id": "rbm-chatbot-id@rbm.goog",
      "event_type": "REJECTED",
      "product": "RBM",
      "project_number": "3338881441851",
      "type": "agent_launch_event"
    },
    "data": "BASE64-encoded-JSON",
    "messageId": "1234567890",
    "publishTime": "2025-03-05T18:50:19.386436Z"
  },
  "subscription": "projects/project-id/subscriptions/subscription-name"
}
```

### Decoded Data Field

The `data` field is Base64-encoded JSON containing the launch details:

```json
{
  "eventId": "rbm-chatbot-id/0a7ed168-676e-4a56-b422-b23434",
  "agentId": "rbm-chatbot-id@rbm.goog",
  "botDisplayName": "RBM Welcome Bot 7",
  "brandId": "bd38fbff-392a-437b-a6f2-7f2e43745b56",
  "regionId": "/v1/regions/fi-rcs",
  "oldLaunchState": "PENDING",
  "newLaunchState": "REJECTED",
  "comment": "Carrier has rejected the launch: policy violation",
  "sendTime": "2025-03-05T18:50:19.386436Z"
}
```

## Key Fields

| Field | Description | Usage |
|-------|-------------|-------|
| `agentId` | Agent identifier (format: `name@rbm.goog`) | Lookup sender via `FormatRemoteID("rcs", agentId)` |
| `oldLaunchState` | Previous state | Logging, state machine validation |
| `newLaunchState` | New state | Map to KYC status |
| `regionId` | Carrier region (e.g., `/v1/regions/fi-rcs`) | Identify which carrier changed state |
| `comment` | Carrier-provided reason | Rejection/suspension reason for support |
| `eventId` | Unique event identifier | Idempotency key |

## Launch States

| State | Description |
|-------|-------------|
| `UNSPECIFIED` | Initial/unknown state |
| `PENDING` | Launch requested, awaiting carrier review |
| `LAUNCHED` | Approved and live on carrier |
| `REJECTED` | Carrier denied launch |
| `SUSPENDED` | Temporarily disabled (compliance issue) |
| `UNLAUNCHED` | Removed from carrier |

## State Transitions

### Carrier-Initiated
- `PENDING` -> `LAUNCHED` (approved)
- `PENDING` -> `REJECTED` (denied)
- `LAUNCHED` -> `SUSPENDED` (compliance issue)
- `SUSPENDED` -> `LAUNCHED` (reinstated)
- `SUSPENDED` -> `UNLAUNCHED` (permanently removed)

### Partner-Initiated
- `UNSPECIFIED`/`UNLAUNCHED`/`REJECTED` -> `PENDING` (launch requested)

## Detection in Webhook Handler

```go
func isPlatformEvent(payload types.InboundMessageEvent) bool {
    if payload.InboundMessage.RBMPayloadData.Attributes != nil {
        attrType := payload.InboundMessage.RBMPayloadData.Attributes.Type
        return attrType == "agent_launch_event"
    }
    return false
}
```

## KYC Status Mapping

| Launch State | KYC Status |
|--------------|------------|
| `LAUNCHED` | `RCSRegistrationApprovedStatus` |
| `REJECTED` | `RCSRegistrationRejectedStatus` |
| `SUSPENDED` | `RCSRegistrationSuspendedStatus` |
| `UNLAUNCHED` | `RCSRegistrationUnlaunchedStatus` |

## Related

- [[wiki/concepts/agent-lifecycle]]
- [[wiki/concepts/carrier-launch]]
- [[wiki/sources/receive-events]]

## Sources

- [[wiki/sources/receive-events]]
- [[raw/Receive events    RCS for Business.md]]
