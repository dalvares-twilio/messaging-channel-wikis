# Phone

Source: https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/Phone

A phone number resource in the RCS for Business API.

## JSON Representation

```json
{
  "number": string
}
```

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `number` | string | Yes | Phone number in E.164 format or unformatted local/toll-free number |

## Notes

- Supports E.164 format (e.g., +14155551234)
- Also accepts unformatted local or toll-free numbers
