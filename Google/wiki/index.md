# Google RCS for Business — Wiki Index

## Sources (31)

### Setup & Configuration
- [[wiki/sources/partner-account-setup]] — Partner account, partner webhook, service account, user roles
- [[wiki/sources/create-agent]] — Agent creation, regions, billing categories, use cases
- [[wiki/sources/edit-agent-info]] — Agent info, branding, status stages, immutability
- [[wiki/sources/manage-agents]] — Archiving/unarchiving agents, bulk operations
- [[wiki/sources/test-devices]] — Tester invites, RCS enablement, device management

### Launch & Verification
- [[wiki/sources/verify-launch-overview]] — Launch process overview, Google vs carrier-managed
- [[wiki/sources/brand-verification]] — Brand verification requirements and workflow
- [[wiki/sources/launch-approval]] — Prerequisites, timeline, approval process
- [[wiki/sources/list-carriers]] — Listing carrier regions via API

### Messaging
- [[wiki/sources/send-messages]] — Sending text, rich cards, media; TTL, traffic types, size limits
- [[wiki/sources/receive-messages]] — Handling text, suggestions, locations, files from users
- [[wiki/sources/revoke-messages]] — Revoking undelivered messages
- [[wiki/sources/send-events]] — READ and IS_TYPING events to users
- [[wiki/sources/receive-events]] — User events, platform events, subscribe/unsubscribe
- [[wiki/sources/capability-checks]] — Device capability checks, bulk checks

### Integration
- [[wiki/sources/webhooks]] — Webhook setup, security, async processing
- [[wiki/sources/deep-links]] — SMS deep links, QR codes, fallback
- [[wiki/sources/dialogflow-integration]] — Dialogflow NLU integration
- [[wiki/sources/sync-async-operations]] — Sync requests vs async delivery

### Management API
- [[wiki/sources/management-api-overview]] — API overview, authentication, workflow
- [[wiki/sources/manage-brands-api]] — Brand CRUD operations
- [[wiki/sources/manage-testers-api]] — Tester management via API
- [[wiki/sources/manage-webhooks-api]] — Webhook integration via API
- [[wiki/sources/manage-agents-extended]] — Full agent lifecycle with code examples

### API Reference (Schemas)
- [[wiki/sources/api-reference-overview]] — Business Communications API endpoints
- [[wiki/sources/api-resource-agents]] — Agent resource schema, enums, fields
- [[wiki/sources/api-resource-agent-launch]] — AgentLaunch resource, questionnaire, region launch
- [[wiki/sources/api-resource-agent-verification]] — AgentVerification resource and states
- [[wiki/sources/api-resource-agent-verification-contact]] — Partner and brand contact details
- [[wiki/sources/api-resource-verification-state]] — VerificationState enum values
- [[wiki/sources/api-resource-phone]] — Phone number resource (E.164)
- [[wiki/sources/api-resource-integrations]] — Webhook and Dialogflow integration schemas
- [[wiki/sources/api-resource-partners]] — Partner resource schema

### Analytics
- [[wiki/sources/analytics-overview]] — Reputation, traffic limits, spam trends
- [[wiki/sources/agent-analytics]] — Sent/delivered/read metrics, custom analytics

### Implementation Reference
- [[wiki/sources/ottm-implementation]] — Twilio OTTM client: defaults, retry semantics, immutability rules

## Concepts (15)

- [[wiki/concepts/agent-launch-event]] — Platform event payload, launch states, KYC mapping
- [[wiki/concepts/agent-lifecycle]] — Status progression, immutability points, archiving
- [[wiki/concepts/carrier-launch]] — Google-managed vs carrier-managed launch, verification
- [[wiki/concepts/use-cases]] — OTP, Transactional, Promotional, Multi-use
- [[wiki/concepts/billing-categories]] — Conversational vs Non-conversational
- [[wiki/concepts/regional-endpoints]] — NA, EU, APAC regions; data residency
- [[wiki/concepts/message-verification]] — HMAC-SHA512 with X-Goog-Signature
- [[wiki/concepts/async-processing]] — Webhook best practices, retry mechanism
- [[wiki/concepts/message-expiration]] — TTL, revocation, fallback strategies
- [[wiki/concepts/subscribe-unsubscribe]] — STOP/START keywords, opt-out rules
- [[wiki/concepts/analytics-reputation]] — Reputation score, traffic limits, metrics
- [[wiki/concepts/branding-guidelines]] — Logo, hero image, color requirements
- [[wiki/concepts/rcs-enablement]] — RCS status, enabling, tester requirements
- [[wiki/concepts/user-acquisition]] — Deep links, QR codes, conversation starters
- [[wiki/concepts/rich-cards]] — Standalone cards, carousels, media heights, suggestions

## Queries (1)

- [[wiki/queries/standalone-vs-carousel]] — When to use standalone cards vs carousels

## Entities (5)

- [[wiki/entities/rbm-api]] — RCS Business Messaging API for messaging
- [[wiki/entities/rbm-management-api]] — Business Communications API for agent lifecycle
- [[wiki/entities/developer-console]] — Web console for RBM management
- [[wiki/entities/google-messages]] — Android messaging app with RCS support
- [[wiki/entities/dialogflow]] — Google Cloud NLU for conversational AI

## Workflows (4)

| Page | Trigger | Outcome |
| --- | --- | --- |
| [[wiki/workflows/create-launch-agent]] | New RCS channel needed | Agent live on carriers |
| [[wiki/workflows/configure-webhook]] | Integrate RCS events | Secure async webhook running |
| [[wiki/workflows/add-test-device]] | Pre-launch testing | Device receiving test messages |
| [[wiki/workflows/setup-deep-links]] | Drive users to RCS | Deep links/QR codes working |
