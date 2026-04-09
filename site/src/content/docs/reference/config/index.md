---
title: Configuration Reference
description: All 68 environment variables for configuring the Spaceskit gateway.
---

<!-- AUTO-GENERATED — re-run: bun run docs:generate -->

> 68 environment variables across 16 sections. Generated from `.env.example` and `bootstrap/src/index.ts`.

## Server

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `SPACESKIT_PORT` | `9320` | No | HTTP/WS listen port |
| `SPACESKIT_HOST` | `127.0.0.1` | No | Bind address |
| `SPACESKIT_LOG_LEVEL` | `info` | No | trace | debug | info | warn | error |
| `SPACESKIT_LOG_FILE` | — | No | Path to write structured log file |
| `SPACESKIT_HEALTH_DEBUG` | `false` | No | Expose detailed health-check info |
| `SPACESKIT_GATEWAY_PROFILE` | — | No | "embedded" | "external" (auto-detected from port) |
| `SPACESKIT_GENERATION` | `v2_2026_02_21` | No | Runtime generation tag |

## Database

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `SPACESKIT_DB_PATH` | `./gateway.db` | No | SQLite database file path |
| `SPACESKIT_SPACES_ROOT` | — | No | Base root folder for per-space workspace folders |

## Identity — Main space bootstrap

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `SPACESKIT_MAIN_SPACE_ID` | `main-space` | No | Default space ID |
| `SPACESKIT_MAIN_RESOURCE_ID` | `resource:main` | No | Resource identifier for this gateway |
| `SPACESKIT_MAIN_SPACE_GOAL` | — | No | Goal description for the main space |
| `SPACESKIT_MAIN_PROFILE_ID` | `main-profile` | No | Default profile ID |
| `SPACESKIT_MAIN_ORCHESTRATOR_PROFILE_ID` | — | No | Orchestrator profile (defaults to MAIN_PROFILE_ID) |
| `SPACESKIT_MAIN_AGENT_ID` | `main-agent` | No | Default agent ID |

