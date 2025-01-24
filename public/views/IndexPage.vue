<template>
    <BaseLayout>
        <p align="center">
        <img src="https://raw.githubusercontent.com/cmmvio/docs.cmmv.io/main/public/assets/logo_CMMV2_icon.png" width="300" alt="CMMV Logo" />
        </p>
        <p align="center">Contract-Model-Model-View (CMMV) <br/> Building scalable and modular applications using contracts.</p>
        <div class="flex flex-container">
            <a href="https://www.npmjs.com/package/@cmmv/ui" target="_blank" rel="nofollow">
                <img src="https://img.shields.io/npm/v/@cmmv/ui.svg" alt="NPM Version" />
            </a>
            <a href="https://github.com/cmmvio/cmmv/blob/main/LICENSE" target="_blank" rel="nofollow">
                <img src="https://img.shields.io/npm/l/@cmmv/ui.svg" alt="Package License" />
            </a>
        </div>

        <br/>

        <p>
            <code>@cmmv/ui</code> is a modular UI component library built on top of Vue 3 and Tailwind CSS. It offers a collection of pre-designed, customizable components to streamline the development of user interfaces. This library is optimized for modern frontend frameworks, providing developers with tools to quickly build performant, scalable, and accessible web applications.
        </p>

        <p>
            Since <code>@cmmv/ui</code> is built using <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> and <a href="https://vuejs.org/" target="_blank">Vue 3</a>, it is essential that these dependencies are configured in your project. You can include them via direct imports in your build process or through a CDN for simpler setups.
        </p>

        <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md my-6">
            <p class="font-bold">Disclaimer</p>
            <p>
                The <code>@cmmv/ui</code> module is currently in <strong>beta</strong>. It is not recommended for use in production applications. 
                Features and APIs are subject to change, and there may be unresolved issues or incomplete implementations. 
                Please use it for testing or experimental purposes only.
            </p>
        </div>


        <h2>Features</h2>

        <br/>

        <ul>
            <li>Pre-built Vue 3 components with reactivity and flexibility.</li>
            <li>Customizable through props, slots, and styles.</li>
            <li>Supports theming and responsiveness out of the box.</li>
            <li>Integrates seamlessly with <code>@cmmv/core</code> and other modules in the CMMV ecosystem.</li>
        </ul>

        <h2>Installation</h2>

        <pre>
            <code class="code-highlight language-bash">$ pnpm install @cmmv/ui vue@latest tailwindcss</code>
        </pre>

        <h2>Vite Configuration</h2>

        <p>
            To configure the Vite environment for the <code>@cmmv/ui</code> project, include the following plugins and dependencies in your <code>vite.config.ts</code> file:
        </p>

        <pre>
<code class="code-highlight language-typescript">import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import dts from 'vite-plugin-dts';

const isDocs = process.env.BUILD_DOCS === 'true';

export default defineConfig({
    plugins: [
        vue(),
        viteTsconfigPaths(),
        Components({
            resolvers: [AntDesignVueResolver()],
            dirs: ['src/components'],
            extensions: ['vue'],
            include: [/\\.vue$/, /\\.vue\\?vue/, /\\.md$/]
        }),
        dts({ 
            include: ['src/**/*.ts', 'src/**/*.vue'], 
            insertTypesEntry: true 
        }),
    ],
    resolve: {
        alias: {
            '@': '/src',
            '@components': '/src/components',
            '@composables': '/src/composables',
            '@mixins': '/src/mixins',
            '@services': '/src/services',
            '@utils': '/src/utils',
        },
    },
    build: {
        target: 'esnext',
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        }
    },
});
</code>
</pre>

        <h2>Development Dependencies</h2>

        <p>
            Add the following development dependencies to your <code>package.json</code>:
        </p>
<pre>
<code class="code-highlight language-json">{
    "devDependencies": {
        "@vitejs/plugin-vue": "^5.2.1",
        "vite-tsconfig-paths": "^5.1.3",
        "unplugin-vue-components": "^0.27.5",
        "vite-plugin-dts": "^4.3.0",
        "typescript": "~5.6.3",
        "vue-tsc": "^2.1.10",
        "ant-design-vue": "^3.5.0"
    }
}
</code>
</pre>
<p>
    Install these dependencies using:
</p>
<pre>
<code class="code-highlight language-bash">$ pnpm add -D @vitejs/plugin-vue vite-tsconfig-paths unplugin-vue-components vite-plugin-dts typescript vue-tsc ant-design-vue</code>
</pre>

        <h2>Development</h2>

        <p>If you wish to contribute or customize the library, clone the repository and install dependencies:</p>
    
    <pre>
<code class="code-highlight language-bash">git clone https://github.com/cmmvio/cmmv-ui.git
cd cmmv-ui
pnpm install
</code>
    </pre>

    <h2>Build Commands</h2>
    <p>The library provides two types of builds:</p>

    <pre><code>pnpm run build</code></pre>

    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../layout/BaseLayout.vue";
</script>