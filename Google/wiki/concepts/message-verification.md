---
type: concept
title: "Message Verification"
aliases: [webhook security, HMAC verification, X-Goog-Signature]
sources: 1
---

## Overview

Incoming webhook messages must be verified to confirm they originate from Google. This prevents processing fraudulent messages from malicious actors.

## Details

### Verification Process

1. Extract `X-Goog-Signature` header (hashed, base64-encoded message body)
2. Base64-decode the RBM payload from `message.body`
3. Create SHA512 HMAC of decoded payload bytes using `clientToken` as key
4. Base64-encode the HMAC result
5. Compare with `X-Goog-Signature`
   - **Match** → message from Google, process it
   - **No match** → investigate hashing process or report potential fraud

### Code Pattern (Node.js)

```javascript
let userEventString = Buffer.from(requestBody.message.data, 'base64');
let hmac = crypto.createHmac('sha512', CLIENT_TOKEN);
let genHash = hmac.update(userEventString).digest('base64');
let headerHash = req.header('X-Goog-Signature');

if (headerHash === genHash) {
  // Process message
}
```

### clientToken

- Provided when configuring webhook in Developer Console
- Must be kept secure — it's the shared secret for verification

## Related

- [[wiki/concepts/async-processing]]

## Related Workflows

- [[wiki/workflows/configure-webhook]] — Set up secure async webhook

## Sources

- [[wiki/sources/webhooks]]
