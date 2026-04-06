---
title: "Method: partners.patch  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/partners/patch"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Use the PATCH method with the specified URL to update partner information.
- The `partner.name` path parameter is a required string representing the unique partner identifier.
- The `updateMask` query parameter, using `FieldMask` format, specifies which fields of the partner object to update.
- The request and response bodies both contain a Partner object.

Updates the information for a partner.

### HTTP request

`PATCH https://businesscommunications.googleapis.com/v1/{partner.name=partners/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>partner.name</code></td><td><p><code>string</code></p><p>Immutable. The unique identifier of the partner.</p><p>Defined by the platform.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The update mask applies to the resource. For the FieldMask definition, see <a href="https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask">https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask</a></p><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).