---
title: "Method: brands.agents.requestLaunch  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/requestLaunch"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Begins the launch process for an agent, making it available to users.
- An agent can only have one launch instance at a time.
- The HTTP request uses a POST method with a specific URL format including the agent's unique identifier.
- The request body requires an `agentLaunch` object.
- A successful response body contains an instance of `AgentLaunch`.

Begins the launch process for an agent. An agent is available to users after it launches. An agent can only have one instance of launch at a time.

### HTTP request

`POST https://businesscommunications.googleapis.com/v1/{name=brands/*/agents/*}:requestLaunch`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the agent. If the brand identifier is "1234" and the agent identifier is "5678", this parameter resolves to "brands/1234/agents/5678".</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

| JSON representation |
| --- |
| ``` {   "agentLaunch": {     object (AgentLaunch)   } } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>agentLaunch</code></td><td><p><code>object (<code>AgentLaunch</code>)</code></p><p>Required. The agent launch to create. Name and Launch status are ignored.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains an instance of `AgentLaunch`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).