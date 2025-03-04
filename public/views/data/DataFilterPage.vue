<template>
    <BaseLayout>
        <h1>DataFilter</h1>

        <p>
            The <code>CDataFilter</code> (alias: <code>c-data-filter</code>) component in the <code>@cmmv/ui</code>
            framework provides a comprehensive filtering interface for data tables and lists. It combines search, sorting,
            and configurable filter options in a responsive layout that works on both desktop and mobile devices.
            The component is designed to integrate seamlessly with <code>CDataTable</code> and other data display components.
        </p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Prop</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Type</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Default</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">filterable</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Array of filter sections with options that can be applied.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">filterTitle</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"Filtros"</td>
                    <td class="border-b px-4 py-2">Title displayed for the filters section.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">sortOptions</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Array of sorting options with values and labels.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">initialSort</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Initial sort option value to be selected.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">enableSearch</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Whether to display the search input field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">enableSort</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Whether to display the sort dropdown.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">searchPlaceholder</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"Buscar..."</td>
                    <td class="border-b px-4 py-2">Placeholder text for the search input.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">sortLabel</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"Ordenar"</td>
                    <td class="border-b px-4 py-2">Label for the sort dropdown button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">initialSearch</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Initial search query to populate the search input.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Basic Example -->
        <h3>Basic Example</h3>

        <p>
            This example demonstrates a basic implementation of the <code>CDataFilter</code> component with a
            search input and sort dropdown. It shows how to use the component to filter a <code>CDataTable</code>
            by connecting the filter events to the table data.
        </p>

        <card-docs padding="p-0">
            <div class="w-full mx-auto">
                <c-data-filter
                    :filterable="filterCategories"
                    :sort-options="sortOptions"
                    :enable-search="false"
                    filter-title="Filter Products"
                    initial-sort="name"
                    @update:filters="handleFiltersChange"
                    @update:sort="handleAdvancedSortChange"
                    @update:search="handleAdvancedSearchChange"
                >
                    <template #data-table="{ enableSearch }">
                        <c-data-table
                            :card="false"
                            :api-url="mockProductsApiUrl"
                            :headers="productHeaders"
                            rounded="rounded-none"
                            ref="advancedDataTable"
                            :show-search-bar="enableSearch"
                            :filters="activeFilters.filters"
                            header-padding="p-0"
                            search-input-full-width
                            :enable-api-sort="true"
                        ></c-data-table>
                    </template>
                </c-data-filter>
            </div>

            <div class="m-4">
                <div class="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-md">
                    <pre class="text-xs overflow-auto max-h-36">{{ activeFilters }}</pre>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;div class="w-full mx-auto"&gt;
    &lt;c-data-filter
        :filterable="filterCategories"
        :sort-options="sortOptions"
        :enable-search="true"
        filter-title="Filter Products"
        initial-sort="popularity"
        @update:filters="handleFiltersChange"
        @update:sort="handleAdvancedSortChange"
        @update:search="handleAdvancedSearchChange"
    &gt;
        &lt;template #data-table="{ enableSearch }"&gt;
            &lt;c-data-table
                :card="false"
                :api-url="apiUrl"
                :headers="productHeaders"
                rounded="rounded-none"
                ref="advancedDataTable"
                :show-search-bar="enableSearch"
                :filters="activeFilters.filters"
            &gt;&lt;/c-data-table&gt;
        &lt;/template&gt;
    &lt;/c-data-filter&gt;
&lt;/div&gt;

&lt;script setup&gt;
const filterCategories = [
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'electronics', label: 'Electronics', checked: false },
            { value: 'clothing', label: 'Clothing', checked: true },
            { value: 'books', label: 'Books', checked: false }
        ]
    },
    {
        id: 'price',
        name: 'Price Range',
        options: [
            { value: 'under-50', label: 'Under $50', checked: false },
            { value: '50-100', label: '$50 - $100', checked: false },
            { value: 'over-100', label: 'Over $100', checked: false }
        ]
    },
    {
        id: 'rating',
        name: 'Rating',
        options: [
            { value: '4-plus', label: '4★ & Above', checked: false },
            { value: '3-plus', label: '3★ & Above', checked: false },
            { value: '2-plus', label: '2★ & Above', checked: false }
        ]
    }
];

