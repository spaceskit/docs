---
title: "Task_dependencies Messages"
description: Protocol messages in the task_dependencies family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 2 message types in the **task_dependencies** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `TASK_DEPENDENCY` | `task_dependency` | Bidirectional | [`TaskDependencyPayload`](#taskdependencypayload) | — |
| `TASK_DEPENDENCY_RESOLVED` | `task_dependency_resolved` | Bidirectional | [`TaskDependencyResolvedPayload`](#taskdependencyresolvedpayload) | — |

## Payloads

### TaskDependencyPayload

> Declare a dependency between tasks/turns within a space. The gateway will hold `blockedTurnId` until `dependsOnTurnId` completes.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `blockedTurnId` | `string` | Yes | The turn/task that is blocked. |
| `dependsOnTurnId` | `string` | Yes | The turn/task that must complete first. |

### TaskDependencyResolvedPayload

> Gateway → Client: dependency resolved notification.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `unblockedTurnId` | `string` | Yes | The turn that was blocked and is now unblocked. |
| `resolvedByTurnId` | `string` | Yes | The turn that completed, resolving the dependency. |
