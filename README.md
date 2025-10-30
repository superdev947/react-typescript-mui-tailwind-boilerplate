# React + TypeScript + Material-UI + Tailwind CSS Boilerplate

A modern, production-ready React boilerplate that combines the power of TypeScript, Material-UI (MUI), and Tailwind CSS. This starter template provides a solid foundation for building scalable web applications with a beautiful UI and utility-first CSS.

## ✨ Features

- ⚛️ **React 19** - Latest version of React
- 🔷 **TypeScript** - Type-safe code with TypeScript 4.9
- 🎨 **Material-UI v6** - Comprehensive React component library
- 🎯 **Tailwind CSS v3** - Utility-first CSS framework
- 🌓 **Dark Mode** - Built-in dark mode support
- 💅 **Emotion** - CSS-in-JS styling
- 🔧 **ESLint & Prettier** - Code quality and formatting
- 🧪 **Testing Library** - React testing utilities
- 📦 **React Scripts 5** - Zero-config build setup

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/superdev947/react-typescript-mui-tailwind-boilerplate.git
cd react-typescript-mui-tailwind-boilerplate
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode. The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm start`
Serves the production build locally using `serve`. Run `npm run build` first.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run lint`
Runs ESLint to check for code quality issues in TypeScript files.

### `npm run format`
Formats code using Prettier.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.

## 🏗️ Project Structure

```
react-typescript-mui-tailwind-boilerplate/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── pages/
│   │   └── index.tsx          # Home page component
│   ├── App.tsx                # Main app component with theme provider
│   ├── index.tsx              # Entry point
│   ├── index.css              # Global styles and Tailwind directives
│   ├── react-app-env.d.ts     # TypeScript declarations
│   └── reportWebVitals.ts     # Performance monitoring
├── package.json
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── README.md
```

## 🎨 Material-UI + Tailwind CSS Integration

This boilerplate successfully integrates Material-UI and Tailwind CSS by:

1. **Disabling Tailwind's Preflight** - Prevents conflicts with MUI's CssBaseline
   ```javascript
   // tailwind.config.js
   corePlugins: {
     preflight: false,
   }
   ```

2. **Setting Important Selector** - Ensures Tailwind utilities have proper specificity
   ```javascript
   // tailwind.config.js
   important: "#root"
   ```

3. **Coordinated Dark Mode** - Both MUI theme and Tailwind dark mode work together
   ```typescript
   // MUI theme switches between light/dark
   // Tailwind uses class-based dark mode
   darkMode: "class"
   ```

## 🌓 Dark Mode

The boilerplate includes a working dark mode implementation that synchronizes between Material-UI and Tailwind CSS:

- MUI theme switches between light and dark palettes
- Tailwind utilities respond to the `dark` class on parent elements
- Toggle dark mode with the button on the home page

## 🔧 Configuration

### TypeScript

TypeScript configuration is located in `tsconfig.json`. It's set up with strict mode and optimized for React development.

### Tailwind CSS

Customize Tailwind in `tailwind.config.js`:
- Extend the theme
- Add custom colors, spacing, etc.
- Configure plugins

### Material-UI

Theme customization is done in `src/App.tsx` using the `createTheme` function:
```typescript
const theme = createTheme({
  palette: {
    mode: darkMode ? 'dark' : 'light'
  },
  cssVariables: true
})
```

## 📦 Dependencies

### Main Dependencies
- `react` & `react-dom` - React library
- `@mui/material` - Material-UI components
- `@emotion/react` & `@emotion/styled` - CSS-in-JS for MUI
- `tailwindcss` - Utility-first CSS framework

### Dev Dependencies
- `typescript` - TypeScript compiler
- `react-scripts` - Create React App scripts
- `eslint` & `prettier` - Code quality tools
- `@testing-library/*` - Testing utilities

## 🧪 Testing

This project uses React Testing Library for component testing. Write tests in `.test.tsx` or `.spec.tsx` files.

```bash
npm test
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Vercel

```bash
vercel
```

### Deploy to Netlify

```bash
netlify deploy --prod --dir=build
```

## 💡 Usage Examples

### Using Material-UI Components

```tsx
import { Button, TextField, Box } from '@mui/material'

function MyComponent() {
  return (
    <Box sx={{ p: 2 }}>
      <TextField label="Name" variant="outlined" />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  )
}
```

### Using Tailwind Utilities

```tsx
function MyComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-blue-600">
        Hello Tailwind!
      </h1>
    </div>
  )
}
```

### Combining Both

```tsx
import { Button } from '@mui/material'

function MyComponent() {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <Button 
        variant="contained" 
        className="mt-4"
      >
        MUI Button with Tailwind margin
      </Button>
    </div>
  )
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
