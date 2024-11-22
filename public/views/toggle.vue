
<template>
    <BaseLayout>
        <h1>Toggle</h1>

        <c-toggle label="Switch Button"></c-toggle>
        
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../layout/BaseLayout.vue";

const checked = ref(true);
const selectedOptions = ref([]);
</script>