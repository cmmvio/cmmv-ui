<template>
    <div class="c-button-group inline-flex rounded-md isolate justify-center" :class="{ 'flex-col': vertical }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { provide, defineProps, watch, reactive } from 'vue';

const props = defineProps({
    size: {
        type: String,
        default: 'lg',
        validator: (value: string) => ['sm', 'md', 'lg', 'xl', '2xl'].includes(value)
    },
    variant: {
        type: String,
        default: 'elevated',
        validator: (value: string) => ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'].includes(value)
    },
    bgColor: {
        type: [String, Array],
        default: 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600'
    },
    textColor: {
        type: String,
        default: 'text-white'
    },
    shadow: {
        type: String,
        default: 'shadow-sm'
    },
    vertical: {
        type: Boolean,
        default: false
    },
    textStroke: {
        type: Boolean,
        default: false
    }
});

// Create a reactive object for the button group context
const buttonGroupContext = reactive({
    inGroup: true,
    size: props.size,
    variant: props.variant,
    bgColor: props.bgColor,
    textColor: props.textColor,
    shadow: props.shadow,
    vertical: props.vertical,
    textStroke: props.textStroke
});

// Watch for changes to props and update the context
watch(() => props.size, (newVal) => { buttonGroupContext.size = newVal });
watch(() => props.variant, (newVal) => { buttonGroupContext.variant = newVal });
watch(() => props.bgColor, (newVal) => { buttonGroupContext.bgColor = newVal });
watch(() => props.textColor, (newVal) => { buttonGroupContext.textColor = newVal });
watch(() => props.shadow, (newVal) => { buttonGroupContext.shadow = newVal });
watch(() => props.vertical, (newVal) => { buttonGroupContext.vertical = newVal });
watch(() => props.textStroke, (newVal) => { buttonGroupContext.textStroke = newVal });

// Provide context to child buttons
provide('buttonGroup', buttonGroupContext);
</script>

<style scoped>
.c-button-group {
    display: inline-flex;
    justify-content: center;
}

.c-button-group :deep(.c-button) {
    position: relative;
    margin-left: -1px;
    border-radius: 0;
    border-right: 2px solid currentColor !important;
    border-right-color: color-mix(in srgb, currentColor, transparent 70%) !important;
    display: flex;
    justify-content: center;
    align-items: center;
}

.c-button-group :deep(.c-button:last-child) {
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
    border-right: none !important;
}

.c-button-group :deep(.c-button:first-child) {
    margin-left: 0;
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
}

.c-button-group.flex-col :deep(.c-button) {
    margin-left: 0;
    margin-top: -1px;
    border-right: none !important;
    border-bottom: 2px solid currentColor !important;
    border-bottom-color: color-mix(in srgb, currentColor, transparent 70%) !important;
}

.c-button-group.flex-col :deep(.c-button:first-child) {
    margin-top: 0;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.c-button-group.flex-col :deep(.c-button:last-child) {
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom: none !important;
}

.c-button-group :deep(.c-button:hover),
.c-button-group :deep(.c-button:focus) {
    z-index: 1;
}

@supports not (border-right-color: color-mix(in srgb, currentColor, transparent 70%)) {
    .c-button-group :deep(.c-button) {
        border-right-color: rgba(127, 127, 127, 0.3) !important;
    }

    .c-button-group.flex-col :deep(.c-button) {
        border-bottom-color: rgba(127, 127, 127, 0.3) !important;
    }
}
</style>
