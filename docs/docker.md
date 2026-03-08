<h1 align="center">
Docker Guide
</h1>

This document explains how Docker is used in Sellify for local development and CI.

For release and production deployment, see [CD Guide](./cd.md).

## Table of Contents

- [Development (Dev Container)](#development-dev-container)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [What Is Preinstalled](#what-is-preinstalled)
  - [Running the Project](#running-the-project)
- [Command Reference](#command-reference)
  - [Build & Run](#build--run)
  - [Format & Lint](#format--lint)
  - [Type Checking](#type-checking)
  - [Testing](#testing)
  - [Cleaning](#cleaning)
  - [Filtering by Package](#filtering-by-package)
- [CI Docker Image](#ci-docker-image)
  - [Prerequisites](#prerequisites-1)
  - [Updating the CI Image](#updating-the-ci-image)

## Development (Dev Container)

The Dev Container is an isolated development environment defined in the [**.devcontainer/**](https://github.com/Xamarsia/sellify/tree/main/.devcontainer) folder.

For more details, see [Developing inside a Container](https://code.visualstudio.com/docs/devcontainers/containers).

### Prerequisites

- Visual Studio Code with the `Dev Containers` extension (`ms-vscode-remote.remote-containers`)
- Docker Engine or Podman (if using Podman, configure VS Code to use it as the Docker backend)

### Setup

1. Open the project in VS Code.
2. [Reopen the project in a Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).

### What Is Preinstalled

**General**

- Node.js 24
- `pnpm`

**For E2E Testing**

- Python 3 + `pip` + `venv`
- Google Chrome (stable) / ChromeDriver

### Running the Project

The project uses [**pnpm**](https://pnpm.io/) and [**Turborepo**](https://turborepo.dev/) for workspace management.

To start the development, open a terminal in the root directory and run:

```bash
pnpm turbo dev
```

This command runs across workspace packages with a `dev` script.

Apps usually start at [http://localhost:3000](http://localhost:3000); additional apps may use other ports.

## Command Reference

All commands should be executed from the root directory of the `sellify` project.

### Build & Run

| Command            | Description                                            |
| ------------------ | ------------------------------------------------------ |
| `pnpm install`     | Install workspace dependencies.                        |
| `pnpm turbo dev`   | Start the development server (non-cached, persistent). |
| `pnpm turbo build` | Build the project for production.                      |
| `pnpm turbo start` | Start the production server.                           |

### Format & Lint

| Command           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `pnpm format`     | Format every `.ts`, `.tsx`, or `.md` file with Prettier. |
| `pnpm turbo lint` | Run ESLint tasks.                                        |

### Type Checking

| Command                  | Description                   |
| ------------------------ | ----------------------------- |
| `pnpm turbo check-types` | Run TypeScript type checking. |

### Testing

| Command                | Description        |
| ---------------------- | ------------------ |
| `pnpm turbo e2e-tests` | Run the E2E tests. |

### Cleaning

| Command            | Description                                                         |
| ------------------ | ------------------------------------------------------------------- |
| `pnpm store prune` | Remove unreferenced packages from the store.                        |
| `pnpm turbo clean` | Clean build/cache outputs via Turbo task. Run `pnpm install` after. |

### Filtering by Package

Applicable to all commands that start with `pnpm turbo`.

[Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters) by package runs tasks only for selected packages.

To run a task for a **specific package**:

```bash
pnpm turbo <package-name>#build
```

Run a task for **all packages in a directory**:

```bash
pnpm turbo build --filter="./directory-name/*"
```

## CI Docker Image

The CI pipeline uses the same [**Dockerfile**](https://github.com/Xamarsia/sellify/tree/main/.devcontainer/Dockerfile) as the Dev Container to keep the CI environment consistent with local development.

For CI configuration details, see [CI Guide](https://github.com/Xamarsia/sellify/tree/main/docs/ci.md).

### Prerequisites

- Docker Engine or Podman

### Updating the CI Image

If you update the dev container [**Dockerfile**](https://github.com/Xamarsia/sellify/tree/main/.devcontainer/Dockerfile), you should also update the CI image used in [**ci.yml**](https://github.com/Xamarsia/sellify/tree/main/ci.yml).

1. Log in to Docker Hub.
2. Generate a new personal access token.
3. Use the token as a password to authenticate from the terminal:

   ```bash
   # Docker
   docker login -u <docker-hub-username>

   # Podman
   podman login -u <docker-hub-username> docker.io
   ```

4. Create a new repository on Docker Hub (if you haven't already).
5. Build and push the image:

   ```bash
   # Build
   podman build -t <username>/<repository>:<tag> .

   # Push
   podman push <username>/<repository>:<tag>
   ```

   Example:

   ```bash
   podman build -t xamarsia/sellify-ci:0.0.0 .
   podman push xamarsia/sellify-ci:0.0.0
   ```
