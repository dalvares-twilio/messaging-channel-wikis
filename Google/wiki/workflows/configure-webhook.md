---
type: workflow
title: "Configure Webhook with Security"
trigger: "Integrate RCS events into your application"
outcome: "Secure async webhook receiving and processing RBM events"
prerequisites: [public-https-endpoint, message-queue]
estimated_time: "2-4 hours"
tags: [webhook, security, integration]
---

## Overview

Set up a webhook to receive RBM events (messages, delivery receipts, user actions) with proper async processing and HMAC security verification.

## Prerequisites

- Publicly accessible HTTPS endpoint
- Message queue system (SQS, Pub/Sub, RabbitMQ, etc.)
- `clientToken` from Developer Console (generated when configuring webhook)

## Steps

1. **Create Webhook Endpoint** — Must be publicly accessible HTTPS
   - URL format: `https://your-domain.com/rbm/webhook`
   - Must support POST requests
   - Must return `200 OK` immediately (within milliseconds)

2. **Implement Async Handler** — Critical for reliability
   ```
   POST /rbm/webhook
     → Validate request
     → Acknowledge immediately (200 OK)
     → Push to message queue
     → Return
   
   Queue Worker (separate process)
     → Pull from queue
     → Process message
     → Handle business logic
   ```
   **Never** process messages synchronously in the webhook handler.

3. **Add HMAC Verification** — Verify messages are from Google
   ```javascript
   // Node.js example
   const crypto = require('crypto');
   
   function verifySignature(req, clientToken) {
     const signature = req.headers['x-goog-signature'];
     const payload = Buffer.from(req.body.message.data, 'base64');
     
     const hmac = crypto.createHmac('sha512', clientToken);
     const expectedSignature = hmac.update(payload).digest('base64');
     
     return signature === expectedSignature;
   }
   
   // In webhook handler:
   if (!verifySignature(req, CLIENT_TOKEN)) {
     console.error('Invalid signature - potential fraud');
     return res.status(401).send('Unauthorized');
   }
   ```

4. **Register Webhook in Developer Console**
   - Navigate to agent settings → Webhooks
   - Enter your webhook URL
   - Save and note the generated `clientToken`
   - Store `clientToken` securely (environment variable, secrets manager)

5. **Test with Sample Payload**
   - Use Developer Console test feature
   - Or send test message from test device
   - Verify webhook receives event
   - Verify signature validation passes
   - Verify message queued successfully

## Verification

- [ ] Webhook returns 200 OK within 100ms
- [ ] HMAC signature verification working
- [ ] Messages queued for async processing
- [ ] Queue worker processing messages
- [ ] No 500 errors in webhook logs

## Troubleshooting

- **Issue**: Non-200 responses causing retry backoff
  **Solution**: Ensure webhook returns 200 OK immediately before any processing. Retries continue up to 7 days with max 600 second intervals.

- **Issue**: Messages not delivered to other agents
  **Solution**: RBM uses shared queue per partner. Failed webhooks for one agent impact delivery to all agents.

- **Issue**: DDoS protections blocking notifications
  **Solution**: Listed as common failure trigger in RBM docs. Review firewall rules for webhook endpoint.

- **Issue**: Database connection pool exhaustion
  **Solution**: Listed as common failure trigger. Use async processing — queue messages and process with controlled concurrency.

## Related

- [async-processing](../concepts/async-processing.md)
- [message-verification](../concepts/message-verification.md)

## Sources

- [webhooks](../sources/webhooks.md)
- [receive-messages](../sources/receive-messages.md)
- [receive-events](../sources/receive-events.md)
