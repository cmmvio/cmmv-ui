import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import CAvatar from "../../src/components/layout/CAvatar.vue";

describe("CAvatar Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CAvatar);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(".rounded-full").exists()).toBe(true);
        // Default is to show SVG placeholder
        expect(wrapper.find("svg").exists()).toBe(true);
    });

    it("renders image when src is provided", () => {
        const wrapper = mount(CAvatar, {
            props: {
                src: "https://example.com/avatar.jpg",
                alt: "User Avatar"
            }
        });

        const img = wrapper.find("img");
        expect(img.exists()).toBe(true);
        expect(img.attributes("src")).toBe("https://example.com/avatar.jpg");
        expect(img.attributes("alt")).toBe("User Avatar");
    });

    it("renders initials when provided", () => {
        const wrapper = mount(CAvatar, {
            props: {
                initials: "JD"
            }
        });

        expect(wrapper.find("span").text()).toBe("JD");
        expect(wrapper.find("img").exists()).toBe(false);
    });

    it("emits error event when image fails to load", async () => {
        const wrapper = mount(CAvatar, {
            props: {
                src: "invalid-image.jpg"
            }
        });

        await wrapper.find("img").trigger("error");

        expect(wrapper.emitted("error")).toBeTruthy();
    });

    it("applies the correct size class", () => {
        const sizes = ["sm", "md", "lg", "xl", "2xl"];

        sizes.forEach(size => {
            const wrapper = mount(CAvatar, {
                props: { size }
            });

            const sizeClasses = {
                sm: "w-8 h-8",
                md: "w-10 h-10",
                lg: "w-14 h-14",
                xl: "w-20 h-20",
                "2xl": "w-24 h-24"
            };

            expect(wrapper.find(`[class*="${sizeClasses[size]}"]`).exists()).toBe(true);
        });
    });

    it("applies custom background color", () => {
        const wrapper = mount(CAvatar, {
            props: {
                bgColor: "bg-purple-500"
            }
        });

        expect(wrapper.find(".bg-purple-500").exists()).toBe(true);
    });

    it("applies custom border color", () => {
        const wrapper = mount(CAvatar, {
            props: {
                borderColor: "border-purple-500"
            }
        });

        expect(wrapper.find(".border-purple-500").exists()).toBe(true);
    });

    it("renders icon when icon prop is provided", () => {
        const MockIcon = {
            template: "<div class='mock-icon'></div>"
        };

        const wrapper = mount(CAvatar, {
            props: {
                icon: MockIcon
            }
        });

        expect(wrapper.findComponent(MockIcon).exists()).toBe(true);
    });

    it("renders status dot indicator", () => {
        const wrapper = mount(CAvatar, {
            props: {
                dotIndicator: "online"
            }
        });

        const dot = wrapper.find(".absolute.bottom-0.right-0");
        expect(dot.exists()).toBe(true);
        expect(dot.classes()).toContain("bg-green-500");
    });

    it("renders in stacked mode correctly", () => {
        const wrapper = mount(CAvatar, {
            props: {
                stacked: true
            },
            slots: {
                default: `
          <div class="avatar1">Avatar 1</div>
          <div class="avatar2">Avatar 2</div>
        `
            }
        });

        expect(wrapper.find(".flex.-space-x-4").exists()).toBe(true);
        expect(wrapper.find(".avatar1").exists()).toBe(true);
        expect(wrapper.find(".avatar2").exists()).toBe(true);
    });

    it("applies different rounded styles", () => {
        const wrapper = mount(CAvatar, {
            props: {
                rounded: "md"
            }
        });

        expect(wrapper.find(".rounded-md").exists()).toBe(true);
        expect(wrapper.find(".rounded-full").exists()).toBe(false);
    });

    it("applies custom image class", () => {
        const wrapper = mount(CAvatar, {
            props: {
                src: "https://example.com/avatar.jpg",
                imageClass: "custom-image-class"
            }
        });

        expect(wrapper.find("img.custom-image-class").exists()).toBe(true);
    });
});
