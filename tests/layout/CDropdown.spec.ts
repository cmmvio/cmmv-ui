import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import CDropdown from "../../src/components/layout/CDropdown.vue";

// Mock router-link
const mockRouterLink = {
    name: "router-link",
    props: ['to'],
    template: '<a :href="to"><slot /></a>'
};

describe("CDropdown Component", () => {
    const mockOptions = [
        { value: 1, label: "Option 1" },
        { value: 2, label: "Option 2" },
        { value: 3, label: "Option 3", to: "/page3" },
        { value: 4, label: "Option 4", href: "https://example.com" }
    ];

    it("renders correctly with default props", () => {
        const wrapper = mount(CDropdown, {
            props: {
                options: mockOptions
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find("button").exists()).toBe(true);
        expect(wrapper.text()).toContain("Select an option"); // Default placeholder
        expect(wrapper.find(".fade-enter-active").exists()).toBe(false); // Dropdown should be closed initially
    });

    it("opens dropdown when button is clicked", async () => {
        const wrapper = mount(CDropdown, {
            props: {
                options: mockOptions
            }
        });

        await wrapper.find("button").trigger("click");

        expect(wrapper.find(".fixed.inset-0").exists()).toBe(true); // Backdrop
        expect(wrapper.find("ul").exists()).toBe(true); // Options list
        expect(wrapper.findAll("li").length).toBe(mockOptions.length);
    });

    it("closes dropdown when backdrop is clicked", async () => {
        const wrapper = mount(CDropdown, {
            props: {
                options: mockOptions
            }
        });

        // Open the dropdown
        await wrapper.find("button").trigger("click");
        expect(wrapper.find("ul").exists()).toBe(true);

        // Click the backdrop
        await wrapper.find(".fixed.inset-0").trigger("click");

        // Dropdown should be closed
        expect(wrapper.find("ul").exists()).toBe(false);
    });

    it("emits update:modelValue and select events when option is selected", async () => {
        const wrapper = mount(CDropdown, {
            props: {
                options: mockOptions
            },
            global: {
                stubs: {
                    "router-link": mockRouterLink
                }
            }
        });

        // Open the dropdown
        await wrapper.find("button").trigger("click");

        // Select the second option
        await wrapper.findAll("li")[1].trigger("click");

        expect(wrapper.emitted("update:modelValue")).toBeTruthy();
        expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([2]); // Value of selected option

        expect(wrapper.emitted("select")).toBeTruthy();
        expect(wrapper.emitted("select")?.[0][0]).toEqual(mockOptions[1]); // Selected option object
    });

    it("displays selected option when modelValue is set", async () => {
        const wrapper = mount(CDropdown, {
            props: {
                options: mockOptions,
                modelValue: 2
            }
        });

        expect(wrapper.text()).toContain("Option 2");
    });

    it("renders router-link for options with 'to' property", async () => {
        const wrapper = mount(CDropdown, {
            props: {
                options: mockOptions
            },
            global: {
                stubs: {
                    "router-link": mockRouterLink
                }
            }
        });

        // Open the dropdown
        await wrapper.find("button").trigger("click");

        const links = wrapper.findAll("a");
        const routerLink = links.find(link => link.attributes("href") === "/page3");
        expect(routerLink).toBeTruthy();
    });

    it("renders regular anchor for options with 'href' property", async () => {
        const wrapper = mount(CDropdown, {
            props: {
                options: mockOptions
            }
        });

        // Open the dropdown
        await wrapper.find("button").trigger("click");

        const links = wrapper.findAll("a");
        const externalLink = links.find(link => link.attributes("href") === "https://example.com");
        expect(externalLink).toBeTruthy();
    });

    it("disables dropdown when disabled prop is true", async () => {
        const wrapper = mount(CDropdown, {
            props: {
                options: mockOptions,
                disabled: true
            }
        });

        await wrapper.find("button").trigger("click");

        // Dropdown should remain closed
        expect(wrapper.find("ul").exists()).toBe(false);
    });

    it("applies position classes correctly", async () => {
        const positions = [
            "top-left", "top-right", "top-center",
            "bottom-left", "bottom-right", "bottom-center"
        ];

        for (const position of positions) {
            const wrapper = mount(CDropdown, {
                props: {
                    options: mockOptions,
                    position
                }
            });

            await wrapper.find("button").trigger("click");

            if (position === "top-left") {
                expect(wrapper.find(".bottom-full.left-0").exists()).toBe(true);
            } else if (position === "top-right") {
                expect(wrapper.find(".bottom-full.right-0").exists()).toBe(true);
            } else if (position === "top-center") {
                expect(wrapper.find(".bottom-full.left-1\\/2").exists()).toBe(true);
            } else if (position === "bottom-right") {
                expect(wrapper.find(".top-full.right-0").exists()).toBe(true);
            } else if (position === "bottom-center") {
                expect(wrapper.find(".top-full.left-1\\/2").exists()).toBe(true);
            } else { // bottom-left (default)
                expect(wrapper.find(".top-full.left-0").exists()).toBe(true);
            }
        }
    });

    it("renders custom activator via slot", async () => {
        const wrapper = mount(CDropdown, {
            props: {
                options: mockOptions
            },
            slots: {
                activator: "<div class='custom-activator'>Click Me</div>"
            }
        });

        expect(wrapper.find(".custom-activator").exists()).toBe(true);
        expect(wrapper.text()).toContain("Click Me");
    });

    it("renders custom option template via slot", async () => {
        const wrapper = mount(CDropdown, {
            props: {
                options: mockOptions
            },
            slots: {
                option: `
          <template #option="{ data }">
            <div class="custom-option">{{ data.label.toUpperCase() }}</div>
          </template>
        `
            }
        });

        // Open the dropdown
        await wrapper.find("button").trigger("click");

        expect(wrapper.html()).toContain("OPTION 1");
        expect(wrapper.html()).toContain("OPTION 2");
    });

    it("renders custom content via content slot", async () => {
        const wrapper = mount(CDropdown, {
            props: {
                options: mockOptions
            },
            slots: {
                content: "<div class='custom-dropdown-content'>Custom Dropdown Content</div>"
            }
        });

        await wrapper.find("button").trigger("click");

        expect(wrapper.find(".custom-dropdown-content").exists()).toBe(true);
        expect(wrapper.text()).toContain("Custom Dropdown Content");
    });
});
