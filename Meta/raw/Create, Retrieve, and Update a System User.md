---
title: "Create, Retrieve, and Update a System User"
source: "https://developers.facebook.com/docs/business-management-apis/system-users/create-retrieve-update"
author:
published:
created: 2026-04-05
description: "Create, retrieve and update admin system users and regular system users. Invalidate access tokens."
tags:
  - "clippings"
---
<iframe frameborder="0" height="0" width="0" src="https://developers.facebook.com/common/referer_frame.php?cb=1"></iframe><iframe frameborder="0" height="0" width="0" src="https://developers.facebook.com/common/referer_frame.php?cb=1"></iframe><iframe frameborder="0" height="0" width="0" src="https://developers.facebook.com/common/referer_frame.php?cb=1"></iframe><iframe frameborder="0" height="0" width="0" src="https://developers.facebook.com/common/referer_frame.php?cb=1"></iframe>

## Create, Retrieve and Update a System User

If this is the first time you create a system user, you do not yet have a admin system user token. Start by getting a real admin user's access token in [Business Manager](https://business.facebook.com/).

## Create

Use your admin system user token or your own admin user's access token to create a system user.

**Note:** A system user can only be granted a role on an app if both the system user and the app belong to the same business. If your app needs to access data using a system user and access token belonging to another business, use the [Business On Behalf Of API](https://developers.facebook.com/docs/marketing-api/business-manager/guides/on-behalf-of/) instead.

Here are the requests you need to get a system user token and make API calls. The first three steps are setup you can also do in [Business Manager](https://business.facebook.com/). When you create your first system user, you use the access token of a real user, who is an `admin` of the business manager.

#### Create Admin System User and Generate Token

1. Create an admin system user with your own admin user access token.
2. [Install](https://developers.facebook.com/docs/marketing-api/businessmanager/systemuser/install-apps-and-generate-tokens#TOS) the app with the admin system user using the access token of the admin user.
3. [Generate](https://developers.facebook.com/docs/marketing-api/businessmanager/systemuser/install-apps-and-generate-tokens#generate-token) the **admin system user** token using the access token of the admin user.

#### Create system user

1. Create a system user using the admin user's access token.
2. Or, create a system user using the access token of an admin system user of your business manager, if you created one.

#### Generate System User's

1. [Install](https://developers.facebook.com/docs/marketing-api/businessmanager/systemuser/install-apps-and-generate-tokens#TOS) the app with the system user using the access token from: admin user, admin system user, or another system user.
2. [Assign permission](https://developers.facebook.com/docs/marketing-api/businessmanager/systemuser/permissions) to assets (such as ad accounts, Pages) belonging to your Business Manager. Permissions should be assigned to the newly created system user using the access token from: admin user or admin system user.
3. [Generate](https://developers.facebook.com/docs/marketing-api/businessmanager/systemuser/install-apps-and-generate-tokens#generate-token) the system user access token using the access token of the admin user, or admin system user.
4. Now, use the system user access token to [make API calls](https://developers.facebook.com/docs/marketing-api/businessmanager/systemuser/api-calls) on business assets.

To create a system user or admin system user via API, you need:

- An access token: of an admin user, or admin system user for this Business Manager
- Role: `ADMIN` or `EMPLOYEE`
- Name: identifier of this system user or admin system user

To create a system user, make a `POST` request:

```
curl \
-F "name=Ad Server" \
-F "role=EMPLOYEE" \
-F "access_token=<ACCESS_TOKEN>" \
"https://graph.facebook.com/<API_VERSION>/<BUSINESS_ID>/system_users"
```

This returns the app-scoped `id` of the new system user:

```
{
  "id" : "100000008899900"
}
```

This is the [app-scoped ID](https://developers.facebook.com/docs/apps/upgrading#upgrading_v2_0_user_ids) for a system user. You should use it to make API calls, not the canonical ID in [`Business Manager > System Users`](https://business.facebook.com/settings/system-users).

## Retrieve

To get the list of system users, you need an admin user or admin system user access token. The list includes admin system users, and their [app-scoped IDs](https://developers.facebook.com/docs/apps/upgrading#upgrading_v2_0_user_ids).

Make a `GET` request:

```
curl "https://graph.facebook.com/<API_VERSION>/<BUSINESS_ID>/system_users?access_token=<ACCESS_TOKEN>>"
```

This returns a list of all system users, including admin system users, owned by a Business Manager:

```
{
  "data": [
    {
      "id": "1000081799813",
      "name": "Reporting server"
      "role": "ADMIN",
    }, 
  ]
}
```

## Update

You can change the name of a system user or admin system user:

```
curl \
-F "system_user_id=<APP_SCOPED_SYSTEM_USER_ID>" \
-F "name=FBX Server" \
-F "access_token=<ACCESS_TOKEN>" \
"https://graph.facebook.com/<API_VERSION>/<BUSINESS_ID>/system_users"
```

## Invalidate Access Tokens

You cannot delete a system user or admin system user, but you can invalidate all access tokens for that user. Invalidate tokens by sending a `DELETE` request to:

```
https://graph.facebook.com/<API_VERSION>/<APP_SCOPED_SYSTEM_USER_ID>/access_tokens
```

The response returns `true`, if the call is successful. After that, you can [generate new access tokens for the system user](https://developers.facebook.com/docs/marketing-api/businessmanager/systemuser/install-apps-and-generate-tokens#generate-token), as seen above.