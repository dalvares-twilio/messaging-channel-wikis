---
title: "Method: brands.agents.getVerification  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getVerification"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Gets verification information for an agent.
- The request is an HTTP GET request to `https://businesscommunications.googleapis.com/v1/{name=brands/*/agents/*/verification}`.
- The request requires a `name` path parameter representing the unique identifier of the brand and agent verification.
- A successful response contains an instance of AgentVerification.

Gets the verification information for an agent.

### HTTP request

`GET https://businesscommunications.googleapis.com/v1/{name=brands/*/agents/*/verification}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the brand and agent verification.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `AgentVerification`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).