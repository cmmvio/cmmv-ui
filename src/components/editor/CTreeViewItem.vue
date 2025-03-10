<template>
    <li class="tree-node" :data-path="item.path" :data-type="item.type" :draggable="draggable"
        @dragstart="handleDragStart" @dragover="handleDragOver" @dragleave="handleDragLeave" @drop="handleDrop"
        @dragend="handleDragEnd">

        <div class="node-content pl-1 pr-2 py-1 flex items-center transition-colors duration-200" :class="{
            'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300': item.selected,
            'bg-neutral-100/50 dark:bg-neutral-700/30': isHovered && !item.selected
        }" :style="{ paddingLeft: `${indentLevel * 16 + 4}px` }" @click="handleSelect" @dblclick="handleDoubleClick"
            @contextmenu.prevent="handleContextMenu" @mouseenter="isHovered = true" @mouseleave="isHovered = false">

            <!-- Ícone de expansão para pastas -->
            <div v-if="item.type === 'folder' || (item.children && item.children.length > 0)"
                class="node-toggle w-4 h-4 flex-shrink-0 cursor-pointer" :class="{ 'expanded': isExpanded }"
                @click.stop="toggle">
                <icon-chevron-right class="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
            </div>

            <!-- Espaçador para arquivos (alinhamento com pastas) -->
            <div v-else class="w-4 h-4 flex-shrink-0"></div>

            <!-- Ícone do arquivo/pasta -->
            <div v-if="showIcons" class="node-icon w-5 h-5 flex-shrink-0 mx-1">
                <component :is="getIcon" class="w-full h-full text-neutral-500 dark:text-neutral-400" />
            </div>

            <!-- Nome do nó (arquivo/pasta) -->
            <span v-if="!isRenaming" class="node-name text-sm">{{ item.name }}</span>

            <!-- Campo de renomeação -->
            <input v-else ref="renameInput" type="text" class="rename-input text-sm bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600"
                :value="item.name" @blur="finishRename" @keydown.enter="finishRename" @keydown.esc="cancelRename" />

            <!-- Ações do item (visíveis no hover) -->
            <div v-if="isHovered && !isRenaming" class="ml-auto flex items-center space-x-1">
                <button v-if="item.type === 'folder'"
                    class="p-1 rounded-sm hover:bg-neutral-200 dark:hover:bg-neutral-600"
                    @click.stop="$emit('new-file', item)" title="New File">
                    <icon-file-plus class="w-3 h-3 text-neutral-500 dark:text-neutral-400" />
                </button>
                <button class="p-1 rounded-sm hover:bg-neutral-200 dark:hover:bg-neutral-600" @click.stop="startRename"
                    title="Rename">
                    <icon-pencil class="w-3 h-3 text-neutral-500 dark:text-neutral-400" />
                </button>
            </div>
        </div>

        <!-- Renderizar filhos (recursivamente) -->
        <transition name="expand">
            <ul v-if="isExpanded && item.children && item.children.length > 0">
                <c-tree-view-item v-for="(child, index) in item.children" :key="child.id || child.path || index" :item="child"
                    :indent-level="indentLevel + 1" :draggable="draggable" :show-icons="showIcons" :icon-map="iconMap"
                    @toggle="$emit('toggle', $event)" @select="$emit('select', $event)"
                    @rename="$emit('rename', $event)" @context-menu="$emit('context-menu', $event)"
                    @lazy-load="$emit('lazy-load', $event)" @drop="$emit('drop', $event)"
                    @new-file="$emit('new-file', $event)" @new-folder="$emit('new-folder', $event)" />
            </ul>
        </transition>
    </li>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, inject, nextTick, onMounted, watch } from 'vue';
import IconChevronRight from '../icons/IconChevronRight.vue';
import IconFilePlus from '../icons/IconFilePlus.vue';
import IconPencil from '../icons/IconPencil.vue';

