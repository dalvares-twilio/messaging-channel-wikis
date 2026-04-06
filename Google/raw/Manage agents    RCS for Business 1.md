---
title: "Manage agents  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/agents"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Brands serve as organizational containers for grouping related agents.
- Creating an agent requires defining basic information and is associated with an owning brand.
- Brand verification is a prerequisite for launching an agent.
- You can submit and manage an agent's launch status across different carriers.
- Agents cannot be deleted directly and require contacting RBM Support.

All agents belong to a brand (business, organization, or group). Before an agent can be created, it's necessary to create an owning brand. Brands are purely organizational to help you group related agents together

Code snippets on this page are taken from the [Java samples](https://github.com/rcs-business-messaging/rbm-api-examples/tree/master/java/rbm-mgmt-api) and [Node.js samples](https://github.com/rcs-business-messaging/rbm-api-examples/tree/master/nodejs/rbm-mgmt-api).

## Agent creation and definition

### Create an agent

To create an RBM agent, you need to define its [basic information](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/edit-agent-information#edit_your_agents_information).

For more details, see [`brands.agents.create`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/create).

```
curl -v -X POST "https://businesscommunications.googleapis.com/v1/$BRAND_ID/agents" \
  -H "Content-Type: application/json" \
  -H "User-Agent: curl/business-messaging" \
  -H "\`oauth2l header --json rbm-developer-service-account-credentials.json businesscommunications\`" \
  -d "{
    'displayName': 'My test agent',
    'rcsBusinessMessagingAgent': {
      'description': 'My agent description',
      'logoUri': 'https://agent-logos.storage.googleapis.com/_/kt90w53vzw2QSxK6PG1uCeJf',
      'heroUri': 'https://agent-logos.storage.googleapis.com/_/kt90vzob74GQcfeHoEQbVRTP',
      'phoneNumbers': [
        {
            'phoneNumber': {
                'number': '+44800088088'
            },
            'label': 'My number'
        }
      ],
      'emails': [
        {
            'address': 'support@demo.test',
            'label': 'My email'
        }
      ],
      'websites': [
        {
            'uri': 'https://a.demo.test/',
            'label': 'My site'
        }
      ],
      'privacy': {
        'uri': 'https://a.demo.test/privacy',
        'label': 'My privacy policy'
      },
      'termsConditions': {
        'uri': 'https://a.demo.test/terms',
        'label': 'My terms'
      },
      'color': '#FFFFFF',
      'billingConfig': {
        'billingCategory': 'CONVERSATIONAL'
      },
      'agentUseCase': 'TRANSACTIONAL',
      'hostingRegion': 'EUROPE'
    }
  }"
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-curl/blob/main/business-communications-api/rbm-management-api-samples/createAgent.sh).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

const newAgentDetails = {
  displayName: 'My new agent',
  name: brandId + '/agents/',
  rcsBusinessMessagingAgent: {
    description: 'This is the agent description that will be displayed in the Agent info tab in Messages',
    logoUri: 'https://agent-logos.storage.googleapis.com/_/kt90w53vzw2QSxK6PG1uCeJf',
    heroUri: 'https://agent-logos.storage.googleapis.com/_/kt90vzob74GQcfeHoEQbVRTP',
    phoneNumbers: [
      {
        phoneNumber: {
          number: '+12223334444'
        },
        label: 'Call support'
      }
    ],
    // It's recommended to provide at least one contact method (phone or email) because
    // this is required for launch. For any phone, email, or website provided, a corresponding label
    // must also be included.
    privacy: {
      "uri": 'https://policies.google.com/privacy',
      "label": 'Our privacy policy'
    },
    termsConditions: {
      "uri": 'https://policies.google.com/terms',
      "label": 'Our Terms and Conditions'
    },
    color: '#0B78D0',
    billingConfig: { billingCategory: 'NON_CONVERSATIONAL' },
    agentUseCase: 'TRANSACTIONAL',
    hostingRegion: 'EUROPE'
  }
};

businessCommunicationsApiHelper.createAgent(brandId, newAgentDetails).then((response) => {

}).catch((err) => {
  console.log(err);
});
```
```
Brand brand = api.getBrand(brandId);
logger.info("Brand to operate on: " + brand);
String displayName = flags.getOrDefault("agent_name", "Test RBM Agent: " + now.getSecond());
String suffix = flags.getOrDefault("agent_data_suffix", "API");
RcsBusinessMessagingAgent agentData = AgentFactory.createRbmAgent(suffix);
Agent agent = api.createRbmAgent(brand, displayName, agentData);
logger.info("RBM agent has been created: " + agent);
```

This code returns the new agent information and a unique identifier assigned to the agent:

```
{
  name: 'brands/40bd963f-ff92-425c-b273-8f0892d2d017/agents/my_new_agent_dxuewtvy_agent',
  displayName: 'My new agent',
  rcsBusinessMessagingAgent: {
    description: 'This is the agent description that will be displayed in the Agent info tab in Messages',
    logoUri: 'https://agent-logos.storage.googleapis.com/_/kt90w53vzw2QSxK6PG1uCeJf',
    heroUri: 'https://agent-logos.storage.googleapis.com/_/kt90vzob74GQcfeHoEQbVRTP',
    phoneNumbers: [ [Object] ],
    privacy: {
      uri: 'https://policies.google.com/privacy',
      label: 'Our privacy policy'
    },
    termsConditions: {
      uri: 'https://policies.google.com/terms',
      label: 'Our Terms and Conditions'
    },
    color: '#0B78D0',
    billingConfig: { billingCategory: 'NON_CONVERSATIONAL' },
    agentUseCase: 'MULTI_USE',
    hostingRegion: 'EUROPE'
  }
}
```

### Look up an agent definition

You can retrieve an agent by specifying its unique identifier (`name`). For more details, see [`brands.agents.list`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/list).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

// Retrieve details of the first agent (if one has already been created)
businessCommunicationsApiHelper.getAgent(agent.name).then((response) => {

}).catch((err) => {
  console.log(err);
});
```
```
Agent agent = api.getAgent(flags.get("agent_id"));
logger.info("Agent: " + agent);
```

This code returns the agent information:

```
{
  name: 'brands/40bd963f-ff92-425c-b273-8f0892d2d017/agents/my_new_agent_dxuewtvy_agent',
  displayName: 'My new agent',
  rcsBusinessMessagingAgent: {
    description: 'This is the agent description that will be displayed in the Agent info tab in Messages',
    logoUri: 'https://agent-logos.storage.googleapis.com/_/kt90w53vzw2QSxK6PG1uCeJf',
    heroUri: 'https://agent-logos.storage.googleapis.com/_/kt90vzob74GQcfeHoEQbVRTP',
    phoneNumbers: [ [Object] ],
    privacy: {
      uri: 'https://policies.google.com/privacy',
      label: 'Our privacy policy'
    },
    termsConditions: {
      uri: 'https://policies.google.com/terms',
      label: 'Our Terms and Conditions'
    },
    color: '#0B78D0',
    billingConfig: { billingCategory: 'NON_CONVERSATIONAL' },
    agentUseCase: 'MULTI_USE',
    hostingRegion: 'EUROPE'
  }
}
```

## Verification and launch

### Submit verification information

[Brand verification](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/brand-verification) is required for agent launch. You must submit verification information before making a launch request. Note that you don't have to wait for brand approval before making the launch request; brand approval happens as part of the launch approval process.

For more details, see [`brands.agents.requestVerification`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/requestVerification).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

let agentVerificationContact = {
  partnerName: 'Alice',
  partnerEmailAddress: 'alice@thepartner.com',
  brandContactName: 'Bob',
  brandContactEmailAddress: 'bob@thebrand.com',
  brandWebsiteUrl: 'https://thebrand.com/'
};

businessCommunicationsApiHelper.verifyAgent(agent.name, agentVerificationContact).then((response) => {

}).catch((err) => {
  console.log(err);
});
```
```
AgentVerificationContact contact = AgentFactory.createRbmAgentVerification();
AgentVerification verification = api.requestAgentVerification(agent.getName(), contact);
logger.info("Verification requested: " + verification);
```

This code returns the verification information:

```
{
  "name": "brands/40bd963f-ff92-425c-b273-8f0892d2d017/agents/my_new_agent_ciymyd2b_agent",
  "verificationState": "VERIFICATION_STATE_UNVERIFIED",
  "agentVerificationContact": {
    "partnerName": "Alice",
    "partnerEmailAddress": "alice@thepartner.com",
    "brandContactName": "Bob",
    "brandContactEmailAddress": "bob@thebrand.com",
    "brandWebsiteUrl": "https://thebrand.com/"
  }
}
```

### Look up an agent's verification info

You can retrieve the status of an agent's brand verification. For more details, see [`brands.agents.getVerification`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getVerification).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

businessCommunicationsApiHelper.getAgentVerification(agent.name).then((response) => {

}).catch((err) => {
  console.log(err);
});
```
```
AgentVerification verification = api.getAgentVerification(agent.getName());
logger.info("RBM agent verification: " + verification);
```

This code returns the verification status and partner info:

```
{
  "name": "brands/40bd963f-ff92-425c-b273-8f0892d2d017/agents/my_new_agent_ciymyd2b_agent/verification",
  "verificationState": "VERIFICATION_STATE_UNVERIFIED",
  "agentVerificationContact": {
    "partnerName": "John Doe",
    "partnerEmailAddress": "john.doe@gmail.com",
    "brandContactName": "Bob",
    "brandContactEmailAddress": "bob@brand.com",
    "brandWebsiteUrl": "https://www.brand.com"
  }
}
```

### Submit an agent for launch

You can submit an agent for launch on one or more carriers. Some launches are managed by Google and others are managed directly by carriers. The carrier-managed launches may have additional requirements. See [Google-managed vs. Carrier-managed launches](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch#google-managed-vs.) for more information.

Before you can launch an agent for the first time, you need to [submit verification information](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/brand-verification#submit-verification-information). This enables Google, carriers, or both to verify with your brand contact that you are authorized to manage the agent on their behalf. See [brand verification](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/brand-verification) for details.

Once you've submitted the verification information and completed the [launch prerequisites](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/launch-approval#prerequisites), you can submit a launch request.

You can submit an agent for launch on one or more carriers. The completed launch questionnaire must be provided as part of the launch request. For more details, see [`brands.agents.requestLaunch`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/requestLaunch).

```
curl -v -X POST "https://businesscommunications.googleapis.com/v1/$AGENT_ID:requestLaunch" \
  -H "Content-Type: application/json" \
  -H "User-Agent: curl/business-messaging" \
  -H "\`oauth2l header --json rbm-developer-service-account-credentials.json businesscommunications\`" \
  -d "{
    'agentLaunch': {
      'rcsBusinessMessaging': {
        'questionnaire': {
          'contacts': [
            {
              'name': 'John Doe',
              'title': 'Product Owner',
              'email': 'support@demo.test'
            }
          ],
          'optinDescription': 'Thanks for your request.',
          'triggerDescription': 'Promotional messages will be triggered in a timely manner.',
          'interactionsDescription': 'Promotional messages are one way.',
          'optoutDescription': 'Sorry to see you go.',
          'agentAccessInstructions': 'Thanks for your request.',
          'videoUris': [
            'https://d2q4iodazzzt8b.cloudfront.net/MicrosoftTeamsvideo2_1758533835.mp4'
          ],
          'screenshotUris': [
            'https://rm.virbm.com/Il9ChvVEhS1na5mr/ee9bc94b468a40688fb7fc71cb1c069c.png'
          ]
        },
        'launchDetails': {
          '/v1/regions/$CARRIER_ID': {}
        }
      }
    }
  }"
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-curl/blob/main/business-communications-api/rbm-management-api-samples/launchAgent.sh).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);
  
