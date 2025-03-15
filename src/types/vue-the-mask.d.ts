declare module 'vue-the-mask' {
    import { Plugin } from 'vue';

    export const mask: {
        // Define o tipo da diretiva v-mask
        mounted(el: HTMLElement, binding: {
            value: string | Array<string | RegExp> | ((str: string) => string);
            oldValue?: string | Array<string | RegExp> | ((str: string) => string);
        }): void;
        updated(el: HTMLElement, binding: {
            value: string | Array<string | RegExp> | ((str: string) => string);
            oldValue?: string | Array<string | RegExp> | ((str: string) => string);
        }): void;
    };

    export const TheMask: Plugin;

    export interface MaskOptions {
        mask: string | Array<string | RegExp> | ((str: string) => string);
        tokens?: { [key: string]: RegExp };
        masked?: boolean;
    }

    export function tokens(tokens: { [key: string]: RegExp }): void;
    export function conformToMask(text: string, mask: string | Array<string | RegExp>, options?: MaskOptions): string;

    export default TheMask;
}
