---
type: query
title: "Partner Webhook vs Agent Webhook Configuration"
query: "What is the difference between a partner-level webhook and an agent-level webhook in Google RCS?"
answered: 2026-04-10
tags: [webhook, partner, configuration, setup]
---

## Answer

Google RCS supports two webhook configuration levels with different scopes and use cases:

### Partner Webhook (Default)

- **Scope**: Receives events for ALL agents under your partner account
- **Configuration**: Set up during partner account registration
- **Location**: Business Communications Developer Console > Partner settings
- **Use case**: Default endpoint when no agent-specific webhook is configured

### Agent Webhook (Override)

- **Scope**: Receives events for a specific agent only
- **Configuration**: Set per-agent via API or Console
- **Use case**: When different agents need different backends or processing logic

### Key Differences

| Aspect | Partner Webhook | Agent Webhook |
|--------|-----------------|---------------|
| Scope | All agents | Single agent |
| Priority | Fallback | Takes precedence |
| Setup | Required during onboarding | Optional per-agent |
| Queue | Shared across all agents | Same shared queue |

### Important Considerations

1. **Shared Queue Architecture**: Both webhook types share a single delivery queue per partner. A failed webhook (partner OR agent level) impacts message delivery for all agents under that partner.

2. **Validation Requirements**: Both require the same HMAC-SHA512 verification and `clientToken`/`secret` handshake during setup.

3. **Recommendation**: Use partner webhook as the default, only configure agent-level webhooks when you have distinct routing requirements.

## Sources Consulted

- [partner-account-setup](../sources/partner-account-setup.md)
- [webhooks](../sources/webhooks.md)
- [async-processing](../concepts/async-processing.md)
- [message-verification](../concepts/message-verification.md)

## New Insights

- The shared queue architecture means webhook reliability at any level affects all agents
- Consider a single partner webhook with internal routing logic rather than multiple agent webhooks to simplify debugging
