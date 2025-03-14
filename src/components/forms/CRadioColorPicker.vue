<template>
    <div class="c-radio-color-picker" :class="containerClass">
        <label v-if="label" class="block mb-2 text-sm font-medium" :class="labelClass">
            {{ label }}
            <span v-if="required" class="text-red-500">*</span>
        </label>

        <div :class="['flex items-center', orientation === 'horizontal' ? 'gap-x-3' : 'flex-col gap-y-3', customClass]">
            <c-radio
                v-for="color in colorOptions"
                :key="color.value"
                v-model="selectedColorModel"
                :value="color.value"
                :size="size"
                :disabled="disabled"
            >
                <template v-slot="{ checked }">
                    <div :class="[
                        color.bgClass,
                        checked ? ringClass : '',
                        'relative flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                        { 'opacity-50 cursor-not-allowed': disabled }
                    ]">
                        <span
                            aria-hidden="true"
                            :class="[
                                color.bgClass,
                                sizeStyles[size],
                                'rounded-full border border-black/10'
                            ]"
                        >
                            <svg v-if="checked && showCheck" class="absolute inset-0 m-auto w-3 h-3 text-white dark:text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </span>
                        <span v-if="showLabels" class="ml-2 text-sm" :class="labelTextClass">{{ color.name }}</span>
                    </div>
                </template>
            </c-radio>
        </div>

        <div v-if="showSelected && selectedColor" class="mt-2 text-sm" :class="helperTextClass">
            Selected color: <span class="font-semibold">{{ selectedColor.name }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { PropType } from 'vue';
import CRadio from './CRadio.vue';

type ColorOption = {
    name: string;
    value: string;
    bgClass: string;
};

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    colors: {
        type: Array as PropType<ColorOption[]>,
        default: () => [
            { name: 'Red', value: 'red', bgClass: 'bg-red-500' },
            { name: 'Orange', value: 'orange', bgClass: 'bg-orange-500' },
            { name: 'Yellow', value: 'yellow', bgClass: 'bg-yellow-500' },
            { name: 'Green', value: 'green', bgClass: 'bg-green-500' },
            { name: 'Blue', value: 'blue', bgClass: 'bg-blue-500' },
            { name: 'Purple', value: 'purple', bgClass: 'bg-purple-500' },
            { name: 'Pink', value: 'pink', bgClass: 'bg-pink-500' }
        ]
    },
    defaultValue: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: 'Choose a color'
    },
    showLabels: {
        type: Boolean,
        default: false
    },
    showCheck: {
        type: Boolean,
        default: true
    },
    showSelected: {
        type: Boolean,
        default: true
    },
    orientation: {
        type: String as PropType<'horizontal' | 'vertical'>,
        default: 'horizontal',
        validator: (value: string) => ['horizontal', 'vertical'].includes(value)
    },
    size: {
        type: String,
        default: 'md',
        validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
    },
    disabled: {
        type: Boolean,
        default: false
    },
    required: {
        type: Boolean,
        default: false
    },
    ringClass: {
        type: String,
        default: 'ring-2 ring-offset-2'
    },
    containerClass: {
        type: String,
        default: ''
    },
    labelClass: {
        type: String,
        default: 'text-neutral-900 dark:text-white'
    },
    labelTextClass: {
        type: String,
        default: 'text-neutral-900 dark:text-white'
    },
    helperTextClass: {
        type: String,
        default: 'text-neutral-500 dark:text-neutral-400'
    },
    customClass: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['update:modelValue', 'change']);

// Computed color options from props
const colorOptions = computed(() => {
    return props.colors;
});

// Set up the v-model binding
const selectedColorModel = computed({
    get() {
        return props.modelValue || props.defaultValue;
    },
    set(value) {
        emit('update:modelValue', value);
        emit('change', value, selectedColor.value);
    }
});

// Get the currently selected color object for display
const selectedColor = computed(() => {
    return colorOptions.value.find(color => color.value === selectedColorModel.value);
});

// Set default value if modelValue is empty initially
watch(() => props.defaultValue, (newValue) => {
    if (!props.modelValue && newValue) {
        selectedColorModel.value = newValue;
    }
}, { immediate: true });

// Size variations for the color circles
const sizeStyles = {
    sm: 'h-5 w-5',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
};
</script>

<style scoped>
.c-radio-color-picker {
    position: relative;
    width: 100%;
}
</style>
