<template>
    <div class="c-number-input relative w-full">
        <label v-if="label" :for="id"
            class="c-number-input-label text-sm"
            :class="[
                'block mb-1',
                textColor ? textColor : 'text-neutral-500 dark:text-neutral-400'
            ]">
            {{ label }} <span v-if="required" class="text-red-500">*</span>
        </label>

        <div class="relative flex items-center">
            <button type="button"
                class="absolute left-0 h-full px-3 flex items-center justify-center z-10 border rounded-l-md border-neutral-300 dark:border-neutral-700"
                :class="[
                    'text-neutral-700 dark:text-neutral-300',
                    disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                ]"
                @click="decrement"
                :disabled="disabled || internalValue <= min">
                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h16" />
                </svg>
            </button>

            <input :id="id"
                type="text"
                v-model="valueInput"
                :placeholder="placeholder + (required ? ' *' : '')"
                :class="[
                    sizes[size],
                    roundedStyles[rounded],
                    bgColor ? bgColor : 'bg-white dark:bg-neutral-900',
                    textColor ? textColor : 'text-neutral-900 dark:text-white',
                    { 'ring-red-500 ring-2': hasError, 'opacity-50': disabled, 'cursor-not-allowed': disabled },
                    customClass,
                    'min-h-[38px] pl-10 pr-10'
                ]"
                class="c-number-input-field block w-full border shadow-sm outline-none text-center"
                :disabled="disabled"
                @blur="applyLimits"
                @keydown="preventNonNumeric"
                @keyup="preventNonNumeric" />

            <button type="button"
                class="absolute right-0 h-full px-3 flex items-center justify-center z-10 border rounded-r-md border-neutral-300 dark:border-neutral-700"
                :class="[
                    'text-neutral-700 dark:text-neutral-300',
                    disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                ]"
                @click="increment"
                :disabled="disabled || internalValue >= max">
                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 1v16M1 9h16" />
                </svg>
            </button>
        </div>

        <div class="mt-1" v-if="!hiddenHint">
            <p v-if="hasError" class="text-xs text-red-500">{{ errorMessage }}</p>
            <p v-else-if="helperText" class="text-xs text-neutral-500 dark:text-neutral-400">{{ helperText }}</p>
        </div>
    </div>
</template>

<style scoped>
.c-number-input {
    position: relative;
}

.c-number-input-label {
    z-index: 1;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}
</style>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = defineProps({
    modelValue: {
        type: Number,
        required: true
    },
    min: {
        type: Number,
        default: 0
    },
    max: {
        type: Number,
        default: 99999
    },
    step: {
        type: Number,
        default: 1
    },
    disabled: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: ""
    },
    helperText: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    id: {
        type: String,
        default: "number-input"
    },
    size: {
        type: String,
        default: "md"
    },
    rounded: {
        type: String,
        default: "default"
    },
    bgColor: {
        type: String,
        required: false,
        default: "bg-white dark:bg-neutral-900"
    },
    textColor: {
        type: String,
        required: false,
        default: ""
    },
    customClass: {
        type: String,
        required: false,
        default: ""
    },
    required: {
        type: Boolean,
        default: false
    },
    hiddenHint: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["update:modelValue", "change"]);

const internalValue = ref(props.modelValue);
const valueInput = ref(props.modelValue?.toString());
const hasError = ref(false);
const errorMessage = ref<string | null>(null);

watch(() => props.modelValue, (newValue) => {
    internalValue.value = newValue;
    valueInput.value = newValue.toString();
});

watch(valueInput, (newValue) => {
    let parsed = parseInt(newValue.replace(/\D/g, ""), 10);

    if (isNaN(parsed))
        parsed = props.min;
    else if (parsed < props.min)
        parsed = props.min;
    else if (parsed > props.max)
        parsed = props.max;

    internalValue.value = parsed;
    emit("update:modelValue", parsed);
});

const increment = () => {
    if (props.disabled || internalValue.value >= props.max) return;
    internalValue.value = Math.min(internalValue.value + props.step, props.max);
    valueInput.value = internalValue.value.toString();
    emit("update:modelValue", internalValue.value);
};

const decrement = () => {
    if (props.disabled || internalValue.value <= props.min) return;
    internalValue.value = Math.max(internalValue.value - props.step, props.min);
    valueInput.value = internalValue.value.toString();
    emit("update:modelValue", internalValue.value);
};

const applyLimits = () => {
    let parsed = parseInt(valueInput.value, 10);

    if (isNaN(parsed)) {
        parsed = props.min;
    } else if (parsed < props.min) {
        parsed = props.min;
    } else if (parsed > props.max) {
        parsed = props.max;
    }

    internalValue.value = parsed;
    valueInput.value = parsed.toString();
    emit("update:modelValue", parsed);
    emit("change", parsed);
};

const preventNonNumeric = (event: KeyboardEvent) => {
    const allowedKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"];

    if (!/^[0-9]$/.test(event.key) && !allowedKeys.includes(event.key))
        event.preventDefault();

    applyLimits();
};

const sizes: Record<string, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-2 py-1 text-sm",
    lg: "px-2 py-2 text-base",
};

const roundedStyles: Record<string, string> = {
    none: "rounded-none",
    default: "rounded-md",
    full: "rounded-full",
};
</script>
