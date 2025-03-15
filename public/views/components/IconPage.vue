<template>
    <BaseLayout>
        <c-seo
            section="Icon Component"
            description="Learn how to use the CIcon component in CMMV UI. A comprehensive icon system with support for multiple icon libraries, custom icons, and various styling options."
            :keywords="['icon', 'component', 'ui', 'svg', 'icon library', 'customization']"
        />

        <h1>Icon</h1>

        <p>
            The <code>CIcon (alias: c-icon)</code> component in the <code>@cmmv/ui</code> framework provides a flexible
            way to display icons with customizable sizes, colors, and accessibility features. This component is ideal
            for use in buttons, menus, or as standalone elements in your UI.
        </p>

        <p>
            While the default icons provided in the examples are from the
            <a href="https://heroicons.com/" target="_blank" rel="noopener noreferrer">Heroicons</a> library, the
            <code>CIcon</code> is designed to work with any icon library or custom SVGs. This ensures maximum
            flexibility and adaptability for your projects.
        </p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Prop</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Type</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Default</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Specifies the size of the icon. Options: <code>sm</code>,
                        <code>md</code>, <code>lg</code>, <code>xl</code>, <code>2xl</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">color</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text-neutral-600 dark:text-white"</td>
                    <td class="border-b px-4 py-2">Defines the text color of the icon. Accepts any valid Tailwind CSS
                        text color class.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">ariaLabel</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"icon"</td>
                    <td class="border-b px-4 py-2">Sets the accessible label for the icon, used by screen readers.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3 class="text-lg font-semibold mt-8">Simple Example</h3>

        <p>
            The following example demonstrates the basic usage of the <code>CIcon</code> component with different sizes
            and colors. You can use it to wrap any SVG or inline icon.
        </p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-icon size="sm" color="text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                        class="w-full h-full">
                        <path
                            d="M12 0C5.371 0 0 5.371 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577 0-.286-.011-1.043-.017-2.047-3.338.726-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.305 3.492.998.109-.775.419-1.306.761-1.606-2.666-.304-5.466-1.333-5.466-5.933 0-1.31.469-2.381 1.236-3.221-.124-.305-.536-1.526.117-3.176 0 0 1.008-.322 3.301 1.231.957-.266 1.983-.399 3.003-.404 1.019.005 2.046.138 3.003.404 2.292-1.553 3.299-1.231 3.299-1.231.655 1.65.243 2.871.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.922.43.371.812 1.102.812 2.222 0 1.606-.014 2.901-.014 3.293 0 .32.192.694.801.576C20.565 21.795 24 17.299 24 12c0-6.629-5.371-12-12-12z" />
                    </svg>
                </c-icon>

                <c-icon size="md" color="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                        class="w-full h-full">
                        <path
                            d="M12 0C5.371 0 0 5.371 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577 0-.286-.011-1.043-.017-2.047-3.338.726-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.305 3.492.998.109-.775.419-1.306.761-1.606-2.666-.304-5.466-1.333-5.466-5.933 0-1.31.469-2.381 1.236-3.221-.124-.305-.536-1.526.117-3.176 0 0 1.008-.322 3.301 1.231.957-.266 1.983-.399 3.003-.404 1.019.005 2.046.138 3.003.404 2.292-1.553 3.299-1.231 3.299-1.231.655 1.65.243 2.871.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.922.43.371.812 1.102.812 2.222 0 1.606-.014 2.901-.014 3.293 0 .32.192.694.801.576C20.565 21.795 24 17.299 24 12c0-6.629-5.371-12-12-12z" />
                    </svg>
                </c-icon>

                <c-icon size="lg" color="text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                        class="w-full h-full">
                        <path
                            d="M12 0C5.371 0 0 5.371 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577 0-.286-.011-1.043-.017-2.047-3.338.726-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.305 3.492.998.109-.775.419-1.306.761-1.606-2.666-.304-5.466-1.333-5.466-5.933 0-1.31.469-2.381 1.236-3.221-.124-.305-.536-1.526.117-3.176 0 0 1.008-.322 3.301 1.231.957-.266 1.983-.399 3.003-.404 1.019.005 2.046.138 3.003.404 2.292-1.553 3.299-1.231 3.299-1.231.655 1.65.243 2.871.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.922.43.371.812 1.102.812 2.222 0 1.606-.014 2.901-.014 3.293 0 .32.192.694.801.576C20.565 21.795 24 17.299 24 12c0-6.629-5.371-12-12-12z" />
                    </svg>
                </c-icon>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-icon size="sm" color="text-blue-600"&gt;
        &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"&gt;
            &lt;path
                d="M12 0C5.371 0 0 5.371 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577 0-.286-.011-1.043-.017-2.047-3.338.726-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.305 3.492.998.109-.775.419-1.306.761-1.606-2.666-.304-5.466-1.333-5.466-5.933 0-1.31.469-2.381 1.236-3.221-.124-.305-.536-1.526.117-3.176 0 0 1.008-.322 3.301 1.231.957-.266 1.983-.399 3.003-.404 1.019.005 2.046.138 3.003.404 2.292-1.553 3.299-1.231 3.299-1.231.655 1.65.243 2.871.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.922.43.371.812 1.102.812 2.222 0 1.606-.014 2.901-.014 3.293 0 .32.192.694.801.576C20.565 21.795 24 17.299 24 12c0-6.629-5.371-12-12-12z"
            /&gt;
        &lt;/svg&gt;
    &lt;/c-icon&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Accessibility</h3>

        <p>
            The <code>ariaLabel</code> prop ensures that the <code>CIcon</code> is accessible for screen readers. Use
            this prop
            to provide a descriptive label for your icon.
        </p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-icon size="lg" color="text-neutral-600 dark:text-white" ariaLabel="User Icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </c-icon>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-icon size="lg" color="text-neutral-600 dark:text-white" ariaLabel="Menu Icon"&gt;
        &lt;svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-32 w-32"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        &gt;
            &lt;path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
            /&gt;
        &lt;/svg&gt;
    &lt;/c-icon&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Best Practices</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-2">
            <div class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 bg-neutral-50 dark:bg-neutral-800">
                <h4 class="text-base font-semibold mb-3">When to use icons</h4>
                <ul class="list-disc pl-5 space-y-2 text-sm">
                    <li>Use icons to provide visual cues that help users quickly understand actions or information.</li>
                    <li>Pair icons with text labels for better clarity, especially for actions that might be ambiguous.
                    </li>
                    <li>Use consistent icons throughout your application to build user familiarity.</li>
                    <li>Consider using icons to save space in compact UI elements like toolbars or mobile interfaces.
                    </li>
                </ul>
            </div>
            <div class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 bg-neutral-50 dark:bg-neutral-800">
                <h4 class="text-base font-semibold mb-3">Accessibility considerations</h4>
                <ul class="list-disc pl-5 space-y-2 text-sm">
                    <li>Always provide an <code>ariaLabel</code> for icons that convey meaning.</li>
                    <li>For decorative icons that don't convey meaning, set <code>aria-hidden="true"</code>.</li>
                    <li>Ensure sufficient color contrast between the icon and its background.</li>
                    <li>Don't rely solely on color to convey information through icons.</li>
                    <li>Consider using larger icon sizes for touch targets on mobile devices (at least 44×44px).</li>
                </ul>
            </div>
        </div>

        <h3>Icon Library</h3>

        <p>
            Below is a complete list of all available icons in the library. Clicking on an icon will copy its
            implementation
            code to your clipboard, making it easy to integrate into your project. Use the search field to filter icons
            by name.
        </p>

        <div class="mb-6 mt-4">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-neutral-500 dark:text-neutral-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input type="search" v-model="searchQuery"
                    class="block w-full p-3 pl-10 text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    placeholder="Search icons by name..." />
            </div>
            <p v-if="filteredIcons.length === 0 && searchQuery"
                class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                No icons found matching "{{ searchQuery }}". Try a different search term.
            </p>
        </div>

        <c-card variant="flat" class="m-auto mt-4 px-4 py-5 items-center">
            <div
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-4">
                <div v-for="icon in filteredIcons" :key="icon.name"
                    class="relative flex flex-col items-center justify-center cursor-pointer group"
                    @click="copyToClipboard(icon.code)">
                    <c-tooltip :content="icon.name" position="top">
                        <component :is="icon.component" class="w-8 h-8 mb-2" color="text-neutral-600 dark:text-white"
                            aria-hidden="true" />
                    </c-tooltip>
                    <span class="text-xs text-center text-neutral-500 dark:text-neutral-400 truncate w-full">{{
                        icon.name
                        }}</span>
                </div>
            </div>
        </c-card>

        <div v-if="filteredIcons.length > 0" class="text-sm text-neutral-500 dark:text-neutral-400 mt-4 text-center">
            Showing {{ filteredIcons.length }} of {{ resolvedIcons.length }} icons
        </div>

        <br />

        <h3>Brand Icons</h3>

        <p>
            The following brand icons are available for use in your application. These icons are particularly useful for
            social
            media links, login options, or displaying technology stacks.
        </p>

        <div class="mb-6 mt-4">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-neutral-500 dark:text-neutral-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input type="search" v-model="searchBrandQuery"
                    class="block w-full p-3 pl-10 text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    placeholder="Search brand icons by name..." />
            </div>
            <p v-if="filteredBrandIcons.length === 0 && searchBrandQuery"
                class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                No brand icons found matching "{{ searchBrandQuery }}". Try a different search term.
            </p>
        </div>

        <c-card variant="flat" class="m-auto mt-4 px-4 py-10 items-center">
            <div
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-4">
                <div v-for="icon in filteredBrandIcons" :key="icon.name"
                    class="relative flex flex-col items-center justify-center cursor-pointer group"
                    @click="copyToClipboard(icon.code)">
                    <c-tooltip :content="icon.name" position="top">
                        <component :is="icon.component" class="w-8 h-8 mb-2" color="text-neutral-600 dark:text-white"
                            aria-hidden="true" />
                    </c-tooltip>
                    <span class="text-xs text-center text-neutral-500 dark:text-neutral-400 truncate w-full">{{
                        icon.name
                        }}</span>
                </div>
            </div>
        </c-card>

        <div v-if="filteredBrandIcons.length > 0"
            class="text-sm text-neutral-500 dark:text-neutral-400 mt-4 text-center">
            Showing {{ filteredBrandIcons.length }} of {{ resolvedBrandsIcons.length }} brand icons
        </div>

        <br />

        <c-notification ref="notification" iconColor="text-green-500"></c-notification>

        <PagePagination previous="Flags" previousLink="/flags" next="Image" nextLink="/image" />
    </BaseLayout>
