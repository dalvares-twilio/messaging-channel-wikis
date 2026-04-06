---
title: "System User API Call Examples"
source: "https://developers.facebook.com/docs/business-management-apis/system-users/guides/api-calls"
author:
published:
created: 2026-04-05
description: "How to make automated API calls for Marketing API and Pages API."
tags:
  - "clippings"
---
<iframe frameborder="0" height="0" width="0" src="https://developers.facebook.com/common/referer_frame.php?cb=1"></iframe><iframe frameborder="0" height="0" width="0" src="https://developers.facebook.com/common/referer_frame.php?cb=1"></iframe><iframe frameborder="0" height="0" width="0" src="https://developers.facebook.com/common/referer_frame.php?cb=1"></iframe><iframe frameborder="0" height="0" width="0" src="https://developers.facebook.com/common/referer_frame.php?cb=1"></iframe>

[API Calls](#api-calls)

[Marketing API](#marketing-api)

[Pages API](#page-api-calls)

## API Calls

Examples of API Calls using system users.

These calls are automated calls made by a server not a human, but the end point call syntax does not change. You just need to use the system user token instead of the old gray user token.

Example, where `access_token` should be the system user token:

```
CURL https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/?access_token=<ACCESS_TOKEN>
```

## Pages API

These are automated calls made by a server not a human. Once the system user has `pages_read_engagement` permission, the system user access token can be used to retrieve the page access token.

The call to retrieve the token is a `GET` request, where `me` refers to the **system user** since that is the user id from the access token.

```
CURL https://graph.facebook.com/<API_VERSION>/me/accounts?access_token=<ACCESS_TOKEN>
```

The response looks like this:

```
{
    "data": [
        {
        "category": "App page", 
        "name": "Test App Page", 
        "access_token": "CAAHYqnL1lRYBAOXZAHqZCQ5gUuIId6dKxzfOovZADPZBzSq79BxvbGQWE38IMQQxhVSbdzBPb2IgfVkmXKDTQAPf6PHG8z4WZCkhj26V2cxE7bJNgyg97JwmmDwlHVsOCNgNTMEyNAvI4suafezTmthyKboe5KABA2PrSc1BEtjMMssK6b8FP2rCNjShRcZD", 
        "tasks": [
            "ANALYZE" 
            ],
        "id": "17502650099664862613886"
        }
    ], 
    "paging": {
    "next": "https://graph.facebook.com/<API_VERSION>/100008179/accounts?limit=5000&amp;offset=5000&amp;__after_id=175024862613886"
    }
}

}
```

At this point, all the steps have been taken to make page calls if you use system user to programmatically manage pages. The way to call the page end points does not change.

On This Page

[API Calls](#api-calls)

[Marketing API](#marketing-api)

[Pages API](#page-api-calls)