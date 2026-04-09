---
title: "Turns Messages"
description: Protocol messages in the turns family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 4 message types in the **turns** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `EXECUTE_TURN` | `execute_turn` | Client → Gateway | [`ExecuteTurnPayload`](#executeturnpayload) | — |
| `RESUME_FEEDBACK` | `resume_feedback` | Client → Gateway | [`ResumeFeedbackPayload`](#resumefeedbackpayload) | — |
| `TURN_EVENT` | `turn_event` | Gateway → Client | [`TurnEventPayload`](#turneventpayload) | — |
| `TURN_STREAM` | `turn_stream` | Gateway → Client | [`TurnStreamPayload`](#turnstreampayload) | — |

## Payloads

### ExecuteTurnPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceUid` | `string` | Yes | — |
| `input` | `string` | Yes | — |
| `targetAgentId` | `string` | No | — |
| `replyToTurnId` | `string` | No | — |
| `accessMode` | `"default" \| "full_access"` | No | — |

### ResumeFeedbackPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceUid` | `string` | Yes | — |
| `turnId` | `string` | Yes | — |
| `response` | `"approve" \| "reject" \| "revise" \| "defer"` | Yes | — |
| `revision` | `string` | No | — |
| `approvalGrant` | `ApprovalGrantPayload` | No | — |

### TurnEventPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `turnId` | `string` | Yes | — |
| `rootTurnId` | `string` | No | — |
| `agentId` | `string` | No | — |
| `conversationTopology` | `string` | No | — |
| `transcriptVisibility` | `string` | No | — |
| `eventType` | `\| "started"
    \| "streaming"
    \| "tool_call"
    \| "feedback_requested"
    \| "rate_limited"
    \| "state_changed"
    \| "completed"
    \| "cancelled"
    \| "failed"` | Yes | — |
| `data` | `unknown` | Yes | — |
| `typedPayload` | `TypedTurnEventPayload` | No | — |
| `ts` | `string` | No | — |

### TurnStreamPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `turnId` | `string` | Yes | — |
| `agentId` | `string` | Yes | — |
| `delta` | `string` | Yes | — |
| `seq` | `number` | Yes | — |
| `done` | `boolean` | Yes | — |
