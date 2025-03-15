import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import CNavbar from "../../src/components/layout/CNavbar.vue";

// Mock IconChevronDown component
vi.mock("../../src/components/icons/IconChevronDown.vue", () => ({
    default: {
        name: 'IconChevronDown',
        template: "<div class='mock-chevron-down'></div>",
        props: ['size', 'customClass', 'aria-hidden']
    }
}));

// Mock CTooltip component
vi.mock("../../src/components/components/CTooltip.vue", () => ({
    default: {
        name: 'CTooltip',
        template: "<div class='mock-tooltip'><slot /></div>",
        props: ['content', 'position', 'maxWidth']
    }
}));

describe("CNavbar Component", () => {
    const mockItems = [
        { text: "Home", href: "/", icon: { template: "<div class='home-icon'></div>" } },
        { text: "Products", href: "/products" },
        { divider: true },
        {
            text: "Categories", children: [
                { text: "Electronics", href: "/electronics" },
                { text: "Clothing", href: "/clothing" }
            ]
        },
        { spacer: true },
        { text: "Contact", href: "/contact", active: true }
    ];

    it("renders correctly with default props", () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: mockItems
            },
            global: {
                stubs: {
                    'router-link': {
                        template: '<a :href="to"><slot /></a>',
                        props: ['to', 'exact']
                    }
                }
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.classes()).toContain("c-navbar");
        expect(wrapper.findAll("li").length).toBeGreaterThan(0);
    });

    it("renders in horizontal mode", () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: mockItems,
                mode: "horizontal"
            },
            global: {
                stubs: {
                    'router-link': {
                        template: '<a :href="to"><slot /></a>',
                        props: ['to', 'exact']
                    }
                }
            }
        });

        expect(wrapper.classes()).toContain("flex");
        expect(wrapper.classes()).toContain("items-center");
    });

    it("renders in vertical mode", () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: mockItems,
                mode: "vertical"
            },
            global: {
                stubs: {
                    'router-link': {
                        template: '<a :href="to"><slot /></a>',
                        props: ['to', 'exact']
                    }
                }
            }
        });

        expect(wrapper.classes()).toContain("flex");
        expect(wrapper.classes()).toContain("flex-col");
    });

    it("applies custom colors", () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: mockItems,
                bgColor: "rgb(255, 0, 0)",
                textColor: "rgb(255, 255, 255)",
                borderColor: "border-red-500"
            }
        });

        expect(wrapper.attributes("style")).toContain("background-color: rgb(255, 0, 0)");
        expect(wrapper.attributes("style")).toContain("color: rgb(255, 255, 255)");
        expect(wrapper.classes()).toContain("border-red-500");
    });

    it("applies elevation when elevated is true", () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: mockItems,
                elevated: true
            }
        });

        expect(wrapper.classes()).toContain("shadow-md");
    });

    it("shows hamburger menu in mobile view when toggleable is true", async () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: mockItems,
                toggleable: true
            }
        });

        expect(wrapper.find("button[aria-label='Toggle menu']").exists()).toBe(true);

        // Initially menu should be hidden on mobile
        expect(wrapper.find(".hidden.lg\\:block").exists()).toBe(true);

        // Click toggle button
        await wrapper.find("button[aria-label='Toggle menu']").trigger("click");

        // Menu should now be visible
        expect(wrapper.find(".absolute.top-full").exists()).toBe(true);
    });

    it("emits toggle event when menu button is clicked", async () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: mockItems,
                toggleable: true
            }
        });

        await wrapper.find("button[aria-label='Toggle menu']").trigger("click");

        expect(wrapper.emitted("toggle")).toBeTruthy();
    });

    it("opens dropdown in horizontal mode", async () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: mockItems,
                mode: "horizontal"
            },
            global: {
                stubs: {
                    'router-link': {
                        template: '<a :href="to"><slot /></a>',
                        props: ['to', 'exact']
                    },
                    'icon-chevron-down': true
                }
            }
        });

        // Debug - find the dropdown button first
        const dropdownButtons = wrapper.findAll("button");
        expect(dropdownButtons.length).toBeGreaterThan(0);

        // Find the dropdown toggle button specifically for Categories
        // We'll use the button that has "Categories" text nearby
        const categoriesSection = wrapper.findAll("li").find(li => li.text().includes("Categories"));
        expect(categoriesSection).toBeTruthy();

        const dropdownButton = categoriesSection ? categoriesSection.find("button") : null;
        expect(dropdownButton).toBeTruthy();

        if (dropdownButton) {
            await dropdownButton.trigger("click");

            // Instead of checking for a specific class, check for the content that appears
            expect(wrapper.html()).toContain("Electronics");
            expect(wrapper.html()).toContain("Clothing");
        }
    });

    it("collapses navbar when collapsed prop is true", async () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: mockItems,
                mode: "vertical",
                collapsed: true
            }
        });

        expect(wrapper.attributes("style")).toContain("width: 3.25rem");
    });

    it("expands collapsed navbar on hover when expandOnHover is true", async () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: mockItems,
                mode: "vertical",
                collapsed: true,
                expandOnHover: true
            }
        });

        // Initially collapsed
        expect(wrapper.attributes("style")).toContain("width: 3.25rem");

        // Hover over navbar
        await wrapper.trigger("mouseenter");

        // Should be expanded
        expect(wrapper.attributes("style")).not.toContain("width: 3.25rem");

        // Mouse leave
        await wrapper.trigger("mouseleave");

        // Should collapse again
        expect(wrapper.attributes("style")).toContain("width: 3.25rem");
    });

    it("emits item-click event when item is clicked", async () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: [
                    { text: "Clickable Item" } // No href, so should be clickable
                ]
            }
        });

        await wrapper.find("a").trigger("click");

        expect(wrapper.emitted("item-click")).toBeTruthy();
        expect(wrapper.emitted("item-click")?.[0][0]).toMatchObject({ text: "Clickable Item" });
    });

    it("renders fixed header when fixedHeader is provided", () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: mockItems,
                fixed: true,
                fixedHeader: "Navigation"
            }
        });

        expect(wrapper.find(".c-navbar-fixed-header").exists()).toBe(true);
        expect(wrapper.text()).toContain("Navigation");
    });

    it("renders icons when showIcons is true", () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: mockItems,
                showIcons: true
            },
            global: {
                stubs: {
                    'router-link': {
                        template: '<a :href="to"><slot /></a>',
                        props: ['to', 'exact']
                    }
                }
            }
        });

        expect(wrapper.find(".home-icon").exists()).toBe(true);
    });

    it("renders custom footer content through slot", () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: mockItems
            },
            slots: {
                footer: "<div class='navbar-footer'>Footer Content</div>"
            }
        });

        expect(wrapper.find(".navbar-footer").exists()).toBe(true);
        expect(wrapper.text()).toContain("Footer Content");
    });

    it("renders custom items through the items slot", () => {
        const wrapper = mount(CNavbar, {
            props: {
                items: mockItems
            },
            slots: {
                items: "<div class='custom-items'>Custom Navigation Items</div>"
            }
        });

        expect(wrapper.find(".custom-items").exists()).toBe(true);
        expect(wrapper.text()).toContain("Custom Navigation Items");
    });
});
