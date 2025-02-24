<template>
    <BaseLayout>
        <h1>Table</h1>

        <p>
            The <code>CTable</code> (alias: <code>c-table</code>) component in the <code>@cmmv/ui</code> framework allows the creation of dynamic and customizable tables. It supports custom styling, rounded borders, and theme-based colors for better adaptation to the application's design.
        </p>

        <table class="w-full text-left border-collapse border-0 doc-table">
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Prop</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Type</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Default</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">headers</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Defines the table headers. Each item in the array must have a <code>label</code> (visible name) and a <code>key</code> (used to map data).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">items</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Defines the data for the table rows. Each object must match the <code>key</code> values specified in the headers.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Controls the border radius of the table. Options: <code>none</code>, <code>default</code>, <code>md</code>, <code>full</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-white dark:bg-neutral-800"</td>
                    <td class="border-b px-4 py-2">Sets the background color of the table.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgHeaderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-white dark:bg-neutral-900"</td>
                    <td class="border-b px-4 py-2">Sets the background color of the table header.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">borderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"border-neutral-300 dark:border-neutral-900"</td>
                    <td class="border-b px-4 py-2">Defines the border color for table elements.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text-black dark:text-white"</td>
                    <td class="border-b px-4 py-2">Defines the text color for the table.</td>
                </tr>
            </tbody>
        </table>

        <!-- Basic Example -->
        <h3>Basic Example</h3>

        <p>
            The Basic Example demonstrates how to use the <code>CTable</code> component with a simple dataset. It defines a list of column headers and an array of items, where each row corresponds to an object in the <code>tableData</code> array. This example shows how easy it is to render structured data dynamically without manually creating table rows and columns.
        </p>

        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <c-table
                :items="items"
                :headers="headers"
            ></c-table>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-table
        :headers=&quot;tableHeaders&quot;
        :items=&quot;tableData&quot;
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const tableHeaders = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" }
];

const tableData = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
];
&lt;/script&gt;</code>
        </pre>

        <h3>Checked</h3>

        <p>
            The <code>checked</code> property allows users to select multiple rows using checkboxes. The selected items can be retrieved using <code>@update:selected</code> event, which emits an array of selected rows.
        </p>

        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <c-table
                :items="items"
                :headers="headers"
                checked
                @update:selected="onSelectionChange"
            ></c-table>

            <div class="text-center">
                <p>Selected Items:</p>
                {{ selectedItems }}
            </div>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-table
        :headers="tableHeaders"
        :items="tableData"
        checked
        @update:selected="onSelectionChange"
    /&gt;

    &lt;div&gt;
        Selected Items:
        &lt;pre&gt;{{ selectedItems }}&lt;/pre&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const tableHeaders = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" }
];

const tableData = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
];

const selectedItems = ref([]);

const onSelectionChange = (selected) => {
    selectedItems.value = selected;
};
&lt;/script&gt;</code>
        </pre>
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";

const headers = ref([
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" }
]);

const items = ref([
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
]);

const selectedItems = ref([]);

const onSelectionChange = (selected) => {
    selectedItems.value = selected;
};
</script>
