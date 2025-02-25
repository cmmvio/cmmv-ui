<template>
    <div :class="class">
        <div
            v-if="!stacked"
            :class="[
                'relative flex items-center justify-center',
                roundedStyles[rounded],
                sizes[size],
                borderColor ? borderColor : '',
                bgColor ? bgColor : 'bg-gray-300',
            ]"
        >
            <img
                v-if="src && !stacked"
                :src="src"
                :alt="alt"
                :class="[
                    'object-cover w-full h-full overflow-hidden z-60',
                    roundedStyles[rounded],
                    imageClass
                ]"
                @error="handleError"
            />

            <slot v-else-if="!stacked">
                <span v-if="icon" :class="['text-white', iconClass]">
                    <component :is="icon" />
                </span>

                <span v-else-if="initials" class="text-white text-sm font-semibold">
                    {{ initials }}
                </span>

                <span v-else class="relative">
                    <svg class="w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                </span>
            </slot>

            <div
                v-if="dotIndicator"
                class="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white z-90"
                :class="dotColors[dotIndicator]"
            ></div>
        </div>

        <div v-else class="flex -space-x-4 rtl:space-x-reverse" >
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    size: { // sm | md | lg | xl | 2xl
        type: String,
        default: "md"
    },
    src: {
        type: String,
        default: ""
    },
    alt: {
        type: String,
        default: "Avatar"
    },
    icon: {
        type: [String, Object],
        default: null
    },
    initials: {
        type: String,
        default: ""
    },
    rounded: { // none | md | full
        type: String,
        default: "full"
    },
    bgColor: {
        type: String,
        default: "bg-gray-300"
    },
    borderColor: {
        type: String,
        default: ""
    },
    class: {
        type: String,
        default: ""
    },
    imageClass: {
        type: String,
        default: ""
    },
    iconClass: {
        type: String,
        default: "text-2xl"
    },
    dotIndicator: { // online | busy | offline | custom
        type: String,
        default: null,
        validator: (value: string) => ["online", "busy", "offline", "custom"].includes(value)
    },
    stacked: {
        type: Boolean,
        default: false
    }
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

const dotColors = computed((): Record<string, string> => ({
    online: "bg-green-500",
    busy: "bg-red-500",
    offline: "bg-gray-400",
    custom: "",
}));

const handleError = () => {
    emit("error");
};
</script>
