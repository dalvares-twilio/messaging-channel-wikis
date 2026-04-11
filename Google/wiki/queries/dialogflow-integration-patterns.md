---
type: query
title: "Dialogflow Integration Patterns"
query: "How do I integrate Dialogflow with an RBM agent? What patterns should I follow?"
answered: 2026-04-10
tags: [dialogflow, integration, nlu, patterns]
---

## Answer

Integrating Dialogflow with an RBM agent enables conversational AI without building custom NLU. The integration follows a delegation pattern where Dialogflow handles natural language understanding and response generation.

### Integration Architecture

1. **Initial Contact**: Start the conversation with a single RBM API call
2. **Handoff to Dialogflow**: Dialogflow takes over understanding and responding
3. **Rich Responses**: Dialogflow generates rich cards, suggestions, and media
4. **Webhook Fulfillment**: Dialogflow can call your backend via webhooks for dynamic responses

### Available Resources

Google provides an open-source Node.js integration module:
- Repository: [rbm-api-examples/dialogflow-integration](https://github.com/rcs-business-messaging/rbm-api-examples/tree/master/nodejs/dialogflow-integration/rbm-integration-module)
- Supports Dialogflow CX (latest version)
- Integrates with Google's latest AI technology
- Freely available to use and extend

### Key Benefits

- **No custom NLU development** required
- **Intent mapping** with pre-trained models
- **Natural language processing** for user input
- **Dynamic, personalized conversations** via webhook fulfillment
- **Rich response support** (cards, carousels, suggestions)

### Implementation Pattern

```
User Message → RBM Webhook → Dialogflow API → Intent Detection → Response Generation → RBM API → User
```

### Critical Consideration: Async Processing

Since RBM webhooks require immediate `200 OK` responses, the Dialogflow integration should:
1. Receive webhook notification
2. Return `200 OK` immediately
3. Queue the message for Dialogflow processing
4. Send Dialogflow's response back via RBM API asynchronously

This aligns with the [async-processing](../concepts/async-processing.md) best practices for RBM webhooks.

## Sources Consulted

- [dialogflow-integration](../sources/dialogflow-integration.md)
- [dialogflow](../entities/dialogflow.md)
- [async-processing](../concepts/async-processing.md)
- [webhooks](../sources/webhooks.md)

## New Insights

- Documentation lacks specifics on Dialogflow CX vs ES differences for RBM
- Fallback behavior when Dialogflow is unavailable not documented
- Rate limits for Dialogflow API calls from RBM context not specified
