<template>
  <div class="code-preview-container border border-gray-200 dark:border-neutral-700 rounded-lg mb-8 overflow-hidden">
    <!-- Header com opções -->
    <div class="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-neutral-800 border-b border-gray-200 dark:border-neutral-700">
      <!-- Tabs para alternar entre Preview e Code -->
      <div class="flex space-x-1">
        <button
          v-if="showPreviewButton"
          @click="activeTab = 'preview'"
          :class="[
            'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
            activeTab === 'preview'
              ? 'bg-white dark:bg-neutral-700 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-gray-600 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-700'
          ]"
        >
          Preview
        </button>
        <button
          @click="activeTab = 'code'"
          :class="[
            'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
            activeTab === 'code'
              ? 'bg-white dark:bg-neutral-700 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-gray-600 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-700'
          ]"
        >
          Code
        </button>
      </div>

      <!-- Controles adicionais -->
      <div class="flex items-center space-x-4">
        <!-- Opções de dispositivo (apenas visíveis no modo preview) -->
        <div v-if="activeTab === 'preview' && showPreviewButton" class="flex items-center space-x-2 border-r border-gray-300 dark:border-neutral-600 pr-4">
          <button
            @click="deviceSize = 'desktop'"
            :class="[
              'p-1 rounded transition-colors',
              deviceSize === 'desktop' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-neutral-400'
            ]"
            title="Desktop view"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
          <button
            @click="deviceSize = 'tablet'"
            :class="[
              'p-1 rounded transition-colors',
              deviceSize === 'tablet' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-neutral-400'
            ]"
            title="Tablet view"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </button>
          <button
            @click="deviceSize = 'mobile'"
            :class="[
              'p-1 rounded transition-colors',
              deviceSize === 'mobile' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-neutral-400'
            ]"
            title="Mobile view"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <!-- Toggle de tema (apenas visível no modo preview) -->
        <div v-if="activeTab === 'preview' && showPreviewButton" class="flex items-center">
          <span class="text-xs text-gray-500 dark:text-neutral-400 mr-2">Theme:</span>
          <button
            @click="toggleTheme"
            class="relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none"
            :class="previewTheme === 'dark' ? 'bg-blue-600' : 'bg-gray-300 dark:bg-neutral-600'"
          >
            <span
              class="inline-block w-4 h-4 transform transition-transform bg-white rounded-full"
              :class="previewTheme === 'dark' ? 'translate-x-6' : 'translate-x-1'"
            ></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Conteúdo -->
    <div>
      <!-- Preview -->
      <div
        v-show="activeTab === 'preview'"
        class="transition-all duration-200"
        :class="[
          previewTheme === 'dark' ? 'dark bg-neutral-900' : 'bg-gray-100',
        ]"
      >
        <!-- Container com grid de fundo -->
        <div class="preview-container relative border border-gray-200 dark:border-neutral-700">
          <!-- Grid de fundo para contraste -->
          <div class="absolute inset-0 grid-bg"></div>

          <!-- Container do conteúdo com tamanho responsivo -->
          <div
            class="relative mx-auto border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm"
            :class="[
              deviceSize === 'desktop' ? 'w-full' :
              deviceSize === 'tablet' ? 'w-[768px] max-w-full' :
              'w-[375px] max-w-full'
            ]"
          >
            <div class="p-6">
              <slot name="preview"></slot>
            </div>
          </div>
        </div>
      </div>

      <!-- Code -->
      <div
        v-show="activeTab === 'code'"
        class="overflow-auto"
        style="max-height: 500px;"
      >
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted , watch } from 'vue';

// Props
const props = defineProps({
  defaultView: {
    type: String,
    default: 'preview',
    validator: (value) => ['preview', 'code'].includes(value)
  },
  showPreviewButton: {
    type: Boolean,
    default: true
  }
});

// Estado
const activeTab = ref(props.defaultView);
const deviceSize = ref('desktop');
const previewTheme = ref('light');
const isDarkMode = ref(false);

// Detectar tema atual do sistema/página
const detectDarkMode = () => {
  // Verifica se o elemento html tem a classe 'dark'
  const htmlElement = document.documentElement;
  isDarkMode.value = htmlElement.classList.contains('dark');

  // Sincroniza o tema do preview com o tema geral
  previewTheme.value = isDarkMode.value ? 'dark' : 'light';
};

// Alternar tema
const toggleTheme = () => {
  previewTheme.value = previewTheme.value === 'light' ? 'dark' : 'light';
};

// Observar mudanças no tema do sistema
const observeThemeChanges = () => {
  // Usar MutationObserver para detectar mudanças na classe do elemento html
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        detectDarkMode();
      }
    });
  });

  // Iniciar observação
  observer.observe(document.documentElement, { attributes: true });

  // Limpar observer quando o componente for desmontado
  return observer;
};

// Inicializar Prism.js para destacar a sintaxe quando o componente for montado
onMounted(() => {
  if (window.Prism) {
    window.Prism.highlightAll();
  }

  // Detectar tema inicial
  detectDarkMode();

  // Configurar observer para mudanças de tema
  const observer = observeThemeChanges();

  // Limpar observer quando o componente for desmontado
  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<style scoped>
.code-preview-container pre {
  margin: 0;
  padding: 0;
}

.code-preview-container code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.preview-container {
  padding: 1rem;
}

/* Grid de fundo para contraste */
.grid-bg {
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.03) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(0, 0, 0, 0.03) 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.03) 75%),
                    linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, 0.03) 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}

.dark .grid-bg {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%),
                    linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%);
}
</style>
