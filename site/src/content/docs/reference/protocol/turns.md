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
| `targetAgentId` | `string` | No | Optionally target a specific agent. |
| `replyToTurnId` | `string` | No | Optional turn ID this is a reply to (threading). |

### ResumeFeedbackPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceUid` | `string` | Yes | — |
| `turnId` | `string` | Yes | — |
| `response` | `"approve" \| "reject" \| "revise" \| "defer"` | Yes | — |
| `revision` | `string` | No | — |

### TurnEventPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `turnId` | `string` | Yes | — |
| `eventType` | `"started" \| "streaming" \| "tool_call" \| "feedback_requested" \| "rate_limited" \| "state_changed" \| "completed" \| "failed"` | Yes | — |
| `data` | `unknown` | Yes | — |

### TurnStreamPayload

> Real-time streaming chunk sent during agent turn execution.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `turnId` | `string` | Yes | — |
| `agentId` | `string` | Yes | — |
| `delta` | `string` | Yes | Incremental text chunk (delta). |
| `seq` | `number` | Yes | Sequence number for ordering. |
| `done` | `boolean` | Yes | Whether this is the final chunk. |
