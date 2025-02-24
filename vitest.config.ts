import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue()
    ],
    resolve: {
        alias: {
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
            '@mixins': fileURLToPath(new URL('./src/mixins', import.meta.url)),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
    },
});
