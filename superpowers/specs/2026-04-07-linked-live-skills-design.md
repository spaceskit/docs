# Linked Live Skills Design

Date: 2026-04-07
Status: Proposed
Scope: `gateway`, `spaces-mac-ios`, `client-swift`

## Summary

Spaces should support live-linked local skills from the Mac host, not only app-provided or gateway-installed skills. Operators should be able to attach those skills to:

- agent definitions as shared default skills
- spaces as additional space-scoped skills

The system should automatically pick up local skill file changes on next use, while keeping library and picker UIs fast even with 100+ local skills.

## Problem

Current behavior has two gaps:

1. The app can mainly attach gateway-installed skills, while many local Mac skills exist under `~/.agents/skills` and `~/.codex/skills`.
2. Skill/library screens are slow because list requests rebuild scanned entries by walking the filesystem and reparsing `SKILL.md` files on demand, and the app then performs another full filter/sort pass in heavy SwiftUI list structures.

## Goals

- Expose local Mac skills as first-class selectable entries in the app.
- Support live linking so file edits are reflected automatically on next use.
- Allow attachment at both agent-definition and space scope.
- Keep list rendering and search fast.
- Preserve backward compatibility for existing `skillIds` on spaces and agent definitions.

## Non-Goals

- Changing the existing meaning of installed gateway skills.
- Replacing the current `skillIds` model on spaces or agent definitions.
- Introducing a separate per-assignment skill binding model in this phase.
- Building remote sync for skills across machines.

## Recommended Approach

Use an indexed live-link catalog in the gateway.

The gateway maintains a persistent index of linked skills discovered from:

- `~/.agents/skills`
- `~/.codex/skills`
- workspace-declared skill paths discovered from `AGENTS.md`

The app reads from that index instead of triggering filesystem walks on every list request.

## Core Model

Keep current attachment semantics unchanged:

- agent definitions keep `defaultSkillIds`
- spaces keep `skillIds`

Add a first-class linked skill source in the library/catalog model.

Each linked entry stores:

- `entryId`
- `skillId`
- `sourceKind = linked`
- `sourcePath`
- parsed metadata: `name`, `description`, `tags`
- cached content: `contentMarkdown`
- file state: `mtime`, `size`, `contentHash`
- sync state: `ready`, `missing`, `parse_error`
- timestamps

This keeps app-side references stable while letting the gateway resolve live-linked content from disk.

## Runtime Resolution

Effective skill resolution remains additive:

1. agent-definition default skills
2. space-level skills
3. connector/runtime-added skills already handled elsewhere

At runtime, a `skillId` may resolve from either:

- installed/system catalog content
- linked skill catalog content

When a linked entry is requested, the gateway checks whether the backing file changed. If stale, it refreshes that single entry before injecting the skill into the runtime prompt. This gives auto-refresh on next use without requiring a full rescan.

If refresh fails:

- `missing`: keep the binding, mark the entry missing, skip content injection, and surface unresolved skill diagnostics
- `parse_error`: keep last known good metadata/content when available, mark error state, and skip replacing good cached content with bad content

## Gateway Changes

### Persistence

Add a normalized repository/table for linked skill index entries. The installed catalog remains separate.

Suggested columns:

- `entry_id`
- `skill_id`
- `source_kind`
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

### Library Service

`library.list_entries` should read from indexed storage only.

It should:

- merge installed, system, verified, and linked rows
- filter server-side by query/source/status/tags
- return lightweight metadata by default
- only include full markdown when `includeContent = true`

`library.scan_entries` becomes a sync trigger, not the source of truth. It should:

- scan configured roots
- insert or update linked entries
- mark disappeared files as `missing`
- return sync summary data

`library.get_entry` should return a single indexed row quickly, with optional full markdown.

### Identity and Prompt Assembly

Update active skill lookup so `getActiveSkillMarkdownMap()` can resolve both installed and linked skills.

Compiled prompt previews and runtime prompt assembly should both use the same resolution path so UI preview and actual execution stay coherent.

## Client/API Shape

### Source of Truth

Canonical source of truth for skill discovery and attachable rows is the gateway library API, backed by the indexed catalog.

The app should not derive its own skill catalog by reading the local filesystem directly.

### API Expectations

Existing list/get/scan APIs can be extended additively:

- add `linked` as a `LibrarySourceKind`
- optionally include sync state fields on `LibraryEntry`
- keep `includeContent = false` as the default list path

No change is required to space or identity attachment payloads if linked entries get stable `skillId` values.

## App UX

### Agent Definitions

Replace the agent-definition CSV field for default skills with the same searchable structured multi-select used elsewhere.

This picker should allow selecting:

- installed skills
- system skills
- verified skills
- linked skills

### Spaces

The space editor continues attaching skills via `space.skillIds`, but the picker should show linked skills directly from the indexed catalog.

### Slash Menu

The slash menu should stop loading only gateway-installed skills and instead use the same attachable library source so linked skills can be attached to:

- the current space
- the current main agent definition

### Status Badges

Linked skills should show clear state badges:

- `Linked`
- `Missing`
- `Error`

## Performance Plan

### Gateway

- Stop walking the filesystem during `library.list_entries`.
- Use persisted index rows for all list views.
- Refresh one stale linked entry on demand rather than rescanning everything.

### App

- Load metadata-only rows for list screens.
- Fetch full markdown only for view/edit detail.
- Reuse a shared lightweight skill catalog store/view model.
- Precompute normalized search text where useful.
- Debounce search input.
- Prefer a scroll-based, lighter list presentation for large skill views instead of large `Form`-embedded row sets when rendering many entries.

## Compatibility

This design is additive:

- existing spaces keep working with current `skillIds`
- existing agent definitions keep working with current `defaultSkillIds`
- installed skills remain unchanged

Missing linked files do not invalidate saved space or agent configuration.

## Rollout

Use a feature flag for the new linked-skill surfaces:

- Gateway flag: enable linked skill indexing and `linked` source exposure
- App flag: enable structured linked-skill pickers in agent definitions and space editors

Suggested rollout order:

1. gateway index and API support
2. app library UI reads indexed linked entries
3. app pickers for spaces and agent definitions
4. slash-menu attachment flow

## Success Criteria

- Local linked skills appear in library and picker UIs without manual import.
- Editing a linked `SKILL.md` changes effective runtime content on next use.
- Space and agent-definition attachment both work with linked skills.
- Skill/library screens open and filter quickly with 100+ local skills.

## Testing

### Gateway

- index scan discovers linked skills from all configured roots
- rescans update changed files
- disappeared files become `missing`
- `library.list_entries` returns indexed linked entries without filesystem walking
- prompt compilation resolves installed and linked skills consistently
- stale linked entries refresh on next use

### App

- linked skills render in library and picker UIs
- agent-definition skill selection uses structured multi-select, not CSV
- linked state badges render correctly
- large skill lists remain responsive during search and scrolling

## Open Implementation Notes

- `skillId` generation for linked files should be stable across rescans; path-derived IDs are acceptable if normalized carefully.
- Workspace-declared skill discovery from `AGENTS.md` should remain additive to global roots.
- If future portability is needed, a later phase can add export/import from linked to installed without changing this model.
