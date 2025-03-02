<template>
    <div>
        <h1>CFormBuilder</h1>

        <div v-for="item in schema">
            <c-input v-if="item.type === 'input'" :label="item.label" :placeholder="item.placeholder"
                :required="item.required" />
            <c-combobox v-if="item.type === 'combobox'" :label="item.label" :placeholder="item.placeholder"
                :required="item.required" :items="item.items" :remoteDataPrimaryKey="item.remoteDataPrimaryKey"
                :remoteDataLabelKey="item.remoteDataLabelKey" :remoteDataKeyValue="item.remoteDataKeyValue" />
            <c-checkbox v-if="item.type === 'checkbox'" :label="item.label" :placeholder="item.placeholder"
                :required="item.required" />
            <c-radio v-if="item.type === 'radio'" :label="item.label" :placeholder="item.placeholder"
                :required="item.required" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, onMounted } from "vue";
import type { PropType } from "vue";

interface IFormBuilderSchema {
    [key: string]: IFormBuilderSchemaItem;
}

interface IFormBuilderSchemaItem {
    type: string;
    label: string;
    placeholder: string;
    options?: string[];
    required: boolean;
    items?: string | object;
    remoteDataPrimaryKey?: string;
    remoteDataLabelKey?: string;
    remoteDataKeyValue?: boolean;
}

interface IFormBuilderData {
    [key: string]: any;
}

const props = defineProps({
    modelValue: {
        type: Object as PropType<IFormBuilderData>,
        required: true
    },
    schema: {
        type: Object as PropType<IFormBuilderSchema>,
        required: true
    }
});

const emit = defineEmits(["update:modelValue"]);

const data = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    }
});

onMounted(() => {

});
</script>

<style scoped></style>
