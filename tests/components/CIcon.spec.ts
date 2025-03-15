import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import CIcon from "../../src/components/components/CIcon.vue";

describe("CIcon Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CIcon);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.element.tagName.toLowerCase()).toBe("span");
        expect(wrapper.classes()).toContain("c-icon");
        expect(wrapper.classes()).toContain("inline-flex");
        expect(wrapper.attributes("role")).toBe("img");
        expect(wrapper.attributes("aria-label")).toBe("icon");
    });

    it("renders slot content correctly", () => {
        const wrapper = mount(CIcon, {
            slots: {
                default: "<svg>Test Icon</svg>"
            }
        });
        expect(wrapper.html()).toContain("<svg>Test Icon</svg>");
    });

    it("applies the correct size class", () => {
        const wrapper = mount(CIcon, {
            props: { size: "sm" }
        });
        expect(wrapper.classes()).toContain("h-4");
        expect(wrapper.classes()).toContain("w-4");
    });

    it("applies size 'lg' correctly", () => {
        const wrapper = mount(CIcon, {
            props: { size: "lg" }
        });
        expect(wrapper.classes()).toContain("h-8");
        expect(wrapper.classes()).toContain("w-8");
    });

    it("applies size '2xl' correctly", () => {
        const wrapper = mount(CIcon, {
            props: { size: "2xl" }
        });
        expect(wrapper.classes()).toContain("h-12");
        expect(wrapper.classes()).toContain("w-12");
    });

    it("applies custom color class", () => {
        const wrapper = mount(CIcon, {
            props: { color: "text-red-500" }
        });
        expect(wrapper.classes()).toContain("text-red-500");
    });

    it("applies custom ariaLabel", () => {
        const wrapper = mount(CIcon, {
            props: { ariaLabel: "custom icon description" }
        });
        expect(wrapper.attributes("aria-label")).toBe("custom icon description");
    });

    it("applies customClass correctly", () => {
        const wrapper = mount(CIcon, {
            props: { customClass: "my-custom-class rotate-45" }
        });
        expect(wrapper.classes()).toContain("my-custom-class");
        expect(wrapper.classes()).toContain("rotate-45");
    });

    it("combines all props correctly", () => {
        const wrapper = mount(CIcon, {
            props: {
                size: "xl",
                color: "text-blue-700",
                ariaLabel: "large blue icon",
                customClass: "shadow-md"
            }
        });
        expect(wrapper.classes()).toContain("h-10");
        expect(wrapper.classes()).toContain("w-10");
        expect(wrapper.classes()).toContain("text-blue-700");
        expect(wrapper.classes()).toContain("shadow-md");
        expect(wrapper.attributes("aria-label")).toBe("large blue icon");
    });
});
