---
title: "REST Resource: brands.agents  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- An Agent is a conversational entity representing a brand.
- The Agent resource includes fields such as `name`, `displayName`, and `brandName`.
- `detail_info` in the Agent resource contains product-specific information like `rcsBusinessMessagingAgent`.
- `RcsBusinessMessagingAgent` includes detailed information for RCS for Business, such as description, logos, contact methods, policies, and billing configuration.
- Various methods are available for managing agents, including creation, retrieval, updating, and launching.

## Resource: Agent

A conversational entity that represents a brand.

| JSON representation |
| --- |
| ``` {   "name": string,   "displayName": string,   "brandName": string,   "isArchived": boolean,    // Union field detail_info can be only one of the following:   "rcsBusinessMessagingAgent": {     object (RcsBusinessMessagingAgent)   }   // End of list of possible types for union field detail_info. } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The unique identifier of the agent.</p><p>Read-only. Defined by the platform.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Required. The name that the agent displays to users. Maximum 40 characters.</p><p>Not modifiable after agent verification.</p></td></tr><tr><td><code>brandName</code></td><td><p><code>string</code></p><p>Output only. The name of the brand associated with the agent.</p></td></tr><tr><td colspan="2"><p>Union field <code>detail_info</code>. Contains the fields required for the particular product.</p><p>Required. <code>detail_info</code> can be only one of the following:</p></td></tr><tr><td><code>rcsBusinessMessagingAgent</code></td><td><p><code>object (<code>RcsBusinessMessagingAgent</code>)</code></p><p>Detailed agent information for RCS for Business.</p></td></tr></tbody></table>

## RcsBusinessMessagingAgent

Agent information specifically related to RCS for Business. For agent creation, it's recommended to provide at least one contact method (phone, email, or website) with a corresponding label. For agent launch, at least one contact method (phone, email, or website) with a corresponding label is required.

| JSON representation |
| --- |
| ``` {   "description": string,   "logoUri": string,   "heroUri": string,   "phoneNumbers": [     {       object (PhoneEntry)     }   ],   "emails": [     {       object (EmailEntry)     }   ],   "websites": [     {       object (WebEntry)     }   ],   "privacy": {     object (WebEntry)   },   "termsConditions": {     object (WebEntry)   },   "color": string,   "billingConfig": {     object (RcsBusinessMessagingAgentBillingConfig)   },   "agentUseCase": enum (AgentUseCase),   "hostingRegion": enum (HostingRegion),   "partner": {     object (PartnerEntry)   },   "launchDetails": {     string: {       object (RcsBusinessMessagingRegionLaunch)     },     ...   },   "indiaPrincipalEntityId": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>description</code></td><td><p><code>string</code></p><p>Required. Description of the agent that is visible to users. Maximum 100 characters. See <a href="https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/edit-agent-information#edit_your_agents_information">Edit agent information</a> for detailed requirements.</p></td></tr><tr><td><code>logoUri</code></td><td><p><code>string</code></p><p>Required. Publicly available URL of the logo for the agent. Maximum 50 KB.</p><p>Not modifiable after agent verification.</p></td></tr><tr><td><code>heroUri</code></td><td><p><code>string</code></p><p>Required. Publicly available URL of the hero image for the agent. Maximum 200 KB.</p><p>Not modifiable after agent verification.</p></td></tr><tr><td><code>phoneNumbers[]</code></td><td><p><code>object (<code>PhoneEntry</code>)</code></p><p>Optional. Phone numbers associated with the agent. Required if email and website are not provided.</p></td></tr><tr><td><code>emails[]</code></td><td><p><code>object (<code>EmailEntry</code>)</code></p><p>Optional. Email addresses associated with the agent. Required if phone number and website are not provided.</p></td></tr><tr><td><code>websites[]</code></td><td><p><code>object (<code>WebEntry</code>)</code></p><p>Optional. Websites associated with the agent. Maximum 3. Required if phone number and email are not provided.</p></td></tr><tr><td><code>privacy</code></td><td><p><code>object (<code>WebEntry</code>)</code></p><p>Required. Privacy policy associated with the agent.</p></td></tr><tr><td><code>termsConditions</code></td><td><p><code>object (<code>WebEntry</code>)</code></p><p>Required. Terms and conditions associated with the agent.</p></td></tr><tr><td><code>color</code></td><td><p><code>string</code></p><p>Required. Theme color of the agent that is visible to users in hex format. For example, #FF6347.</p></td></tr><tr><td><code>billingConfig</code></td><td><p><code>object (<code>RcsBusinessMessagingAgentBillingConfig</code>)</code></p><p>Required. Billing configuration for the agent.</p></td></tr><tr><td><code>agentUseCase</code></td><td><p><code>enum (<code>AgentUseCase</code>)</code></p><p>Optional. Use case of bot.</p></td></tr><tr><td><code>hostingRegion</code></td><td><p><code>enum (<code>HostingRegion</code>)</code></p><p>Required. Hosting region for an agent.</p></td></tr><tr><td><code>partner</code></td><td><p><code>object (<code>PartnerEntry</code>)</code></p><p>Output only. Partner associated with the agent.</p></td></tr><tr><td><code>launchDetails</code></td><td><p><code>map (key: string, value: object (<code>RcsBusinessMessagingRegionLaunch</code>))</code></p><p>Output only. Launch details for the agent. Only populated for carriers, and only with the launch details related to the carrier making the call.</p></td></tr><tr><td><code>indiaPrincipalEntityId</code></td><td><p><code>string</code></p><p>Optional. India business principal entity identifier (PE ID) of the business associated with the agent. Required if planning to launch the agent in India.</p></td></tr></tbody></table>

## PhoneEntry

A phone number associated with the agent.

| JSON representation |
| --- |
| ``` {   "phoneNumber": {     object (Phone)   },   "label": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>phoneNumber</code></td><td><p><code>object (<code>Phone</code>)</code></p><p>Required. Phone number in two possible formats: either the full E.164 format (for example, "+12223334444") or an unformatted local/toll-free phone number without '+', prefix, or country code (for example, "6502530000"). Note: emergency numbers are not allowed.</p></td></tr><tr><td><code>label</code></td><td><p><code>string</code></p><p>Required. Label for the phone number.</p></td></tr></tbody></table>

## EmailEntry

An email associated with the agent.

| JSON representation |
| --- |
| ``` {   "address": string,   "label": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>address</code></td><td><p><code>string</code></p><p>Required. An email address.</p></td></tr><tr><td><code>label</code></td><td><p><code>string</code></p><p>Required. Label for the email address.</p></td></tr></tbody></table>

## WebEntry

A web-based resource associated with the agent.

| JSON representation |
| --- |
| ``` {   "uri": string,   "label": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>uri</code></td><td><p><code>string</code></p><p>Required. A publicly accessible URI associated with the agent. Must use the HTTP or HTTPS protocol.</p></td></tr><tr><td><code>label</code></td><td><p><code>string</code></p><p>Required for <code>websites</code>, optional otherwise. Label for the URI.</p></td></tr></tbody></table>

## RcsBusinessMessagingAgentBillingConfig

Billing configuration for the agent.

| JSON representation |
| --- |
| ``` {   "billingCategory": enum (BillingCategory) } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>billingCategory</code></td><td><p><code>enum (<code>BillingCategory</code>)</code></p><p>Billing category for the agent.</p></td></tr></tbody></table>

## BillingCategory

Supported billing categories.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BILLING_CATEGORY_UNSPECIFIED</code></td><td>Category not specified.</td></tr><tr><td><code>CONVERSATIONAL_LEGACY</code></td><td><p>Legacy category to support the billing configuration of existing agents. Use <code>CONVERSATIONAL</code> instead.</p></td></tr><tr><td><code>CONVERSATIONAL</code></td><td>Designed for longer, more complex sessions where the user and brand exchange a series of messages.</td></tr><tr><td><code>SINGLE_MESSAGE</code></td><td><p>Replaces SMS with a richer messaging experience. Never billed as CONVERSATIONAL.</p></td></tr><tr><td><code>BASIC_MESSAGE</code></td><td><p>Billing model is similar to SMS. Never billed as CONVERSATIONAL.</p></td></tr><tr><td><code>NON_CONVERSATIONAL</code></td><td>Represents a non-conversational billing category, which replaces the legacy SINGLE_MESSAGE and BASIC_MESSAGE categories. This is for agents that primarily engage in one-way (A2P) communication.</td></tr></tbody></table>

## AgentUseCase

Agent use case types used in storage.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>AGENT_USE_CASE_UNSPECIFIED</code></td><td>Use case not specified.</td></tr><tr><td><code>TRANSACTIONAL</code></td><td>Agents that send only essential, necessary and time-sensitive messages.</td></tr><tr><td><code>PROMOTIONAL</code></td><td>Agents that send sales, marketing and promotional messages. Default type.</td></tr><tr><td><code>OTP</code></td><td>Agents that only send one time passwords.</td></tr><tr><td><code>MULTI_USE</code></td><td>Agents that have multiple use cases. This includes agents where one use case is launched immediately, while the second one is planned for future release. For more information, see the <a href="https://developers.google.com/business-communications/rcs-business-messaging/guides/learn/agent-use-cases#multiuse">Multi-use</a> documentation.</td></tr></tbody></table>

## HostingRegion

Possible hosting regions for an agent, used for routing P2A messages to the regionalized server correctly.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>HOSTING_REGION_UNSPECIFIED</code></td><td>Unspecified hosting region.</td></tr><tr><td><code>NORTH_AMERICA</code></td><td>North America.</td></tr><tr><td><code>EUROPE</code></td><td>Europe.</td></tr><tr><td><code>ASIA_PACIFIC</code></td><td>Asia Pacific.</td></tr></tbody></table>

## PartnerEntry

Partner associated with the agent.

| JSON representation |
| --- |
| ``` {   "partnerId": string,   "displayName": string,   "company": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>partnerId</code></td><td><p><code>string</code></p><p>Output only. Unique identifier for partner.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Output only. The name that will be displayed to businesses to associate partners for products. Should be unique among partners.</p></td></tr><tr><td><code>company</code></td><td><p><code>string</code></p><p>Output only. The public name of the company for the given partner.</p></td></tr></tbody></table>

## RcsBusinessMessagingRegionLaunch

Details about RCS for Business agent launch for each region.

| JSON representation |
| --- |
| ``` {   "launchState": enum (LaunchState),   "comment": string,   "updateTime": string,   "isHidden": boolean } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>launchState</code></td><td><p><code>enum (<code>LaunchState</code>)</code></p><p>The launch state for a region.</p></td></tr><tr><td><code>comment</code></td><td><p><code>string</code></p><p>Comment from the carrier.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Last updated time.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>isHidden</code></td><td><p><code>boolean</code></p><p>Optional. Specifies whether the agent is marked as hidden for the carrier, which affects the visibility of console and API views.</p></td></tr></tbody></table>

## LaunchState

The launch state of an entity. To learn about allowed launch state transitions for both carriers and partners, see [Receive events](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/receive-events#agent_launch_state_has_changed).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>LAUNCH_STATE_UNSPECIFIED</code></td><td>Unspecified state.</td></tr><tr><td><code>LAUNCH_STATE_UNLAUNCHED</code></td><td>Entity is unlaunched.</td></tr><tr><td><code>LAUNCH_STATE_PENDING</code></td><td>Launch in review.</td></tr><tr><td><code>LAUNCH_STATE_LAUNCHED</code></td><td>Launched.</td></tr><tr><td><code>LAUNCH_STATE_REJECTED</code></td><td>Launch is rejected.</td></tr><tr><td><code>LAUNCH_STATE_SUSPENDED</code></td><td>Launch is suspended.</td></tr><tr><td><code>LAUNCH_STATE_PENDING_UNLAUNCH</code></td><td><p>Deprecated: This state is no longer used.</p><p>Unlaunch in review.</p></td></tr><tr><td><code>LAUNCH_STATE_INVALID_IN_GMB</code></td><td><p>Deprecated: This state is no longer used.</p><p>Launch is invalid because the associated Google My Business Listing doesn't support messaging. Reverifying in Google My Business automatically relaunches here. Only applicable for locations.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a new agent to represent a brand.</td></tr><tr><td><h3>delete (deprecated)</h3></td><td>Deprecated: agent deletion is deprecated.</td></tr><tr><td><h3>get</h3></td><td>Get information about an agent.</td></tr><tr><td><h3>getLaunch</h3></td><td>Gets the launch information for an agent.</td></tr><tr><td><h3>getVerification</h3></td><td>Gets the verification information for an agent.</td></tr><tr><td><h3>list</h3></td><td>Lists all the agents associated with a brand.</td></tr><tr><td><h3>patch</h3></td><td>Updates information about an agent.</td></tr><tr><td><h3>requestLaunch</h3></td><td>Begins the launch process for an agent.</td></tr><tr><td><h3>requestVerification</h3></td><td>Submits business verification information for an agent.</td></tr><tr><td><h3>updateLaunch</h3></td><td>Updates the launch information for an agent.</td></tr><tr><td><h3>updateVerification</h3></td><td>Updates the verification state for an agent.</td></tr></tbody></table>