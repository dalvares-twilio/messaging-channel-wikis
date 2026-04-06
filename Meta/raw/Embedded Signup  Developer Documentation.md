---
title: "Embedded Signup | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## Embedded Signup

Embedded Signup is an authentication and authorization desktop- and mobile-compatible interface that makes it easy for your business customers to generate the assets you will need to successfully onboard them to the WhatsApp Business Platform.

The Embedded Signup flow gathers business-related information from your business customers, automatically generates all WhatsApp assets needed by the platform, and grants your app access to these assets, so you can quickly provide your business customers with WhatsApp messaging services.

## How it works

Embedded Signup leverages the Facebook Login for Business product and our JavaScript SDK. Once configured, you can add a link or button to your website or portal that launches the flow.

Business customers who click the link or button will be presented with a new window where they can:

- authenticate their identity using their Facebook or Meta Business Credentials
- accept terms of service for Cloud API, WhatsApp Business, Meta, Marketing Messages Lite API and Meta Business Tool Terms
- select multiple WhatsApp APIs and accept terms of service
- grant your app access to their WhatsApp assets
- select an existing business portfolio or create a new one
- select an existing WhatsApp Business Account (WABA) or create a new one
- enter and verify their business phone number (their own, or one you have provided)
- enter a display name that can appear in place of their number in the WhatsApp client
![[531995822_1112262264200439_63249353490863536_n 1.png]]

Upon successful completion, Embedded Signup returns the customer’s WABA ID, business phone number ID, and an exchangeable token code, to the window that spawned the flow. You must send this data to your server and use it in a server-to-server call to:

- exchange the code for a customer-scoped business token
- register the customer’s business phone number for Cloud API use
- subscribe your app to webhooks on the customer’s WABA
- share your credit line with the customer (Solution Partners only)

When these steps are complete, if you are a Solution Partner or are partnered with one, the customer can begin using your or your partner’s app for messaging immediately. If you are not a Solution Partner, or not partnered with one, the customer must first attach a payment method to their WABA before they can begin messaging.

We’re testing a new experience in the Embedded Signup flow for all versions. The flow itself is unchanged, but after completion, you may see a new **View your setup guide** button. Clicking it will take you to a new setup guidance page in WhatsApp Manager, which offers next steps on:

- Business verification
- Resolving integrity issues and accessing Business Support Home
- Sending the first message via a partner solution
- Sending business-initiated messages using templates

## Asset ownership

## Limitations

### Onboarding limits

By default, you can onboard up to 10 new business customers in a rolling 7-day window. Only newly onboarded customers count against this limit. You can see your current onboarded customer count in the **WhatsApp Manager** > **Partner overview** panel. You will be notified by email if you approach this limit.

**Note:** Existing WhatsApp Business Accounts (WABAs) that were originally created via the developer app cannot be selected or onboarded directly through the Embedded Signup flow.

### Business customer messaging limits

Business customers onboarded via Embedded Signup start with standard [messaging limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits), which can be increased through API usage.

### Business customer phone number limits

- Business phone numbers can only be registered for use with Cloud API.
- Business phone numbers already in use with the [WhatsApp Business app⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fproducts%2Fbusiness-app%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExUkVpSjFNc0dTbVdXWUhVWHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5HBfrASK0y0Lx8l9-EZYoG-NldxL3kG6m1r6TqlN_Q1-bz4a1uG6OhrwGJsA_aem_WIhq3ffRb0cdE8LbZGnYbA&h=AT6ugBFZdYNQ2o56LlyHESZz3MRwt8i6Y4eSI2QJWl_UKLrWSNhevlI80JNyqFEqolefRxT82lbv-KD_hS0Sp5Tj5XwN_HWPaos82MJcy8YHwZGhIpeUiwb_lW5D6qc-Up3hOWEuLNc) are supported, but require you customize the flow to enable [WhatsApp Business app user onboarding](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) (aka “Coexistence”).
- Business customers onboarded via Embedded Signup start with default [messaging limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits).

## Cloud API flow

See [Cloud API Flow](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow) for descriptions of each screen that your business customers will be presented with as part of the default implementation of Embedded Signup.

Note that if you know information about your customer’s business, you can [inject this data](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data), which can significantly reduce the number of screens that your customers have to interact with.

## Access tokens

Embedded Signup generates [business tokens](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). When a business customer completes the Embedded Signup flow, an exchangeable token code will be returned as a message event and captured by the JavaScript SDK. You must exchange this code for a business token using a server-to-server call.

If you are a Tech Provider, you will use business tokens exclusively.

If you are a Solution Partner, you will use your [system user access token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) (“system token”) to share your credit line with onboarded business customers, and business tokens for everything else. Note that the system user who the token represents must have granted your app the **business\_management** permission, and must have been granted an **Admin** or **Financial Editor** role on your business portfolio, in order to be able to share your credit line.

## Permissions

Embedded Signup can be configured to support business messaging products for your customers. If you are only interested in the Cloud API flow you are likely only going to need:

- **whatsapp\_business\_management** — necessary if your app needs access to onboarded customer WhatsApp Business Account settings and message templates.
- **whatsapp\_business\_messaging** — necessary if your app needs access to onboarded customer business phone number settings, or if your app will be used by customers to send and receive messages.
![[557723935_1324509125987117_1998262003463700459_n.png]]

