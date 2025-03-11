<template>
    <BaseLayout>
        <h1>Menu</h1>

        <p>
            The <code>CMenu (alias: c-menu)</code> component provides a flexible and powerful menu system for creating
            dropdown menus, context menus, and menu bars. It supports keyboard navigation, nested submenus, icons,
            keyboard shortcuts, and various customization options.
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
                    <td>required</td>
                    <td>Array of menu items to display (<code>{ id, label, shortcut, icon, disabled, divider, items, action }</code>).</td>
                </tr>
                <tr>
                    <td>menuType</td>
                    <td>String</td>
                    <td>'dropdown'</td>
                    <td>Type of menu: <code>dropdown</code>, <code>context</code>, or <code>menubar</code>.</td>
                </tr>
                <tr>
                    <td>position</td>
                    <td>String</td>
                    <td>'bottom-left'</td>
                    <td>Positioning for dropdown menus: <code>bottom-left</code>, <code>bottom-right</code>, <code>top-left</code>, <code>top-right</code>.</td>
                </tr>
                <tr>
                    <td>closeOnSelect</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>Whether the menu should close when an item is selected.</td>
                </tr>
                <tr>
                    <td>closeOnOutsideClick</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>Whether to close the menu when clicking outside of it.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Dropdown Menu</h3>

        <p>
            A simple dropdown menu that appears when the trigger element is clicked. It displays a list of menu items
            that can contain keyboard shortcuts and execute actions when selected.
        </p>

        <card-docs>
            <div class="flex justify-center items-center h-[300px] m-auto">
                <div class="flex justify-center items-center">
                    <CMenu :items="dropdownMenuItems" @select="handleActionLog" ref="exampleMenu">
                        <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Open Menu
                        </button>
                    </CMenu>
                </div>
            </div>

            <div v-if="actionLog.length > 0" class="mt-4 w-full max-w-md bg-gray-100 dark:bg-gray-800 p-3 rounded-md mx-auto">
                <p class="font-medium mb-2">Action Log:</p>
                <ul class="text-sm">
                    <li v-for="(log, index) in actionLog" :key="index">
                        <span class="text-gray-500">{{ log.timestamp }}</span>: {{ log.message }}
                    </li>
                </ul>
                <button @click="clearLog" class="mt-2 text-xs text-blue-600 hover:underline">Clear log</button>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;CMenu :items="menuItems" @select="handleSelect"&gt;
        &lt;button class="px-4 py-2 bg-blue-600 text-white rounded"&gt;
            Open Menu
        &lt;/button&gt;
    &lt;/CMenu&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const menuItems = [
    { id: 'new', label: 'New File', iconComponent: 'icon-file-plus', shortcut: 'Ctrl+N', action: () => console.log('New file') },
    { id: 'open', label: 'Open...', iconComponent: 'icon-folder-open', shortcut: 'Ctrl+O', action: () => console.log('Open file') },
    { id: 'divider1', divider: true },
    { id: 'save', label: 'Save', iconComponent: 'icon-save', shortcut: 'Ctrl+S', action: () => console.log('Save file') },
    { id: 'saveAs', label: 'Save As...', shortcut: 'Ctrl+Shift+S', action: () => console.log('Save As') },
    { id: 'divider2', divider: true },
    { id: 'recentFiles', label: 'Recent Files', items: [
        { id: 'recent1', label: 'document1.txt', action: () => console.log('Open recent file') },
        { id: 'recent2', label: 'image.png', action: () => console.log('Open image') }
    ]},
    { id: 'divider3', divider: true },
    { id: 'exit', label: 'Exit', shortcut: 'Alt+F4', action: () => console.log('Exit') }
];

