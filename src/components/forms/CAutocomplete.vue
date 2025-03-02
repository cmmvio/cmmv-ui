<template>
    <div class="c-autocomplete relative w-full">
        <div class="relative">
            <label :for="id"
                class="c-autocomplete-label absolute left-3 text-sm transition-all duration-200 ease-in-out pointer-events-none"
                :class="[{
                    'c-autocomplete-label--active': isActive,
                    'top-[50%] -translate-y-1/2': !isFocus && !currentInput,
                    'top-1/3': currentInput !== undefined && currentInput !== '',
                    'pl-8': hasIcon && !isActive
                },
                textColor ? textColor : 'text-gray-500 dark:text-gray-400',
                bgColor ? bgColor : variantColors[variant], 'px-1']">
                {{ label }}
            </label>

            <div class="relative flex items-center">
                <div v-if="hasIcon" class="absolute inset-y-0 left-0 flex items-center pl-3 z-30">
                    <slot name="icon"></slot>
                </div>

                <input :id="id" type="text"
                    :class="[sizes[size], roundedStyles[rounded], variantStyles[variant], bgColor ? bgColor : variantColors[variant], textColor,
                    { 'ring-red-500 ring-2': hasError, 'opacity-50': disabled, 'cursor-not-allowed': disabled, 'pl-10': hasIcon }]"
                    class="c-autocomplete-field block w-full shadow-sm pt-3 pb-2 outline-none"
                    :placeholder="isActive ? placeholder : ''" :value="currentInput" @input="handleInput"
                    @change="handleInput" @focus="activateLabel" @blur="deactivateLabel" :disabled="disabled"
                    :aria-invalid="hasError" />

                <button v-if="clearable && currentInput" type="button"
                    class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 hover:text-gray-600"
                    @click="clearInput">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            <transition name="fade">
                <div v-if="isActive && isFocus && filteredOptions.length > 0"
                    class="absolute z-50 w-full bg-white border border-gray-300 dark:bg-zinc-800 dark:border-zinc-700 mt-2 max-h-40 overflow-auto shadow-lg rounded-md">
                    <ul>
                        <li v-for="option in filteredOptions" :key="option.value" @click="selectOption(option)"
                            class="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-700 text-sm">
                            {{ option.label }}
                        </li>
                    </ul>
                </div>
            </transition>
        </div>

        <div class="mt-1" v-if="!hiddenHint">
            <p v-if="hasError" class="text-xs text-red-500">{{ errorMessage }}</p>
            <p v-else-if="hint && (hintFixed || isActive)" class="text-xs text-gray-500">{{ hint }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, defineExpose, watch, useSlots } from 'vue';

const slots = useSlots();

const hasIcon = computed(() => !!slots.icon);

const props = defineProps({
    modelValue: {
        type: [String, Number],
        required: false,
        default: "",
    },
    options: {
        type: Array,
        required: true,
        default: () => [],
    },
    label: {
        type: String,
        required: false,
    },
    placeholder: {
        type: String,
        required: false,
        default: "",
    },
    size: {
        type: String,
        default: "md",
    },
    rounded: {
        type: String,
        default: "default",
    },
    variant: {
        type: String,
        default: "default",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    clearable: {
        type: Boolean,
        default: false
    },
    hint: {
        type: String,
        required: false,
        default: null,
    },
    hintFixed: {
        type: Boolean,
        default: false
    },
    hiddenHint: {
        type: Boolean,
        default: false,
    },
    id: {
        type: String,
        required: false,
        default: null,
    },
    bgColor: {
        type: String,
        required: false,
        default: "bg-white dark:bg-neutral-900",
    },
    textColor: {
        type: String,
        required: false,
        default: "",
    },
    borderColor: {
        type: String,
        required: false,
        default: "focus:ring focus:ring-zinc-700 focus:ring-opacity-50",
    },
    rules: {
        type: Array,
        default: () => []
    },
});

const emit = defineEmits(["update:modelValue"]);

const currentValue = ref(props.modelValue);
const currentInput = ref("");
const isActive = ref(false);
const isFocus = ref(false);
const changed = ref(false);
const errorMessage = ref<string | null>(null);

watch(() => props.modelValue, (newValue) => {
    currentValue.value = newValue;
    //@ts-ignore
    const selectedOption = props.options.find((option) => option.value === newValue);
    //@ts-ignore
    currentInput.value = selectedOption ? selectedOption.label : "";
});

const filteredOptions = computed<{ value: string | number; label: string }[]>(() => {
    if (!currentInput.value) return props.options as { value: string | number; label: string }[];

    return (props.options as { value: string | number; label: string }[]).filter((option) =>
        option.label.toLowerCase().includes(currentInput.value.toLowerCase())
    );
});

const sizes: Record<string, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-5 py-4 text-base",
};

