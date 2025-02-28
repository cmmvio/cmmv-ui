<template>
    <BaseLayout>
        <h1>Tabs</h1>

        <p>
            The <code>CTabs (alias: c-tabs)</code> component provides a simple way to organize content into multiple sections.
            Users can switch between different views using tabs. It supports different styles such as
            <strong>default (underline)</strong>, <strong>pills</strong>, and <strong>bar</strong>.
        </p>

        <table-docs>
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
                    <td class="border-b px-4 py-2">tabs</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">List of tab objects with <code>title</code> and <code>id</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">styleType</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"default"</td>
                    <td class="border-b px-4 py-2">Defines the style of the tabs. Options: <code>"default"</code>, <code>"pills"</code>, <code>"bar"</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">fullWidth</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Expands the tabs to take the full width of the container.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">pillBgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-gray-100 hover:bg-gray-200 text-gray-700"</td>
                    <td class="border-b px-4 py-2">Defines the background color of the pill tabs when inactive.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">pillActiveBgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-gray-300 text-gray-900"</td>
                    <td class="border-b px-4 py-2">Defines the background color of the pill tabs when active.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">barBorderActive</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-indigo-500"</td>
                    <td class="border-b px-4 py-2">Defines the active border color for the bar style tabs.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Default Style</h3>

        <p>
            The default style displays tabs with an underline when selected. This is a traditional tab interface that works well for simple navigation between sections.
        </p>

        <card-docs>
            <c-tabs :tabs="tabs"></c-tabs>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-tabs :tabs="tabs" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const tabs = ref([
    { title: "Profile", id: "profile" },
    { title: "Dashboard", id: "dashboard" },
    { title: "Settings", id: "settings" },
    { title: "Contacts", id: "contacts" }
]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Full-Width Tabs</h3>

        <p>
            Setting <code>fullWidth</code> to <code>true</code> makes the tabs stretch across the entire container width, ensuring equal spacing for all tabs.
        </p>

        <card-docs>
            <c-tabs :tabs="tabs" fullWidth></c-tabs>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-tabs :tabs="tabs" fullWidth /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Tabs with icons</h3>

        <p>
            The <code>CTabs</code> component supports icons alongside text labels, making it visually appealing and easier to navigate.
            You can provide an icon for each tab by adding an <code>icon</code> property to the <code>tabs</code> array.
            The icon will be displayed before the tab label.
        </p>

        <p>
            Icons can help users quickly identify sections, improving the overall user experience. Below is an example of tabs
            with icons:
        </p>

        <card-docs>
            <c-tabs :tabs="tabsWithIcons"></c-tabs>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-tabs :tabs="tabsWithIcons" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import IconUser from '@components/icons/IconUser.vue';
import IconCog6Tooth from '@components/icons/IconCog6Tooth.vue';
import IconRectangleGroup from '@components/icons/IconRectangleGroup.vue';
import IconUserGroup from '@components/icons/IconUserGroup.vue';

const tabsWithIcons = ref([
    { title: "Profile", id: "profile", icon: IconUser },
    { title: "Dashboard", id: "dashboard", icon: IconRectangleGroup },
    { title: "Settings", id: "settings", icon: IconCog6Tooth },
    { title: "Contacts", id: "contacts", icon: IconUserGroup }
]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Pills</h3>

        <p>
            The pill style removes the underline and instead highlights the selected tab using a background color.
            This style is ideal when you want a softer, rounded look.
        </p>

        <card-docs>
            <c-tabs :tabs="tabs" styleType="pills"></c-tabs>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-tabs :tabs="tabs" styleType="pills" /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Bar</h3>

        <p>
            The bar style creates a bordered tab layout with a shadow effect. The active tab is indicated by a highlighted border at the bottom.
            This style is suitable for applications that require a more structured look.
        </p>

        <card-docs>
            <c-tabs :tabs="tabs" styleType="bar"></c-tabs>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-tabs :tabs="tabs" styleType="bar" /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Contents</h3>

        <p>
            The <code>CTabs</code> component allows you to define content for each tab dynamically using Vue slots.
            This approach helps in keeping the component flexible and reusable.
            Instead of rendering different sections manually, the component will automatically display the corresponding content when a tab is selected.
        </p>

        <p>
            In the example below, each tab has its own section that is conditionally displayed.
            The slot names must match the <code>id</code> of the respective tab in the <code>tabs</code> array.
        </p>

        <card-docs>
            <c-tabs :tabs="tabs" styleType="bar">
                <template #profile>
                    <div class="p-4 bg-gray-200 dark:bg-white rounded-md">
                        <h4 class="text-lg font-semibold text-gray-600 dark:text-gray-600">Profile</h4>
                        <p class="text-gray-600 dark:text-gray-600">
                            This is the profile section. Here you can display user information, avatar, bio, and more.
                        </p>
                    </div>
                </template>

                <template #dashboard>
                    <div class="p-4 bg-gray-200 dark:bg-white rounded-md">
                        <h4 class="text-lg font-semibold text-gray-600 dark:text-gray-600">Dashboard</h4>
                        <p class="text-gray-600 dark:text-gray-600">
                            The dashboard provides an overview of recent activity, statistics, and reports.
                        </p>
                    </div>
                </template>

                <template #settings>
                    <div class="p-4 bg-gray-200 dark:bg-white rounded-md">
                        <h4 class="text-lg font-semibold text-gray-600 dark:text-gray-600">Settings</h4>
                        <p class="text-gray-600 dark:text-gray-600">
                            Modify your account settings, preferences, and security options from this tab.
                        </p>
                    </div>
                </template>

                <template #contacts>
                    <div class="p-4 bg-gray-200 dark:bg-white rounded-md">
                        <h4 class="text-lg font-semibold text-gray-600 dark:text-gray-600">Contacts</h4>
                        <p class="text-gray-600 dark:text-gray-600">
                            View and manage your saved contacts and communication history.
                        </p>
                    </div>
                </template>
            </c-tabs>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-tabs :tabs="tabs" styleType="bar"&gt;
        &lt;template #profile&gt;
            &lt;div class="p-4 bg-gray-200 dark:bg-white rounded-md"&gt;
                &lt;h4 class="text-lg font-semibold text-gray-600 dark:text-gray-600"&gt;Profile&lt;/h4&gt;
                &lt;p class="text-gray-600 dark:text-gray-600"&gt;
                    This is the profile section. Here you can display user information, avatar, bio, and more.
                &lt;/p&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        &lt;template #dashboard&gt;
            &lt;div class="p-4 bg-gray-200 dark:bg-white rounded-md"&gt;
                &lt;h4 class="text-lg font-semibold text-gray-600 dark:text-gray-600"&gt;Dashboard&lt;/h4&gt;
                &lt;p class="text-gray-600 dark:text-gray-600"&gt;
                    The dashboard provides an overview of recent activity, statistics, and reports.
                &lt;/p&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        &lt;template #settings&gt;
            &lt;div class="p-4 bg-gray-200 dark:bg-white rounded-md"&gt;
                &lt;h4 class="text-lg font-semibold text-gray-600 dark:text-gray-600"&gt;Settings&lt;/h4&gt;
                &lt;p class="text-gray-600 dark:text-gray-600"&gt;
                    Modify your account settings, preferences, and security options from this tab.
                &lt;/p&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        &lt;template #contacts&gt;
            &lt;div class="p-4 bg-gray-200 dark:bg-white rounded-md"&gt;
                &lt;h4 class="text-lg font-semibold text-gray-600 dark:text-gray-600"&gt;Contacts&lt;/h4&gt;
                &lt;p class="text-gray-600 dark:text-gray-600"&gt;
                    View and manage your saved contacts and communication history.
                &lt;/p&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-tabs&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const tabs = ref([
    { title: "Profile", id: "profile" },
    { title: "Dashboard", id: "dashboard" },
    { title: "Settings", id: "settings" },
    { title: "Contacts", id: "contacts" }
]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="Sidebar"
            previousLink="/sidebar"
            next="Toolbar"
            nextLink="/toolbar"
        />
    </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import IconUser from "../../../src/components/icons/IconUser.vue";
import IconCog6Tooth from "../../../src/components/icons/IconCog6Tooth.vue";
import IconRectangleGroup from "../../../src/components/icons/IconRectangleGroup.vue";
import IconUserGroup from "../../../src/components/icons/IconUserGroup.vue";

const tabs = ref([
    { title: "Profile", id: "profile" },
    { title: "Dashboard", id: "dashboard" },
    { title: "Settings", id: "settings" },
    { title: "Contacts", id: "contacts" }
]);

const tabsWithIcons = ref([
    { title: "Profile", id: "profile", icon: IconUser },
    { title: "Dashboard", id: "dashboard", icon: IconRectangleGroup },
    { title: "Settings", id: "settings", icon: IconCog6Tooth  },
    { title: "Contacts", id: "contacts", icon: IconUserGroup  }
]);
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
