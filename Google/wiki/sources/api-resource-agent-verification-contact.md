---
type: source
title: "REST Resource: AgentVerificationContact"
source_file: "[REST Resource AgentVerificationContact.md](../../raw/REST Resource AgentVerificationContact.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/AgentVerificationContact"
ingested: 2026-04-09
tags: [api, verification, rest-resource]
---

## Summary

The `AgentVerificationContact` resource captures partner and brand representative contact details required for agent verification.

## Key Points

- All fields are required
- Partner info: name and email of the requesting partner
- Brand info: contact name, email, and public website URL
- Website URL used to verify domain ownership

## JSON Structure

```json
{
  "partnerName": string,
  "partnerEmailAddress": string,
  "brandContactName": string,
  "brandContactEmailAddress": string,
  "brandWebsiteUrl": string
}
```

## Purpose

- Verify accuracy of launch information
- Confirm partner's representation of the brand
- Establish official contact points for verification process

## Related Concepts

- [agent-lifecycle](../concepts/agent-lifecycle.md)

## Related Entities

- [rbm-api](../entities/rbm-api.md)