let agentLaunch = {
  questionnaire: {
    contacts: [
      {
        name: 'James Bond',
        title: 'Mr 0 0 7',
        email: 'someone@somewhere.com'
      }
    ],
    optinDescription: 'Users accepted our terms of service online.',
    triggerDescription: 'We are reaching preregistered users',
    interactionsDescription: 'This agent does not do much.',
    optoutDescription: 'Reply stop and we stop.',
    agentAccessInstructions: 'This is a a simple agent that reaches registered users.',
    videoUris: [
      'https://www.google.com/a/video'
    ],
    screenshotUris: [
      'https://www.google.com/a/screenshot'
    ]
  },
  launchDetails: {}
};

businessCommunicationsApiHelper.launchAgent(agent.name, agentLaunch).then((response) => {

}).catch((err) => {
  console.log(err);
});
```
```
Optional<Questionnaire> q = Optional.of(AgentFactory.createRbmQuestionnaire());
AgentLaunch launch = api.requestRbmAgentLaunch(agent.getName(), regionIds, q);
logger.info("RBM agent updated launch: " + launch);
```

This code returns the agent launch information:

```
{
  "name": "brands/40bd963f-ff92-425c-b273-8f0892d2d017/agents/my_new_agent_7jo0trhw_agent/launch",
  "rcsBusinessMessaging": {
    "questionnaire": {
      "contacts": [
        {
          "name": "James Bond",
          "title": "Mr O O 7",
          "email": "someone@somewhere.com"
        }
      ],
      "optinDescription": "Users accepted our terms of service online.",
      "triggerDescription": "We are reaching preregistered users",
      "interactionsDescription": "This agent does not do much.",
      "optoutDescription": "Reply stop and we stop.",
      "agentAccessInstructions": "This is a a simple agent that reaches registered users.",
      "videoUris": [
        "https://www.google.com/a/video"
      ],
      "screenshotUris": [
        "https://www.google.com/a/screenshot"
      ]
    },
    "launchDetails": {
      "/v1/regions/some-carrier": {
        "launchState": "LAUNCH_STATE_PENDING",
        "updateTime": "2023-02-24T15:02:13.903554Z"
      }
    },
    "launchRegion": "NORTH_AMERICA"
  }
}
```

Note that `launchRegion` is deprecated and is scheduled to be removed soon.

To launch an agent to one or more regions, when the agent **hasn't** launched before, call the [`requestLaunch`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/requestLaunch) method with an object containing a map of **only keys** for all regions you want the agent to launch to. Using an empty map allows to maintain internal API consistency in the objects used between API calls.

```
curl -X POST \
"https://businesscommunications.googleapis.com/v1/brands/BRAND_ID/agents/AGENT_ID:requestLaunch" \
-H "Content-Type: application/json" \
-H "$(oauth2l header --json PATH_TO_SERVICE_ACCOUNT_KEY businesscommunications)" \
-d "{
  'name': 'brands/BRAND_ID/agents/AGENT_ID/launch',
  'rcsBusinessMessaging': {
    'questionnaire': {
      'contacts': [
        {
          'name': 'Contact person 000',
          'title': 'Contact manager 000',
          'email': 'user@domain.com000'
        }
      ],
      'optinDescription': 'Opt-in description 0',
      'triggerDescription': 'Trigger description 0',
      'optoutDescription': 'Opt-out description 0',
      'agentAccessInstructions': 'Agent instructions 0',
      'videoUris': [
        'https://www.youtube.com/watch?v=NN75im_us4k'
      ],
      'screenshotUris': [
        'https://www.youtube.com/watch?v=NN75im_us4k'
      ]
    },
    'launchDetails': {
      '/v1/regions/fi-rcs': {}
    }
  }
}"
```

To launch an agent to one or more regions (when the agent **has** launched before), call the [requestLaunch](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/requestLaunch) method with an object containing a map of **only keys** of **all** regions the agent is already launched on **and** **all** regions the agent wants to launch to. Using an empty map allows to maintain internal API consistency in the objects used between API calls.

```
curl -X POST \
"https://businesscommunications.googleapis.com/v1/brands/BRAND_ID/agents/AGENT_ID:requestLaunch" \
-H "Content-Type: application/json" \
-H "$(oauth2l header --json PATH_TO_SERVICE_ACCOUNT_KEY businesscommunications)" \
-d "{
  'name': 'brands/BRAND_ID/agents/AGENT_ID/launch',
  'rcsBusinessMessaging': {
    'launchDetails': {
      '/v1/regions/fi-rcs': {},
      '/v1/regions/vodafone-idea-india': {}
    }
  }
}"
```

If an agent calls the `requestLaunch` method but doesn't include all regions where the agent is already launched as keys, a `400 - Bad Request` error is thrown.

### Look up an agent's launch status

You can retrieve the current launch status of an agent. For more details, see [`brands.agents.getLaunch`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getLaunch).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

businessCommunicationsApiHelper.getAgentLaunch(agent.name).then((response) => {

}).catch((err) => {
  console.log(err);
});
```
```
AgentLaunch launch = api.getAgentLaunch(agent.getName());
logger.info("RBM agent launch: " + launch);
```

