# Linked Live Skills Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add live-linked local skills that can be attached to agent definitions and spaces, and make gateway/app skill lists fast by serving a persistent indexed catalog instead of rescanning the filesystem on every request.

**Architecture:** Extend the gateway library model with a persistent linked-skill index keyed by source path and stable skill ID, then resolve linked content through the same runtime skill path as installed skills. Keep the existing space and agent-definition `skillIds` contracts, add additive library payload metadata, and update the app to use indexed lightweight rows plus structured selection instead of CSV or repeated full-list filtering.

**Tech Stack:** Bun, TypeScript strict, SQLite WAL, Swift, SwiftUI, client-swift handwritten protocol/client layer

---

### Task 1: Gateway linked-skill persistence and scan index

**Files:**
- Create: `gateway/packages/persistence/src/repositories/gateway-linked-skill-index.ts`
- Modify: `gateway/packages/persistence/src/schema.ts`
- Modify: `gateway/packages/persistence/src/index.ts`
- Modify: `gateway/packages/bootstrap/src/persistence-phase.ts`
- Test: `gateway/packages/persistence/test/gateway-linked-skill-index.test.ts`

- [ ] **Step 1: Write the failing persistence tests**

Add tests covering:
- upsert and list linked entries by `source_path`
- mark entries `missing`
- update file metadata and cached markdown without changing stable `skill_id`

- [ ] **Step 2: Run test to verify it fails**

Run: `cd /Users/caruso/code/spaces/gateway && bun test packages/persistence/test/gateway-linked-skill-index.test.ts`
Expected: FAIL because the repository/table does not exist yet

- [ ] **Step 3: Write minimal persistence implementation**

Add a migration-backed table and repository for linked skill index rows with:
- `entry_id`
- `skill_id`
- `source_path`
- `name`
- `description`
- `tags_json`
- `content_markdown`
- `sync_state`
- `file_mtime_ms`
- `file_size`
- `content_hash`
- `created_at`
- `updated_at`

- [ ] **Step 4: Run test to verify it passes**

Run: `cd /Users/caruso/code/spaces/gateway && bun test packages/persistence/test/gateway-linked-skill-index.test.ts`
Expected: PASS

### Task 2: Gateway library service indexed linked skills and runtime refresh

**Files:**
- Modify: `gateway/packages/bootstrap/src/services/gateway-library-service.ts`
- Modify: `gateway/packages/bootstrap/src/services/internal-payload-types.ts`
- Modify: `gateway/packages/bootstrap/src/policy-runtime-phase.ts`
- Modify: `gateway/packages/bootstrap/src/services/gateway-identity-service.ts`
- Modify: `gateway/packages/server/src/handlers/gateway-governance-handlers.ts`
- Modify: `gateway/packages/bootstrap/src/runtime-prompt-helpers.ts`
- Test: `gateway/packages/bootstrap/test/gateway-library-service.test.ts`

- [ ] **Step 1: Write the failing library/runtime tests**

Cover:
- startup/manual sync indexes linked skills from temp roots
- `library.list_entries` returns `linked` entries from indexed storage
- changed files refresh on next use through `getActiveSkillMarkdownMap()`
- deleted files become `missing` and do not inject stale unresolved content

- [ ] **Step 2: Run test to verify it fails**

Run: `cd /Users/caruso/code/spaces/gateway && bun test packages/bootstrap/test/gateway-library-service.test.ts`
Expected: FAIL because linked indexing and `linked` payload support do not exist yet

- [ ] **Step 3: Implement the minimal linked library flow**

Implement:
- additive `linked` source kind
- additive sync-state metadata on library entries
- indexed list/get behavior with no request-time directory walk
- `library.scan_entries` as an index refresh trigger
- runtime stale-check refresh for linked skills on next use

- [ ] **Step 4: Run focused tests**

Run: `cd /Users/caruso/code/spaces/gateway && bun test packages/bootstrap/test/gateway-library-service.test.ts packages/bootstrap/test/gateway-skill-catalog-service.test.ts`
Expected: PASS

- [ ] **Step 5: Run typecheck/build for the gateway slice**

Run:
- `cd /Users/caruso/code/spaces/gateway && bun run typecheck`
- `cd /Users/caruso/code/spaces/gateway && bun run build`
Expected: PASS

### Task 3: Client contract additions for linked library entries

**Files:**
- Modify: `client-swift/Sources/SpaceskitClient/Types.swift`
- Modify: `client-swift/Sources/SpaceskitClient/Protocol.swift`
- Modify: `client-swift/Sources/SpaceskitClient/GatewayClient.swift`
- Test: `client-swift/Tests/SpaceskitClientTests`

