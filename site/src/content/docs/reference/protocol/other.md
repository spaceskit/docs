---
title: "Other Messages"
description: Protocol messages in the other family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 23 message types in the **other** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `CANCEL_TURN` | `cancel_turn` | Client → Gateway | [`CancelTurnPayload`](#cancelturnpayload) | — |
| `IDENTITY_LIST_AGENT_DEFINITIONS` | `identity.list_agent_definitions` | Client → Gateway | [`IdentityListAgentDefinitionsPayload`](#identitylistagentdefinitionspayload) | [`IdentityListAgentDefinitionsResponsePayload`](#identitylistagentdefinitionsresponsepayload) |
| `IDENTITY_GET_AGENT_DEFINITION` | `identity.get_agent_definition` | Client → Gateway | [`IdentityGetAgentDefinitionPayload`](#identitygetagentdefinitionpayload) | [`IdentityGetAgentDefinitionResponsePayload`](#identitygetagentdefinitionresponsepayload) |
| `IDENTITY_CREATE_AGENT_DEFINITION` | `identity.create_agent_definition` | Client → Gateway | [`IdentityCreateAgentDefinitionPayload`](#identitycreateagentdefinitionpayload) | [`IdentityCreateAgentDefinitionResponsePayload`](#identitycreateagentdefinitionresponsepayload) |
| `IDENTITY_UPDATE_AGENT_DEFINITION` | `identity.update_agent_definition` | Client → Gateway | [`IdentityUpdateAgentDefinitionPayload`](#identityupdateagentdefinitionpayload) | [`IdentityUpdateAgentDefinitionResponsePayload`](#identityupdateagentdefinitionresponsepayload) |
| `IDENTITY_ARCHIVE_AGENT_DEFINITION` | `identity.archive_agent_definition` | Client → Gateway | [`IdentityArchiveAgentDefinitionPayload`](#identityarchiveagentdefinitionpayload) | [`IdentityArchiveAgentDefinitionResponsePayload`](#identityarchiveagentdefinitionresponsepayload) |
| `IDENTITY_LIST_PERSONAS` | `identity.list_personas` | Client → Gateway | [`IdentityListPersonasPayload`](#identitylistpersonaspayload) | [`IdentityListPersonasResponsePayload`](#identitylistpersonasresponsepayload) |
| `IDENTITY_GET_PERSONA` | `identity.get_persona` | Client → Gateway | [`IdentityGetPersonaPayload`](#identitygetpersonapayload) | [`IdentityGetPersonaResponsePayload`](#identitygetpersonaresponsepayload) |
| `IDENTITY_CREATE_PERSONA` | `identity.create_persona` | Client → Gateway | [`IdentityCreatePersonaPayload`](#identitycreatepersonapayload) | [`IdentityCreatePersonaResponsePayload`](#identitycreatepersonaresponsepayload) |
| `IDENTITY_UPDATE_PERSONA` | `identity.update_persona` | Client → Gateway | [`IdentityUpdatePersonaPayload`](#identityupdatepersonapayload) | [`IdentityUpdatePersonaResponsePayload`](#identityupdatepersonaresponsepayload) |
| `IDENTITY_ARCHIVE_PERSONA` | `identity.archive_persona` | Client → Gateway | [`IdentityArchivePersonaPayload`](#identityarchivepersonapayload) | [`IdentityArchivePersonaResponsePayload`](#identityarchivepersonaresponsepayload) |
| `IDENTITY_PREVIEW_COMPILED_INSTRUCTIONS` | `identity.preview_compiled_instructions` | Client → Gateway | [`IdentityPreviewCompiledInstructionsPayload`](#identitypreviewcompiledinstructionspayload) | [`IdentityPreviewCompiledInstructionsResponsePayload`](#identitypreviewcompiledinstructionsresponsepayload) |
| `IDENTITY_PREVIEW_RUNTIME_SYSTEM_PROMPT` | `identity.preview_runtime_system_prompt` | Client → Gateway | [`IdentityPreviewRuntimeSystemPromptPayload`](#identitypreviewruntimesystempromptpayload) | [`IdentityPreviewRuntimeSystemPromptResponsePayload`](#identitypreviewruntimesystempromptresponsepayload) |
| `IDENTITY_PREVIEW_SYSTEM_PROMPT_MATRIX` | `identity.preview_system_prompt_matrix` | Client → Gateway | [`IdentityPreviewSystemPromptMatrixPayload`](#identitypreviewsystempromptmatrixpayload) | [`IdentityPreviewSystemPromptMatrixResponsePayload`](#identitypreviewsystempromptmatrixresponsepayload) |
| `TOOL_LIST` | `tool.list` | Client → Gateway | — | — |
| `TOOL_GET` | `tool.get` | Client → Gateway | — | — |
| `TOOL_SCAFFOLD` | `tool.scaffold` | Client → Gateway | — | — |
| `TOOL_REGISTER` | `tool.register` | Client → Gateway | — | — |
| `TOOL_REMOVE` | `tool.remove` | Client → Gateway | — | — |
| `TOOL_LIST_GRANTS` | `tool.list_grants` | Client → Gateway | — | — |
| `TOOL_REVOKE_GRANT` | `tool.revoke_grant` | Client → Gateway | — | — |
| `SESSION_LIST_RESUMABLE` | `session.list_resumable` | other | — | — |
| `SESSION_RESUME` | `session.resume` | other | — | — |

## Payloads

### CancelTurnPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceUid` | `string` | Yes | — |
| `turnId` | `string` | Yes | — |

### IdentityListAgentDefinitionsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `includeArchived` | `boolean` | No | — |

### IdentityListAgentDefinitionsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `agentDefinitions` | `AgentDefinitionSummaryPayload[]` | Yes | — |

### IdentityGetAgentDefinitionPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `agentDefinitionId` | `string` | Yes | — |

### IdentityGetAgentDefinitionResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `agentDefinition` | `AgentDefinitionSummaryPayload` | Yes | — |

### IdentityCreateAgentDefinitionPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `agentDefinitionId` | `string` | No | — |
| `personaId` | `string` | No | — |
| `name` | `string` | Yes | — |
| `description` | `string` | No | — |
| `instructions` | `string` | No | — |
| `defaultSkillIds` | `string[]` | No | — |
| `providerHint` | `string` | No | — |
| `modelHint` | `string` | No | — |
| `modelConfig` | `ProfileModelConfigPayload` | No | — |
| `isDefault` | `boolean` | No | — |

### IdentityCreateAgentDefinitionResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `agentDefinition` | `AgentDefinitionSummaryPayload` | Yes | — |
| `created` | `boolean` | Yes | — |

### IdentityUpdateAgentDefinitionPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `agentDefinitionId` | `string` | Yes | — |
| `personaId` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `instructions` | `string` | No | — |
| `defaultSkillIds` | `string[]` | No | — |
| `providerHint` | `string` | No | — |
| `modelHint` | `string` | No | — |
| `modelConfig` | `ProfileModelConfigPayload` | No | — |
| `isDefault` | `boolean` | No | — |

### IdentityUpdateAgentDefinitionResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `agentDefinition` | `AgentDefinitionSummaryPayload` | Yes | — |
| `newRevision` | `number` | Yes | — |

### IdentityArchiveAgentDefinitionPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `agentDefinitionId` | `string` | Yes | — |

### IdentityArchiveAgentDefinitionResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `agentDefinition` | `AgentDefinitionSummaryPayload` | Yes | — |
| `archived` | `boolean` | Yes | — |

### IdentityListPersonasPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `includeArchived` | `boolean` | No | — |

### IdentityListPersonasResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `personas` | `PersonaSummaryPayload[]` | Yes | — |

### IdentityGetPersonaPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `personaId` | `string` | Yes | — |

### IdentityGetPersonaResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `persona` | `PersonaSummaryPayload` | Yes | — |

### IdentityCreatePersonaPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `personaId` | `string` | No | — |
| `name` | `string` | Yes | — |
| `description` | `string` | No | — |
| `tone` | `string` | No | — |
| `style` | `string` | No | — |
| `emotionalLayer` | `string` | No | — |
| `constraints` | `string[]` | No | — |
| `instructions` | `string` | No | — |
| `isDefault` | `boolean` | No | — |

### IdentityCreatePersonaResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `persona` | `PersonaSummaryPayload` | Yes | — |
| `created` | `boolean` | Yes | — |

### IdentityUpdatePersonaPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `personaId` | `string` | Yes | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `tone` | `string` | No | — |
| `style` | `string` | No | — |
| `emotionalLayer` | `string` | No | — |
| `constraints` | `string[]` | No | — |
| `instructions` | `string` | No | — |
| `isDefault` | `boolean` | No | — |

### IdentityUpdatePersonaResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `persona` | `PersonaSummaryPayload` | Yes | — |
| `newRevision` | `number` | Yes | — |

### IdentityArchivePersonaPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `personaId` | `string` | Yes | — |

### IdentityArchivePersonaResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `persona` | `PersonaSummaryPayload` | Yes | — |
| `archived` | `boolean` | Yes | — |

### IdentityPreviewCompiledInstructionsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `agentDefinitionId` | `string` | Yes | — |
| `workspaceContext` | `string` | No | — |

### IdentityPreviewCompiledInstructionsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `preview` | `CompiledInstructionsPreviewPayload` | Yes | — |

### IdentityPreviewRuntimeSystemPromptPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `agentId` | `string` | No | — |
| `profileId` | `string` | No | — |

### IdentityPreviewRuntimeSystemPromptResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `preview` | `{
    spaceId: string` | Yes | — |
| `agentId` | `string` | No | — |
| `profileId` | `string` | Yes | — |
| `personaId` | `string` | No | — |
| `targetKind` | `"agent_assignment" \| "space_profile"` | Yes | — |
| `conversationTopology` | `"direct" \| "shared_team_chat" \| "broadcast_team"` | No | — |
| `promptPackId` | `string` | No | — |
| `sections` | `RuntimeSystemPromptSectionPayload[]` | Yes | — |
| `compiledText` | `string` | Yes | — |
| `generatedAt` | `string` | Yes | — |

### IdentityPreviewSystemPromptMatrixPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `agentDefinitionId` | `string` | Yes | — |
| `spaceId` | `string` | No | — |
| `agentId` | `string` | No | — |

### IdentityPreviewSystemPromptMatrixResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `matrix` | `{
    agentDefinitionId: string` | Yes | — |
| `personaId` | `string` | No | — |
| `generatedAt` | `string` | Yes | — |
| `variants` | `SystemPromptVariantPayload[]` | Yes | — |
