import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import CListItem from "../../src/components/layout/CListItem.vue";

describe("CListItem Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CListItem);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.classes()).toContain("c-list-item");
    });

    it("renders title when provided", () => {
        const wrapper = mount(CListItem, {
            props: {
                title: "List Item Title"
            }
        });

        expect(wrapper.find("h4").exists()).toBe(true);
        expect(wrapper.text()).toContain("List Item Title");
    });

    it("renders subtitle when provided", () => {
        const wrapper = mount(CListItem, {
            props: {
                subtitle: "List Item Subtitle"
            }
        });

        expect(wrapper.find(".text-sm").exists()).toBe(true);
        expect(wrapper.text()).toContain("List Item Subtitle");
    });

    it("renders icon when provided", () => {
        const IconMock = {
            name: "IconMock",
            template: "<div class='mock-icon'></div>"
        };

        const wrapper = mount(CListItem, {
            props: {
                icon: IconMock
            }
        });

        expect(wrapper.findComponent(IconMock).exists()).toBe(true);
        expect(wrapper.find(".icon-wrapper").exists()).toBe(true);
    });

    it("applies custom class", () => {
        const wrapper = mount(CListItem, {
            props: {
                customClass: "custom-list-item-class"
            }
        });

        expect(wrapper.classes()).toContain("custom-list-item-class");
    });

    it("applies text color to icon", () => {
        const IconMock = {
            name: "IconMock",
            template: "<div :class='$attrs.class'>mock-icon</div>",
            inheritAttrs: true
        };

        const wrapper = mount(CListItem, {
            props: {
                icon: IconMock,
                textColor: "text-blue-500"
            }
        });

        expect(wrapper.find('.icon-wrapper div').classes()).toContain("text-blue-500");
    });

    it("renders slot content", () => {
        const wrapper = mount(CListItem, {
            slots: {
                default: "<div class='list-slot-content'>Slot Content</div>"
            }
        });

        expect(wrapper.find(".list-slot-content").exists()).toBe(true);
        expect(wrapper.text()).toContain("Slot Content");
    });
});
