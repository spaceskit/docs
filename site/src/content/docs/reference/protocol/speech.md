---
title: "Speech Messages"
description: Protocol messages in the speech family.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 4 message types in the **speech** family.

## Overview

| Key | Wire Type | Direction | Payload | Response |
|-----|-----------|-----------|---------|----------|
| `SPEECH_START` | `speech.start` | Client → Gateway | [`SpeechStartPayload`](#speechstartpayload) | — |
| `SPEECH_AUDIO_CHUNK` | `speech.audio_chunk` | Client → Gateway | [`SpeechAudioChunkPayload`](#speechaudiochunkpayload) | — |
| `SPEECH_CONTROL` | `speech.control` | Client → Gateway | [`SpeechControlPayload`](#speechcontrolpayload) | — |
| `SPEECH_EVENT` | `speech.event` | Gateway → Client | [`SpeechEventPayload`](#speecheventpayload) | — |

## Payloads

### SpeechStartPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `sessionId` | `string` | No | — |
| `locale` | `string` | No | — |
| `sourceDevice` | `string` | No | — |
| `enableTranscription` | `boolean` | No | — |
| `enablePlayback` | `boolean` | No | — |
| `agentId` | `string` | No | — |
| `autoSubmitTurns` | `boolean` | No | — |
| `preferredSource` | `VoiceProviderSourcePayload` | No | — |
| `preferredProviderId` | `string` | No | — |
| `byokProviderId` | `string` | No | — |
| `localModelProviderId` | `string` | No | — |
| `appleSpeechProviderId` | `string` | No | — |
| `allowByokFallback` | `boolean` | No | — |
| `allowLocalFallback` | `boolean` | No | — |
| `allowAppleSpeechFallback` | `boolean` | No | — |

### SpeechAudioChunkPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `sessionId` | `string` | Yes | — |
| `sequenceNo` | `number` | No | Proto-aligned alias for sequence. |
| `sequence` | `number` | Yes | — |
| `audioBase64` | `string` | Yes | — |
| `sampleRateHz` | `number` | No | — |
| `channels` | `number` | No | — |
| `codec` | `string` | No | — |
| `audioDurationSeconds` | `number` | No | — |
| `ttsChars` | `number` | No | — |
| `ttsSeconds` | `number` | No | — |
| `transcriptText` | `string` | No | — |
| `isFinal` | `boolean` | No | — |

### SpeechControlPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiVersion` | `string` | No | — |
| `sessionId` | `string` | Yes | — |
| `command` | `"stop" \| "interrupt" \| "end"` | Yes | — |
| `reason` | `string` | No | — |

### SpeechEventPayload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `sessionId` | `string` | Yes | — |
| `spaceId` | `string` | Yes | — |
| `spaceUid` | `string` | Yes | — |
| `type` | `string` | No | Proto-aligned enum-like event category. |
| `message` | `string` | No | Proto-aligned human message. |
| `state` | `"idle" \| "running" \| "stopped" \| "interrupted" \| "ended"` | Yes | — |
| `eventType` | `string` | Yes | — |
| `providerSource` | `VoiceProviderSourcePayload` | No | — |
| `providerId` | `string` | No | — |
| `fallbackReason` | `VoiceFallbackReasonPayload` | No | — |
| `usage` | `SpeechUsageMetricsPayload` | No | — |
| `lockReason` | `string` | No | — |
| `transcript` | `string` | No | — |
| `turnId` | `string` | No | — |
| `sequence` | `number` | No | — |
| `sequenceNo` | `number` | No | — |
| `reason` | `string` | No | — |
| `emittedAt` | `string` | No | — |
| `ts` | `string` | Yes | — |
