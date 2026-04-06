---
title: Launch approval  |  RCS for Business
source: https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/launch-approval
author:
published:
created: 2026-04-05
description:
tags:
  - clippings
---
## Page Summary

- Agent launch involves a review process including brand verification and asset assessment managed by Google, carriers, or both.
- Google-managed launches typically take 1-3 business days if brand approval and all required assets are provided promptly.
- Before submitting a launch request, you must complete pre-launch tasks such as filling out agent information, testing, implementing opt-out, and providing an agent preview video.
- Submitting a launch request initiates the review and requires providing details about countries/carriers, contact information, message triggers, interactions, and opt-out responses.
- For Google-managed launches, a mandatory brand approval email must be responded to by the brand point of contact to expedite the review process.

When you request to launch an agent, it undergoes a review that includes [brand verification](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/brand-verification) and an assessment of your agent's assets. This process is managed by Google, carriers, or both, depending on which carriers you've selected for launch. For more information, see [Google-managed vs. Carrier-managed launches](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch#google-managed-vs.).

Google-managed launches take 1–3 business days, provided these conditions are met:

- Brand approval is received within 24 hours.
- The following agent assets are accurate, formatted correctly, and publicly accessible:
	- A working website
		- Privacy Policy and Terms of Service links
		- An agent preview video

After your agent is approved for launch, you'll receive a confirmation email. At this point your agent can begin sending messages.

### Prerequisites

Before you can launch your agent, you need to complete the following:

| Pre-launch tasks |
| --- |
| Fill out all required [agent information](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/edit-agent-information) |
| [Test](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/test) the functionality of your agent and its associated infrastructure |
| Implement the [STOP](https://developers.google.com/business-communications/rcs-business-messaging/guides/learn/best-practices#stop) (or opt-out) flow |
| Implement a way for reviewers to access and test your agent. Please create a screen recording of your agent's messaging use case and upload it to a publicly accessible link. Make sure this recording matches the use case declared when the agent was created and clearly demonstrates the STOP functionality. |

With those tasks complete, gather the following information:

| Launch information |
| --- |
| List of countries and carriers you want your agent to operate in |
| Name, email address, and phone number for the points of contact at your company who are responsible for the agent |
| (Optional) How you obtain opt-in to message users |
| What actions or events trigger messages to users |
| The types of interactions your agent will have with users |
| The exact message the agent responds with when a user opts out of communications |
| (Optional) Screenshots at publicly accessible URLs |
| Instructions for agent review; these could be either of the following: - Instructions for how reviewers can directly access your agent on their devices - Videos at publicly accessible URLs that show your agent's primary and secondary use cases, display that all links and actions work as intended, and highlight opt-out capabilities |

### Submit a launch request

Submitting a launch request initiates the brand verification process and a review of your agent's assets by Google, carriers, or both.

To submit a launch request, follow these steps:

1. Open the [Business Communications Developer Console](https://business-communications.cloud.google.com/), sign in with your RCS for Business partner Google Account, and click your agent.
2. In the left navigation, click **Launch**.
3. Click **Get started**.
4. Answer some questions about the state of your agent. Your agent should be ready to:
	- Communicate with users who aren't on test devices.
		- Allow users to opt out of communications.
		- Have reviewers test or review video of your agent's primary, secondary, and opt-out flows.
5. Click **Fill out questionnaire**.
6. Fill out all fields for the following sections with [accurate information](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/edit-agent-information#edit_your_agents_information).
	- Agent information
		- Points of contact
		- Agent experience
		- Agent preview
7. Click **Save**.
8. Click **Select carriers**.
9. Select the carriers whose networks you want to launch the agent on.
	When RCS for Business becomes available on a **new** carrier network, you need to submit a launch request for your agent:
	- [Using the Console](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/launch-approval#submit-launch-request) (the current flow)
		- [Using the RBM Management API](https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/agents#submit_an_agent_for_launch)
	The approval process can vary depending on whether the new carrier is [carrier-managed or Google-managed](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch#google-managed-vs.). Carriers marked with an info icon follow their own launch approval process. You must have direct agreements with these carriers before they'll approve your agent to launch on their networks. These carriers reject your launch if they have no contract in place with you, and they may contact you to establish a relationship.
10. Click **Confirm**.
11. Review the next steps, then click **Confirm**.

## After submitting a launch request

After submitting an agent for **launch on Google-managed carriers**, the brand POC receives an email from rbm-support@google.com (with the subject line "Please approve brand use for RCS Business Messaging agent: AGENT\_ID"). Please reach out to the brand POC proactively and ask them to reply to that email as soon as possible. This step is **required**, and faster email responses help expedite the launch approval.

For **carrier-managed launches**, the verification process can differ.

After you submit launch requests, the **Launch** page displays your agent's status for each selected carrier. This page may take a while to update. After the status changes to `Launched`, your agent will be reachable after about 30 minutes.[Previous](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/brand-verification)

[Brand verification](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/brand-verification)