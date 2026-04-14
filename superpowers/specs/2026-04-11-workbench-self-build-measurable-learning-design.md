# Workbench Self-Build Measurable Learning Design

## Summary

Spaces should treat self-improvement as an evidence-backed Workbench loop, not as an unbounded self-modifying app mode. The external gateway remains the authority for planning queue ingestion, run state, worktree allocation, verification evidence, docs freshness, knowledge-base seeding, and learning artifacts. The Spaces app remains the operator surface for starting, reviewing, and understanding those runs.

The first milestone is not automatic merging. It is a measurable run pipeline where every claim has persisted evidence: execution space identity, worktree path, verification command exit codes, docs freshness status, knowledge entries attached, and generated insight counts.

## Current Baseline

1. `gateway/packages/bootstrap/src/services/workbench-service.ts` can list planning-backed queue items, create batches, allocate worktrees, persist run artifacts, enforce autonomy policy, and expose run/policy APIs to the app.
2. `gateway/workbench/runner-service.ts` and `gateway/workbench/analyst-service.ts` provide an older live harness with persisted reports, analyst sessions, and proposals, but it is separate from the app-facing `workbench.*` gateway service.
3. `gateway/packages/bootstrap/src/services/knowledge-base-service.ts` and `gateway/packages/bootstrap/src/seed/runtime-docs-knowledge-base.ts` already seed runtime docs into the global knowledge base.
4. `dev-services/scripts/generate-docs.ts` already owns generated docs extraction/rendering, exposed from the gateway package as `bun run docs:generate` and `bun run docs:check`.
5. US-52/US-73/US-74 already provide memory, experience, insight, and orchestration substrates, but they do not yet make Workbench self-build runs measurable end-to-end.

## Architecture

### Workbench Run Lifecycle

The external gateway Workbench service should add a real executor lane:

1. `startRun` still binds a run to a planning task and allocates a worktree.
2. If the run reaches `execute`, the executor runs machine-readable verification commands in the worktree and persists per-command evidence.
3. Docs preflight runs before the main verification sequence and records `fresh`, `drifted`, `failed`, or `not_available` in v1; a later explicit regeneration policy may add `regenerated`.
4. Verification results update `WorkbenchVerificationSuite` and `WorkbenchVerificationResult` instead of staying pending.
5. The run lands in `awaiting_review` for supervised mode and in a reviewable terminal state for autonomous mode unless a later explicit landing policy is enabled.

### Execution Space Attachment

The follow-up milestone attaches a run to a dedicated Workbench execution Space:

1. The gateway creates or reuses a Space named for the Workbench run.
2. The root turn includes the task doc, worktree path, verification commands, docs/knowledge context, and autonomy policy.
3. The run persists `executionSpaceId` and `executionRootTurnId` as evidence.
4. The app deep-links from Workbench run detail into the execution Space.

### Docs And Knowledge

Docs freshness should be part of the run contract:

1. The gateway runs `docs:check` as a preflight for self-build tasks that touch protocol, SDK, gateway configuration, or app-generated references.
2. When a later policy permits regeneration, the gateway runs `docs:generate` and records the changed generated files as an artifact.
3. Generated reference docs and key repo docs are seeded into the global knowledge base with tags such as `spaces`, `generated-docs`, `protocol`, `gateway`, `workbench`, and `app`.
4. Workbench run detail shows which knowledge entries were attached to the run.

### Learning And Safety

Learning remains review-gated:

1. Workbench runs may create experiences and proposed insights from run outcomes.
2. Applying personality/prompt/profile changes still requires the existing insight review path.
3. Autonomous runs must not silently merge or rewrite behavior just because they generated an insight.
4. A run is confidently measurable only when every required verification command has a persisted exit code and the docs preflight has a persisted status.

## Measurable Goals

1. `Execution`: every non-cancelled run has a worktree path, branch, and current stage.
2. `Verification`: every declared command has `pending`, `running`, `passed`, or `failed`, plus exit code, duration, and log artifact once executed.
3. `Docs`: every self-build run records docs freshness as `fresh`, `drifted`, `failed`, or `not_available`; `regenerated` is reserved for a later explicit regeneration policy.
4. `Knowledge`: every run reports the knowledge/doc entries attached to its execution context.
5. `Learning`: every run reports created experience/insight counts and leaves application of insights to the existing review UI.
6. `Autonomy confidence`: autonomous mode is allowed only for AI-shippable tasks with machine-readable verification and no parallel conflict; landing remains off until an explicit landing policy is added.

## Task Authoring Flow

New work should still begin in a Space or concierge intake flow. The promoted artifact is a planning task under `_planning/backlog/tasks/`, linked into `_planning/WHAT-TO-DO-NEXT.md`. Workbench then executes and reviews canonical planning tasks. Workbench should not become a second task-authoring backlog.

## First Implementation Slice

The first executable slice should be gateway-only and safe for autonomous execution:

1. Add a Workbench verification executor that runs declared commands in the allocated worktree.
2. Persist command status, exit code, duration, and logs into existing Workbench run/artifact state.
3. Add docs freshness preflight evidence without automatically rewriting docs in the first pass.
4. Extend the external Workbench E2E test to prove a started run leaves `pending` and becomes `passed` or `failed` with artifacts.

This makes started Workbench tasks do measurable work before the broader execution-space and landing loop is implemented.
