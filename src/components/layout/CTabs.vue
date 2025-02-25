<template>
    <div>
        <div class="grid grid-cols-1 sm:hidden">
            <select
                v-model="selectedTab"
                class="w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-indigo-600"
            >
                <option v-for="(tab, index) in tabs" :key="tab.id" :value="index">
                    {{ tab.title }}
                </option>
            </select>
        </div>

        <div class="hidden sm:block">
            <nav
                :class="[
                    fullWidth ? 'flex w-full' : 'flex',
                    styleType === 'bar' ? 'isolate divide-x divide-gray-200 rounded-lg shadow' : '',
                    styleType === 'pills' ? 'space-x-2' : '',
                    styleType === 'default' ? 'border-b border-gray-200 space-x-8' : '',
                ]"
                aria-label="Tabs"
            >
                <span
                    v-for="(tab, index) in tabs"
                    :key="tab.id"
                    @click="selectTab(index)"
                    :aria-current="isSelected(index) ? 'page' : undefined"
                    :class="[getTabClass(index), fullWidth ? 'flex-1 group text-center' : '']"
                    class="cursor-pointer select-none"
                >
                    <component :is="tab.icon" v-if="tab.icon" class="w-4 h-4 mr-1 inline-block" />

                    {{ tab.title }}

                    <span v-if="styleType === 'bar'" aria-hidden="true"
                        :class="[isSelected(index) ? barBorderActive : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']">
                    </span>
                </span>
            </nav>
        </div>

        <div v-if="$slots[tabs[selectedTab]?.id]" class="mt-4">
            <slot :name="tabs[selectedTab]?.id"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const selectedTab = ref<number>(0);

const props = defineProps({
    tabs: {
        type: Array as () => { title: string; id: string | number; icon?: object }[],
        required: true,
    },
    styleType: {
        type: String,
        default: "default",
    },
    fullWidth: {
        type: Boolean,
        default: false,
    },
    pillBgColor: {
        type: String,
        default: "bg-transparent hover:bg-neutral-200 text-neutral-700 dark:text-neutral-400",
    },
    pillActiveBgColor: {
        type: String,
        default: "bg-gray-200 text-neutral-900",
    },
    barBorderActive: {
        type: String,
        default: "bg-indigo-500",
    },
    bgColor: {
        type: String,
        default: "bg-white",
    }
});

const isSelected = (index: number) => selectedTab.value === index;
const selectTab = (index: number) => (selectedTab.value = index);

const getTabClass = (index: number) => {
    if (props.styleType === "default") {
        return isSelected(index)
            ? "border-indigo-500 text-indigo-600 whitespace-nowrap border-b-2 px-3 py-4 text-sm font-medium"
            : "border-transparent text-neutral-400 hover:border-gray-300 hover:text-neutral-700 whitespace-nowrap border-b-2 px-3 py-4 text-sm font-medium";
    }

    if (props.styleType === "pills") {
        return isSelected(index)
            ? `rounded-md px-4 py-2 ${props.pillActiveBgColor}`
            : `rounded-md px-4 py-2 ${props.pillBgColor}`;
    }

    if (props.styleType === "bar") {
        return `group relative min-w-0 flex-1 overflow-hidden px-4 py-4 text-center text-sm font-medium focus:z-10
            ${index === 0 ? "rounded-l-lg" : ""}
            ${index === props.tabs.length - 1 ? "rounded-r-lg" : ""}
            ${isSelected(index) ? "text-gray-900" : "text-gray-500 hover:text-gray-700"}
            ${props.bgColor}`;
    }

    return "";
};
</script>
