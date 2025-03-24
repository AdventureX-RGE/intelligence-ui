# intelligence-font

> The self-hosted version of Patika font family

## Installation

```bash
npm install intelligence-font@latest
# or
yarn add intelligence-font@latest
# or
pnpm add intelligence-font@latest
```

## Usage

### Basic Usage

```typescript
// Import the specific weight you want to use
import "intelligence-font/css/Patika Regular.css"
```

### Import Multiple Weights

```typescript
// Import multiple weights
import "intelligence-font/css/Patika Regular.css"
import "intelligence-font/css/Patika Bold.css"
```

### CSS Usage Examples

```css
/* Using single weight */
.text {
  font-family: "Patika Regular";
  font-weight: 400;
}

/* Different weights examples */
.text-light {
  font-family: "Patika Light";
  font-weight: 300;
}

.text-regular {
  font-family: "Patika Regular";
  font-weight: 400;
}

.text-medium {
  font-family: "Patika Medium";
  font-weight: 500;
}

.text-bold {
  font-family: "Patika Bold";
  font-weight: 700;
}

/* Combining with CSS variables */
:root {
  --font-patika: "Patika Regular";
}

.custom-text {
  font-family: var(--font-patika);
}
```

### Tailwind CSS3 Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        patika: ['"Patika Regular"', 'sans-serif'],
        'patika-bold': ['"Patika Bold"', 'sans-serif'],
      },
    },
  },
}

// Usage in HTML/JSX
<p className="font-patika">Regular text</p>
<p className="font-patika-bold">Bold text</p>
```

## Tailwind CSS4 Configuration

```css
@import "intelligence-font/css/Patika Bold.css";

@layer base {
  * {
    font-family: "Patika Bold";
  }
}
```

## Available Weights

| Weight Name | Font Weight |
| ----------- | ----------- |
| ExtraLight  | 200         |
| Light       | 300         |
| Regular     | 400         |
| Medium      | 500         |
| SemiBold    | 600         |
| Bold        | 700         |
| ExtraBold   | 800         |
| Black       | 900         |

## TypeScript Support

This package includes TypeScript type definitions:

```typescript
import type { PatikaFont, PatikaFontWeight, PatikaFontStyle } from "intelligence-font"

// Type-safe font style usage
const fontStyle: PatikaFontStyle = "Regular"
const fontWeight: PatikaFontWeight = 400

// Full font configuration type
const fontConfig: PatikaFont = {
  style: "Regular",
  weight: 400,
  css: "path/to/css",
  woff: "path/to/woff",
  woff2: "path/to/woff2",
}
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

This package uses the Patika font family. Please ensure you have the proper license to use this font in your project.

## Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
