import { fileURLToPath, URL } from 'node:url';
import fs from 'fs-extra';
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
    const isDocs = mode === 'docs';

    return {
        define: {
            'process.env.NODE_ENV': JSON.stringify(mode === 'docs' ? 'production' : 'development'),
        },

        vue: {
            compilerOptions: {//@ts-ignore
              isCustomElement: tag => tag.startsWith('icon-'),
            },
        },

        plugins: [
            vue(),
            viteTsconfigPaths(),
            cssInjectedByJsPlugin(),
            Components({
                resolvers: [AntDesignVueResolver()],
                dirs: ['src/components'],
                extensions: ['vue'],
                include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
                dts: !isDocs,
            }),
            ...(isDocs ? [] : [dts({ include: ['src/**/*.ts', 'src/**/*.vue'], insertTypesEntry: true })]),
        ],

        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
                '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
                '@mixins': fileURLToPath(new URL('./src/mixins', import.meta.url)),
                '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
                '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
            },
        },

        server: {
            host: true,
            port: 4173,
        },

        preview: {
            allowedHosts: ["ui.cmmv.io"],
            port: 4173,
        },

        build: isDocs
            ? {
                outDir: 'dist',
                manifest: true,
                cssCodeSplit: true,
                rtl: true,
                lib: {
                    entry: 'src/index.ts',
                    fileName: (format) => `cmmv-ui.${format}.js`,
                    formats: ['es'],
                },
                rollupOptions: {
                    input: 'index.html',
                    output: {
                        preserveModules: true,
                    },
                },
              }
            : {
                cssCodeSplit: true,
                  lib: {
                      entry: 'src/module.ts',
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
                        preserveModules: true,
                        preserveModulesRoot: 'src',
                      },
                  },
              },

        async closeBundle() {
            const srcIndex = path.resolve(__dirname, 'src/index.js');
            const destIndex = path.resolve(__dirname, 'dist/index.js');
            if (fs.existsSync(srcIndex)) {
                await fs.copy(srcIndex, destIndex);
                console.log('✅ index.js copiado para dist/');
            }
        }
    };
});
