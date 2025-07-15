<h1 align="center">
    Admin frontend
</h1>

This repository is a frontend for admins of [sellify](https://github.com/Xamarsia/sellify) project. It is implemented using Typescript and Next.js ( React ) framework.

## Table Of Content

- [Description](#description)
- [Related Projects](#related-projects)
- [Local Dependencies](#local-dependencies)
- [Development Stack](#development-stack)
- [Project Features](#project-features)
- [UI Prototype](#ui-prototype)
- [Environment Setup](#environment-setup)
- [Build & Run](#build--run)
- [Useful Commands](#useful-commands)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Description

Admin Frontend project is a web-based UI of [sellify](https://github.com/Xamarsia/spsp-deployment) project.

Prototype of the application is designed in Figma (see [UI Prototype](#ui-prototype)).

The application is written in TypeScript, using Next.js.

## Related Projects

- [`sellify`](https://github.com/Xamarsia/sellify/README.md) - main repository.
- [`admin-api`](https://github.com/Xamarsia/sellify/services/admin-api): an Express backend server for admins.

## Local Dependencies
<!-- ## Packages -->

- `@sellify/typescript-config`: shares the tsconfig.json configuration to maintain consistency throughout the monorepo.
- `@sellify/tailwind-config`: provides tailwindcss presets and shared-styles.
- `@sellify/eslint-config`:  provides ESLint presets.
- `@sellify/common-ui-components`: provides common components.
- `@sellify/admin-ui-components`: provides admin components.
- `@sellify/common-icons`: provides icons.

## Development Stack

- `React` - to build user interface out of components.
- `TypeScript` - for static type checking.
- `Tailwind CSS` - for simplified CSS styling.
- `ESLint` - for code linting.
- `Figma` - for project prototyping.

## Project Features

- __Authentication:__ Sign In, Sign Up, and Sign Out functionalities, including password reset option.
  - Only authorized users are permitted.
  - Supports authentication via email and password.
  - Implemented using OAuth 2.0.
- __Statistic Dashboard:__ Users can view general statistics.
- __Order Processing:__ Users can view and manage customer orders.
- __Product Management:__ Users can add, edit, and delete products.
- __Category Management:__ Users can add and delete categories.
- __Inventory Management:__ Users can add quantities to products.
- __Customer Management:__  Users can view the list of customers, see their profile information and statistics; can archive customers.
- __Role Management:__ Super admin can create, edit and delete roles.
- __Role-Based Access Control:__ Restricts system access to authorized users based on their assigned roles.
  - Users can be assigned to a single role.
- __Admin User Management:__ Super admin can create and delete admins.
- __Form Validation:__ Server-side validation for user inputs and data integrity.
  - Displays validation errors on the input fields when validation fails.

## UI Prototype

This frontend application has been designed in Figma prior to development; based on [SEL Prototype 1.0 / Admin](https://www.figma.com/design/AO5rA915a6xdGOhtnVNobW/SEL-Prototype-1.0?node-id=2003-5147&t=0EzElkWsprYyA0pO-1).

The design process ensured that the layout, color schemes, typography, and overall aesthetics aligned with the project goals.

<p align="center">
    <img width="48%" height="1024" alt="Home" src="https://github.com/user-attachments/assets/a83836b9-719a-4973-bda1-048a599541e6" />
    <img width="48%" height="1024" alt="Settings" src="https://github.com/user-attachments/assets/8e4864e6-5b37-464f-9ef5-f7ae027f2c91" />
    <img width="48%" height="1024" alt="Create New Admin" src="https://github.com/user-attachments/assets/774ecb1d-530c-43d5-a842-8c6c6746d6e2" />
    <img width="48%" height="1024" alt="Edit Role" src="https://github.com/user-attachments/assets/d2d58173-715a-4608-9d16-72a95192bb58" />
</p>

## Environment Setup

[Set up the environment for the main repository](https://github.com/Xamarsia/sellify#environment-setup).

## Build & Run

1. Open project in VS Code.
2. [Reopen project in Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).
3. To run the example, open the terminal in the root directory and execute the following command:

    ```bash
    pnpm turbo admin-frontend#dev
    ```

    This command will start the example on the development server.

4. Open <http://localhost:3000> with your browser to see the result.

## Useful Commands

These commands should be executed in the root directory of the __sellify__ project.

- `pnpm turbo dev` - Starts the development server.
- `pnpm turbo build` - Builds the application for production.
- `pnpm turbo start` - Starts the production server.
- `pnpm turbo lint` - Runs ESLint.
- `pnpm turbo check-types` - Runs type checking.

Add `admin-frontend#` after `pnpm turbo` to run this command for current project only.

```bash
pnpm turbo admin-frontend#build
```

You can also add  `--filter="./services/*"` to the end of the command to run it for all services.

```bash
pnpm turbo build --filter="./services/*"
```

## Future Enhancements

- [ ] Increase test coverage.
- [ ] Implement a skeleton for upload times.
- [ ] Add functionality to handle order cancellations and refunds.

## License

Licensed under the MIT License. See [LICENSE](./LICENSE) file for more details.