If a launch is rejected by the carrier, a partner can request launch on the carrier again (request has an `UNSPECIFIED` state and backend has a `REJECTED` state).

This code returns the launch information and the launch status for each target carrier:

```
{
  "name": "brands/40bd963f-ff92-425c-b273-8f0892d2d017/agents/my_new_agent_7jo0trhw_agent/launch",
  "rcsBusinessMessaging": {
    "questionnaire": {
      "contacts": [
        {
          "name": "James Bond",
          "title": "Mr O O 7",
          "email": "someone@somewhere.com"
        }
      ],
      "optinDescription": "Users accepted our terms of service online.",
      "triggerDescription": "We are reaching preregistered users",
      "interactionsDescription": "This agent does not do much.",
      "optoutDescription": "Reply stop and we stop.",
      "agentAccessInstructions": "This is a a simple agent that reaches registered users.",
      "videoUris": [
        "https://www.google.com/a/video"
      ],
      "screenshotUris": [
        "https://www.google.com/a/screenshot"
      ]
    },
    "launchDetails": {
      "/v1/regions/some-carrier": {
        "launchState": "LAUNCH_STATE_PENDING",
        "updateTime": "2023-02-24T15:02:13.903554Z"
      }
    },
    "launchRegion": "NORTH_AMERICA"
  }
}
```

