---
type: entity
title: "POST Webhook Request"
entity_type: request
---

## Description

POST webhook requests are sent by Meta to your endpoint when webhook events are triggered for fields you've subscribed to. Each POST contains a JSON payload describing the event.

## Request Format

```
POST <CALLBACK_URL>
Content-Type: application/json
X-Hub-Signature-256: sha256=<HMAC_HASH>
Content-Length: <LENGTH>

<JSON_PAYLOAD>
```

## Headers

| Header | Description |
|--------|-------------|
| `Content-Type` | Always `application/json` |
| `X-Hub-Signature-256` | HMAC-SHA256 signature for validation |
| `Content-Length` | Payload size in bytes |

## Signature Validation

The `X-Hub-Signature-256` header contains an HMAC-SHA256 hash:
1. Computed using the JSON payload as message
2. Using your **app secret** as the key
3. Prefixed with `sha256=`

**Validation steps:**
1. Compute HMAC-SHA256(payload, app_secret)
2. Compare to header value (after `sha256=` prefix)
3. If match: payload is authentic
4. If no match: discard payload

## Required Response

- **On valid payload**: HTTP `200`
- **On invalid payload**: HTTP `4xx`

## Delivery Characteristics

| Property | Value |
|----------|-------|
| Max payload size | 3 MB |
| Batching | Up to 1000 updates (not guaranteed) |
| Retry on failure | Immediate, then decreasing frequency for 36 hours |

## Implementation Example

```javascript
const crypto = require('crypto');

app.post('/', (req, res) => {
  const signature = req.headers['x-hub-signature-256'];
  const payload = JSON.stringify(req.body);
  
  const expected = 'sha256=' + crypto
    .createHmac('sha256', process.env.APP_SECRET)
    .update(payload)
    .digest('hex');
  
  if (signature === expected) {
    // Process payload
    console.log(JSON.stringify(req.body, null, 2));
    res.status(200).end();
  } else {
    res.status(403).end();
  }
});
```

## Important Notes

- Meta does not offer APIs for fetching historical webhook data
- You must capture and store payloads yourself
- Handle deduplication for retried webhooks

## Related Concepts
- [webhooks](webhooks.md)
- [webhook-security](webhook-security.md)

## Related Entities
- [get-verification-request](get-verification-request.md)
- [messages-webhook](messages-webhook.md)

## Sources
- [create-webhook-endpoint](create-webhook-endpoint.md)
