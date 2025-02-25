const modules = import.meta.glob('./components/**/*.vue', { eager: true });

const components: Record<string, any> = {};

for (const path in modules) {
    const name = path.split('/').pop()?.replace('.vue', '') as string;
    components[name] = (modules[path] as any).default;
}

const install = (app: any) => {
    for (const [name, component] of Object.entries(components)) {
        app.component(name, component);
    }
};

export default { install };
export { components };
