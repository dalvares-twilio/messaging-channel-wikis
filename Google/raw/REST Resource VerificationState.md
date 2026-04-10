# VerificationState

Source: https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/VerificationState

The state of information verification for brands or agents.

## Enum Values

| Value | Description |
|-------|-------------|
| `VERIFICATION_STATE_UNSPECIFIED` | Unspecified state |
| `VERIFICATION_STATE_UNVERIFIED` | Unverified state |
| `VERIFICATION_STATE_PENDING` | Brand verification for Google-managed launches is in progress. Carrier-managed launches use their own brand verification processes. |
| `VERIFICATION_STATE_VERIFIED` | Verification complete |
| `VERIFICATION_STATE_SUSPENDED_IN_GMB` | Associated Google My Business listing is no longer verified (only applicable for locations). Reverifying in GMB automatically reverifies in Business Communications. |

## Notes

- Google-managed launches use this verification state
- Carrier-managed launches have their own verification processes
- GMB suspension only applies to location-based agents
