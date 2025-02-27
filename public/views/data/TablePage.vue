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
                <tr>
                    <td class="border-b px-4 py-2">checked</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">When true, adds checkboxes to each row for selection.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">enableSort</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Enables column sorting functionality.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">sortBy</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Specifies the default column key to sort by.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">sortReverse</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">When true, reverses the default sort direction.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">infinityScroll</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Enables infinite scrolling for loading more data as the user scrolls.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">fixedHeaders</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Keeps the header fixed while scrolling through the table.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">maxHeight</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Sets the maximum height of the table with scrolling.</td>
                </tr>
            </tbody>
        </table-docs>

        <br/>

        <!-- Basic Example -->
        <h3>Basic Example</h3>

        <p>
            The Basic Example demonstrates how to use the <code>CTable</code> component with a simple dataset. It defines a list of column headers and an array of items, where each row corresponds to an object in the <code>tableData</code> array. This example shows how easy it is to render structured data dynamically without manually creating table rows and columns.
        </p>

        <card-docs>
            <div class="w-full max-w-[780px] mx-auto">
                <c-table
                    :items="items"
                    :headers="headers"
                ></c-table>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-table
        :headers="tableHeaders"
        :items="tableData"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";
import CTable from "@components/data/CTable.vue";

const tableHeaders = ref([
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" }
]);

