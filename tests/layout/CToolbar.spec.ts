import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import CToolbar from "../../src/components/layout/CToolbar.vue";

describe("CToolbar Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CToolbar);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.classes()).toContain('c-toolbar');
    });

    it("applies dense class when dense prop is true", async () => {
        const wrapper = mount(CToolbar, {
            props: {
                dense: false
            }
        });

        expect(wrapper.classes()).not.toContain('c-toolbar--dense');

        await wrapper.setProps({ dense: true });
        expect(wrapper.classes()).toContain('c-toolbar--dense');
    });

    it("applies dense class when minified prop is true", async () => {
        const wrapper = mount(CToolbar, {
            props: {
                minified: false
            }
        });

        expect(wrapper.classes()).not.toContain('c-toolbar--dense');

        await wrapper.setProps({ minified: true });
        expect(wrapper.classes()).toContain('c-toolbar--dense');
    });

    it("renders slot content", () => {
        const wrapper = mount(CToolbar, {
            slots: {
                default: '<div class="toolbar-content">Toolbar Content</div>'
            }
        });

        expect(wrapper.find('.toolbar-content').exists()).toBe(true);
        expect(wrapper.text()).toContain('Toolbar Content');
    });
});
