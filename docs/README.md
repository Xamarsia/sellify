<h1 align="center">
Documentation Index
</h1>

This folder contains operational documentation for the Sellify monorepo.

## Table of Contents

- [Current Documents](#current-documents)
- [Suggested Structure](#suggested-structure)

## Current Documents

- [Docker Guide](./docker.md) — local Dev Container setup, Docker usage, and CI image updates.
- [CI Guide](./ci.md) — current GitHub Actions workflow and CI extension guidance.
- [CD Guide](./cd.md) — current deployment setup through `docker-compose`.
- [Testing Guide](./testing.md) — E2E test execution and testing workflow.

## Suggested Structure

Current docs are functional, but this structure can scale better as the project grows:

- `docs/getting-started.md`
  - Environment setup
  - First run
  - Common troubleshooting
- `docs/architecture.md`
  - Monorepo layout
  - Services and package responsibilities
  - Dependency boundaries
- `docs/dev-workflow.md`
  - Local commands
  - Lint/type/test flow
  - Branch and PR checklist
- `docs/ci.md`
  - CI jobs and quality gates
- `docs/cd.md`
  - Release and deployment flow
- `docs/testing.md`
  - E2E, unit, integration strategy
