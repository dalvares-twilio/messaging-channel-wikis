---
type: source
title: "OTTM Implementation Details"
source_file: "[[internal/clients/google (OTTM codebase)]]"
source_url: "https://code.hq.twilio.com/messaging/messaging-ott-management-api/tree/main/internal/clients/google"
ingested: 2026-04-05
tags: [implementation, twilio, ottm, client, api]
---

## Summary

Implementation details from Twilio's OTT Management API (OTTM) Google client. This production code reveals practical integration patterns, default values, immutability constraints, and retry semantics not fully documented in Google's official API docs.

## Key Points

### Dual API Endpoints

The client connects to two distinct Google APIs:
- **Business Communications API** (`bizCommsAPIEndpoint`): Brand/Agent management, verification, launch, carriers, testers
- **RCS Business Messaging API** (`rbmAPIEndpoint`): Message sending (not covered in this client)
- **Emulator endpoint**: For testing without hitting production

### Default Values (Twilio-Specific)

```go
DefaultAgentBillingCategory = "NON_CONVERSATIONAL"
DefaultAgentUseCase         = "MULTI_USE"
DefaultAgentHostingRegion   = "EUROPE"
```

### Image Size Limits

```go
MaxLogoImageFileSizeBytes   = 50 * 1024   // 50 KB
MaxBannerImageFileSizeBytes = 200 * 1024  // 200 KB
```

Supported image types: `image/jpeg`, `image/png` only.

### Twilio Partner Contact (Verification)

```go
PartnerName         = "Regina Tran"
PartnerEmailAddress = "messaging-channels-rbm@twilio.com"
```

### Immutability Constraints

From code comments on UpdateAgent:
- `logoUri`, `heroUri` — **not modifiable after agent verification**
- `billingConfig`, `agentUseCase`, `hostingRegion` — **not modifiable at all**

### Launch Request Structure

```go
type Questionnaire struct {
    Contacts                []Contact  // Required: name, title, email
    OptinDescription        string     // How users opt-in
    TriggerDescription      string     // What triggers messages
    InteractionsDescription string     // Interaction types
    OptoutDescription       string     // How users opt-out
    AgentAccessInstructions string     // Test access instructions
    VideoURLs               []string   // Demo videos (optional)
    ScreenshotURLs          []string   // Screenshots (optional)
}
```

### Error Handling & Retry Semantics

| Status Code | Retry? | Notes |
|-------------|--------|-------|
| 400 Bad Request | No | Invalid request |
| 401 Unauthorized | **Yes** | Token may need refresh |
| 403 Forbidden | No | Permission denied |
| 404 Not Found | No | Resource doesn't exist |
| 429 Too Many Requests | No | Rate limited |
| 500/503 | **Yes** | Transient server error |

Google retry recommendation: minimum 1s delay, default 1 retry.

### API URL Patterns

```go
brandURLPath              = "/v1/brands"
agentURLPath              = "/agents"
carrierURLPath            = "/v1/regions"
testerURLPath             = "/v1/testers"
createVerificationURLPath = "/v1/%s:requestVerification"
createLaunchURLPath       = "/v1/%s:requestLaunch"
```

### Helper Functions

```go
// Brand name format: "brands/{uuid}"
FormatBrandName(brandID) → "brands/" + brandID
ExtractBrandID("brands/abc-123") → "abc-123"

// Agent name format: "brands/{uuid}/agents/{agentId}"
FormatAgentName(brandName, agentID) → "{brandName}/agents/{agentId}"
ExtractAgentIDFromAgentName("brands/x/agents/y") → "y"
```

### Launch States

```go
LaunchStatePending   = "LAUNCH_STATE_PENDING"
LaunchStateLaunched  = "LAUNCH_STATE_LAUNCHED"
LaunchStateRejected  = "LAUNCH_STATE_REJECTED"
LaunchStateSuspended = "LAUNCH_STATE_SUSPENDED"
```

### Verification States

```go
VerificationStateUnverified = "UNVERIFIED"
VerificationStatePending    = "PENDING"
VerificationStateVerified   = "VERIFIED"
```

### Tester Management

- Phone number must be in E.164 format
- Phone must be RCS-capable or returns `400 INVALID_ARGUMENT`
- Query format: `/v1/testers/{phoneNumber}?agentId={agentId}`

## Implementation Notes

1. **PATCH requires updateMask**: Google API requires field masks for partial updates
2. **Launch is single instance**: An agent can only have one launch at a time; add carriers via GET then POST
3. **Verification before launch**: Must submit verification before launch (brand approval happens during launch)
4. **Agent deletion deprecated**: Direct deletion not supported — contact RBM Support

## Related Concepts

- [[wiki/concepts/agent-lifecycle]]
- [[wiki/concepts/carrier-launch]]
- [[wiki/concepts/billing-categories]]

## Related Entities

- [[wiki/entities/rbm-management-api]]
- [[wiki/entities/rbm-api]]
