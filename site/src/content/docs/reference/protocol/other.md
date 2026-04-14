---
title: "Other Messages"
description: Protocol messages in the other family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 67 message types in the **other** family.

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
| `LIBRARY_LIST_ENTRIES` | `library.list_entries` | Client → Gateway | — | — |
| `LIBRARY_GET_ENTRY` | `library.get_entry` | Client → Gateway | — | — |
| `LIBRARY_SAVE_SKILL` | `library.save_skill` | Client → Gateway | — | — |
| `LIBRARY_IMPORT_ENTRY` | `library.import_entry` | Client → Gateway | — | — |
| `LIBRARY_ARCHIVE_ENTRY` | `library.archive_entry` | Client → Gateway | — | — |
| `LIBRARY_SET_ENTRY_ENABLED` | `library.set_entry_enabled` | Client → Gateway | — | — |
| `LIBRARY_DELETE_ENTRY` | `library.delete_entry` | Client → Gateway | — | — |
| `LIBRARY_SCAN_ENTRIES` | `library.scan_entries` | Client → Gateway | — | — |
| `LIBRARY_LIST_SKILL_DRAFTS` | `library.list_skill_drafts` | Client → Gateway | — | — |
| `LIBRARY_GET_SKILL_DRAFT` | `library.get_skill_draft` | Client → Gateway | — | — |
| `LIBRARY_CREATE_SKILL_DRAFT` | `library.create_skill_draft` | Client → Gateway | — | — |
| `LIBRARY_DELETE_SKILL_DRAFT` | `library.delete_skill_draft` | Client → Gateway | — | — |
| `CONNECTOR_SUBMIT_INBOUND_EVENT` | `connector.submit_inbound_event` | Client → Gateway | [`ConnectorSubmitInboundEventPayload`](#connectorsubmitinboundeventpayload) | — |
| `CONNECTOR_INBOUND_EVENT_RESULT` | `connector.inbound_event_result` | Client → Gateway | [`ConnectorInboundEventResultPayload`](#connectorinboundeventresultpayload) | — |
| `TOOL_LIST` | `tool.list` | Client → Gateway | — | — |
| `TOOL_GET` | `tool.get` | Client → Gateway | — | — |
| `TOOL_SCAFFOLD` | `tool.scaffold` | Client → Gateway | — | — |
| `TOOL_REGISTER` | `tool.register` | Client → Gateway | — | — |
| `TOOL_REMOVE` | `tool.remove` | Client → Gateway | — | — |
| `TOOL_SET_ENABLED` | `tool.set_enabled` | Client → Gateway | — | — |
| `TOOL_LIST_GRANTS` | `tool.list_grants` | Client → Gateway | — | — |
| `TOOL_REVOKE_GRANT` | `tool.revoke_grant` | Client → Gateway | — | — |
| `WORKBENCH_LIST_QUEUE` | `workbench.list_queue` | Client → Gateway | [`WorkbenchListQueuePayload`](#workbenchlistqueuepayload) | [`WorkbenchListQueueResponsePayload`](#workbenchlistqueueresponsepayload) |
| `WORKBENCH_GET_QUEUE_ITEM` | `workbench.get_queue_item` | Client → Gateway | [`WorkbenchGetQueueItemPayload`](#workbenchgetqueueitempayload) | [`WorkbenchGetQueueItemResponsePayload`](#workbenchgetqueueitemresponsepayload) |
| `WORKBENCH_CREATE_BATCH` | `workbench.create_batch` | Client → Gateway | [`WorkbenchCreateBatchPayload`](#workbenchcreatebatchpayload) | [`WorkbenchCreateBatchResponsePayload`](#workbenchcreatebatchresponsepayload) |
| `WORKBENCH_LIST_BATCHES` | `workbench.list_batches` | Client → Gateway | [`WorkbenchListBatchesPayload`](#workbenchlistbatchespayload) | [`WorkbenchListBatchesResponsePayload`](#workbenchlistbatchesresponsepayload) |
| `WORKBENCH_UPDATE_BATCH` | `workbench.update_batch` | Client → Gateway | [`WorkbenchUpdateBatchPayload`](#workbenchupdatebatchpayload) | [`WorkbenchUpdateBatchResponsePayload`](#workbenchupdatebatchresponsepayload) |
| `WORKBENCH_START_RUN` | `workbench.start_run` | Client → Gateway | [`WorkbenchStartRunPayload`](#workbenchstartrunpayload) | [`WorkbenchStartRunResponsePayload`](#workbenchstartrunresponsepayload) |
| `WORKBENCH_RETRY_RUN` | `workbench.retry_run` | Client → Gateway | [`WorkbenchRetryRunPayload`](#workbenchretryrunpayload) | [`WorkbenchRetryRunResponsePayload`](#workbenchretryrunresponsepayload) |
| `WORKBENCH_CANCEL_RUN` | `workbench.cancel_run` | Client → Gateway | [`WorkbenchCancelRunPayload`](#workbenchcancelrunpayload) | [`WorkbenchCancelRunResponsePayload`](#workbenchcancelrunresponsepayload) |
| `WORKBENCH_LIST_RUNS` | `workbench.list_runs` | Client → Gateway | [`WorkbenchListRunsPayload`](#workbenchlistrunspayload) | [`WorkbenchListRunsResponsePayload`](#workbenchlistrunsresponsepayload) |
| `WORKBENCH_GET_RUN` | `workbench.get_run` | Client → Gateway | [`WorkbenchGetRunPayload`](#workbenchgetrunpayload) | [`WorkbenchGetRunResponsePayload`](#workbenchgetrunresponsepayload) |
| `WORKBENCH_APPROVE_STAGE` | `workbench.approve_stage` | Client → Gateway | [`WorkbenchApproveStagePayload`](#workbenchapprovestagepayload) | [`WorkbenchApproveStageResponsePayload`](#workbenchapprovestageresponsepayload) |
| `WORKBENCH_REJECT_STAGE` | `workbench.reject_stage` | Client → Gateway | [`WorkbenchRejectStagePayload`](#workbenchrejectstagepayload) | [`WorkbenchRejectStageResponsePayload`](#workbenchrejectstageresponsepayload) |
| `WORKBENCH_SET_MODE` | `workbench.set_mode` | Client → Gateway | [`WorkbenchSetModePayload`](#workbenchsetmodepayload) | [`WorkbenchSetModeResponsePayload`](#workbenchsetmoderesponsepayload) |
| `WORKBENCH_LIST_ARTIFACTS` | `workbench.list_artifacts` | Client → Gateway | [`WorkbenchListArtifactsPayload`](#workbenchlistartifactspayload) | [`WorkbenchListArtifactsResponsePayload`](#workbenchlistartifactsresponsepayload) |
| `WORKBENCH_GET_POLICY` | `workbench.get_policy` | Client → Gateway | [`WorkbenchGetPolicyPayload`](#workbenchgetpolicypayload) | [`WorkbenchGetPolicyResponsePayload`](#workbenchgetpolicyresponsepayload) |
| `WORKBENCH_UPDATE_POLICY` | `workbench.update_policy` | Client → Gateway | [`WorkbenchUpdatePolicyPayload`](#workbenchupdatepolicypayload) | [`WorkbenchUpdatePolicyResponsePayload`](#workbenchupdatepolicyresponsepayload) |
| `CONCIERGE_CALL_START` | `concierge.call.start` | Client → Gateway | [`ConciergeCallStartPayload`](#conciergecallstartpayload) | — |
| `CONCIERGE_CALL_ANSWER` | `concierge.call.answer` | Client → Gateway | [`ConciergeCallAnswerPayload`](#conciergecallanswerpayload) | — |
| `CONCIERGE_CALL_END` | `concierge.call.end` | Client → Gateway | [`ConciergeCallEndPayload`](#conciergecallendpayload) | — |
| `CONCIERGE_CALL_SET_MUTED` | `concierge.call.set_muted` | Client → Gateway | [`ConciergeCallSetMutedPayload`](#conciergecallsetmutedpayload) | — |
| `CONCIERGE_CALL_AUDIO_CHUNK` | `concierge.call.audio_chunk` | Client → Gateway | [`ConciergeCallAudioChunkPayload`](#conciergecallaudiochunkpayload) | — |
| `CONCIERGE_CALL_CONTROL` | `concierge.call.control` | Client → Gateway | [`ConciergeCallControlPayload`](#conciergecallcontrolpayload) | — |
| `CONCIERGE_CALL_HANDOFF_PREPARE` | `concierge.call.handoff.prepare` | Client → Gateway | [`ConciergeCallHandoffPreparePayload`](#conciergecallhandoffpreparepayload) | [`ConciergeCallHandoffPrepareResponsePayload`](#conciergecallhandoffprepareresponsepayload) |
| `CONCIERGE_CALL_HANDOFF_ACCEPT` | `concierge.call.handoff.accept` | Client → Gateway | [`ConciergeCallHandoffAcceptPayload`](#conciergecallhandoffacceptpayload) | — |
| `CONCIERGE_CALL_REGISTER_PUSH` | `concierge.call.register_push` | Client → Gateway | [`ConciergeCallRegisterPushPayload`](#conciergecallregisterpushpayload) | — |
| `CONCIERGE_ACTION_RESULT` | `concierge.action_result` | Client → Gateway | [`ConciergeActionResultPayload`](#conciergeactionresultpayload) | — |
| `CONCIERGE_CALL_EVENT` | `concierge.call.event` | Gateway → Client | [`ConciergeCallEventPayload`](#conciergecalleventpayload) | — |
| `APP_NAVIGATE` | `app.navigate` | Gateway → Client | [`AppNavigatePayload`](#appnavigatepayload) | — |
| `APP_CONCIERGE_ACTION_REQUEST` | `app.concierge_action_request` | Gateway → Client | [`AppConciergeActionRequestPayload`](#appconciergeactionrequestpayload) | — |
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

### ConnectorSubmitInboundEventPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `connectorId` | `string` | Yes | — |
| `eventType` | `string` | Yes | — |
| `selector` | `Record<string, unknown>` | No | — |
| `snapshot` | `Record<string, unknown>` | No | — |
| `input` | `string` | No | — |

### ConnectorInboundEventResultPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ok` | `boolean` | Yes | — |
| `route` | `{
    route: "binding" \| "main_fallback"` | Yes | — |
| `targetType` | `ConnectorBindingTargetPayload` | Yes | — |
| `targetSpaceId` | `string` | No | — |
| `bindingId` | `string` | No | — |
| `matchedScore` | `number` | No | — |

### WorkbenchListQueuePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `limit` | `number` | No | — |

### WorkbenchListQueueResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `items` | `WorkbenchQueueItemPayload[]` | Yes | — |

### WorkbenchGetQueueItemPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `queueItemId` | `string` | Yes | — |

### WorkbenchGetQueueItemResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `item` | `WorkbenchQueueItemPayload` | Yes | — |

### WorkbenchCreateBatchPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `name` | `string` | Yes | — |
| `queueItemIds` | `string[]` | Yes | — |
| `executionMode` | `WorkbenchExecutionModePayload` | No | — |

### WorkbenchCreateBatchResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `batch` | `WorkbenchBatchPayload` | Yes | — |

### WorkbenchListBatchesPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `limit` | `number` | No | — |

### WorkbenchListBatchesResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `batches` | `WorkbenchBatchPayload[]` | Yes | — |

### WorkbenchUpdateBatchPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `batchId` | `string` | Yes | — |
| `name` | `string` | No | — |
| `queueItemIds` | `string[]` | No | — |
| `executionMode` | `WorkbenchExecutionModePayload` | No | — |
| `status` | `WorkbenchBatchStatusPayload` | No | — |

### WorkbenchUpdateBatchResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `batch` | `WorkbenchBatchPayload` | Yes | — |

### WorkbenchStartRunPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `queueItemId` | `string` | Yes | — |
| `batchId` | `string` | No | — |
| `executionMode` | `WorkbenchExecutionModePayload` | No | — |

### WorkbenchStartRunResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `run` | `WorkbenchRunPayload` | Yes | — |

### WorkbenchRetryRunPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `runId` | `string` | Yes | — |

### WorkbenchRetryRunResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `run` | `WorkbenchRunPayload` | Yes | — |

### WorkbenchCancelRunPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `runId` | `string` | Yes | — |

### WorkbenchCancelRunResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `run` | `WorkbenchRunPayload` | Yes | — |

### WorkbenchListRunsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `batchId` | `string` | No | — |
| `queueItemId` | `string` | No | — |
| `limit` | `number` | No | — |

### WorkbenchListRunsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `runs` | `WorkbenchRunPayload[]` | Yes | — |

### WorkbenchGetRunPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `runId` | `string` | Yes | — |

### WorkbenchGetRunResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `run` | `WorkbenchRunPayload` | Yes | — |

### WorkbenchApproveStagePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `runId` | `string` | Yes | — |
| `stage` | `WorkbenchRunStagePayload` | No | — |

### WorkbenchApproveStageResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `run` | `WorkbenchRunPayload` | Yes | — |

### WorkbenchRejectStagePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `runId` | `string` | Yes | — |
| `stage` | `WorkbenchRunStagePayload` | No | — |
| `reason` | `string` | No | — |

### WorkbenchRejectStageResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `run` | `WorkbenchRunPayload` | Yes | — |

### WorkbenchSetModePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `runId` | `string` | No | — |
| `batchId` | `string` | No | — |
| `executionMode` | `WorkbenchExecutionModePayload` | Yes | — |

### WorkbenchSetModeResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `run` | `WorkbenchRunPayload` | No | — |
| `batch` | `WorkbenchBatchPayload` | No | — |

### WorkbenchListArtifactsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `runId` | `string` | Yes | — |

### WorkbenchListArtifactsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `artifacts` | `WorkbenchArtifactPayload[]` | Yes | — |

### WorkbenchGetPolicyPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |

### WorkbenchGetPolicyResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `policy` | `WorkbenchPolicyPayload` | Yes | — |

### WorkbenchUpdatePolicyPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `defaultExecutionMode` | `WorkbenchExecutionModePayload` | No | — |
| `autonomousEnabled` | `boolean` | No | — |
| `maxParallelRuns` | `number` | No | — |
| `requireExplicitAutonomousOptIn` | `boolean` | No | — |
| `requireAiShippableForAutonomous` | `boolean` | No | — |

### WorkbenchUpdatePolicyResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `policy` | `WorkbenchPolicyPayload` | Yes | — |

### ConciergeCallStartPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `callId` | `string` | Yes | — |
| `deviceId` | `string` | No | — |
| `platform` | `string` | Yes | — |
| `ttsMode` | `string` | No | — |
| `targetGatewayId` | `string` | No | — |
| `displayName` | `string` | No | — |
| `handoffContext` | `{
    destinationPlatform?: string` | No | — |
| `destinationDeviceId` | `string` | No | — |
| `destinationClientId` | `string` | No | — |
| `resumeUrl` | `string` | No | — |

### ConciergeCallAnswerPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `callId` | `string` | Yes | — |
| `deviceId` | `string` | No | — |
| `platform` | `string` | No | — |

### ConciergeCallEndPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `callId` | `string` | Yes | — |
| `reason` | `string` | No | — |

### ConciergeCallSetMutedPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `callId` | `string` | Yes | — |
| `muted` | `boolean` | Yes | — |

### ConciergeCallAudioChunkPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `callId` | `string` | Yes | — |
| `sequence` | `number` | Yes | — |
| `audioBase64` | `string` | Yes | — |
| `audioDurationSeconds` | `number` | No | — |
| `sampleRateHz` | `number` | No | — |
| `channels` | `number` | No | — |
| `codec` | `string` | No | — |
| `transcriptText` | `string` | No | — |
| `isFinal` | `boolean` | No | — |

### ConciergeCallControlPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `callId` | `string` | Yes | — |
| `command` | `"interrupt"` | Yes | — |
| `reason` | `string` | No | — |

### ConciergeCallHandoffPreparePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `callId` | `string` | Yes | — |
| `destinationPlatform` | `string` | Yes | — |
| `sourceDeviceId` | `string` | No | — |
| `destinationDeviceId` | `string` | No | — |
| `destinationClientId` | `string` | No | — |
| `resumeUrl` | `string` | No | — |

### ConciergeCallHandoffPrepareResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `event` | `ConciergeCallEventPayload` | Yes | — |
| `handoffToken` | `ConciergeCallHandoffTokenPayload` | Yes | — |

### ConciergeCallHandoffAcceptPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `callId` | `string` | Yes | — |
| `handoffToken` | `string` | Yes | — |
| `platform` | `string` | No | — |

### ConciergeCallRegisterPushPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `principalId` | `string` | No | — |
| `deviceId` | `string` | Yes | — |
| `platform` | `string` | Yes | — |
| `pushToken` | `string` | Yes | — |
| `voipTopic` | `string` | No | — |
| `proactiveOptIn` | `boolean` | No | — |

### ConciergeActionResultPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `requestId` | `string` | Yes | — |
| `status` | `ConciergeActionResultStatus` | Yes | — |
| `payload` | `Record<string, unknown>` | No | — |
| `error` | `string` | No | — |

### ConciergeCallEventPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `callId` | `string` | Yes | — |
| `state` | `"connecting" \| "active" \| "ended"` | Yes | — |
| `platform` | `string` | Yes | — |
| `deviceId` | `string` | No | — |
| `displayName` | `string` | Yes | — |
| `ttsMode` | `string` | Yes | — |
| `muted` | `boolean` | Yes | — |
| `targetGatewayId` | `string` | No | — |
| `transcriptDelta` | `string` | No | — |
| `assistantTextDelta` | `string` | No | — |
| `urgency` | `string` | No | — |
| `handoffToken` | `ConciergeCallHandoffTokenPayload` | No | — |
| `metrics` | `ConciergeCallMetricsPayload` | No | — |
| `reason` | `string` | No | — |
| `emittedAt` | `string` | No | — |
| `mediaEventType` | `\| "transcript_partial"
    \| "transcript_final"
    \| "assistant_text_partial"
    \| "assistant_text_final"
    \| "assistant_audio_chunk"
    \| "interrupted"
    \| "route_changed"
    \| "playback_started"
    \| "playback_ended"` | No | — |
| `sequence` | `number` | No | — |
| `transcriptFinal` | `boolean` | No | — |
| `assistantTextFinal` | `boolean` | No | — |
| `activeTurnId` | `string` | No | — |
| `providerSource` | `string` | No | — |
| `providerId` | `string` | No | — |
| `fallbackReason` | `string` | No | — |
| `assistantAudioBase64` | `string` | No | — |
| `assistantAudioDurationSeconds` | `number` | No | — |
| `ts` | `string` | Yes | — |

### AppNavigatePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `destination` | `string` | Yes | — |
| `gatewayId` | `string` | No | — |
| `spaceId` | `string` | No | — |
| `jobId` | `string` | No | — |
| `promptText` | `string` | No | — |

### AppConciergeActionRequestPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `requestId` | `string` | Yes | — |
| `action` | `ConciergeActionRequestType` | Yes | — |
| `gatewayId` | `string` | No | — |
| `params` | `Record<string, unknown>` | No | — |
