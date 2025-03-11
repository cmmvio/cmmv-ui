<template>
    <div class="chart-container" :style="{ height: height, width: width }" ref="chartContainer">
        <canvas ref="chartCanvas"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { Chart, BarElement, BarController, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, BarController, CategoryScale, LinearScale, Tooltip, Legend);

const props = defineProps({
    data: {
        type: Object,
        required: true,
        default: () => ({
            datasets: []
        })
    },
    options: {
        type: Object,
        default: () => ({})
    },
    width: {
        type: String,
        default: '100%'
    },
    height: {
        type: String,
        default: '400px'
    },
    chartType: {
        type: String,
        default: 'candlestick',
        validator: (value) => ['candlestick', 'ohlc'].includes(value)
    },
    title: {
        type: String,
        default: ''
    },
    legend: {
        type: Object,
        default: () => ({
            display: false
        })
    },
    upColor: {
        type: String,
        default: 'rgba(75, 192, 192, 0.5)'
    },
    downColor: {
        type: String,
        default: 'rgba(255, 99, 132, 0.5)'
    },
    upBorderColor: {
        type: String,
        default: 'rgb(75, 192, 192)'
    },
    downBorderColor: {
        type: String,
        default: 'rgb(255, 99, 132)'
    },
    responsive: {
        type: Boolean,
        default: true
    },
    maintainAspectRatio: {
        type: Boolean,
        default: false
    },
    plugins: {
        type: Object,
        default: () => ({})
    }
});

const emit = defineEmits(['chart-click', 'chart-hover', 'chart-created', 'chart-updated']);
const chartCanvas = ref(null);
const chartContainer = ref(null);
let chartInstance = null;

function simpleClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    return JSON.parse(JSON.stringify(obj));
}

function prepareChartData() {
    const labels = [];

    const datasets = Array.isArray(props.data.datasets)
        ? props.data.datasets.map(dataset => {

            if (labels.length === 0 && Array.isArray(dataset.data)) {
                dataset.data.forEach(item => {
                    let dateLabel;
                    if (Array.isArray(item)) {
                        dateLabel = new Date(item[0]).toLocaleDateString();
                    } else {
                        const x = item.x || item.t || item.time || item.date;
                        dateLabel = new Date(x).toLocaleDateString();
                    }
                    labels.push(dateLabel);
                });
            }

            if (props.chartType === 'candlestick' || props.chartType === 'ohlc') {
                const ohlcData = Array.isArray(dataset.data)
                    ? dataset.data.map(item => {
                        if (Array.isArray(item)) {
                            return {
                                o: item[1],
                                h: item[2],
                                l: item[3],
                                c: item[4]
                            };
                        } else {
                            return {
                                o: item.o || item.open,
                                h: item.h || item.high,
                                l: item.l || item.low,
                                c: item.c || item.close
                            };
                        }
                    })
                    : [];

                ohlcData.forEach(item => {
                    item.o = Number(item.o);
                    item.h = Number(item.h);
                    item.l = Number(item.l);
                    item.c = Number(item.c);
                });

                return {
                    label: dataset.label || 'Price',
                    data: ohlcData.map(item => ({
                        open: item.o,
                        high: item.h,
                        low: item.l,
                        close: item.c
                    })),
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    barPercentage: 0.9,
                    categoryPercentage: 0.8,
                    barThickness: 'flex'
                };
            }

            return {
                ...dataset,
                backgroundColor: props.upColor,
                borderColor: props.upBorderColor,
                borderWidth: 1
            };
        })
        : [];

    return { labels, datasets };
}

function prepareChartOptions() {
    const baseOptions = {
        responsive: props.responsive,
        maintainAspectRatio: props.maintainAspectRatio,
        animation: {
            duration: 1000,
            easing: 'easeOutQuart'
        },
        plugins: {
            legend: simpleClone(props.legend),
            title: {
                display: !!props.title,
                text: props.title,
                font: {
                    size: 16,
                    weight: 'bold'
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const dataPoint = context.raw;
                        if (dataPoint && dataPoint.open !== undefined) {
                            return [
                                `Open: ${dataPoint.open}`,
                                `High: ${dataPoint.high}`,
                                `Low: ${dataPoint.low}`,
                                `Close: ${dataPoint.close}`
                            ];
                        }
                        return context.dataset.label + ": " + context.formattedValue;
                    }
                }
            }
        },
        scales: {
            x: {
                type: 'category',
                grid: {
                    display: true
                }
            },
            y: {
                beginAtZero: false,
                grid: {
                    display: true
                }
            }
        },
        onClick: (evt, elements, chart) => {
            if (elements && elements.length > 0) {
                const element = elements[0];
                const index = element.index;
                const datasetIndex = element.datasetIndex;
                const dataset = props.data.datasets[datasetIndex];
                const dataPoint = dataset.data[index];

                emit('chart-click', {
                    event: evt,
                    element,
                    datasetIndex,
                    index,
                    dataPoint
                });
            }
        },
    };

    if (props.plugins && typeof props.plugins === 'object')
        Object.assign(baseOptions.plugins, simpleClone(props.plugins));

    return { ...baseOptions, ...simpleClone(props.options) };
}

