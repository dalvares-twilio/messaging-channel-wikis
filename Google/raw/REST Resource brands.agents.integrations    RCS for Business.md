---
title: "REST Resource: brands.agents.integrations  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents.integrations"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Integrations can be associated with Dialogflow ES, Dialogflow CX, or an Agent Webhook.
- Each integration has a unique identifier and a status indicating if it is enabled or disabled.
- Dialogflow integrations include project and agent IDs, an auto-response status, a service account email, and operation information.
- Agent webhook integrations require a webhook URI and a verification token.
- Methods available for integrations include create, delete, get, list, and patch.

## Resource: Integration

Information about the integration.

| JSON representation |
| --- |
| ``` {   "name": string,   "status": enum (IntegrationStatus),    // Union field integration_info can be only one of the following:   "dialogflowEsIntegration": {     object (DialogflowEsIntegration)   },   "dialogflowCxIntegration": {     object (DialogflowCxIntegration)   },   "agentWebhookIntegration": {     object (AgentWebhookIntegration)   }   // End of list of possible types for union field integration_info. } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. The unique identifier of the integration. Read-only. Defined by the platform.</p></td></tr><tr><td><code>status</code></td><td><p><code>enum (<code>IntegrationStatus</code>)</code></p><p>Output only. Integration status.</p></td></tr><tr><td colspan="2">Union field <code>integration_info</code>. Detailed information for the integration. <code>integration_info</code> can be only one of the following:</td></tr><tr><td><code>dialogflowEsIntegration</code></td><td><p><code>object (<code>DialogflowEsIntegration</code>)</code></p><p>Information about an associated Dialogflow ES project. <a href="https://cloud.google.com/dialogflow/es/docs">https://cloud.google.com/dialogflow/es/docs</a></p></td></tr><tr><td><code>dialogflowCxIntegration</code></td><td><p><code>object (<code>DialogflowCxIntegration</code>)</code></p><p>Information about an associated Dialogflow CX project. <a href="https://cloud.google.com/dialogflow/cx/docs/basics">https://cloud.google.com/dialogflow/cx/docs/basics</a></p></td></tr><tr><td><code>agentWebhookIntegration</code></td><td><p><code>object (<code>AgentWebhookIntegration</code>)</code></p><p>Information about webhook for an agent. If a webhook is configured at an agent level, it will override the webhook at the partner level.</p></td></tr></tbody></table>

## IntegrationStatus

Integration statuses.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>INTEGRATION_STATUS_UNSPECIFIED</code></td><td>Integration status is unspecified.</td></tr><tr><td><code>ENABLED</code></td><td>Enabled.</td></tr><tr><td><code>DISABLED</code></td><td>Disabled.</td></tr></tbody></table>

## DialogflowEsIntegration

Information about a Business Messages agent and Dialogflow ES project association.

| JSON representation |
| --- |
| ``` {   "dialogflowProjectId": string,   "autoResponseStatus": enum (AutoResponseStatus),   "dialogflowServiceAccountEmail": string,   "operationInfo": {     object (OperationInfo)   },   "dialogflowKnowledgeBases": [     {       object (DialogflowKnowledgebase)     }   ] } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dialogflowProjectId</code></td><td><p><code>string</code></p><p>Required. The Dialogflow project ID.</p><p>Non-editable. To change this value, you must delete the Dialogflow project from this agent, then create a new integration.</p></td></tr><tr><td><code>autoResponseStatus</code></td><td><p><code>enum (<code>AutoResponseStatus</code>)</code></p><p>Required. If <code>ENABLED</code>, Business Messages automatically sends the Dialogflow responses to users.</p></td></tr><tr><td><code>dialogflowServiceAccountEmail</code></td><td><p><code>string</code></p><p>Output only. The service account that must be configured in the Dialogflow project with the "Dialogflow Console Agent Editor" and "Dialogflow API Client" roles. This is required to provide access to the Dialogflow API.</p></td></tr><tr><td><code>operationInfo</code></td><td><p><code>object (<code>OperationInfo</code>)</code></p><p>Output only. Information about the operating state of the Dialogflow integration.</p></td></tr><tr><td><code>dialogflowKnowledgeBases[]</code></td><td><p><code>object (<code>DialogflowKnowledgebase</code>)</code></p><p>Knowledge bases associated with the Dialogflow project.</p><p>Optional</p></td></tr></tbody></table>

