<template>
  <div
    class="chart-container"
    :style="{ height: height, width: width }"
    ref="chartContainer"
  >
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
  horizontal: {
    type: Boolean,
    default: false
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
      x: {
        title: {
          display: false,
          text: ''
        },
        grid: {
          display: true
        },
        ticks: {
          autoSkip: true
        }
      },
      y: {
        title: {
          display: false,
          text: ''
        },
        grid: {
          display: true
        },
        beginAtZero: true
      }
    })
  },
  colors: {
    type: Array,
    default: () => [
      'rgba(54, 162, 235, 0.8)',
      'rgba(255, 99, 132, 0.8)',
      'rgba(75, 192, 192, 0.8)',
      'rgba(255, 206, 86, 0.8)',
      'rgba(153, 102, 255, 0.8)',
      'rgba(255, 159, 64, 0.8)',
      'rgba(199, 199, 199, 0.8)'
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

// Referências para o canvas e o container
const chartCanvas = ref(null);
const chartContainer = ref(null);
let chartInstance = null; // Não usar ref para o chartInstance

// Função para criar uma cópia simples de um objeto
function simpleClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  return JSON.parse(JSON.stringify(obj));
}

// Preparar dados para o Chart.js
function prepareChartData() {
  // Criar cópias simples dos dados
  const labels = Array.isArray(props.data.labels) ? [...props.data.labels] : [];

  // Preparar datasets com cores
  const datasets = Array.isArray(props.data.datasets)
    ? props.data.datasets.map((dataset, index) => {
        // Aplicar cores padrão se não forem especificadas
        const color = dataset.backgroundColor || props.colors[index % props.colors.length];
        const borderColor = dataset.borderColor || color;

        // Criar um novo objeto para evitar modificar o original
        return {
          ...dataset,
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: dataset.borderWidth || 1,
          data: Array.isArray(dataset.data) ? [...dataset.data] : []
        };
      })
    : [];

  return { labels, datasets };
}

// Preparar opções para o Chart.js
function prepareChartOptions() {
  // Criar opções básicas
  const baseOptions = {
    indexAxis: props.horizontal ? 'y' : 'x',
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

        // Acessar dados de forma segura
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

        // Acessar dados de forma segura
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

  // Adicionar plugins personalizados
  if (props.plugins && typeof props.plugins === 'object') {
    Object.assign(baseOptions.plugins, simpleClone(props.plugins));
  }

  // Mesclar com as opções personalizadas
  return { ...baseOptions, ...simpleClone(props.options) };
}

// Criar ou recriar o gráfico
function createChart() {
  // Verificar se o canvas está disponível
  if (!chartCanvas.value) {
    console.warn('Chart canvas is not available');
    return;
  }

  // Destruir o gráfico existente antes de criar um novo
  destroyChart();

  // Obter o contexto do canvas
  const ctx = chartCanvas.value.getContext('2d');
  if (!ctx) {
    console.warn('Canvas context could not be obtained');
    return;
  }

  // Preparar dados e opções
  const chartData = prepareChartData();
  const chartOptions = prepareChartOptions();

  // Verificar se temos dados para exibir
  if (!chartData.datasets || !chartData.datasets.length) {
    console.warn('No datasets provided for the chart');
    return;
  }

  // Criar um novo gráfico
  try {
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });

    emit('chart-created', chartInstance);
  } catch (error) {
    console.error('Error creating chart:', error);
    chartInstance = null;
  }
}

// Destruir o gráfico existente
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

// Métodos expostos para manipulação externa
// Todos os métodos agora recriam o gráfico completamente para evitar problemas de referência

// Adicionar um novo conjunto de dados
function addDataset(dataset) {
  if (!props.data || !props.data.datasets) return;

  try {
    // Criar uma cópia dos datasets atuais
    const newDatasets = [...props.data.datasets];

    // Aplicar cor padrão se não for especificada
    const index = newDatasets.length;
    const color = dataset.backgroundColor || props.colors[index % props.colors.length];

    // Adicionar o novo dataset
    newDatasets.push({
      ...dataset,
      backgroundColor: color,
      borderColor: dataset.borderColor || color,
      borderWidth: dataset.borderWidth || 1
    });

    // Atualizar os dados e recriar o gráfico
    props.data.datasets = newDatasets;
    nextTick(() => {
      createChart();
      emit('chart-updated', chartInstance);
    });
  } catch (error) {
    console.error('Error adding dataset:', error);
  }
}

