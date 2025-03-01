<template>
    <div :class="[
        absolute && (isOpen || isTransitioning) ? 'top-0 bottom-0 left-0 right-0 z-10 transition-all duration-300' : '',
        roundedStyles[rounded],
        { absolute: absolute },
    ]">
        <transition name="fade" @before-leave="startTransition" @after-leave="endTransition">
            <div v-if="isOpen && !absolute" class="fixed inset-0 z-40 transition-opacity c-sidebar"
                :class="[roundedStyles[rounded], bgColorOverlay]" @click="close"></div>

            <div v-else-if="isOpen && absolute"
                class="absolute inset-0 z-40 w top-0 bottom-0 left-0 right-0 transition-opacity c-sidebar"
                :class="[roundedStyles[rounded], bgColorOverlay]" @click="close"></div>
        </transition>

        <transition :name="slideTransition">
            <div v-if="isOpen" class="z-50 flex flex-col transition-all duration-300 overflow-hidden" :class="[
                side === 'left' ? 'left-0' : 'right-0',
                width,
                bgColor,
                shadow,
                absolute ? 'absolute top-0 h-full' : 'fixed top-0 h-full',
                { 'fixed': fixed && !absolute }
            ]">
                <slot v-if="$slots.header || $slots.title" name="header">
                    <div class="p-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
                        <h2 class="text-lg font-semibold text-gray-800 dark:text-white">
                            <slot name="title">Sidebar</slot>
                        </h2>

                        <button @click="close" class="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 h-10">
                            <icon-x-mark class="w-6 h-6 text-neutral-600 dark:text-white" size="md"
                                aria-hidden="true" />
                        </button>
                    </div>
                </slot>

                <div class="flex-1 overflow-y-auto">
                    <slot></slot>
                </div>

                <slot v-if="$slots.footer || $slots['footer-content']" name="footer">
                    <div
                        class="p-4 border-t border-gray-200 dark:border-black text-center text-sm text-gray-600 dark:text-gray-400">
                        <slot name="footer-content">Footer content</slot>
                    </div>
                </slot>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.c-sidebar {
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 300ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: transform 300ms ease-in-out;
}

.slide-left-enter-from,
.slide-left-leave-to {
    transform: translateX(-100%);
}

.slide-right-enter-from,
.slide-right-leave-to {
    transform: translateX(100%);
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
const slideTransition = computed(() => (props.side === "left" ? "slide-left" : "slide-right"));

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
