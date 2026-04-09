---
title: OpenAI Responses API
description: Provider integration for OpenAI models via the Responses API with server-side session management.
---

## Provider ID

`openai-responses` — OpenAI Responses API via `openai` SDK.

Use `openai` (Chat Completions) for backward compatibility with other OpenAI-compatible providers.

## Configuration

| Field | Required | Description |
|-------|----------|-------------|
| `apiKey` | Yes | OpenAI API key (or `OPENAI_API_KEY` env var) |
| `model` | Yes | Model ID, e.g. `gpt-4.1`, `o3`, `o4-mini` |

## Server-Side Sessions

The Responses API chains turns via `previous_response_id`. The server stores conversation history, so subsequent turns only need to send new messages.

### How It Works

1. **First turn**: Full messages sent → response includes `response.id`
2. **Subsequent turns**: Only new messages + `previous_response_id` → server has the history
3. **Fallback**: If the response ID expires (404), falls back to sending full history

The `ProviderSessionHandle` is stored in turn metadata and passed to subsequent turns automatically.

## Reasoning Effort (o-series)

For o-series models (`o1`, `o3`, `o4-mini`), the gateway maps `effort` to OpenAI's native `reasoning` parameter:

| Gateway Effort | OpenAI `reasoning.effort` |
|---------------|--------------------------|
| `low` | `low` |
| `medium` | `medium` |
| `high` | `high` |
| `max` | `high` |

### API Parameter

```json
{
  "reasoning": {
    "effort": "high"
  }
}
```

Non-o-series models (GPT-4.1, etc.) ignore the effort parameter.

## Native Function Calling

Tools are sent as Responses API function tools with `strict: false`.

## Token Usage

Real usage reported including:
- `input_tokens` / `output_tokens`
- `input_tokens_details.cached_tokens`
- `output_tokens_details.reasoning_tokens`

## References

- [OpenAI Responses API](https://platform.openai.com/docs/api-reference/responses)
- [OpenAI Reasoning Models](https://platform.openai.com/docs/guides/reasoning)