Note that `launchRegion` is deprecated and is scheduled be removed soon.

### Add additional carriers to an agent's launch

After you retrieve the current launch information for your agent using the `brands.agents.getLaunch` API call, you can add more target carriers to expand your agent's reach. For more details, see [`brands.agents.updateLaunch`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/updateLaunch).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);');

// To launch an agent to further carriers, we need to first obtain the existing
// launch information and extend it with the new carrier(s).
businessCommunicationsApiHelper.getAgentLaunch(agent.name).then((response) => {
  let existingLaunch = response.data.rcsBusinessMessaging;

  // Now we add the new carrier to the existing launch
  existingLaunch.launchDetails[config.launchCarrier2] = null;

  // And we submit the launch again
  businessCommunicationsApiHelper.launchAgent(agent.name, existingLaunch).then((response) => {
    console.log('Launch details are:');
    console.log(JSON.stringify(response.data, null, 2));
  }).catch((err) => {
    console.log(err);
  });
}).catch((err) => {
  console.log(err);
});
```

This code returns the updated launch information:

```
{
  "name": "brands/40bd963f-ff92-425c-b273-8f0892d2d017/agents/my_new_agent_7jo0trhw_agent/launch",
  "rcsBusinessMessaging": {
    "questionnaire": {
      "contacts": [
        {
          "name": "James Bond",
          "title": "Mr O O 7",
          "email": "someone@somewhere.com"
        }
      ],
      "optinDescription": "Users accepted our terms of service online.",
      "triggerDescription": "We are reaching preregistered users",
      "interactionsDescription": "This agent does not do much.",
      "optoutDescription": "Reply stop and we stop.",
      "agentAccessInstructions": "This is a a simple agent that reaches registered users.",
      "videoUris": [
        "https://www.google.com/a/video"
      ],
      "screenshotUris": [
        "https://www.google.com/a/screenshot"
      ]
    },
    "launchDetails": {
      "/v1/regions/some-carrier": {
        "launchState": "LAUNCH_STATE_PENDING",
        "updateTime": "2023-02-24T15:02:13.903554Z"
      },
      "/v1/regions/another-carrier": {
        "launchState": "LAUNCH_STATE_PENDING",
        "updateTime": "2023-02-24T15:04:50.456552Z"
      }
    },
    "launchRegion": "NORTH_AMERICA"
  }
}
```

## Post-launch and maintenance

### List all agents created for a brand

The developer can retrieve a list of all agents they have created for a brand. For more details, see [`brands.agents.list`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/list).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

businessCommunicationsApiHelper.listAgents(brand.name).then((response) => {
  console.log('Current agents are:');
  console.log(response.data);
  datastore.saveJsonData('agents', response.data.agents);
}).catch((err) => {
  console.log(err);
});
```
```
Brand brand = api.getBrand(brandId);
logger.info("Brand: " + brand);
ListAgentsResponse response = api.listAllAgents(brand);
List<Agent> agents = response.getAgents().stream()
  .sorted(Comparator.comparing(Agent::getName)).collect(Collectors.toList());
logger.info(String.format("Found %d agents", response.getAgents().size()));
for (Agent agent : agents) {
  logger.info(String.format("Agent [%s]: '%s'", agent.getName(), agent.getDisplayName()));
}
```