## Execution Integrations

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `SPACESKIT_MODEL_PROVIDER` | — | No | Default execution provider ID |
| `SPACESKIT_MODEL` | — | No | Default model ID |
| `SPACESKIT_API_KEY` | — | No | Default API key for the selected cloud provider |
| `OPENROUTER_API_KEY` | — | Yes (OpenRouter cloud API) | openrouter api key |
| `OPENAI_API_KEY` | — | Yes (OpenAI cloud API) | openai api key |
| `GROQ_API_KEY` | — | Yes (Groq cloud API) | groq api key |
| `TOGETHER_API_KEY` | — | Yes (Together cloud API) | together api key |
| `MISTRAL_API_KEY` | — | Yes (Mistral cloud API) | mistral api key |
| `OPENAI_BASE_URL` | — | No | Custom OpenAI-compatible base URL for `openai` |
| `LMSTUDIO_BASE_URL` | — | No | LM Studio base URL (default: http://127.0.0.1:1234/v1) |
| `OLLAMA_BASE_URL` | — | No | Ollama base URL (default: http://127.0.0.1:11434/v1) |

## MCP (Model Context Protocol)

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `MCP_ENDPOINT` | — | No | Global MCP endpoint (http or stdio) |
| `SPACESKIT_MCP_SECRET_REF` | — | No | Secret ref for MCP authentication |

## Memory providers

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `MEM0_API_KEY` | — | No | Mem0 memory provider API key |
| `LETTA_BASE_URL` | — | No | Letta server base URL |
| `LETTA_API_KEY` | — | No | Letta API key |

## Security & Authentication

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `SPACESKIT_SYNC_SHARED_SECRET` | — | Yes (sync) | Shared secret for peer sync auth |
| `SPACESKIT_SECRET_REF_MASTER_KEY` | — | No | Master key for encrypting provider secret refs |
| `SPACESKIT_REQUIRE_EXPLICIT_DEVICE_AUTH` | `false` | No | Require explicit device authorization |
| `SPACESKIT_REQUIRE_PREREGISTERED_DEVICE` | `false` | No | Require devices to be pre-registered |

## Sync

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `SPACESKIT_SYNC_LOCAL_PEER_ID` | — | No | Local peer ID (defaults to MAIN_RESOURCE_ID) |
| `SPACESKIT_SYNC_AUTO_PULL_ON_ANNOUNCE` | `false` | No | Auto-pull when a peer announces |
| `SPACESKIT_SYNC_AUTO_PULL_TARGET_SPACE_ID` | — | No | Target space for auto-pull (defaults to MAIN_SPACE_ID) |

## Sharing & Invites

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `SPACESKIT_SHARE_INVITE_TTL_SECONDS` | `86400` | No | Invite link TTL in seconds (default: 24h) |

## Orchestrator / Master mode

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `SPACESKIT_MASTER_MODE_ENABLED` | `true` | No | Enable master orchestration mode |
| `SPACESKIT_MASTER_PLANNER_PROMPT_TEMPLATE` | — | No | Custom planner prompt template |
| `SPACESKIT_GUEST_AGENT_PROMPT_TEMPLATE` | — | No | Custom guest agent prompt template |
| `SPACESKIT_PEER_REVIEW_PROMPT_TEMPLATE` | — | No | Custom peer review prompt template |
| `SPACESKIT_MASTER_SYNTHESIS_PROMPT_TEMPLATE` | — | No | Custom synthesis prompt template |
| `SPACESKIT_GATEWAY_CAPABILITY_GRANTS` | — | No | CSV list of capability grants |

## Connectors

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `SPACESKIT_ENABLE_WHATSAPP_CONNECTOR_FAMILY` | — | No | Enable WhatsApp connector (default: true for external) |
| `SPACESKIT_ENABLE_DISCORD_CONNECTOR_FAMILY` | — | No | Enable Discord connector (default: true for external) |

## Voice

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `SPACESKIT_ENABLE_SPEECH_MVP` | `false` | No | Enable speech session service |
| `SPACESKIT_VOICE_LOCK_ENABLED` | — | No | Enable voice usage limits |
| `SPACESKIT_VOICE_DEFAULT_SOURCE` | `managed` | No | "managed" | "byok" | "local" | "apple_speech" |
| `SPACESKIT_VOICE_MANAGED_PROVIDER_ID` | — | No | Preferred managed voice provider |
| `SPACESKIT_VOICE_BYOK_PROVIDER_ID` | — | No | BYOK voice provider ID |
| `SPACESKIT_VOICE_LOCAL_PROVIDER_ID` | — | No | Local model voice provider ID |
| `SPACESKIT_VOICE_APPLE_PROVIDER_ID` | — | No | Apple Speech provider ID |
| `SPACESKIT_VOICE_ALLOW_BYOK_FALLBACK` | `false` | No | Allow fallback to BYOK |
| `SPACESKIT_VOICE_ALLOW_LOCAL_FALLBACK` | `true` | No | Allow fallback to local models |
| `SPACESKIT_VOICE_ALLOW_APPLE_FALLBACK` | `true` | No | Allow fallback to Apple Speech |
| `SPACESKIT_VOICE_MANAGED_STT_SECONDS_LIMIT` | — | No | Monthly managed STT seconds limit |
| `SPACESKIT_VOICE_MANAGED_TTS_CHARS_LIMIT` | — | No | Monthly managed TTS characters limit |
| `SPACESKIT_VOICE_MANAGED_TTS_SECONDS_LIMIT` | — | No | Monthly managed TTS seconds limit |

## Resilience & Rate Limiting

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `SPACESKIT_TRACING` | `true` | No | Enable OpenTelemetry tracing (set "false" to disable) |
| `SPACESKIT_RESILIENCE` | `true` | No | Enable resilience middleware (set "false" to disable) |
| `SPACESKIT_RATE_LIMIT` | `60` | No | Requests per minute rate limit |
| `SPACESKIT_HEARTBEAT_INTERVAL_MS` | `30000` | No | WebSocket heartbeat interval in ms |

## Scheduler

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `SPACESKIT_SCHEDULER_TICK_MS` | `15000` | No | Scheduler tick interval in ms (min: 1000) |

## Config hot-reload

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `SPACESKIT_CONFIG_FILE` | — | No | Path to config JSON file for hot-reload |
| `SPACESKIT_CONFIG_POLL_MS` | `5000` | No | Config file poll interval in ms |

## Workspace logging

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `SPACESKIT_WORKSPACE_LOG_DEBUG` | `false` | No | Include full payload bodies in workspace logs |

## Undocumented Variables

These variables are referenced in bootstrap code but not documented in `.env.example`:

- `SPACESKIT_COLLAB_MAINTENANCE_TICK_MS` — Referenced in bootstrap code but missing from .env.example