## AutoResponseStatus

Dialogflow auto-response status.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>AUTO_RESPONSE_STATUS_UNSPECIFIED</code></td><td>Auto-response is unspecified.</td></tr><tr><td><code>ENABLED</code></td><td>Auto-response is enabled.</td></tr><tr><td><code>DISABLED</code></td><td>Auto-response is disabled.</td></tr></tbody></table>

## OperationInfo

The Dialogflow operation information.

| JSON representation |
| --- |
| ``` {   "operationName": string,   "operationType": enum (OperationType),   "operationState": enum (OperationState),   "error": {     object (Status)   } } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operationName</code></td><td><p><code>string</code></p><p>Output only. The server-assigned name (operation Id), which is only unique within the same service that originally returns it.</p></td></tr><tr><td><code>operationType</code></td><td><p><code>enum (<code>OperationType</code>)</code></p><p>Output only. Dialogflow Operation type.</p></td></tr><tr><td><code>operationState</code></td><td><p><code>enum (<code>OperationState</code>)</code></p><p>Output only. Dialogflow Operation state.</p></td></tr><tr><td><code>error</code></td><td><p><code>object (<code>Status</code>)</code></p><p>Output only. Error result, if any.</p></td></tr></tbody></table>

## OperationType

Dialogflow operation types.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>OPERATION_TYPE_UNSPECIFIED</code></td><td>Unspecified type.</td></tr><tr><td><code>ASSOCIATE_DIALOGFLOW</code></td><td>Associate Dialogflow.</td></tr><tr><td><code>DISSOCIATE_DIALOGFLOW</code></td><td>Dissociate Dialogflow.</td></tr><tr><td><code>ADD_DOCUMENT_TO_KNOWLEDGEBASE</code></td><td>Add document to knowledge base.</td></tr><tr><td><code>DELETE_DOCUMENT_FROM_KNOWLEDGEBASE</code></td><td>Delete document from knowledge base.</td></tr></tbody></table>

## OperationState

Statuses of operation in Dialogflow.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>OPERATION_STATE_UNSPECIFIED</code></td><td>Unspecified state.</td></tr><tr><td><code>PROCESSING</code></td><td>Processing.</td></tr><tr><td><code>COMPLETED</code></td><td>Completed.</td></tr><tr><td><code>FAILED</code></td><td>Failed.</td></tr></tbody></table>

## Status

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.

You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

| JSON representation |
| --- |
| ``` {   "code": integer,   "message": string,   "details": [     {       "@type": string,       field1: ...,       ...     }   ] } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>code</code></td><td><p><code>integer</code></p><p>The status code, which should be an enum value of <code>google.rpc.Code</code>.</p></td></tr><tr><td><code>message</code></td><td><p><code>string</code></p><p>A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the <code>google.rpc.Status.details</code> field, or localized by the client.</p></td></tr><tr><td><code>details[]</code></td><td><p><code>object</code></p><p>A list of messages that carry the error details. There is a common set of message types for APIs to use.</p><p>An object containing fields of an arbitrary type. An additional field <code>"@type"</code> contains a URI identifying the type. Example: <code>{ "id": 1234, "@type": "types.example.com/standard/id" }</code>.</p></td></tr></tbody></table>

## DialogflowKnowledgebase

Knowledge base information. A knowledge base can have multiple FAQ URLs.

