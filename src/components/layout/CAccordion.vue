<template>
    <div v-bind="$attrs">
        <div
            :class="[
                flush ? 'border-none' : borderColor,
                flush ? '' : 'rounded-lg',
                'border w-full overflow-x-auto c-accordion'
            ]"
        >
            <div
                v-for="(item, index) in items"
                :key="index"
                :class="flush ? 'border-none' : borderColor"
            >
                <button
                    class="w-full text-left px-4 py-3 flex border-b justify-between items-center"
                    :class="[
                        bgColor,
                        headerColor,
                        borderColor,
                        textColor,
                        { 'cursor-not-allowed opacity-50': disabled }
                    ]"
                    @click="toggle(index)"
                    :aria-expanded="isOpen(index)"
                >
                    <span class="text-sm">{{ item.title }}</span>
                    <span :class="['transition-transform', arrowStyles[arrowStyle], { 'rotate-180': isOpen(index) }]">
                        <IconChevronDown :class="[textColor]" />
                    </span>
                </button>

                <div
                    v-show="isOpen(index)"
                    class="px-4 py-3 transition-all c-accordion-content"
                    :class="[textColor, bgColorContent]"
                >
                    <slot :name="`content-${index}`">
                        {{ item.content }}
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.c-accordion button:last-child {
    border-bottom: none;
}

.c-accordion-content:last-child {
    border-bottom: none;
}
</style>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import IconChevronDown from "@components/icons/IconChevronDown.vue";

const props = defineProps({
    items: {
        type: Array as () => { title: string; content: string }[],
        required: true,
    },
    alwaysOpen: {
        type: Boolean,
        default: false,
    },
    flush: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    bgColor: {
        type: String,
        default: "bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700",
    },
    bgColorContent: {
        type: String,
        default: "bg-neutral-100 dark:bg-neutral-900",
    },
    headerColor: {
        type: String,
        default: "bg-neutral-100 dark:bg-neutral-700",
    },
    borderColor: {
        type: String,
        default: "border-neutral-300 dark:border-neutral-900",
    },
    textColor: {
        type: String,
        default: "text-neutral-900 dark:text-white",
    },
    arrowStyle: {
        type: String,
        default: "default",
    },
    class: {
        type: String,
        required: false,
        default: "",
    },
});

const openPanels = ref<number[]>([]);

const toggle = (index: number) => {
    if (props.disabled) return;

    if (props.alwaysOpen) {
        if (isOpen(index)) {
            openPanels.value = openPanels.value.filter(i => i !== index);
        } else {
            openPanels.value.push(index);
        }
    } else {
        openPanels.value = isOpen(index) ? [] : [index];
    }
};

const isOpen = (index: number) => {
    return openPanels.value.includes(index);
};

const arrowStyles: Record<string, string> = {
    default: "transform transition-transform duration-300",
    chevron: "transform transition-transform duration-300",
    plus: "transition-transform rotate-0",
};
</script>
