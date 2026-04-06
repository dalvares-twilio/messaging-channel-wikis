---
title: "Method: testers.delete  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/testers/delete"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- The `DELETE https://businesscommunications.googleapis.com/v1/{name=testers/*}` HTTP request is used to delete a tester device.
- The `name` path parameter, a required string, represents the unique identifier of the tester.
- The `agentId` query parameter, a string, specifies the Agent ID.
- The request body must be empty for this operation.
- A successful response body is an empty JSON object.
- The request requires the `https://www.googleapis.com/auth/businesscommunications` OAuth scope for authorization.

Deletes a tester device.

### HTTP request

`DELETE https://businesscommunications.googleapis.com/v1/{name=testers/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the tester. If tester phone number is "+1112223333", this parameter resolves to "testers/+1112223333".</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>agentId</code></td><td><p><code>string</code></p><p>Agent ID.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).