const sortOptions = [
    { value: 'popularity', label: 'Most Popular' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest Arrivals' }
];

const activeFilters = ref({
    filters: { category: ['clothing'] },
    sort: 'popularity',
    search: ''
});

const advancedDataTable = ref(null);

const handleFiltersChange = (filters) => {
    activeFilters.value.filters = filters;
};

const handleAdvancedSortChange = (sort) => {
    activeFilters.value.sort = sort;
    if (advancedDataTable.value) {
        const field = sort.replace('-desc', '');
        const direction = sort.includes('-desc') ? 'DESC' : 'ASC';
        advancedDataTable.value.sortField = field;
        advancedDataTable.value.sortDirection = direction;
        advancedDataTable.value.fetchData();
    }
};

const handleAdvancedSearchChange = (search) => {
    activeFilters.value.search = search;
    if (advancedDataTable.value) {
        advancedDataTable.value.searchQuery = search;
        advancedDataTable.value.fetchData();
    }
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Integration with CDataTable -->
        <h3>Integration with CDataTable</h3>

        <p>
            The <code>CDataFilter</code> component is designed to work seamlessly with <code>CDataTable</code>.
            By nesting the table inside the filter component, you can create a complete data management interface
            that handles filtering, sorting, and display in a consistent way.
        </p>

        <card-docs padding="p-0">
            <div class="w-full mx-auto">
                <div class="overflow-hidden">
                    <c-data-filter
                        :filterable="dataTableFilters"
                        :sort-options="dataTableSortOptions"
                        :enable-search="false"
                        @update:filters="handleDataTableFilters"
                        @update:sort="handleDataTableSort"
                        @update:search="handleDataTableSearch"
                    >
                        <template #data-table="{ enableSearch }">
                            <c-data-table
                                :card="false"
                                :api-url="mockApiUrl"
                                :headers="userHeaders"
                                rounded="rounded-none"
                                ref="integrationDataTable"
                                :show-search-bar="enableSearch"
                                :filters="tableFilters.filters"
                                @fetch-success="handleIntegrationFetchSuccess"
                                header-padding="p-0"
                                search-input-full-width
                                :enable-api-sort="true"
                            ></c-data-table>
                        </template>
                    </c-data-filter>
                </div>
            </div>

            <div class="p-4 pt-0">
                <div class="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-md">
                    <h4 class="text-sm font-medium mb-2">Last API Request:</h4>
                    <pre class="text-xs overflow-auto max-h-24">{{ lastIntegrationApiRequest }}</pre>

                    <h4 class="text-sm font-medium mt-3 mb-2">Current Data Sample:</h4>
                    <pre class="text-xs overflow-auto max-h-36">{{ JSON.stringify(integrationDataSample, null, 2) }}</pre>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;div class="border rounded-lg overflow-hidden"&gt;
    &lt;c-data-filter
        :filterable="dataTableFilters"
        :sort-options="dataTableSortOptions"
        @update:filters="handleDataTableFilters"
        @update:sort="handleDataTableSort"
        @update:search="handleDataTableSearch"
    &gt;
        &lt;template #data-table="{ enableSearch }"&gt;
            &lt;c-data-table
                :card="false"
                :api-url="apiUrl"
                :headers="userHeaders"
                captionTitle="User Management"
                captionSubtitle="Filter and sort the user list"
                rounded="rounded-none"
                ref="integrationDataTable"
                :show-search-bar="enableSearch"
                :filters="tableFilters.filters"
            &gt;&lt;/c-data-table&gt;
        &lt;/template&gt;
    &lt;/c-data-filter&gt;
&lt;/div&gt;

&lt;script setup&gt;
const dataTableFilters = [
    {
        id: 'role',
        name: 'Role',
        options: [
            { value: 'admin', label: 'Administrators', checked: false },
            { value: 'user', label: 'Regular Users', checked: false },
            { value: 'guest', label: 'Guests', checked: false }
        ]
    },
    {
        id: 'status',
        name: 'Status',
        options: [
            { value: 'active', label: 'Active', checked: false },
            { value: 'inactive', label: 'Inactive', checked: false },
            { value: 'pending', label: 'Pending', checked: false }
        ]
    }
];

const dataTableSortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'created', label: 'Newest first' },
    { value: 'created-desc', label: 'Oldest first' }
];

