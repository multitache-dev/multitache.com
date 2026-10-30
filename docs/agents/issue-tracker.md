# Issue tracker: GitHub

Issues and specs for this repository live in GitHub Issues. Use the `gh` CLI for all operations.

## Conventions

- Create an issue with `gh issue create --title "..." --body "..."`.
- Read an issue with `gh issue view <number> --json number,title,body,labels,comments`.
- List issues with `gh issue list --state open --json number,title,body,labels,comments`, adding appropriate `--label` and `--state` filters.
- Comment with `gh issue comment <number> --body "..."`.
- Apply or remove labels with `gh issue edit <number> --add-label "..."` or `--remove-label "..."`
- Close an issue after commenting the resolution with `gh issue close <number>`.

Use GitHub's native sub-issues and issue dependencies when available:

- Make a child issue with `gh issue create --parent <parent> ...`.
- Add a blocker with `gh issue edit <child> --add-blocked-by <blocker>`.
- A ticket is startable when every blocker is closed.
- If native dependencies are unavailable, write `Blocked by: #<n>` at the top of the issue body.

Infer the repository from the GitHub remote. File issues only in `multitache-dev/multitache.com`.

## Pull requests as a triage surface

**PRs as a request surface: no.** Pull requests are not included in the triage queue by default. Change this flag only if the repository adopts external pull requests as feature requests.

When a skill explicitly works with pull requests, use the matching `gh pr` commands to view, comment, label, or close them. GitHub shares one number space across issues and pull requests, so resolve ambiguous references with both `gh pr view <number>` and `gh issue view <number>`.

## Wayfinding

The `/wayfinder` skill may use a map issue labelled `wayfinder:map`, with child issues labelled `wayfinder:research`, `wayfinder:prototype`, `wayfinder:grilling`, or `wayfinder:task`. Use native sub-issues and dependencies where supported.
