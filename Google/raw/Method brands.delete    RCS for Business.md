---
title: "Method: brands.delete  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands/delete"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- This content explains how to delete a brand using a DELETE HTTP request.
- Deleting a brand with associated agents or locations requires setting the `force` parameter to `true`.
- The request uses gRPC Transcoding syntax for the URL, which includes the brand's unique identifier in the path.
- A successful deletion results in an empty response body.

Deletes a brand.

If the brand has any associated agents or locations, the delete request fails unless `force` is `true`.

### HTTP request

`DELETE https://businesscommunications.googleapis.com/v1/{name=brands/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the brand. If the brand identifier is "1234", this parameter resolves to "brands/1234".</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>force</code></td><td><p><code>boolean</code></p><p>For non-RBM cases: if true, any agents and locations associated with this brand are also deleted.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).