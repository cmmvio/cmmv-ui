<template>
    <div class="c-stepper overflow-hidden" :class="[
        containerClass,
        `text-${size}`,
        { 'opacity-50 cursor-not-allowed': disabled }
    ]" ref="stepperContainer">
        <ol v-if="displayMode === 'desktop' && computedOrientation === 'horizontal'" :class="[
            'flex items-center w-full rounded-lg rtl:space-x-reverse select-none',
            'flex-row space-x-6 sm:space-x-8 md:space-x-10',
            bgColor,
            borderColor,
            textColor,
            roundedStyles[rounded],
            shadows[shadow],
            padding,
            customClass
        ]">
            <template v-for="(step, index) in steps" :key="index">
                <li :class="[
                    'flex items-center group',
                    isStepActive(index) ? activeTextColor : '',
                    isStepCompleted(index) ? completedTextColor : '',
                    isStepAccessible(index) && !disabled ? 'cursor-pointer hover:opacity-80' : 'cursor-default',
                    !isStepAccessible(index) && !isStepActive(index) ? 'opacity-60' : ''
                ]" @click="isStepAccessible(index) && !disabled ? goToStep(index) : null" :title="isStepAccessible(index) && !isStepActive(index) && !disabled ?
                    (index < currentStep ? 'Voltar para esta etapa' : 'Ir para esta etapa') :
                    (isStepActive(index) ? 'Etapa atual' : 'Complete as etapas anteriores primeiro')">
                    <slot name="step" :step="step" :index="index" :active="isStepActive(index)"
                        :completed="isStepCompleted(index)">
                        <span :class="[
                            'flex items-center justify-center shrink-0',
                            stepSizes[size],
                            isStepActive(index) ? activeBorderColor : borderStepColor,
                            isStepCompleted(index) ? completedBorderColor : borderStepColor,
                            'rounded-full border',
                            isStepCompleted(index) && !isStepActive(index) ? completedBgColor : '',
                            isStepActive(index) ? activeBgColor : '',
                            isStepAccessible(index) && !isStepActive(index) && !disabled ? 'hover:opacity-75 transition-opacity' : ''
                        ]">
                            <slot name="step-icon" :step="step" :index="index" :active="isStepActive(index)"
                                :completed="isStepCompleted(index)">
                                <span v-if="isStepCompleted(index) && !isStepActive(index) && showCheckmarks">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="size-3" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <span v-else>{{ index + 1 }}</span>
                            </slot>
                        </span>
                        <div class="ms-2 relative">
                            <span :class="[
                                'text-sm font-medium',
                                isStepAccessible(index) && !disabled ? 'group-hover:underline' : ''
                            ]">{{ step.title }}</span>
                            <span v-if="step.subtitle" :class="[
                                'inline-flex ms-2',
                                isStepActive(index) ? 'opacity-100' : 'opacity-75',
                                'text-xs'
                            ]">{{ step.subtitle }}</span>
                        </div>
                    </slot>

                    <slot v-if="index < steps.length - 1" name="separator" :index="index">
                        <div :class="[
                            'ms-4 sm:ms-6',
                            isStepActive(index) ? activeTextColor : '',
                            isStepCompleted(index) ? completedTextColor : ''
                        ]">
                            <svg class="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </div>
                    </slot>
                </li>
            </template>
        </ol>

        <ol v-else-if="displayMode === 'desktop' && computedOrientation === 'vertical'" :class="[
            'flex items-center w-full rounded-lg rtl:space-x-reverse select-none',
            'flex-col space-y-4',
            bgColor,
            borderColor,
            textColor,
            roundedStyles[rounded],
            shadows[shadow],
            padding,
            customClass
        ]">
            <template v-for="(step, index) in steps" :key="index">
                <li :class="[
                    'flex items-center group w-full',
                    isStepActive(index) ? activeTextColor : '',
                    isStepCompleted(index) ? completedTextColor : '',
                    isStepAccessible(index) && !disabled ? 'cursor-pointer hover:opacity-80' : 'cursor-default',
                    !isStepAccessible(index) && !isStepActive(index) ? 'opacity-60' : ''
                ]" @click="isStepAccessible(index) && !disabled ? goToStep(index) : null" :title="isStepAccessible(index) && !isStepActive(index) && !disabled ?
                    (index < currentStep ? 'Voltar para esta etapa' : 'Ir para esta etapa') :
                    (isStepActive(index) ? 'Etapa atual' : 'Complete as etapas anteriores primeiro')">
                    <slot name="step" :step="step" :index="index" :active="isStepActive(index)"
                        :completed="isStepCompleted(index)">
                        <span :class="[
                            'flex items-center justify-center shrink-0',
                            stepSizes[size],
                            isStepActive(index) ? activeBorderColor : borderStepColor,
                            isStepCompleted(index) ? completedBorderColor : borderStepColor,
                            'rounded-full border',
                            isStepCompleted(index) && !isStepActive(index) ? completedBgColor : '',
                            isStepActive(index) ? activeBgColor : '',
                            isStepAccessible(index) && !isStepActive(index) && !disabled ? 'hover:opacity-75 transition-opacity' : ''
                        ]">
                            <slot name="step-icon" :step="step" :index="index" :active="isStepActive(index)"
                                :completed="isStepCompleted(index)">
                                <span v-if="isStepCompleted(index) && !isStepActive(index) && showCheckmarks">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="size-3" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <span v-else>{{ index + 1 }}</span>
                            </slot>
                        </span>
                        <div class="ms-2 relative">
                            <span :class="[
                                'text-sm font-medium',
                                isStepAccessible(index) && !disabled ? 'group-hover:underline' : ''
                            ]">{{ step.title }}</span>
                            <span v-if="step.subtitle" :class="[
                                'inline-flex ms-2',
                                isStepActive(index) ? 'opacity-100' : 'opacity-75',
                                'text-xs'
                            ]">{{ step.subtitle }}</span>
                        </div>
                    </slot>

                    <slot v-if="index < steps.length - 1" name="separator" :index="index">
                        <div :class="[
                            'ms-2 my-2',
                            isStepActive(index) ? activeTextColor : '',
                            isStepCompleted(index) ? completedTextColor : ''
                        ]">
                            <svg class="w-4 h-4 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </div>
                    </slot>
                </li>
            </template>
        </ol>

        <div v-if="displayMode === 'mobile'">
            <div :class="[
                'flex items-center justify-between w-full mb-4',
                bgColor,
                borderColor,
                roundedStyles[rounded],
                shadows[shadow],
                'p-3',
                customClass
            ]">
                <div class="flex items-center">
                    <span :class="[
                        'flex items-center justify-center shrink-0 mr-2',
                        mobileStepSize,
                        isStepActive(currentStep) ? activeBorderColor : borderStepColor,
                        isStepCompleted(currentStep) ? completedBorderColor : borderStepColor,
                        'rounded-full border',
                        isStepActive(currentStep) ? activeBgColor : '',
                    ]">
                        {{ currentStep + 1 }}
                    </span>
                    <div>
                        <span class="text-sm font-medium" :class="isStepActive(currentStep) ? activeTextColor : ''">
                            {{ steps[currentStep].title }}
                        </span>
                        <span v-if="steps[currentStep].subtitle" class="block text-xs opacity-75">
                            {{ steps[currentStep].subtitle }}
                        </span>
                    </div>
                </div>

                <div class="text-xs font-medium">
                    {{ currentStep + 1 }} / {{ steps.length }}
                </div>
            </div>

            <div class="flex justify-center mb-4 gap-1">
                <button v-for="(step, index) in steps" :key="index" type="button" :class="[
                    'w-2 h-2 rounded-full',
                    isStepActive(index) ? 'bg-blue-600 dark:bg-blue-500' : 'bg-gray-300 dark:bg-gray-600',
                    isStepCompleted(index) ? 'bg-green-600 dark:bg-green-500' : '',
                    isStepAccessible(index) && !disabled ? 'cursor-pointer hover:opacity-80' : 'cursor-default',
                ]" @click="isStepAccessible(index) && !disabled ? goToStep(index) : null"
                    :title="`Step ${index + 1}: ${step.title}`"></button>
            </div>
        </div>

        <div v-if="showContent && steps[currentStep]" class="stepper-content mt-4">
            <slot name="content" :step="steps[currentStep]" :index="currentStep">
                <div :class="[
                    bgContentColor,
                    borderContentColor,
                    textContentColor,
                    roundedStyles[rounded],
                    shadows[contentShadow],
                    contentPadding
                ]">
                    {{ steps[currentStep].content }}
                </div>
            </slot>
        </div>

        <div v-if="showNavigation" class="stepper-navigation mt-4 w-full" :class="navigationPosition">
            <slot name="navigation" :current-step="currentStep" :steps="steps" :go-to-step="goToStep"
                :next-step="nextStep" :prev-step="prevStep" :is-step-valid="isStepValid">
                <div class="flex items-center justify-between">
                    <c-button v-if="currentStep > 0" @click="prevStep" size="md" variant="secondary"
                        :disabled="isFirstStep || disabled">
                        {{ prevButtonText }}
                    </c-button>
                    <c-spacer v-else-if="navigationPosition === 'justify-between'"></c-spacer>
                    <c-button v-if="currentStep < steps.length - 1" @click="nextStep" size="md" variant="primary"
                        :disabled="isLastStep || disabled">
                        {{ nextButtonText }}
                    </c-button>
                    <c-button v-else-if="showFinishButton" @click="finish" size="md" variant="success"
                        :disabled="disabled">
                        {{ finishButtonText }}
                    </c-button>
                </div>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';
