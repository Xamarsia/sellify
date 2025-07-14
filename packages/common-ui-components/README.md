<h1 align="center">
    @sellify/common-ui-components
</h1>

This repository is a React component library. It contains a collection of common components of __sellify__ project. The components auto-updates as you edit the file.

__@sellify/common-ui-components__ was designed in Figma prior to development; based on [SEL Prototype 1.0](https://www.figma.com/design/AO5rA915a6xdGOhtnVNobW/SEL-Prototype-1.0?node-id=0-1&t=8Lqom0HTjqPgxfkf-1).

## Related Projects

- [`common-ui-components-example`](./examples/common-ui-components-example) - contains examples of how to use __@sellify/common-ui-components__.
- [`sellify`](./README.md) - main repository.

## Local Dependencies
<!-- ## Packages -->
- `@sellify/typescript-config`: shares the tsconfig.json configuration to maintain consistency throughout the monorepo.
- `@sellify/tailwind-config`: provides tailwindcss presets and shared-styles.
- `@sellify/eslint-config`:  provides ESLint presets.

## Development Stack

- `React` - to build user interface out of components.
- `TypeScript` - for static type checking.
- `Tailwind CSS` - for simplified CSS styling.
- `ESLint` - for code linting.
- `Figma` - for project prototyping.

## Environment Setup

1. Install Visual Studio Code (`ms-vscode-remote.remote-containers` extension).
2. Install Docker Engine  [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository) and  [Linux post-installation steps for Docker Engine](https://docs.docker.com/engine/install/linux-postinstall/).
3. Clone project.
4. [Install turbo](https://turborepo.com/docs/getting-started/installation):

    ```bash
    pnpm add turbo --save-dev 
    ```

## Build & Run

1. Open project in VS Code.
2. [Reopen project in Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).
3. To run application, open the terminal and execute the following command:

    ```bash
    pnpm turbo dev
    ```

    This will trigger the build process and then will run it.

4. To only build application, execute the following command:

    ```bash
    pnpm turbo build
    ```

### Useful Commands

- `pnpm turbo build` - Builds project styles and components.
- `pnpm turbo build:styles` - Builds project styles.
- `pnpm turbo build:components` - Builds project components.
- `pnpm turbo dev` - Builds and runs project styles and components for development.
- `pnpm turbo dev:styles` - Builds and runs only project styles for development.
- `pnpm turbo dev:components` - Builds and runs only project components for development.
- `pnpm lint` - Runs lint.
- `pnpm check-types` - Runs type checking task

## Components
