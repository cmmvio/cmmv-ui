<template>
    <div class="form-stepper">
        <!-- Validation Error Alert Area -->
        <div v-if="validationErrors.length > 0">
            <c-alert type="error" title="Form Validation Error" icon :closable="true" @close="validationErrors = []"
                margin="mb-6">
                <ul class="list-disc pl-6 mt-1">
                    <li v-for="(error, index) in validationErrors" :key="index" class="mt-1">
                        {{ error }}
                    </li>
                </ul>
            </c-alert>
        </div>

        <c-stepper v-model="currentStep" :steps="steps" :orientation="orientation" :size="size" :linear="linear"
            :completed-steps="completedSteps" :disabled="disabled" :show-content="showContent" :show-navigation="false"
            :show-checkmarks="showCheckmarks" v-bind="$attrs">
            <template #content="slotProps">
                <slot name="content" v-bind="{ ...slotProps, formData }">
                    <slot :name="`step-${slotProps.index}`"
                        v-bind="{ step: slotProps.step, index: slotProps.index, formData }"></slot>
                </slot>
            </template>

            <template #step="slotProps">
                <slot name="step" v-bind="slotProps"></slot>
            </template>

            <template #step-icon="slotProps">
                <slot name="step-icon" v-bind="slotProps"></slot>
            </template>

            <template #separator="slotProps">
                <slot name="separator" v-bind="slotProps"></slot>
            </template>
        </c-stepper>

        <!-- Navigation Area -->
        <div class="mt-4">
            <slot name="navigation"
                v-bind="{ currentStep, nextStep: validateAndNextStep, prevStep, goToStep: validateAndGoToStep, finish: validateAndFinish, formData }">
                <div class="flex justify-between items-center px-2 py-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                        <c-button v-if="currentStep > 0" @click="prevStep" variant="secondary" size="md">
                            {{ prevButtonText || 'Previous' }}
                        </c-button>
                        <div v-else class="w-20"></div>
                    </div>

                    <div class="flex-grow"></div>

                    <div>
                        <c-button v-if="currentStep < steps.length - 1" @click="validateAndNextStep" variant="primary"
                            size="md">
                            {{ nextButtonText || 'Next' }}
                        </c-button>
                        <c-button v-else @click="validateAndFinish" variant="success" size="md">
                            {{ finishButtonText || 'Finish' }}
                        </c-button>
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, useSlots, onMounted } from 'vue';
import type { PropType } from 'vue';

interface StepItem {
    title: string;
    subtitle?: string;
    content?: string;
    [key: string]: any;
}

const props = defineProps({
    modelValue: {
        type: Number,
        default: 0
    },
    steps: {
        type: Array as PropType<StepItem[]>,
        required: true
    },
    orientation: {
        type: String as PropType<'horizontal' | 'vertical'>,
        default: 'horizontal'
    },
    size: {
        type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
        default: 'md'
    },
    linear: {
        type: Boolean,
        default: true
    },
    completedSteps: {
        type: Array as PropType<number[]>,
        default: () => []
    },
    disabled: {
        type: Boolean,
        default: false
    },
    showContent: {
        type: Boolean,
        default: true
    },
    showCheckmarks: {
        type: Boolean,
        default: true
    },
    formData: {
        type: Object,
        default: () => ({})
    },
    stepValidators: {
        type: Array as PropType<((formData: any, stepIndex: number) => boolean | string[] | Promise<boolean | string[]>)[]>,
        default: () => []
    },
    prevButtonText: {
        type: String,
        default: 'Previous'
    },
    nextButtonText: {
        type: String,
        default: 'Next'
    },
    finishButtonText: {
        type: String,
        default: 'Finish'
    }
});

const emit = defineEmits([
    'update:modelValue',
    'step-change',
    'finish',
    'validation-error',
    'update:formData',
    'validate-step'
]);

const slots = useSlots();
const currentStep = ref(props.modelValue);
const validationErrors = ref<string[]>([]);
const formRefs = ref<any[]>([]);

watch(() => props.modelValue, (value) => {
    currentStep.value = value;
});

watch(currentStep, (value) => {
    emit('update:modelValue', value);
    emit('step-change', value);
});

const validateCurrentStep = async (): Promise<boolean> => {
    validationErrors.value = [];

    let externalValidationResult: boolean | string[] = true;

    try {
        const validatePromise = new Promise<boolean | string[]>((resolve) => {
            emit('validate-step', currentStep.value, (result: boolean | string[]) => {
                resolve(result);
            });

            setTimeout(() => resolve(true), 100);
        });

        externalValidationResult = await validatePromise;

        if (Array.isArray(externalValidationResult) && externalValidationResult.length > 0) {
            validationErrors.value = externalValidationResult;
            emit('validation-error', validationErrors.value);
            return false;
        }

        else if (externalValidationResult === false) {
            validationErrors.value = ['Validation failed'];
            emit('validation-error', validationErrors.value);
            return false;
        }
    } catch (error) {
        console.error('Error during external validation:', error);
    }


    if (props.stepValidators && props.stepValidators[currentStep.value]) {
        try {
            const validationResult = await props.stepValidators[currentStep.value](props.formData, currentStep.value);

            if (typeof validationResult === 'boolean') {
                if (!validationResult) {
                    validationErrors.value = ['Validation failed'];
                    emit('validation-error', validationErrors.value);
                    return false;
                }
            } else if (Array.isArray(validationResult) && validationResult.length > 0) {
                validationErrors.value = validationResult;
                emit('validation-error', validationErrors.value);
                return false;
            }
        } catch (error) {
            validationErrors.value = [(error as Error).message || 'Validation error'];
            emit('validation-error', validationErrors.value);
            return false;
        }
    }

    return true;
};

const validateAndNextStep = async () => {
    if (await validateCurrentStep()) {
        if (currentStep.value < props.steps.length - 1) {
            currentStep.value++;
        }
    }
};

const validateAndGoToStep = async (step: number) => {
    if (step <= currentStep.value || await validateCurrentStep()) {
        currentStep.value = step;
    }
};

const validateAndFinish = async () => {
    if (await validateCurrentStep()) {
        emit('finish');
    }
};

const prevStep = () => {
    if (currentStep.value > 0) {
        currentStep.value--;
    }
};

defineExpose({
    validateCurrentStep,
    nextStep: validateAndNextStep,
    prevStep,
    goToStep: validateAndGoToStep,
    finish: validateAndFinish,
    getCurrentStep: () => currentStep.value
});
</script>

<style scoped>
.form-stepper {
    width: 100%;
}
</style>
