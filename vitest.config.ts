/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
        mockReset: false,
        deps: {
            inline: [/monaco-editor/]
        },
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components')
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            'monaco-editor/esm/vs/editor/editor.worker?worker': path.resolve(__dirname, 'tests/mocks/monaco-workers.ts'),
            'monaco-editor/esm/vs/language/json/json.worker?worker': path.resolve(__dirname, 'tests/mocks/monaco-workers.ts'),
            'monaco-editor/esm/vs/language/css/css.worker?worker': path.resolve(__dirname, 'tests/mocks/monaco-workers.ts'),
            'monaco-editor/esm/vs/language/html/html.worker?worker': path.resolve(__dirname, 'tests/mocks/monaco-workers.ts'),
            'monaco-editor/esm/vs/language/typescript/ts.worker?worker': path.resolve(__dirname, 'tests/mocks/monaco-workers.ts'),
            'monaco-editor': path.resolve(__dirname, 'tests/mocks/monaco-editor.ts')
        }
    }
});
