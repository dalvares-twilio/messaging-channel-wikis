---
title: "Method: brands.agents.getLaunch  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getLaunch"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Gets launch information for an agent.
- The HTTP request uses a GET method with a specific URL format containing brand and agent identifiers.
- The request requires a `name` parameter which is the unique identifier of the agent launch.
- The response body contains an instance of AgentLaunch if the request is successful.

Gets the launch information for an agent.

### HTTP request

`GET https://businesscommunications.googleapis.com/v1/{name=brands/*/agents/*/launch}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the agent launch.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `AgentLaunch`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).