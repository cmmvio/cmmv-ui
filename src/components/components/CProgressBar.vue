<template>
    <div
        class="relative w-full overflow-hidden"
        :style="{ height: `${height}px`, backgroundColor: bgColor }"
    >
        <!-- Buffering Bar -->
        <div
            v-if="buffering"
            class="absolute inset-0"
            :style="{ width: `${bufferValue}%`, backgroundColor: bufferColor }"
        ></div>
        
        <!-- Progress Bar -->
        <div
            class="absolute h-full progress-bar"
            :class="{ striped, indeterminate }"
            :style="{ 
                width: indeterminate ? '100%' : `${value}%`,
                backgroundColor: fillColor,
            }"
        ></div>
        
        <!-- Slot Content -->
        <div class="absolute inset-0 flex items-center justify-center z-10 select-none">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
/* Striped Pattern */
.progress-bar.striped {
    background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.2) 75%,
        transparent 75%,
        transparent
    );
    background-size: 20px 20px;
    animation: progress-stripes 1s linear infinite;
}

/* Indeterminate Animation */
.progress-bar.indeterminate {
    animation: indeterminate-progress 2s infinite linear;
}

/* Stripes Animation */
@keyframes progress-stripes {
    from {
        background-position: 20px 0;
    }
    to {
        background-position: 0 0;
    }
}

/* Indeterminate Animation */
@keyframes indeterminate-progress {
    0% {
        transform: translateX(-100%);
    }
    50% {
        transform: translateX(50%);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
    value: {
        type: Number,
        default: 0, // Progress value (0-100)
    },
    bufferValue: {
        type: Number,
        default: 100, // Buffer value (0-100)
    },
    height: {
        type: Number,
        default: 20, // Height of the progress bar
    },
    bgColor: {
        type: String,
        default: "#e0e0e0", // Background color of the progress bar
    },
    bufferColor: {
        type: String,
        default: "#c0c0c0", // Background color of the buffer bar
    },
    fillColor: {
        type: String,
        default: "#4caf50", // Color of the progress bar fill
    },
    striped: {
        type: Boolean,
        default: false, // Adds a striped pattern to the progress bar
    },
    indeterminate: {
        type: Boolean,
        default: false, // Activates indeterminate animation
    },
    buffering: {
        type: Boolean,
        default: false, // Enables the buffering bar
    },
});
</script>