const tableData = ref([
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Row Selection with Checkboxes</h3>

        <p>
            The <code>checked</code> property allows users to select multiple rows using checkboxes. The selected items can be retrieved using the <code>@update:selected</code> event, which emits an array of selected rows. This is particularly useful for implementing bulk actions on selected data.
        </p>

        <card-docs>
            <div class="w-full max-w-[780px] mx-auto">
                <c-table
                    :items="items"
                    :headers="headers"
                    checked
                    @update:selected="onSelectionChange"
                ></c-table>

                <div class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                    <p class="font-medium mb-2">Selected Items:</p>
                    <pre class="text-sm">{{ selectedItems }}</pre>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div&gt;
        &lt;c-table
            :headers="tableHeaders"
            :items="tableData"
            checked
            @update:selected="onSelectionChange"
        /&gt;

        &lt;div class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded"&gt;
            &lt;p class="font-medium mb-2"&gt;Selected Items:&lt;/p&gt;
            &lt;pre class="text-sm"&gt;&#123;&#123; selectedItems &#125;&#125;&lt;/pre&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";
import CTable from "@components/data/CTable.vue";

const tableHeaders = ref([
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" }
]);

const tableData = ref([
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
]);

const selectedItems = ref([]);

const onSelectionChange = (selected) => {
    selectedItems.value = selected;
    // You can perform actions on selected items here
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Customizing Table Columns</h3>

        <p>
            The <code>CTable</code> component allows developers to customize how specific fields are rendered in the table using Vue slots.
            This is useful when you want to format dates, apply styles based on the field value, or display icons, badges, and other UI elements dynamically.
        </p>

        <p>
            In the example below, we format the <code>createAt</code> field to display a localized date and time instead of a timestamp.
            Additionally, the <code>active</code> field is rendered using badges to indicate whether the user is active or inactive.
        </p>

        <card-docs>
            <div class="w-full max-w-[780px] mx-auto">
                <c-table
                    :items="itemsWithCreateAt"
                    :headers="headersWithCreateAt"
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
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-table
        :headers="headersWithCreateAt"
        :items="itemsWithCreateAt"
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
import CTable from "@components/data/CTable.vue";
import CBadge from "@components/components/CBadge.vue";

const headersWithCreateAt = ref([
    { label: "ID", key: "id", width: "60px" },
    { label: "Name", key: "name", width: "150px" },
    { label: "Email", key: "email", width: "150px" },
    { label: "Create At", key: "createAt", width: "160px" },
    { label: "Status", key: "active", width: "100px" }
]);

const itemsWithCreateAt = ref([
    {
        id: 1,
        avatar: "https://i.pravatar.cc/150?img=1",
        name: "Alice Johnson",
        email: "alice@example.com",
        position: "Vue JS Developer",
        createAt: 1740539034483,
        active: true
    },
    {
        id: 2,
        avatar: "https://i.pravatar.cc/150?img=2",
        name: "Bob Smith",
        email: "bob@example.com",
        position: "UI/UX Engineer",
        createAt: 1740539045274,
        active: false
    },
    {
        id: 3,
        avatar: "https://i.pravatar.cc/150?img=3",
        name: "Charlie Brown",
        email: "charlie@example.com",
        position: "SEO Specialist",
        createAt: 1740539063385,
        active: true
    }
]);

// Format timestamp to localized date and time
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
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Sorting</h3>

        <p>
            The <code>CTable</code> component supports sorting functionality, allowing users to sort data by specific columns.
            By default, sorting is disabled, but it can be enabled using the <code>enableSort</code> prop.
            Clicking on a column header triggers sorting in ascending or descending order.
        </p>

        <p>
            The <code>sortBy</code> prop defines the default column to sort, while <code>sortReverse</code> controls the initial sorting direction.
            The <code>@sorting</code> event emits the current sorting field and direction, allowing for dynamic data reordering.
        </p>

        <card-docs>
            <div class="w-full max-w-[780px] mx-auto">
                <c-table
                    :items="itemsSorting"
                    :headers="headers"
                    sortBy="id"
                    :sortReverse="false"
                    @sorting="sortingItems"
                    enableSort
                ></c-table>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-table
        :headers="tableHeaders"
        :items="tableData"
        sortBy="id"
        :sortReverse="false"
        @sorting="sortingItems"
        enableSort
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";
import CTable from "@components/data/CTable.vue";

const tableHeaders = ref([
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" }
]);

const tableData = ref([
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
]);

// This function handles the sorting logic when a column header is clicked
const sortingItems = (field, direction) => {
    // Sort the data based on the selected field and direction
    // direction = false means ascending, true means descending
    tableData.value.sort((a, b) => {
        const valueA = a[field];
        const valueB = b[field];

        // Handle string comparison
        if (typeof valueA === "string" && typeof valueB === "string")
            return !direction ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);

        // Handle number comparison
        if (typeof valueA === "number" && typeof valueB === "number")
            return !direction ? valueA - valueB : valueB - valueA;

        return 0;
    });
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Server-Side Sorting</h3>

        <p>
            For large datasets, it's often more efficient to handle sorting on the server side rather than in the browser.
            The <code>@sorting</code> event can be used to trigger API calls with sorting parameters, allowing the backend to handle the sorting logic.
        </p>

        <p>
            This approach is particularly useful when working with paginated data, as it ensures that only the necessary records are transferred over the network,
            significantly improving performance and user experience.
        </p>

        <card-docs>
            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-table
        :headers="tableHeaders"
        :items="tableData"
        sortBy="id"
        :sortReverse="false"
        @sorting="fetchSortedData"
        enableSort
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted } from "vue";
import CTable from "@components/data/CTable.vue";

const tableHeaders = ref([
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" }
]);

const tableData = ref([]);
const loading = ref(false);

// Fetch data from the server with sorting parameters
const fetchSortedData = async (sortField, sortDirection) => {
    try {
        loading.value = true;

        // Convert boolean direction to string format for API
        const direction = sortDirection ? "DESC" : "ASC";

        // Make API request with sorting parameters
        const response = await fetch(`/api/users?sort=${sortField}&order=${direction}`);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        tableData.value = data;
    } catch (error) {
        console.error("Error fetching sorted data:", error);
    } finally {
        loading.value = false;
    }
};

// Initial data fetch on component mount
onMounted(() => {
    fetchSortedData("id", false);
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Infinite Scroll</h3>

        <p>
            The <code>CTable</code> component supports infinite scrolling, which allows data to be loaded dynamically as the user scrolls down.
            This is useful for handling large datasets efficiently by loading only a subset of records at a time, improving performance and reducing memory usage.
        </p>

        <p>
            To enable infinite scrolling, set the <code>infinityScroll</code> prop to true and implement the <code>@load-more</code> event handler to fetch additional data.
            You can also use the <code>fixedHeaders</code> prop to keep the table headers visible while scrolling.
        </p>

        <card-docs>
            <div class="w-full max-w-[780px] mx-auto">
                <c-table
                    :items="visibleItems"
                    :headers="headers"
                    infinityScroll
                    fixedHeaders
                    maxHeight="300px"
                    :ended="visibleItems.length === 200"
                    @load-more="loadMore"
                ></c-table>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-table
        :headers="tableHeaders"
        :items="visibleItems"
        infinityScroll
        fixedHeaders
        maxHeight="300px"
        :ended="visibleItems.length === totalItems"
        @load-more="loadMore"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted } from "vue";
import CTable from "@components/data/CTable.vue";

// Generate sample data for demonstration
const generateRandomData = (count) => {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
    const domains = ["example.com", "test.com", "mail.com"];

    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `${names[Math.floor(Math.random() * names.length)]} ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}.`,
        email: `user${i + 1}@${domains[Math.floor(Math.random() * domains.length)]}`
    }));
};

