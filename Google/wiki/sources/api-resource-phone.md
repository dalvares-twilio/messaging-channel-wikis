---
type: source
title: "REST Resource: Phone"
source_file: "[REST Resource Phone.md](../../raw/REST Resource Phone.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/Phone"
ingested: 2026-04-09
tags: [api, rest-resource]
---

## Summary

The `Phone` resource represents a phone number in the RBM API.

## Key Points

- Single field: `number` (required)
- Accepts E.164 format (e.g., `+14155551234`)
- Also accepts unformatted local or toll-free numbers

## JSON Structure

```json
{
  "number": string
}
```

## Related Entities

- [rbm-api](../entities/rbm-api.md)
