<template>
    <div
        class="relative w-full overflow-hidden"
        :style="{ height: `${height}px`, backgroundColor: bgColor }"
    >
        <div
            v-if="buffering"
            class="absolute inset-0"
            :style="{ width: `${bufferValue}%`, backgroundColor: bufferColor }"
        ></div>
        
        <div
            class="absolute h-full progress-bar"
            :class="{ striped, indeterminate }"
            :style="{ 
                width: indeterminate ? '100%' : `${value}%`,
                backgroundColor: fillColor,
            }"
        ></div>

        <div class="absolute inset-0 flex items-center justify-center z-10 select-none">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
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

.progress-bar.indeterminate {
    animation: indeterminate-progress 2s infinite linear;
}

@keyframes progress-stripes {
    from {
        background-position: 20px 0;
    }
    to {
        background-position: 0 0;
    }
}

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
        default: 0,
    },
    bufferValue: {
        type: Number,
        default: 100, 
    },
    height: {
        type: Number,
        default: 20, 
    },
    bgColor: {
        type: String,
        default: "#e0e0e0",
    },
    bufferColor: {
        type: String,
        default: "#c0c0c0",
    },
    fillColor: {
        type: String,
        default: "#4caf50",
    },
    striped: {
        type: Boolean,
        default: false,
    },
    indeterminate: {
        type: Boolean,
        default: false,
    },
    buffering: {
        type: Boolean,
        default: false,
    },
});
</script>
