import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import CBadge from "../../src/components/components/CBadge.vue";

describe("CBadge Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CBadge);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.text()).toBe("");
        expect(wrapper.classes()).toContain("inline-flex");
    });

    it("renders content inside the slot", () => {
        const wrapper = mount(CBadge, {
            slots: {
                default: "New",
            },
        });
        expect(wrapper.text()).toBe("New");
    });

    it("applies bgColor and textColor classes correctly", () => {
        const wrapper = mount(CBadge, {
            props: {
                bgColor: "bg-blue-500",
                textColor: "text-white",
            },
        });
        const span = wrapper.find("span");
        expect(span.classes()).toContain("bg-blue-500");
        expect(span.classes()).toContain("text-white");
    });

    it("renders as a dot when `dot` prop is true", () => {
        const wrapper = mount(CBadge, {
            props: { dot: true },
        });
        const dotSpan = wrapper.find("span");
        expect(dotSpan.exists()).toBe(true);
        expect(dotSpan.classes()).toContain("rounded-full");
        expect(dotSpan.classes()).toContain("w-2");
        expect(dotSpan.classes()).toContain("h-2");
    });

    it("applies floating styles correctly", () => {
        const wrapper = mount(CBadge, {
            props: {
                floating: true,
                offsetX: "5px",
                offsetY: "10px",
            },
        });

        expect(wrapper.attributes("style")).toContain("top: 10px;");
        expect(wrapper.attributes("style")).toContain("right: 5px;");
    });

    it("does not apply floating styles when `floating` is false", () => {
        const wrapper = mount(CBadge, {
            props: {
                floating: false,
            },
        });

        const styleAttr = wrapper.attributes("style") || "";

        expect(styleAttr).not.toContain("top");
        expect(styleAttr).not.toContain("right");
    });

    it("does not apply `inline-block` when `inline` is false", () => {
        const wrapper = mount(CBadge, {
            props: { inline: false },
        });
        expect(wrapper.classes()).not.toContain("inline-block");
    });

    it("sets correct background color when `bgColor` prop is provided", () => {
        const wrapper = mount(CBadge, {
            props: { bgColor: "bg-green-500" },
        });
        expect(wrapper.find("span").classes()).toContain("bg-green-500");
    });

    it("sets correct text color when `textColor` prop is provided", () => {
        const wrapper = mount(CBadge, {
            props: { textColor: "text-gray-700" },
        });
        expect(wrapper.find("span").classes()).toContain("text-gray-700");
    });

    it("applies the correct offsetX and offsetY styles when floating is enabled", () => {
        const wrapper = mount(CBadge, {
            props: { floating: true, offsetX: "15px", offsetY: "20px" },
        });
        expect(wrapper.attributes("style")).toContain("top: 20px;");
        expect(wrapper.attributes("style")).toContain("right: 15px;");
    });

    it("does not apply floating offsets when `floating` is false", () => {
        const wrapper = mount(CBadge, {
            props: { floating: false, offsetX: "10px", offsetY: "15px" },
        });
        const styleAttr = wrapper.attributes("style") || "";
        expect(styleAttr).not.toContain("top: 15px;");
        expect(styleAttr).not.toContain("right: 10px;");
    });

    it("renders empty content when no slot or content prop is provided", () => {
        const wrapper = mount(CBadge);
        expect(wrapper.text()).toBe("");
    });

    it("renders `content` prop when provided", () => {
        const wrapper = mount(CBadge, {
            props: { content: "99+" },
        });
        expect(wrapper.text()).toBe("99+");
    });

    it("renders as a badge when `dot` prop is false", () => {
        const wrapper = mount(CBadge, {
            props: { dot: false },
        });
        const badgeSpan = wrapper.find("span");
        expect(badgeSpan.exists()).toBe(true);
        expect(badgeSpan.classes()).not.toContain("w-2");
        expect(badgeSpan.classes()).not.toContain("h-2");
    });

    it("applies default styles when no props are set", () => {
        const wrapper = mount(CBadge);
        expect(wrapper.classes()).toContain("inline-flex");
    });

    it("applies `rounded-full` class when `dot` is true", () => {
        const wrapper = mount(CBadge, {
            props: { dot: true },
        });
        expect(wrapper.find("span").classes()).toContain("rounded-full");
    });
});