// Atualizar um conjunto de dados existente
function updateDataset(index, dataset) {
  if (!props.data || !props.data.datasets || !props.data.datasets[index]) return;

  try {
    // Criar uma cópia dos datasets atuais
    const newDatasets = [...props.data.datasets];

    // Atualizar o dataset específico
    newDatasets[index] = {
      ...newDatasets[index],
      ...dataset
    };

    // Atualizar os dados e recriar o gráfico
    props.data.datasets = newDatasets;
    nextTick(() => {
      createChart();
      emit('chart-updated', chartInstance);
    });
  } catch (error) {
    console.error('Error updating dataset:', error);
  }
}

// Remover um conjunto de dados
function removeDataset(index) {
  if (!props.data || !props.data.datasets || !props.data.datasets[index]) return;

  try {
    // Criar uma cópia dos datasets atuais
    const newDatasets = [...props.data.datasets];

    // Remover o dataset específico
    newDatasets.splice(index, 1);

    // Atualizar os dados e recriar o gráfico
    props.data.datasets = newDatasets;
    nextTick(() => {
      createChart();
      emit('chart-updated', chartInstance);
    });
  } catch (error) {
    console.error('Error removing dataset:', error);
  }
}

// Adicionar novos dados a todos os conjuntos de dados
function addData(label, data) {
  if (!props.data || !props.data.datasets) return;

  try {
    // Criar cópias dos dados atuais
    const newLabels = [...(props.data.labels || [])];
    const newDatasets = [...props.data.datasets];

    // Adicionar o novo label
    newLabels.push(label);

    // Adicionar dados a cada dataset
    newDatasets.forEach((dataset, i) => {
      const newData = [...(dataset.data || [])];
      newData.push(data[i] || 0);
      dataset.data = newData;
    });

    // Atualizar os dados e recriar o gráfico
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

// Remover dados de todos os conjuntos de dados
function removeData(index) {
  if (!props.data || !props.data.datasets) return;

  try {
    // Criar cópias dos dados atuais
    const newLabels = [...(props.data.labels || [])];
    const newDatasets = [...props.data.datasets];

    // Determinar o índice a remover
    const removeIndex = index !== undefined ? index : newLabels.length - 1;
    if (removeIndex < 0 || removeIndex >= newLabels.length) return;

    // Remover o label
    newLabels.splice(removeIndex, 1);

    // Remover dados de cada dataset
    newDatasets.forEach(dataset => {
      if (dataset.data && Array.isArray(dataset.data)) {
        dataset.data = dataset.data.filter((_, i) => i !== removeIndex);
      }
    });

    // Atualizar os dados e recriar o gráfico
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

// Atualizar os rótulos
function updateLabels(labels) {
  if (!props.data) return;

  try {
    // Atualizar os labels
    props.data.labels = [...labels];
    nextTick(() => {
      createChart();
      emit('chart-updated', chartInstance);
    });
  } catch (error) {
    console.error('Error updating labels:', error);
  }
}

// Redimensionar o gráfico quando o container muda de tamanho
function resizeChart() {
  if (chartInstance) {
    try {
      chartInstance.resize();
    } catch (error) {
      console.error('Error resizing chart:', error);
    }
  }
}

// Observar mudanças nos dados e opções - recriar o gráfico completamente
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

watch(() => props.horizontal, () => {
  nextTick(() => {
    createChart();
  });
});

// Configurar o gráfico quando o componente é montado
onMounted(() => {
  // Criar o gráfico com um pequeno atraso para garantir que o DOM esteja completamente renderizado
  setTimeout(() => {
    createChart();

    // Adicionar listener de redimensionamento
    if (props.responsive) {
      window.addEventListener('resize', resizeChart);
    }
  }, 200);
});

// Limpar quando o componente é desmontado
onUnmounted(() => {
  destroyChart();

  if (props.responsive) {
    window.removeEventListener('resize', resizeChart);
  }
});

// Expor métodos para uso externo
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
