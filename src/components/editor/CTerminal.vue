<template>
    <div class="c-terminal" :class="{ 'c-terminal--fullscreen': isFullscreen }">
        <!-- Terminal Header -->
        <div class="c-terminal-header" v-if="showHeader">
            <div class="c-terminal-header__title">
                <slot name="title">{{ title }}</slot>
            </div>
            <div class="c-terminal-header__actions">
                <button v-if="allowFullscreen"
                    @click="toggleFullscreen"
                    class="c-terminal-header__action"
                    :title="isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5 4a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3h3a1 1 0 0 1 0 2H5zm10 0h-3a1 1 0 1 1 0-2h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1zM5 16a1 1 0 0 1-1-1v-3a1 1 0 1 0-2 0v3a3 3 0 0 0 3 3h3a1 1 0 1 0 0-2H5zm10 0h-3a1 1 0 1 0 0 2h3a3 3 0 0 0 3-3v-3a1 1 0 1 0-2 0v3a1 1 0 0 1-1 1z" clip-rule="evenodd" />
                    </svg>
                </button>
                <slot name="actions"></slot>
            </div>
        </div>

        <!-- Terminal Container -->
        <div ref="terminalContainer" class="c-terminal-container"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { Terminal } from '@xterm/xterm';
import { AttachAddon } from '@xterm/addon-attach';
import { FitAddon } from '@xterm/addon-fit';
import { WebLinksAddon } from '@xterm/addon-web-links';
import { SearchAddon } from '@xterm/addon-search';
import { Unicode11Addon } from '@xterm/addon-unicode11';
import { WebglAddon } from '@xterm/addon-webgl';
import { ClipboardAddon } from '@xterm/addon-clipboard';
import '@xterm/xterm/css/xterm.css';

interface Props {
    title?: string;
    showHeader?: boolean;
    allowFullscreen?: boolean;
    fontSize?: number;
    fontFamily?: string;
    wsUrl?: string;
    theme?: {
        foreground?: string;
        background?: string;
        cursor?: string;
        selection?: string;
        black?: string;
        red?: string;
        green?: string;
        yellow?: string;
        blue?: string;
        magenta?: string;
        cyan?: string;
        white?: string;
        brightBlack?: string;
        brightRed?: string;
        brightGreen?: string;
        brightYellow?: string;
        brightBlue?: string;
        brightMagenta?: string;
        brightCyan?: string;
        brightWhite?: string;
    };
    rows?: number;
    cols?: number;
    cursorBlink?: boolean;
    cursorStyle?: 'block' | 'underline' | 'bar';
    scrollback?: number;
    bellStyle?: 'none' | 'sound' | 'visual';
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Terminal',
    showHeader: true,
    allowFullscreen: true,
    fontSize: 14,
    fontFamily: 'Menlo, Monaco, Consolas, monospace',
    wsUrl: '',
    theme: () => ({
        foreground: '#cccccc',
        background: '#1e1e1e',
        cursor: '#ffffff',
        selection: '#264f78',
        black: '#000000',
        red: '#cd3131',
        green: '#0dbc79',
        yellow: '#e5e510',
        blue: '#2472c8',
        magenta: '#bc3fbc',
        cyan: '#11a8cd',
        white: '#e5e5e5',
        brightBlack: '#666666',
        brightRed: '#f14c4c',
        brightGreen: '#23d18b',
        brightYellow: '#f5f543',
        brightBlue: '#3b8eea',
        brightMagenta: '#d670d6',
        brightCyan: '#29b8db',
        brightWhite: '#e5e5e5'
    }),
    rows: 24,
    cols: 80,
    cursorBlink: true,
    cursorStyle: 'block',
    scrollback: 1000,
    bellStyle: 'sound'
});

const emit = defineEmits<{
    (e: 'data', data: string): void;
    (e: 'title', title: string): void;
    (e: 'resize', size: { cols: number; rows: number }): void;
    (e: 'connected'): void;
    (e: 'disconnected'): void;
    (e: 'error', error: any): void;
}>();

const terminalContainer = ref<HTMLElement | null>(null);
const terminal = ref<Terminal | null>(null);
const fitAddon = ref<FitAddon | null>(null);
const webglAddon = ref<WebglAddon | null>(null);
const attachAddon = ref<AttachAddon | null>(null);
const ws = ref<WebSocket | null>(null);
const isFullscreen = ref(false);

// Initialize WebSocket connection
const initWebSocket = () => {
    if (!props.wsUrl || !terminal.value) return;

    try {
        ws.value = new WebSocket(props.wsUrl);

        ws.value.onopen = () => {
            if (terminal.value && ws.value) {
                attachAddon.value = new AttachAddon(ws.value);
                terminal.value.loadAddon(attachAddon.value);
                emit('connected');
            }
        };

        ws.value.onclose = () => {
            emit('disconnected');
        };

        ws.value.onerror = (error) => {
            emit('error', error);
        };
    } catch (error) {
        emit('error', error);
    }
};

