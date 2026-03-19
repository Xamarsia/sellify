<h1 align="center">
@sellify/example-ui-components
</h1>

This package is a React component library. It contains a collection of layout and structural components used by [**example projects**](https://github.com/Xamarsia/sellify/tree/main/examples/) to provide a consistent page structure across example applications.

## Table Of Content

- [Related Services](#related-services)
- [Local Dependencies](#local-dependencies)
- [Development Stack](#development-stack)
- [Components](#components)
  - [Header](#header)
  - [Main Layout](#main-layout)
  - [Section](#section)
  - [Section Item](#section-item)

## Related Services

- [`common-ui-components-example`](https://github.com/Xamarsia/sellify/tree/main/examples/common-ui-components-example/README.md) - contains examples of how to use **@sellify/common-ui-components**.
- [`admin-ui-components-example`](https://github.com/Xamarsia/sellify/tree/main/examples/admin-ui-components-example/README.md) - contains examples of how to use **@sellify/admin-ui-components**.
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

## Components

See the projects in the [**examples**](https://github.com/Xamarsia/sellify/tree/main/examples/) workspace to view these components in use.

### Header

A page header component that displays a title on a primary-colored background.

| Prop    | Type     | Required | Description                               |
| ------- | -------- | -------- | ----------------------------------------- |
| `title` | `string` | Yes      | The heading text displayed in the header. |

### Main Layout

A top-level layout wrapper that renders its children in a full-width flex column.

| Prop       | Type        | Required | Description                                   |
| ---------- | ----------- | -------- | --------------------------------------------- |
| `children` | `ReactNode` | Yes      | The page content to render inside the layout. |

### Section

A titled content section with a bordered header and a constrained-width content area. Used to group related component examples under a common heading.

| Prop       | Type        | Required | Description                                      |
| ---------- | ----------- | -------- | ------------------------------------------------ |
| `title`    | `string`    | Yes      | The section heading text.                        |
| `children` | `ReactNode` | Yes      | The content displayed below the section heading. |

### Section Item

A subsection container with an optional title, used within a `Section` to separate individual component.

| Prop       | Type        | Required | Description                            |
| ---------- | ----------- | -------- | -------------------------------------- |
| `title`    | `string`    | No       | An optional heading for the item.      |
| `children` | `ReactNode` | Yes      | The content displayed inside the item. |
