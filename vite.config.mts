import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import fs from 'fs';

function getComponentEntries(dir: string) {
    const entries: Record<string, string> = {};
    fs.readdirSync(dir).forEach((file) => {
        const fullPath = resolve(dir, file);
        if (file.endsWith('.vue')) {
            const name = file.replace('.vue', '');
            entries[name] = fullPath;
        }
    });
    return entries;
}

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
            include: ['src/components/**/*.vue'],
            outputDir: 'dist/types',
            beforeWriteFile: (filePath, content) => {
                const newFilePath = filePath.replace('/src/components/', '/');
                return { filePath: newFilePath, content };
            },
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
            name: 'cmmv-ui',
            fileName: (format) => `cmmv-ui.${format}.js`,
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.ts'),
                ...getComponentEntries(resolve(__dirname, 'src/components')),
            },
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
                entryFileNames: '[name].js',
                preserveModules: true,
                preserveModulesRoot: 'src/components',
                inlineDynamicImports: false,
            },
        },
        cssCodeSplit: true,
    },

    resolve: {
        alias: {
            '@': resolve(__dirname, 'public'),
            '@components': resolve(__dirname, 'src/components'),
            '@composables': resolve(__dirname, 'src/composables'),
            '@mixins': resolve(__dirname, 'src/mixins'),
            '@services': resolve(__dirname, 'src/services'),
            '@utils': resolve(__dirname, 'src/utils'),
        },
    },
});
