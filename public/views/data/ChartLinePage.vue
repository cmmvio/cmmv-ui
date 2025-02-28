<template>
  <BaseLayout>
    <h1>Line Chart</h1>

    <p>
        The <code>CChartLine (alias: c-chart-line)</code> component allows you to create interactive and responsive line charts,
        with support for multiple data series, color customization, animations, and more. This component is built on top of
        <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">Chart.js</a>, a powerful JavaScript charting library.
    </p>

    <h3>Basic Usage</h3>

    <p>
        The following example demonstrates the basic usage of the <code>CChartLine</code> component with a single data series.
    </p>

    <card-docs>
        <div class="mb-4">
            <c-chart-line
                :data="basicChartData"
                title="Monthly Sales"
                height="300px"
            />
        </div>

        <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-line
        :data="chartData"
        title="Monthly Sales"
        height="300px"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const chartData = ref({
labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
datasets: [
    {
    label: '2023 Sales',
    data: [65, 59, 80, 81, 56, 55],
    borderColor: 'rgba(54, 162, 235, 0.8)'
    }
]
});
&lt;/script&gt;</code></pre>
        </template>
    </card-docs>

    <h3>Multiple Series</h3>

    <p>
      You can add multiple data series for comparison.
    </p>

    <card-docs>
        <div class="mb-4">
            <c-chart-line
                :data="multiSeriesData"
                title="Sales Comparison"
                height="300px"
            />
        </div>

      <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-line
        :data="chartData"
        title="Sales Comparison"
        height="300px"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: '2022 Sales',
      data: [45, 49, 60, 71, 46, 45],
      borderColor: 'rgba(255, 99, 132, 0.8)'
    },
    {
      label: '2023 Sales',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgba(54, 162, 235, 0.8)'
    }
  ]
});
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <h3>Line Types</h3>

    <p>
      You can create different types of lines by setting the <code>lineType</code> property to <code>straight</code>, <code>curved</code>, or <code>stepped</code>.
    </p>

    <card-docs>
      <div class="mb-4">
        <c-chart-line
          :data="lineTypesData"
          lineType="curved"
          title="Chart with Curved Lines"
          height="300px"
        />
      </div>
      <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-chart-line
    :data="chartData"
    lineType="curved"
    title="Chart with Curved Lines"
    height="300px"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: '2023 Sales',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgba(75, 192, 192, 0.8)'
    }
  ]
});
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <h3>Area Chart</h3>

    <p>
      You can fill the area below the line by setting the <code>fill</code> property to <code>true</code>.
    </p>

    <card-docs>
      <div class="mb-4">
        <c-chart-line
          :data="areaChartData"
          :fill="true"
          title="Area Chart"
          height="300px"
        />
      </div>
      <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-chart-line
    :data="chartData"
    :fill="true"
    title="Area Chart"
    height="300px"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 19000, 15000, 21000, 18000, 25000],
      borderColor: 'rgba(54, 162, 235, 0.8)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)'
    }
  ]
});
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <h3>Point Customization</h3>

    <p>
      You can customize the chart points, changing their size or hiding them completely.
    </p>

    <card-docs>
      <div class="mb-4">
        <c-chart-line
          :data="pointsChartData"
          :pointSize="6"
          title="Chart with Custom Points"
          height="300px"
        />
      </div>
      <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-chart-line
    :data="chartData"
    :pointSize="6"
    title="Chart with Custom Points"
    height="300px"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: '2023 Sales',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgba(153, 102, 255, 0.8)',
      pointBackgroundColor: 'rgba(153, 102, 255, 1)',
      pointBorderColor: '#fff',
      pointBorderWidth: 2
    }
  ]
});
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <h3>Animations</h3>

    <p>
      You can customize the chart animations, changing the duration and easing type.
    </p>

    <card-docs>
      <div class="mb-4">
        <c-chart-line
          :data="basicChartData"
          title="Chart with Custom Animation"
          height="300px"
          :animation="customAnimation"
        />

        <div class="m-auto justify-center">
            <c-button color="primary" @click="updateChartData" class="inline-flex items-center gap-x-2 mt-2">
            <IconStar class="h-5 w-5 text-white" aria-hidden="true" />
            Update Data
            </c-button>
        </div>
      </div>
      <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-chart-line
    :data="chartData"
    title="Chart with Custom Animation"
    height="300px"
    :animation="animation"
  /&gt;
  &lt;c-button color="primary" class="mt-2 inline-flex items-center gap-x-2" @click="updateData"&gt;
    &lt;IconStar class="h-5 w-5" aria-hidden="true" /&gt;
    Update Data
  &lt;/c-button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: '2023 Sales',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgba(54, 162, 235, 0.8)'
    }
  ]
});

