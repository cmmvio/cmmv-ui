import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        viteTsconfigPaths(),
        Components({
            resolvers: [AntDesignVueResolver()],
            dirs: ['src/components'], 
            extensions: ['vue'],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            dts: true,
        }),
        dts({
            include: ['src/**/*.ts', 'src/**/*.vue'], 
            insertTypesEntry: true, 
        }),
    ],

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
            '@mixins': fileURLToPath(new URL('./src/mixins', import.meta.url)),
            '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
            '@utils': fileURLToPath(new URL('./src/utils', import.meta.url))
        },
    },

    build: {
        target: 'esnext',
        lib: {
            entry: 'src/index.ts', // Arquivo de entrada do pacote
            name: 'CmmvUI',
            fileName: (format) => `cmmv-ui.${format}.js`,
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
})
