import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import CButton from "../../src/components/components/CButton.vue";

describe("CButton Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CButton);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.element.tagName.toLowerCase()).toBe("button");
        expect(wrapper.text()).toBe("Button");
    });

    it("renders slot content correctly", () => {
        const wrapper = mount(CButton, {
            slots: {
                default: "Custom Button"
            }
        });
        expect(wrapper.text()).toBe("Custom Button");
    });

    it("applies the correct button size", () => {
        const wrapper = mount(CButton, {
            props: { size: "sm" }
        });
        expect(wrapper.classes()).toContain("px-2");
        expect(wrapper.classes()).toContain("py-1");
    });

    it("applies the correct variant styles", () => {
        const wrapper = mount(CButton, {
            props: { variant: "outlined" }
        });
        expect(wrapper.classes()).toContain("border");
        expect(wrapper.classes()).toContain("border-gray-300");
        expect(wrapper.classes()).toContain("text-black");
    });

    it("applies disabled styles and prevents click", async () => {
        const wrapper = mount(CButton, {
            props: { disabled: true }
        });

        await wrapper.trigger("click");
        expect(wrapper.emitted("click")).toBeUndefined();
    });

    it("emits click event when clicked", async () => {
        const wrapper = mount(CButton);
        await wrapper.trigger("click");
        expect(wrapper.emitted("click")).toBeTruthy();
    });

    it("renders as different element when buttonType is changed", () => {
        const wrapper = mount(CButton, {
            props: { buttonType: "a" }
        });
        expect(wrapper.element.tagName.toLowerCase()).toBe("a");
    });

    it("adds ripple effect on click", async () => {
        const wrapper = mount(CButton);
        await wrapper.trigger("click");

        const ripple = wrapper.element.querySelector(".ripple");
        expect(ripple).not.toBeNull();
        expect(ripple).toHaveProperty("className");
        expect(ripple!.classList.contains("ripple")).toBe(true);
    });

    it("renders correctly with default props", () => {
        const wrapper = mount(CButton);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.element.tagName.toLowerCase()).toBe("button");
        expect(wrapper.text()).toBe("Button");
    });

    it("renders slot content correctly", () => {
        const wrapper = mount(CButton, {
            slots: {
                default: "Custom Button"
            }
        });
        expect(wrapper.text()).toBe("Custom Button");
    });

    it("applies the correct button size", () => {
        const wrapper = mount(CButton, {
            props: { size: "sm" }
        });
        expect(wrapper.classes()).toContain("px-2");
        expect(wrapper.classes()).toContain("py-1");
    });

    it("applies the correct variant styles", () => {
        const wrapper = mount(CButton, {
            props: { variant: "outlined" }
        });
        expect(wrapper.classes()).toContain("border");
        expect(wrapper.classes()).toContain("border-gray-300");
        expect(wrapper.classes()).toContain("text-black");
    });

    it("applies disabled styles and prevents click", async () => {
        const wrapper = mount(CButton, {
            props: { disabled: true }
        });

        await wrapper.trigger("click");
        expect(wrapper.emitted("click")).toBeUndefined();
    });

    it("emits click event when clicked", async () => {
        const wrapper = mount(CButton);
        await wrapper.trigger("click");
        expect(wrapper.emitted("click")).toBeTruthy();
    });

    it("renders as different element when buttonType is changed", () => {
        const wrapper = mount(CButton, {
            props: { buttonType: "a" }
        });
        expect(wrapper.element.tagName.toLowerCase()).toBe("a");
    });

    it("adds ripple effect on click", async () => {
        const wrapper = mount(CButton);
        await wrapper.trigger("click");

        const ripple = wrapper.element.querySelector(".ripple");
        expect(ripple).not.toBeNull();
        expect(ripple).toHaveProperty("className");
        expect(ripple!.classList.contains("ripple")).toBe(true);
    });

    it("applies rounded styles correctly", () => {
        const wrapper = mount(CButton, {
            props: { rounded: "full" }
        });
        expect(wrapper.classes()).toContain("rounded-full");
    });

    it("applies bgColor correctly", () => {
        const wrapper = mount(CButton, {
            props: { bgColor: "bg-red-500" }
        });
        expect(wrapper.classes()).toContain("bg-red-500");
    });

    it("applies textColor correctly", () => {
        const wrapper = mount(CButton, {
            props: { textColor: "text-gray-700" }
        });
        expect(wrapper.classes()).toContain("text-gray-700");
    });

    it("sets correct tabindex when disabled", () => {
        const wrapper = mount(CButton, {
            props: { disabled: true }
        });
        expect(wrapper.attributes("tabindex")).toBe("-1");
    });

    it("sets aria-busy when loading is true", () => {
        const wrapper = mount(CButton, {
            props: { loading: true }
        });
        expect(wrapper.attributes("aria-busy")).toBe("true");
    });

    it("does not emit click event when disabled", async () => {
        const wrapper = mount(CButton, {
            props: { disabled: true }
        });

        await wrapper.trigger("click");
        expect(wrapper.emitted("click")).toBeUndefined();
    });
});
