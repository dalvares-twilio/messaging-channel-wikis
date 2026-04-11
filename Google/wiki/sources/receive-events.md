---
type: source
title: "Receive Events"
source_file: "[Receive events    RCS for Business.md](../../raw/Receive events    RCS for Business.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/receive-events"
ingested: 2026-04-05
tags: [events, webhooks, subscriptions]
---

## Summary

Agents receive webhook events from the RBM platform including user events (interactions from device) and platform events (launch state changes, message expirations).

## Key Points

### User Events
- `DELIVERED`: message delivered to device
- `READ`: message opened/acknowledged
- `IS_TYPING`: user typing a response
- `UNSUBSCRIBE`: user unsubscribed from non-essential messages
- `SUBSCRIBE`: user resubscribed

### Unsubscribe Behavior
- User selects **Unsubscribe** in chat menu
- Google Messages sends country-specific keyword (US: "STOP", ES/MX: "BAJA", FR: "STOP", BR: "parar")
- Platform sends `UNSUBSCRIBE` event to webhook
- **Business rules**: must stop non-essential messages; essential messages (OTPs, user-requested notifications) still permitted
- Unsubscribe reasons: Spam, Never signed up, Too many messages, No longer interested, Other

### Resubscribe Behavior
- User selects **Subscribe** in chat menu
- Keywords: US: "START", ES/MX: "ALTA", FR: "Démarrer", BR: "começar"
- Resubscription applies to all message types including promotions

### Platform Events
- `AgentLaunchEvent`: launch state changes — see [agent-launch-event](../concepts/agent-launch-event.md) for full payload structure
  - Detection: `message.attributes.type` = `agent_launch_event`
  - States: PENDING, LAUNCHED, REJECTED, SUSPENDED, UNLAUNCHED
- `TTL_EXPIRATION_REVOKED`: message expired, successfully revoked
- `TTL_EXPIRATION_REVOKE_FAILED`: message expired, revocation failed

### Launch State Transitions
| Carrier-initiated | Partner-initiated |
|---|---|
| PENDING → LAUNCHED/REJECTED | UNSPECIFIED/UNLAUNCHED/REJECTED → PENDING |
| LAUNCHED → SUSPENDED | |
| SUSPENDED → LAUNCHED/UNLAUNCHED | |

## Related Concepts

- [subscribe-unsubscribe](../concepts/subscribe-unsubscribe.md)
- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [agent-launch-event](../concepts/agent-launch-event.md)

## Related Entities

- [rbm-api](../entities/rbm-api.md)
