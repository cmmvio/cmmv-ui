<template>
    <div
        class="rounded-lg w-full m-auto transition duration-200 overflow-hidden"
        :class="[
            roundedStyles[rounded],
            bgColor,
            borderColor,
            textColor,
            variants[variant],
            { 'hover:brightness-110': hover && !disabled, 'opacity-50 cursor-not-allowed': disabled },
        ]"
        :style="{ maxWidth, minWidth, minHeight }"
        :href="href"
        v-bind="href ? { role: 'link', tabindex: 0 } : {}"
    >
        <c-progress-bar
            class="top-0 absolute rounded-t-md"
            indeterminate
            :height="5"
            :fillColor="loadingFillColor"
            v-if="loading"
        />

        <slot name="header">
            <div
                v-if="title || subtitle || closable"
                class="px-4 py-3 pb-0 flex justify-between items-center relative rounded-t-md"
                :class="[bgHeaderColor ? bgHeaderColor : bgColor, bgBorderColor]"
            >
                <div>
                    <h3
                        v-if="title"
                        :class="['font-bold']"
                        class="mt-2"
                    >{{ title }}</h3>

                    <div
                        v-if="subtitle"
                        class="py-2 mb-0"
                        :class="['text-sm', 'opacity-75']"
                    >{{ subtitle }}</div>
                </div>

                <div class="top-2 right-1 absolute">
                    <c-button
                        type="button"
                        rounded="full"
                        size="md"
                        variant="flat"
                        v-if="closable"
                        @click="handleClose"
                        :bgColor="[bgHeaderColor ? bgHeaderColor : bgColor, 'bg-opacity-50 hover:bg-opacity-100']"
                        class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        aria-label="Close"
                    >
                        <IconXMark :class="closeColor ? closeColor : 'text-white'" />
                    </c-button>
                </div>
            </div>
        </slot>

        <slot name="content" class="relative">
            <div
                class="px-4 py-3 w-full"
                :class="textSizes[textSize]"
            >
                <div :class="class">
                    <slot></slot>
                </div>
            </div>
        </slot>

        <slot name="actions">
            <div
                v-if="actions"
                class="flex justify-end space-x-2 px-4 py-3 border-t"
                :class="[bgBorderColor ? bgBorderColor : borderColor]"
            >
                <slot name="action-buttons"></slot>
            </div>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import IconXMark from "@components/icons/IconXMark.vue";

defineProps({
    title: {
        type: String,
        required: false,
        default: "",
    },
    subtitle: {
        type: String,
        required: false,
        default: "",
    },
    actions: {
        type: Boolean,
        required: false,
        default: false,
    },
    loading: {
        type: Boolean,
        required: false,
        default: false,
    },
    rounded: {
        type: String,
        required: false,
        default: "default", // none | default | md | full
    },
    bgColor: {
        type: String,
        required: false,
        default: "bg-white dark:bg-zinc-800",
    },
    bgHeaderColor: {
        type: String,
        required: false,
        default: "",
    },
    bgBorderColor: {
        type: String,
        required: false,
        default: "",
    },
    textColor: {
        type: String,
        required: false,
        default: "text-slate-800 dark:text-white",
    },
    borderColor: {
        type: String,
        required: false,
        default: "border-gray-300 dark:border-gray-600",
    },
    textSize: {
        type: String,
        required: false,
        default: "md", // sm | md | lg | xl | 2xl
    },
    variant: {
        type: String,
        required: false,
        default: "elevated", // elevated | flat | tonal | outlined | text | plain
    },
    href: {
        type: String,
        required: false,
        default: "",
    },
    hover: {
        type: Boolean,
        required: false,
        default: false,
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false,
    },
    minWidth: {
        type: String,
        required: false,
        default: "350px",
    },
    maxWidth: {
        type: String,
        required: false,
        default: "100%",
    },
    minHeight: {
        type: String,
        required: false,
        default: "auto",
    },
    class: {
        type: String,
        required: false,
        default: "",
    },
    loadingFillColor: {
        type: String,
        require: false,
        default: "#03a9f4",
    },
    closable: {
        type: Boolean,
        required: false,
        default: false,
    },
    closeColor: {
        type: String,
        required: false,
        default: "text-black",
    },
});

const roundedStyles = computed((): Record<string, string> => ({
    none: "",
    default: "rounded-lg",
    md: "rounded-md",
    full: "rounded-full",
}));

const variants = computed((): Record<string, string> => ({
    elevated: "shadow-lg",
    flat: "shadow-none",
    tonal: "bg-opacity-75",
    outlined: "border bg-transparent",
    text: "bg-transparent shadow-none",
    plain: "",
}));

const textSizes = computed((): Record<string, string> => ({
    sm: "text-xs",
    md: "text-sm",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
}));

const emit = defineEmits(["close"]);

const handleClose = () => {
    emit("close");
};
</script>

