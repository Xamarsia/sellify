<h1 align="center">
@sellify/jest-config
</h1>

This package provides **Jest** presets to maintain consistency throughout the monorepo.

## Usage

1. Add current package to the devDependencies into package.json file.

   ```json
   "devDependencies": {
       "@sellify/jest-config": "workspace:*",
   }
   ```

2. Add the following import to the **jest.config.ts** file.

   ```mjs
   import config from "@sellify/jest-config/config";

   export default config;
   ```
