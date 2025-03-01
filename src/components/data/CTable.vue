<template>
    <div :class="[
        roundedStyles[rounded], shadow, borderColor, textSize,
        { 'border': card, 'c-table-dense': dense },
        'w-full relative c-table overflow-auto'
    ]" ref="tableContainer">
        <table :class="[textColor, 'border-none table-auto m-0 w-full relative text-sm']">
            <caption v-if="$slots.caption"
                :class="['p-4 text-lg text-left rtl:text-right border-b', borderColor, bgCaptionColor]">
                <slot name="caption"></slot>
            </caption>

            <c-progress-bar v-if="loading" :height="4" fillColor="#2196f3" bgColor="transparent"
                class="w-full h-1 m-auto" indeterminate></c-progress-bar>

            <thead :class="[bgHeaderColor, { 'sticky top-0 z-10': fixedHeaders }]"
                :style="{ position: fixedHeaders ? 'sticky' : 'relative', top: '0px', zIndex: 10 }">

                <tr>
                    <th v-if="checked"
                        :class="[textColor, bgHeaderColor, borderColor, 'border-b text-xs font-normal', dense ? 'py-1 px-2' : 'p-3']"
                        style="width: 40px">
                        <c-checkbox v-model="selectAll"
                            :indeterminate="items.length !== selectedItems.length && selectedItems.length > 0"
                            :checked="items.length === selectedItems.length && selectedItems.length > 0"
                            :size="dense ? 'sm' : 'sm'" ignoreClick @click="toggleSelectAll" />
                    </th>

                    <th v-for="item in headers" :class="[textColor, bgHeaderColor, borderColor, 'border-b select-none',
                        dense ? 'text-xs py-1 px-2' : 'text-xs font-normal p-3']"
                        :style="{ width: item.width ?? 'auto' }">
                        <span v-if="enableSort" class="cursor-pointer flex items-center" @click="sortByField(item.key)">
                            <span class="mr-2">{{ item.label }}</span>

                            <icon-arrow-down class="w-2 h-2 text-neutral-600 dark:text-white" aria-hidden="true"
                                size="sm" v-if="sortField === item.key && !sortDirection" />

                            <icon-arrow-up class="w-2 h-2 text-neutral-600 dark:text-white" aria-hidden="true" size="sm"
                                v-else-if="sortField === item.key && sortDirection" />
                        </span>
                        <span v-else>
                            {{ item.label }}
                        </span>
                    </th>
                </tr>
            </thead>

            <tbody ref="tbody" :style="{ maxHeight: maxHeight, overflowY: 'auto', display: 'block' }">
                <tr v-for="(item) in items" :class="[bgColor]" :style="{ display: 'table', width: '100%' }">
                    <td v-if="checked" :class="[textColor, borderColor, dense ? 'py-1 px-2 w-1' : 'p-3 w-1']"
                        style="width: 40px">
                        <c-checkbox v-model="selectedItems" :size="dense ? 'sm' : 'sm'" :value="item" />
                    </td>

                    <td v-for="itemHeader in headers"
                        :class="[textColor, borderColor, 'whitespace-nowrap', dense ? 'py-1 px-2 text-xs' : 'p-3 text-xs']"
                        :style="{ width: itemHeader.width ?? 'auto' }">
                        <div v-if="$slots[itemHeader.key]" class="overflow-hidden text-ellipsis">
                            <slot :name="itemHeader.key" :item="item"></slot>
                        </div>
                        <div v-else class="overflow-hidden text-ellipsis" :title="item[itemHeader.key] as string ?? ''">
                            {{ item[itemHeader.key] }}
                        </div>
                    </td>
                </tr>

                <tr v-if="infinityScroll && !ended">
                    <td :colspan="headers.length + (checked ? 1 : 0)" ref="sentinel">
                        <div class="m-auto w-6">
                            <Loader180Ring />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.c-table table tbody tr:last-child td {
    border-bottom: none;
}

.c-table tbody {
    overflow-y: auto;
    display: block;
    max-height: 300px;
}

.c-table thead,
.c-table tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
}

.c-table thead.sticky {
    position: sticky;
    top: 0;
    z-index: 10;
}