This code returns a list of all the agents owned by the brand:

```
{
  agents: [
    {
      name: 'brands/40bd963f-ff92-425c-b273-8f0892d2d017/agents/my_new_agent_4fpd1psz_agent',
      displayName: 'My new agent',
      rcsBusinessMessagingAgent: [Object]
    },
    {
      name: 'brands/40bd963f-ff92-425c-b273-8f0892d2d017/agents/my_new_agent_ciymyd2b_agent',
      displayName: 'My second agent',
      rcsBusinessMessagingAgent: [Object]
    },
    {
      name: 'brands/40bd963f-ff92-425c-b273-8f0892d2d017/agents/my_new_agent_helof85o_agent',
      displayName: 'My third agent',
      rcsBusinessMessagingAgent: [Object]
    }
  ]
}
```

By default, the list of all agents excludes agents that have been archived by the partner. To include archived agents in the results, set the `includeArchived` parameter to `true`.

The \`listAgents\` method accepts an optional configuration object to include archived agents.
```
const businessCommunicationsApiHelper =
 require('@google/rbm-businesscommunications');

const privateKey =
 require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunicationsApi(privateKey);

// To list all agents including archived ones, set includeArchived to true
const listOptions = {
  includeArchived: true
};

businessCommunicationsApiHelper.listAgents(brand.name, listOptions).then((response) => {
 console.log('Current agents (including archived) are:');
 console.log(response.data);
 datastore.saveJsonData('agents', response.data.agents);
}).catch((err) => {
 console.log(err);
});
```

The \`listAllAgents\` method includes a boolean parameter for visibility control.
```
// To list all agents including archived ones, pass 'true' for the includeArchived parameter
boolean includeArchived = true;
Brand brand = api.getBrand(brandId);
logger.info("Brand: " + brand);

