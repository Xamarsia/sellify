<h1 align="center">
@sellify/tailwind-config
</h1>

This package provides __Tailwind CSS__ presets and includes __shared styles__ to maintain consistency throughout the monorepo.

## Usage

### Postcss

Add the following import to the postcss.config.mjs file.

```mjs
import { postcssConfig } from "@sellify/tailwind-config/postcss";

export default postcssConfig;
```

### Styles

To use the styles, add the following import to the global.css file.

```css
@import "@sellify/tailwind-config";
```
