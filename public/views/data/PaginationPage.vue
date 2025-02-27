<template>
    <BaseLayout>
        <h1>Pagination</h1>

        <p>The <code>CPagination (alias: c-pagination)</code> component provides a flexible pagination interface for navigating through large sets of data. It offers intuitive controls for selecting pages and optionally allows users to choose how many items to display per page.</p>

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
                    <td class="border-b px-4 py-2">modelValue</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">1</td>
                    <td class="border-b px-4 py-2">Current selected page (use v-model).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">totalItems</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Total number of items to be paginated.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">perPage</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">10</td>
                    <td class="border-b px-4 py-2">Number of items displayed per page.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">perPageOptions</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[10, 25, 50, 100]</td>
                    <td class="border-b px-4 py-2">Available options for items per page when using the selector.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">visiblePages</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">5</td>
                    <td class="border-b px-4 py-2">Maximum number of visible page buttons.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showPerPageSelect</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Whether to show the items per page selector.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Basic Example -->
        <h3>Basic Example</h3>

        <p>The simplest implementation of the pagination component requires only the current page and total number of items. By default, it displays 10 items per page.</p>

        <card-docs>
            <c-pagination
                v-model="currentPage"
                :totalItems="100"
            ></c-pagination>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-pagination
        v-model="currentPage"
        :totalItems="100"
    &gt;&lt;/c-pagination&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import CPagination from "@components/components/CPagination.vue";

const currentPage = ref(1);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- With Items Per Page Selector -->
        <h3>With Items Per Page Selector</h3>

        <p>You can enable the items per page selector by setting the <code>showPerPageSelect</code> property to true. This allows users to choose how many items they want to see on each page.</p>

        <card-docs>
            <c-pagination
                v-model="perPageSelectorPage"
                :totalItems="100"
                :perPage="perPage"
                :showPerPageSelect="true"
                @update:perPage="perPage = $event"
            ></c-pagination>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-pagination
        v-model="currentPage"
        :totalItems="100"
        :perPage="perPage"
        :showPerPageSelect="true"
        @update:perPage="perPage = $event"
    &gt;&lt;/c-pagination&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import CPagination from "@components/components/CPagination.vue";

const currentPage = ref(1);
const perPage = ref(10);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Customization -->
        <h3>Customization</h3>

        <p>The pagination component can be customized with different options for items per page and the number of visible page buttons. You can also listen to page change events to perform actions when the user navigates.</p>

        <card-docs>
            <c-pagination
                v-model="customPage"
                :totalItems="500"
                :perPage="customPerPage"
                :perPageOptions="[5, 10, 20, 50, 100]"
                :visiblePages="5"
                :showPerPageSelect="true"
                @update:perPage="customPerPage = $event"
                @pageChange="handlePageChange"
            ></c-pagination>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-pagination
        v-model="customPage"
        :totalItems="500"
        :perPage="customPerPage"
        :perPageOptions="[5, 10, 20, 50, 100]"
        :visiblePages="7"
        :showPerPageSelect="true"
        @update:perPage="customPerPage = $event"
        @pageChange="handlePageChange"
    &gt;&lt;/c-pagination&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import CPagination from "@components/components/CPagination.vue";

const customPage = ref(1);
const customPerPage = ref(20);

