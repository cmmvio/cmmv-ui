declare module '@vueuse/head' {
    export interface HeadObject {
        title?: string
        meta?: Array<Record<string, any>>
        link?: Array<Record<string, any>>
        htmlAttrs?: Record<string, any>
        bodyAttrs?: Record<string, any>
    }

    export function createHead(options?: {
        titleTemplate?: string | ((title: string) => string)
    }): {
        install: (app: any) => void
    }

    export function useHead(head: HeadObject | (() => HeadObject)): void
}
