import { defineAsyncComponent } from "vue";

const modules = import.meta.glob('./components/**/*.vue');

const components: Record<string, any> = {};

for (const path in modules) {
    const name = path.split('/').pop()?.replace('.vue', '') as string;
    components[name] = (modules[path] as any).default;
}

const install = (app: any) => {
    for (const path in modules) {
        const name = path.split('/').pop()?.replace('.vue', '') as string;

        app.component(
            name,
            defineAsyncComponent(() => modules[path]().then((mod: any) => mod.default))
        );
    }
};

export default { install };
export { components };
