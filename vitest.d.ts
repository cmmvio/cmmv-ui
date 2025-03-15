/// <reference types="vitest" />
/// <reference types="vitest/globals" />

import type { ComponentPublicInstance } from 'vue';

// Add global declarations
declare global {
    var ResizeObserver: any;

    interface ResizeObserverEntry {
        contentRect: {
            width: number;
            height: number;
        };
    }
}

// Make the module importable with the correct exports
declare module 'vitest' {
    export * from 'vitest/globals';
}

export { };

declare module 'vitest' {
    // Suite definitions
    export interface Suite {
        name: string;
        mode: 'run' | 'skip' | 'only' | 'todo';
        each?: boolean;
        concurrent?: boolean;
        sequential?: boolean;
    }

    // Test definitions
    export interface Test {
        name: string;
        mode: 'run' | 'skip' | 'only' | 'todo';
        each?: boolean;
        concurrent?: boolean;
        sequential?: boolean;
    }

    // Basic test functions
    export function describe(name: string, fn: () => void): void;
    export function describe<T extends object>(name: string, fn: (this: T) => void): void;

    export namespace describe {
        export function skip(name: string, fn: () => void): void;
        export function only(name: string, fn: () => void): void;
        export function concurrent(name: string, fn: () => void): void;
        export function each<T extends any[]>(cases: T[]): (name: string, fn: (...args: T) => void) => void;
    }

    export function it(name: string, fn?: () => void | Promise<void>): void;
    export function it<T extends object>(name: string, fn: (this: T) => void | Promise<void>): void;

    export namespace it {
        export function skip(name: string, fn?: () => void | Promise<void>): void;
        export function only(name: string, fn: () => void | Promise<void>): void;
        export function concurrent(name: string, fn: () => void | Promise<void>): void;
        export function todo(name: string): void;
        export function each<T extends any[]>(cases: T[]): (name: string, fn: (...args: T) => void | Promise<void>) => void;
    }

    // Alias for it
    export const test: typeof it;

    // Hooks
    export function beforeEach(fn: () => void | Promise<void>): void;
    export function afterEach(fn: () => void | Promise<void>): void;
    export function beforeAll(fn: () => void | Promise<void>): void;
    export function afterAll(fn: () => void | Promise<void>): void;

    // Assertions
    export interface Assertion<T = any> {
        toBe(expected: T): void;
        toBeCloseTo(expected: number, precision?: number): void;
        toBeDefined(): void;
        toBeFalsy(): void;
        toBeGreaterThan(expected: number): void;
        toBeGreaterThanOrEqual(expected: number): void;
        toBeLessThan(expected: number): void;
        toBeLessThanOrEqual(expected: number): void;
        toBeInstanceOf(expected: any): void;
        toBeNull(): void;
        toBeTruthy(): void;
        toBeUndefined(): void;
        toContain(expected: any): void;
        toContainEqual(expected: any): void;
        toEqual(expected: any): void;
        toHaveBeenCalled(): void;
        toHaveBeenCalledTimes(expected: number): void;
        toHaveBeenCalledWith(...args: any[]): void;
        toHaveBeenLastCalledWith(...args: any[]): void;
        toHaveLength(expected: number): void;
        toHaveProperty(keyPath: string | any[], value?: any): void;
        toMatch(expected: string | RegExp): void;
        toMatchObject(expected: object | any[]): void;
        toMatchSnapshot(): void;
        toThrow(expected?: string | Error | RegExp): void;
        toThrowError(expected?: string | Error | RegExp): void;
        not: Assertion<T>;
        resolves: Assertion<T>;
        rejects: Assertion<T>;
    }

    export function expect<T = any>(actual: T): Assertion<T>;

    export namespace expect {
        export function extend(matchers: Record<string, any>): void;
        export function assertions(expected: number): void;
        export function hasAssertions(): void;
        export function any(constructor: any): any;
        export function anything(): any;
        export function arrayContaining(expected: any[]): any;
        export function objectContaining(expected: object): any;
        export function stringContaining(expected: string): any;
        export function stringMatching(expected: string | RegExp): any;
    }

    // Mock functionality
    export interface MockInstance<T = any, Y extends any[] = any[]> {
        (...args: Y): T;
        mock: {
            calls: Y[];
            instances: T[];
            invocationCallOrder: number[];
            results: { type: string; value: any }[];
            lastCall: Y;
            results: { isThrow: boolean; value: any }[];
        };
        mockClear(): MockInstance<T, Y>;
        mockReset(): MockInstance<T, Y>;
        mockImplementation(fn: (...args: Y) => T): MockInstance<T, Y>;
        mockImplementationOnce(fn: (...args: Y) => T): MockInstance<T, Y>;
        mockName(name: string): MockInstance<T, Y>;
        mockReturnThis(): MockInstance<T, Y>;
        mockReturnValue(value: T): MockInstance<T, Y>;
        mockReturnValueOnce(value: T): MockInstance<T, Y>;
        mockResolvedValue(value: T): MockInstance<T, Y>;
        mockResolvedValueOnce(value: T): MockInstance<T, Y>;
        mockRejectedValue(value: any): MockInstance<T, Y>;
        mockRejectedValueOnce(value: any): MockInstance<T, Y>;
    }

