<template>
    <div class="p-4 select-none text-slate-700 dark:text-slate-200">
        <div class="mb-4 flex items-center justify-between lg:hidden">
            <h2 class="text-base font-bold">Menu</h2>
            <button @click="$emit('close')" class="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-zinc-700/70">
                <IconXMark class="h-5 w-5" />
            </button>
        </div>

        <div class="mb-6 px-3">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IconMagnifyingGlass class="h-5 w-5 " color="text-neutral-400 dark:text-neutral-100" />
                </div>

                <input type="search" placeholder="Search components..."
                    class="pl-10 pr-4 py-2 w-full bg-neutral-100 dark:bg-zinc-700/50 border-0 rounded-lg text-sm transition-all duration-200"
                    v-model="searchQuery" @keydown.esc="clearSearch">

                <div v-if="searchQuery && filteredResults.length > 0"
                    class="absolute z-50 mt-1 w-full bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-neutral-200 dark:border-zinc-700 overflow-hidden max-h-[300px] overflow-y-auto">
                    <div v-for="(result, index) in filteredResults" :key="index"
                        class="px-3 py-2 hover:bg-neutral-100 dark:hover:bg-zinc-700/70 cursor-pointer"
                        @click="navigateTo(result)">
                        <div class="flex items-center">
                            <div>
                                <span class="text-sm">{{ result.name }}</span>
                                <span v-if="result.parent"
                                    class="text-xs text-neutral-500 dark:text-neutral-400 ml-2">({{
                                        result.parent }})</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="searchQuery && filteredResults.length === 0"
                    class="absolute z-50 mt-1 w-full bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-neutral-200 dark:border-zinc-700 py-3 px-4 text-center">
                    <span class="text-neutral-500 dark:text-neutral-400 text-sm">Nenhum resultado encontrado</span>
                </div>
            </div>
        </div>
        <div v-if="!searchQuery" v-for="(item, key) in navbarItems" :key="key" class="mb-1">
            <div class="flex items-center px-3 py-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-zinc-700/70 transition-colors duration-200 cursor-pointer group"
                :id="item?.name.replace(/\s/g, '_')" @click.stop="toggle(item.name?.replace(/\s/g, '_'))">
                <div class="flex flex-1 items-center">
                    <div class="mr-4 text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 flex-shrink-0"
                        :class="{ 'text-blue-600 dark:text-blue-400': navbar[item?.name.replace(/\s/g, '_')] }">
                        <component :is="item.icon" class="h-5 w-5" color="text-neutral-500 dark:text-neutral-400" />
                    </div>

                    <div class="truncate" :class="item?.isDir ? 'navbar-text-dir' : 'navbar-text'">
                        {{ item.name }}
                    </div>
                </div>

                <div v-if="item?.isDir" class="transform transition-transform duration-200 flex-shrink-0"
                    :class="[navbar[item?.name.replace(/\s/g, '_')] ? 'rotate-180' : '']">
                    <IconChevronDown class="w-4 h-4" color="text-neutral-500 dark:text-neutral-400" />
                </div>
            </div>

            <div v-if="item?.children && item.children.length > 0 && navbar[item?.name.replace(/\s/g, '_')]"
                :id="`${item?.name.replace(/\s/g, '_')}_contents`" class="py-1 pl-10 pr-3 mb-1 transition duration-200">
                <div v-for="(child) in item.children" :key="child.name" class="mb-1">
                    <a :href="child.uri"
                        class="block py-2 px-3 rounded-md text-sm hover:bg-neutral-100 dark:hover:bg-zinc-700/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        :class="{ 'bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400 font-medium': isCurrentPath(child.uri) }">
                        {{ child.name }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue';
import IconBolt from '../../src/components/icons/IconBolt.vue';
import IconSquares2x2 from '../../src/components/icons/IconSquares2x2.vue';
import IconChartBar from '../../src/components/icons/IconChartBar.vue';
import IconDocument from '../../src/components/icons/IconDocument.vue';
import IconTableCells from '../../src/components/icons/IconTableCells.vue';
import IconViewfinderCircle from '../../src/components/icons/IconViewfinderCircle.vue';
import IconSquare2Stack from '../../src/components/icons/IconSquare2Stack.vue';
import IconXMark from '../../src/components/icons/IconXMark.vue';
import IconChevronDown from '../../src/components/icons/IconChevronDown.vue';
import IconChevronRight from '../../src/components/icons/IconChevronRight.vue';
import IconMagnifyingGlass from '../../src/components/icons/IconMagnifyingGlass.vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close']);

const navbar = reactive({});
const searchQuery = ref('');

const isCurrentPath = (uri) => {
    if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname;
        return currentPath.endsWith(uri);
    }
    return false;
};

const toggle = (key) => {
    navbar[key] = !navbar[key];
};

const clearSearch = () => {
    searchQuery.value = '';
};

const navigateTo = (result) => {
    if (result.uri) {
        if (typeof window !== 'undefined')
            window.location.href = result.uri;
    } else if (result.parent) {
        const parentKey = result.parent.replace(/\s/g, '_');
        navbar[parentKey] = true;
        clearSearch();
    }
};

