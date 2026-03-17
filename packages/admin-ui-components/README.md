<h1 align="center">
@sellify/admin-ui-components
</h1>

This package is a React component library. It contains a collection of admin components of **sellify** project.

## Table Of Content

- [Related Services](#related-services)
- [Local Dependencies](#local-dependencies)
- [Development Stack](#development-stack)
- [UI Prototype](#ui-prototype)
- [Components](#components)
  - [Add Amount Button](#add-amount-button)
  - [Card](#card)
  - [Orders View](#orders-view)
  - [Products View](#products-view)
  - [Inventory View](#inventory-view)
  - [Customers View](#customers-view)
  - [Categories View](#categories-view)
  - [Admins View](#admins-view)
  - [Roles View](#roles-view)
  - [Product Preview View](#product-preview-view)
  - [Admins Preview View](#admins-preview-view)
- [License](#license)

## Related Services

- [`admin-ui-components-example`](https://github.com/Xamarsia/sellify/tree/main/examples/admin-ui-components-example/README.md) - contains examples of how to use **@sellify/admin-ui-components**.

## Local Dependencies

- `@sellify/typescript-config` - tsconfig.json configuration to maintain consistency throughout the monorepo.
- `@sellify/tailwind-config` - tailwindcss presets and shared-styles.
- `@sellify/eslint-config` - ESLint presets.

## Development Stack

- `React` - to build UI out of components.
- `TypeScript` - for static type checking.
- `Tailwind CSS` - for CSS styling.
- `ESLint` - for code linting.
- `Figma` - for project prototyping.

## UI Prototype

**@sellify/admin-ui-components** was designed in Figma prior to development; based on [SEL Prototype 1.0 / Admin](https://www.figma.com/design/AO5rA915a6xdGOhtnVNobW/SEL-Prototype-1.0?node-id=16-992&t=WQKuXErUhnMuNaOu-1).

<img alt="Card" src="https://github.com/user-attachments/assets/074ebade-6bec-4eef-b891-0d224ae1f87d" />

## Components

### Add Amount Button

<table>
  <tr>
    <td width="99%">Default</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/AddAmountButton.tsx">
        <img width="282" height="259" alt="Default Add Amount Button" src="https://github.com/user-attachments/assets/882b6fdf-fbd8-4f38-9c98-371bd06b9c61" />
      </a>
    </td>
  </tr>
</table>

### Card

<table>
  <tr>
    <td width="22%">Default</td>
    <td width="22%">Positive Trend</td>
    <td width="22%">Negative Trend</td>
    <td width="22%">Zero Trend</td>
  </tr>
  <tr align="center">
    <td width="22%" style="padding: 0;">
      <a href="./src/card/Card.tsx">
        <img width="450" height="193" alt="Default Card" src="https://github.com/user-attachments/assets/8145c7c0-969f-42b4-b78a-54d448da3f05" />
      </a>
    </td>
    <td width="22%" style="padding: 0;">
      <a href="./src/card/CardWithChard.tsx">
        <img width="450" height="193" alt="Card With Positive Trend" src="https://github.com/user-attachments/assets/db1776cf-29b4-4589-ad0a-bbc05c6969d1" />
      </a>
    </td>
    <td width="22%" style="padding: 0;">
      <a href="./src/card/CardWithChard.tsx">
        <img width="450" height="193" alt="Card With Negative Trend" src="https://github.com/user-attachments/assets/a08d20af-ddc9-4220-9eed-40112b9ab5d7" />
      </a>
    </td>
    <td width="22%" style="padding: 0;">
      <a href="./src/card/CardWithChard.tsx">
        <img width="450" height="193" alt="Card With Zero Trend" src="https://github.com/user-attachments/assets/afafd214-d093-4291-90bc-6389d6689c0f" />
      </a>
    </td>
  </tr>
</table>

### Orders View

<table>
  <tr>
    <td width="70%">Table</td>
    <td width="30%">List</td>
  </tr>
  <tr align="center">
    <td width="70%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="908" height="360" alt="Orders Table" src="https://github.com/user-attachments/assets/ad6de8e0-5565-4e09-bf54-36792094ea6f" />
      </a>
    </td>
    <td width="30%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="469" height="565" alt="Orders List" src="https://github.com/user-attachments/assets/d97691c4-1fab-4b38-9de1-8cef5bfd441b" />
      </a>
    </td>
  </tr>
</table>

### Products View

<table>
  <tr>
    <td width="70%">Table</td>
    <td width="30%">List</td>
  </tr>
  <tr align="center">
    <td width="70%" style="padding: 0;">
      <a href="./src/data-view/ProductsView.tsx">
        <img width="908" height="582" alt="Products Table" src="https://github.com/user-attachments/assets/0241422b-93c5-4615-b2be-f665607997f7" />
      </a>
    </td>
    <td width="30%" style="padding: 0;">
      <a href="./src/data-view/ProductsView.tsx">
        <img width="468" height="831" alt="image" src="https://github.com/user-attachments/assets/292f4cc2-ef9f-4f3e-a204-df55952e96e3" />
      </a>
    </td>
  </tr>
</table>

### Inventory View

<table>
  <tr>
    <td width="70%">Table</td>
    <td width="30%">List</td>
  </tr>
  <tr align="center">
    <td width="70%" style="padding: 0;">
      <a href="./src/data-view/InventoryView.tsx">
        <img width="908" height="582" alt="Inventory Table" src="https://github.com/user-attachments/assets/6e5a01e4-9e5f-43e1-b12f-c3f402207c78" />
      </a>
    </td>
    <td width="30%" style="padding: 0;">
      <a href="./src/data-view/InventoryView.tsx">
        <img width="468" height="719" alt="image" src="https://github.com/user-attachments/assets/bca7d574-f752-4d9f-a354-66e0e74b7a6f" />
      </a>
    </td>
  </tr>
</table>

### Customers View

<table>
  <tr>
    <td width="70%">Table</td>
    <td width="30%">List</td>
  </tr>
  <tr align="center">
    <td width="70%" style="padding: 0;">
      <a href="./src/data-view/CustomersView.tsx">
        <img width="908" height="359" alt="Customers Table" src="https://github.com/user-attachments/assets/225fe61e-febd-434b-a499-8fdf29f120fc" />
      </a>
    </td>
    <td width="30%" style="padding: 0;">
      <a href="./src/data-view/CustomersView.tsx">
        <img width="468" height="564" alt="image" src="https://github.com/user-attachments/assets/d01d042a-7690-48fd-8d31-8824ae30798e" />
      </a>
    </td>
  </tr>
</table>

### Categories View

<table>
  <tr>
    <td width="70%">Table</td>
    <td width="30%">List</td>
  </tr>
  <tr align="center">
    <td width="70%" style="padding: 0;">
      <a href="./src/data-view/CategoriesView.tsx">
        <img width="908" height="406" alt="Categories Table" src="https://github.com/user-attachments/assets/55e22c12-d369-42bb-8eba-9245ed04eb76" />
      </a>
    </td>
    <td width="30%" style="padding: 0;">
      <a href="./src/data-view/CategoriesView.tsx">
        <img width="469" height="407" alt="Categories List" src="https://github.com/user-attachments/assets/8f71d2c4-539a-4c56-8aa2-83129b680c56" />
      </a>
    </td>
  </tr>
</table>

### Admins View

<table>
  <tr>
    <td width="70%">Table</td>
    <td width="30%">List</td>
  </tr>
  <tr align="center">
    <td width="70%" style="padding: 0;">
      <a href="./src/data-view/AdminsView.tsx">
        <img width="908" height="454" alt="Admins Table" src="https://github.com/user-attachments/assets/71eb8565-7f40-440f-95e9-9d247171feae" />
      </a>
    </td>
    <td width="30%" style="padding: 0;">
      <a href="./src/data-view/AdminsView.tsx">
        <img width="469" height="567" alt="Admins List" src="https://github.com/user-attachments/assets/7076e257-27bf-4db1-a727-0b9326ce23fa" />
      </a>
    </td>
  </tr>
</table>

### Roles View

<table>
  <tr>
    <td width="70%">Table</td>
    <td width="30%">List</td>
  </tr>
  <tr align="center">
    <td width="70%" style="padding: 0;">
      <a href="./src/data-view/RolesView.tsx">
        <img width="930" height="409" alt="image" src="https://github.com/user-attachments/assets/dff51b8d-0fee-4cb6-b109-94e2fe676342" />
      </a>
    </td>
    <td width="30%" style="padding: 0;">
      <a href="./src/data-view/RolesView.tsx">
        <img width="472" height="552" alt="image" src="https://github.com/user-attachments/assets/2f42a888-ab3a-4177-a9fa-68bae9247d7c" />
      </a>
    </td>
  </tr>
</table>

### Product Preview View

<table>
  <tr>
    <td width="70%">Table</td>
    <td width="30%">List</td>
  </tr>
  <tr align="center">
    <td width="70%" style="padding: 0;">
      <a href="./src/data-view/ProductPreviewView.tsx">
        <img width="908" height="483" alt="Product Preview Table" src="https://github.com/user-attachments/assets/cabd8451-7656-46c2-8a94-64aa509fb80e" />
      </a>
    </td>
    <td width="30%" style="padding: 0;">
      <a href="./src/data-view/ProductPreviewView.tsx">
        <img width="470" height="518" alt="Product Preview List" src="https://github.com/user-attachments/assets/1118187a-62f1-4bab-8702-a4edb862c82d" />
      </a>
    </td>
  </tr>
</table>

### Admins Preview View

<table>
  <tr>
    <td width="70%">Table</td>
    <td width="30%">List</td>
  </tr>
  <tr align="center">
    <td width="70%" style="padding: 0;">
      <a href="./src/data-view/AdminsPreviewView.tsx">
        <img width="908" height="364" alt="Admins Preview Table" src="https://github.com/user-attachments/assets/4689e64c-ec7f-42f1-94fa-87d5e3c0acda" />
      </a>
    </td>
    <td width="30%" style="padding: 0;">
      <a href="./src/data-view/AdminsPreviewView.tsx">
        <img width="470" height="441" alt="image" src="https://github.com/user-attachments/assets/699e5ea0-0fef-4b4e-8be7-3135b1e6d138" />
      </a>
    </td>
  </tr>
</table>

## License

Licensed under the MIT License. See [LICENSE](./LICENSE) file for more details.