</template>

<style scoped>
.group:hover .tooltip {
    opacity: 1;
    visibility: visible;
}
</style>

<script setup>
import { ref, markRaw, reactive, onMounted, computed } from "vue";
import IconsList from "@composables/IconsList.ts";
import IconsBrandsList from "@composables/IconsBrandsList.ts";
import BaseLayout from "../../layout/BaseLayout.vue";
import PagePagination from "../../layout/PagePagination.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import CCard from "@components/layout/CCard.vue";
import CIcon from "@components/components/CIcon.vue";
import CTooltip from "@components/components/CTooltip.vue";
import IconCheck from "@components/icons/IconCheck.vue";

const notification = ref(null);
const icons = IconsList;
const iconsBrands = IconsBrandsList;
const resolvedIcons = reactive([]);
const resolvedBrandsIcons = reactive([]);
const searchQuery = ref('');
const searchBrandQuery = ref('');

const iconComponents = import.meta.glob('@components/icons/*.vue');

const filteredIcons = computed(() => {
    if (!searchQuery.value) return resolvedIcons.sort((a, b) => a.name.localeCompare(b.name));
    const query = searchQuery.value.toLowerCase();
    return resolvedIcons.filter(icon =>
        icon.name.toLowerCase().includes(query)
    ).sort((a, b) => a.name.localeCompare(b.name));
});

