import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import CSidebar from "../../src/components/layout/CSidebar.vue";

// Mock IconXMark component
vi.mock("../../src/components/icons/IconXMark.vue", () => ({
    default: {
        template: '<div class="mock-x-icon"></div>',
        props: ['class', 'size', 'aria-hidden']
    }
}));

describe("CSidebar Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CSidebar);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.c-sidebar').exists()).toBe(true);
    });

    it("applies correct classes based on side prop", async () => {
        const wrapper = mount(CSidebar, {
            props: {
                side: "right",
                modelValue: true
            }
        });

        expect(wrapper.find('.right-0').exists()).toBe(true);
        expect(wrapper.find('.translate-x-0').exists()).toBe(true);

        await wrapper.setProps({ side: "left" });
        expect(wrapper.find('.left-0').exists()).toBe(true);
    });

    it("toggles sidebar visibility based on modelValue", async () => {
        const wrapper = mount(CSidebar, {
            props: {
                modelValue: false
            }
        });

        expect(wrapper.find('.translate-x-0').exists()).toBe(false);
        expect(wrapper.find('.-translate-x-full').exists()).toBe(true);

        await wrapper.setProps({ modelValue: true });
        expect(wrapper.find('.translate-x-0').exists()).toBe(true);
        expect(wrapper.find('.-translate-x-full').exists()).toBe(false);
    });

    it("emits update:modelValue when closed", async () => {
        const wrapper = mount(CSidebar, {
            props: {
                modelValue: true
            }
        });

        await wrapper.find('.c-sidebar').trigger('click');

        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        expect(wrapper.emitted('update:modelValue')[0]).toEqual([false]);
    });

    it("applies fixed or absolute positioning", async () => {
        const wrapper = mount(CSidebar, {
            props: {
                fixed: true,
                absolute: false
            }
        });

        expect(wrapper.find('.fixed').exists()).toBe(true);
        expect(wrapper.find('.absolute').exists()).toBe(false);

        await wrapper.setProps({ fixed: false, absolute: true });
        expect(wrapper.find('.absolute').exists()).toBe(true);
    });

    it("applies custom width and colors", () => {
        const wrapper = mount(CSidebar, {
            props: {
                width: "w-80",
                bgColor: "bg-blue-500",
                bgColorOverlay: "bg-black/75"
            }
        });

        expect(wrapper.find('.w-80').exists()).toBe(true);
        expect(wrapper.find('.bg-blue-500').exists()).toBe(true);
        expect(wrapper.find('.bg-black\\/75').exists()).toBe(true);
    });

    it("renders header slot content", () => {
        const wrapper = mount(CSidebar, {
            slots: {
                header: '<div class="custom-header">Custom Header</div>'
            }
        });

        expect(wrapper.find('.custom-header').exists()).toBe(true);
        expect(wrapper.text()).toContain('Custom Header');
    });

    it("renders title slot content", () => {
        const wrapper = mount(CSidebar, {
            slots: {
                title: 'Custom Title'
            }
        });

        expect(wrapper.text()).toContain('Custom Title');
    });

    it("renders default slot content", () => {
        const wrapper = mount(CSidebar, {
            slots: {
                default: '<div class="sidebar-content">Content</div>'
            }
        });

        expect(wrapper.find('.sidebar-content').exists()).toBe(true);
        expect(wrapper.text()).toContain('Content');
    });

    it("renders footer slot content", () => {
        const wrapper = mount(CSidebar, {
            slots: {
                footer: '<div class="custom-footer">Footer</div>'
            }
        });

        expect(wrapper.find('.custom-footer').exists()).toBe(true);
        expect(wrapper.text()).toContain('Footer');
    });

    it("exposes open and close methods", async () => {
        const wrapper = mount(CSidebar);

        // Access component methods with typedComponent
        await wrapper.vm.open();
        expect(wrapper.emitted('update:modelValue')[0]).toEqual([true]);

        await wrapper.vm.close();
        expect(wrapper.emitted('update:modelValue')[1]).toEqual([false]);
    });

    it("applies rounded style when provided", () => {
        const wrapper = mount(CSidebar, {
            props: {
                rounded: "md"
            }
        });

        expect(wrapper.find('.rounded-md').exists()).toBe(true);
    });
});
