<template>
    <BaseLayout>
        <c-seo
            section="Toolbar Component"
            description="Learn how to use the CToolbar component in CMMV UI. A versatile toolbar component for creating application headers and action bars with customizable content and responsive behavior."
            :keywords="['toolbar', 'component', 'ui', 'header', 'app bar', 'navigation']"
        />

        <h1>Toolbar</h1>

        <p>The <code>CToolbar (alias: c-toolbar)</code> component provides a structured layout for application toolbars.
            It is versatile and integrates seamlessly with subcomponents like <code>CAppBarNav</code>,
            <code>CToolbarTitle</code>, and <code>CSpacer</code>, enabling customizable and responsive designs.</p>

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
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">bg-neutral-800</td>
                    <td class="border-b px-4 py-2">Background color of the toolbar, Tailwind-based.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">text-white</td>
                    <td class="border-b px-4 py-2">Text color of the toolbar elements.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">Controls the rounded corners of the toolbar.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">dense</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Reduces the toolbar height to 48px.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">minified</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Alternative to dense, reduces height to 48px. Ideal for applications with system menu bars.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>CAppBarNav</h3>

        <p>The <code>CAppBarNav</code> component is designed for quick implementation of navigation controls. It is
            often used to include a hamburger menu for mobile-first designs, offering a clean and minimalistic approach
            to navigation.</p>

        <card-docs>
            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-app-bar-nav /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>CToolbarTitle</h3>

        <p>Display a prominent title or application name using the <code>CToolbarTitle</code>. Its simplicity ensures
            that your
            users immediately recognize the context or purpose of the toolbar.</p>

        <card-docs>
            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-toolbar-title&gt;My App&lt;/c-toolbar-title&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>CSpacer</h3>

        <p>
            The <code>CSpacer</code> component plays a critical role in dynamically spacing elements within the toolbar.
            This
            ensures proper alignment and balance, especially in layouts with multiple buttons or navigation links.
        </p>

        <card-docs>
            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-spacer /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Examples</h3>

        <p>
            The following examples showcase how the <code>CToolbar</code> component can be used to structure a
            navigation bar
            effectively.
            It provides a clean, responsive design that seamlessly integrates into different layouts, making it ideal
            for
            application headers.
        </p>

        <card-docs>
            <c-toolbar class="bg-blue-500 text-white">
                <c-toolbar-title>My Application</c-toolbar-title>
            </c-toolbar>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-toolbar class="bg-blue-500 text-white"&gt;
        &lt;c-toolbar-title&gt;My Application&lt;/c-toolbar-title&gt;
    &lt;/c-toolbar&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Toolbar with Buttons</h3>

        <p>
            This example demonstrates how to enhance the <code>CToolbar</code> by incorporating interactive elements
            like
            navigation toggles, buttons, and icons.
            These additions improve user interaction while maintaining a clean and structured UI.
        </p>

        <card-docs>
            <c-toolbar class="bg-purple-800 text-white">
                <c-app-bar-nav />
                <c-toolbar-title>My App</c-toolbar-title>
                <c-spacer />
                <c-button type="button" variant="plain" rounded="full" bgColor="bg-purple-700 hover:bg-purple-500">
                    <IconMagnifyingGlass class="text-white" />
                </c-button>
            </c-toolbar>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-toolbar class="bg-purple-800 text-white"&gt;
        &lt;c-app-bar-nav /&gt;
        &lt;c-toolbar-title&gt;My App&lt;/c-toolbar-title&gt;
        &lt;c-spacer /&gt;
        &lt;c-button
            type="button"
            variant="plain"
            rounded="full"
            bgColor="bg-purple-700 hover:bg-purple-500"
        &gt;
            &lt;IconMagnifyingGlass class="text-white" /&gt;
        &lt;/c-button&gt;
    &lt;/c-toolbar&gt;
&lt;/template&gt;