// Definir o tipo para o item
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
    item: {
        type: Object as () => TreeNode,
        required: true
    },
    indentLevel: {
        type: Number,
        default: 0
    },
    draggable: {
        type: Boolean,
        default: true
    },
    showIcons: {
        type: Boolean,
        default: true
    },
    iconMap: {
        type: Object as () => Record<string, any>,
        required: true
    },
    defaultExpandedPaths: {
        type: Array as () => string[],
        default: () => []
    }
});

const emit = defineEmits([
    'toggle',
    'select',
    'rename',
    'context-menu',
    'lazy-load',
    'drop',
    'new-file',
    'new-folder'
]);

// Obter contexto do componente pai
interface TreeViewContext {
    expandedNodes: { value: Set<string> };
    selectedNode: any;
    renamingNode: any;
    toggleNode: (node: any) => void;
    selectNode: (node: any) => void;
    renameNode: (node: any, newName: string) => void;
}

const treeView = inject('treeView', null) as TreeViewContext | null;
const expandedNodes = treeView?.expandedNodes;
const renamingNode = treeView?.renamingNode;

// Estado local
const isHovered = ref(false);
const isRenaming = ref(false);
const renameInput = ref<HTMLInputElement | null>(null);
const isDraggingOver = ref(false);
const dropPosition = ref<'before' | 'after' | 'inside' | null>(null);

// Computar se o nó está expandido
const isExpanded = computed(() => {
    const path = props.item.path || props.item.id?.toString() || props.item.name;
    console.log(`Checking if ${path} is expanded:`, expandedNodes?.value?.has(path), "expandedNodes:", expandedNodes?.value);
    return props.item.expanded || (expandedNodes?.value && expandedNodes.value.has(path));
});

// Verificar se o nó atual deve ser renomeado
watch(() => renamingNode?.value, (newVal) => {
    if (newVal === props.item) {
        startRename();
    }
});

// Determinar o ícone apropriado para o tipo de arquivo/pasta
const getIcon = computed(() => {
    const { item, iconMap } = props;

    if (item.icon) {
        return item.icon;
    }

    if (item.type === 'folder') {
        return isExpanded.value ? iconMap.folderOpen : iconMap.folder;
    }

    // Determinar pelo tipo de extensão
    if (item.type === 'file' && item.extension) {
        return iconMap[item.extension.toLowerCase()] || iconMap.file;
    }

    // Extrair extensão do nome se não for fornecida
    if (item.type === 'file') {
        const parts = item.name.split('.');
        if (parts.length > 1) {
            const ext = parts.pop()?.toLowerCase();
            if (ext && iconMap[ext]) {
                return iconMap[ext];
            }
        }
    }

    return iconMap.file;
});

// Métodos
function toggle() {
    console.log("Toggle clicked for item:", props.item.name);
    if (props.item.type === 'folder' || (props.item.children && props.item.children.length > 0)) {
        if (treeView?.toggleNode) {
            treeView.toggleNode(props.item);
        } else {
            emit('toggle', props.item);
        }
    }
}

function handleSelect() {
    if (treeView?.selectNode) {
        treeView.selectNode(props.item);
    } else {
        emit('select', props.item);
    }
}

function handleDoubleClick() {
    if (props.item.type === 'folder') {
        toggle();
    } else {
        // Para arquivos, emitir um evento de seleção que pode ser usado para abrir o arquivo
        emit('select', { ...props.item, action: 'open' });
    }
}

function handleContextMenu(event: MouseEvent) {
    console.log("Context menu triggered for:", props.item.name);
    emit('context-menu', event, props.item);
}

function startRename() {
    isRenaming.value = true;

    // Focar no input após renderização
    nextTick(() => {
        if (renameInput.value) {
            renameInput.value.focus();
            renameInput.value.select();
        }
    });
}

function finishRename(event: Event) {
    const target = event.target as HTMLInputElement;
    const newName = target.value.trim();

    if (newName && newName !== props.item.name) {
        if (treeView?.renameNode) {
            treeView.renameNode(props.item, newName);
        } else {
            emit('rename', props.item, newName);
        }
    }

    isRenaming.value = false;
}

