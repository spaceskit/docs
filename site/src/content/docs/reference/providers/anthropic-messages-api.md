---
title: Anthropic Messages API
description: Provider integration for Claude models via the Anthropic Messages API with prompt caching and extended thinking.
---

## Provider ID

`anthropic` — Direct Anthropic Messages API via `@anthropic-ai/sdk`.

Separate from `claude` (CLI executor), which uses the Claude Code CLI subprocess.

## Configuration

| Field | Required | Description |
|-------|----------|-------------|
| `apiKey` | Yes | Anthropic API key (or `ANTHROPIC_API_KEY` env var) |
| `model` | Yes | Model ID, e.g. `claude-sonnet-4-6`, `claude-opus-4-6` |

## Extended Thinking

The gateway maps per-turn `effort` to Anthropic's native `thinking` parameter:

| Gateway Effort | `budget_tokens` | Use Case |
|---------------|-----------------|----------|
| `low` | 1,024 | Quick responses |
| `medium` | 4,096 | Balanced reasoning |
| `high` | 16,384 | Deep analysis |
| `max` | 32,768 | Maximum reasoning depth |

### API Parameter

```json
{
  "thinking": {
    "type": "enabled",
    "budget_tokens": 16384,
    "display": "summarized"
  }
}
```

Supported on: Claude Sonnet 4+, Claude Opus 4+, Claude Haiku 4.5+

## Prompt Caching

The provider automatically applies `cache_control: { type: "ephemeral" }` on the system prompt. This enables Anthropic's server-side prompt caching — repeated prefixes are recognized and not re-processed, reducing latency and cost.

No session management needed — caching is transparent.

## Native Function Calling

Tools are sent as Anthropic-native `tools` parameter (not MCP bridge). Tool calls and results use the Anthropic tool_use/tool_result format.

## Token Usage

Real token usage is reported (not estimated), including:
- `input_tokens` / `output_tokens`
- `cache_read_input_tokens` / `cache_creation_input_tokens`

## References

- [Anthropic Extended Thinking Docs](https://platform.claude.com/docs/en/docs/build-with-claude/extended-thinking)
- [Anthropic Prompt Caching Docs](https://platform.claude.com/docs/en/docs/build-with-claude/prompt-caching)