/* Estilos para o cabeçalho */
.c-table thead th {
    color: #666;
    font-weight: normal;
    letter-spacing: 0.02em;
}

.dark .c-table thead th {
    color: #aaa;
}

/* Estilo para versão condensada */
.c-table-dense thead th {
    font-size: 0.7rem;
    letter-spacing: 0.01em;
}

.c-table-dense tbody td {
    font-size: 0.75rem;
    line-height: 1.2;
}

/* Scroll styles - Light Theme */
:deep(.light .c-table)::-webkit-scrollbar,
:deep(.light) .c-table::-webkit-scrollbar,
.light .c-table::-webkit-scrollbar,
.light .c-table tbody::-webkit-scrollbar {
    height: 4px;
    width: 4px;
}

:deep(.light .c-table)::-webkit-scrollbar-track,
:deep(.light) .c-table::-webkit-scrollbar-track,
.light .c-table::-webkit-scrollbar-track,
.light .c-table tbody::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: #EFEFEF;
}

:deep(.light .c-table)::-webkit-scrollbar-track:hover,
:deep(.light) .c-table::-webkit-scrollbar-track:hover,
.light .c-table::-webkit-scrollbar-track:hover,
.light .c-table tbody::-webkit-scrollbar-track:hover {
    background-color: #E3E3E3;
}

:deep(.light .c-table)::-webkit-scrollbar-track:active,
:deep(.light) .c-table::-webkit-scrollbar-track:active,
.light .c-table::-webkit-scrollbar-track:active,
.light .c-table tbody::-webkit-scrollbar-track:active {
    background-color: #E3E3E3;
}

:deep(.light .c-table)::-webkit-scrollbar-thumb,
:deep(.light) .c-table::-webkit-scrollbar-thumb,
.light .c-table::-webkit-scrollbar-thumb,
.light .c-table tbody::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #999;
}

:deep(.light .c-table)::-webkit-scrollbar-thumb:hover,
:deep(.light) .c-table::-webkit-scrollbar-thumb:hover,
.light .c-table::-webkit-scrollbar-thumb:hover,
.light .c-table tbody::-webkit-scrollbar-thumb:hover {
    background-color: #BFBFBF;
}

:deep(.light .c-table)::-webkit-scrollbar-thumb:active,
:deep(.light) .c-table::-webkit-scrollbar-thumb:active,
.light .c-table::-webkit-scrollbar-thumb:active,
.light .c-table tbody::-webkit-scrollbar-thumb:active {
    background-color: #BFBFBF;
}

/* Scroll styles - Dark Theme */
:deep(.dark .c-table)::-webkit-scrollbar,
:deep(.dark) .c-table::-webkit-scrollbar,
.dark .c-table::-webkit-scrollbar,
.dark .c-table tbody::-webkit-scrollbar {
    height: 4px;
    width: 4px;
}

:deep(.dark .c-table)::-webkit-scrollbar-track,
:deep(.dark) .c-table::-webkit-scrollbar-track,
.dark .c-table::-webkit-scrollbar-track,
.dark .c-table tbody::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: #2E3035;
}

:deep(.dark .c-table)::-webkit-scrollbar-track:hover,
:deep(.dark) .c-table::-webkit-scrollbar-track:hover,
.dark .c-table::-webkit-scrollbar-track:hover,
.dark .c-table tbody::-webkit-scrollbar-track:hover {
    background-color: #4C4C4C;
}

:deep(.dark .c-table)::-webkit-scrollbar-track:active,
:deep(.dark) .c-table::-webkit-scrollbar-track:active,
.dark .c-table::-webkit-scrollbar-track:active,
.dark .c-table tbody::-webkit-scrollbar-track:active {
    background-color: #4C4C4C;
}

:deep(.dark .c-table)::-webkit-scrollbar-thumb,
:deep(.dark) .c-table::-webkit-scrollbar-thumb,
.dark .c-table::-webkit-scrollbar-thumb,
.dark .c-table tbody::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #5B5B5B;
}

