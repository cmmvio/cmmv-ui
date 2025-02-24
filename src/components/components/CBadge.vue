<template>
    <div
        class="inline-flex items-center justify-center"
        :class="{
            'inline-block': inline,
            'absolute': floating,
            'rounded-full': dot,
        }"
        :style="badgeStyle"
    >
        <span
            v-if="!dot"
            class="text-xs rounded-md font-semibold flex items-center justify-center px-1 py-0.2"
            :class="[bgColor, textColor]"
        >
            {{ content || ($slots.default ? $slots.default()[0]?.children : "") }}
        </span>

        <span
            v-else
            class="w-2 h-2 rounded-full"
            :class="[bgColor]"
        ></span>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    content: {
        type: String,
        default: "",
    },
    bgColor: {
        type: String,
        default: "bg-red-500",
    },
    textColor: {
        type: String,
        default: "text-white",
    },
    inline: {
        type: Boolean,
        default: false,
    },
    floating: {
        type: Boolean,
        default: true,
    },
    dot: {
        type: Boolean,
        default: false,
    },
    offsetX: {
        type: String,
        default: "0.3rem",
    },
    offsetY: {
        type: String,
        default: "0.3rem",
    },
});

const badgeStyle = computed(() => ({
    top: props.floating ? props.offsetY : undefined,
    right: props.floating ? props.offsetX : undefined,
}));
</script>
