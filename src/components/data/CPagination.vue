<template>
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div v-if="showPerPageSelect" class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <span>{{ texts.showing }}</span>
            <select
                v-model="itemsPerPage"
                class="rounded-md border-gray-300 dark:border-gray-700 dark:bg-neutral-800 py-1 px-2 text-sm"
                @change="changeItemsPerPage"
            >
                <option v-for="option in itemsPerPageOptions" :key="option" :value="option">
                    {{ option }}
                </option>
            </select>
            <span>{{ texts.of }} {{ totalItems }} {{ texts.items }}</span>
        </div>
        <div v-else class="sm:flex-1"></div>

        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
                @click="selectPage(1)"
                :disabled="currentPage === 1"
                class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                :title="texts.firstPage"
            >
                <span class="sr-only">{{ texts.first }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-neutral-600 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="11 17 6 12 11 7"></polyline>
                    <polyline points="18 17 13 12 18 7"></polyline>
                </svg>
            </button>

            <button
                @click="selectPage(currentPage - 1)"
                :disabled="currentPage === 1"
                class="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                :title="texts.previousPage"
            >
                <span class="sr-only">{{ texts.previous }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-neutral-600 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>

            <template v-for="page in paginatedPages" :key="page">
                <button
                    v-if="page === '...'"
                    class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:outline-offset-0"
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
                            : 'text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-700 ring-1 ring-inset ring-gray-300 dark:ring-gray-700',
                        'relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0'
                    ]"
                >
                    {{ page }}
                </button>
            </template>

            <button
                @click="selectPage(currentPage + 1)"
                :disabled="currentPage === totalPages"
                class="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                :title="texts.nextPage"
            >
                <span class="sr-only">{{ texts.next }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-neutral-600 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

            <button
                @click="selectPage(totalPages)"
                :disabled="currentPage === totalPages"
                class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                :title="texts.lastPage"
            >
                <span class="sr-only">{{ texts.last }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-neutral-600 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="13 17 18 12 13 7"></polyline>
                    <polyline points="6 17 11 12 6 7"></polyline>
                </svg>
            </button>
        </nav>
    </div>
</template>

<script setup>
import { computed, defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps({
    totalItems: {
        type: Number,
        required: true,
    },
    modelValue: {
        type: Number,
        required: true,
        default: 1
    },
    perPage: {
        type: Number,
        default: 10
    },
    perPageOptions: {
        type: Array,
        default: () => [10, 25, 50, 100]
    },
    visiblePages: {
        type: Number,
        default: 5,
    },
    showPerPageSelect: {
        type: Boolean,
        default: false
    },
    // Internationalization props
    showingText: {
        type: String,
        default: "Showing"
    },
    ofText: {
        type: String,
        default: "of"
    },
    itemsText: {
        type: String,
        default: "items"
    },
    firstPageText: {
        type: String,
        default: "First page"
    },
    previousPageText: {
        type: String,
        default: "Previous page"
    },
    nextPageText: {
        type: String,
        default: "Next page"
    },
    lastPageText: {
        type: String,
        default: "Last page"
    },
    firstText: {
        type: String,
        default: "First"
    },
    previousText: {
        type: String,
        default: "Previous"
    },
    nextText: {
        type: String,
        default: "Next"
    },
    lastText: {
        type: String,
        default: "Last"
    }
});

const emit = defineEmits(['update:modelValue', 'update:perPage', 'pageChange']);

const currentPage = ref(props.modelValue);
const itemsPerPage = ref(props.perPage);
const itemsPerPageOptions = computed(() => props.perPageOptions);

// Computed property for all text labels
const texts = computed(() => ({
    showing: props.showingText,
    of: props.ofText,
    items: props.itemsText,
    firstPage: props.firstPageText,
    previousPage: props.previousPageText,
    nextPage: props.nextPageText,
    lastPage: props.lastPageText,
    first: props.firstText,
    previous: props.previousText,
    next: props.nextText,
    last: props.lastText
}));

watch(() => props.modelValue, (newVal) => {
    currentPage.value = newVal;
});

watch(() => props.perPage, (newVal) => {
    itemsPerPage.value = newVal;
});

const totalPages = computed(() => {
    return Math.max(1, Math.ceil(props.totalItems / itemsPerPage.value));
});

const selectPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        emit('update:modelValue', page);
        emit('pageChange', { page, perPage: itemsPerPage.value });
    }
};

const changeItemsPerPage = () => {
    emit('update:perPage', itemsPerPage.value);

    // Recalculate the current page to ensure it's still valid
    const newTotalPages = Math.ceil(props.totalItems / itemsPerPage.value);
    const newPage = Math.min(currentPage.value, newTotalPages);

    if (newPage !== currentPage.value) {
        currentPage.value = newPage;
        emit('update:modelValue', newPage);
    }

    emit('pageChange', { page: currentPage.value, perPage: itemsPerPage.value });
};

const paginatedPages = computed(() => {
    const pages = [];
    const total = totalPages.value;
    const visible = Math.min(props.visiblePages, total);
    const current = currentPage.value;

    // If we have few pages, show all of them
    if (total <= visible) {
        for (let i = 1; i <= total; i++) {
            pages.push(i);
        }
        return pages;
    }

    // Always show the first page
    pages.push(1);

    // Calculate the central range of pages to show
    let startPage = Math.max(2, current - Math.floor((visible - 2) / 2));
    let endPage = Math.min(total - 1, startPage + visible - 3);

    // Adjust if we're near the beginning
    if (startPage === 2) {
        endPage = Math.min(total - 1, visible);
    }

    // Adjust if we're near the end
    if (endPage === total - 1 && endPage - startPage < visible - 3) {
        startPage = Math.max(2, total - visible + 1);
    }

    // Add ellipses and central pages
    if (startPage > 2) {
        pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    if (endPage < total - 1) {
        pages.push('...');
    }

    // Always show the last page
    if (total > 1) {
        pages.push(total);
    }

    return pages;
});
</script>
