<template>
    <div 
        class="overflow-hidden rounded-lg shadow w-full"
        :class="[roundedStyles[rounded], bgColor]"
    >
        <slot/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseElement from "@mixins/BaseElement.ts";

export default defineComponent({
    name: "CCard",

    mixins: [BaseElement],

    data(){
        return {
            "sizes": {
                "sm": "px-2 py-1 text-xs",
                "md": "px-2 py-1 text-sm",
                "lg": "px-2.5 py-1.5 text-sm",
                "xl": "px-3 py-2 text-sm",
                "2xl": "px-3.5 py-2.5 text-sm",
            },
        }
    },

    props: {
        rounded: {
            required: false,
            type: [String],
            default: "default", // none|default|md|full
        },
        bgColor: {
            required: false,
            type: [String],
            default: "bg-white text-slate-800 dark:dark:bg-zinc-800 dark:text-white",
        }
    },
});
</script>
