---
title: "Create an agent  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Agents are programmatic entities representing a brand, used for sending messages to users, ranging from one-way notifications to conversational exchanges within RCS-enabled messaging apps.
- Agents use the RCS Business Messaging API to communicate with users and their appearance in messaging apps can be customized with branding and profile information.
- Creating an agent involves specifying brand, name, hosting region, billing category, and use case through the Business Communications Developer Console or API.
- Agent configuration decisions like region and use case are permanent after creation or launch, while billing category can be changed before launch.
- Agents can be created for various purposes, categorized into OTP, Transactional, Promotional, or Multi-use, each with specific rules for message content.

![[business-info.png|A card with business information.]]

In an RCS for Business conversation, messages between a user and an agent appear in an RCS-enabled messaging app, such as iMessage or Google Messages, on the user's device. The messaging app displays branding and profile information for your agent, including name, logo, description, contact information, and URLs.

You could create a single agent for *Growing Tree Bank* that allows users to interact with various departments like Customer Care and Mortgages. Alternatively, you could create separate agents for each department, such as *Growing Tree Bank Customer Care* and *Growing Tree Bank Mortgages*.

Before creating multiple agents for one business, consider the user experience and refer to the [conversational best practices](https://developers.google.com/business-communications/rcs-business-messaging/guides/learn/best-practices#conversational-ui).

## Create your agent

RCS for Business agents use the [RCS Business Messaging API](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest) to send messages, events, and other requests to users. When you create an agent, you enable access to the RBM API and [define your agent's colors and branding information](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/edit-agent-information#edit_your_agents_information).

The following steps describe how to create an agent with the [Business Communications Developer Console](https://business-communications.cloud.google.com/console/partner-console). You can also create an agent with the [Business Communications API](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/create).

To create an agent:

1. Go to the [Business Communications Developer Console](https://business-communications.cloud.google.com/console/partner-console) and sign in with your RCS for Business partner Google Account.
2. On the homepage, click **\+ Create agent**.
3. In the **New RCS Business Messaging agent** window, specify the following information:
	- Brand that your agent represents
		- Agent name
		- [Hosting region](#region)
		- [Billing category](#billingCategory)
		- [Use case](#usecase)
4. Click **Create agent**.

Once an agent is created, you can access all the features of the [Business Communications Developer Console](https://business-communications.cloud.google.com/console/partner-console) to [edit your agent's information](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/edit-agent-information#edit_your_agents_information) and submit it for launch. To start, select your agent from the homepage.

Note that deleting an RCS for Business agent is not permitted for security reasons. If you need assistance, [contact the RCS for Business support team](https://developers.google.com/business-communications/rcs-business-messaging/support/overview/contact).

### Identify the agent's region

RCS for Business agents can exist in one of three regions: North America, Europe, and Asia Pacific. The RBM API supports [three regional endpoints](https://developers.google.com/business-communications/rcs-business-messaging/guides/learn/best-practices#regional-endpoints) to help businesses comply with regional and business requirements.

When you create your agent, choose your agent's region based on the applicable regulations, requirements, and proximity to end users. This region determines where your agent operates from and where it stores its data.

If you or your intended users don't fit within those regions, choose the region that is closest to you to minimize latency. For example:

- If you're in Latin America, choose the North America region.
- If you're in Africa, choose the Europe region.
- If you're in Australia, choose the Asia Pacific region.

Don't decide your agent's region based on your target carriers. All regions have equal access to carriers worldwide.

### Determine the agent's billing category

When creating an RCS for Business agent, you need to specify its billing category based on how the agent will interact with users. Choose the category that most closely matches your agent's intended behavior:

- **Conversational**: For agents that engage in multi-turn conversations with users.
- **Non-conversational**: For agents who send messages without expecting frequent replies.

You can only change your agent's billing category before creating it. If you need to change the billing category after launch, [contact the RCS for Business support team](https://developers.google.com/business-communications/rcs-business-messaging/support/overview/contact).

For more information about the RCS for Business billing model, refer to the [billing FAQ](https://developers.google.com/business-communications/rcs-business-messaging/guides/learn/rbm-billing-faq).

### Identify the agent's use case

Each RCS for Business agent is required to have a predefined use case. This helps categorize your agent and apply the right [business rules](https://developers.google.com/business-communications/rcs-business-messaging/guides/learn/agent-use-cases#businessrules) for a good user experience. RCS for Business supports four use cases:

- **OTP**: One-time passwords required to securely authenticate an account or confirm a transaction.
- **Transactional**: Notifications, updates, or alerts that share information directly relevant to a customer's existing services or products, such as alerts for suspicious account activities, purchase confirmations, and shipping notifications.
- **Promotional**: Sales, marketing, and promotional messages to new or existing customers, with the goal of increasing awareness, engagement, and sales.
- **Multi-use**: Conversations that combine transactional and promotional messages, such as sending an account notification followed by a discount offer or upgrading to a new product or service.

Each use case has different rules about what you can send. To learn more about each use case and find the best fit for your agent, see [Choose the right use case for your agent](https://developers.google.com/business-communications/rcs-business-messaging/guides/learn/agent-use-cases#choose_the_right_use_case_for_your_agent).

Once you submit your agent for launch, you cannot change the use case. Check your [country's use cases and business rules](https://developers.google.com/business-communications/rcs-business-messaging/guides/learn/agent-use-cases#businessrules) before submitting your agent.

Now that you have a working agent, you can [edit agent information](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/edit-agent-information#edit_your_agents_information) and [configure an agent-level webhook](https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks) if needed.

Remember that you need a service account key to securely authenticate API calls. If you haven't already created a [service account key for your partner account](https://developers.google.com/business-communications/rcs-business-messaging/guides/get-started/partner-account#set_up_service_account_to_authenticate_api_calls), now is the time to do it.[Next](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/edit-agent-information)

[Edit agent information](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/edit-agent-information)