const financialChartPlugin = {
    id: 'financialChartPlugin',
    beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const xAxis = chart.scales.x;
        const yAxis = chart.scales.y;

        if (props.chartType === 'candlestick' || props.chartType === 'ohlc') {
            const dataset = chart.data.datasets[0];
            if (!dataset || !dataset.data) return;

            const barWidth = Math.min(40, xAxis.width / (dataset.data.length) * 0.8);
            const halfBarWidth = barWidth / 2;

            ctx.save();
            ctx.lineWidth = 1;

            dataset.data.forEach((dataPoint, index) => {
                if (!dataPoint || typeof dataPoint.high === 'undefined' ||
                    typeof dataPoint.low === 'undefined' ||
                    typeof dataPoint.open === 'undefined' ||
                    typeof dataPoint.close === 'undefined') {
                    return;
                }

                const highValue = Number(dataPoint.high);
                const lowValue = Number(dataPoint.low);
                const openValue = Number(dataPoint.open);
                const closeValue = Number(dataPoint.close);

                if (isNaN(highValue) || isNaN(lowValue) || isNaN(openValue) || isNaN(closeValue)) {
                    return;
                }

                const xPos = xAxis.getPixelForValue(index);

                if (xPos < xAxis.left || xPos > xAxis.right)
                    return;

                const high = yAxis.getPixelForValue(highValue);
                const low = yAxis.getPixelForValue(lowValue);
                const open = yAxis.getPixelForValue(openValue);
                const close = yAxis.getPixelForValue(closeValue);

                const isUp = closeValue >= openValue;
                ctx.strokeStyle = isUp ? props.upBorderColor : props.downBorderColor;
                ctx.fillStyle = isUp ? props.upColor : props.downColor;

                ctx.beginPath();
                ctx.moveTo(xPos, high);
                ctx.lineTo(xPos, low);
                ctx.stroke();

                if (props.chartType === 'ohlc') {
                    const armLength = barWidth * 0.5;

                    ctx.beginPath();
                    ctx.moveTo(xPos - armLength, open);
                    ctx.lineTo(xPos, open);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(xPos, close);
                    ctx.lineTo(xPos + armLength, close);
                    ctx.stroke();
                } else if (props.chartType === 'candlestick') {
                    const yStart = Math.min(open, close);
                    const yEnd = Math.max(open, close);
                    let candleHeight = Math.max(1, Math.abs(yEnd - yStart));

                    if (candleHeight < 2)
                        candleHeight = 2;

                    ctx.beginPath();
                    ctx.rect(
                        xPos - halfBarWidth,
                        yStart,
                        barWidth,
                        candleHeight
                    );
                    ctx.fill();
                    ctx.stroke();
                }
            });

            ctx.restore();
        }
    }
};

function createChart() {
    if (!chartCanvas.value) {
        console.warn('Chart canvas is not available');
        return;
    }

    destroyChart();

    const ctx = chartCanvas.value.getContext('2d');
    if (!ctx) {
        console.warn('Canvas context could not be obtained');
        return;
    }

    ctx.clearRect(0, 0, chartCanvas.value.width, chartCanvas.value.height);

    const chartData = prepareChartData();
    const chartOptions = prepareChartOptions();

    if (!chartData.datasets || !chartData.datasets.length) {
        console.warn('No datasets provided for the chart');
        return;
    }

    let minValue = Infinity;
    let maxValue = -Infinity;

    if (chartData.datasets[0] && chartData.datasets[0].data) {
        chartData.datasets[0].data.forEach(point => {
            if (typeof point.high !== 'undefined') maxValue = Math.max(maxValue, Number(point.high));
            if (typeof point.low !== 'undefined') minValue = Math.min(minValue, Number(point.low));
        });
    }

    const valueRange = maxValue - minValue;
    minValue = Math.max(0, minValue - valueRange * 0.1);
    maxValue = maxValue + valueRange * 0.1;

    try {
        const mergedOptions = {
            ...chartOptions,
            plugins: {
                ...chartOptions.plugins,
                legend: {
                    display: false,
                    ...chartOptions.plugins?.legend
                }
            },
            elements: {
                bar: {
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(0,0,0,0)',
                    borderWidth: 0
                }
            },
            scales: {
                ...chartOptions.scales,
                y: {
                    ...chartOptions.scales?.y,
                    beginAtZero: false,
                    min: minValue,
                    max: maxValue,
                    grace: '5%'
                }
            }
        };

        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: mergedOptions,
            plugins: [financialChartPlugin]
        });

        emit('chart-created', chartInstance);
    } catch (error) {
        console.error('Error creating chart:', error);
        chartInstance = null;
    }
}

