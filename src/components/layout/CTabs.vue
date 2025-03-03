<template>
    <div>
        <div class="grid grid-cols-1 sm:hidden">
            <select v-model="selectedTab"
                class="w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-neutral-300 focus:outline-indigo-600">
                <option v-for="(tab, index) in tabs" :key="tab.id" :value="index">
                    {{ tab.title }}
                </option>
            </select>
        </div>

        <div class="hidden sm:block">
            <nav :class="[
                fullWidth ? 'flex w-full' : 'flex',
                styleType === 'bar' ? 'isolate divide-x divide-neutral-200 dark:divide-neutral-900 rounded-lg shadow border border-neutral-200 dark:border-neutral-900' : '',
                styleType === 'pills' ? 'space-x-2' : '',
                styleType === 'default' ? 'border-b border-neutral-200 space-x-8' : '',
            ]" aria-label="Tabs">
                <span v-for="(tab, index) in tabs" :key="tab.id" @click="selectTab(index)"
                    :aria-current="isSelected(index) ? 'page' : undefined"
                    :class="[getTabClass(index), fullWidth ? 'flex-1 group text-center' : '']"
                    class="cursor-pointer select-none">
                    <div :class="[tab.icon ? 'flex' : 'flex-1']">
                        <div class="mt-0.5">
                            <component :is="tab.icon"
                                :class="[isSelected(index) ? textActiveColor : textColor, 'w-4 h-4 mr-2 -pt-1 inline-block']"
                                v-if="tab.icon" size="sm" color="currentColor" />
                        </div>

                        <div>

                            {{ tab.title }}

                            <span v-if="styleType === 'bar'" aria-hidden="true"
                                :class="[isSelected(index) ? barBorderActive : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']">
                            </span>
                        </div>
                    </div>
                </span>
            </nav>
        </div>

        <div v-if="$slots[tabs[selectedTab]?.id]" class="mt-4">
            <slot :name="tabs[selectedTab]?.id"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
    textColor: {
        type: String,
        default: "text-neutral-400 hover:text-neutral-700",
    },
    textActiveColor: {
        type: String,
        default: "text-indigo-600",
    },
    fullWidth: {
        type: Boolean,
        default: false,
    },
    pillBgColor: {
        type: String,
        default: "bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-400",
    },
    pillActiveBgColor: {
        type: String,
        default: "bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100",
    },
    barBorderActive: {
        type: String,
        default: "bg-indigo-500",
    },
    bgColor: {
        type: String,
        default: "bg-white dark:bg-neutral-800",
    },
    bgColorActive: {
        type: String,
        default: "bg-white dark:bg-neutral-800",
    }
});

const isSelected = (index: number) => selectedTab.value === index;
const selectTab = (index: number) => (selectedTab.value = index);

const getTabClass = (index: number) => {
    if (props.styleType === "default") {
        return isSelected(index)
            ? "border-indigo-500 whitespace-nowrap border-b-2 px-3 py-4 text-sm font-medium " + props.textActiveColor
            : "border-transparent hover:border-neutral-300 whitespace-nowrap border-b-2 px-3 py-4 text-sm font-medium " + props.textColor;
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
            ${isSelected(index) ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"}
            ${isSelected(index) ? props.bgColorActive : props.bgColor}`;
    }

    return "";
};
</script>
