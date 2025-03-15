import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import CAccordion from "../../src/components/layout/CAccordion.vue";

// Mock IconChevronDown component
vi.mock("../../src/components/icons/IconChevronDown.vue", () => ({
    default: {
        template: "<div class='mock-icon-chevron-down'></div>"
    }
}));

describe("CAccordion Component", () => {
    const mockItems = [
        { title: "Section 1", content: "Content for section 1" },
        { title: "Section 2", content: "Content for section 2" },
        { title: "Section 3", content: "Content for section 3" }
    ];

    it("renders correctly with default props", () => {
        const wrapper = mount(CAccordion, {
            props: {
                items: mockItems
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(".c-accordion").exists()).toBe(true);
        expect(wrapper.findAll("button").length).toBe(3);
        expect(wrapper.text()).toContain("Section 1");
        expect(wrapper.text()).toContain("Section 2");
        expect(wrapper.text()).toContain("Section 3");
    });

    it("shows panel content when clicked", async () => {
        const wrapper = mount(CAccordion, {
            props: {
                items: mockItems
            }
        });

        // Initially all panels should be closed
        expect(wrapper.findAll(".c-accordion-content").filter(el => !el.element?.hasAttribute("style") || !el.element?.getAttribute("style")?.includes("display: none")).length).toBe(0);

        // Click on the first panel
        await wrapper.findAll("button")[0].trigger("click");

        // Now the first panel should be open
        const visiblePanels = wrapper.findAll(".c-accordion-content").filter(el =>
            !el.element?.hasAttribute("style") || !el.element?.getAttribute("style")?.includes("display: none")
        );
        expect(visiblePanels.length).toBe(1);
        expect(visiblePanels[0].text()).toContain("Content for section 1");
    });

    it("closes one panel when another is opened with alwaysOpen=false", async () => {
        const wrapper = mount(CAccordion, {
            props: {
                items: mockItems,
                alwaysOpen: false
            }
        });

        // Open the first panel
        await wrapper.findAll("button")[0].trigger("click");
        expect(wrapper.vm.isOpen(0)).toBe(true);

        // Open the second panel
        await wrapper.findAll("button")[1].trigger("click");

        // First panel should be closed, second panel should be open
        expect(wrapper.vm.isOpen(0)).toBe(false);
        expect(wrapper.vm.isOpen(1)).toBe(true);
    });

    it("keeps panels open with alwaysOpen=true", async () => {
        const wrapper = mount(CAccordion, {
            props: {
                items: mockItems,
                alwaysOpen: true
            }
        });

        // Open the first panel
        await wrapper.findAll("button")[0].trigger("click");
        expect(wrapper.vm.isOpen(0)).toBe(true);

        // Open the second panel
        await wrapper.findAll("button")[1].trigger("click");

        // Both panels should be open
        expect(wrapper.vm.isOpen(0)).toBe(true);
        expect(wrapper.vm.isOpen(1)).toBe(true);
    });

    it("toggles panel open/closed on repeated clicks", async () => {
        const wrapper = mount(CAccordion, {
            props: {
                items: mockItems
            }
        });

        // Click to open
        await wrapper.findAll("button")[0].trigger("click");
        expect(wrapper.vm.isOpen(0)).toBe(true);

        // Click again to close
        await wrapper.findAll("button")[0].trigger("click");
        expect(wrapper.vm.isOpen(0)).toBe(false);
    });

    it("renders with flush style when flush=true", () => {
        const wrapper = mount(CAccordion, {
            props: {
                items: mockItems,
                flush: true
            }
        });

        expect(wrapper.find(".c-accordion").classes()).not.toContain("rounded-lg");
        expect(wrapper.find(".border").classes()).toContain("border-none");
    });

    it("applies disabled state when disabled=true", async () => {
        const wrapper = mount(CAccordion, {
            props: {
                items: mockItems,
                disabled: true
            }
        });

        // Buttons should have disabled styling
        expect(wrapper.findAll("button")[0].classes()).toContain("cursor-not-allowed");
        expect(wrapper.findAll("button")[0].classes()).toContain("opacity-50");

        // Click should not open panel
        await wrapper.findAll("button")[0].trigger("click");
        expect(wrapper.vm.isOpen(0)).toBe(false);
    });

    it("renders content slot when provided", () => {
        const wrapper = mount(CAccordion, {
            props: {
                items: mockItems
            },
            slots: {
                "content-0": "<div class='custom-content'>Custom content</div>"
            }
        });

        // Open the first panel
        wrapper.vm.toggle(0);

        expect(wrapper.find(".custom-content").exists()).toBe(true);
        expect(wrapper.find(".custom-content").text()).toBe("Custom content");
    });

    it("applies custom styling from props", () => {
        const wrapper = mount(CAccordion, {
            props: {
                items: mockItems,
                bgColor: "bg-red-500",
                textColor: "text-white",
                borderColor: "border-red-700"
            }
        });

        const buttons = wrapper.findAll("button");
        expect(buttons[0].classes()).toContain("bg-red-500");
        expect(buttons[0].classes()).toContain("text-white");
        expect(buttons[0].classes()).toContain("border-red-700");
    });

    it("rotates arrow icon when panel is open", async () => {
        const wrapper = mount(CAccordion, {
            props: {
                items: mockItems
            }
        });

        const button = wrapper.findAll("button")[0];

        // Initial state - arrow not rotated
        expect(button.find(".rotate-180").exists()).toBe(false);

        // Open the panel
        await button.trigger("click");

        // Arrow should be rotated
        expect(button.find(".rotate-180").exists()).toBe(true);
    });
});