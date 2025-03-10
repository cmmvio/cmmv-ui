<template>
    <div class="c-tree-view" :class="[elevated ? 'shadow-md' : '', borderColor, 'border']">
        <div class="treeview-header flex items-center justify-between p-2 text-sm font-medium border-b"
            :class="borderColor">
            <div class="flex items-center gap-1">
                <slot name="header-title">
                    <span>{{ title }}</span>
                </slot>
            </div>
            <div class="flex items-center gap-1">
                <slot name="header-actions">
                    <button v-if="showNewFileButton"
                        class="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700/70"
                        @click="$emit('new-file')" title="New File">
                        <icon-file-plus class="w-4 h-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true" />
                    </button>
                    <button v-if="showNewFolderButton"
                        class="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700/70"
                        @click="$emit('new-folder')" title="New Folder">
                        <icon-folder-plus class="w-4 h-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true" />
                    </button>
                    <button v-if="showRefreshButton"
                        class="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700/70" @click="refreshTree"
                        title="Refresh">
                        <icon-refresh class="w-4 h-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true" />
                    </button>
                    <button v-if="showCollapseAllButton"
                        class="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700/70" @click="collapseAll"
                        title="Collapse All">
                        <icon-chevron-up-down class="w-4 h-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true" />
                    </button>
                </slot>
            </div>
        </div>

        <div class="treeview-content overflow-auto" :style="{ height: contentHeight, maxHeight: maxHeight }" :class="bgColor">
            <div v-if="loading" class="flex justify-center items-center p-4">
                <icon-loading class="w-5 h-5 animate-spin text-neutral-500 dark:text-neutral-400" />
            </div>

            <div v-else-if="items.length === 0"
                class="flex flex-col items-center justify-center p-4 text-neutral-500 dark:text-neutral-400">
                <icon-folder-open class="w-8 h-8 mb-2" aria-hidden="true" />
                <p class="text-sm">{{ emptyMessage }}</p>
            </div>

            <ul v-else class="select-none" :class="textColor">
                <c-tree-view-item v-for="(item, index) in items" :key="item.id || item.path || index" :item="item"
                    :indent-level="0" :draggable="draggable" :show-icons="showIcons" :icon-map="mergedIconMap"
                    :default-expanded-paths="defaultExpandedPaths" @toggle="toggleNode" @select="selectNode"
                    @rename="renameNode" @context-menu="handleContextMenu" @lazy-load="lazyLoadNode"
                    @drop="handleDrop" @new-file="createNewFile" @new-folder="createNewFolder" />
            </ul>
        </div>

        <c-context-menu v-if="showContextMenu" :x="contextMenuPosition.x" :y="contextMenuPosition.y" :node="selectedNode"
            :clipboard="clipboard" :show-info="true"
            @close="closeContextMenu" @open="openNode" @rename="startRename" @delete="deleteNode" @new-file="createNewFile"
            @new-folder="createNewFolder" @copy="copyNode" @cut="cutNode" @paste="pasteNode" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, onMounted, provide, watch } from 'vue';
import IconFilePlus from '../icons/IconFilePlus.vue';
import IconFolderPlus from '../icons/IconFolderPlus.vue';
import IconRefresh from '../icons/IconRefresh.vue';
import IconChevronUpDown from '../icons/IconChevronUpDown.vue';
import IconFolderOpen from '../icons/IconFolderOpen.vue';
import IconLoading from '../icons/IconLoading.vue';

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

interface IconMapType {
    [key: string]: any;
    folder: any;
    folderOpen: any;
    file: any;
}

interface ContextMenuPosition {
    x: number;
    y: number;
}

