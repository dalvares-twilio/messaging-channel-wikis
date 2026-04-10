# Partner Account Setup

Source: https://developers.google.com/business-communications/rcs-business-messaging/guides/get-started/partner-account

## Prerequisites

- Google Developer Account
- HTTPS webhook endpoint
- Service for handling webhook requests

## Partner Account Setup Steps

### 1. Register as a Partner

- Access the [Business Communications Developer Console](https://business-communications.cloud.google.com/)
- Sign in with your Google Account

### 2. Configure Partner Account Settings

#### Update Partner Information

Key fields to configure:
- Partner Name
- Display Name
- Technical Point of Contact
- Webhook URL

#### Manage Brands

- Add brands associated with your partner account
- Each brand can represent an organization or group
- Brands can have multiple agents

#### Manage Users

User Roles:
- **Owner**: Initial account creator
- **Manager**: Full console access
- **Reader**: Read-only access

### 3. Set Up Service Account

#### Generate Service Account Key

1. Navigate to "Service account" page
2. Click "Create key"
3. Download the service account key
4. Store key securely

### 4. Configure Partner Webhook

#### Webhook Configuration Requirements

- Must be HTTPS endpoint
- Accept POST requests
- Verify `clientToken`
- Return `200 OK` response with `secret` value

#### Webhook Validation Flow

When you configure your webhook URL, Google sends a validation request:

```json
{
  "clientToken": "YOUR_CLIENT_TOKEN",
  "secret": "RANDOM_SECRET_VALUE"
}
```

Your endpoint must:
1. Verify the `clientToken` matches your configured token
2. Return `200 OK` with the `secret` value as plain text body

#### Example Webhook Verification (Node.js)

```javascript
if (requestBody.message.data) {
  let userEventString = Buffer.from(requestBody.message.data, 'base64');
  let hmac = crypto.createHmac('sha512', CLIENT_TOKEN);
  let data = hmac.update(userEventString);
  let genHash = data.digest('base64');
  let headerHash = req.header('X-Goog-Signature');

  if (headerHash === genHash) {
    let userEvent = JSON.parse(userEventString);
    handleMessage(userEvent);
  }
}
```

### 5. Verify Incoming Messages

- Extract `X-Goog-Signature` header
- Base64-decode message payload
- Create SHA512 HMAC using client token
- Compare generated hash with received signature

## Partner Webhook vs Agent Webhook

- Partner webhook applies to ALL agents under your account
- Agent webhooks override partner webhook for specific agents
- Partner webhook is the default — configured once, used by all agents without their own webhook
