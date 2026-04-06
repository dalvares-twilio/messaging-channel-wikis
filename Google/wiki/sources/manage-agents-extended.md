---
type: source
title: "Manage Agents (Extended API Guide)"
source_file: "[[raw/Manage agents    RCS for Business 1.md]]"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/agents"
ingested: 2026-04-05
tags: [api, agents, management, launch, verification]
---

## Summary

Comprehensive guide for managing RBM agents programmatically — creation, configuration, verification, and launch via the Management API with code examples.

## Key Points

### Agent Creation

```bash
curl -X POST "https://businesscommunications.googleapis.com/v1/$BRAND_ID/agents" \
  -H "`oauth2l header --json credentials.json businesscommunications`" \
  -d '{
    "displayName": "My agent",
    "rcsBusinessMessagingAgent": {
      "description": "Agent description",
      "logoUri": "https://...",
      "heroUri": "https://...",
      "phoneNumbers": [{"phoneNumber": {"number": "+1..."}, "label": "Support"}],
      "privacy": {"uri": "https://.../privacy", "label": "Privacy"},
      "termsConditions": {"uri": "https://.../terms", "label": "Terms"},
      "color": "#0B78D0",
      "billingConfig": {"billingCategory": "CONVERSATIONAL"},
      "agentUseCase": "TRANSACTIONAL",
      "hostingRegion": "EUROPE"
    }
  }'
```

### Submit Verification

```javascript
let agentVerificationContact = {
  partnerName: 'Partner Name',
  partnerEmailAddress: 'partner@example.com',
  brandContactName: 'Brand Contact',
  brandContactEmailAddress: 'brand@example.com',
  brandWebsiteUrl: 'https://brand.com/'
};

businessCommunicationsApiHelper.verifyAgent(agent.name, agentVerificationContact);
```

**Response includes**: `verificationState` (UNVERIFIED, PENDING, VERIFIED)

### Submit Launch Request

```javascript
let agentLaunch = {
  rcsBusinessMessaging: {
    launchDetails: {
      '/v1/regions/carrier-id': { launchState: 'LAUNCH_STATE_PENDING' }
    }
  }
};

businessCommunicationsApiHelper.launchAgent(agent.name, agentLaunch);
```

### Check Launch Status

```javascript
businessCommunicationsApiHelper.getAgentLaunch(agent.name);
// Returns launchDetails per carrier with launchState
```

### Launch States

| State | Meaning |
|-------|---------|
| `LAUNCH_STATE_UNLAUNCHED` | Not launched |
| `LAUNCH_STATE_PENDING` | Under review |
| `LAUNCH_STATE_LAUNCHED` | Live on carrier |
| `LAUNCH_STATE_REJECTED` | Rejected (see comment) |
| `LAUNCH_STATE_SUSPENDED` | Suspended |

### Agent Deletion

**Not supported directly** — contact RBM Support. The `delete` method is deprecated.

## Workflow Summary

1. Create brand (`brands.create`)
2. Create agent (`brands.agents.create`)
3. Add testers (`testers.create`)
4. Submit verification (`brands.agents.requestVerification`)
5. Submit launch (`brands.agents.requestLaunch`)
6. Monitor status (`brands.agents.getLaunch`)

## Related Concepts

- [[wiki/concepts/carrier-launch]]
- [[wiki/concepts/agent-lifecycle]]

## Related Entities

- [[wiki/entities/rbm-management-api]]
