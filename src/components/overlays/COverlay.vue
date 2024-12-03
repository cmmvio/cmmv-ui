<template>
    <div
        v-if="modelValue"
        class="fixed inset-0 z-[var(--z-index)] flex items-center justify-center transition-opacity"
        style="--z-index: 50;"
    >
        <!-- Background -->
        <div
            class="absolute inset-0"
            :style="{
                backgroundColor: bgColor,
                opacity: opacity / 100,
            }"
            @click.self="handleClose"
        ></div>

        <!-- Slot Content -->
        <div class="relative z-[calc(var(--z-index)+1)]">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    },
    bgColor: {
        type: String,
        default: "#FFF", // Default semi-transparent black background
    },
    opacity: {
        type: Number,
        default: 50, // Opacity from 0 to 100
    },
    closeOnClick: {
        type: Boolean,
        default: true, // Allow closing by clicking on the overlay
    },
    zIndex: {
        type: Number,
        default: 50, // Define stacking order
    },
});

const emit = defineEmits(["update:modelValue"]);

const handleClose = () => {
    if (props.closeOnClick) {
        emit("update:modelValue", false);
    }
};
</script>

<style scoped>
/* Fade-in/out for overlay */
.fade-overlay-enter-active,
.fade-overlay-leave-active {
    transition: opacity 0.3s ease;
}

.fade-overlay-enter-from,
.fade-overlay-leave-to {
    opacity: 0;
}
</style>
