<h1 align="center">
CD Guide
</h1>

This document describes the Continuous Delivery / Deployment (CD) setup for Sellify.

For CI configuration, see [CI Guide](https://github.com/Xamarsia/sellify/tree/main/docs/ci.md). For Docker image management, see [Docker Guide](./docker.md).

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Production](#production)
  - [Service Dockerfiles](#service-dockerfiles)
- [Git Hooks](#git-hooks)
  - [Hook Stages](#hook-stages)
  - [Running Hooks](#running-hooks)
  - [Editing Hooks](#editing-hooks)
- [Commands](#commands)
  - [Production Commands](#production-commands)
  - [Git Hooks Commands](#git-hooks-commands)
- [Mandatory Actions](#mandatory-actions)
- [Useful References](#useful-references)

<!-- TODO: Add deployment pipeline details here later -->

## Overview

CD is configured with Git Hooks. For more details, see [CD Guide — Git Hooks](https://github.com/Xamarsia/sellify/tree/main/docs/ci.md#git-hooks).

Production containers are built from Dockerfiles located inside each service directory under [**services/**](https://github.com/Xamarsia/sellify/tree/main/services) folder. The root [**docker-compose.yml**](https://github.com/Xamarsia/sellify/tree/main/docker-compose.yml) orchestrates all services for production deployment.

## Prerequisites

- Docker or Podman

## Production

The production [**docker-compose.yml**](https://github.com/Xamarsia/sellify/tree/main/docker-compose.yml) is located in the repository root. It uses the Dockerfiles from the individual services to build and run containers.

To build and start all production services:

```bash
docker compose up --build
```

To run in detached mode:

```bash
docker compose up --build -d
```

To stop all services:

```bash
docker compose down
```

### Service Dockerfiles

Each deployable service has its own production `Dockerfile` inside its directory under [**services/**](https://github.com/Xamarsia/sellify/tree/main/services):

| Service             | Dockerfile Location                     |
| ------------------- | --------------------------------------- |
| `customer-frontend` | `services/customer-frontend/Dockerfile` |

<!-- TODO: Add more services as they are created -->

## Git Hooks

The repository uses the [pre-commit](https://pre-commit.com/) framework for managing and maintaining git hooks. Hooks are defined in [**.pre-commit-config.yaml**](https://github.com/Xamarsia/sellify/tree/main/.pre-commit-config.yaml) to enforce local quality and security checks.

### Hook Stages

| Hook ID               | Purpose                                              | Stage                    |
| --------------------- | ---------------------------------------------------- | ------------------------ |
| `gitleaks`            | Scan for leaked secrets                              | `pre-commit`, `pre-push` |
| `ruff-check`          | Python lint checks with auto-fix                     | `pre-push`               |
| `ruff-format`         | Python formatting                                    | `pre-push`               |
| `prettier-check`      | Format/check TS/JS/MD/CSS family files with Prettier | `pre-push`               |
| `check-yaml`          | Validate YAML syntax                                 | `pre-commit`             |
| `end-of-file-fixer`   | Ensure files end with a single newline               | `pre-commit`             |
| `trailing-whitespace` | Remove trailing whitespace                           | `pre-commit`             |
| `bashate`             | Shell script style checks                            | `pre-commit`, `pre-push` |
| `run-e2e-tests`       | Run local E2E test command (`pnpm turbo e2e-tests`)  | `pre-push`               |

### Running Hooks

To run pre-commit hooks locally, you should:

1. From the repository root, activate the pre-commit virtual environment setup:

   ```bash
   . scripts/pre-commit-setup.sh
   ```

2. Run against all files:

   ```bash
   pre-commit run --all-files --hook-stage manual
   ```

### Editing Hooks

To add or change hooks:

1. Edit [**.pre-commit-config.yaml**](https://github.com/Xamarsia/sellify/tree/main/.pre-commit-config.yaml).
2. From the repository root, activate the pre-commit virtual environment setup:

   ```bash
   . scripts/pre-commit-setup.sh
   ```

3. Replace existing git hook scripts:

   ```bash
   pre-commit install --install-hooks --overwrite
   ```

If you add any new stage(s) to hooks in [**.pre-commit-config.yaml**](https://github.com/Xamarsia/sellify/tree/main/.pre-commit-config.yaml), add the same stage(s) to `default_install_hook_types` as well. Otherwise, `pre-commit install` command will not install hooks for those new stage(s).

## Commands

### Production Commands

All commands should be executed from the root directory of the `sellify` project.

| Command                        | Description                             |
| ------------------------------ | --------------------------------------- |
| `docker compose up --build`    | Build and start all production services |
| `docker compose up --build -d` | Build and start in detached mode        |
| `docker compose down`          | Stop all services                       |

### Git Hooks Commands

All commands should be executed from the root directory of the `sellify` project after activating the [**pre-commit-setup**](https://github.com/Xamarsia/sellify/tree/main/scripts/pre-commit-setup.sh) virtual environment.

To activate [**pre-commit-setup**](https://github.com/Xamarsia/sellify/tree/main/scripts/pre-commit-setup.sh), run next command in the root directory:

```bash
. scripts/pre-commit-setup.sh
```

| Command                                          | Description                                           |
| ------------------------------------------------ | ----------------------------------------------------- |
| `pre-commit install`                             | Install hook scripts alongside any existing git hooks |
| `pre-commit install --install-hooks --overwrite` | Replace existing git hook scripts                     |
| `pre-commit run`                                 | Run all hooks against currently staged files          |
| `pre-commit run --all-files`                     | Run all hooks against all files                       |
| `git commit --no-verify`                         | Skip hooks for this commit (`--no-verify`)            |

## Mandatory Actions

- When adding a new service, create a `Dockerfile` in its service directory and add the corresponding entry to [**docker-compose.yml**](https://github.com/Xamarsia/sellify/tree/main/docker-compose.yml).

## Useful References

- [pre-commit](https://pre-commit.com/)
