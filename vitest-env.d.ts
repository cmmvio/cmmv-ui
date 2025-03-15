/// <reference types="vite/client" />
/// <reference types="@vue/test-utils" />
/// <reference types="vitest/globals" />

// Exportar todos os tipos globais do vitest
declare module 'vitest' {
    export * from 'vitest/globals';
}

// Global declarations
declare global {
    // For ResizeObserver in tests
    class ResizeObserver {
        constructor(callback: any);
        observe(target: Element): void;
        unobserve(target: Element): void;
        disconnect(): void;
    }

    // For MutationObserver mock
    var MutationObserver: any;

    // For monaco editor environment
    interface Window {
        MonacoEnvironment?: {
            getWorker(moduleId: string, label: string): any;
        };
        innerWidth: number;
        innerHeight: number;
    }

    // For global access in Node environment
    var global: typeof globalThis;
}

// Chart.js module declaration
declare module 'chart.js' {
    export const registerables: any[];

    export class Chart {
        static register(...args: any[]): void;
        constructor(ctx: any, config: any);
        destroy(): void;
        resize(): void;
        update(): void;
    }

    export const BarElement: any;
    export const BarController: any;
    export const CategoryScale: any;
    export const LinearScale: any;
    export const Tooltip: any;
    export const Legend: any;
}

// Monaco editor module declaration
declare module 'monaco-editor' {
    const monaco: any;
    export default monaco;
    export const editor: any;
    export const languages: any;
    export const Uri: any;
}

// Worker import declarations
declare module '*?worker' {
    const workerConstructor: any;
    export default workerConstructor;
}

// Vue Test Utils typing
declare module '@vue/test-utils' {
    interface VueWrapper<T = any> {
        emitted<K extends string>(event?: K): Record<string, any[]> | undefined;
    }
}

export { };
