<template>
    <component
        :is="buttonType"
        :name="name"
        :type="type"
        class="c-button font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 relative"
        :class="[sizes[size], roundedStyles[rounded], variantStyles[variant], bgColor, textColor, { 'opacity-50': disabled, 'cursor-not-allowed': disabled }]"
        :aria-busy="loading ? true : undefined"
        :disabled="disabled"
        :tabindex="disabled || loading ? -1 : undefined"
        @click="handleClick"
    >
        <slot>Button</slot>
    </component>
</template>

<style>
.c-button {
    position: relative;
    overflow: hidden;
    z-index: 0;
    transition: background-color 0.3s;
}

span.ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
</style>

<script lang="ts" setup>
import { ref, reactive, defineEmits, defineProps } from "vue";

// Emit events
const emit = defineEmits([
    "click",
    "beforeCreate",
    "created",
    "beforeMount",
    "mounted",
    "beforeUpdate",
    "updated",
    "beforeUnmount",
    "unmounted"
]);

// Define props
const props = defineProps({
    type: {
        type: String,
        default: "button" // button|reset|submit
    },
    buttonType: {
        type: String,
        default: "button" // button|anchor
    },
    size: {
        type: String,
        default: "lg" // sm|md|lg|xl|2xl
    },
    rounded: {
        type: String,
        default: "default" // none|default|md|full
    },
    variant: {
        type: String,
        default: "elevated" // elevated|flat|tonal|outlined|text|plain
    },
    bgColor: {
        type: String,
        default: "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
    },
    textColor: {
        type: String,
        default: "text-white"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    }
});

// Data
const sizes = reactive({
    sm: "px-2 py-1 text-xs",
    md: "px-2 py-1 text-sm",
    lg: "px-2.5 py-1.5 text-sm",
    xl: "px-3 py-2 text-sm",
    "2xl": "px-3.5 py-2.5 text-sm"
});

const roundedStyles = reactive({
    none: "rounded-none",
    default: "rounded",
    md: "rounded-md",
    full: "rounded-full"
});

const variantStyles = reactive({
    elevated: "text-black shadow-md", 
    flat: "text-black", 
    tonal: "", 
    outlined: "border border-gray-300 text-black", 
    text: "text-blue-600 hover:underline",
    plain: "bg-transparent text-black"
});

// Methods
function handleClick(event: MouseEvent) {
    if (props.disabled) return;

    emit("click", event);

    const button: HTMLElement | null = event.currentTarget as HTMLElement;

    if (!button) return;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    const left = event.pageX - rect.left - window.scrollX - radius;
    const top = event.pageY - rect.top - window.scrollY - radius;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${left}px`;
    circle.style.top = `${top}px`;
    circle.classList.add("ripple");

    const existingRipple = button.querySelector(".ripple");

    if (existingRipple) existingRipple.remove();
    
    button.appendChild(circle);
}
</script>
