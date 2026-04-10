# AgentVerificationContact

Source: https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/AgentVerificationContact

Verification contact details for an agent, capturing essential information about the partner and brand representative.

## JSON Representation

```json
{
  "partnerName": string,
  "partnerEmailAddress": string,
  "brandContactName": string,
  "brandContactEmailAddress": string,
  "brandWebsiteUrl": string
}
```

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `partnerName` | string | Yes | Name of the partner requesting verification |
| `partnerEmailAddress` | string | Yes | Email address of the partner |
| `brandContactName` | string | Yes | Name of the brand representative who can verify launch details |
| `brandContactEmailAddress` | string | Yes | Email address of the brand representative |
| `brandWebsiteUrl` | string | Yes | Public website of the brand to verify the domain |

## Usage

Verification contact details are used for:
- Verifying the accuracy of launch information
- Confirming the partner's representation of the brand
- Establishing official contact points for the verification process
