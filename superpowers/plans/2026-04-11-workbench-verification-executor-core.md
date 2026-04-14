# Workbench Verification Executor Core Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make external-gateway Workbench runs execute declared machine-readable verification commands in the allocated worktree and persist measurable evidence.

**Architecture:** Keep the first slice gateway-owned and additive. `WorkbenchService` will still own queue/run/artifact state, but command execution will move into a focused helper so the service does not absorb shell-process details. Verification suite JSON remains the persistence contract; additive suite fields carry exit code, duration, timestamps, and log artifact ids.

**Tech Stack:** Bun, TypeScript strict, SQLite-backed persistence, gateway-local Workbench protocol, external gateway E2E harness.

---

## File Structure

- Modify: `/Users/caruso/code/spaces/gateway/packages/server/src/protocol/workbench.ts`
  - Add `running` to `WorkbenchVerificationSuiteStatusPayload`.
  - Add optional evidence fields to `WorkbenchVerificationSuitePayload`: `startedAt`, `completedAt`, `exitCode`, `durationMs`, `logArtifactId`, `summary`.
- Modify: `/Users/caruso/code/spaces/client-ts/src/gateway-client.ts`
  - Mirror the additive Workbench verification status and suite fields.
- Modify: `/Users/caruso/code/spaces/client-swift/Sources/SpaceskitClient/Types.swift`
  - Mirror `running` and optional evidence fields in `WorkbenchVerificationSuite`.
- Create: `/Users/caruso/code/spaces/gateway/packages/bootstrap/src/services/workbench-verification-executor.ts`
  - Execute shell commands in a worktree with timeout and bounded log capture.
  - Return normalized command evidence without writing persistence directly.
- Modify: `/Users/caruso/code/spaces/gateway/packages/bootstrap/src/services/workbench-service.ts`
  - Wire the executor into `startRun` for autonomous runs and `approveStage` for supervised runs that enter `execute`.
  - Persist verification log artifacts and aggregate verification results.
  - Add a report-only docs preflight artifact.
- Modify: `/Users/caruso/code/spaces/gateway/packages/bootstrap/test/workbench-service.test.ts`
  - Add focused tests for passed and failed verification evidence.
- Modify: `/Users/caruso/code/spaces/gateway/packages/bootstrap/test/e2e/workbench.external.test.ts`
  - Add an external gateway lifecycle assertion proving a started autonomous run leaves `pending` and persists log evidence.

Do not add commits in this repo unless the user explicitly asks; this plan intentionally omits commit steps because `CLAUDE.md` forbids automatic commits.

---

### Task 1: Extend Workbench Verification Payloads

**Files:**
- Modify: `/Users/caruso/code/spaces/gateway/packages/server/src/protocol/workbench.ts`
- Modify: `/Users/caruso/code/spaces/client-ts/src/gateway-client.ts`
- Modify: `/Users/caruso/code/spaces/client-swift/Sources/SpaceskitClient/Types.swift`

- [ ] **Step 1: Update server protocol types**

In `/Users/caruso/code/spaces/gateway/packages/server/src/protocol/workbench.ts`, change:

```ts
export type WorkbenchVerificationSuiteStatusPayload = "pending" | "passed" | "failed" | "skipped";
```

to:

```ts
export type WorkbenchVerificationSuiteStatusPayload = "pending" | "running" | "passed" | "failed" | "skipped";
```

Then extend `WorkbenchVerificationSuitePayload`:

```ts
export interface WorkbenchVerificationSuitePayload {
  suiteId: string;
  name: string;
  command: string;
  status: WorkbenchVerificationSuiteStatusPayload;
  startedAt?: string;
  completedAt?: string;
  exitCode?: number;
  durationMs?: number;
  logArtifactId?: string;
  summary?: string;
}
```

- [ ] **Step 2: Mirror TS SDK types**

In `/Users/caruso/code/spaces/client-ts/src/gateway-client.ts`, update `WorkbenchVerificationSuiteStatus` and `WorkbenchVerificationSuite` with the same union/value fields.

- [ ] **Step 3: Mirror Swift SDK types**

In `/Users/caruso/code/spaces/client-swift/Sources/SpaceskitClient/Types.swift`, update:

```swift
public enum WorkbenchVerificationSuiteStatus: String, Codable, Sendable {
    case pending
    case running
    case passed
    case failed
    case skipped
}
```

Then extend `WorkbenchVerificationSuite`:

```swift
public struct WorkbenchVerificationSuite: Codable, Sendable {
    public let suiteId: String
    public let name: String
    public let command: String
    public let status: WorkbenchVerificationSuiteStatus
    public let startedAt: String?
    public let completedAt: String?
    public let exitCode: Int?
    public let durationMs: Int?
    public let logArtifactId: String?
    public let summary: String?
}
```

- [ ] **Step 4: Run fast type checks for type drift**

Run:

```bash
cd /Users/caruso/code/spaces/client-ts && bun run build
```

Expected: PASS.

Run:

```bash
cd /Users/caruso/code/spaces/client-swift && swift test
```

Expected: PASS.

---

### Task 2: Add The Verification Executor Helper

**Files:**
- Create: `/Users/caruso/code/spaces/gateway/packages/bootstrap/src/services/workbench-verification-executor.ts`

- [ ] **Step 1: Create evidence types and defaults**

Create `/Users/caruso/code/spaces/gateway/packages/bootstrap/src/services/workbench-verification-executor.ts`:

```ts
import { spawn } from "node:child_process";

const DEFAULT_TIMEOUT_MS = 10 * 60 * 1000;
const DEFAULT_MAX_LOG_BYTES = 512 * 1024;

export interface WorkbenchCommandEvidence {
  command: string;
  status: "passed" | "failed";
  exitCode: number | null;
  durationMs: number;
  startedAt: string;
  completedAt: string;
  stdout: string;
  stderr: string;
  timedOut: boolean;
  summary: string;
}

export interface RunWorkbenchCommandOptions {
  command: string;
  cwd: string;
  timeoutMs?: number;
  maxLogBytes?: number;
  now?: () => Date;
}
```

- [ ] **Step 2: Implement bounded shell execution**

Add:

```ts
export async function runWorkbenchCommand(
  options: RunWorkbenchCommandOptions,
): Promise<WorkbenchCommandEvidence> {
  const now = options.now ?? (() => new Date());
  const startedAtDate = now();
  const startedAt = startedAtDate.toISOString();
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const maxLogBytes = options.maxLogBytes ?? DEFAULT_MAX_LOG_BYTES;

  return await new Promise((resolve) => {
    const child = spawn(options.command, {
      cwd: options.cwd,
      shell: true,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";
    let timedOut = false;
    const startedMs = startedAtDate.getTime();

    const appendBounded = (current: string, chunk: Buffer): string => {
      const next = current + chunk.toString("utf8");
      return next.length > maxLogBytes ? next.slice(next.length - maxLogBytes) : next;
    };

    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGTERM");
    }, timeoutMs);

    child.stdout?.on("data", (chunk: Buffer) => {
      stdout = appendBounded(stdout, chunk);
    });
    child.stderr?.on("data", (chunk: Buffer) => {
      stderr = appendBounded(stderr, chunk);
    });

    child.on("close", (code) => {
      clearTimeout(timer);
      const completedAtDate = now();
      const exitCode = timedOut ? null : code;
      const status = exitCode === 0 && !timedOut ? "passed" : "failed";
      resolve({
        command: options.command,
        status,
        exitCode,
        durationMs: Math.max(0, completedAtDate.getTime() - startedMs),
        startedAt,
        completedAt: completedAtDate.toISOString(),
        stdout,
        stderr,
        timedOut,
        summary: timedOut
          ? `Command timed out after ${timeoutMs}ms.`
          : `Command exited with code ${code ?? "unknown"}.`,
      });
    });

    child.on("error", (error) => {
      clearTimeout(timer);
      const completedAtDate = now();
      resolve({
        command: options.command,
        status: "failed",
        exitCode: null,
        durationMs: Math.max(0, completedAtDate.getTime() - startedMs),
        startedAt,
        completedAt: completedAtDate.toISOString(),
        stdout,
        stderr,
        timedOut,
        summary: error.message,
      });
    });
  });
}
```

- [ ] **Step 3: Run bootstrap tests to catch import/build issues**

Run:

```bash
cd /Users/caruso/code/spaces/gateway && bun test ./packages/bootstrap/test/workbench-service.test.ts
```

Expected: PASS or existing tests unchanged; if TypeScript import errors occur, fix them before continuing.

---

### Task 3: Wire Executor Into WorkbenchService

**Files:**
- Modify: `/Users/caruso/code/spaces/gateway/packages/bootstrap/src/services/workbench-service.ts`

- [ ] **Step 1: Add imports and options**

Import `runWorkbenchCommand` and its evidence type:

```ts
import { runWorkbenchCommand, type WorkbenchCommandEvidence } from "./workbench-verification-executor.js";
```