const integrationDataTable = ref(null);
const tableFilters = ref({
    filters: {},
    sort: 'name',
    search: ''
});

// Variáveis para informações da consulta à API
const lastIntegrationApiRequest = ref('No requests yet');
const integrationDataSample = ref([]);

const handleDataTableFilters = (filters) => {
    tableFilters.value.filters = filters;
};

const handleDataTableSort = (sort) => {
    tableFilters.value.sort = sort;
    if (integrationDataTable.value) {
        const field = sort.replace('-desc', '');
        const direction = sort.includes('-desc') ? 'DESC' : 'ASC';
        integrationDataTable.value.sortField = field;
        integrationDataTable.value.sortDirection = direction;
        integrationDataTable.value.fetchData();
    }
};

const handleDataTableSearch = (search) => {
    tableFilters.value.search = search;
    if (integrationDataTable.value) {
        integrationDataTable.value.searchQuery = search;
        integrationDataTable.value.fetchData();
    }
};

// Handler para capturar os dados da consulta à API
const handleIntegrationFetchSuccess = (data) => {
    if (data && data.response) {
        // Captura a URL da última solicitação
        if (integrationDataTable.value && integrationDataTable.value.apiUrl) {
            const url = new URL(integrationDataTable.value.apiUrl, window.location.origin);

            // Adiciona os parâmetros de consulta atuais
            const params = new URLSearchParams();
            if (integrationDataTable.value.searchQuery) {
                params.append('search', integrationDataTable.value.searchQuery);
            }
            if (integrationDataTable.value.sortField) {
                params.append('sortBy', integrationDataTable.value.sortField);
                params.append('sort', integrationDataTable.value.sortDirection);
            }

            // Adiciona os filtros ativos
            if (integrationDataTable.value.activeFilters) {
                Object.entries(integrationDataTable.value.activeFilters).forEach(([key, values]) => {
                    if (Array.isArray(values) && values.length > 0) {
                        values.forEach(value => {
                            params.append(`filter_${key}`, value.toString());
                        });
                    }
                });
            }

            // Atualiza a URL com os parâmetros
            url.search = params.toString();
            lastIntegrationApiRequest.value = url.toString();
        }

        // Captura uma amostra dos dados retornados
        if (data.data && data.data.length > 0) {
            integrationDataSample.value = data.data.slice(0, 3);
        }
    }
};

// Adiciona um listener para o fetch do datatable
onMounted(() => {
    // ... existing code ...

    // Adiciona um timeout para permitir que o datatable seja montado
    setTimeout(() => {
        if (integrationDataTable.value) {
            // Log simples para verificar valores iniciais
            console.log('Datatable montado:', integrationDataTable.value.apiUrl);

            // Faz uma consulta inicial para mostrar a URL
            lastIntegrationApiRequest.value = `${mockApiUrl.value}?limit=10&offset=0&sortBy=name&sort=ASC`;

            // Adiciona alguns dados de exemplo
            integrationDataSample.value = allMockUsers.value.slice(0, 3);
        }
    }, 500);
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Events -->
        <h3>Events</h3>

        <p>
            The <code>CDataFilter</code> component emits events when the filtering, sorting, or search parameters change.
            These events can be used to update the data displayed in your application.
        </p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Event</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Payload</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">update:filters</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">Emitted when filter selections change with the active filters object.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">update:sort</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Emitted when the sort option changes with the selected sort value.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">update:search</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Emitted when the search query changes with the current search text.</td>
                </tr>
            </tbody>
        </table-docs>

        <PagePagination previous="Chart Line" previousLink="/chart-line" next="Data Table" nextLink="/data-table" />
    </BaseLayout>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const sortOptions = ref([
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'date', label: 'Newest first' },
    { value: 'date-desc', label: 'Oldest first' }
]);

const headers = ref([
    { key: 'id', label: 'ID', width: '50px' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'created', label: 'Created' }
]);

const filterParams = ref({
    sort: 'name',
    search: ''
});

const basicDataTable = ref(null);

const handleSortChange = (sort) => {
    filterParams.value.sort = sort;

    if (basicDataTable.value) {
        const field = sort.replace('-desc', '');
        const direction = sort.includes('-desc') ? 'DESC' : 'ASC';
        basicDataTable.value.sortField = field;
        basicDataTable.value.sortDirection = direction;
        basicDataTable.value.fetchData();
    }
};

const handleSearchChange = (search) => {
    filterParams.value.search = search;

    if (basicDataTable.value) {
        basicDataTable.value.searchQuery = search;
        basicDataTable.value.fetchData();
    }
};

const filterCategories = ref([
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'electronics', label: 'Electronics', checked: false },
            { value: 'clothing', label: 'Clothing', checked: true },
            { value: 'books', label: 'Books', checked: false }
        ]
    },
    {
        id: 'price',
        name: 'Price Range',
        options: [
            { value: 'under-50', label: 'Under $50', checked: false },
            { value: '50-100', label: '$50 - $100', checked: false },
            { value: 'over-100', label: 'Over $100', checked: false }
        ]
    },
    {
        id: 'rating',
        name: 'Rating',
        options: [
            { value: '4-plus', label: '4★ & Above', checked: false },
            { value: '3-plus', label: '3★ & Above', checked: false },
            { value: '2-plus', label: '2★ & Above', checked: false }
        ]
    }
]);