| JSON representation |
| --- |
| ``` {   "name": string,   "displayName": string,   "documents": [     {       object (DialogflowDocument)     }   ],   "updateTime": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. Knowledgebase ID.</p><p>Unique identifier returned by Dialogflow service after creation of a knowledge base. If the brand identifier is "1234", the agent identifier is "5678", the integration identifier is "9092", and the knowledge base identifier is "1111", this parameter resolves to "brands/1234/agents/5678/integrations/9092/knowledgebases/1111".</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Required. Knowledge base display name.</p></td></tr><tr><td><code>documents[]</code></td><td><p><code>object (<code>DialogflowDocument</code>)</code></p><p>Knowledge base documents.</p><p>Optional</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Time at which the knowledge base was created or updated.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr></tbody></table>

## DialogflowDocument

A knowledge base document. A document can be either a website URL or a URL to a CSV file. URLs must be publicly available. CSV files must contain one or more question/answer pairs, with one row for each pair.

| JSON representation |
| --- |
| ``` {   "name": string,   "displayName": string,   "updateTime": string,   "operationInfo": {     object (OperationInfo)   },    // Union field content can be only one of the following:   "faqUrl": string,   "rawContent": string   // End of list of possible types for union field content. } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>System-generated Document ID.</p><p>If the brand identifier is "1234", the agent identifier is "5678", the integration identifier is "9092", the knowledge base identifier is "1111", and the document identifier is "2222", this parameter resolves to "brands/1234/agents/5678/integrations/9092/knowledgebases/1111/documents/2222".</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Required. Display name of a FAQ document.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Time at which the document was created/updated.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>operationInfo</code></td><td><p><code>object (<code>OperationInfo</code>)</code></p><p>Output only. Operation Information is populated only when a document is added to an existing knowledge base.</p></td></tr><tr><td colspan="2">Union field <code>content</code>. Content of the document. <code>content</code> can be only one of the following:</td></tr><tr><td><code>faqUrl</code></td><td><p><code>string</code></p><p>URL of a FAQ document.</p></td></tr><tr><td><code>rawContent</code></td><td><p><code>string (bytes format)</code></p><p>The raw content of the document.</p><p>A base64-encoded string.</p></td></tr></tbody></table>

## DialogflowCxIntegration

Information about a Business Messages agent and Dialogflow CX project association.

| JSON representation |
| --- |
| ``` {   "dialogflowProjectId": string,   "dialogflowAgentId": string,   "autoResponseStatus": enum (AutoResponseStatus),   "dialogflowServiceAccountEmail": string,   "operationInfo": {     object (OperationInfo)   } } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dialogflowProjectId</code></td><td><p><code>string</code></p><p>Required. The Dialogflow project ID.</p><p>Non-editable. To change this value, you must delete the Dialogflow project from this agent, then create a new integration.</p></td></tr><tr><td><code>dialogflowAgentId</code></td><td><p><code>string</code></p><p>Required. The Dialogflow Agent ID.</p></td></tr><tr><td><code>autoResponseStatus</code></td><td><p><code>enum (<code>AutoResponseStatus</code>)</code></p><p>Required. If <code>ENABLED</code>, Business Messages automatically sends the Dialogflow responses to users.</p></td></tr><tr><td><code>dialogflowServiceAccountEmail</code></td><td><p><code>string</code></p><p>Output only. The service account that must be configured in the Dialogflow project with the "Dialogflow Console Agent Editor" and "Dialogflow API Client" roles. This is required to provide access to the Dialogflow API.</p></td></tr><tr><td><code>operationInfo</code></td><td><p><code>object (<code>OperationInfo</code>)</code></p><p>Output only. Information about the operating state of the Dialogflow integration.</p></td></tr></tbody></table>

## AgentWebhookIntegration

Information about webhook for a Business Messages agent.

| JSON representation |
| --- |
| ``` {   "webhookUri": string,   "verificationToken": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>webhookUri</code></td><td><p><code>string</code></p><p>Required. The webhook URL where the messages are delivered.</p></td></tr><tr><td><code>verificationToken</code></td><td><p><code>string</code></p><p>Input only. The verification token.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Create an integration.</td></tr><tr><td><h3>delete</h3></td><td>Delete an integration.</td></tr><tr><td><h3>get</h3></td><td>Get an integration.</td></tr><tr><td><h3>list</h3></td><td>List integrations.</td></tr><tr><td><h3>patch</h3></td><td>Update an integration.</td></tr></tbody></table>