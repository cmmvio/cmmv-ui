<template>
    <div class="c-data-filter">
        <teleport to="body">
            <transition enter-active-class="transition-opacity ease-linear duration-300" enter-from-class="opacity-0"
                enter-to-class="opacity-100" leave-active-class="transition-opacity ease-linear duration-300"
                leave-from-class="opacity-100" leave-to-class="opacity-0">
                <div v-if="mobileFilterOpen" class="fixed inset-0 bg-black bg-opacity-25 z-40"
                    @click="mobileFilterOpen = false"></div>
            </transition>

            <transition enter-active-class="transition ease-in-out duration-300 transform"
                enter-from-class="translate-x-full" enter-to-class="translate-x-0"
                leave-active-class="transition ease-in-out duration-300 transform" leave-from-class="translate-x-0"
                leave-to-class="translate-x-full">
                <div v-if="mobileFilterOpen" class="fixed inset-y-0 right-0 z-40 flex sm:hidden">
                    <div
                        class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                        <div class="flex items-center justify-between px-4">
                            <h2 class="text-lg font-medium text-neutral-900">{{ filterTitle }}</h2>
                            <button type="button"
                                class="rounded-md p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500"
                                @click="mobileFilterOpen = false">
                                <span class="sr-only">Fechar menu</span>
                                <icon-x class="h-6 w-6" />
                            </button>
                        </div>

                        <!-- Mobile Filters -->
                        <div class="mt-4">
                            <div v-for="(section, sectionIndex) in filterable" :key="section.id"
                                class="border-t border-neutral-200 px-4 py-6">
                                <c-accordion :title="section.name" :model-value="mobileOpenSection === section.id"
                                    @update:model-value="toggleMobileAccordion(section.id)">
                                    <div class="space-y-6 pt-6">
                                        <div v-for="(option, optionIdx) in section.options" :key="option.value"
                                            class="flex items-center gap-3">
                                            <c-checkbox :id="`filter-mobile-${section.id}-${optionIdx}`"
                                                :name="`${section.id}[]`" :value="option.value"
                                                :model-value="getIsOptionSelected(section.id, option.value)"
                                                @update:model-value="updateFilter(section.id, option.value, $event)" />
                                            <label :for="`filter-mobile-${section.id}-${optionIdx}`"
                                                class="text-sm text-neutral-500">
                                                {{ option.label }}
                                            </label>
                                        </div>
                                    </div>
                                </c-accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </teleport>

        <section aria-labelledby="filter-heading" class="w-full">
            <div class="border-b border-neutral-200 dark:border-neutral-900 bg-white dark:bg-neutral-800 w-full px-1 py-2 relative z-30 select-none">
                <div
                    class="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 sm:gap-0">
                    <div class="flex items-center gap-4 w-full sm:w-auto">
                        <c-button @click="enableSearchState = !enableSearchState" variant="flat" size="sm" class="p-0 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-700">
                            <icon-magnifying-glass class="w-5 h-5" color="text-neutral-400 dark:text-neutral-500" size="sm" aria-hidden="true" />
                        </c-button>
                    </div>

                    <button v-if="filterable.length > 0" type="button"
                        class="inline-block text-sm font-medium text-neutral-700 hover:text-neutral-900 sm:hidden"
                        @click="mobileFilterOpen = true">
                        {{ filterTitle }}
                    </button>

                    <div v-if="filterable.length > 0" class="hidden sm:block">
                        <div class="flow-root">

                            <div class="flex items-center divide-x divide-neutral-200 dark:divide-neutral-800">
                                <icon-funnel class="w-4 h-4" color="text-neutral-300 dark:text-neutral-500 mr-2" size="sm" aria-hidden="true" />

                                <div v-for="(section, sectionIdx) in filterable" :key="section.id"
                                    class="relative inline-block pl-4 pr-2 text-left" :class="{ 'pl-0': sectionIdx === 0 }">
                                    <button type="button"
                                        class="group inline-flex justify-center text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50"
                                        @click="toggleFilterDropdown(section.id)"
                                        :data-filter-button="section.id"
                                        :ref="el => { if (el) filterButtonRefs[section.id] = el }">
                                        <span>{{ section.name }}</span>
                                        <span v-if="getSelectedCountForSection(section.id) > 0"
                                            class="ml-1.5 rounded bg-neutral-200 dark:bg-neutral-900 px-1.5 py-0.1 text-xs tabular-nums text-neutral-700 dark:text-neutral-200">
                                            {{ getSelectedCountForSection(section.id) }}
                                        </span>
                                        <icon-chevron-down size="sm"
                                            class="ml-2 h-4 w-4 shrink-0" color="text-neutral-400 dark:text-neutral-500" />
                                    </button>

                                    <transition enter-active-class="transition ease-out duration-100"
                                        enter-from-class="transform opacity-0 scale-95"
                                        enter-to-class="transform opacity-100 scale-100"
                                        leave-active-class="transition ease-in duration-75"
                                        leave-from-class="transform opacity-100 scale-100"
                                        leave-to-class="transform opacity-0 scale-95">
                                        <div v-if="openFilterDropdown === section.id"
                                            class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white dark:bg-neutral-900 p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            :data-filter-dropdown="section.id"
                                            :ref="el => { if (el) filterDropdownRefs[section.id] = el }">
                                            <div class="space-y-4">
                                                <div v-for="(option, optionIdx) in section.options" :key="option.value"
                                                    class="flex items-center gap-3">
                                                    <c-checkbox size="sm" :id="`filter-${section.id}-${optionIdx}`"
                                                        :name="`${section.id}[]`" :value="option.value"
                                                        :model-value="getIsOptionSelected(section.id, option.value)"
                                                        @update:model-value="updateFilter(section.id, option.value, $event)" />
                                                    <label :for="`filter-${section.id}-${optionIdx}`"
                                                        class="whitespace-nowrap pr-6 text-xs font-medium text-neutral-900 dark:text-neutral-50">
                                                        {{ option.label }}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="hasAnyActiveFilters" class="bg-neutral-100 dark:bg-neutral-900 px-3 border-b border-neutral-200 dark:border-neutral-800">
                <div class="py-2 sm:flex sm:items-center">
                    <div class="mt-2 sm:mt-0">
                        <div class="-m-1 flex flex-wrap items-center">
                            <span v-for="activeFilter in activeFiltersList"
                                :key="`${activeFilter.section}-${activeFilter.value}`"
                                class="m-1 inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 py-1.5 pl-3 pr-2 text-sm text-neutral-900 dark:text-neutral-50">
                                <span class="text-xs">{{ activeFilter.label }}</span>
                                <button type="button"
                                    class="ml-1 inline-flex f h-4 w-4 shrink-0 rounded-full text-neutral-400 hover:bg-neutral-200 hover:text-neutral-500"
                                    @click="removeFilter(activeFilter.section, activeFilter.value)">
                                    <span class="sr-only">Remover filtro para {{ activeFilter.label }}</span>
                                    <icon-x-mark class="h-2 w-2" color="text-neutral-400 dark:text-neutral-500"
                                        size="sm" />
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <slot name="data-table" :enableSort.sync="enableSort" :enableSearch.sync="enableSearchState"></slot>
        </section>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import IconChevronDown from '@components/icons/IconChevronDown.vue';