// Store all data and only show a portion initially
const allItems = generateRandomData(200);
const visibleItems = ref(allItems.slice(0, 20));
const totalItems = allItems.length;

// Load more data when the user scrolls to the bottom
const loadMore = () => {
    // Simulate a delay that would occur with a real API call
    setTimeout(() => {
        const currentLength = visibleItems.value.length;
        const nextItems = allItems.slice(currentLength, currentLength + 20);

        if (nextItems.length) {
            visibleItems.value.push(...nextItems);
        }
    }, 300);
};

// In a real application, you would fetch data from an API
// const loadMore = async () => {
//     try {
//         const page = Math.ceil(visibleItems.value.length / 20) + 1;
//         const response = await fetch(`/api/users?page=${page}&limit=20`);
//         const newItems = await response.json();
//
//         if (newItems.length) {
//             visibleItems.value.push(...newItems);
//         }
//     } catch (error) {
//         console.error("Error loading more data:", error);
//     }
// };
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Advanced User Table Example</h3>

        <p>
            This example demonstrates how to create a more complex and visually appealing user table with the <code>CTable</code> component.
            It includes custom column rendering for user profiles with avatars, status indicators, and action links.
        </p>

        <p>
            The example also shows how to use the <code>caption</code> slot to add a custom header with a title, description, and search functionality.
            This creates a complete user management interface that is both functional and aesthetically pleasing.
        </p>

        <card-docs>
            <div class="w-full max-w-[780px] mx-auto">
                <c-table
                    :items="itemsWithCreateAt"
                    :headers="headersUsers"
                    maxHeight="300px"
                    checked
                >
                    <template #caption>
                        <div class="flex items-center justify-between flex-column flex-wrap mb-4">
                            <div>
                                <h2 class="text-xl font-semibold">Users</h2>
                                <span class="text-sm text-gray-500">See information about all members</span>
                            </div>
                            <div class="relative">
                                <c-input id="search" label="Search Input" placeholder="Search users...">
                                    <template #icon>
                                        <IconMagnifyingGlass class="w-6 h-6 text-neutral-600 dark:text-white" aria-hidden="true" />
                                    </template>
                                </c-input>
                            </div>
                        </div>
                    </template>

                    <template #name="{ item }">
                        <div class="flex items-center px-2 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                            <c-avatar :src="item.avatar" />

                            <div class="ps-3">
                                <div class="text-base font-semibold">{{ item.name }}</div>
                                <div class="font-normal text-neutral-500">{{ item.email }}</div>
                            </div>
                        </div>
                    </template>

                    <template #active="{ item }">
                        <div class="flex items-center" v-if="item.active">
                            <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                        </div>
                        <div class="flex items-center" v-else>
                            <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Offline
                        </div>
                    </template>

                    <template #actions="{ item }">
                        <div class="flex space-x-2">
                            <c-button size="sm" variant="outline">Edit</c-button>
                            <c-button size="sm" variant="outline" bgColor="bg-red-50" textColor="text-red-600">Delete</c-button>
                        </div>
                    </template>
                </c-table>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-table
        :headers="headersUsers"
        :items="itemsWithCreateAt"
        maxHeight="300px"
        checked
    &gt;
        &lt;!-- Custom table caption with search --&gt;
        &lt;template #caption&gt;
            &lt;div class="flex items-center justify-between flex-column flex-wrap mb-4"&gt;
                &lt;div&gt;
                    &lt;h2 class="text-xl font-semibold"&gt;Users&lt;/h2&gt;
                    &lt;span class="text-sm text-gray-500"&gt;See information about all members&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class="relative"&gt;
                    &lt;c-input
                        id="search"
                        label="Search Input"
                        placeholder="Search users..."
                        v-model="searchQuery"
                        @input="filterUsers"
                    &gt;
                        &lt;template #icon&gt;
                            &lt;IconMagnifyingGlass class="w-6 h-6 text-neutral-600 dark:text-white" aria-hidden="true" /&gt;
                        &lt;/template&gt;
                    &lt;/c-input&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        &lt;!-- Custom user profile column with avatar --&gt;
        &lt;template #name="{ item }"&gt;
            &lt;div class="flex items-center px-2 py-2 text-gray-900 whitespace-nowrap dark:text-white"&gt;
                &lt;c-avatar :src="item.avatar" /&gt;
                &lt;div class="ps-3"&gt;
                    &lt;div class="text-base font-semibold"&gt;&#123;&#123; item.name &#125;&#125;&lt;/div&gt;
                    &lt;div class="font-normal text-neutral-500"&gt;&#123;&#123; item.email &#125;&#125;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        &lt;!-- Custom status indicator --&gt;
        &lt;template #active="{ item }"&gt;
            &lt;div class="flex items-center" v-if="item.active"&gt;
                &lt;div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"&gt;&lt;/div&gt; Online
            &lt;/div&gt;
            &lt;div class="flex items-center" v-else&gt;
                &lt;div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"&gt;&lt;/div&gt; Offline
            &lt;/div&gt;
        &lt;/template&gt;

        &lt;!-- Action buttons --&gt;
        &lt;template #actions="{ item }"&gt;
            &lt;div class="flex space-x-2"&gt;
                &lt;c-button size="sm" variant="outline" @click="editUser(item)"&gt;Edit&lt;/c-button&gt;
                &lt;c-button
                    size="sm"
                    variant="outline"
                    bgColor="bg-red-50"
                    textColor="text-red-600"
                    @click="deleteUser(item)"
                &gt;
                    Delete
                &lt;/c-button&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-table&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed } from "vue";

