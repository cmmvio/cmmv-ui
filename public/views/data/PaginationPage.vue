<template>
    <BaseLayout>
        <h1>Pagination</h1>

        <c-pagination v-model="selected" totalPages="10"></c-pagination>

        <PagePagination
            previous="List"
            previousLink="/list"
            next="Table"
            nextLink="/table"
        />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const selected = ref(0);
</script>