import type { PropType } from 'vue';

export interface StepItem {
    title: string;
    subtitle?: string;
    content?: string;
    optional?: boolean;
    valid?: boolean;
    [key: string]: any;
}

const props = defineProps({
    steps: {
        type: Array as PropType<StepItem[]>,
        required: true,
        default: () => []
    },
    modelValue: {
        type: Number,
        default: 0
    },
    linear: {
        type: Boolean,
        default: true
    },
    disabled: {
        type: Boolean,
        default: false
    },
    completedSteps: {
        type: Array as PropType<number[]>,
        default: () => []
    },
    orientation: {
        type: String as PropType<'horizontal' | 'vertical' | 'auto'>,
        default: 'horizontal'
    },
    size: {
        type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
        default: 'sm'
    },
    rounded: {
        type: String,
        default: 'default'
    },
    shadow: {
        type: String as PropType<'none' | 'sm' | 'md' | 'lg' | 'xl'>,
        default: 'sm'
    },
    contentShadow: {
        type: String as PropType<'none' | 'sm' | 'md' | 'lg' | 'xl'>,
        default: 'none'
    },
    bgColor: {
        type: String,
        default: 'bg-white dark:bg-neutral-800'
    },
    borderColor: {
        type: String,
        default: 'border border-neutral-200 dark:border-neutral-900'
    },
    textColor: {
        type: String,
        default: 'text-neutral-500 dark:text-neutral-400'
    },
    activeTextColor: {
        type: String,
        default: 'text-blue-600 dark:text-blue-500'
    },
    completedTextColor: {
        type: String,
        default: 'text-green-600 dark:text-green-500'
    },
    activeBorderColor: {
        type: String,
        default: 'border-blue-600 dark:border-blue-500'
    },
    completedBorderColor: {
        type: String,
        default: 'border-green-600 dark:border-green-500'
    },
    activeBgColor: {
        type: String,
        default: 'bg-blue-50 dark:bg-blue-900/20'
    },
    completedBgColor: {
        type: String,
        default: 'bg-green-50 dark:bg-green-900/20'
    },
    borderStepColor: {
        type: String,
        default: 'border-neutral-500 dark:border-neutral-900'
    },
    bgContentColor: {
        type: String,
        default: 'bg-white dark:bg-neutral-800'
    },
    borderContentColor: {
        type: String,
        default: 'border border-neutral-200 dark:border-neutral-900'
    },
    textContentColor: {
        type: String,
        default: 'text-neutral-700 dark:text-neutral-300'
    },
    padding: {
        type: String,
        default: 'p-3 sm:p-4'
    },
    contentPadding: {
        type: String,
        default: 'p-4'
    },
    customClass: {
        type: String,
        default: ''
    },
    containerClass: {
        type: String,
        default: ''
    },
    showNavigation: {
        type: Boolean,
        default: true
    },
    showContent: {
        type: Boolean,
        default: true
    },
    showFinishButton: {
        type: Boolean,
        default: true
    },
    navigationPosition: {
        type: String as PropType<'justify-start' | 'justify-center' | 'justify-end' | 'justify-between'>,
        default: 'justify-between'
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
    },
    showCheckmarks: {
        type: Boolean,
        default: true
    },
    validateBeforeNext: {
        type: Boolean,
        default: true
    },
    // Nova prop para forçar um modo específico (mobile/desktop)
    forceMode: {
        type: String as PropType<'auto' | 'mobile' | 'desktop'>,
        default: 'auto'
    },
    // Largura mínima para exibir o layout desktop (em pixels)
    mobileBreakpoint: {
        type: Number,
        default: 480
    }
});

