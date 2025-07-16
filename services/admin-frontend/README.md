<h1 align="center">
Admin Frontend
</h1>

This repository is a frontend for admins of [sellify](https://github.com/Xamarsia/sellify) project. It is implemented using Typescript and Next.js ( React ) framework.

## Table Of Content

- [Description](#description)
- [Related Repositories](#related-repositories)
- [Local Dependencies](#local-dependencies)
- [Development Stack](#development-stack)
- [Service Features](#service-features)
- [UI Prototype](#ui-prototype)
- [Environment Setup](#environment-setup)
- [Build & Run](#build--run)
- [License](#license)

## Description

Admin Frontend project is a web-based UI of [sellify](https://github.com/Xamarsia/spsp-deployment) project.

Prototype of the application is designed in Figma (see [UI Prototype](#ui-prototype)).

The application is written in TypeScript, using Next.js.

## Related Repositories

- [`sellify`](https://github.com/Xamarsia/sellify/README.md) - main repository.
- [`admin-api`](https://github.com/Xamarsia/sellify/services/admin-api): an Express backend server for admins.

## Local Dependencies

- `@sellify/typescript-config`: shares the tsconfig.json configuration to maintain consistency throughout the monorepo.
- `@sellify/tailwind-config`: provides tailwindcss presets and shared-styles.
- `@sellify/eslint-config`: provides ESLint presets.
- `@sellify/common-ui-components`: provides common components.
- `@sellify/admin-ui-components`: provides admin components.
- `@sellify/common-icons`: provides icons.

## Development Stack

- `React` - to build user interface out of components.
- `TypeScript` - for static type checking.
- `Tailwind CSS` - for CSS styling.
- `ESLint` - for code linting.
- `Figma` - for project prototyping.

## Service Features

- [ ] `Authentication`: Implement Sign In, Sign Up, and Sign Out functionalities, including password reset option.
  - Ensure that only authorized users are permitted.
  - Support authentication via email and password.
  - Use OAuth 2.0 for implementation.
- [ ] `Statistic Dashboard`: Display general statistics.
- [ ] `Order Processing`: Enable users to view and manage customer orders.
- [ ] `Product Management`: Allow users to add, edit, and delete products.
- [ ] `Category Management`: Provide functionality for users to add and delete categories.
- [ ] `Inventory Management`: Enable users to add quantities to products.
- [ ] `Customer Management`: Allow users to view the list of customers, see their profile information and statistics; allow to archive customers.
- [ ] `Role Management`: Enable the super admin to create, edit, and delete roles.
- [ ] `Role-Based Access Control`: Restricts system access to authorized users based on their assigned roles.
  - Users can be assigned to a single role.
- [ ] `Admin User Management`: Allow the super admin to create and delete admins.
- [ ] `Form Validation`: Implement server-side validation for user inputs and data integrity.
  - Displays validation errors on the input fields when validation fails.
- [ ] `Testing`: Write tests for different features.
- [ ] `Skeleton`: Implement a loading skeleton to display before component uploads.
- [ ] `Order Cancellations and Refunds`: Introduce functionality for processing order cancellations and refunds.
- [ ] `User Reviews and Ratings`: Add features for users to submit reviews and ratings.

## UI Prototype

This frontend application has been designed in Figma prior to development; based on [SEL Prototype 1.0 / Admin](https://www.figma.com/design/AO5rA915a6xdGOhtnVNobW/SEL-Prototype-1.0?node-id=2003-5147&t=0EzElkWsprYyA0pO-1).

<table>
  <tr>
    <td width="48%">Home</td>
    <td width="48%">Settings</td>
  </tr>
  <tr align="center">
    <td width="48%" style="padding: 0;">
      <img alt="Home" src="https://github.com/user-attachments/assets/a83836b9-719a-4973-bda1-048a599541e6" />
    </td>
    <td width="48%" style="padding: 0;">
      <img alt="Settings" src="https://github.com/user-attachments/assets/8e4864e6-5b37-464f-9ef5-f7ae027f2c91" />
    </td>
  </tr>
      <tr>
    <td width="48%">Create New Admin</td>
    <td width="48%">Edit Role</td>
  </tr>
  <tr align="center">
    <td width="48%" style="padding: 0;">
      <img alt="Create New Admin" src="https://github.com/user-attachments/assets/774ecb1d-530c-43d5-a842-8c6c6746d6e2" />
    </td>
    <td width="48%" style="padding: 0;">
      <img alt="Edit Role" src="https://github.com/user-attachments/assets/d2d58173-715a-4608-9d16-72a95192bb58" />
    </td>
  </tr>
</table>

## Environment Setup

[Set up the environment for the main repository](https://github.com/Xamarsia/sellify#environment-setup).

## Build & Run

1. Open project in VS Code.
2. [Reopen project in Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).
3. To run the service, open the terminal in the root directory and execute the following command:

    ```bash
    pnpm turbo admin-frontend#dev
    ```

    This command will start the service on the development server.

4. Open <http://localhost:3000> in a browser to see the service.

## License

Licensed under the MIT License. See [LICENSE](./LICENSE) file for more details.
