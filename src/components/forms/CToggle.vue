<template>
    <div class="relative inline-flex items-center cursor-pointer select-none text-sm" @click="toggle">
        <span class="relative z-10 flex items-center rounded-full transition-all duration-200"
            :class="[sizes[size].track, isChecked ? trackColor : bgColor, disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer']">
            <span class="absolute rounded-full shadow transition-transform transform border"
                :class="[sizes[size].thumb, thumbColor, thumbBorderColor, isChecked ? sizes[size].thumbTranslate : 'translate-x-0']"></span>
        </span>

        <span v-if="label" :class="['ml-2', sizes[size].label]">
            {{ label }}
        </span>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
    modelValue: {
        type: [Boolean],
        required: false,
        default: undefined,
    },
    checked: {
        type: Boolean,
        required: false,
        default: false,
    },
    label: {
        type: String,
        required: false,
        default: "",
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false,
    },
    size: {
        type: String,
        required: false,
        default: "md",
    },
    bgColor: {
        type: String,
        required: false,
        default: "bg-neutral-300 dark:bg-neutral-400",
    },
    trackColor: {
        type: String,
        required: false,
        default: "bg-blue-600",
    },
    thumbColor: {
        type: String,
        required: false,
        default: "bg-white",
    },
    thumbBorderColor: {
        type: String,
        required: false,
        default: "border-neutral-200",
    },
});

const emit = defineEmits(["update:modelValue"]);
const internalChecked = ref(props.modelValue ?? props.checked);

watch(
    () => props.modelValue,
    (newValue) => {
        if (newValue !== undefined) {
            internalChecked.value = newValue;
        }
    }
);

const isChecked = computed({
    get: () => internalChecked.value,
    set: (value) => {
        emit("update:modelValue", value);
        internalChecked.value = value;
    },
});

const toggle = () => {
    if (!props.disabled)
        isChecked.value = !isChecked.value;
};

const sizes: Record<string, {
    track: string,
    thumb: string,
    thumbTranslate: string,
    label: string
}> = {
    "sm": {
        track: "w-10 h-5",
        thumb: "w-4 h-4",
        thumbTranslate: "translate-x-5",
        label: "text-sm",
    },
    "md": {
        track: "w-12 h-6",
        thumb: "w-6 h-6",
        thumbTranslate: "translate-x-6",
        label: "text-md",
    },
    "lg": {
        track: "w-14 h-7",
        thumb: "w-7 h-7",
        thumbTranslate: "translate-x-7",
        label: "text-lg",
    },
};
</script>
