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
    <td width="44%">Default</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/AddAmountButton.tsx">
<img width="282" height="259" alt="image" src="https://github.com/user-attachments/assets/882b6fdf-fbd8-4f38-9c98-371bd06b9c61" />
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
                <img width="450" height="193" alt="image" src="https://github.com/user-attachments/assets/8145c7c0-969f-42b4-b78a-54d448da3f05" />
      </a>
    </td>
    <td width="22%" style="padding: 0;">
      <a href="./src/card/CardWithChard.tsx">
                <img width="450" height="193" alt="image" src="https://github.com/user-attachments/assets/db1776cf-29b4-4589-ad0a-bbc05c6969d1" />
      </a>
    </td>
    <td width="22%" style="padding: 0;">
      <a href="./src/card/CardWithChard.tsx">
              <img width="450" height="193" alt="image" src="https://github.com/user-attachments/assets/a08d20af-ddc9-4220-9eed-40112b9ab5d7" />
      </a>
    </td>
    <td width="22%" style="padding: 0;">
      <a href="./src/card/CardWithChard.tsx">
        <img width="450" height="193" alt="image" src="https://github.com/user-attachments/assets/afafd214-d093-4291-90bc-6389d6689c0f" />
      </a>
    </td>
  </tr>
</table>

### Table

<table>
  <tr>
    <td width="99%">Orders Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="908" height="360" alt="image" src="https://github.com/user-attachments/assets/ad6de8e0-5565-4e09-bf54-36792094ea6f" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Products Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="908" height="582" alt="image" src="https://github.com/user-attachments/assets/0241422b-93c5-4615-b2be-f665607997f7" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Inventory Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="908" height="582" alt="image" src="https://github.com/user-attachments/assets/6e5a01e4-9e5f-43e1-b12f-c3f402207c78" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Customers Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="908" height="359" alt="image" src="https://github.com/user-attachments/assets/225fe61e-febd-434b-a499-8fdf29f120fc" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Categories Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="908" height="406" alt="image" src="https://github.com/user-attachments/assets/55e22c12-d369-42bb-8eba-9245ed04eb76" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Admins Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="908" height="454" alt="image" src="https://github.com/user-attachments/assets/71eb8565-7f40-440f-95e9-9d247171feae" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Roles Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="908" height="461" alt="image" src="https://github.com/user-attachments/assets/98508f83-eba4-4f61-9c7b-d9ef5ecc196b" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Product Preview</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="908" height="483" alt="image" src="https://github.com/user-attachments/assets/cabd8451-7656-46c2-8a94-64aa509fb80e" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Admins Preview Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="908" height="364" alt="image" src="https://github.com/user-attachments/assets/4689e64c-ec7f-42f1-94fa-87d5e3c0acda" />
      </a>
    </td>
  </tr>
</table>

### List

<table>
  <tr>
    <td width="99%">Orders Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="469" height="565" alt="image" src="https://github.com/user-attachments/assets/d97691c4-1fab-4b38-9de1-8cef5bfd441b" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Products Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="469" height="469" alt="image" src="https://github.com/user-attachments/assets/506478c0-1685-4631-a3da-12f736442559" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Inventory Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="469" height="409" alt="image" src="https://github.com/user-attachments/assets/c3390ae7-198d-41cf-a908-96e003f9bbbb" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Customers Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="469" height="334" alt="image" src="https://github.com/user-attachments/assets/4aa9ffd4-dffa-43ec-bcaa-021f53c86c46" />
      </a>
    </td>
  </tr>
</table>


<table>
  <tr>
    <td width="99%">Categories Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="469" height="407" alt="image" src="https://github.com/user-attachments/assets/8f71d2c4-539a-4c56-8aa2-83129b680c56" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Admins Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="469" height="567" alt="image" src="https://github.com/user-attachments/assets/7076e257-27bf-4db1-a727-0b9326ce23fa" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Roles Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="470" height="325" alt="image" src="https://github.com/user-attachments/assets/3d0d88b5-3a21-4cce-9671-e52c198ac98e" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Product Preview</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="470" height="518" alt="image" src="https://github.com/user-attachments/assets/1118187a-62f1-4bab-8702-a4edb862c82d" />
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="99%">Admins Preview Table</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/data-view/OrdersView.tsx">
        <img width="470" height="327" alt="image" src="https://github.com/user-attachments/assets/4203ad9b-cb54-437a-9df1-24f93d290361" />
      </a>
    </td>
  </tr>
</table>

## License

Licensed under the MIT License. See [LICENSE](./LICENSE) file for more details.
