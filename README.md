<p align="center">
  <a href="https://cmmv.io/" target="blank"><img src="https://raw.githubusercontent.com/cmmvio/docs.cmmv.io/main/public/assets/logo_CMMV2_icon.png" width="300" alt="CMMV Logo" /></a>
</p>
<p align="center">Contract-Model-Model-View (CMMV) <br/> Building scalable and modular applications using contracts.</p>
<p align="center">
    <a href="https://www.npmjs.com/package/@cmmv/ui"><img src="https://img.shields.io/npm/v/@cmmv/ui.svg" alt="NPM Version" /></a>
    <a href="https://github.com/cmmvio/cmmv/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@cmmv/ui.svg" alt="Package License" /></a>
    <a href="https://ui.cmmv.io"><img src="https://img.shields.io/badge/docs-ui.cmmv.io-blue.svg" alt="Documentation" /></a>
    <a href="https://discord.gg/cmmv"><img src="https://img.shields.io/badge/chat-discord-7289da.svg" alt="Discord" /></a>
</p>

<p align="center">
  <a href="https://ui.cmmv.io">Documentation</a> &bull;
  <a href="https://github.com/cmmvio/cmmv-ui/issues">Report Issue</a> &bull;
  <a href="#quick-start">Quick Start</a>
</p>

## Description

`@cmmv/ui` is a modern UI component library built on Vue 3 and Tailwind CSS. It provides a comprehensive collection of pre-designed, fully customizable components that help you build beautiful, responsive, and accessible web applications faster.

Designed to integrate seamlessly with the CMMV architecture pattern, this library offers both flexibility and structure, allowing developers to create consistent user interfaces while maintaining the freedom to customize every aspect of their application's appearance.

<div style="background-color: #FFFBEB; border-left: 5px solid #FBBF24; color: #B45309; padding: 16px; border-radius: 8px; margin: 16px 0; font-family: Arial, sans-serif;">
    <p style="font-weight: bold; margin: 0 0 8px 0;">Disclaimer</p>
    <p style="margin: 0;">
        The <code>@cmmv/ui</code> module is currently in <strong>beta</strong>. It is not recommended for use in production applications. 
        Features and APIs are subject to change, and there may be unresolved issues or incomplete implementations. 
        Please use it for testing or experimental purposes only.
    </p>
</div>

## Philosophy

The `@cmmv/ui` library is built on three core principles:

### 1. Contract-First Development

Following the CMMV pattern, our components are designed with clear contracts that define their behavior, props, events, and slots. This approach ensures consistency and predictability across your application.

### 2. Simplicity with Flexibility

We provide components that are simple to use out of the box, yet highly customizable for specific needs. Our goal is to reduce boilerplate while giving you complete control over your UI.

### 3. Performance and Accessibility

Every component is optimized for performance and follows accessibility best practices, ensuring your applications are fast and usable by everyone.

## Key Benefits

- **Seamless Integration**: Works perfectly with Vue 3 and Tailwind CSS
- **Dark Mode Support**: Built-in dark mode for all components
- **Responsive Design**: Components are designed to work on all screen sizes
- **Type Safety**: Full TypeScript support with comprehensive types
- **Consistent API**: All components follow the same patterns and conventions
- **Customizable**: Easily override styles and behaviors to match your brand

## Components

`@cmmv/ui` includes a growing collection of components:

### Layout
- Cards, Containers, Grids
- Responsive navigation and menus

### Form Elements
- Buttons, Inputs, Selects, Checkboxes
- Date pickers, Time pickers
- Form validation

### Data Display
- Tables, Lists
- Badges, Tags, Progress indicators

### Feedback
- Alerts, Notifications
- Modals, Dialogs
- Loaders, Skeletons

### Navigation
- Tabs, Pagination
- Breadcrumbs, Steppers

## Quick Start

### Installation

```bash
# With pnpm
pnpm add @cmmv/ui vue@latest tailwindcss

# With npm
npm install @cmmv/ui vue@latest tailwindcss

# With yarn
yarn add @cmmv/ui vue@latest tailwindcss
```

### Setup

1. **Configure Tailwind CSS**

```bash
# Install Tailwind CSS dependencies
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@cmmv/ui/**/*.{vue,js,ts,jsx,tsx}" // Include @cmmv/ui components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add Tailwind directives to your CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

2. **Configure Vue Plugin**

```js
// main.js or main.ts
import { createApp } from 'vue'
import UI from '@cmmv/ui'
import App from './App.vue'

const app = createApp(App)
app.use(UI)
app.mount('#app')
```

## Usage Examples

### Basic Button

```vue
<template>
  <c-button variant="primary" @click="handleClick">
    Click Me
  </c-button>
</template>

<script setup>
function handleClick() {
  console.log('Button clicked')
}
</script>
```

### Form Input with Floating Label

```vue
<template>
  <c-input 
    v-model="username" 
    label="Username" 
    placeholder="Enter your username"
    :floatingLabel="true"
  />
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
</script>
```

### Notifications

```vue
<template>
  <c-button @click="showNotification">
    Show Notification
  </c-button>
  
  <c-notification ref="notification" />
</template>

<script setup>
import { ref } from 'vue'

const notification = ref(null)

function showNotification() {
  notification.value.showNotification({
    newTitle: 'Success',
    newContent: 'Operation completed successfully!',
    newDuration: 3000
  })
}
</script>
```

## Understanding CMMV Architecture

CMMV (Contract-Model-Model-View) is an architectural pattern designed to create highly modular, maintainable, and scalable frontend applications. The pattern separates concerns into four distinct layers:

1. **Contract**: Defines interfaces and data structures that connect different parts of the application
2. **Domain Model**: Manages business logic and validation rules independent of UI concerns
3. **View Model**: Transforms domain model data into a format suitable for presentation
4. **View**: Handles presentation logic and user interactions without containing business logic

The `@cmmv/ui` library primarily serves the View layer of CMMV applications, providing pre-built components that can be easily integrated with your View Models.

To learn more about CMMV architecture, check out the [CMMV documentation](https://cmmv.io).

## Complete Documentation

For comprehensive documentation of all components, including:
- Detailed API references
- Interactive examples
- Theming guides
- Best practices

Visit our [documentation site](https://ui.cmmv.io).

## Contributing

We welcome contributions from the community! Whether it's adding new features, fixing bugs, or improving documentation, your help is appreciated.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please read our [Contributing Guide](CONTRIBUTING.md) for more details.

## Support

- 📚 [Documentation](https://ui.cmmv.io)
- 🐛 [Report bugs](https://github.com/cmmvio/cmmv-ui/issues)