const emit = defineEmits(['update:modelValue', 'step-change', 'validate-step', 'finish']);

const stepperContainer = ref<HTMLElement | null>(null);
const containerWidth = ref(0);
const displayMode = ref<'mobile' | 'desktop'>('desktop');

// Atualiza o modo de exibição com base na largura do container
const updateDisplayMode = () => {
    // Se o modo for forçado, use-o
    if (props.forceMode === 'mobile') {
        displayMode.value = 'mobile';
        return;
    }
    if (props.forceMode === 'desktop') {
        displayMode.value = 'desktop';
        return;
    }

    // Caso contrário, determine o modo com base na largura do container
    if (containerWidth.value < props.mobileBreakpoint) {
        displayMode.value = 'mobile';
    } else {
        displayMode.value = 'desktop';
    }
};

// Configurar o ResizeObserver para monitorar a largura do container
onMounted(() => {
    if (!stepperContainer.value) return;

    const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
            containerWidth.value = entry.contentRect.width;
            updateDisplayMode();
        }
    });

    resizeObserver.observe(stepperContainer.value);

    // Inicialização inicial
    containerWidth.value = stepperContainer.value.offsetWidth;
    updateDisplayMode();

    // Limpar o observer ao desmontar
    onBeforeUnmount(() => {
        if (stepperContainer.value) {
            resizeObserver.unobserve(stepperContainer.value);
        }
    });
});

