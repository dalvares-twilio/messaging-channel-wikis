---
title: "System User Permissions"
source: "https://developers.facebook.com/docs/business-management-apis/system-users/guides/permissions"
author:
published:
created: 2026-04-05
description: "Assign system user tasks on ad accounts, user page, and proxied assets. Retrieve permissions."
tags:
  - "clippings"
---
<iframe frameborder="0" height="0" width="0" src="https://developers.facebook.com/common/referer_frame.php?cb=1"></iframe><iframe frameborder="0" height="0" width="0" src="https://developers.facebook.com/common/referer_frame.php?cb=1"></iframe><iframe frameborder="0" height="0" width="0" src="https://developers.facebook.com/common/referer_frame.php?cb=1"></iframe><iframe frameborder="0" height="0" width="0" src="https://developers.facebook.com/common/referer_frame.php?cb=1"></iframe>

## Assign System User Tasks on Ad Accounts

You need the following to make the API call:

- `user` - System user id that you created
- Tasks - Access type for this system user for the ad account: `['MANAGE']`, `['ADVERTISE']` and `['ANALYZE']`.
- `access_token` - of an admin user or **admin system user**.

To assign system user permissions to an ad account, make the following `POST` request:

```
curl \
-F "user=APP_SCOPED_SYSTEM_USER_ID" \
-F "tasks=['MANAGE', 'ADVERTISE', 'ANALYZE']" \
-F "business=BUSINESS_ID" \
-F "access_token=ACCESS_TOKEN" \
"https://graph.facebook.com/VERSION/act_AD_ACCOUNT_ID/assigned_users"
```

## Assign System User Pages Tasks

You need the following to make the call:

- `user` - System user id that you created
- Tasks - Access type for this system user for Page: `['MANAGE']`, `['CREATE_CONTENT']`, `['MODERATE']`, `['ADVERTISE']` and `['ANALYZE']`
- `access_token` - of admin user or **admin system user**.

To assign system user permissions to a page, make this `POST` request:

```
curl \
-F "user=APP_SCOPED_SYSTEM_USER_ID" \
-F "tasks=['ADVERTISE', 'ANALYZE']" \
-F "access_token=ACCESS_TOKEN" \
"https://graph.facebook.com/VERSION>/PAGE_ID/assigned_users"
```

## Assign System User Tasks on Proxied Assets

You may request access to an ad account or a page owned by another Business Manager. Or a business can grant access to assets owned to another business. See [Business Assets](https://developers.facebook.com/docs/marketing-api/businessmanager/assets).

**System users** can have access for these proxied assets for their given tasks. The idea behind this is to provide mechanism to make API calls to ad accounts or Pages that your business manager handles for your clients.

## Retrieve System User Permissions

To see permissions that a system user has over assets, you need:

- `business_id` - Business Manager owning this system user
- `access_token` - Of user with `business_management` permission or an admin user

Then, make this call:

```
curl -G \
-d "fields=email,assigned_ad_accounts,assigned_pages" \
-d "access_token=ACCESS_TOKEN" \
https://graph.facebook.com/VERSION/APP_SCOPED_SYSTEM_USER_ID
```