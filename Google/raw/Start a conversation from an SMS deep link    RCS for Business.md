---
title: "Start a conversation from an SMS deep link  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/deeplinks"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Users can initiate a conversation with an agent via an SMS deep link URL embedded in various places like emails, websites, apps, or physical locations using buttons, links, or QR codes.
- When a user opens an agent's URL, the outcome can be a successful RBM conversation, a fallback to a phone number, or an error message, depending on whether specific criteria are met and if a fallback number is provided.
- Agent URLs can be created in two formats: using only the service ID, which doesn't support fallback numbers and results in an error if a conversation can't be established, or using a phone number and service ID, which allows for a fallback option.
- Including a URL-encoded `body` parameter in the agent URL can pre-fill the message input field for a smoother user experience.
- Using a short link that redirects to the agent URL is a best practice for QR codes, offering benefits like future-proofing and seamless fallback handling.

Users can start a conversation with your agent from an SMS deep link URL. Where you place the URL depends on your use case. You might place it in an email, a website, an app, or a physical location—wherever you can embed the URL as a button, link, or QR code.

Manually navigating to an agent's URL (by copying and pasting it, for example) doesn't work because of browser security measures. You must embed the URL in a button, link, or QR code.

## The user experience

When the user opens your agent's URL, there are three possible outcomes: success, fallback, or error.

### Success

The user enters a successful RBM conversation. For the conversation to start successfully, all of the following criteria must be met:

- Google Messages is installed on their device (minimum version `messages.android_20241029_00`).
- RCS chats are enabled in Messages.
- Your RBM agent is launched on the user's carrier.

### Fallback

The user is routed to a fallback phone number or shortcode. This occurs if *any* of the success criteria are not met *and* a fallback number has been provided in the URL.

### Error

The user sees an error message and a link to the [Messages Help Center](https://support.google.com/messages/answer/7513219#zippy=%2Ctroubleshoot-conversation-not-available) to explain why the agent may not be available and to help the user with troubleshooting.

This occurs if *any* of the success criteria are not met *and* a fallback number has *not* been provided.

## Create the agent URL

You can create URLs in two formats, as defined in [GSMA RCC.07 v.14.0](https://www.gsma.com/solutions-and-impact/technologies/networks/wp-content/uploads/2024/06/RCC.07-v14.0.pdf), section 3.6.3.4.

For security reasons, these formats don't support pre-filled suggested replies or suggested actions within the URL.

### Format 1: Use only the service ID

```
sms:bot%40botplatform.example.com?body=tell%20me%20about%20checking%20accounts
```
- `sms:bot%40botplatform.example.com`: Unique service ID for your agent.
- `&body=tell%20me%20about%20checking%20accounts`: Optional [pre-filled message](#pre-filled_message) the user will see when they open the RBM conversation with your agent.

**Limitation**: This format can't include a fallback phone number. If an RBM conversation can't be established, the user will receive an [error](#error) message.

### Format 2: Use a phone number and service ID

```
sms:+15554443333?service_id=bot%40botplatform.example.com&body=tell%20me%20about%20checking%20accounts
```
- `+15554443333`: Phone number in E.164 format or valid short code associated with your agent.
- `service_id=bot%40botplatform.example.com`: Unique service ID for your agent.
- `body=tell%20me%20about%20checking%20accounts`: Optional [pre-filled message](#pre-filled_message) the user will see when they open the RBM conversation with your agent.

## Pre-filled message

To provide a smoother user experience, you can pre-fill the message input field when the RBM conversation opens. This allows users to quickly send a relevant message by tapping the send button.

To include a pre-filled message, use the `body` parameter in the URL. The body parameter must be URL-encoded. For example, spaces should be replaced with `%20`.

The message should align with the user's intent and your brand's goals. Here's an example from a wellness brand: `sms:bot%40botplatform.example.com?body=make%20an%20appointment.` When the user taps this link, their messaging app will open the chat with the pre-filled message "Make an appointment."

![[pre-filled-message.png|Pre-filled message]]

## Best practices

When incorporating QR codes into your brand's materials, always create a short link that redirects users to the agent URL (for example, [https://short.link/abc123](https://short.link/abc123)). Here are the benefits of using a short link:

- **Future-proofing**: You can update the agent URL behind the short link if needed, with no need to reprint materials with a new QR code.
- **Seamless fallback**: Prevent user confusion about the URL if they're redirected to a fallback option.

## SMS link creator

To create an SMS link and generate a QR code for your agent, enter the following information and then click **Create SMS Link**:

- **Agent ID** (required). Your agent ID can be found in the Agent overview in the [Business Communications Developer Console](https://business-communications.cloud.google.com/?utm_source=/business-communications/rcs-business-messaging/guides/build/deeplinks&utm_medium=devsite&utm_campaign=rcs-business-messaging).
- **Fallback Phone Number** (optional).
- **Draft message** (optional).
<iframe src="https://developers.google.com/frame/business-communications/rcs-business-messaging/guides/build/deeplinks/index_c518ad8fa7a9c68df5865f3d99bd209e4c9a5d76eed221c465afca41cffe50a7.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe>