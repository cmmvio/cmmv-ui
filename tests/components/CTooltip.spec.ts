import { mount, flushPromises } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import CTooltip from "../../src/components/components/CTooltip.vue";

describe("CTooltip Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CTooltip, {
            props: {
                content: "Tooltip content"
            },
            slots: {
                default: "<button>Hover me</button>"
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.classes()).toContain("tooltip-container");
        expect(wrapper.text()).toContain("Hover me");

        // Tooltip content should initially be hidden
        expect(wrapper.find(".tooltip-content").exists()).toBe(false);
    });

    it("shows tooltip on mouseenter and hides on mouseleave", async () => {
        const wrapper = mount(CTooltip, {
            props: {
                content: "Tooltip content"
            },
            slots: {
                default: "<button>Hover me</button>"
            }
        });

        // Initially hidden
        expect(wrapper.find(".tooltip-content").exists()).toBe(false);

        // Show tooltip on mouseenter
        await wrapper.trigger("mouseenter");
        expect(wrapper.find(".tooltip-content").exists()).toBe(true);
        expect(wrapper.find(".tooltip-content").text()).toBe("Tooltip content");

        // Hide tooltip on mouseleave
        await wrapper.trigger("mouseleave");
        expect(wrapper.find(".tooltip-content").exists()).toBe(false);
    });

    it("applies correct position classes", async () => {
        const positions = ["top", "bottom", "left", "right"];

        for (const position of positions) {
            const wrapper = mount(CTooltip, {
                props: {
                    content: "Tooltip content",
                    position
                },
                slots: {
                    default: "<button>Hover me</button>"
                }
            });

            await wrapper.trigger("mouseenter");

            const tooltip = wrapper.find(".tooltip-content");
            expect(tooltip.exists()).toBe(true);
            expect(tooltip.classes()).toContain(`tooltip-${position}`);

            if (position === "top") {
                expect(tooltip.classes()).toContain("bottom-full");
            } else if (position === "bottom") {
                expect(tooltip.classes()).toContain("top-full");
            } else if (position === "left") {
                expect(tooltip.classes()).toContain("right-full");
            } else if (position === "right") {
                expect(tooltip.classes()).toContain("left-full");
            }
        }
    });

    it("applies border width style correctly", async () => {
        const wrapper = mount(CTooltip, {
            props: {
                content: "Tooltip content",
                borderWidth: 2
            },
            slots: {
                default: "<button>Hover me</button>"
            }
        });

        await wrapper.trigger("mouseenter");

        const tooltip = wrapper.find(".tooltip-content");
        expect(tooltip.attributes("style")).toContain("border-width: 2px");
    });

    it("applies max width style when maxWidth is provided", async () => {
        const wrapper = mount(CTooltip, {
            props: {
                content: "Tooltip content",
                maxWidth: 200
            },
            slots: {
                default: "<button>Hover me</button>"
            }
        });

        await wrapper.trigger("mouseenter");

        const tooltip = wrapper.find(".tooltip-content");
        expect(tooltip.attributes("style")).toContain("max-width: 200px");
    });

    it("displays the correct content", async () => {
        const tooltipContent = "This is a helpful tooltip message";
        const wrapper = mount(CTooltip, {
            props: {
                content: tooltipContent
            },
            slots: {
                default: "<button>Hover me</button>"
            }
        });

        await wrapper.trigger("mouseenter");

        const tooltip = wrapper.find(".tooltip-content");
        expect(tooltip.text()).toBe(tooltipContent);
    });
});
