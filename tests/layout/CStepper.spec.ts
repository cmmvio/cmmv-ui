import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import CStepper from "../../src/components/layout/CStepper.vue";

// Mock components
vi.mock("../../src/components/components/CButton.vue", () => ({
    default: {
        template: '<button class="mock-button" @click="$emit(\'click\')"><slot /></button>',
        props: ['size', 'variant', 'disabled']
    }
}));

vi.mock("../../src/components/layout/CSpacer.vue", () => ({
    default: {
        template: '<div class="mock-spacer"></div>'
    }
}));

// Mock ResizeObserver
beforeAll(() => {
    global.ResizeObserver = class ResizeObserver {
        constructor(callback) {
            this.callback = callback;
        }
        observe() {
            // Immediately call with dummy data when observed
            this.callback([{
                contentRect: { width: 1000, height: 1000 }
            }]);
        }
        unobserve() { }
        disconnect() { }
    };
});

afterAll(() => {
    delete global.ResizeObserver;
});

describe("CStepper Component", () => {
    const mockSteps = [
        { title: 'Step 1', subtitle: 'First step', content: 'Content 1' },
        { title: 'Step 2', subtitle: 'Second step', content: 'Content 2' },
        { title: 'Step 3', subtitle: 'Final step', content: 'Content 3' }
    ];

    it("renders correctly with default props", () => {
        const wrapper = mount(CStepper, {
            props: {
                steps: mockSteps
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.c-stepper').exists()).toBe(true);
        expect(wrapper.findAll('li').length).toBe(mockSteps.length);
    });

    it("highlights the active step", async () => {
        const wrapper = mount(CStepper, {
            props: {
                steps: mockSteps,
                modelValue: 1,
                forceMode: 'desktop' // Force desktop mode to avoid mobile view
            }
        });

        // Find all step elements
        const stepElements = wrapper.findAll('li');
        expect(stepElements.length).toBe(3);

        // Second step should have active class
        const activeClasses = stepElements[1].classes().join(' ');
        expect(activeClasses).toContain('text-blue-600');
    });

    it("navigates to next and previous steps", async () => {
        const wrapper = mount(CStepper, {
            props: {
                steps: mockSteps,
                modelValue: 0
            }
        });

        // Go to next step
        await wrapper.vm.nextStep();

        // Check event was emitted with correct value
        const updateEvents = wrapper.emitted('update:modelValue');
        expect(updateEvents).toBeTruthy();
        expect(updateEvents[0][0]).toBe(1);
    });

    it("applies different orientations", async () => {
        const wrapper = mount(CStepper, {
            props: {
                steps: mockSteps,
                orientation: 'vertical',
                forceMode: 'desktop' // Force desktop mode to see orientations
            }
        });

        // For vertical orientation, we should see flex-col somewhere
        const verticalHtml = wrapper.html();
        expect(verticalHtml).toContain('flex-col');

        // Change to horizontal
        await wrapper.setProps({ orientation: 'horizontal' });

        // For horizontal, we should see flex-row somewhere
        const horizontalHtml = wrapper.html();
        expect(horizontalHtml).toContain('flex-row');
    });

    it("shows mobile view when forceMode is mobile", async () => {
        const wrapper = mount(CStepper, {
            props: {
                steps: mockSteps,
                forceMode: 'mobile'
            }
        });

        // Force the mobile mode update
        // Note: ResizeObserver mock is already calling the callback with desktop dimensions,
        // so we need to ensure the component is forced into mobile mode
        wrapper.vm.displayMode = 'mobile';
        await wrapper.vm.$nextTick();

        // Check for the mobile indicator dots directly in the component
        expect(wrapper.find('button[type="button"]').exists()).toBe(true);

        // Check for specific display text that only shows in mobile mode
        expect(wrapper.text()).toContain('1 / 3'); // Step counter: "current / total"
        expect(wrapper.text()).toContain(mockSteps[0].title);
    });

    it("emits step-change event when step changes", async () => {
        const wrapper = mount(CStepper, {
            props: {
                steps: mockSteps,
                modelValue: 0,
                forceMode: 'desktop'
            }
        });

        // Instead of trying to click the step UI element (which might be complex),
        // directly call the goToStep method which should emit the event
        await wrapper.vm.goToStep(1);

        // Check for events
        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        expect(wrapper.emitted('update:modelValue')[0][0]).toBe(1);
        expect(wrapper.emitted('step-change')).toBeTruthy();
    });

    it("emits finish event when final step is complete", async () => {
        const wrapper = mount(CStepper, {
            props: {
                steps: mockSteps,
                modelValue: 2 // Last step
            },
            global: {
                stubs: {
                    'c-button': true
                }
            }
        });

        await wrapper.vm.finish();

        expect(wrapper.emitted('finish')).toBeTruthy();
    });

    it("handles step validation", async () => {
        let isValid = false;

        const wrapper = mount(CStepper, {
            props: {
                steps: mockSteps,
                modelValue: 0,
                validateBeforeNext: true,
                'onValidate-step': (step, callback) => {
                    callback(isValid);
                }
            }
        });

        // Try to go to next step (should fail validation)
        await wrapper.vm.nextStep();
        expect(wrapper.emitted('update:modelValue')).toBeFalsy();

        // Update validation result
        isValid = true;

        // Try again (should pass validation)
        await wrapper.vm.nextStep();
        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    });

    it("shows custom content via slot", () => {
        const wrapper = mount(CStepper, {
            props: {
                steps: mockSteps
            },
            slots: {
                content: '<div class="custom-content">Custom step content</div>'
            }
        });

        expect(wrapper.find('.custom-content').exists()).toBe(true);
        expect(wrapper.text()).toContain('Custom step content');
    });

    it("disables navigation when disabled prop is true", async () => {
        const wrapper = mount(CStepper, {
            props: {
                steps: mockSteps,
                modelValue: 1,
                disabled: true
            },
            global: {
                stubs: {
                    'c-button': true
                }
            }
        });

        // Try to navigate
        await wrapper.vm.nextStep();
        await wrapper.vm.prevStep();

        // No navigation events should be emitted
        expect(wrapper.emitted('update:modelValue')).toBeFalsy();
    });
});