const headersUsers = ref([
    { label: "Name", key: "name", width: "250px" },
    { label: "Position", key: "position" },
    { label: "Status", key: "active", width: "120px" },
    { label: "Actions", key: "actions", width: "100px" }
]);

// Sample user data
const allUsers = ref([
    {
        id: 1,
        avatar: "https://i.pravatar.cc/150?img=1",
        name: "Alice Johnson",
        email: "alice@example.com",
        position: "Vue JS Developer",
        active: true
    },
    {
        id: 2,
        avatar: "https://i.pravatar.cc/150?img=2",
        name: "Bob Smith",
        email: "bob@example.com",
        position: "UI/UX Engineer",
        active: false
    },
    {
        id: 3,
        avatar: "https://i.pravatar.cc/150?img=3",
        name: "Charlie Brown",
        email: "charlie@example.com",
        position: "SEO Specialist",
        active: true
    }
]);

const searchQuery = ref('');

// Filter users based on search query
const users = computed(() => {
    if (!searchQuery.value) return allUsers.value;

    const query = searchQuery.value.toLowerCase();
    return allUsers.value.filter(user =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.position.toLowerCase().includes(query)
    );
});

// User actions
const editUser = (user) => {
    console.log('Edit user:', user);
    // Implement edit functionality
};

const deleteUser = (user) => {
    console.log('Delete user:', user);
    // Implement delete functionality with confirmation
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Accessibility Considerations</h3>

        <p>
            The <code>CTable</code> component is designed with accessibility in mind, following WCAG guidelines to ensure that tables are usable by everyone, including people with disabilities.
            Here are some key accessibility features and best practices to consider when using tables:
        </p>

        <card-docs>
            <div class="w-full max-w-[780px] mx-auto">
                <ul class="list-disc pl-6 space-y-2">
                    <li><strong>Proper Headers</strong>: Always define clear column headers using the <code>headers</code> prop to provide context for screen readers.</li>
                    <li><strong>Keyboard Navigation</strong>: The table supports keyboard navigation, allowing users to navigate through cells using the Tab key.</li>
                    <li><strong>Semantic Markup</strong>: The component uses proper HTML table elements (<code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, etc.) for better screen reader compatibility.</li>
                    <li><strong>Color Contrast</strong>: Ensure sufficient color contrast between text and background colors for better readability.</li>
                    <li><strong>Responsive Design</strong>: The table adapts to different screen sizes, making it usable on mobile devices.</li>
                    <li><strong>ARIA Attributes</strong>: The component uses appropriate ARIA attributes to enhance accessibility for screen reader users.</li>
                </ul>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;!-- Example of accessible table with ARIA attributes --&gt;
&lt;c-table
    :headers="tableHeaders"
    :items="tableData"
    aria-label="User Information Table"
    aria-describedby="table-description"
&gt;
    &lt;template #caption&gt;
        &lt;div id="table-description" class="sr-only"&gt;
            Table containing user information including name, email, and status.
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/c-table&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Integration with Pagination</h3>

        <p>
            For large datasets, it's often beneficial to combine the <code>CTable</code> component with <code>CPagination</code> to create a paginated table interface.
            This approach improves performance and usability by displaying a limited number of records per page.
        </p>

        <card-docs>
            <div class="w-full max-w-[780px] mx-auto">
                <c-table
                    :headers="headers"
                    :items="visibleItems.slice(0, 5)"
                    class="mb-4"
                ></c-table>

                <c-pagination
                    v-model="currentPage"
                    :totalItems="visibleItems.length"
                    :perPage="5"
                    :showPerPageSelect="true"
                ></c-pagination>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div&gt;
        &lt;c-table
            :headers="tableHeaders"
            :items="paginatedData"
            class="mb-4"
        &gt;&lt;/c-table&gt;

        &lt;c-pagination
            v-model="currentPage"
            :totalItems="totalItems"
            :perPage="itemsPerPage"
            :showPerPageSelect="true"
            @update:perPage="onPerPageChange"
        &gt;&lt;/c-pagination&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed, onMounted } from 'vue';
