<template>
    <BaseLayout>
        <h1>Sidebar</h1>

        <p>
            The <code>c-sidebar</code> component provides a flexible sidebar panel with optional overlay.
            It supports both left and right placement, customizable width, background color, and a closable overlay.
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
                    <td>modelValue</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>Controls whether the sidebar is open or closed.</td>
                </tr>
                <tr>
                    <td>side</td>
                    <td>String</td>
                    <td>'left'</td>
                    <td>Determines if the sidebar appears on the <code>'left'</code> or <code>'right'</code>.</td>
                </tr>
                <tr>
                    <td>fixed</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>If <code>true</code>, the sidebar stays fixed above all content.</td>
                </tr>
                <tr>
                    <td>width</td>
                    <td>String</td>
                    <td>'w-64'</td>
                    <td>Custom width for the sidebar.</td>
                </tr>
                <tr>
                    <td>bgColor</td>
                    <td>String</td>
                    <td>'bg-white dark:bg-zinc-900'</td>
                    <td>Background color of the sidebar.</td>
                </tr>
                <tr>
                    <td>bgColorOverlay</td>
                    <td>String</td>
                    <td>'bg-black/50'</td>
                    <td>Background color of the overlay.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            Below is a basic usage example of the <code>c-sidebar</code> component.
            Clicking the button will toggle the sidebar.
        </p>

        <card-docs>
            <div class="mx-auto p-4 flex flex-col items-center">
                <c-sidebar v-model="showSidebar" side="left" bgColor="bg-white dark:bg-neutral-900" fixed>
                    <template #title>
                        Navigation
                    </template>

                    <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                        <li><a href="#" class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Dashboard</a></li>
                        <li><a href="#" class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Settings</a></li>
                        <li><a href="#" class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Logout</a></li>
                    </ul>

                    <template #footer>
                        <p class="text-center text-gray-500 text-sm">© 2025 MyApp</p>
                    </template>
                </c-sidebar>

                <button
                    @click="showSidebar = true"
                    class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Open Sidebar
                </button>
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-sidebar
        v-model="showSidebar"
        side="left"
        bgColor="bg-white dark:bg-neutral-900"
        fixed
    &gt;
        &lt;template #title&gt;
            Navigation
        &lt;/template&gt;

        &lt;ul class="space-y-2 text-gray-700 dark:text-gray-300"&gt;
            &lt;li&gt;&lt;a href="#" class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"&gt;Dashboard&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#" class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"&gt;Settings&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#" class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"&gt;Logout&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;

        &lt;template #footer&gt;
            &lt;p class="text-center text-gray-500 text-sm"&gt;© 2025 MyApp&lt;/p&gt;
        &lt;/template&gt;
    &lt;/c-sidebar&gt;

    &lt;button
        @click="showSidebar = true"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
    &gt;
        Open Sidebar
    &lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const showSidebar = ref(false);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Right Sidebar</h3>

        <p>
            You can place the sidebar on the right side by setting <code>side="right"</code>.
        </p>

        <card-docs>
            <div class="mx-auto p-4 sm:p-6 flex flex-col items-center">
                <c-sidebar v-model="showRightSidebar" side="right" bgColor="bg-gray-100 dark:bg-zinc-800">
                    <template #title>
                        Right Sidebar
                    </template>

                    <p class="text-gray-700 dark:text-gray-300">Content inside the sidebar...</p>

                    <template #footer>
                        <p class="text-center text-gray-500 text-sm">Footer content</p>
                    </template>
                </c-sidebar>

                <button
                    @click="showRightSidebar = true"
                    class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                    Open Right Sidebar
                </button>
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-sidebar
        v-model="showRightSidebar"
        side="right"
        bgColor="bg-gray-100 dark:bg-zinc-800"
    &gt;
        &lt;template #title&gt;
            Right Sidebar
        &lt;/template&gt;

        &lt;p class="text-gray-700 dark:text-gray-300"&gt;Content inside the sidebar...&lt;/p&gt;

        &lt;template #footer&gt;
            &lt;p class="text-center text-gray-500 text-sm"&gt;Footer content&lt;/p&gt;
        &lt;/template&gt;
    &lt;/c-sidebar&gt;

    &lt;button
        @click="showRightSidebar = true"
        class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
    &gt;
        Open Right Sidebar
    &lt;/button&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Width & Overlay</h3>

        <p>
            You can customize the sidebar width and overlay background color using <code>width</code> and <code>bgColorOverlay</code>.
        </p>

        <card-docs>
            <div class="mx-auto p-4 sm:p-6 flex flex-col items-center">
                <c-sidebar v-model="showWideSidebar" side="left" width="w-96" bgColor="bg-gray-100 dark:bg-zinc-800" bgColorOverlay="bg-black/70">
                    <template #title>
                        Wide Sidebar
                    </template>

                    <p class="text-gray-700 dark:text-gray-300">This sidebar is wider than usual.</p>
                </c-sidebar>

                <button
                    @click="showWideSidebar = true"
                    class="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
                >
                    Open Wide Sidebar
                </button>
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-sidebar
        v-model="showWideSidebar"
        side="left"
        width="w-96"
        bgColor="bg-gray-100 dark:bg-zinc-800"
        bgColorOverlay="bg-black/70"
    &gt;
        &lt;template #title&gt;
            Wide Sidebar
        &lt;/template&gt;

        &lt;p class="text-gray-700 dark:text-gray-300"&gt;This sidebar is wider than usual.&lt;/p&gt;
    &lt;/c-sidebar&gt;

    &lt;button
        @click="showWideSidebar = true"
        class="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
    &gt;
        Open Wide Sidebar
    &lt;/button&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Sidebar Inside a Card</h3>

        <p>
            The sidebar can be used inside a <code>c-card</code> by setting <code>relative</code>.
            This makes the sidebar behave like a floating panel inside the container.
        </p>

        <card-docs>
            <div class="relative mx-auto flex flex-col justify-center items-center w-full min-h-[400px] overflow-hidden">
                <c-sidebar ref="cardSidebar" absolute shadow="" rounded="md" width="w-48" class="rounded-l-md">
                    <template #title>Panel</template>
                    <p class="text-gray-700 dark:text-gray-300">This is a floating sidebar inside the card.</p>
                </c-sidebar>

                <button
                    @click="openCardSidebar"
                    class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition"
                >
                    Open Sidebar Inside Card
                </button>
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;div class="relative min-h-[400px] overflow-hidden"&gt;
        &lt;c-sidebar
            ref="cardSidebar"
            absolute
            shadow=""
            rounded="md"
            width="w-48"
            class="rounded-l-md"
        &gt;
            &lt;template #title&gt;Panel&lt;/template&gt;
            &lt;p class="text-gray-700 dark:text-gray-300"&gt;This is a floating sidebar inside the card.&lt;/p&gt;
        &lt;/c-sidebar&gt;

        &lt;button
            @click="openCardSidebar"
            class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition"
        &gt;
            Open Sidebar Inside Card
        &lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const cardSidebar = ref(null);