const props = defineProps({
    filterable: {
        type: Array,
        default: () => [],
    },
    filterTitle: {
        type: String,
        default: 'Filtros'
    },
    sortOptions: {
        type: Array,
        default: () => [],
    },
    initialSort: {
        type: String,
        default: ''
    },
    enableSearch: {
        type: Boolean,
        default: false
    },
    enableSort: {
        type: Boolean,
        default: true
    },
    searchPlaceholder: {
        type: String,
        default: 'Search...'
    },
    sortLabel: {
        type: String,
        default: 'Sort'
    },
    initialSearch: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['update:filters', 'update:sort', 'update:search']);

const mobileFilterOpen = ref(false);
const mobileOpenSection = ref(null);
const openFilterDropdown = ref(null);
const sortMenuOpen = ref(false);
const searchQuery = ref(props.initialSearch);
const currentSort = ref(props.initialSort);
const enableSearchState = ref(props.enableSearch);
const activeFilters = ref({});
const sortButton = ref(null);
const sortDropdown = ref(null);
const filterButtonRefs = ref({});
const filterDropdownRefs = ref({});

const hasAnyActiveFilters = computed(() => {
    return Object.keys(activeFilters.value).some(sectionId =>
        Array.isArray(activeFilters.value[sectionId]) &&
        activeFilters.value[sectionId].length > 0
    );
});

const activeFiltersList = computed(() => {
    const list = [];

    Object.keys(activeFilters.value).forEach(sectionId => {
        if (!Array.isArray(activeFilters.value[sectionId])) return;

        const section = props.filterable.find(f => f.id === sectionId);
        if (!section) return;

        activeFilters.value[sectionId].forEach(value => {
            const option = section.options.find(o => o.value === value);
            if (option) {
                list.push({
                    section: sectionId,
                    value: value,
                    label: option.label
                });
            }
        });
    });

    return list;
});

const toggleMobileAccordion = (sectionId) => {
    mobileOpenSection.value = mobileOpenSection.value === sectionId ? null : sectionId;
};

const toggleFilterDropdown = (sectionId) => {
    if (openFilterDropdown.value === sectionId) {
        openFilterDropdown.value = null;
    } else {
        openFilterDropdown.value = sectionId;
    }
};

const toggleSortMenu = () => {
    sortMenuOpen.value = !sortMenuOpen.value;
};

const selectSortOption = (option) => {
    currentSort.value = option.value;
    sortMenuOpen.value = false;
    emitFilterChange();
};

const getIsOptionSelected = (sectionId, value) => {
    return Array.isArray(activeFilters.value[sectionId]) &&
        activeFilters.value[sectionId].includes(value);
};

const updateFilter = (sectionId, value, checked) => {
    if (!activeFilters.value[sectionId])
        activeFilters.value[sectionId] = [];

    if (checked) {
        if (!activeFilters.value[sectionId].includes(value))
            activeFilters.value[sectionId].push(value);
    } else {
        activeFilters.value[sectionId] = activeFilters.value[sectionId].filter(v => v !== value);
    }

    emitFilterChange();
};

const removeFilter = (sectionId, value) => {
    if (Array.isArray(activeFilters.value[sectionId])) {
        activeFilters.value[sectionId] = activeFilters.value[sectionId].filter(v => v !== value);
        emitFilterChange();
    }
};

const getSelectedCountForSection = (sectionId) => {
    return Array.isArray(activeFilters.value[sectionId]) ?
        activeFilters.value[sectionId].length : 0;
};

const emitFilterChange = () => {
    emit('update:filters', { ...activeFilters.value });
    emit('update:sort', currentSort.value);
    emit('update:search', searchQuery.value);
};

const initializeActiveFilters = () => {
    const initialFilters = {};

    props.filterable.forEach(section => {
        initialFilters[section.id] = [];

        section.options.forEach(option => {
            if (option.checked) {
                initialFilters[section.id].push(option.value);
            }
        });
    });

    activeFilters.value = initialFilters;
};

const handleClickOutside = (event) => {
    if (sortMenuOpen.value &&
        sortButton.value &&
        sortDropdown.value &&
        !sortButton.value.contains(event.target) &&
        !sortDropdown.value.contains(event.target)) {
        sortMenuOpen.value = false;
    }

    if (openFilterDropdown.value) {
        const sectionId = openFilterDropdown.value;
        const buttonEl = filterButtonRefs.value[sectionId];
        const dropdownEl = filterDropdownRefs.value[sectionId];

        if (buttonEl &&
            dropdownEl &&
            !buttonEl.contains(event.target) &&
            !dropdownEl.contains(event.target)) {
            openFilterDropdown.value = null;
        }
    }
};

onMounted(() => {
    initializeActiveFilters();
    document.addEventListener('click', handleClickOutside);
    nextTick(emitFilterChange);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

watch(() => props.filterable, () => {
    initializeActiveFilters();
}, { deep: true });

watch(() => props.initialSearch, (newVal) => {
    searchQuery.value = newVal;
});

watch(() => props.initialSort, (newVal) => {
    currentSort.value = newVal;
});
</script>

<style scoped>
.c-data-filter {
    width: 100%;
}
</style>
