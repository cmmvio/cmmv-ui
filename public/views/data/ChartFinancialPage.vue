<template>
    <BaseLayout>
        <c-seo
            section="Chart Financial Component"
            description="Learn how to use the CChartFinancial component in CMMV UI. A financial chart component for visualizing stock market data with candlesticks, OHLC, and interactive features for financial analysis."
            :keywords="['financial chart', 'component', 'ui', 'data visualization', 'charts', 'candlestick', 'OHLC', 'stock market']"
        />

        <h1>Financial Chart</h1>

        <p>
            The <code>CChartFinancial (alias: c-chart-financial)</code> component allows you to create interactive and responsive
            financial charts, including candlestick and OHLC (Open-High-Low-Close) charts. This component is ideal for visualizing
            financial data such as stock prices or cryptocurrency values. It is built on
            top of <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">Chart.js</a> with the
            <a href="https://github.com/chartjs/chartjs-chart-financial" target="_blank" rel="noopener noreferrer">chartjs-chart-financial</a> plugin.
        </p>

        <h3>Basic Candlestick Chart</h3>

        <p>
            The following example demonstrates a basic candlestick chart displaying trading data.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-financial :data="candlestickData" title="Bitcoin Price (Candlestick)" height="400px" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-financial
        :data="candlestickData"
        title="Bitcoin Price (Candlestick)"
        height="400px"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const candlestickData = ref({
    datasets: [
        {
            label: 'BTC/USD',
            data: [
                { x: new Date('2023-01-01'), o: 16500, h: 16800, l: 16400, c: 16600 },
                { x: new Date('2023-01-02'), o: 16600, h: 17000, l: 16500, c: 16900 },
                { x: new Date('2023-01-03'), o: 16900, h: 17100, l: 16700, c: 16800 },
                { x: new Date('2023-01-04'), o: 16800, h: 16900, l: 16200, c: 16300 },
                { x: new Date('2023-01-05'), o: 16300, h: 16700, l: 16200, c: 16650 },
                { x: new Date('2023-01-06'), o: 16650, h: 16800, l: 16300, c: 16400 },
                { x: new Date('2023-01-07'), o: 16400, h: 16900, l: 16300, c: 16800 }
            ]
        }
    ]
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>OHLC Chart</h3>

        <p>
            You can switch to an OHLC (Open-High-Low-Close) chart by setting the <code>chartType</code> property to <code>ohlc</code>.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-financial :data="ohlcData" chartType="ohlc" title="Bitcoin Price (OHLC)" height="400px" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-financial
        :data="ohlcData"
        chartType="ohlc"
        title="Bitcoin Price (OHLC)"
        height="400px"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const ohlcData = ref({
    datasets: [
        {
            label: 'BTC/USD',
            data: [
                { x: new Date('2023-01-01'), o: 16500, h: 16800, l: 16400, c: 16600 },
                { x: new Date('2023-01-02'), o: 16600, h: 17000, l: 16500, c: 16900 },
                { x: new Date('2023-01-03'), o: 16900, h: 17100, l: 16700, c: 16800 },
                { x: new Date('2023-01-04'), o: 16800, h: 16900, l: 16200, c: 16300 },
                { x: new Date('2023-01-05'), o: 16300, h: 16700, l: 16200, c: 16650 },
                { x: new Date('2023-01-06'), o: 16650, h: 16800, l: 16300, c: 16400 },
                { x: new Date('2023-01-07'), o: 16400, h: 16900, l: 16300, c: 16800 }
            ]
        }
    ]
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Colors</h3>

        <p>
            You can customize the colors for up (bullish) and down (bearish) candles using the <code>upColor</code>,
            <code>downColor</code>, <code>upBorderColor</code>, and <code>downBorderColor</code> properties.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-financial
                    :data="candlestickData"
                    title="Custom Colors"
                    height="400px"
                    upColor="rgba(0, 128, 0, 0.5)"
                    downColor="rgba(220, 0, 0, 0.5)"
                    upBorderColor="rgb(0, 128, 0)"
                    downBorderColor="rgb(220, 0, 0)" />
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-financial
        :data="candlestickData"
        title="Custom Colors"
        height="400px"
        upColor="rgba(0, 128, 0, 0.5)"
        downColor="rgba(220, 0, 0, 0.5)"
        upBorderColor="rgb(0, 128, 0)"
        downBorderColor="rgb(220, 0, 0)"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const candlestickData = ref({
    datasets: [
        {
            label: 'BTC/USD',
            data: [
                { x: new Date('2023-01-01'), o: 16500, h: 16800, l: 16400, c: 16600 },
                { x: new Date('2023-01-02'), o: 16600, h: 17000, l: 16500, c: 16900 },
                { x: new Date('2023-01-03'), o: 16900, h: 17100, l: 16700, c: 16800 },
                { x: new Date('2023-01-04'), o: 16800, h: 16900, l: 16200, c: 16300 },
                { x: new Date('2023-01-05'), o: 16300, h: 16700, l: 16200, c: 16650 },
                { x: new Date('2023-01-06'), o: 16650, h: 16800, l: 16300, c: 16400 },
                { x: new Date('2023-01-07'), o: 16400, h: 16900, l: 16300, c: 16800 }
            ]
        }
    ]
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Time Unit Customization</h3>

        <p>
            Financial charts use a time-based scale for the X-axis. You can customize the time unit with the <code>timeUnit</code> property.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-financial
                    :data="hourlyData"
                    title="Hourly Data"
                    timeUnit="hour"
                    height="400px" />
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-financial
        :data="hourlyData"
        title="Hourly Data"
        timeUnit="hour"
        height="400px"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

// Generate hourly data for a day
const hourlyData = ref({
    datasets: [
        {
            label: 'BTC/USD',
            data: Array.from({ length: 24 }, (_, i) => {
                const date = new Date('2023-01-01T00:00:00');
                date.setHours(date.getHours() + i);

                // Generate some random OHLC data
                const base = 16500 + Math.sin(i / 3) * 500;
                const o = base + Math.random() * 100 - 50;
                const h = o + Math.random() * 200;
                const l = o - Math.random() * 200;
                const c = base + Math.random() * 100 - 50;

                return { x: date, o, h, l, c };
            })
        }
    ]
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Interactivity</h3>

        <p>
            The <code>CChartFinancial</code> component emits events when the user interacts with the chart.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-financial
                    :data="candlestickData"
                    title="Interactive Chart"
                    height="400px"
                    @chart-click="handleChartClick"
                    @chart-hover="handleChartHover" />
                <div v-if="selectedCandle" class="mt-2 p-2 border rounded">
                    <strong>Selected candle:</strong> {{ formatDate(selectedCandle.dataPoint.x) }} -
                    Open: {{ selectedCandle.dataPoint.o }},
                    High: {{ selectedCandle.dataPoint.h }},
                    Low: {{ selectedCandle.dataPoint.l }},
                    Close: {{ selectedCandle.dataPoint.c }}
                </div>
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-financial
        :data="candlestickData"
        title="Interactive Chart"
        height="400px"
        @chart-click="handleChartClick"
        @chart-hover="handleChartHover"
    /&gt;
    &lt;div v-if="selectedCandle" class="mt-2 p-2 border rounded"&gt;
        &lt;strong&gt;Selected candle:&lt;/strong&gt; &#123;&#123; formatDate(selectedCandle.dataPoint.x) &#125;&#125; -
        Open: &#123;&#123; selectedCandle.dataPoint.o &#125;&#125;,
        High: &#123;&#123; selectedCandle.dataPoint.h &#125;&#125;,
        Low: &#123;&#123; selectedCandle.dataPoint.l &#125;&#125;,
        Close: &#123;&#123; selectedCandle.dataPoint.c &#125;&#125;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const candlestickData = ref({
    // ... data as shown before
});

const selectedCandle = ref(null);

const handleChartClick = (event) => {
    selectedCandle.value = {
        dataPoint: candlestickData.value.datasets[event.datasetIndex].data[event.index]
    };
};

const handleChartHover = (event) => {
    // You can implement additional hover logic here
    console.log('Hover:', event);
};

const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Real-time Updates</h3>

        <p>
            You can update the financial chart in real-time, adding or removing data points.
        </p>

        <card-docs>
            <div class="mb-4">
                <c-chart-financial ref="realtimeChart" :data="realtimeData" title="Real-time Trading Data" height="400px" />
                <div class="mt-2 flex flex-wrap gap-2">
                    <c-button color="primary" @click="addDataPoint" class="inline-flex items-center gap-x-2">
                        <IconPlus class="h-5 w-5 text-white" aria-hidden="true" />
                        Add Candle
                    </c-button>
                    <c-button color="danger" @click="removeDataPoint" class="inline-flex items-center gap-x-2">
                        <IconMinus class="h-5 w-5 text-white" aria-hidden="true" />
                        Remove Candle
                    </c-button>
                    <c-button v-if="!autoUpdateActive" color="success" @click="startAutoUpdate" class="inline-flex items-center gap-x-2">
                        <IconBolt class="h-5 w-5 text-white" aria-hidden="true" />
                        Start Updates
                    </c-button>
                    <c-button v-if="autoUpdateActive" color="warning" @click="stopAutoUpdate" class="inline-flex items-center gap-x-2">
                        <IconStop class="h-5 w-5 text-white" aria-hidden="true" />
                        Stop Updates
                    </c-button>
                </div>
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chart-financial
        ref="chartRef"
        :data="realtimeData"
        title="Real-time Trading Data"
        height="400px"
    /&gt;
    &lt;div class="mt-2 flex flex-wrap gap-2"&gt;
        &lt;c-button color="primary" @click="addDataPoint" class="inline-flex items-center gap-x-2"&gt;
            &lt;IconPlus class="h-5 w-5" aria-hidden="true" /&gt;
            Add Candle
        &lt;/c-button&gt;
        &lt;c-button color="danger" @click="removeDataPoint" class="inline-flex items-center gap-x-2"&gt;
            &lt;IconMinus class="h-5 w-5" aria-hidden="true" /&gt;
            Remove Candle
        &lt;/c-button&gt;
        &lt;c-button v-if="!autoUpdateActive" color="success" @click="startAutoUpdate" class="inline-flex items-center gap-x-2"&gt;
            &lt;IconBolt class="h-5 w-5" aria-hidden="true" /&gt;
            Start Updates
        &lt;/c-button&gt;
        &lt;c-button v-if="autoUpdateActive" color="warning" @click="stopAutoUpdate" class="inline-flex items-center gap-x-2"&gt;
            &lt;IconStop class="h-5 w-5" aria-hidden="true" /&gt;
            Stop Updates
        &lt;/c-button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onUnmounted } from 'vue';

const chartRef = ref(null);
const autoUpdateActive = ref(false);
let updateInterval = null;

// Initialize with 7 days of data
const realtimeData = ref({
    datasets: [
        {
            label: 'BTC/USD',
            data: Array.from({ length: 7 }, (_, i) => {
                const date = new Date();
                date.setDate(date.getDate() - 6 + i);
                date.setHours(0, 0, 0, 0);

                const base = 16500 + i * 100;
                const o = base;
                const h = base + Math.random() * 500;
                const l = base - Math.random() * 500;
                const c = base + (Math.random() * 400 - 200);

                return { x: date, o, h, l, c };
            })
        }
    ]
});

const getNextCandle = () => {
    const lastCandle = realtimeData.value.datasets[0].data[realtimeData.value.datasets[0].data.length - 1];
    const date = new Date(lastCandle.x);
    date.setDate(date.getDate() + 1);

    // Generate the next candle based on the last close price
    const o = lastCandle.c;
    const h = o + Math.random() * 500;
    const l = o - Math.random() * 500;
    const c = o + (Math.random() * 400 - 200);

    return { x: date, o, h, l, c };
};

const addDataPoint = () => {
    const nextCandle = getNextCandle();
    chartRef.value.addData(nextCandle);
};

const removeDataPoint = () => {
    if (realtimeData.value.datasets[0].data.length > 1) {
        chartRef.value.removeData();
    }
};

const startAutoUpdate = () => {
    autoUpdateActive.value = true;
    updateInterval = setInterval(() => {
        addDataPoint();

        // Keep a moving window of the last 30 days
        if (realtimeData.value.datasets[0].data.length > 30) {
            removeDataPoint(0);  // Remove oldest candle
        }
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
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>API Reference</h3>

        <h4>Props</h4>

        <p>
            The <code>CChartFinancial</code> component accepts the following props:
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
                    <td>{ datasets: [] }</td>
                    <td>Chart data containing datasets with OHLC values.</td>
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
                    <td>chartType</td>
                    <td>String</td>
                    <td>'candlestick'</td>
                    <td>Type of financial chart. Options: 'candlestick', 'ohlc'.</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>String</td>
                    <td>''</td>
                    <td>Chart title.</td>
                </tr>
                <tr>
                    <td>timeUnit</td>
                    <td>String</td>
                    <td>'day'</td>
                    <td>Time unit for the x-axis. Options: 'millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'quarter', 'year'.</td>
                </tr>
                <tr>
                    <td>upColor</td>
                    <td>String</td>
                    <td>'rgba(75, 192, 192, 0.5)'</td>
                    <td>Background color for candles where close > open (bullish).</td>
                </tr>
                <tr>
                    <td>downColor</td>
                    <td>String</td>
                    <td>'rgba(255, 99, 132, 0.5)'</td>
                    <td>Background color for candles where close < open (bearish).</td>
                </tr>
                <tr>
                    <td>upBorderColor</td>
                    <td>String</td>
                    <td>'rgb(75, 192, 192)'</td>
                    <td>Border color for candles where close > open (bullish).</td>
                </tr>
                <tr>
                    <td>downBorderColor</td>
                    <td>String</td>
                    <td>'rgb(255, 99, 132)'</td>
                    <td>Border color for candles where close < open (bearish).</td>
                </tr>
                <tr>
                    <td>scales</td>
                    <td>Object</td>
                    <td>Object with default settings</td>
                    <td>X and Y axes settings for the chart.</td>
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

        <h4>Events</h4>

        <p>
            The <code>CChartFinancial</code> component emits the following events:
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
                    <td>Emitted when the user clicks on a chart element.</td>
                </tr>
                <tr>
                    <td>chart-hover</td>
                    <td>Object</td>
                    <td>Emitted when the user hovers over a chart element.</td>
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

        <h4>Methods</h4>

        <p>
            The <code>CChartFinancial</code> component exposes the following methods:
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
                    <td>dataPoint: Object, datasetIndex: Number</td>
                    <td>Adds a new data point to a dataset.</td>
                </tr>
                <tr>
                    <td>removeData</td>
                    <td>index: Number, datasetIndex: Number</td>
                    <td>Removes a data point from a dataset.</td>
                </tr>
                <tr>
                    <td>resizeChart</td>
                    <td>-</td>
                    <td>Manually resizes the chart.</td>
                </tr>
            </tbody>
        </table-docs>

        <h4>Data Format</h4>

        <p>
            The <code>CChartFinancial</code> component expects data in a specific format:
        </p>

        <pre><code class="code-highlight language-javascript">data: {
    datasets: [
        {
            label: 'Asset Name',
            data: [
                {
                    x: Date, // timestamp or Date object
                    o: Number, // open price
                    h: Number, // high price
                    l: Number, // low price
                    c: Number  // close price
                },
                // more data points...
            ]
        }
    ]
}</code></pre>

        <p>
            Alternatively, you can provide array-based data points:
        </p>

        <pre><code class="code-highlight language-javascript">data: {
    datasets: [
        {
            label: 'Asset Name',
            data: [
                [timestamp, open, high, low, close],
                // more data points...
            ]
        }
    ]
}</code></pre>

        <br/>

        <PagePagination previous="Chart Doughnut" previousLink="/chart-doughnut" next="Chart Line" nextLink="/chart-line" />
    </BaseLayout>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

import IconPlus from "../../../src/components/icons/IconPlus.vue";
import IconMinus from "../../../src/components/icons/IconMinus.vue";
import IconBolt from "../../../src/components/icons/IconBolt.vue";
import IconStop from "../../../src/components/icons/IconStop.vue";

const candlestickData = ref({
    datasets: [
        {
            label: 'BTC/USD',
            data: [
                { x: new Date('2023-01-01'), o: 16500, h: 16800, l: 16400, c: 16600 },
                { x: new Date('2023-01-02'), o: 16600, h: 17000, l: 16500, c: 16900 },
                { x: new Date('2023-01-03'), o: 16900, h: 17100, l: 16700, c: 16800 },
                { x: new Date('2023-01-04'), o: 16800, h: 16900, l: 16200, c: 16300 },
                { x: new Date('2023-01-05'), o: 16300, h: 16700, l: 16200, c: 16650 },
                { x: new Date('2023-01-06'), o: 16650, h: 16800, l: 16300, c: 16400 },
                { x: new Date('2023-01-07'), o: 16400, h: 16900, l: 16300, c: 16800 }
            ]
        }
    ]
});

const ohlcData = ref({
    datasets: [
        {
            label: 'BTC/USD',
            data: [
                { x: new Date('2023-01-01'), o: 16500, h: 16800, l: 16400, c: 16600 },
                { x: new Date('2023-01-02'), o: 16600, h: 17000, l: 16500, c: 16900 },
                { x: new Date('2023-01-03'), o: 16900, h: 17100, l: 16700, c: 16800 },
                { x: new Date('2023-01-04'), o: 16800, h: 16900, l: 16200, c: 16300 },
                { x: new Date('2023-01-05'), o: 16300, h: 16700, l: 16200, c: 16650 },
                { x: new Date('2023-01-06'), o: 16650, h: 16800, l: 16300, c: 16400 },
                { x: new Date('2023-01-07'), o: 16400, h: 16900, l: 16300, c: 16800 }
            ]
        }
    ]
});

const hourlyData = ref({
    datasets: [
        {
            label: 'BTC/USD',
            data: Array.from({ length: 24 }, (_, i) => {
                const date = new Date('2023-01-01T00:00:00');
                date.setHours(date.getHours() + i);

                // Generate some random OHLC data
                const base = 16500 + Math.sin(i / 3) * 500;
                const o = base + Math.random() * 100 - 50;
                const h = o + Math.random() * 200;
                const l = o - Math.random() * 200;
                const c = base + Math.random() * 100 - 50;

                return { x: date, o, h, l, c };
            })
        }
    ]
});

const selectedCandle = ref(null);

const handleChartClick = (event) => {
    selectedCandle.value = {
        dataPoint: candlestickData.value.datasets[event.datasetIndex].data[event.index]
    };
};

const handleChartHover = (event) => {
    console.log('Hover:', event);
};

const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
};

const realtimeChart = ref(null);
const autoUpdateActive = ref(false);
let updateInterval = null;

const realtimeData = ref({
    datasets: [
        {
            label: 'BTC/USD',
            data: Array.from({ length: 7 }, (_, i) => {
                const date = new Date();
                date.setDate(date.getDate() - 6 + i);
                date.setHours(0, 0, 0, 0);

                const base = 16500 + i * 100;
                const o = base;
                const h = base + Math.random() * 500;
                const l = base - Math.random() * 500;
                const c = base + (Math.random() * 400 - 200);

                return { x: date, o, h, l, c };
            })
        }
    ]
});

const getNextCandle = () => {
    const lastCandle = realtimeData.value.datasets[0].data[realtimeData.value.datasets[0].data.length - 1];
    const date = new Date(lastCandle.x);
    date.setDate(date.getDate() + 1);

    const o = lastCandle.c;
    const h = o + Math.random() * 500;
    const l = o - Math.random() * 500;
    const c = o + (Math.random() * 400 - 200);

    return { x: date, o, h, l, c };
};

const addDataPoint = () => {
    const nextCandle = getNextCandle();
    if (realtimeChart.value) {
        realtimeChart.value.addData(nextCandle);
    }
};

const removeDataPoint = () => {
    if (realtimeData.value.datasets[0].data.length > 1 && realtimeChart.value) {
        realtimeChart.value.removeData();
    }
};

const startAutoUpdate = () => {
    autoUpdateActive.value = true;
    updateInterval = setInterval(() => {
        addDataPoint();

        if (realtimeData.value.datasets[0].data.length > 30)
            removeDataPoint(0);
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
