<template>
    <BaseLayout>
        <h1>DataTable</h1>

        <p>
            The <code>CDataTable</code> (alias: <code>c-data-table</code>) component in the <code>@cmmv/ui</code>
            framework combines the <code>CTable</code> and <code>CPagination</code> components
            to create a full-featured data table that can be easily integrated with REST APIs. The component handles
            pagination,
            sorting, searching, and data loading automatically.
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
                    <td class="border-b px-4 py-2">apiUrl</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">URL of the API endpoint to fetch data from.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">method</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"GET"</td>
                    <td class="border-b px-4 py-2">HTTP method used for API requests.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">headers</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Array of column definitions with keys and labels.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">initialLimit</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">10</td>
                    <td class="border-b px-4 py-2">Number of items to load per page initially.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">initialOffset</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">0</td>
                    <td class="border-b px-4 py-2">Initial offset value for pagination.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">initialPage</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">1</td>
                    <td class="border-b px-4 py-2">Initial page number for pagination.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">initialSortBy</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"id"</td>
                    <td class="border-b px-4 py-2">Field to sort by initially.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">initialSortDirection</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"ASC"</td>
                    <td class="border-b px-4 py-2">Initial sort direction ('ASC' or 'DESC').</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">dataPath</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"result.data"</td>
                    <td class="border-b px-4 py-2">Path to the data array in the API response.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">totalPath</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"result.count"</td>
                    <td class="border-b px-4 py-2">Path to the total count in the API response.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">autoLoad</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Whether to load data automatically on component mount.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">emptyText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'No data available'</td>
                    <td class="border-b px-4 py-2">Text to display when no data is available.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">card</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Whether to display the table with card styling.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">captionTitle</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">Title text displayed in the table caption header.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">captionSubtitle</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">Subtitle text displayed below the title in the table caption.</td>
                </tr>
            </tbody>
        </table-docs>

        <br />

        <!-- Basic Example -->
        <h3>Basic Example</h3>

        <p>
            This example demonstrates a basic implementation of the <code>CDataTable</code> component.
            It shows how to connect to a REST API endpoint and automatically handle data fetching, pagination, and
            sorting.
            The component uses the <code>apiUrl</code> prop to specify the endpoint and the <code>headers</code> prop to
            define the columns.
        </p>

        <card-docs padding="p-0">
            <div class="w-full mx-auto">
                <c-data-table :card="false" :api-url="mockApiUrl" :headers="headers" :selectable="true"
                    :enable-api-sort="true" :initial-limit="10" :initial-sort-by="'username'" :visiblePages="3"
                    ref="dataTable" @page-change="handlePageChange" @sort-change="handleSortChange"
                    @fetch-success="handleFetchSuccess" :available-actions="tableActions"
                    @action-execute="handleActionExecute" captionTitle="Users" captionSubtitle="Manage all users"
                    rounded="rounded-none">
                    <template #actions="{ item }">
                        <div class="flex gap-2">
                            <button class="p-1 text-blue-500 hover:text-blue-700" @click="viewItem(item)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </button>
                            <button class="p-1 text-red-500 hover:text-red-700" @click="deleteItem(item)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </template>
                </c-data-table>
            </div>

            <div class="mt-4 p-4">
                <div class="p-4 bg-gray-50 dark:bg-neutral-800 rounded-md">
                    <h4 class="text-sm font-medium mb-2">Last API Request:</h4>
                    <pre class="text-xs overflow-auto max-h-24">{{ lastApiRequest }}</pre>

                    <h4 class="text-sm font-medium mt-3 mb-2">Current Data Sample:</h4>
                    <pre class="text-xs overflow-auto max-h-36">{{ JSON.stringify(currentDataSample, null, 2) }}</pre>
                </div>
            </div>
        </card-docs>

        <!-- API Response Format -->
        <h3>API Response Format</h3>

        <p>
            By default, the <code>CDataTable</code> expects a specific JSON response format from the API. The component
            is
            designed to work
            with APIs that follow the CMMV REST standard, which includes pagination information, total count, and the
            actual
            data array.
        </p>

        <card-docs>
            <template #code>
                <pre><code>{
    "status": 200,
    "processingTime": 19,
    "result": {
        "success": true,
        "count": 500,
        "pagination": {
            "limit": 10,
            "offset": 0,
            "sortBy": "id",
            "sort": "ASC",
            "search": "",
            "searchField": "",
            "filters": {}
        },
        "data": [
            {
            "id": "67ad8046b0516eadc4305aec",
            "username": "johndoe",
            "email": "john@example.com",
            // other fields...
            }
        ]
    }
}
</code></pre>
            </template>
        </card-docs>

        <!-- Search and Filtering -->
        <h3>Search and Filtering</h3>

        <p>
            The <code>CDataTable</code> includes a built-in search bar and supports field-specific searching. You can
            define
            which fields are
            searchable by providing the <code>searchableFields</code> array. The component automatically sends search
            parameters
            to the API. The search input and field selector are visually grouped together for a more intuitive user
            experience.
        </p>

        <card-docs padding="p-0">
            <div class="w-full mx-auto">
                <c-data-table :card="false" :api-url="mockApiUrl" :headers="headersWithoutActions" :visiblePages="3"
                    :searchable-fields="searchableFields" :initial-limit="10" ref="searchDataTable"
                    @search-change="handleSearchChange" rounded="rounded-none"></c-data-table>
            </div>

            <div class="mt-4 p-4">
                <div class="p-4 bg-gray-50 dark:bg-neutral-800 rounded-md">
                    <h4 class="text-sm font-medium mb-2">Search Parameters:</h4>
                    <pre class="text-xs overflow-auto">{{ JSON.stringify(lastSearchParams, null, 2) }}</pre>
                </div>
            </div>
        </card-docs>

        <!-- Custom Templates -->
        <h3>Custom Column Templates</h3>

        <p>
            You can customize how specific columns are rendered by using named slots that match the column keys.
            This is useful for adding buttons, formatting dates, displaying badges, or creating any custom UI element in
            your
            table cells.
        </p>

        <card-docs>
            <div class="w-full max-w-[780px] mx-auto">
                <c-data-table :api-url="mockApiUrl" :headers="headersWithStatus" :visiblePages="3" :initial-limit="10"
                    ref="customDataTable">
                    <!-- Custom status column -->
                    <template #status="{ item }">
                        <c-badge :bgColor="getStatusColor(item.status).bg" :textColor="getStatusColor(item.status).text"
                            rounded="rounded-md" customClass="me-2 px-2.5 py-0.5">
                            {{ item.status }}
                        </c-badge>
                    </template>
                </c-data-table>
            </div>
        </card-docs>

        <!-- Events -->
        <h3>Events</h3>

        <p>
            The <code>CDataTable</code> emits various events that allow you to hook into the data loading lifecycle and
            handle
            user interactions.
            These events include notifications for data fetching, sorting changes, page changes, and search queries.
        </p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Event</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Payload</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">update:selected</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">Emitted when selected items change.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">fetch-start</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Emitted when data fetching starts.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">fetch-success</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">Emitted when data is successfully fetched.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">fetch-error</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Emitted when an error occurs during data fetching.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">sort-change</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">Emitted when sorting changes.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">page-change</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">Emitted when the page or page size changes.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">search-change</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">Emitted when the search query changes.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">action-execute</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">Emitted when an action is executed from the actions dropdown.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Methods -->
        <h3>Exposed Methods</h3>

        <p>
            The <code>CDataTable</code> component exposes several methods that can be accessed via template refs. These
            methods
            allow you to
            programmatically control the table's behavior, such as refreshing the data or resetting filters.
        </p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Method</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">fetchData()</td>
                    <td class="border-b px-4 py-2">Fetches data from the API with current parameters.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">reset()</td>
                    <td class="border-b px-4 py-2">Resets all filters, pagination, and sorting to initial values and
                        fetches
                        data.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3 class="text-lg font-semibold mt-8 mb-4">Integration with Pagination</h3>

        <p>
            The <code>CDataTable</code> component is designed to work seamlessly with the <code>CPagination</code>
            component.
            You can use the <code>page-change</code> event to handle pagination and the <code>sort-change</code> event
            to handle
            sorting.
        </p>

        <card-docs>
            <template #code>
                <pre><code>{
    "status": 200,
    "processingTime": 19,
    "result": {
        "success": true,
        "count": 500,
        "pagination": {
            "limit": 10,
            "offset": 0,
            "sortBy": "id",
            "sort": "ASC",
            "search": "",
            "searchField": "",
            "filters": {}
        },
        "data": [
            {
            "id": "67ad8046b0516eadc4305aec",
            "username": "johndoe",
            "email": "john@example.com",
            // other fields...
            }
        ]
    }
}
</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Chart Line" previousLink="/chart-line" next="List" nextLink="/list" />
    </BaseLayout>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const headers = ref([
    { key: 'id', label: 'ID', width: '50px' },
    { key: 'username', label: 'Username' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status', width: '15%' },
    { key: 'actions', label: 'Actions', width: '80px' }
]);

const headersWithoutActions = ref([
    { key: 'id', label: 'ID', width: '50px' },
    { key: 'username', label: 'Username' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status', width: '15%' }
]);

const headersWithStatus = ref([
    { key: 'id', label: 'ID', width: '50px' },
    { key: 'username', label: 'Username' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', width: '20%' },
    { key: 'status', label: 'Status', width: '20%' }
]);

const searchableFields = ref([
    { label: 'Username', value: 'username' },
    { label: 'Email', value: 'email' },
    { label: 'Role', value: 'role' }
]);

// Gerador de dados mock para criar uma grande quantidade de registros
const generateMockData = (count) => {
    const roles = ['Admin', 'Editor', 'Viewer', 'Manager', 'Developer'];
    const statuses = ['Active', 'Inactive', 'Pending', 'Suspended'];
    const domains = ['example.com', 'company.org', 'testmail.net', 'domain.co', 'mail.io'];

    return Array.from({ length: count }, (_, index) => {
        const id = (index + 1).toString();
        const firstName = ['John', 'Jane', 'Alex', 'Maria', 'David', 'Lisa', 'Robert', 'Sarah', 'Michael', 'Emily'][index % 10];
        const lastName = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson'][Math.floor(index / 10) % 10];
        const username = (firstName.toLowerCase() + lastName.toLowerCase() + (Math.floor(index / 100) + 1)).toLowerCase();
        const email = `${username}@${domains[index % domains.length]}`;
        const role = roles[index % roles.length];
        const status = statuses[index % statuses.length];

        return {
            id,
            username,
            email,
            role,
            status
        };
    });
};

// Variáveis para rastreamento de estado e debug
const allMockData = ref(generateMockData(500));
const dataLoaded = ref(false);
const mockApiUrl = ref('/api/mock-users');
const lastApiRequest = ref('No requests yet');
const currentDataSample = ref([]);
const lastSearchParams = ref({});

const dataTable = ref(null);
const searchDataTable = ref(null);
const customDataTable = ref(null);

// Status colors for badges
const getStatusColor = (status) => {
    switch (status) {
        case 'Active':
            return { bg: 'bg-green-100 dark:bg-green-900', text: 'text-green-800 dark:text-green-300' };
        case 'Inactive':
            return { bg: 'bg-red-100 dark:bg-red-900', text: 'text-red-800 dark:text-red-300' };
        case 'Pending':
            return { bg: 'bg-yellow-100 dark:bg-yellow-900', text: 'text-yellow-800 dark:text-yellow-300' };
        case 'Suspended':
            return { bg: 'bg-gray-100 dark:bg-gray-900', text: 'text-gray-800 dark:text-gray-300' };
        default:
            return { bg: 'bg-blue-100 dark:bg-blue-900', text: 'text-blue-800 dark:text-blue-300' };
    }
};

// Define available actions for the table
const tableActions = ref([
    {
        id: 'delete-selected',
        label: 'Delete Selected',
        requiresSelection: true,
        handler: (items) => deleteSelected(items)
    },
    {
        id: 'export-all',
        label: 'Export All',
        requiresSelection: false,
        handler: () => exportAll()
    },
    {
        id: 'activate-selected',
        label: 'Activate Selected',
        requiresSelection: true,
        visible: (items) => items.some(item => item.status !== 'Active')
    }
]);

// Event handlers for debugging
const handlePageChange = (event) => {
    console.log('Page changed:', event);
};

const handleSortChange = (event) => {
    console.log('Sort changed:', event);
};

const handleSearchChange = (event) => {
    lastSearchParams.value = event;
    console.log('Search changed:', event);
};

const handleFetchSuccess = (data) => {
    if (data.data && data.data.length > 0) {
        currentDataSample.value = data.data.slice(0, 3);
    }
};

const loadMockData = () => {
    // Restaurar o fetch original se já existir uma interceptação
    if (window._originalFetch) {
        window.fetch = window._originalFetch;
    }

    // Salvar o fetch original
    window._originalFetch = window.fetch;

    // Esta função irá interceptar as chamadas fetch e simular uma API real
    window.fetch = async (url, options) => {
        if (url.toString().includes('/api/mock-users')) {
            // Registrar a requisição para debug
            lastApiRequest.value = url.toString();

            // Extrair parâmetros da URL
            const urlObj = new URL(url);
            const params = {};

            // Capturar todos os parâmetros
            for (const [key, value] of urlObj.searchParams.entries()) {
                params[key] = value;
            }

            const limit = parseInt(params.limit || '10');
            const offset = parseInt(params.offset || '0');
            const sortBy = params.sortBy || 'id';
            const sort = params.sort || 'ASC';
            const search = params.search || '';
            const searchField = params.searchField || '';

            console.log('API Request:', { limit, offset, sortBy, sort, search, searchField });

            // Filtrar dados com base nos parâmetros de busca
            let filteredData = [...allMockData.value];

            if (search) {
                filteredData = filteredData.filter(item => {
                    if (searchField) {
                        // Busca em campo específico
                        const fieldValue = item[searchField]?.toString().toLowerCase();
                        return fieldValue && fieldValue.includes(search.toLowerCase());
                    } else {
                        // Busca em todos os campos
                        return Object.values(item).some(
                            value => value?.toString().toLowerCase().includes(search.toLowerCase())
                        );
                    }
                });
            }

            // Ordenar dados
            filteredData.sort((a, b) => {
                const valueA = a[sortBy];
                const valueB = b[sortBy];

                // Verificar se são strings numéricas (como IDs)
                if (typeof valueA === 'string' && typeof valueB === 'string') {
                    // Se ambos podem ser convertidos para números, faça uma comparação numérica
                    if (!isNaN(Number(valueA)) && !isNaN(Number(valueB))) {
                        return sort === 'ASC'
                            ? Number(valueA) - Number(valueB)
                            : Number(valueB) - Number(valueA);
                    }
                    // Caso contrário, continue com a comparação de strings
                    return sort === 'ASC'
                        ? valueA.localeCompare(valueB)
                        : valueB.localeCompare(valueA);
                }

                // Ordenação de números
                return sort === 'ASC'
                    ? valueA - valueB
                    : valueB - valueA;
            });

            // Aplicar paginação
            const paginatedData = filteredData.slice(offset, offset + limit);

            console.log(`Returning ${paginatedData.length} items from offset ${offset}`);

            // Simular delay de rede
            await new Promise(resolve => setTimeout(resolve, 300));

            // Retornar resposta formatada
            return {
                ok: true,
                json: async () => ({
                    status: 200,
                    processingTime: Math.floor(Math.random() * 50) + 10,
                    result: {
                        success: true,
                        count: filteredData.length, // Total após filtros
                        pagination: {
                            limit,
                            offset,
                            sortBy,
                            sort,
                            search,
                            searchField,
                            filters: {}
                        },
                        data: paginatedData // Somente os dados da página atual
                    }
                })
            };
        }

        // Para outras URLs, use o fetch original
        return window._originalFetch(url, options);
    };

    dataLoaded.value = true;

    // Atualizar as tabelas
    if (dataTable.value) {
        dataTable.value.fetchData();
    }

    if (searchDataTable.value) {
        searchDataTable.value.fetchData();
    }

    if (customDataTable.value) {
        customDataTable.value.fetchData();
    }
};

const viewItem = (item) => {
    alert(`View item: ${item.username}`);
};

const deleteItem = (item) => {
    if (confirm(`Are you sure you want to delete ${item.username}?`)) {
        alert(`Item deleted: ${item.username}`);
    }
};

onMounted(() => {
    // Iniciar com a interceptação de fetch para simular API
    loadMockData();
});
</script>
