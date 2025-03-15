import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import CAlert from "../../src/components/layout/CAlert.vue";

// Mock icon components
vi.mock("@components/icons/IconCheckCircle.vue", () => ({
    default: { template: "<div class='mock-check-icon'></div>" }
}));

vi.mock("@components/icons/IconInformationCircle.vue", () => ({
    default: { template: "<div class='mock-info-icon'></div>" }
}));

vi.mock("@components/icons/IconExclamationTriangle.vue", () => ({
    default: { template: "<div class='mock-warning-icon'></div>" }
}));

vi.mock("@components/icons/IconXCircle.vue", () => ({
    default: { template: "<div class='mock-error-icon'></div>" }
}));

vi.mock("@components/icons/IconXMark.vue", () => ({
    default: {
        name: "IconXMark",
        template: "<div class='mock-close-icon'></div>",
        props: ['class', 'aria-label']
    }
}));

describe("CAlert Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CAlert);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.attributes("role")).toBe("alert");
        expect(wrapper.text()).toContain("This is an info alert.");
    });

    it("renders custom message via slot", () => {
        const wrapper = mount(CAlert, {
            slots: {
                default: "Custom alert message"
            }
        });

        expect(wrapper.text()).toContain("Custom alert message");
    });

    it("renders title when provided", () => {
        const wrapper = mount(CAlert, {
            props: {
                title: "Alert Title"
            }
        });

        expect(wrapper.text()).toContain("Alert Title");
        expect(wrapper.find(".font-bold").exists()).toBe(true);
    });

    it("renders icon when icon prop is true", () => {
        const wrapper = mount(CAlert, {
            props: {
                icon: true,
                type: "info"
            }
        });

        expect(wrapper.find(".mock-info-icon").exists()).toBe(true);
    });

    it("renders close button when closable is true", () => {
        const wrapper = mount(CAlert, {
            props: {
                closable: true
            },
            global: {
                stubs: {
                    'icon-x-mark': {
                        template: "<div class='mock-close-icon'></div>"
                    }
                }
            }
        });

        expect(wrapper.find("button").exists()).toBe(true);
        expect(wrapper.find("button[aria-label='Close alert']").exists()).toBe(true);
    });

    it("emits close event when close button is clicked", async () => {
        const wrapper = mount(CAlert, {
            props: {
                closable: true
            }
        });

        await wrapper.find("button").trigger("click");

        expect(wrapper.emitted("close")).toBeTruthy();
    });

    it("applies correct colors for each alert type", () => {
        const types = ["success", "info", "warning", "error"];

        types.forEach(type => {
            const wrapper = mount(CAlert, {
                props: {
                    type,
                    icon: true
                }
            });

            expect(wrapper.html()).toContain(`bg-${type === "success" ? "green" : type === "info" ? "blue" : type === "warning" ? "yellow" : "red"}-400`);
        });
    });

    it("applies outlined style when outlined prop is true", () => {
        const wrapper = mount(CAlert, {
            props: {
                outlined: true,
                type: "info"
            }
        });

        expect(wrapper.html()).toContain("border-blue-400");
        expect(wrapper.html()).toContain("text-blue-600");
    });

    it("uses custom bgColor when provided", () => {
        const wrapper = mount(CAlert, {
            props: {
                bgColor: "bg-purple-500"
            }
        });

        expect(wrapper.html()).toContain("bg-purple-500");
    });

    it("uses custom textColor when provided", () => {
        const wrapper = mount(CAlert, {
            props: {
                textColor: "text-purple-900"
            }
        });

        expect(wrapper.html()).toContain("text-purple-900");
    });

    it("renders custom icon via slot", () => {
        const wrapper = mount(CAlert, {
            props: {
                icon: true
            },
            slots: {
                icon: "<span class='custom-icon'>!</span>"
            }
        });

        expect(wrapper.find(".custom-icon").exists()).toBe(true);
        expect(wrapper.find(".custom-icon").text()).toBe("!");
    });

    it("renders custom close icon via slot", () => {
        const wrapper = mount(CAlert, {
            props: {
                closable: true
            },
            slots: {
                "close-icon": "<span class='custom-close'>X</span>"
            }
        });

        expect(wrapper.find(".custom-close").exists()).toBe(true);
        expect(wrapper.find(".custom-close").text()).toBe("X");
    });

    it("uses correct aria-label", () => {
        const wrapper = mount(CAlert, {
            props: {
                ariaLabel: "Important notification"
            }
        });

        expect(wrapper.attributes("aria-label")).toBe("Important notification");
    });
});
