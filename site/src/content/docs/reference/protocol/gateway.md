---
title: "Gateway Messages"
description: Protocol messages in the gateway family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 41 message types in the **gateway** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `GATEWAY_SKILL_LIST` | `gateway.skill_list` | Client → Gateway | [`GatewaySkillListPayload`](#gatewayskilllistpayload) | [`GatewaySkillListResponsePayload`](#gatewayskilllistresponsepayload) |
| `GATEWAY_SKILL_GET` | `gateway.skill_get` | Client → Gateway | [`GatewaySkillGetPayload`](#gatewayskillgetpayload) | [`GatewaySkillGetResponsePayload`](#gatewayskillgetresponsepayload) |
| `GATEWAY_SKILL_UPSERT` | `gateway.skill_upsert` | Client → Gateway | [`GatewaySkillUpsertPayload`](#gatewayskillupsertpayload) | [`GatewaySkillUpsertResponsePayload`](#gatewayskillupsertresponsepayload) |
| `GATEWAY_SKILL_DELETE` | `gateway.skill_delete` | Client → Gateway | [`GatewaySkillDeletePayload`](#gatewayskilldeletepayload) | [`GatewaySkillDeleteResponsePayload`](#gatewayskilldeleteresponsepayload) |
| `GATEWAY_DISCOVER_LOCAL_AGENTS` | `gateway.discover_local_agents` | Client → Gateway | [`GatewayDiscoverLocalAgentsPayload`](#gatewaydiscoverlocalagentspayload) | [`GatewayDiscoverLocalAgentsResponsePayload`](#gatewaydiscoverlocalagentsresponsepayload) |
| `GATEWAY_LIST_PROVIDER_CONFIGS` | `gateway.list_provider_configs` | Client → Gateway | [`GatewayListProviderConfigsPayload`](#gatewaylistproviderconfigspayload) | [`GatewayListProviderConfigsResponsePayload`](#gatewaylistproviderconfigsresponsepayload) |
| `GATEWAY_GET_MAIN_AGENT` | `gateway.get_main_agent` | Client → Gateway | [`GatewayGetMainAgentPayload`](#gatewaygetmainagentpayload) | [`GatewayGetMainAgentResponsePayload`](#gatewaygetmainagentresponsepayload) |
| `GATEWAY_SET_MAIN_AGENT` | `gateway.set_main_agent` | Client → Gateway | [`GatewaySetMainAgentPayload`](#gatewaysetmainagentpayload) | [`GatewaySetMainAgentResponsePayload`](#gatewaysetmainagentresponsepayload) |
| `GATEWAY_LIST_AVAILABLE_MODELS` | `gateway.list_available_models` | Client → Gateway | [`GatewayListAvailableModelsPayload`](#gatewaylistavailablemodelspayload) | [`GatewayListAvailableModelsResponsePayload`](#gatewaylistavailablemodelsresponsepayload) |
| `GATEWAY_LIST_PROVIDER_CATALOGS` | `gateway.list_provider_catalogs` | Client → Gateway | [`GatewayListProviderCatalogsPayload`](#gatewaylistprovidercatalogspayload) | [`GatewayListProviderCatalogsResponsePayload`](#gatewaylistprovidercatalogsresponsepayload) |
| `GATEWAY_CREATE_INTEGRATION_REQUEST` | `gateway.create_integration_request` | Client → Gateway | [`GatewayCreateIntegrationRequestPayload`](#gatewaycreateintegrationrequestpayload) | [`GatewayCreateIntegrationRequestResponsePayload`](#gatewaycreateintegrationrequestresponsepayload) |
| `GATEWAY_LIST_INTEGRATION_REQUESTS` | `gateway.list_integration_requests` | Client → Gateway | [`GatewayListIntegrationRequestsPayload`](#gatewaylistintegrationrequestspayload) | [`GatewayListIntegrationRequestsResponsePayload`](#gatewaylistintegrationrequestsresponsepayload) |
| `GATEWAY_GET_PROVIDER_TELEMETRY` | `gateway.get_provider_telemetry` | Client → Gateway | [`GatewayGetProviderTelemetryPayload`](#gatewaygetprovidertelemetrypayload) | [`GatewayGetProviderTelemetryResponsePayload`](#gatewaygetprovidertelemetryresponsepayload) |
| `GATEWAY_GET_LOCAL_USAGE_TELEMETRY` | `gateway.get_local_usage_telemetry` | Client → Gateway | [`GatewayGetLocalUsageTelemetryPayload`](#gatewaygetlocalusagetelemetrypayload) | [`GatewayGetLocalUsageTelemetryResponsePayload`](#gatewaygetlocalusagetelemetryresponsepayload) |
| `GATEWAY_GET_PROVIDER_SETTINGS` | `gateway.get_provider_settings` | Client → Gateway | [`GatewayGetProviderSettingsPayload`](#gatewaygetprovidersettingspayload) | [`GatewayGetProviderSettingsResponsePayload`](#gatewaygetprovidersettingsresponsepayload) |
| `GATEWAY_UPDATE_PROVIDER_SETTINGS` | `gateway.update_provider_settings` | Client → Gateway | [`GatewayUpdateProviderSettingsPayload`](#gatewayupdateprovidersettingspayload) | [`GatewayUpdateProviderSettingsResponsePayload`](#gatewayupdateprovidersettingsresponsepayload) |
| `GATEWAY_SET_PROVIDER_CONFIG` | `gateway.set_provider_config` | Client → Gateway | [`GatewaySetProviderConfigPayload`](#gatewaysetproviderconfigpayload) | [`GatewaySetProviderConfigResponsePayload`](#gatewaysetproviderconfigresponsepayload) |
| `GATEWAY_REMOVE_PROVIDER_CONFIG` | `gateway.remove_provider_config` | Client → Gateway | [`GatewayRemoveProviderConfigPayload`](#gatewayremoveproviderconfigpayload) | [`GatewayRemoveProviderConfigResponsePayload`](#gatewayremoveproviderconfigresponsepayload) |
| `GATEWAY_FACTORY_RESET` | `gateway.factory_reset` | Client → Gateway | [`GatewayFactoryResetPayload`](#gatewayfactoryresetpayload) | [`GatewayFactoryResetResponsePayload`](#gatewayfactoryresetresponsepayload) |
| `GATEWAY_PROVISION_LOCAL_PROFILE` | `gateway.provision_local_profile` | Client → Gateway | [`GatewayProvisionLocalProfilePayload`](#gatewayprovisionlocalprofilepayload) | [`GatewayProvisionLocalProfileResponsePayload`](#gatewayprovisionlocalprofileresponsepayload) |
| `GATEWAY_PUT_SECRET_REF` | `gateway.put_secret_ref` | Client → Gateway | [`GatewayPutSecretRefPayload`](#gatewayputsecretrefpayload) | [`GatewayPutSecretRefResponsePayload`](#gatewayputsecretrefresponsepayload) |
| `GATEWAY_LIST_SECRET_REFS` | `gateway.list_secret_refs` | Client → Gateway | [`GatewayListSecretRefsPayload`](#gatewaylistsecretrefspayload) | [`GatewayListSecretRefsResponsePayload`](#gatewaylistsecretrefsresponsepayload) |
| `GATEWAY_DELETE_SECRET_REF` | `gateway.delete_secret_ref` | Client → Gateway | [`GatewayDeleteSecretRefPayload`](#gatewaydeletesecretrefpayload) | [`GatewayDeleteSecretRefResponsePayload`](#gatewaydeletesecretrefresponsepayload) |
| `GATEWAY_LIST_CONNECTOR_FAMILIES` | `gateway.list_connector_families` | Client → Gateway | [`GatewayListConnectorFamiliesPayload`](#gatewaylistconnectorfamiliespayload) | [`GatewayListConnectorFamiliesResponsePayload`](#gatewaylistconnectorfamiliesresponsepayload) |
| `GATEWAY_LIST_CONNECTORS` | `gateway.list_connectors` | Client → Gateway | [`GatewayListConnectorsPayload`](#gatewaylistconnectorspayload) | [`GatewayListConnectorsResponsePayload`](#gatewaylistconnectorsresponsepayload) |
| `GATEWAY_UPSERT_CONNECTOR` | `gateway.upsert_connector` | Client → Gateway | [`GatewayUpsertConnectorPayload`](#gatewayupsertconnectorpayload) | [`GatewayUpsertConnectorResponsePayload`](#gatewayupsertconnectorresponsepayload) |
| `GATEWAY_REMOVE_CONNECTOR` | `gateway.remove_connector` | Client → Gateway | [`GatewayRemoveConnectorPayload`](#gatewayremoveconnectorpayload) | [`GatewayRemoveConnectorResponsePayload`](#gatewayremoveconnectorresponsepayload) |
| `GATEWAY_LIST_CONNECTOR_BINDINGS` | `gateway.list_connector_bindings` | Client → Gateway | [`GatewayListConnectorBindingsPayload`](#gatewaylistconnectorbindingspayload) | [`GatewayListConnectorBindingsResponsePayload`](#gatewaylistconnectorbindingsresponsepayload) |
| `GATEWAY_UPSERT_CONNECTOR_BINDING` | `gateway.upsert_connector_binding` | Client → Gateway | [`GatewayUpsertConnectorBindingPayload`](#gatewayupsertconnectorbindingpayload) | [`GatewayUpsertConnectorBindingResponsePayload`](#gatewayupsertconnectorbindingresponsepayload) |
| `GATEWAY_REMOVE_CONNECTOR_BINDING` | `gateway.remove_connector_binding` | Client → Gateway | [`GatewayRemoveConnectorBindingPayload`](#gatewayremoveconnectorbindingpayload) | [`GatewayRemoveConnectorBindingResponsePayload`](#gatewayremoveconnectorbindingresponsepayload) |
| `GATEWAY_GET_CONNECTOR_POLICY` | `gateway.get_connector_policy` | Client → Gateway | [`GatewayGetConnectorPolicyPayload`](#gatewaygetconnectorpolicypayload) | [`GatewayGetConnectorPolicyResponsePayload`](#gatewaygetconnectorpolicyresponsepayload) |
| `GATEWAY_UPDATE_CONNECTOR_POLICY` | `gateway.update_connector_policy` | Client → Gateway | [`GatewayUpdateConnectorPolicyPayload`](#gatewayupdateconnectorpolicypayload) | [`GatewayUpdateConnectorPolicyResponsePayload`](#gatewayupdateconnectorpolicyresponsepayload) |
| `GATEWAY_TEST_CONNECTOR` | `gateway.test_connector` | Client → Gateway | [`GatewayTestConnectorPayload`](#gatewaytestconnectorpayload) | [`GatewayTestConnectorResponsePayload`](#gatewaytestconnectorresponsepayload) |
| `GATEWAY_GET_POLICY` | `gateway.get_policy` | Client → Gateway | [`GatewayGetPolicyPayload`](#gatewaygetpolicypayload) | [`GatewayGetPolicyResponsePayload`](#gatewaygetpolicyresponsepayload) |
| `GATEWAY_UPDATE_POLICY` | `gateway.update_policy` | Client → Gateway | [`GatewayUpdatePolicyPayload`](#gatewayupdatepolicypayload) | [`GatewayUpdatePolicyResponsePayload`](#gatewayupdatepolicyresponsepayload) |
| `GATEWAY_KB_LIST_ENTRIES` | `gateway.kb_list_entries` | Client → Gateway | — | — |
| `GATEWAY_KB_UPSERT_ENTRY` | `gateway.kb_upsert_entry` | Client → Gateway | — | — |
| `GATEWAY_KB_DELETE_ENTRY` | `gateway.kb_delete_entry` | Client → Gateway | — | — |
| `GATEWAY_LIST_CAPABILITY_GRANTS` | `gateway.list_capability_grants` | Client → Gateway | [`GatewayListCapabilityGrantsPayload`](#gatewaylistcapabilitygrantspayload) | [`GatewayListCapabilityGrantsResponsePayload`](#gatewaylistcapabilitygrantsresponsepayload) |
| `GATEWAY_GRANT_CAPABILITY` | `gateway.grant_capability` | Client → Gateway | [`GatewayGrantCapabilityPayload`](#gatewaygrantcapabilitypayload) | [`GatewayGrantCapabilityResponsePayload`](#gatewaygrantcapabilityresponsepayload) |
| `GATEWAY_REVOKE_CAPABILITY` | `gateway.revoke_capability` | Client → Gateway | [`GatewayRevokeCapabilityPayload`](#gatewayrevokecapabilitypayload) | [`GatewayRevokeCapabilityResponsePayload`](#gatewayrevokecapabilityresponsepayload) |

## Payloads

### GatewaySkillListPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `query` | `string` | No | — |
| `tags` | `string[]` | No | — |
| `status` | `GatewaySkillStatusPayload \| "all"` | No | — |
| `limit` | `number` | No | — |

### GatewaySkillListResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `skills` | `GatewaySkillEntryPayload[]` | Yes | — |

### GatewaySkillGetPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `skillId` | `string` | Yes | — |

### GatewaySkillGetResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `skill` | `GatewaySkillEntryPayload` | Yes | — |

### GatewaySkillUpsertPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `skillId` | `string` | No | — |
| `name` | `string` | Yes | — |
| `description` | `string` | No | — |
| `contentMarkdown` | `string` | Yes | — |
| `sourceRef` | `string` | No | — |
| `tags` | `string[]` | No | — |
| `status` | `GatewaySkillStatusPayload` | No | — |

### GatewaySkillUpsertResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `skill` | `GatewaySkillEntryPayload` | Yes | — |
| `created` | `boolean` | Yes | — |

### GatewaySkillDeletePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `skillId` | `string` | Yes | — |

### GatewaySkillDeleteResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `skillId` | `string` | Yes | — |
| `deleted` | `boolean` | Yes | — |

### GatewayDiscoverLocalAgentsPayload

> Gateway admin: discover locally installed execution clients.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |

### GatewayDiscoverLocalAgentsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `agents` | `DiscoveredLocalAgentPayload[]` | Yes | — |

### GatewayListProviderConfigsPayload

> Gateway admin: list model runtime configurations.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |

### GatewayListProviderConfigsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `configs` | `ProviderRuntimeConfigPayload[]` | Yes | — |

### GatewayGetMainAgentPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | No | — |
| `repairIfMissing` | `boolean` | No | — |

### GatewayGetMainAgentResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `state` | `GatewayMainAgentStatePayload` | Yes | — |

### GatewaySetMainAgentPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | No | — |
| `selectionMode` | `MainAgentSelectionMode` | Yes | — |
| `providerId` | `string` | No | — |
| `modelId` | `string` | No | — |
| `sourceProfileId` | `string` | No | — |
| `copyPersonality` | `boolean` | No | — |

### GatewaySetMainAgentResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `state` | `GatewayMainAgentStatePayload` | Yes | — |

### GatewayListAvailableModelsPayload

> Gateway admin: discover models available for configured runtimes.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `providerId` | `string` | No | — |

### GatewayListAvailableModelsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `providers` | `GatewayModelProviderCatalogPayload[]` | Yes | — |
| `generatedAt` | `string` | Yes | — |

### GatewayListProviderCatalogsPayload

> Gateway admin: list runtime catalogs grouped by integration class.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `providerId` | `string` | No | — |

### GatewayListProviderCatalogsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `providers` | `GatewayModelProviderCatalogPayload[]` | Yes | — |
| `generatedAt` | `string` | Yes | — |

### GatewayCreateIntegrationRequestPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `integrationClass` | `GatewayIntegrationClassPayload` | Yes | — |
| `requestedName` | `string` | Yes | — |
| `useCase` | `string` | No | — |
| `sourceURL` | `string` | No | — |
| `notes` | `string` | No | — |

### GatewayCreateIntegrationRequestResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `request` | `GatewayIntegrationRequestPayload` | Yes | — |

### GatewayListIntegrationRequestsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `integrationClass` | `GatewayIntegrationClassPayload` | No | — |
| `limit` | `number` | No | — |

### GatewayListIntegrationRequestsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `requests` | `GatewayIntegrationRequestPayload[]` | Yes | — |

### GatewayGetProviderTelemetryPayload

> Gateway admin: read telemetry for configured runtimes.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `providerId` | `string` | No | — |

### GatewayGetProviderTelemetryResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `telemetry` | `ProviderTelemetryPayload[]` | Yes | — |
| `generatedAt` | `string` | Yes | — |

### GatewayGetLocalUsageTelemetryPayload

> Gateway admin: read local runtime usage telemetry with local sessions/tokens + quota windows.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `providerId` | `string` | No | — |

### GatewayGetLocalUsageTelemetryResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `telemetry` | `LocalProviderUsageTelemetryPayload[]` | Yes | — |
| `generatedAt` | `string` | Yes | — |

### GatewayGetProviderSettingsPayload

> Gateway admin: fetch full runtime settings for one configured runtime.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `providerId` | `string` | Yes | — |

### GatewayGetProviderSettingsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings` | `ProviderRuntimeConfigPayload` | Yes | — |

### GatewayUpdateProviderSettingsPayload

> Gateway admin: update gateway-level runtime settings (catalog + allowlist).

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `providerId` | `string` | Yes | — |
| `model` | `string` | No | — |
| `apiKey` | `string` | No | — |
| `apiKeySecretRef` | `string` | No | — |
| `baseURL` | `string` | No | — |
| `allowedModels` | `string[]` | No | — |
| `allowCustomModel` | `boolean` | No | — |

### GatewayUpdateProviderSettingsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings` | `ProviderRuntimeConfigPayload` | Yes | — |

### GatewaySetProviderConfigPayload

> Gateway admin: update one runtime configuration.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `providerId` | `string` | Yes | — |
| `model` | `string` | No | — |
| `apiKey` | `string` | No | — |
| `apiKeySecretRef` | `string` | No | — |
| `baseURL` | `string` | No | — |
| `allowedModels` | `string[]` | No | — |
| `allowCustomModel` | `boolean` | No | — |

### GatewaySetProviderConfigResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `config` | `ProviderRuntimeConfigPayload` | Yes | — |

### GatewayRemoveProviderConfigPayload

> Gateway admin: remove one runtime configuration.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `providerId` | `string` | Yes | — |

### GatewayRemoveProviderConfigResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `providerId` | `string` | Yes | — |

### GatewayFactoryResetPayload

> Gateway admin: destructive factory reset for one gateway runtime.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `confirmation` | `string` | Yes | — |

### GatewayFactoryResetResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `gatewayId` | `string` | Yes | — |
| `gatewayUuid` | `string` | No | — |
| `resetAt` | `string` | Yes | — |
| `tablesCleared` | `number` | Yes | — |
| `rowsDeleted` | `number` | Yes | — |

### GatewayProvisionLocalProfilePayload

> Gateway admin: provision a profile for a discovered local client.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `localClientId` | `string` | Yes | — |
| `profileId` | `string` | No | — |
| `profileName` | `string` | No | — |
| `agentId` | `string` | No | — |
| `spaceId` | `string` | No | — |

### GatewayProvisionLocalProfileResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `profileId` | `string` | Yes | — |
| `profileName` | `string` | Yes | — |
| `created` | `boolean` | Yes | — |
| `providerId` | `string` | Yes | — |
| `model` | `string` | Yes | — |
| `agentId` | `string` | No | — |
| `assignmentCreated` | `boolean` | No | — |

### GatewayPutSecretRefPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `secretRef` | `string` | No | — |
| `providerId` | `string` | Yes | — |
| `label` | `string` | No | — |
| `secret` | `string` | Yes | — |
| `backend` | `string` | No | — |

### GatewayPutSecretRefResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `secretRef` | `GatewaySecretRefPayload` | Yes | — |
| `created` | `boolean` | Yes | — |

### GatewayListSecretRefsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `providerId` | `string` | No | — |

### GatewayListSecretRefsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `secretRefs` | `GatewaySecretRefPayload[]` | Yes | — |

### GatewayDeleteSecretRefPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `secretRef` | `string` | Yes | — |

### GatewayDeleteSecretRefResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `secretRef` | `string` | Yes | — |
| `deleted` | `boolean` | Yes | — |

### GatewayListConnectorFamiliesPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |

### GatewayListConnectorFamiliesResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `families` | `GatewayConnectorFamilyPayload[]` | Yes | — |

### GatewayListConnectorsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `familyId` | `string` | No | — |

### GatewayListConnectorsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `connectors` | `GatewayConnectorPayload[]` | Yes | — |

### GatewayUpsertConnectorPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `connectorId` | `string` | No | — |
| `familyId` | `string` | Yes | — |
| `displayName` | `string` | Yes | — |
| `accountFingerprint` | `string` | Yes | — |
| `label` | `string` | Yes | — |
| `status` | `ConnectorInstanceStatusPayload` | No | — |
| `metadata` | `Record<string, unknown>` | No | — |
| `secretRefs` | `GatewayConnectorSecretRefPayload[]` | No | — |

### GatewayUpsertConnectorResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `connector` | `GatewayConnectorPayload` | Yes | — |

### GatewayRemoveConnectorPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `connectorId` | `string` | Yes | — |

### GatewayRemoveConnectorResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `connectorId` | `string` | Yes | — |
| `removed` | `boolean` | Yes | — |

### GatewayListConnectorBindingsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `connectorId` | `string` | No | — |

### GatewayListConnectorBindingsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `bindings` | `GatewayConnectorBindingPayload[]` | Yes | — |

### GatewayUpsertConnectorBindingPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `bindingId` | `string` | No | — |
| `connectorId` | `string` | Yes | — |
| `bindingType` | `ConnectorBindingTypePayload` | Yes | — |
| `selector` | `Record<string, unknown>` | No | — |
| `targetType` | `ConnectorBindingTargetPayload` | Yes | — |
| `targetSpaceId` | `string` | No | — |
| `allowedActions` | `ConnectorActionPayload[]` | No | — |
| `capabilityTypes` | `string[]` | No | — |
| `priority` | `number` | No | — |
| `enabled` | `boolean` | No | — |

### GatewayUpsertConnectorBindingResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `binding` | `GatewayConnectorBindingPayload` | Yes | — |

### GatewayRemoveConnectorBindingPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `bindingId` | `string` | Yes | — |

### GatewayRemoveConnectorBindingResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `bindingId` | `string` | Yes | — |
| `removed` | `boolean` | Yes | — |

### GatewayGetConnectorPolicyPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `scopeType` | `"global" \| "family" \| "instance"` | Yes | — |
| `scopeId` | `string` | Yes | — |

### GatewayGetConnectorPolicyResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `policy` | `GatewayConnectorPolicyPayload` | Yes | — |

### GatewayUpdateConnectorPolicyPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `scopeType` | `"global" \| "family" \| "instance"` | Yes | — |
| `scopeId` | `string` | Yes | — |
| `requestsPerMinute` | `number` | No | — |
| `burst` | `number` | No | — |
| `disabled` | `boolean` | No | — |
| `disableReason` | `string` | No | — |
| `disabledUntil` | `string` | No | — |
| `updatedBy` | `string` | Yes | — |

### GatewayUpdateConnectorPolicyResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `policy` | `GatewayConnectorPolicyPayload` | Yes | — |

### GatewayTestConnectorPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `connectorId` | `string` | Yes | — |

### GatewayTestConnectorResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ok` | `boolean` | Yes | — |
| `reason` | `string` | No | — |
| `connector` | `GatewayConnectorPayload` | No | — |
| `inboundRoute` | `{
    route: "binding" \| "main_fallback"` | No | — |
| `targetType` | `ConnectorBindingTargetPayload` | Yes | — |
| `targetSpaceId` | `string` | No | — |
| `bindingId` | `string` | No | — |
| `matchedScore` | `number` | No | — |

### GatewayGetPolicyPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |

### GatewayGetPolicyResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `policy` | `GatewayPolicyPayload` | Yes | — |

### GatewayUpdatePolicyPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `allowedCapabilityTypes` | `string[]` | No | — |
| `deniedCapabilityTypes` | `string[]` | No | — |
| `allowedSkillIds` | `string[]` | No | — |
| `deniedSkillIds` | `string[]` | No | — |
| `globalFlags` | `Record<string, unknown>` | No | — |

### GatewayUpdatePolicyResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `policy` | `GatewayPolicyPayload` | Yes | — |

### GatewayListCapabilityGrantsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `principalId` | `string` | No | — |
| `deviceId` | `string` | No | — |
| `includeRevoked` | `boolean` | No | — |
| `includeExpired` | `boolean` | No | — |

### GatewayListCapabilityGrantsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `grants` | `GatewayCapabilityGrantPayload[]` | Yes | — |

### GatewayGrantCapabilityPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `principalId` | `string` | No | — |
| `deviceId` | `string` | No | — |
| `capabilityId` | `string` | Yes | — |
| `reason` | `string` | No | — |
| `expiresAt` | `string` | No | — |

### GatewayGrantCapabilityResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `grant` | `GatewayCapabilityGrantPayload` | Yes | — |

### GatewayRevokeCapabilityPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `principalId` | `string` | No | — |
| `deviceId` | `string` | No | — |
| `capabilityId` | `string` | Yes | — |
| `reason` | `string` | No | — |

### GatewayRevokeCapabilityResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `revoked` | `boolean` | Yes | — |
| `capabilityId` | `string` | Yes | — |
| `principalId` | `string` | Yes | — |
| `deviceId` | `string` | Yes | — |
| `grant` | `GatewayCapabilityGrantPayload` | No | — |
