---
title: "RCS for Business  |  Google for Developers"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/AgentLaunch"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Agent launch details are defined by a name and can be for an RCS Business Messaging agent.
- RcsBusinessMessagingLaunch requires a questionnaire and details for each supported region.
- The Questionnaire includes required descriptions for triggering, interactions, opt-out, and agent access instructions, along with required contact information.
- Optional fields in the Questionnaire include descriptions for obtaining opt-in and URIs for review videos and screenshots.
- Contact information includes the name, title, and email of the point of contact.

Details about an agent launch.

| JSON representation |
| --- |
| ``` {   "name": string,    // Union field launch_detail can be only one of the following:   "rcsBusinessMessaging": {     object (RcsBusinessMessagingLaunch)   }   // End of list of possible types for union field launch_detail. } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The identifier for launch.</p></td></tr><tr><td colspan="2">Union field <code>launch_detail</code>. Allows launch based on agent type. <code>launch_detail</code> can be only one of the following:</td></tr><tr><td><code>rcsBusinessMessaging</code></td><td><p><code>object (<code>RcsBusinessMessagingLaunch</code>)</code></p><p>Launch details for an RCS for Business agent.</p></td></tr></tbody></table>

## RcsBusinessMessagingLaunch

Details about an RCS for Business agent launch.

| JSON representation |
| --- |
| ``` {   "questionnaire": {     object (Questionnaire)   },   "launchDetails": {     string: {       object (RcsBusinessMessagingRegionLaunch)     },     ...   },   "launchRegion": enum (LaunchRegion) } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>questionnaire</code></td><td><p><code>object (<code>Questionnaire</code>)</code></p><p>Required. Questionnaire about agent launch details.</p></td></tr><tr><td><code>launchDetails</code></td><td><p><code>map (key: string, value: object (<code>RcsBusinessMessagingRegionLaunch</code>))</code></p><p>Required. Launch details for each supported region. Key represented by RcsBusinessMessagingRegion.name.</p><p>To launch an agent (when the agent hasn't launched before), add an object containing a map of only keys for all regions you want the agent to launch to.</p><p>To launch an agent (when the agent has launched before), add an object containing a map of only keys for all regions the agent is already launched on and all regions the agent wants to launch to.</p><p>For more information, see the <a href="https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/agents#launch-agent-to-one-or-more-regions">Launch an agent to one or more regions</a> documentation.</p></td></tr><tr><td><code>launchRegion<br><b>(deprecated)</b></code></td><td><p><code>enum (<code>LaunchRegion</code>)</code></p><p>Launch region for an agent. Ignored: This field is deprecated. Hosting region can only be specified during agent creation.</p></td></tr></tbody></table>

## Questionnaire

If Google manages the launch region, questionnaire details are available to Google for the purpose of reviewing the agent's launch.

| JSON representation |
| --- |
| ``` {   "contacts": [     {       object (Contact)     }   ],   "optinDescription": string,   "triggerDescription": string,   "interactionsDescription": string,   "optoutDescription": string,   "agentAccessInstructions": string,   "videoUris": [     string   ],   "screenshotUris": [     string   ] } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>contacts[]</code></td><td><p><code>object (<code>Contact</code>)</code></p><p>Required. Point of contacts.</p></td></tr><tr><td><code>optinDescription</code></td><td><p><code>string</code></p><p>Optional. Description of how you obtain opt-in to message users with the agent.</p></td></tr><tr><td><code>triggerDescription</code></td><td><p><code>string</code></p><p>Required. Description of actions that trigger messages to users.</p></td></tr><tr><td><code>optoutDescription</code></td><td><p><code>string</code></p><p>Required. Description of the message the agent sends when a user opts out.</p></td></tr><tr><td><code>agentAccessInstructions</code></td><td><p><code>string</code></p><p>Required. Agent access instructions.</p></td></tr><tr><td><code>videoUris[]</code></td><td><p><code>string</code></p><p>Optional. Publicly available URIs for videos of the agent. For review purposes only.</p></td></tr><tr><td><code>screenshotUris[]</code></td><td><p><code>string</code></p><p>Optional. Publicly available URIs for screenshots of the agent. For review purposes only.</p></td></tr></tbody></table>

## Contact

Point of contact.

| JSON representation |
| --- |
| ``` {   "name": string,   "title": string,   "email": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Name of the contact.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>Title of the contact.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>Email address of the contact.</p></td></tr></tbody></table>

## LaunchRegion

Launch region. Region where an agent is launched. This enum matches the options available in the Region dropdown when creating a new RCS for Business agent in the Developer Console.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>LAUNCH_REGION_UNSPECIFIED</code></td><td>Unspecified launch region.</td></tr><tr><td><code>NORTH_AMERICA</code></td><td>North America.</td></tr><tr><td><code>EUROPE</code></td><td>Europe.</td></tr><tr><td><code>ASIA_PACIFIC</code></td><td>Asia Pacific.</td></tr></tbody></table>