const props = defineProps({
    items: {
        type: Array as () => TreeNode[],
        default: () => []
    },
    title: {
        type: String,
        default: 'Explorer'
    },
    showIcons: {
        type: Boolean,
        default: true
    },
    iconMap: {
        type: Object as () => Partial<IconMapType>,
        default: () => ({})
    },
    defaultIconMap: {
        type: Object as () => IconMapType,
        default: () => ({
            folder: 'icon-folder',
            folderOpen: 'icon-folder-open',
            file: 'icon-document',
            // Extensões comuns
            js: 'icon-javascript',
            ts: 'icon-typescript',
            vue: 'icon-vue',
            json: 'icon-json',
            html: 'icon-html',
            css: 'icon-css',
            scss: 'icon-sass',
            md: 'icon-markdown',
            png: 'icon-image',
            jpg: 'icon-image',
            jpeg: 'icon-image',
            gif: 'icon-image',
            svg: 'icon-image',
            pdf: 'icon-pdf'
        })
    },
    elevated: {
        type: Boolean,
        default: false
    },
    borderColor: {
        type: String,
        default: 'border-neutral-200 dark:border-neutral-700'
    },
    bgColor: {
        type: String,
        default: 'bg-white dark:bg-neutral-900'
    },
    textColor: {
        type: String,
        default: 'text-neutral-700 dark:text-neutral-200'
    },
    selectedBgColor: {
        type: String,
        default: 'bg-blue-50 dark:bg-blue-900/20'
    },
    selectedTextColor: {
        type: String,
        default: 'text-blue-700 dark:text-blue-300'
    },
    hoverBgColor: {
        type: String,
        default: 'hover:bg-neutral-100 dark:hover:bg-neutral-800/50'
    },
    contentHeight: {
        type: String,
        default: 'auto'
    },
    maxHeight: {
        type: String,
        default: '100vh'
    },
    draggable: {
        type: Boolean,
        default: true
    },
    lazyLoad: {
        type: Boolean,
        default: false
    },
    apiEndpoint: {
        type: String,
        default: ''
    },
    defaultExpandedPaths: {
        type: Array as () => string[],
        default: () => []
    },
    showNewFileButton: {
        type: Boolean,
        default: true
    },
    showNewFolderButton: {
        type: Boolean,
        default: true
    },
    showRefreshButton: {
        type: Boolean,
        default: true
    },
    showCollapseAllButton: {
        type: Boolean,
        default: true
    },
    emptyMessage: {
        type: String,
        default: 'No files found'
    }
});

const emit = defineEmits([
    'toggle',
    'select',
    'rename',
    'delete',
    'new-file',
    'new-folder',
    'lazy-load',
    'drop',
    'refresh',
    'context-menu',
    'paste'
]);

const loading = ref(false);
const expandedNodes = ref(new Set<string>());
const selectedNode = ref<TreeNode | null>(null);
const showContextMenu = ref(false);
const contextMenuPosition = ref<ContextMenuPosition>({ x: 0, y: 0 });
const renamingNode = ref<TreeNode | null>(null);
const clipboard = ref<{ node: TreeNode, operation: 'copy' | 'cut' } | null>(null);

const mergedIconMap = computed(() => ({ ...props.defaultIconMap, ...props.iconMap }));

onMounted(() => {
    if (props.defaultExpandedPaths.length > 0) {
        props.defaultExpandedPaths.forEach(path => {
            expandedNodes.value.add(path);
        });
    }

    if (props.lazyLoad && props.apiEndpoint && props.items.length === 0)
        refreshTree();

    console.log("CTreeView montado, expandedNodes:", expandedNodes.value);
});

function toggleNode(node: TreeNode) {
    const path = node.path || node.id?.toString() || node.name;
    console.log("Toggle node:", path, "expanded before:", expandedNodes.value.has(path));

    if (expandedNodes.value.has(path)) {
        expandedNodes.value.delete(path);
        node.expanded = false;
    } else {
        expandedNodes.value.add(path);
        node.expanded = true;

        if (node.lazy && !node.loaded)
            lazyLoadNode(node);
    }

    console.log("Toggle node after:", path, "expanded after:", expandedNodes.value.has(path));
    emit('toggle', node);
}

function selectNode(node: TreeNode) {
    if (selectedNode.value)
        selectedNode.value.selected = false;

    node.selected = true;
    selectedNode.value = node;
    emit('select', node);
}

