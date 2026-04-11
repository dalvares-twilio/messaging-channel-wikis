# Messaging Channels — Cross-Wiki Index

Unified index across all channel wikis. Enables cross-domain queries and synthesis.

---

## Wikis

| Wiki | Focus | Sources | Concepts | Entities |
|------|-------|---------|----------|----------|
| [[Google/wiki/index\|Google RCS]] | RCS Business Messaging | 31 | 15 | 5 |
| [[Meta/wiki/index\|Meta WhatsApp]] | WhatsApp Business Platform | 65 | 15 | 20 |
| [[Sender Management/wiki/index\|Sender Management]] | Twilio Sender ops | — | — | — |

---

## Cross-Domain Concepts

Concepts that span multiple channels:

| Concept | Google | Meta | Notes |
|---------|--------|------|-------|
| Webhooks | [[Google/wiki/concepts/async-processing]] | [[Meta/wiki/concepts/webhooks]] | Similar patterns, different auth |
| Agent/Sender Lifecycle | [[Google/wiki/concepts/agent-lifecycle]] | — | Meta uses WABA lifecycle |
| Message Verification | [[Google/wiki/concepts/message-verification]] | [[Meta/wiki/concepts/webhook-security]] | HMAC vs signature validation |
| Phone Numbers | — | [[Meta/wiki/concepts/phone-number-management]] | Google uses agent-centric model |
| Launch/Verification | [[Google/wiki/concepts/carrier-launch]] | [[Meta/wiki/concepts/business-verification]] | Different approval flows |

---

## Cross-Domain Questions

Questions that require synthesis across wikis:

- How do webhook security models differ between Google and Meta?
- What's the sender registration flow comparison across channels?
- Which channel has stricter launch requirements?
- How do message delivery guarantees compare?

---

## Statistics

| Metric | Total |
|--------|-------|
| Total sources | 96+ |
| Total concepts | 30+ |
| Total entities | 25+ |
| Wikis | 3 |

Last updated: 2026-04-10
