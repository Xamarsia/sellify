<h1 align="center">
Customer Frontend
</h1>

This service is a frontend for customers of [sellify](https://github.com/Xamarsia/sellify) project. It is implemented using Typescript and Next.js ( React ) framework.

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

Customer Frontend service is a web-based UI of [sellify](https://github.com/Xamarsia/sellify) project.

Prototype of the application is designed in Figma (see [UI Prototype](#ui-prototype)).

The application is written in TypeScript, using Next.js.

## Related Services

- TODO:`customer-api` - an Express backend server for customers.

## Local Dependencies

- `@sellify/typescript-config` - tsconfig.json configuration to maintain consistency throughout the monorepo.
- `@sellify/tailwind-config` - tailwindcss presets and shared-styles.
- `@sellify/eslint-config` - ESLint presets.
- `@sellify/common-ui-components` - common UI components.
- `@sellify/customer-ui-components` - customer UI components.
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
  - Support authentication via email and password or external identity provider ( Google ).
  - Use OAuth 2.0 for implementation.
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
- [ ] `Skeleton` - display loading skeleton before UI component uploads.
- [ ] `Order Cancellations and Refunds` - order cancellations and refunds functionalities.

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

## Environment Setup

[Set up the environment for the main repository](https://github.com/Xamarsia/sellify#environment-setup).

## Build & Run

1. Open project in VS Code.
2. [Reopen project in Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).
3. To run the service, open the terminal in the root directory and execute the following command:

   ```bash
   pnpm turbo customer-frontend#dev
   ```

   This command will start the service on the development server.

4. Open <http://localhost:3000> in a browser to see the service.

## License

Licensed under the MIT License. See [LICENSE](./LICENSE) file for more details.
