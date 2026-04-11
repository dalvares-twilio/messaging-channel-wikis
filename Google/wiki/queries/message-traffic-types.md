---
type: query
title: "Message Traffic Types and Usage"
query: "What are the message traffic types in Google RCS and when must I set them?"
answered: 2026-04-10
tags: [messaging, traffic-types, compliance, multi-use]
---

## Answer

Message traffic types classify the purpose of each message. For multi-use agents, setting the correct traffic type is mandatory for compliance and analytics.

### Traffic Types

| Type | Purpose | Examples |
|------|---------|----------|
| `AUTHENTICATION` | OTP and verification | Login codes, 2FA, password reset |
| `TRANSACTION` | Business transactions | Order confirmations, receipts, booking details |
| `PROMOTION` | Marketing content | Offers, discounts, announcements |
| `SERVICEREQUEST` | User-requested services | Support tickets, status updates user asked for |
| `ACKNOWLEDGEMENT` | Confirmations | Unsubscribe confirmation with preferences link |

### When Traffic Type is Required

- **Multi-use agents**: MUST set traffic type explicitly on every message
- **Single-use agents**: Type is implicit based on agent configuration

### Why Traffic Types Matter

1. **Compliance**: Post-unsubscribe, only essential messages (`AUTHENTICATION`, `SERVICEREQUEST`) are permitted
2. **Analytics**: Google tracks delivery/read rates by traffic type
3. **Reputation**: Sending `PROMOTION` to unsubscribed users damages reputation score
4. **Policy enforcement**: Google monitors message patterns after unsubscribe

### Post-Unsubscribe Rules by Traffic Type

| Traffic Type | Permitted After Unsubscribe? |
|--------------|------------------------------|
| `AUTHENTICATION` | Yes |
| `TRANSACTION` | Conditional (if user-initiated) |
| `PROMOTION` | **No** |
| `SERVICEREQUEST` | Yes (if user explicitly requested) |
| `ACKNOWLEDGEMENT` | Yes (for unsubscribe confirmation only) |

### Multi-Use Agent Considerations

Multi-use agents handle multiple traffic types (e.g., OTP + promotional). This requires:

1. Tracking subscription status per user
2. Setting correct traffic type on each message
3. Filtering promotional messages for unsubscribed users
4. Maintaining audit trail for compliance

### Use Cases and Traffic Types

| Use Case (Agent Config) | Default Traffic Type |
|-------------------------|---------------------|
| OTP | `AUTHENTICATION` |
| Transactional | `TRANSACTION` |
| Promotional | `PROMOTION` |
| Multi-use | Must be set per message |

### Implementation Pattern

```python
def send_message(phone, content, traffic_type):
    # For multi-use agents, always specify traffic type
    message = {
        "contentMessage": {"text": content},
        "trafficType": traffic_type  # Required for multi-use
    }
    
    # Check subscription before promotional
    if traffic_type == "PROMOTION":
        if is_unsubscribed(phone):
            raise ComplianceError("Cannot send promotional to unsubscribed user")
    
    return rbm_api.send(phone, message)
```

### Analytics Impact

Traffic type affects how Google categorizes your metrics:
- Delivery rates by type
- Read rates by type
- Reputation scoring
- Traffic limit allocation

## Sources Consulted

- [send-messages](../sources/send-messages.md)
- [use-cases](../concepts/use-cases.md)
- [subscribe-unsubscribe](../concepts/subscribe-unsubscribe.md)
- [analytics-reputation](../concepts/analytics-reputation.md)

## New Insights

- No API to query current subscription status for a user
- `SERVICEREQUEST` vs `TRANSACTION` distinction not clearly defined
- Misclassification consequences (penalties, suspension) not documented
