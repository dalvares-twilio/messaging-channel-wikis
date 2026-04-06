---
title: "Manage brands  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/brands"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Before creating an agent, you must create an owning brand to group related agents.
- Code snippets for managing brands are available in Java and Node.js.
- You can create, retrieve, list, and rename brands using the provided API examples.

All agents belong to a brand (business, organization, or group). Before an agent can be created, it's necessary to create an owning brand. Brands are purely organizational to help you group related agents together.

Code snippets on this page are taken from the [Java samples](https://github.com/rcs-business-messaging/rbm-api-examples/tree/master/java/rbm-mgmt-api) and [Node.js samples](https://github.com/rcs-business-messaging/rbm-api-examples/tree/master/nodejs/rbm-mgmt-api).

## Create a brand

You can create a new brand. For more details, see [`brands`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands) and [`brands.create`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands/create).

```
curl -v -X POST "https://businesscommunications.googleapis.com/v1/brands" \
  -H "Content-Type: application/json" \
  -H "User-Agent: curl/business-messaging" \
  -H "\`oauth2l header --json rbm-developer-service-account-credentials.json businesscommunications\`" \
  -d "{
    'name': 'Test Brand',
    'displayName': 'Test Brand'
  }"
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-curl/blob/main/business-communications-api/rbm-management-api-samples/createBrand.sh).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

businessCommunicationsApiHelper.createBrand('My new brand').then((response) => {
    console.log('The new brand is:');
    console.log(response.data);
}).catch((err) => {
    console.log(err);
});
```
```
String displayName = flags.getOrDefault("brand_name", "Test brand: " + now.getSecond());
Brand brand = api.createBrand(displayName);
logger.info("New brand id: " + brand.getName());
```

This code returns the new brand name (`displayName`) and a unique identifier (`name`) assigned to the brand:

```
{
  name: 'brands/17456b6b-65dc-4e35-b128-fd3047664ddf',
  displayName: 'My new brand'
}
```

## Retrieve a brand

You can retrieve information about a brand using its unique identifier (`name`). For more details, see [`brands.get`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands/get).

```
curl -v "https://businesscommunications.googleapis.com/v1/$BRAND_ID" \
  -H "Content-Type: application/json" \
  -H "User-Agent: curl/business-messaging" \
  -H "\`oauth2l header --json rbm-developer-service-account-credentials.json businesscommunications\`"
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-curl/blob/main/business-communications-api/rbm-management-api-samples/getBrand.sh).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

businessCommunicationsApiHelper.getBrand(brandId).then((response) => {
  console.log('Brand details are:');
  console.log(response.data);
}).catch((err) => {
  console.log(err);
});
```
```
Brand brand = api.getBrand(brandId);
logger.info("Brand: " + brand);
```

This code returns the brand information:

```
{
  name: 'brands/17456b6b-65dc-4e35-b128-fd3047664ddf',
  displayName: 'My new brand'
}
```

## List brands

You can retrieve a list of all the brands you have created. For more details, see [`brands.list`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands/list).

```
curl -v "https://businesscommunications.googleapis.com/v1/brands" \
  -H "Content-Type: application/json" \
  -H "User-Agent: curl/business-messaging" \
  -H "\`oauth2l header --json rbm-developer-service-account-credentials.json businesscommunications\`"
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-curl/blob/main/business-communications-api/rbm-management-api-samples/listBrands.sh).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

businessCommunicationsApiHelper.listBrands().then((response) => {
  console.log('Current brands available are:');
  console.log(response.data);
}).catch((err) => {
  console.log(err);
});
```
```
List<Brand> brands = api.listBrands().stream().sorted(Comparator.comparing(Brand::getName))
  .collect(Collectors.toList());
logger.info(String.format("Found %d brands", brands.size()));
for (Brand brand : brands) {
  logger.info(String.format("Brand [%s]: '%s'", brand.getName(), brand.getDisplayName()));
}
```

This code returns a list of all your brands:

```
{
  brands: [
    {
      name: 'brands/1deb6297-8a57-474a-a02c-48529a3de0a0',
      displayName: 'My brand'
    },
    {
      name: 'brands/3b607982-8c06-467a-96b8-020ddc26ac83',
      displayName: 'My second brand'
    },
    {
      name: 'brands/40bd963f-ff92-425c-b273-8f0892d2d017',
      displayName: 'My thrd brand'
    }
  ]
}
```

## Rename a brand

You can change the brand's display name. For more details, see [`brands.patch`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands/patch).

The brand's display name can be changed using the `patch` operation:

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

businessCommunicationsApiHelper
  .patchBrand(brand.name, 'My brand new name').then((response) => {
    console.log(response.data);
});
```

This code returns the updated brand information:

```
{
  name: 'brands/40bd963f-ff92-425c-b273-8f0892d2d017',
  displayName: 'My brands new name'
}
```