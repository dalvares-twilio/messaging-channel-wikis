---
title: "REST Resource: partners  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/partners"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- A Partner is defined as an entity onboarded with a supported product, identified by a unique name and a required display name.
- Partner details include optional fields like company name, contact emails, and a technical contact with their name, email, and phone number.
- Partners have product capabilities indicating the supported products, such as Business Messages or RCS for Business, each potentially requiring a webhook URL.
- Supported products include Business Messages and RCS for Business, represented by enumerated values.
- Methods available for partners include getting information about a partner and patching to update their information.

## Resource: Partner

Partner that is onboarded with a supported product.

| JSON representation |
| --- |
| ``` {   "name": string,   "displayName": string,   "productCapabilities": [     {       object (ProductCapability)     }   ],   "company": string,   "contactEmails": [     string   ],   "technicalContact": {     object (Contact)   },   "dialogflowServiceAccountEmail": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Immutable. The unique identifier of the partner.</p><p>Defined by the platform.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Required. The display name of the partner.</p></td></tr><tr><td><code>productCapabilities[]</code></td><td><p><code>object (<code>ProductCapability</code>)</code></p><p>The product capabilities of the partner.</p></td></tr><tr><td><code>company</code></td><td><p><code>string</code></p><p>Optional. The company name of the partner.</p></td></tr><tr><td><code>contactEmails[]</code></td><td><p><code>string</code></p><p>Optional. The list of contact emails.</p></td></tr><tr><td><code>technicalContact</code></td><td><p><code>object (<code>Contact</code>)</code></p><p>Optional. The technical point of contact of the partner.</p></td></tr><tr><td><code>dialogflowServiceAccountEmail</code></td><td><p><code>string</code></p><p>Output only. Service account with access to the Dialogflow Client API role. This account is created by the platform and provides access to Dialogflow.</p></td></tr></tbody></table>

## ProductCapability

The product capabilities that the partner supports.

| JSON representation |
| --- |
| ``` {   "product": enum (Product),    // Union field capabilities can be only one of the following:   "rcsBusinessMessagingCapability": {     object (RcsBusinessMessagingCapability)   }   // End of list of possible types for union field capabilities. } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>product</code></td><td><p><code>enum (<code>Product</code>)</code></p><p>The product supported by the partner.</p></td></tr><tr><td colspan="2">Union field <code>capabilities</code>. Capabilities for the partner. <code>capabilities</code> can be only one of the following:</td></tr><tr><td><code>rcsBusinessMessagingCapability</code></td><td><p><code>object (<code>RcsBusinessMessagingCapability</code>)</code></p><p>RCS for Business capability = 4;</p></td></tr></tbody></table>

## Product

The products supported by Business Communications.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PRODUCT_UNSPECIFIED</code></td><td>Unspecified product.</td></tr><tr><td><code>RCS_BUSINESS_MESSAGING</code></td><td>RCS for Business product.</td></tr></tbody></table>

## RcsBusinessMessagingCapability

RCS for Business capabilities

| JSON representation |
| --- |
| ``` {   "webhookUrl": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>webhookUrl</code></td><td><p><code>string</code></p><p>Required. The webhook URL where the messages are delivered.</p></td></tr></tbody></table>

## Contact

Contact details

| JSON representation |
| --- |
| ``` {   "name": string,   "email": string,   "phoneNumber": {     object (Phone)   } } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Name of the contact person.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>Email of the contact person.</p></td></tr><tr><td><code>phoneNumber</code></td><td><p><code>object (<code>Phone</code>)</code></p><p>Phone number of the contact person.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Get the information about the partner.</td></tr><tr><td><h3>patch</h3></td><td>Updates the information for a partner.</td></tr></tbody></table>