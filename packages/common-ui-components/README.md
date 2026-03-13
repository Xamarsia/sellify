<h1 align="center">
@sellify/common-ui-components
</h1>

This package is a React component library. It contains a collection of common components of **sellify** project.

## Table Of Content

- [Related Services](#related-services)
- [Local Dependencies](#local-dependencies)
- [Development Stack](#development-stack)
- [UI Prototype](#ui-prototype)
- [Components](#components)
  - [Button](#button)
  - [Icon Button](#icon-button)
  - [Transparent Icon Button](#transparent-icon-button)
  - [Checkbox & Radio Buttons](#checkbox--radio-buttons)
  - [Input](#input)
  - [Dropdown & Combobox](#dropdown--combobox)
  - [Dialog](#dialog)
- [License](#license)

## Related Services

- [`common-ui-components-example`](https://github.com/Xamarsia/sellify/tree/main/examples/common-ui-components-example/README.md) - contains examples of how to use **@sellify/common-ui-components**.

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

**@sellify/common-ui-components** was designed in Figma prior to development; based on [SEL Prototype 1.0 / Common](https://www.figma.com/design/AO5rA915a6xdGOhtnVNobW/SEL-Prototype-1.0?node-id=0-1&t=8Lqom0HTjqPgxfkf-1).

<img alt="Combobox" src="https://github.com/user-attachments/assets/0f5a0dda-960b-401a-83ad-5be4fd5e631d" />

## Components

### Button

<table>
  <tr>
    <td width="33.3333%">Default</td>
    <td width="33.3333%">Outline</td>
    <td width="33.3333%">Destructive</td>
  </tr>
  <tr align="center">
    <td width="33.3333%" style="padding: 0;">
      <a href="./src/buttons/Button.tsx">
        <img width="368" height="272" alt="image" src="https://github.com/user-attachments/assets/ba504cb3-3bd6-4b49-887c-3840973df1c5" />
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="./src/buttons/Button.tsx">
        <img width="368" height="272" alt="image" src="https://github.com/user-attachments/assets/028a9e99-355b-4927-bda8-58dafc22ee7d" />
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="./src/buttons/Button.tsx">
        <img width="368" height="272" alt="image" src="https://github.com/user-attachments/assets/3d2cb3c6-ca5d-490a-96ce-617b92bacc0e" />
      </a>
    </td>
  </tr>
</table>

### Icon Button

<table>
  <tr>
    <td width="22%">Default</td>
    <td width="22%">Outline</td>
    <td width="22%">Transparent</td>
    <td width="22%">Transparent Destructive</td>
  </tr>
  <tr align="center">
    <td width="22%" style="padding: 0;">
      <a href="./src/buttons/IconButton.tsx">
        <img width="143" height="241" alt="image" src="https://github.com/user-attachments/assets/58b02adc-9e65-4b02-8821-46d8aeeda98a" />
      </a>
    </td>
    <td width="22%" style="padding: 0;">
      <a href="./src/buttons/IconButton.tsx">
        <img width="143" height="241" alt="image" src="https://github.com/user-attachments/assets/bff2a492-ff19-4336-8317-720c0577e1ef" />
      </a>
    </td>
        <td width="22%" style="padding: 0;">
      <a href="./src/buttons/TransparentIconButton.tsx">
        <img width="126" height="224" alt="image" src="https://github.com/user-attachments/assets/f497e286-e12c-4ff3-9ce0-8246b35e1331" />
      </a>
    </td>
    <td width="22%" style="padding: 0;">
      <a href="./src/buttons/TransparentIconButton.tsx">
 <img width="126" height="224" alt="image" src="https://github.com/user-attachments/assets/e6ab808a-4755-4491-b34d-b2d9bf4fabba" />
      </a>
    </td>
  </tr>

</table>

### Checkbox & Radio Buttons

<table>
  <tr>
    <td width="44%">Checkbox</td>
    <td width="44%">Radio</td>
  </tr>
  <tr align="center">
    <td width="44%" style="padding: 0;">
      <a href="./src/input/Checkbox.tsx">
        <img width="437" height="212" alt="image" src="https://github.com/user-attachments/assets/19dd1bf5-95df-4dca-91bc-4f9a19e0b40a" />
      </a>
    </td>
    <td width="44%" style="padding: 0;">
      <a href="./src/input/Radio.tsx">
        <img width="437" height="212" alt="image" src="https://github.com/user-attachments/assets/034d08fe-bc24-4a39-b411-fbdebdd56501" />
      </a>
    </td>
  </tr>
</table>

### Input

<table>
  <tr>
    <td width="36%">Default</td>
    <td width="36%">Search</td>
  </tr>
  <tr align="center">
    <td width="36%" style="padding: 0;">
      <a href="./src/combobox/Combobox.tsx">
        <img width="673" height="299" alt="image" src="https://github.com/user-attachments/assets/2ab30281-75b3-4a21-9b3a-67dac8ba209e" />
      </a>
    </td>
    <td width="36%" style="padding: 0;">
      <a href="./src/combobox/MultiSelectionCombobox.tsx">
        <img width="452" height="191" alt="image" src="https://github.com/user-attachments/assets/9441724a-91cc-4819-ae3f-d17e01883a55" />
      </a>
    </td>
  </tr>
</table>

### Textarea

<table>
  <tr>
    <td width="99%">Default</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/tabs/Tabs.tsx">
        <img width="673" height="571" alt="image" src="https://github.com/user-attachments/assets/24598a9c-a706-4b18-b615-e9c41f9ceb8e" />
      </a>
    </td>
  </tr>
</table>

### Dropdown

<table>
  <tr>
    <td width="99%">Default</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/tabs/Tabs.tsx">
        <img width="317" height="448" alt="image" src="https://github.com/user-attachments/assets/40408216-c8eb-4e57-981d-d1a62112cf60" />
      </a>
    </td>
  </tr>
</table>

### Combobox

<table>
  <tr>
    <td width="36%">Default</td>
    <td width="36%">Multi Selection</td>
  </tr>
  <tr align="center">
    <td width="36%" style="padding: 0;">
      <a href="./src/combobox/Combobox.tsx">
        <img width="472" height="439" alt="image" src="https://github.com/user-attachments/assets/3f383976-d144-4127-940d-ffd1bcff0a0d" />
      </a>
    </td>
    <td width="36%" style="padding: 0;">
      <a href="./src/combobox/MultiSelectionCombobox.tsx">
        <img width="472" height="512" alt="image" src="https://github.com/user-attachments/assets/e91ea8d4-8391-4c75-9ef2-b82918e6826c" />
      </a>
    </td>
  </tr>
</table>

### Dialog

<table>
  <tr>
    <td width="36%">Default</td>
    <td width="36%">Alert</td>
  </tr>
  <tr align="center">
    <td width="36%" style="padding: 0;">
      <a href="./src/dialog/Dialog.tsx">
        <img width="676" height="536" alt="image" src="https://github.com/user-attachments/assets/9c94d6e8-04dc-4e88-9fd5-dafc457c29fb" />
      </a>
    </td>
    <td width="36%" style="padding: 0;">
      <a href="./src/dialog/AlertDialog.tsx">
        <img width="676" height="536" alt="image" src="https://github.com/user-attachments/assets/9c4d98ee-6b2c-4243-95f6-a64291690863" />
      </a>
    </td>
  </tr>
</table>

### Range Slider

<table>
  <tr>
    <td width="99%">Default</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/range-slider/PriceRangeSlider.tsx">
        <img width="723" height="227" alt="image" src="https://github.com/user-attachments/assets/dc6519ec-fe00-430d-b7aa-988b97c03f0d" />
      </a>
    </td>
  </tr>
</table>

### Media Input Field

<table>
  <tr>
    <td width="99%">Default</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/input/media-input/MediaInput.tsx">
        <img width="723" height="370" alt="image" src="https://github.com/user-attachments/assets/1051d23a-e006-4904-9c54-b8a4d487e2bd" />
      </a>
    </td>
  </tr>
</table>

### Side Menu

<table>
  <tr>
    <td width="99%">Default</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/side-menu/SideMenu.tsx">
        <img width="270" height="240" alt="image" src="https://github.com/user-attachments/assets/03ed0998-d3e1-4a41-8b86-3de0300e3985" />
      </a>
    </td>
  </tr>
</table>

### Tab

<table>
  <tr>
    <td width="99%">Default</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/tabs/Tabs.tsx">
        <img width="643" height="127" alt="image" src="https://github.com/user-attachments/assets/593704e5-4354-40e0-820b-8d816ab9eef6" />
      </a>
    </td>
  </tr>
</table>

### Pagination

<table>
  <tr>
    <td width="99%">Default</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/tabs/Tabs.tsx">
        <img width="643" height="127" alt="image" src="https://github.com/user-attachments/assets/fe61aa27-25fa-48da-9569-45dc3c3baa2e" />
      </a>
    </td>
  </tr>
</table>

### Collapsible Panel

<table>
  <tr>
    <td width="99%">Default</td>
  </tr>
  <tr align="center">
    <td width="99%" style="padding: 0;">
      <a href="./src/tabs/Tabs.tsx">
        <img width="685" height="348" alt="image" src="https://github.com/user-attachments/assets/e48b0ac8-ce7b-42cd-950b-57817fdb6f8b" />
      </a>
    </td>
  </tr>
</table>

## License

Licensed under the MIT License. See [LICENSE](./LICENSE) file for more details.