&lt;script setup&gt;
import IconMagnifyingGlass from "@components/icons/IconMagnifyingGlass.vue";
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Advanced Sample</h3>

        <p>
            This advanced example demonstrates the flexibility of <code>CToolbar</code> in building a mobile-first
            layout. It
            incorporates dynamic search input, badge notifications, and flexible spacing for a modern application
            header.
        </p>

        <card-docs>
            <div
                class="bg-neutral-100 dark:bg-neutral-800 min-h-[600px] max-w-[500px] flex flex-col lg:w-6/12 sm:w-full m-auto">
                <c-toolbar class="bg-blue-600 text-white rounded-t-md shadow-md">
                    <c-app-bar-nav />
                    <c-toolbar-title>My App</c-toolbar-title>
                    <c-spacer />

                    <div class="relative">
                        <IconMagnifyingGlass class="absolute top-1/2 right-3 transform -translate-y-1/2 text-white" />
                    </div>

                    <c-button type="button" variant="plain" rounded="full" bgColor="bg-blue-600 hover:bg-blue-800"
                        class="py-1">
                        <IconBell class="text-white"></IconBell>
                        <c-badge floating>5</c-badge>
                    </c-button>
                </c-toolbar>

                <c-container
                    class="flex-grow bg-neutral-50 dark:bg-neutral-800 flex flex-col items-center justify-center rounded-t-none shadow-md">
                    <div class="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 m-8">
                        <h1 class="text-xl font-semibold text-neutral-800 dark:text-white mb-4">
                            Welcome to My App
                        </h1>
                        <p class="text-neutral-600 dark:text-neutral-300 mb-4">
                            This is a sample layout for a mobile-first application design with a toolbar and
                            dynamic theme switcher.
                        </p>
                    </div>
                </c-container>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;div class="bg-neutral-100 dark:bg-neutral-800 min-h-[600px] flex flex-col"&gt;
        &lt;c-toolbar class="bg-blue-600 text-white rounded-t-md shadow-md"&gt;
            &lt;c-app-bar-nav /&gt;
            &lt;c-toolbar-title&gt;My App&lt;/c-toolbar-title&gt;
            &lt;c-spacer /&gt;

            &lt;div class="relative"&gt;
                &lt;IconMagnifyingGlass class="absolute top-1/2 right-3 transform -translate-y-1/2 text-white" /&gt;
            &lt;/div&gt;

            &lt;c-button
                type="button"
                variant="plain"
                rounded="full"
                bgColor="bg-blue-600 hover:bg-blue-800"
                class="py-1"
            &gt;
                &lt;IconBell class="text-white"&gt;&lt;/IconBell&gt;
                &lt;c-badge floating&gt;5&lt;/c-badge&gt;
            &lt;/c-button&gt;
        &lt;/c-toolbar&gt;

        &lt;c-container class="flex-grow bg-neutral-50 dark:bg-neutral-800 flex flex-col items-center justify-center rounded-t-none shadow-md"&gt;
            &lt;div class="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 m-8"&gt;
                &lt;h1 class="text-xl font-semibold text-neutral-800 dark:text-white mb-4"&gt;
                    Welcome to My App
                &lt;/h1&gt;
                &lt;p class="text-neutral-600 dark:text-neutral-300 mb-4"&gt;
                    This is a sample layout for a mobile-first application design with a toolbar and
                    dynamic theme switcher.
                &lt;/p&gt;
            &lt;/div&gt;
        &lt;/c-container&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import IconMagnifyingGlass from "@components/icons/IconMagnifyingGlass.vue";
import IconBell from "@components/icons/IconBell.vue";
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Minified Toolbar</h3>

        <p>
            The <code>minified</code> property (or <code>dense</code>) reduces the toolbar height to 48px,
            making it ideal for applications with a system menu bar at the top or for interfaces where
            vertical space is at a premium. This compact design maintains functionality while providing
            a more streamlined appearance.
        </p>

        <card-docs>
            <div class="flex flex-col space-y-8 w-full">
                <div>
                    <p class="mb-2 text-neutral-500 dark:text-neutral-400 text-sm">Standard Toolbar (64px)</p>
                    <c-toolbar class="bg-green-600 text-white">
                        <c-app-bar-nav />
                        <c-toolbar-title>Standard Height</c-toolbar-title>
                        <c-spacer />
                        <c-button type="button" variant="plain" rounded="full" bgColor="bg-green-700 hover:bg-green-800">
                            <IconMagnifyingGlass class="text-white" />
                        </c-button>
                    </c-toolbar>
                </div>

                <div>
                    <p class="mb-2 text-neutral-500 dark:text-neutral-400 text-sm">Minified Toolbar (48px)</p>
                    <c-toolbar minified class="bg-green-600 text-white">
                        <c-app-bar-nav />
                        <c-toolbar-title>Minified Height</c-toolbar-title>
                        <c-spacer />
                        <c-button type="button" variant="plain" rounded="full" bgColor="bg-green-700 hover:bg-green-800" size="sm">
                            <IconMagnifyingGlass class="text-white" />
                        </c-button>
                    </c-toolbar>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;!-- Standard Toolbar (64px height) --&gt;
    &lt;c-toolbar class="bg-green-600 text-white"&gt;
        &lt;c-app-bar-nav /&gt;
        &lt;c-toolbar-title&gt;Standard Height&lt;/c-toolbar-title&gt;
        &lt;c-spacer /&gt;
        &lt;c-button
            type="button"
            variant="plain"
            rounded="full"
            bgColor="bg-green-700 hover:bg-green-800"
        &gt;
            &lt;IconMagnifyingGlass class="text-white" /&gt;
        &lt;/c-button&gt;
    &lt;/c-toolbar&gt;

    &lt;!-- Minified Toolbar (48px height) --&gt;
    &lt;c-toolbar minified class="bg-green-600 text-white"&gt;
        &lt;c-app-bar-nav /&gt;
        &lt;c-toolbar-title&gt;Minified Height&lt;/c-toolbar-title&gt;
        &lt;c-spacer /&gt;
        &lt;c-button
            type="button"
            variant="plain"
            rounded="full"
            bgColor="bg-green-700 hover:bg-green-800"
            size="sm"
        &gt;
            &lt;IconMagnifyingGlass class="text-white" /&gt;
        &lt;/c-button&gt;
    &lt;/c-toolbar&gt;
&lt;/template&gt;

&lt;script setup&gt;
import IconMagnifyingGlass from "@components/icons/IconMagnifyingGlass.vue";
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Tabs" previousLink="/tabs" next="Dialog" nextLink="/dialog" />
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import IconMagnifyingGlass from "@components/icons/IconMagnifyingGlass.vue";
import IconBell from "@components/icons/IconBell.vue";
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
