---
title: "Method: regions.list  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/regions/list"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- The HTTP request `GET https://businesscommunications.googleapis.com/v1/regions` is used to list all RCS for Business regions.
- The response body contains a list of `RcsBusinessMessagingRegion` objects, each with fields for `name`, `displayName`, and `managementType`.
- The `ManagementType` can be `GOOGLE_MANAGED`, `CARRIER_MANAGED`, or `MANAGEMENT_TYPE_UNSPECIFIED`.

Lists all RCS for Business regions.

### HTTP request

`GET https://businesscommunications.googleapis.com/v1/regions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body must be empty.

### Response body

A list of all RCS for Business regions.

If successful, the response body contains data with the following structure:

| JSON representation |
| --- |
| ``` {   "regions": [     {       object (RcsBusinessMessagingRegion)     }   ] } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>regions[]</code></td><td><p><code>object (<code>RcsBusinessMessagingRegion</code>)</code></p><p>List of all RCS for Business regions.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).

## RcsBusinessMessagingRegion

RCS for Business region information.

| JSON representation |
| --- |
| ``` {   "name": string,   "displayName": string,   "managementType": enum (ManagementType) } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The identifier for the region.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>The display name of the region.</p></td></tr><tr><td><code>managementType</code></td><td><p><code>enum (<code>ManagementType</code>)</code></p><p>The management type of the region.</p></td></tr></tbody></table>

## ManagementType

The management type of the region.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>MANAGEMENT_TYPE_UNSPECIFIED</code></td><td>unspecified type.</td></tr><tr><td><code>GOOGLE_MANAGED</code></td><td>Google manages the process.</td></tr><tr><td><code>CARRIER_MANAGED</code></td><td>Carrier manages the process.</td></tr></tbody></table>