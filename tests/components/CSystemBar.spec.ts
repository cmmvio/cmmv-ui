import { mount, flushPromises } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import CSystemBar from "../../src/components/components/CSystemBar.vue";

describe("CSystemBar Component", () => {
    beforeEach(() => {
        // Mock Date.prototype.toLocaleTimeString instead of replacing the Date constructor
        vi.spyOn(Date.prototype, 'toLocaleTimeString').mockImplementation(() => "12:34");

        // Mock navigator.userAgent
        Object.defineProperty(navigator, 'userAgent', {
            value: 'test-agent',
            configurable: true
        });

        // Mock clearInterval/setInterval
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.restoreAllMocks();
        vi.useRealTimers();
    });

    it("renders correctly with default props", async () => {
        const wrapper = mount(CSystemBar);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.classes()).toContain("c-system-bar");
        expect(wrapper.find(".time").exists()).toBe(true);

        // Default height should be applied
        expect(wrapper.attributes("style")).toContain("height: 24px");
    });

    it("displays time correctly", async () => {
        const wrapper = mount(CSystemBar);

        // Give the component time to process its mounted hook
        await wrapper.vm.$nextTick();

        expect(wrapper.find(".time").text()).toBe("12:34");
    });

    it("displays static time when provided", async () => {
        const wrapper = mount(CSystemBar, {
            props: {
                staticTime: "10:30"
            }
        });

        // Need to wait for the updateTime function to be called
        // and for reactive updates to be processed
        await wrapper.vm.$nextTick();

        expect(wrapper.find(".time").text()).toBe("10:30");
    });

    it("applies ios platform class when platform is ios", () => {
        const wrapper = mount(CSystemBar, {
            props: {
                platform: "ios"
            }
        });

        expect(wrapper.classes()).toContain("ios-system-bar");
    });

    it("applies android platform class when platform is android", () => {
        const wrapper = mount(CSystemBar, {
            props: {
                platform: "android"
            }
        });

        expect(wrapper.classes()).toContain("android-system-bar");
    });

    it("shows ios battery indicator when platform is ios", () => {
        const wrapper = mount(CSystemBar, {
            props: {
                platform: "ios",
                batteryLevel: 50
            }
        });

        expect(wrapper.find(".ios-battery").exists()).toBe(true);
        expect(wrapper.find(".battery-level").attributes("style")).toContain("width: 50%");
    });

    it("shows android battery indicator when platform is android", () => {
        const wrapper = mount(CSystemBar, {
            props: {
                platform: "android",
                batteryLevel: 50
            }
        });

        expect(wrapper.find(".android-battery").exists()).toBe(true);
    });

    it("shows ios cellular signal correctly", () => {
        const wrapper = mount(CSystemBar, {
            props: {
                platform: "ios",
                cellularSignal: 3
            }
        });

        const bars = wrapper.findAll(".ios-cellular .cellular-bar");
        expect(bars.length).toBe(4);

        // First 3 bars should be at full opacity
        for (let i = 0; i < 3; i++) {
            expect(bars[i].attributes("style")).toContain("opacity: 1");
        }

        // Last bar should be at reduced opacity
        expect(bars[3].attributes("style")).toContain("opacity: 0.3");
    });

    it("shows wifi indicator correctly", () => {
        const wrapper = mount(CSystemBar, {
            props: {
                wifiSignal: 3
            }
        });

        expect(wrapper.find(".wifi").exists()).toBe(true);
    });

    it("shows bluetooth icon when bluetooth is true", () => {
        const wrapper = mount(CSystemBar, {
            props: {
                bluetooth: true
            }
        });

        expect(wrapper.find(".bluetooth").exists()).toBe(true);
    });

    it("shows notch when showNotch and notch are true and platform is ios", () => {
        const wrapper = mount(CSystemBar, {
            props: {
                platform: "ios",
                showNotch: true,
                notch: true
            }
        });

        expect(wrapper.find(".notch").exists()).toBe(true);
    });

    it("doesn't show notch when platform is android", () => {
        const wrapper = mount(CSystemBar, {
            props: {
                platform: "android",
                showNotch: true,
                notch: true
            }
        });

        expect(wrapper.find(".notch").exists()).toBe(false);
    });

    it("shows battery percentage when showBatteryPercentage is true", () => {
        const wrapper = mount(CSystemBar, {
            props: {
                batteryLevel: 75,
                showBatteryPercentage: true
            }
        });

        expect(wrapper.find(".battery-percentage").exists()).toBe(true);
        expect(wrapper.find(".battery-percentage").text()).toBe("75%");
    });

    it("cleans up interval on unmount", async () => {
        // Use spy on clearInterval directly
        const clearIntervalSpy = vi.spyOn(window, 'clearInterval');
        const wrapper = mount(CSystemBar);

        // Make sure to run any pending intervals before unmounting
        vi.runOnlyPendingTimers();

        wrapper.unmount();

        expect(clearIntervalSpy).toHaveBeenCalled();

        // Restore the spy to avoid affecting other tests
        clearIntervalSpy.mockRestore();
    });
});