const filteredBrandIcons = computed(() => {
    if (!searchBrandQuery.value) return resolvedBrandsIcons.sort((a, b) => a.name.localeCompare(b.name));
    const query = searchBrandQuery.value.toLowerCase();
    return resolvedBrandsIcons.filter(icon =>
        icon.name.toLowerCase().includes(query)
    ).sort((a, b) => a.name.localeCompare(b.name));
});

onMounted(async () => {
    for (const icon of iconsBrands) {
        if (icon.path) {
            try {
                const path = `/src/${icon.path}`;
                const module = iconComponents[path];
                if (module) {
                    const imported = await module();
                    resolvedBrandsIcons.push({
                        ...icon,
                        component: markRaw(imported.default),
                    });
                }
            } catch (e) {
                console.warn(`Failed to import brand icon: ${icon.path}`, e);
            }
        }
    }

    for (const icon of icons) {
        if (icon.path) {
            try {
                const path = `/src/${icon.path}`;
                const module = iconComponents[path];
                if (module) {
                    const imported = await module();
                    resolvedIcons.push({
                        ...icon,
                        component: markRaw(imported.default),
                    });
                }
            } catch (e) {
                console.warn(`Failed to import icon: ${icon.path}`, e);
            }
        }
    }
});

function copyToClipboard(code) {
    navigator.clipboard.writeText(code).then(() => {
        triggerNotification();
    });
}

function triggerNotification() {
    notification.value.showNotification({
        newTitle: "Success",
        newContent: "Icon code copied to clipboard!",
        newIcon: IconCheck,
        newDuration: 2000,
    });
}
</script>
