import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
    envDir: './',

    plugins: [
        vue(),
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

    server: {
        host: true, 
        port: 5000,
        cors: {
            origin: 'http://localhost:3000',
            credentials: true,
        },
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },

    build: {
        target: 'esnext',
        minify: 'terser',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'CmmvUI',
            fileName: (format) => `cmmv-ui.${format}.js`, 
            formats: ['es', 'umd'], 
        },
        rollupOptions: {
            external: ['vue'], 
            output: {
                globals: {
                    vue: 'Vue',
                },
                assetFileNames: 'assets/[name].[ext]', 
            },
        },
        cssCodeSplit: true,
    },

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@components': resolve(__dirname, 'src/components'),
            '@composables': resolve(__dirname, 'src/composables'),
            '@mixins': resolve(__dirname, 'src/mixins'),
            '@services': resolve(__dirname, 'src/services'),
            '@utils': resolve(__dirname, 'src/utils'),
        },
    },
});
