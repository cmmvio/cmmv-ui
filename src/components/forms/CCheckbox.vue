<template>
    <div
        class="relative inline-flex items-center cursor-pointer select-none"
        @click="toggle"
    >
        <span
            class="relative z-10 flex items-center justify-center border rounded transition-all duration-200 overflow-hidden"
            :class="[
                sizes[size].box,
                (isChecked && !hasError) || indeterminate ? bgColor : 'bg-white',
                isChecked || indeterminate ? borderColor : 'border-gray-300',
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
                hasError ? 'ring-2 ring-red-500 border-red-500 bg-red-300' : ''
            ]"
        >
            <svg
                v-if="isChecked && !indeterminate"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                :class="textColor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>

            <svg
                v-else-if="indeterminate"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                :class="textColor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
            >
                <line x1="5" y1="12" x2="19" y2="12" stroke-linecap="round" />
            </svg>
        </span>

        <span
            v-if="label"
            :class="[
                'ml-2',
                sizes[size].label,
                hasError ? 'text-red-500' : ''
            ]"
        >
            {{ label }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = defineProps({
    modelValue: {
        type: [Boolean, Array],
        required: false,
        default: undefined,
    },
    value: {
        type: [String, Number, Boolean],
        required: false,
        default: null,
    },
    checked: {
        type: Boolean,
        required: false,
        default: false,
    },
    indeterminate: {
        type: Boolean,
        required: false,
        default: false,
    },
    label: {
        type: String,
        required: false,
        default: "",
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false,
    },
    size: {
        type: String,
        required: false,
        default: "md",
    },
    ignoreClick: {
        type: Boolean,
        required: false,
        default: false,
    },
    bgColor: {
        type: String,
        required: false,
        default: "bg-blue-600",
    },
    borderColor: {
        type: String,
        required: false,
        default: "border-blue-600",
    },
    textColor: {
        type: String,
        required: false,
        default: "text-white",
    },
    rules: {
        type: Array,
        default: () => [],
    },
});

const emit = defineEmits(["update:modelValue"]);
const internalChecked = ref(
    Array.isArray(props.modelValue)
        ? props.modelValue.includes(props.value)
        : props.modelValue ?? props.checked
);

watch(
    () => props.modelValue,
    (newValue) => {
        if (Array.isArray(newValue)) {
            internalChecked.value = newValue.includes(props.value);
        } else if (newValue !== undefined) {
            internalChecked.value = newValue;
        }
        validate();
    }
);

const isChecked = computed({
    get: () => internalChecked.value,

    set: (value) => {
        if (Array.isArray(props.modelValue)) {
            const updatedValue = [...props.modelValue];

            if (value && !updatedValue.includes(props.value))
                updatedValue.push(props.value);
            else if (!value && updatedValue.includes(props.value))
                updatedValue.splice(updatedValue.indexOf(props.value), 1);

            emit("update:modelValue", updatedValue);
        } else {
            emit("update:modelValue", value);
        }

        internalChecked.value = value;

        validate();
    },
});

const hasError = ref(false);

const toggle = () => {
    if (!props.disabled && !props.ignoreClick) {
        isChecked.value = !isChecked.value;
        validate();
    }
};

const validate = () => {
    hasError.value = false;

    for (const rule of props.rules) {
        //@ts-ignore
        const error = rule(isChecked.value);

        if (error) {
            hasError.value = true;
            return false;
        }
    }

    return true;
};

const sizes: Record<string, { box: string, label: string }> = {
    sm: { box: "w-4 h-4 border-2", label: "text-sm" },
    md: { box: "w-5 h-5 border-2", label: "text-base" },
    lg: { box: "w-6 h-6 border-2", label: "text-lg" },
};
</script>
