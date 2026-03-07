---
title: "Sync Messages"
description: Protocol messages in the sync family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 3 message types in the **sync** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `SYNC_ANNOUNCE` | `sync.announce` | Client → Gateway | [`SyncAnnouncePayload`](#syncannouncepayload) | [`SyncAnnounceResponsePayload`](#syncannounceresponsepayload) |
| `SYNC_QUERY_RESOURCES` | `sync.query_resources` | Client → Gateway | [`SyncQueryResourcesPayload`](#syncqueryresourcespayload) | [`SyncQueryResourcesResponsePayload`](#syncqueryresourcesresponsepayload) |
| `SYNC_PULL_RESOURCES` | `sync.pull_resources` | Client → Gateway | [`SyncPullResourcesPayload`](#syncpullresourcespayload) | [`SyncPullResourcesResponsePayload`](#syncpullresourcesresponsepayload) |

## Payloads

### SyncAnnouncePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `peerId` | `string` | Yes | — |
| `resourceId` | `string` | Yes | — |
| `gatewayVersion` | `string` | Yes | — |
| `endpointUrl` | `string` | No | — |
| `authSecretHash` | `string` | No | — |
| `skillCount` | `number` | No | — |
| `actionCount` | `number` | No | — |
| `experienceCount` | `number` | No | — |
| `profileCount` | `number` | No | — |

### SyncAnnounceResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `peerId` | `string` | Yes | — |
| `resourceId` | `string` | Yes | — |
| `gatewayVersion` | `string` | Yes | — |
| `syncEnabled` | `boolean` | Yes | — |
| `announcedAt` | `string` | Yes | — |
| `apiVersion` | `string` | No | — |

### SyncQueryResourcesPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `peerId` | `string` | Yes | — |
| `resourceId` | `string` | No | — |
| `types` | `string[]` | No | — |
| `tags` | `string[]` | No | — |
| `updatedAfter` | `string` | No | — |
| `cursor` | `string` | No | — |
| `limit` | `number` | No | — |

### SyncQueryResourcesResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resources` | `SyncResourceRefPayload[]` | Yes | — |
| `nextCursor` | `string` | No | — |
| `apiVersion` | `string` | No | — |

### SyncPullResourcesPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `peerId` | `string` | Yes | — |
| `idempotencyKey` | `string` | Yes | — |
| `refs` | `SyncResourceRefPayload[]` | Yes | — |

### SyncPullResourcesResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resources` | `SyncResourcePayload[]` | Yes | — |
| `denied` | `SyncResourceDeniedPayload[]` | Yes | — |
| `provenance` | `SyncProvenancePayload[]` | No | — |
| `appliedCount` | `number` | Yes | — |
| `skippedCount` | `number` | Yes | — |
| `apiVersion` | `string` | No | — |
