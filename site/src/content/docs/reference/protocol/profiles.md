---
title: "Profiles Messages"
description: Protocol messages in the profiles family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 5 message types in the **profiles** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `PROFILE_CREATE` | `profile.create` | Client → Gateway | [`ProfileCreatePayload`](#profilecreatepayload) | [`ProfileCreateResponsePayload`](#profilecreateresponsepayload) |
| `PROFILE_GET` | `profile.get` | Client → Gateway | [`ProfileGetPayload`](#profilegetpayload) | [`ProfileGetResponsePayload`](#profilegetresponsepayload) |
| `PROFILE_LIST` | `profile.list` | Client → Gateway | [`ProfileListPayload`](#profilelistpayload) | [`ProfileListResponsePayload`](#profilelistresponsepayload) |
| `PROFILE_UPDATE` | `profile.update` | Client → Gateway | [`ProfileUpdatePayload`](#profileupdatepayload) | [`ProfileUpdateResponsePayload`](#profileupdateresponsepayload) |
| `PROFILE_ARCHIVE` | `profile.archive` | Client → Gateway | [`ProfileArchivePayload`](#profilearchivepayload) | [`ProfileArchiveResponsePayload`](#profilearchiveresponsepayload) |

## Payloads

### ProfileCreatePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `profileId` | `string` | No | — |
| `name` | `string` | Yes | — |
| `description` | `string` | No | — |
| `personalityPrompt` | `string` | No | — |
| `defaultSkillIds` | `string[]` | No | — |
| `providerHint` | `string` | No | — |
| `modelHint` | `string` | No | — |
| `modelConfig` | `ProfileModelConfigPayload` | No | — |
| `canModerate` | `boolean` | No | — |
| `isDefault` | `boolean` | No | — |

### ProfileCreateResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `profile` | `ProfileSummaryPayload` | Yes | — |
| `created` | `boolean` | Yes | — |

### ProfileGetPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `profileId` | `string` | Yes | — |

### ProfileGetResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `profile` | `ProfileSummaryPayload` | Yes | — |

### ProfileListPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `includeArchived` | `boolean` | No | — |

### ProfileListResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `profiles` | `ProfileSummaryPayload[]` | Yes | — |

### ProfileUpdatePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `profileId` | `string` | Yes | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `personalityPrompt` | `string` | No | — |
| `defaultSkillIds` | `string[]` | No | — |
| `providerHint` | `string` | No | — |
| `modelHint` | `string` | No | — |
| `modelConfig` | `ProfileModelConfigPayload` | No | — |
| `canModerate` | `boolean` | No | — |
| `isDefault` | `boolean` | No | — |

### ProfileUpdateResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `profile` | `ProfileSummaryPayload` | Yes | — |
| `newRevision` | `number` | Yes | — |

### ProfileArchivePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `profileId` | `string` | Yes | — |

### ProfileArchiveResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `profile` | `ProfileSummaryPayload` | Yes | — |
| `archived` | `boolean` | Yes | — |
