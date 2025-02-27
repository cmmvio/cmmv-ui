<template>
    <div class="flex items-center gap-1">
        <button
            v-for="index in total"
            :key="index"
            type="button"
            class="focus:outline-none transition"
            :class="[getColor(index)]"
            :disabled="fixed"
            @click="setRating(index)"
        >
            <component
                :is="iconComponent"
                color="color"
                :size="size"
                aria-hidden="true"
            />
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed } from "vue";
import IconStar from "@components/icons/IconStar.vue";

const props = defineProps({
    modelValue: {
        type: Number,
        required: false,
        default: 0
    },
    total: {
        type: Number,
        default: 5
    },
    icon: {
        type: Object,
        default: () => IconStar
    },
    color: {
        type: String,
        default: "text-yellow-300"
    },
    inactiveColor: {
        type: String,
        default: "text-gray-300 dark:text-gray-600"
    },
    fixed: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: "md"
    }
});

const emit = defineEmits(["update:modelValue", "change"]);
const rating = ref(props.modelValue);

const sizeClasses = computed(() => {
    return {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
        xl: "w-10 h-10",
        "2xl": "w-12 h-12"
    }[props.size] || "w-6 h-6";
});

const iconComponent = computed(() => props.icon);

const getColor = (index: number) => {
    return index <= rating.value ? props.color : props.inactiveColor;
};

const setRating = (value: number) => {
    if (!props.fixed) {
        rating.value = value;
        emit("update:modelValue", value);
        emit("change", value);
    }
};
</script>
