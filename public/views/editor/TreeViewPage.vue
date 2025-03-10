<template>
    <BaseLayout>
        <h1>TreeView</h1>

        <p>
            The <code>c-tree-view</code> component provides a VSCode-like file explorer interface with tree navigation,
            customizable icons, context menu, and file operations support.
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
                    <td>items</td>
                    <td>Array</td>
                    <td>[]</td>
                    <td>Array of nodes (files and folders) to be displayed.</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>String</td>
                    <td>'Explorer'</td>
                    <td>Title of the file explorer.</td>
                </tr>
                <tr>
                    <td>showIcons</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>Whether to display file and folder icons.</td>
                </tr>
                <tr>
                    <td>iconMap</td>
                    <td>Object</td>
                    <td>{}</td>
                    <td>Map of custom icons by file extension.</td>
                </tr>
                <tr>
                    <td>elevated</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>Adds shadow to the component.</td>
                </tr>
                <tr>
                    <td>borderColor</td>
                    <td>String</td>
                    <td>'border border-neutral-200 dark:border-neutral-700'</td>
                    <td>Tailwind classes for border color.</td>
                </tr>
                <tr>
                    <td>contentHeight</td>
                    <td>String</td>
                    <td>'auto'</td>
                    <td>Height of the content (e.g., '300px', '100%').</td>
                </tr>
                <tr>
                    <td>maxHeight</td>
                    <td>String</td>
                    <td>'100vh'</td>
                    <td>Maximum height of the component.</td>
                </tr>
                <tr>
                    <td>draggable</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>Allows drag and drop of files/folders.</td>
                </tr>
                <tr>
                    <td>lazyLoad</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>Loads folder contents on demand.</td>
                </tr>
                <tr>
                    <td>apiEndpoint</td>
                    <td>String</td>
                    <td>''</td>
                    <td>API URL for lazy loading.</td>
                </tr>
                <tr>
                    <td>defaultExpandedPaths</td>
                    <td>Array</td>
                    <td>[]</td>
                    <td>List of paths that should be expanded by default.</td>
                </tr>
                <tr>
                    <td>showNewFileButton</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>Displays the button to create a new file.</td>
                </tr>
                <tr>
                    <td>showNewFolderButton</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>Displays the button to create a new folder.</td>
                </tr>
                <tr>
                    <td>showRefreshButton</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>Displays the button to refresh the tree.</td>
                </tr>
                <tr>
                    <td>showCollapseAllButton</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>Displays the button to collapse all folders.</td>
                </tr>
                <tr>
                    <td>emptyMessage</td>
                    <td>String</td>
                    <td>'No files found'</td>
                    <td>Message displayed when there are no files.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Events</h3>

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
                    <td>toggle</td>
                    <td>node</td>
                    <td>Triggered when a folder is expanded or collapsed.</td>
                </tr>
                <tr>
                    <td>select</td>
                    <td>node</td>
                    <td>Triggered when an item is selected.</td>
                </tr>
                <tr>
                    <td>rename</td>
                    <td>{ node, newName }</td>
                    <td>Triggered when an item is renamed.</td>
                </tr>
                <tr>
                    <td>delete</td>
                    <td>node</td>
                    <td>Triggered when an item is deleted.</td>
                </tr>
                <tr>
                    <td>new-file</td>
                    <td>parentNode</td>
                    <td>Triggered when creating a new file.</td>
                </tr>
                <tr>
                    <td>new-folder</td>
                    <td>parentNode</td>
                    <td>Triggered when creating a new folder.</td>
                </tr>
                <tr>
                    <td>lazy-load</td>
                    <td>{ node, children }</td>
                    <td>Triggered when folder content is loaded via API.</td>
                </tr>
                <tr>
                    <td>drop</td>
                    <td>{ dragNode, dropNode, position }</td>
                    <td>Triggered when an item is dragged and dropped.</td>
                </tr>
                <tr>
                    <td>refresh</td>
                    <td>data</td>
                    <td>Triggered when the tree is refreshed.</td>
                </tr>
                <tr>
                    <td>context-menu</td>
                    <td>{ event, node }</td>
                    <td>Triggered when displaying the context menu.</td>
                </tr>
                <tr>
                    <td>paste</td>
                    <td>{ sourceNode, targetNode, operation }</td>
                    <td>Triggered when pasting an item after copy/cut.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            A simple example of the TreeView showing a file structure.
        </p>

        <card-docs>
            <div class="h-64">
                <c-tree-view
                    :items="basicItems"
                    title="Project"
                    :show-icons="true"
                    @select="handleSelect"
                />
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-tree-view
        :items="items"
        title="Project"
        :show-icons="true"
        @select="handleSelect"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

