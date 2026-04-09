# Gateway Feature Matrix (TypeScript Source-Derived)

Generated: 2026-03-01T09:21:08.890Z

## Scope

Derived from:

1. `gateway/packages/server/src/protocol.ts` (`MessageTypes` map)
2. `gateway/packages/server/src/message-router.ts` (inbound dispatch handlers)
3. `gateway/packages/server/src/**/*.ts` (message emissions/references)
4. `gateway/packages/server/test/**/*.ts` (test references)

## Quick Summary

- Total declared message types: **144**
- Inbound/bidirectional messages with router handlers: **128/132**
- Outbound messages emitted by server source: **10/12**
- Declared-only messages (no handler/emitter evidence): **6**

## Family Summary

| Family | Total | Inbound Implemented | Outbound Emitted | Declared Only |
|---|---:|---:|---:|---:|
| Agent Messaging | 3 | 2/3 | 0/0 | 1 |
| Auth/Devices | 7 | 5/5 | 2/2 | 0 |
| Capabilities | 6 | 5/5 | 1/1 | 0 |
| Core | 4 | 1/1 | 2/3 | 1 |
| Gateway Admin | 37 | 37/37 | 0/0 | 0 |
| Gateway Sync | 3 | 3/3 | 0/0 | 0 |
| Orchestrator | 3 | 2/2 | 1/1 | 0 |
| Other | 10 | 10/10 | 0/0 | 0 |
| Presets/Templates | 5 | 5/5 | 0/0 | 0 |
| Profiles | 5 | 5/5 | 0/0 | 0 |
| Spaces | 48 | 46/46 | 1/2 | 1 |
| Speech | 4 | 3/3 | 1/1 | 0 |
| Subscriptions | 2 | 0/2 | 0/0 | 2 |
| Task Dependencies | 2 | 1/2 | 0/0 | 1 |
| Turns | 4 | 2/2 | 2/2 | 0 |
| Usage | 1 | 1/1 | 0/0 | 0 |

## Detailed Matrix