const handlePageChange = (event) => {
    console.log(`Page changed to ${event.page}, showing ${event.perPage} items per page`);
    // You can fetch new data here based on the page and perPage values
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Few Pages -->
        <h3>Few Pages</h3>

        <p>When there are only a few pages, the pagination component automatically adjusts its display to show only the necessary page buttons.</p>

        <card-docs>
            <div class="mx-auto">
                <c-pagination
                    v-model="fewPagesCurrentPage"
                    :totalItems="30"
                    :perPage="10"
                ></c-pagination>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-pagination
        v-model="fewPagesCurrentPage"
        :totalItems="30"
        :perPage="10"
    &gt;&lt;/c-pagination&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import CPagination from "@components/components/CPagination.vue";

const fewPagesCurrentPage = ref(1);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Internationalization -->
        <h3>Internationalization</h3>

        <p>The pagination component supports internationalization through text props. You can customize all text labels to support different languages.</p>

        <card-docs>
            <c-pagination
                v-model="i18nPage"
                :totalItems="100"
                :showPerPageSelect="true"
                showingText="Mostrando"
                ofText="de"
                itemsText="itens"
                firstPageText="Primeira página"
                previousPageText="Página anterior"
                nextPageText="Próxima página"
                lastPageText="Última página"
            ></c-pagination>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-pagination
        v-model="currentPage"
        :totalItems="100"
        :showPerPageSelect="true"
        showingText="Mostrando"
        ofText="de"
        itemsText="itens"
        firstPageText="Primeira página"
        previousPageText="Página anterior"
        nextPageText="Próxima página"
        lastPageText="Última página"
    &gt;&lt;/c-pagination&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import CPagination from "@components/components/CPagination.vue";

const currentPage = ref(1);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Internationalization Props -->
        <h3>Internationalization Props</h3>

        <p>The following props can be used to customize the text labels in the pagination component:</p>

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
                    <td class="border-b px-4 py-2">showingText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"Showing"</td>
                    <td class="border-b px-4 py-2">Text displayed before the items per page selector.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">ofText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"of"</td>
                    <td class="border-b px-4 py-2">Text displayed between the selector and total items.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">itemsText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"items"</td>
                    <td class="border-b px-4 py-2">Text displayed after the total items.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">firstPageText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"First page"</td>
                    <td class="border-b px-4 py-2">Title for the first page button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">previousPageText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"Previous page"</td>
                    <td class="border-b px-4 py-2">Title for the previous page button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">nextPageText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"Next page"</td>
                    <td class="border-b px-4 py-2">Title for the next page button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">lastPageText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"Last page"</td>
                    <td class="border-b px-4 py-2">Title for the last page button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">firstText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"First"</td>
                    <td class="border-b px-4 py-2">Screen reader text for the first page button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">previousText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"Previous"</td>
                    <td class="border-b px-4 py-2">Screen reader text for the previous page button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">nextText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"Next"</td>
                    <td class="border-b px-4 py-2">Screen reader text for the next page button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">lastText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"Last"</td>
                    <td class="border-b px-4 py-2">Screen reader text for the last page button.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Events -->
        <h3>Events</h3>

        <p>The pagination component emits several events that you can listen to in order to respond to user interactions.</p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Event</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Parameters</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">update:modelValue</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">Emitted when the current page changes.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">update:perPage</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">Emitted when the number of items per page changes.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">pageChange</td>
                    <td class="border-b px-4 py-2">Object { page, perPage }</td>
                    <td class="border-b px-4 py-2">Emitted when the page or items per page change, providing both values.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Usage with Tables -->
        <h3>Usage with Tables</h3>

        <p>The pagination component is frequently used with tables to navigate through large datasets. Below is an example of how you can integrate pagination with the <code>CTable</code> component:</p>

        <card-docs>
            <div class="w-full">
                <c-table
                    :headers="tableHeaders"
                    :items="tableItems"
                    class="mb-4"
                ></c-table>

                <c-pagination
                    v-model="tablePage"
                    :totalItems="totalTableItems"
                    :perPage="tablePerPage"
                    :showPerPageSelect="true"
                    @update:perPage="onTablePerPageChange"
                    @pageChange="onTablePageChange"
                ></c-pagination>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div&gt;
        &lt;c-table
            :headers="tableHeaders"
            :items="tableItems"
            class="mb-4"
        &gt;&lt;/c-table&gt;

        &lt;c-pagination
            v-model="currentPage"
            :totalItems="totalItems"
            :perPage="itemsPerPage"
            :showPerPageSelect="true"
            @update:perPage="onPerPageChange"
            @pageChange="loadData"
        &gt;&lt;/c-pagination&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted } from 'vue';
import CPagination from "@components/components/CPagination.vue";
import CTable from "@components/data/CTable.vue";

const tableHeaders = ref([
    { label: "ID", key: "id", width: "80px" },
    { label: "Name", key: "name", width: "180px" },
    { label: "Email", key: "email" }
]);

const tableItems = ref([]);
const currentPage = ref(1);
const itemsPerPage = ref(10);
const totalItems = ref(0);

const onPerPageChange = (newPerPage) => {
    itemsPerPage.value = newPerPage;
    loadData({ page: currentPage.value, perPage: newPerPage });
};

const loadData = async ({ page, perPage }) => {
    // Example API call with pagination
    try {
        // In a real application, you would fetch data from an API
        const response = await fetchDataFromAPI(page, perPage);

        tableItems.value = response.data;
        totalItems.value = response.total;
    } catch (error) {
        console.error("Error loading data:", error);
    }
};

// Simulated API function
const fetchDataFromAPI = async (page, perPage) => {
    // This is a mock function that simulates an API call
    // In a real application, you would use fetch or axios to call your backend

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const allData = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`
    }));

    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedData = allData.slice(start, end);

    return {
        data: paginatedData,
        total: allData.length
    };
};

// Load initial data
onMounted(() => {
    loadData({ page: 1, perPage: 10 });
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="List"
            previousLink="/list"
            next="Table"
            nextLink="/table"
        />
    </BaseLayout>
</template>

<style scoped>
.code-highlight {
    white-space: pre;
    font-family: monospace;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const currentPage = ref(1);
const perPageSelectorPage = ref(1);
const perPage = ref(10);
const customPage = ref(1);
const customPerPage = ref(20);
const handlePageChange = (event) => {
    console.log(`Page changed to ${event.page}, showing ${event.perPage} items per page`);
};

const fewPagesCurrentPage = ref(1);
const i18nPage = ref(1);

const tableHeaders = ref([
    { label: "ID", key: "id", width: "80px" },
    { label: "Name", key: "name", width: "180px" },
    { label: "Email", key: "email" }
]);

const tableItems = ref([]);
const tablePage = ref(1);
const tablePerPage = ref(10);
const totalTableItems = ref(100);

const generateTableData = (page, perPage) => {
    const allData = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`
    }));

    const start = (page - 1) * perPage;
    const end = start + perPage;
    return allData.slice(start, end);
};

const onTablePerPageChange = (newPerPage) => {
    tablePerPage.value = newPerPage;
    tableItems.value = generateTableData(tablePage.value, newPerPage);
};

const onTablePageChange = ({ page, perPage }) => {
    tableItems.value = generateTableData(page, perPage);
};

onMounted(() => {
    tableItems.value = generateTableData(1, 10);
});
</script>