function openNode(node: TreeNode) {
    if (node.type === 'file') {
        emit('select', { ...node, action: 'open' });
    }
}

function lazyLoadNode(node: TreeNode) {
    if (!props.lazyLoad || !props.apiEndpoint) return;

    loading.value = true;

    const path = node.path || '';
    const url = `${props.apiEndpoint}?path=${encodeURIComponent(path)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                node.children = data;
                node.loaded = true;
                emit('lazy-load', { node, children: data });
            }
        })
        .catch(error => {
            console.error('Erro ao carregar dados:', error);
        })
        .finally(() => {
            loading.value = false;
        });
}

function refreshTree() {
    if (!props.apiEndpoint) return;

    loading.value = true;

    fetch(props.apiEndpoint)
        .then(response => response.json())
        .then(data => {
            emit('refresh', data);
        })
        .catch(error => {
            console.error('Erro ao atualizar árvore:', error);
        })
        .finally(() => {
            loading.value = false;
        });
}

function collapseAll() {
    expandedNodes.value.clear();

    const updateNodes = (nodes: TreeNode[]) => {
        nodes.forEach(node => {
            node.expanded = false;
            if (node.children && node.children.length > 0) {
                updateNodes(node.children);
            }
        });
    };

    updateNodes(props.items);
}

function handleContextMenu(event: MouseEvent, node: TreeNode) {
    event.preventDefault();
    console.log("Context menu triggered for node:", node.name);

    contextMenuPosition.value = {
        x: event.clientX,
        y: event.clientY
    };

    selectNode(node);
    showContextMenu.value = true;

    emit('context-menu', { event, node });
}

function closeContextMenu() {
    console.log("Closing context menu");
    showContextMenu.value = false;
}

function startRename(node: TreeNode) {
    renamingNode.value = node;
}

function renameNode(node: TreeNode, newName: string) {
    emit('rename', { node, newName });
    renamingNode.value = null;
}

function deleteNode(node: TreeNode) {
    emit('delete', node);
}

function createNewFile(parentNode: TreeNode) {
    emit('new-file', parentNode);
}

function createNewFolder(parentNode: TreeNode) {
    emit('new-folder', parentNode);
}

function copyNode(node: TreeNode) {
    clipboard.value = { node, operation: 'copy' };
}

function cutNode(node: TreeNode) {
    clipboard.value = { node, operation: 'cut' };
}

function pasteNode(targetNode: TreeNode) {
    if (!clipboard.value) return;

    emit('paste', {
        sourceNode: clipboard.value.node,
        targetNode,
        operation: clipboard.value.operation
    });

    if (clipboard.value.operation === 'cut') {
        clipboard.value = null;
    }
}

function handleDrop(event: { dragNode: TreeNode, dropNode: TreeNode, position: 'before' | 'after' | 'inside' }) {
    emit('drop', event);
}

provide('treeView', {
    expandedNodes,
    selectedNode,
    renamingNode,
    toggleNode,
    selectNode,
    renameNode
});
</script>

<style scoped>
.c-tree-view {
    border-radius: 0.25rem;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.treeview-content {
    flex: 1;
}

:deep(.tree-node) {
    cursor: pointer;
    user-select: none;
}

:deep(.node-content) {
    display: flex;
    align-items: center;
    padding: 0.25rem 0;
    border-radius: 0.25rem;
    transition: background-color 0.1s ease;
}

:deep(.node-indent) {
    width: 1.25rem;
    height: 1.25rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

:deep(.node-toggle) {
    transition: transform 0.15s ease;
}

:deep(.node-toggle.expanded) {
    transform: rotate(90deg);
}

:deep(.node-name) {
    margin-left: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

:deep(.rename-input) {
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0 4px;
    height: 20px;
    font-size: 0.875rem;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.3);
}

.dark :deep(.rename-input) {
    background: #1f2937;
    border-color: #374151;
    color: #e2e8f0;
}
</style>
