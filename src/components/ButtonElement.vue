<template>
    <component
        :is="buttonType"
        :name="name"
        :type="type"
        :class="[
            'c-btn',
            {
                
            }
        ]"
        :aria-busy="loading ? true : undefined"
        :disabled="disabled"
        :tabindex="disabled || loading ? -1 : undefined"
        @click="emitClick"
    >
        <slot>Button</slot>
    </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseElement from "@mixins/BaseElement.ts";
import BaseForm from "@mixins/BaseForm";

export default defineComponent({
    name: "ButtonElement",
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
});
</script>