Extend `WorkbenchServiceOptions`:

```ts
  verificationCommandTimeoutMs?: number;
  verificationExecutor?: typeof runWorkbenchCommand;
```

Add private fields:

```ts
  private readonly verificationCommandTimeoutMs: number;
  private readonly verificationExecutor: typeof runWorkbenchCommand;
```

Initialize them in the constructor:

```ts
    this.verificationCommandTimeoutMs = options.verificationCommandTimeoutMs ?? 10 * 60 * 1000;
    this.verificationExecutor = options.verificationExecutor ?? runWorkbenchCommand;
```

- [ ] **Step 2: Add execution entry point**

Add a private method:

```ts
  private async executeRunIfReady(runId: string): Promise<WorkbenchRunRow> {
    const run = this.requireRun(runId);
    if (run.current_stage !== "execute" || run.status === "cancelled") {
      return run;
    }

    const suites = parseJson<WorkbenchVerificationSuitePayload[]>(run.verification_suites_json) ?? [];
    const worktree = run.worktree_json ? parseJson<WorkbenchWorktreeRefPayload>(run.worktree_json) : null;
    if (!worktree || suites.length === 0) {
      return run;
    }

    this.options.runs.update(run.run_id, {
      status: "running",
      currentStage: "verify",
      verificationResultJson: JSON.stringify({
        status: "pending",
        summary: "Verification commands are running.",
      } satisfies WorkbenchVerificationResultPayload),
    });

    const nextSuites: WorkbenchVerificationSuitePayload[] = [];
    for (const suite of suites) {
      const runningSuite = {
        ...suite,
        status: "running" as const,
        startedAt: this.now().toISOString(),
      };
      nextSuites.push(runningSuite);
      this.options.runs.update(run.run_id, {
        verificationSuitesJson: JSON.stringify([...nextSuites, ...suites.slice(nextSuites.length)]),
      });

      const evidence = await this.verificationExecutor({
        command: suite.command,
        cwd: worktree.path,
        timeoutMs: this.verificationCommandTimeoutMs,
        now: this.now,
      });
      const logArtifactId = this.persistVerificationLog(run.run_id, suite, evidence);
      nextSuites[nextSuites.length - 1] = {
        ...runningSuite,
        status: evidence.status,
        completedAt: evidence.completedAt,
        exitCode: evidence.exitCode ?? undefined,
        durationMs: evidence.durationMs,
        logArtifactId,
        summary: evidence.summary,
      };
      this.options.runs.update(run.run_id, {
        verificationSuitesJson: JSON.stringify([...nextSuites, ...suites.slice(nextSuites.length)]),
      });
    }

    const failed = nextSuites.find((suite) => suite.status === "failed");
    const completedAt = this.now().toISOString();
    const finalStatus = failed ? "failed" : "completed";
    const updated = this.options.runs.update(run.run_id, {
      status: finalStatus,
      currentStage: "report",
      finishedAt: completedAt,
      lastErrorCode: failed ? "VERIFICATION_FAILED" : null,
      lastErrorMessage: failed ? `${failed.name} failed.` : null,
      verificationSuitesJson: JSON.stringify(nextSuites),
      verificationResultJson: JSON.stringify({
        status: failed ? "failed" : "passed",
        summary: failed ? `${failed.name} failed.` : "All verification commands passed.",
        completedAt,
      } satisfies WorkbenchVerificationResultPayload),
      landingResultJson: JSON.stringify({
        status: "blocked",
        summary: "Automatic landing is not enabled for this Workbench executor slice.",
        completedAt,
      } satisfies WorkbenchLandingResultPayload),
    });
    return updated ?? this.requireRun(run.run_id);
  }
```

- [ ] **Step 3: Add log artifact helper**

Add:

```ts
  private persistVerificationLog(
    runId: string,
    suite: WorkbenchVerificationSuitePayload,
    evidence: WorkbenchCommandEvidence,
  ): string {
    const artifactId = `wb-artifact-${randomUUID()}`;
    this.options.artifacts.create({
      artifactId,
      runId,
      kind: "verification_log",
      title: `${suite.name} Log`,
      contentType: "text/plain",
      contentText: [
        `$ ${evidence.command}`,
        ``,
        `status: ${evidence.status}`,
        `exitCode: ${evidence.exitCode ?? "null"}`,
        `durationMs: ${evidence.durationMs}`,
        `timedOut: ${evidence.timedOut}`,
        ``,
        `# stdout`,
        evidence.stdout || "(empty)",
        ``,
        `# stderr`,
        evidence.stderr || "(empty)",
      ].join("\n"),
    });
    return artifactId;
  }
