<template>
    <div
        v-if="modelValue"
        class="fixed inset-0 z-[var(--z-index)] flex items-center justify-center transition-opacity c-overlay"
        style="--z-index: 50; transition-timing-function: cubic-bezier(.4,0,.2,1)"
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

<style scoped>
.c-overlay {
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
}
</style>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    },
    bgColor: {
        type: String,
        default: "#FFF",
    },
    opacity: {
        type: Number,
        default: 50,
    },
    closeOnClick: {
        type: Boolean,
        default: true,
    },
    zIndex: {
        type: Number,
        default: 50,
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
.fade-overlay-enter-active,
.fade-overlay-leave-active {
    transition: opacity 0.3s ease;
}

.fade-overlay-enter-from,
.fade-overlay-leave-to {
    opacity: 0;
}
</style>
