<h1 align="center">
Admin Frontend
</h1>

This service is a frontend for admins of [sellify](https://github.com/Xamarsia/sellify) project. It is implemented using Typescript and Next.js ( React ) framework.

## Table Of Content

- [Description](#description)
- [Related Services](#related-services)
- [Local Dependencies](#local-dependencies)
- [Development Stack](#development-stack)
- [Service Features](#service-features)
- [UI Prototype](#ui-prototype)
- [Environment Setup](#environment-setup)
- [Build & Run](#build--run)
- [License](#license)

## Description

Admin Frontend service is a web-based UI of [sellify](https://github.com/Xamarsia/spsp-deployment) project.

Prototype of the application is designed in Figma (see [UI Prototype](#ui-prototype)).

The application is written in TypeScript, using Next.js.

## Related Services

- TODO:[`admin-api`](https://github.com/Xamarsia/sellify/services/admin-api) - an Express backend server for admins.

## Local Dependencies

- `@sellify/typescript-config` - tsconfig.json configuration to maintain consistency throughout the monorepo.
- `@sellify/tailwind-config` - tailwindcss presets and shared-styles.
- `@sellify/eslint-config` - ESLint presets.
- `@sellify/common-ui-components` - common UI components.
- `@sellify/admin-ui-components` - admin UI components.
- `@sellify/common-icons` - common UI icons components.

## Development Stack

- `Next.js` ( React ) - for client and server rendering, advanced routing, nested layouts, data fetching.
- `TypeScript` - for static type checking.
- `Tailwind CSS` - for CSS styling.
- `ESLint` - for code linting.
- `Zod` - for frontend forms validation.
- `Figma` - for project prototyping.

## Service Features

- [ ] `Authentication` - sign in, sign up, and sign out functionalities, including password reset option.
  - Ensure that only authorized users are permitted.
  - Support authentication via email and password.
  - Use OAuth 2.0 for implementation.
- [ ] `Statistic Dashboard` - general statistics visualization.
- [ ] `Order Processing` - view and manage customer orders.
- [ ] `Product Management` - add, edit, and delete products functionalities.
- [ ] `Category Management` - add and delete categories functionalities.
- [ ] `Inventory Management` - add quantities to products functionality.
- [ ] `Customer Management` - display list of customers, their profile information and statistics; add archive customers option.
- [ ] `Role Management` - create, edit, and delete roles functionalities for the super admin.
- [ ] `Role-Based Access Control` - restricts system access to authorized users based on their assigned roles.
  - Users can be assigned to a single role.
- [ ] `Admin User Management` - create and delete admins functionalities for the super admin.
- [ ] `Form Validation` - server-side validation for user inputs and data integrity.
  - Displays validation errors on the input fields when validation fails.
- [ ] `Skeleton` - display loading skeleton before UI component uploads.
- [ ] `Order Cancellations and Refunds` - order cancellations and refunds functionalities.

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
