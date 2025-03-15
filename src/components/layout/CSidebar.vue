<template>
    <div :class="[
        absolute && (isOpen || isTransitioning) ? 'top-0 bottom-0 left-0 right-0 z-10 transition-all duration-300' : '',
        roundedStyles[rounded],
        { absolute: absolute },
    ]">
        <!-- Overlay -->
        <div v-show="isOpen"
            class="inset-0 z-40 c-sidebar transform transition-all duration-300 ease-in-out"
            :class="[
                roundedStyles[rounded],
                bgColorOverlay,
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
                fixed ? 'fixed inset-0' : 'absolute inset-0'
            ]"
            @click="close">
        </div>

        <!-- Sidebar -->
        <div class="z-50 flex flex-col overflow-hidden transform transition-all duration-300 ease-in-out"
            :class="[
                side === 'left' ? 'left-0' : 'right-0',
                side === 'left'
                    ? (isOpen ? 'translate-x-0' : '-translate-x-full')
                    : (isOpen ? 'translate-x-0' : 'translate-x-full'),
                width,
                bgColor,
                shadow,
                absolute ? 'absolute top-0 h-full' : 'fixed top-0 h-full',
                { 'fixed': fixed && !absolute },
                isOpen ? 'visible' : 'invisible'
            ]">
            <slot v-if="$slots.header || $slots.title" name="header">
                <div class="p-4 flex justify-between items-center border-b border-neutral-200 dark:border-neutral-800">
                    <h2 class="text-lg font-semibold text-neutral-800 dark:text-white">
                        <slot name="title">Sidebar</slot>
                    </h2>

                    <button @click="close"
                        class="p-2 rounded-md hover:bg-neutral-300 dark:hover:bg-neutral-700 h-10 transition-colors duration-200">
                        <icon-x-mark class="w-6 h-6 text-neutral-600 dark:text-white" size="md"
                            aria-hidden="true" />
                    </button>
                </div>
            </slot>

            <div class="flex-1 overflow-y-auto">
                <slot></slot>
            </div>

            <slot v-if="$slots.footer || $slots['footer-content']" name="footer">
                <div class="p-4 border-t border-neutral-200 dark:border-black text-center text-sm text-neutral-600 dark:text-neutral-400">
                    <slot name="footer-content">Footer content</slot>
                </div>
            </slot>
        </div>
    </div>
</template>

<style scoped>
.c-sidebar {
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
}
</style>

<script setup lang="ts">
import {
    ref, watch, computed, defineProps,
    defineEmits, defineExpose
} from "vue";

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: false
    },
    side: {
        type: String,
        default: "left",
        validator: (val: any) => ["left", "right"].includes(val)
    },
    fixed: {
        type: Boolean,
        default: false
    },
    absolute: {
        type: Boolean,
        default: false
    },
    width: {
        type: String,
        default: "w-64"
    },
    bgColor: {
        type: String,
        default: "bg-white dark:bg-neutral-800"
    },
    bgColorOverlay: {
        type: String,
        default: "bg-black/50"
    },
    shadow: {
        type: String,
        default: "shadow-lg"
    },
    rounded: {
        type: String,
        required: false,
        default: "none",
    },
});

const emit = defineEmits(["update:modelValue"]);
const isOpen = ref(props.modelValue);
const isTransitioning = ref(false);

watch(() => props.modelValue, (newValue) => {
    isOpen.value = newValue;
});

const roundedStyles = computed((): Record<string, string> => ({
    none: "",
    default: "rounded-lg",
    md: "rounded-md",
    full: "rounded-full",
}));

const open = () => {
    isOpen.value = true;
    emit("update:modelValue", true);
};

const close = () => {
    isOpen.value = false;
    emit("update:modelValue", false);
};

const startTransition = () => {
    isTransitioning.value = true;
};

const endTransition = () => {
    isTransitioning.value = false;
};

defineExpose({ open, close });
</script>
