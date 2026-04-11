---
type: workflow
title: "Set Up Deep Links"
trigger: "Drive users to start RCS conversations"
outcome: "Working deep links and QR codes for user acquisition"
prerequisites: [launched-agent, fallback-phone-number]
estimated_time: "30 minutes"
tags: [deep-links, qr-codes, user-acquisition]
---

## Overview

Create SMS deep links that launch RCS conversations from websites, emails, apps, or QR codes. Includes fallback handling for non-RCS devices.

## Prerequisites

- Agent launched on target carriers (or use test device for development)
- Fallback phone number (recommended for graceful degradation)
- URL shortener service (recommended for QR codes)

## Steps

1. **Choose URL Format**

   **Format 1 — Service ID only** (no fallback):
   ```
   sms:bot%40botplatform.example.com?body=hello
   ```
   - Shows error if RCS unavailable
   - Use only when RCS is guaranteed
   
   **Format 2 — Phone + Service ID** (with fallback):
   ```
   sms:+15554443333?service_id=bot%40example.com&body=hello
   ```
   - Falls back to SMS if RCS unavailable
   - **Recommended** for production use

2. **Set Pre-filled Message** (optional)
   - Add `body` parameter with URL-encoded text
   - Example: `body=Start%20conversation`
   - User sees message ready to send
   - Align message with user intent (e.g., "Track my order")

3. **Generate Link**
   
   **Using Developer Console:**
   - Navigate to agent → SMS Links
   - Enter parameters
   - Copy generated link
   
   **Manual construction:**
   ```
   sms:+15554443333?service_id=bot%40example.com&body=Hi
   ```
   - URL-encode special characters (`@` → `%40`, space → `%20`)

4. **Create QR Code** (for physical touchpoints)
   - Use Developer Console QR generator, or
   - Use any QR generator with your deep link
   - **Best practice**: Use shortened URL for cleaner QR and future flexibility
   - Test QR scan with multiple devices

5. **Add Fallback Handling**
   - Ensure phone number is included in URL (Format 2)
   - Test on non-RCS device to verify SMS fallback works
   - Consider server-side redirect for web links (detect device capability)

6. **Test Across Scenarios**
   - RCS-enabled device on launched carrier → RCS conversation starts
   - RCS-enabled device on non-launched carrier → fallback to SMS
   - Non-RCS device → fallback to SMS
   - No fallback phone provided → error page shown

## Verification

- [ ] Deep link opens RCS conversation on supported device
- [ ] Fallback works on non-RCS device
- [ ] QR code scannable and launches correctly
- [ ] Pre-filled message appears as expected

## Troubleshooting

- **Issue**: Error page shown instead of RCS conversation
  **Solution**: Success requires: Google Messages installed (v20241029+), RCS enabled, agent launched on carrier. Use Format 2 with phone number for fallback.

- **Issue**: No fallback to SMS
  **Solution**: Format 1 (service ID only) has no fallback support. Use Format 2 with phone number for fallback.

- **Issue**: Manual URL copy-paste doesn't work
  **Solution**: URL must be embedded as button/link/QR. Manual copy-paste blocked by browser security.

- **Issue**: Can't pre-fill suggested replies or actions
  **Solution**: Not supported for security reasons. Only `body` parameter (plain text message) can be pre-filled.

## Related

- [user-acquisition](../concepts/user-acquisition.md)
- [rcs-enablement](../concepts/rcs-enablement.md)

## Sources

- [deep-links](../sources/deep-links.md)
