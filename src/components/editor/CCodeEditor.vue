<template>
    <div class="c-code-editor" :class="[{ 'c-code-editor--fullscreen': isFullscreen }]">
        <div ref="editorContainer" class="c-code-editor__container min-h-[400px]"></div>

        <div v-if="showFooter" class="c-code-editor__footer">
            <div class="c-code-editor__position">
                Ln {{ cursorPosition.lineNumber }}, Col {{ cursorPosition.column }}
            </div>
            <div class="c-code-editor__status">
                {{ currentLanguage }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick, computed } from 'vue';
import * as monaco from 'monaco-editor';
import { editor } from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import * as monacoThemesList from 'monaco-themes/themes/themelist.json';

// Configure workers
self.MonacoEnvironment = {
    getWorker(_, label) {
        if (label === 'json') {
            return new jsonWorker();
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return new cssWorker();
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return new htmlWorker();
        }
        if (label === 'typescript' || label === 'javascript') {
            return new tsWorker();
        }
        return new editorWorker();
    }
};

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: 'javascript'
    },
    theme: {
        type: String,
        default: '' // Valor vazio permite que o tema seja automaticamente determinado pelo modo escuro do sistema
    },
    readOnly: {
        type: Boolean,
        default: false
    },
    minimap: {
        type: Boolean,
        default: true
    },
    lineNumbers: {
        type: Boolean,
        default: true
    },
    formatOnType: {
        type: Boolean,
        default: false
    },
    wordWrap: {
        type: Boolean,
        default: false
    },
    automaticLayout: {
        type: Boolean,
        default: true
    },
    tabSize: {
        type: Number,
        default: 2
    },
    showToolbar: {
        type: Boolean,
        default: true
    },
    showFooter: {
        type: Boolean,
        default: true
    },
    showCopyButton: {
        type: Boolean,
        default: true
    },
    allowFullscreen: {
        type: Boolean,
        default: true
    },
    height: {
        type: String,
        default: '300px'
    },
    options: {
        type: Object,
        default: () => ({})
    }
});

const emit = defineEmits(['update:modelValue', 'change', 'editor-mounted', 'cursor-position-change']);

// Refs and state
const editorContainer = ref<HTMLElement | null>(null);
const monacoEditor = ref<editor.IStandaloneCodeEditor | null>(null);
const isFullscreen = ref(false);
const currentLanguage = ref(props.language);
const currentValue = ref(props.modelValue);
const cursorPosition = ref({ lineNumber: 1, column: 1 });
const hasCopied = ref(false);

// Flag para evitar loops infinitos entre o editor e o v-model
const isUpdatingModelValue = ref(false);

// Computed
const copyButtonText = computed(() => hasCopied.value ? 'Copied!' : 'Copy to Clipboard');

// Detecta automaticamente o tema escuro no sistema
const isDarkMode = computed(() => {
    return document.documentElement.classList.contains('dark');
});

// Determina o tema do Monaco com base no tema do sistema
const activeTheme = computed(() => {
    if (props.theme) {
        return props.theme;
    }
    return isDarkMode.value ? 'vs-dark' : 'vs';
});

// Editor initialization and configuration
const initMonaco = () => {
    if (!editorContainer.value) return;

    // Set container height
    editorContainer.value.style.height = isFullscreen.value ? '100%' : props.height;

    // Create editor with combined options
    const editorOptions: editor.IStandaloneEditorConstructionOptions = {
        value: currentValue.value,
        language: currentLanguage.value,
        theme: activeTheme.value,
        readOnly: props.readOnly,
        minimap: {
            enabled: props.minimap
        },
        lineNumbers: props.lineNumbers ? 'on' : 'off',
        formatOnType: props.formatOnType,
        wordWrap: props.wordWrap ? 'on' : 'off',
        automaticLayout: props.automaticLayout,
        tabSize: props.tabSize,
        scrollBeyondLastLine: false,
        ...props.options
    };

    monacoEditor.value = monaco.editor.create(editorContainer.value, editorOptions);

    /*monacoEditor.value.onDidChangeModelContent(() => {
        if (!isUpdatingModelValue.value) {
            const value = monacoEditor.value?.getValue() || '';
            isUpdatingModelValue.value = true;
            emit('update:modelValue', value);
            emit('change', value);
            setTimeout(() => {
                isUpdatingModelValue.value = false;
            }, 0);
        }
    });

    monacoEditor.value.onDidChangeCursorPosition(e => {
        cursorPosition.value = {
            lineNumber: e.position.lineNumber,
            column: e.position.column
        };
        emit('cursor-position-change', cursorPosition.value);
    });*/

    emit('editor-mounted', monacoEditor.value);
};

