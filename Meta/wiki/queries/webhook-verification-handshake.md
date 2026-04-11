---
type: query
title: "Webhook Verification Handshake"
query: "How does the webhook verification handshake work when setting up a WhatsApp webhook endpoint?"
answered: 2026-04-10
tags: [webhooks, verification, setup, handshake]
---

## Answer

The webhook verification handshake occurs whenever you set or edit the Callback URL or Verify token in the Meta App Dashboard. Meta sends a GET request to verify you own and control the endpoint.

**Meta sends a GET request:**
```
GET <CALLBACK_URL>?hub.mode=subscribe&hub.challenge=<RANDOM>&hub.verify_token=<YOUR_TOKEN>
```

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `hub.mode` | Always `subscribe` |
| `hub.challenge` | Random string Meta generates |
| `hub.verify_token` | The verify token you configured in the App Dashboard |

**Your endpoint must:**
1. Check that `hub.verify_token` matches your stored token
2. If match: respond with HTTP 200 and return `hub.challenge` as the response body
3. If no match: respond with 403 (or any non-200 status)

**Success criteria:**
- Response status is 200
- Response body equals the exact `hub.challenge` value

After successful verification, Meta begins sending webhook events to your endpoint.

**Example Node.js implementation:**
```javascript
app.get('/', (req, res) => {
  const { 'hub.mode': mode, 'hub.challenge': challenge, 'hub.verify_token': token } = req.query;
  
  if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.status(403).end();
  }
});
```

## Sources Consulted
- [webhook-verification](../concepts/webhook-verification.md)
- [create-webhook-endpoint](../sources/create-webhook-endpoint.md)
- [get-verification-request](../entities/get-verification-request.md)

## New Insights
None - the verification process is clearly documented. Key point: the challenge value must be returned as-is in the response body.
