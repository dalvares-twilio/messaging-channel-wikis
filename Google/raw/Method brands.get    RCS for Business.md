---
title: "Method: brands.get  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands/get"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- You can retrieve information about a brand using an HTTP GET request to the specified endpoint.
- The request URL uses gRPC Transcoding syntax.
- The request requires a `name` path parameter, which is the unique identifier of the brand formatted as "brands/{brand\_id}".
- The request body must be empty.
- A successful response returns an instance of the `Brand` object.

Gets information about a brand.

### HTTP request

`GET https://businesscommunications.googleapis.com/v1/{name=brands/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the brand. If the brand identifier is "1234", this parameter resolves to "brands/1234".</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).