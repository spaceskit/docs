---
title: "Capabilities Messages"
description: Protocol messages in the capabilities family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 6 message types in the **capabilities** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `CAPABILITY_INVOKE` | `capability_invoke` | Client → Gateway | [`CapabilityInvokePayload`](#capabilityinvokepayload) | — |
| `CAPABILITIES_REGISTER` | `capabilities.register` | Client → Gateway | [`CapabilitiesRegisterPayload`](#capabilitiesregisterpayload) | — |
| `CAPABILITIES_DEREGISTER` | `capabilities.deregister` | Client → Gateway | [`CapabilitiesDeregisterPayload`](#capabilitiesderegisterpayload) | — |
| `CAPABILITY_RESULT` | `capability.result` | Client → Gateway | [`CapabilityResultPayload`](#capabilityresultpayload) | — |
| `CAPABILITY_ERROR` | `capability.error` | Client → Gateway | [`CapabilityErrorPayload`](#capabilityerrorpayload) | — |
| `CAPABILITY_INVOKE_ADAPTER` | `capability.invoke` | Gateway → Client | — | — |

## Payloads

### CapabilityInvokePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `capability` | `string` | Yes | — |
| `method` | `string` | Yes | — |
| `params` | `Record<string, unknown>` | Yes | — |
| `targetProvider` | `string` | No | — |

### CapabilitiesRegisterPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `providers` | `AdapterCapabilityProvider[]` | Yes | — |

### CapabilitiesDeregisterPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `providerIds` | `string[]` | Yes | — |

### CapabilityResultPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `invocationId` | `string` | Yes | — |
| `providerId` | `string` | Yes | — |
| `data` | `unknown` | Yes | — |
| `durationMs` | `number` | No | — |

### CapabilityErrorPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `invocationId` | `string` | Yes | — |
| `providerId` | `string` | No | — |
| `code` | `string` | No | — |
| `message` | `string` | Yes | — |
| `details` | `unknown` | No | — |
