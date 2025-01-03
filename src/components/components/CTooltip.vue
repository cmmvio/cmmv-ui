<template>
    <div
        class="tooltip-container relative inline-block"
        @mouseenter="showTooltip"
        @mouseleave="hideTooltip"
    >
        <slot></slot>

        <transition name="fade">
            <div
                v-if="visible"
                class="tooltip-content absolute z-50 px-4 py-2 rounded shadow-lg"
                :class="[positionClasses[position], bgColor, textColor, `opacity-${opacity}`]"
                :style="{ maxWidth: maxWidth ? maxWidth + 'px' : 'auto' }"
            >
                <div class="overflow-hidden text-ellipsis">{{ content }}</div>
                <div class="tooltip-arrow" :class="[arrowClasses[position], arrowColor, `opacity-${opacity}`]"></div>
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
}

.tooltip-content.opacity-0 {
    opacity: 0;
}

.tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
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
        default: "bg-gray-200 dark:bg-zinc-900",
    },
    textColor: {
        type: String,
        default: "text-black dark:text-white",
    },
    arrowColor: {
        type: String,
        default: "zinc-900",
    },
});

import { ref, computed } from "vue";

const visible = ref(false);

const showTooltip = () => {
    visible.value = true;
};

const hideTooltip = () => {
    visible.value = false;
};

const positionClasses: Record<string, string> = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
};

const arrowClasses = computed<Record<string, string>>(() => ({
    top: `bottom-[-13px] left-1/2 transform -translate-x-1/2 border-[8px] border-l-transparent border-r-transparent border-b-transparent border-t-${props.arrowColor}`,
    bottom: `top-[-13px] left-1/2 transform -translate-x-1/2 border-[8px] border-l-transparent border-r-transparent border-t-transparent border-b-${props.arrowColor}`,
    left: `right-[-13px] top-1/2 transform -translate-y-1/2 border-[8px] border-t-transparent border-b-transparent border-r-transparent border-l-${props.arrowColor}`,
    right: `left-[-13px] top-1/2 transform -translate-y-1/2 border-[8px] border-t-transparent border-b-transparent border-l-transparent border-r-${props.arrowColor}`,
}));
</script>
