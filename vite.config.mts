import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import viteTsconfigPaths from 'vite-tsconfig-paths';

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
            formats: ['es', 'cjs', 'umd'], 
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
            preserveEntrySignatures: false,
            plugins: [
                {
                    name: 'exclude-public-folder',
                    generateBundle(options, bundle) {
                        Object.keys(bundle).forEach((key) => {
                            if (key.startsWith('public/')) {
                                delete bundle[key];
                            }
                        });
                    }
                }
            ]
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
            '@utils': resolve(__dirname, 'src/utils')    
        }
    }
})