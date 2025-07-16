<h1 align="center">
@sellify/typescript-config
</h1>

This package provides __TypeScript__ configuration to maintain consistency throughout the monorepo.

## Usage

1. Specify the TypeScript configuration for a project by adding a `tsconfig.json` file to the root.

2. Extend a desired configuration. For example, for a React library:

   ```json
   "extends": "@sellify/typescript-config/react-library.json",
   ```
