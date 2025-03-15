import { defineAsyncComponent } from "vue";
import { createHead } from '@vueuse/head'

const modules = import.meta.glob([
    './components/**/*.vue',
    './components/icons/*.{vue,ts,js}'
]);

const iconComponents = import.meta.glob('@components/icons/*.vue');
const loaderComponents = import.meta.glob('@components/loader/*.vue');

const components: Record<string, any> = {};

for (const path in modules) {
    const name = path.split('/').pop()?.replace(/\.(vue|ts|js)$/, '') as string;
    components[name] = (modules[path] as any).default;
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

    for (const path in modules) {
        const name = path.split('/').pop()?.replace(/\.(vue|ts|js)$/, '') as string;

        app.component(
            name,
            defineAsyncComponent(() => modules[path]().then((mod: any) => mod.default))
        );
    }

    for (const path in iconComponents) {
        const name = path.split('/').pop()?.replace(/\.(vue|ts|js)$/, '') as string;

        app.component(
            name,
            defineAsyncComponent(() => iconComponents[path]().then((mod: any) => mod.default))
        );
    }

    for (const path in loaderComponents) {
        const name = path.split('/').pop()?.replace(/\.(vue|ts|js)$/, '') as string;

        app.component(
            name,
            defineAsyncComponent(() => loaderComponents[path]().then((mod: any) => mod.default))
        );
    }
};

export default { install };
export { components };
