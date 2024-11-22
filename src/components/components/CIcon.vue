<template>
    <span
        :class="[sizes[size], color]"
        role="img"
        :aria-label="ariaLabel"
        class="c-icon inline-flex items-center justify-center"
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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CIcon",

    props: {
        size: {
            required: false,
            type: String,
            default: "md", // sm|md|lg|xl|2xl
        },
        color: {
            required: false,
            type: String,
            default: "text-gray-800", 
        },
        ariaLabel: {
            required: false,
            type: String,
            default: "icon",
        },
    },

    data() {
        return {
            sizes: {
                sm: "h-4 w-4",
                md: "h-6 w-6",
                lg: "h-8 w-8",
                xl: "h-10 w-10",
                "2xl": "h-12 w-12",
            },
        };
    },
});
</script>
