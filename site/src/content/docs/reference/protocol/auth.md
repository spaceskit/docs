---
title: "Auth Messages"
description: Protocol messages in the auth family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 9 message types in the **auth** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `AUTHENTICATE` | `authenticate` | Client → Gateway | [`AuthenticatePayload`](#authenticatepayload) | — |
| `SUBSCRIBE` | `subscribe` | Client → Gateway | [`SubscribePayload`](#subscribepayload) | [`SubscribeResponsePayload`](#subscriberesponsepayload) |
| `AUTH_REGISTER_DEVICE` | `auth.register_device` | Client → Gateway | [`AuthRegisterDevicePayload`](#authregisterdevicepayload) | [`AuthRegisterDeviceResponsePayload`](#authregisterdeviceresponsepayload) |
| `AUTH_ROTATE_DEVICE_KEY` | `auth.rotate_device_key` | Client → Gateway | [`AuthRotateDeviceKeyPayload`](#authrotatedevicekeypayload) | [`AuthRotateDeviceKeyResponsePayload`](#authrotatedevicekeyresponsepayload) |
| `AUTH_REVOKE_DEVICE` | `auth.revoke_device` | Client → Gateway | [`AuthRevokeDevicePayload`](#authrevokedevicepayload) | [`AuthRevokeDeviceResponsePayload`](#authrevokedeviceresponsepayload) |
| `AUTH_LIST_DEVICES` | `auth.list_devices` | Client → Gateway | [`AuthListDevicesPayload`](#authlistdevicespayload) | [`AuthListDevicesResponsePayload`](#authlistdevicesresponsepayload) |
| `AUTH_ISSUE_HTTP_PRINCIPAL_TOKEN` | `auth.issue_http_principal_token` | Client → Gateway | [`AuthIssueHttpPrincipalTokenPayload`](#authissuehttpprincipaltokenpayload) | [`AuthIssueHttpPrincipalTokenResponsePayload`](#authissuehttpprincipaltokenresponsepayload) |
| `AUTH_CHALLENGE` | `auth_challenge` | Gateway → Client | — | — |
| `AUTH_RESULT` | `auth_result` | Gateway → Client | [`AuthResultPayload`](#authresultpayload) | — |

## Payloads

### AuthenticatePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `publicKey` | `string` | Yes | — |
| `signature` | `string` | Yes | — |
| `clientType` | `string` | Yes | — |
| `clientVersion` | `string` | Yes | — |
| `deviceId` | `string` | No | — |
| `devicePublicKey` | `string` | No | — |
| `deviceProofSignature` | `string` | No | — |

### SubscribePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `spaceUids` | `string[]` | Yes | — |

### SubscribeResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subscribedSpaceUids` | `string[]` | Yes | — |
| `denied` | `SubscribeDeniedSpace[]` | Yes | — |

### AuthRegisterDevicePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `deviceId` | `string` | Yes | — |
| `publicKey` | `string` | Yes | — |
| `platform` | `string` | No | — |

### AuthRegisterDeviceResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `device` | `DeviceIdentityPayload` | Yes | — |
| `created` | `boolean` | Yes | — |

### AuthRotateDeviceKeyPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `deviceId` | `string` | Yes | — |
| `nextPublicKey` | `string` | Yes | — |
| `platform` | `string` | No | — |

### AuthRotateDeviceKeyResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `device` | `DeviceIdentityPayload` | Yes | — |

### AuthRevokeDevicePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `deviceId` | `string` | Yes | — |

### AuthRevokeDeviceResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `deviceId` | `string` | Yes | — |
| `revoked` | `boolean` | Yes | — |
| `device` | `DeviceIdentityPayload` | No | — |

### AuthListDevicesPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `includeRevoked` | `boolean` | No | — |

### AuthListDevicesResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `devices` | `DeviceIdentityPayload[]` | Yes | — |

### AuthIssueHttpPrincipalTokenPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `ttlSeconds` | `number` | No | — |

### AuthIssueHttpPrincipalTokenResponsePayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `token` | `string` | Yes | — |
| `tokenType` | `"Bearer"` | Yes | — |
| `principalId` | `string` | Yes | — |
| `deviceId` | `string` | No | — |
| `issuedAt` | `string` | Yes | — |
| `expiresAt` | `string` | Yes | — |
| `ttlSeconds` | `number` | Yes | — |

### AuthResultPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `success` | `boolean` | Yes | — |
| `reason` | `string` | No | — |
| `challenge` | `string` | No | — |
