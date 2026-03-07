---
title: "Usage Messages"
description: Protocol messages in the usage family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 1 message types in the **usage** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `USAGE_GET_SNAPSHOT` | `usage.get_snapshot` | Client → Gateway | [`UsageGetSnapshotPayload`](#usagegetsnapshotpayload) | [`UsageGetSnapshotResponsePayload`](#usagegetsnapshotresponsepayload) |

## Payloads

### UsageGetSnapshotPayload

> Usage: polling-friendly snapshot for windows + budget state.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |

### UsageGetSnapshotResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `snapshot` | `UsageSnapshotPayload` | Yes | — |