const filteredResults = computed(() => {
    if (!searchQuery.value) return [];

    const query = searchQuery.value.toLowerCase();
    const results = [];

    navbarItems.forEach(item => {
        if (item.name.toLowerCase().includes(query)) {
            results.push({
                name: item.name,
                isDir: item.isDir
            });
        }

        if (item.children) {
            item.children.forEach(child => {
                if (child.name.toLowerCase().includes(query)) {
                    results.push({
                        name: child.name,
                        uri: child.uri,
                        parent: item.name
                    });
                }
            });
        }
    });

    return results;
});

const navbarItems = [
    {
        name: "Getting Started",
        isDir: true,
        icon: IconBolt,
        children: [
            { name: "Introduction", uri: "/introduction" },
            { name: "First steps", uri: "/first-steps" }
        ],
    },
    {
        name: "Components",
        isDir: true,
        icon: IconSquares2x2,
        children: [
            { name: "AI Chat", uri: "/ai-chat" },
            { name: "Badge", uri: "/badge" },
            { name: "Button", uri: "/button" },
            { name: "Button Groups", uri: "/button-groups" },
            { name: "Flags", uri: "/flags" },
            { name: "Icon", uri: "/icon" },
            { name: "Loader", uri: "/loader" },
            { name: "Progress Bar", uri: "/progress-bar" },
            { name: "Progress Circular", uri: "/progress-circular" },
            { name: "Rating", uri: "/rating" },
            { name: "System Bar", uri: "/system-bar" },
            { name: "Tooltip", uri: "/tooltip" }
        ],
    },
    {
        name: "Data",
        isDir: true,
        icon: IconChartBar,
        children: [
            { name: "Chart Bar", uri: "/chart-bar" },
            { name: "Chart Line", uri: "/chart-line" },
            { name: "Data Table", uri: "/data-table" },
            { name: "List", uri: "/list" },
            { name: "Pagination", uri: "/pagination" },
            { name: "Table", uri: "/table" },
        ]
    },
    {
        name: "Form",
        isDir: true,
        icon: IconDocument,
        children: [
            { name: "Autocomplete", uri: "/autocomplete" },
            { name: "Checkbox", uri: "/checkbox" },
            { name: "Chips Input", uri: "/chips-input" },
            { name: "Combobox", uri: "/combobox" },
            { name: "Currency Input", uri: "/currency-input" },
            { name: "Datepicker", uri: "/datepicker" },
            { name: "File Upload", uri: "/file-upload" },
            { name: "Form", uri: "/form" },
            { name: "Form Builder", uri: "/form-builder" },
            { name: "Input", uri: "/input" },
            { name: "Number Input", uri: "/number-input" },
            { name: "OTP Input", uri: "/otp-input" },
            { name: "Radio", uri: "/radio" },
            { name: "Slider", uri: "/slider" },
            { name: "Textarea", uri: "/textarea" },
            { name: "Timepicker", uri: "/timepicker" },
            { name: "Toggle", uri: "/toggle" },
        ],
    },
    {
        name: "Graph",
        isDir: true,
        icon: IconViewfinderCircle,
        children: [
            { name: "Box", uri: "/graph-box" },
            { name: "Node", uri: "/graph-node" },
        ]
    },
    {
        name: "Layout",
        isDir: true,
        icon: IconTableCells,
        children: [
            { name: "Accordion", uri: "/accordion" },
            { name: "Alert", uri: "/alert" },
            { name: "Avatar", uri: "/avatar" },
            { name: "Breadcrumb", uri: "/breadcrumb" },
            { name: "Card", uri: "/card" },
            { name: "Dropdown", uri: "/dropdown" },
            { name: "Navbar", uri: "/navbar" },
            { name: "Sidebar", uri: "/sidebar" },
            { name: "Skeleton", uri: "/skeleton" },
            { name: "Speed Dial", uri: "/speed-dial" },
            { name: "Stepper", uri: "/stepper" },
            { name: "Tabs", uri: "/tabs" },
            { name: "Toolbar", uri: "/toolbar" },
        ]
    },
    {
        name: "Overlays",
        isDir: true,
        icon: IconSquare2Stack,
        children: [
            { name: "Dialog", uri: "/dialog" },
            { name: "Notification", uri: "/notification" },
            { name: "Overlay", uri: "/overlay" },
        ],
    },
];

const expandActiveSection = () => {
    if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname;

        for (const item of navbarItems) {
            if (item.children) {
                const hasActiveChild = item.children.some(child =>
                    currentPath.endsWith(child.uri)
                );

                if (hasActiveChild) {
                    navbar[item.name.replace(/\s/g, '_')] = true;
                }
            }
        }
    }
};

onMounted(() => {
    const savedState = localStorage.getItem("navbarState");

    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            Object.assign(navbar, parsed);
        } catch (e) {
            console.error("Erro ao carregar estado do menu:", e);
        }
    }

    expandActiveSection();
});

watch(
    () => navbar,
    (newState) => {
        localStorage.setItem("navbarState", JSON.stringify(newState));
    },
    { deep: true }
);
</script>

<style scoped>
/* Estilos para os resultados de pesquisa */
.absolute {
    position: absolute;
}

.z-50 {
    z-index: 50;
}

/* Remover estilos que conflitam com o BaseLayout */
/* Manter apenas estilos específicos para o conteúdo do menu */

.navbar-text-dir {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    padding: 0;
    padding-left: 10px;
    margin: 0;
    display: block;
}

.navbar-text {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    padding: 0;
    margin: 0;
}

/* Manter os ícones perfeitamente alinhados */
.mr-3,
.mr-4 {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
