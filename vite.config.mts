import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import postcssNesting from 'postcss-nesting';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
    envDir: './',

    css: {
        preprocessorOptions: {
            scss: {
              additionalData: `@import "@vueform/vueform/themes/vueform/scss/index.scss";`
            }
        },
        postcss: {
            plugins: [
                postcssNesting
            ],
        },
    },

    plugins: [
        vue(), 
        Components({
            dirs: ['src/components'],
            extensions: ['vue'],
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
            name: 'cmmv',
            fileName: (format) => `cmmv.${format}.js`,
            formats: ['es', 'cjs', 'umd', 'iife']
        },
        rollupOptions: {
            external: ['vue'],                  
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
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