<template>
    <div
        class="relative inline-flex items-center cursor-pointer select-none"
        @click="toggle"
    >
        <div
            class="relative z-10 flex items-center justify-center border rounded-full transition-all duration-200 overflow-hidden text-center"
            :class="[
                sizes[size].box,
                isChecked ? borderColor : 'border-gray-300',
                disabled ? 'border-gray-600' : borderColor,
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
            ]"
        >
            <div
                v-if="isChecked"
                class="absolute inset-0 m-auto rounded-full transition-all duration-200"
                :class="[
                    'scale-75',
                    disabled ? 'bg-gray-600' : bgColor,
                    disabled ? 'text-gray-400' : textColor,
                    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                ]"
            ></div>
        </div>

        <span
            v-if="label"
            :class="['ml-2', sizes[size].label]"
        >
            {{ label }}
        </span>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps, defineEmits } from "vue";

const props = defineProps({
    modelValue: {
        type: [String, Number],
        required: false,
        default: undefined,
    },
    value: {
        type: [String, Number],
        required: true,
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
        default: "bg-blue-600",
    },
    borderColor: {
        type: String,
        required: false,
        default: "border-blue-600",
    },
    textColor: {
        type: String,
        required: false,
        default: "text-white",
    },
});

const emit = defineEmits(["update:modelValue"]);
const internalModel = ref(props.checked ? props.value : undefined);

const isChecked = computed(() => {
    return props.modelValue !== undefined
        ? props.modelValue === props.value
        : internalModel.value === props.value;
});

const toggle = () => {
    if (props.disabled) return;

    if (props.modelValue !== undefined)
        emit("update:modelValue", props.value);
    else
        internalModel.value = props.value;
};

const sizes: Record<string, { box: string, label: string }> = {
    sm: { box: "w-4 h-4 border-2", label: "text-sm" },
    md: { box: "w-5 h-5 border-2", label: "text-base" },
    lg: { box: "w-6 h-6 border-2", label: "text-lg" },
};
</script>
