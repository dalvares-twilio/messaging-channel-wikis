---
type: entity
title: "Render Deployment"
entity_type: service
---

## Description

Render is a cloud platform used in the official Meta documentation as the recommended way to deploy a test webhook endpoint. It provides free-tier hosting suitable for development and testing.

## Test Endpoint Setup

### Requirements
- Render account
- GitHub account with repo containing `app.js`

### Configuration

| Setting | Value |
|---------|-------|
| Build command | `npm install express` |
| Start command | `node app.js` |
| Environment variable | `VERIFY_TOKEN` = your chosen string |

### Deployment Flow

1. Create GitHub repo with Express webhook handler
2. Connect repo to Render
3. Set environment variables
4. Deploy — Render builds and starts the app
5. Copy deployed URL from Render dashboard
6. Add URL to Meta App Dashboard

## Console Output

When properly configured, Render's app log shows:
- `Listening on port 3000` on startup
- `WEBHOOK VERIFIED` when Meta verifies endpoint
- `Webhook received <timestamp>` + JSON for each incoming webhook

![[Knowledge-Bases/Channels/Meta/raw/assets/518314752_779138407775567_4233589617658404934_n.png]]

## Limitations

- **Testing only**: Not recommended for production
- **Cold starts**: Free tier may have latency
- **Logging**: Console output only, no persistent storage

## Related Concepts
- [[webhook-verification]]
- [[webhooks]]

## Sources
- [[create-test-webhook-endpoint]]
