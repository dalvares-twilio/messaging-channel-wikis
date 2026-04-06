---
title: "Brand verification  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/brand-verification"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Brand verification confirms an authorized brand representative verifies your agent information and your right to manage the agent, and it is required before your first launch.
- You need to provide contact information for a brand employee with the authority to verify the agent information.
- Verification information is submitted once per agent before the first launch request.
- Brand verification occurs after you submit a launch request, with the brand contact potentially contacted by Google, carriers, or both depending on the launch type.
- Verification information can be submitted through the Business Communications Developer Console.

This document covers frequently asked questions about brand verification. To start the verification process, proceed to [Submit verification information](#submit-verification-information).

## What is brand verification?

It's when an authorized brand representative verifies your agent information and your right to manage the agent as a messaging partner. This is a prerequisite for launch.

## What information is needed for verification?

- **Brand contact information**: You'll need to provide the contact information for an employee at the brand who has the authority to verify the agent information and your right to manage the agent. For details on who qualifies as a brand POC and which email address is acceptable, see [Submit verification information](#submit-verification-information).
- **Supporting documents**: You can also upload supporting documents, such as authorization letters, directly to the [Business Communications Developer Console](https://business-communications.cloud.google.com/). Uploading these documents can help streamline the agent approval process. For more information, see [Submit verification information](#submit-verification-information).

## When do I need to submit the verification information?

You must submit verification information before you submit your agent for its first launch.

## Do I have to submit verification information for every launch?

No, you only need to submit verification information once per agent, regardless of how many carriers you launch on. It doesn't matter if the carriers follow a [Google-managed or carrier-managed launch process](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch#google-managed-vs.).

## When does verification happen?

Brand verification happens after you submit a launch request. Here's the workflow:

1. You [submit verification information](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/brand-verification#submit-verification-information) (this only happens once: prior to your first launch request).
2. You [complete the prerequisites for launch](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/launch-approval#prerequisites) and [submit a launch request](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/launch-approval#submit-launch-request).
3. During the launch approval process, Google, carriers, or both reach out to your brand contact for verification.

## How often will the brand be contacted for verification?

This depends on which carriers you've selected for launch.

- [**Google-managed launches**](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch#google-managed-vs.): The brand will be contacted once, during your first launch request on any carrier with a Google-managed launch process. Once verified, the agent is considered verified for all future Google-managed launches.
- [**Carrier-managed launches**](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch#google-managed-vs.): The brand may be contacted by each carrier as part of their individual launch approval process.

## Submit verification information

To submit verification information:

1. In the [Business Communications Developer Console](https://business-communications.cloud.google.com/), navigate to the **Verification** page.
2. Fill out the information and click **Update agent verification info**.
	You can edit the verification information before submitting a launch request, but not after.
3. Optional. In the **Supporting documents** section, click **Upload file** to add any documents, such as authorization letters, that confirm your authority to manage the agent. Follow these requirements:
	- **File type**: PDF
		- **Max file size**: 50MB
		- **Quantity**: Up to 5 files. Avoid file duplications.
	Please follow carrier guidelines on which documents are relevant and necessary for launching on their network.
4. Click **Proceed** to confirm that Google, carriers, or both should email your brand contact to verify your agent. This will happen after you submit a launch request, as part of the approval process.
5. To submit a launch request, click **Go to Launch**.[Previous](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch)

[Overview](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch)[Next](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/launch-approval)

[Launch approval](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/launch-approval)