---
title: "Method: brands.agents.delete  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/delete"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Agent deletion is a deprecated feature and requires contacting customer support.
- The HTTP request for deleting an agent is a DELETE request to the specified URL.
- The `name` parameter in the URL is required and uniquely identifies the agent.
- The request body for deleting an agent must be empty.
- A successful response to an agent deletion request will have an empty response body.

Deprecated: agent deletion is deprecated. Please contact customer support.

### HTTP request

`DELETE https://businesscommunications.googleapis.com/v1/{name=brands/*/agents/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the agent. If the brand identifier is "1234" and the agent identifier is "5678", this parameter resolves to "brands/1234/agents/5668".</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).