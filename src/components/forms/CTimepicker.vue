<template>
    <div class="c-timepicker relative w-full">
        <label v-if="label" :for="id"
            class="c-timepicker-label text-sm"
            :class="[
                'block mb-1',
                textColor ? textColor : 'text-neutral-500 dark:text-neutral-400'
            ]">
            {{ label }} <span v-if="required" class="text-red-500">*</span>
        </label>

        <div class="relative">
            <input :id="id" type="time"
                :class="[
                    sizes[size],
                    roundedStyles[rounded],
                    variantStyles[variant],
                    bgColor ? bgColor : 'bg-white dark:bg-neutral-900',
                    textColor ? textColor : 'text-neutral-900 dark:text-white',
                    { 'ring-red-500 ring-2': hasError, 'opacity-50': disabled, 'cursor-not-allowed': disabled },
                    customClass,
                    'min-h-[38px]'
                ]"
                class="c-timepicker-field block w-full border shadow-sm outline-none"
                :placeholder="placeholder"
                :value="modelValue"
                :min="minTime"
                :max="maxTime"
                :disabled="disabled"
                @input="updateValue($event)"
                :aria-invalid="hasError" />
        </div>

        <div class="mt-1" v-if="!hiddenHint">
            <p v-if="hasError" class="text-xs text-red-500">{{ errorMessage }}</p>
            <p v-else-if="helperText" class="text-xs text-neutral-500 dark:text-neutral-400">{{ helperText }}</p>
        </div>
    </div>
</template>

<style scoped>
.c-timepicker {
    position: relative;
}

.c-timepicker-label {
    z-index: 1;
}
</style>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
    modelValue: {
        type: String,
        default: ""
    },
    label: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: "Select time"
    },
    id: {
        type: String,
        default: "timepicker"
    },
    minTime: {
        type: String,
        default: ""
    },
    maxTime: {
        type: String,
        default: ""
    },
    disabled: {
        type: Boolean,
        default: false
    },
    format: {
        type: String,
        default: "24h" // 12h or 24h
    },
    step: {
        type: Number,
        default: 30
    },
    size: {
        type: String,
        default: "md"
    },
    rounded: {
        type: String,
        default: "default"
    },
    variant: {
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
    helperText: {
        type: String,
        default: ""
    },
    hiddenHint: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["update:modelValue"]);
const hasError = ref(false);
const errorMessage = ref<string | null>(null);

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit("update:modelValue", target.value);
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

const variantStyles: Record<string, string> = {
    default: "border border-neutral-300 dark:border-neutral-700",
    outlined: "border-2 border-neutral-700",
    filled: "border-1 border-neutral-900 shadow-md",
};
</script>
