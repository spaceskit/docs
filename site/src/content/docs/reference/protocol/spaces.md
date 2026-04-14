---
title: "Spaces Messages"
description: Protocol messages in the spaces family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 81 message types in the **spaces** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `SPACE_CREATE` | `space.create` | Client → Gateway | [`SpaceCreatePayload`](#spacecreatepayload) | — |
| `SPACE_GET` | `space.get` | Client → Gateway | [`SpaceGetPayload`](#spacegetpayload) | — |
| `SPACE_LIST` | `space.list` | Client → Gateway | [`SpaceListPayload`](#spacelistpayload) | — |
| `SPACE_ARCHIVE` | `space.archive` | Client → Gateway | [`SpaceArchivePayload`](#spacearchivepayload) | [`SpaceArchiveResponsePayload`](#spacearchiveresponsepayload) |
| `SPACE_DELETE` | `space.delete` | Client → Gateway | [`SpaceDeletePayload`](#spacedeletepayload) | [`SpaceDeleteResponsePayload`](#spacedeleteresponsepayload) |
| `SPACE_ADD_AGENT` | `space.add_agent` | Client → Gateway | [`SpaceAddAgentPayload`](#spaceaddagentpayload) | — |
| `SPACE_REMOVE_AGENT` | `space.remove_agent` | Client → Gateway | [`SpaceRemoveAgentPayload`](#spaceremoveagentpayload) | — |
| `SPACE_UPDATE_AGENT_ASSIGNMENT` | `space.update_agent_assignment` | Client → Gateway | [`SpaceUpdateAgentAssignmentPayload`](#spaceupdateagentassignmentpayload) | — |
| `SPACE_SET_ORCHESTRATOR` | `space.set_orchestrator` | Client → Gateway | [`SpaceSetOrchestratorPayload`](#spacesetorchestratorpayload) | — |
| `SPACE_SET_THINKING_CAPTURE_POLICY` | `space.set_thinking_capture_policy` | Client → Gateway | [`SpaceSetThinkingCapturePolicyPayload`](#spacesetthinkingcapturepolicypayload) | [`SpaceSetThinkingCapturePolicyResponsePayload`](#spacesetthinkingcapturepolicyresponsepayload) |
| `SPACE_GET_MEMORY_POLICY` | `space.get_memory_policy` | Client → Gateway | [`SpaceGetMemoryPolicyPayload`](#spacegetmemorypolicypayload) | [`SpaceGetMemoryPolicyResponsePayload`](#spacegetmemorypolicyresponsepayload) |
| `SPACE_SET_MEMORY_POLICY` | `space.set_memory_policy` | Client → Gateway | [`SpaceSetMemoryPolicyPayload`](#spacesetmemorypolicypayload) | [`SpaceSetMemoryPolicyResponsePayload`](#spacesetmemorypolicyresponsepayload) |
| `SPACE_END_INCOGNITO_SESSION` | `space.end_incognito_session` | Client → Gateway | [`SpaceEndIncognitoSessionPayload`](#spaceendincognitosessionpayload) | [`SpaceEndIncognitoSessionResponsePayload`](#spaceendincognitosessionresponsepayload) |
| `SPACE_LIST_AGENT_ASSIGNMENTS` | `space.list_agent_assignments` | Client → Gateway | [`SpaceListAgentAssignmentsPayload`](#spacelistagentassignmentspayload) | — |
| `SPACE_GET_MCP_ENDPOINT` | `space.get_mcp_endpoint` | Client → Gateway | [`SpaceGetMcpEndpointPayload`](#spacegetmcpendpointpayload) | [`SpaceGetMcpEndpointResponsePayload`](#spacegetmcpendpointresponsepayload) |
| `SPACE_SET_MCP_ENDPOINT` | `space.set_mcp_endpoint` | Client → Gateway | [`SpaceSetMcpEndpointPayload`](#spacesetmcpendpointpayload) | [`SpaceSetMcpEndpointResponsePayload`](#spacesetmcpendpointresponsepayload) |
| `SPACE_CLEAR_MCP_ENDPOINT` | `space.clear_mcp_endpoint` | Client → Gateway | [`SpaceClearMcpEndpointPayload`](#spaceclearmcpendpointpayload) | [`SpaceClearMcpEndpointResponsePayload`](#spaceclearmcpendpointresponsepayload) |
| `SPACE_DISCOVER_MCP_AGENTS` | `space.discover_mcp_agents` | Client → Gateway | [`SpaceDiscoverMcpAgentsPayload`](#spacediscovermcpagentspayload) | [`SpaceDiscoverMcpAgentsResponsePayload`](#spacediscovermcpagentsresponsepayload) |
| `SPACE_APPROVE_MCP_AGENT` | `space.approve_mcp_agent` | Client → Gateway | [`SpaceApproveMcpAgentPayload`](#spaceapprovemcpagentpayload) | [`SpaceApproveMcpAgentResponsePayload`](#spaceapprovemcpagentresponsepayload) |
| `SPACE_ADD_SKILL` | `space.add_skill` | Client → Gateway | [`SpaceAddSkillPayload`](#spaceaddskillpayload) | [`SpaceAddSkillResponsePayload`](#spaceaddskillresponsepayload) |
| `SPACE_REMOVE_SKILL` | `space.remove_skill` | Client → Gateway | [`SpaceRemoveSkillPayload`](#spaceremoveskillpayload) | [`SpaceRemoveSkillResponsePayload`](#spaceremoveskillresponsepayload) |
| `SPACE_LIST_SKILLS` | `space.list_skills` | Client → Gateway | [`SpaceListSkillsPayload`](#spacelistskillspayload) | [`SpaceListSkillsResponsePayload`](#spacelistskillsresponsepayload) |
| `SPACE_GET_WORKSPACE` | `space.get_workspace` | Client → Gateway | [`SpaceGetWorkspacePayload`](#spacegetworkspacepayload) | [`SpaceGetWorkspaceResponsePayload`](#spacegetworkspaceresponsepayload) |
| `SPACE_SET_WORKSPACE` | `space.set_workspace` | Client → Gateway | [`SpaceSetWorkspacePayload`](#spacesetworkspacepayload) | [`SpaceSetWorkspaceResponsePayload`](#spacesetworkspaceresponsepayload) |
| `SPACE_ADD_RESOURCE` | `space.add_resource` | Client → Gateway | [`SpaceAddResourcePayload`](#spaceaddresourcepayload) | [`SpaceAddResourceResponsePayload`](#spaceaddresourceresponsepayload) |
| `SPACE_REMOVE_RESOURCE` | `space.remove_resource` | Client → Gateway | [`SpaceRemoveResourcePayload`](#spaceremoveresourcepayload) | [`SpaceRemoveResourceResponsePayload`](#spaceremoveresourceresponsepayload) |
| `SPACE_LIST_RESOURCES` | `space.list_resources` | Client → Gateway | [`SpaceListResourcesPayload`](#spacelistresourcespayload) | [`SpaceListResourcesResponsePayload`](#spacelistresourcesresponsepayload) |
| `SPACE_LIST_TURNS` | `space.list_turns` | Client → Gateway | [`SpaceListTurnsPayload`](#spacelistturnspayload) | [`SpaceListTurnsResponsePayload`](#spacelistturnsresponsepayload) |
| `SPACE_LIST_ORCHESTRATION_JOURNAL` | `space.list_orchestration_journal` | Client → Gateway | [`SpaceListOrchestrationJournalPayload`](#spacelistorchestrationjournalpayload) | [`SpaceListOrchestrationJournalResponsePayload`](#spacelistorchestrationjournalresponsepayload) |
| `SPACE_LIST_TEMPLATES` | `space.list_templates` | Client → Gateway | — | — |
| `SPACE_GET_TEMPLATE` | `space.get_template` | Client → Gateway | — | — |
| `SPACE_PREVIEW_TEMPLATE` | `space.preview_template` | Client → Gateway | [`SpacePreviewTemplatePayload`](#spacepreviewtemplatepayload) | [`SpacePreviewTemplateResponsePayload`](#spacepreviewtemplateresponsepayload) |
| `SPACE_CREATE_FROM_TEMPLATE` | `space.create_from_template` | Client → Gateway | [`SpaceCreateFromTemplatePayload`](#spacecreatefromtemplatepayload) | [`SpaceCreateFromTemplateResponsePayload`](#spacecreatefromtemplateresponsepayload) |
| `SPACE_SAVE_TEMPLATE` | `space.save_template` | Client → Gateway | [`SpaceSaveTemplatePayload`](#spacesavetemplatepayload) | [`SpaceSaveTemplateResponsePayload`](#spacesavetemplateresponsepayload) |
| `SPACE_ARCHIVE_TEMPLATE` | `space.archive_template` | Client → Gateway | — | — |
| `SPACE_LINK` | `space.link` | Client → Gateway | [`SpaceLinkPayload`](#spacelinkpayload) | [`SpaceLinkResponsePayload`](#spacelinkresponsepayload) |
| `SPACE_UNLINK` | `space.unlink` | Client → Gateway | [`SpaceUnlinkPayload`](#spaceunlinkpayload) | [`SpaceUnlinkResponsePayload`](#spaceunlinkresponsepayload) |
| `SPACE_SHARE_CONTEXT` | `space.share_context` | Client → Gateway | [`SpaceShareContextPayload`](#spacesharecontextpayload) | [`SpaceShareContextResponsePayload`](#spacesharecontextresponsepayload) |
| `SPACE_PULL_SHARED_CONTEXT` | `space.pull_shared_context` | Client → Gateway | [`SpacePullSharedContextPayload`](#spacepullsharedcontextpayload) | [`SpacePullSharedContextResponsePayload`](#spacepullsharedcontextresponsepayload) |
| `SPACE_SHARE_CREATE_INVITE` | `space.share_create_invite` | Client → Gateway | [`SpaceShareCreateInvitePayload`](#spacesharecreateinvitepayload) | [`SpaceShareCreateInviteResponsePayload`](#spacesharecreateinviteresponsepayload) |
| `SPACE_SHARE_JOIN` | `space.share_join` | Client → Gateway | [`SpaceShareJoinPayload`](#spacesharejoinpayload) | [`SpaceShareJoinResponsePayload`](#spacesharejoinresponsepayload) |
| `SPACE_SHARE_REVOKE` | `space.share_revoke` | Client → Gateway | [`SpaceShareRevokePayload`](#spacesharerevokepayload) | [`SpaceShareRevokeResponsePayload`](#spacesharerevokeresponsepayload) |
| `SPACE_SHARE_LIST_PARTICIPANTS` | `space.share_list_participants` | Client → Gateway | [`SpaceShareListParticipantsPayload`](#spacesharelistparticipantspayload) | [`SpaceShareListParticipantsResponsePayload`](#spacesharelistparticipantsresponsepayload) |
| `SPACE_CREATE_CHANGESET` | `space.create_changeset` | Client → Gateway | — | — |
| `SPACE_LIST_CHANGESETS` | `space.list_changesets` | Client → Gateway | — | — |
| `SPACE_UPLOAD_CHANGESET_FILE_INIT` | `space.upload_changeset_file_init` | Client → Gateway | — | — |
| `SPACE_UPLOAD_CHANGESET_FILE_COMPLETE` | `space.upload_changeset_file_complete` | Client → Gateway | — | — |
| `SPACE_SUBMIT_CHANGESET` | `space.submit_changeset` | Client → Gateway | — | — |
| `SPACE_REVIEW_CHANGESET` | `space.review_changeset` | Client → Gateway | — | — |
| `SPACE_APPLY_CHANGESET` | `space.apply_changeset` | Client → Gateway | — | — |
| `SPACE_GET_CHANGESET_DIFF` | `space.get_changeset_diff` | Client → Gateway | — | — |
| `SPACE_GET_QUOTA` | `space.get_quota` | Client → Gateway | [`SpaceGetQuotaPayload`](#spacegetquotapayload) | [`SpaceGetQuotaResponsePayload`](#spacegetquotaresponsepayload) |
| `SPACE_UPDATE_QUOTA_POLICY` | `space.update_quota_policy` | Client → Gateway | [`SpaceUpdateQuotaPolicyPayload`](#spaceupdatequotapolicypayload) | [`SpaceUpdateQuotaPolicyResponsePayload`](#spaceupdatequotapolicyresponsepayload) |
| `SPACE_GET_USAGE` | `space.get_usage` | Client → Gateway | [`SpaceGetUsagePayload`](#spacegetusagepayload) | [`SpaceGetUsageResponsePayload`](#spacegetusageresponsepayload) |
| `SPACE_LIST_ACTIVITY_LOG` | `space.list_activity_log` | Client → Gateway | [`SpaceListActivityLogPayload`](#spacelistactivitylogpayload) | [`SpaceListActivityLogResponsePayload`](#spacelistactivitylogresponsepayload) |
| `SPACE_GET_TURN_TRACE` | `space.get_turn_trace` | Client → Gateway | [`SpaceGetTurnTracePayload`](#spacegetturntracepayload) | [`SpaceGetTurnTraceResponsePayload`](#spacegetturntraceresponsepayload) |
| `SPACE_LIST_EXPERIENCES` | `space.list_experiences` | Client → Gateway | [`SpaceListExperiencesPayload`](#spacelistexperiencespayload) | [`SpaceListExperiencesResponsePayload`](#spacelistexperiencesresponsepayload) |
| `SPACE_GET_EXPERIENCE` | `space.get_experience` | Client → Gateway | [`SpaceGetExperiencePayload`](#spacegetexperiencepayload) | [`SpaceGetExperienceResponsePayload`](#spacegetexperienceresponsepayload) |
| `SPACE_LIST_INSIGHTS` | `space.list_insights` | Client → Gateway | [`SpaceListInsightsPayload`](#spacelistinsightspayload) | [`SpaceListInsightsResponsePayload`](#spacelistinsightsresponsepayload) |
| `SPACE_GET_INSIGHT` | `space.get_insight` | Client → Gateway | [`SpaceGetInsightPayload`](#spacegetinsightpayload) | [`SpaceGetInsightResponsePayload`](#spacegetinsightresponsepayload) |
| `SPACE_ACCEPT_INSIGHT` | `space.accept_insight` | Client → Gateway | — | — |
| `SPACE_REJECT_INSIGHT` | `space.reject_insight` | Client → Gateway | — | — |
| `SPACE_DISMISS_INSIGHT` | `space.dismiss_insight` | Client → Gateway | — | — |
| `SPACE_GET_SPACE_AGENT_NOTES` | `space.get_space_agent_notes` | Client → Gateway | [`SpaceGetSpaceAgentNotesPayload`](#spacegetspaceagentnotespayload) | [`SpaceGetSpaceAgentNotesResponsePayload`](#spacegetspaceagentnotesresponsepayload) |
| `SPACE_UPDATE_SPACE_AGENT_NOTES` | `space.update_space_agent_notes` | Client → Gateway | [`SpaceUpdateSpaceAgentNotesPayload`](#spaceupdatespaceagentnotespayload) | [`SpaceUpdateSpaceAgentNotesResponsePayload`](#spaceupdatespaceagentnotesresponsepayload) |
| `SPACE_GET_USER_PROFILE` | `space.get_user_profile` | Client → Gateway | [`SpaceGetUserProfilePayload`](#spacegetuserprofilepayload) | [`SpaceGetUserProfileResponsePayload`](#spacegetuserprofileresponsepayload) |
| `SPACE_UPDATE_USER_PROFILE` | `space.update_user_profile` | Client → Gateway | [`SpaceUpdateUserProfilePayload`](#spaceupdateuserprofilepayload) | [`SpaceUpdateUserProfileResponsePayload`](#spaceupdateuserprofileresponsepayload) |
| `SPACE_LIST_MEMORIES` | `space.list_memories` | Client → Gateway | [`SpaceListMemoriesPayload`](#spacelistmemoriespayload) | [`SpaceListMemoriesResponsePayload`](#spacelistmemoriesresponsepayload) |
| `SPACE_DELETE_MEMORY` | `space.delete_memory` | Client → Gateway | [`SpaceDeleteMemoryPayload`](#spacedeletememorypayload) | [`SpaceDeleteMemoryResponsePayload`](#spacedeletememoryresponsepayload) |
| `SPACE_UPDATE_MEMORY_IMPORTANCE` | `space.update_memory_importance` | Client → Gateway | [`SpaceUpdateMemoryImportancePayload`](#spaceupdatememoryimportancepayload) | [`SpaceUpdateMemoryImportanceResponsePayload`](#spaceupdatememoryimportanceresponsepayload) |
| `SPACE_LIST_ARTIFACTS` | `space.list_artifacts` | Client → Gateway | [`SpaceListArtifactsPayload`](#spacelistartifactspayload) | [`SpaceListArtifactsResponsePayload`](#spacelistartifactsresponsepayload) |
| `SPACE_GET_ARTIFACT` | `space.get_artifact` | Client → Gateway | [`SpaceGetArtifactPayload`](#spacegetartifactpayload) | [`SpaceGetArtifactResponsePayload`](#spacegetartifactresponsepayload) |
| `SPACE_GET_DEBUG_ARTIFACT` | `space.get_debug_artifact` | Client → Gateway | [`SpaceGetDebugArtifactPayload`](#spacegetdebugartifactpayload) | [`SpaceGetDebugArtifactResponsePayload`](#spacegetdebugartifactresponsepayload) |
| `SPACE_RESET` | `space.reset` | Client → Gateway | [`SpaceResetPayload`](#spaceresetpayload) | [`SpaceResetResponsePayload`](#spaceresetresponsepayload) |
| `SPACE_RESET_AGENT_USAGE_SESSION` | `space.reset_agent_usage_session` | Client → Gateway | [`SpaceResetAgentUsageSessionPayload`](#spaceresetagentusagesessionpayload) | [`SpaceResetAgentUsageSessionResponsePayload`](#spaceresetagentusagesessionresponsepayload) |
| `SPACE_GET_EFFECTIVE_TOOLS` | `space.get_effective_tools` | Client → Gateway | [`SpaceGetEffectiveToolsPayload`](#spacegeteffectivetoolspayload) | [`SpaceGetEffectiveToolsResponsePayload`](#spacegeteffectivetoolsresponsepayload) |
| `SPACE_GET_EFFECTIVE_TOOL_ACCESS` | `space.get_effective_tool_access` | Client → Gateway | [`SpaceGetEffectiveToolAccessPayload`](#spacegeteffectivetoolaccesspayload) | [`SpaceGetEffectiveToolAccessResponsePayload`](#spacegeteffectivetoolaccessresponsepayload) |
| `SPACE_GET_TOOL_POLICY` | `space.get_tool_policy` | Client → Gateway | [`SpaceGetToolPolicyPayload`](#spacegettoolpolicypayload) | [`SpaceGetToolPolicyResponsePayload`](#spacegettoolpolicyresponsepayload) |
| `SPACE_UPDATE_TOOL_POLICY` | `space.update_tool_policy` | Client → Gateway | [`SpaceUpdateToolPolicyPayload`](#spaceupdatetoolpolicypayload) | [`SpaceUpdateToolPolicyResponsePayload`](#spaceupdatetoolpolicyresponsepayload) |
| `SPACE_STATE` | `space_state` | Gateway → Client | [`SpaceStatePayload`](#spacestatepayload) | — |
| `SPACE_AGENT_UPDATED` | `space.agent_updated` | Gateway → Client | — | — |

## Payloads

### SpaceCreatePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `spaceId` | `string` | No | — |
| `workspaceRoot` | `string` | No | — |
| `resourceId` | `string` | Yes | — |
| `spaceType` | `string` | No | — |
| `name` | `string` | Yes | — |
| `goal` | `string` | No | — |
| `turnModel` | `string` | No | — |
| `templateId` | `string` | No | — |
| `templateRevision` | `number` | No | — |
| `capabilities` | `string[]` | No | — |
| `capabilityOverrides` | `Record<string, string>` | No | — |
| `visibility` | `"shared" \| "private"` | No | — |
| `turnModelConfig` | `Record<string, unknown>` | No | — |
| `maxTurns` | `number` | No | — |
| `thinkingCapturePolicy` | `ThinkingCapturePolicy` | No | — |
| `moderatorProfileId` | `string` | No | — |
| `initialAgents` | `SpaceAddAgentPayload[]` | No | — |

### SpaceGetPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceListPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `statuses` | `string[]` | No | — |
| `resourceId` | `string` | No | — |
| `limit` | `number` | No | — |

### SpaceArchivePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceArchiveResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `space` | `SpaceSummary` | Yes | — |
| `archived` | `boolean` | Yes | — |

### SpaceDeletePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceDeleteResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `deleted` | `boolean` | Yes | — |
| `space` | `SpaceSummary \| null` | No | — |

### SpaceAddAgentPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `agentId` | `string` | Yes | — |
| `profileId` | `string` | Yes | — |
| `securityScope` | `Record<string, unknown>` | No | — |
| `spawnContext` | `string` | No | — |
| `contextOverrides` | `Record<string, unknown>` | No | — |
| `role` | `"participant" \| "global_coordinator" \| "space_moderator"` | No | — |
| `turnOrder` | `number` | No | — |
| `isPrimary` | `boolean` | No | — |

### SpaceRemoveAgentPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `agentId` | `string` | Yes | — |

### SpaceUpdateAgentAssignmentPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `agentId` | `string` | Yes | — |
| `profileId` | `string` | No | — |
| `securityScope` | `Record<string, unknown> \| null` | No | — |
| `spawnContext` | `string \| null` | No | — |
| `contextOverrides` | `Record<string, unknown> \| null` | No | — |
| `role` | `"participant" \| "global_coordinator" \| "space_moderator"` | No | — |
| `turnOrder` | `number` | No | — |
| `isPrimary` | `boolean` | No | — |
| `resetSession` | `boolean` | No | — |

### SpaceSetOrchestratorPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `profileId` | `string` | Yes | — |

### SpaceSetThinkingCapturePolicyPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `thinkingCapturePolicy` | `ThinkingCapturePolicy` | Yes | — |

### SpaceSetThinkingCapturePolicyResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `space` | `SpaceSummary` | Yes | — |

### SpaceGetMemoryPolicyPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceGetMemoryPolicyResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `memoryPolicy` | `SpaceMemoryPolicy` | Yes | — |

### SpaceSetMemoryPolicyPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `memoryPolicy` | `SpaceMemoryPolicy` | Yes | — |

### SpaceSetMemoryPolicyResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `space` | `SpaceSummary` | Yes | — |

### SpaceEndIncognitoSessionPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceEndIncognitoSessionResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `space` | `SpaceSummary` | Yes | — |
| `ended` | `boolean` | Yes | — |
| `reason` | `string` | Yes | — |
| `purgedAt` | `string` | No | — |
| `sessionId` | `string` | No | — |

### SpaceListAgentAssignmentsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceGetMcpEndpointPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceGetMcpEndpointResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `endpoint` | `SpaceMcpEndpointPayload` | No | — |
| `fallbackEnabled` | `boolean` | Yes | — |

### SpaceSetMcpEndpointPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `transport` | `"sse" \| "stdio"` | Yes | — |
| `endpoint` | `string` | Yes | — |
| `args` | `string[]` | No | — |
| `secretRef` | `string` | No | — |
| `enabled` | `boolean` | No | — |

### SpaceSetMcpEndpointResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `endpoint` | `SpaceMcpEndpointPayload` | Yes | — |

### SpaceClearMcpEndpointPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceClearMcpEndpointResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `cleared` | `boolean` | Yes | — |

### SpaceDiscoverMcpAgentsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceDiscoverMcpAgentsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `endpointId` | `string` | No | — |
| `agents` | `McpDiscoveredAgentPayload[]` | Yes | — |

### SpaceApproveMcpAgentPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `remoteAgentId` | `string` | Yes | — |
| `displayName` | `string` | No | — |
| `agentId` | `string` | No | — |
| `profileId` | `string` | No | — |

### SpaceApproveMcpAgentResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `assignment` | `SpaceAssignmentSummary` | Yes | — |
| `binding` | `ExternalAgentRuntimeBindingPayload` | Yes | — |

### SpaceAddSkillPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `skillId` | `string` | Yes | — |

### SpaceAddSkillResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `skillId` | `string` | Yes | — |
| `skills` | `string[]` | Yes | — |
| `space` | `unknown` | No | — |

### SpaceRemoveSkillPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `skillId` | `string` | Yes | — |

### SpaceRemoveSkillResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `removed` | `boolean` | Yes | — |
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `skillId` | `string` | Yes | — |
| `skills` | `string[]` | Yes | — |
| `space` | `unknown` | No | — |

### SpaceListSkillsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceListSkillsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `skills` | `string[]` | Yes | — |

### SpaceGetWorkspacePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceGetWorkspaceResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `workspace` | `SpaceWorkspacePayload` | Yes | — |

### SpaceSetWorkspacePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `workspaceRoot` | `string \| null` | No | — |

### SpaceSetWorkspaceResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `workspace` | `SpaceWorkspacePayload` | Yes | — |

### SpaceAddResourcePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `resourceId` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `uri` | `string` | Yes | — |
| `type` | `"folder" \| "url"` | Yes | — |
| `label` | `string` | No | — |

### SpaceAddResourceResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource` | `SpaceResourcePayload` | Yes | — |

### SpaceRemoveResourcePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `resourceId` | `string` | Yes | — |

### SpaceRemoveResourceResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `removed` | `boolean` | Yes | — |
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `resourceId` | `string` | Yes | — |

### SpaceListResourcesPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceListResourcesResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `resources` | `SpaceResourcePayload[]` | Yes | — |

### SpaceListTurnsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | No | — |
| `spaceUid` | `string` | No | — |
| `limit` | `number` | No | — |
| `offset` | `number` | No | — |
| `lastSeenTurnId` | `string` | No | — |

### SpaceListTurnsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `turns` | `SpaceTurnPayload[]` | Yes | — |
| `total` | `number` | Yes | — |
| `nextOffset` | `number` | No | — |

### SpaceListOrchestrationJournalPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | No | — |
| `spaceUid` | `string` | No | — |
| `turnId` | `string` | No | — |
| `limit` | `number` | No | — |
| `offset` | `number` | No | — |

### SpaceListOrchestrationJournalResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `entries` | `OrchestrationJournalEntryPayload[]` | Yes | — |
| `total` | `number` | Yes | — |
| `nextOffset` | `number` | No | — |

### SpacePreviewTemplatePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `templateId` | `string` | Yes | — |
| `resourceId` | `string` | No | — |
| `name` | `string` | No | — |
| `goal` | `string` | No | — |

### SpacePreviewTemplateResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `template` | `SpaceTemplateSummaryPayload` | Yes | — |
| `resolved` | `{
    templateId: string` | Yes | — |
| `templateRevision` | `number` | Yes | — |
| `name` | `string` | Yes | — |
| `goal` | `string` | No | — |
| `resourceId` | `string` | Yes | — |
| `communicationMode` | `CommunicationModePayload` | Yes | — |
| `conversationTopology` | `ConversationTopologyPayload` | No | — |
| `promptPackId` | `string` | No | — |
| `turnModel` | `string` | Yes | — |
| `initialAgents` | `TemplateAgentDefinitionPayload[]` | Yes | — |

### SpaceCreateFromTemplatePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `templateId` | `string` | Yes | — |
| `spaceId` | `string` | No | — |
| `resourceId` | `string` | Yes | — |
| `name` | `string` | No | — |
| `goal` | `string` | No | — |
| `visibility` | `"shared" \| "private"` | No | — |
| `workspaceRoot` | `string` | No | — |

### SpaceCreateFromTemplateResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `template` | `SpaceTemplateSummaryPayload` | Yes | — |
| `space` | `SpaceSummary` | Yes | — |

### SpaceSaveTemplatePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `templateId` | `string` | No | — |
| `title` | `string` | Yes | — |
| `description` | `string` | No | — |
| `communicationMode` | `CommunicationModePayload` | No | — |
| `baseAgents` | `TemplateAgentDefinitionPayload[]` | No | — |
| `agentPresetIds` | `string[]` | No | — |
| `sourceSpaceId` | `string` | No | — |
| `tags` | `string[]` | No | — |

### SpaceSaveTemplateResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `template` | `SpaceTemplateSummaryPayload` | Yes | — |
| `created` | `boolean` | Yes | — |

### SpaceLinkPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `sourceSpaceId` | `string` | Yes | — |
| `targetSpaceId` | `string` | Yes | — |
| `mode` | `string` | No | — |

### SpaceLinkResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `link` | `{
    sourceSpaceId: string` | Yes | — |
| `targetSpaceId` | `string` | Yes | — |
| `mode` | `string` | Yes | — |
| `createdAt` | `string` | Yes | — |
| `updatedAt` | `string` | Yes | — |

### SpaceUnlinkPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `sourceSpaceId` | `string` | Yes | — |
| `targetSpaceId` | `string` | Yes | — |

### SpaceUnlinkResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `removed` | `boolean` | Yes | — |
| `sourceSpaceId` | `string` | Yes | — |
| `targetSpaceId` | `string` | Yes | — |

### SpaceShareContextPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `sourceSpaceId` | `string` | Yes | — |
| `targetSpaceId` | `string` | Yes | — |
| `artifactId` | `string` | Yes | — |

### SpaceShareContextResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `transfer` | `{
    transferId: string` | Yes | — |
| `sourceSpaceId` | `string` | Yes | — |
| `targetSpaceId` | `string` | Yes | — |
| `artifactId` | `string` | Yes | — |
| `status` | `"shared" \| "imported" \| "denied"` | Yes | — |
| `denialReason` | `string` | No | — |
| `createdAt` | `string` | Yes | — |
| `appliedAt` | `string` | No | — |

### SpacePullSharedContextPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `sourceSpaceId` | `string` | Yes | — |
| `targetSpaceId` | `string` | Yes | — |
| `limit` | `number` | No | — |

### SpacePullSharedContextResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `importedArtifacts` | `Array<{
    sourceArtifactId: string` | Yes | — |
| `importedArtifactId` | `string` | Yes | — |

### SpaceShareCreateInvitePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `mode` | `SpaceShareAccessMode` | Yes | — |
| `expiresInSeconds` | `number` | No | — |

### SpaceShareCreateInviteResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `invite` | `SpaceShareInvitePayload` | Yes | — |

### SpaceShareJoinPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `inviteToken` | `string` | Yes | — |
| `deviceId` | `string` | No | — |
| `devicePublicKey` | `string` | No | — |
| `identityModeHint` | `"device_key" \| "strict_apple_id"` | No | — |
| `appleIdAssertion` | `string` | No | — |
| `joinRoute` | `SpaceShareJoinRoute` | No | — |
| `relaySessionToken` | `string` | No | — |

### SpaceShareJoinResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `participant` | `SpaceParticipantPayload` | Yes | — |

### SpaceShareRevokePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `inviteId` | `string` | No | — |
| `participantId` | `string` | No | — |

### SpaceShareRevokeResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `inviteId` | `string` | No | — |
| `participantId` | `string` | No | — |
| `revokedInvite` | `boolean` | Yes | — |
| `revokedParticipant` | `boolean` | Yes | — |

### SpaceShareListParticipantsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceShareListParticipantsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `participants` | `SpaceParticipantPayload[]` | Yes | — |

### SpaceGetQuotaPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceGetQuotaResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spacePolicy` | `SpaceQuotaPolicyPayload` | Yes | — |
| `participantPolicy` | `ParticipantQuotaPolicyPayload` | No | — |

### SpaceUpdateQuotaPolicyPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `maxStagingBytes` | `number` | No | — |
| `maxOpenChangeSets` | `number` | No | — |
| `maxAppliedChangeSetsPerMonth` | `number` | No | — |
| `tokenBudget` | `number` | No | — |
| `maxParticipantStagingBytes` | `number` | No | — |
| `maxUploadsPerDay` | `number` | No | — |
| `maxOpenChangeSetsPerParticipant` | `number` | No | — |
| `maxToolCallsPerHour` | `number` | No | — |

### SpaceUpdateQuotaPolicyResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spacePolicy` | `SpaceQuotaPolicyPayload` | Yes | — |

### SpaceGetUsagePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `includeAgentSessions` | `boolean` | No | — |
| `includeGlobalLifetime` | `boolean` | No | — |

### SpaceGetUsageResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceUsage` | `SpaceUsageSnapshotPayload` | Yes | — |
| `participantUsage` | `ParticipantUsageSnapshotPayload` | No | — |
| `agentSessions` | `AgentUsageSessionPayload[]` | No | — |
| `globalLifetime` | `UsageWindowSummaryPayload` | No | — |

### SpaceListActivityLogPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `turnId` | `string` | No | — |
| `limit` | `number` | No | — |
| `offset` | `number` | No | — |
| `includeSystem` | `boolean` | No | — |

### SpaceListActivityLogResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | No | — |
| `entries` | `SpaceActivityLogEntryPayload[]` | Yes | — |
| `total` | `number` | Yes | — |
| `nextOffset` | `number` | No | — |

### SpaceGetTurnTracePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `turnId` | `string` | Yes | — |
| `limit` | `number` | No | — |
| `offset` | `number` | No | — |

### SpaceGetTurnTraceResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `trace` | `TurnTracePayload` | Yes | — |

### SpaceListExperiencesPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `limit` | `number` | No | — |
| `offset` | `number` | No | — |

### SpaceListExperiencesResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `experiences` | `SpaceExperiencePayload[]` | Yes | — |
| `total` | `number` | Yes | — |
| `nextOffset` | `number` | No | — |

### SpaceGetExperiencePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `experienceId` | `string` | Yes | — |

### SpaceGetExperienceResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `experience` | `SpaceExperiencePayload` | No | — |
| `observations` | `SpaceExperienceObservationPayload[]` | Yes | — |

### SpaceListInsightsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `status` | `string` | No | — |
| `limit` | `number` | No | — |
| `offset` | `number` | No | — |

### SpaceListInsightsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `insights` | `SpaceInsightPayload[]` | Yes | — |
| `total` | `number` | Yes | — |
| `nextOffset` | `number` | No | — |

### SpaceGetInsightPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `insightId` | `string` | Yes | — |

### SpaceGetInsightResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `insight` | `SpaceInsightPayload` | No | — |

### SpaceGetSpaceAgentNotesPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `agentId` | `string` | No | — |

### SpaceGetSpaceAgentNotesResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `note` | `SpaceAgentNotePayload` | No | — |
| `notes` | `SpaceAgentNotePayload[]` | Yes | — |

### SpaceUpdateSpaceAgentNotesPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `agentId` | `string` | Yes | — |
| `notes` | `string` | Yes | — |

### SpaceUpdateSpaceAgentNotesResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `note` | `SpaceAgentNotePayload` | No | — |

### SpaceGetUserProfilePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `principalId` | `string` | No | — |

### SpaceGetUserProfileResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `profile` | `SpaceUserProfilePayload` | Yes | — |

### SpaceUpdateUserProfilePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `principalId` | `string` | No | — |
| `profile` | `Record<string, unknown>` | Yes | — |

### SpaceUpdateUserProfileResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `profile` | `SpaceUserProfilePayload` | Yes | — |

### SpaceListMemoriesPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `principalId` | `string` | No | — |
| `spaceId` | `string` | No | — |
| `agentId` | `string` | No | — |
| `type` | `"episodic" \| "semantic" \| "procedural" \| "observation"` | No | — |
| `limit` | `number` | No | — |
| `offset` | `number` | No | — |

### SpaceListMemoriesResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `memories` | `SpaceMemoryDocumentPayload[]` | Yes | — |
| `total` | `number` | Yes | — |
| `nextOffset` | `number` | No | — |

### SpaceDeleteMemoryPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `memoryId` | `string` | Yes | — |

### SpaceDeleteMemoryResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `deleted` | `boolean` | Yes | — |

### SpaceUpdateMemoryImportancePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `memoryId` | `string` | Yes | — |
| `importance` | `number` | Yes | — |

### SpaceUpdateMemoryImportanceResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `memory` | `SpaceMemoryDocumentPayload` | No | — |

### SpaceListArtifactsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `turnId` | `string` | No | — |
| `limit` | `number` | No | — |
| `offset` | `number` | No | — |

### SpaceListArtifactsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `artifacts` | `SpaceArtifactSummaryPayload[]` | Yes | — |
| `total` | `number` | Yes | — |

### SpaceGetArtifactPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `artifactId` | `string` | Yes | — |

### SpaceGetArtifactResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `artifact` | `SpaceArtifactDetailPayload` | Yes | — |

### SpaceGetDebugArtifactPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `artifactId` | `string` | Yes | — |

### SpaceGetDebugArtifactResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `artifact` | `SpaceArtifactDetailPayload` | Yes | — |

### SpaceResetPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |

### SpaceResetResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `resetAt` | `string` | Yes | — |
| `tablesCleared` | `number` | Yes | — |
| `rowsDeleted` | `number` | Yes | — |

### SpaceResetAgentUsageSessionPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `agentId` | `string` | Yes | — |

### SpaceResetAgentUsageSessionResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `closedSessionId` | `string` | No | — |
| `activeSession` | `AgentUsageSessionPayload` | Yes | — |

### SpaceGetEffectiveToolsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `agentId` | `string` | No | — |
| `accessMode` | `"default" \| "full_access"` | No | — |

### SpaceGetEffectiveToolsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `matrix` | `EffectiveToolMatrixPayload` | Yes | — |

### SpaceGetEffectiveToolAccessPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `agentId` | `string` | No | — |
| `accessMode` | `"default" \| "full_access"` | No | — |

### SpaceGetEffectiveToolAccessResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `access` | `EffectiveToolAccessPayload` | Yes | — |

### SpaceGetToolPolicyPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |

### SpaceGetToolPolicyResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `policy` | `ToolAccessPolicyPayload` | Yes | — |

### SpaceUpdateToolPolicyPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `rules` | `ToolAccessRulePayload[]` | No | — |
| `dangerousCapabilities` | `DangerousCapabilityRulePayload[]` | No | — |
| `guestAccessPreset` | `"read_only" \| "collaborator"` | No | — |

### SpaceUpdateToolPolicyResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `policy` | `ToolAccessPolicyPayload` | Yes | — |

### SpaceStatePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `state` | `AgentActivityState` | Yes | — |
| `turnCount` | `number` | Yes | — |
| `activeAgentId` | `string` | No | — |
| `pendingFeedback` | `number` | Yes | — |