const handleSelect = (item) => {
    console.log(`Selected: ${item.label}`);
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Context Menu</h3>

        <p>
            Context menus appear when right-clicking on an element. They provide contextual actions
            relevant to the element being clicked. This example demonstrates a simple right-click context menu
            with nested submenus.
        </p>

        <card-docs>
            <div class="flex justify-center items-center h-[300px] m-auto text-center">
                <CMenu :items="contextMenuItems" menuType="context" @select="handleActionLog">
                    <div class="p-8 bg-gray-100 dark:bg-gray-800 rounded border border-dashed border-gray-300 dark:border-gray-600 text-center">
                        Right-click in this area to open the context menu
                    </div>
                </CMenu>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;CMenu :items="contextMenuItems" menuType="context" @select="handleSelect"&gt;
        &lt;div class="p-8 bg-gray-100 border border-dashed border-gray-300 text-center"&gt;
            Right-click in this area to open the context menu
        &lt;/div&gt;
    &lt;/CMenu&gt;
&lt;/template&gt;

&lt;script setup&gt;
const contextMenuItems = [
    { id: 'cut', label: 'Cut', shortcut: 'Ctrl+X', action: () => console.log('Cut') },
    { id: 'copy', label: 'Copy', shortcut: 'Ctrl+C', action: () => console.log('Copy') },
    { id: 'paste', label: 'Paste', shortcut: 'Ctrl+V', action: () => console.log('Paste') },
    { id: 'divider1', divider: true },
    { id: 'select-all', label: 'Select All', shortcut: 'Ctrl+A', action: () => console.log('Select all') },
    { id: 'divider2', divider: true },
    { id: 'advanced', label: 'Advanced', items: [
        { id: 'format', label: 'Format Document', shortcut: 'Shift+Alt+F', action: () => console.log('Format') },
        { id: 'inspect', label: 'Inspect Element', action: () => console.log('Inspect') }
    ]}
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Menu Bar</h3>

        <p>
            Menu bars provide a horizontal navigation system typically found at the top of applications.
            They contain dropdown menus that can be accessed by clicking on menu items. This example demonstrates
            a complete application menu bar with multiple nested menus, just like VS Code.
        </p>

        <card-docs>
            <div class="flex justify-center items-center w-full">
                <div class="w-full border border-neutral-300 dark:border-neutral-600 rounded-md overflow-hidden mb-4" style="height: 300px;">
                    <div class="bg-gray-100 dark:bg-gray-800">
                        <CMenu :items="menuBarItems" menuType="menubar" @select="handleActionLog" class="w-full" />
                    </div>

                    <div class="p-8 bg-white dark:bg-neutral-800 text-center border-t border-neutral-300 dark:border-neutral-700 h-full flex flex-col items-center justify-center">
                        <p class="mb-4">Application content area</p>
                        <p class="text-sm">
                            <span class="font-medium">Theme:</span> {{ themeValue }}<br>
                            <span class="font-medium">Sidebar:</span> {{ viewSettings.sidebar ? 'Visible' : 'Hidden' }}<br>
                            <span class="font-medium">Status Bar:</span> {{ viewSettings.statusBar ? 'Visible' : 'Hidden' }}
                        </p>
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;div class="bg-gray-100 dark:bg-gray-800"&gt;
        &lt;CMenu :items="menuBarItems" menuType="menubar" @select="handleSelect" /&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const menuBarItems = [
    { id: 'file', label: 'File', items: [
        { id: 'new', label: 'New File', iconComponent: 'icon-file-plus', shortcut: 'Ctrl+N', action: () => console.log('New file') },
        { id: 'open', label: 'Open...', iconComponent: 'icon-folder-open', shortcut: 'Ctrl+O', action: () => console.log('Open file') },
        { id: 'divider1', divider: true },
        { id: 'save', label: 'Save', iconComponent: 'icon-save', shortcut: 'Ctrl+S', action: () => console.log('Save file') },
        { id: 'saveAs', label: 'Save As...', shortcut: 'Ctrl+Shift+S', action: () => console.log('Save As') },
        { id: 'divider2', divider: true },
        { id: 'exit', label: 'Exit', shortcut: 'Alt+F4', action: () => console.log('Exit') }
    ]},
    { id: 'edit', label: 'Edit', items: [
        { id: 'undo', label: 'Undo', iconComponent: 'icon-undo', shortcut: 'Ctrl+Z', action: () => console.log('Undo') },
        { id: 'redo', label: 'Redo', iconComponent: 'icon-redo', shortcut: 'Ctrl+Y', action: () => console.log('Redo') },
        { id: 'divider3', divider: true },
        { id: 'cut', label: 'Cut', iconComponent: 'icon-scissors', shortcut: 'Ctrl+X', action: () => console.log('Cut') },
        { id: 'copy', label: 'Copy', iconComponent: 'icon-copy', shortcut: 'Ctrl+C', action: () => console.log('Copy') },
        { id: 'paste', label: 'Paste', iconComponent: 'icon-clipboard', shortcut: 'Ctrl+V', action: () => console.log('Paste') }
    ]},
    { id: 'view', label: 'View', items: [
        { id: 'theme', label: 'Theme', iconComponent: 'icon-palette', items: [
            { id: 'theme-light', label: 'Light', iconComponent: 'icon-sun', action: () => console.log('Theme: Light') },
            { id: 'theme-dark', label: 'Dark', iconComponent: 'icon-moon', action: () => console.log('Theme: Dark') },
            { id: 'theme-system', label: 'System', iconComponent: 'icon-desktop', action: () => console.log('Theme: System') }
        ]},
        { id: 'divider4', divider: true },
        { id: 'sidebar', label: 'Show Sidebar', iconComponent: 'icon-sidebar', shortcut: 'Ctrl+B',
            action: () => { viewSettings.value.sidebar = !viewSettings.value.sidebar; console.log(`Sidebar ${viewSettings.value.sidebar ? 'shown' : 'hidden'}`) }
        },
        { id: 'statusBar', label: 'Show Status Bar', iconComponent: 'icon-status-bar',
            action: () => { viewSettings.value.statusBar = !viewSettings.value.statusBar; console.log(`Status bar ${viewSettings.value.statusBar ? 'shown' : 'hidden'}`) }
        }
    ]},
    { id: 'help', label: 'Help', items: [
        { id: 'documentation', label: 'Documentation', iconComponent: 'icon-document', action: () => console.log('Opened documentation') },
        { id: 'about', label: 'About', iconComponent: 'icon-info', action: () => console.log('Opened about dialog') }
    ]}
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Disabled Items</h3>

        <p>
            Menu items can be disabled to indicate that they are not currently available. Disabled items are
            visually distinct and cannot be selected. This example shows how to create disabled menu items.
        </p>

        <card-docs>
            <div class="flex justify-center items-center h-[300px] w-full">
                <div class="flex justify-center items-center">
                    <CMenu :items="disabledMenuItems" @select="handleActionLog">
                        <button class="px-4 py-2 bg-neutral-600 text-white rounded hover:bg-neutral-700">
                            Menu with Disabled Items
                        </button>
                    </CMenu>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;CMenu :items="disabledMenuItems" @select="handleSelect"&gt;
        &lt;button class="px-4 py-2 bg-neutral-600 text-white rounded"&gt;
            Menu with Disabled Items
        &lt;/button&gt;
    &lt;/CMenu&gt;
&lt;/template&gt;

&lt;script setup&gt;
const disabledMenuItems = [
    { id: 'undo', label: 'Undo', shortcut: 'Ctrl+Z', disabled: true },
    { id: 'redo', label: 'Redo', shortcut: 'Ctrl+Y', disabled: true },
    { id: 'divider1', divider: true },
    { id: 'cut', label: 'Cut', shortcut: 'Ctrl+X' },
    { id: 'copy', label: 'Copy', shortcut: 'Ctrl+C' },
    { id: 'paste', label: 'Paste', shortcut: 'Ctrl+V', disabled: true },
    { id: 'divider2', divider: true },
    { id: 'submenu', label: 'Submenu', items: [
        { id: 'item1', label: 'Available Item', action: () => console.log('Submenu item selected') },
        { id: 'item2', label: 'Disabled Item', disabled: true }
    ]}
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Menu with Icons</h3>

        <p>
            Icons can be added to menu items to provide visual cues and enhance the user interface.
            This example demonstrates how to add icons to menu items for better visual recognition.
        </p>

        <card-docs>
            <div class="flex justify-center items-center h-[300px] w-full">
                <div class="flex justify-center items-center">
                    <CMenu :items="iconMenuItems" @select="handleActionLog">
                        <button class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                            Menu with Icons
                        </button>
                    </CMenu>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;CMenu :items="iconMenuItems" @select="handleSelect"&gt;
        &lt;button class="px-4 py-2 bg-purple-600 text-white rounded"&gt;
            Menu with Icons
        &lt;/button&gt;
    &lt;/CMenu&gt;
&lt;/template&gt;

&lt;script setup&gt;
const iconMenuItems = [
    { id: 'new', label: 'New', iconComponent: 'icon-file-plus', action: () => console.log('New document created') },
    { id: 'open', label: 'Open', iconComponent: 'icon-folder-open', action: () => console.log('Open dialog shown') },
    { id: 'save', label: 'Save', iconComponent: 'icon-save', action: () => console.log('Document saved') },
    { id: 'divider1', divider: true },
    { id: 'cut', label: 'Cut', iconComponent: 'icon-scissors', action: () => console.log('Selection cut') },
    { id: 'copy', label: 'Copy', iconComponent: 'icon-copy', action: () => console.log('Selection copied') },
    { id: 'paste', label: 'Paste', iconComponent: 'icon-clipboard', action: () => console.log('Clipboard pasted') },
    { id: 'divider2', divider: true },
    { id: 'settings', label: 'Settings', iconComponent: 'icon-settings', action: () => console.log('Settings opened') }
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Code Editor" previousLink="/code-editor" next="Tree View" nextLink="/tree-view" />
    </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const exampleMenu = ref(null);
const programmaticMenuRef = ref(null);
const actionLog = ref([]);
const themeValue = ref('system');
const viewSettings = ref({
    sidebar: true,
    statusBar: true
});

const dropdownMenuItems = [
    { id: 'new', label: 'New File', iconComponent: 'icon-file-plus', shortcut: 'Ctrl+N', action: () => logAction('Created new file') },
    { id: 'open', label: 'Open...', iconComponent: 'icon-folder-open', shortcut: 'Ctrl+O', action: () => logAction('Opened file dialog') },
    { id: 'divider1', divider: true },
    { id: 'save', label: 'Save', iconComponent: 'icon-save', shortcut: 'Ctrl+S', action: () => logAction('Saved file') },
    { id: 'saveAs', label: 'Save As...', shortcut: 'Ctrl+Shift+S', action: () => logAction('Saved file as...') },
    { id: 'divider2', divider: true },
    { id: 'recentFiles', label: 'Recent Files', items: [
        { id: 'recent1', label: 'document1.txt', action: () => logAction('Opened document1.txt') },
        { id: 'recent2', label: 'image.png', action: () => logAction('Opened image.png') },
        { id: 'recent3', label: 'project.json', action: () => logAction('Opened project.json') }
    ]},
    { id: 'divider3', divider: true },
    { id: 'exit', label: 'Exit', shortcut: 'Alt+F4', action: () => logAction('Exit application') }
];

const contextMenuItems = [
    { id: 'cut', label: 'Cut', shortcut: 'Ctrl+X', action: () => logAction('Cut') },
    { id: 'copy', label: 'Copy', shortcut: 'Ctrl+C', action: () => logAction('Copy') },
    { id: 'paste', label: 'Paste', shortcut: 'Ctrl+V', action: () => logAction('Paste') },
    { id: 'divider1', divider: true },
    { id: 'select-all', label: 'Select All', shortcut: 'Ctrl+A', action: () => logAction('Select all') },
    { id: 'divider2', divider: true },
    { id: 'advanced', label: 'Advanced', items: [
        { id: 'format', label: 'Format Document', shortcut: 'Shift+Alt+F', action: () => logAction('Format document') },
        { id: 'inspect', label: 'Inspect Element', action: () => logAction('Inspect element') }
    ]}
];

const menuBarItems = [
    { id: 'file', label: 'File', items: [
        { id: 'new', label: 'New File', iconComponent: 'icon-file-plus', shortcut: 'Ctrl+N', action: () => logAction('Created new file') },
        { id: 'open', label: 'Open...', iconComponent: 'icon-folder-open', shortcut: 'Ctrl+O', action: () => logAction('Opened file dialog') },
        { id: 'divider1', divider: true },
        { id: 'save', label: 'Save', iconComponent: 'icon-save', shortcut: 'Ctrl+S', action: () => logAction('Saved file') },
        { id: 'saveAs', label: 'Save As...', shortcut: 'Ctrl+Shift+S', action: () => logAction('Saved file as...') },
        { id: 'divider2', divider: true },
        { id: 'exit', label: 'Exit', shortcut: 'Alt+F4', action: () => logAction('Exit application') }
    ]},
    { id: 'edit', label: 'Edit', items: [
        { id: 'undo', label: 'Undo', iconComponent: 'icon-undo', shortcut: 'Ctrl+Z', action: () => logAction('Undo') },
        { id: 'redo', label: 'Redo', iconComponent: 'icon-redo', shortcut: 'Ctrl+Y', action: () => logAction('Redo') },
        { id: 'divider3', divider: true },
        { id: 'cut', label: 'Cut', iconComponent: 'icon-scissors', shortcut: 'Ctrl+X', action: () => logAction('Cut') },
        { id: 'copy', label: 'Copy', iconComponent: 'icon-copy', shortcut: 'Ctrl+C', action: () => logAction('Copy') },
        { id: 'paste', label: 'Paste', iconComponent: 'icon-clipboard', shortcut: 'Ctrl+V', action: () => logAction('Paste') }
    ]},
    { id: 'view', label: 'View', items: [
        { id: 'theme', label: 'Theme', iconComponent: 'icon-palette', items: [
            { id: 'theme-light', label: 'Light', iconComponent: 'icon-sun', action: () => updateTheme('light') },
            { id: 'theme-dark', label: 'Dark', iconComponent: 'icon-moon', action: () => updateTheme('dark') },
            { id: 'theme-system', label: 'System', iconComponent: 'icon-desktop', action: () => updateTheme('system') }
        ]},
        { id: 'divider4', divider: true },
        { id: 'sidebar', label: 'Show Sidebar', iconComponent: 'icon-sidebar', shortcut: 'Ctrl+B',
            action: () => { viewSettings.value.sidebar = !viewSettings.value.sidebar; logAction(`Sidebar ${viewSettings.value.sidebar ? 'shown' : 'hidden'}`) }
        },
        { id: 'statusBar', label: 'Show Status Bar', iconComponent: 'icon-status-bar',
            action: () => { viewSettings.value.statusBar = !viewSettings.value.statusBar; logAction(`Status bar ${viewSettings.value.statusBar ? 'shown' : 'hidden'}`) }
        }
    ]},
    { id: 'help', label: 'Help', items: [
        { id: 'documentation', label: 'Documentation', iconComponent: 'icon-document', action: () => logAction('Opened documentation') },
        { id: 'about', label: 'About', iconComponent: 'icon-info', action: () => logAction('Opened about dialog') }
    ]}
];

const disabledMenuItems = [
    { id: 'undo', label: 'Undo', shortcut: 'Ctrl+Z', disabled: true },
    { id: 'redo', label: 'Redo', shortcut: 'Ctrl+Y', disabled: true },
    { id: 'divider1', divider: true },
    { id: 'cut', label: 'Cut', shortcut: 'Ctrl+X', action: () => logAction('Cut selected') },
    { id: 'copy', label: 'Copy', shortcut: 'Ctrl+C', action: () => logAction('Copied selected') },
    { id: 'paste', label: 'Paste', shortcut: 'Ctrl+V', disabled: true },
    { id: 'divider2', divider: true },
    { id: 'submenu', label: 'Submenu', items: [
        { id: 'item1', label: 'Available Item', action: () => logAction('Submenu item selected') },
        { id: 'item2', label: 'Disabled Item', disabled: true }
    ]}
];

const iconMenuItems = [
    { id: 'new', label: 'New', iconComponent: 'icon-file-plus', action: () => logAction('New document created') },
    { id: 'open', label: 'Open', iconComponent: 'icon-folder-open', action: () => logAction('Open dialog shown') },
    { id: 'save', label: 'Save', iconComponent: 'icon-save', action: () => logAction('Document saved') },
    { id: 'divider1', divider: true },
    { id: 'cut', label: 'Cut', iconComponent: 'icon-scissors', action: () => logAction('Selection cut') },
    { id: 'copy', label: 'Copy', iconComponent: 'icon-copy', action: () => logAction('Selection copied') },
    { id: 'paste', label: 'Paste', iconComponent: 'icon-clipboard', action: () => logAction('Clipboard pasted') },
    { id: 'divider2', divider: true },
    { id: 'settings', label: 'Settings', iconComponent: 'icon-settings', action: () => logAction('Settings opened') }
];

const programmaticMenuItems = [
    { id: 'item1', label: 'Item 1', action: () => logAction('Item 1 selected') },
    { id: 'item2', label: 'Item 2', action: () => logAction('Item 2 selected') },
    { id: 'item3', label: 'Item 3', action: () => logAction('Item 3 selected') }
];

const logAction = (message) => {
    actionLog.value.unshift({ message, timestamp: new Date().toLocaleTimeString() });
    if (actionLog.value.length > 5) actionLog.value.pop();
};

const handleActionLog = (item) => {
    if (item.action)
        item.action();
    else
        logAction(`Selected: ${item.label}`);
};

const updateTheme = (theme) => {
    themeValue.value = theme;
    logAction(`Changed theme to ${theme}`);
};

const clearLog = () => {
    actionLog.value = [];
};

const openProgrammaticMenu = () => {
    programmaticMenuRef.value?.open();
    logAction('Menu opened programmatically');
};

const closeProgrammaticMenu = () => {
    programmaticMenuRef.value?.close();
    logAction('Menu closed programmatically');
};
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
