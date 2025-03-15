import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import CContainer from "../../src/components/layout/CContainer.vue";

describe("CContainer Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CContainer);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.classes()).toContain("container");
        expect(wrapper.classes()).toContain("rounded-md");
    });

    it("renders slot content", () => {
        const wrapper = mount(CContainer, {
            slots: {
                default: "<div class='test-content'>Container Content</div>"
            }
        });

        expect(wrapper.find(".test-content").exists()).toBe(true);
        expect(wrapper.text()).toContain("Container Content");
    });

    it("forwards attributes to the root element", () => {
        const wrapper = mount(CContainer, {
            attrs: {
                id: "test-container",
                "data-testid": "container-element",
                style: "background-color: red;"
            }
        });

        expect(wrapper.attributes("id")).toBe("test-container");
        expect(wrapper.attributes("data-testid")).toBe("container-element");
        expect(wrapper.attributes("style")).toContain("background-color: red");
    });
});
