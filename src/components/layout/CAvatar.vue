<template>
    <div :class="class">
        <div
            :class="[
                'relative flex items-center justify-center overflow-hidden',
                roundedStyles[rounded],
                sizes[size],
                borderColor ? borderColor : '',
                bgColor ? bgColor : 'bg-gray-300',
            ]"
        >
            <img
                v-if="src"
                :src="src"
                :alt="alt"
                :class="['object-cover w-full h-full', imageClass]"
                @error="handleError"
            />

            <slot v-else>
                <span v-if="icon" :class="['text-white', iconClass]">
                    <component :is="icon" />
                </span>
                <span v-else class="text-white text-sm font-semibold">
                    {{ initials }}
                </span>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    size: {
        type: String,
        default: "md", // sm | md | lg | xl | 2xl
        required: false,
    },
    src: {
        type: String,
        required: false,
        default: "",
    },
    alt: {
        type: String,
        required: false,
        default: "Avatar",
    },
    icon: {
        type: [String, Object],
        required: false,
        default: null,
    },
    initials: {
        type: String,
        required: false,
        default: "",
    },
    rounded: {
        type: String,
        required: false,
        default: "full", // none | md | full
    },
    bgColor: {
        type: String,
        required: false,
        default: "bg-gray-300",
    },
    borderColor: {
        type: String,
        required: false,
        default: "",
    },
    class: {
        type: String,
        required: false,
        default: "",
    },
    imageClass: {
        type: String,
        required: false,
        default: "",
    },
    iconClass: {
        type: String,
        required: false,
        default: "text-2xl",
    },
});

const emit = defineEmits(["error"]);

const sizes = computed((): Record<string, string> => ({
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
    "2xl": "w-24 h-24",
}));

const roundedStyles = computed((): Record<string, string> => ({
    none: "rounded-none",
    md: "rounded-md",
    full: "rounded-full",
}));

const handleError = () => {
    emit("error");
};
</script>
