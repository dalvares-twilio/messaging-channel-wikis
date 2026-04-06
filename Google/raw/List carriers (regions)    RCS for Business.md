---
title: "List carriers (regions)  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/regions"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- "Regions" in the RBM Management API define the carrier networks where an RBM agent can be launched.
- An up-to-date list of supported carriers is maintained by the RBM Support team and continues to grow.
- Retrieving a list of launchable regions is necessary before submitting an agent for launch.
- Code snippets for listing regions are available in both Node.js and Java samples.
- Carriers listed as "CARRIER\_MANAGED" require a direct commercial agreement for message delivery and have their own approval process.

The carrier networks where an RBM agent can be launched are defined as "regions" in the RBM Management API.

The RBM Support team maintains an up-to-date carrier list, which grows as more carriers adopt RBM.

Code snippets on this page are taken from the [Java samples](https://github.com/rcs-business-messaging/rbm-api-examples/tree/master/java/rbm-mgmt-api) and [Node.js samples](https://github.com/rcs-business-messaging/rbm-api-examples/tree/master/nodejs/rbm-mgmt-api).

## List regions

You need to retrieve a list of the launchable regions before you can submit an agent for launch. For more details, see [`regions.list`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/regions/list).

```
curl -v "https://businesscommunications.googleapis.com/v1/regions" \
  -H "Content-Type: application/json" \
  -H "User-Agent: curl/business-messaging" \
  -H "\`oauth2l header --json rbm-developer-service-account-credentials.json businesscommunications\`"
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-curl/blob/main/business-communications-api/rbm-management-api-samples/listRegions.sh).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

businessCommunicationsApiHelper.listRegions().then((response) => {
  console.log(response.data);
}).catch((err) => {
  console.log(err);
});
```
```
List<RcsBusinessMessagingRegion> regions = api.listAllRbmLaunchRegions();
List<String> regionIds = regions.stream().map(RcsBusinessMessagingRegion::getName).sorted()
  .collect(Collectors.toList());
logger.info("Fetched region Ids: " + regionIds);
```

This code returns a list of all the carriers where an agent can be submitted for launch:

```
{
  regions: [
    {
      name: '/v1/regions/dt-germany',
      displayName: 'Germany: DT',
      managementType: 'CARRIER_MANAGED'
    },
   {
      name: '/v1/regions/9mobile-nigeria',
      displayName: 'Nigeria: 9 Mobile',
      managementType: 'GOOGLE_MANAGED'
    },
    ...
    ...
  ]
}
```

Carriers which are listed as `CARRIER_MANAGED` operate their own approval process and charge for delivery of RBM messages to their subscribers. You need to have a commercial agreement in place directly with these carriers before you can deliver RBM messages to their subscribers.