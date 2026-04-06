---
title: "Method: brands.agents.integrations.get  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents.integrations/get"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Use a GET request to retrieve an integration with the specified URL format.
- The request requires a `name` path parameter which is the unique identifier of the integration.
- The request body must be empty, and the response body contains an `Integration` object.

Get an integration.

### HTTP request

`GET https://businesscommunications.googleapis.com/v1/{name=brands/*/agents/*/integrations/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the integration. If the brand identifier is "1234", the agent identifier is "5678", and the integration identifier is "9092", this parameter resolves to "brands/1234/agents/5678/integrations/9092".</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).