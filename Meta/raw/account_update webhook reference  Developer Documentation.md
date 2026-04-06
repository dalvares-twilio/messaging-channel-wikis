---
title: "account_update webhook reference | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## account\_update webhook reference

This reference describes trigger events and payload contents for the WhatsApp Business Account **account\_update** webhook.

The **account\_update** webhook notifies of changes to a WhatsApp Business Account’s [partner-led business verification](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) submission, its [authentication-international rate](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) eligibility, or primary business location, when it is shared with a [Solution Partner](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/overview), [policy or terms violations](https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement), offboarding, reconnection, or when it is deleted.

**Note:** Some features on this page are being released gradually and may not be available yet.

## Triggers

- A WhatsApp Business Account’s partner-led business verification submission is approved, rejected, or discarded.
- A WhatsApp Business Account is deleted.
- A WhatsApp Business Account is shared (“installed”) or unshared (“uninstalled”) with a partner.
- A WhatsApp Business Account violates Meta policies or terms.
- A WhatsApp Business Account becomes eligible for authentication-international rates.
- A WhatsApp Business Account’s primary business location is set.
- A WhatsApp Business Account gives the partner access to its ad accounts.
- A WhatsApp Business Account is restricted due to policy violations or enforcement actions.
- A WhatsApp Business Account accepts the MM API for WhatsApp terms of service.
- A business customer grants or revokes app permissions for a WhatsApp Business Account.
- A WhatsApp Business Account’s volume-based pricing tier is updated.
- **New:** A WhatsApp Business Account is offboarded due to a device change or phone number reregistration.
- **New:** A WhatsApp Business Account is reconnected after a device change or phone number reregistration.

## Syntax

