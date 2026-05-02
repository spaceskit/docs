# Work System Scheduler Templates

Status: draft templates for the Spaces scheduler. These are review-first jobs: they create artifacts/proposals and must not directly edit `~/Documents/brain`, `~/Documents/work/CHANGELOG.md`, or Desktop files.

## Dashboard Refresh

- Name: `Work System Dashboard Refresh`
- Schedule: daily, local morning
- Action: `space_prompt`
- Prompt contract:
  - Run the infra-pulse dashboard refresh command.
  - Capture generated timestamp, warnings, registry drift, Reminders availability, and dashboard URL.
  - Write a scheduler run artifact.
- Completion sink:
  - `workspaceArtifact`: dashboard refresh report
  - `observabilityEvent`: dashboard age and warnings
  - No brain/changelog writes

## Brain Review Digest

- Name: `Brain Review Digest`
- Schedule: weekly
- Action: `space_prompt`
- Prompt contract:
  - Inspect registry/spec/frontmatter metadata.
  - Propose missing or stale brain entries.
  - Do not read private document bodies or credentials.
- Completion sink:
  - `brainProposal`: markdown proposals in a review queue
  - `workspaceArtifact`: missing/stale brain report
  - Human approval required before writing brain files

## Changelog Digest

- Name: `Changelog Digest`
- Schedule: daily or weekday evening
- Action: `space_prompt`
- Prompt contract:
  - Parse structured changelog entries only.
  - Flag sensitive-looking entries by date/time/reason without copying the sensitive text.
  - Propose project activity summaries by slug.
- Completion sink:
  - `changelogProposal`: review-only digest proposal
  - `observabilityEvent`: sensitive-entry count and unstructured-entry count
  - Human approval required before changing `CHANGELOG.md`

## Required Runtime Follow-Up

Spaces currently supports scheduler jobs and `space_prompt`, but these templates need a deterministic completion sink layer after run finalization:

- `workspaceArtifact`
- `brainProposal`
- `changelogProposal`
- `observabilityEvent`

The scheduler database remains canonical; files and dashboards are projections.