// Initialize terminal
const initTerminal = () => {
    if (!terminalContainer.value) return;

    terminal.value = new Terminal({
        fontSize: props.fontSize,
        fontFamily: props.fontFamily,
        theme: props.theme,
        rows: props.rows,
        cols: props.cols,
        cursorBlink: props.cursorBlink,
        cursorStyle: props.cursorStyle,
        scrollback: props.scrollback,
        //bellStyle: props.bellStyle,
        allowTransparency: true,
        allowProposedApi: true
    });

    fitAddon.value = new FitAddon();
    terminal.value.loadAddon(fitAddon.value);
    terminal.value.loadAddon(new WebLinksAddon());
    terminal.value.loadAddon(new SearchAddon());
    terminal.value.loadAddon(new Unicode11Addon());
    terminal.value.loadAddon(new ClipboardAddon());

    try {
        webglAddon.value = new WebglAddon();
        terminal.value.loadAddon(webglAddon.value);
    } catch (e) {
        console.warn('WebGL addon could not be loaded', e);
    }

    terminal.value.open(terminalContainer.value);
    fitAddon.value.fit();

    terminal.value.onData(data => emit('data', data));
    terminal.value.onTitleChange(title => emit('title', title));
    terminal.value.onResize(size => emit('resize', size));

    if (props.wsUrl)
        initWebSocket();
};

// Handle window resize
const handleResize = () => {
    if (fitAddon.value) {
        fitAddon.value.fit();
    }
};

// Toggle fullscreen
const toggleFullscreen = () => {
    isFullscreen.value = !isFullscreen.value;
    setTimeout(() => {
        handleResize();
    }, 100);
};

// Handle fullscreen change
const handleFullscreenChange = () => {
    if (document.fullscreenElement) {
        isFullscreen.value = true;
    } else {
        isFullscreen.value = false;
    }
    handleResize();
};

// Watch for theme changes
watch(() => props.theme, (newTheme) => {
    if (terminal.value) {
        terminal.value.options.theme = newTheme;
    }
}, { deep: true });

// Watch for font size changes
watch(() => props.fontSize, (newSize) => {
    if (terminal.value) {
        terminal.value.options.fontSize = newSize;
        handleResize();
    }
});

// Watch for WebSocket URL changes
watch(() => props.wsUrl, (newUrl) => {
    if (ws.value) {
        ws.value.close();
        ws.value = null;
    }
    if (attachAddon.value && terminal.value) {
        terminal.value.loadAddon(attachAddon.value);
        attachAddon.value = null;
    }
    if (newUrl) {
        initWebSocket();
    }
});

// Lifecycle hooks
onMounted(() => {
    initTerminal();
    window.addEventListener('resize', handleResize);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
});

onBeforeUnmount(() => {
    if (ws.value) {
        ws.value.close();
    }
    if (webglAddon.value) {
        webglAddon.value.dispose();
    }
    if (terminal.value) {
        terminal.value.dispose();
    }
    window.removeEventListener('resize', handleResize);
    document.removeEventListener('fullscreenchange', handleFullscreenChange);
});

// Expose methods
defineExpose({
    terminal: () => terminal.value,
    write: (data: string) => terminal.value?.write(data),
    writeln: (data: string) => terminal.value?.writeln(data),
    clear: () => terminal.value?.clear(),
    reset: () => terminal.value?.reset(),
    focus: () => terminal.value?.focus(),
    blur: () => terminal.value?.blur(),
    resize: (cols: number, rows: number) => terminal.value?.resize(cols, rows),
    refresh: () => terminal.value?.refresh(0, terminal.value.rows - 1),
    fit: () => fitAddon.value?.fit(),
    reconnect: () => {
        if (props.wsUrl) {
            if (ws.value) {
                ws.value.close();
            }
            initWebSocket();
        }
    },
    disconnect: () => {
        if (ws.value) {
            ws.value.close();
        }
    }
});
</script>

<style scoped>
.c-terminal {
    display: flex;
    flex-direction: column;
    background-color: var(--c-bg-surface, #1e1e1e);
    border: 1px solid var(--c-border-subtle, #2d2d2d);
    border-radius: 6px;
    overflow: hidden;
    height: 100%;
    min-height: 300px;
}

.c-terminal--fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    border: none;
    border-radius: 0;
}

.c-terminal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 8px;
    background-color: var(--c-bg-header, #252526);
    border-bottom: 1px solid var(--c-border-subtle, #2d2d2d);
    user-select: none;
}

.c-terminal-header__title {
    font-size: 12px;
    font-weight: 500;
    color: var(--c-text-primary, #cccccc);
}

.c-terminal-header__actions {
    display: flex;
    align-items: center;
    gap: 4px;
}

.c-terminal-header__action {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 4px;
    border: none;
    background: transparent;
    color: var(--c-text-secondary, #808080);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.c-terminal-header__action:hover {
    background-color: var(--c-bg-hover, #2a2d2e);
    color: var(--c-text-primary, #cccccc);
}

.c-terminal-container {
    flex: 1;
    padding: 4px;
    overflow: hidden;
}

/* Dark mode support */
.dark .c-terminal {
    border-color: var(--c-border-subtle, #2d2d2d);
}

.dark .c-terminal-header {
    background-color: var(--c-bg-header, #252526);
    border-color: var(--c-border-subtle, #2d2d2d);
}

.dark .c-terminal-header__title {
    color: var(--c-text-primary, #cccccc);
}

.dark .c-terminal-header__action {
    color: var(--c-text-secondary, #808080);
}

.dark .c-terminal-header__action:hover {
    background-color: var(--c-bg-hover, #2a2d2e);
    color: var(--c-text-primary, #cccccc);
}
</style>