function cancelRename() {
    isRenaming.value = false;
}

// Funções de arrastar e soltar
function handleDragStart(event: DragEvent) {
    if (!props.draggable || !event.dataTransfer) return;

    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', JSON.stringify({
        id: props.item.id,
        path: props.item.path,
        type: props.item.type
    }));

    // Adicionar classe visual para o elemento que está sendo arrastado
    const target = event.target as HTMLElement;
    if (target) {
        setTimeout(() => {
            target.classList.add('dragging');
        }, 0);
    }
}

function handleDragOver(event: DragEvent) {
    event.preventDefault();
    if (!props.draggable || !event.dataTransfer) return;

    event.dataTransfer.dropEffect = 'move';
    isDraggingOver.value = true;

    // Determinar a posição do drop (antes, depois ou dentro)
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const offsetY = event.clientY - rect.top;

    if (props.item.type === 'folder') {
        if (offsetY < rect.height * 0.25) {
            dropPosition.value = 'before';
        } else if (offsetY > rect.height * 0.75) {
            dropPosition.value = 'after';
        } else {
            dropPosition.value = 'inside';
        }
    } else {
        dropPosition.value = offsetY < rect.height / 2 ? 'before' : 'after';
    }
}

function handleDragLeave() {
    isDraggingOver.value = false;
    dropPosition.value = null;
}

function handleDrop(event: DragEvent) {
    event.preventDefault();
    if (!props.draggable || !event.dataTransfer) return;

    isDraggingOver.value = false;

    try {
        const data = JSON.parse(event.dataTransfer.getData('text/plain'));

        // Não permitir soltar um item em si mesmo
        if (data.path === props.item.path || data.id === props.item.id) {
            return;
        }

        // Emitir evento com informações sobre a operação de drop
        emit('drop', {
            dragNode: data,
            dropNode: props.item,
            position: dropPosition.value
        });
    } catch (error) {
        console.error('Erro ao processar dados arrastados:', error);
    }

    dropPosition.value = null;
}

function handleDragEnd(event: DragEvent) {
    const target = event.target as HTMLElement;
    if (target) {
        target.classList.remove('dragging');
    }

    isDraggingOver.value = false;
    dropPosition.value = null;
}

// Verificar se deve expandir nós no carregamento
onMounted(() => {
    if (props.defaultExpandedPaths && props.defaultExpandedPaths.length > 0) {
        const path = props.item.path || '';

        if (props.defaultExpandedPaths.some(p => p === path || p.startsWith(`${path}/`))) {
            nextTick(() => {
                toggle();
            });
        }
    }
});
</script>

<style scoped>
.tree-node {
    position: relative;
}

.node-content {
    position: relative;
    transition: background-color 0.1s ease;
}

.node-toggle {
    transform: rotate(0deg);
    transition: transform 0.15s ease;
}

.node-toggle.expanded {
    transform: rotate(90deg);
}

.rename-input {
    border-radius: 2px;
    padding: 0 4px;
    height: 20px;
    font-size: 0.875rem;
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
    width: calc(100% - 40px);
}

.dragging {
    opacity: 0.5;
}

.expand-enter-active,
.expand-leave-active {
    transition: all 0.3s ease;
    max-height: 1000px;
    overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
    max-height: 0;
    opacity: 0;
}

/* Indicadores de posição para drag & drop */
.tree-node[data-drop-position="before"]::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 2px;
    background-color: #3b82f6;
    z-index: 1;
}

.tree-node[data-drop-position="after"]::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: #3b82f6;
    z-index: 1;
}

.tree-node[data-drop-position="inside"]>.node-content {
    background-color: rgba(59, 130, 246, 0.1);
    border: 1px dashed #3b82f6;
}

.dark .tree-node[data-drop-position="before"]::before,
.dark .tree-node[data-drop-position="after"]::after {
    background-color: #60a5fa;
}

.dark .tree-node[data-drop-position="inside"]>.node-content {
    background-color: rgba(96, 165, 250, 0.1);
    border: 1px dashed #60a5fa;
}
</style>
