import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import CLoader from "../../src/components/components/CLoader.vue";

describe("CLoader Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CLoader);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.classes()).toContain("c-loading");
        expect(wrapper.classes()).toContain("inline-flex");
        expect(wrapper.classes()).toContain("text-white");
    });

    it("applies custom color class", () => {
        const wrapper = mount(CLoader, {
            props: {
                color: "text-blue-500"
            }
        });
        expect(wrapper.classes()).toContain("text-blue-500");
    });

    it("renders slot content correctly", () => {
        const wrapper = mount(CLoader, {
            slots: {
                default: "<span>Loading...</span>"
            }
        });

        expect(wrapper.html()).toContain("<span>Loading...</span>");
    });
});
