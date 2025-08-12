<h1 align="center">
Sellify
</h1>

Sellify is a microservice demo of an e-commerce web platform.

## Table Of Content

- [Description](#description)
- [Project Status](#project-status)
- [Project's Services](#projects-services)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Examples](#examples)
- [Project Packages](#project-packages)
- [Development Stack](#development-stack)
- [Project Features](#project-features)

- [Environment Setup](#environment-setup)
- [Build & Run](#build--run)
- [Useful Commands](#useful-commands)
- [UI Prototype](#ui-prototype)
- [License](#license)

## Description

Sellify is a microservice demo of an e-commerce web platform.

The online store consists of two main web applications: one for administrators and another for customers.
The admin application provides tools for product management, order processing, and overseeing customer interactions, as well as inventory management.
The customer application allows users to browse products, manage their shopping carts and track their orders.

The project is set up as a multi-package workspace (monorepo).

## Project Status

Current Status: **Active Development**

## Project's Services

### Frontend

- [`customer-frontend`](https://github.com/Xamarsia/sellify/tree/main/services/customer-frontend/README.md) - a Next.js web application that provides customer UI.
- [`admin-frontend`](https://github.com/Xamarsia/sellify/tree/main/services/admin-frontend/README.md) - a Next.js web application that functions as a admin panel.

### Backend

- TODO: `customer-api` - an Express server dedicated to customer management.
- TODO: `admin-api` - an Express server for managing admin functionalities.
- TODO: `catalog-api` - an Express server for handling product catalog.
- TODO: `basket-api` - an Express server for managing shopping basket operations.
- TODO: `inventory-api` - an Express server for inventory data management.
- TODO: `order-api` - an Express server for order processing.

### Examples

- [`common-ui-components-example`](https://github.com/Xamarsia/sellify/tree/main/examples/common-ui-components-example/README.md) - a practical example of using the custom React component library from the [`@sellify/common-ui-components`](https://github.com/Xamarsia/sellify/tree/main/packages/common-ui-components/README.md) package.

## Project Packages

- [`@sellify/typescript-config`](https://github.com/Xamarsia/sellify/tree/main/packages/typescript-config/README.md) - tsconfig.json configuration to maintain consistency throughout the monorepo.
- [`@sellify/tailwind-config`](https://github.com/Xamarsia/sellify/tree/main/packages/tailwind-config/README.md) - tailwindcss presets and shared-styles.
- [`@sellify/eslint-config`](https://github.com/Xamarsia/sellify/tree/main/packages//README.md) - ESLint presets.
- [`@sellify/common-ui-components`](https://github.com/Xamarsia/sellify/tree/main/packages/common-ui-components/README.md) - common UI components.
- [`@sellify/customer-ui-components`](https://github.com/Xamarsia/sellify/tree/main/packages/customer-ui-components/README.md) - customer UI components.
- [`@sellify/admin-ui-components`](https://github.com/Xamarsia/sellify/tree/main/packages/admin-ui-components/README.md) - admin UI components.
- [`@sellify/common-icons`](https://github.com/Xamarsia/sellify/tree/main/packages/common-icons/README.md) - common UI icons components.
- [`@sellify/logger`](https://github.com/Xamarsia/sellify/tree/main/packages/logger/README.md) - log service with Cassandra.

## Development Stack

- `Next.js` ( React ) - for client and server rendering, advanced routing, nested layouts, data fetching.
- `Express` - for building RESTful APIs with Node.js.
- `TypeScript` - for static type checking.
- `Tailwind CSS` - for simplified CSS styling.
- `ESLint` - for code linting.
- `Zod` - for frontend forms validation.
- `Docker` - for isolated development environment and deployment.
- `Turborepo`- for scaling monorepo and make workflow in single-package workspace faster.
- `MongoDB` - for storing orders data.
- `Redis`- for storing inventory and basket data.
- `Cassandra`- for storing logs.
- `PostgreSQL` - for storing user and catalog data.

## Project Features

- [ ] `Authentication` - sign in, sign up, and sign out functionalities, including password reset option.
  - Use OAuth 2.0 for implementation.
- [ ] `Skeleton` - display loading skeleton before UI component uploads.
- [ ] `Notifications System` - notification system integrated.
- [ ] `Payment System` - payment system integrated.
- [ ] `Logging System` - logging mechanism for tracking events.
- [ ] `Testing` - automated tests.
- [ ] `DDoS Protection` - system is not vulnerable to DDoS attacks.
- [ ] `Implement customer service features`:
  - [ ] `Authentication` - support authentication via email and password or external identity provider ( Google ).
  - [ ] `Product Viewing` - display product details, including images, descriptions, prices, and availability.
  - [ ] `Shopping Cart` - view and edit personal shopping cart content functionalities.
    - Calculate the total price, including taxes and shipping.
  - [ ] `Order History and Tracking` - display order history.
    - Provide tracking information for orders.
  - [ ] `Product Search` - search for products by name.
  - [ ] `Product Filtering` - filter products by options (e.g., price range, category).
  - [ ] `Wishlist Feature` - wishlist to save items of interest.
  - [ ] `Input Validation` - server-side validation for user inputs and data integrity.
    - Display validation errors on the input fields when validation fails.
  - [ ] `Device Compatibility` - compatible with various devices to provide a smooth user experience.
    - Web platform with responsive design that adapts the layout and content to various screen sizes.
  - [ ] `Responsive design` - adaptive user interfaces that adjust seamlessly from smartphone to laptop screen sizes.
    - The UI adapts on smartphone views for screens with widths ranging from 320px (20rem) to 448px (28rem).
    - The UI adapts on laptop views for screens wider than 448px (28rem).
- [ ] `Implement admin service features`:
  - [ ] `Authentication` - support authentication via email and password.
    - Ensure that only authorized users are permitted.
  - [ ] `Statistic Dashboard`- general statistics visualization.
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

## Environment Setup

1. Install Visual Studio Code (`ms-vscode-remote.remote-containers` extension).
2. Install Docker Engine [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository) and [Linux post-installation steps for Docker Engine](https://docs.docker.com/engine/install/linux-postinstall/).
3. Clone project.
4. [Install turbo](https://turborepo.com/docs/getting-started/installation) by executing the following command:

   ```bash
   pnpm add turbo --save-dev
   ```

## Build & Run

1. Open project in VS Code.
2. [Reopen project in Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).
3. To run project, open the terminal in the root directory and execute the following command:

   ```bash
   pnpm turbo dev
   ```

   This command will start the service on the development server.

4. Open <http://localhost:3000> in a browser to see the customer web app or admin web on 3001 port.

## UI Prototype

This project has been designed in Figma prior to development; based on [SEL Prototype V1.0](https://www.figma.com/design/AO5rA915a6xdGOhtnVNobW/SEL-Prototype-1.0?node-id=2003-5147&t=0EzElkWsprYyA0pO-1).

The design process ensured that the layout, color schemes, typography, and overall aesthetics aligned with the project goals.

<table>
  <tr>
    <td width="48%">Admin Home</td>
    <td width="48%">Customer Home</td>
  </tr>
  <tr align="center">
    <td width="48%" style="padding: 0;">
      <a href="https://www.figma.com/design/AO5rA915a6xdGOhtnVNobW/SEL-Prototype-1.0?node-id=2003-5147&t=O2mOqoVwI29NQ0iX-1">
        <img alt="Home" src="https://github.com/user-attachments/assets/4ca974b0-1d01-48f8-b1b1-9ad00930007f" />
       </a>
    </td>
    <td width="48%" style="padding: 0;">
      <a href="https://www.figma.com/design/AO5rA915a6xdGOhtnVNobW/SEL-Prototype-1.0?node-id=2003-5148&t=O2mOqoVwI29NQ0iX-1">
        <img alt="News" src="https://github.com/user-attachments/assets/52dbcdf3-484d-4b23-81de-96046a369ed1" />
      </a>
    </td>
  </tr>
</table>

## Useful Commands

These commands should be executed in the root directory of the `sellify` project.

- `pnpm turbo dev` - starts the development server.
- `pnpm turbo build` - builds the project for production.
- `pnpm turbo start` - starts the production server.
- `pnpm turbo lint` - runs ESLint.
- `pnpm turbo check-types` - runs type checking.
- `pnpm format` - formats every .ts, .tsx or .md file with Prettier.
- `pnpm store prune` - removes unreferenced packages from the store.
- `pnpm turbo clean` - removes .pnpm-store and node_modules folders.

[Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters) by package is a simple way to only run tasks for the selected packages.

Add `package-name#` after `pnpm turbo` to apply the command for a specific package only.

```bash
pnpm turbo package-name#build
```

To apply the command to all directory, include `--filter="./directory-name/*"` at the end.

```bash
pnpm turbo build --filter="./directory-name/*"
```

## License

Licensed under the GNU GPL v3.0 License. See [LICENSE](./LICENSE) file for more details.
