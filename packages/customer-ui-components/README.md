<h1 align="center">
@sellify/customer-ui-components
</h1>

This package is a React component library. It contains a collection of customer components of **sellify** project.

## Table Of Content

- [Related Services](#related-services)
- [Local Dependencies](#local-dependencies)
- [Development Stack](#development-stack)
- [UI Prototype](#ui-prototype)
- [Components](#components)
  - [Counter Button](#counter-button)
  - [Progress Bar](#progress-bar)
  - [Cart Item](#cart-item)
  - [Product Preview Feed](#product-preview-feed)
  - [Collection Card](#collection-card)
- [License](#license)

## Related Services

- [`customer-ui-components-example`](https://github.com/Xamarsia/sellify/tree/main/examples/customer-ui-components-example/README.md) - contains examples of how to use **@sellify/customer-ui-components**.

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

**@sellify/customer-ui-components** was designed in Figma prior to development; based on [SEL Prototype 1.0 / Customer](https://www.figma.com/design/AO5rA915a6xdGOhtnVNobW/SEL-Prototype-1.0?node-id=16-997&t=GuUdAWrQMA9gBysn-1).

<img alt="CounterButton" src="https://github.com/user-attachments/assets/c064c2e3-3fb1-4da2-996b-77a6d254c509" />

## Components

### Counter Button

<table>
  <tr>
    <td width="99%">Default</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/CounterButton.tsx">
        <img width="212" height="179" alt="Counter Button" src="https://github.com/user-attachments/assets/b4003d05-3797-46d7-aa70-08bc90e6934b" />
      </a>
    </td>
  </tr>
</table>

### Progress Bar

<table>
  <tr>
    <td width="99%">Default</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/progress/ProgressBar.tsx">
        <img width="668" height="181" alt="Progress Bar" src="https://github.com/user-attachments/assets/b3ced21c-83c4-4c33-a3b8-1bb51b200ba2" />
      </a>
    </td>
  </tr>
</table>

### Cart Item

<table>
  <tr>
    <td width="99%">Default</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/cart/CartItem.tsx">
        <img width="661" height="215" alt="Cart Item" src="https://github.com/user-attachments/assets/7383a000-1740-4493-887b-8a082c4b9259" />
      </a>
    </td>
  </tr>
</table>

### Product Preview Feed

<table>
  <tr>
    <td width="65%">Grid</td>
    <td width="35%">List</td>
  </tr>
  <tr align="center">
    <td width="65%" style="padding: 0;">
      <a href="./src/product-preview/ProductPreviewFeed.tsx">
        <img width="919" height="463" alt="Product Preview Feed Grid" src="https://github.com/user-attachments/assets/8719793d-98e3-4930-849a-a20946e64593" />
      </a>
    </td>
    <td width="35%" style="padding: 0;">
      <a href="./src/product-preview/ProductPreviewFeed.tsx">
        <img width="661" height="673" alt="Product Preview Feed List" src="https://github.com/user-attachments/assets/e052ac33-8391-4a4b-93ae-bddaf5c7ad68" />
      </a>
    </td>
  </tr>
</table>

### Collection Card

<table>
  <tr>
    <td width="65%">Grid</td>
    <td width="35%">List</td>
  </tr>
  <tr align="center">
    <td width="65%" style="padding: 0;">
      <a href="./src/collection/CollectionCard.tsx">
        <img width="919" height="396" alt="Collection Card Grid" src="https://github.com/user-attachments/assets/9bab48e2-822b-419b-8df0-c7954bca7d08" />
      </a>
    </td>
    <td width="35%" style="padding: 0;">
      <a href="./src/collection/CollectionCard.tsx">
        <img width="661" height="515" alt="Collection Card List" src="https://github.com/user-attachments/assets/1bfe791a-f48b-4436-a030-a13a5857ff03" />
      </a>
    </td>
  </tr>
</table>

## License

Licensed under the MIT License. See [LICENSE](./LICENSE) file for more details.
