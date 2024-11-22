<template>
    <c-tooltip
        :content="tooltipContent" 
        :position="tooltipPosition" 
    >
        <c-button 
            rounded="full" 
            size="lg" 
            variant="flat"
            bgColor="bg-zinc-800 hover:bg-zinc-900" 
            textColor="text-white" 
            class=""
        >
            <slot />
        </c-button>
    </c-tooltip>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    props: {
        tooltipContent: {
            type: String,
            required: true
        },
        tooltipPosition: {
            type: String,
            required: true,
            default: "top"
        },
    }
})
</script>