// Watch para a prop forceMode
watch(() => props.forceMode, () => {
    updateDisplayMode();
});

const currentStep = computed({
    get: () => props.modelValue,
    set: (value) => {
        emit('update:modelValue', value);
        emit('step-change', value);
    }
});

// Determina a orientação com base na prop 'orientation'
const computedOrientation = computed(() => {
    if (props.orientation === 'auto') {
        // Em desktop, depende da quantidade de etapas
        return props.steps.length > 4 ? 'vertical' : 'horizontal';
    }
    return props.orientation;
});

const mobileStepSize = computed(() => {
    return 'w-6 h-6 text-sm';
});

const isFirstStep = computed(() => currentStep.value === 0);
const isLastStep = computed(() => currentStep.value === props.steps.length - 1);

const isStepValid = async (index: number): Promise<boolean> => {
    if (props.steps[index]?.optional) return true;

    const result = await new Promise<boolean>(resolve => {
        emit('validate-step', index, (isValid: boolean) => {
            resolve(isValid);
        });

        setTimeout(() => resolve(true), 100);
    });

    return result;
};

const isStepActive = (index: number) => index === currentStep.value;
const isStepCompleted = (index: number) => {
    if (props.completedSteps.includes(index)) return true;
    return props.linear && index < currentStep.value;
};
const isStepAccessible = (index: number) => {
    if (props.disabled) return false;

    // Sempre pode clicar em etapas anteriores
    if (index < currentStep.value) return true;

    // Pode clicar na etapa atual
    if (index === currentStep.value) return true;

    // Para etapas futuras, só permite acesso se não for linear
    // ou se a etapa anterior estiver completa
    if (!props.linear) return true;

    // Por segurança, não permitimos clicar em etapas futuras ainda não validadas
    return false;
};

const goToStep = async (index: number) => {
    if (props.disabled) return;

    // Sempre permitir voltar para etapas anteriores
    if (index < currentStep.value) {
        currentStep.value = index;
        return;
    }

    // Se for etapa atual, não precisa fazer nada
    if (index === currentStep.value) return;

    // Para etapas futuras, só permite navegação se:
    // 1. Não for linear OU
    // 2. A etapa atual foi validada E é a etapa imediatamente seguinte
    if (!props.linear || (index === currentStep.value + 1 && props.validateBeforeNext)) {
        // Validar etapa atual antes de avançar
        if (props.validateBeforeNext) {
            const isValid = await isStepValid(currentStep.value);
            if (!isValid) return;
        }
        currentStep.value = index;
    }
};

const nextStep = async () => {
    if (props.disabled) return;
    if (!isLastStep.value) {
        if (props.validateBeforeNext) {
            const isValid = await isStepValid(currentStep.value);
            if (!isValid) return;
        }
        currentStep.value++;
    }
};

const prevStep = () => {
    if (props.disabled) return;
    if (!isFirstStep.value) {
        currentStep.value--;
    }
};

const finish = async () => {
    if (props.validateBeforeNext) {
        const isValid = await isStepValid(currentStep.value);
        if (!isValid) return;
    }
    emit('finish');
};

const roundedStyles = computed((): Record<string, string> => ({
    none: '',
    sm: 'rounded-sm',
    default: 'rounded-lg',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
}));

const shadows = computed((): Record<string, string> => ({
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
}));

const stepSizes = computed((): Record<string, string> => ({
    xs: 'w-4 h-4 me-1 text-[0.65rem]',
    sm: 'w-5 h-5 me-2 text-xs',
    md: 'w-6 h-6 me-2 text-sm',
    lg: 'w-7 h-7 me-2 text-base',
    xl: 'w-8 h-8 me-3 text-lg',
}));

defineExpose({
    goToStep,
    nextStep,
    prevStep,
    finish,
    currentStep,
    isFirstStep,
    isLastStep,
    isStepActive,
    isStepCompleted,
    isStepValid
});
</script>

<style scoped>
.c-stepper {
    position: relative;
    width: 100%;
}
</style>
