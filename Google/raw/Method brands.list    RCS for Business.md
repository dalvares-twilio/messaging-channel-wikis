---
title: "Method: brands.list  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands/list"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- The `GET https://businesscommunications.googleapis.com/v1/brands` request lists all brands accessible to the user.
- This method sets `pageSize` to `0`, allowing the server to decide the number of results returned.
- You can use `pageSize` and `pageToken` query parameters to control pagination of the results.
- The response body contains a list of `brands` objects and a `nextPageToken` for pagination.

Lists all the brands accessible to the user making the request.

### HTTP request

`GET https://businesscommunications.googleapis.com/v1/brands`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Specify the maximum number of results to be returned by the server. The server may further constrain the maximum number of results returned in a single page. If the pageSize is 0, the server will decide the number of results to be returned.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The nextPageToken value returned from a previous List request, if any.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A list of brands.

If successful, the response body contains data with the following structure:

| JSON representation |
| --- |
| ``` {   "brands": [     {            }   ],   "nextPageToken": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>brands[]</code></td><td><p>List of brand information.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The pagination token to retrieve the next page of results. If the value is "", it means no further results for the request.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).