```

- [ ] **Step 4: Invoke executor for autonomous start and approved supervised runs**

In `startRun`, after `persistRunArtifacts`, call:

```ts
    if (currentStage === "execute") {
      return this.toRunPayload(await this.executeRunIfReady(row.run_id));
    }
```

In `approveStage`, after updating the run to `execute`, call:

```ts
    return this.toRunPayload(await this.executeRunIfReady((updated ?? run).run_id));
```

Review-only supervised runs with no suites should keep existing behavior.

- [ ] **Step 5: Add report-only docs preflight artifact**

Add a helper that records a docs preflight artifact before command execution. Keep it non-blocking for this slice:

```ts
  private persistDocsPreflightArtifact(runId: string, worktreePath: string): void {
    const gatewayPackagePath = join(worktreePath, "gateway", "package.json");
    const docsScriptPath = join(worktreePath, "dev-services", "scripts", "generate-docs.ts");
    const status = existsSync(gatewayPackagePath) && existsSync(docsScriptPath) ? "available" : "not_available";
    this.options.artifacts.create({
      artifactId: `wb-artifact-${randomUUID()}`,
      runId,
      kind: "docs",
      title: "Docs Freshness Preflight",
      contentType: "text/markdown",
      contentText: [
        "# Docs Freshness Preflight",
        "",
        `- Status: \`${status}\``,
        "- Command: `cd gateway && bun run docs:check`",
        "- Blocking: `false`",
      ].join("\n"),
    });
  }
