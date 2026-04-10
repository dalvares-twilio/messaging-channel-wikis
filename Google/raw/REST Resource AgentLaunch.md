# AgentLaunch

Source: https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/AgentLaunch

Details for launching an RCS Business Messaging agent across different regions.

## JSON Representation

```json
{
  "name": string,
  "rcsBusinessMessaging": {
    object (RcsBusinessMessagingLaunch)
  }
}
```

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Required. Identifier for the launch |
| `rcsBusinessMessaging` | object (RcsBusinessMessagingLaunch) | Launch details for an RCS Business Messaging agent |

## RcsBusinessMessagingLaunch

```json
{
  "questionnaire": object(Questionnaire),
  "launchDetails": {
    string: object(RcsBusinessMessagingRegionLaunch)
  },
  "launchRegion": enum(LaunchRegion)
}
```

| Field | Type | Description |
|-------|------|-------------|
| `questionnaire` | object (Questionnaire) | Required. Questionnaire about agent launch details |
| `launchDetails` | map<string, RcsBusinessMessagingRegionLaunch> | Required. Launch details for supported regions |
| `launchRegion` | enum (LaunchRegion) | **Deprecated**. Launch region field |

## Questionnaire

```json
{
  "contacts": [Contact],
  "optinDescription": string,
  "triggerDescription": string,
  "interactionsDescription": string,
  "optoutDescription": string,
  "agentAccessInstructions": string,
  "videoUris": [string],
  "screenshotUris": [string]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `contacts` | array (Contact) | Yes | Point of contact information |
| `optinDescription` | string | No | How opt-in is obtained |
| `triggerDescription` | string | Yes | Description of message trigger actions |
| `interactionsDescription` | string | Yes | Description of user interactions |
| `optoutDescription` | string | Yes | Description of opt-out messaging |
| `agentAccessInstructions` | string | Yes | Agent access instructions |
| `videoUris` | array (string) | No | Video URIs for review |
| `screenshotUris` | array (string) | No | Screenshot URIs for review |

## Contact

```json
{
  "name": string,
  "title": string,
  "email": string
}
```

## LaunchRegion Enum (Deprecated)

| Value | Description |
|-------|-------------|
| `LAUNCH_REGION_UNSPECIFIED` | Unspecified |
| `NORTH_AMERICA` | North America |
| `EUROPE` | Europe |
| `ASIA_PACIFIC` | Asia Pacific |
