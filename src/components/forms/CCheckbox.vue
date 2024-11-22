<template>
    <div
        class="relative inline-flex items-center cursor-pointer select-none"
        @click="toggle"
    >
        <!-- Ripple Effect Container -->
        <span class="absolute inset-0 z-0" ref="rippleContainer"></span>

        <span
            class="relative z-10 flex items-center justify-center border rounded transition-all duration-200 overflow-hidden"
            :class="[ 
                sizes[size].box, 
                isChecked ? bgColor : 'bg-white', 
                isChecked ? borderColor : 'border-gray-300',
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer' 
            ]"
        >
            <!-- Check Icon -->
            <svg
                v-if="isChecked && !indeterminate"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                :class="textColor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>

            <!-- Indeterminate Icon -->
            <svg
                v-if="indeterminate"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                :class="textColor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
            >
                <line x1="5" y1="12" x2="19" y2="12" stroke-linecap="round" />
            </svg>
        </span>

        <!-- Label -->
        <span
            v-if="label"
            :class="['ml-2', sizes[size].label]"
        >
            {{ label }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";

export default defineComponent({
    name: "CCheckbox",

    props: {
        modelValue: {
            type: [Boolean, Array],
            required: false,
            default: undefined, // undefined allows usage without v-model
        },
        value: {
            type: [String, Number, Boolean],
            required: false,
            default: null, // Value for array-based v-model
        },
        checked: {
            type: Boolean,
            required: false,
            default: false, // Initial value if not using v-model
        },
        indeterminate: {
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
            default: "text-white",
        },
    },

    emits: ["update:modelValue"],

    setup(props, { emit }) {
        const internalChecked = ref(
            Array.isArray(props.modelValue)
                ? props.modelValue.includes(props.value)
                : props.modelValue ?? props.checked
        );

        const rippleContainer = ref<HTMLElement | null>(null);

        watch(
            () => props.modelValue,
            (newValue) => {
                if (Array.isArray(newValue)) {
                    internalChecked.value = newValue.includes(props.value);
                } else if (newValue !== undefined) {
                    internalChecked.value = newValue;
                }
            }
        );

        const isChecked = computed({
            get: () => internalChecked.value,
            set: (value) => {
                if (Array.isArray(props.modelValue)) {
                    const updatedValue = [...props.modelValue];
                    if (value && !updatedValue.includes(props.value)) {
                        updatedValue.push(props.value);
                    } else if (!value && updatedValue.includes(props.value)) {
                        updatedValue.splice(updatedValue.indexOf(props.value), 1);
                    }
                    emit("update:modelValue", updatedValue);
                } else {
                    emit("update:modelValue", value);
                }
                internalChecked.value = value;
            },
        });

        const toggle = () => {
            if (!props.disabled) {
                isChecked.value = !isChecked.value;
                createRipple();
            }
        };

        const createRipple = () => {
            if (!rippleContainer.value) return;

            const rect = rippleContainer.value.getBoundingClientRect();
            const ripple = document.createElement("span");
            const diameter = rect.width * 0.5; 
            const radius = diameter / 2;

            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${radius}px`;
            ripple.style.top = `${rect.height / 2 - radius}px`;
            ripple.classList.add("ripple");

            rippleContainer.value.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 500);
        };

        const sizes = {
            sm: { box: "w-4 h-4 border-2", label: "text-sm" },
            md: { box: "w-5 h-5 border-2", label: "text-base" },
            lg: { box: "w-6 h-6 border-2", label: "text-lg" },
        };

        return { isChecked, toggle, sizes, rippleContainer };
    },
});
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
        transform: scale(0.8);
        opacity: 0;
    }
}
</style>
