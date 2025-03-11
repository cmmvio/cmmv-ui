<template>
    <BaseLayout>
        <h1>Doughnut Chart</h1>

        <p>
            The <code>CChartDoughnut (alias: c-chart-doughnut)</code> component allows you to create interactive and responsive
            doughnut charts, perfect for displaying proportional data with a hollow center. This component is built on
            top of <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">Chart.js</a>, a powerful
            JavaScript charting library.
        </p>

        <h3>Basic Usage</h3>

        <p>
            The following example demonstrates the basic usage of the <code>CChartDoughnut</code> component.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-doughnut :data="basicChartData" title="Website Traffic Sources" height="300px" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-doughnut
        :data="doughnutData"
        title="Website Traffic Sources"
        height="300px"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const doughnutData = ref({
    labels: ['Organic Search', 'Direct', 'Social Media', 'Email', 'Referral'],
    datasets: [
        {
            data: [45, 25, 15, 10, 5],
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

        <h3>Custom Cutout</h3>

        <p>
            You can customize the size of the central cutout in the doughnut chart using the <code>cutout</code> property.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-doughnut :data="basicChartData" title="Large Cutout (70%)" height="300px" cutout="70%" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-doughnut
        :data="doughnutData"
        title="Large Cutout (70%)"
        height="300px"
        cutout="70%"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const doughnutData = ref({
    labels: ['Organic Search', 'Direct', 'Social Media', 'Email', 'Referral'],
    datasets: [
        {
            data: [45, 25, 15, 10, 5],
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

        <h3>Partial Doughnut</h3>

        <p>
            You can create partial doughnut charts by adjusting the <code>rotation</code> and <code>circumference</code> properties.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-doughnut
                    :data="basicChartData"
                    title="Semi-Circle Doughnut"
                    height="300px"
                    :rotation="-90"
                    :circumference="180" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-doughnut
        :data="doughnutData"
        title="Semi-Circle Doughnut"
        height="300px"
        :rotation="-90"
        :circumference="180"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const doughnutData = ref({
    labels: ['Organic Search', 'Direct', 'Social Media', 'Email', 'Referral'],
    datasets: [
        {
            data: [45, 25, 15, 10, 5],
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

        <h3>Multiple Datasets</h3>

        <p>
            While less common, you can also create doughnut charts with multiple datasets.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-doughnut :data="multiDatasetChart" title="Traffic Comparison" height="300px" />
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-doughnut
        :data="doughnutData"
        title="Traffic Comparison"
        height="300px"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const doughnutData = ref({
    labels: ['Organic Search', 'Direct', 'Social Media', 'Email', 'Referral'],
    datasets: [
        {
            label: '2022',
            data: [40, 20, 15, 15, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(153, 102, 255, 0.7)'
            ]
        },
        {
            label: '2023',
            data: [45, 25, 15, 10, 5],
            backgroundColor: [
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 99, 132, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(153, 102, 255, 0.9)'
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
                <c-chart-doughnut
                    :data="basicChartData"
                    title="Custom Legend"
                    height="300px"
                    :legend="customLegend" />
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-doughnut
        :data="doughnutData"
        title="Custom Legend"
        height="300px"
        :legend="legend"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const doughnutData = ref({
    labels: ['Organic Search', 'Direct', 'Social Media', 'Email', 'Referral'],
    datasets: [
        {
            data: [45, 25, 15, 10, 5],
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
    position: 'right',
    labels: {
        font: {
            size: 14
        },
        usePointStyle: true,
        padding: 20
    }
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Interactivity</h3>

        <p>
            The <code>CChartDoughnut</code> component emits events when the user interacts with the chart.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-doughnut :data="basicChartData" title="Interactive Doughnut Chart" height="300px"
                    @chart-click="handleChartClick" @chart-hover="handleChartHover" />
                <div v-if="selectedSegment" class="mt-2 p-2 border rounded">
                    <strong>Selected segment:</strong> {{ selectedSegment.label }} - {{ selectedSegment.value }}%
                </div>
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-doughnut
        :data="doughnutData"
        title="Interactive Doughnut Chart"
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

const doughnutData = ref({
    labels: ['Organic Search', 'Direct', 'Social Media', 'Email', 'Referral'],
    datasets: [
        {
            data: [45, 25, 15, 10, 5],
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
        label: doughnutData.value.labels[event.index],
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
            You can update the doughnut chart in real-time, adding or removing data segments.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-doughnut ref="realtimeChart" :data="realtimeData" title="Dynamic Traffic Sources" height="300px" />
                <div class="mt-2 flex flex-wrap gap-2">
                    <c-button color="primary" @click="addSource" class="inline-flex items-center gap-x-2">
                        <IconPlus class="h-5 w-5 text-white" aria-hidden="true" />
                        Add Source
                    </c-button>
                    <c-button color="danger" @click="removeSource" class="inline-flex items-center gap-x-2">
                        <IconMinus class="h-5 w-5 text-white" aria-hidden="true" />
                        Remove Source
                    </c-button>
                    <c-button color="success" @click="randomizeData" class="inline-flex items-center gap-x-2">
                        <IconRefresh class="h-5 w-5 text-white" aria-hidden="true" />
                        Randomize Data
                    </c-button>
                </div>
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-doughnut
        ref="chartRef"
        :data="doughnutData"
        title="Dynamic Traffic Sources"
        height="300px"
    /&gt;
    &lt;div class="mt-2 flex flex-wrap gap-2"&gt;
        &lt;c-button
            color="primary"
            @click="addSource"
            class="inline-flex items-center gap-x-2"
        &gt;
            &lt;IconPlus class="h-5 w-5" aria-hidden="true" /&gt;
            Add Source
        &lt;/c-button&gt;
        &lt;c-button
            color="danger"
            @click="removeSource"
            class="inline-flex items-center gap-x-2"
        &gt;
            &lt;IconMinus class="h-5 w-5" aria-hidden="true" /&gt;
            Remove Source
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

const trafficSources = [
    'Organic Search', 'Direct', 'Social Media', 'Email', 'Referral',
    'Paid Search', 'Affiliates', 'Display Ads', 'Video', 'Other'
];

const doughnutData = ref({
    labels: trafficSources.slice(0, 5),
    datasets: [
        {
            data: [45, 25, 15, 10, 5],
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

const addSource = () => {
    if (doughnutData.value.labels.length < trafficSources.length) {
        const nextSource = trafficSources[doughnutData.value.labels.length];

        // Using the exposed method from the component
        chartRef.value.addData(nextSource, [
            Math.floor(Math.random() * 20) + 1 // Random value between 1-20
        ]);
    }
};

const removeSource = () => {
    if (doughnutData.value.labels.length > 2) {
        // Using the exposed method from the component
        chartRef.value.removeData();
    }
};

const randomizeData = () => {
    // Generate random data that sums to 100
    const count = doughnutData.value.labels.length;
    const randomData = Array(count).fill(0).map(() => Math.floor(Math.random() * 100));
    const sum = randomData.reduce((a, b) => a + b, 0);

    doughnutData.value.datasets[0].data = randomData.map(value =>
        Math.round((value / sum) * 100)
    );
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Chart Bar" previousLink="/chart-bar" next="Chart Financial" nextLink="/chart-financial" />
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
    labels: ['Organic Search', 'Direct', 'Social Media', 'Email', 'Referral'],
    datasets: [
        {
            data: [45, 25, 15, 10, 5],
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

const multiDatasetChart = ref({
    labels: ['Organic Search', 'Direct', 'Social Media', 'Email', 'Referral'],
    datasets: [
        {
            label: '2022',
            data: [40, 20, 15, 15, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(153, 102, 255, 0.7)'
            ]
        },
        {
            label: '2023',
            data: [45, 25, 15, 10, 5],
            backgroundColor: [
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 99, 132, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(153, 102, 255, 0.9)'
            ]
        }
    ]
});

const customLegend = ref({
    display: true,
    position: 'right',
    labels: {
        font: {
            size: 14
        },
        usePointStyle: true,
        padding: 20
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

const trafficSources = [
    'Organic Search', 'Direct', 'Social Media', 'Email', 'Referral',
    'Paid Search', 'Affiliates', 'Display Ads', 'Video', 'Other'
];

const realtimeData = ref({
    labels: trafficSources.slice(0, 5),
    datasets: [
        {
            data: [45, 25, 15, 10, 5],
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

const addSource = () => {
    if (realtimeData.value.labels.length < trafficSources.length) {
        const nextSource = trafficSources[realtimeData.value.labels.length];

        if (realtimeChart.value) {
            realtimeChart.value.addData(nextSource, [
                Math.floor(Math.random() * 20) + 1 // Random value between 1-20
            ]);
        }
    }
};

const removeSource = () => {
    if (realtimeData.value.labels.length > 2 && realtimeChart.value) {
        realtimeChart.value.removeData();
    }
};

const randomizeData = () => {
    // Generate random data that sums to 100
    const count = realtimeData.value.labels.length;
    const randomData = Array(count).fill(0).map(() => Math.floor(Math.random() * 100));
    const sum = randomData.reduce((a, b) => a + b, 0);

    realtimeData.value.datasets[0].data = randomData.map(value =>
        Math.round((value / sum) * 100)
    );
};
</script>
