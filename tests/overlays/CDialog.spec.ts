import { mount, shallowMount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import CDialog from "../../src/components/overlays/CDialog.vue";

// Mock child components
vi.mock("@components/icons/IconXMark.vue", () => ({
    default: {
        template: "<div data-test='icon-x-mark'></div>"
    }
}));

describe("CDialog Component", () => {
    // Mock nextTick since it's used in the component
    beforeEach(() => {
        vi.mock("vue", async () => {
            const actual = await vi.importActual("vue");
            return {
                ...actual,
                nextTick: vi.fn().mockImplementation(() => Promise.resolve())
            };
        });
    });

    it("renders correctly when modelValue is true", async () => {
        const wrapper = shallowMount(CDialog, {
            props: {
                modelValue: true
            },
            global: {
                stubs: {
                    'c-overlay': {
                        template: '<div class="mock-overlay"><slot /></div>',
                        props: ['modelValue']
                    },
                    'c-card': {
                        template: '<div class="mock-card"><slot /></div>',
                        props: ['maxWidth', 'minHeight', 'bgColor', 'textColor', 'borderColor', 'rounded', 'closable']
                    }
                }
            }
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.mock-overlay').exists()).toBe(true);
        expect(wrapper.find('.mock-card').exists()).toBe(true);
    });

    it("doesn't render dialog when modelValue is false", async () => {
        const wrapper = shallowMount(CDialog, {
            props: {
                modelValue: false
            },
            global: {
                stubs: {
                    'c-overlay': {
                        template: '<div class="mock-overlay"><slot /></div>',
                        props: ['modelValue']
                    }
                }
            }
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.mock-overlay').exists()).toBe(false);
    });

    it("renders slots correctly", async () => {
        const wrapper = shallowMount(CDialog, {
            props: {
                modelValue: true
            },
            slots: {
                header: '<div class="test-header">Header Content</div>',
                content: '<div class="test-content">Dialog Content</div>',
                actions: '<div class="test-actions">Action Buttons</div>'
            },
            global: {
                stubs: {
                    'c-overlay': {
                        template: '<div class="mock-overlay"><slot /></div>',
                        props: ['modelValue']
                    },
                    'c-card': {
                        template: '<div class="mock-card"><slot name="header" /><slot name="content" /><slot name="actions" /></div>',
                        props: ['maxWidth', 'minHeight', 'bgColor', 'textColor', 'borderColor', 'rounded', 'closable']
                    }
                }
            }
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.test-header').exists()).toBe(true);
        expect(wrapper.find('.test-content').exists()).toBe(true);
        expect(wrapper.find('.test-actions').exists()).toBe(true);
    });

    it("applies correct animation class", async () => {
        const wrapper = shallowMount(CDialog, {
            props: {
                modelValue: true,
                animation: 'slide-down'
            },
            global: {
                stubs: {
                    'c-overlay': {
                        template: '<div class="mock-overlay"><slot /></div>',
                        props: ['modelValue']
                    },
                    'c-card': {
                        template: '<div class="mock-card" :class="$attrs.class"><slot /></div>',
                        props: ['maxWidth', 'minHeight', 'bgColor', 'textColor', 'borderColor', 'rounded', 'closable'],
                        inheritAttrs: false
                    }
                }
            }
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.html()).toContain('slide-down');
    });

    it("emits update:modelValue event when closed", async () => {
        // Add this line to mock timers before using timer functions
        vi.useFakeTimers();

        const wrapper = shallowMount(CDialog, {
            props: {
                modelValue: true,
                animationDuration: 10 // Speed up test
            },
            global: {
                stubs: {
                    'c-overlay': {
                        template: '<div class="mock-overlay" @click="$emit(\'update:modelValue\', false)"><slot /></div>',
                        props: ['modelValue'],
                        emits: ['update:modelValue']
                    },
                    'c-card': {
                        template: '<div class="mock-card"><button class="close-btn" @click="$emit(\'close\')">Close</button><slot /></div>',
                        props: ['maxWidth', 'minHeight', 'bgColor', 'textColor', 'borderColor', 'rounded', 'closable'],
                        emits: ['close']
                    }
                }
            }
        });

        await wrapper.vm.$nextTick();

        // Click close button
        await wrapper.find('.close-btn').trigger('click');

        // Wait for animation
        vi.advanceTimersByTime(100);
        await wrapper.vm.$nextTick();

        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);

        // Restore real timers at the end
        vi.useRealTimers();
    });

    it("applies fullscreen mode correctly", async () => {
        const wrapper = shallowMount(CDialog, {
            props: {
                modelValue: true,
                fullscreen: true
            },
            global: {
                stubs: {
                    'c-overlay': {
                        template: '<div class="mock-overlay" :class="$attrs.class"><slot /></div>',
                        props: ['modelValue'],
                        inheritAttrs: false
                    },
                    'c-card': {
                        template: '<div class="mock-card" :class="$attrs.class"><slot /></div>',
                        props: ['maxWidth', 'minHeight', 'bgColor', 'textColor', 'borderColor', 'rounded', 'closable'],
                        inheritAttrs: false
                    }
                }
            }
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.html()).toContain('h-full');
        expect(wrapper.html()).toContain('w-full');
    });

    it("applies collapsed mode correctly", async () => {
        const wrapper = shallowMount(CDialog, {
            props: {
                modelValue: true,
                collapsed: true
            },
            global: {
                stubs: {
                    'c-overlay': {
                        template: '<div class="mock-overlay"><slot /></div>',
                        props: ['modelValue']
                    },
                    'c-card': {
                        template: '<div class="mock-card" :class="$attrs.class"><slot /></div>',
                        props: ['maxWidth', 'minHeight', 'bgColor', 'textColor', 'borderColor', 'rounded', 'closable'],
                        inheritAttrs: false
                    }
                }
            }
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.html()).toContain('dialog-collapsed');
    });
});
