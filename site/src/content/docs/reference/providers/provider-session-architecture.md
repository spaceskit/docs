---
title: Provider Session Architecture
description: How provider-native sessions, thinking parameters, and caching work in the gateway.
---

## Overview

The gateway supports provider-native session management and thinking/reasoning parameters. Each provider has a different approach:

| Provider | Session Strategy | Thinking Parameter | Tool Mode |
|----------|-----------------|-------------------|-----------|
| `anthropic` | Prompt caching (transparent) | `thinking.budget_tokens` | Native |
| `openai-responses` | `previous_response_id` (server-side) | `reasoning.effort` (o-series) | Native |
| `openai` | None (full history each turn) | `reasoning_effort` (o-series) | Native |
| `claude` | CLI session (disk-based) | `--effort` flag | MCP bridge |
| `codex` | CLI threads | Native reasoning | MCP bridge |
| `gemini` | CLI session | `--thinking-level` flag | MCP bridge |
| Local runtimes | None | None | Native |

## Session Handle Flow

```
Turn N starts
  → TurnContext.providerSessionHandle (from previous turn)
  → GenerateOptions.providerSessionHandle
  → Provider uses it (e.g. sends previous_response_id)
  → GenerateResult.providerSessionHandle (from response)
  → Stored in TurnResult.metadata.providerSessionHandle
  → Passed to Turn N+1
```

## ThinkingConfig Resolution

```
TurnContext.effort (user picks low/medium/high/max)
  → resolveThinkingConfig(effort, capabilities)
  → ThinkingConfig { enabled, budgetTokens, display }
  → GenerateOptions.thinkingConfig
  → Provider adapter maps to native parameter
```

### Provider Mapping

- **Anthropic SDK**: `ThinkingConfig` → `thinking: { type: "enabled", budget_tokens }`
- **OpenAI (Chat Completions)**: `effort` → `reasoning_effort` in request body
- **OpenAI (Responses)**: `effort` → `reasoning: { effort }` in request body
- **Claude CLI**: `effort` → `--effort` flag (existing)
- **Gemini CLI**: `effort` → `--thinking-level` flag

## Capability Registry Flags

| Flag | Providers |
|------|-----------|
| `supportsThinking` | anthropic, claude, gemini |
| `supportsReasoningEffort` | openai, codex |

These flags determine whether `resolveThinkingConfig` produces a `ThinkingConfig` for the turn.

## Adding a New Provider

1. Create a `ModelProvider` implementation in `provider-runtime/src/`
2. Add provider defaults to `model-capability-registry.ts`
3. Register in `execution-adapter-factory.ts`
4. Export from `provider-runtime/src/index.ts`
5. Map `ThinkingConfig` / `ProviderSessionHandle` if applicable
