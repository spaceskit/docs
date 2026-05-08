# Concierge — Sidebar Integration Design

## Context / Why

Today the Concierge is rendered as a custom "premium glass" floating overlay (`ConciergePremiumSurface`) on top of the app, with 8 layers of animated halo, custom shadow, and a self-contained look that's disconnected from the rest of the app chrome. It's invoked from three fragmented entry points (home card on Overview, FAB inside spaces, voice call button) and presented inside an invisible system sheet whose content is the bespoke glass card.

The result is a "pseudo-modal" that doesn't feel like part of the app — wrong placement, wrong styling, wrong shape, wrong invocation model. The user characterized the current state as "wrong everything: placement, effects, rendering, invocation."

Concierge's role is the **global dispatcher / orchestrator** — a layer above all spaces that's always available and routes work to the right space and tools. The redesign moves it from a floating overlay to a **persistent cell at the bottom of the main left sidebar**, treating it as the always-available global layer without taking visual ownership of the screen.

## Decisions made (locked)

1. **Concierge is a global layer above all spaces** (not per-space, not "just another agent")
2. **Single conversation thread** that follows the user across all spaces; destination chips on assistant turns show where work was dispatched (e.g., `▸ Travel`, `▸ Calendar`)
3. **Lives at the bottom of the main left sidebar** — vertical split with spaces above
4. **Auto-resize on focus** — clicking the input expands the cell upward; clicking out / Esc collapses
5. **Voice call stays compact** — never auto-grows the cell; small by design so it doesn't push the spaces list
6. **Collapsed sidebar → temporary slide-out panel** triggered by an edge FAB

## The system

### Sidebar layout (vertical split)

- **Top**: Spaces list (existing)
- **Bottom**: Concierge cell (new — replaces the overlay surface)

### Three states for the Concierge cell

**1. Idle (compact)**
- Fixed height (~80–100pt)
- Avatar, name "Concierge", one-line input "Ask anything…", microphone icon
- Spaces list above takes the remaining sidebar height

**2. Thread (expanded)**
- Triggered by focusing the input (auto-resize)
- Cell grows upward to a comfortable thread height; spaces list compresses (scrollable)
- Thread shows the full single conversation; destination chips inline on assistant turns
- Click outside or press Esc → collapses back to idle
- Explicit ⤢ button for full-sidebar takeover (hides spaces list temporarily)

**3. Voice call (compact, always)**
- Cell stays at idle height; transforms in place
- Red dot, "Concierge · Live", call timer, mini waveform, transcript snippet, End button
- ⤢ button to pop a larger call view if desired
- **Never auto-grows** — voice never blocks the spaces list

### Collapsed sidebar behavior

- When the main sidebar is collapsed, a Concierge FAB appears at the left edge
- Tapping it opens a **temporary slide-out panel** from the left edge, roughly a sidebar's width, containing the Concierge cell in expanded thread state
- Tap outside / Esc to dismiss; sidebar stays collapsed
- The panel uses native chrome — no premium glass surface

## Components

### What goes away

- `ConciergePremiumSurface` (all 8 halo layers, animated metal rendering, custom drop shadow, custom corner radii) — **delete**
- `ConciergeOverlayView` and the floating overlay presentation — **delete**
- `ConciergeFloatingButton` — replaced by the simpler collapsed-sidebar FAB
- `ConciergeHomeCard` on the Overview/Scratchpad — redundant given the persistent sidebar cell — **delete**
- `.sheet(item: conciergeSheetBinding)` on macOS and the iOS bottom sheet detents — **remove**
- `ConciergeSurfaceTheme.swift`, `ConciergeSurfaceVisualState.swift` — **delete or radically simplify** to native chrome only

### What stays

- `ConciergeController` — singleton, session state, turn execution, voice coordinator integration (unchanged)
- Backend turn API, event subscription, runtime bootstrap repair logic (unchanged)
- `GatewayConciergeTab` — settings tab (unchanged)
- `ConciergeCallSupport` — voice infrastructure (unchanged, just rendered into the sidebar cell instead of the overlay)

### Files to modify

- [SidebarView.swift](spaces-mac-ios/Sources/Shared/SidebarView.swift) — add Concierge cell to the bottom; introduce vertical layout split with auto-resize on focus
- [ContentView.swift:372](spaces-mac-ios/Sources/Shared/ContentView.swift) — remove sheet bindings (macOS lines 372–376, iOS lines 607–608); add slide-out panel for collapsed-sidebar case
- [ConciergeCompatibility.swift:1088](spaces-mac-ios/Sources/Shared/ConciergeCompatibility.swift) — extract a new `ConciergeSidebarCell` view replacing `ConciergeConversationSurface` (lines 1088–1521) as the primary rendering; keep controller logic (lines 171–939) intact
- [SpaceBoardView.swift:94](spaces-mac-ios/Sources/Shared/SpaceBoardView.swift) — remove `ConciergeHomeCard` placement (lines 35, 94–95)
- [ChatView.swift](spaces-mac-ios/Sources/Shared/ChatView.swift) and [ChatInspectorSelection.swift](spaces-mac-ios/Sources/Shared/ChatInspectorSelection.swift) — verify no Concierge entry points there to clean up

### Files to delete

- [ConciergePremiumSurface.swift](spaces-mac-ios/Sources/Shared/ConciergePremiumSurface.swift)
- [ConciergeSurfaceTheme.swift](spaces-mac-ios/Sources/Shared/ConciergeSurfaceTheme.swift)
- [ConciergeSurfaceVisualState.swift](spaces-mac-ios/Sources/Shared/ConciergeSurfaceVisualState.swift)

## Verification

End-to-end checks:

1. Open the app; the sidebar shows the spaces list above and a compact Concierge cell pinned at the bottom.
2. Click into the Concierge input → cell expands smoothly; spaces list compresses; you can scroll spaces independently. Type a message; watch a turn stream into the thread with destination chips on assistant replies.
3. Click outside / Esc → cell collapses back to idle.
4. Start a voice call → cell shows the live call layout, stays compact. Navigate to a different Space; the cell is still showing the live call and the rest of the canvas updates normally.
5. Collapse the sidebar → Concierge FAB appears at the left edge. Click it; a temporary slide-out panel opens with the expanded thread. Click outside / Esc → it dismisses; the sidebar stays collapsed.
6. Confirm the Overview/Scratchpad no longer renders the home card.
7. Confirm `ConciergePremiumSurface` is gone (no animated halos in the build, no usages of those types).
8. `cd gateway && bun test` passes (0 fail).
9. `cd gateway && bun run typecheck` is clean.
10. `xcodebuild test` passes for the Spaces project.

## Out of scope

- Changes to the orchestrator agent's backend behavior (routing logic, tool selection, agent assignment)
- Per-space chat surface changes (resolved separately: Concierge is the global layer; per-space chat untouched here)
- Onboarding / discovery for the new sidebar surface (worth a follow-up; not part of this redesign)
- Migration of existing Concierge conversation history (assumed to be preserved transparently via `ConciergeController`'s existing session state)

## Visual references

Mockups produced during the brainstorm session are saved at:
- `.superpowers/brainstorm/18700-1777751039/content/sidebar-concierge.html` — the three sidebar states (idle, thread, voice)
- `.superpowers/brainstorm/18700-1777751039/content/system-overview.html` — earlier exploration with the global-dock direction (superseded but useful for context on the call-pill pattern)
