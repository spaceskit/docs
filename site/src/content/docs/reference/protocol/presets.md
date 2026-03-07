---
title: "Presets Messages"
description: Protocol messages in the presets family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 5 message types in the **presets** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `PRESET_LIST` | `preset.list` | Client → Gateway | [`PresetListPayload`](#presetlistpayload) | [`PresetListResponsePayload`](#presetlistresponsepayload) |
| `PRESET_GET` | `preset.get` | Client → Gateway | [`PresetGetPayload`](#presetgetpayload) | [`PresetGetResponsePayload`](#presetgetresponsepayload) |
| `PRESET_APPLY_TO_SPACE` | `preset.apply_to_space` | Client → Gateway | [`PresetApplyToSpacePayload`](#presetapplytospacepayload) | [`PresetApplyToSpaceResponsePayload`](#presetapplytospaceresponsepayload) |
| `PRESET_SAVE_AGENT` | `preset.save_agent` | Client → Gateway | [`PresetSaveAgentPayload`](#presetsaveagentpayload) | [`PresetSaveAgentResponsePayload`](#presetsaveagentresponsepayload) |
| `PRESET_ARCHIVE_AGENT` | `preset.archive_agent` | Client → Gateway | [`PresetArchiveAgentPayload`](#presetarchiveagentpayload) | [`PresetArchiveAgentResponsePayload`](#presetarchiveagentresponsepayload) |

## Payloads

### PresetListPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `kind` | `PresetKindPayload \| "all"` | No | — |
| `source` | `PresetSourcePayload \| "all"` | No | — |
| `tags` | `string[]` | No | — |

### PresetListResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `presets` | `PresetSummaryPayload[]` | Yes | — |

### PresetGetPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `presetId` | `string` | Yes | — |

### PresetGetResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `preset` | `PresetDetailPayload` | Yes | — |

### PresetApplyToSpacePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `presetId` | `string` | Yes | — |
| `targetSpaceId` | `string` | No | — |
| `spaceId` | `string` | No | — |
| `resourceId` | `string` | No | — |
| `name` | `string` | No | — |
| `goal` | `string` | No | — |
| `visibility` | `"shared" \| "private"` | No | — |
| `workspaceRoot` | `string` | No | — |

### PresetApplyToSpaceResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `applicationId` | `string` | Yes | — |
| `presetId` | `string` | Yes | — |
| `spaceId` | `string` | Yes | — |
| `createdSpace` | `boolean` | Yes | — |
| `appliedAgents` | `number` | Yes | — |
| `skippedAgents` | `number` | Yes | — |
| `appliedAt` | `string` | Yes | — |
| `space` | `SpaceSummary` | Yes | — |

### PresetSaveAgentPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `presetId` | `string` | No | — |
| `title` | `string` | Yes | — |
| `description` | `string` | No | — |
| `defaultAgents` | `TemplateAgentDefinitionPayload[]` | No | — |
| `tags` | `string[]` | No | — |

### PresetSaveAgentResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `preset` | `PresetDetailPayload` | Yes | — |
| `created` | `boolean` | Yes | — |

### PresetArchiveAgentPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `presetId` | `string` | Yes | — |

### PresetArchiveAgentResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `presetId` | `string` | Yes | — |
| `archived` | `boolean` | Yes | — |
