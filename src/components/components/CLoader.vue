<template>
    <div 
        class="c-loading inline-flex items-center justify-center min-w-[1em]"
        :class="[color]"
    >
        <slot :color="color" :width="width" :height="height"></slot>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    width: {
        type: String,
        default: "24",
    },
    height: {
        type: String,
        default: "24",
    },
    color: {
        type: String,
        default: "text-white",
    },
});
</script>

