---
title: "Sender Management On-Call responsibilities - Messaging - Twilio Confluence"
source: "https://twilio-productivity.atlassian.net/wiki/spaces/MSG/pages/491981964/Sender+Management+On-Call+responsibilities"
author:
published:
created: 2026-04-06
description:
tags:
  - "clippings"
---
## Sender Management On-Call responsibilities

## Your On-Call Shift

## Before

1. If you've never been on-call before, review the [Onboarding to Channels On-Call](https://twilio-productivity.atlassian.net/wiki/pages/viewpage.action?pageId=380597494 "https://twilio-productivity.atlassian.net/wiki/pages/viewpage.action?pageId=380597494") document and complete the onboarding steps
2. As our systems, tools, security policies, etc. change and because of the length of time between on-call shifts it's important to validate access before your on-call shift starts to handle pages. Review the [Next On-Call Preparation](https://twilio-productivity.atlassian.net/wiki/pages/viewpage.action?pageId=380597494#MessagingChannelsSharedOnCallOnboarding-NextOn-CallPreparation "https://twilio-productivity.atlassian.net/wiki/pages/viewpage.action?pageId=380597494#MessagingChannelsSharedOnCallOnboarding-NextOn-CallPreparation") section of our onboarding document to ensure you're ready for your next shift
3. Test your Pager duty notification setting. Make sure to test the call and text setting so you do not miss any notification.

## During

1. All pages received should be acknowledged (ack) in #eng-messaging-oncall
	1. The page should include a link to the runbook to follow to start troubleshooting. Continually communicate in the thread what is being done to resolve the issue. This could be investigation that's taking place, runbook steps being followed, etc.
		2. If the issue isn't an incident keep the communication in the thread. If the issue ends up being an incident, move the conversation to the incident Slack channel
		3. Every ack'd page thread should have a conclusion (what happened to resolve the page)
