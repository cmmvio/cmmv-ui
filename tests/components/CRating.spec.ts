import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import CRating from "../../src/components/components/CRating.vue";
import IconStar from "@components/icons/IconStar.vue";

// Mock IconStar component
vi.mock("@components/icons/IconStar.vue", () => ({
    default: {
        name: "IconStar",
        template: "<div class='star-icon'></div>",
        props: {
            color: String,
            size: String
        }
    }
}));

describe("CRating Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CRating);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.findAll("button").length).toBe(5); // Default 5 stars
        expect(wrapper.find(".star-icon").exists()).toBe(true);
    });

    it("renders the correct number of stars based on total prop", () => {
        const wrapper = mount(CRating, {
            props: {
                total: 10
            }
        });

        expect(wrapper.findAll("button").length).toBe(10);
    });

    it("shows the initial rating based on modelValue", () => {
        const wrapper = mount(CRating, {
            props: {
                modelValue: 3
            }
        });

        const buttons = wrapper.findAll("button");

        // First 3 buttons should have the active color class
        for (let i = 0; i < 3; i++) {
            expect(buttons[i].classes()).toContain("text-yellow-300");
        }

        // Remaining buttons should have the inactive color class
        for (let i = 3; i < 5; i++) {
            expect(buttons[i].classes()).toContain("text-neutral-300");
        }
    });

    it("shows the value when showValue is true", () => {
        const wrapper = mount(CRating, {
            props: {
                modelValue: 3.5,
                showValue: true
            }
        });

        expect(wrapper.find(".ml-2").exists()).toBe(true);
        expect(wrapper.find(".ml-2").text()).toBe("3.5");
    });

    it("applies custom colors", () => {
        const wrapper = mount(CRating, {
            props: {
                modelValue: 3,
                color: "text-blue-500",
                inactiveColor: "text-gray-200"
            }
        });

        const buttons = wrapper.findAll("button");

        // First 3 buttons should have the custom active color
        for (let i = 0; i < 3; i++) {
            expect(buttons[i].classes()).toContain("text-blue-500");
        }

        // Remaining buttons should have the custom inactive color
        for (let i = 3; i < 5; i++) {
            expect(buttons[i].classes()).toContain("text-gray-200");
        }
    });

    it("shows partial icons correctly", async () => {
        const wrapper = mount(CRating, {
            props: {
                modelValue: 3.5
            }
        });

        // Should find one partial overlay
        expect(wrapper.findAll(".absolute.top-0.left-0.overflow-hidden").length).toBe(1);

        const partialOverlay = wrapper.find(".absolute.top-0.left-0.overflow-hidden");
        expect(partialOverlay.attributes("style")).toContain("width: 50%");
    });

    it("emits update:modelValue when clicked", async () => {
        const wrapper = mount(CRating);

        // Click on the third star
        await wrapper.findAll("button")[2].trigger("click");

        expect(wrapper.emitted("update:modelValue")).toBeTruthy();
        expect(wrapper.emitted("update:modelValue")![0]).toEqual([3]);

        expect(wrapper.emitted("change")).toBeTruthy();
        expect(wrapper.emitted("change")![0]).toEqual([3]);
    });

    it("doesn't emit events when fixed prop is true", async () => {
        const wrapper = mount(CRating, {
            props: {
                fixed: true
            }
        });

        // Try to click on a star
        await wrapper.findAll("button")[2].trigger("click");

        // No events should be emitted
        expect(wrapper.emitted("update:modelValue")).toBeFalsy();
        expect(wrapper.emitted("change")).toBeFalsy();
    });

    it("updates hover state on mouseover", async () => {
        const wrapper = mount(CRating);

        // Hover over the fourth star
        await wrapper.findAll("button")[3].trigger("mouseover");

        // Check that hoverRating is set
        expect(wrapper.vm.hoverRating).toBe(4);

        // Mouseleave should reset hover state
        await wrapper.findAll("button")[3].trigger("mouseleave");
        expect(wrapper.vm.hoverRating).toBe(0);
    });

    it("uses custom icon when provided", () => {
        // Create a custom icon component
        const CustomIcon = {
            template: "<div class='custom-icon'></div>",
            props: ["color", "size"]
        };

        const wrapper = mount(CRating, {
            props: {
                icon: CustomIcon
            }
        });

        expect(wrapper.findComponent(CustomIcon).exists()).toBe(true);
    });

    it("adjusts rating based on precision", async () => {
        const wrapper = mount(CRating, {
            props: {
                modelValue: 2,
                precision: 0.5
            }
        });

        // Click on an already filled star
        await wrapper.findAll("button")[1].trigger("click");

        // It should decrement by the precision amount
        expect(wrapper.emitted("update:modelValue")![0]).toEqual([1.5]);
    });
});
