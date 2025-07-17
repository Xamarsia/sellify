<h1 align="center">
Sellify
</h1>

## Table Of Content

...

## Description

Sellify is a microservice demo of e-commerce web platform.

The online store will consist of two main web applications: one for administrators and another for customers.
The admin application will provide tools for product management, order processing, and overseeing customer interactions, as well as inventory management.
The customer application will allow users to browse products, manage their shopping carts and track their orders.

The project is set up as a multi-package workspace (monorepo).

## Project status

Current Status: __Active Development__

The project is actively being developed, with new features and improvements being added regularly.

## Projects Repositories

- [`sellify`](https://github.com/Xamarsia/sellify/README.md) - main repository.

### Frontend

- `customer-frontend`: a Next.js web application that provides customer interface.
- `admin-frontend`: a Next.js web application that functions as a admin panel.

### Backend

- `customer-api`: an Express server dedicated to customer management.
- `admin-api`: an Express server for managing admin functionalities.
- `catalog-api`: an Express server for handling product catalog.
- `basket-api`: an Express server for managing shopping basket operations.
- `inventory-api`: an Express server for inventory data management.
- `order-api`: an Express server for order processing.

### Examples

- `common-ui-components-example`:  provides a practical example of using the custom React component library from the `@sellify/common-ui-components` package.

## Project Packages

- `@sellify/typescript-config`: shares the tsconfig.json configuration to maintain consistency throughout the monorepo.
- `@sellify/tailwind-config`: provides tailwindcss presets and shared-styles.
- `@sellify/eslint-config`: provides ESLint presets.
- `@sellify/common-ui-components`: provides common components.
- `@sellify/customer-ui-components`: provides customer components.
- `@sellify/common-icons`: provides icons.
- `@sellify/logger`: log service with Cassandra.

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

- [ ] `Authentication` - Sign In, Sign Up, and Sign Out functionalities, including password reset option.
  - Use OAuth 2.0 for implementation.
- [ ] `Testing`: Write automated tests.
- [ ] `Payment System`: Integrate a payment processing system.
- [ ] `Notifications System`: Add a notification system.
- [ ] `Logging System`: Establish a logging mechanism for tracking events.
- [ ] `Skeleton`: Implement a loading skeleton to display before component uploads.
- [ ] `DDoS Protection`: Ensure the system is not vulnerable to DDoS attacks.
- [ ] `Implement services features`:

  <details>
    <summary>Customer service features</summary>

  - [ ] `Authentication`:  Support authentication via email and password or external identity provider ( Google ).
  - [ ] `Product Viewing`: Display product details, including images, descriptions, prices, and availability.
  - [ ] `Shopping Cart`: Allow users to view and edit their shopping cart contents.
    - Calculate the total price, including taxes and shipping.
  - [ ] `Order History and Tracking`: Enable users to view their order history.
    - Provide tracking information for orders.
  - [ ] `Product Search`: Allow users to search for products by name.
  - [ ] `Product Filtering`: Provide filtering options (e.g., price range, category).
  - [ ] `Wishlist Feature`: Implement a wishlist for users to save items of interest.
  - [ ] `Input Validation`: Implement server-side validation for user inputs and data integrity.
    - Display validation errors on the input fields when validation fails.
  - [ ] `Device Compatibility`: Ensure compatibility with various devices to provide a smooth user experience.
    - Create a web platform with responsive design that adapts the layout and content to various screen sizes.
  - [ ] `Responsive design`: Adaptive user interfaces that adjust seamlessly from smartphone to laptop screen sizes.
    - Ensure the UI adapts on smartphone views for screens with widths ranging from 320px (20rem) to 448px (28rem).
    - Ensure the UI adapts on laptop views for screens wider than 448px (28rem).

  </details>
  
  <details>
    <summary>Admin service features</summary>

  - [ ] `Authentication`: Support authentication via email and password.
    - Ensure that only authorized users are permitted.
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

  </details>

## Environment Setup

1. Install Visual Studio Code (`ms-vscode-remote.remote-containers` extension).
2. Install Docker Engine  [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository) and  [Linux post-installation steps for Docker Engine](https://docs.docker.com/engine/install/linux-postinstall/).
3. Clone project.
4. [Install turbo](https://turborepo.com/docs/getting-started/installation) by executing the following command:

    ```bash
    pnpm add turbo --save-dev 
    ```

## Build & Run

1. Open project in VS Code.
2. [Reopen project in Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).
3. To run application, open the terminal in the root directory and execute the following command:

    ```bash
    pnpm turbo dev
    ```

    This command will start the service on the development server.

4. Open <http://localhost:3000> in a browser to see the customer web app or admin web on 3001 port.

## Useful Commands

These commands should be executed in the root directory of the `sellify` project.

- `pnpm turbo dev` - starts the development server.
- `pnpm turbo build` - builds the application for production.
- `pnpm turbo start` - starts the production server.
- `pnpm turbo lint` - runs ESLint.
- `pnpm turbo check-types` - runs type checking.
- `pnpm format` - formats every .ts, .tsx or .md file with Prettier.
- `pnpm store prune` - removes unreferenced packages from the store.

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
