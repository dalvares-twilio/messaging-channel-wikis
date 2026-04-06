---
title: "Method: brands.agents.updateLaunch  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/updateLaunch"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- The request uses an HTTP PATCH method to update agent launch information.
- The URL uses gRPC Transcoding syntax and requires the agentLaunch name as a path parameter.
- The request includes an optional updateMask query parameter to specify which fields to update.
- The request body contains an instance of AgentLaunch, and a successful response returns an instance of AgentLaunch.

Updates the launch information for an agent.

### HTTP request

`PATCH https://businesscommunications.googleapis.com/v1/{agentLaunch.name=brands/*/agents/*/launch}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>agentLaunch.name</code></td><td><p><code>string</code></p><p>Required. The identifier for launch.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The update mask applies to the resource. For the FieldMask definition, see <a href="https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask">https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask</a></p><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `AgentLaunch`.

### Response body

If successful, the response body contains an instance of `AgentLaunch`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).