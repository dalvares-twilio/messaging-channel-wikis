---
type: source
title: "REST Resource: AgentLaunch"
source_file: "[[raw/REST Resource AgentLaunch.md]]"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/AgentLaunch"
ingested: 2026-04-09
tags: [api, launch, rest-resource]
---

## Summary

The `AgentLaunch` resource defines details for launching an RBM agent across different regions. Contains the questionnaire and region-specific launch details required for carrier approval.

## Key Points

- `rcsBusinessMessaging` contains all launch configuration
- `questionnaire` captures opt-in/out descriptions, contacts, and access instructions
- `launchDetails` is a map of region-specific launch configurations
- `launchRegion` enum is **deprecated** — use `launchDetails` instead

## JSON Structure

```json
{
  "name": string,
  "rcsBusinessMessaging": {
    "questionnaire": {
      "contacts": [Contact],
      "optinDescription": string,
      "triggerDescription": string,
      "interactionsDescription": string,
      "optoutDescription": string,
      "agentAccessInstructions": string,
      "videoUris": [string],
      "screenshotUris": [string]
    },
    "launchDetails": {
      string: object(RcsBusinessMessagingRegionLaunch)
    }
  }
}
```

## Required Questionnaire Fields

- `contacts` — point of contact
- `triggerDescription` — what triggers messages
- `interactionsDescription` — user interaction patterns
- `optoutDescription` — how users opt out
- `agentAccessInstructions` — how to access/test agent

## Related Concepts

- [[wiki/concepts/agent-lifecycle]]
- [[wiki/concepts/carrier-launch]]

## Related Entities

- [[wiki/entities/rbm-api]]
