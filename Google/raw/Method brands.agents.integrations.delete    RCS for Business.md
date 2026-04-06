---
title: "Method: brands.agents.integrations.delete  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents.integrations/delete"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- You can delete an integration using a DELETE HTTP request to a specific URL that includes the brand, agent, and integration identifiers.
- The request requires an empty body and an empty response body is returned upon success.

Delete an integration.

### HTTP request

`DELETE https://businesscommunications.googleapis.com/v1/{name=brands/*/agents/*/integrations/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the integration. If the brand identifier is "1234", the agent identifier is "5678", and the integration identifier is "9092", this parameter resolves to "brands/1234/agents/5678/integrations/9092".</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).