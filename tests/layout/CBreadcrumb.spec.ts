import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import CBreadcrumb from "../../src/components/layout/CBreadcrumb.vue";

// Mock icon components
vi.mock("@components/icons/IconChevronDown.vue", () => ({
    default: {
        template: "<div class='mock-chevron-down'></div>"
    }
}));

describe("CBreadcrumb Component", () => {
    // Sample items array for testing
    const mockItems = [
        { text: "Home", to: "/" },
        { text: "Products", to: "/products" },
        { text: "Product Details" }
    ];

    it("renders correctly with default props", () => {
        const wrapper = mount(CBreadcrumb, {
            props: {
                items: mockItems
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find("nav").exists()).toBe(true);
        expect(wrapper.findAll("li").length).toBe(5);
        expect(wrapper.text()).toContain("Home");
        expect(wrapper.text()).toContain("Products");
        expect(wrapper.text()).toContain("Product Details");
    });

    it("renders separators between items", () => {
        const wrapper = mount(CBreadcrumb, {
            props: {
                items: mockItems,
                separator: ">"
            }
        });

        // There should be separators between items (2 for 3 items)
        const separators = wrapper.findAll(".mx-1");
        expect(separators.length).toBe(2);
        expect(separators[0].text()).toBe(">");
    });

    it("renders active item with active style", () => {
        const wrapper = mount(CBreadcrumb, {
            props: {
                items: mockItems,
                activeTextColor: "text-red-500"
            }
        });

        // The last item should have the active text color
        const lastItem = wrapper.findAll("li").at(-1);
        expect(lastItem?.find(".text-red-500").exists()).toBe(true);
    });

    it("renders router-link for items with 'to' prop", () => {
        const wrapper = mount(CBreadcrumb, {
            props: {
                items: mockItems
            },
            global: {
                stubs: {
                    'router-link': {
                        template: '<a class="router-link"><slot></slot></a>',
                        props: ['to'],
                        mounted() {
                            // Set href directly in mounted hook to ensure it works
                            const el = this.$el;
                            const to = this.$props.to;
                            if (typeof to === 'string') {
                                el.setAttribute('href', to);
                            } else if (to && typeof to === 'object' && to.path) {
                                el.setAttribute('href', to.path);
                            } else {
                                el.setAttribute('href', '#');
                            }
                        }
                    }
                }
            }
        });

        const routerLinks = wrapper.findAll(".router-link");
        expect(routerLinks.length).toBe(2); // First two items have 'to' prop
        expect(routerLinks[0].attributes("href")).toBe("/");
        expect(routerLinks[1].attributes("href")).toBe("/products");
    });

    it("renders regular anchors for items with 'href' prop", () => {
        const items = [
            { text: "Google", href: "https://google.com" },
            { text: "Example" }
        ];

        const wrapper = mount(CBreadcrumb, {
            props: {
                items
            }
        });

        const anchors = wrapper.findAll("a");
        expect(anchors.length).toBe(1);
        expect(anchors[0].attributes("href")).toBe("https://google.com");
    });

    it("renders icon when provided", () => {
        const mockIcon = {
            template: "<div class='custom-icon'></div>"
        };

        const wrapper = mount(CBreadcrumb, {
            props: {
                items: mockItems,
                icon: mockIcon
            }
        });

        expect(wrapper.findComponent(mockIcon).exists()).toBe(true);
    });

    it("renders custom separator via slot", () => {
        const wrapper = mount(CBreadcrumb, {
            props: {
                items: mockItems
            },
            slots: {
                separator: '<span class="custom-separator">→</span>'
            }
        });

        expect(wrapper.find(".custom-separator").exists()).toBe(true);
        expect(wrapper.find(".custom-separator").text()).toBe("→");
    });

    it("renders item icon when provided", () => {
        const mockIconComponent = {
            template: "<div class='item-icon'></div>"
        };

        const itemsWithIcons = [
            { text: "Home", icon: mockIconComponent },
            { text: "Products" }
        ];

        const wrapper = mount(CBreadcrumb, {
            props: {
                items: itemsWithIcons
            }
        });

        expect(wrapper.findComponent(mockIconComponent).exists()).toBe(true);
    });

    it("applies custom text colors", () => {
        const wrapper = mount(CBreadcrumb, {
            props: {
                items: mockItems,
                textColor: "text-blue-500",
                activeTextColor: "text-red-500"
            }
        });

        // Non-active items should have the regular text color
        expect(wrapper.html()).toContain("text-blue-500");

        // Active (last) item should have the active text color
        expect(wrapper.html()).toContain("text-red-500");
    });

    it("renders dropdown for items with dropdown config", async () => {
        // Mock the CDropdown component
        const mockDropdown = {
            template: `
        <div class="mock-dropdown">
          <slot name="activator"></slot>
          <div class="dropdown-options">
            <slot name="option" v-for="option in options" :data="option"></slot>
          </div>
        </div>
      `,
            props: ['options', 'position']
        };

        const itemsWithDropdown = [
            {
                text: "Categories",
                dropdown: {
                    options: [
                        { value: 1, label: "Category 1" },
                        { value: 2, label: "Category 2" }
                    ],
                    position: "bottom-right"
                }
            },
            { text: "Products" }
        ];

        const wrapper = mount(CBreadcrumb, {
            props: {
                items: itemsWithDropdown
            },
            global: {
                stubs: {
                    'c-dropdown': mockDropdown
                }
            }
        });

        expect(wrapper.find(".mock-dropdown").exists()).toBe(true);
        expect(wrapper.text()).toContain("Categories");
        expect(wrapper.html()).toContain("Category 1");
        expect(wrapper.html()).toContain("Category 2");
    });
});