:deep(.dark .c-table)::-webkit-scrollbar-thumb:hover,
:deep(.dark) .c-table::-webkit-scrollbar-thumb:hover,
.dark .c-table::-webkit-scrollbar-thumb:hover,
.dark .c-table tbody::-webkit-scrollbar-thumb:hover {
    background-color: #777777;
}

:deep(.dark .c-table)::-webkit-scrollbar-thumb:active,
:deep(.dark) .c-table::-webkit-scrollbar-thumb:active,
.dark .c-table::-webkit-scrollbar-thumb:active,
.dark .c-table tbody::-webkit-scrollbar-thumb:active {
    background-color: #777777;
}
</style>

<script setup lang="ts">
import {
    defineProps, computed,
    ref, watch, defineEmits, onMounted
} from "vue";

import type { PropType } from "vue";

interface TableHeader {
    width?: string;
    key: string;
    label: string;
}

interface TableItem {
    [key: string]: unknown;
}

const props = defineProps({
    headers: {
        type: Array as PropType<TableHeader[]>,
        required: true,
        default: () => [],
    },
    items: {
        type: Array as PropType<TableItem[]>,
        required: true,
        default: () => [],
    },
    checked: {
        type: Boolean,
        required: false,
        default: false,
    },
    rounded: {
        type: String,
        required: false,
        default: "md",
    },
    shadow: {
        type: String,
        required: false,
        default: "shadow-md",
    },
    card: {
        type: Boolean,
        required: false,
        default: true
    },
    dense: {
        type: Boolean,
        required: false,
        default: false
    },
    bgColor: {
        type: String,
        default: "bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-600",
    },
    bgHeaderColor: {
        type: String,
        default: "bg-white dark:bg-neutral-900",
    },
    bgCaptionColor: {
        type: String,
        default: "bg-white dark:bg-neutral-800",
    },
    borderColor: {
        type: String,
        default: "border-neutral-300 dark:border-neutral-900",
    },
    textColor: {
        type: String,
        default: "text-black dark:text-white",
    },
    textSize: {
        type: String,
        default: "text-sm"
    },
    enableSort: {
        type: Boolean,
        required: false,
        default: false
    },
    sortBy: {
        type: String,
        required: false
    },
    sortReverse: {
        type: Boolean,
        required: false,
        default: false
    },
    fixedHeaders: {
        type: Boolean,
        required: false,
        default: false
    },
    maxHeight: {
        type: String,
        required: false,
        default: "300px"
    },
    infinityScroll: {
        type: Boolean,
        required: false,
        default: false
    },
    ended: {
        type: Boolean,
        required: false,
        default: false
    },
    loading: {
        type: Boolean,
        required: false,
        default: false
    }
});

const selectedItems = ref<TableItem[]>([]);
const selectAll = ref(false);
const emit = defineEmits(["update:selected", "sorting", "loadMore"]);
const sentinel = ref<HTMLElement | null>(null);
const tbody = ref<HTMLElement | null>(null);

const toggleSelectAll = () => {
    if (selectedItems.value.length > 0) {
        selectedItems.value = [];
        selectAll.value = false;
    } else {
        selectedItems.value = [...props.items];
        selectAll.value = true;
    }
};

watch(selectedItems, () => {
    selectAll.value = (selectedItems.value.length === props.items.length && selectedItems.value.length > 0);
    emit("update:selected", selectedItems.value);
});

const getSelectedItems = computed(() => selectedItems.value);

const roundedStyles = computed((): Record<string, string> => ({
    none: "",
    default: "rounded-lg",
    md: "rounded-md",
    full: "rounded-full",
}));

const sortField = ref<string | undefined>(props.sortBy);
const sortDirection = ref<boolean>(props.sortReverse);

const sortByField = (field: string) => {
    if (sortField.value === field) {
        sortDirection.value = !sortDirection.value;
    } else {
        sortField.value = field;
        sortDirection.value = false;
    }

    emit("sorting", sortField.value, sortDirection.value);
};

onMounted(() => {
    if (!props.infinityScroll || !sentinel.value) return;

    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            emit("loadMore");
        }
    }, { root: tbody.value, threshold: 1 });

    observer.observe(sentinel.value);
});

defineExpose({ getSelectedItems });
</script>
