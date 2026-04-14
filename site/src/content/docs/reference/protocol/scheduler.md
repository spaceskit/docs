---
title: "Scheduler Messages"
description: Protocol messages in the scheduler family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 10 message types in the **scheduler** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `SCHEDULER_CREATE_JOB` | `scheduler.create_job` | Client → Gateway | [`SchedulerCreateJobPayload`](#schedulercreatejobpayload) | [`SchedulerCreateJobResponsePayload`](#schedulercreatejobresponsepayload) |
| `SCHEDULER_GET_JOB` | `scheduler.get_job` | Client → Gateway | [`SchedulerGetJobPayload`](#schedulergetjobpayload) | [`SchedulerGetJobResponsePayload`](#schedulergetjobresponsepayload) |
| `SCHEDULER_LIST_JOBS` | `scheduler.list_jobs` | Client → Gateway | [`SchedulerListJobsPayload`](#schedulerlistjobspayload) | [`SchedulerListJobsResponsePayload`](#schedulerlistjobsresponsepayload) |
| `SCHEDULER_LIST_EVAL_DEFINITIONS` | `scheduler.list_eval_definitions` | Client → Gateway | [`SchedulerListEvalDefinitionsPayload`](#schedulerlistevaldefinitionspayload) | [`SchedulerListEvalDefinitionsResponsePayload`](#schedulerlistevaldefinitionsresponsepayload) |
| `SCHEDULER_UPDATE_JOB` | `scheduler.update_job` | Client → Gateway | [`SchedulerUpdateJobPayload`](#schedulerupdatejobpayload) | [`SchedulerUpdateJobResponsePayload`](#schedulerupdatejobresponsepayload) |
| `SCHEDULER_DELETE_JOB` | `scheduler.delete_job` | Client → Gateway | [`SchedulerDeleteJobPayload`](#schedulerdeletejobpayload) | [`SchedulerDeleteJobResponsePayload`](#schedulerdeletejobresponsepayload) |
| `SCHEDULER_LINK_SPACE` | `scheduler.link_space` | Client → Gateway | [`SchedulerLinkSpacePayload`](#schedulerlinkspacepayload) | [`SchedulerLinkSpaceResponsePayload`](#schedulerlinkspaceresponsepayload) |
| `SCHEDULER_UNLINK_SPACE` | `scheduler.unlink_space` | Client → Gateway | [`SchedulerUnlinkSpacePayload`](#schedulerunlinkspacepayload) | [`SchedulerUnlinkSpaceResponsePayload`](#schedulerunlinkspaceresponsepayload) |
| `SCHEDULER_LIST_RUNS` | `scheduler.list_runs` | Client → Gateway | [`SchedulerListRunsPayload`](#schedulerlistrunspayload) | [`SchedulerListRunsResponsePayload`](#schedulerlistrunsresponsepayload) |
| `SCHEDULER_RUN_NOW` | `scheduler.run_now` | Client → Gateway | [`SchedulerRunNowPayload`](#schedulerrunnowpayload) | [`SchedulerRunNowResponsePayload`](#schedulerrunnowresponsepayload) |

## Payloads

### SchedulerCreateJobPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `name` | `string` | Yes | — |
| `timezone` | `string` | Yes | — |
| `schedulePreset` | `SchedulerSchedulePresetPayload` | Yes | — |
| `action` | `SchedulerActionPayload` | Yes | — |
| `primarySpaceId` | `string` | Yes | — |
| `relatedSpaceIds` | `string[]` | No | — |
| `executionTarget` | `SchedulerExecutionTargetPayload` | No | — |
| `calendarBinding` | `SchedulerCalendarBindingPayload` | No | — |
| `evalConfig` | `SchedulerEvalConfigPayload` | No | — |

### SchedulerCreateJobResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `job` | `SchedulerJobPayload` | Yes | — |

### SchedulerGetJobPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `jobId` | `string` | Yes | — |

### SchedulerGetJobResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `job` | `SchedulerJobPayload` | Yes | — |

### SchedulerListJobsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `statuses` | `SchedulerJobStatusPayload[]` | No | — |
| `gatewayId` | `string` | No | — |
| `limit` | `number` | No | — |

### SchedulerListJobsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `jobs` | `SchedulerJobPayload[]` | Yes | — |

### SchedulerListEvalDefinitionsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |

### SchedulerListEvalDefinitionsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `definitions` | `SchedulerEvalDefinitionPayload[]` | Yes | — |

### SchedulerUpdateJobPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `jobId` | `string` | Yes | — |
| `name` | `string` | No | — |
| `status` | `SchedulerJobStatusPayload` | No | — |
| `timezone` | `string` | No | — |
| `schedulePreset` | `SchedulerSchedulePresetPayload` | No | — |
| `action` | `SchedulerActionPayload` | No | — |
| `primarySpaceId` | `string \| null` | No | — |
| `relatedSpaceIds` | `string[]` | No | — |
| `executionTarget` | `SchedulerExecutionTargetPayload` | No | — |
| `calendarBinding` | `SchedulerCalendarBindingPayload \| null` | No | — |
| `evalConfig` | `SchedulerEvalConfigPayload \| null` | No | — |

### SchedulerUpdateJobResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `job` | `SchedulerJobPayload` | Yes | — |

### SchedulerDeleteJobPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `jobId` | `string` | Yes | — |

### SchedulerDeleteJobResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `jobId` | `string` | Yes | — |
| `deleted` | `boolean` | Yes | — |

### SchedulerLinkSpacePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `jobId` | `string` | Yes | — |
| `spaceId` | `string` | Yes | — |

### SchedulerLinkSpaceResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `job` | `SchedulerJobPayload` | Yes | — |

### SchedulerUnlinkSpacePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `jobId` | `string` | Yes | — |
| `spaceId` | `string` | Yes | — |

### SchedulerUnlinkSpaceResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `job` | `SchedulerJobPayload` | Yes | — |

### SchedulerListRunsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `jobId` | `string` | Yes | — |
| `limit` | `number` | No | — |
| `offset` | `number` | No | — |

### SchedulerListRunsResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `runs` | `SchedulerJobRunPayload[]` | Yes | — |
| `total` | `number` | Yes | — |
| `nextOffset` | `number` | No | — |

### SchedulerRunNowPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `idempotencyKey` | `string` | No | — |
| `jobId` | `string` | Yes | — |

### SchedulerRunNowResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `run` | `SchedulerJobRunPayload` | Yes | — |
| `job` | `SchedulerJobPayload` | Yes | — |
