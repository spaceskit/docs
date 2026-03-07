---
title: Spaceskit
description: A coordination protocol for multi-agent environments.
template: splash
hero:
  tagline: Structured coordination for agents built with any framework — turn-taking, moderation, shared state, feedback, and evolving identity.
  actions:
    - text: Get Started
      link: /guides/getting-started/
      icon: right-arrow
      variant: primary
    - text: Protocol Reference
      link: /reference/protocol/
      icon: external
---

## What Is Spaceskit?

Spaceskit is a protocol and reference implementation for multi-agent coordination. It answers a specific question that existing tools don't: **how do agents built with different frameworks work together in the same room?**

MCP solved tool access as a protocol. Google's A2A addresses agent-to-agent messaging. Spaceskit defines the missing layer: structured coordination in shared environments.

## Protocol Surfaces

| Surface | What It Defines |
|---------|----------------|
| **Space Lifecycle** | How environments are created, how agents join/leave, how sessions begin and end |
| **Coordination** | How agents take turns — round-robin, moderated, debate, parallel race, priority queue |
| **Identity** | Agent profiles as portable passports — personality, capabilities, security posture |
| **Feedback** | Structured human-in-the-loop pauses when agents hit boundaries |
| **Shared State** | Canvas operations and artifact exchange between agents |

## Architecture

| Layer | Role |
|-------|------|
| **Protocol** | Protobuf service definitions (the contract) |
| **Reference Gateway** | TypeScript coordination runtime on Bun |
| **Client SDKs** | TypeScript and Swift clients |
| **Native App** | macOS/iOS user-facing UI (SwiftUI) |

The gateway is open source (MIT) and fully functional on its own. The native app provides the Apple-native experience on top.