- [ ] **Step 1: Write or extend failing client decoding coverage**

Add fixture-backed or inline decoding coverage for:
- `LibrarySourceKind.linked`
- linked-entry sync state decoding

- [ ] **Step 2: Run test to verify it fails**

Run: `swift test --package-path /Users/caruso/code/spaces/client-swift`
Expected: FAIL on unknown enum/value or missing payload fields coverage

- [ ] **Step 3: Implement additive client contract support**

Add:
- `linked` source kind
- additive sync-state field(s)
- no transport breaking changes

- [ ] **Step 4: Run test to verify it passes**

Run: `swift test --package-path /Users/caruso/code/spaces/client-swift`
Expected: PASS

### Task 4: App fast skill surfaces and structured activation

**Files:**
- Modify: `spaces-mac-ios/Sources/Shared/GatewayCompatibility.swift`
- Modify: `spaces-mac-ios/Sources/Shared/GatewayDetailView.swift`
- Modify: `spaces-mac-ios/Sources/Shared/GatewayDetailEditorCompatibility.swift`
- Modify: `spaces-mac-ios/Sources/Shared/InspectorCompatibility.swift`
- Modify: `spaces-mac-ios/Sources/Shared/Chat/ChatChromeSupport.swift`
- Modify: `spaces-mac-ios/Sources/Shared/ChatView.swift`
- Test: `spaces-mac-ios/Tests/macOS/AppStateMainSpaceRoutingTests.swift`

- [ ] **Step 1: Write failing UI-support tests around the new selection model**

Target pure/support logic where possible:
- linked skills appear as selectable options
- linked/missing/error badges resolve correctly
- structured agent-definition skill selection replaces raw CSV parsing for the updated surface logic

- [ ] **Step 2: Run focused tests to verify failure**

Run: `xcodebuild test -project /Users/caruso/code/spaces/spaces-mac-ios/Spaces.xcodeproj -scheme SpacesmacOS -destination 'platform=macOS' -only-testing:SpacesmacOSTests/AppStateMainSpaceRoutingTests CODE_SIGNING_ALLOWED=NO`
Expected: FAIL or require new assertions before implementation

- [ ] **Step 3: Implement app changes minimally**

Implement:
- `linked` source filter/badge support
- library list loads lightweight linked metadata only
- slash menu sources attachable skills from library entries, not `gatewaySkillList`
- agent-definition editor uses structured linked-skill selection instead of CSV
- space skill picker resolves linked entries directly by `skillId`

- [ ] **Step 4: Run focused app verification**

Run:
- `xcodebuild test -project /Users/caruso/code/spaces/spaces-mac-ios/Spaces.xcodeproj -scheme SpacesmacOS -destination 'platform=macOS' -only-testing:SpacesmacOSTests/AppStateMainSpaceRoutingTests CODE_SIGNING_ALLOWED=NO`
- `xcodebuild -project /Users/caruso/code/spaces/spaces-mac-ios/Spaces.xcodeproj -scheme SpacesmacOS -destination 'platform=macOS' build CODE_SIGNING_ALLOWED=NO`
Expected: PASS

### Task 5: Planning and closeout verification

**Files:**
- Modify: `_planning/WHAT-TO-DO-NEXT.md`
- Modify: `_planning/backlog/tasks/us59-gateway-identity-library-hard-cut.md`
- Modify: `_planning/backlog/issues-and-risks.md` (if risk wording changes)
- Modify: `_planning/backlog/story-task-map.md` (only if ownership changes)

- [ ] **Step 1: Update planning docs before or alongside code**

Record this slice under active `US-59` with explicit linked-skill/index performance ownership.

- [ ] **Step 2: Run final machine-readable verification**

Run:
- `cd /Users/caruso/code/spaces/gateway && bun test packages/persistence/test/gateway-linked-skill-index.test.ts packages/bootstrap/test/gateway-library-service.test.ts packages/bootstrap/test/gateway-skill-catalog-service.test.ts`
- `cd /Users/caruso/code/spaces/gateway && bun run typecheck`
- `cd /Users/caruso/code/spaces/gateway && bun run build`
- `swift test --package-path /Users/caruso/code/spaces/client-swift`
- `xcodebuild -project /Users/caruso/code/spaces/spaces-mac-ios/Spaces.xcodeproj -scheme SpacesmacOS -destination 'platform=macOS' build CODE_SIGNING_ALLOWED=NO`

Expected: all exit 0

- [ ] **Step 3: Manual acceptance**

Verify on a live gateway/app session:
- linked skills show up in Library
- a linked skill can be attached to a space
- a linked skill can be attached to an agent definition
- editing the source `SKILL.md` is reflected on the next use

