<template>
    <span
        :class="[sizes[size], color]"
        role="img"
        :aria-label="ariaLabel"
        class="c-icon inline-flex items-center justify-center  min-w-[1em]"
    >
        <slot></slot>
    </span>
</template>

<style>
.c-icon {
    display: inline-flex;
    transition: color 0.3s, fill 0.3s;
}
</style>

<script lang="ts" setup>
defineProps({
    size: {
        type: String,
        default: "md",
    },
    color: {
        type: String,
        default: "text-gray-800",
    },
    ariaLabel: {
        type: String,
        default: "icon",
    },
});

const sizes: Record<string, string> = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-10 w-10",
    "2xl": "h-12 w-12",
};
</script>
