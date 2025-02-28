<template>
  <code-preview :default-view="hasDefaultSlot ? 'preview' : 'code'" :show-preview-button="hasDefaultSlot">
    <template #preview v-if="hasDefaultSlot">
      <slot></slot>
    </template>
    <template #code>
      <slot name="code"></slot>
    </template>
  </code-preview>
</template>

<script setup>
import { useSlots, computed } from 'vue';
import CodePreview from './CodePreview.vue';

const slots = useSlots();
const hasDefaultSlot = computed(() => !!slots.default);
</script>
