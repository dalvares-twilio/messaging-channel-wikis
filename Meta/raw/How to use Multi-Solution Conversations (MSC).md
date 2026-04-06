---
title: "How to use Multi-Solution Conversations (MSC)"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## Overview

Multi-Solution Conversations allows businesses to use multiple partners and solutions **on the same phone number**, creating a seamless chat thread experience for their customers.

![[514415965_1411106036830432_6948086596070603950_n.png|Diagram showing Multi-Solution Conversations concept]]

## Requirements

- This feature is currently in a closed beta. Please reach out to your partner manager for more details.
- Your business portfolio must have an [increased messaging limit](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits#increasing-your-limit).
- Businesses with banned or restricted WhatsApp Business accounts (WABA) are not eligible. Use the [Business Support Home⁠](https://business.facebook.com/business-support-home/) to address restrictions.

## Features

- **Simple end-business onboarding via Embedded Sign-up:** Partners can onboard businesses easily through [Embedded Signup](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations#onboarding-for-msc--embedded-signup-flow-).
- **Payment and template isolation per partner:** Each partner has their own WhatsApp Business Account, their own templates, and their own billing and metrics.

## Limitations

## How Multi-Solution Conversations work

![[577460481_2092717124880571_7578694447380220573_n.png|Diagram showing how MSC creates a new WABA shared with each partner]]

The chart above illustrates a new WABA shared with each integrated partner, and assets separated per WABA.

1. The business shares all phone numbers associated with their WhatsApp Business Account (WABA) to a partner through the [Embedded Signup flow](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations#onboarding-for-msc--embedded-signup-flow-).
2. The system creates and shares a new WABA with the partner the business onboards with.
3. The partner now has messaging or calling access to the business phone numbers shared with them and can message or manage calls on behalf of the business.

### Supported APIs and usage

Businesses can use a single phone number across one or multiple partners across the following APIs and uses:

- [Messaging via WhatsApp Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages)
- [Calling via WhatsApp Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling)
- [Click-to-WhatsApp Ads via Ads Manager⁠](https://www.facebook.com/business/help/447934475640650?id=371525583593535)

## Additional limitations

**MSC does not currently support:**

- Conversation routing and management: currently, all parties the phone number is shared with receive incoming webhooks. Businesses must work with partners to manage response handling.
- Coexistence phone numbers
- Phone numbers using the Groups API
- WABA created through Embedded Signup which are used on Ads Manager for Marketing Messages
- [Measurement Partner onboarding](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/measurement-partners)

### General limitations

- Only 5 partners or solutions can be enabled per each end-business WhatsApp Business Account (WABA).
- Only 1 partner can attach a catalog to the shared phone number(s) between partners.

### Phone number sharing limitations

The business cannot share a phone number with the same partner more than once via different WABAs.

For example, the business has a phone number linked to WABA 1 and then shares WABA 1 with Partner 1. If you have the same phone number linked to WABA 2, you cannot also share WABA 2 with Partner 1. If you try to share the phone number, you may receive an error.

## How messaging, calling, and account management works when using MSC

Use the following table to understand how different features and APIs work when using MSC as a partner or business.

### Onboarding

**Value:** Use an existing phone number across multiple partners and solutions.

| Business Experience | Partner Experience |
| --- | --- |
| The business onboards an existing phone with more than one partner via [Embedded Signup.](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations#onboarding-for-msc--embedded-signup-flow-) | Partners can see the new WABA shared with them within Meta Business Suite settings. |

### Account management

**Value:** Account management as usual

<table><thead><tr><th><p>Business Experience</p></th><th><p>Partner Experience</p></th></tr></thead><tbody><tr><td colspan="2"><p>You can perform account management operations via the usual pathways (WhatsApp Manager, API, and so on) based on permissions granted.</p></td></tr></tbody></table>

### API usage

**Value:** Enable messaging and calling functions across multiple partners on a single phone number

| Feature | Business Experience | Partner Experience |
| --- | --- | --- |
| - Cloud API Messaging - Marketing Messages API for WhatsApp | Not applicable | - **Send messages:** All partners can send messages via API on the shared phone number(s). - **Receive messages:** All partners will receive all incoming webhooks on the shared phone number(s). |
| [Cloud API Calling](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling) | Not applicable | Partners onboarded to the Calling API can make [business-initiated calls](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls), and receive [user-initiated calls](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls).  [Learn more about the WhatsApp Business Calling API](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling) |
| [Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#create-and-manage-templates) | Not applicable | Partners can create templates as usual by using the new WABA, either through the API or WhatsApp Manager.  [Learn how to create and manage message templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#create-and-manage-templates) |
| Conversation Routing and Management | Currently, all parties the phone number is shared with receive incoming webhooks.  Businesses must work with partners to manage response handling. | Currently, all parties the phone number is shared with receive incoming webhooks.  Businesses must work with partners to manage response handling. |

### Billing

**Value:** Simplified, siloed billing ownership per WABA

| Business Experience | Partner Experience |
| --- | --- |
| Businesses can add a payment method to any of the WABAs created and shared with partners. | Partners add their own payment methods to the WABA shared with them, the same as they do today.  Each partner is billed only for the messages sent through their app.  [Per-message pricing applies.](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing#per-message-pricing) |

### Asset management

**Value:** Simplified, siloed asset management per WABA

<table><thead><tr><th><p>Feature</p></th><th><p>Business Experience</p></th><th><p>Partner Experience</p></th></tr></thead><tbody><tr><td><p>Templates</p></td><td><p>The business can create and see templates on all WABAs shared with partners.</p></td><td><p>Partners can only create templates on the WABAs that are shared with them.</p><p>Partners are not able to see other Partners’ templates</p></td></tr><tr><td><p>Phone numbers</p></td><td colspan="2"><p>Phone numbers are a shared resource.</p><p>Whether the end business or partner adds the phone number, it will be visible to all in WhatsApp Manager. Any new phone numbers added to WABAs using MSC are shared with all partners with access to these MSC WABAs.</p></td></tr></tbody></table>

### Offboarding

**Value:** The business has full control of what partners, assets, and accounts they retain.

<table><thead><tr><th><p>Role/Asset</p></th><th><p>Business Experience</p></th><th><p>Partner Experience</p></th></tr></thead><tbody><tr><td><p>WABA</p></td><td><p>The business can delete the WABA.</p></td><td><p>Partners cannot delete the WABA shared with them.</p></td><td></td></tr><tr><td><p>Phone number</p></td><td colspan="2"><p>Both the business and partner can delete a phone number.</p></td><td></td></tr><tr><td><p>Partner</p></td><td><p>The business can remove the partner.</p></td><td><p>Not applicable.</p></td><td></td></tr></tbody></table>

## How violations and bans work with MSC

- **Phone number violations**
	- Phone number violations will ban all WABAs across all partners, associated with the phone number.
- **Template violations**
	- Template violations will only apply to the violating WABA.
- **Business portfolio violations**
	- Any bans on the business portfolio will ban all WABAs associated with the phone number.

[Decision appeals](https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement#appeals) continue to function as they do today.

Only available to businesses with a messaging limit of at least 1,000 business-initiated conversations in a rolling 24 hour period.

Once a business meets the eligibility requirements, the MSC flow for Embedded Signup is automatically displayed in the Embedded Signup flow ([v2 and above](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/versions#version-2)). Partners don’t need to configure anything in Embedded Signup for this to work.

When businesses sign up to a partner through Embedded Signup, they see the flow below and can choose to share their existing business phone numbers. This onboards them to MSC. Embedded Signup has two experiences, and a given business may see either one randomly. Both experiences are described below.

**Once the business completes the Embedded Signup flow, the partner does not need to re-register with the business.**

The **Notes** column calls out any MSC-specific notes for each screen.

| Screen | Notes |
| --- | --- |
| [Authentication screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#authentication-screen) | No changes |
| [Authorization screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#authorization-screen) | No changes |
| [Business Asset Selection Screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-asset-creation-screen) | Here, you can select a WhatsApp Business account that is already shared with other partner(s) |
| [Phone number addition screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-addition-screen) |  |
| [Permissions review screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#permissions-review-screen) | No changes |
| [Success screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#success-screen) | No changes |

Businesses onboard to MSC by using the Embedded Signup flow. Note that these screenshots may differ as the product evolves.

Step 1: Select the business portfolio.

![[561250684_1339317894593528_7901913241321161228_n.jpg|Business portfolio selection screen in Embedded Signup]] ![[560932723_1339318257926825_6933311255214552210_n.jpg|Share existing WhatsApp phone numbers option in Embedded Signup]]

Step 3: The business selects the WABA with the phone number(s) they would like to share. Note that these numbers are only selectable if they have not been shared already with this partner.

![[561279123_1339318087926842_185158341832098536_n.jpg|WABA selection screen showing phone numbers to share]]

Step 4: Create a name for the new WhatsApp Business Account being created.

![[561245087_1339318197926831_5102266886972443478_n.jpg|WhatsApp Business Account naming screen]]

Step 5: Verify permission information.

![[563466403_1339318091260175_1784292960435920523_n.jpg|Permissions verification screen in Embedded Signup]] ![[561627451_1339318034593514_8661379492656270102_n.jpg|Signup verification and completion screen]]

## Troubleshooting

This can happen for several reasons:

1. The business already has a solution with the partner they are trying to share the number with.
2. The business has exceeded the 5 partner maximum for the number.
3. The phone number is not eligible to send 1k messages yet.
4. The phone number has not been registered.

**What can I do if the business phone number goes offline?**

Rarely, a phone number can go offline. To solve this issue, try the following:

1. Register the phone number again: The business should search each of their WABA activity logs to find which partner registered the phone number first. Then, that partner can register the phone number again.
2. Turn off 2-factor authentication (optional): If the business cannot obtain which partner originally registered the phone number, they can shut off two-factor authentication and have another partner register the number again. [Learn how to disable 2FA on a phone number](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#disabling-two-step-verification).

## Frequently asked questions

**How do I get support?**

**How can I offboard from MSC?**

To offboard from MSC:

1. Migrate templates (Optional): If there are newly created templates on an MSC-created WABA, please migrate them before offboarding. \[Learn how to migrate templates here.\]
2. Submit a WhatsApp support ticket: Use the request type “Embedded Signup - MSC Offboarding” and include the WABA you would like to retain.

**Is MSC supported for Tech Providers, Tech Partners, and Multi-Partner Solutions?**

Yes.

**Will a partner be able to see how many partners a client is using and the specific services/capabilities each partner provides?**

No.

**Does every partner need to register a given business phone number to onboard it to MSC?**

No, only one partner needs to register it. Once the number has been registered, it is ready to be used with new partners without the need to re-register it.

**What happens if a business tries to onboard without having previously registered their phone number(s)?**

An error will be displayed in Embedded Signup, prompting the business to register their number(s).

**If multiple partners respond to messages within the same conversation window, who will be charged?**

[Per-message pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing#per-message-pricing) applies.

**What happens if two partners send messages at the same time? Will I get billed twice?**

[Per-message pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing#per-message-pricing) applies.

**When will MSC become generally available?**

Mid-2026.

Did you find this page helpful?