2. On getting a page prioritize resolving the issue and getting the service back to normal operation. Don't debug at customer's cost; root cause analysis (RCA) can be done later
3. When the page is resolved add resolution notes in PagerDuty
4. For every page, be proactive about knowing the customer impact. What does it mean for our customer if we get this alert from this service?. Ideally we should have these details on the runbook. If the runbook does not have the details/ is not clear enough please update it.
5. If the issue persists after following the runbook and you believe there is customer impact then raise an incident on Firehydrant. If you have questions reach out to your manager or on-call escalation manager.
6. For customer impact analysis, what % of customers/numbers/traffic was impacted and during what time leverage the canned queries on the [Channels Incident Runbook](https://twilio-productivity.atlassian.net/wiki/spaces/RT/pages/382782047)
7. For Customer escalations- Triaging questionnaire:
	1. Ask the reporter if it can be reproduced (or) try to reproduce it on your own
		2. Find out if it is happening for 1 customer or multiple
		3. Derive the customer impact
		4. Loop in PM and EM to prioritize if a bug fix is required
8. Add any DS ticket you open to [this sheet](https://docs.google.com/spreadsheets/d/1_CwcXbNZ20uQ5gvUTlPcXNtcgJyYO4Onpz5Meb2KAVc/edit?gid=0#gid=0 "https://docs.google.com/spreadsheets/d/1_CwcXbNZ20uQ5gvUTlPcXNtcgJyYO4Onpz5Meb2KAVc/edit?gid=0#gid=0"). This will help us escalate with Meta
9. Add all DLQ alert debugging to [this sheet](https://docs.google.com/spreadsheets/d/1_CwcXbNZ20uQ5gvUTlPcXNtcgJyYO4Onpz5Meb2KAVc/edit?gid=0#gid=0 "https://docs.google.com/spreadsheets/d/1_CwcXbNZ20uQ5gvUTlPcXNtcgJyYO4Onpz5Meb2KAVc/edit?gid=0#gid=0"). This is to review and assess the use case of DLQ and further keep/remove the DLQ.

## When to create an incident?

1. When you get a high urgency page and if more than 1 customer is impacted, create an incident. Act on it right away no matter what the time is
2. When you get a low urgency page more than once, dedicate the time to debug and share the customer impact and create an incident if more than 1 customer is impacted

## Priority during call:

1. Resolve Incidents
2. Resolve high Urgency Pages
3. Resolve Low Urgency Pages
4. Debug all Auto resolved pages that came off hrs first thing in the morning and report it on the on-call review.
5. Work on small betterments as you see it. DO NOT create new tickets and leave it open
6. Be the first responder to all the Customer escalations in [#eng-messaging-channels-content](https://twilio.enterprise.slack.com/archives/C9PUBL6AE "https://twilio.enterprise.slack.com/archives/C9PUBL6AE").
7. DO NOT let Customer escalations unattended for more than 1 hour 1) Triage the escalation and add it to epic [MSGADVCHNL-6616: \[Sender Mgmt\]: Channels Onboarding - Repair Items & EscalationsBuilding](https://twilio-engineering.atlassian.net/browse/MSGADVCHNL-6616) \[Sender Mgmt\] Channels Onboarding- Bugs & Escalations if it is related to onboarding 2) Get to know all the details about the esc. Ask Ops or Support to fill in all the required information. A good examples is this template [MSGADVCHNL-11178: ISV unable to see WABA in the Twilio Console - RevinateClosed](https://twilio-engineering.atlassian.net/browse/MSGADVCHNL-11178) 3) If it is a bug on our side, please communicate the description of the bug and ask for the priority to fix it. Prioritize fixing the bug ASAP. Please use the debugging workflow to triage Sender Management customer escalations [https://lucid.app/lucidchart/1a4d05d1-a9fd-49f2-a7a2-8412bf4080da/edit?beaconFlow\[…\]3&invitationId=inv\_70e9b067-d9e1-4d81-a4b4-77d41389938b&page=0\_0](https://lucid.app/lucidchart/1a4d05d1-a9fd-49f2-a7a2-8412bf4080da/edit?beaconFlowId=26648839BCB21733&invitationId=inv_70e9b067-d9e1-4d81-a4b4-77d41389938b&page=0_0# "https://lucid.app/lucidchart/1a4d05d1-a9fd-49f2-a7a2-8412bf4080da/edit?beaconFlowId=26648839BCB21733&invitationId=inv_70e9b067-d9e1-4d81-a4b4-77d41389938b&page=0_0#")
8. Monitor the Channels Ops Review dashbooard- [https://app.datadoghq.com/dashboard/nwv-3wd-k8g/wip-msg-channels-health?fromUser=false&refresh\_mode=paused&from\_ts=1740297600000&to\_ts=1740988799999&live=false](https://app.datadoghq.com/dashboard/nwv-3wd-k8g/wip-msg-channels-health?fromUser=false&refresh_mode=paused&from_ts=1740297600000&to_ts=1740988799999&live=false "https://app.datadoghq.com/dashboard/nwv-3wd-k8g/wip-msg-channels-health?fromUser=false&refresh_mode=paused&from_ts=1740297600000&to_ts=1740988799999&live=false")
9. Sprint Work

## After

After your on-call shift you should prepare the on-call report to discuss during our weekly Ops Review meeting. Please follow this template for the ops review [On-Call notes for Startdt - Enddt](https://twilio-productivity.atlassian.net/wiki/spaces/MSG/pages/712018273). The purpose of the meeting is to review pages of our systems, communicate improvements or changes made and ensure a smooth transition for our next on-call engineers.

### Generating Report for Ops Review

1. Make a copy of an existing on-call report ([example](https://twilio-productivity.atlassian.net/wiki/spaces/MSG/pages/712018273 "https://twilio-productivity.atlassian.net/wiki/spaces/MSG/pages/712018273")). Keep it high level. Summarize the key takeaways only