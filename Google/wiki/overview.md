# Google RCS for Business — Overview

## What is RBM?

**RCS Business Messaging (RBM)** is Google's platform for businesses to communicate with users via Rich Communication Services. Messages appear in RCS-enabled apps (Google Messages) with branding — logo, colors, contact info.

## Architecture

```
Business → RBM API → RCS Infrastructure → Google Messages → User
              ↑                               ↓
         Webhooks ←──────────────────────────←
```

## Agent Lifecycle

```
Create → Configure → Test → Verify → Launch → Monitor
         ↓           ↓       ↓        ↓        ↓
      branding    testers  brand   carriers  analytics
      webhooks            POC
```

**Key constraints**: Region and use case are immutable after creation/launch. No agent deletion.

## Launch Process

1. **Brand Verification**: authorized rep confirms agent info
2. **Launch Approval**: Google or carrier reviews assets

| Type | Timeline | Requirements |
|------|----------|--------------|
| Google-managed | 1-3 days | Brand approval, working assets |
| Carrier-managed | Varies | Direct contract with carrier |

## Messaging

### Sending
- Text, rich cards, media (100 MiB max), suggested replies/actions
- Message TTL for auto-revocation (max 15 days)
- Traffic types: AUTHENTICATION, TRANSACTION, PROMOTION, SERVICEREQUEST, ACKNOWLEDGEMENT

### Receiving
- User messages: text, suggestions, locations, files
- Events: DELIVERED, READ, IS_TYPING, UNSUBSCRIBE, SUBSCRIBE
- Platform events: launch state changes, TTL expiration

### Offline Handling
- Messages queued up to 30 days
- Capability cache valid 31 days

## Integration Patterns

### Webhooks
- Partner-level (all agents) or agent-level (specific agents)
- Verify with HMAC-SHA512 (`X-Goog-Signature`)
- **Process async** — return 200 OK immediately

### Capability Checks
- Single device: returns supported features
- Bulk: 500-10K numbers, estimates reach

### Deep Links
- `sms:+1555...?service_id=bot@example.com&body=hello`
- Fallback to phone if RCS unavailable

## Analytics & Reputation

| Metric | Values | Impact |
|--------|--------|--------|
| Reputation | High/Medium/Low | Based on spam/feedback |
| Traffic Limit | 2/4/8 | Initial messages per user/28 days |
| Spam Trend | Up/Neutral/Down | 7 or 28 day trend |

## Subscribe/Unsubscribe

- User sends STOP → `UNSUBSCRIBE` event
- Must stop non-essential messages
- Essential (OTP, user-requested) still permitted
- User sends START → `SUBSCRIBE` event → all permitted

## Key APIs

| API | Purpose |
|-----|---------|
| RBM API | Send/receive messages, events, capabilities |
| Management API | Create agents, brands, manage testers, launch |
| Analytics API | Retrieve agent performance metrics |
