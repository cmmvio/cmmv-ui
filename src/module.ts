import { defineAsyncComponent } from "vue";
import { createHead } from '@vueuse/head'

const modules = import.meta.glob([
    './components/**/*.vue',
    './components/icons/*.{vue,ts,js}'
], { eager: true });

const iconComponents = import.meta.glob('@components/icons/*.vue', { eager: true });
const loaderComponents = import.meta.glob('@components/loader/*.vue', { eager: true });

const components: Record<string, any> = {};

for (const path in modules) {
    const name = path.split('/').pop()?.replace(/\.(vue|ts|js)$/, '') as string;
    components[name] = (modules[path] as any).default;
}

for (const path in iconComponents) {
    const name = path.split('/').pop()?.replace(/\.(vue|ts|js)$/, '') as string;
    components[name] = (iconComponents[path] as any).default;
}

for (const path in loaderComponents) {
    const name = path.split('/').pop()?.replace(/\.(vue|ts|js)$/, '') as string;
    components[name] = (loaderComponents[path] as any).default;
}

const head = createHead({
    titleTemplate: '%s | CMMV UI',//@ts-ignore
    htmlAttrs: {
        lang: 'en'
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A modern Vue 3 component library with TypeScript support and Tailwind CSS styling' },
        { name: 'theme-color', content: '#ffffff' }
    ]
})

const install = (app: any) => {
    app.use(head)

    for (const [name, component] of Object.entries(components)) {
        app.component(name, component);
    }

    for (const [name, component] of Object.entries(iconComponents)) {
        app.component(name, component);
    }

    for (const [name, component] of Object.entries(loaderComponents)) {
        app.component(name, component);
    }
};

export default { install };
export { components };
