---
title: "Cloud API flow | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## Cloud API flow

This document describes the default screens that your business customers will be presented with as they navigate the Embedded Signup flow. Note that if you inject [pre-filled data](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data), you can pre-fill some of these screens, and bypass many of them entirely, reducing the likelihood of errors and making it much easier for your business customers to onboard onto the platform. This is the UI flow for the latest version v4.

## Screens

### Authentication screen

This screen authenticates business customers using their Facebook or Meta Business Suite credentials.

![[530819633_636229419515187_227138492125594706_n.png]]

### Authorization screen

This screen describes the data the business customer will be permitting your app to access.

![[531995822_1112262264200439_63249353490863536_n.png]]

### Business Asset Selection Screen

This screen gives customers the option to select existing business assets such as a Meta business portfolio and WhatsApp Business Account.

Users also have the option to create new assets if they have not reached their portfolio limit.

![[532045601_1897587967686145_847324094190786110_n.png]]

### Business Asset Creation Screen

This screen gives customers the option to select existing business assets such as a Meta business portfolio and WhatsApp Business Account.

Users also have the option to create new assets if they have not reached their portfolio limit.

![[530852550_1105248814823575_6797431386886245236_n.png]]

### Phone number addition screen

This screen allows the business customer to enter a new business phone number to associate with their WhatsApp Business Account.

It also allows the customer to choose how they wish to receive their verification code, which they will need to provide in the next step.

If you are providing phone numbers to your customers, you will have to deliver these codes to your customers, or provide pre-verified numbers instead.

![[579214248_1544901606717694_7187028527222587188_n.png]]

### Phone number verification screen

This screen allows the business customer to verify ownership of the business phone number they entered in the previous step.

![[557624038_1991414544970922_7818680630707794930_n.png]]

### Permissions review screen

This screen provides a summary of the permissions the business customer will be granting to your app.

![[530797839_1261352201871305_6011316801343038234_n.png]]

### Success screen

This screen indicates that Meta successfully created and associated all of the business customer’s assets (business portfolio, WABA, phone number display profile, and business phone number).

When the customer clicks Finish, a message event will be triggered, containing the customer’s WABA ID and business phone number ID, which you must then use to onboard the customer to the platform.

![[532564823_655188414258906_330922092450163709_n.png]]

Did you find this page helpful?