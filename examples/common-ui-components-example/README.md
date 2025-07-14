<h1 align="center">
    common-ui-components-example
</h1>

This repository is a Next.js project designed to showcase the usage of the __@sellify/common-ui-components__ React component library.

## Table Of Content

- [Related Projects](#related-projects)
- [Local Dependencies](#local-dependencies)
- [Environment Setup](#environment-setup)
- [Run](#run)
- [Useful Commands](#useful-commands)

## Related Projects

- [`sellify`](https://github.com/Xamarsia/sellify/README.md) - main repository.

## Local Dependencies

- `@sellify/typescript-config`: shares the tsconfig.json configuration to maintain consistency throughout the monorepo.
- `@sellify/typescript-config`: shares the tsconfig.json configuration to maintain consistency throughout the monorepo.
- `@sellify/tailwind-config`: provides tailwindcss presets and shared-styles.
- `@sellify/eslint-config`:  provides ESLint presets.
- `@sellify/common-ui-components`: provides components for displaying.
- `@sellify/common-icons`: provides icons.

## Environment Setup

[Set up the environment for the main repository](https://github.com/Xamarsia/sellify#environment-setup).

## Run

1. Open project in VS Code.
2. [Reopen project in Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).
3. To run the example, open the terminal in the root directory and execute the following command:

    ```bash
    pnpm turbo common-ui-components-example#dev
    ```

    This command will start the example on the development server.
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Useful Commands

These commands should be executed in the root directory of the __sellify__ project.

- `pnpm turbo dev` - Starts the development server.
- `pnpm turbo build` - Builds the application for production.
- `pnpm turbo start` - Starts the production server.
- `pnpm turbo lint` - Runs ESLint.
- `pnpm turbo check-types` - Runs type checking.

Add `common-ui-components-example#` after `pnpm turbo` to run this command for current project only.

```bash
pnpm turbo common-ui-components-example#build
```

You can also add  `--filter="./examples/*"` to the end of the command to run it for all examples.

```bash
pnpm turbo build --filter="./examples/*"
```
