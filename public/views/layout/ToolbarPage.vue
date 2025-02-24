<template>
    <BaseLayout>
        <h1>Toolbar</h1>

        <p>The <code>CToolbar (alias: c-toolbar)</code> component provides a structured layout for application toolbars. It is versatile and integrates seamlessly with subcomponents like <code>CAppBarNav</code>, <code>CToolbarTitle</code>, and <code>CSpacer</code>, enabling customizable and responsive designs.</p>

        <table class="w-full text-left border-collapse border-0 rounded-md doc-table">
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Prop</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Type</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Default</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">bg-gray-800</td>
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
            </tbody>
        </table>

        <h3>CAppBarNav</h3>

        <p>The <code>CAppBarNav</code> component is designed for quick implementation of navigation controls. It is often used to include a hamburger menu for mobile-first designs, offering a clean and minimalistic approach to navigation.</p>

        <pre><code class="code-highlight language-html">&lt;c-app-bar-nav /&gt;</code>
        </pre>

        <h3>CToolbarTitle</h3>

        <p>Display a prominent title or application name using the <code>CToolbarTitle</code>. Its simplicity ensures that your users immediately recognize the context or purpose of the toolbar.</p>

        <pre><code class="code-highlight language-html">&lt;c-toolbar-title&gt;My App&lt;/c-toolbar-title&gt;</code>
        </pre>

        <h3>CSpacer</h3>

        <p>
            The <code>CSpacer</code> component plays a critical role in dynamically spacing elements within the toolbar. This ensures proper alignment and balance, especially in layouts with multiple buttons or navigation links.
        </p>

        <pre>
            <code class="code-highlight language-html">&lt;c-spacer /&gt;</code>
        </pre>

        <h3>Examples</h3>

        <p>
            The following examples showcase how the <code>CToolbar</code> component can be used to structure a navigation bar effectively.
            It provides a clean, responsive design that seamlessly integrates into different layouts, making it ideal for application headers.
        </p>

        <card-docs>
            <c-toolbar class="bg-blue-500 text-white">
                <c-toolbar-title>My Application</c-toolbar-title>
            </c-toolbar>
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-toolbar class="bg-blue-500 text-white"&gt;
    &lt;c-toolbar-title&gt;My Application&lt;/c-toolbar-title&gt;
&lt;/c-toolbar&gt;</code>
        </pre>

        <h3>Toolbar with Buttons</h3>

        <p>
            This example demonstrates how to enhance the <code>CToolbar</code> by incorporating interactive elements like navigation toggles, buttons, and icons.
            These additions improve user interaction while maintaining a clean and structured UI.
        </p>

        <card-docs>
            <c-toolbar class="bg-purple-800 text-white">
                <c-app-bar-nav />
                <c-toolbar-title>My App</c-toolbar-title>
                <c-spacer />
                <c-button
                    type="button"
                    variant="plain"
                    rounded="full"
                    bgColor="bg-purple-700 hover:bg-purple-500"
                >
                    <IconMagnifyingGlass class="text-white" />
                </c-button>
            </c-toolbar>
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-toolbar class="bg-purple-800 text-white"&gt;
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
&lt;/c-toolbar&gt;</code>
</pre>

        <h3>Advaced sample</h3>

        <p>
            This advanced example demonstrates the flexibility of <code>CToolbar</code> in building a mobile-first layout. It incorporates dynamic search input, badge notifications, and flexible spacing for a modern application header.
        </p>

        <card-docs>
            <div class="bg-gray-100 dark:bg-gray-800 min-h-[600px] max-w-[500px] flex flex-col lg:w-6/12 sm:w-full m-auto">
                <!-- Toolbar -->
                <c-toolbar class="bg-blue-600 text-white rounded-t-md shadow-md">
                    <!-- Navigation Icon -->
                    <c-app-bar-nav />

                    <!-- Title -->
                    <c-toolbar-title>My App</c-toolbar-title>

                    <!-- Spacer -->
                    <c-spacer />

                    <!-- Search Input -->
                    <div class="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            class="bg-white text-black placeholder-gray-500 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <IconMagnifyingGlass class="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                    </div>

                    <!-- Theme Switch -->
                    <c-button
                        type="button"
                        variant="plain"
                        rounded="full"
                        bgColor="bg-blue-600 hover:bg-blue-800"
                    >
                        <IconBell class="text-white"></IconBell>
                        <c-badge>5</c-badge>
                    </c-button>
                </c-toolbar>

                <!-- Main Content Container -->
                <c-container class="flex-grow bg-gray-50 dark:bg-gray-800 flex flex-col items-center justify-center rounded-t-none shadow-md">
                    <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 m-8">
                        <h1 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                            Welcome to My App
                        </h1>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">
                            This is a sample layout for a mobile-first application design with a toolbar and
                            dynamic theme switcher.
                        </p>
                    </div>
                </c-container>
            </div>
        </card-docs>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
</script>
