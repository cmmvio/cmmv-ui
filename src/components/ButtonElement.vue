<template>
    <component
        :is="buttonType"
        :type="type"
        :class="[
            'c-btn',
            {
                // Adicione classes dinâmicas se necessário
            }
        ]"
        @click="emitClick"
    >
        <slot>Button</slot>
    </component>
</template>

<script>
import BaseElement from "@mixins/BaseElement.js";

export default {
    name: "ButtonElement",
    mixins: [BaseElement],
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
    props: {
        type: {
            required: true,
            type: [String],
            default: "button", // button|reset|submit
        },
        buttonType: {
            required: false,
            type: [String],
            default: "button", // button|anchor
        },
    },
    methods: {
        emitClick(event) {
            this.$emit("click", event);
        },
    }
};
</script>
