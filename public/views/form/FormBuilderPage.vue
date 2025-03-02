<template>
    <BaseLayout>
        <h1>Form Builder</h1>

        <p>
            The <code>CFormBuilder (alias: c-form-builder)</code> component in the <code>@cmmv/ui</code> framework
            provides a flexible and customizable form builder interface. It allows developers to create and manage
            forms dynamically, with options for adding fields, sections, and validation rules.
        </p>

        <card-docs>
            <c-form-builder v-model="data" :schema="schema" />
        </card-docs>
    </BaseLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";

const data = ref({

});

const schema = ref({
    name: {
        type: "input",
        label: "Name",
        placeholder: "Enter your name",
        required: true
    },
    email: {
        type: "input",
        label: "Email",
        placeholder: "Enter your email",
        required: true
    },
    birthday: {
        type: "date",
        label: "Birthday",
        placeholder: "Select your birthday",
        required: true,
    },
    country: {
        type: "combobox",
        label: "Country",
        placeholder: "Country",
        required: true,
        remoteDataKeyValue: true,
        items: "/json/countries.json"
    }
});

</script>

<style scoped></style>
