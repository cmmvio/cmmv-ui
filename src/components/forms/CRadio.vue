<template>
    <div
        class="relative inline-flex items-center cursor-pointer select-none"
        @click="toggle"
    >
        <!-- Ripple Effect Container -->
        <span class="absolute inset-0 z-0" ref="rippleContainer"></span>

        <!-- Radio Circle -->
        <div
            class="relative z-10 flex items-center justify-center border rounded-full transition-all duration-200 overflow-hidden text-center"
            :class="[ 
                sizes[size].box,                 
                isChecked ? borderColor : 'border-gray-300',
                disabled ? 'border-gray-600' : borderColor,                
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer' 
            ]"
        >
            <!-- Checked Circle -->
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

        <!-- Label -->
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

// Props
const props = defineProps({
    modelValue: {
        type: [String, Number],
        required: false,
        default: undefined, // undefined allows usage without v-model
    },
    value: {
        type: [String, Number],
        required: true, // Value to identify the radio button
    },
    checked: {
        type: Boolean,
        required: false,
        default: false, // Initial state without v-model
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
        default: "md", // sm | md | lg
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
        default: "text-white", // Fill color for the center when selected
    },
});

// Emit
const emit = defineEmits(["update:modelValue"]);

// Internal state
const internalModel = ref(props.checked ? props.value : undefined);

// Computed for checked state
const isChecked = computed(() => {
    return props.modelValue !== undefined
        ? props.modelValue === props.value
        : internalModel.value === props.value;
});

// Ripple reference
const rippleContainer = ref<HTMLElement | null>(null);

// Handlers
const toggle = () => {
    if (props.disabled) return;

    // Ripple effect
    createRipple();

    if (props.modelValue !== undefined) {
        // Emit for v-model
        emit("update:modelValue", props.value);
    } else {
        // Update internal model
        internalModel.value = props.value;
    }
};

const createRipple = () => {
    if (!rippleContainer.value) return;

    const rect = rippleContainer.value.getBoundingClientRect();
    const ripple = document.createElement("span");
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${rect.width / 2 - radius}px`;
    ripple.style.top = `${rect.height / 2 - radius}px`;
    ripple.classList.add("ripple");

    rippleContainer.value.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 500);
};

// Sizes
const sizes = {
    sm: { box: "w-4 h-4 border-2", label: "text-sm" },
    md: { box: "w-5 h-5 border-2", label: "text-base" },
    lg: { box: "w-6 h-6 border-2", label: "text-lg" },
};
</script>

<style scoped>
.ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
    transform: scale(0);
    animation: ripple-animation 0.4s ease-out;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
</style>
