---
type: query
title: "Webhook Retry Behavior"
query: "What happens when my webhook endpoint fails to respond? How does Meta handle retries?"
answered: 2026-04-10
tags: [webhooks, retries, delivery, reliability]
---

## Answer

When your webhook endpoint fails to respond or returns a non-2xx status, Meta implements a retry strategy:

### Retry Behavior

1. **Immediate retry** on initial failure
2. **Decreasing frequency** over time
3. **Maximum retry period**: 7 days (per webhooks-overview), or 36 hours (per create-webhook-endpoint)
4. **Retries go to all subscribed apps** - can cause duplicate deliveries

### Important Considerations

**Payload size:** Up to 3 MB per request

**Batching:** Up to 1000 updates per POST, but not guaranteed

**Duplicates:** Because retries go to all subscribed apps, you should design your system to handle duplicate webhooks idempotently using the message ID.

**No historical API:** There is no API to retrieve missed webhooks. You must capture and store payloads yourself.

### Best Practices

1. **Respond quickly** with HTTP 200 to acknowledge receipt
2. **Process asynchronously** - queue the payload and return immediately
3. **Use idempotency** - track message IDs to deduplicate
4. **Monitor delivery** - implement logging to detect missed webhooks
5. **Store payloads** - since there's no historical API, persist important webhooks

### Handling Failures

If you experience delivery issues:
- Check your endpoint is returning 200 status
- Verify TLS certificate is valid
- Ensure signature validation isn't incorrectly rejecting valid payloads
- Review logs for timeout issues

## Sources Consulted
- [webhooks-overview](../sources/webhooks-overview.md)
- [create-webhook-endpoint](../sources/create-webhook-endpoint.md)
- [webhooks](../concepts/webhooks.md)

## New Insights
There's a slight discrepancy between sources: webhooks-overview says 7 days retry, create-webhook-endpoint says 36 hours. The more conservative 36-hour figure may be for failed POSTs specifically.
