---
type: concept
title: "Webhook Verification"
aliases: [verification handshake, callback verification]
sources: 3
---

## Overview

Webhook verification is the handshake process Meta uses to confirm you own and control your webhook endpoint. It occurs whenever you set or edit the Callback URL or Verify token in the App Dashboard.

## How It Works

Meta sends a GET request to your endpoint with three query parameters:

```
GET <CALLBACK_URL>?hub.mode=subscribe&hub.challenge=<RANDOM>&hub.verify_token=<YOUR_TOKEN>
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `hub.mode` | Always `subscribe` |
| `hub.challenge` | Random string Meta generates |
| `hub.verify_token` | The verify token you configured |

### Validation Steps

1. Check that `hub.verify_token` matches your stored token
2. If match: respond with HTTP 200 and return `hub.challenge` as body
3. If no match: respond with 403 (or any non-200)

### Success Criteria

Meta considers verification successful when:
- Response status is 200
- Response body equals `hub.challenge` value

After verification, Meta begins sending webhooks to your endpoint.

## Implementation Example (Node.js)

```javascript
app.get('/', (req, res) => {
  const { 'hub.mode': mode, 'hub.challenge': challenge, 'hub.verify_token': token } = req.query;
  
  if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
    console.log('WEBHOOK VERIFIED');
    res.status(200).send(challenge);
  } else {
    res.status(403).end();
  }
});
```

## Related Concepts
- [[webhooks]]
- [[webhook-security]]

## Related Entities
- [[get-verification-request]]

## Sources
- [[create-webhook-endpoint]]
- [[create-test-webhook-endpoint]]
- [[webhooks-overview]]
