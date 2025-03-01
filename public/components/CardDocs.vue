<template>
    <code-preview :padding="padding" :default-view="hasDefaultSlot ? 'preview' : 'code'"
        :show-preview-button="hasDefaultSlot">
        <template #preview v-if="hasDefaultSlot">
            <slot></slot>
        </template>
        <template #code>
            <slot name="code"></slot>
        </template>
    </code-preview>
</template>

<script setup>
import { useSlots, computed, defineProps } from 'vue';
import CodePreview from './CodePreview.vue';

const props = defineProps({
    padding: {
        type: String,
        default: 'p-6'
    }
});

const slots = useSlots();
const hasDefaultSlot = computed(() => !!slots.default);
</script>
