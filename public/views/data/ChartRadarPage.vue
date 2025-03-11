<template>
    <BaseLayout>
        <h1>Radar Chart</h1>

        <p>
            The <code>CChartRadar (alias: c-chart-radar)</code> component allows you to create interactive and responsive
            radar charts, perfect for comparing multiple variables across different categories. This component is built on
            top of <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">Chart.js</a>, a powerful
            JavaScript charting library.
        </p>

        <h3>Basic Usage</h3>

        <p>
            The following example demonstrates the basic usage of the <code>CChartRadar</code> component with a single
            data series.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-radar :data="basicChartData" title="Skill Assessment" height="300px" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-radar
        :data="radarData"
        title="Skill Assessment"
        height="300px"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const radarData = ref({
    labels: ['Coding', 'Design', 'Communication', 'Problem Solving', 'Teamwork', 'Leadership'],
    datasets: [
        {
            label: 'Developer A',
            data: [90, 60, 75, 85, 70, 65],
            borderColor: 'rgba(54, 162, 235, 0.8)',
            backgroundColor: 'rgba(54, 162, 235, 0.3)'
        }
    ]
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Multiple Series</h3>

        <p>
            A common use case for radar charts is comparing different entities across the same set of attributes.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-radar :data="multiSeriesData" title="Team Comparison" height="300px" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-radar
        :data="radarData"
        title="Team Comparison"
        height="300px"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const radarData = ref({
    labels: ['Coding', 'Design', 'Communication', 'Problem Solving', 'Teamwork', 'Leadership'],
    datasets: [
        {
            label: 'Team Alpha',
            data: [90, 60, 75, 85, 70, 65],
            borderColor: 'rgba(54, 162, 235, 0.8)',
            backgroundColor: 'rgba(54, 162, 235, 0.3)'
        },
        {
            label: 'Team Beta',
            data: [70, 85, 80, 70, 90, 75],
            borderColor: 'rgba(255, 99, 132, 0.8)',
            backgroundColor: 'rgba(255, 99, 132, 0.3)'
        }
    ]
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Styling Options</h3>

        <p>
            You can customize the appearance of your radar chart by controlling the fill, point size, and other styling options.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-radar :data="styledChartData" title="Custom Styled Radar" height="300px" :fill="false" :pointSize="6" />
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-radar
        :data="radarData"
        title="Custom Styled Radar"
        height="300px"
        :fill="false"
        :pointSize="6"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const radarData = ref({
    labels: ['Coding', 'Design', 'Communication', 'Problem Solving', 'Teamwork', 'Leadership'],
    datasets: [
        {
            label: 'Developer A',
            data: [90, 60, 75, 85, 70, 65],
            borderColor: 'rgba(75, 192, 192, 0.8)',
            borderWidth: 3,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff'
        }
    ]
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Scale Configuration</h3>

        <p>
            You can customize the scale of the radar chart to better fit your data range.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-radar :data="basicChartData" title="Custom Scale" height="300px" :scales="customScales" />
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-radar
        :data="radarData"
        title="Custom Scale"
        height="300px"
        :scales="scales"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const radarData = ref({
    labels: ['Coding', 'Design', 'Communication', 'Problem Solving', 'Teamwork', 'Leadership'],
    datasets: [
        {
            label: 'Developer A',
            data: [90, 60, 75, 85, 70, 65],
            borderColor: 'rgba(54, 162, 235, 0.8)',
            backgroundColor: 'rgba(54, 162, 235, 0.3)'
        }
    ]
});

const scales = ref({
    r: {
        min: 40,
        max: 100,
        ticks: {
            stepSize: 10
        },
        pointLabels: {
            font: {
                size: 14,
                weight: 'bold'
            }
        },
        grid: {
            color: 'rgba(200, 200, 200, 0.3)'
        },
        angleLines: {
            color: 'rgba(150, 150, 150, 0.3)'
        }
    }
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Interactivity</h3>

        <p>
            The <code>CChartRadar</code> component emits events when the user interacts with the chart.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-radar :data="basicChartData" title="Interactive Radar Chart" height="300px"
                    @chart-click="handleChartClick" @chart-hover="handleChartHover" />
                <div v-if="selectedPoint" class="mt-2 p-2 border rounded">
                    <strong>Selected attribute:</strong> {{ selectedPoint.label }} - {{ selectedPoint.value }}
                </div>
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-radar
        :data="radarData"
        title="Interactive Radar Chart"
        height="300px"
        @chart-click="handleChartClick"
        @chart-hover="handleChartHover"
    /&gt;
    &lt;div v-if="selectedPoint" class="mt-2 p-2 border rounded"&gt;
        &lt;strong&gt;Selected attribute:&lt;/strong&gt;
        &#123;&#123; selectedPoint.label &#125;&#125; - &#123;&#123; selectedPoint.value &#125;&#125;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const radarData = ref({
    labels: ['Coding', 'Design', 'Communication', 'Problem Solving', 'Teamwork', 'Leadership'],
    datasets: [
        {
            label: 'Developer A',
            data: [90, 60, 75, 85, 70, 65],
            borderColor: 'rgba(54, 162, 235, 0.8)',
            backgroundColor: 'rgba(54, 162, 235, 0.3)'
        }
    ]
});

const selectedPoint = ref(null);

const handleChartClick = (event) => {
    selectedPoint.value = {
        label: radarData.value.labels[event.index],
        value: event.value,
        datasetLabel: radarData.value.datasets[event.datasetIndex].label
    };
};

const handleChartHover = (event) => {
    // You can implement additional hover logic here
    console.log('Hover:', event);
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Real-time Updates</h3>

        <p>
            You can update the radar chart in real-time, adding or removing data points.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-radar ref="realtimeChart" :data="realtimeData" title="Real-time Radar Data" height="300px" />
                <div class="mt-2 flex flex-wrap gap-2">
                    <c-button color="primary" @click="addAttribute" class="inline-flex items-center gap-x-2">
                        <IconPlus class="h-5 w-5 text-white" aria-hidden="true" />
                        Add Attribute
                    </c-button>
                    <c-button color="danger" @click="removeAttribute" class="inline-flex items-center gap-x-2">
                        <IconMinus class="h-5 w-5 text-white" aria-hidden="true" />
                        Remove Attribute
                    </c-button>
                    <c-button color="success" @click="randomizeData" class="inline-flex items-center gap-x-2">
                        <IconRefresh class="h-5 w-5 text-white" aria-hidden="true" />
                        Randomize Data
                    </c-button>
                </div>
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-radar
        ref="chartRef"
        :data="radarData"
        title="Real-time Radar Data"
        height="300px"
    /&gt;
    &lt;div class="mt-2 flex flex-wrap gap-2"&gt;
        &lt;c-button
            color="primary"
            @click="addAttribute"
            class="inline-flex items-center gap-x-2"
        &gt;
            &lt;IconPlus class="h-5 w-5" aria-hidden="true" /&gt;
            Add Attribute
        &lt;/c-button&gt;
        &lt;c-button
            color="danger"
            @click="removeAttribute"
            class="inline-flex items-center gap-x-2"
        &gt;
            &lt;IconMinus class="h-5 w-5" aria-hidden="true" /&gt;
            Remove Attribute
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

const skills = [
    'Coding', 'Design', 'Communication', 'Problem Solving',
    'Teamwork', 'Leadership', 'Creativity', 'Adaptability',
    'Time Management', 'Critical Thinking'
];

const radarData = ref({
    labels: skills.slice(0, 6),
    datasets: [
        {
            label: 'Developer A',
            data: [90, 60, 75, 85, 70, 65],
            borderColor: 'rgba(54, 162, 235, 0.8)',
            backgroundColor: 'rgba(54, 162, 235, 0.3)'
        },
        {
            label: 'Developer B',
            data: [70, 85, 80, 70, 90, 75],
            borderColor: 'rgba(255, 99, 132, 0.8)',
            backgroundColor: 'rgba(255, 99, 132, 0.3)'
        }
    ]
});

const addAttribute = () => {
    if (radarData.value.labels.length < skills.length) {
        const nextSkill = skills[radarData.value.labels.length];

        // Using the exposed method from the component
        chartRef.value.addData(nextSkill, [
            Math.floor(Math.random() * 40) + 60, // Random value between 60-100
            Math.floor(Math.random() * 40) + 60
        ]);
    }
};

const removeAttribute = () => {
    if (radarData.value.labels.length > 3) {
        // Using the exposed method from the component
        chartRef.value.removeData();
    }
};

const randomizeData = () => {
    radarData.value.datasets.forEach(dataset => {
        dataset.data = radarData.value.labels.map(() =>
            Math.floor(Math.random() * 40) + 60 // Random value between 60-100
        );
    });
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Chart Polar" previousLink="/chart-polar" next="Data Filter" nextLink="/data-filter" />
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
    labels: ['Coding', 'Design', 'Communication', 'Problem Solving', 'Teamwork', 'Leadership'],
    datasets: [
        {
            label: 'Developer A',
            data: [90, 60, 75, 85, 70, 65],
            borderColor: 'rgba(54, 162, 235, 0.8)',
            backgroundColor: 'rgba(54, 162, 235, 0.3)'
        }
    ]
});

const multiSeriesData = ref({
    labels: ['Coding', 'Design', 'Communication', 'Problem Solving', 'Teamwork', 'Leadership'],
    datasets: [
        {
            label: 'Team Alpha',
            data: [90, 60, 75, 85, 70, 65],
            borderColor: 'rgba(54, 162, 235, 0.8)',
            backgroundColor: 'rgba(54, 162, 235, 0.3)'
        },
        {
            label: 'Team Beta',
            data: [70, 85, 80, 70, 90, 75],
            borderColor: 'rgba(255, 99, 132, 0.8)',
            backgroundColor: 'rgba(255, 99, 132, 0.3)'
        }
    ]
});

const styledChartData = ref({
    labels: ['Coding', 'Design', 'Communication', 'Problem Solving', 'Teamwork', 'Leadership'],
    datasets: [
        {
            label: 'Developer A',
            data: [90, 60, 75, 85, 70, 65],
            borderColor: 'rgba(75, 192, 192, 0.8)',
            borderWidth: 3,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff'
        }
    ]
});

const customScales = ref({
    r: {
        min: 40,
        max: 100,
        ticks: {
            stepSize: 10
        },
        pointLabels: {
            font: {
                size: 14,
                weight: 'bold'
            }
        },
        grid: {
            color: 'rgba(200, 200, 200, 0.3)'
        },
        angleLines: {
            color: 'rgba(150, 150, 150, 0.3)'
        }
    }
});

const selectedPoint = ref(null);

const handleChartClick = (event) => {
    selectedPoint.value = {
        label: basicChartData.value.labels[event.index],
        value: event.value,
        datasetLabel: basicChartData.value.datasets[event.datasetIndex].label
    };
};

const handleChartHover = (event) => {
    console.log('Hover:', event);
};

const realtimeChart = ref(null);

const skills = [
    'Coding', 'Design', 'Communication', 'Problem Solving',
    'Teamwork', 'Leadership', 'Creativity', 'Adaptability',
    'Time Management', 'Critical Thinking'
];

const realtimeData = ref({
    labels: skills.slice(0, 6),
    datasets: [
        {
            label: 'Developer A',
            data: [90, 60, 75, 85, 70, 65],
            borderColor: 'rgba(54, 162, 235, 0.8)',
            backgroundColor: 'rgba(54, 162, 235, 0.3)'
        },
        {
            label: 'Developer B',
            data: [70, 85, 80, 70, 90, 75],
            borderColor: 'rgba(255, 99, 132, 0.8)',
            backgroundColor: 'rgba(255, 99, 132, 0.3)'
        }
    ]
});

const addAttribute = () => {
    if (realtimeData.value.labels.length < skills.length) {
        const nextSkill = skills[realtimeData.value.labels.length];

        if (realtimeChart.value) {
            realtimeChart.value.addData(nextSkill, [
                Math.floor(Math.random() * 40) + 60, // Random value between 60-100
                Math.floor(Math.random() * 40) + 60
            ]);
        }
    }
};

const removeAttribute = () => {
    if (realtimeData.value.labels.length > 3 && realtimeChart.value) {
        realtimeChart.value.removeData();
    }
};

const randomizeData = () => {
    realtimeData.value.datasets.forEach(dataset => {
        dataset.data = realtimeData.value.labels.map(() =>
            Math.floor(Math.random() * 40) + 60 // Random value between 60-100
        );
    });
};
</script>
