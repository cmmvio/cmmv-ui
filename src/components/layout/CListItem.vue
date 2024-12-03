<template>
    <div class="c-list-item mx-2 my-1 flex items-center p-1 cursor-pointer" :class="class">
        <template v-if="icon !== null">
            <div class="icon-wrapper">
                <component :is="icon" class="w-6 h-6 mr-3" :class="[textColor]"></component>
            </div>
        </template>
        <div class="flex-grow">
            <h4 v-if="title" class="font-semibold">{{ title }}</h4>
            <div v-if="subtitle" class="text-sm text-opacity-70">{{ subtitle }}</div>
        </div>
        <slot></slot>
    </div>
</template>

<style scoped>
.c-list-item {
    transition: background-color 0.2s ease;
}

.icon-wrapper {
    flex-shrink: 0;
}
</style>

<script setup>
import { defineProps } from 'vue';

defineProps({
    icon: {
        type: [String, Object],
        default: null,
    },

    title: {
        type: String,
        default: null,
    },

    subtitle: {
        type: String,
        default: null,
    },

    class: {
        type: String,
        default: "",
    },

    textColor: {
        type: String,
        default: "text-white",
    },
});
</script>