```

Call it from `executeRunIfReady` after resolving `worktree`.

- [ ] **Step 6: Run focused service test**

Run:

```bash
cd /Users/caruso/code/spaces/gateway && bun test ./packages/bootstrap/test/workbench-service.test.ts
```

Expected: PASS after tests are updated in the next task.

---

### Task 4: Add Service Tests

**Files:**
- Modify: `/Users/caruso/code/spaces/gateway/packages/bootstrap/test/workbench-service.test.ts`

- [ ] **Step 1: Add deterministic command fixtures**

Update the test harness task commands for the autonomous item to use commands available in the temporary fixture repo, for example:

```ts
verificationCommands: [
  "printf 'workbench-ok'",
  "test -f _planning/WHAT-TO-DO-NEXT.md",
],
```

For a new failing task, write:

```ts
writePlanningTask(repoRoot, "td-workbench-failing.md", {
  delegation: "autonomous",
  parallel: "independent",
  aiShippable: "yes",
  products: "gateway",
  verificationCommands: ["printf 'nope' >&2; exit 7"],
});
```

Add it to the fixture queue.

- [ ] **Step 2: Assert autonomous run success evidence**

Add a test:

```ts
test("executes machine-readable verification commands for autonomous runs", async () => {
  const { service } = createHarness();

  const run = await service.startRun({
    principalId: "principal-owner",
    queueItemId: "td-workbench-autonomous.md",
    executionMode: "autonomous",
  });

  expect(run.status).toBe("completed");
  expect(run.currentStage).toBe("report");
  expect(run.verificationResult?.status).toBe("passed");
  expect(run.verificationSuites.every((suite) => suite.status === "passed")).toBe(true);
  expect(run.verificationSuites.every((suite) => typeof suite.durationMs === "number")).toBe(true);
  expect(run.verificationSuites.every((suite) => suite.logArtifactId)).toBe(true);

  const artifacts = await service.listArtifacts({ runId: run.runId });
  expect(artifacts.some((artifact) => artifact.kind === "docs")).toBe(true);
  expect(artifacts.filter((artifact) => artifact.kind === "verification_log").length).toBe(run.verificationSuites.length);
  expect(artifacts.some((artifact) => artifact.contentText.includes("workbench-ok"))).toBe(true);
});
```

- [ ] **Step 3: Assert failing command evidence**

Add:

```ts
test("persists failing verification evidence", async () => {
  const { service } = createHarness();

  const run = await service.startRun({
    principalId: "principal-owner",
    queueItemId: "td-workbench-failing.md",
    executionMode: "autonomous",
  });

  expect(run.status).toBe("failed");
  expect(run.currentStage).toBe("report");
  expect(run.lastErrorCode).toBe("VERIFICATION_FAILED");
  expect(run.verificationResult?.status).toBe("failed");
  expect(run.verificationSuites[0]?.status).toBe("failed");
  expect(run.verificationSuites[0]?.exitCode).toBe(7);

  const artifacts = await service.listArtifacts({ runId: run.runId });
  expect(artifacts.some((artifact) => artifact.kind === "verification_log" && artifact.contentText.includes("nope"))).toBe(true);
});
```

- [ ] **Step 4: Preserve review-only behavior**

Confirm the existing review-only/autonomy tests still pass. If `approveStage` now calls the executor for no-suite runs, keep the previous observable state for review-only runs.

- [ ] **Step 5: Run focused tests**

Run:

```bash
cd /Users/caruso/code/spaces/gateway && bun test ./packages/bootstrap/test/workbench-service.test.ts
```

Expected: PASS.

---

### Task 5: Update External Workbench E2E

**Files:**
- Modify: `/Users/caruso/code/spaces/gateway/packages/bootstrap/test/e2e/workbench.external.test.ts`

- [ ] **Step 1: Change verified fixture commands to local deterministic commands**

Use commands that work inside the temporary planning repo worktree:

```ts
verificationCommands: [
  "printf 'verified-e2e'",
  "test -f _planning/WHAT-TO-DO-NEXT.md",
],
```

- [ ] **Step 2: Update autonomous run assertions**

After `autonomousVerifiedRun`, assert:

```ts
expect(autonomousVerifiedRun.status).toBe("completed");
expect(autonomousVerifiedRun.currentStage).toBe("report");
expect(autonomousVerifiedRun.verificationResult?.status).toBe("passed");
expect(autonomousVerifiedRun.verificationSuites.every((suite) => suite.status === "passed")).toBe(true);
expect(autonomousVerifiedRun.verificationSuites.every((suite) => suite.logArtifactId)).toBe(true);
```

- [ ] **Step 3: Assert persisted artifacts through real client**

Fetch artifacts:

```ts
const autonomousArtifacts = await client.listWorkbenchArtifacts({ runId: autonomousVerifiedRun.runId });
expect(autonomousArtifacts.some((artifact) => artifact.kind === "docs")).toBe(true);
expect(autonomousArtifacts.some((artifact) =>
  artifact.kind === "verification_log" && artifact.contentText.includes("verified-e2e"),
)).toBe(true);
```

- [ ] **Step 4: Run external E2E**

Run:

```bash
cd /Users/caruso/code/spaces/gateway && bun test ./packages/bootstrap/test/e2e/workbench.external.test.ts
```

Expected: PASS.

---

### Task 6: Full Verification

**Files:**
- Verify all modified packages.

- [ ] **Step 1: Gateway focused tests**

Run:

```bash
cd /Users/caruso/code/spaces/gateway && bun test ./packages/bootstrap/test/workbench-service.test.ts ./packages/bootstrap/test/e2e/workbench.external.test.ts
```

Expected: PASS.

- [ ] **Step 2: Router regression**

Run:

```bash
cd /Users/caruso/code/spaces/gateway && bun test ./packages/server/test/message-router.workbench.test.ts
```

Expected: PASS.

- [ ] **Step 3: Gateway typecheck**

Run:

```bash
cd /Users/caruso/code/spaces/gateway && bun run typecheck
```

Expected: PASS, unless blocked by the pre-existing `IR-76` fresh-checkout typecheck issue. If blocked by `IR-76`, record the exact failure and do not claim full typecheck success.

- [ ] **Step 4: TS SDK build**

Run:

```bash
cd /Users/caruso/code/spaces/client-ts && bun run build
```

Expected: PASS.

- [ ] **Step 5: Swift SDK tests**

Run:

```bash
cd /Users/caruso/code/spaces/client-swift && swift test
```

Expected: PASS.

- [ ] **Step 6: App compile smoke**

Run:

```bash
xcodebuild -project /Users/caruso/code/spaces/spaces-mac-ios/Spaces.xcodeproj -scheme SpacesmacOSWorkbench -configuration Debug -destination 'platform=macOS' build
```

Expected: PASS. This confirms Swift enum additions do not break the app Workbench board.

---

## Implementation Notes

1. Keep automatic landing out of scope. A completed autonomous run means verified and reviewable, not merged.
2. Keep docs preflight report-only in this slice. It should not fail the aggregate verification result until the docs seeding task defines the stricter contract.
3. Preserve current review-only behavior: supervised review-only tasks can be started and approved, but autonomous mode remains blocked.
4. Avoid adding a durable worker queue in this slice unless synchronous command execution causes test or runtime problems. If it does, stop and split a follow-up queue-worker task rather than hiding the issue.