// Define your file structure
const items = ref([
    {
        name: "src",
        type: "folder",
        path: "/src",
        expanded: true,
        children: [
            {
                name: "components",
                type: "folder",
                path: "/src/components",
                children: [
                    {
                        name: "App.vue",
                        type: "file",
                        path: "/src/components/App.vue",
                        extension: "vue"
                    }
                ]
            },
            {
                name: "main.js",
                type: "file",
                path: "/src/main.js",
                extension: "js"
            }
        ]
    },
    {
        name: "package.json",
        type: "file",
        path: "/package.json",
        extension: "json"
    }
]);

function handleSelect(node) {
    console.log(`Selected: ${node.name}`);
}
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Icons</h3>

        <p>
            The TreeView allows customizing icons based on file extension.
        </p>

        <card-docs>
            <div class="h-64">
                <c-tree-view
                    :items="iconExampleItems"
                    title="Project with Icons"
                    :show-icons="true"
                    :icon-map="customIconMap"
                    @select="handleSelect"
                />
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-tree-view
        :items="items"
        title="Project with Icons"
        :show-icons="true"
        :icon-map="customIconMap"
        @select="handleSelect"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import IconFolder from '@components/icons/IconFolder.vue';
import IconFolderOpen from '@components/icons/IconFolderOpen.vue';
import IconDocument from '@components/icons/IconDocument.vue';
import IconVue from '@components/icons/IconVue.vue';
import IconJs from '@components/icons/IconJs.vue';
import IconTs from '@components/icons/IconTs.vue';

// Define custom icon map
const customIconMap = {
    folder: IconFolder,
    folderOpen: IconFolderOpen,
    file: IconDocument,
    vue: IconVue,
    js: IconJs,
    ts: IconTs
};