| Family | Message Key | Wire Type | Direction | Handler Surface | Source Refs | Test Refs | Status |
|---|---|---|---|---|---:|---:|---|
| Agent Messaging | `AGENT_IDLE` | `agent_idle` | Bidirectional | none | 0 | 0 | Declared only |
| Agent Messaging | `AGENT_MESSAGE` | `agent_message` | Bidirectional | router | 3 | 0 | Implemented |
| Agent Messaging | `AGENT_POKE` | `agent_poke` | Bidirectional | router | 3 | 0 | Implemented |
| Auth/Devices | `AUTH_CHALLENGE` | `auth_challenge` | Gateway -> Client | - | 1 | 0 | Emitted by server |
| Auth/Devices | `AUTH_LIST_DEVICES` | `auth.list_devices` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Auth/Devices | `AUTH_REGISTER_DEVICE` | `auth.register_device` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Auth/Devices | `AUTH_RESULT` | `auth_result` | Gateway -> Client | - | 10 | 0 | Emitted by server |
| Auth/Devices | `AUTH_REVOKE_DEVICE` | `auth.revoke_device` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Auth/Devices | `AUTH_ROTATE_DEVICE_KEY` | `auth.rotate_device_key` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Auth/Devices | `AUTHENTICATE` | `authenticate` | Client -> Gateway | router + gateway-server | 2 | 0 | Implemented |
| Capabilities | `CAPABILITIES_DEREGISTER` | `capabilities.deregister` | Client -> Gateway | router | 1 | 0 | Implemented |
| Capabilities | `CAPABILITIES_REGISTER` | `capabilities.register` | Client -> Gateway | router | 1 | 1 | Implemented + tested |
| Capabilities | `CAPABILITY_ERROR` | `capability.error` | Client -> Gateway | router | 1 | 0 | Implemented |
| Capabilities | `CAPABILITY_INVOKE` | `capability_invoke` | Client -> Gateway | router | 2 | 0 | Implemented |
| Capabilities | `CAPABILITY_INVOKE_ADAPTER` | `capability.invoke` | Gateway -> Client | - | 1 | 0 | Emitted by server |
| Capabilities | `CAPABILITY_RESULT` | `capability.result` | Client -> Gateway | router | 1 | 0 | Implemented |
| Core | `ERROR` | `error` | Gateway -> Client | - | 3 | 32 | Emitted by server |
| Core | `NOTIFICATION` | `notification` | Gateway -> Client | - | 0 | 0 | Declared only |
| Core | `PING` | `ping` | Client -> Gateway | gateway-server | 1 | 0 | Implemented |
| Core | `PONG` | `pong` | Gateway -> Client | - | 1 | 0 | Emitted by server |
| Gateway Admin | `GATEWAY_DELETE_SECRET_REF` | `gateway.delete_secret_ref` | Client -> Gateway | router | 2 | 3 | Implemented + tested |
| Gateway Admin | `GATEWAY_DISCOVER_LOCAL_AGENTS` | `gateway.discover_local_agents` | Client -> Gateway | router | 2 | 3 | Implemented + tested |
| Gateway Admin | `GATEWAY_FACTORY_RESET` | `gateway.factory_reset` | Client -> Gateway | router | 2 | 5 | Implemented + tested |
| Gateway Admin | `GATEWAY_GET_CONNECTOR_POLICY` | `gateway.get_connector_policy` | Client -> Gateway | router | 2 | 0 | Implemented |
| Gateway Admin | `GATEWAY_GET_LOCAL_USAGE_TELEMETRY` | `gateway.get_local_usage_telemetry` | Client -> Gateway | router | 2 | 3 | Implemented + tested |
| Gateway Admin | `GATEWAY_GET_POLICY` | `gateway.get_policy` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Admin | `GATEWAY_GET_PROVIDER_SETTINGS` | `gateway.get_provider_settings` | Client -> Gateway | router | 2 | 0 | Implemented |
| Gateway Admin | `GATEWAY_GET_PROVIDER_TELEMETRY` | `gateway.get_provider_telemetry` | Client -> Gateway | router | 2 | 3 | Implemented + tested |
| Gateway Admin | `GATEWAY_GRANT_CAPABILITY` | `gateway.grant_capability` | Client -> Gateway | router | 2 | 3 | Implemented + tested |
| Gateway Admin | `GATEWAY_KB_DELETE_ENTRY` | `gateway.kb_delete_entry` | Client -> Gateway | router | 2 | 3 | Implemented + tested |
| Gateway Admin | `GATEWAY_KB_LIST_ENTRIES` | `gateway.kb_list_entries` | Client -> Gateway | router | 3 | 3 | Implemented + tested |
| Gateway Admin | `GATEWAY_KB_UPSERT_ENTRY` | `gateway.kb_upsert_entry` | Client -> Gateway | router | 3 | 3 | Implemented + tested |
| Gateway Admin | `GATEWAY_LIST_AVAILABLE_MODELS` | `gateway.list_available_models` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Admin | `GATEWAY_LIST_CAPABILITY_GRANTS` | `gateway.list_capability_grants` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Admin | `GATEWAY_LIST_CONNECTOR_BINDINGS` | `gateway.list_connector_bindings` | Client -> Gateway | router | 2 | 0 | Implemented |
| Gateway Admin | `GATEWAY_LIST_CONNECTOR_FAMILIES` | `gateway.list_connector_families` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Admin | `GATEWAY_LIST_CONNECTORS` | `gateway.list_connectors` | Client -> Gateway | router | 2 | 3 | Implemented + tested |
| Gateway Admin | `GATEWAY_LIST_PROVIDER_CATALOGS` | `gateway.list_provider_catalogs` | Client -> Gateway | router | 2 | 0 | Implemented |
| Gateway Admin | `GATEWAY_LIST_PROVIDER_CONFIGS` | `gateway.list_provider_configs` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Admin | `GATEWAY_LIST_SECRET_REFS` | `gateway.list_secret_refs` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Admin | `GATEWAY_PROVISION_LOCAL_PROFILE` | `gateway.provision_local_profile` | Client -> Gateway | router | 2 | 3 | Implemented + tested |
| Gateway Admin | `GATEWAY_PUT_SECRET_REF` | `gateway.put_secret_ref` | Client -> Gateway | router | 2 | 3 | Implemented + tested |
| Gateway Admin | `GATEWAY_REMOVE_CONNECTOR` | `gateway.remove_connector` | Client -> Gateway | router | 4 | 0 | Implemented |
| Gateway Admin | `GATEWAY_REMOVE_CONNECTOR_BINDING` | `gateway.remove_connector_binding` | Client -> Gateway | router | 2 | 0 | Implemented |
| Gateway Admin | `GATEWAY_REMOVE_PROVIDER_CONFIG` | `gateway.remove_provider_config` | Client -> Gateway | router | 2 | 3 | Implemented + tested |
| Gateway Admin | `GATEWAY_REVOKE_CAPABILITY` | `gateway.revoke_capability` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Admin | `GATEWAY_SET_PROVIDER_CONFIG` | `gateway.set_provider_config` | Client -> Gateway | router | 2 | 5 | Implemented + tested |
| Gateway Admin | `LIBRARY_DELETE_ENTRY` | `library.delete_entry` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Admin | `LIBRARY_GET_ENTRY` | `library.get_entry` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Admin | `LIBRARY_LIST_ENTRIES` | `library.list_entries` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Admin | `LIBRARY_SAVE_SKILL` | `library.save_skill` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Admin | `GATEWAY_TEST_CONNECTOR` | `gateway.test_connector` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Admin | `GATEWAY_UPDATE_CONNECTOR_POLICY` | `gateway.update_connector_policy` | Client -> Gateway | router | 2 | 0 | Implemented |
| Gateway Admin | `GATEWAY_UPDATE_POLICY` | `gateway.update_policy` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Admin | `GATEWAY_UPDATE_PROVIDER_SETTINGS` | `gateway.update_provider_settings` | Client -> Gateway | router | 2 | 0 | Implemented |
| Gateway Admin | `GATEWAY_UPSERT_CONNECTOR` | `gateway.upsert_connector` | Client -> Gateway | router | 4 | 2 | Implemented + tested |
| Gateway Admin | `GATEWAY_UPSERT_CONNECTOR_BINDING` | `gateway.upsert_connector_binding` | Client -> Gateway | router | 2 | 0 | Implemented |
| Gateway Sync | `SYNC_ANNOUNCE` | `sync.announce` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Sync | `SYNC_PULL_RESOURCES` | `sync.pull_resources` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Gateway Sync | `SYNC_QUERY_RESOURCES` | `sync.query_resources` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Orchestrator | `ORCHESTRATOR_COMMAND` | `orchestrator.command` | Client -> Gateway | router | 3 | 4 | Implemented + tested |
| Orchestrator | `ORCHESTRATOR_EVENT` | `orchestrator.event` | Gateway -> Client | - | 2 | 1 | Emitted by server |
| Orchestrator | `ORCHESTRATOR_GET_COMMAND` | `orchestrator.get_command` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Other | `SCHEDULER_CREATE_JOB` | `scheduler.create_job` | Client -> Gateway | router | 3 | 3 | Implemented + tested |
| Other | `SCHEDULER_DELETE_JOB` | `scheduler.delete_job` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Other | `SCHEDULER_GET_JOB` | `scheduler.get_job` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Other | `SCHEDULER_LINK_SPACE` | `scheduler.link_space` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Other | `SCHEDULER_LIST_JOBS` | `scheduler.list_jobs` | Client -> Gateway | router | 2 | 3 | Implemented + tested |
| Other | `SCHEDULER_LIST_RUNS` | `scheduler.list_runs` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Other | `SCHEDULER_RUN_NOW` | `scheduler.run_now` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Other | `SCHEDULER_UNLINK_SPACE` | `scheduler.unlink_space` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Other | `SCHEDULER_UPDATE_JOB` | `scheduler.update_job` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Other | `SUBSCRIBE` | `subscribe` | Client -> Gateway | gateway-server | 2 | 0 | Implemented |
| Presets/Templates | `PRESET_APPLY_TO_SPACE` | `preset.apply_to_space` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Presets/Templates | `PRESET_ARCHIVE_AGENT` | `preset.archive_agent` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Presets/Templates | `PRESET_GET` | `preset.get` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Presets/Templates | `PRESET_LIST` | `preset.list` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Presets/Templates | `PRESET_SAVE_AGENT` | `preset.save_agent` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Profiles | `PROFILE_ARCHIVE` | `profile.archive` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Profiles | `PROFILE_CREATE` | `profile.create` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Profiles | `PROFILE_GET` | `profile.get` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Profiles | `PROFILE_LIST` | `profile.list` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Profiles | `PROFILE_UPDATE` | `profile.update` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Spaces | `SPACE_ADD_AGENT` | `space.add_agent` | Client -> Gateway | router | 3 | 3 | Implemented + tested |
| Spaces | `SPACE_ADD_RESOURCE` | `space.add_resource` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_ADD_SKILL` | `space.add_skill` | Client -> Gateway | router | 3 | 4 | Implemented + tested |
| Spaces | `SPACE_AGENT_UPDATED` | `space.agent_updated` | Gateway -> Client | - | 1 | 1 | Emitted by server |
| Spaces | `SPACE_APPLY_CHANGESET` | `space.apply_changeset` | Client -> Gateway | router | 3 | 0 | Implemented |
| Spaces | `SPACE_APPROVE_MCP_AGENT` | `space.approve_mcp_agent` | Client -> Gateway | router | 3 | 0 | Implemented |
| Spaces | `SPACE_CLEAR_MCP_ENDPOINT` | `space.clear_mcp_endpoint` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_CREATE` | `space.create` | Client -> Gateway | router | 7 | 9 | Implemented + tested |
| Spaces | `SPACE_CREATE_CHANGESET` | `space.create_changeset` | Client -> Gateway | router | 3 | 3 | Implemented + tested |
| Spaces | `SPACE_CREATE_FROM_TEMPLATE` | `space.create_from_template` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Spaces | `SPACE_DISCOVER_MCP_AGENTS` | `space.discover_mcp_agents` | Client -> Gateway | router | 3 | 0 | Implemented |
| Spaces | `SPACE_GET` | `space.get` | Client -> Gateway | router | 21 | 6 | Implemented + tested |
| Spaces | `SPACE_GET_CHANGESET_DIFF` | `space.get_changeset_diff` | Client -> Gateway | router | 3 | 0 | Implemented |
| Spaces | `SPACE_GET_EFFECTIVE_TOOLS` | `space.get_effective_tools` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_GET_MCP_ENDPOINT` | `space.get_mcp_endpoint` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_GET_QUOTA` | `space.get_quota` | Client -> Gateway | router | 3 | 0 | Implemented |
| Spaces | `SPACE_GET_USAGE` | `space.get_usage` | Client -> Gateway | router | 3 | 0 | Implemented |
| Spaces | `SPACE_GET_WORKSPACE` | `space.get_workspace` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_LINK` | `space.link` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_LIST` | `space.list` | Client -> Gateway | router | 21 | 23 | Implemented + tested |
| Spaces | `SPACE_LIST_AGENT_ASSIGNMENTS` | `space.list_agent_assignments` | Client -> Gateway | router | 3 | 4 | Implemented + tested |
| Spaces | `SPACE_LIST_CHANGESETS` | `space.list_changesets` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_LIST_ORCHESTRATION_JOURNAL` | `space.list_orchestration_journal` | Client -> Gateway | router | 3 | 0 | Implemented |
| Spaces | `SPACE_LIST_RESOURCES` | `space.list_resources` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_LIST_SKILLS` | `space.list_skills` | Client -> Gateway | router | 3 | 4 | Implemented + tested |
| Spaces | `SPACE_LIST_TURNS` | `space.list_turns` | Client -> Gateway | router | 3 | 6 | Implemented + tested |
| Spaces | `SPACE_PREVIEW_TEMPLATE` | `space.preview_template` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Spaces | `SPACE_PULL_SHARED_CONTEXT` | `space.pull_shared_context` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_REMOVE_AGENT` | `space.remove_agent` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_REMOVE_RESOURCE` | `space.remove_resource` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_REMOVE_SKILL` | `space.remove_skill` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_REVIEW_CHANGESET` | `space.review_changeset` | Client -> Gateway | router | 3 | 0 | Implemented |
| Spaces | `SPACE_SAVE_TEMPLATE` | `space.save_template` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_SET_MCP_ENDPOINT` | `space.set_mcp_endpoint` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_SET_ORCHESTRATOR` | `space.set_orchestrator` | Client -> Gateway | router | 3 | 3 | Implemented + tested |
| Spaces | `SPACE_SET_WORKSPACE` | `space.set_workspace` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_SHARE_CONTEXT` | `space.share_context` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_SHARE_CREATE_INVITE` | `space.share_create_invite` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_SHARE_JOIN` | `space.share_join` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Spaces | `SPACE_SHARE_LIST_PARTICIPANTS` | `space.share_list_participants` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_SHARE_REVOKE` | `space.share_revoke` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_STATE` | `space_state` | Gateway -> Client | - | 0 | 0 | Declared only |
| Spaces | `SPACE_SUBMIT_CHANGESET` | `space.submit_changeset` | Client -> Gateway | router | 3 | 0 | Implemented |
| Spaces | `SPACE_UNLINK` | `space.unlink` | Client -> Gateway | router | 3 | 0 | Implemented |
| Spaces | `SPACE_UPDATE_AGENT_ASSIGNMENT` | `space.update_agent_assignment` | Client -> Gateway | router | 3 | 4 | Implemented + tested |
| Spaces | `SPACE_UPDATE_QUOTA_POLICY` | `space.update_quota_policy` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_UPLOAD_CHANGESET_FILE_COMPLETE` | `space.upload_changeset_file_complete` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Spaces | `SPACE_UPLOAD_CHANGESET_FILE_INIT` | `space.upload_changeset_file_init` | Client -> Gateway | router | 3 | 0 | Implemented |
| Speech | `SPEECH_AUDIO_CHUNK` | `speech.audio_chunk` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Speech | `SPEECH_CONTROL` | `speech.control` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Speech | `SPEECH_EVENT` | `speech.event` | Gateway -> Client | - | 1 | 2 | Emitted by server |
| Speech | `SPEECH_START` | `speech.start` | Client -> Gateway | router | 3 | 2 | Implemented + tested |
| Subscriptions | `SUBSCRIBE_NOTIFICATIONS` | `subscribe_notifications` | Client -> Gateway (notifications) | none | 0 | 0 | Declared only |
| Subscriptions | `UNSUBSCRIBE_NOTIFICATIONS` | `unsubscribe_notifications` | Client -> Gateway (notifications) | none | 0 | 0 | Declared only |
| Task Dependencies | `TASK_DEPENDENCY` | `task_dependency` | Bidirectional | router | 3 | 0 | Implemented |
| Task Dependencies | `TASK_DEPENDENCY_RESOLVED` | `task_dependency_resolved` | Bidirectional | none | 0 | 0 | Declared only |
| Turns | `EXECUTE_TURN` | `execute_turn` | Client -> Gateway | router | 2 | 3 | Implemented + tested |
| Turns | `RESUME_FEEDBACK` | `resume_feedback` | Client -> Gateway | router | 2 | 2 | Implemented + tested |
| Turns | `TURN_EVENT` | `turn_event` | Gateway -> Client | - | 3 | 3 | Emitted by server |
| Turns | `TURN_STREAM` | `turn_stream` | Gateway -> Client | - | 1 | 2 | Emitted by server |
| Usage | `USAGE_GET_SNAPSHOT` | `usage.get_snapshot` | Client -> Gateway | router | 2 | 2 | Implemented + tested |

## Declared-Only Keys

- `AGENT_IDLE` (`agent_idle`, Bidirectional)
- `NOTIFICATION` (`notification`, Gateway -> Client)
- `SPACE_STATE` (`space_state`, Gateway -> Client)
- `SUBSCRIBE_NOTIFICATIONS` (`subscribe_notifications`, Client -> Gateway (notifications))
- `UNSUBSCRIBE_NOTIFICATIONS` (`unsubscribe_notifications`, Client -> Gateway (notifications))
- `TASK_DEPENDENCY_RESOLVED` (`task_dependency_resolved`, Bidirectional)

## Re-run

```bash
./dev-services/gateway-feature-matrix.sh
```
