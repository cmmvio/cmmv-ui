<template>
    <div class="c-dropdown relative w-full ">
        <div class="relative">
            <div v-if="isActive" class="fixed z-40 bg-transparent" @click="closeDropdown"></div>

            <div class="relative flex items-center z-30" @click="toggleDropdown">
                <div v-if="hasIcon" class="absolute inset-y-0 left-0 flex items-center pl-3 z-30">
                    <slot name="icon"></slot>
                </div>

                <div v-if="searchable && !selectedOption" class="absolute z-20 w-full">
                    <input type="text"
                        :placeholder="(isActive || !selectedLabel ? placeholder : '') + (required ? ' *' : '')"
                        v-model="searchQuery"
                        :class="[sizes[size] || sizes['md'], roundedStyles[rounded], variantStyles[variant], bgColor ? bgColor : variantColors[variant], textColor,
                        { 'opacity-50': disabled || isLoading, 'cursor-not-allowed': disabled || isLoading, 'pl-10': hasIcon }, customClass, 'w-full']"
                        class="c-dropdown-field block w-full border shadow-sm pt-3 pb-2 outline-none"
                        :disabled="disabled || isLoading" @click.stop @focus="activateDropdown" @blur="handleBlur" />
                </div>

                <button :id="id" type="button"
                    :class="[sizes[size] || sizes['md'], roundedStyles[rounded], variantStyles[variant], bgColor ? bgColor : variantColors[variant], textColor,
                    { 'opacity-50': disabled || isLoading, 'cursor-not-allowed': disabled || isLoading, 'pl-10': hasIcon, 'invisible': searchable && !selectedOption }, customClass, 'w-full']"
                    class="c-dropdown-field block w-full border shadow-sm pt-2 pb-2 outline-none text-left h-full"
                    :disabled="disabled || isLoading">
                    <span v-if="isLoading" class="flex items-center">
                        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        Loading options...
                    </span>
                    <span v-else-if="$slots.selected && allowCheck">
                        <slot name="selected" :data="selectedOption" :checked="checkedOptions"
                            :count="checkedOptions.length"></slot>
                    </span>
                    <span v-else-if="$slots.selected && selectedLabel">
                        <slot name="selected" :data="selectedOption"></slot>
                    </span>

                    <span v-else-if="allowCheck && checkedOptions.length > 0">
                        <span v-if="checkedOptions.length === 1">{{ checkedOptions[0].label }}</span>
                        <span v-else>{{ checkedOptions.length }} items selected</span>
                    </span>

                    <span v-else-if="selectedLabel">
                        {{ selectedLabel }}
                    </span>

                    <span v-else>
                        {{ placeholder }} <span v-if="required" class="text-red-500">*</span>
                    </span>
                </button>

                <div class="absolute right-0 flex items-center z-30">
                    <button v-if="clearable && selectedOption && !disabled && !isLoading" type="button"
                        class="text-neutral-400 hover:text-neutral-600 flex items-center justify-center h-full"
                        @click.stop="clearSelection">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                            <path fill-rule="evenodd"
                                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>

                    <div class="px-2 transition-transform duration-300 cursor-pointer flex items-center justify-center h-full"
                        :class="[{ 'rotate-180': isActive, 'opacity-50': disabled || isLoading, 'cursor-not-allowed': disabled || isLoading }, sizes[size] || sizes['md']]">
                        <icon-chevron-down class="w-4 h-4 text-neutral-800 dark:text-white" size="sm"
                            aria-hidden="true" />
                    </div>
                </div>
            </div>

            <transition name="fade">
                <div v-if="isActive"
                    class="absolute z-50 w-full bg-white border border-neutral-300 dark:border-neutral-900 dark:bg-neutral-800 mt-2 max-h-60 shadow-lg rounded-md">
                    <div v-if="isLoading" class="flex items-center justify-center p-4 text-neutral-500">
                        <svg class="animate-spin mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        Loading...
                    </div>

                    <div v-else-if="hasError" class="p-4 text-red-500 text-center">
                        <div class="mb-1 font-medium">Error loading options</div>
                        <div class="text-sm">{{ errorMessage }}</div>
                    </div>

                    <div v-else-if="filteredOptions.length === 0" class="p-4 text-neutral-500 text-center">
                        No options available
                    </div>

                    <div :class="[{ 'overflow-auto': filteredOptions.filter(option => option.subitems && option.subitems.length > 0).length <= 0 }, 'max-h-56 relative']"
                        v-else>
                        <ul>
                            <li v-for="(option, index) in filteredOptions" :key="option.value"
                                @click.stop="handleItemClick(option, index)" @mouseenter="handleMouseEnter(index)"
                                @mouseleave="handleMouseLeave(index)" :class="[
                                    'px-4 py-2 cursor-pointer text-sm transition-colors z-60',
                                    'hover:bg-neutral-200 dark:hover:bg-neutral-700',
                                    { 'relative': option.subitems && option.subitems.length > 0 }
                                ]" class="rounded-md">
                                <div class="flex items-center justify-between overflow-hidden rounded-md">
                                    <div class="flex items-center">
                                        <div v-if="allowCheck" class="mr-2" @click.stop>
                                            <c-checkbox :modelValue="option.checked || false"
                                                @update:modelValue="(val) => updateCheckState(option, val)" size="sm" />
                                        </div>
                                        <span v-if="$slots.option">
                                            <slot name="option" :data="option"></slot>
                                        </span>
                                        <span v-else>
                                            {{ option.label }}
                                        </span>
                                    </div>
                                    <icon-chevron-right v-if="option.subitems && option.subitems.length > 0"
                                        class="h-4 w-4 text-neutral-400 dark:text-white" size="sm" />
                                </div>

                                <div v-if="option.subitems && option.subitems.length > 0 && activeSubItem === index"
                                    class="absolute top-0 left-full min-w-[200px] bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-900 rounded-md shadow-md z-70 overflow-auto">
                                    <ul>
                                        <li v-for="subitem in option.subitems" :key="subitem.value"
                                            @click.stop="selectSubItem(subitem, option)"
                                            class="px-4 py-2 cursor-pointer text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors rounded-md">
                                            <div v-if="allowCheck" class="flex items-center">
                                                <div class="mr-2" @click.stop>
                                                    <c-checkbox :modelValue="subitem.checked || false"
                                                        @update:modelValue="(val) => updateCheckState(subitem, val)"
                                                        size="sm" />
                                                </div>
                                                <div v-if="$slots.subitem">
                                                    <slot name="subitem" :data="subitem" :parent="option"></slot>
                                                </div>
                                                <span v-else>{{ subitem.label }}</span>
                                            </div>
                                            <div v-else>
                                                <div v-if="$slots.subitem">
                                                    <slot name="subitem" :data="subitem" :parent="option"></slot>
                                                </div>
                                                <span v-else>{{ subitem.label }}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<style scoped>