const openCardSidebar = () => {
    cardSidebar.value.open();
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Sidebar With Toolbar</h3>

        <p>
            The <code>c-sidebar</code> can be used inside a <code>c-toolbar</code> to create a responsive sidebar that expands when clicking the navigation button.
            This approach is useful for app panels, navigation menus, and other interfaces that require a sliding panel.
        </p>

        <card-docs>
            <div class="relative mx-auto flex flex-col items-center w-full min-h-[400px] overflow-hidden p-4">
                <div class="bg-gray-100 dark:bg-gray-800 min-h-[600px] max-w-[500px] flex flex-col lg:w-6/12 sm:w-full m-auto relative overflow-hidden">
                    <c-sidebar
                        v-model="showSidebarToolbar"
                        absolute
                        shadow=""
                        rounded="md"
                        width="w-48"
                        class="rounded-l-md w-full"
                    >
                        <template #title>Panel</template>
                        <p class="text-gray-700 dark:text-gray-300">This is a floating sidebar inside the card.</p>
                    </c-sidebar>

                    <c-toolbar class="bg-blue-600 text-white rounded-t-md shadow-md">
                        <c-app-bar-nav @click="showSidebarToolbar = true" />
                        <c-toolbar-title>My App</c-toolbar-title>
                        <c-spacer />

                        <div class="relative">
                            <IconMagnifyingGlass class="absolute top-1/2 right-3 transform -translate-y-1/2 text-white" />
                        </div>

                        <c-button
                            type="button"
                            variant="plain"
                            rounded="full"
                            bgColor="bg-blue-600 hover:bg-blue-800"
                            class="py-1"
                        >
                            <IconBell class="text-white"></IconBell>
                            <c-badge floating >5</c-badge>
                        </c-button>
                    </c-toolbar>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;div class="relative overflow-hidden"&gt;
        &lt;c-sidebar
            v-model="showSidebarToolbar"
            absolute
            shadow=""
            rounded="md"
            width="w-48"
            class="rounded-l-md w-full"
        &gt;
            &lt;template #title&gt;Panel&lt;/template&gt;
            &lt;p class="text-gray-700 dark:text-gray-300"&gt;This is a floating sidebar inside the card.&lt;/p&gt;
        &lt;/c-sidebar&gt;

        &lt;c-toolbar class="bg-blue-600 text-white rounded-t-md shadow-md"&gt;
            &lt;c-app-bar-nav @click="showSidebarToolbar = true" /&gt;
            &lt;c-toolbar-title&gt;My App&lt;/c-toolbar-title&gt;
            &lt;c-spacer /&gt;

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
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="Dropdown"
            previousLink="/dropdown"
            next="Speed Dial"
            nextLink="/speed-dial"
        />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import IconBell from "@components/icons/IconBell.vue";
import IconMagnifyingGlass from "@components/icons/IconMagnifyingGlass.vue";

const showSidebar = ref(false);
const showRightSidebar = ref(false);
const showWideSidebar = ref(false);
const showSidebarToolbar = ref(false);
const cardSidebar = ref(null);
const methodSidebar = ref(null);

const openCardSidebar = () => {
    cardSidebar.value.open();
};

const openMethodSidebar = () => {
    methodSidebar.value.open();
};
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
