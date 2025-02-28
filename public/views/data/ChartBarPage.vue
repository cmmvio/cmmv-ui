<template>
  <BaseLayout>
    <h1>Bar Chart</h1>

    <p>
        The <code>CChartBar (alias: c-chart-bar)</code> component allows you to create interactive and responsive bar charts,
        with support for multiple data series, color customization, animations, and more. This component is built on top of
        <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">Chart.js</a>, a powerful JavaScript charting library.
    </p>

    <h3>Basic Usage</h3>

    <p>
        The following example demonstrates the basic usage of the <code>CChartBar</code> component with a single data series.
    </p>

    <card-docs>
        <div class="mb-4">
            <c-chart-bar
                :data="basicChartData"
                title="Monthly Sales"
                height="300px"
            />
        </div>

        <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-bar
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
    backgroundColor: 'rgba(54, 162, 235, 0.8)'
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
            <c-chart-bar
                :data="multiSeriesData"
                title="Sales Comparison"
                height="300px"
            />
        </div>

      <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-bar
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
      backgroundColor: 'rgba(255, 99, 132, 0.8)'
    },
    {
      label: '2023 Sales',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(54, 162, 235, 0.8)'
    }
  ]
});
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <h3>Horizontal Chart</h3>

    <p>
      You can create horizontal bar charts by setting the <code>horizontal</code> property to <code>true</code>.
    </p>

    <card-docs>
      <div class="mb-4">
        <c-chart-bar
          :data="horizontalChartData"
          :horizontal="true"
          title="Sales by Category"
          height="350px"
        />
      </div>
      <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-chart-bar
    :data="chartData"
    :horizontal="true"
    title="Sales by Category"
    height="350px"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const chartData = ref({
  labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Games'],
  datasets: [
    {
      label: '2023 Sales',
      data: [1200, 1900, 800, 500, 1500],
      backgroundColor: 'rgba(75, 192, 192, 0.8)'
    }
  ]
});
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <h3>Color Customization</h3>

    <p>
      You can customize the colors of each data series or define a default set of colors.
    </p>

    <card-docs>
      <div class="mb-4">
        <c-chart-bar
          :data="coloredChartData"
          title="Quarterly Performance"
          height="300px"
        />
      </div>
      <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-chart-bar
    :data="chartData"
    title="Quarterly Performance"
    height="300px"
    :colors="['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const chartData = ref({
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 19000, 15000, 21000],
      backgroundColor: '#FF6384'
    },
    {
      label: 'Expenses',
      data: [8000, 9000, 7500, 10000],
      backgroundColor: '#36A2EB'
    },
    {
      label: 'Profit',
      data: [4000, 10000, 7500, 11000],
      backgroundColor: '#4BC0C0'
    }
  ]
});
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <h3>Axis Customization</h3>

    <p>
      You can customize the X and Y axes of the chart, adding titles, changing the grid, and configuring the ticks.
    </p>

    <card-docs>
      <div class="mb-4">
        <c-chart-bar
          :data="basicChartData"
          title="Monthly Sales with Custom Axes"
          height="300px"
          :scales="customScales"
        />
      </div>
      <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-chart-bar
    :data="chartData"
    title="Monthly Sales with Custom Axes"
    height="300px"
    :scales="scales"
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
      backgroundColor: 'rgba(54, 162, 235, 0.8)'
    }
  ]
});

const scales = ref({
  x: {
    title: {
      display: true,
      text: 'Months',
      font: {
        size: 14,
        weight: 'bold'
      }
    },
    grid: {
      display: false
    }
  },
  y: {
    title: {
      display: true,
      text: 'Value ($)',
      font: {
        size: 14,
        weight: 'bold'
      }
    },
    beginAtZero: true,
    ticks: {
      callback: function(value) {
        return '$ ' + value;
      }
    }
  }
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
        <c-chart-bar
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
  &lt;c-chart-bar
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
      backgroundColor: 'rgba(54, 162, 235, 0.8)'
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
      The <code>CChartBar</code> component emits events when the user interacts with the chart.
    </p>

    <card-docs>
      <div class="mb-4">
        <c-chart-bar
          :data="basicChartData"
          title="Interactive Chart"
          height="300px"
          @chart-click="handleChartClick"
          @chart-hover="handleChartHover"
        />
        <div v-if="selectedBar" class="mt-2 p-2 border rounded">
          <strong>Selected bar:</strong> &#123;&#123; selectedBar.label &#125;&#125; - &#123;&#123; selectedBar.value &#125;&#125;
        </div>
      </div>
      <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-chart-bar
    :data="chartData"
    title="Interactive Chart"
    height="300px"
    @chart-click="handleChartClick"
    @chart-hover="handleChartHover"
  /&gt;
  &lt;div v-if="selectedBar" class="mt-2 p-2 border rounded"&gt;
    &lt;strong&gt;Selected bar:&lt;/strong&gt; &#123;&#123; selectedBar.label &#125;&#125; - &#123;&#123; selectedBar.value &#125;&#125;
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
      backgroundColor: 'rgba(54, 162, 235, 0.8)'
    }
  ]
});

