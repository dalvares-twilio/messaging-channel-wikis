---
title: "Method: testers.get  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/testers/get"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- You can check a tester device's invite status using a GET request to a specific URL.
- The URL path requires the unique identifier of the tester in the format "testers/{phone number}".
- The request requires the `agentId` as a query parameter.
- The response body contains a Tester object if the request is successful.
- The request requires the `https://www.googleapis.com/auth/businesscommunications` OAuth scope for authorization.

Gets the invite status of a tester device.

### HTTP request

`GET https://businesscommunications.googleapis.com/v1/{name=testers/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the tester. If the tester phone number is "+1112223333", this parameter resolves to "testers/+1112223333".</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>agentId</code></td><td><p><code>string</code></p><p>Agent ID.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).