// Define file structure with different extensions
const items = ref([
    {
        name: "src",
        type: "folder",
        path: "/src",
        expanded: true,
        children: [
            {
                name: "components",
                type: "folder",
                path: "/src/components",
                children: [
                    {
                        name: "App.vue",
                        type: "file",
                        path: "/src/components/App.vue",
                        extension: "vue"
                    }
                ]
            },
            {
                name: "types",
                type: "folder",
                path: "/src/types",
                children: [
                    {
                        name: "index.ts",
                        type: "file",
                        path: "/src/types/index.ts",
                        extension: "ts"
                    }
                ]
            }
        ]
    }
]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Lazy Loading</h3>

        <p>
            The TreeView supports lazy loading of folders through an API.
        </p>

        <card-docs>
            <div class="h-64">
                <c-tree-view
                    :items="lazyLoadItems"
                    title="Project with Lazy Loading"
                    :show-icons="true"
                    :lazy-load="true"
                    api-endpoint="/api/files"
                    @select="handleSelect"
                    @lazy-load="handleLazyLoad"
                />
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-tree-view
        :items="items"
        title="Project with Lazy Loading"
        :show-icons="true"
        :lazy-load="true"
        api-endpoint="/api/files"
        @select="handleSelect"
        @lazy-load="handleLazyLoad"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

// Items marked as lazy
const items = ref([
    {
        name: "src",
        type: "folder",
        path: "/src",
        lazy: true  // This node will load its children from API when expanded
    },
    {
        name: "public",
        type: "folder",
        path: "/public",
        lazy: true
    },
    {
        name: "package.json",
        type: "file",
        path: "/package.json",
        extension: "json"
    }
]);

function handleLazyLoad(data) {
    console.log(`Loading content for: ${data.node.name}`);
    // API would return children that you would assign to data.node.children
}
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Context Menu</h3>

        <p>
            The TreeView includes a context menu (right-click) for file and folder operations.
        </p>

        <card-docs>
            <div class="h-64 relative">
                <c-tree-view
                    :items="basicItems"
                    title="Context Menu (Right Click)"
                    :show-icons="true"
                    @context-menu="handleContextMenu"
                    @rename="handleRename"
                    @delete="handleDelete"
                />

                <div
                    class="absolute bottom-4 left-4 right-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs p-2 rounded">
                    Tip: Right-click on an item to open the context menu
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-tree-view
        :items="items"
        title="Context Menu"
        :show-icons="true"
        @context-menu="handleContextMenu"
        @rename="handleRename"
        @delete="handleDelete"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

function handleContextMenu(data) {
    console.log(`Context menu for: ${data.node.name}`);
}

function handleRename(data) {
    console.log(`Renaming ${data.node.name} to ${data.newName}`);
}

function handleDelete(node) {
    console.log(`Deleting: ${node.name}`);
}
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Data Structure</h3>

        <p>
            The TreeView component uses the following data structure to represent files and folders:
        </p>

        <card-docs>
            <div class="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md">
                <pre class="text-xs text-neutral-800 dark:text-neutral-300 overflow-auto">interface TreeNode {
    id?: string | number;       // Optional unique identifier
    name: string;               // File/folder name (required)
    path?: string;              // Full path (optional)
    type: 'file' | 'folder';    // Type: file or folder (required)
    children?: TreeNode[];      // Array of child nodes for folders
    extension?: string;         // File extension (optional)
    icon?: any;                 // Custom icon component (optional)
    lazy?: boolean;             // Indicates if children should be loaded on demand
    loaded?: boolean;           // Indicates if children have been loaded
    expanded?: boolean;         // Indicates if the folder is expanded
    selected?: boolean;         // Indicates if the item is selected
    meta?: Record&lt;string, any&gt;; // Additional metadata (optional)
}</pre>
            </div>

            <template #code>
                <pre><code class="code-highlight language-javascript">// Example data structure for TreeView
const items = [
    {
        name: "src",
        type: "folder",
        path: "/src",
        children: [
            {
                name: "components",
                type: "folder",
                path: "/src/components",
                children: [
                    {
                        name: "TreeView.vue",
                        type: "file",
                        path: "/src/components/TreeView.vue",
                        extension: "vue"
                    }
                ]
            },
            {
                name: "main.js",
                type: "file",
                path: "/src/main.js",
                extension: "js"
            }
        ]
    },
    {
        name: "package.json",
        type: "file",
        path: "/package.json",
        extension: "json"
    }
]</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Tabs" previousLink="/tabs" next="Editors" nextLink="/editors" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import IconFolder from '@components/icons/IconFolder.vue';
import IconFolderOpen from '@components/icons/IconFolderOpen.vue';
import IconDocument from '@components/icons/IconDocument.vue';
import IconTypescript from '@components/icons/IconTypescript.vue';

// Exemplo Básico
const basicItems = ref([
    {
        name: "src",
        type: "folder",
        path: "/src",
        expanded: true,
        children: [
            {
                name: "components",
                type: "folder",
                path: "/src/components",
                children: [
                    {
                        name: "App.vue",
                        type: "file",
                        path: "/src/components/App.vue",
                        extension: "vue"
                    }
                ]
            },
            {
                name: "main.js",
                type: "file",
                path: "/src/main.js",
                extension: "js"
            }
        ]
    },
    {
        name: "package.json",
        type: "file",
        path: "/package.json",
        extension: "json"
    },
    {
        name: "README.md",
        type: "file",
        path: "/README.md",
        extension: "md"
    }
]);

// Exemplo com Ícones Personalizados
const customIconMap = {
    folder: IconFolder,
    folderOpen: IconFolderOpen,
    file: IconDocument,
    ts: IconTypescript,
};

const iconExampleItems = ref([
    {
        name: "src",
        type: "folder",
        path: "/src",
        expanded: true,
        children: [
            {
                name: "components",
                type: "folder",
                path: "/src/components",
                children: [
                    {
                        name: "TreeView.vue",
                        type: "file",
                        path: "/src/components/TreeView.vue",
                        extension: "vue"
                    },
                    {
                        name: "TreeItem.vue",
                        type: "file",
                        path: "/src/components/TreeItem.vue",
                        extension: "vue"
                    }
                ]
            },
            {
                name: "types",
                type: "folder",
                path: "/src/types",
                children: [
                    {
                        name: "index.ts",
                        type: "file",
                        path: "/src/types/index.ts",
                        extension: "ts"
                    }
                ]
            },
            {
                name: "assets",
                type: "folder",
                path: "/src/assets",
                children: [
                    {
                        name: "style.css",
                        type: "file",
                        path: "/src/assets/style.css",
                        extension: "css"
                    }
                ]
            }
        ]
    },
    {
        name: "package.json",
        type: "file",
        path: "/package.json",
        extension: "json"
    }
]);

// Exemplo com Lazy Loading
const lazyLoadItems = ref([
    {
        name: "src",
        type: "folder",
        path: "/src",
        lazy: true
    },
    {
        name: "public",
        type: "folder",
        path: "/public",
        lazy: true
    },
    {
        name: "package.json",
        type: "file",
        path: "/package.json",
        extension: "json"
    }
]);

// Funções de exemplo para eventos
function handleSelect(node) {
    console.log(`Item selected: ${node.name}`);
}

function handleLazyLoad(data) {
    console.log(`Content loaded for: ${data.node.name}`);

    // Simulation of data loaded from an API for demonstration
    if (data.node.path === '/src' && (!data.node.children || data.node.children.length === 0)) {
        data.node.children = [
            {
                name: "components",
                type: "folder",
                path: "/src/components",
                lazy: true
            },
            {
                name: "main.js",
                type: "file",
                path: "/src/main.js",
                extension: "js"
            }
        ];
    }
}

function handleContextMenu(data) {
    console.log(`Context menu for: ${data.node.name}`);
}

function handleRename(data) {
    console.log(`Renaming ${data.node.name} to ${data.newName}`);
}

function handleDelete(node) {
    console.log(`Deleting: ${node.name}`);
}
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
