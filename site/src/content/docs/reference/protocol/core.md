---
title: "Core Messages"
description: Protocol messages in the core family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 4 message types in the **core** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `PING` | `ping` | Client → Gateway | — | — |
| `NOTIFICATION` | `notification` | Gateway → Client | [`NotificationPayload`](#notificationpayload) | — |
| `ERROR` | `error` | Gateway → Client | [`ErrorPayload`](#errorpayload) | — |
| `PONG` | `pong` | Gateway → Client | — | — |

## Payloads

### NotificationPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `notificationId` | `string` | Yes | — |
| `category` | `string` | Yes | — |
| `severity` | `"info" \| "warning" \| "error" \| "critical"` | Yes | — |
| `title` | `string` | Yes | — |
| `body` | `string` | Yes | — |
| `spaceId` | `string` | No | — |
| `spaceUid` | `string` | No | — |
| `agentId` | `string` | No | — |
| `data` | `Record<string, unknown>` | No | — |
| `createdAt` | `string` | Yes | — |

### ErrorPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `code` | `GatewayErrorCode` | Yes | — |
| `message` | `string` | Yes | — |
| `details` | `unknown` | No | — |
| `retryable` | `boolean` | Yes | — |
| `correlationId` | `string` | Yes | — |
