<template>
    <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <button
            @click="selectPage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <span class="sr-only">Previous</span>
            <icon-chevron-left class="w-4 h-4 text-neutral-600 dark:text-white" aria-hidden="true" />
        </button>

        <template v-for="page in paginatedPages" :key="page">
            <button
                v-if="page === '...'"
                class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                disabled
            >
                ...
            </button>
            <button
                v-else
                @click="selectPage(page)"
                :class="[
                    page === currentPage
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-900 hover:bg-gray-50 ring-1 ring-inset ring-gray-300',
                    'relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0'
                ]"
            >
                {{ page }}
            </button>
        </template>

        <button
            @click="selectPage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <span class="sr-only">Next</span>
            <icon-chevron-right class="w-4 h-4 text-neutral-600 dark:text-white" aria-hidden="true" />
        </button>
    </nav>
</template>

<script setup>
import { computed, defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps({
    totalPages: {
        type: Number,
        required: true,
    },
    visiblePages: {
        type: Number,
        default: 5,
    },
    modelValue: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue', 'select']);

const currentPage = ref(props.modelValue);

watch(() => props.modelValue, (newVal) => {
    currentPage.value = newVal;
});

const selectPage = (page) => {
    if (page >= 1 && page <= props.totalPages) {
        currentPage.value = page;
        emit('update:modelValue', page);
        emit('select', page);
    }
};

const paginatedPages = computed(() => {
    const pages = [];
    const total = props.totalPages;
    const visible = props.visiblePages;
    const current = currentPage.value;

    if (total <= visible) {
        for (let i = 1; i <= total; i++) pages.push(i);
    } else {
        const leftBound = Math.max(2, current - 1);
        const rightBound = Math.min(total - 1, current + 1);

        pages.push(1);

        if (leftBound > 2) pages.push('...');

        for (let i = leftBound; i <= rightBound; i++) pages.push(i);

        if (rightBound < total - 1) pages.push('...');

        pages.push(total);
    }

    return pages;
});
</script>