const selectedBar = ref(null);

const handleChartClick = (event) => {
  selectedBar.value = {
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
        <c-chart-bar
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
  &lt;c-chart-bar
    ref="chartRef"
    :data="chartData"
    title="Real-time Data"
    height="300px"
  /&gt;
  &lt;div class="mt-2 flex flex-wrap gap-2"&gt;
    &lt;c-button color="primary" @click="addDataPoint" class="inline-flex items-center gap-x-2"&gt;
      &lt;IconPlus class="h-5 w-5" aria-hidden="true" /&gt;
      Adicionar Ponto
    &lt;/c-button&gt;
    &lt;c-button color="danger" @click="removeDataPoint" class="inline-flex items-center gap-x-2"&gt;
      &lt;IconMinus class="h-5 w-5" aria-hidden="true" /&gt;
      Remover Ponto
    &lt;/c-button&gt;
    &lt;c-button v-if="!autoUpdateActive" color="success" @click="startAutoUpdate" class="inline-flex items-center gap-x-2"&gt;
      &lt;IconBolt class="h-5 w-5" aria-hidden="true" /&gt;
      Iniciar Atualização
    &lt;/c-button&gt;
    &lt;c-button v-if="autoUpdateActive" color="warning" @click="stopAutoUpdate" class="inline-flex items-center gap-x-2"&gt;
      &lt;IconStop class="h-5 w-5" aria-hidden="true" /&gt;
      Parar Atualização
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
      backgroundColor: 'rgba(54, 162, 235, 0.8)'
    },
    {
      label: 'Series 2',
      data: [45, 70, 60],
      backgroundColor: 'rgba(255, 99, 132, 0.8)'
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

    <h3>API Reference</h3>

    <p>
      For more advanced customization options, please refer to the <a href="https://www.chartjs.org/docs/latest/" target="_blank" rel="noopener noreferrer">Chart.js documentation</a>.
    </p>

    <h3>Props</h3>

    <p>
      The <code>CChartBar</code> component accepts the following props:
    </p>

    <table-docs>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>data</td>
            <td>Object</td>
            <td>{ labels: [], datasets: [] }</td>
            <td>Chart data containing labels and datasets.</td>
          </tr>
          <tr>
            <td>options</td>
            <td>Object</td>
            <td>{}</td>
            <td>Additional options for Chart.js.</td>
          </tr>
          <tr>
            <td>width</td>
            <td>String</td>
            <td>'100%'</td>
            <td>Chart width.</td>
          </tr>
          <tr>
            <td>height</td>
            <td>String</td>
            <td>'400px'</td>
            <td>Chart height.</td>
          </tr>
          <tr>
            <td>horizontal</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the chart should be horizontal.</td>
          </tr>
          <tr>
            <td>animation</td>
            <td>Object</td>
            <td>{ duration: 1000, easing: 'easeOutQuart' }</td>
            <td>Animation settings.</td>
          </tr>
          <tr>
            <td>title</td>
            <td>String</td>
            <td>''</td>
            <td>Chart title.</td>
          </tr>
          <tr>
            <td>legend</td>
            <td>Object</td>
            <td>{ display: true, position: 'top' }</td>
            <td>Legend settings.</td>
          </tr>
          <tr>
            <td>scales</td>
            <td>Object</td>
            <td>Object with default settings</td>
            <td>X and Y axes settings.</td>
          </tr>
          <tr>
            <td>colors</td>
            <td>Array</td>
            <td>Array with default colors</td>
            <td>Colors to be used for data series.</td>
          </tr>
          <tr>
            <td>responsive</td>
            <td>Boolean</td>
            <td>true</td>
            <td>Whether the chart should be responsive.</td>
          </tr>
          <tr>
            <td>maintainAspectRatio</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether the chart should maintain aspect ratio.</td>
          </tr>
          <tr>
            <td>plugins</td>
            <td>Object</td>
            <td>{}</td>
            <td>Additional plugins for Chart.js.</td>
          </tr>
        </tbody>
    </table-docs>

    <h3>Events</h3>

    <p>
      The <code>CChartBar</code> component emits the following events:
    </p>

    <table-docs>
        <thead>
          <tr>
            <th>Event</th>
            <th>Parameters</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>chart-click</td>
            <td>Object</td>
            <td>Emitted when the user clicks on a chart bar.</td>
          </tr>
          <tr>
            <td>chart-hover</td>
            <td>Object</td>
            <td>Emitted when the user hovers over a chart bar.</td>
          </tr>
          <tr>
            <td>chart-created</td>
            <td>Chart</td>
            <td>Emitted when the chart is created.</td>
          </tr>
          <tr>
            <td>chart-updated</td>
            <td>Chart</td>
            <td>Emitted when the chart is updated.</td>
          </tr>
        </tbody>
    </table-docs>

    <h3>Exposed Methods</h3>

    <p>
      The <code>CChartBar</code> component exposes the following methods:
    </p>

    <table-docs>
        <thead>
          <tr>
            <th>Method</th>
            <th>Parameters</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>addDataset</td>
            <td>dataset: Object</td>
            <td>Adds a new dataset to the chart.</td>
          </tr>
          <tr>
            <td>updateDataset</td>
            <td>index: Number, dataset: Object</td>
            <td>Updates an existing dataset.</td>
          </tr>
          <tr>
            <td>removeDataset</td>
            <td>index: Number</td>
            <td>Removes a dataset.</td>
          </tr>
          <tr>
            <td>addData</td>
            <td>label: String, data: Array</td>
            <td>Adds a new data point to all datasets.</td>
          </tr>
          <tr>
            <td>removeData</td>
            <td>index: Number (optional)</td>
            <td>Removes a data point from all datasets.</td>
          </tr>
          <tr>
            <td>updateLabels</td>
            <td>labels: Array</td>
            <td>Updates the chart labels.</td>
          </tr>
          <tr>
            <td>resizeChart</td>
            <td>-</td>
            <td>Manually resizes the chart.</td>
          </tr>
        </tbody>
    </table-docs>

    <PagePagination
        previous="Tooltip"
        previousLink="/tooltip"
        next="Pagination"
        nextLink="/pagination"
    />
  </BaseLayout>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

// Ícones - usando apenas os que estão disponíveis na pasta
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
            backgroundColor: 'rgba(54, 162, 235, 0.8)'
        }
    ]
});

