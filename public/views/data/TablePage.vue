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

        <c-card
            variant="flat"
            class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4"
        >
            <c-table
                :items="items"
                :headers="headers"
                class="max-w-[780px]"
            ></c-table>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-table
        :headers=&quot;tableHeaders&quot;
        :items=&quot;tableData&quot;
        class=&quot;max-w-[780px]&quot;
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

        <c-card variant="flat" class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <c-table
                :items="items"
                :headers="headers"
                checked
                @update:selected="onSelectionChange"
                class="max-w-[780px]"
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

        <c-card variant="flat" class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <c-table
                :items="itemsWithCreateAt"
                :headers="headersWithCreateAt"
                @update:selected="onSelectionChange"
                class="max-w-[780px]"
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

        <p>
            This sorting mechanism has been designed to allow full customization. Instead of simply reordering the local dataset,
            you can use the <code>@sorting</code> event to make API calls with sorting parameters. This is particularly useful for
            large datasets, where it is not recommended to load all data at once. Instead, the backend can handle sorting and return
            a paginated response, significantly improving performance.
        </p>

        <c-card variant="flat" class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <c-table
                :items="itemsSorting"
                :headers="headers"
                sortBy="id"
                :sortReverse="false"
                @sorting="sortingItems"
                class="max-w-[780px]"
                enableSort
            ></c-table>
        </c-card>

        <pre>
    <code class="code-highlight language-vue">&lt;template&gt;
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

const tableHeaders = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" }
];

const tableData = ref([
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
]);

const sortingItems = (field, direction) => {
    tableData.value.sort((a, b) => {
        const valueA = a[field];
        const valueB = b[field];

        if (typeof valueA === "string" && typeof valueB === "string")
            return !direction ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);

        if (typeof valueA === "number" && typeof valueB === "number")
            return !direction ? valueA - valueB : valueB - valueA;

        return 0;
    });
};
&lt;/script&gt;</code>
</pre>

        <h3>Sorting API Sample</h3>

        <p>
            In the example above, when a user clicks on a column header, the <code>@sorting</code> event is triggered, calling
            the <code>fetchData</code> function. This function makes an API request using <code>fetch</code> with the selected sorting field and order,
            ensuring that sorting is handled efficiently by the backend rather than manipulating large datasets in the frontend.
        </p>

        <pre><code class="code-highlight language-vue">&lt;template&gt;
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

const tableHeaders = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" }
];

const tableData = ref([]);

const fetchData = async (sortField, sortDirection) => {
    try {
        const response = await fetch(`/api/data?sortBy=${sortField}&sort=${sortDirection ? "ASC" : "DESC"}`);
        if (!response.ok) throw new Error("Failed to fetch data");
        tableData.value = await response.json();
    } catch (error) {
        console.error("Error fetching sorted data:", error);
    }
};

const sortingItems = (field, direction) => {
    fetchData(field, direction);
};

// Initial data fetch
fetchData("id", false);
&lt;/script&gt;</code>
</pre>

        <h3>Infinite Scroll</h3>

        <p>
            The <code>CTable</code> component supports infinite scrolling, which allows data to be loaded dynamically as the user scrolls down.
            This is useful for handling large datasets efficiently by loading only a subset of records at a time, improving performance and reducing memory usage.
            The <code>infinityScroll</code> prop enables this feature, and when the user reaches the bottom, the <code>@load-more</code> event is triggered to fetch more data.
        </p>

        <c-card variant="flat" class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <c-table
                :items="visibleItems"
                :headers="headers"
                infinityScroll
                fixedHeaders
                maxHeight="300px"
                class="max-w-[780px]"
                :ended="visibleItems.length === 200"
                @load-more="loadMore"
            ></c-table>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-table
        :headers="tableHeaders"
        :items="visibleItems"
        infinityScroll
        fixedHeaders
        maxHeight="300px"
        @load-more="loadMore"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

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

const loadMore = () => {
    const nextItems = allItems.slice(visibleItems.value.length, visibleItems.value.length + 20);

    if (nextItems.length)
        visibleItems.value.push(...nextItems);
};
&lt;/script&gt;
</code>
</pre>

        <h3>User table example</h3>

        <p>
            This example demonstrates how to use the <code>CTable</code> component to display user information, including avatars, names, and statuses.
            The <code>name</code> column is customized to include an avatar and additional user details, while the <code>active</code> column visually represents the user's status with colored indicators.
        </p>

        <c-card variant="flat" class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <c-table
                :items="itemsWithCreateAt"
                :headers="headersUsers"
                maxHeight="300px"
                class="max-w-[780px]"
                checked
            >
                <template #caption>
                    <div class="flex items-center justify-between flex-column flex-wrap">
                        <div>
                            <h1>Users</h1>
                            <span class="text-sm text-gray-500">See information about all members</span>
                        </div>
                        <div class="relative">
                            <c-input id="search" label="Search Input">
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
                    <a href="#">Edit user</a>
                </template>
            </c-table>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-table
        :headers="headersUsers"
        :items="itemsWithCreateAt"
        maxHeight="300px"
    &gt;
        &lt;template #name="{ item }"&gt;
            &lt;div class="flex items-center px-2 py-2 text-gray-900 whitespace-nowrap dark:text-white"&gt;
                &lt;c-avatar :src="item.avatar" /&gt;
                &lt;div class="ps-3"&gt;
                    &lt;div class="text-base font-semibold"&gt;&#123;&#123; item.name &#125;&#125;&lt;/div&gt;
                    &lt;div class="font-normal text-neutral-500"&gt;&#123;&#123; item.email &#125;&#125;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        &lt;template #active="{ item }"&gt;
            &lt;div class="flex items-center" v-if="item.active"&gt;
                &lt;div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"&gt;&lt;/div&gt; Online
            &lt;/div&gt;
            &lt;div class="flex items-center" v-else&gt;
                &lt;div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"&gt;&lt;/div&gt; Offline
            &lt;/div&gt;
        &lt;/template&gt;

        &lt;template #actions="{ item }"&gt;
            &lt;a href="#"&gt;Edit user&lt;/a&gt;
        &lt;/template&gt;
    &lt;/c-table&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const headersUsers = ref([
    { label: "Name", key: "name", width: "250px" },
    { label: "Position", key: "position" },
    { label: "Status", key: "active", width: "120px" },
    { label: "Actions", key: "actions", width: "100px" }
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
    { label: "ID", key: "id", width: "80px" },
    { label: "Name", key: "name", width: "180px" },
    { label: "Email", key: "email" }
]);

const headersWithCreateAt = ref([
    { label: "ID", key: "id", width: "60px" },
    { label: "Name", key: "name", width: "150px" },
    { label: "Email", key: "email", width: "150px" },
    { label: "Create At", key: "createAt", width: "160px" },
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

const loadMore = () => {
    const nextItems = allItems.slice(visibleItems.value.length, visibleItems.value.length + 20);

    if (nextItems.length)
        visibleItems.value.push(...nextItems);
};
</script>
