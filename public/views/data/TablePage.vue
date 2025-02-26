<template>
    <BaseLayout>
        <h1>Table</h1>

        <p>
            The <code>CTable</code> (alias: <code>c-table</code>) component in the <code>@cmmv/ui</code> framework allows the creation of dynamic and customizable tables. It supports custom styling, rounded borders, and theme-based colors for better adaptation to the application's design.
        </p>

        <table-docs>
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
        </table-docs>

        <br/>

        <!-- Basic Example -->
        <h3>Basic Example</h3>

        <p>
            The Basic Example demonstrates how to use the <code>CTable</code> component with a simple dataset. It defines a list of column headers and an array of items, where each row corresponds to an object in the <code>tableData</code> array. This example shows how easy it is to render structured data dynamically without manually creating table rows and columns.
        </p>

        <c-card variant="flat" class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
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

        <c-card variant="flat" class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
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
        &lt;pre&gt;&#123;&#123; selectedItems &#125;&#125;&lt;/pre&gt;
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

        <h3>Customizing Table Columns</h3>

        <p>
            The <code>CTable</code> component allows developers to customize how specific fields are rendered in the table using Vue slots.
            This is useful when you want to format dates, apply styles based on the field value, or display icons, badges, and other UI elements dynamically.
        </p>

        <p>
            In the example below, we format the <code>createAt</code> field to display a localized date and time instead of a timestamp.
            Additionally, the <code>active</code> field is rendered using badges to indicate whether the user is active or inactive.
        </p>

        <c-card variant="flat" class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <c-table
                :items="itemsWithCreateAt"
                :headers="headersWithCreateAt"
                @update:selected="onSelectionChange"
            >
                <template #createAt="{ item }">
                    {{ formatDate(item.createAt) }}
                </template>

                <template #active="{ item }">
                    <c-badge
                        bgColor="bg-green-100 dark:bg-green-900"
                        textColor="text-green-800 dark:text-green-300"
                        rounded="rounded-md"
                        customClass="me-2 px-2.5 py-0.5"
                        v-if="item.active"
                    >
                        Active
                    </c-badge>

                    <c-badge
                        bgColor="bg-red-100 dark:bg-red-900"
                        textColor="text-red-800 dark:text-red-300"
                        rounded="rounded-md"
                        customClass="me-2 px-2.5 py-0.5"
                        v-else
                    >
                        Inactive
                    </c-badge>
                </template>
            </c-table>
        </c-card>

        <pre>
    <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-table
        :headers="headersWithCreateAt"
        :items="itemsWithCreateAt"
        @update:selected="onSelectionChange"
    &gt;
        &lt;!-- Custom Date Formatting --&gt;
        &lt;template #createAt="{ item }"&gt;
            &#123;&#123; formatDate(item.createAt) &#125;&#125;
        &lt;/template&gt;

        &lt;!-- Custom Status Badge --&gt;
        &lt;template #active="{ item }"&gt;
            &lt;c-badge
                bgColor="bg-green-100 dark:bg-green-900"
                textColor="text-green-800 dark:text-green-300"
                rounded="rounded-md"
                customClass="me-2 px-2.5 py-0.5"
                v-if="item.active"
            &gt;
                Active
            &lt;/c-badge&gt;

            &lt;c-badge
                bgColor="bg-red-100 dark:bg-red-900"
                textColor="text-red-800 dark:text-red-300"
                rounded="rounded-md"
                customClass="me-2 px-2.5 py-0.5"
                v-else
            &gt;
                Inactive
            &lt;/c-badge&gt;
        &lt;/template&gt;
    &lt;/c-table&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const headersWithCreateAt = ref([
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Created At", key: "createAt" },
    { label: "Status", key: "active" }
]);

const itemsWithCreateAt = ref([
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        createAt: 1740539034483,
        active: true
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        createAt: 1740539045274,
        active: false
    },
    {
        id: 3,
        name: "Charlie Brown",
        email: "charlie@example.com",
        createAt: 1740539063385,
        active: true
    }
]);

const onSelectionChange = (selected) => {
    console.log("Selected Items:", selected);
};

const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";

    try {
        return new Intl.DateTimeFormat(navigator.language, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        }).format(new Date(timestamp));
    } catch (error) {
        return "Invalid Date";
    }
};
&lt;/script&gt;
</code>
</pre>

        <PagePagination
            previous="Pagination"
            previousLink="/pagination"
            next="Accordion"
            nextLink="/accordion"
        />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const headers = ref([
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" }
]);

const headersWithCreateAt = ref([
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Create At", key: "createAt" },
    { label: "Status", key: "active" }
]);

const items = ref([
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
]);

const itemsWithCreateAt = ref([
    { id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        createAt: 1740539034483,
        active: true
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        createAt: 1740539045274,
        active: false
    },
    {
        id: 3,
        name: "Charlie Brown",
        email: "charlie@example.com",
        createAt: 1740539063385,
        active: true
    }
]);

const selectedItems = ref([]);

const onSelectionChange = (selected) => {
    selectedItems.value = selected;
};

const formatDate = (dateString) => {
    if (!dateString) return "N/A";

    try {
        return new Intl.DateTimeFormat(navigator.language, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        }).format(new Date(dateString));
    } catch (error) {
        return "Invalid Date";
    }
};
</script>
