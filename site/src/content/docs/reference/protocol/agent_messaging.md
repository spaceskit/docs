---
title: "Agent_messaging Messages"
description: Protocol messages in the agent_messaging family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 3 message types in the **agent_messaging** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `AGENT_MESSAGE` | `agent_message` | Bidirectional | [`AgentMessagePayload`](#agentmessagepayload) | — |
| `AGENT_POKE` | `agent_poke` | Bidirectional | [`AgentPokePayload`](#agentpokepayload) | — |
| `AGENT_IDLE` | `agent_idle` | Bidirectional | [`AgentIdlePayload`](#agentidlepayload) | — |

## Payloads

### AgentMessagePayload

> Send a message directly to a specific agent within a space. Does not consume a turn slot — used for coordination signals like "I'm working on X", "I need your output from turn Y", etc.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `fromAgentId` | `string` | Yes | Sending agent ID. Set by the gateway if the sender is authenticated as an agent. |
| `toAgentId` | `string` | Yes | Target agent ID. Use " " for broadcast to all agents in the space. |
| `content` | `string` | Yes | Message content (natural language or structured JSON stringified). |

### AgentPokePayload

> Notify an idle agent to resume work. Sent by the coordinator or lead agent when a dependency is resolved or when the agent has been idle too long.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `targetAgentId` | `string` | Yes | Agent to poke. |
| `reason` | `string` | Yes | Reason for the poke (human-readable). |
| `unblockedByTurnId` | `string` | No | Optional: turn ID that unblocked the agent. |

### AgentIdlePayload

> Gateway → Client: agent idle notification. Emitted when an agent's runtime transitions to idle state and stays idle for longer than the configured threshold.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `agentId` | `string` | Yes | — |
| `idleDurationMs` | `number` | Yes | How long the agent has been idle, in milliseconds. |
| `lastTurnId` | `string` | No | The last turn ID this agent executed, if any. |
