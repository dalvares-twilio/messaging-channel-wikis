---
title: "Method: brands.agents.integrations.patch  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents.integrations/patch"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Only specify the "dialogflowEsIntegration.dialogflow\_knowledge\_bases" flag when adding a DialogflowDocument.
- Use a `PATCH` HTTP request to update an integration.
- The URL for updating an integration follows gRPC Transcoding syntax.
- The `updateMask` query parameter is required and uses FieldMask format to specify fields to update.
- The request and response bodies contain an instance of Integration.

Update an integration.

For adding a DialogflowDocument, only the "dialogflowEsIntegration.dialogflow\_knowledge\_bases" flag should be specified. Adding a document should be an isolated update.

### HTTP request

`PATCH https://businesscommunications.googleapis.com/v1/{integration.name=brands/*/agents/*/integrations/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>integration.name</code></td><td><p><code>string</code></p><p>Output only. The unique identifier of the integration. Read-only. Defined by the platform.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Required. The update mask applies to the resource. For the FieldMask definition, see <a href="https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask">https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask</a></p><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).