```
{
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "time": <WEBHOOK_TRIGGER_TIMESTAMP>,
      "changes": [
        {
          "value": {
            "country": "<COUNTRY_CODE>", <!--only included for BUSINESS_PRIMARY_LOCATION_COUNTRY_UPDATE event -->
            "event": "<EVENT>",

            <!-- only included for AD_ACCOUNT_LINKED event -->
            "waba_info": {
              "waba_id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
              "ad_account_linked": "<AD_ACCOUNT_ID>",
              "owner_business_id": "<BUSINESS_PORTFOLIO_ID>"
            },

            <!-- only included for ACCOUNT_VIOLATION event -->
            "violation_info": {
              "violation_type": "<VIOLATION_TYPE>"
            },

            <!-- only included for AUTH_INTL_PRICE_ELIGIBILITY_UPDATE event -->
            "auth_international_rate_eligibility": {
              "exception_countries": [
                {
                  "country_code": "<EXCEPTION_COUNTRY_CODE>",
                  "start_time": <EXCEPTION_START_TIME>
                }
              ],
              "start_time": <START_TIME>
            },

            <!-- only included for DISABLED_UPDATE event -->
            "ban_info": {
              "waba_ban_state": "<WABA_BAN_STATE>",
              "waba_ban_date": "<WABA_BAN_DATE>"
            },

            <!-- only included for VOLUME_BASED_PRICING_TIER_UPDATE event -->
            "volume_tier_info": {
              "tier_update_time": <TIER_UPDATE_TIME>,
              "pricing_category": "<PRICING_CATEGORY>",
              "tier": "<TIER>",
              "effective_month": "<EFFECTIVE_MONTH>",
              "region": "<REGION>"
            },

            <!-- only included for MM_LITE_TERMS_SIGNED event -->
            "waba_info": {
              "waba_id": "<WABA_ID>",
              "owner_business_id": "<BUSINESS_PORTFOLIO_ID>"
            },

            <!-- only included for PARTNER_* events -->
            "waba_info": {
              "waba_id": "<CUSTOMER_WABA_ID>",
              "owner_business_id": "<CUSTOMER_BUSINESS_PORTFOLIO_ID>",

              <!-- only included for PARTNER_APP_INSTALLED, PARTNER_APP_UNINSTALLED events -->
              "partner_app_id": "<PARTNER_APP_ID>",

              <!-- only included if customer onboarded via a multi-partner solution,
                   omitted from PARTNER_APP_UNINSTALLED events -->
              "solution_id": "<SOLUTION_ID>",
              "solution_partner_business_ids": [
                "<PARTNER_IDS>"
              ]
            },

            <!-- only included for PARTNER_REMOVED events where the business
                 was using both the WhatsApp Business app and Cloud API,
                 and the disconnection was due to a business downgrade
                 or device inactivity. Part of a gradual rollout. -->
            "disconnection_info": {
              "reason": "<DISCONNECTION_REASON>",
              "initiated_by": "<DISCONNECTION_INITIATED_BY>"
            },

            <!-- only included for PARTNER_CLIENT_CERTIFICATION_STATUS_UPDATE event -->
            "partner_client_certification_info": {
              "client_business_id": "<CUSTOMER_BUSINESS_PORTFOLIO_ID>",
              "status": "<STATUS>",
              "rejection_reasons": [
                "<REJECTION_REASONS>"
              ]
            },

            <!-- only included for ACCOUNT_RESTRICTION event -->
            "restriction_info": [
              {
                "restriction_type": "<RESTRICTION_TYPE>",
                "expiration": <RESTRICTION_EXPIRATION>,
                "remediation": "<REMEDIATION_STEPS>"
              }
            ]
          },
          "field": "account_update"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

## Parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<AD_ACCOUNT_ID>`  *String* | Ad account ID. | `633456882212545` |
| `<BUSINESS_PORTFOLIO_ID>`  *String* | Business portfolio ID. | `131426832456945` |
| `<COUNTRY_CODE>`  *String* | ISO 3166-1 alpha-2 country code of the country where the [business to be based](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/authentication-international-rates#primary-business-location). | `IN` |
| `<CUSTOMER_BUSINESS_PORTFOLIO_ID>`  *String* | Business customer’s business portfolio ID. | `2729063490586005` |
| `<CUSTOMER_WABA_ID>`  *String* | Onboarded business customer’s WABA ID. | `365694316623787` |
| `<EVENT>`  *String* | WhatsApp Business Account (“WABA”) event.  Values can be:  `ACCOUNT_DELETED` — Indicates WABA was deleted.  `ACCOUNT_RESTRICTION` — Indicates WABA has been restricted due to [policy violations](https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement). See `restriction_info` for restriction details.  `AD_ACCOUNT_LINKED` — Indicates WABA has been onboarded onto Marketing Messages API for WhatsApp through Embedded Signup or Intent API and gives the partner access to its ad accounts.  `AUTH_INTL_PRICE_ELIGIBILITY_UPDATE` — Indicates WABA is eligible for [authentication-international rates](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/authentication-international-rates).  `BUSINESS_PRIMARY_LOCATION_COUNTRY_UPDATE` — Indicates WABA’s [primary business location](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/authentication-international-rates#primary-business-location) has been set.  `MM_LITE_TERMS_SIGNED` — Indicates that the WABA has successfully accepted the MM API for WhatsApp terms of service.  `PARTNER_ADDED` — Indicates WABA has been shared with a [Solution Partner](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/overview).  `PARTNER_APP_INSTALLED` — Indicates a business customer granted the app one or more permissions.  `PARTNER_APP_UNINSTALLED` — Indicates a business customer deauthenticated or uninstalled the app.  `PARTNER_CLIENT_CERTIFICATION_STATUS_UPDATE` — Indicates the WABA’s [partner-led business verification](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) submission is approved, rejected, or discarded.  `PARTNER_REMOVED` — Indicates WABA has been unshared with a [Solution Partner](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/overview).  `VOLUME_BASED_PRICING_TIER_UPDATE` — Indicates WABA’s volume-based pricing tier has been updated.  **New:** `ACCOUNT_OFFBOARDED` — Indicates WABA has been offboarded due to a device change or phone number reregistration.  **New:** `ACCOUNT_RECONNECTED` — Indicates WABA has been reconnected after a device change or phone number reregistration. | `PARTNER_ADDED` |
| `<DISCONNECTION_INITIATED_BY>`  *String* | Indicates whether the disconnection was initiated by your client or the system. Only included for `PARTNER_REMOVED` events when `disconnection_info` is present.  Values can be:  `SYSTEM` — The disconnection was system-initiated (for example, due to device inactivity).  `USER` — The disconnection was client-initiated (for example, your client registered their business phone number with the consumer WhatsApp app). | `USER` |
| `<DISCONNECTION_REASON>`  *String* | Reason for the disconnection. Only included for `PARTNER_REMOVED` events when the business was using both the [WhatsApp Business app and Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).  Values can be:  `BUSINESS_DOWNGRADE` — Your client registered their business phone number with the consumer WhatsApp app.  `COMPANION_INACTIVITY` — A companion device was inactive for approximately 30 days.  `PRIMARY_INACTIVITY` — The primary device was inactive for approximately 14 days. | `PRIMARY_INACTIVITY` |
| `<EFFECTIVE_MONTH>`  *String* | Effective month for the volume-based pricing tier update, in `YYYY-MM` format. | `2025-11` |
| `<EXCEPTION_COUNTRY_CODE>`  *String* | ISO 3166-1 alpha-2 country code of the country with a [start time exception](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/authentication-international-rates#exception-countries). | `ID` |
| `<EXCEPTION_START_TIME>`  *Integer* | Unix timestamp indicating authentication-international rate start time for the [exception country](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/authentication-international-rates#exception-countries). | `1751347424` |
| `<PARTNER_IDS>`  *Array* | Strings of business portfolio IDs of the Tech Provider (or Tech Partner) and Solution Partner associated with the [Multi-Partner Solution](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions). | `"506914307656634","116133292427920"` |
| `<PRICING_CATEGORY>`  *String* | Pricing category for the volume-based pricing tier update. | `UTILITY` |
| `<REGION>`  *String* | Region for the volume-based pricing tier update. | `India` |
| `<REMEDIATION_STEPS>`  *String* | Steps the business can take to remediate the restriction. Only included in `ACCOUNT_RESTRICTION` events, and only when remediation steps are available. See the [account restriction example](#account-restriction) for a payload without this field. | `Review your messaging practices and ensure compliance with WhatsApp policies.` |
| `<REJECTION_REASONS>`  *Array* | Rejection reason of the partner-led business verification submission.  Values can be:  `ADDRESS NOT MATCHING` — The country in the submitted address does not match the country on the client’s business profile. Edit the submission or have your client update their profile and try again.  `BUSINESS NOT ELIGIBLE` — Your client is not eligible for verification via partner-provided information. The client can still apply for [Meta business verification](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) directly.  `LEGAL NAME NOT MATCHING` — The legal name in the submission does not match the legal name or business name on the client’s business profile. The system checks for exact, fuzzy, and normalized matches. Edit the submission or have your client update their profile and try again.  `LEGAL NAME NOT FOUND IN DOCUMENTS` — The automated document review could not locate the business legal name in the uploaded documents. Common causes include:  - The business legal name is not mentioned in the documents - The text in the document is unclear or hard to read  `MALFORMED DOCUMENTS` — The uploaded documents could not be processed. The files may be corrupted, password protected, or in an unsupported format.  `NONE` — Indicates the submission was not rejected.  `WEBSITE NOT MATCHING` — The website domain in the submission does not match the website domain on the client’s business profile. Edit the submission or have your client update their profile and try again. | `LEGAL NAME NOT FOUND IN DOCUMENTS` |
| `<RESTRICTION_EXPIRATION>`  *Integer* | Unix timestamp indicating when the restriction expires. Only included for `ACCOUNT_RESTRICTION` events. | `1641330498` |
| `<RESTRICTION_TYPE>`  *String* | Type of restriction applied to the account. Only included for `ACCOUNT_RESTRICTION` events.  Values can be:  `RESTRICTED_ADD_PHONE_NUMBER_ACTION` — Business cannot add new phone numbers to the account.  `RESTRICTED_BIZ_INITIATED_AND_USER_INITIATED_CALLING` — Business cannot make or receive calls.  `RESTRICTED_BIZ_INITIATED_MESSAGING` — Business cannot initiate conversations with customers.  `RESTRICTED_BUSINESS_INITIATED_CALLING` — Business cannot initiate outbound calls.  `RESTRICTED_CUSTOMER_INITIATED_MESSAGING` — Business cannot respond to customer-initiated messages.  `RESTRICTED_DIRECT_SEND_UTILITY_TEMPLATES` — Business cannot send utility templates via Direct Send.  `RESTRICTED_USER_INITIATED_CALLING` — Business cannot receive inbound calls from users.  `RESTRICTED_USER_INITIATED_CALLING_CALL_BUTTON_HIDDEN` — Call button is hidden from users due to low pickup rates.  `RESTRICTED_UTILITY_TEMPLATES` — Business cannot create utility templates. | `RESTRICTED_BIZ_INITIATED_MESSAGING` |
| `<SOLUTION_ID>`  *String* | [Multi-Partner Solution](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) solution ID. | `303610109049230` |
| `<START_TIME>`  *Integer* | Unix timestamp indicating start time for all countries with authentication-international pricing for which you do not have an [exception](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/authentication-international-rates#exception-countries). | `1748780624` |
| `<STATUS>`  *String* | Status of the [partner-led business verification](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) submission.  Values can be:  `APPROVED` — Submission has been reviewed and approved.  `DISCARDED` — Submission has been discarded due to technical issues or has not made progress for a while.  `FAILED` — Submission has been reviewed and rejected. See `<REJECTION_REASONS>` for details.  `PENDING` — Submission is pending review.  `REVOKED` — Submission has been revoked. | `APPROVED` |
| `<TIER>`  *String* | Volume range for the pricing tier, in `min:max` format. | `25000001:50000000` |
| `<TIER_UPDATE_TIME>`  *Integer* | Unix timestamp indicating when the pricing tier was updated. | `1743451903` |
| `<VIOLATION_TYPE>`  *String* | Violation type.  See [Violations](https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement-violations) for a list of possible values. | `ADULT` |
| `<WABA_BAN_STATE>`  *String* | WABA ban state.  Values can be:  `DISABLE` — Indicates WABA is disabled.  `REINSTATE` — Indicates the WABA has been reinstated.  `SCHEDULE_FOR_DISABLE` — Indicates the WABA has been scheduled to be disabled. | `REINSTATE` |
| `<WABA_BAN_DATE>`  *String* | Indicates when the WABA was banned. | `April 17, 2025` |
| `<WEBHOOK_TRIGGER_TIMESTAMP>`  *Integer* | Unix timestamp indicating when the webhook was triggered. | `1739321024` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | WhatsApp Business Account ID. | `102290129340398` |

## Examples

### Account deleted

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "102290129340398",
      "time": 1743451903,
      "changes": [
        {
          "value": {
            "event": "ACCOUNT_DELETED"
          },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

### Account restriction

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "102290129340398",
      "time": 1641330498,
      "changes": [
        {
          "value": {
            "event": "ACCOUNT_RESTRICTION",
            "restriction_info": [
              {
                "restriction_type": "RESTRICTED_BIZ_INITIATED_MESSAGING",
                "expiration": 1641330498
              },
              {
                "restriction_type": "RESTRICTED_ADD_PHONE_NUMBER_ACTION",
                "expiration": 1641330498
              }
            ]
          },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

### Account violation

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "102290129340398",
      "time": 1743451903,
      "changes": [
        {
          "value": {
            "event": "ACCOUNT_VIOLATION",
            "violation_info": {
              "violation_type": "ADULT"
            }
          },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "2949482758682047",
      "time": 1744823932,
      "changes": [
        {
          "field": "account_update",
          "value": {
            "event": "AD_ACCOUNT_LINKED",
            "waba_info": {
              "owner_business_id": "2329417887457253",
              "ad_account_linked": "980198427534243",
              "waba_id": "980198427658004"
            }
          }
        }
      ]
    }
  ]
}
```

### Authentication-international eligibility

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "102290129340398",
      "time": 1743451903,
      "changes": [
        {
          "value": {
            "auth_international_rate_eligibility": {
              "exception_countries": [
                {
                  "country_code": "ID",
                  "start_time": 1751347424
                }
              ],
              "start_time": 1748780624
            },
            "event": "AUTH_INTL_PRICE_ELIGIBILITY_UPDATE"
          },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

### Disabled update

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "102290129340398",
      "time": 1743451903,
      "changes": [
        {
          "value": {
            "event": "DISABLED_UPDATE",
            "ban_info": {
              "waba_ban_state": "REINSTATE",
              "waba_ban_date": "April 17, 2025"
            }
          },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "2949482758682047",
      "time": 1744823932,
      "changes": [
        {
          "field": "account_update",
          "value": {
            "event": "MM_LITE_TERMS_SIGNED",
            "waba_info": {
              "owner_business_id": "2329417887457253",
              "waba_id": "980198427658004"
            }
          }
        }
      ]
    }
  ]
}
```

### Partner added

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "2949482758682047",
      "time": 1744823932,
      "changes": [
        {
          "value": {
            "event": "PARTNER_ADDED",
            "waba_info": {
              "waba_id": "980198427658004",
              "owner_business_id": "2329417887457253",
              "solution_id": "1715120619246906",
              "solution_partner_business_ids": [
                "2949482758682047",
                "520744086200222"
              ]
            }
          },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

### Partner app installed

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "2949482758682047",
      "time": 1745337174,
      "changes": [
        {
          "value": {
            "event": "PARTNER_APP_INSTALLED",
            "waba_info": {
              "waba_id": "1191624265890717",
              "owner_business_id": "2329417887457253",
              "partner_app_id": "5731794616896507",
              "solution_id": "1715120619246906",
              "solution_partner_business_ids": [
                "2949482758682047",
                "520744086200222"
              ]
            }
          },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

### Partner app uninstalled

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "2949482758682047",
      "time": 1748477359,
      "changes": [
        {
          "value": {
            "event": "PARTNER_APP_UNINSTALLED",
            "waba_info": {
              "waba_id": "184943124712545",
              "owner_business_id": "1284923862322270",
              "partner_app_id": "869361281603019"
            }
          },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

### Partner-led business verification status

```
{
  "entry": [
    {
      "id": "102290129340398",
      "time": 1743138982,
      "changes": [
        {
          "value": {
            "event": "PARTNER_CLIENT_CERTIFICATION_STATUS_UPDATE",
            "partner_client_certification_info": {
              "client_business_id": "2729063490586005",
              "status": "APPROVED",
              "rejection_reasons": [
                "NONE"
              ]
            }
          },
          "field": "account_update"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

### Partner removed

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "2949482758682047",
      "time": 1748477359,
      "changes": [
        {
          "value": {
            "event": "PARTNER_REMOVED",
            "waba_info": {
              "waba_id": "980198427658004",
              "owner_business_id": "2329417887457253"
            }
          },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

### Partner removed (WhatsApp Business app disconnection)

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "2949482758682047",
      "time": 1748477359,
      "changes": [
        {
          "value": {
            "event": "PARTNER_REMOVED",
            "waba_info": {
              "waba_id": "980198427658004",
              "owner_business_id": "2329417887457253"
            },
            "disconnection_info": {
              "reason": "PRIMARY_INACTIVITY",
              "initiated_by": "SYSTEM"
            }
          },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

### Primary business location set

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "102290129340398",
      "time": 1743138982,
      "changes": [
        {
          "value": {
            "country": "IN",
            "event": "BUSINESS_PRIMARY_LOCATION_COUNTRY_UPDATE"
          },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

### Pricing tiering update

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "102290129340398",
      "time": 1743451903,
      "changes": [
        {
          "value": {
            "volume_tier_info": {
                "tier_update_time": 1743451903,
                "pricing_category": "UTILITY",
                "tier": "25000001:50000000",
                "effective_month": "2025-11",
                "region": "India"
            },
            "event": "VOLUME_BASED_PRICING_TIER_UPDATE"
          },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

### Account offboarded

**Note:** This event is part of a gradual rollout.

Sent when a WhatsApp Business Account is offboarded due to a device change or phone number reregistration.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "102290129340398",
      "time": 1743451903,
      "changes": [
        {
          "value": {
            "event": "ACCOUNT_OFFBOARDED"
          },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

### Account reconnected

**Note:** This event is part of a gradual rollout.

Sent when a WhatsApp Business Account is reconnected after a device change or phone number reregistration.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "102290129340398",
      "time": 1743451903,
      "changes": [
        {
          "value": {
            "event": "ACCOUNT_RECONNECTED"
          },
          "field": "account_update"
        }
      ]
    }
  ]
}
```

Did you find this page helpful?