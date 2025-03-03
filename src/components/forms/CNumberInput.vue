<template>
    <div class="flex flex-col items-center">
        <label v-if="label" :for="id" class="mb-2 text-sm font-medium text-neutral-900 dark:text-white">
            {{ label }}
        </label>

        <div class="relative flex items-center" :class="sizeClasses">
            <button type="button"
                class="border border-neutral-300 dark:border-neutral-900 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:bg-neutral-200 p-3 focus:ring-2 focus:outline-none"
                :class="['rounded-l-lg', disabled ? 'opacity-50 cursor-not-allowed' : '']" @click="decrement"
                :disabled="disabled || internalValue <= min">
                <svg class="w-3 h-3 text-neutral-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 18 2">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h16" />
                </svg>
            </button>

            <input :id="id" type="text" v-model="valueInput"
                class="bg-neutral-50 dark:bg-neutral-800 border-x-0 border-t border-b dark:border-neutral-900 text-center text-neutral-900 dark:text-white focus:ring-blue-500 focus:border-blue-500 block w-full py-2 outline-none"
                :class="[inputClasses, disabled ? 'opacity-50 cursor-not-allowed' : '']" :disabled="disabled"
                @blur="applyLimits" @keydown="preventNonNumeric" @keyup="preventNonNumeric" />

            <button type="button"
                class="border border-neutral-300 dark:border-neutral-900 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:bg-neutral-200 p-3 focus:ring-2 focus:outline-none"
                :class="['rounded-r-lg', disabled ? 'opacity-50 cursor-not-allowed' : '']" @click="increment"
                :disabled="disabled || internalValue >= max">
                <svg class="w-3 h-3 text-neutral-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 1v16M1 9h16" />
                </svg>
            </button>
        </div>

        <p v-if="helperText" class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            {{ helperText }}
        </p>
    </div>
</template>

<style scoped>
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
import { ref, defineProps, defineEmits, computed, watch } from "vue";

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
    id: {
        type: String,
        default: "number-input"
    },
    size: {
        type: String,
        default: "md"
    }
});

const emit = defineEmits(["update:modelValue", "change"]);

const internalValue = ref(props.modelValue);
const valueInput = ref(props.modelValue.toString());

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

const sizeClasses = computed(() => ({
    sm: "max-w-[6rem]",
    md: "max-w-[8rem]",
    lg: "max-w-[10rem]"
}[props.size] || "max-w-[8rem]"));

const inputClasses = computed(() => ({
    sm: "text-xs py-2",
    md: "text-sm py-2",
    lg: "text-base py-1"
}[props.size] || "text-sm py-2"));
</script>
