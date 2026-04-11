---
type: query
title: "STOP Keyword and Opt-Out Handling"
query: "How do I handle user unsubscribe/opt-out requests in RBM, and what messages can I still send after they opt out?"
answered: 2026-04-10
tags: [opt-out, subscribe, compliance, stop-keywords]
---

## Answer

Users can unsubscribe from non-essential messages via the chat menu. Partners must comply with these preferences and follow strict business rules about what messages can still be sent.

### Unsubscribe Flow

1. User selects **Unsubscribe** in chat menu
2. Google Messages sends country-specific keyword to agent
3. RBM platform sends `UNSUBSCRIBE` event to your webhook
4. Partner **must** stop non-essential messages immediately

### Country-Specific Keywords

| Country | Unsubscribe Keyword | Resubscribe Keyword |
|---------|---------------------|---------------------|
| US, IN, GB, DE | STOP | START |
| ES, MX | BAJA | ALTA |
| FR | STOP | — |
| BR | parar | — |

### Post-Unsubscribe Rules

**PROHIBITED (non-essential):**
- Marketing messages
- Promotional offers
- Sales campaigns
- Newsletters

**PERMITTED (essential):**
- Authentication (OTPs)
- User-requested notifications with explicit consent
- Unsubscribe confirmation with link to manage preferences

### Handling Unsubscribe Event

```javascript
// Webhook handler
if (event.type === 'UNSUBSCRIBE') {
  const userPhone = event.senderPhoneNumber;
  
  // Update database
  await updateUserPreference(userPhone, { subscribed: false });
  
  // Send confirmation (optional, but recommended)
  await sendMessage(userPhone, {
    text: "You've unsubscribed. You'll still receive essential messages like OTPs. Manage preferences: [link]",
    trafficType: "ACKNOWLEDGEMENT"
  });
}
```

### Resubscribe Flow

1. User selects **Subscribe** in chat menu
2. Google Messages sends resubscribe keyword
3. Platform sends `SUBSCRIBE` event to webhook
4. All message types permitted again

### Compliance Monitoring

Google monitors message patterns after unsubscribe to identify policy violations:
- Analytics track unsubscribe reasons (spam, never signed up, too many messages, etc.)
- Violations can impact reputation score and carrier approval
- Persistent violations may result in agent suspension

### Best Practices

- Implement STOP flow as **prerequisite for launch**
- Send immediate acknowledgment with preferences link
- If user messages after unsubscribe, consider it a potential resubscribe request
- Maintain subscription status if user resubscribes outside messaging channel

## Sources Consulted

- [subscribe-unsubscribe](../concepts/subscribe-unsubscribe.md)
- [receive-events](../sources/receive-events.md)
- [analytics-reputation](../concepts/analytics-reputation.md)
- [create-launch-agent](../workflows/create-launch-agent.md)

## New Insights

None — subscribe/unsubscribe handling is well documented in the wiki.
