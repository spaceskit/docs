---
title: "Subscriptions Messages"
description: Protocol messages in the subscriptions family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 2 message types in the **subscriptions** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `SUBSCRIBE_NOTIFICATIONS` | `subscribe_notifications` | Client → Gateway | [`SubscribeNotificationsPayload`](#subscribenotificationspayload) | — |
| `UNSUBSCRIBE_NOTIFICATIONS` | `unsubscribe_notifications` | Client → Gateway | [`UnsubscribeNotificationsPayload`](#unsubscribenotificationspayload) | — |

## Payloads

### SubscribeNotificationsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `categories` | `string[]` | Yes | — |

### UnsubscribeNotificationsPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `categories` | `string[]` | Yes | — |
