# Google RCS for Business — Wiki Index

## Sources (31)

### Setup & Configuration
- [partner-account-setup](sources/partner-account-setup.md) — Partner account, partner webhook, service account, user roles
- [create-agent](sources/create-agent.md) — Agent creation, regions, billing categories, use cases
- [edit-agent-info](sources/edit-agent-info.md) — Agent info, branding, status stages, immutability
- [manage-agents](sources/manage-agents.md) — Archiving/unarchiving agents, bulk operations
- [test-devices](sources/test-devices.md) — Tester invites, RCS enablement, device management

### Launch & Verification
- [verify-launch-overview](sources/verify-launch-overview.md) — Launch process overview, Google vs carrier-managed
- [brand-verification](sources/brand-verification.md) — Brand verification requirements and workflow
- [launch-approval](sources/launch-approval.md) — Prerequisites, timeline, approval process
- [list-carriers](sources/list-carriers.md) — Listing carrier regions via API

### Messaging
- [send-messages](sources/send-messages.md) — Sending text, rich cards, media; TTL, traffic types, size limits
- [receive-messages](sources/receive-messages.md) — Handling text, suggestions, locations, files from users
- [revoke-messages](sources/revoke-messages.md) — Revoking undelivered messages
- [send-events](sources/send-events.md) — READ and IS_TYPING events to users
- [receive-events](sources/receive-events.md) — User events, platform events, subscribe/unsubscribe
- [capability-checks](sources/capability-checks.md) — Device capability checks, bulk checks

### Integration
- [webhooks](sources/webhooks.md) — Webhook setup, security, async processing
- [deep-links](sources/deep-links.md) — SMS deep links, QR codes, fallback
- [dialogflow-integration](sources/dialogflow-integration.md) — Dialogflow NLU integration
- [sync-async-operations](sources/sync-async-operations.md) — Sync requests vs async delivery

### Management API
- [management-api-overview](sources/management-api-overview.md) — API overview, authentication, workflow
- [manage-brands-api](sources/manage-brands-api.md) — Brand CRUD operations
- [manage-testers-api](sources/manage-testers-api.md) — Tester management via API
- [manage-webhooks-api](sources/manage-webhooks-api.md) — Webhook integration via API
- [manage-agents-extended](sources/manage-agents-extended.md) — Full agent lifecycle with code examples

### API Reference (Schemas)
- [api-reference-overview](sources/api-reference-overview.md) — Business Communications API endpoints
- [api-resource-agents](sources/api-resource-agents.md) — Agent resource schema, enums, fields
- [api-resource-agent-launch](sources/api-resource-agent-launch.md) — AgentLaunch resource, questionnaire, region launch
- [api-resource-agent-verification](sources/api-resource-agent-verification.md) — AgentVerification resource and states
- [api-resource-agent-verification-contact](sources/api-resource-agent-verification-contact.md) — Partner and brand contact details
- [api-resource-verification-state](sources/api-resource-verification-state.md) — VerificationState enum values
- [api-resource-phone](sources/api-resource-phone.md) — Phone number resource (E.164)
- [api-resource-integrations](sources/api-resource-integrations.md) — Webhook and Dialogflow integration schemas
- [api-resource-partners](sources/api-resource-partners.md) — Partner resource schema

### Analytics
- [analytics-overview](sources/analytics-overview.md) — Reputation, traffic limits, spam trends
- [agent-analytics](sources/agent-analytics.md) — Sent/delivered/read metrics, custom analytics

### Implementation Reference
- [ottm-implementation](sources/ottm-implementation.md) — Twilio OTTM client: defaults, retry semantics, immutability rules

## Concepts (15)

- [agent-launch-event](concepts/agent-launch-event.md) — Platform event payload, launch states, KYC mapping
- [agent-lifecycle](concepts/agent-lifecycle.md) — Status progression, immutability points, archiving
- [carrier-launch](concepts/carrier-launch.md) — Google-managed vs carrier-managed launch, verification
- [use-cases](concepts/use-cases.md) — OTP, Transactional, Promotional, Multi-use
- [billing-categories](concepts/billing-categories.md) — Conversational vs Non-conversational
- [regional-endpoints](concepts/regional-endpoints.md) — NA, EU, APAC regions; data residency
- [message-verification](concepts/message-verification.md) — HMAC-SHA512 with X-Goog-Signature
- [async-processing](concepts/async-processing.md) — Webhook best practices, retry mechanism
- [message-expiration](concepts/message-expiration.md) — TTL, revocation, fallback strategies
- [subscribe-unsubscribe](concepts/subscribe-unsubscribe.md) — STOP/START keywords, opt-out rules
- [analytics-reputation](concepts/analytics-reputation.md) — Reputation score, traffic limits, metrics
- [branding-guidelines](concepts/branding-guidelines.md) — Logo, hero image, color requirements
- [rcs-enablement](concepts/rcs-enablement.md) — RCS status, enabling, tester requirements
- [user-acquisition](concepts/user-acquisition.md) — Deep links, QR codes, conversation starters
- [rich-cards](concepts/rich-cards.md) — Standalone cards, carousels, media heights, suggestions

