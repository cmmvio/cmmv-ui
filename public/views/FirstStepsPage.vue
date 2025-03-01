<template>
    <BaseLayout>
        <h1>First Steps</h1>

        <p>
            This guide will help you set up a new project with <code>@cmmv/ui</code> using Vue 3 and Vite.
            We'll cover the installation process, basic configuration, and how to start using the components.
        </p>

        <h3>Prerequisites</h3>

        <p>Before you begin, make sure you have the following installed:</p>

        <ul class="list-disc pl-5 space-y-2 mb-6">
            <li>Node.js (version 16 or later)</li>
            <li>pnpm, npm, or yarn package manager</li>
        </ul>

        <br />

        <h3>Creating a New Vue Project</h3>

        <p>
            The easiest way to start is by creating a new Vue project using the official Vue scaffolding tool.
            We'll use pnpm for this guide, but you can use npm or yarn as well.
        </p>

        <pre
            class="rounded-md"><code class="code-highlight language-bash">pnpm create vue@latest my-cmmv-app</code></pre>

        <p>During the setup, you'll be asked about various features. For optimal use with <code>@cmmv/ui</code>, we
            recommend:</p>

        <ul class="list-disc pl-5 space-y-2 mb-6">
            <li>✅ Add TypeScript</li>
            <li>✅ Add Vue Router</li>
            <li>✅ Add Pinia for state management</li>
            <li>✅ Add Vitest for unit testing</li>
            <li>✅ Add ESLint for code quality</li>
            <li>Choose your preferred options for other features</li>
        </ul>

        <p>Once the project is created, navigate to the project directory and install the dependencies:</p>

        <pre class="rounded-md"><code class="code-highlight language-bash">cd my-cmmv-app
pnpm install</code></pre>

        <br />

        <h3>Installing @cmmv/ui</h3>

        <p>Now, let's install the <code>@cmmv/ui</code> library and its peer dependencies:</p>

        <pre
            class="rounded-md"><code class="code-highlight language-bash">pnpm install @cmmv/ui vue@latest tailwindcss</code></pre>

        <br />

        <h3>Configuring Tailwind CSS</h3>

        <p>Since <code>@cmmv/ui</code> is built with Tailwind CSS, you need to set it up in your project:</p>

        <pre class="rounded-md"><code class="code-highlight language-bash">pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>

        <p>Update your <code>tailwind.config.js</code> file to include the paths to your template files:</p>

        <pre class="rounded-md"><code class="code-highlight language-javascript">/** @type {import('tailwindcss').Config} */
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
}</code></pre>

        <p>Create or update your CSS file (e.g., <code>src/assets/main.css</code>) with the Tailwind directives:</p>

        <pre class="rounded-md"><code class="code-highlight language-css">@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>

        <br />

        <h3>Configuring Vite</h3>

        <p>Update your <code>vite.config.ts</code> file to configure the project correctly:</p>

        <card-docs>
            <template #code>
                <pre><code class="code-highlight language-typescript">import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), 'VITE')

    return {
        plugins: [vue()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            proxy: {
                '/api': {
                    target: env.VITE_API_URL || 'http://localhost:3000',
                    changeOrigin: true,
                    secure: false,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
    }
})</code></pre>
            </template>
        </card-docs>

        <h3>Setting up @cmmv/ui as a Global Component</h3>

        <p>To use <code>@cmmv/ui</code> components globally in your Vue application, modify your
            <code>src/main.ts</code> file:
        </p>

        <card-docs>
            <template #code>
                <pre><code class="code-highlight language-javascript">import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import UI from '@cmmv/ui'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(UI)

app.mount('#app')</code></pre>
            </template>
        </card-docs>

        <h3>Using @cmmv/ui Components</h3>

        <p>Now you can start using <code>@cmmv/ui</code> components in your application. Here's a simple example:</p>

        <card-docs>
            <h1 class="text-2xl font-bold mb-4">Welcome to CMMV UI</h1>

            <c-button variant="primary" @click="showNotification">
                Click me!
            </c-button>

            <c-notification ref="notification" />

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;div class="p-8"&gt;
    &lt;h1 class="text-2xl font-bold mb-4"&gt;Welcome to CMMV UI&lt;/h1&gt;

    &lt;c-button variant="primary" @click="showNotification"&gt;
      Click me!
    &lt;/c-button&gt;

    &lt;c-notification ref="notification" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'

const notification = ref(null)

function showNotification() {
  notification.value?.showNotification({
    newTitle: 'Success',
    newContent: 'You have successfully set up CMMV UI!',
    newDuration: 3000
  })
}
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Environment Variables</h3>

        <p>
            For API configuration and other environment-specific settings, create a <code>.env</code> file in your
            project root:
        </p>

        <pre
            class="rounded-md"><code class="code-highlight language-env">VITE_API_URL=http://localhost:3000</code></pre>

        <p>You can create different environment files for different environments:</p>

        <ul class="list-disc pl-5 space-y-2 mb-6">
            <li><code>.env.development</code> - for development</li>
            <li><code>.env.production</code> - for production</li>
            <li><code>.env.test</code> - for testing</li>
        </ul>

        <h3>Running Your Application</h3>

        <p>Start the development server:</p>

        <pre class="rounded-md"><code class="code-highlight language-bash">pnpm dev</code></pre>

        <p>Your application should now be running at <code>http://localhost:5173</code> with <code>@cmmv/ui</code> ready
            to use!
        </p>

        <h3>Next Steps</h3>

        <p>
            Now that you have set up your project with <code>@cmmv/ui</code>, explore the component library
            to see what's available. Check out the documentation for each component to learn about its props,
            events, and customization options.
        </p>

        <PagePagination previous="Home" previousLink="/" next="AI Chat" nextLink="/ai-chat" />
    </BaseLayout>
</template>

<script setup>
import { ref } from 'vue'
import BaseLayout from "../layout/BaseLayout.vue";
import PagePagination from "../layout/PagePagination.vue";
import CardDocs from "../components/CardDocs.vue";

const notification = ref(null)

function showNotification() {
    notification.value?.showNotification({
        newTitle: 'Success',
        newContent: 'You have successfully set up CMMV UI!',
        newDuration: 3000
    })
}
</script>

<style scoped>
h2 {
    @apply text-xl font-semibold mt-8 mb-4;
}

pre {
    @apply my-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 overflow-x-auto;
}
</style>
