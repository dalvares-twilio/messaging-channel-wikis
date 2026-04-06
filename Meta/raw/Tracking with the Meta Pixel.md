---
title: "Tracking with the Meta Pixel"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/pixel-tracking"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

The [Meta Pixel](https://developers.facebook.com/docs/meta-pixel) is a snippet of JavaScript code that allows you to track visitor activity on your website. It works by loading a small library of functions that you can use whenever a site visitor takes an action (i.e., an event) that you want to track; this is called a conversion.

Embedding the Meta Pixel is a feature that lets you know how many visitors to a given page have clicked on the embedded signup button. This can help you understand how many people considered WhatsApp and how many successfully converted.

Make sure the [initial code setup](https://developers.facebook.com/docs/meta-pixel/get-started#base-code) triggers a `Pageview` event with your Facebook app ID and the `feature` parameter.

## Example

```
<!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '<i>your-pixel-id</i>');
  fbq('track', 'PageView', {appId: '<i>your-facebook-app-id</i>', feature: 'whatsapp_embedded_signup'});
</script>
<noscript>
  <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=<i>your-pixel-id</i>&ev=PageView&noscript=1"/>
</noscript>
<!-- End Meta Code -->
```

Did you find this page helpful?