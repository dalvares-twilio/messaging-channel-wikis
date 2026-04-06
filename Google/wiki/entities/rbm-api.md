---
type: entity
title: "RCS Business Messaging API"
entity_type: api
---

## Description

The RCS Business Messaging (RBM) API is Google's REST API for sending messages, events, and requests to users via RCS-enabled messaging apps. It's the core programmatic interface for RBM agent communication.

## Usage

- Send messages to users
- Send events (typing indicators, read receipts)
- Check user capabilities (RCS support)
- Receive messages/events via webhooks

### Regional Endpoints

Three regional endpoints available (North America, Europe, Asia Pacific) for compliance and latency optimization.

### Authentication

Requires service account key for API authentication. Set up via Google Cloud Console.

### Documentation

- [API Reference](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest)
- [Sample Agents](https://developers.google.com/business-communications/rcs-business-messaging/samples)

## Related

- [[wiki/entities/developer-console]]
- [[wiki/entities/rbm-management-api]]
- [[wiki/concepts/regional-endpoints]]

## Sources

- [[wiki/sources/webhooks]]
- [[wiki/sources/create-agent]]
- [[wiki/sources/test-devices]]
- [[wiki/sources/dialogflow-integration]]
