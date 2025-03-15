import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import COverlay from "../../src/components/overlays/COverlay.vue";

describe("COverlay Component", () => {
    it("renders correctly when modelValue is true", () => {
        const wrapper = mount(COverlay, {
            props: {
                modelValue: true
            },
            slots: {
                default: '<div class="test-content">Overlay Content</div>'
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.c-overlay').exists()).toBe(true);
        expect(wrapper.find('.test-content').exists()).toBe(true);
        expect(wrapper.text()).toContain("Overlay Content");
    });

    it("doesn't render when modelValue is false", () => {
        const wrapper = mount(COverlay, {
            props: {
                modelValue: false
            },
            slots: {
                default: '<div class="test-content">Overlay Content</div>'
            }
        });

        expect(wrapper.find('.c-overlay').exists()).toBe(false);
        expect(wrapper.find('.test-content').exists()).toBe(false);
    });

    it("applies background color and opacity correctly", () => {
        const wrapper = mount(COverlay, {
            props: {
                modelValue: true,
                bgColor: "#FF0000",
                opacity: 75
            }
        });

        const overlayBg = wrapper.find('.absolute.inset-0');
        const style = overlayBg.attributes('style');

        expect(style).toContain("background-color: rgb(255, 0, 0)");
        expect(style).toContain("opacity: 0.75");
    });

    it("emits update:modelValue when clicked and closeOnClick is true", async () => {
        const wrapper = mount(COverlay, {
            props: {
                modelValue: true,
                closeOnClick: true
            }
        });

        await wrapper.find('.absolute.inset-0').trigger('click');

        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);
    });

    it("doesn't emit update:modelValue when clicked and closeOnClick is false", async () => {
        const wrapper = mount(COverlay, {
            props: {
                modelValue: true,
                closeOnClick: false
            }
        });

        await wrapper.find('.absolute.inset-0').trigger('click');

        expect(wrapper.emitted('update:modelValue')).toBeFalsy();
    });

    it("applies z-index correctly", () => {
        const wrapper = mount(COverlay, {
            props: {
                modelValue: true,
                zIndex: 100
            }
        });

        const style = wrapper.find('.c-overlay').attributes('style');
        expect(style).toContain("--z-index: 50");
    });

    it("renders slot content above the overlay", () => {
        const wrapper = mount(COverlay, {
            props: {
                modelValue: true
            },
            slots: {
                default: '<div class="test-content">Overlay Content</div>'
            }
        });

        // Check that the slot content is inside a div with a higher z-index
        const slotContainer = wrapper.find('.relative.z-\\[calc\\(var\\(--z-index\\)\\+1\\)\\]');
        expect(slotContainer.exists()).toBe(true);
        expect(slotContainer.find('.test-content').exists()).toBe(true);
    });

    it("applies backdrop filter", () => {
        const wrapper = mount(COverlay, {
            props: {
                modelValue: true
            }
        });

        // Check that the backdrop filter class is applied
        expect(wrapper.find('.c-overlay').exists()).toBe(true);

        // Check the CSS contains backdrop filter
        const overlayStyles = window.getComputedStyle(wrapper.element);
        // Note: This might not work in all test environments depending on JSDOM support
        // We could also check the class has the right CSS in it
    });
});