// Call listAllAgents with the brand and the includeArchived flag
ListAgentsResponse response = api.listAllAgents(brand, includeArchived);

List agents = response.getAgents().stream()
 .sorted(Comparator.comparing(Agent::getName)).collect(Collectors.toList());

logger.info(String.format("Found %d agents (including archived)", response.getAgents().size()));
for (Agent agent : agents) {
 logger.info(String.format("Agent [%s]: '%s' (Archived: %s)",
    agent.getName(), agent.getDisplayName(), agent.getIsArchived()));
}
```

### Unlaunch an agent

To unlaunch an agent from a specific region, call the [`updateLaunch`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/updateLaunch) method, specify the target region in the call's map, and set `launchState` to `LAUNCH_STATE_UNLAUNCHED`.

```
curl -X PATCH \
"https://businesscommunications.googleapis.com/v1/brands/BRAND_ID/agents/AGENT_ID" \
-H "Content-Type: application/json" \
-H "$(oauth2l header --json PATH_TO_SERVICE_ACCOUNT_KEY businesscommunications)"\
-d "{
  'rcsBusinessMessaging': {
    'launchDetails': {
      '/v1/regions/fi-rcs': {
        'launchState': 'LAUNCH_STATE_UNLAUNCHED'
      },
      '/v1/regions/vodafone-idea-india': {
        'launchState': 'LAUNCH_STATE_UNLAUNCHED'
      }
    }
  }
}"
```

### Delete an agent

For security reasons, RBM agents can no longer be deleted. For assistance, [contact the RCS for Business support team](https://developers.google.com/business-communications/rcs-business-messaging/support/overview/contact).

### Archive or unarchive agents

To maintain a clean and organized workspace, you can archive agents that are no longer in use. Archiving an agent hides it from default API discovery results.

Archiving is a visibility-only change. It does not delete the agent or affect its underlying launch state. You can unarchive an agent at any time to restore its visibility and continue management.

To make sure that active agents are not accidentally hidden, the following rules apply:

- **Eligibility**: You can only archive agents that are in an inactive state: `UNLAUNCHED`, `SUSPENDED`, or `REJECTED`.
- **Restrictions**: You can't archive an agent that is `LAUNCHED` or `PENDING` on any carrier. If you attempt to archive such an agent, the request will be rejected with an error.

To archive or unarchive an agent, use the patch method. You must include the `updateMask=is_archived` parameter in the URL to specify the field being updated. To archive, set the `isArchived` boolean to `true` and to unarchive, set it to `false`.

**Method**: `PATCH /v1/brands/{brandId}/agents/{agentId}` Add `is_archived` to the update mask.

```
{
  "isArchived": true
}
```

#### List agents with filters

By default, the `list` method hides archived agents. To include them in your results, use the `include_archived` parameter.

**Method**: `GET /v1/brands/{brandId}/agents?include_archived=true`[Previous](https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/brands)

[Manage brands](https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/brands)[Next](https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/testers)

[Manage testers](https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/testers)