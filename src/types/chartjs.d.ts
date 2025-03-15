declare module 'chart.js' {
    export class Chart {
        constructor(ctx: any, config: any);
        destroy(): void;
        resize(): void;
        resetZoom?(): void;
        update?(): void;
    }
    export const registerables: any[];
}

declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
