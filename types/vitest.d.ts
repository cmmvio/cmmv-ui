/// <reference types="vitest/globals" />

// Declaração para o objeto global que contém o mock do Chart.js
interface Window {
    __chartJsMock: {
        Chart: any;
        registerables: any[];
    };
}

// Extensão para o Chart.js
declare module 'chart.js' {
    export const registerables: any[];

    export class Chart {
        static register(...args: any[]): void;
        constructor(ctx: any, config: any);
        destroy(): void;
        resize(): void;
        resetZoom(): void;
        update(): void;
    }
}

declare module 'vitest' {
    export * from 'vitest/globals';
}

// Resolva outros erros de tipo
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
