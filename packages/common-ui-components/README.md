<h1 align="center">
    @sellify/common-ui-components
</h1>

This repository is a React component library. It contains a collection of common components of __sellify__ project. The components auto-updates as you edit the file.

__@sellify/common-ui-components__ was designed in Figma prior to development; based on [SEL Prototype 1.0](https://www.figma.com/design/AO5rA915a6xdGOhtnVNobW/SEL-Prototype-1.0?node-id=0-1&t=8Lqom0HTjqPgxfkf-1).

## Related Projects

- [`common-ui-components-example`](./examples/common-ui-components-example) - contains examples of how to use __@sellify/common-ui-components__.
- [`sellify`](./README.md) - main repository.

## Local Dependencies
<!-- ## Packages -->
- `@sellify/typescript-config`: shares the tsconfig.json configuration to maintain consistency throughout the monorepo.
- `@sellify/tailwind-config`: provides tailwindcss presets and shared-styles.
- `@sellify/eslint-config`:  provides ESLint presets.

## Development Stack

- `React` - to build user interface out of components.
- `TypeScript` - for static type checking.
- `Tailwind CSS` - for simplified CSS styling.
- `ESLint` - for code linting.
- `Figma` - for project prototyping.

## Environment Setup

1. Install Visual Studio Code (`ms-vscode-remote.remote-containers` extension).
2. Install Docker Engine  [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository) and  [Linux post-installation steps for Docker Engine](https://docs.docker.com/engine/install/linux-postinstall/).
3. Clone project.
4. [Install turbo](https://turborepo.com/docs/getting-started/installation):

    ```bash
    pnpm add turbo --save-dev 
    ```

## Build & Run

1. Open project in VS Code.
2. [Reopen project in Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).
3. To run application, open the terminal and execute the following command:

    ```bash
    pnpm turbo dev
    ```

    This will trigger the build process and then will run it.

4. To only build application, execute the following command:

    ```bash
    pnpm turbo build
    ```

### Useful Commands

- `pnpm turbo build` - Builds project styles and components.
- `pnpm turbo build:styles` - Builds project styles.
- `pnpm turbo build:components` - Builds project components.
- `pnpm turbo dev` - Builds and runs project styles and components for development.
- `pnpm turbo dev:styles` - Builds and runs only project styles for development.
- `pnpm turbo dev:components` - Builds and runs only project components for development.
- `pnpm lint` - Runs lint.
- `pnpm check-types` - Runs type checking task

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
       <img width="267" height="292" alt="DefaultButton" src="https://github.com/user-attachments/assets/e58431ad-5982-4452-8f5d-1f8ca324cca1" />
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="./src/buttons/Button.tsx">
        <img width="267" height="292" alt="OutlineButton" src="https://github.com/user-attachments/assets/506973b1-fdf5-42e0-a208-c8fdb7a63658" />
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="./src/buttons/Button.tsx">
        <img width="287" height="292" alt="DestructiveButton" src="https://github.com/user-attachments/assets/f1e5c612-893c-4083-9b5b-a3167c35ef42" />
      </a>
    </td>
  </tr>
</table>

### Icon Button

<table>
  <tr>
    <td width="44%">Default</td>
    <td width="44%">Outline</td>
  </tr>
  <tr align="center">
    <td width="44%" style="padding: 0;">
      <a href="./src/buttons/IconButton.tsx">
        <img  alt="IconButton" src="https://github.com/user-attachments/assets/356e16dd-409b-4c1d-b2a9-fe075c737271" />
      </a>
    </td>
    <td width="44%" style="padding: 0;">
      <a href="./src/buttons/IconButton.tsx">
        <img  alt="OutlineIconButton" src="https://github.com/user-attachments/assets/2f81b88d-acb0-44bf-8b76-a79e90aed58a" />
      </a>
    </td>
  </tr>

</table>

### Transparent Icon Button

<table>
  <tr>
    <td width="44%">Default</td>
    <td width="44%">Destructive</td>
  </tr>
  <tr align="center">
    <td width="44%" style="padding: 0;">
      <a href="./src/buttons/TransparentIconButton.tsx">
        <img width="66" height="140" alt="TransparentIconButton" src="https://github.com/user-attachments/assets/d8e3ee3b-ba64-4e99-88b0-e8a5a342e2c3" />
      </a>
    </td>
    <td width="44%" style="padding: 0;">
      <a href="./src/buttons/TransparentIconButton.tsx">
        <img width="66" height="140" alt="TransparentIconButtonDestructive" src="https://github.com/user-attachments/assets/6119d694-c163-4814-b741-30cf8e29a8b8" />
      </a>
    </td>
  </tr>
</table>

### Checkbox & Radio buttons

<table>
  <tr>
    <td width="44%">Checkbox</td>
    <td width="44%">Radio</td>
  </tr>
  <tr align="center">
    <td width="44%" style="padding: 0;">
      <a href="./src/input/Checkbox.tsx">
        <img width="287" height="172" alt="Checkbox" src="https://github.com/user-attachments/assets/b1799a4e-2fdd-4c82-b52b-f487f5916ea2" />
      </a>
    </td>
    <td width="44%" style="padding: 0;">
      <a href="./src/input/Radio.tsx">
        <img width="287" height="172" alt="Radio" src="https://github.com/user-attachments/assets/2e8aefd5-2fbf-406d-b20b-e56fac45b4f5" />
      </a>
    </td>
  </tr>
</table>

### Input

<table>
  <tr>
    <td width="33%">Input</td>
    <td width="33%">Media Input Field</td>
    <td width="33%">Search Input</td>
  </tr>
  <tr align="center">
    <td width="33%" style="padding: 0;">
      <a href="./src/input/Input.tsx">
        <img width="462" height="325" alt="Input" src="https://github.com/user-attachments/assets/76f5cc5a-4e3d-4b0a-ba7b-c35e0d6251ee" />
      </a>
    </td>
    <td width="33%" style="padding: 0;">
      <a href="./src/input/MediaInputField.tsx">
        <img width="559" height="269" alt="MediaInputField" src="https://github.com/user-attachments/assets/6085be32-6d9b-47e8-851d-1625546f2969" />
      </a>
    </td>
      <td width="33%" style="padding: 0;">
        <a href="./src/input/SearchInput.tsx">
          <img width="421" height="104" alt="SearchInput" src="https://github.com/user-attachments/assets/1fdd57ff-2095-48f9-a7f4-9fc3e6dc2259" />
      </a>
    </td>

  </tr>
</table>

### Dropdown & Combobox

<table>
  <tr>
    <td width="20">Dropdown</td>
    <td width="38%">Combobox</td>
    <td width="38%">Multiple Selection Combobox</td>
  </tr>
  <tr align="center">
    <td width="20%" style="padding: 0;">
      <a href="./src/dropdown/Dropdown.tsx">
        <img width="269" height="385" alt="Dropdown" src="https://github.com/user-attachments/assets/188355da-13c6-4f11-821e-d8530823427c" />
      </a>
    </td>
    <td width="38%" style="padding: 0;">
      <a href="./src/combobox/Combobox.tsx">
          <img width="625" height="461" alt="Combobox" src="https://github.com/user-attachments/assets/db49f866-c52f-4aac-876b-94d1da497941" />
      </a>
    </td>
    <td width="38%" style="padding: 0;">
      <a href="./src/combobox/MultipleSelectionCombobox.tsx">
        <img width="609" height="482" alt="MultipleSelectionCombobox" src="https://github.com/user-attachments/assets/612dfffd-19fc-4091-bf5f-ae568e4c9303" />
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
        <img width="617" height="473" alt="Dialog" src="https://github.com/user-attachments/assets/2ad93f4c-f4b0-4706-9851-2cdd5cf7cc3d" />
      </a>
    </td>
    <td width="36%" style="padding: 0;">
      <a href="./src/dialog/AlertDialog.tsx">
        <img width="617" height="378" alt="AlertDialog" src="https://github.com/user-attachments/assets/68f631b9-76f4-40f1-9967-b7209f8132aa" />
      </a>
    </td>
  </tr>
</table>
