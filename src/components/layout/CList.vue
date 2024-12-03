<template>
    <div class="c-list py-4">
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

defineProps({
    class: {
        type: String,
        default: "",
    },
});

const classes = computed(() => `space-y-2 ${props.class}`);
</script>
