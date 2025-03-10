<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :width="size" :height="size" :class="colorClass">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: [String, Number],
    default: 24
  },
  color: {
    type: String,
    default: 'currentColor'
  }
});

const colorClass = computed(() => {
  return props.color.startsWith('text-') ? props.color : '';
});
</script>
