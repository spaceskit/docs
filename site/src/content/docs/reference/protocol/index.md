---
title: Protocol Messages
description: All 154 message types in the Spaceskit WebSocket protocol.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 154 message types across 16 families. Generated from `protocol.ts`.

## Message Types

| Key | Wire Type | Direction | Family |
|-----|-----------|-----------|--------|
| `AUTHENTICATE` | `authenticate` | Client → Gateway | [auth](/reference/protocol/auth/) |
| `EXECUTE_TURN` | `execute_turn` | Client → Gateway | [turns](/reference/protocol/turns/) |
| `RESUME_FEEDBACK` | `resume_feedback` | Client → Gateway | [turns](/reference/protocol/turns/) |
| `SUBSCRIBE` | `subscribe` | Client → Gateway | [auth](/reference/protocol/auth/) |
| `CAPABILITY_INVOKE` | `capability_invoke` | Client → Gateway | [capabilities](/reference/protocol/capabilities/) |
| `SPACE_CREATE` | `space.create` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET` | `space.get` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_LIST` | `space.list` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_ADD_AGENT` | `space.add_agent` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_REMOVE_AGENT` | `space.remove_agent` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_UPDATE_AGENT_ASSIGNMENT` | `space.update_agent_assignment` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_SET_ORCHESTRATOR` | `space.set_orchestrator` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
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
| `PROFILE_CREATE` | `profile.create` | Client → Gateway | [profiles](/reference/protocol/profiles/) |
| `PROFILE_GET` | `profile.get` | Client → Gateway | [profiles](/reference/protocol/profiles/) |
| `PROFILE_LIST` | `profile.list` | Client → Gateway | [profiles](/reference/protocol/profiles/) |
| `PROFILE_UPDATE` | `profile.update` | Client → Gateway | [profiles](/reference/protocol/profiles/) |
| `PROFILE_ARCHIVE` | `profile.archive` | Client → Gateway | [profiles](/reference/protocol/profiles/) |
| `PRESET_LIST` | `preset.list` | Client → Gateway | [presets](/reference/protocol/presets/) |
| `PRESET_GET` | `preset.get` | Client → Gateway | [presets](/reference/protocol/presets/) |
| `PRESET_APPLY_TO_SPACE` | `preset.apply_to_space` | Client → Gateway | [presets](/reference/protocol/presets/) |
| `PRESET_SAVE_AGENT` | `preset.save_agent` | Client → Gateway | [presets](/reference/protocol/presets/) |
| `PRESET_ARCHIVE_AGENT` | `preset.archive_agent` | Client → Gateway | [presets](/reference/protocol/presets/) |
| `SPACE_PREVIEW_TEMPLATE` | `space.preview_template` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_CREATE_FROM_TEMPLATE` | `space.create_from_template` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_SAVE_TEMPLATE` | `space.save_template` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `GATEWAY_SKILL_LIST` | `gateway.skill_list` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_SKILL_GET` | `gateway.skill_get` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_SKILL_UPSERT` | `gateway.skill_upsert` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_SKILL_DELETE` | `gateway.skill_delete` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_DISCOVER_LOCAL_AGENTS` | `gateway.discover_local_agents` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_LIST_PROVIDER_CONFIGS` | `gateway.list_provider_configs` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_GET_MAIN_AGENT` | `gateway.get_main_agent` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_SET_MAIN_AGENT` | `gateway.set_main_agent` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_LIST_AVAILABLE_MODELS` | `gateway.list_available_models` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
| `GATEWAY_LIST_PROVIDER_CATALOGS` | `gateway.list_provider_catalogs` | Client → Gateway | [gateway](/reference/protocol/gateway/) |
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
| `SCHEDULER_UPDATE_JOB` | `scheduler.update_job` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `SCHEDULER_DELETE_JOB` | `scheduler.delete_job` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `SCHEDULER_LINK_SPACE` | `scheduler.link_space` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `SCHEDULER_UNLINK_SPACE` | `scheduler.unlink_space` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `SCHEDULER_LIST_RUNS` | `scheduler.list_runs` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
| `SCHEDULER_RUN_NOW` | `scheduler.run_now` | Client → Gateway | [scheduler](/reference/protocol/scheduler/) |
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
| `SPACE_GET_TURN_TRACE` | `space.get_turn_trace` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_LIST_ARTIFACTS` | `space.list_artifacts` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_ARTIFACT` | `space.get_artifact` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_RESET` | `space.reset` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_RESET_AGENT_USAGE_SESSION` | `space.reset_agent_usage_session` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
| `SPACE_GET_EFFECTIVE_TOOLS` | `space.get_effective_tools` | Client → Gateway | [spaces](/reference/protocol/spaces/) |
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
| `ERROR` | `error` | Gateway → Client | [core](/reference/protocol/core/) |
| `PONG` | `pong` | Gateway → Client | [core](/reference/protocol/core/) |
| `SUBSCRIBE_NOTIFICATIONS` | `subscribe_notifications` | Client → Gateway | [subscriptions](/reference/protocol/subscriptions/) |
| `UNSUBSCRIBE_NOTIFICATIONS` | `unsubscribe_notifications` | Client → Gateway | [subscriptions](/reference/protocol/subscriptions/) |
| `AGENT_MESSAGE` | `agent_message` | Bidirectional | [agent_messaging](/reference/protocol/agent_messaging/) |
| `AGENT_POKE` | `agent_poke` | Bidirectional | [agent_messaging](/reference/protocol/agent_messaging/) |
| `AGENT_IDLE` | `agent_idle` | Bidirectional | [agent_messaging](/reference/protocol/agent_messaging/) |
| `TASK_DEPENDENCY` | `task_dependency` | Bidirectional | [task_dependencies](/reference/protocol/task_dependencies/) |
| `TASK_DEPENDENCY_RESOLVED` | `task_dependency_resolved` | Bidirectional | [task_dependencies](/reference/protocol/task_dependencies/) |

## Families

| Family | Messages | Link |
|--------|----------|------|
| agent_messaging | 3 | [View](/reference/protocol/agent_messaging/) |
| auth | 9 | [View](/reference/protocol/auth/) |
| capabilities | 6 | [View](/reference/protocol/capabilities/) |
| core | 4 | [View](/reference/protocol/core/) |
| gateway | 41 | [View](/reference/protocol/gateway/) |
| orchestrator | 3 | [View](/reference/protocol/orchestrator/) |
| presets | 5 | [View](/reference/protocol/presets/) |
| profiles | 5 | [View](/reference/protocol/profiles/) |
| scheduler | 9 | [View](/reference/protocol/scheduler/) |
| spaces | 53 | [View](/reference/protocol/spaces/) |
| speech | 4 | [View](/reference/protocol/speech/) |
| subscriptions | 2 | [View](/reference/protocol/subscriptions/) |
| sync | 3 | [View](/reference/protocol/sync/) |
| task_dependencies | 2 | [View](/reference/protocol/task_dependencies/) |
| turns | 4 | [View](/reference/protocol/turns/) |
| usage | 1 | [View](/reference/protocol/usage/) |
