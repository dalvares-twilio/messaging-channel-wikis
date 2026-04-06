---
title: "Create a test webhook endpoint"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/set-up-whatsapp-echo-bot"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

*Only use this app for testing purposes.*

## Requirements

- A [Render⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.render.com%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExdzk4aWdSbU1aMnRFck9GbHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4qAwkn2KwqtTcOhyvJWgJOfc_E-6SF7MKKFWykFGcyg0-N-B-IKRCd6sL5EA_aem_wQ-9aRC851BV7ocV0mEAyw&h=AT4R8NzvfEcbGOdwEmA6Rb1qoUbbmT3_G25f9rz70CNcAhS7p3_cTiSqQQ8INrOm2oELw_UsS8qtsLO6gZKEHe7h1hhUvrGbT2LzuzM53_x4RmnI4RSjF8p3a6QGGgZJjss1s-CPgm4) account.
- A [GitHub⁠](https://www.github.com/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdzk4aWdSbU1aMnRFck9GbHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR6Jd0EGX0kPpw5zixBhgLJ0X2myeJdek3x2hhWX0koujUQpOntQeoNHJqjJ4w_aem_jz4E7HjnNp2DmcsAeZwxQg) account.

## Step 1: Create a GitHub repository

Sign into your GitHub account and create a new repo (public or private) with a name of your choice. Within the repo, create an `app.js` file and paste this code into it:

```
// Import Express.js
const express = require('express');

// Create an Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Set port and verify_token
const port = process.env.PORT || 3000;
const verifyToken = process.env.VERIFY_TOKEN;

// Route for GET requests
app.get('/', (req, res) => {
  const { 'hub.mode': mode, 'hub.challenge': challenge, 'hub.verify_token': token } = req.query;

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('WEBHOOK VERIFIED');
    res.status(200).send(challenge);
  } else {
    res.status(403).end();
  }
});

// Route for POST requests
app.post('/', (req, res) => {
  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);
  console.log(\`\n\nWebhook received ${timestamp}\n\`);
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).end();
});

// Start the server
app.listen(port, () => {
  console.log(\`\nListening on port ${port}\n\`);
});
```

## Step 2: Deploy a Node Express app on Render

- Skip step 1
- Use these settings for step 3:
	- Build command: `npm install express`
		- Start command: `node app.js`
		- In the **Environment Variables** section, add the variable `VERIFY_TOKEN` and set it to a string of your choice (e.g. `vibecode`).

When you’re done, click the **Deploy your web service** button. This will take you to the app log where you will see your app being built, which can take a few minutes. You’ll know it’s done when you see “Your service is live” in the log.

![[Knowledge-Bases/Channels/Meta/raw/assets/518314752_779138407775567_4233589617658404934_n.png]]

Copy your deployed test webhook app URL, which is displayed at the top of the page under your GitHub repo name. (If you view the URL, you’ll get a 403 error, which is expected).

## Step 3: Add your test webhook app URL to your Meta app

Open a new window/tab, and navigate to the (Meta) [App Dashboard](https://developers.facebook.com/apps) > **WhatsApp** > **Webhooks** > **Configuration** panel.

Paste your test webhook app URL in the **Callback URL** field, and add the `VERIFY_TOKEN` environment variable string you set earlier to the **Verify token** field, then click **Verify and save**.

![[Knowledge-Bases/Channels/Meta/raw/assets/518348561_1679202599393717_3427225193188619311_n.png]]

If verification is successful, the Meta app dashboard should refresh and you should see a list of webhook fields you can subscribe to.

*Subscribe to the **messages** webhook field if you haven’t already.*

Also, in Render’s app log, if you see “WEBHOOK VERIFIED”, your test webhook app URL has been successfully verified.

![[Knowledge-Bases/Channels/Meta/raw/assets/516871315_2146397049169598_3394446764023076795_n.png]]

## Step 4: Send a test message

Back in the Meta app dashboard **Configuration** panel, scroll down to the **messages** webhook field, subscribe to the field if you haven’t already, then click the **Test** link.

![[Knowledge-Bases/Channels/Meta/raw/assets/518357131_2083466912058941_6508814785021877118_n.png]]

This will send a test message to your test webhook app. Confirm that it appears in Render app log with “Webhook received” followed by a test JSON payload:

![[Knowledge-Bases/Channels/Meta/raw/assets/516488905_709538035232698_4800340255912767794_n.png]]

## Troubleshooting

If the test **messages** webhook doesn’t appear in the Render app dashboard log:

- Confirm that you successfully added your test webhook app URL to your Meta app (Step 3).
- Confirm that your app is subscribed to the **messages** webhook field.
- Make sure you are sending a **messages** test webhook; some test webhooks only work when your app is in Live mode, while others only work in Development mode (**messages** test webhooks work in both modes).

Did you find this page helpful?