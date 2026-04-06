---
title: "Method: brands.agents.create  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/create"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- You can create a new agent to represent a brand using a POST request.
- The API endpoint for creating an agent is `https://businesscommunications.googleapis.com/v1/{parent=brands/*}/agents`.
- The request requires a `parent` path parameter which is the unique identifier of the brand the agent represents.
- The request body should contain an instance of an Agent.
- A successful response will return a newly created instance of an Agent.

Creates a new agent to represent a brand.

### HTTP request

`POST https://businesscommunications.googleapis.com/v1/{parent=brands/*}/agents`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the brand the agent represents. If the brand identifier is "1234", this parameter is "brands/1234".</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).