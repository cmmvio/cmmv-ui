<template>
    <BaseLayout>
        <c-seo
            section="Chart Pie Component"
            description="Learn how to use the CChartPie component in CMMV UI. A pie chart component for visualizing proportional data with customizable slices, colors, and interactive features."
            :keywords="['pie chart', 'component', 'ui', 'data visualization', 'charts', 'graphs']"
        />

        <h1>Pie Chart</h1>

        <p>
            The <code>CChartPie (alias: c-chart-pie)</code> component allows you to create interactive and responsive
            pie charts, perfect for displaying proportional data in a simple and intuitive way. This component is built on
            top of <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">Chart.js</a>, a powerful
            JavaScript charting library.
        </p>

        <h3>Basic Usage</h3>

        <p>
            The following example demonstrates the basic usage of the <code>CChartPie</code> component.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-pie :data="basicChartData" title="Sales by Department" height="300px" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-pie
        :data="pieData"
        title="Sales by Department"
        height="300px"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const pieData = ref({
    labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys'],
    datasets: [
        {
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ]
        }
    ]
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Colors</h3>

        <p>
            You can customize the colors of the pie segments either by providing them in the dataset or through the component's <code>colors</code> property.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-pie :data="customColorsData" title="Sales by Department (Custom Colors)" height="300px"
                    :colors="customColors" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-pie
        :data="pieData"
        title="Sales by Department (Custom Colors)"
        height="300px"
        :colors="colors"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const pieData = ref({
    labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys'],
    datasets: [
        {
            data: [30, 25, 20, 15, 10]
        }
    ]
});

const colors = ref([
    'rgba(65, 105, 225, 0.8)',  // Royal Blue
    'rgba(220, 20, 60, 0.8)',   // Crimson
    'rgba(46, 139, 87, 0.8)',   // Sea Green
    'rgba(255, 165, 0, 0.8)',   // Orange
    'rgba(128, 0, 128, 0.8)'    // Purple
]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Partial Pie</h3>

        <p>
            You can create partial pie charts by adjusting the <code>rotation</code> and <code>circumference</code> properties.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-pie
                    :data="basicChartData"
                    title="Quarter Pie Chart"
                    height="300px"
                    :rotation="-45"
                    :circumference="90" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-pie
        :data="pieData"
        title="Quarter Pie Chart"
        height="300px"
        :rotation="-45"
        :circumference="90"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const pieData = ref({
    labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys'],
    datasets: [
        {
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ]
        }
    ]
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Border Styling</h3>

        <p>
            You can customize the borders of the pie segments using the <code>borderWidth</code> property.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-pie
                    :data="borderStyledData"
                    title="Styled Borders"
                    height="300px"
                    :borderWidth="2" />
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-pie
        :data="pieData"
        title="Styled Borders"
        height="300px"
        :borderWidth="2"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const pieData = ref({
    labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys'],
    datasets: [
        {
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ]
        }
    ]
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Legend</h3>

        <p>
            You can customize the legend position and other options.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-pie
                    :data="basicChartData"
                    title="Bottom Legend"
                    height="300px"
                    :legend="customLegend" />
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-pie
        :data="pieData"
        title="Bottom Legend"
        height="300px"
        :legend="legend"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const pieData = ref({
    labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys'],
    datasets: [
        {
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ]
        }
    ]
});

const legend = ref({
    display: true,
    position: 'bottom',
    labels: {
        font: {
            size: 12
        },
        boxWidth: 15,
        padding: 15
    }
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Interactivity</h3>

        <p>
            The <code>CChartPie</code> component emits events when the user interacts with the chart.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-pie :data="basicChartData" title="Interactive Pie Chart" height="300px"
                    @chart-click="handleChartClick" @chart-hover="handleChartHover" />
                <div v-if="selectedSegment" class="mt-2 p-2 border rounded">
                    <strong>Selected segment:</strong> {{ selectedSegment.label }} - {{ selectedSegment.value }}%
                </div>
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-pie
        :data="pieData"
        title="Interactive Pie Chart"
        height="300px"
        @chart-click="handleChartClick"
        @chart-hover="handleChartHover"
    /&gt;
    &lt;div v-if="selectedSegment" class="mt-2 p-2 border rounded"&gt;
        &lt;strong&gt;Selected segment:&lt;/strong&gt;
        &#123;&#123; selectedSegment.label &#125;&#125; - &#123;&#123; selectedSegment.value &#125;&#125;%
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const pieData = ref({
    labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys'],
    datasets: [
        {
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ]
        }
    ]
});

const selectedSegment = ref(null);

const handleChartClick = (event) => {
    selectedSegment.value = {
        label: pieData.value.labels[event.index],
        value: event.value
    };
};

const handleChartHover = (event) => {
    // You can implement additional hover logic here
    console.log('Hover:', event);
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Dynamic Data Updates</h3>

        <p>
            You can update the pie chart in real-time, adding or removing data segments.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-pie ref="realtimeChart" :data="realtimeData" title="Dynamic Sales Data" height="300px" />
                <div class="mt-2 flex flex-wrap gap-2">
                    <c-button color="primary" @click="addDepartment" class="inline-flex items-center gap-x-2">
                        <IconPlus class="h-5 w-5 text-white" aria-hidden="true" />
                        Add Department
                    </c-button>
                    <c-button color="danger" @click="removeDepartment" class="inline-flex items-center gap-x-2">
                        <IconMinus class="h-5 w-5 text-white" aria-hidden="true" />
                        Remove Department
                    </c-button>
                    <c-button color="success" @click="randomizeData" class="inline-flex items-center gap-x-2">
                        <IconRefresh class="h-5 w-5 text-white" aria-hidden="true" />
                        Randomize Data
                    </c-button>
                </div>
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-pie
        ref="chartRef"
        :data="pieData"
        title="Dynamic Sales Data"
        height="300px"
    /&gt;
    &lt;div class="mt-2 flex flex-wrap gap-2"&gt;
        &lt;c-button
            color="primary"
            @click="addDepartment"
            class="inline-flex items-center gap-x-2"
        &gt;
            &lt;IconPlus class="h-5 w-5" aria-hidden="true" /&gt;
            Add Department
        &lt;/c-button&gt;
        &lt;c-button
            color="danger"
            @click="removeDepartment"
            class="inline-flex items-center gap-x-2"
        &gt;
            &lt;IconMinus class="h-5 w-5" aria-hidden="true" /&gt;
            Remove Department
        &lt;/c-button&gt;
        &lt;c-button
            color="success"
            @click="randomizeData"
            class="inline-flex items-center gap-x-2"
        &gt;
            &lt;IconRefresh class="h-5 w-5" aria-hidden="true" /&gt;
            Randomize Data
        &lt;/c-button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const chartRef = ref(null);

const departments = [
    'Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys',
    'Beauty', 'Sports', 'Automotive', 'Health', 'Grocery'
];

const pieData = ref({
    labels: departments.slice(0, 5),
    datasets: [
        {
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ]
        }
    ]
});

const addDepartment = () => {
    if (pieData.value.labels.length < departments.length) {
        const nextDept = departments[pieData.value.labels.length];

        // Using the exposed method from the component
        chartRef.value.addData(nextDept, [
            Math.floor(Math.random() * 20) + 5 // Random value between 5-25
        ]);
    }
};

const removeDepartment = () => {
    if (pieData.value.labels.length > 2) {
        // Using the exposed method from the component
        chartRef.value.removeData();
    }
};

const randomizeData = () => {
    // Generate random values for each department
    pieData.value.datasets[0].data = pieData.value.labels.map(() =>
        Math.floor(Math.random() * 30) + 5 // Random value between 5-35
    );
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Chart Line" previousLink="/chart-line" next="Chart Polar" nextLink="/chart-polar" />
    </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

import IconPlus from "../../../src/components/icons/IconPlus.vue";
import IconMinus from "../../../src/components/icons/IconMinus.vue";
import IconRefresh from "../../../src/components/icons/IconRefresh.vue";

const basicChartData = ref({
    labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys'],
    datasets: [
        {
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ]
        }
    ]
});

const customColors = ref([
    'rgba(65, 105, 225, 0.8)',  // Royal Blue
    'rgba(220, 20, 60, 0.8)',   // Crimson
    'rgba(46, 139, 87, 0.8)',   // Sea Green
    'rgba(255, 165, 0, 0.8)',   // Orange
    'rgba(128, 0, 128, 0.8)'    // Purple
]);

const customColorsData = ref({
    labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys'],
    datasets: [
        {
            data: [30, 25, 20, 15, 10]
        }
    ]
});

const borderStyledData = ref({
    labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys'],
    datasets: [
        {
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ]
        }
    ]
});

const customLegend = ref({
    display: true,
    position: 'bottom',
    labels: {
        font: {
            size: 12
        },
        boxWidth: 15,
        padding: 15
    }
});

const selectedSegment = ref(null);

const handleChartClick = (event) => {
    selectedSegment.value = {
        label: basicChartData.value.labels[event.index],
        value: event.value
    };
};

const handleChartHover = (event) => {
    console.log('Hover:', event);
};

const realtimeChart = ref(null);

const departments = [
    'Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys',
    'Beauty', 'Sports', 'Automotive', 'Health', 'Grocery'
];

const realtimeData = ref({
    labels: departments.slice(0, 5),
    datasets: [
        {
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ]
        }
    ]
});

const addDepartment = () => {
    if (realtimeData.value.labels.length < departments.length) {
        const nextDept = departments[realtimeData.value.labels.length];

        if (realtimeChart.value) {
            realtimeChart.value.addData(nextDept, [
                Math.floor(Math.random() * 20) + 5 // Random value between 5-25
            ]);
        }
    }
};

const removeDepartment = () => {
    if (realtimeData.value.labels.length > 2 && realtimeChart.value) {
        realtimeChart.value.removeData();
    }
};

const randomizeData = () => {
    // Generate random values for each department
    realtimeData.value.datasets[0].data = realtimeData.value.labels.map(() =>
        Math.floor(Math.random() * 30) + 5 // Random value between 5-35
    );
};
</script>