// Watch para atualizar o tema quando o modo escuro mudar
const updateTheme = () => {
    if (monacoEditor.value) {
        monaco.editor.setTheme(activeTheme.value);
    }
};

// Adiciona um observador de atributos para detectar mudanças na classe do document.documentElement
const observeDarkModeChanges = () => {
    // Observer para monitorar mudanças nas classes do elemento HTML (dark/light)
    const observer = new MutationObserver(() => {
        updateTheme();
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
    });

    // Limpa o observer quando o componente é desmontado
    onBeforeUnmount(() => {
        observer.disconnect();
    });
};

// Watch for props changes
/*watch(() => props.modelValue, (newValue) => {
    if (monacoEditor.value && newValue !== monacoEditor.value.getValue() && !isUpdatingModelValue.value) {
        // Ativamos a flag para evitar que o evento onDidChangeModelContent reaja a esta mudança
        isUpdatingModelValue.value = true;
        monacoEditor.value.setValue(newValue);
        // Desativamos a flag após um pequeno atraso
        setTimeout(() => {
            isUpdatingModelValue.value = false;
        }, 0);
    }
});*/

watch(() => props.language, (newValue) => {
    if (newValue !== currentLanguage.value) {
        currentLanguage.value = newValue;
        updateLanguage();
    }
});

watch(() => props.theme, (newValue) => {
    if (monacoEditor.value && newValue) {
        monaco.editor.setTheme(newValue);
    }
});

watch(() => props.readOnly, (newValue) => {
    if (monacoEditor.value) {
        monacoEditor.value.updateOptions({ readOnly: newValue });
    }
});

watch(() => props.minimap, (newValue) => {
    if (monacoEditor.value) {
        monacoEditor.value.updateOptions({ minimap: { enabled: newValue } });
    }
});

watch(() => props.lineNumbers, (newValue) => {
    if (monacoEditor.value) {
        monacoEditor.value.updateOptions({ lineNumbers: newValue ? 'on' : 'off' });
    }
});

watch(() => props.wordWrap, (newValue) => {
    if (monacoEditor.value) {
        monacoEditor.value.updateOptions({ wordWrap: newValue ? 'on' : 'off' });
    }
});

watch(() => props.tabSize, (newValue) => {
    if (monacoEditor.value) {
        monacoEditor.value.updateOptions({ tabSize: newValue });
    }
});

watch(() => props.height, (newValue) => {
    if (!isFullscreen.value && editorContainer.value) {
        editorContainer.value.style.height = newValue;
        monacoEditor.value?.layout();
    }
});

watch(isFullscreen, () => {
    if (editorContainer.value) {
        editorContainer.value.style.height = isFullscreen.value ? '100%' : props.height;
        nextTick(() => {
            monacoEditor.value?.layout();
        });
    }
});

// Methods
const updateLanguage = () => {
    if (monacoEditor.value) {
        const model = monacoEditor.value.getModel();
        if (model) {
            monaco.editor.setModelLanguage(model, currentLanguage.value);
        }
    }
};

const toggleWordWrap = () => {
    if (monacoEditor.value) {
        const currentWrap = monacoEditor.value.getOption(editor.EditorOption.wordWrap);
        const newWrapValue = currentWrap === 'on' ? 'off' : 'on';
        monacoEditor.value.updateOptions({ wordWrap: newWrapValue });
    }
};

const toggleFullscreen = () => {
    isFullscreen.value = !isFullscreen.value;

    // Add/remove ESC key listener when going fullscreen
    if (isFullscreen.value) {
        document.addEventListener('keydown', handleEscKey);
    } else {
        document.removeEventListener('keydown', handleEscKey);
    }
};

const handleEscKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isFullscreen.value) {
        isFullscreen.value = false;
        document.removeEventListener('keydown', handleEscKey);
    }
};

