# AgentVerification

Source: https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/AgentVerification

Details about the verification information for an agent.

## JSON Representation

```json
{
  "name": string,
  "verificationState": enum (VerificationState),
  "agentVerificationContact": {
    object (AgentVerificationContact)
  }
}
```

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | The identifier for verification |
| `verificationState` | enum (VerificationState) | The verification state of the agent |
| `agentVerificationContact` | object (AgentVerificationContact) | Required. The contact details for verification |

## VerificationState Enum

| Value | Description |
|-------|-------------|
| `VERIFICATION_STATE_UNSPECIFIED` | Unspecified state |
| `VERIFICATION_STATE_UNVERIFIED` | Unverified state |
| `VERIFICATION_STATE_PENDING` | Verification in progress |
| `VERIFICATION_STATE_VERIFIED` | Verification complete |
| `VERIFICATION_STATE_SUSPENDED_IN_GMB` | Google My Business listing no longer verified (deprecated) |
