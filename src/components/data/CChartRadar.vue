<template>
    <div class="chart-container" :style="{ height: height, width: width }" ref="chartContainer">
        <canvas ref="chartCanvas"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const props = defineProps({
    data: {
        type: Object,
        required: true,
        default: () => ({
            labels: [],
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
    showPoints: {
        type: Boolean,
        default: true
    },
    pointSize: {
        type: Number,
        default: 3
    },
    fill: {
        type: Boolean,
        default: true
    },
    animation: {
        type: Object,
        default: () => ({
            duration: 1000,
            easing: 'easeOutQuart'
        })
    },
    title: {
        type: String,
        default: ''
    },
    legend: {
        type: Object,
        default: () => ({
            display: true,
            position: 'top'
        })
    },
    scales: {
        type: Object,
        default: () => ({
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                pointLabels: {
                    font: {
                        size: 12
                    }
                }
            }
        })
    },
    colors: {
        type: Array,
        default: () => [
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(199, 199, 199, 0.6)'
        ]
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
    const labels = Array.isArray(props.data.labels) ? [...props.data.labels] : [];

    const datasets = Array.isArray(props.data.datasets)
        ? props.data.datasets.map((dataset, index) => {
            const color = dataset.backgroundColor || props.colors[index % props.colors.length];
            const borderColor = dataset.borderColor || color;

            return {
                ...dataset,
                backgroundColor: props.fill ? color : 'transparent',
                borderColor: borderColor,
                borderWidth: dataset.borderWidth || 2,
                pointRadius: props.showPoints ? (dataset.pointRadius || props.pointSize) : 0,
                pointBackgroundColor: dataset.pointBackgroundColor || borderColor,
                pointBorderColor: dataset.pointBorderColor || '#fff',
                pointBorderWidth: dataset.pointBorderWidth || 1,
                pointHoverRadius: dataset.pointHoverRadius || (props.pointSize + 2),
                fill: props.fill,
                data: Array.isArray(dataset.data) ? [...dataset.data] : []
            };
        })
        : [];

    return { labels, datasets };
}

function prepareChartOptions() {
    const baseOptions = {
        responsive: props.responsive,
        maintainAspectRatio: props.maintainAspectRatio,
        animation: simpleClone(props.animation),
        plugins: {
            legend: simpleClone(props.legend),
            title: {
                display: !!props.title,
                text: props.title,
                font: {
                    size: 16,
                    weight: 'bold'
                }
            }
        },
        scales: simpleClone(props.scales),
        onClick: (event, elements) => {
            if (elements && elements.length > 0) {
                const element = elements[0];
                const datasetIndex = element.datasetIndex;
                const index = element.index;
                const datasets = props.data.datasets || [];
                const dataset = datasets[datasetIndex] || {};
                const dataArray = dataset.data || [];
                const value = dataArray[index];

                emit('chart-click', {
                    event,
                    element,
                    datasetIndex,
                    index,
                    value
                });
            }
        },
        onHover: (event, elements) => {
            if (elements && elements.length > 0) {
                const element = elements[0];
                const datasetIndex = element.datasetIndex;
                const index = element.index;
                const datasets = props.data.datasets || [];
                const dataset = datasets[datasetIndex] || {};
                const dataArray = dataset.data || [];
                const value = dataArray[index];

                emit('chart-hover', {
                    event,
                    element,
                    datasetIndex,
                    index,
                    value
                });
            }
        }
    };

    if (props.plugins && typeof props.plugins === 'object')
        Object.assign(baseOptions.plugins, simpleClone(props.plugins));

    return { ...baseOptions, ...simpleClone(props.options) };
}

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

    const chartData = prepareChartData();
    const chartOptions = prepareChartOptions();

    if (!chartData.datasets || !chartData.datasets.length) {
        console.warn('No datasets provided for the chart');
        return;
    }

    try {
        chartInstance = new Chart(ctx, {
            type: 'radar',
            data: chartData,
            options: chartOptions
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
    }
}

function addDataset(dataset) {
    if (!props.data || !props.data.datasets) return;

    try {
        const newDatasets = [...props.data.datasets];
        const index = newDatasets.length;
        const color = dataset.backgroundColor || props.colors[index % props.colors.length];

        newDatasets.push({
            ...dataset,
            backgroundColor: props.fill ? color : 'transparent',
            borderColor: dataset.borderColor || color,
            borderWidth: dataset.borderWidth || 2
        });

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

function addData(label, data) {
    if (!props.data || !props.data.datasets) return;

    try {
        const newLabels = [...(props.data.labels || [])];
        const newDatasets = [...props.data.datasets];
        newLabels.push(label);

        newDatasets.forEach((dataset, i) => {
            const newData = [...(dataset.data || [])];
            newData.push(data[i] || 0);
            dataset.data = newData;
        });

        props.data.labels = newLabels;
        props.data.datasets = newDatasets;
        nextTick(() => {
            createChart();
            emit('chart-updated', chartInstance);
        });
    } catch (error) {
        console.error('Error adding data:', error);
    }
}

function removeData(index) {
    if (!props.data || !props.data.datasets) return;

    try {
        const newLabels = [...(props.data.labels || [])];
        const newDatasets = [...props.data.datasets];
        const removeIndex = index !== undefined ? index : newLabels.length - 1;
        if (removeIndex < 0 || removeIndex >= newLabels.length) return;

        newLabels.splice(removeIndex, 1);

        newDatasets.forEach(dataset => {
            if (dataset.data && Array.isArray(dataset.data)) {
                dataset.data = dataset.data.filter((_, i) => i !== removeIndex);
            }
        });

        props.data.labels = newLabels;
        props.data.datasets = newDatasets;
        nextTick(() => {
            createChart();
            emit('chart-updated', chartInstance);
        });
    } catch (error) {
        console.error('Error removing data:', error);
    }
}

function updateLabels(labels) {
    if (!props.data) return;

    try {
        props.data.labels = [...labels];
        nextTick(() => {
            createChart();
            emit('chart-updated', chartInstance);
        });
    } catch (error) {
        console.error('Error updating labels:', error);
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

watch(() => props.fill, () => {
    nextTick(() => {
        createChart();
    });
});

watch(() => props.showPoints, () => {
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
    updateLabels,
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
