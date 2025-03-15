<template>
    <BaseLayout>
        <c-seo
            section="Chart Polar Component"
            description="Learn how to use the CChartPolar component in CMMV UI. A polar chart component for visualizing cyclic or periodic data with customizable angles, radii, and interactive features."
            :keywords="['polar chart', 'component', 'ui', 'data visualization', 'charts', 'graphs']"
        />

        <h1>Polar Area Chart</h1>

        <p>
            The <code>CChartPolar (alias: c-chart-polar)</code> component allows you to create interactive and responsive
            polar area charts, which are similar to pie charts but with equal angular width for each segment. This makes them
            excellent for showing the relative size of data in a visually appealing way. This component is built on
            top of <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">Chart.js</a>, a powerful
            JavaScript charting library.
        </p>

        <h3>Basic Usage</h3>

        <p>
            The following example demonstrates the basic usage of the <code>CChartPolar</code> component.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-polar :data="basicChartData" title="Monthly Budget Allocation" height="300px" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-polar
        :data="polarData"
        title="Monthly Budget Allocation"
        height="300px"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const polarData = ref({
    labels: ['Housing', 'Food', 'Transportation', 'Utilities', 'Entertainment', 'Savings'],
    datasets: [
        {
            data: [1200, 850, 300, 200, 250, 500],
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ]
        }
    ]
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Customizing Colors</h3>

        <p>
            You can customize the colors of the chart segments either using the component's <code>colors</code> property or
            by specifying colors directly in the dataset.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-polar :data="customColorsData" title="Custom Colors" height="300px"
                    :colors="customColors" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-polar
        :data="polarData"
        title="Custom Colors"
        height="300px"
        :colors="colors"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const polarData = ref({
    labels: ['Housing', 'Food', 'Transportation', 'Utilities', 'Entertainment', 'Savings'],
    datasets: [
        {
            data: [1200, 850, 300, 200, 250, 500]
        }
    ]
});

const colors = ref([
    'rgba(66, 135, 245, 0.7)',  // Blue
    'rgba(245, 66, 66, 0.7)',   // Red
    'rgba(66, 245, 149, 0.7)',  // Green
    'rgba(245, 224, 66, 0.7)',  // Yellow
    'rgba(188, 66, 245, 0.7)',  // Purple
    'rgba(245, 147, 66, 0.7)'   // Orange
]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Scale Configuration</h3>

        <p>
            You can customize the scale of the polar chart to better display your data.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-polar :data="basicChartData" title="Custom Scale" height="300px" :scales="customScales" />
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-polar
        :data="polarData"
        title="Custom Scale"
        height="300px"
        :scales="scales"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const polarData = ref({
    labels: ['Housing', 'Food', 'Transportation', 'Utilities', 'Entertainment', 'Savings'],
    datasets: [
        {
            data: [1200, 850, 300, 200, 250, 500],
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ]
        }
    ]
});

const scales = ref({
    r: {
        min: 0,
        max: 1500,
        ticks: {
            stepSize: 300,
            backdropColor: 'rgba(255, 255, 255, 0.75)'
        },
        grid: {
            color: 'rgba(200, 200, 200, 0.3)'
        },
        angleLines: {
            color: 'rgba(150, 150, 150, 0.3)',
            lineWidth: 2
        }
    }
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Border Styling</h3>

        <p>
            You can customize the borders of the chart segments using the <code>borderWidth</code> property and by setting
            borderColor in the dataset.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-polar :data="borderStyledData" title="Custom Borders" height="300px" :borderWidth="2" />
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-polar
        :data="polarData"
        title="Custom Borders"
        height="300px"
        :borderWidth="2"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const polarData = ref({
    labels: ['Housing', 'Food', 'Transportation', 'Utilities', 'Entertainment', 'Savings'],
    datasets: [
        {
            data: [1200, 850, 300, 200, 250, 500],
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ]
        }
    ]
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Interactivity</h3>

        <p>
            The <code>CChartPolar</code> component emits events when the user interacts with the chart.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-polar :data="basicChartData" title="Interactive Polar Chart" height="300px"
                    @chart-click="handleChartClick" @chart-hover="handleChartHover" />
                <div v-if="selectedSegment" class="mt-2 p-2 border rounded">
                    <strong>Selected category:</strong> {{ selectedSegment.label }} - ${{ selectedSegment.value }}
                </div>
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-polar
        :data="polarData"
        title="Interactive Polar Chart"
        height="300px"
        @chart-click="handleChartClick"
        @chart-hover="handleChartHover"
    /&gt;
    &lt;div v-if="selectedSegment" class="mt-2 p-2 border rounded"&gt;
        &lt;strong&gt;Selected category:&lt;/strong&gt;
        &#123;&#123; selectedSegment.label &#125;&#125; - $&#123;&#123; selectedSegment.value &#125;&#125;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const polarData = ref({
    labels: ['Housing', 'Food', 'Transportation', 'Utilities', 'Entertainment', 'Savings'],
    datasets: [
        {
            data: [1200, 850, 300, 200, 250, 500],
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ]
        }
    ]
});

const selectedSegment = ref(null);

const handleChartClick = (event) => {
    selectedSegment.value = {
        label: polarData.value.labels[event.index],
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
            You can update the polar chart in real-time, adding or removing data segments.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-polar ref="realtimeChart" :data="realtimeData" title="Dynamic Budget Allocation" height="300px" />
                <div class="mt-2 flex flex-wrap gap-2">
                    <c-button color="primary" @click="addCategory" class="inline-flex items-center gap-x-2">
                        <IconPlus class="h-5 w-5 text-white" aria-hidden="true" />
                        Add Category
                    </c-button>
                    <c-button color="danger" @click="removeCategory" class="inline-flex items-center gap-x-2">
                        <IconMinus class="h-5 w-5 text-white" aria-hidden="true" />
                        Remove Category
                    </c-button>
                    <c-button color="success" @click="randomizeData" class="inline-flex items-center gap-x-2">
                        <IconRefresh class="h-5 w-5 text-white" aria-hidden="true" />
                        Randomize Data
                    </c-button>
                </div>
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-polar
        ref="chartRef"
        :data="polarData"
        title="Dynamic Budget Allocation"
        height="300px"
    /&gt;
    &lt;div class="mt-2 flex flex-wrap gap-2"&gt;
        &lt;c-button
            color="primary"
            @click="addCategory"
            class="inline-flex items-center gap-x-2"
        &gt;
            &lt;IconPlus class="h-5 w-5" aria-hidden="true" /&gt;
            Add Category
        &lt;/c-button&gt;
        &lt;c-button
            color="danger"
            @click="removeCategory"
            class="inline-flex items-center gap-x-2"
        &gt;
            &lt;IconMinus class="h-5 w-5" aria-hidden="true" /&gt;
            Remove Category
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

const categories = [
    'Housing', 'Food', 'Transportation', 'Utilities',
    'Entertainment', 'Savings', 'Education', 'Healthcare',
    'Clothing', 'Gifts & Donations'
];

const polarData = ref({
    labels: categories.slice(0, 6),
    datasets: [
        {
            data: [1200, 850, 300, 200, 250, 500],
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ]
        }
    ]
});

const addCategory = () => {
    if (polarData.value.labels.length < categories.length) {
        const nextCategory = categories[polarData.value.labels.length];

        // Using the exposed method from the component
        chartRef.value.addData(nextCategory, [
            Math.floor(Math.random() * 400) + 100 // Random value between 100-500
        ]);
    }
};

const removeCategory = () => {
    if (polarData.value.labels.length > 3) {
        // Using the exposed method from the component
        chartRef.value.removeData();
    }
};

const randomizeData = () => {
    polarData.value.datasets[0].data = polarData.value.labels.map(() =>
        Math.floor(Math.random() * 1000) + 100 // Random value between 100-1100
    );
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Chart Pie" previousLink="/chart-pie" next="Chart Radar" nextLink="/chart-radar" />
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
    labels: ['Housing', 'Food', 'Transportation', 'Utilities', 'Entertainment', 'Savings'],
    datasets: [
        {
            data: [1200, 850, 300, 200, 250, 500],
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ]
        }
    ]
});

