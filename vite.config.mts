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
            resolvers: [AntDesignVueResolver()], // Mantém os resolvers
            dirs: ['src/components'], // Diretório de componentes
            extensions: ['vue'],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            dts: true,
        }),
        dts({
            outputDir: 'dist/types', // Geração de tipos
            include: ['src/**/*.ts', 'src/**/*.vue'], // Inclui arquivos Vue e TS
            insertTypesEntry: true, // Adiciona entrada de tipos
        }),
    ],

    server: {
        host: true, // Mantém o servidor
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
            entry: resolve(__dirname, 'src/index.ts'), // Entrada principal
            name: 'CmmvUI',
            fileName: (format) => `cmmv-ui.${format}.js`, // Arquivo gerado por formato
            formats: ['es', 'umd'], // Formatos ES Modules e UMD
        },
        rollupOptions: {
            external: ['vue'], // Exclui Vue do bundle
            output: {
                globals: {
                    vue: 'Vue',
                },
                assetFileNames: 'assets/[name].[ext]', // Organiza assets
            },
        },
        cssCodeSplit: true,
    },

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@components': resolve(__dirname, 'src/components'), // Mantém resolvers
            '@composables': resolve(__dirname, 'src/composables'),
            '@mixins': resolve(__dirname, 'src/mixins'),
            '@services': resolve(__dirname, 'src/services'),
            '@utils': resolve(__dirname, 'src/utils'),
        },
    },
});
