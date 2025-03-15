import { mount, flushPromises } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import CNotification from "../../src/components/overlays/CNotification.vue";

// Mock child components
vi.mock("@components/icons/IconXMark.vue", () => ({
    default: {
        template: "<div data-test='icon-x-mark'></div>"
    }
}));

describe("CNotification Component", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.restoreAllMocks();
        vi.useRealTimers();
    });

    it("renders correctly with no notifications", () => {
        const wrapper = mount(CNotification);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.findAll('.pointer-events-auto').length).toBe(0);
    });

    it("shows notification when showNotification is called", async () => {
        const wrapper = mount(CNotification);

        const notificationId = wrapper.vm.showNotification({
            newTitle: "Test Notification",
            newContent: "This is a test notification",
            position: "top-right",
            permanent: true
        });

        await wrapper.vm.$nextTick();

        expect(notificationId).toBeDefined();
        expect(wrapper.findAll('.pointer-events-auto').length).toBe(1);
        expect(wrapper.text()).toContain("Test Notification");
        expect(wrapper.text()).toContain("This is a test notification");
    });

    it("closes notification when closeNotification is called", async () => {
        const wrapper = mount(CNotification);

        const notificationId = wrapper.vm.showNotification({
            newTitle: "Test Notification",
            newContent: "This is a test notification",
            position: "top-right"
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.findAll('.pointer-events-auto').length).toBe(1);

        wrapper.vm.closeNotification(notificationId);
        await wrapper.vm.$nextTick();

        expect(wrapper.findAll('.pointer-events-auto').length).toBe(0);
    });

    it("updates notification when updateNotification is called", async () => {
        const wrapper = mount(CNotification);

        const notificationId = wrapper.vm.showNotification({
            newTitle: "Original Title",
            newContent: "Original content",
            position: "top-right",
            permanent: true
        });

        await wrapper.vm.$nextTick();

        wrapper.vm.updateNotification(notificationId, {
            newTitle: "Updated Title",
            newContent: "Updated content"
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.text()).toContain("Updated Title");
        expect(wrapper.text()).toContain("Updated content");
    });

    it("clears all notifications when clearAllNotifications is called", async () => {
        const wrapper = mount(CNotification);

        // Add multiple notifications
        wrapper.vm.showNotification({
            newTitle: "Notification 1",
            position: "top-right",
            permanent: true
        });

        wrapper.vm.showNotification({
            newTitle: "Notification 2",
            position: "top-left",
            permanent: true
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.findAll('.pointer-events-auto').length).toBe(2);

        wrapper.vm.clearAllNotifications();
        await wrapper.vm.$nextTick();

        expect(wrapper.findAll('.pointer-events-auto').length).toBe(0);
    });

    it("automatically closes notification after duration", async () => {
        const wrapper = mount(CNotification);

        const notificationId = wrapper.vm.showNotification({
            newTitle: "Auto Close",
            newContent: "This should close automatically",
            newDuration: 1000,
            permanent: false
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.findAll('.pointer-events-auto').length).toBe(1);

        // Fast forward time
        vi.advanceTimersByTime(2000);
        await wrapper.vm.$nextTick();

        expect(wrapper.findAll('.pointer-events-auto').length).toBe(0);
    });

    it("shows notification in specified position", async () => {
        const wrapper = mount(CNotification);

        // Add notification to top-left
        wrapper.vm.showNotification({
            newTitle: "Top Left",
            position: "top-left",
            permanent: true
        });

        await wrapper.vm.$nextTick();

        // Check that the notification is in the top-left container
        const topLeftContainer = wrapper.find('.items-start.justify-start');
        expect(topLeftContainer.find('.pointer-events-auto').exists()).toBe(true);
        expect(topLeftContainer.text()).toContain("Top Left");
    });

    it("respects the notifications limit per position", async () => {
        const wrapper = mount(CNotification, {
            props: {
                limit: 2
            }
        });

        // Add 3 notifications to top-right
        for (let i = 1; i <= 3; i++) {
            wrapper.vm.showNotification({
                newTitle: `Notification ${i}`,
                position: "top-right",
                permanent: true
            });
        }

        await wrapper.vm.$nextTick();

        // Check that only 2 notifications are shown
        const topRightContainer = wrapper.find('.items-start.justify-end');
        expect(topRightContainer.findAll('.pointer-events-auto').length).toBe(2);

        // The oldest notification should be removed
        expect(topRightContainer.text()).not.toContain("Notification 1");
        expect(topRightContainer.text()).toContain("Notification 2");
        expect(topRightContainer.text()).toContain("Notification 3");
    });

    it("shows progress bar for non-permanent notifications", async () => {
        const wrapper = mount(CNotification);

        wrapper.vm.showNotification({
            newTitle: "With Progress",
            newContent: "This has a progress bar",
            newDuration: 5000,
            permanent: false
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.h-1.w-full.rounded').exists()).toBe(true);
        expect(wrapper.find('.h-full.rounded.transition-all').exists()).toBe(true);
    });

    it("doesn't show progress bar for permanent notifications", async () => {
        const wrapper = mount(CNotification);

        wrapper.vm.showNotification({
            newTitle: "No Progress",
            newContent: "This has no progress bar",
            permanent: true
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.h-1.w-full.rounded').exists()).toBe(false);
    });
});
