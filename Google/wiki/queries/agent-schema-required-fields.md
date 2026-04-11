---
type: query
title: "Agent Schema Required vs Conditional Fields"
query: "Which fields are required when creating a Google RCS agent, and which are conditionally required?"
answered: 2026-04-10
tags: [api, schema, agents, fields, validation]
---

## Answer

The Agent resource has required, conditionally required, and optional fields. Understanding these requirements prevents validation errors during agent creation.

### Always Required Fields

| Field | Type | Constraints |
|-------|------|-------------|
| `displayName` | string | Max 40 characters |
| `description` | string | Max 100 characters |
| `logoUri` | string | Max 50KB image, jpeg/png |
| `heroUri` | string | Max 200KB image, jpeg/png |
| `privacy` | WebEntry | Privacy policy URL |
| `termsConditions` | WebEntry | Terms of service URL |
| `color` | string | Hex format (#RRGGBB) |
| `billingConfig` | BillingConfig | Billing category |
| `hostingRegion` | enum | NORTH_AMERICA, EUROPE, ASIA_PACIFIC |

### Conditionally Required Fields

**Contact Information** - At least ONE of these must be provided:

| Field | Type | Notes |
|-------|------|-------|
| `phoneNumbers[]` | PhoneEntry[] | Required if no email/website |
| `emails[]` | EmailEntry[] | Required if no phone/website |
| `websites[]` | WebEntry[] | Max 3, required if no phone/email |

**India Launch** - Required only for India carrier launch:

| Field | Type | When Required |
|-------|------|---------------|
| `indiaPrincipalEntityId` | string | When launching on Indian carriers |

### Optional Fields

| Field | Type | Notes |
|-------|------|-------|
| `agentUseCase` | enum | OTP, TRANSACTIONAL, PROMOTIONAL, MULTI_USE (defaults to PROMOTIONAL) |

### Field Value Enums

**BillingCategory**:
- `CONVERSATIONAL` - Multi-turn conversations
- `NON_CONVERSATIONAL` - One-way A2P messages
- `BASIC_MESSAGE` - SMS-like billing
- `SINGLE_MESSAGE` - Never billed as conversational

**AgentUseCase**:
- `OTP` - One-time passwords only
- `TRANSACTIONAL` - Essential, time-sensitive messages
- `PROMOTIONAL` - Marketing, sales (default)
- `MULTI_USE` - Combined use cases

**HostingRegion**:
- `NORTH_AMERICA`
- `EUROPE`
- `ASIA_PACIFIC`

### Immutability After Creation

| Field | When Locked |
|-------|-------------|
| `hostingRegion` | At creation (cannot change) |
| `billingConfig` | At creation (contact support to change) |
| `agentUseCase` | At creation (contact support to change) |
| `logoUri`, `heroUri` | After verification submission |
| `displayName` | After verification submission |

### Validation Example

Minimum valid agent creation payload:
```json
{
  "displayName": "My Brand Agent",
  "rcsBusinessMessagingAgent": {
    "description": "Customer support agent",
    "logoUri": "https://example.com/logo.png",
    "heroUri": "https://example.com/hero.png",
    "phoneNumbers": [{"phoneNumber": {"number": "+14155551234"}}],
    "privacy": {"uri": "https://example.com/privacy"},
    "termsConditions": {"uri": "https://example.com/terms"},
    "color": "#0066CC",
    "billingConfig": {"billingCategory": "NON_CONVERSATIONAL"},
    "hostingRegion": "NORTH_AMERICA"
  }
}
```

## Sources Consulted

- [api-resource-agents](../sources/api-resource-agents.md)
- [create-agent](../sources/create-agent.md)
- [ottm-implementation](../sources/ottm-implementation.md)

## New Insights

- OTTM defaults: NON_CONVERSATIONAL, MULTI_USE, EUROPE
- Image validation happens at upload, not just at API call
- At least one contact method (phone/email/website) is mandatory but which one is flexible
