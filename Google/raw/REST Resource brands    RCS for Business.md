---
title: "REST Resource: brands  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- A brand is a business, organization, or group represented by an agent.
- A brand has a unique `name` identifier and a required `displayName`.
- Brands can be managed using `create`, `delete`, `get`, `list`, and `patch` methods.

## Resource: Brand

A brand (business, organization, or group) that is represented by an agent.

| JSON representation |
| --- |
| ``` {   "name": string,   "displayName": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. The unique identifier of the brand.</p><p>Defined by the platform.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Required. The display name of the brand. Maximum 100 characters.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a new brand.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a brand.</td></tr><tr><td><h3>get</h3></td><td>Gets information about a brand.</td></tr><tr><td><h3>list</h3></td><td>Lists all the brands accessible to the user making the request.</td></tr><tr><td><h3>patch</h3></td><td>Updates information about a brand.</td></tr></tbody></table>