import CTable from "@components/data/CTable.vue";
import CPagination from "@components/components/CPagination.vue";

const tableHeaders = ref([
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" }
]);

const allData = ref([]);
const currentPage = ref(1);
const itemsPerPage = ref(10);
const totalItems = ref(0);

// Computed property to get the current page of data
const paginatedData = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return allData.value.slice(startIndex, endIndex);
});

const onPerPageChange = (newPerPage) => {
    itemsPerPage.value = newPerPage;
    // Reset to first page when changing items per page
    currentPage.value = 1;
};

// Fetch data from API
const fetchData = async () => {
    try {
        // In a real application, you would fetch from your API
        const response = await fetch('/api/users');
        const data = await response.json();

        allData.value = data;
        totalItems.value = data.length;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

onMounted(() => {
    fetchData();
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="Pagination"
            previousLink="/pagination"
            next="Accordion"
            nextLink="/accordion"
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
import { ref, computed } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const headers = ref([
    { label: "ID", key: "id", width: "80px" },
    { label: "Name", key: "name", width: "180px" },
    { label: "Email", key: "email" }
]);

const headersWithCreateAt = ref([
    { label: "ID", key: "id", width: "60px" },
    { label: "Name", key: "name", width: "150px" },
    { label: "Email", key: "email", width: "150px" },
    { label: "Created At", key: "createAt", width: "160px" },
    { label: "Status", key: "active", width: "100px" }
]);

const headersUsers = ref([
    { label: "Name", key: "name", width: "250px" },
    { label: "Position", key: "position" },
    { label: "Status", key: "active", width: "120px" },
    { label: "Actions", key: "actions", width: "100px" }
]);

const items = ref([
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
]);

const itemsWithCreateAt = ref([
    {
        id: 1,
        avatar: "https://i.pravatar.cc/150?img=1",
        name: "Alice Johnson",
        email: "alice@example.com",
        position: "Vue JS Developer",
        createAt: 1740539034483,
        active: true
    },
    {
        id: 2,
        avatar: "https://i.pravatar.cc/150?img=2",
        name: "Bob Smith",
        email: "bob@example.com",
        position: "UI/UX Engineer",
        createAt: 1740539045274,
        active: false
    },
    {
        id: 3,
        avatar: "https://i.pravatar.cc/150?img=3",
        name: "Charlie Brown",
        email: "charlie@example.com",
        position: "SEO Specialist",
        createAt: 1740539063385,
        active: true
    }
]);

const itemsSorting = ref([
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
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

const sortingItems = (field, direction) => {
    itemsSorting.value.sort((a, b) => {
        const valueA = a[field];
        const valueB = b[field];

        if (typeof valueA === "string" && typeof valueB === "string")
            return !direction ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)

        if (typeof valueA === "number" && typeof valueB === "number")
            return !direction ? valueA - valueB : valueB - valueA;

        return 0;
    });
}

const generateRandomData = (count) => {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
    const domains = ["example.com", "test.com", "mail.com"];

    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `${names[Math.floor(Math.random() * names.length)]} ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}.`,
        email: `user${i + 1}@${domains[Math.floor(Math.random() * domains.length)]}`
    }));
};

const allItems = generateRandomData(200);
const visibleItems = ref(allItems.slice(0, 20));
const currentPage = ref(1);

const loadMore = () => {
    const nextItems = allItems.slice(visibleItems.value.length, visibleItems.value.length + 20);

    if (nextItems.length)
        visibleItems.value.push(...nextItems);
};
</script>
