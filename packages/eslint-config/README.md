<h1 align="center">
@sellify/eslint-config
</h1>

This package provides **eslint** presets to maintain consistency throughout the monorepo.

## Usage

1. Add current package to the devDependencies into package.json file.

   ```json
   "devDependencies": {
       "@sellify/eslint-config": "workspace:*",
   }
   ```

2. Import desired configuration to the **eslint.config.mjs** file.

   For example, add the following import for a React library.

   ```mjs
   import { config } from "@sellify/eslint-config/react-internal";

   /** @type {import("eslint").Linter.Config} */
   export default config;
   ```