const productHeaders = ref([
    { key: 'id', label: 'ID', width: '50px' },
    { key: 'name', label: 'Product' },
    { key: 'category', label: 'Category' },
    { key: 'price', label: 'Price' },
    { key: 'rating', label: 'Rating' }
]);

const activeFilters = ref({
    filters: { category: ['clothing'] },
    sort: 'popularity',
    search: ''
});

const advancedDataTable = ref(null);

const handleFiltersChange = (filters) => {
    activeFilters.value.filters = filters;
};

const handleAdvancedSortChange = (sort) => {
    activeFilters.value.sort = sort;

    if (advancedDataTable.value) {
        const field = sort.replace('-desc', '');
        const direction = sort.includes('-desc') ? 'DESC' : 'ASC';
        advancedDataTable.value.sortField = field;
        advancedDataTable.value.sortDirection = direction;
        advancedDataTable.value.fetchData();
    }
};

const handleAdvancedSearchChange = (search) => {
    activeFilters.value.search = search;
    if (advancedDataTable.value) {
        advancedDataTable.value.searchQuery = search;
        advancedDataTable.value.fetchData();
    }
};

const dataTableFilters = ref([
    {
        id: 'role',
        name: 'Role',
        options: [
            { value: 'admin', label: 'Administrators', checked: false },
            { value: 'user', label: 'Regular Users', checked: false },
            { value: 'guest', label: 'Guests', checked: false }
        ]
    },
    {
        id: 'status',
        name: 'Status',
        options: [
            { value: 'active', label: 'Active', checked: false },
            { value: 'inactive', label: 'Inactive', checked: false },
            { value: 'pending', label: 'Pending', checked: false }
        ]
    }
]);

const dataTableSortOptions = ref([
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'created', label: 'Newest first' },
    { value: 'created-desc', label: 'Oldest first' }
]);

