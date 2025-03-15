import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import CProgressBar from "../../src/components/components/CProgressBar.vue";

describe("CProgressBar Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CProgressBar);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(".progress-bar").exists()).toBe(true);

        // Check default style properties
        const containerStyle = wrapper.attributes("style");
        expect(containerStyle).toContain("height: 20px");
        expect(containerStyle).toContain("rgb(224, 224, 224)");

        const progressBar = wrapper.find(".progress-bar");
        expect(progressBar.attributes("style")).toContain("width: 0%");
        expect(progressBar.attributes("style")).toContain("rgb(76, 175, 80)");
    });

    it("renders with correct progress value", () => {
        const wrapper = mount(CProgressBar, {
            props: {
                value: 75
            }
        });

        const progressBar = wrapper.find(".progress-bar");
        expect(progressBar.attributes("style")).toContain("width: 75%");
    });

    it("applies correct height", () => {
        const wrapper = mount(CProgressBar, {
            props: {
                height: 10
            }
        });

        expect(wrapper.attributes("style")).toContain("height: 10px");
    });

    it("applies custom colors", () => {
        const wrapper = mount(CProgressBar, {
            props: {
                bgColor: "#f5f5f5",
                fillColor: "#2196f3",
                bufferColor: "#bbdefb"
            }
        });

        expect(wrapper.attributes("style")).toContain("rgb(245, 245, 245)");

        const progressBar = wrapper.find(".progress-bar");
        expect(progressBar.attributes("style")).toContain("rgb(33, 150, 243)");
    });

    it("shows buffer bar when buffering is true", () => {
        const wrapper = mount(CProgressBar, {
            props: {
                buffering: true,
                bufferValue: 80
            }
        });

        const bufferBar = wrapper.find(".absolute.inset-0");
        expect(bufferBar.exists()).toBe(true);
        expect(bufferBar.attributes("style")).toContain("width: 80%");
        expect(bufferBar.attributes("style")).toContain("rgb(192, 192, 192)");
    });

    it("applies striped class when striped prop is true", () => {
        const wrapper = mount(CProgressBar, {
            props: {
                striped: true
            }
        });

        expect(wrapper.find(".progress-bar").classes()).toContain("striped");
    });

    it("applies indeterminate class when indeterminate prop is true", () => {
        const wrapper = mount(CProgressBar, {
            props: {
                indeterminate: true
            }
        });

        const progressBar = wrapper.find(".progress-bar");
        expect(progressBar.classes()).toContain("indeterminate");
        expect(progressBar.attributes("style")).toContain("width: 100%");
    });

    it("renders slot content", () => {
        const wrapper = mount(CProgressBar, {
            slots: {
                default: "Loading: 50%"
            }
        });

        expect(wrapper.text()).toContain("Loading: 50%");
    });
});
