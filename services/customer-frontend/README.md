<h1 align="center">
    Customer Frontend
</h1>

This repository is a frontend for customers of [sellify](https://github.com/Xamarsia/sellify) project. It is implemented using Typescript and Next.js ( React ) framework.

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

Customer Frontend project is a web-based UI of [sellify](https://github.com/Xamarsia/spsp-deployment) project.

Prototype of the application is designed in Figma (see [UI Prototype](#ui-prototype)).

The application is written in TypeScript, using Next.js.

## Related Projects

- [`sellify`](https://github.com/Xamarsia/sellify/README.md) - main repository.
- [`customer-api`](https://github.com/Xamarsia/sellify/services/customer-api): an Express backend server for customers.

## Local Dependencies
<!-- ## Packages -->

- `@sellify/typescript-config`: shares the tsconfig.json configuration to maintain consistency throughout the monorepo.
- `@sellify/tailwind-config`: provides tailwindcss presets and shared-styles.
- `@sellify/eslint-config`:  provides ESLint presets.
- `@sellify/common-ui-components`: provides common components.
- `@sellify/customer-ui-components`: provides customer components.
- `@sellify/common-icons`: provides icons.

## Development Stack

- `React` - to build user interface out of components.
- `TypeScript` - for static type checking.
- `Tailwind CSS` - for simplified CSS styling.
- `ESLint` - for code linting.
- `Figma` - for project prototyping.

## Project Features


## UI Prototype

This frontend application has been designed in Figma prior to development; based on [SEL Prototype 1.0 / Customer](https://www.figma.com/design/AO5rA915a6xdGOhtnVNobW/SEL-Prototype-1.0?node-id=2003-5147&t=0EzElkWsprYyA0pO-1).

The design process ensured that the layout, color schemes, typography, and overall aesthetics aligned with the project goals.

<table>
  <tr>
    <td width="48%">Product Detail</td>
    <td width="48%">Order History</td>
  </tr>
  <tr align="center">
    <td width="48%" style="padding: 0;">
        <img alt="Product Detail" src="https://github.com/user-attachments/assets/f2ca8b8e-08ec-464f-8e95-2128e1ba7557" />
    </td>
    <td width="48%" style="padding: 0;">
        <img alt="Order History" src="https://github.com/user-attachments/assets/86eaf8e5-4c0b-4811-baba-1d247abb160e" />
    </td>
  </tr>
      <tr>
    <td width="48%">Personal Information</td>
    <td width="48%">Payment Method</td>
  </tr>
  <tr align="center">
    <td width="48%" style="padding: 0;">
        <img alt="Personal Information" src="https://github.com/user-attachments/assets/ed99b7e7-7279-418b-bf5a-1f080901101d" />
    </td>
    <td width="48%" style="padding: 0;">
        <img alt="Payment Method" src="https://github.com/user-attachments/assets/218585a8-f3de-4011-b0e8-529db5305ff2" />
    </td>
  </tr>
</table>

<br>

<table>
  <tr>
    <td width="48%">Product Detail</td>
    <td width="48%">Order History</td>
  </tr>
  <tr align="center">
    <td width="48%" style="padding: 0;">
        <img alt="Product Detail" src="https://github.com/user-attachments/assets/f2ca8b8e-08ec-464f-8e95-2128e1ba7557" />
    </td>
          <td width="48%" style="padding: 0;">
        <img alt="Payment Method" src="https://github.com/user-attachments/assets/218585a8-f3de-4011-b0e8-529db5305ff2" />
    </td>

  </tr>
      <tr>
    <td width="48%">Personal Information</td>
    <td width="48%">Payment Method</td>
  </tr>
  <tr align="center">
    <td width="48%" style="padding: 0;">
        <img alt="Personal Information" src="https://github.com/user-attachments/assets/ed99b7e7-7279-418b-bf5a-1f080901101d" />
    </td>
    <td width="48%" style="padding: 0;">
        <img alt="Order History" src="https://github.com/user-attachments/assets/86eaf8e5-4c0b-4811-baba-1d247abb160e" />
    </td>
  </tr>
</table>

## Environment Setup

[Set up the environment for the main repository](https://github.com/Xamarsia/sellify#environment-setup).

## Build & Run

1. Open project in VS Code.
2. [Reopen project in Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).
3. To run the example, open the terminal in the root directory and execute the following command:

    ```bash
    pnpm turbo customer-frontend#dev
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

Add `customer-frontend#` after `pnpm turbo` to run this command for current project only.

```bash
pnpm turbo customer-frontend#build
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
