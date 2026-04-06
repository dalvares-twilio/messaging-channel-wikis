---
type: source
title: "List Carriers (Regions)"
source_file: "[[raw/List carriers (regions)    RCS for Business.md]]"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/regions"
ingested: 2026-04-05
tags: [carriers, api, launch]
---

## Summary

Carrier networks where RBM agents can launch are called "regions" in the RBM Management API. The carrier list is maintained by RBM Support and grows as more carriers adopt RBM.

## Key Points

- Must retrieve launchable regions before submitting agent for launch
- API endpoint: `regions.list`
- Returns list with `name`, `displayName`, `managementType`
- **GOOGLE_MANAGED**: standard approval process
- **CARRIER_MANAGED**: requires direct commercial agreement with carrier
  - Operate own approval process
  - Charge for message delivery to their subscribers
  - Messages cannot be delivered without contract in place

### Example Response
```json
{
  "regions": [
    {
      "name": "/v1/regions/dt-germany",
      "displayName": "Germany: DT",
      "managementType": "CARRIER_MANAGED"
    },
    {
      "name": "/v1/regions/9mobile-nigeria",
      "displayName": "Nigeria: 9 Mobile",
      "managementType": "GOOGLE_MANAGED"
    }
  ]
}
```

## Related Concepts

- [[wiki/concepts/carrier-launch]]

## Related Entities

- [[wiki/entities/rbm-management-api]]
