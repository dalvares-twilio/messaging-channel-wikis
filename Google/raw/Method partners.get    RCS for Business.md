---
title: "Method: partners.get  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/partners/get"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Use an HTTP GET request to retrieve partner information.
- The request URL uses gRPC Transcoding syntax.
- The `name` parameter in the path can be used as an optional unique identifier for the partner.
- A successful response returns an instance of the Partner object.

Get the information about the partner.

### HTTP request

`GET https://businesscommunications.googleapis.com/v1/{name=partners/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Optional. The unique identifier of the partner.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).