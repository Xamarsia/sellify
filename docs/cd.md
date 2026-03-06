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

<!-- TODO: Add deployment pipeline details here later -->

## Overview

Production containers are built from Dockerfiles located inside each service directory under [**services/**](https://github.com/Xamarsia/sellify/tree/main/services) folder. The root [**docker-compose.yml**](https://github.com/Xamarsia/sellify/tree/main/docker-compose.yml) orchestrates all services for production deployment.

## Prerequisites

- Docker or Podman

## Production

The production [**docker-compose.yml**](https://github.com/Xamarsia/sellify/tree/main/.devcontainer/docker-compose.yml) is located in the repository root. It uses the Dockerfiles from the individual services to build and run containers.

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

## Mandatory Actions

- When adding a new service, create a `Dockerfile` in its service directory and add the corresponding entry to [**docker-compose.yml**](https://github.com/Xamarsia/sellify/tree/main/docker-compose.yml).
