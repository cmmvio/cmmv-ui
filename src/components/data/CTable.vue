<template>
    <div :class="[
        roundedStyles[rounded],
        shadow,
        borderColor,
        'overflow-x-auto w-full relative border c-table'
    ]">
        <table :class="[
            textColor,
            'border-none table-auto m-0 w-full'
        ]">
            <caption
                v-if="$slots.caption"
                :class="[bgColor, 'p-5 text-lg font-semibold text-left rtl:text-right']"
            >
                <slot name="caption"></slot>
            </caption>

            <thead :class="[bgHeaderColor]">
                <tr>
                    <th
                        v-if="checked"
                        :class="[
                            textColor,,
                            bgHeaderColor,
                            borderColor,
                            'border-b p-3'
                        ]"
                    >
                        <c-checkbox
                            v-model="selectAll"
                            :indeterminate="items.length != selectedItems.length && selectedItems.length > 0"
                            :checked="items.length === selectedItems.length && selectedItems.length > 0"
                            size="sm"
                            ignoreClick
                            @click="toggleSelectAll"
                        />
                    </th>

                    <th
                        :class="[
                            textColor,
                            bgHeaderColor,
                            borderColor,
                            'border-b p-4'
                        ]"
                        v-for="item in headers"
                    >{{ item.label }}</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(item) in items"
                    :class="[bgColor]"
                >
                    <td
                        v-if="checked"
                        :class="[
                            textColor,
                            borderColor,
                            'p-3 w-1'
                        ]"
                    >
                        <c-checkbox
                            v-model="selectedItems"
                            size="sm"
                            :value="item"
                        />
                    </td>

                    <td
                        :class="[
                            textColor,
                            borderColor,
                            'whitespace-nowrap'
                        ]"
                        v-for="itemHeader in headers"
                    >
                        <span v-if="$slots[itemHeader.key]">
                            <slot :name="itemHeader.key" :item="item"></slot>
                        </span>
                        <span v-else>
                            {{ item[itemHeader.key] }}
                        </span>
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
</style>

<script setup lang="ts">
import {
    defineProps, computed,
    ref, watch
} from "vue";

import type { PropType } from "vue";

interface TableHeader {
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
    bgColor: {
        type: String,
        default: "bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-600",
    },
    bgHeaderColor: {
        type: String,
        default: "bg-white dark:bg-neutral-900",
    },
    borderColor: {
        type: String,
        default: "border-neutral-300 dark:border-neutral-900",
    },
    textColor: {
        type: String,
        default: "text-black dark:text-white",
    },
});

const selectedItems = ref<TableItem[]>([]);
const selectAll = ref(false);
const emit = defineEmits(["update:selected"]);

const toggleSelectAll = () => {
    if(selectedItems.value.length > 0){
        selectedItems.value = [];
        selectAll.value = false;
    }
    else{
        selectedItems.value = [...props.items];
        selectAll.value = true;
    }
};

watch(selectedItems, (newSelection) => {
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

defineExpose({ getSelectedItems });
</script>