    export interface Vi {
        fn<T = any, Y extends any[] = any[]>(implementation?: (...args: Y) => T): MockInstance<T, Y>;
        spyOn<T = any>(object: T, method: keyof T): MockInstance;
        mock(path: string, factory?: any): void;
        unmock(path: string): void;
        doMock(path: string, factory?: any): void;
        doUnmock(path: string): void;
        resetModules(): void;
        clearAllMocks(): void;
        resetAllMocks(): void;
        restoreAllMocks(): void;
        hoisted<T>(factory: () => T): T;
        useFakeTimers(): void;
        useRealTimers(): void;
        runOnlyPendingTimers(): void;
        runAllTimers(): void;
        runAllTicks(): void;
        advanceTimersByTime(msToRun: number): void;
        advanceTimersToNextTimer(steps?: number): void;
        getTimerCount(): number;
        setSystemTime(now?: number | Date): void;
        getMockedSystemTime(): Date | null;
        stubGlobal(name: string, value: any): void;
        stubEnv(name: string, value: any): void;
    }

    export const vi: Vi;
}

// Extend Vue Test Utils types
declare module '@vue/test-utils' {
    export interface DOMWrapper<ElementType extends Element> {
        exists(): boolean;
        attributes(): Record<string, string>;
        classes(): string[];
        text(): string;
        html(): string;
        is(selector: string): boolean;
        find<K extends keyof HTMLElementTagNameMap>(selector: K): DOMWrapper<HTMLElementTagNameMap[K]>;
        find<K extends keyof SVGElementTagNameMap>(selector: K): DOMWrapper<SVGElementTagNameMap[K]>;
        find(selector: string): DOMWrapper<Element>;
        findAll<K extends keyof HTMLElementTagNameMap>(selector: K): DOMWrapper<HTMLElementTagNameMap[K]>[];
        findAll<K extends keyof SVGElementTagNameMap>(selector: K): DOMWrapper<SVGElementTagNameMap[K]>[];
        findAll(selector: string): DOMWrapper<Element>[];
    }

    export interface VueWrapper<T extends ComponentPublicInstance> {
        exists(): boolean;
        attributes(): Record<string, string>;
        classes(): string[];
        text(): string;
        html(): string;
        get<K extends keyof HTMLElementTagNameMap>(selector: K): DOMWrapper<HTMLElementTagNameMap[K]>;
        get<K extends keyof SVGElementTagNameMap>(selector: K): DOMWrapper<SVGElementTagNameMap[K]>;
        get(selector: string): DOMWrapper<Element>;
        find<K extends keyof HTMLElementTagNameMap>(selector: K): DOMWrapper<HTMLElementTagNameMap[K]>;
        find<K extends keyof SVGElementTagNameMap>(selector: K): DOMWrapper<SVGElementTagNameMap[K]>;
        find(selector: string): DOMWrapper<Element>;
        findAll<K extends keyof HTMLElementTagNameMap>(selector: K): DOMWrapper<HTMLElementTagNameMap[K]>[];
        findAll<K extends keyof SVGElementTagNameMap>(selector: K): DOMWrapper<SVGElementTagNameMap[K]>[];
        findAll(selector: string): DOMWrapper<Element>[];
        findComponent<T extends ComponentPublicInstance>(selector: any): VueWrapper<T>;
        findComponent(selector: any): VueWrapper<ComponentPublicInstance>;
        findAllComponents<T extends ComponentPublicInstance>(selector: any): VueWrapper<T>[];
        findAllComponents(selector: any): VueWrapper<ComponentPublicInstance>[];
        emitted(): Record<string, any[]>;
        emitted(eventName: string): any[] | undefined;
        props(): Record<string, any>;
        prop(name: string): any;
        setProps(props: Record<string, any>): Promise<void>;
        vm: T;
        unmount(): void;
    }

    interface VueWrapper {
        emitted<T = any>(eventName?: string): Record<string, T[]> | undefined;
    }
}

// Declaração global para ResizeObserver
interface Window {
    ResizeObserver: any;
}

// Extensão da classe Chart para testes
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

    export const BarElement: any;
    export const BarController: any;
    export const CategoryScale: any;
    export const LinearScale: any;
    export const Tooltip: any;
    export const Legend: any;

    // Interface apenas para tipagem, não afeta o runtime
    interface ChartOptions {
        responsive?: boolean;
        maintainAspectRatio?: boolean;
        [key: string]: any;
    }
}

// Declaration for global objects specific to the test environment
interface Window {
    __chartJsMock: any;
}

// Ensure Image is correctly recognized in the test environment
declare global {
    class ResizeObserver {
        constructor(callback: any);
        observe(target: Element): void;
        unobserve(target: Element): void;
        disconnect(): void;
    }
}
