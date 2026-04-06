---
title: "Method: analytics.agentPerformances.list  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/analytics.agentPerformances/list"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Access agent performance data, with each result showing metrics for a specific agent in a specific country.
- A GET request to `https://businesscommunications.googleapis.com/v1/analytics/agentPerformances` is used to retrieve the data.
- Optional query parameters `pageSize` and `pageToken` can be used for pagination, and the request body must be empty.
- The response contains a list of `AgentPerformance` objects and an optional `nextPageToken`.
- Each `AgentPerformance` object includes details like agent name, display name, country code, use case, reputation, traffic limit, and the end time of the metrics period.

Lists agent performance data accessible to the caller.

Each result represents the performance metrics for a specific agent in a specific country. If an agent has insufficient data for a given country, no performance record for that agent-country pair is returned.

### HTTP request

`GET https://businesscommunications.googleapis.com/v1/analytics/agentPerformances`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. Specify the maximum number of results to be returned by the server. The server may further constrain the maximum number of results returned in a single page. If the pageSize is 0, the server will decide the number of results to be returned. The maximum pageSize is 1000.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. The nextPageToken value returned from a previous List request, if any.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Returns a list of agent performances.

If successful, the response body contains data with the following structure:

| JSON representation |
| --- |
| ``` {   "agentPerformances": [     {       object (AgentPerformance)     }   ],   "nextPageToken": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>agentPerformances[]</code></td><td><p><code>object (<code>AgentPerformance</code>)</code></p><p>List of agent performances.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Optional. The pagination token to retrieve the next page of results. If the value is "", it means no further results for the request.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).

## AgentPerformance

Performance metrics for an agent in a country.

| JSON representation |
| --- |
| ``` {   "name": string,   "displayName": string,   "countryCode": string,   "agentUseCase": enum (AgentUseCase),   "reputation": enum (Reputation),   "trafficLimit": integer,   "metricsPeriodEndTime": string,   "spamTrendDays7": enum (TrendDirection),   "spamTrendDays28": enum (TrendDirection),   "agentUnsubscribeReasonMetricsDays7": {     object (AgentUnsubscribeReasonMetrics)   },   "agentUnsubscribeReasonMetricsDays28": {     object (AgentUnsubscribeReasonMetrics)   } } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The unique identifier of the agent.</p><p>Defined by the platform.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Required. The name that the agent displays to users. Maximum 40 characters.</p><p>Not modifiable after agent verification.</p></td></tr><tr><td><code>countryCode</code></td><td><p><code>string</code></p><p>The country dimension for the given performance metrics. Given as an <a href="https://www.iso.org/obp/ui/#search/code/">ISO 3166 Alpha-2 country code</a>. For example, "US" for the United States of America.</p></td></tr><tr><td><code>agentUseCase</code></td><td><p><code>enum (<code>AgentUseCase</code>)</code></p><p>The agent's use case</p></td></tr><tr><td><code>reputation</code></td><td><p><code>enum (<code>Reputation</code>)</code></p><p>Reputation of the agent in the given country.</p></td></tr><tr><td><code>trafficLimit</code></td><td><p><code>integer</code></p><p>Traffic limit for the agent (messages per user per month) in the given country. If the agent is not subject to traffic limits, the value will not be set.</p></td></tr><tr><td><code>metricsPeriodEndTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The timestamp representing the end of the period for which metrics were calculated. Metrics, including reputation, are calculated based on data up to this timestamp. This timestamp is the most recent midnight Pacific Time (PT).</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>spamTrendDays7</code></td><td><p><code>enum (<code>TrendDirection</code>)</code></p><p>Spam trend for a 7-day period.</p></td></tr><tr><td><code>spamTrendDays28</code></td><td><p><code>enum (<code>TrendDirection</code>)</code></p><p>Spam trend for a 28-day period.</p></td></tr><tr><td><code>agentUnsubscribeReasonMetricsDays7</code></td><td><p><code>object (<code>AgentUnsubscribeReasonMetrics</code>)</code></p><p>Agent unsubscribe reason metrics for a 7-day period.</p></td></tr><tr><td><code>agentUnsubscribeReasonMetricsDays28</code></td><td><p><code>object (<code>AgentUnsubscribeReasonMetrics</code>)</code></p><p>Agent unsubscribe reason metrics for a 28-day period.</p></td></tr></tbody></table>

## Reputation

The agent's reputation in the given country.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>REPUTATION_UNSPECIFIED</code></td><td>Unspecified reputation.</td></tr><tr><td><code>LOW</code></td><td>Low reputation.</td></tr><tr><td><code>MEDIUM</code></td><td>Medium reputation. This is the default reputation.</td></tr><tr><td><code>HIGH</code></td><td>High reputation.</td></tr></tbody></table>

## TrendDirection

Shows how a metric has changed over a given period.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TREND_DIRECTION_UNSPECIFIED</code></td><td>Unspecified trend direction.</td></tr><tr><td><code>DOWN</code></td><td>The trend is down.</td></tr><tr><td><code>NEUTRAL</code></td><td>The trend did not change.</td></tr><tr><td><code>UP</code></td><td>The trend is up.</td></tr></tbody></table>

## AgentUnsubscribeReasonMetrics

| JSON representation |
| --- |
| ``` {   "notSignedUpPercentage": integer,   "tooManyMessagesPercentage": integer,   "noLongerInterestedPercentage": integer,   "spamPercentage": integer,   "otherPercentage": integer } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>notSignedUpPercentage</code></td><td><p><code>integer</code></p><p>Percentage of users who chose "Not signed up" as the reason for unsubscribing.</p></td></tr><tr><td><code>tooManyMessagesPercentage</code></td><td><p><code>integer</code></p><p>Percentage of users who chose "Too many messages" as the reason for unsubscribing.</p></td></tr><tr><td><code>noLongerInterestedPercentage</code></td><td><p><code>integer</code></p><p>Percentage of users who chose "No longer interested" as the reason for unsubscribing.</p></td></tr><tr><td><code>spamPercentage</code></td><td><p><code>integer</code></p><p>Percentage of users who chose "Spam" as the reason for unsubscribing.</p></td></tr><tr><td><code>otherPercentage</code></td><td><p><code>integer</code></p><p>Percentage of users who chose "Other" as the reason for unsubscribing.</p></td></tr></tbody></table>