## Queries (29)

### Agent Lifecycle & Configuration
- [agent-status-progression](queries/agent-status-progression.md) — Agent lifecycle stages and field immutability
- [agent-deletion-constraints](queries/agent-deletion-constraints.md) — Why agents can't be deleted and archiving options
- [use-case-selection](queries/use-case-selection.md) — Choosing OTP, Transactional, Promotional, or Multi-use
- [billing-category-differences](queries/billing-category-differences.md) — Conversational vs Non-conversational billing
- [regional-endpoint-selection](queries/regional-endpoint-selection.md) — Choosing NA, EU, or APAC region for data residency

### Verification & Launch
- [verification-failure-handling](queries/verification-failure-handling.md) — Verification states, rejection handling, retry paths
- [brand-verification-requirements](queries/brand-verification-requirements.md) — Brand verification process and requirements
- [google-managed-vs-carrier-managed](queries/google-managed-vs-carrier-managed.md) — Launch type comparison and identification

### Webhook & Security
- [async-webhook-best-practices](queries/async-webhook-best-practices.md) — Why webhooks must process asynchronously
- [webhook-security-hmac](queries/webhook-security-hmac.md) — HMAC-SHA512 webhook security verification
- [webhook-failure-impact](queries/webhook-failure-impact.md) — Webhook failure impact, shared queue, recovery

### Testing
- [test-device-troubleshooting](queries/test-device-troubleshooting.md) — Common test device errors and fixes
- [test-device-limits](queries/test-device-limits.md) — Test device invite limits and management

### TTL & Message Expiration
- [ttl-otp-strategy](queries/ttl-otp-strategy.md) — TTL strategy for OTP messages with fallback
- [ttl-promotional-messages](queries/ttl-promotional-messages.md) — TTL strategy for promotional messages
- [ttl-and-fallback-strategy](queries/ttl-and-fallback-strategy.md) — TTL configuration and SMS fallback strategy

### Opt-Out Handling
- [stop-keyword-handling](queries/stop-keyword-handling.md) — Handling STOP keywords and opt-out compliance

### Rich Cards & Carousels
- [standalone-vs-carousel](queries/standalone-vs-carousel.md) — When to use standalone cards vs carousels
- [rich-card-height-selection](queries/rich-card-height-selection.md) — How to choose rich card media height (Short/Medium/Tall)
- [carousel-card-limit](queries/carousel-card-limit.md) — Optimal number of cards in a carousel

### Analytics & Reputation
- [reputation-score-impact](queries/reputation-score-impact.md) — How reputation score affects messaging capacity
- [custom-analytics-tracking](queries/custom-analytics-tracking.md) — Building custom analytics beyond Console metrics

### Deep Links & User Acquisition
- [deep-link-fallback](queries/deep-link-fallback.md) — Deep link fallback behavior for non-RCS devices
- [qr-code-best-practices](queries/qr-code-best-practices.md) — QR code best practices for RCS conversations

### Capability Checks
- [capability-check-before-messaging](queries/capability-check-before-messaging.md) — Device capability checks and fallback strategies
- [bulk-capability-check-usage](queries/bulk-capability-check-usage.md) — Bulk vs single capability check usage

### Dialogflow Integration
- [dialogflow-integration-patterns](queries/dialogflow-integration-patterns.md) — Dialogflow NLU integration patterns and architecture

### Sync/Async Operations
- [sync-vs-async-operations](queries/sync-vs-async-operations.md) — Synchronous vs asynchronous operation patterns
- [message-traffic-types](queries/message-traffic-types.md) — Traffic types and multi-use agent requirements

## Entities (5)

- [rbm-api](entities/rbm-api.md) — RCS Business Messaging API for messaging
- [rbm-management-api](entities/rbm-management-api.md) — Business Communications API for agent lifecycle
- [developer-console](entities/developer-console.md) — Web console for RBM management
- [google-messages](entities/google-messages.md) — Android messaging app with RCS support
- [dialogflow](entities/dialogflow.md) — Google Cloud NLU for conversational AI

## Workflows (4)

| Page | Trigger | Outcome |
| --- | --- | --- |
| [create-launch-agent](workflows/create-launch-agent.md) | New RCS channel needed | Agent live on carriers |
| [configure-webhook](workflows/configure-webhook.md) | Integrate RCS events | Secure async webhook running |
| [add-test-device](workflows/add-test-device.md) | Pre-launch testing | Device receiving test messages |
| [setup-deep-links](workflows/setup-deep-links.md) | Drive users to RCS | Deep links/QR codes working |
