<p align="center">
  <a href="https://cmmv.io/" target="blank"><img src="https://raw.githubusercontent.com/cmmvio/docs.cmmv.io/main/public/assets/logo_CMMV2_icon.png" width="300" alt="CMMV Logo" /></a>
</p>
<p align="center">Contract-Model-Model-View (CMMV) <br/> Building scalable and modular applications using contracts.</p>
<p align="center">
    <a href="https://www.npmjs.com/package/@cmmv/ui"><img src="https://img.shields.io/npm/v/@cmmv/ui.svg" alt="NPM Version" /></a>
    <a href="https://github.com/cmmvio/cmmv/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@cmmv/core.svg" alt="Package License" /></a>
</p>

<p align="center">
  <a href="https://ui.cmmv.io">Documentation</a> &bull;
  <a href="https://github.com/cmmvio/cmmv-ui/issues">Report Issue</a>
</p>

## Description

`@cmmv/ui` is a lightweight UI library designed for CMMV-based applications. It provides reactive and modular components for building dynamic and highly customizable user interfaces. Built with simplicity and scalability in mind, the library integrates seamlessly with the CMMV framework and leverages modern web standards for optimal performance.

<div style="background-color: #FFFBEB; border-left: 5px solid #FBBF24; color: #B45309; padding: 16px; border-radius: 8px; margin: 16px 0; font-family: Arial, sans-serif;">
    <p style="font-weight: bold; margin: 0 0 8px 0;">Disclaimer</p>
    <p style="margin: 0;">
        The <code>@cmmv/ui</code> module is currently in <strong>beta</strong>. It is not recommended for use in production applications. 
        Features and APIs are subject to change, and there may be unresolved issues or incomplete implementations. 
        Please use it for testing or experimental purposes only.
    </p>
</div>

## Philosophy

The `@cmmv/ui` library embraces the minimalist philosophy of CMMV, focusing on modularity, reactivity, and direct control over UI elements. It eliminates the need for heavyweight frontend frameworks while maintaining flexibility and ease of use.

## Features

- **Modular Components:** Reusable and composable components tailored for CMMV applications.
- **Reactive Data Binding:** Fully compatible with reactive state management.
- **Customizable Themes:** Built-in support for light and dark mode with easy theme switching.
- **Integration with CMMV:** Native integration with the CMMV framework for seamless development.
- **Lightweight:** Designed for performance with minimal overhead.

## Installation

Install the `@cmmv/ui` package via npm:

```bash
$ pnpm add @cmmv/ui
```

## Using Components

``@cmmv/ui`` provides pre-built components that you can use directly in your templates:

```vue
<template>
    <c-button size="md" type="button">
        Click Me
    </c-button>
</template>

<script>
import { CButton } from "@cmmv/ui";
</script>
```