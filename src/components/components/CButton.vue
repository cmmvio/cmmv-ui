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

<script lang="ts">
import { defineComponent } from 'vue';
import BaseElement from "@mixins/BaseElement.ts";
import BaseForm from "@mixins/BaseForm";

export default defineComponent({
    name: "CButton",

    mixins: [BaseElement, BaseForm],

    emits: [
        "click",
        "beforeCreate",
        "created",
        "beforeMount",
        "mounted",
        "beforeUpdate",
        "updated",
        "beforeUnmount",
        "unmounted"
    ],

    data(){
        return {
            "sizes": {
                "sm": "px-2 py-1 text-xs",
                "md": "px-2 py-1 text-sm",
                "lg": "px-2.5 py-1.5 text-sm",
                "xl": "px-3 py-2 text-sm",
                "2xl": "px-3.5 py-2.5 text-sm",
            },
            variantStyles: {
                elevated: "text-black shadow-md", 
                flat: "text-black hover:bg-gray-100", 
                tonal: "", 
                outlined: "border border-gray-300 text-black hover:bg-gray-100", 
                text: "text-blue-600 hover:underline",
                plain: "bg-transparent text-black hover:bg-gray-50",
            },
        }
    },

    props: {
        type: {
            required: false,
            type: [String],
            default: "button", // button|reset|submit
        },
        buttonType: {
            required: false,
            type: [String],
            default: "button", // button|anchor
        },
        size: {
            required: false,
            type: [String],
            default: "lg", // sm|md|lg|xl|2xl
        },
        rounded: {
            required: false,
            type: [String],
            default: "default", // none|default|md|full
        },
        variant: {
            required: false,
            type: [String],
            default: "elevated", // elevated|flat|tonal|outlined|text|plain
        },
        bgColor: {
            required: false,
            type: [String],
            default: "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600",
        },
        textColor: {
            required: false,
            type: [String],
            default: "text-white",
        }
    },

    methods: {
        handleClick(event: MouseEvent) {
            if (this.disabled) return;

            this.$emit("click", event);

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

            if (existingRipple) 
                existingRipple.remove();
            
            button.appendChild(circle);
        },
    }
});
</script>
