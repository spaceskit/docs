---
title: Gemini Thinking Config
description: Thinking level configuration for Gemini models via CLI and SDK.
---

## CLI Executor (Current)

Provider ID: `gemini` — Uses `gemini` CLI subprocess.

The gateway maps per-turn `effort` to Gemini CLI's `--thinking-level` flag:

| Gateway Effort | Gemini `--thinking-level` | Description |
|---------------|--------------------------|-------------|
| `low` | `minimal` | Minimal thinking |
| `medium` | `low` | Low latency, simple tasks |
| `high` | `medium` | Balanced reasoning |
| `max` | `high` | Maximum reasoning depth |

## SDK Integration (Future — Phase 4)

Provider ID: `gemini` (SDK) — Direct Gemini API via `@google/genai`.

### Gemini 3 Models

```json
{
  "thinking_config": {
    "thinking_level": "high",
    "include_thoughts": true
  }
}
```

Options: `minimal` | `low` | `medium` | `high`

### Gemini 2.5 Models

```json
{
  "thinking_config": {
    "thinking_budget": 8192
  }
}
```

- Range: 0 to 24,576
- `0`: Disables thinking
- `-1`: Dynamic thinking (default)

## References

- [Gemini Thinking Docs](https://ai.google.dev/gemini-api/docs/thinking)
- [Gemini CLI Docs](https://geminicli.com/docs/)
