<h1 align="center">
  <p> Sellify</p>
  <h4 align="left">Demo: ...</h4>
</h1>

## Table Of Content

...

## Description
Sellify is a mikroservice 

Project setted up as a multi-package workspace (monorepo) 
...

## Project status

Current Status: __Active Development__

The project is actively being developed, with new features and improvements being added regularly.

## Projects & Packages

- `customer-frontend`: a Next.js app that prowides customer interface.
- `admin-frontend`: a Next.js app that prowides Admin Panel.

- `admin-api`: an Express server ... .
- `customer-api`: an Express server ... .
- `catalog-api`: ... .
- `basket-api`: ... .
- `inventory-api`: ... .
- `order-api`: ... .

- `@sellify/logger`: log service with Cassandra.
- `@sellify/common-ui-components`: a React component library.
- `@sellify/typescript-config`: tsconfig.json's used throughout the monorepo.
- `@sellify/eslint-config`: ESLint presets.

## Examples

- `common-ui-components-example`:  provides a practical example of using the custom React component library from the `@sellify/common-ui-components` package.

## Development Stack

- `Next.js` ( React ) - React framework that enables client and server rendering, advanced routing, nested layouts, data fetching.
- `Express` - backend application framework for building RESTful APIs with Node.js.
- `TypeScript` for static type checking.
- `Tailwind CSS` for CSS styling.
- `ESLint` for code linting.
- `Zod` for forms validation.
- `Docker` - helps create and manage an isolated environment for building, sharing, and running applications.
- `MongoDB`: NoSQL database for storing orders data.
- `Redis`: NoSQL database for storing inventory and basket data.
- `Cassandra`: NoSQL database for storing logs.
- `PostgreSQL`: SQL database for storing Users & Catalogs data.

## Project Features

- __User Authentication:__ Sign In, Sign Up, and Sign Out functionalities are provided, along with an option for Password Reset.
  - Authentication using email addresses and passwords or popular identity provider Google.
  - Authentication is implemented using industry standards such as OAuth 2.0.
- __Form Validation:__ Server-side validation for user inputs and data integrity.
- __Alerts:__ Display an alert when the request fails.
- __Device Compatibility:__ Compatible with various devices to ensure a smooth user experience.
  - Web platform with responsive design which adapts the layout and content to various screen sizes.
- __Security__: 
    -  Not vulnerable to DDoS.

## Environment Setup

1. Install Visual Studio Code (`ms-vscode-remote.remote-containers` extension).
2. Install Docker Engine  [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository) and  [Linux post-installation steps for Docker Engine](https://docs.docker.com/engine/install/linux-postinstall/).
3. Clone project.

## Build & Run

1. Open project in VS Code.
2. [Reopen project in Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).
3. To run application, open the terminal and execute the following command:

    ```bash
    pnpm turbo dev
    ```

    This will trigger the build process and then will run it.
4. Open <http://localhost:3000> with your browser to see the result.

### Useful Commands

- `pnpm turbo build` - Builds project.
- `pnpm turbo dev` - Builds and runs project for development.
- `pnpm turbo lint` - Runs lint.
- `pnpm turbo check-types` - starts project if build exists.
- `pnpm format` - formats every .ts, .tsx or .md file with Prettier.

## Future Enhancements

- [ ] Add payment system.
- [ ] Implement refunds system.
- [ ] Implement wish list.
- [ ] Add notifications.
- [ ] Increase test coverage.

## License

Licensed under the GNU GPL v3.0 License. See [LICENSE](./LICENSE) file for more details.
