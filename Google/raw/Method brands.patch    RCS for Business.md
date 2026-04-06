---
title: "Method: brands.patch  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands/patch"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Updating a brand requires including the entire list if updating a list field, as updates replace the entire list.
- The HTTP request method for updating a brand is `PATCH` using a specific Google API URL format.
- The brand to be updated is identified by its unique `brand.name` in the URL path.
- A `updateMask` query parameter is used to specify which fields of the brand are being updated.
- The request and response bodies contain an instance of a `Brand` resource.

Updates information about a brand.

### HTTP request

`PATCH https://businesscommunications.googleapis.com/v1/{brand.name=brands/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>brand.name</code></td><td><p><code>string</code></p><p>Output only. The unique identifier of the brand.</p><p>Defined by the platform.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The update mask applies to the resource. For the FieldMask definition, see <a href="https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask">https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask</a></p><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).