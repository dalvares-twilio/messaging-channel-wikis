---
type: query
title: "Partner Console User Roles and Permissions"
query: "What are the different user roles available in the Google RCS Developer Console and what can each role do?"
answered: 2026-04-10
tags: [partner, roles, permissions, console, access]
---

## Answer

The Business Communications Developer Console supports three user roles with distinct permission levels:

### Role Comparison

| Role | Console Access | Create/Edit Agents | Manage Users | Initial Assignment |
|------|----------------|-------------------|--------------|-------------------|
| **Owner** | Full | Yes | Yes | Creator of partner account |
| **Manager** | Full | Yes | Limited | Invited by Owner |
| **Reader** | Read-only | No | No | Invited by Owner/Manager |

### Owner

- **Initial creator** of the partner account
- Full administrative access to all features
- Can invite/remove other users and change roles
- Cannot be removed (but can transfer ownership)
- Only one Owner per partner account

### Manager

- Full access to Console features (create agents, configure webhooks, etc.)
- Can invite Readers
- Cannot change Owner role or remove other Managers
- Ideal for team members actively managing RCS agents

### Reader

- **Read-only access** to all Console data
- Can view agents, analytics, webhook configurations
- Cannot create, edit, or delete any resources
- Ideal for stakeholders who need visibility without modification rights

### Assignment and Management

1. **Invite Users**: Partner settings > Team management > Invite
2. **Specify Email**: Must be a Google account email
3. **Select Role**: Choose Owner, Manager, or Reader
4. **Acceptance**: Invitee accepts via email link

### Best Practices

- Limit Owner role to primary account administrators
- Use Manager role for developers and operations team
- Use Reader role for product managers, executives, or audit purposes
- Review access periodically and remove inactive users

## Sources Consulted

- [partner-account-setup](../sources/partner-account-setup.md)
- [developer-console](../entities/developer-console.md)

## New Insights

- Role transfer process (changing Owner) not documented
- API-level access appears independent of Console roles (uses service account)
- No documented audit log for role changes
