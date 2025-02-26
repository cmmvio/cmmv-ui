<template>
    <div
        :class="['overflow-auto', width, height, rounded]"
    >
        <ul role="list" :class="['divide-y list-none', divideColor]">
            <li
                v-for="(item, index) in modelValue"
                :key="index"
                class='p-0 m-0 flex justify-between gap-x-6 py-5'
            >
                <slot :item="item" :index="index"></slot>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    modelValue: {
        type: Array,
        required: false,
        default: []
    },
    rounded: {
        type: String,
        required: false,
        default: "rounded-md",
    },
    shadow: {
        type: String,
        required: false,
        default: "shadow-md",
    },
    divideColor: {
        type: String,
        required: false,
        default: "divide-neutral-200 dark:divide-neutral-900",
    },
    width: {
        type: String,
        required: false,
        default: "w-full"
    },
    height: {
        type: String,
        required: false,
        default: "h-auto"
    },
});
</script>
