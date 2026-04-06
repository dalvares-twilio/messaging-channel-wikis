---
title: "Method: brands.create  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands/create"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Creating a new brand uses an HTTP POST request to the `/v1/brands` endpoint.
- The request body should contain an instance of the Brand object.
- A successful response body will contain the newly created Brand instance.

Creates a new brand.

### HTTP request

`POST https://businesscommunications.googleapis.com/v1/brands`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).