const userHeaders = ref([
    { key: 'id', label: 'ID', width: '50px' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
    { key: 'created', label: 'Created' }
]);

const integrationDataTable = ref(null);
const tableFilters = ref({
    filters: {},
    sort: 'name',
    search: ''
});

const lastIntegrationApiRequest = ref('No requests yet');
const integrationDataSample = ref([]);

const handleDataTableFilters = (filters) => {
    tableFilters.value.filters = filters;
};

const handleDataTableSort = (sort) => {
    tableFilters.value.sort = sort;
    if (integrationDataTable.value) {
        const field = sort.replace('-desc', '');
        const direction = sort.includes('-desc') ? 'DESC' : 'ASC';
        integrationDataTable.value.sortField = field;
        integrationDataTable.value.sortDirection = direction;
        integrationDataTable.value.fetchData();
    }
};

const handleDataTableSearch = (search) => {
    tableFilters.value.search = search;
    if (integrationDataTable.value) {
        integrationDataTable.value.searchQuery = search;
        integrationDataTable.value.fetchData();
    }
};

const handleIntegrationFetchSuccess = (data) => {
    if (data && data.response) {
        if (integrationDataTable.value && integrationDataTable.value.apiUrl) {
            const url = new URL(integrationDataTable.value.apiUrl, window.location.origin);
            const params = new URLSearchParams();

            if (integrationDataTable.value.searchQuery) {
                params.append('search', integrationDataTable.value.searchQuery);
            }
            if (integrationDataTable.value.sortField) {
                params.append('sortBy', integrationDataTable.value.sortField);
                params.append('sort', integrationDataTable.value.sortDirection);
            }

            if (integrationDataTable.value.activeFilters) {
                Object.entries(integrationDataTable.value.activeFilters).forEach(([key, values]) => {
                    if (Array.isArray(values) && values.length > 0) {
                        values.forEach(value => {
                            params.append(`filter_${key}`, value.toString());
                        });
                    }
                });
            }

            url.search = params.toString();
            lastIntegrationApiRequest.value = url.toString();
        }

        if (data.data && data.data.length > 0)
            integrationDataSample.value = data.data.slice(0, 3);
    }
};

const mockApiUrl = ref('/api/mock-users');
const mockProductsApiUrl = ref('/api/mock-products');

const generateMockProducts = (count) => {
    const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Sports'];
    const priceRanges = ['under-50', '50-100', 'over-100'];
    const ratings = [5, 4, 3, 2, 1];

    return Array.from({ length: count }, (_, index) => {
        const id = (index + 1).toString();
        const name = `Product ${id}`;
        const category = categories[index % categories.length];
        const priceNum = Math.floor(Math.random() * 200) + 10;
        const price = `$${priceNum.toFixed(2)}`;
        const priceRange = priceNum < 50 ? 'under-50' : (priceNum < 100 ? '50-100' : 'over-100');
        const rating = ratings[Math.floor(Math.random() * ratings.length)];

        return {
            id,
            name,
            category,
            categoryId: category.toLowerCase().replace(' & ', '-'),
            price,
            priceRange,
            rating,
            ratingId: rating >= 4 ? '4-plus' : (rating >= 3 ? '3-plus' : '2-plus')
        };
    });
};

const allMockUsers = ref([]);
const allMockProducts = ref([]);

onMounted(() => {
    allMockUsers.value = Array.from({ length: 500 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        role: i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'User' : 'Guest',
        status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Inactive' : 'Pending',
        created: new Date(Date.now() - i * 86400000).toISOString().split('T')[0]
    }));

    allMockProducts.value = generateMockProducts(500);

    if (window._originalFetch)
        window.fetch = window._originalFetch;

    window._originalFetch = window.fetch;

    window.fetch = async (url, options) => {
        lastIntegrationApiRequest.value = url.toString();
        const urlObj = new URL(url.toString(), window.location.origin);
        const params = Object.fromEntries(urlObj.searchParams.entries());

        if (url.toString().includes('/api/mock-users')) {
            const sortBy = params.sortBy || 'id';
            const sort = params.sort || 'ASC';
            const search = params.search || '';
            const direction = sort.includes('-desc') ? 'DESC' : 'ASC';
            const activeRoleFilters = [];
            const activeStatusFilters = [];

            Object.entries(params).forEach(([key, value]) => {
                if (key.startsWith('filter_role')) {
                    activeRoleFilters.push(value.toLowerCase());
                }
                if (key.startsWith('filter_status')) {
                    activeStatusFilters.push(value.toLowerCase());
                }
            });

            let filteredData = [...allMockUsers.value];

            if (search) {
                filteredData = filteredData.filter(user =>
                    user.name.toLowerCase().includes(search.toLowerCase()) ||
                    user.email.toLowerCase().includes(search.toLowerCase())
                );
            }

            if (activeRoleFilters.length > 0) {
                filteredData = filteredData.filter(user =>
                    activeRoleFilters.includes(user.role.toLowerCase())
                );
            }

            if (activeStatusFilters.length > 0) {
                filteredData = filteredData.filter(user =>
                    activeStatusFilters.includes(user.status.toLowerCase())
                );
            }

            filteredData.sort((a, b) => {
                const valueA = a[sortBy];
                const valueB = b[sortBy];

                if (typeof valueA === 'string' && typeof valueB === 'string') {
                    if (!isNaN(Number(valueA)) && !isNaN(Number(valueB))) {
                        return sort === 'ASC'
                            ? Number(valueA) - Number(valueB)
                            : Number(valueB) - Number(valueA);
                    }

                    return sort === 'ASC'
                        ? valueA.localeCompare(valueB)
                        : valueB.localeCompare(valueA);
                }

                return sort === 'ASC'
                    ? valueA - valueB
                    : valueB - valueA;
            });

            const limit = parseInt(params.limit || '10');
            const offset = parseInt(params.offset || '0');
            const paginatedUsers = filteredData.slice(offset, offset + limit);
            await new Promise(resolve => setTimeout(resolve, 300));

            return {
                ok: true,
                json: async () => ({
                    status: 200,
                    processingTime: Math.floor(Math.random() * 50) + 10,
                    result: {
                        success: true,
                        count: filteredData.length,
                        pagination: {
                            limit,
                            offset,
                            sortBy: sortBy,
                            sort: direction,
                            search,
                            searchField: '',
                            filters: {
                                role: activeRoleFilters,
                                status: activeStatusFilters
                            }
                        },
                        data: paginatedUsers
                    }
                })
            };
        }

        if (url.toString().includes('/api/mock-products')) {
            const sortBy = params.sortBy || 'id';
            const sort = params.sort || 'ASC';
            const search = params.search || '';
            const direction = sort.includes('-desc') ? 'DESC' : 'ASC';
            const activeCategoryFilters = [];
            const activePriceFilters = [];
            const activeRatingFilters = [];

            Object.entries(params).forEach(([key, value]) => {
                if (key.startsWith('filter_category'))
                    activeCategoryFilters.push(value);

                if (key.startsWith('filter_price'))
                    activePriceFilters.push(value);

                if (key.startsWith('filter_rating'))
                    activeRatingFilters.push(value);

            });

            let filteredProducts = [...allMockProducts.value];

            if (search) {
                filteredProducts = filteredProducts.filter(product =>
                    product.name.toLowerCase().includes(search.toLowerCase()) ||
                    product.category.toLowerCase().includes(search.toLowerCase())
                );
            }

            if (activeCategoryFilters.length > 0) {
                filteredProducts = filteredProducts.filter(product =>
                    activeCategoryFilters.includes(product.categoryId)
                );
            }

            if (activePriceFilters.length > 0) {
                filteredProducts = filteredProducts.filter(product =>
                    activePriceFilters.includes(product.priceRange)
                );
            }

            if (activeRatingFilters.length > 0) {
                filteredProducts = filteredProducts.filter(product =>
                    activeRatingFilters.includes(product.ratingId)
                );
            }

            const sortField = sort.replace('-desc', '');
            filteredProducts.sort((a, b) => {
                const valueA = a[sortBy];
                const valueB = b[sortBy];

                if (typeof valueA === 'string' && typeof valueB === 'string') {
                    if (!isNaN(Number(valueA)) && !isNaN(Number(valueB))) {
                        return sort === 'ASC'
                            ? Number(valueA) - Number(valueB)
                            : Number(valueB) - Number(valueA);
                    }

                    return sort === 'ASC'
                        ? valueA.localeCompare(valueB)
                        : valueB.localeCompare(valueA);
                }

                return sort === 'ASC'
                    ? valueA - valueB
                    : valueB - valueA;
            });

            const limit = parseInt(params.limit || '10');
            const offset = parseInt(params.offset || '0');
            const paginatedProducts = filteredProducts.slice(offset, offset + limit);
            await new Promise(resolve => setTimeout(resolve, 300));

            return {
                ok: true,
                json: async () => ({
                    status: 200,
                    processingTime: Math.floor(Math.random() * 50) + 10,
                    result: {
                        success: true,
                        count: filteredProducts.length,
                        pagination: {
                            limit,
                            offset,
                            sortBy: sortField,
                            sort: direction,
                            search,
                            searchField: '',
                            filters: {
                                category: activeCategoryFilters,
                                price: activePriceFilters,
                                rating: activeRatingFilters
                            }
                        },
                        data: paginatedProducts
                    }
                })
            };
        }

        return window._originalFetch(url, options);
    };

    nextTick(() => {
        const style = document.createElement('style');
        style.textContent = `
            /* Ensure sort dropdown opens to the left */
            .c-data-filter .absolute.right-0.w-40 {
                right: auto !important;
                left: 0 !important;
            }
        `;
        document.head.appendChild(style);
    });
});
</script>
