<template>
    <div class="tooltip-container relative inline-block" @mouseenter="showTooltip" @mouseleave="hideTooltip">
        <slot></slot>

        <transition name="fade">
            <div v-if="visible" ref="tooltipRef"
                class="tooltip-content absolute z-50 px-4 py-2 rounded text-xs"
                :class="[
                    positionClasses[position],
                    bgColor,
                    textColor,
                    `opacity-${opacity}`,
                    borderColor || defaultBorderColor,
                    `tooltip-${position}`
                ]"
                :style="{
                    maxWidth: maxWidth ? maxWidth + 'px' : 'auto',
                    borderWidth: borderWidth ? borderWidth + 'px' : '1px',
                    '--tooltip-color': tooltipBackgroundColor
                }">
                <div class="overflow-hidden text-ellipsis">{{ content }}</div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.tooltip-container {
    position: relative;
}

.tooltip-content {
    position: absolute;
    pointer-events: none;
    z-index: 9999;
    transition: opacity 0.3s ease, transform 0.3s ease;
    white-space: nowrap;
    border-style: solid;
    --tooltip-color: currentColor;
}

.tooltip-content::before {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
}

.tooltip-top::before {
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px 8px 0 8px;
    border-color: var(--tooltip-color) transparent transparent transparent;
}

.bg-white.tooltip-top::before {
    border-top-color: white;
}

.bg-neutral-100.tooltip-top::before {
    border-top-color: rgb(245, 245, 245);
}

.bg-black.tooltip-top::before {
    border-top-color: black;
}

.dark .dark\:bg-neutral-900.tooltip-top::before {
    border-top-color: rgb(23, 23, 23);
}

.tooltip-bottom::before {
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent var(--tooltip-color) transparent;
}

.bg-white.tooltip-bottom::before {
    border-bottom-color: white;
}

.bg-neutral-100.tooltip-bottom::before {
    border-bottom-color: rgb(245, 245, 245);
}

.bg-black.tooltip-bottom::before {
    border-bottom-color: black;
}

.dark .dark\:bg-neutral-900.tooltip-bottom::before {
    border-bottom-color: rgb(23, 23, 23);
}

.tooltip-left::before {
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent var(--tooltip-color);
}

.bg-white.tooltip-left::before {
    border-left-color: white;
}

.bg-neutral-100.tooltip-left::before {
    border-left-color: rgb(245, 245, 245);
}

.bg-black.tooltip-left::before {
    border-left-color: black;
}

.dark .dark\:bg-neutral-900.tooltip-left::before {
    border-left-color: rgb(23, 23, 23);
}

.tooltip-right::before {
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    border-width: 8px 8px 8px 0;
    border-color: transparent var(--tooltip-color) transparent transparent;
}

.bg-white.tooltip-right::before {
    border-right-color: white;
}

.bg-neutral-100.tooltip-right::before {
    border-right-color: rgb(245, 245, 245);
}

.bg-black.tooltip-right::before {
    border-right-color: black;
}

.dark .dark\:bg-neutral-900.tooltip-right::before {
    border-right-color: rgb(23, 23, 23);
}

.tooltip-content.opacity-0 {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

.bg-white { --tooltip-color: white; }
.bg-neutral-100 { --tooltip-color: rgb(245, 245, 245); }
.bg-black { --tooltip-color: black; }
.bg-blue-100 { --tooltip-color: rgb(219, 234, 254); }
.bg-green-100 { --tooltip-color: rgb(220, 252, 231); }
.bg-yellow-100 { --tooltip-color: rgb(254, 249, 195); }
.bg-red-100 { --tooltip-color: rgb(254, 226, 226); }
.bg-purple-100 { --tooltip-color: rgb(243, 232, 255); }
.bg-gray-100 { --tooltip-color: rgb(243, 244, 246); }

.dark .dark\:bg-neutral-900 { --tooltip-color: rgb(23, 23, 23); }
.dark .dark\:bg-gray-900 { --tooltip-color: rgb(17, 24, 39); }
.dark .dark\:bg-blue-900 { --tooltip-color: rgb(30, 58, 138); }
.dark .dark\:bg-green-900 { --tooltip-color: rgb(20, 83, 45); }
.dark .dark\:bg-yellow-900 { --tooltip-color: rgb(113, 63, 18); }
.dark .dark\:bg-red-900 { --tooltip-color: rgb(127, 29, 29); }
.dark .dark\:bg-purple-900 { --tooltip-color: rgb(88, 28, 135); }
</style>

<script lang="ts" setup>
const props = defineProps({
    content: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        default: "top",
    },
    opacity: {
        type: Number,
        default: 100,
    },
    maxWidth: {
        type: Number,
        default: 0,
    },
    bgColor: {
        type: String,
        default: "bg-neutral-100 dark:bg-neutral-900",
    },
    textColor: {
        type: String,
        default: "text-black dark:text-white",
    },
    borderColor: {
        type: String,
        default: "",
    },
    borderWidth: {
        type: Number,
        default: 1,
    }
});

import { ref, computed } from "vue";

const visible = ref(false);
const tooltipRef = ref(null);

const showTooltip = () => {
    visible.value = true;
};

const hideTooltip = () => {
    visible.value = false;
};

const defaultBorderColor = "border-neutral-200 dark:border-neutral-800";

const tooltipBackgroundColor = computed(() => {
    if (tooltipRef.value && window.getComputedStyle) {
        const computedStyle = window.getComputedStyle(tooltipRef.value);
        return computedStyle.backgroundColor;
    }

    return 'currentColor';
});

const positionClasses: Record<string, string> = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
};
</script>