const copyToClipboard = async () => {
    if (!monacoEditor.value) return;

    const code = monacoEditor.value.getValue();
    try {
        await navigator.clipboard.writeText(code);
        hasCopied.value = true;
        setTimeout(() => {
            hasCopied.value = false;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy code:', err);
    }
};

const formatCode = () => {
    monacoEditor.value?.getAction('editor.action.formatDocument')?.run();
};

// Definição de temas personalizados
const defineMonacoThemes = () => {
    // Tema GitHub Light
    monaco.editor.defineTheme('github-light', {
        base: 'vs',
        inherit: true,
        rules: [
            { token: 'comment', foreground: '6a737d', fontStyle: 'italic' },
            { token: 'keyword', foreground: 'd73a49' },
            { token: 'string', foreground: '032f62' },
            { token: 'number', foreground: '005cc5' },
            { token: 'regexp', foreground: '032f62' },
            { token: 'type', foreground: '6f42c1' },
            { token: 'class', foreground: '6f42c1' },
            { token: 'function', foreground: '6f42c1' },
            { token: 'variable', foreground: '24292e' },
            { token: 'variable.predefined', foreground: '005cc5' }
        ],
        colors: {
            'editor.foreground': '#24292e',
            'editor.background': '#ffffff',
            'editor.selectionBackground': '#c8c8fa',
            'editor.lineHighlightBackground': '#f1f8ff',
            'editorCursor.foreground': '#24292e',
            'editorWhitespace.foreground': '#d1d5da'
        }
    });

    // Tema GitHub Dark
    monaco.editor.defineTheme('github-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            { token: 'comment', foreground: '6a737d', fontStyle: 'italic' },
            { token: 'keyword', foreground: 'ff7b72' },
            { token: 'string', foreground: 'a5d6ff' },
            { token: 'number', foreground: '79c0ff' },
            { token: 'regexp', foreground: 'a5d6ff' },
            { token: 'type', foreground: 'd2a8ff' },
            { token: 'class', foreground: 'd2a8ff' },
            { token: 'function', foreground: 'd2a8ff' },
            { token: 'variable', foreground: 'c9d1d9' },
            { token: 'variable.predefined', foreground: '79c0ff' }
        ],
        colors: {
            'editor.foreground': '#c9d1d9',
            'editor.background': '#0d1117',
            'editor.selectionBackground': '#3b5070',
            'editor.lineHighlightBackground': '#161b22',
            'editorCursor.foreground': '#c9d1d9',
            'editorWhitespace.foreground': '#484f58'
        }
    });

    // Tema Monokai
    monaco.editor.defineTheme('monokai', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            { token: 'comment', foreground: '88846f', fontStyle: 'italic' },
            { token: 'keyword', foreground: 'f92672' },
            { token: 'string', foreground: 'e6db74' },
            { token: 'number', foreground: 'ae81ff' },
            { token: 'regexp', foreground: 'e6db74' },
            { token: 'type', foreground: '66d9ef', fontStyle: 'italic' },
            { token: 'class', foreground: 'a6e22e' },
            { token: 'function', foreground: 'a6e22e' },
            { token: 'variable', foreground: 'f8f8f2' },
            { token: 'variable.predefined', foreground: '66d9ef' }
        ],
        colors: {
            'editor.foreground': '#f8f8f2',
            'editor.background': '#272822',
            'editor.selectionBackground': '#49483e',
            'editor.lineHighlightBackground': '#3e3d32',
            'editorCursor.foreground': '#f8f8f0',
            'editorWhitespace.foreground': '#3b3a32'
        }
    });
};

// Método para aplicar um tema ao editor
const applyTheme = (themeName: string) => {
    if (monacoEditor.value) {
        monaco.editor.setTheme(themeName);
    }
};

// Substitua ou adicione este método para carregar os temas do pacote monaco-themes
const loadMonacoThemes = async () => {
  try {
    // Carrega dinamicamente apenas os temas mais populares para evitar problemas
    const popularThemes = [
      'Active4D.json',
      'Cobalt2.json',
      'Dracula.json',
      'Monokai.json',
      'Solarized-dark.json',
      'Solarized-light.json',
      'Tomorrow-Night-Blue.json',
      'Tomorrow-Night-Bright.json',
      'Twilight.json'
    ];

    for (const themeName of popularThemes) {
      try {
        // Remove a extensão .json para obter o ID do tema
        const themeId = themeName.replace('.json', '').toLowerCase().replace(/\s+/g, '-');

        // Carrega o tema dinamicamente
        const themeData = await import(`monaco-themes/themes/${themeName}`);

        // Registra o tema no Monaco Editor
        monaco.editor.defineTheme(themeId, themeData);
        console.log(`Theme loaded: ${themeId}`);
      } catch (themeError) {
        console.warn(`Failed to load theme: ${themeName}`, themeError);
      }
    }

    console.log('Monaco themes loaded successfully');
  } catch (error) {
    console.error('Error loading Monaco themes:', error);
  }
};

