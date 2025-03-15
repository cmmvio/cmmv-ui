import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import CSkeleton from "../../src/components/layout/CSkeleton.vue";

describe("CSkeleton Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CSkeleton);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.classes()).toContain('c-skeleton');
        expect(wrapper.classes()).toContain('skeleton-text');
        expect(wrapper.classes()).toContain('skeleton-default');
    });

    it("renders text skeleton with correct number of lines", () => {
        const wrapper = mount(CSkeleton, {
            props: {
                type: 'text',
                lines: 5
            }
        });

        expect(wrapper.findAll('.skeleton-line')).toHaveLength(5);
    });

    it("renders image skeleton", () => {
        const wrapper = mount(CSkeleton, {
            props: {
                type: 'image',
                width: 300,
                height: 200
            }
        });

        expect(wrapper.find('.skeleton-image').exists()).toBe(true);

        // Check style through the HTML string instead of attributes
        const html = wrapper.html();
        expect(html).toContain('height: 200px');
        expect(html).toContain('width: 300px');
    });

    it("renders image-text skeleton", () => {
        const wrapper = mount(CSkeleton, {
            props: {
                type: 'image-text',
                imageWidth: 100,
                imageHeight: 100,
                imageTextLines: 3
            }
        });

        expect(wrapper.find('.skeleton-image-text').exists()).toBe(true);
        expect(wrapper.find('.skeleton-image').exists()).toBe(true);
        expect(wrapper.findAll('.skeleton-line')).toHaveLength(3);
    });

    it("renders video skeleton", () => {
        const wrapper = mount(CSkeleton, {
            props: {
                type: 'video'
            }
        });

        expect(wrapper.find('.skeleton-video').exists()).toBe(true);
        expect(wrapper.find('.skeleton-play-icon').exists()).toBe(true);
    });

    it("renders card skeleton", () => {
        const wrapper = mount(CSkeleton, {
            props: {
                type: 'card',
                cardImage: true,
                cardLines: 4
            }
        });

        expect(wrapper.find('.skeleton-card').exists()).toBe(true);
        expect(wrapper.find('.skeleton-card-image').exists()).toBe(true);
        expect(wrapper.findAll('.skeleton-line')).toHaveLength(4);
    });

    it("renders list skeleton", () => {
        const wrapper = mount(CSkeleton, {
            props: {
                type: 'list',
                listItems: 3,
                listItemLines: 2
            }
        });

        expect(wrapper.findAll('.skeleton-list-item')).toHaveLength(3);
        // Each list item has 2 lines
        expect(wrapper.findAll('.skeleton-line')).toHaveLength(6);
    });

    it("applies different variants", () => {
        const variants = ['default', 'primary', 'secondary', 'dark', 'light'];

        variants.forEach(variant => {
            const wrapper = mount(CSkeleton, {
                props: { variant }
            });

            expect(wrapper.classes()).toContain(`skeleton-${variant}`);
        });
    });

    it("applies animation when enabled", () => {
        const wrapper = mount(CSkeleton, {
            props: {
                animated: true,
                animationType: 'pulse'
            }
        });

        expect(wrapper.find('.skeleton-pulse-animation').exists()).toBe(true);

        const shineWrapper = mount(CSkeleton, {
            props: {
                animated: true,
                animationType: 'shine'
            }
        });

        expect(shineWrapper.find('.skeleton-shine-animation').exists()).toBe(true);
    });

    it("applies rounded style when enabled", () => {
        const wrapper = mount(CSkeleton, {
            props: {
                rounded: true
            }
        });

        expect(wrapper.classes()).toContain('skeleton-rounded');
    });

    it("applies custom classes", () => {
        const wrapper = mount(CSkeleton, {
            props: {
                customClass: 'test-custom-class'
            }
        });

        expect(wrapper.classes()).toContain('test-custom-class');
    });

    it("applies custom styles", () => {
        const wrapper = mount(CSkeleton, {
            props: {
                customStyle: { marginTop: '20px', padding: '10px' }
            }
        });

        expect(wrapper.attributes('style')).toContain('margin-top: 20px');
        expect(wrapper.attributes('style')).toContain('padding: 10px');
    });

    it("renders icon in image skeleton", () => {
        const wrapper = mount(CSkeleton, {
            props: {
                type: 'image',
                icon: true
            }
        });

        expect(wrapper.find('.skeleton-icon').exists()).toBe(true);
    });

    it("renders slot content", () => {
        const wrapper = mount(CSkeleton, {
            slots: {
                default: '<div class="custom-content">Custom Content</div>'
            }
        });

        expect(wrapper.find('.custom-content').exists()).toBe(true);
        expect(wrapper.text()).toContain('Custom Content');
    });
});