const roundedStyles: Record<string, string> = {
    none: "rounded-none",
    default: "rounded-md",
    full: "rounded-full",
};

const variantStyles: Record<string, string> = {
    default: "border border-gray-300 dark:border-gray-700",
    outlined: "border-2 border-zinc-700",
    filled: "border-1 border-zinc-900 shadow-md",
};

const variantColors: Record<string, string> = {
    default: "bg-zinc-200 dark:bg-zinc-900 text-zinc-950 dark:text-white",
    outlined: "bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white",
    filled: "bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-white",
};

const borderColorClass = computed(() => props.borderColor);
const hasError = computed(() => !!errorMessage.value);

const handleInput = (event: Event) => {
    currentInput.value = (event.target as HTMLInputElement).value;

    let currentValueCheck = null;

    for (const option of props.options) {//@ts-ignore
        if (option.label === currentInput.value)//@ts-ignore
            currentValueCheck = option.value;
    }

    //@ts-ignore
    currentValue.value = (currentValueCheck) ? currentValueCheck : undefined;

    if (!currentValue.value)
        emit("update:modelValue", currentValue.value);

    if (!validate() || !changed.value)
        errorMessage.value = null;

    changed.value = true;

    if (currentValue.value || currentInput.value) isActive.value = true;
};

const clearInput = () => {
    currentInput.value = "";
    currentValue.value = "";
    errorMessage.value = null;
    isActive.value = false;
    isFocus.value = false;
    emit("update:modelValue", null);
};

const validateShowError = () => {
    errorMessage.value = null;

    if (!changed.value) return false;

    for (const rule of props.rules) {
        //@ts-ignore
        const error = rule(currentValue.value);

        if (error)
            errorMessage.value = error;
    }
};

const validate = () => {
    errorMessage.value = null;

    for (const rule of props.rules) {
        //@ts-ignore
        const error = rule(currentValue.value);

        if (error) {
            validateShowError();
            return true;
        }
    }

    return false;
};

const selectOption = (option: { value: string | number; label: string }) => {
    currentValue.value = option.value;
    currentInput.value = option.label;
    emit("update:modelValue", option.value);

    if (!validate() || !changed.value)
        errorMessage.value = null;

    changed.value = true;

    isActive.value = true;
    isFocus.value = false;
};

const activateLabel = () => {
    isActive.value = true;
    isFocus.value = true;
};

const deactivateLabel = () => {
    setTimeout(() => {
        if (!currentValue.value && !currentInput.value)
            isActive.value = false;

        isFocus.value = false;
    }, 100);
};

defineExpose({
    value: currentValue,
});
</script>

<style scoped>
.c-autocomplete {
    position: relative;
}

.c-autocomplete ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 0.375rem;
}

.c-autocomplete ul {
    list-style: none;
}

.c-autocomplete ul li {
    transition: background-color 0.2s;
    list-style: none;
    margin: 0;
}

.c-autocomplete-label {
    transform: translate(0, -50%);
    z-index: 1;
    left: 0.75rem;
}

.c-autocomplete-label--active {
    transform: translate(0, -2rem) scale(0.85);
    top: 1.3rem;
    left: 0.3rem;
}
</style>