You can specify which permissions your app needs during the [implementation](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation) process.

Note that while your app is in development mode, these permissions will appear in Embedded Signup’s [authorization screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#authorization-screen) to anyone who has an **admin**, **developer**, or **tester** role on your app. However, once you switch your app to live mode, only permissions that have been approved for advanced access through the [App Review](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/app-review) process will appear in the flow.

## Billing

## Sandbox accounts

You can test the Embedded Signup flow using your own Facebook account, but this can result in additional business portfolios, WABAs, and business phone numbers. If you don’t want to clutter your Facebook account with test data, you can claim a sandbox test account instead, and use it to simulate a business customer completing the flow.

When you complete the flow using the sandbox account, the sandbox account’s [WABA ID, business phone number ID](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener), and an [exchangeable token code](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#response-callback) will be returned, just as if it were a real customer completing the flow.

### Sandbox account limitations

- Sandbox accounts are valid for 30 days, after which they will be deactivated and must be reclaimed in order to be used again.
- The sandbox account cannot be used to create additional sandbox business portfolios, WABAs, or business phone numbers; the assets are generated automatically and will appear in the Embedded Signup flow.
- The sandbox account is associated with the app’s admin. In order for the sandbox account’s assets to appear in the Embedded Signup flow, the app admin must be signed into their Meta developer account.
- The sandbox account’s business portfolio will not appear in the Meta Business Suite or WhatsApp Manager
- You can exchange the returned token code for the sandbox account’s business token and use it to get data on the account’s WABA ID, but the business phone number cannot be used to send or receive messages.

### Claiming sandbox accounts

To claim your sandbox account:

1. Navigate to the [App Dashboard](https://developers.facebook.com/apps) > **WhatsApp** > **Quickstart** panel.
2. Locate the **Testing Integrations** section.
3. Click the **Claim sandbox account** button.
![[513080744_1153803566552470_4289383978669775503_n.png]]

### Deleting sandbox accounts

Sandbox account deletion is being released gradually over several weeks, starting June 25, 2025.

If you are done testing and want to keep your testing environment clean, you can delete your sandbox account. Deleting a sandbox account is irreversible and removes all associated test data. If you accidentally delete your sandbox account but need to test again, you must claim a new one.

To delete your sandbox account:

1. Navigate to the [App Dashboard](https://developers.facebook.com/apps) > **WhatsApp** > **Quickstart** panel.
2. Locate the **Testing Integrations** section, then locate your sandbox account.
3. Click your sandbox account’s **Delete account** button.
![[511293188_1404444270796306_3723440624353556557_n.png]]

## 555 business phone numbers

Business customers can claim up to two 555 business phone numbers. These numbers behave the same way as standard business phone numbers (subject to pricing rules, impacted by quality ratings, etc.), but must have their display names approved before they can be used to send messages. In addition, 555 numbers:

- Have a US country calling code (+1)
- Have a 555 area code
- Are verified automatically
- Cannot be migrated to another WhatsApp Business Account, or used outside of the WhatsApp Business platform

If your business customers are eligible for 555 numbers, the [phone number addition screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-addition-screen) will automatically give them the option to choose a 555 number:

![[557624038_1991414544970922_7818680630707794930_n 1.png]]

## WhatsApp Asset migration

Embedded Signup can be used to migrate onboarded business customer assets in several ways. See [Migrating business customer assets](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support#migrating-business-customer-assets).

## App Review

You will not be able to onboard business customers until your app has been approved for **advanced access** for each of the permissions it requires.

See [App Review](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/app-review) to learn more about App Review and what you must provide in order to complete the process successfully.

The Embedded Signup Integration Helper is a setup and testing tool within the App Dashboard. The tool allows you to:

- launch Embedded Signup in various flow configurations
- see data that gets returned when a business customer completes the flow
- generate implementation code and onboarding queries, which you can copy and paste into your website, business customer portal, and server
- send API queries to endpoints you will need to use when onboarding customers who complete the flow

You can access the integration helper by navigating to **App Dashboard** > **WhatsApp** > **Embedded Signup Builder**.

**Note:** The Embedded Signup Integration Helper is available only for Business-type apps. You can view your app type at the top of the app dashboard.

## Webhooks

As part of the onboarding process, you must subscribe your app to webhooks on the WABA of each business customer who completes the Embedded Signup flow.

Webhooks will be triggered and sent to the callback URL configured on your app, according to the webhook fields you have subscribed to. This means that all webhooks for all of your onboarded business customers will be sent to your app’s callback URL. However, you can override the callback URL on an individual WhatsApp Business Account or business phone number. See [Webhook Overrides](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override) to learn how to do this.

## Localization

The Embedded Signup flow is available in 30 languages. The localized flow is automatically triggered based on the language that the business customer uses Facebook in.

Arabic, Czech, Danish, Greek, English (UK), Spanish (Spain), Spanish, Finnish, French (France), Hebrew, Hindi, Hungarian, Indonesian, Italian, Japanese, Korean, Norwegian (bokmal), Dutch, Polish, Portuguese (Brazil), Portuguese (Portugal), Romanian, Russian, Swedish, Thai, Turkish, Vietnamese, Simplified Chinese (China), Traditional Chinese (Hong Kong), Traditional Chinese (Taiwan).

Learn how to [implement Embedded Signup](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation) into your website or portal.

Did you find this page helpful?