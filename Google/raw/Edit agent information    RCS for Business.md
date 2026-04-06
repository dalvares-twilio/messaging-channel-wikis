---
title: "Edit agent information  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/edit-agent-information"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Defining agent information is a required step before submitting an agent for verification and launch, and it can be done using the API or the Business Communications Developer Console.
- Agent status, visible in the Console's tile view, includes stages like Incomplete, Ready for launch, Launch pending, and Launched, indicating the agent's progress toward becoming active on carriers.
- You cannot edit agent information after the agent's verification details have been submitted.
- To edit agent information via the Business Communications Developer Console, navigate to the Agent information section after selecting your agent and make the necessary updates, including display name, description, color, images, contact details, and privacy/terms links.
- Guidelines for formatting and cropping logos and hero images are provided to ensure a visually appealing and professional appearance for your agent.

Once you've created an agent, you'll need to define the agent information. This is required before you can submit the agent for verification and launch. You can define and edit the agent information using the [API](https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/agents#create_an_agent) or the [Business Communications Developer Console](https://business-communications.cloud.google.com/console/partner-console). If you switch to the tile view in the Console, you'll see the status of the agent.

- **Incomplete**: The agent has been created, and the initial details like brand name, agent name, hosting region, billing category, and use case have been provided. However, additional information is still needed for launch.
- **Ready for launch**: All agent and verification details have been provided, but the launch questionnaire and/or carrier selection is pending.
- **Launch pending**: The agent has been submitted for launch and is awaiting final approval.
- **Launched**: The agent is launched on at least one carrier.

![[agent_status_development_console.png|Business Communications Developer Console tile view]]

You cannot edit agent information after your agent's [verification information](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/brand-verification#submit-verification-information) is submitted. See [Verify and launch your agent](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch) for more information.

## Edit your agent's information

The following steps describe how you can edit your agent's information in the [Business Communications Developer Console](https://business-communications.cloud.google.com/console/partner-console). You can also edit an agent with the [RBM Management API](https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/agents#create_an_agent).

1. Go to the Console and sign in with your RBM partner Google Account.
2. On the homepage, select your agent from the list.
3. On the sidebar, select **Agent information**.
4. Provide the following information for your agent. As you enter this information, the agent preview updates automatically.
	<table><tbody><tr><td><p><strong>Field</strong></p></td><td><p><strong>Description</strong></p></td><td><p><strong>Details</strong></p></td></tr><tr><td><p>Display name</p></td><td><p>Name that displays to users when they interact with your agent. Typically, this is the brand name.</p></td><td></td></tr><tr><td><p>Description</p></td><td><p>Brief description or tagline of the brand.</p></td><td>The following list of content is not allowed:<br><ul><li>Script content</li><li>JSON</li><li>HTML</li><li>Escapes such as <code>%2e|%2f|%5c|%25</code></li><li>Templates</li><li>OS paths</li><li>Unix commands</li><li>Nested scopes such as <code>{This is outer content (This is inner content)}</code> or <code>([another example {nested}])</code></li></ul></td></tr><tr><td><p>Color</p></td><td><p>Color of certain elements displayed above the phone number. Use this to match your brand colors.</p></td><td><p>A minimum 4.5:1 contrast ratio to white (for example, #E91B0C). For more details, see <a href="https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/edit-agent-information#contrast-ratio">Check the contrast ratio</a>.</p></td></tr><tr><td><p>Images</p></td><td><p>Images for your agent. The banner image displays when a user views your business information, while the logo appears when your agent sends a message to a user.</p></td><td><p>Banner image: 1440x448 px JPEG, JPG, or PNG file, no larger than 200 kB.</p><p>Logo: 224x224 px, no larger than 50 kB. In conversations, logos display as 224 px diameter circles.</p><p>To check if your logo displays well as a circle, use the <a href="https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/edit-agent-information#resources">Logo preview tool</a>.</p><p>You can remove the publicly accessible URLs for your images after updating your agent, as a copy will be saved during the agent update process.</p></td></tr><tr><td rowspan="6"><p>Contact</p></td><td><p>Primary phone number that your users can reach out to in case of queries.</p></td><td><p>Required if email and website are not provided.</p><p>Phone numbers should ideally be in E.164 format (<code>+ [country code][subscriber number]</code>). For local and toll-free numbers, an unformatted string excluding "+", prefix, country code, and special characters (for example, 5554443333) is also accepted and will be internally converted to E.164.</p><p>However, if your agent's phone number cannot be expressed in standard E.164 format (for example, certain 1800 toll-free numbers in India), please enter a placeholder and <a href="https://developers.google.com/business-communications/rcs-business-messaging/support/overview/contact">contact the RCS for Business support team</a> for manual processing.</p><p>To add multiple phone numbers, click <strong>+ Add phone number</strong>.</p></td></tr><tr><td><p>Label for primary phone number</p></td><td><p>For example, Customer care number</p></td></tr><tr><td><p>Primary website</p></td><td><p>Required if phone number and email are not provided.</p><p>To add multiple websites, click <strong>+ Add website</strong>.</p></td></tr><tr><td><p>Label for primary website</p></td><td><p>For example, ABC website</p></td></tr><tr><td><p>Primary email</p></td><td><p>Required if phone number and website are not provided.</p><p>Verify that the email is an individual address, and that the person is part of the brand organization.</p><p>To add multiple websites, click <strong>+ Add email</strong>.</p></td></tr><tr><td><p>Label for primary email</p></td><td><p>For example, Customer care email</p></td></tr><tr><td><p>Privacy and terms of service</p></td><td><p>Your Privacy Policy and Terms of Service URLs.</p></td><td><p>Required for launching your agent on RBM. Verify you've provided valid links for both your Terms of Service and Privacy Policy.</p></td></tr></tbody></table>
5. Click **Save**.

The **Overview** and **Agent information** pages preview how your agent appears in the Messages app.

![[agent_information_console_preview.png|Agent information preview]]

### Check the contrast ratio

Contrast ratio is a comparison of the contrast and ease of distinguishing between two colors. A high contrast ratio between two colors, such as between a background and text, increases readability in bad lighting and for people with accessibility considerations. [WCAG 2.0](https://www.w3.org/TR/WCAG/#contrast-minimum) defines 4.5:1 as a minimum contrast ratio for text.

You can verify that the agent color you identified has at least a 4.5:1 contrast ratio to white using online tools like the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

### Format and crop your logo

A visually appealing logo and hero image can significantly boost your agent's credibility and engagement with users. Verify that your logo is well-formatted and cropped to maintain a professional appearance. Follow these tips to create a good looking logo:

- **Logo**:
	- Remember that logos are cropped into circles, even if the original image is rectangular. So, always check how your logo appears when cropped into a circle.
		- You don't need to worry about the border around logos, it won't overlap the logo itself.
- **Hero images**:
	- Remember that hero images, displayed in the agent's **Info & options** screen, partially overlap with the logo, so design accordingly for a visually pleasing result.
		- Create hero images with a 45:14 aspect ratio so they display correctly alongside the logo.

![[good_logo_example.png|RCS for Business conversation]]

#### Logo tips

- Leave sufficient space in your image to account for cropping. When a logo takes up the entire height and width of the image parts of the logo often get cropped out.
	| Practice | Good example | Bad example |
	| --- | --- | --- |
	| Spacing logo | ![[do-logo.png|RCS for Business well spaced logo]] | ![[dont-logo.svg|Badly formatted logo]] |
	| Spacing logo in cropping circle | ![[do-logo-circle.png|RCS for Business logo well spaced in cropping circle]] | ![[dont-logo-circle.svg|Badly formatted logo in cropping circle]] |
	| Cropping logo in mock | ![[do-mock-callouts-rbm.svg|RCS for Business logo cropped well with callouts]] | ![[dont-mock-rbm.svg|Badly cropped logo in mock]] |
- Space your logo equidistant from all sides of the image to make sure it displays properly and fully.
	| Practice | Good example |
	| --- | --- |
	| Logo with equal measurements from image borders | ![[do-logo-measurements.png|RCS for Business logo with equal measurements from image borders]] |
	| Logo with equal measurements from image borders in cropping circle | ![[do-logo-circle-measurements.png|RCS for Business logo with equal measurements from image borders in cropping circle]] |
- Use a 45:14 aspect ratio for hero images, and keep in mind that the logo partially overlaps the hero image.
	| Practice | Good example | Bad example |
	| --- | --- | --- |
	| Using 45:14 aspect ratio for hero images | ![[do-hero-size-rbm.svg|RCS for Business hero image with correct aspect ratio]] | ![[dont-hero-cropped.svg|Badly cropped hero image]]   ![[dont-hero-rectangle.png|Hero image in a cropping rectangle]] |
- If a hero image doesn't match the correct aspect ratio, parts of the hero image get cropped out. The result is an image that doesn't look good or represent your agent well.
	| Practice | Good example | Bad example |
	| --- | --- | --- |
	| Cropping hero image in mock | ![[do-hero-mock-rbm.svg|RCS for Business hero image in a mock]] | ![[dont-hero-mock-rbm.svg|Badly cropped hero image in a mock]] |
- Avoid images with transparencies. Logos without sufficient contrast bend into dark mode backgrounds and suffer reduced visibility. If a transparent background doesn't suit your logo, use a white background.
	| Practice | Good example | Bad example |
	| --- | --- | --- |
	| Encounting dark mode | ![[caution-mock-white-dark-rbm.svg|Logo with white background in dark mode]] | ![[caution-mock-transparent-dark-rbm.svg|Logo with transparent background in dark mode]] |

#### Resources

Use the following resources to help you design your logo or troubleshoot issues.

- **Circle logo template** as a base for agent logos you create.
	Download: [\[PNG\]](https://developers.google.com/static/business-communications/images/logo-guidelines/template-logo-circle.png) [\[SVG\]](https://developers.google.com/static/business-communications/images/logo-guidelines/template-logo-circle.svg)
	![[template-logo-circle.png]]
- **Rectangle hero image template** as a base for agent hero images you create.
	Download: [\[PNG\]](https://developers.google.com/static/business-communications/images/logo-guidelines/template-hero-rectangle.png) [\[SVG\]](https://developers.google.com/static/business-communications/images/logo-guidelines/template-hero-rectangle.svg)
	![[template-hero-rectangle.png]]
- **Logo preview tool**.
	Enter a URL for your logo to see how it would look to users.
	<iframe src="https://developers.google.com/frame/business-communications/rcs-business-messaging/guides/build/agents/edit-agent-information_a367aaefce16ab4c14dadeb0af2cf3c557fd2249c9aa224eafe51b6f2e45c13d.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe>

### Edit your agent's details for launched agents

Each carrier is responsible for approving the agents that are live on their network. After initial approval, carriers also need to sign off on any later changes to the agent, including their information and account ownership. Be aware that some changes may affect the carrier's billing reports, so sufficient lead time is necessary for carriers to update their billing systems.

After the agent has been launched on any carrier-managed networks, RBM partners can request updates to their agent details by following the [RBM Troubleshooting guide](https://developers.google.com/business-communications/rcs-business-messaging/support/overview/troubleshooting#request_to_update_agent_details).

## Next steps

Now that you've specified the agent information, you can invite [test devices](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/test), [send messages](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/send), make other calls from the [API reference](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest), or use a [sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

For security reasons, you can't delete an RBM agent. Contact [RBM Support](mailto:rbm-support@google.com) for assistance.[Previous](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents)

[Create an agent](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents)[Next](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/manage-agents)

[Manage agents](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/manage-agents)