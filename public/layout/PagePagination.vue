<template>
    <aside class="flex mb-8 font-medium leading-6" aria-label="Previous and next page navigation">
        <a
            :href="previousLink"
            class="flex items-center justify-center mr-8 text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            v-if="previousLink"
        >
            <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"></path>
            </svg>

            {{ previous }}
        </a>

        <a
            :href="nextLink"
            class="flex items-center justify-center ml-auto text-right text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            v-if="nextLink"
        >
            {{ next }}

            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
            </svg>
        </a>
    </aside>

    <Newsletter />
</template>

<script setup>
import { defineProps } from "vue";
import Newsletter from "./Newsletter.vue";

const props = defineProps({
    previous: {
        type: String,
        required: true
    },
    previousLink: {
        type: String,
        required: true
    },
    next: {
        type: String,
        required: true
    },
    nextLink: {
        type: String,
        required: true
    }
});
</script>
