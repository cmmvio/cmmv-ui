<template>
    <code-preview :padding="padding" :default-view="hasDefaultSlot ? 'preview' : 'code'"
        :show-preview-button="hasDefaultSlot" :show-schema-button="hasSchemaSlot" :source-code="previewContent"
        ref="codePreviewRef">
        <slot></slot>
        <template #code>
            <slot name="code"></slot>
        </template>
        <template #schema>
            <slot name="schema"></slot>
        </template>
    </code-preview>
</template>

<script setup>
import { useSlots, computed, defineProps, onMounted, nextTick, ref } from 'vue';
import CodePreview from './CodePreview.vue';

const codePreviewRef = ref(null);
const previewContent = ref('');

onMounted(() => {
    nextTick(() => {
        try {
            const slotContainer = document.querySelector('.code-preview-container .preview-container > div');
            if (slotContainer) {
                previewContent.value = slotContainer.outerHTML;
            }
        } catch (err) {
            console.error('Error accessing content:', err);
        }
    });
});

const props = defineProps({
    padding: {
        type: String,
        default: 'p-6'
    }
});

const slots = useSlots();
const hasDefaultSlot = computed(() => !!slots.default);
const hasSchemaSlot = computed(() => !!slots.schema);
defineExpose({
    updateContent() {
        nextTick(() => {
            const slotContainer = document.querySelector('.code-preview-container .preview-container > div');
            if (slotContainer) {
                previewContent.value = slotContainer.outerHTML;
            }
        });
    }
});
</script>
