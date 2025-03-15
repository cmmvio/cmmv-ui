import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import CSeo from "../../src/components/layout/CSeo.vue";

// Mock VueUse's useHead function
vi.mock('@vueuse/head', () => ({
    useHead: vi.fn()
}));

import { useHead } from '@vueuse/head';

describe("CSeo Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("calls useHead with default values", () => {
        mount(CSeo);

        expect(useHead).toHaveBeenCalledTimes(1);

        const headConfig = (useHead as any).mock.calls[0][0];
        expect(headConfig.title).toBe("CMMV UI - Vue 3 Component Library");
        expect(headConfig.meta).toContainEqual(
            expect.objectContaining({
                name: 'description',
                content: 'A modern Vue 3 component library with TypeScript support and Tailwind CSS styling'
            })
        );
    });

    it("uses custom title when provided", () => {
        mount(CSeo, {
            props: {
                title: "Custom Page Title"
            }
        });

        const headConfig = (useHead as any).mock.calls[0][0];
        expect(headConfig.title).toBe("Custom Page Title");
    });

    it("combines section with default title", () => {
        mount(CSeo, {
            props: {
                section: "Components"
            }
        });

        const headConfig = (useHead as any).mock.calls[0][0];
        expect(headConfig.title).toBe("Components | CMMV UI");
    });

    it("sets custom meta description", () => {
        mount(CSeo, {
            props: {
                description: "Custom meta description for testing"
            }
        });

        const headConfig = (useHead as any).mock.calls[0][0];

        expect(headConfig.meta).toContainEqual(
            expect.objectContaining({
                name: 'description',
                content: 'Custom meta description for testing'
            })
        );

        expect(headConfig.meta).toContainEqual(
            expect.objectContaining({
                property: 'og:description',
                content: 'Custom meta description for testing'
            })
        );
    });

    it("sets custom keywords", () => {
        mount(CSeo, {
            props: {
                keywords: ["test", "seo", "vue"]
            }
        });

        const headConfig = (useHead as any).mock.calls[0][0];

        expect(headConfig.meta).toContainEqual(
            expect.objectContaining({
                name: 'keywords',
                content: 'test, seo, vue'
            })
        );
    });

    it("sets custom OG image", () => {
        mount(CSeo, {
            props: {
                image: "https://example.com/custom-image.jpg"
            }
        });

        const headConfig = (useHead as any).mock.calls[0][0];

        expect(headConfig.meta).toContainEqual(
            expect.objectContaining({
                property: 'og:image',
                content: 'https://example.com/custom-image.jpg'
            })
        );
    });

    it("sets custom URL", () => {
        mount(CSeo, {
            props: {
                url: "https://example.com/custom-page"
            }
        });

        const headConfig = (useHead as any).mock.calls[0][0];

        expect(headConfig.meta).toContainEqual(
            expect.objectContaining({
                property: 'og:url',
                content: 'https://example.com/custom-page'
            })
        );

        expect(headConfig.link).toContainEqual(
            expect.objectContaining({
                rel: 'canonical',
                href: 'https://example.com/custom-page'
            })
        );
    });

    it("sets Twitter card type", () => {
        mount(CSeo, {
            props: {
                twitterCard: "summary"
            }
        });

        const headConfig = (useHead as any).mock.calls[0][0];

        expect(headConfig.meta).toContainEqual(
            expect.objectContaining({
                name: 'twitter:card',
                content: 'summary'
            })
        );
    });

    it("updates meta tags when props change", async () => {
        const wrapper = mount(CSeo, {
            props: {
                title: "Initial Title"
            }
        });

        expect(useHead).toHaveBeenCalledTimes(1);
        let headConfig = (useHead as any).mock.calls[0][0];
        expect(headConfig.title).toBe("Initial Title");

        await wrapper.setProps({ title: "Updated Title" });

        expect(useHead).toHaveBeenCalledTimes(2);
        headConfig = (useHead as any).mock.calls[1][0];
        expect(headConfig.title).toBe("Updated Title");
    });
});
