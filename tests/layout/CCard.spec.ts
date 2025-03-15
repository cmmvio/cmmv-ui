import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { h } from 'vue';
import CCard from "../../src/components/layout/CCard.vue";

// Mock CProgressBar component
vi.mock("../../src/components/components/CProgressBar.vue", () => ({
    default: {
        template: '<div class="mock-progress-bar"></div>',
        props: ['indeterminate', 'height', 'fillColor']
    }
}));

// Mock CButton component
vi.mock("../../src/components/components/CButton.vue", () => ({
    default: {
        name: 'CButton',
        template: '<button class="mock-close-button" @click="$emit(\'click\')"><slot /></button>',
        props: ['type', 'rounded', 'size', 'variant', 'bgColor', 'class'],
        emits: ['click']
    }
}));

// Mock IconXMark component
vi.mock("../../src/components/icons/IconXMark.vue", () => ({
    default: {
        name: 'IconXMark',
        template: '<div class="mock-x-icon"></div>',
        props: ['class']
    }
}));

describe("CCard Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CCard);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.classes()).toContain("c-card");
        expect(wrapper.classes()).toContain("rounded-lg");
        expect(wrapper.attributes("style")).toContain("max-width: 100%");
        expect(wrapper.attributes("style")).toContain("min-width: 350px");
        expect(wrapper.attributes("style")).toContain("min-height: auto");
    });

    it("renders title and subtitle when provided", () => {
        const wrapper = mount(CCard, {
            props: {
                title: "Card Title",
                subtitle: "Card Subtitle"
            }
        });

        expect(wrapper.text()).toContain("Card Title");
        expect(wrapper.text()).toContain("Card Subtitle");
        expect(wrapper.find("h3").exists()).toBe(true);
    });

    it("applies custom classes correctly", () => {
        const wrapper = mount(CCard, {
            props: {
                bgColor: "bg-blue-500",
                textColor: "text-white",
                borderColor: "border-blue-700",
                rounded: "full"
            }
        });

        expect(wrapper.classes()).toContain("bg-blue-500");
        expect(wrapper.classes()).toContain("text-white");
        expect(wrapper.classes()).toContain("border-blue-700");
        expect(wrapper.classes()).toContain("rounded-full");
    });

    it("applies different variants", () => {
        const variants = ["elevated", "flat", "tonal", "outlined", "text", "plain"];

        variants.forEach(variant => {
            const wrapper = mount(CCard, {
                props: { variant }
            });

            if (variant === "elevated") expect(wrapper.classes()).toContain("shadow-lg");
            if (variant === "flat") expect(wrapper.classes()).toContain("shadow-none");
            if (variant === "tonal") expect(wrapper.classes()).toContain("bg-opacity-75");
            if (variant === "outlined") expect(wrapper.classes()).toContain("bg-transparent");
            if (variant === "text") expect(wrapper.classes()).toContain("bg-transparent");
        });
    });

    it("shows loading progress bar when loading is true", () => {
        const wrapper = mount(CCard, {
            props: {
                loading: true
            },
            global: {
                stubs: {
                    'c-progress-bar': true // Use automatic stub to ensure the component is recognized
                }
            }
        });

        // Check if there's a component with the indeterminate prop set
        expect(wrapper.find('[indeterminate]').exists()).toBe(true);
    });

    it("renders closable button when closable is true", () => {
        const wrapper = mount(CCard, {
            props: {
                closable: true,
                title: "Closable Card" // Need title for header to show
            },
            global: {
                stubs: {
                    'c-button': {
                        template: '<button class="mock-close-button" @click="$emit(\'click\')"><slot /></button>',
                        props: ['type', 'rounded', 'size', 'variant', 'bgColor', 'class', 'aria-label'],
                    },
                    'IconXMark': true
                }
            }
        });

        // Debug the rendered HTML to identify the correct selector to use
        // console.log(wrapper.html());

        // Look for the mock close button class instead of aria-label
        expect(wrapper.find('.mock-close-button').exists()).toBe(true);
    });

    it("emits close event when close button is clicked", async () => {
        const wrapper = mount(CCard, {
            props: {
                closable: true,
                title: "Closable Card"
            },
            global: {
                stubs: {
                    'c-button': {
                        template: '<button class="mock-close-button" @click="$emit(\'click\')"><slot /></button>',
                        props: ['type', 'rounded', 'size', 'variant', 'bgColor', 'class'],
                    },
                    'IconXMark': true
                }
            }
        });

        await wrapper.find('button[aria-label="Close"]').trigger("click");

        expect(wrapper.emitted("close")).toBeTruthy();
    });

    it("renders custom content via default slot", () => {
        const wrapper = mount(CCard, {
            slots: {
                default: "<div class='custom-content'>Custom Content</div>"
            }
        });

        expect(wrapper.find(".custom-content").exists()).toBe(true);
        expect(wrapper.text()).toContain("Custom Content");
    });

    it("renders content via content slot", () => {
        const wrapper = mount(CCard, {
            slots: {
                content: "<div class='card-content'>Slot Content</div>"
            }
        });

        expect(wrapper.find(".card-content").exists()).toBe(true);
        expect(wrapper.text()).toContain("Slot Content");
    });

    it("renders header via header slot", () => {
        const wrapper = mount(CCard, {
            slots: {
                header: "<div class='custom-header'>Custom Header</div>"
            }
        });

        expect(wrapper.find(".custom-header").exists()).toBe(true);
        expect(wrapper.text()).toContain("Custom Header");
    });

    it("renders actions when actions prop is true", () => {
        const wrapper = mount(CCard, {
            props: {
                actions: true
            },
            slots: {
                // Provide the "actions" slot to satisfy the v-if="$slots.actions" check
                "actions": "",
                // And provide action-buttons for the content
                "action-buttons": () => h('div', {}, [
                    h('button', {}, 'Cancel'),
                    h('button', {}, 'Save')
                ])
            }
        });

        // Check that the content is rendered
        expect(wrapper.text()).toContain('Cancel');
        expect(wrapper.text()).toContain('Save');
    });

    it("applies disabled style when disabled is true", () => {
        const wrapper = mount(CCard, {
            props: {
                disabled: true
            }
        });

        expect(wrapper.classes()).toContain("opacity-50");
        expect(wrapper.classes()).toContain("cursor-not-allowed");
    });

    it("applies hover effect when hover is true", () => {
        const wrapper = mount(CCard, {
            props: {
                hover: true
            }
        });

        expect(wrapper.classes()).toContain("hover:brightness-110");
    });

    it("applies role link when href is provided", () => {
        const wrapper = mount(CCard, {
            props: {
                href: "https://example.com"
            }
        });

        expect(wrapper.attributes("role")).toBe("link");
        expect(wrapper.attributes("tabindex")).toBe("0");
    });
});