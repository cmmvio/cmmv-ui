import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import CProgressCircular from "../../src/components/components/CProgressCircular.vue";

describe("CProgressCircular Component", () => {
    it("renders correctly with default props", () => {
        const wrapper = mount(CProgressCircular);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find("svg").exists()).toBe(true);
        expect(wrapper.findAll("circle").length).toBe(2);

        // Check container size
        const containerStyle = wrapper.attributes("style");
        expect(containerStyle).toContain("width: 100px");
        expect(containerStyle).toContain("height: 100px");

        // Check SVG dimensions
        const svg = wrapper.find("svg");
        expect(svg.attributes("width")).toBe("100");
        expect(svg.attributes("height")).toBe("100");
    });

    it("calculates stroke dashoffset correctly based on value", () => {
        const wrapper = mount(CProgressCircular, {
            props: {
                value: 25
            }
        });

        const fillCircle = wrapper.find(".c-progress-circular-fill");
        const radius = 50 - 10; // Default: 50 (viewBox/2) - 10 (stroke width)
        const circumference = 2 * Math.PI * radius;
        const expectedOffset = circumference * (1 - 25 / 100);

        expect(fillCircle.attributes("stroke-dashoffset")).toBe(expectedOffset.toString());
    });

    it("applies custom size", () => {
        const wrapper = mount(CProgressCircular, {
            props: {
                size: 200
            }
        });

        expect(wrapper.attributes("style")).toContain("width: 200px");
        expect(wrapper.attributes("style")).toContain("height: 200px");

        const svg = wrapper.find("svg");
        expect(svg.attributes("width")).toBe("200");
        expect(svg.attributes("height")).toBe("200");
    });

    it("applies custom stroke width", () => {
        const wrapper = mount(CProgressCircular, {
            props: {
                width: 5
            }
        });

        const circleElements = wrapper.findAll("circle");
        circleElements.forEach(circle => {
            expect(circle.attributes("stroke-width")).toBe("5");
        });

        // Check that radius is adjusted for smaller stroke width
        const fillCircle = wrapper.find(".c-progress-circular-fill");
        expect(fillCircle.attributes("r")).toBe("45"); // 50 - 5
    });

    it("applies custom colors", () => {
        const wrapper = mount(CProgressCircular, {
            props: {
                bgColor: "#e0e0e0",
                fillColor: "#3f51b5"
            }
        });

        const bgCircle = wrapper.find(".c-progress-circular-bg");
        const fillCircle = wrapper.find(".c-progress-circular-fill");

        expect(bgCircle.attributes("stroke")).toBe("#e0e0e0");
        expect(fillCircle.attributes("stroke")).toBe("#3f51b5");
    });

    it("renders indeterminate loader when indeterminate is true", () => {
        const wrapper = mount(CProgressCircular, {
            props: {
                indeterminate: true
            }
        });

        expect(wrapper.find("svg").exists()).toBe(false);
        expect(wrapper.find(".loader").exists()).toBe(true);
    });

    it("applies custom styles to indeterminate loader", () => {
        const wrapper = mount(CProgressCircular, {
            props: {
                indeterminate: true,
                width: 8,
                fillColor: "#ff4081"
            }
        });

        const loader = wrapper.find(".loader");
        expect(loader.attributes("style")).toContain("border-width: 8px");
    });

    it("renders slot content", () => {
        const wrapper = mount(CProgressCircular, {
            slots: {
                default: "75%"
            }
        });

        expect(wrapper.text()).toBe("75%");
    });
});
