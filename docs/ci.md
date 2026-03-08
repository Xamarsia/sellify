<h1 align="center">
CI Guide
</h1>

This document describes the Continuous Integration (CI) setup for Sellify.

**Workflow location:** [`.github/workflows/`](https://github.com/Xamarsia/sellify/tree/main/.github/workflows/)

## Table of Contents

- [Overview](#overview)
- [How to Set Up New CI (Recommended Pattern)](#how-to-set-up-new-ci-recommended-pattern)
- [Mandatory Actions](#mandatory-actions)

## Overview

CI is configured with GitHub Actions. For more details, see [GitHub Actions documentation](https://docs.github.com/en/actions).

| Detail              | Value                                                                                                                                                                                                                |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Workflow file**   | [**ci.yaml**](https://github.com/Xamarsia/sellify/tree/main/.github/workflows/docs/ci.yaml)                                                                                                                          |
| **Container image** | [**xamarsia/sellify-ci**](https://hub.docker.com/r/xamarsia/sellify-ci) (see [Docker Guide — CI Docker Image](https://github.com/Xamarsia/sellify/blob/main/docs/docker.md#ci-docker-image) for update instructions) |
| **Trigger events**  | push, pull_request (opened, reopened, close)                                                                                                                                                                         |

**Current CI stages:**

1. `lint`
2. `check-types`
3. `e2e-tests`

## How to Set Up New CI (Recommended Pattern)

Use this as a baseline when extending CI:

1. Trigger on `push` and `pull_request` (opened / synchronize) and merge.
2. Use the [**xamarsia/sellify-ci**](https://hub.docker.com/r/xamarsia/sellify-ci) image.
3. Run checks in stages:
   - `lint`
   - `check-types`
   - `e2e-tests`
4. Keep this documentation updated.

## Mandatory Actions

- If you update the dev container [**Dockerfile**](https://github.com/Xamarsia/sellify/tree/main/.devcontainer/Dockerfile), update the CI image as well. See [Docker Guide — Updating the CI Image](https://github.com/Xamarsia/sellify/tree/main/docs/docker.md#updating-the-ci-image) for instructions.
- When adding new test suites, include them in the CI job sequence. See [Testing Guide — Adding New Test Suites](https://github.com/Xamarsia/sellify/tree/main/docs/testing.md#adding-new-test-suites) for guidelines.

## Useful References

- [GitHub Actions documentation](https://docs.github.com/en/actions)
