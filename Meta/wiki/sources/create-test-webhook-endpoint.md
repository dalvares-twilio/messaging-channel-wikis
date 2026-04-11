---
type: source
title: Create a Test Webhook Endpoint
source_file: "[Create a test webhook endpoint](Create a test webhook endpoint.md)"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/set-up-whatsapp-echo-bot
ingested: 2026-04-05
tags:
  - webhooks
  - testing
  - render
  - nodejs
---

## Summary

A step-by-step guide to deploying a test webhook endpoint using Render and a simple Node.js/Express app. This is for testing purposes only — you must create your own production endpoint before going live. The test endpoint logs webhook payloads to the console for debugging.

## Key Points

- **Testing only**: Not for production use
- **Requirements**: Render account, GitHub account
- **Stack**: Node.js + Express
- **Output**: Console logging of webhook payloads with timestamps

## Setup Steps

### 1. Create GitHub Repository
Create `app.js` with Express server that:
- Handles GET verification (compares `VERIFY_TOKEN` env var)
- Handles POST payloads (logs JSON to console)

### 2. Deploy on Render
- **Build command**: `npm install express`
- **Start command**: `node app.js`
- **Environment variable**: `VERIFY_TOKEN` = your chosen string

![image](../../raw/assets/518314752_779138407775567_4233589617658404934_n.png)

### 3. Configure Meta App
Add deployed URL to App Dashboard > WhatsApp > Configuration:

![image](../../raw/assets/518348561_1679202599393717_3427225193188619311_n.png)

### 4. Verify and Test
- Render log shows "WEBHOOK VERIFIED" on successful verification
- Subscribe to `messages` field
- Send test webhook from dashboard

![image](../../raw/assets/516871315_2146397049169598_3394446764023076795_n.png)

![image](../../raw/assets/518357131_2083466912058941_6508814785021877118_n.png)

![image](../../raw/assets/516488905_709538035232698_4800340255912767794_n.png)

## Troubleshooting

- Verify URL was added correctly to Meta App
- Confirm subscription to `messages` field
- Test webhooks work in both Dev and Live modes

## Related Concepts
- [webhook-verification](webhook-verification.md)
- [webhooks](webhooks.md)

## Related Entities
- [render-deployment](render-deployment.md)
- [get-verification-request](get-verification-request.md)
