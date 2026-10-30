---
name: setup-pre-commit
description: Set up Lefthook pre-commit and pre-push checks using the repository's existing formatter and linter. Use when the user wants commit-time formatting, staged-file linting, or Git quality hooks.
---

# Setup Lefthook Quality Hooks

## Repository policy

- Use the package manager indicated by the lockfile. Prefer `pnpm` when `pnpm-lock.yaml` exists.
- Reuse the repository's configured formatter and linter. Do not introduce Prettier when Oxfmt is already configured.
- Use Lefthook's `{staged_files}` in pre-commit commands for staged-file behavior. Do not add `lint-staged` unless Lefthook cannot express the required workflow.
- Keep pre-commit checks fast and scoped to staged source files. Put full-project checks in pre-push.
- Add typecheck or test commands only when matching scripts already exist, or when the user explicitly requests them.

## Steps

### 1. Detect package manager

Check for `pnpm-lock.yaml`, `package-lock.json`, `yarn.lock`, or `bun.lockb`. Use the matching package manager, preferring pnpm when multiple lockfiles exist. Confirm the available scripts and existing lint/format configuration before changing files.

Completion criterion: the package manager, formatter, linter, and available validation scripts are known.

### 2. Install Lefthook

```
pnpm add --save-dev lefthook
```

Adapt the command to the detected package manager. Do not install Husky, Prettier, or lint-staged when Lefthook and the repository's existing tools cover the workflow.

Completion criterion: Lefthook is present in `devDependencies` and the lockfile is updated.

### 3. Configure Lefthook

Create `lefthook.yml` with staged source checks and full pre-push checks. Adapt the file extensions and commands to the repository:

```yaml
pre-commit:
  commands:
    format:
      glob: "*.{ts,tsx,js,jsx,mjs,cjs}"
      run: pnpm exec oxfmt {staged_files}
      stage_fixed: true
    lint:
      glob: "*.{ts,tsx,js,jsx,mjs,cjs}"
      run: pnpm exec oxlint {staged_files}

pre-push:
  commands:
    lint:
      run: pnpm lint
    format:
      run: pnpm format --check
```

Use `stage_fixed: true` for formatters that modify files. Keep lint after formatting so it checks the formatted staged content.

Add a package `prepare` script that installs the hooks for contributors:

```json
{
  "scripts": {
    "prepare": "lefthook install"
  }
}
```

Preserve existing `prepare` behavior by composing commands rather than replacing it.

Completion criterion: `lefthook.yml` uses staged files for pre-commit and full-project scripts for pre-push, and installation is wired through `prepare`.

### 4. Install and verify hooks

Run:

```bash
pnpm prepare
pnpm exec lefthook dump
pnpm exec lefthook run pre-commit --force
pnpm exec lefthook run pre-push --force
```

If the repository has no staged files, a normal pre-commit run may skip commands; use `--force` for a configuration smoke test. Verify that:

- Lefthook installs both required Git hooks.
- The dumped configuration contains staged-file format and lint commands.
- Formatting passes and any fixes are staged automatically.
- Full lint and format checks pass on pre-push.

Completion criterion: both hooks execute successfully with the repository's actual commands.

Do not create a commit automatically. Report the files changed and the verification results.
