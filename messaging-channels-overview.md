---
marp: true
theme: default
title: "Messaging Channels Knowledge Base Overview"
paginate: true
backgroundColor: #1a1a2e
color: #eaeaea
style: |
  section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  h1, h2 {
    color: #00d4ff;
  }
  h3 {
    color: #ff6b6b;
  }
  table {
    font-size: 0.8em;
  }
  code {
    background: #2d2d44;
    color: #00ff88;
  }
  a {
    color: #ffd93d;
  }
---

# Messaging Channels
## Knowledge Base Overview

**Google RCS** | **Meta WhatsApp**

---

# What This Wiki Contains

| Channel | Sources | Concepts | Entities |
|---------|---------|----------|----------|
| **Google RCS** | 25+ | 14 | 5 |
| **Meta WhatsApp** | 65 | 15 | 20 |

Coverage: APIs, webhooks, account management, onboarding, messaging, analytics

---

# Channel Comparison

| Aspect | Google RCS | Meta WhatsApp |
|--------|-----------|---------------|
| **Protocol** | RCS (Rich Communication Services) | Proprietary (Cloud API) |
| **App** | Google Messages | WhatsApp |
| **Business Entity** | Agent | WABA + Phone Number |
| **Approval** | Google/Carrier launch | Meta verification |
| **Reach** | Android (RCS-enabled) | Global (2B+ users) |

---

# Google RCS for Business
## Architecture

```
Business → RBM API → RCS Infrastructure → Google Messages → User
              ↑                               ↓
         Webhooks ←──────────────────────────←
```

---

# Google RCS: Agent Lifecycle

```
Create → Configure → Test → Verify → Launch → Monitor
         ↓           ↓       ↓        ↓        ↓
      branding    testers  brand   carriers  analytics
      webhooks            POC
```

### Status Progression
1. **Incomplete** — Initial creation
2. **Ready for launch** — All details provided
3. **Launch pending** — Awaiting approval
4. **Launched** — Live on carriers

---

# Google RCS: Immutability Rules

| Field | When Locked |
|-------|-------------|
| Hosting region | At creation |
| Use case | After launch submission |
| Billing category | After launch |
| Agent info | After verification |

**Key constraint**: Agents cannot be deleted, only archived

---

# Google RCS: Messaging Capabilities

### Sending
- Text, rich cards, carousels
- Media (up to 100 MiB)
- Suggested replies/actions
- Message TTL (max 15 days)

### Traffic Types
`AUTHENTICATION` | `TRANSACTION` | `PROMOTION` | `SERVICEREQUEST` | `ACKNOWLEDGEMENT`

---

# Google RCS: Webhooks & Events

### Receiving
- User messages: text, suggestions, locations, files
- Events: `DELIVERED`, `READ`, `IS_TYPING`
- Opt-out: `UNSUBSCRIBE`, `SUBSCRIBE`

### Security
- HMAC-SHA512 verification
- `X-Goog-Signature` header
- **Best practice**: Process async, return 200 immediately

---

# Google RCS: Analytics & Reputation

| Metric | Values | Impact |
|--------|--------|--------|
| **Reputation** | High/Medium/Low | Based on spam/feedback |
| **Traffic Limit** | 2/4/8 | Initial msgs per user/28 days |
| **Spam Trend** | Up/Neutral/Down | 7 or 28 day trend |

---

# Meta WhatsApp Business Platform
## Platform Hierarchy

```
Meta Business Suite (Portfolio)
    └── WhatsApp Business Account (WABA)
            ├── Business Phone Number(s)
            │       ├── Display Name
            │       ├── Business Profile
            │       └── OBA Status (optional)
            └── Message Templates (max 250)
```

---

# Meta WhatsApp: Webhooks

### Delivery Characteristics

| Property | Value |
|----------|-------|
| Max payload | 3 MB |
| Retry duration | Up to 7 days |
| Batching | Up to 1000 updates/POST |
| Protocol | HTTPS (TLS required) |
| Security | mTLS supported |

---

# Meta WhatsApp: Webhook Fields

| Field | Events |
|-------|--------|
| `messages` | Incoming messages, status updates |
| `account_alerts` | Limits, profile, OBA status |
| `message_template_*` | Template status, quality |
| `phone_number_*` | Throughput, display name |
| `security` | 2FA PIN changes |

---

# Meta WhatsApp: Key Concepts

### Business Verification
- Meta business portfolio verification
- Required for production messaging

### Embedded Signup
- Onboard businesses via solution partners
- Migrate from WhatsApp Business app
- Sync chat history (up to 180 days)

---

# Meta WhatsApp: User Identification (2026)

| Feature | Description |
|---------|-------------|
| **BSUID** | Business-scoped user ID |
| **Usernames** | Messaging without phone numbers |
| **Contact Book** | Meta-hosted user storage |

### Timeline
- April 2026: BSUIDs in webhooks
- May 2026: APIs support BSUIDs
- Late 2026: Usernames launch

---

# Meta WhatsApp: Solution Partners

### Partner Types
- **Solution Partners** — Integration providers
- **Tech Providers** — Platform/infrastructure
- **Multi-Partner Solutions** — Joint arrangements

### Capabilities
- Pre-verified phone numbers
- Credit line management
- Embedded signup flows

---

# Integration Patterns

## Common Across Both Channels

| Pattern | Google RCS | Meta WhatsApp |
|---------|-----------|---------------|
| **Webhooks** | Partner or agent level | App or WABA level |
| **Auth** | Service account | System user tokens |
| **Signature** | HMAC-SHA512 | HMAC-SHA256 |
| **Async** | Required | Required |

---

# Webhook Security Comparison

### Google RCS
```
Header: X-Goog-Signature
Algorithm: HMAC-SHA512
Key: Client token
```

### Meta WhatsApp
```
Header: X-Hub-Signature-256
Algorithm: HMAC-SHA256
Key: App secret
```

---

# Key Differences Summary

| Aspect | Google RCS | Meta WhatsApp |
|--------|-----------|---------------|
| **Deletion** | Not allowed | WABA can be deleted |
| **Templates** | Not required | Required for outbound |
| **Limits** | Reputation-based | Tier-based (1K→unlimited) |
| **Regions** | NA, EU, APAC | Global |
| **Media limit** | 100 MiB | 16 MB (varies) |

---

# Wiki Resources

### Google RCS
- 25+ source documents
- 14 core concepts
- API reference schemas
- Implementation guides

### Meta WhatsApp
- 65 source documents
- 15 core concepts
- 20 entity definitions
- Embedded signup flows

---

# Getting Started

### Google RCS
1. Create agent in Developer Console
2. Configure branding & webhooks
3. Add testers
4. Request brand verification
5. Submit for launch

### Meta WhatsApp
1. Create Meta Business Portfolio
2. Create WABA
3. Register phone number
4. Configure webhooks
5. Complete business verification

---

# Questions?

**Repository**: [messaging-channel-wikis](https://github.com/dalvares-twilio/messaging-channel-wikis)

**Wiki Indexes**:
- Google RCS: `Google/wiki/index.md`
- Meta WhatsApp: `Meta/wiki/index.md`
