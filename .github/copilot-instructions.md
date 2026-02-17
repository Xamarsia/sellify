---
applyTo: "**"
---

## Summary

This repository is a an e-commerce web platform.

The online store consists of two main client web applications: one for administrators and another for customers. The admin application provides tools for product management, order processing, and overseeing customer interactions, as well as inventory management. The customer application allows users to browse products, manage their shopping carts and track their orders.

The project is set up as a multi-package workspace (monorepo) and has a microservice architecture.

## Architecture

This repository is a Turborepo-managed monorepo that separates deployable services from reusable packages.

- services/\*
  - Independently deployable apps and microservices.
  - Frontends: Next.js + TypeScript apps (UI, routing, SSR/SSG). Example: customer-frontend, admin-frontend.
  - Backends: API services owning business logic, persistence, and public APIs.
- packages/\*
  - Shared, versioned packages for configs, utilities, and UI components (e.g., TypeScript, ESLint, Tailwind presets, custom @sellify/\* UI libraries).
  - Reused by services to enforce consistency and reduce duplication.
- examples/\*
  - Minimal demo apps for local development and visual testing of UI packages. Named <package>-example (e.g., common-ui-components-example).

## Task planning and problem-solving

- Before each task, you must first complete the following steps:
  1. Provide a full plan of your changes.
  2. Provide a list of behaviors that you'll change.
  3. Provide a list of test cases to add.
- Before you add any code, always check if you can just re-use or re-configure any existing code to achieve the result.

## Naming Conventions (global)

- **Components / interfaces / types:** PascalCase
- **Variables / functions / methods:** camelCase
- **Private class members:** `_privateMember`
- Prefix boolean variables with a verb: `isLoading`, `hasPermission`.
- **Constants:** ALL_CAPS
- **Package names:** kebab-case

## Naming Conventions (common-icons)

- Component filenames must match the exported component name in PascalCase.
- Icon filenames are kebab-case; exported React components use PascalCase with `Icon` suffix. Keep props consistent across icons (e.g., `size?: number`, `className?: string`).

## Clean Code Principles

- Keep functions short and single-responsibility.
- Avoid deep nesting; prefer early returns.
- Prefer `defaultValues` (or defaults) to reduce unnecessary renders.
- When introducing a new test, search for similar tests before adding duplicates.

## TypeScript Guidelines

- Always define TypeScript types for props and data.
- Prefer immutable data (const, readonly)
- Use optional chaining (?.) and nullish coalescing (??) operators

## Performance Optimization

- Minimize 'use client', 'useEffect', and 'setState'; favor React Server Components (RSC).
- Use dynamic loading for non-critical components.
- Optimize images: use WebP, include size data, implement lazy loading.
