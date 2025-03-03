<template>
    <div class="flex items-center justify-between flex-column flex-wrap"
        :class="{ 'border-b border-neutral-200 dark:border-neutral-900 px-2 py-2': !card }">
        <div v-if="captionTitle || captionSubtitle">
            <h2 v-if="captionTitle" class="text-xl font-semibold text-neutral-900 dark:text-white">{{ captionTitle }}
            </h2>
            <span v-if="captionSubtitle" class="text-sm text-neutral-500 dark:text-neutral-400">{{ captionSubtitle
            }}</span>
        </div>

        <div class="relative">
            <div class="flex items-stretch">
                <c-input id="search" label="Search Input" v-model="searchQuery" :placeholder="searchPlaceholder"
                    @keyup.enter="handleSearch" floatingLabel size="md"
                    :customClass="searchableFields.length > 0 ? '!rounded-r-none border-r-1' : ''"
                    style="min-width: 250px; flex: 1;">
                    <template #icon>
                        <IconMagnifyingGlass class="w-6 h-6 text-neutral-600 dark:text-white" aria-hidden="true" />
                    </template>
                </c-input>

                <c-combobox v-if="searchableFields.length > 0" v-model="searchField" :options="searchableFields"
                    size="md" :placeholder="searchFieldPlaceholder" style="min-width: 150px; "
                    customClass="!rounded-l-none border-l-0 h-full" />
            </div>

            <slot name="filters"></slot>
        </div>
    </div>

    <c-table :dense="dense" :loading="loading" :card="card" :headers="headers" :items="tableItems" :checked="selectable"
        :rounded="rounded" :shadow="shadow" :bg-color="bgColor" :bg-header-color="bgHeaderColor"
        :bg-caption-color="bgCaptionColor" :border-color="borderColor" :text-color="textColor" :text-size="textSize"
        :enable-sort="enableLocalSort || enableApiSort" :fixed-headers="fixedHeaders" :max-height="maxHeight"
        @update:selected="handleSelected" @sorting="handleSorting"
        :class="{ 'border-b border-neutral-200 dark:border-neutral-900': !card }">

        <template v-for="(_, name) in $slots" #[name]="slotData">
            <slot :name="name" v-bind="slotData"></slot>
        </template>

        <template v-if="$slots.caption" #caption>
            <slot name="caption"></slot>
        </template>

        <template v-if="$slots.empty && tableItems.length === 0" #empty>
            <slot name="empty"></slot>
        </template>

        <template v-else-if="tableItems.length === 0" #empty>
            <div class="py-8 text-center text-neutral-500 dark:text-neutral-400">
                {{ emptyText }}
            </div>
        </template>
    </c-table>

    <div class="flex justify-between items-center ml-2 mt-2">
        <div v-if="availableActions && availableActions.length > 0" class="flex items-center gap-2">
            <select v-model="selectedAction"
                class="h-8 rounded-md ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 dark:bg-neutral-800 py-0 px-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                :disabled="(selectedAction && getActionById(selectedAction)?.requiresSelection && selectedItems.length === 0) || loading">
                <option value="" disabled selected>{{ i18n.selectAction }}</option>
                <option v-for="action in availableActionsFiltered" :key="action.id" :value="action.id"
                    :disabled="action.requiresSelection && selectedItems.length === 0">
                    {{ action.label }}
                </option>
            </select>
            <button @click="executeAction"
                :disabled="!selectedAction || (getActionById(selectedAction)?.requiresSelection && selectedItems.length === 0) || loading"
                class="inline-flex items-center px-3 h-8 rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
                {{ i18n.executeAction }}
            </button>
        </div>

        <div v-else class="flex-1"></div>

        <c-pagination mode="input" v-if="isPaginated" :total-items="totalItems" v-model="currentPage"
            :per-page="limitPerPage" :per-page-options="perPageOptions" :visible-pages="visiblePages"
            :show-per-page-select="showPerPageSelect" :centered="paginationCentered" @page-change="handlePageChange"
            :showing-text="i18n.showing" :of-text="i18n.of" :items-text="i18n.items" :first-page-text="i18n.firstPage"
            :previous-page-text="i18n.previousPage" :next-page-text="i18n.nextPage" :last-page-text="i18n.lastPage"
            :first-text="i18n.first" :previous-text="i18n.previous" :next-text="i18n.next" :last-text="i18n.last"
            class="px-2" />
    </div>

    <div v-if="error"
        class="bg-red-50 dark:bg-red-900/20 p-4 rounded-md text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 mt-4">
        <div class="font-semibold">{{ i18n.errorTitle }}</div>
        <div>{{ error }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import type { PropType } from 'vue';

interface TableHeader {
    width?: string;
    key: string;
    label: string;
    sortable?: boolean;
}

interface TableItem {
    [key: string]: any;
}

interface ApiResponse {
    status?: number;
    processingTime?: number;
    result?: {
        success?: boolean;
        count?: number;
        pagination?: {
            limit?: number;
            offset?: number;
            sortBy?: string;
            sort?: string;
            search?: string;
            searchField?: string;
            filters?: Record<string, any>;
        };
        data?: any[];
    };
    [key: string]: any;
}

interface SearchableField {
    label: string;
    value: string;
}

interface PaginationEvent {
    page: number;
    perPage: number;
}

interface TableAction {
    id: string;
    label: string;
    requiresSelection?: boolean;
    handler?: (items: TableItem[]) => void;
    visible?: boolean | ((items: TableItem[]) => boolean);
}

const props = defineProps({
    apiUrl: {
        type: String,
        required: true
    },
    method: {
        type: String,
        default: 'GET'
    },
    headers: {
        type: Array as PropType<TableHeader[]>,
        required: true
    },
    isPaginated: {
        type: Boolean,
        default: true
    },
    initialLimit: {
        type: Number,
        default: 10
    },
    initialOffset: {
        type: Number,
        default: 0
    },
    initialPage: {
        type: Number,
        default: 1
    },
    perPageOptions: {
        type: Array as PropType<number[]>,
        default: () => [10, 25, 50, 100]
    },
    visiblePages: {
        type: Number,
        default: 5
    },
    showPerPageSelect: {
        type: Boolean,
        default: true
    },
    paginationCentered: {
        type: Boolean,
        default: false
    },
    dense: {
        type: Boolean,
        default: false
    },
    initialSortBy: {
        type: String,
        default: 'id'
    },
    initialSortDirection: {
        type: String,
        default: 'ASC'
    },
    enableLocalSort: {
        type: Boolean,
        default: false
    },
    enableApiSort: {
        type: Boolean,
        default: true
    },
    showSearchBar: {
        type: Boolean,
        default: true
    },
    searchPlaceholder: {
        type: String,
        default: 'Search...'
    },
    searchFieldPlaceholder: {
        type: String,
        default: 'Search by'
    },
    searchableFields: {
        type: Array as PropType<SearchableField[]>,
        default: () => []
    },
    initialSearchQuery: {
        type: String,
        default: ''
    },
    initialSearchField: {
        type: String,
        default: ''
    },
    captionTitle: {
        type: String,
        default: ''
    },
    captionSubtitle: {
        type: String,
        default: ''
    },
    rounded: {
        type: String,
        default: 'md'
    },
    shadow: {
        type: String,
        default: ''
    },
    bgColor: {
        type: String,
        default: 'bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-600'
    },
    bgHeaderColor: {
        type: String,
        default: 'bg-white dark:bg-neutral-900'
    },
    bgCaptionColor: {
        type: String,
        default: 'bg-white dark:bg-neutral-800'
    },
    borderColor: {
        type: String,
        default: 'border-neutral-300 dark:border-neutral-900'
    },
    textColor: {
        type: String,
        default: 'text-black dark:text-white'
    },
    textSize: {
        type: String,
        default: 'text-sm'
    },
    fixedHeaders: {
        type: Boolean,
        default: true
    },
    maxHeight: {
        type: String,
        default: '500px'
    },
    selectable: {
        type: Boolean,
        default: false
    },
    emptyText: {
        type: String,
        default: 'No data available'
    },
    card: {
        type: Boolean,
        required: false,
        default: true
    },
    dataPath: {
        type: String,
        default: 'result.data'
    },
    totalPath: {
        type: String,
        default: 'result.count'
    },
    availableActions: {
        type: Array as PropType<TableAction[]>,
        default: () => []
    },
    i18n: {
        type: Object as PropType<{
            showing: string;
            of: string;
            items: string;
            firstPage: string;
            previousPage: string;
            nextPage: string;
            lastPage: string;
            first: string;
            previous: string;
            next: string;
            last: string;
            errorTitle: string;
            loadingText: string;
            selectAction: string;
            executeAction: string;
        }>,
        default: () => ({
            showing: 'Showing',
            of: 'of',
            items: 'items',
            firstPage: 'First page',
            previousPage: 'Previous page',
            nextPage: 'Next page',
            lastPage: 'Last page',
            first: 'First',
            previous: 'Previous',
            next: 'Next',
            last: 'Last',
            errorTitle: 'Error loading data',
            loadingText: 'Loading data...',
            selectAction: 'Select action',
            executeAction: 'Execute'
        })
    },
    transformRequestParams: {
        type: Function as PropType<(params: Record<string, any>) => Record<string, any>>,
        default: null
    },
    transformResponseData: {
        type: Function as PropType<(response: any) => any>,
        default: null
    },
    fetchOptions: {
        type: Object,
        default: () => ({})
    },
    autoLoad: {
        type: Boolean,
        default: true
    }
});

const emit = defineEmits([
    'update:selected',
    'fetch-start',
    'fetch-success',
    'fetch-error',
    'sort-change',
    'page-change',
    'search-change',
    'action-execute'
]);

const loading = ref(false);
const error = ref<string | null>(null);
const tableItems = ref<TableItem[]>([]);
const totalItems = ref(0);
const selectedItems = ref<TableItem[]>([]);
const selectedAction = ref('');

const currentPage = ref(props.initialPage);
const limitPerPage = ref(props.initialLimit);
const currentOffset = ref(props.initialOffset);

const sortField = ref(props.initialSortBy);
const sortDirection = ref(props.initialSortDirection.toUpperCase());

const searchQuery = ref(props.initialSearchQuery);
const searchField = ref(props.initialSearchField);

const availableActionsFiltered = computed(() => {
    return props.availableActions.filter(action => {
        if (typeof action.visible === 'function') {
            return action.visible(selectedItems.value);
        }
        return action.visible !== false;
    });
});

const getActionById = (actionId: string) => {
    return props.availableActions.find(action => action.id === actionId) || null;
};

const executeAction = () => {
    if (!selectedAction.value) return;

    const action = getActionById(selectedAction.value);
    if (!action) return;

    if (action.handler) {
        action.handler(selectedItems.value);
    }

    emit('action-execute', {
        actionId: selectedAction.value,
        action: action,
        selectedItems: selectedItems.value
    });

    selectedAction.value = '';
};

watch([currentPage, limitPerPage], () => {
    if (props.isPaginated) {
        calculateOffset();
        fetchData();
    }
});

watch([sortField, sortDirection], () => {
    if (props.enableApiSort) {
        fetchData();
    }
});

const calculateOffset = () => {
    currentOffset.value = (currentPage.value - 1) * limitPerPage.value;
};

const handleSelected = (items: TableItem[]) => {
    selectedItems.value = items;
    emit('update:selected', items);
};

const handleSorting = (field: string, direction: boolean) => {
    sortField.value = field;
    sortDirection.value = direction ? 'DESC' : 'ASC';

    emit('sort-change', {
        field: sortField.value,
        direction: sortDirection.value
    });

    if (!props.enableApiSort && props.enableLocalSort) {
        sortItemsLocally();
    }
};

const sortItemsLocally = () => {
    if (!sortField.value) return;

    tableItems.value.sort((a, b) => {
        const valueA = a[sortField.value];
        const valueB = b[sortField.value];

        if (valueA === undefined || valueA === null) return 1;
        if (valueB === undefined || valueB === null) return -1;

        if (typeof valueA === 'string' && typeof valueB === 'string') {
            return sortDirection.value === 'ASC'
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
        }

        return sortDirection.value === 'ASC'
            ? valueA - valueB
            : valueB - valueA;
    });
};

const handlePageChange = (event: PaginationEvent) => {
    currentPage.value = event.page;
    limitPerPage.value = event.perPage;

    emit('page-change', {
        page: currentPage.value,
        perPage: limitPerPage.value,
        offset: currentOffset.value
    });
};

const handleSearch = () => {
    currentPage.value = 1;

    emit('search-change', {
        query: searchQuery.value,
        field: searchField.value
    });

    fetchData();
};

const getValueByPath = (obj: any, path: string): any => {
    return path.split('.').reduce((prev, curr) =>
        prev && prev[curr] !== undefined ? prev[curr] : null
        , obj);
};

const fetchData = async () => {
    if (!props.apiUrl) return;

    loading.value = true;
    error.value = null;

    emit('fetch-start');

    try {
        let params: Record<string, any> = {
            limit: limitPerPage.value,
            offset: currentOffset.value,
            sortBy: sortField.value,
            sort: sortDirection.value
        };

        if (searchQuery.value) {
            params.search = searchQuery.value;

            if (searchField.value) {
                params.searchField = searchField.value;
            }
        }

        if (props.transformRequestParams) {
            params = props.transformRequestParams(params);
        }

        const urlWithParams = new URL(props.apiUrl, window.location.origin);
        Object.entries(params).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                urlWithParams.searchParams.append(key, value.toString());
            }
        });

        const fetchOpts = {
            method: props.method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            ...props.fetchOptions
        };

        const response = await fetch(urlWithParams.toString(), fetchOpts);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();

        const transformedData = props.transformResponseData
            ? props.transformResponseData(data)
            : data;

        tableItems.value = getValueByPath(transformedData, props.dataPath) || [];
        totalItems.value = getValueByPath(transformedData, props.totalPath) || 0;

        if (props.enableLocalSort && !props.enableApiSort)
            sortItemsLocally();

        emit('fetch-success', {
            data: tableItems.value,
            total: totalItems.value,
            response: transformedData
        });
    } catch (err) {
        console.error('Error fetching data:', err);
        error.value = err instanceof Error ? err.message : 'Unknown error occurred';

        emit('fetch-error', error.value);
    } finally {
        loading.value = false;
    }
};

const reset = () => {
    currentPage.value = props.initialPage;
    limitPerPage.value = props.initialLimit;
    sortField.value = props.initialSortBy;
    sortDirection.value = props.initialSortDirection.toUpperCase();
    searchQuery.value = props.initialSearchQuery;
    searchField.value = props.initialSearchField;
    calculateOffset();
    fetchData();
};

defineExpose({
    fetchData,
    reset,
    currentPage,
    limitPerPage,
    totalItems,
    sortField,
    sortDirection,
    searchQuery,
    searchField,
    selectedItems,
    loading,
    error,
    executeAction,
    selectedAction
});

onMounted(() => {
    if (props.autoLoad) {
        nextTick(() => {
            fetchData();
        });
    }
});
</script>