const customColors = ref([
    'rgba(66, 135, 245, 0.7)',  // Blue
    'rgba(245, 66, 66, 0.7)',   // Red
    'rgba(66, 245, 149, 0.7)',  // Green
    'rgba(245, 224, 66, 0.7)',  // Yellow
    'rgba(188, 66, 245, 0.7)',  // Purple
    'rgba(245, 147, 66, 0.7)'   // Orange
]);

const customColorsData = ref({
    labels: ['Housing', 'Food', 'Transportation', 'Utilities', 'Entertainment', 'Savings'],
    datasets: [
        {
            data: [1200, 850, 300, 200, 250, 500]
        }
    ]
});

const borderStyledData = ref({
    labels: ['Housing', 'Food', 'Transportation', 'Utilities', 'Entertainment', 'Savings'],
    datasets: [
        {
            data: [1200, 850, 300, 200, 250, 500],
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ]
        }
    ]
});

const customScales = ref({
    r: {
        min: 0,
        max: 1500,
        ticks: {
            stepSize: 300,
            backdropColor: 'rgba(255, 255, 255, 0.75)'
        },
        grid: {
            color: 'rgba(200, 200, 200, 0.3)'
        },
        angleLines: {
            color: 'rgba(150, 150, 150, 0.3)',
            lineWidth: 2
        }
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

const categories = [
    'Housing', 'Food', 'Transportation', 'Utilities',
    'Entertainment', 'Savings', 'Education', 'Healthcare',
    'Clothing', 'Gifts & Donations'
];

const realtimeData = ref({
    labels: categories.slice(0, 6),
    datasets: [
        {
            data: [1200, 850, 300, 200, 250, 500],
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ]
        }
    ]
});

const addCategory = () => {
    if (realtimeData.value.labels.length < categories.length) {
        const nextCategory = categories[realtimeData.value.labels.length];

        if (realtimeChart.value) {
            realtimeChart.value.addData(nextCategory, [
                Math.floor(Math.random() * 400) + 100 // Random value between 100-500
            ]);
        }
    }
};

const removeCategory = () => {
    if (realtimeData.value.labels.length > 3 && realtimeChart.value) {
        realtimeChart.value.removeData();
    }
};

const randomizeData = () => {
    realtimeData.value.datasets[0].data = realtimeData.value.labels.map(() =>
        Math.floor(Math.random() * 1000) + 100 // Random value between 100-1100
    );
};
</script>