const multiSeriesData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: '2022 Sales',
            data: [45, 49, 60, 71, 46, 45],
            backgroundColor: 'rgba(255, 99, 132, 0.8)'
        },
        {
            label: '2023 Sales',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(54, 162, 235, 0.8)'
        }
    ]
});

const horizontalChartData = ref({
    labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Games'],
    datasets: [
        {
            label: '2023 Sales',
            data: [1200, 1900, 800, 500, 1500],
            backgroundColor: 'rgba(75, 192, 192, 0.8)'
        }
    ]
});

const coloredChartData = ref({
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
        {
            label: 'Revenue',
            data: [12000, 19000, 15000, 21000],
            backgroundColor: '#FF6384'
        },
        {
            label: 'Expenses',
            data: [8000, 9000, 7500, 10000],
            backgroundColor: '#36A2EB'
        },
        {
            label: 'Profit',
            data: [4000, 10000, 7500, 11000],
            backgroundColor: '#4BC0C0'
        }
    ]
});

const customScales = ref({
  x: {
    title: {
      display: true,
      text: 'Months',
      font: {
        size: 14,
        weight: 'bold'
      }
    },
    grid: {
      display: false
    }
  },
  y: {
    title: {
      display: true,
      text: 'Value ($)',
      font: {
        size: 14,
        weight: 'bold'
      }
    },
    beginAtZero: true,
    ticks: {
      callback: function(value) {
        return '$ ' + value;
      }
    }
  }
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

const selectedBar = ref(null);

const handleChartClick = (event) => {
    selectedBar.value = {
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
            backgroundColor: 'rgba(54, 162, 235, 0.8)'
        },
        {
            label: 'Series 2',
            data: [45, 70, 60],
            backgroundColor: 'rgba(255, 99, 132, 0.8)'
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
