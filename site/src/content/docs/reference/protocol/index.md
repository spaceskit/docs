---
title: Protocol Messages
description: All 252 message types in the Spaceskit WebSocket protocol.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 252 message types across 15 families. Generated from `protocol.ts`.

## Message Types

| Key | Wire Type | Direction | Family |
|-----|-----------|-----------|--------|
| `AUTHENTICATE` | `authenticate` | Client → Gateway | [auth](/reference/protocol/auth/) |
| `EXECUTE_TURN` | `execute_turn` | Client → Gateway | [turns](/reference/protocol/turns/) |
| `CANCEL_TURN` | `cancel_turn` | Client → Gateway | [other](/reference/protocol/other/) |
| `RESUME_FEEDBACK` | `resume_feedback` | Client → Gateway | [turns](/reference/protocol/turns/) |
| `SUBSCRIBE` | `subscribe` | Client → Gateway | [auth](/reference/protocol/auth/) |
| `CAPABILITY_INVOKE` | `capability_invoke` | Client → Gateway | [capabilities](/reference/protocol/capabilities/) |
| `SPACE_CREATE` | `space.create` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET` | `space.get` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_LIST` | `space.list` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_ARCHIVE` | `space.archive` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_DELETE` | `space.delete` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_ADD_AGENT` | `space.add_agent` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_REMOVE_AGENT` | `space.remove_agent` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_UPDATE_AGENT_ASSIGNMENT` | `space.update_agent_assignment` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_SET_ORCHESTRATOR` | `space.set_orchestrator` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_SET_THINKING_CAPTURE_POLICY` | `space.set_thinking_capture_policy` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_MEMORY_POLICY` | `space.get_memory_policy` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_SET_MEMORY_POLICY` | `space.set_memory_policy` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_END_INCOGNITO_SESSION` | `space.end_incognito_session` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_LIST_AGENT_ASSIGNMENTS` | `space.list_agent_assignments` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_MCP_ENDPOINT` | `space.get_mcp_endpoint` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_SET_MCP_ENDPOINT` | `space.set_mcp_endpoint` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_CLEAR_MCP_ENDPOINT` | `space.clear_mcp_endpoint` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_DISCOVER_MCP_AGENTS` | `space.discover_mcp_agents` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_APPROVE_MCP_AGENT` | `space.approve_mcp_agent` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_ADD_SKILL` | `space.add_skill` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_REMOVE_SKILL` | `space.remove_skill` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_LIST_SKILLS` | `space.list_skills` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_WORKSPACE` | `space.get_workspace` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_SET_WORKSPACE` | `space.set_workspace` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_ADD_RESOURCE` | `space.add_resource` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_REMOVE_RESOURCE` | `space.remove_resource` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_LIST_RESOURCES` | `space.list_resources` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_LIST_TURNS` | `space.list_turns` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_LIST_ORCHESTRATION_JOURNAL` | `space.list_orchestration_journal` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `IDENTITY_LIST_AGENT_DEFINITIONS` | `identity.list_agent_definitions` | Client → Gateway | [other](/reference/protocol/other/) |
| `IDENTITY_GET_AGENT_DEFINITION` | `identity.get_agent_definition` | Client → Gateway | [other](/reference/protocol/other/) |
| `IDENTITY_CREATE_AGENT_DEFINITION` | `identity.create_agent_definition` | Client → Gateway | [other](/reference/protocol/other/) |
| `IDENTITY_UPDATE_AGENT_DEFINITION` | `identity.update_agent_definition` | Client → Gateway | [other](/reference/protocol/other/) |
| `IDENTITY_ARCHIVE_AGENT_DEFINITION` | `identity.archive_agent_definition` | Client → Gateway | [other](/reference/protocol/other/) |
| `IDENTITY_LIST_PERSONAS` | `identity.list_personas` | Client → Gateway | [other](/reference/protocol/other/) |
| `IDENTITY_GET_PERSONA` | `identity.get_persona` | Client → Gateway | [other](/reference/protocol/other/) |
| `IDENTITY_CREATE_PERSONA` | `identity.create_persona` | Client → Gateway | [other](/reference/protocol/other/) |
| `IDENTITY_UPDATE_PERSONA` | `identity.update_persona` | Client → Gateway | [other](/reference/protocol/other/) |
| `IDENTITY_ARCHIVE_PERSONA` | `identity.archive_persona` | Client → Gateway | [other](/reference/protocol/other/) |
| `IDENTITY_PREVIEW_COMPILED_INSTRUCTIONS` | `identity.preview_compiled_instructions` | Client → Gateway | [other](/reference/protocol/other/) |
| `IDENTITY_PREVIEW_RUNTIME_SYSTEM_PROMPT` | `identity.preview_runtime_system_prompt` | Client → Gateway | [other](/reference/protocol/other/) |
| `IDENTITY_PREVIEW_SYSTEM_PROMPT_MATRIX` | `identity.preview_system_prompt_matrix` | Client → Gateway | [other](/reference/protocol/other/) |
| `SPACE_LIST_TEMPLATES` | `space.list_templates` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_TEMPLATE` | `space.get_template` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_PREVIEW_TEMPLATE` | `space.preview_template` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_CREATE_FROM_TEMPLATE` | `space.create_from_template` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_SAVE_TEMPLATE` | `space.save_template` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_ARCHIVE_TEMPLATE` | `space.archive_template` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `GATEWAY_SKILL_LIST` | `gateway.skill_list` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_SKILL_GET` | `gateway.skill_get` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_SKILL_UPSERT` | `gateway.skill_upsert` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_SKILL_DELETE` | `gateway.skill_delete` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `LIBRARY_LIST_ENTRIES` | `library.list_entries` | Client → Gateway | [other](/reference/protocol/other/) |
| `LIBRARY_GET_ENTRY` | `library.get_entry` | Client → Gateway | [other](/reference/protocol/other/) |
| `LIBRARY_SAVE_SKILL` | `library.save_skill` | Client → Gateway | [other](/reference/protocol/other/) |
| `LIBRARY_IMPORT_ENTRY` | `library.import_entry` | Client → Gateway | [other](/reference/protocol/other/) |
| `LIBRARY_ARCHIVE_ENTRY` | `library.archive_entry` | Client → Gateway | [other](/reference/protocol/other/) |
| `LIBRARY_SET_ENTRY_ENABLED` | `library.set_entry_enabled` | Client → Gateway | [other](/reference/protocol/other/) |
| `LIBRARY_DELETE_ENTRY` | `library.delete_entry` | Client → Gateway | [other](/reference/protocol/other/) |
| `LIBRARY_SCAN_ENTRIES` | `library.scan_entries` | Client → Gateway | [other](/reference/protocol/other/) |
| `LIBRARY_LIST_SKILL_DRAFTS` | `library.list_skill_drafts` | Client → Gateway | [other](/reference/protocol/other/) |
| `LIBRARY_GET_SKILL_DRAFT` | `library.get_skill_draft` | Client → Gateway | [other](/reference/protocol/other/) |
| `LIBRARY_CREATE_SKILL_DRAFT` | `library.create_skill_draft` | Client → Gateway | [other](/reference/protocol/other/) |
| `LIBRARY_DELETE_SKILL_DRAFT` | `library.delete_skill_draft` | Client → Gateway | [other](/reference/protocol/other/) |
| `GATEWAY_DISCOVER_LOCAL_AGENTS` | `gateway.discover_local_agents` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_LIST_PROVIDER_CONFIGS` | `gateway.list_provider_configs` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_GET_RUNTIME_DEFAULTS` | `gateway.get_runtime_defaults` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_SET_RUNTIME_DEFAULTS` | `gateway.set_runtime_defaults` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_GET_MAIN_AGENT` | `gateway.get_main_agent` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_SET_MAIN_AGENT` | `gateway.set_main_agent` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_GET_CONCIERGE_AGENT` | `gateway.get_concierge_agent` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_SET_CONCIERGE_AGENT` | `gateway.set_concierge_agent` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_LIST_AVAILABLE_MODELS` | `gateway.list_available_models` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_LIST_PROVIDER_CATALOGS` | `gateway.list_provider_catalogs` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_LIST_INTERCONNECTORS` | `gateway.list_interconnectors` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_RESCAN_INTERCONNECTORS` | `gateway.rescan_interconnectors` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `CONNECTOR_SUBMIT_INBOUND_EVENT` | `connector.submit_inbound_event` | Client → Gateway | [other](/reference/protocol/other/) |
| `CONNECTOR_INBOUND_EVENT_RESULT` | `connector.inbound_event_result` | Client → Gateway | [other](/reference/protocol/other/) |
| `TOOL_LIST` | `tool.list` | Client → Gateway | [other](/reference/protocol/other/) |
| `TOOL_GET` | `tool.get` | Client → Gateway | [other](/reference/protocol/other/) |
| `TOOL_SCAFFOLD` | `tool.scaffold` | Client → Gateway | [other](/reference/protocol/other/) |
| `TOOL_REGISTER` | `tool.register` | Client → Gateway | [other](/reference/protocol/other/) |
| `TOOL_REMOVE` | `tool.remove` | Client → Gateway | [other](/reference/protocol/other/) |
| `TOOL_SET_ENABLED` | `tool.set_enabled` | Client → Gateway | [other](/reference/protocol/other/) |
| `TOOL_LIST_GRANTS` | `tool.list_grants` | Client → Gateway | [other](/reference/protocol/other/) |
| `TOOL_REVOKE_GRANT` | `tool.revoke_grant` | Client → Gateway | [other](/reference/protocol/other/) |
| `GATEWAY_CREATE_INTEGRATION_REQUEST` | `gateway.create_integration_request` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_LIST_INTEGRATION_REQUESTS` | `gateway.list_integration_requests` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_GET_PROVIDER_TELEMETRY` | `gateway.get_provider_telemetry` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_GET_LOCAL_USAGE_TELEMETRY` | `gateway.get_local_usage_telemetry` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_GET_PROVIDER_SETTINGS` | `gateway.get_provider_settings` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_UPDATE_PROVIDER_SETTINGS` | `gateway.update_provider_settings` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_SET_PROVIDER_CONFIG` | `gateway.set_provider_config` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_REMOVE_PROVIDER_CONFIG` | `gateway.remove_provider_config` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_FACTORY_RESET` | `gateway.factory_reset` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_PROVISION_LOCAL_PROFILE` | `gateway.provision_local_profile` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_PUT_SECRET_REF` | `gateway.put_secret_ref` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_LIST_SECRET_REFS` | `gateway.list_secret_refs` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_DELETE_SECRET_REF` | `gateway.delete_secret_ref` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_LIST_CONNECTOR_FAMILIES` | `gateway.list_connector_families` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_LIST_CONNECTORS` | `gateway.list_connectors` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_UPSERT_CONNECTOR` | `gateway.upsert_connector` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_REMOVE_CONNECTOR` | `gateway.remove_connector` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_LIST_CONNECTOR_BINDINGS` | `gateway.list_connector_bindings` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_UPSERT_CONNECTOR_BINDING` | `gateway.upsert_connector_binding` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_REMOVE_CONNECTOR_BINDING` | `gateway.remove_connector_binding` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_GET_CONNECTOR_POLICY` | `gateway.get_connector_policy` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_UPDATE_CONNECTOR_POLICY` | `gateway.update_connector_policy` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_TEST_CONNECTOR` | `gateway.test_connector` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_GET_POLICY` | `gateway.get_policy` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_UPDATE_POLICY` | `gateway.update_policy` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_KB_LIST_ENTRIES` | `gateway.kb_list_entries` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_KB_UPSERT_ENTRY` | `gateway.kb_upsert_entry` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_KB_DELETE_ENTRY` | `gateway.kb_delete_entry` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_LIST_CAPABILITY_GRANTS` | `gateway.list_capability_grants` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_GRANT_CAPABILITY` | `gateway.grant_capability` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_REVOKE_CAPABILITY` | `gateway.revoke_capability` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `USAGE_GET_SNAPSHOT` | `usage.get_snapshot` | Client → Gateway | [usage](/reference/protocol/usage/) |
| `SCHEDULER_CREATE_JOB` | `scheduler.create_job` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `SCHEDULER_GET_JOB` | `scheduler.get_job` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `SCHEDULER_LIST_JOBS` | `scheduler.list_jobs` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `SCHEDULER_LIST_EVAL_DEFINITIONS` | `scheduler.list_eval_definitions` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `SCHEDULER_UPDATE_JOB` | `scheduler.update_job` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `SCHEDULER_DELETE_JOB` | `scheduler.delete_job` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `SCHEDULER_LINK_SPACE` | `scheduler.link_space` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `SCHEDULER_UNLINK_SPACE` | `scheduler.unlink_space` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `SCHEDULER_LIST_RUNS` | `scheduler.list_runs` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `SCHEDULER_RUN_NOW` | `scheduler.run_now` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `WORKBENCH_LIST_QUEUE` | `workbench.list_queue` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_GET_QUEUE_ITEM` | `workbench.get_queue_item` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_CREATE_BATCH` | `workbench.create_batch` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_LIST_BATCHES` | `workbench.list_batches` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_UPDATE_BATCH` | `workbench.update_batch` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_START_RUN` | `workbench.start_run` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_RETRY_RUN` | `workbench.retry_run` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_CANCEL_RUN` | `workbench.cancel_run` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_LIST_RUNS` | `workbench.list_runs` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_GET_RUN` | `workbench.get_run` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_APPROVE_STAGE` | `workbench.approve_stage` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_REJECT_STAGE` | `workbench.reject_stage` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_SET_MODE` | `workbench.set_mode` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_LIST_ARTIFACTS` | `workbench.list_artifacts` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_GET_POLICY` | `workbench.get_policy` | Client → Gateway | [other](/reference/protocol/other/) |
| `WORKBENCH_UPDATE_POLICY` | `workbench.update_policy` | Client → Gateway | [other](/reference/protocol/other/) |
| `ORCHESTRATOR_COMMAND` | `orchestrator.command` | Client → Gateway | [orchestrator](/reference/protocol/orchestrator/) |
| `ORCHESTRATOR_GET_COMMAND` | `orchestrator.get_command` | Client → Gateway | [orchestrator](/reference/protocol/orchestrator/) |
| `SPACE_LINK` | `space.link` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_UNLINK` | `space.unlink` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_SHARE_CONTEXT` | `space.share_context` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_PULL_SHARED_CONTEXT` | `space.pull_shared_context` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_SHARE_CREATE_INVITE` | `space.share_create_invite` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_SHARE_JOIN` | `space.share_join` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_SHARE_REVOKE` | `space.share_revoke` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_SHARE_LIST_PARTICIPANTS` | `space.share_list_participants` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_CREATE_CHANGESET` | `space.create_changeset` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_LIST_CHANGESETS` | `space.list_changesets` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_UPLOAD_CHANGESET_FILE_INIT` | `space.upload_changeset_file_init` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_UPLOAD_CHANGESET_FILE_COMPLETE` | `space.upload_changeset_file_complete` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_SUBMIT_CHANGESET` | `space.submit_changeset` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_REVIEW_CHANGESET` | `space.review_changeset` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_APPLY_CHANGESET` | `space.apply_changeset` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_CHANGESET_DIFF` | `space.get_changeset_diff` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_QUOTA` | `space.get_quota` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_UPDATE_QUOTA_POLICY` | `space.update_quota_policy` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_USAGE` | `space.get_usage` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_LIST_ACTIVITY_LOG` | `space.list_activity_log` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_TURN_TRACE` | `space.get_turn_trace` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_LIST_EXPERIENCES` | `space.list_experiences` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_EXPERIENCE` | `space.get_experience` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_LIST_INSIGHTS` | `space.list_insights` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_INSIGHT` | `space.get_insight` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_ACCEPT_INSIGHT` | `space.accept_insight` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_REJECT_INSIGHT` | `space.reject_insight` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_DISMISS_INSIGHT` | `space.dismiss_insight` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_SPACE_AGENT_NOTES` | `space.get_space_agent_notes` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_UPDATE_SPACE_AGENT_NOTES` | `space.update_space_agent_notes` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_USER_PROFILE` | `space.get_user_profile` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_UPDATE_USER_PROFILE` | `space.update_user_profile` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_LIST_MEMORIES` | `space.list_memories` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_DELETE_MEMORY` | `space.delete_memory` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_UPDATE_MEMORY_IMPORTANCE` | `space.update_memory_importance` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_LIST_ARTIFACTS` | `space.list_artifacts` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_ARTIFACT` | `space.get_artifact` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_DEBUG_ARTIFACT` | `space.get_debug_artifact` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_RESET` | `space.reset` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_RESET_AGENT_USAGE_SESSION` | `space.reset_agent_usage_session` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_EFFECTIVE_TOOLS` | `space.get_effective_tools` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_EFFECTIVE_TOOL_ACCESS` | `space.get_effective_tool_access` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_TOOL_POLICY` | `space.get_tool_policy` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_UPDATE_TOOL_POLICY` | `space.update_tool_policy` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `GATEWAY_GET_TOOL_POLICY` | `gateway.get_tool_policy` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_UPDATE_TOOL_POLICY` | `gateway.update_tool_policy` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_GET_WORKSPACE_DEFAULTS` | `gateway.get_workspace_defaults` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_SET_WORKSPACE_DEFAULTS` | `gateway.set_workspace_defaults` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_GET_EXTERNAL_CONNECTIVITY` | `gateway.get_external_connectivity` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_SET_EXTERNAL_CONNECTIVITY` | `gateway.set_external_connectivity` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `AUTH_REGISTER_DEVICE` | `auth.register_device` | Client → Gateway | [auth](/reference/protocol/auth/) |
| `AUTH_ROTATE_DEVICE_KEY` | `auth.rotate_device_key` | Client → Gateway | [auth](/reference/protocol/auth/) |
| `AUTH_REVOKE_DEVICE` | `auth.revoke_device` | Client → Gateway | [auth](/reference/protocol/auth/) |
| `AUTH_LIST_DEVICES` | `auth.list_devices` | Client → Gateway | [auth](/reference/protocol/auth/) |
| `AUTH_ISSUE_HTTP_PRINCIPAL_TOKEN` | `auth.issue_http_principal_token` | Client → Gateway | [auth](/reference/protocol/auth/) |
| `SYNC_ANNOUNCE` | `sync.announce` | Client → Gateway | [sync](/reference/protocol/sync/) |
| `SYNC_QUERY_RESOURCES` | `sync.query_resources` | Client → Gateway | [sync](/reference/protocol/sync/) |
| `SYNC_PULL_RESOURCES` | `sync.pull_resources` | Client → Gateway | [sync](/reference/protocol/sync/) |
| `SPEECH_START` | `speech.start` | Client → Gateway | [speech](/reference/protocol/speech/) |
| `SPEECH_AUDIO_CHUNK` | `speech.audio_chunk` | Client → Gateway | [speech](/reference/protocol/speech/) |
| `SPEECH_CONTROL` | `speech.control` | Client → Gateway | [speech](/reference/protocol/speech/) |
| `CONCIERGE_CALL_START` | `concierge.call.start` | Client → Gateway | [other](/reference/protocol/other/) |
| `CONCIERGE_CALL_ANSWER` | `concierge.call.answer` | Client → Gateway | [other](/reference/protocol/other/) |
| `CONCIERGE_CALL_END` | `concierge.call.end` | Client → Gateway | [other](/reference/protocol/other/) |
| `CONCIERGE_CALL_SET_MUTED` | `concierge.call.set_muted` | Client → Gateway | [other](/reference/protocol/other/) |
| `CONCIERGE_CALL_AUDIO_CHUNK` | `concierge.call.audio_chunk` | Client → Gateway | [other](/reference/protocol/other/) |
| `CONCIERGE_CALL_CONTROL` | `concierge.call.control` | Client → Gateway | [other](/reference/protocol/other/) |
| `CONCIERGE_CALL_HANDOFF_PREPARE` | `concierge.call.handoff.prepare` | Client → Gateway | [other](/reference/protocol/other/) |
| `CONCIERGE_CALL_HANDOFF_ACCEPT` | `concierge.call.handoff.accept` | Client → Gateway | [other](/reference/protocol/other/) |
| `CONCIERGE_CALL_REGISTER_PUSH` | `concierge.call.register_push` | Client → Gateway | [other](/reference/protocol/other/) |
| `CONCIERGE_ACTION_RESULT` | `concierge.action_result` | Client → Gateway | [other](/reference/protocol/other/) |
| `CAPABILITIES_REGISTER` | `capabilities.register` | Client → Gateway | [capabilities](/reference/protocol/capabilities/) |
| `CAPABILITIES_DEREGISTER` | `capabilities.deregister` | Client → Gateway | [capabilities](/reference/protocol/capabilities/) |
| `CAPABILITY_RESULT` | `capability.result` | Client → Gateway | [capabilities](/reference/protocol/capabilities/) |
| `CAPABILITY_ERROR` | `capability.error` | Client → Gateway | [capabilities](/reference/protocol/capabilities/) |
| `PING` | `ping` | Client → Gateway | [core](/reference/protocol/core/) |
| `AUTH_CHALLENGE` | `auth_challenge` | Gateway → Client | [auth](/reference/protocol/auth/) |
| `AUTH_RESULT` | `auth_result` | Gateway → Client | [auth](/reference/protocol/auth/) |
| `TURN_EVENT` | `turn_event` | Gateway → Client | [turns](/reference/protocol/turns/) |
| `TURN_STREAM` | `turn_stream` | Gateway → Client | [turns](/reference/protocol/turns/) |
| `CAPABILITY_INVOKE_ADAPTER` | `capability.invoke` | Gateway → Client | [capabilities](/reference/protocol/capabilities/) |
| `SPACE_STATE` | `space_state` | Gateway → Client | [spaces](/reference/protocol/spaces/) |
| `SPACE_AGENT_UPDATED` | `space.agent_updated` | Gateway → Client | [spaces](/reference/protocol/spaces/) |
| `NOTIFICATION` | `notification` | Gateway → Client | [core](/reference/protocol/core/) |
| `ORCHESTRATOR_EVENT` | `orchestrator.event` | Gateway → Client | [orchestrator](/reference/protocol/orchestrator/) |
| `SPEECH_EVENT` | `speech.event` | Gateway → Client | [speech](/reference/protocol/speech/) |
| `CONCIERGE_CALL_EVENT` | `concierge.call.event` | Gateway → Client | [other](/reference/protocol/other/) |
| `APP_NAVIGATE` | `app.navigate` | Gateway → Client | [other](/reference/protocol/other/) |
| `APP_CONCIERGE_ACTION_REQUEST` | `app.concierge_action_request` | Gateway → Client | [other](/reference/protocol/other/) |
| `ERROR` | `error` | Gateway → Client | [core](/reference/protocol/core/) |
| `PONG` | `pong` | Gateway → Client | [core](/reference/protocol/core/) |
| `SUBSCRIBE_NOTIFICATIONS` | `subscribe_notifications` | Client → Gateway | [subscriptions](/reference/protocol/subscriptions/) |
| `UNSUBSCRIBE_NOTIFICATIONS` | `unsubscribe_notifications` | Client → Gateway | [subscriptions](/reference/protocol/subscriptions/) |
| `AGENT_MESSAGE` | `agent_message` | Bidirectional | [agent_messaging](/reference/protocol/agent_messaging/) |
| `AGENT_POKE` | `agent_poke` | Bidirectional | [agent_messaging](/reference/protocol/agent_messaging/) |
| `AGENT_IDLE` | `agent_idle` | Bidirectional | [agent_messaging](/reference/protocol/agent_messaging/) |
| `TASK_DEPENDENCY` | `task_dependency` | Bidirectional | [task_dependencies](/reference/protocol/task_dependencies/) |
| `TASK_DEPENDENCY_RESOLVED` | `task_dependency_resolved` | Bidirectional | [task_dependencies](/reference/protocol/task_dependencies/) |
| `SESSION_LIST_RESUMABLE` | `session.list_resumable` | other | [other](/reference/protocol/other/) |
| `SESSION_RESUME` | `session.resume` | other | [other](/reference/protocol/other/) |

## Families

| Family | Messages | Link |
|--------|----------|------|
| agent_messaging | 3 | [View](/reference/protocol/agent_messaging/) |
| auth | 9 | [View](/reference/protocol/auth/) |
| capabilities | 6 | [View](/reference/protocol/capabilities/) |
| core | 4 | [View](/reference/protocol/core/) |
| gateway | 53 | [View](/reference/protocol/gateway/) |
| orchestrator | 3 | [View](/reference/protocol/orchestrator/) |
| other | 67 | [View](/reference/protocol/other/) |
| scheduler | 10 | [View](/reference/protocol/scheduler/) |
| spaces | 81 | [View](/reference/protocol/spaces/) |
| speech | 4 | [View](/reference/protocol/speech/) |
| subscriptions | 2 | [View](/reference/protocol/subscriptions/) |
| sync | 3 | [View](/reference/protocol/sync/) |
| task_dependencies | 2 | [View](/reference/protocol/task_dependencies/) |
| turns | 4 | [View](/reference/protocol/turns/) |
| usage | 1 | [View](/reference/protocol/usage/) |
