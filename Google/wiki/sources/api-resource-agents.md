---
type: source
title: "API Resource: brands.agents"
source_file: "[REST Resource brands.agents    RCS for Business.md](../../raw/REST Resource brands.agents    RCS for Business.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents"
ingested: 2026-04-05
tags: [api, schema, agents]
---

## Summary

The `brands.agents` resource defines the schema for RBM agents. An Agent is a conversational entity representing a brand with all its configuration — branding, contact info, billing, use case, and launch status.

## Agent Schema

```json
{
  "name": "string",           // Unique ID (read-only)
  "displayName": "string",    // Max 40 chars, not modifiable after verification
  "brandName": "string",      // Output only
  "isArchived": "boolean",
  "rcsBusinessMessagingAgent": { ... }
}
```

## RcsBusinessMessagingAgent Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `description` | string | Yes | Max 100 chars |
| `logoUri` | string | Yes | Max 50KB, not modifiable after verification |
| `heroUri` | string | Yes | Max 200KB, not modifiable after verification |
| `phoneNumbers[]` | PhoneEntry | Conditional | Required if no email/website |
| `emails[]` | EmailEntry | Conditional | Required if no phone/website |
| `websites[]` | WebEntry | Conditional | Max 3, required if no phone/email |
| `privacy` | WebEntry | Yes | Privacy policy URL |
| `termsConditions` | WebEntry | Yes | Terms URL |
| `color` | string | Yes | Hex format (#FFFFFF) |
| `billingConfig` | BillingConfig | Yes | Billing category |
| `agentUseCase` | enum | Optional | OTP, TRANSACTIONAL, PROMOTIONAL, MULTI_USE |
| `hostingRegion` | enum | Yes | NORTH_AMERICA, EUROPE, ASIA_PACIFIC |
| `indiaPrincipalEntityId` | string | Conditional | Required for India launch |

## Enums

### BillingCategory
- `CONVERSATIONAL` — multi-turn conversations
- `NON_CONVERSATIONAL` — one-way A2P messages
- `BASIC_MESSAGE` — SMS-like billing
- `SINGLE_MESSAGE` — never billed as conversational

### AgentUseCase
- `OTP` — one-time passwords only
- `TRANSACTIONAL` — essential, time-sensitive messages
- `PROMOTIONAL` — marketing, sales (default)
- `MULTI_USE` — combined use cases

### HostingRegion
- `NORTH_AMERICA`
- `EUROPE`
- `ASIA_PACIFIC`

### LaunchState
- `LAUNCH_STATE_UNLAUNCHED`
- `LAUNCH_STATE_PENDING`
- `LAUNCH_STATE_LAUNCHED`
- `LAUNCH_STATE_REJECTED`
- `LAUNCH_STATE_SUSPENDED`

## Methods

| Method | Description |
|--------|-------------|
| `create` | Create new agent |
| `get` | Get agent info |
| `list` | List agents for brand |
| `patch` | Update agent |
| `requestLaunch` | Begin launch process |
| `requestVerification` | Submit verification |
| `getLaunch` | Get launch status |
| `getVerification` | Get verification status |
| `updateLaunch` | Update launch info |
| `updateVerification` | Update verification |
| `delete` | **Deprecated** |

## Related Concepts

- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [use-cases](../concepts/use-cases.md)
- [billing-categories](../concepts/billing-categories.md)

## Related Entities

- [rbm-management-api](../entities/rbm-management-api.md)
