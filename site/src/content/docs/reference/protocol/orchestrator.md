---
title: "Orchestrator Messages"
description: Protocol messages in the orchestrator family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 3 message types in the **orchestrator** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `ORCHESTRATOR_COMMAND` | `orchestrator.command` | Client → Gateway | [`OrchestratorCommandPayload`](#orchestratorcommandpayload) | [`OrchestratorCommandResponsePayload`](#orchestratorcommandresponsepayload) |
| `ORCHESTRATOR_GET_COMMAND` | `orchestrator.get_command` | Client → Gateway | [`OrchestratorGetCommandPayload`](#orchestratorgetcommandpayload) | — |
| `ORCHESTRATOR_EVENT` | `orchestrator.event` | Gateway → Client | — | — |

## Payloads

### OrchestratorCommandPayload

> Orchestrator high-level command channel.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `correlationId` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `commandType` | `\| "list_rooms"
    \| "create_room"
    \| "list_skills"
    \| "create_skill"
    \| "handoff_room"
    \| "add_agent"
    \| "share_context"
    \| "run_space_prompt"` | Yes | — |
| `targetSpaceId` | `string` | Yes | — |
| `targetAgentId` | `string` | No | — |
| `payload` | `Record<string, unknown>` | No | — |

### OrchestratorCommandResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `command` | `OrchestratorCommandResultPayload` | Yes | — |

### OrchestratorGetCommandPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `commandId` | `string` | Yes | — |
