<template>
    <div class="max-w-[8rem]">
        <label :for="id" class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
            {{ label }}
        </label>
        <div class="relative">
            <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                <svg class="w-4 h-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                        clip-rule="evenodd" />
                </svg>
            </div>

            <input :id="id" type="time"
                class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-900 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :value="modelValue" :min="minTime" :max="maxTime" :disabled="disabled" @input="updateValue($event)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    modelValue: {
        type: String,
        default: "00:00"
    },
    label: {
        type: String,
        default: "Select time:"
    },
    id: {
        type: String,
        default: "timepicker"
    },
    minTime: {
        type: String,
        default: "09:00"
    },
    maxTime: {
        type: String,
        default: "18:00"
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit("update:modelValue", target.value);
};
</script>