const animation = ref({
  duration: 2000,
  easing: 'easeInOutQuart'
});

const updateData = () => {
  // Generate random new data
  chartData.value.datasets[0].data = chartData.value.labels.map(() =>
    Math.floor(Math.random() * 100) + 20
  );
};
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <h3>Interactivity</h3>

    <p>
      The <code>CChartLine</code> component emits events when the user interacts with the chart.
    </p>

    <card-docs>
      <div class="mb-4">
        <c-chart-line
          :data="basicChartData"
          title="Interactive Chart"
          height="300px"
          @chart-click="handleChartClick"
          @chart-hover="handleChartHover"
        />
        <div v-if="selectedPoint" class="mt-2 p-2 border rounded">
          <strong>Selected point:</strong> &#123;&#123; selectedPoint.label &#125;&#125; - &#123;&#123; selectedPoint.value &#125;&#125;
        </div>
      </div>
      <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-chart-line
    :data="chartData"
    title="Interactive Chart"
    height="300px"
    @chart-click="handleChartClick"
    @chart-hover="handleChartHover"
  /&gt;
  &lt;div v-if="selectedPoint" class="mt-2 p-2 border rounded"&gt;
    &lt;strong&gt;Selected point:&lt;/strong&gt; &#123;&#123; selectedPoint.label &#125;&#125; - &#123;&#123; selectedPoint.value &#125;&#125;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: '2023 Sales',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgba(54, 162, 235, 0.8)'
    }
  ]
});

const selectedPoint = ref(null);

const handleChartClick = (event) => {
  selectedPoint.value = {
    label: chartData.value.labels[event.index],
    value: event.value,
    datasetLabel: chartData.value.datasets[event.datasetIndex].label
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
      You can update the chart in real-time, adding or removing data points.
    </p>

    <card-docs>
      <div class="mb-4">
        <c-chart-line
          ref="realtimeChart"
          :data="realtimeData"
          title="Real-time Data"
          height="300px"
        />
        <div class="mt-2 flex flex-wrap gap-2">
          <c-button color="primary" @click="addDataPoint" class="inline-flex items-center gap-x-2">
            <IconPlus class="h-5 w-5 text-white" aria-hidden="true" />
            Add
          </c-button>
          <c-button color="danger" @click="removeDataPoint" class="inline-flex items-center gap-x-2">
            <IconMinus class="h-5 w-5 text-white" aria-hidden="true" />
            Remove
          </c-button>
          <c-button v-if="!autoUpdateActive" color="success" @click="startAutoUpdate" class="inline-flex items-center gap-x-2">
            <IconBolt class="h-5 w-5 text-white" aria-hidden="true" />
            Start Update
          </c-button>
          <c-button v-if="autoUpdateActive" color="warning" @click="stopAutoUpdate" class="inline-flex items-center gap-x-2">
            <IconStop class="h-5 w-5 text-white" aria-hidden="true" />
            Stop Update
          </c-button>
        </div>
      </div>
      <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-chart-line
    ref="chartRef"
    :data="chartData"
    title="Real-time Data"
    height="300px"
  /&gt;
  &lt;div class="mt-2 flex flex-wrap gap-2"&gt;
    &lt;c-button color="primary" @click="addDataPoint" class="inline-flex items-center gap-x-2"&gt;
      &lt;IconPlus class="h-5 w-5" aria-hidden="true" /&gt;
      Add Point
    &lt;/c-button&gt;
    &lt;c-button color="danger" @click="removeDataPoint" class="inline-flex items-center gap-x-2"&gt;
      &lt;IconMinus class="h-5 w-5" aria-hidden="true" /&gt;
      Remove Point
    &lt;/c-button&gt;
    &lt;c-button v-if="!autoUpdateActive" color="success" @click="startAutoUpdate" class="inline-flex items-center gap-x-2"&gt;
      &lt;IconBolt class="h-5 w-5" aria-hidden="true" /&gt;
      Start Update
    &lt;/c-button&gt;
    &lt;c-button v-if="autoUpdateActive" color="warning" @click="stopAutoUpdate" class="inline-flex items-center gap-x-2"&gt;
      &lt;IconStop class="h-5 w-5" aria-hidden="true" /&gt;
      Stop Update
    &lt;/c-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted, onUnmounted } from 'vue';

const chartRef = ref(null);
const autoUpdateActive = ref(false);
let updateInterval = null;

const chartData = ref({
  labels: ['Point 1', 'Point 2', 'Point 3'],
  datasets: [
    {
      label: 'Series 1',
      data: [65, 59, 80],
      borderColor: 'rgba(54, 162, 235, 0.8)'
    },
    {
      label: 'Series 2',
      data: [45, 70, 60],
      borderColor: 'rgba(255, 99, 132, 0.8)'
    }
  ]
});

const addDataPoint = () => {
  const nextPoint = chartData.value.labels.length + 1;
  const newLabel = `Point ${nextPoint}`;

  // Using the exposed method from the component
  chartRef.value.addData(newLabel, [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
  ]);
};

const removeDataPoint = () => {
  if (chartData.value.labels.length > 1) {
    // Using the exposed method from the component
    chartRef.value.removeData();
  }
};

const startAutoUpdate = () => {
  autoUpdateActive.value = true;
  updateInterval = setInterval(() => {
    addDataPoint();

    // Limit the number of points to keep the chart readable
    if (chartData.value.labels.length > 10) {
      removeDataPoint();
    }
  }, 2000);
};

const stopAutoUpdate = () => {
  autoUpdateActive.value = false;
  clearInterval(updateInterval);
};

// Clean up the interval when the component is unmounted
onUnmounted(() => {
  if (updateInterval) {
    clearInterval(updateInterval);
  }
});
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <PagePagination
        previous="Chart Bar"
        previousLink="/chart-bar"
        next="List"
        nextLink="/list"
    />
  </BaseLayout>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

import IconStar from "../../../src/components/icons/IconStar.vue";
import IconPlus from "../../../src/components/icons/IconPlus.vue";
import IconMinus from "../../../src/components/icons/IconMinus.vue";
import IconBolt from "../../../src/components/icons/IconBolt.vue";
import IconStop from "../../../src/components/icons/IconStop.vue";

const basicChartData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: '2023 Sales',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgba(54, 162, 235, 0.8)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(54, 162, 235, 0.8)'
        }
    ]
});

