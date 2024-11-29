<template>
    <div
        class="relative inline-flex items-center justify-center"
        :style="{ width: `${size}px`, height: `${size}px` }"
    >
        <svg
            v-if="!indeterminate"
            class="absolute"
            :style="{ transform: `rotate(-90deg)` }"
            :width="size"
            :height="size"
            viewBox="0 0 100 100"
        >
            <!-- Background circle -->
            <circle
                class="c-progress-circular-bg"
                cx="50"
                cy="50"
                :r="radius"
                :stroke="bgColor"
                fill="none"
                :stroke-width="width"
            />
            <!-- Progress circle -->
            <circle
                class="c-progress-circular-fill"
                cx="50"
                cy="50"
                :r="radius"
                :stroke="fillColor"
                fill="none"
                :stroke-width="width"
                stroke-linecap="round"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="strokeDashOffset"
            />
        </svg>
        <div v-if="indeterminate" class="loader" :style="{ borderWidth: `${width}px`, borderColor: `${fillColor}` }"></div>
        <div class="absolute text-center font-semibold">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.c-progress-circular-bg {
    opacity: 0.3;
}

.c-progress-circular-fill {
    transition: stroke-dashoffset 0.35s ease;
    transform-origin: 50% 50%;
}

.loader {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: l20-1 0.8s infinite linear alternate, l20-2 1.6s infinite linear;
    border-style: solid;
    border-right-color: transparent;
}

@keyframes l20-1 {
    0% {
        clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
    }
    12.5% {
        clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
    }
    25% {
        clip-path: polygon(
            50% 50%,
            0 0,
            50% 0%,
            100% 0%,
            100% 100%,
            100% 100%,
            100% 100%
        );
    }
    50% {
        clip-path: polygon(
            50% 50%,
            0 0,
            50% 0%,
            100% 0%,
            100% 100%,
            50% 100%,
            0% 100%
        );
    }
    62.5% {
        clip-path: polygon(
            50% 50%,
            100% 0,
            100% 0%,
            100% 0%,
            100% 100%,
            50% 100%,
            0% 100%
        );
    }
    75% {
        clip-path: polygon(
            50% 50%,
            100% 100%,
            100% 100%,
            100% 100%,
            100% 100%,
            50% 100%,
            0% 100%
        );
    }
    100% {
        clip-path: polygon(
            50% 50%,
            50% 100%,
            50% 100%,
            50% 100%,
            50% 100%,
            50% 100%,
            0% 100%
        );
    }
}

@keyframes l20-2 {
    0% {
        transform: scaleY(1) rotate(0deg);
    }
    49.99% {
        transform: scaleY(1) rotate(135deg);
    }
    50% {
        transform: scaleY(-1) rotate(0deg);
    }
    100% {
        transform: scaleY(-1) rotate(-135deg);
    }
}
</style>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    value: {
        type: Number,
        default: 0, // Progress value (0-100)
    },
    size: {
        type: Number,
        default: 100, // Total diameter of the circular progress
    },
    width: {
        type: Number,
        default: 10, // Stroke width
    },
    bgColor: {
        type: String,
        default: "#d3d3d3", // Background stroke color
    },
    fillColor: {
        type: String,
        default: "#4caf50", // Progress stroke color
    },
    indeterminate: {
        type: Boolean,
        default: false, // Indeterminate mode
    },
});

const radius = computed(() => (50 - props.width)); // Adjust radius to account for stroke width
const circumference = computed(() => 2 * Math.PI * radius.value); // Full circumference
const strokeDashOffset = computed(() => circumference.value * (1 - props.value / 100)); // Offset based on progress
</script>
