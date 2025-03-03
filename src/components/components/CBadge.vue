<template>
    <div
        class="inline-flex items-center justify-center select-none"
        :class="{
            'inline-flex': inline,
            'absolute': floating === true,
            'rounded-full': dot,
        }"
        :style="!inline ? badgeStyle : {}"
    >
        <span
            v-if="!dot"
            class="text-xs flex items-center justify-center px-1 py-0.2"
            :class="[bgColor, textColor, rounded, customClass]"
        >
            <span v-if="!$slots.default">{{ content }}</span>
            <slot v-else></slot>

            <button
                v-if="deletable"
                type="button"
                class="ml-1 flex items-center justify-center focus:outline-none"
                @click.stop="handleDelete"
            >
                <icon-x-mark class="w-4 h-4" size="sm" color="text-current" />
            </button>
        </span>

        <span
            v-else
            class="w-2 h-2 rounded-full"
            :class="[bgColor]"
        ></span>
    </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

const emit = defineEmits(['delete']);

const props = defineProps({
    content: {
        type: String,
        default: "",
    },
    rounded: {
        type: String,
        required: false,
        default: "rounded-full",
    },
    bgColor: {
        type: String,
        default: "bg-red-500",
    },
    textColor: {
        type: String,
        default: "text-white",
    },
    inline: {
        type: Boolean,
        default: false,
    },
    floating: {
        type: Boolean,
        default: false,
    },
    dot: {
        type: Boolean,
        default: false,
    },
    offsetX: {
        type: String,
        default: "0.3rem",
    },
    offsetY: {
        type: String,
        default: "0.3rem",
    },
    customClass: {
        type: String,
        default: "0.3rem",
    },
    deletable: {
        type: Boolean,
        default: false,
    },
});

const badgeStyle = computed(() => ({
    top: props.floating ? props.offsetY : undefined,
    right: props.floating ? props.offsetX : undefined,
}));

const handleDelete = () => {
    emit('delete');
};
</script>
