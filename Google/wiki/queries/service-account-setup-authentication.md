---
type: query
title: "Service Account Setup and API Authentication"
query: "How do I set up a service account for Google RCS API authentication?"
answered: 2026-04-10
tags: [authentication, service-account, setup, api]
---

## Answer

Google RCS API authentication requires a service account with a downloaded JSON key file. Here's how to set it up:

### Setup Steps

1. **Register Partner Account**: Go to [Business Communications Developer Console](https://business-communications.cloud.google.com/) and complete partner registration.

2. **Access Service Account Settings**: Navigate to Partner settings in the Console.

3. **Create/Download Service Account Key**:
   - Google creates a service account for your partner account automatically
   - Download the JSON key file (contains `client_email`, `private_key`, `project_id`)
   - Store securely - this grants full API access

4. **Configure API Client**:
   ```python
   from google.oauth2 import service_account
   from googleapiclient.discovery import build
   
   credentials = service_account.Credentials.from_service_account_file(
       'path/to/key.json',
       scopes=['https://www.googleapis.com/auth/businesscommunications']
   )
   service = build('businesscommunications', 'v1', credentials=credentials)
   ```

### Key Management Best Practices

| Practice | Reason |
|----------|--------|
| Never commit keys to version control | Security risk |
| Use environment variables in production | Secrets management |
| Rotate keys periodically | Limit exposure window |
| Restrict key access to required services | Principle of least privilege |

### Authentication Flow

1. Load service account credentials from JSON key
2. Request OAuth2 access token with required scopes
3. Include token in API requests as Bearer token
4. Token auto-refreshes when using Google client libraries

### Error Handling

| Error | Cause | Resolution |
|-------|-------|------------|
| `401 Unauthorized` | Invalid/expired token | Refresh token (retryable) |
| `403 Forbidden` | Missing permissions | Check service account roles |

## Sources Consulted

- [partner-account-setup](../sources/partner-account-setup.md)
- [management-api-overview](../sources/management-api-overview.md)
- [ottm-implementation](../sources/ottm-implementation.md)

## New Insights

- The 401 error is retryable according to OTTM implementation - token may need refresh
- Google client libraries handle token refresh automatically
- Key rotation process not documented in official sources
