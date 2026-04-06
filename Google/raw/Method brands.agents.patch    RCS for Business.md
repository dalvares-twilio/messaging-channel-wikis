---
title: "Method: brands.agents.patch  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/patch"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Updates to agent information require a PATCH request to the specified URL.
- When updating a field that takes a list, the entire list must be included in the update request.
- The request uses an `updateMask` query parameter to specify the fields to be updated.
- The request and response bodies contain an instance of an Agent.

Updates information about an agent.

### HTTP request

`PATCH https://businesscommunications.googleapis.com/v1/{agent.name=brands/*/agents/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>agent.name</code></td><td><p><code>string</code></p><p>The unique identifier of the agent.</p><p>Read-only. Defined by the platform.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The update mask applies to the resource. For the FieldMask definition, see <a href="https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask">https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask</a></p><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).