.c-dropdown {
    position: relative;
}

.c-dropdown ul {
    list-style: none;
    padding: 0;
    border-radius: 0.375rem;
}

.c-dropdown ul li {
    transition: background-color 0.2s;
}

.c-dropdown-label {
    transform: translate(0, -50%);
    z-index: 1;
    left: 0.75rem;
}

.c-dropdown-label--active {
    transform: translate(0, -2rem) scale(0.85);
    top: 1.3rem;
    left: 0.3rem;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
    transform-origin: center center;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
</style>

<script setup lang="ts">
import { ref, computed, defineExpose, useSlots, defineProps, reactive, watch, nextTick, onMounted } from 'vue';
import type { PropType } from "vue";
import IconChevronDown from '@components/icons/IconChevronDown.vue';
import IconChevronRight from '@components/icons/IconChevronRight.vue';
import CCheckbox from '@components/forms/CCheckbox.vue';

const slots = useSlots();
const hasIcon = computed(() => !!slots.icon);
const isLoading = ref(false);
const hasError = ref(false);
const errorMessage = ref('');

interface SubitemOption {
    value: string | number;
    label: string;
    checked?: boolean;
    parent?: string;
}

interface DropdownOption {
    value: string | number;
    label: string;
    checked?: boolean;
    subitems?: SubitemOption[];
    parent?: string;
}

const props = defineProps({
    modelValue: {
        type: [String, Number],
        required: false,
        default: ""
    },
    options: {
        type: [Array, String] as PropType<DropdownOption[] | string>,
        required: true,
        default: () => []
    },
    label: {
        type: String,
        required: false
    },
    placeholder: {
        type: String,
        required: false,
        default: "Select an option"
    },
    size: {
        type: String,
        default: "md"
    },
    rounded: {
        type: String,
        default: "default"
    },
    variant: {
        type: String,
        default: "default"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    hint: {
        type: String,
        required: false,
        default: null
    },
    hintFixed: {
        type: Boolean,
        default: false
    },
    hiddenHint: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        required: false,
        default: null
    },
    bgColor: {
        type: String,
        required: false,
        default: "bg-white dark:bg-neutral-900"
    },
    textColor: {
        type: String,
        required: false,
        default: ""
    },
    borderColor: {
        type: String,
        required: false,
        default: "focus:ring focus:ring-zinc-700 focus:ring-opacity-50"
    },
    customClass: {
        type: String,
        required: false,
        default: ""
    },
    allowCheck: {
        type: Boolean,
        default: false
    },
    remoteDataPrimaryKey: {
        type: String,
        required: false,
        default: "id"
    },
    remoteDataLabelKey: {
        type: String,
        required: false,
        default: "name"
    },
    remoteDataKeyValue: {
        type: Boolean,
        required: false,
        default: false
    },
    searchable: {
        type: Boolean,
        default: false
    },
    clearable: {
        type: Boolean,
        default: false
    },
    required: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["update:modelValue", "check", "uncheck", "search"]);
const isActive = ref(false);
const selectedOption = ref<any>(null);
const activeSubItem = ref<number | null>(null);
const localOptions = reactive<DropdownOption[]>([]);
const searchQuery = ref('');

const fetchOptionsFromUrl = async (url: string) => {
    isLoading.value = true;
    hasError.value = false;
    errorMessage.value = '';

    try {
        const response = await fetch(url);

        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();

        localOptions.splice(0, localOptions.length);

        if (props.remoteDataKeyValue && typeof data === 'object' && !Array.isArray(data)) {
            Object.entries(data).forEach(([key, value]) => {
                localOptions.push({
                    value: key,
                    label: value as string
                });
            });
        } else if (Array.isArray(data)) {
            data.forEach((item: any) => {
                localOptions.push({
                    value: item[props.remoteDataPrimaryKey],
                    label: item[props.remoteDataLabelKey]
                });
            });
        } else if (typeof data === 'object' && data !== null) {
            const resultsArray = data.results || data.items || data.data;

            if (Array.isArray(resultsArray)) {
                resultsArray.forEach((item: any) => {
                    localOptions.push({
                        value: item[props.remoteDataPrimaryKey],
                        label: item[props.remoteDataLabelKey]
                    });
                });
            }
        }
    } catch (error) {
        hasError.value = true;
        errorMessage.value = error instanceof Error ? error.message : 'Failed to fetch options';
        console.error('Error fetching combobox options:', error);
    } finally {
        isLoading.value = false;
    }
};

watch(() => props.options, (newOptions) => {
    if (typeof newOptions === 'string' && newOptions.trim() !== '') {
        fetchOptionsFromUrl(newOptions);
    } else if (Array.isArray(newOptions)) {
        localOptions.splice(0, localOptions.length);
        if (newOptions && newOptions.length) {
            newOptions.forEach(option => {
                localOptions.push({ ...option });
            });
        }
    }
}, { immediate: true, deep: true });

onMounted(() => {
    if (typeof props.options === 'string' && props.options.trim() !== '') {
        fetchOptionsFromUrl(props.options);
    }
});

const selectedLabel = computed(() => {
    selectedOption.value = localOptions.find((option) => option.value === props.modelValue);

    if (selectedOption.value && props.searchable && !isActive.value) {
        searchQuery.value = selectedOption.value.label;
    }

    return selectedOption.value ? selectedOption.value?.label : "";
});

const filteredOptions = computed(() => {
    if (!searchQuery.value || !props.searchable) {
        return localOptions;
    }

    const query = searchQuery.value.toLowerCase();
    return localOptions.filter(option =>
        option.label.toLowerCase().includes(query) ||
        String(option.value).toLowerCase().includes(query)
    );
});

const checkedOptions = computed(() => {
    const checked: DropdownOption[] = [];

    localOptions.forEach(option => {
        if (option.checked) {
            checked.push(option);
        }

        if (option.subitems) {
            option.subitems.forEach(subitem => {
                if (subitem.checked) {
                    checked.push({ ...subitem, parent: option.label });
                }
            });
        }
    });

    return checked;
});

const toggleDropdown = () => {
    if (!props.disabled) isActive.value = !isActive.value;
};

const activateDropdown = () => {
    if (!props.disabled) isActive.value = true;
};

const closeDropdown = () => {
    isActive.value = false;
    activeSubItem.value = null;

    if (props.searchable && !selectedOption.value) {
        searchQuery.value = '';
    }
};

const handleBlur = () => {
    setTimeout(() => {
        if (!isActive.value) return;

        if (selectedOption.value) {
            searchQuery.value = selectedOption.value.label;
        } else {
            searchQuery.value = '';
        }

        closeDropdown();
    }, 200);
};

const handleItemClick = (option: DropdownOption, index: number) => {
    if (option.subitems && option.subitems.length > 0)
        return;

    selectOption(option);
};

const handleMouseEnter = (index: number) => {
    if (localOptions[index].subitems && localOptions[index].subitems!.length > 0)
        activeSubItem.value = index;
};

const handleMouseLeave = (index: number) => {
    setTimeout(() => {
        if (activeSubItem.value === index)
            activeSubItem.value = null;
    }, 100);
};

const selectOption = (option: DropdownOption) => {
    emit("update:modelValue", option.value);
    if (props.searchable) {
        searchQuery.value = option.label;
    }
    isActive.value = false;
    activeSubItem.value = null;
};

const selectSubItem = (subitem: SubitemOption, parentOption: DropdownOption) => {
    emit("update:modelValue", subitem.value);
    if (props.searchable) {
        searchQuery.value = subitem.label;
    }
    isActive.value = false;
    activeSubItem.value = null;
};

const clearSelection = () => {
    emit("update:modelValue", "");
    searchQuery.value = "";
    selectedOption.value = null;
    isActive.value = false;
};

const updateCheckState = (option: DropdownOption, newValue: boolean) => {
    const optionIndex = localOptions.findIndex(opt => opt.value === option.value);

    if (optionIndex !== -1) {
        localOptions[optionIndex] = {
            ...localOptions[optionIndex],
            checked: newValue
        };
    } else {
        for (let i = 0; i < localOptions.length; i++) {
            if (localOptions[i].subitems) {
                const subItemIndex = localOptions[i].subitems!.findIndex(
                    sub => sub.value === option.value
                );

                if (subItemIndex !== -1) {
                    const newSubitems = [...localOptions[i].subitems!];
                    newSubitems[subItemIndex] = {
                        ...newSubitems[subItemIndex],
                        checked: newValue
                    };

                    localOptions[i] = {
                        ...localOptions[i],
                        subitems: newSubitems
                    };
                    break;
                }
            }
        }
    }

    option.checked = newValue;

    nextTick(() => {
        if (newValue) {
            emit("check", option);
        } else {
            emit("uncheck", option);
        }
    });
};

const toggleCheck = (option: DropdownOption) => {
    const isChecked = !option.checked;
    updateCheckState(option, isChecked);
};

const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-5 py-4 text-base"
};

const roundedStyles = {
    none: "rounded-none",
    default: "rounded-md",
    full: "rounded-full"
};

const variantStyles = {
    default: "border-neutral-300 dark:border-neutral-900",
    outlined: "border-2 border-zinc-700",
    filled: "border-1 border-zinc-900 shadow-md"
};

const variantColors = {
    default: "bg-zinc-200 dark:bg-zinc-900 text-zinc-950 dark:text-white",
    outlined: "bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white",
    filled: "bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-white"
};

const refreshOptions = () => {
    if (typeof props.options === 'string' && props.options.trim() !== '') {
        fetchOptionsFromUrl(props.options);
    }
};

defineExpose({
    value: props.modelValue,
    refresh: refreshOptions,
    isLoading,
    hasError,
    errorMessage,
    searchQuery
});
</script>
