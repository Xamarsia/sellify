---
applyTo: "**"
---

## Summary

This repository is a an e-commerce web platform.

The online store consists of two main web applications: one for administrators and another for customers. The admin application provides tools for product management, order processing, and overseeing customer interactions, as well as inventory management. The customer application allows users to browse products, manage their shopping carts and track their orders.

The project is set up as a multi-package workspace (monorepo) and has a microservice architecture.

## Architecture

This repository is a Turborepo-managed monorepo that separates deployable services from reusable packages.

- `services/*`  
  - Independently deployable apps and microservices.  
  - Frontends: Next.js + TypeScript apps (UI, routing, SSR/SSG). Example: customer-frontend, admin-frontend.  
  - Backends: API services owning business logic, persistence, and public APIs.

- `packages/*`  
  - Shared, versioned packages for configs, utilities, and UI components (e.g., TypeScript, ESLint, Tailwind presets, custom @sellify/* UI libraries).  
  - Reused by services to enforce consistency and reduce duplication.

- `examples/*`  
  - Minimal demo apps for local development and visual testing of UI packages. Named <package>-example (e.g., common-ui-components-example).

### Project services (summary)

- Frontend
  - `customer-frontend` — Next.js + TypeScript app for customers (browse products, manage cart and orders).
  - `admin-frontend` — Next.js app for admin tasks (product and order management, inventory).

- Backend (planned/TODO)
  - `customer-api` — customer management.
  - `admin-api` — admin functionality.
  - `catalog-api` — product catalog.
  - `basket-api` — shopping basket operations.
  - `order-api` — order processing.
  - `cache-api` — caching layer.
  - `logging-api` — centralized logging/monitoring.

### Examples
- `common-ui-components-example` — demo of @sellify/common-ui-components.
- `admin-ui-components-example` — demo of @sellify/admin-ui-components.
- `customer-ui-components-example` — demo of @sellify/customer-ui-components.

### Project Packages

- [`@sellify/typescript-config`](./../packages/typescript-config) - Shared TypeScript tsconfig presets and compiler options.
- [`@sellify/tailwind-config`](./../packages/tailwind-config) - Tailwind CSS configuration and shared utilities used by all frontend apps.
- [`@sellify/eslint-config`](./../packages/) - ESLint presets.
- [`@sellify/common-ui-components`](./../packages/common-ui-components) - Stateless, reusable custom React UI components shared by multiple frontends and other UI packages.
- [`@sellify/customer-ui-components`](./../packages/customer-ui-components) - Stateless React UI components used only by the customer-frontend service.
- [`@sellify/admin-ui-components`](./../packages/admin-ui-components) - Stateless React UI components used only by the admin-frontend service.
- [`@sellify/common-icons`](./../packages/common-icons) - Shared icon components for use across frontends.


## Task planning and problem-solving
- Before each task, you must first complete the following steps:
  1. Provide a full plan of your changes.
  2. Provide a list of behaviors that you'll change.
  3. Provide a list of test cases to add.
- Before you add any code, always check if you can just re-use
  or re-configure any existing code to achieve the result.

## Clean Code Principles
- Always define TypeScript types for props and data.
- Keep functions short and single-responsibility.
- Avoid deep nesting; prefer early returns.
- Keep changes minimal and focused; prefer refactors that address the root cause.
- Prefer `defaultValues` (or defaults) to reduce unnecessary renders.
- When introducing a new test, search for similar tests before adding duplicates.

## Naming Conventions (global)

- **Components / interfaces / types:** PascalCase
- **Variables / functions / methods:** camelCase
- **Private class members:** `_privateMember`
- Prefix boolean variables with a verb: `isLoading`, `hasPermission`.
- **Constants:** ALL_CAPS
- **Package names:** kebab-case

### UI Libraries Naming Conventions

- Component filenames must match the exported component name in PascalCase.
- Icon filenames are kebab-case; exported React components use PascalCase with `Icon` suffix. Keep props consistent across icons (e.g., `size?: number`, `className?: string`).

### Frontend Services Naming Conventions

- Route and folder names should be kebab-case and follow Next.js conventions.
- Keep component filenames in PascalCase.
