<template>
    <header class="c-toolbar" :class="{ 'c-toolbar--dense': dense || minified }">
        <slot></slot>
    </header>
</template>

<script setup lang="ts">
defineProps({
    dense: {
        type: Boolean,
        default: false,
    },
    minified: {
        type: Boolean,
        default: false,
    },
});
</script>

<style>
.c-toolbar {
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    padding: 0 16px;
    box-shadow: var(--c-toolbar-shadow, 0px 2px 4px rgba(0, 0, 0, 0.1));
}

.c-toolbar--dense {
    height: 48px;
}
</style>