// Atualize a lista de temas disponíveis
const getAvailableThemes = () => [
  // Temas padrão do Monaco
  'vs',                    // Light theme (padrão)
  'vs-dark',               // Dark theme
  'hc-black',              // High contrast dark

  // Temas personalizados definidos manualmente
  'github-light',          // GitHub light
  'github-dark',           // GitHub dark
  'monokai',               // Monokai

  // Temas do monaco-themes (apenas os que carregamos)
  'active4d',
  'cobalt2',
  'dracula',
  'monokai',
  'solarized-dark',
  'solarized-light',
  'tomorrow-night-blue',
  'tomorrow-night-bright',
  'twilight'
];

// Lifecycle hooks
onMounted(async () => {
  defineMonacoThemes(); // Registra os temas personalizados definidos manualmente
  await loadMonacoThemes(); // Carrega os temas do pacote monaco-themes (espera completar)
  initMonaco();
  observeDarkModeChanges();
  updateTheme();
});

onBeforeUnmount(() => {
    if (monacoEditor.value)
        monacoEditor.value.dispose();

    document.removeEventListener('keydown', handleEscKey);
});

defineExpose({
    editor: monacoEditor,
    getEditor: () => monacoEditor.value,
    formatCode,
    toggleFullscreen,
    copyToClipboard,
    getValue: () => monacoEditor.value?.getValue() || '',
    setValue: (value: string) => {
        if (monacoEditor.value) {
            isUpdatingModelValue.value = true;
            monacoEditor.value.setValue(value);
            setTimeout(() => {
                isUpdatingModelValue.value = false;
            }, 0);
        }
    },
    focus: () => monacoEditor.value?.focus(),
    setLanguage: (language: string) => {
        currentLanguage.value = language;
        updateLanguage();
    },
    setTheme: (theme: string) => {
        applyTheme(theme);
    },
    getAvailableThemes // Expõe a lista de temas disponíveis
});
</script>

<style scoped>
.c-code-editor {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    background-color: var(--c-bg-surface, #ffffff);
    color: var(--c-text-primary, #333333);
    width: 100%;
}

.c-code-editor--fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    border-radius: 0;
    border: none;
}

.c-code-editor__toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 8px;
    background-color: var(--c-bg-subtle, #f5f5f5);
    border-bottom: 1px solid var(--c-border-subtle, #e0e0e0);
    font-size: 0.85rem;
}

.c-code-editor__toolbar-left,
.c-code-editor__toolbar-right {
    display: flex;
    align-items: center;
    gap: 8px;
}

.c-code-editor__language-selector {
    min-width: 120px;
}

.c-select {
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid var(--c-border-subtle, #d0d0d0);
    background-color: var(--c-bg-surface, #ffffff);
    font-size: 0.85rem;
    outline: none;
}

.c-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid var(--c-border-subtle, #d0d0d0);
    background-color: var(--c-bg-surface, #ffffff);
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease;
}

.c-button:hover {
    background-color: var(--c-bg-hover, #e9e9e9);
}

.c-button:active,
.c-button.active {
    background-color: var(--c-bg-active, #d0d0d0);
}

.c-button--icon {
    padding: 4px;
    width: 24px;
    height: 24px;
}

.c-code-editor__container {
    flex: 1;
    overflow: hidden;
    width: 100%;
}

.c-code-editor__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 8px;
    background-color: var(--c-bg-subtle, #f5f5f5);
    border-top: 1px solid var(--c-border-subtle, #e0e0e0);
    font-size: 0.75rem;
    color: var(--c-text-secondary, #666666);
}

/* Dark mode support */
.dark .c-code-editor {
    border-color: var(--c-border-default, #444444);
    background-color: var(--c-bg-surface, #1e1e1e);
    color: var(--c-text-primary, #e1e1e1);
}

.dark .c-code-editor__toolbar,
.dark .c-code-editor__footer {
    background-color: var(--c-bg-subtle, #252525);
    border-color: var(--c-border-subtle, #444444);
}

.dark .c-select,
.dark .c-button {
    border-color: var(--c-border-subtle, #555555);
    background-color: var(--c-bg-surface, #333333);
    color: var(--c-text-primary, #e1e1e1);
}

.dark .c-button:hover {
    background-color: var(--c-bg-hover, #444444);
}

.dark .c-button:active,
.dark .c-button.active {
    background-color: var(--c-bg-active, #555555);
}

.dark .c-code-editor__footer {
    color: var(--c-text-secondary, #a0a0a0);
}
</style>