const multiSeriesData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: '2022 Sales',
            data: [45, 49, 60, 71, 46, 45],
            borderColor: 'rgba(255, 99, 132, 0.8)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(255, 99, 132, 0.8)'
        },
        {
            label: '2023 Sales',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgba(54, 162, 235, 0.8)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(54, 162, 235, 0.8)'
        }
    ]
});

const lineTypesData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: '2023 Sales',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgba(75, 192, 192, 0.8)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(75, 192, 192, 0.8)'
        }
    ]
});

const areaChartData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Revenue',
            data: [12000, 19000, 15000, 21000, 18000, 25000],
            borderColor: 'rgba(54, 162, 235, 0.8)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(54, 162, 235, 0.8)'
        }
    ]
});

const pointsChartData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: '2023 Sales',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgba(153, 102, 255, 0.8)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(153, 102, 255, 1)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2
        }
    ]
});

const customAnimation = ref({
    duration: 2000,
    easing: 'easeInOutQuart'
});

const updateChartData = () => {
    basicChartData.value.datasets[0].data = basicChartData.value.labels.map(() =>
        Math.floor(Math.random() * 100) + 20
    );
};

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
const realtimeData = ref({
    labels: ['Point 1', 'Point 2', 'Point 3'],
    datasets: [
        {
            label: 'Series 1',
            data: [65, 59, 80],
            borderColor: 'rgba(54, 162, 235, 0.8)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(54, 162, 235, 0.8)'
        },
        {
            label: 'Series 2',
            data: [45, 70, 60],
            borderColor: 'rgba(255, 99, 132, 0.8)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(255, 99, 132, 0.8)'
        }
    ]
});

const autoUpdateActive = ref(false);
let updateInterval = null;

const addDataPoint = () => {
    const nextPoint = realtimeData.value.labels.length + 1;
    const newLabel = `Point ${nextPoint}`;

    if (realtimeChart.value) {
        realtimeChart.value.addData(newLabel, [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100)
        ]);
    }
};

const removeDataPoint = () => {
    if (realtimeData.value.labels.length > 1 && realtimeChart.value)
        realtimeChart.value.removeData();
};

const startAutoUpdate = () => {
    autoUpdateActive.value = true;
    updateInterval = setInterval(() => {
        addDataPoint();

        if (realtimeData.value.labels.length > 10)
            removeDataPoint();
    }, 2000);
};

const stopAutoUpdate = () => {
  autoUpdateActive.value = false;
  clearInterval(updateInterval);
};

onUnmounted(() => {
    if (updateInterval) {
        clearInterval(updateInterval);
    }
});
</script>
