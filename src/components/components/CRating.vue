<template>
    <div class="flex items-center gap-1">
        <button v-for="index in total" :key="index" type="button" class="focus:outline-none transition relative"
            :class="[getColor(index)]" :disabled="fixed" @click="setRating(index)"
            @mouseover="hoverRating = fixed ? rating : index" @mouseleave="hoverRating = 0">
            <component :is="iconComponent" color="color" :size="size" aria-hidden="true" />

            <div v-if="showPartialIcon(index)" class="absolute top-0 left-0 overflow-hidden"
                :style="{ width: `${getPartialWidth(index)}%` }">
                <component :is="iconComponent" :color="props.color" :size="size" aria-hidden="true" />
            </div>
        </button>

        <span v-if="showValue" class="ml-2 text-sm font-medium">
            {{ displayValue }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed, watch } from "vue";
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
        default: "text-neutral-300 dark:text-neutral-600"
    },
    fixed: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: "md"
    },
    precision: {
        type: Number,
        default: 0.5,
        validator: (value: number) => [0.1, 0.25, 0.5, 1].includes(value)
    },
    showValue: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["update:modelValue", "change"]);
const rating = ref(props.modelValue);
const hoverRating = ref(0);

watch(() => props.modelValue, (newValue) => {
    rating.value = newValue;
});

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

const displayValue = computed(() => {
    return rating.value.toFixed(props.precision < 1 ? 1 : 0);
});

const getColor = (index: number) => {
    const activeRating = hoverRating.value || rating.value;

    if (index <= Math.floor(activeRating))
        return props.color;

    if (index === Math.ceil(activeRating) && activeRating % 1 !== 0)
        return props.inactiveColor;

    return props.inactiveColor;
};

const showPartialIcon = (index: number) => {
    const activeRating = hoverRating.value || rating.value;
    return index === Math.ceil(activeRating) && activeRating % 1 !== 0;
};

const getPartialWidth = (index: number) => {
    const activeRating = hoverRating.value || rating.value;

    if (index === Math.ceil(activeRating))
        return (activeRating % 1) * 100;

    return 0;
};

const setRating = (value: number) => {
    if (!props.fixed) {
        if (Math.ceil(rating.value) === value) {
            if (rating.value === value)
                rating.value = value - (1 - props.precision);
            else
                rating.value = value;
        } else {
            rating.value = value;
        }

        emit("update:modelValue", rating.value);
        emit("change", rating.value);
    }
};
</script>

<style scoped>
.relative {
    position: relative;
}
</style>
