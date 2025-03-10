<template>
    <div class="context-menu bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md shadow-lg z-50 w-48"
        :style="{ left: `${x}px`, top: `${y}px` }" @click.stop>
        <div class="py-1">
            <!-- Ações para Arquivos e Pastas -->
            <button
                class="w-full text-left px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 flex items-center"
                @click="handleAction('open')" v-if="node && node.type === 'file'">
                <icon-file-open class="w-4 h-4 mr-2 text-neutral-500 dark:text-neutral-400" />
                Open
            </button>

            <!-- Ações comuns -->
            <button
                class="w-full text-left px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 flex items-center"
                @click="handleAction('rename')">
                <icon-pencil class="w-4 h-4 mr-2 text-neutral-500 dark:text-neutral-400" />
                Rename
            </button>

            <button
                class="w-full text-left px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 flex items-center"
                @click="handleAction('delete')">
                <icon-trash class="w-4 h-4 mr-2 text-neutral-500 dark:text-neutral-400" />
                Delete
            </button>

            <div class="border-t border-neutral-200 dark:border-neutral-700 my-1"></div>

            <button
                class="w-full text-left px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 flex items-center"
                @click="handleAction('cut')">
                <icon-scissors class="w-4 h-4 mr-2 text-neutral-500 dark:text-neutral-400" />
                Cut
            </button>

            <button
                class="w-full text-left px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 flex items-center"
                @click="handleAction('copy')">
                <icon-duplicate class="w-4 h-4 mr-2 text-neutral-500 dark:text-neutral-400" />
                Copy
            </button>

            <button
                class="w-full text-left px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 flex items-center"
                @click="handleAction('paste')" :disabled="!canPaste"
                :class="{ 'opacity-50 cursor-not-allowed': !canPaste }">
                <icon-clipboard class="w-4 h-4 mr-2 text-neutral-500 dark:text-neutral-400" />
                Paste
            </button>

            <!-- Ações para Pastas -->
            <template v-if="node && node.type === 'folder'">
                <div class="border-t border-neutral-200 dark:border-neutral-700 my-1"></div>

                <button
                    class="w-full text-left px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 flex items-center"
                    @click="handleAction('new-file')">
                    <icon-file-plus class="w-4 h-4 mr-2 text-neutral-500 dark:text-neutral-400" />
                    New File
                </button>

                <button
                    class="w-full text-left px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 flex items-center"
                    @click="handleAction('new-folder')">
                    <icon-folder-plus class="w-4 h-4 mr-2 text-neutral-500 dark:text-neutral-400" />
                    New Folder
                </button>
            </template>

            <!-- Exibir informações de arquivo (opcional) -->
            <template v-if="showInfo && node">
                <div class="border-t border-neutral-200 dark:border-neutral-700 my-1"></div>

                <div class="px-4 py-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <div>{{ node.name }}</div>
                    <div v-if="node.path">{{ node.path }}</div>
                    <div v-if="node.meta && node.meta.size">Size: {{ formatSize(node.meta.size) }}</div>
                    <div v-if="node.meta && node.meta.modified">Modified: {{ formatDate(node.meta.modified) }}</div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue';
import IconFileOpen from '../icons/IconFileOpen.vue';
import IconPencil from '../icons/IconPencil.vue';
import IconTrash from '../icons/IconTrash.vue';
import IconScissors from '../icons/IconScissors.vue';
import IconDuplicate from '../icons/IconDuplicate.vue';
import IconClipboard from '../icons/IconClipboard.vue';
import IconFilePlus from '../icons/IconFilePlus.vue';
import IconFolderPlus from '../icons/IconFolderPlus.vue';

interface TreeNode {
    id?: string | number;
    name: string;
    path?: string;
    type: 'file' | 'folder' | 'root';
    children?: TreeNode[];
    extension?: string;
    icon?: any;
    lazy?: boolean;
    loaded?: boolean;
    expanded?: boolean;
    selected?: boolean;
    meta?: Record<string, any>;
}

const props = defineProps({
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    node: {
        type: Object as () => TreeNode | null,
        default: null
    },
    clipboard: {
        type: Object as () => { node: TreeNode, operation: 'copy' | 'cut' } | null,
        default: null
    },
    showInfo: {
        type: Boolean,
        default: true
    },
    bgColor: {
        type: String,
        default: 'bg-white dark:bg-neutral-800'
    },
    textColor: {
        type: String,
        default: 'text-neutral-700 dark:text-neutral-200'
    },
    borderColor: {
        type: String,
        default: 'border-neutral-200 dark:border-neutral-700'
    },
    hoverBgColor: {
        type: String,
        default: 'hover:bg-neutral-100 dark:hover:bg-neutral-700/50'
    },
    iconColor: {
        type: String,
        default: 'text-neutral-500 dark:text-neutral-400'
    }
});

const emit = defineEmits([
    'close',
    'open',
    'rename',
    'delete',
    'cut',
    'copy',
    'paste',
    'new-file',
    'new-folder'
]);

// Verificar se é possível colar
const canPaste = computed(() => {
    return !!props.clipboard && props.node && props.node.type === 'folder';
});

// Métodos
function close() {
    emit('close');
}

function handleAction(action: string) {
    if (!props.node) return;

    // Convertendo action para o tipo correto com type assertion
    // Isso assume que action é uma string válida para o emit
    emit(action as any, props.node);
    close();
}

// Formatar tamanho de arquivo
function formatSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Formatar data
function formatDate(date: string | number | Date): string {
    return new Date(date).toLocaleString();
}

// Fechar o menu ao clicar Escape
function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
        close();
    }
}

// Fechar ao clicar fora
function handleClickOutside(event: MouseEvent) {
    const menu = document.querySelector('.context-menu');
    if (menu && !menu.contains(event.target as Node)) {
        close();
    }
}

// Ajustar posição para não sair da tela
onMounted(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('contextmenu', handleClickOutside);

    // Garantir que o menu fique dentro da viewport
    nextTick(() => {
        const menuElement = document.querySelector('.context-menu') as HTMLElement;
        if (!menuElement) return;

        const rect = menuElement.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Ajustar horizontalmente se necessário
        if (rect.right > viewportWidth) {
            const overflowX = rect.right - viewportWidth;
            menuElement.style.left = `${props.x - overflowX - 10}px`;
        }

        // Ajustar verticalmente se necessário
        if (rect.bottom > viewportHeight) {
            const overflowY = rect.bottom - viewportHeight;
            menuElement.style.top = `${props.y - overflowY - 10}px`;
        }
    });

    console.log("Context menu mounted at:", props.x, props.y, "for node:", props.node?.name);
});

onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('contextmenu', handleClickOutside);
});
</script>

<style scoped>
.context-menu {
    position: fixed;
    min-width: 160px;
    z-index: 1000;
    animation: fadeIn 0.15s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