function destroyChart() {
    if (chartInstance) {
        try {
            chartInstance.destroy();
        } catch (error) {
            console.error('Error destroying chart:', error);
        }
        chartInstance = null;

        if (chartCanvas.value) {
            const ctx = chartCanvas.value.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, chartCanvas.value.width, chartCanvas.value.height);
            }
        }
    }
}

function addDataset(dataset) {
    if (!props.data || !props.data.datasets) return;

    try {
        const newDatasets = [...props.data.datasets];
        newDatasets.push(dataset);

        props.data.datasets = newDatasets;
        nextTick(() => {
            createChart();
            emit('chart-updated', chartInstance);
        });
    } catch (error) {
        console.error('Error adding dataset:', error);
    }
}

function updateDataset(index, dataset) {
    if (!props.data || !props.data.datasets || !props.data.datasets[index]) return;

    try {
        const newDatasets = [...props.data.datasets];

        newDatasets[index] = {
            ...newDatasets[index],
            ...dataset
        };

        props.data.datasets = newDatasets;
        nextTick(() => {
            createChart();
            emit('chart-updated', chartInstance);
        });
    } catch (error) {
        console.error('Error updating dataset:', error);
    }
}

function removeDataset(index) {
    if (!props.data || !props.data.datasets || !props.data.datasets[index]) return;

    try {
        const newDatasets = [...props.data.datasets];
        newDatasets.splice(index, 1);

        props.data.datasets = newDatasets;
        nextTick(() => {
            createChart();
            emit('chart-updated', chartInstance);
        });
    } catch (error) {
        console.error('Error removing dataset:', error);
    }
}

function addData(dataPoint, datasetIndex = 0) {
    if (!props.data || !props.data.datasets || !props.data.datasets[datasetIndex]) return;

    try {
        const newDatasets = [...props.data.datasets];

        let formattedPoint;
        if (Array.isArray(dataPoint)) {
            formattedPoint = {
                x: new Date(dataPoint[0]),
                o: dataPoint[1],
                h: dataPoint[2],
                l: dataPoint[3],
                c: dataPoint[4]
            };
        } else {
            const x = dataPoint.x || dataPoint.t || dataPoint.time || dataPoint.date;
            formattedPoint = {
                x: x instanceof Date ? x : new Date(x),
                o: dataPoint.o || dataPoint.open,
                h: dataPoint.h || dataPoint.high,
                l: dataPoint.l || dataPoint.low,
                c: dataPoint.c || dataPoint.close
            };
        }

        Object.keys(formattedPoint).forEach(key => {
            if (key !== 'x' && typeof formattedPoint[key] === 'string') {
                formattedPoint[key] = parseFloat(formattedPoint[key]);
            }
        });

        newDatasets[datasetIndex].data.push(formattedPoint);

        props.data.datasets = newDatasets;
        nextTick(() => {
            createChart();
            emit('chart-updated', chartInstance);
        });
    } catch (error) {
        console.error('Error adding data:', error);
    }
}

function removeData(index, datasetIndex = 0) {
    if (!props.data ||
        !props.data.datasets ||
        !props.data.datasets[datasetIndex] ||
        !Array.isArray(props.data.datasets[datasetIndex].data)) return;

    try {
        const newDatasets = [...props.data.datasets];
        const removeIndex = index !== undefined ? index : newDatasets[datasetIndex].data.length - 1;

        if (removeIndex < 0 || removeIndex >= newDatasets[datasetIndex].data.length) return;

        newDatasets[datasetIndex].data.splice(removeIndex, 1);

        props.data.datasets = newDatasets;
        nextTick(() => {
            createChart();
            emit('chart-updated', chartInstance);
        });
    } catch (error) {
        console.error('Error removing data:', error);
    }
}

function resizeChart() {
    if (chartInstance) {
        try {
            chartInstance.resize();
        } catch (error) {
            console.error('Error resizing chart:', error);
        }
    }
}

watch(() => simpleClone(props.data), () => {
    nextTick(() => {
        createChart();
    });
}, { deep: true });

watch(() => simpleClone(props.options), () => {
    nextTick(() => {
        createChart();
    });
}, { deep: true });

watch(() => props.title, () => {
    nextTick(() => {
        createChart();
    });
});

watch(() => props.chartType, () => {
    nextTick(() => {
        createChart();
    });
});

watch(() => props.upColor, () => {
    nextTick(() => {
        createChart();
    });
});

watch(() => props.downColor, () => {
    nextTick(() => {
        createChart();
    });
});

onMounted(() => {
    setTimeout(() => {
        createChart();

        if (props.responsive)
            window.addEventListener('resize', resizeChart);
    }, 200);
});

onUnmounted(() => {
    destroyChart();

    if (props.responsive)
        window.removeEventListener('resize', resizeChart);
});

defineExpose({
    addDataset,
    updateDataset,
    removeDataset,
    addData,
    removeData,
    resizeChart,
    recreateChart: createChart
});
</script>

<style scoped>
.chart-container {
    position: relative;
    margin: auto;
}
</style>
