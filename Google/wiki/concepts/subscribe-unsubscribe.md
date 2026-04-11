---
type: concept
title: "Subscribe/Unsubscribe"
aliases: [opt-out, STOP, unsubscribe, resubscribe]
sources: 2
---

## Overview

Users can unsubscribe from non-essential messages and resubscribe later. Partners must comply with these preferences and follow business rules about what messages can still be sent.

## Details

### Unsubscribe Flow
1. User selects **Unsubscribe** in chat menu
2. Google Messages sends country-specific keyword to agent
3. RBM platform sends `UNSUBSCRIBE` event to webhook
4. Partner must stop non-essential messages

### Unsubscribe Keywords by Country
| Country | Keyword |
|---------|---------|
| US, IN, GB, DE | STOP |
| ES, MX | BAJA |
| FR | STOP |
| BR | parar |

### Post-Unsubscribe Rules
**Prohibited**: non-essential messages (promotions, marketing)

**Permitted (essential)**:
- Authentication (OTPs)
- User-requested notifications with consent
- Unsubscribe confirmation with preferences management link

### Resubscribe Flow
1. User selects **Subscribe** in chat menu
2. Google Messages sends keyword (US: "START", ES/MX: "ALTA", etc.)
3. Platform sends `SUBSCRIBE` event
4. All message types permitted again

### Unsubscribe Reasons (Analytics)
- Spam
- Never signed up
- Too many messages
- No longer interested
- Other

Google monitors message patterns after unsubscribe to identify policy violations.

### Business Rules
- If can't unsubscribe in-thread, immediately send acknowledgment with direct link to manage preferences
- User messaging after unsubscribe can be considered resubscribe request
- Partner responsible for updating status if user resubscribes outside messaging channel

## Related

- [analytics-reputation](../concepts/analytics-reputation.md)
- [use-cases](../concepts/use-cases.md)

## Sources

- [receive-events](../sources/receive-events.md)
- [analytics-overview](../sources/analytics-overview.md)
