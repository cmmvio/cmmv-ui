<template>
    <BaseLayout>
        <h1>Dropdown</h1>

        <p>
            The <code>CDropdown (alias:c-dropdown)</code> component provides a flexible and customizable dropdown menu.
            It supports different positions, custom activators, and various styling options.
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
                    <td>String | Number</td>
                    <td>""</td>
                    <td>Controls the selected value in the dropdown.</td>
                </tr>
                <tr>
                    <td>options</td>
                    <td>Array</td>
                    <td>[]</td>
                    <td>Array of dropdown options (<code>{ value, label }</code>).</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>String</td>
                    <td>"Select an option"</td>
                    <td>Text displayed when no option is selected.</td>
                </tr>
                <tr>
                    <td>position</td>
                    <td>String</td>
                    <td>"bottom-left"</td>
                    <td>Defines dropdown positioning: <code>top-left</code>, <code>top-right</code>,
                        <code>bottom-left</code>, <code>bottom-right</code>, <code>bottom-center</code>,
                        <code>top-center</code>.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            The dropdown can be triggered by clicking a button, which will display a list of options.
            You can select an option, and the value will be updated.
        </p>

        <card-docs>
            <div class="mx-auto p-4 flex flex-col items-center h-[400px]">
                <c-dropdown v-model="selectedItem" :options="menuOptions">
                    <template #activator>
                        <c-button size="lg" class="px-4 py-2 bg-blue-500 text-white rounded-md ">
                            Open Menu
                        </c-button>
                    </template>
                </c-dropdown>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-dropdown v-model="selectedItem" :options="menuOptions"&gt;
        &lt;template #activator&gt;
            &lt;c-button
                size="lg"
                class="px-4 py-2 bg-blue-500 text-white rounded-md"
            &gt;
                Open Menu
            &lt;/c-button&gt;
        &lt;/template&gt;
    &lt;/c-dropdown&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const selectedItem = ref(null);
const menuOptions = ref([
    { value: "home", label: "Home" },
    { value: "profile", label: "Profile" },
    { value: "settings", label: "Settings" }
]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Options Slot</h3>

        <p>
            You can customize the appearance of each dropdown option by using the <code>#option</code> slot.
            This allows adding icons or additional information to the menu items.
        </p>

        <card-docs>
            <div class="mx-auto p-4 flex flex-col items-center h-[400px]">
                <c-dropdown v-model="selectedItem" :options="menuOptions">
                    <template #activator>
                        <c-button size="lg" bgColor="bg-green-600 hover:bg-green-500"
                            class="px-4 py-2 bg-green-500 text-white rounded-md">
                            Custom Options
                        </c-button>
                    </template>
                    <template #option="{ data }">
                        <div class="flex items-center space-x-2">
                            <icon-check-circle class="w-4 h-4 text-green-500" v-if="data.value === selectedItem" />
                            <span>{{ data.label }}</span>
                        </div>
                    </template>
                </c-dropdown>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-dropdown v-model="selectedItem" :options="menuOptions"&gt;
        &lt;template #activator&gt;
            &lt;c-button
                size="lg"
                bgColor="bg-green-600 hover:bg-green-500"
                class="px-4 py-2 text-white rounded-md"
            &gt;
                Custom Options
            &lt;/c-button&gt;
        &lt;/template&gt;
        &lt;template #option="{ data }"&gt;
            &lt;div class="flex items-center space-x-2"&gt;
                &lt;icon-check-circle
                    class="w-4 h-4 text-green-500"
                    v-if="data.value === selectedItem"
                /&gt;
                &lt;span&gt;&#123;&#123; data.label &#125;&#125;&lt;/span&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-dropdown&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Dropdown Positions</h3>

        <p>
            You can control where the dropdown appears relative to the activator button using the <code>position</code>
            prop.
            The default position is <code>bottom-left</code>, but you can choose from other options like
            <code>top-left</code>,
            <code>top-right</code>, <code>bottom-right</code>, and <code>bottom-center</code>.
        </p>

        <card-docs>
            <div class="p-40 grid gap-6 h-[600px]">
                <c-dropdown v-model="selectedItem" :options="menuOptions" position="top-left">
                    <template #activator>
                        <button class="px-4 py-2 bg-neutral-500 text-white rounded-md">
                            Top Left
                        </button>
                    </template>
                </c-dropdown>

                <c-dropdown v-model="selectedItem" :options="menuOptions" position="top-right">
                    <template #activator>
                        <button class="px-4 py-2 bg-neutral-500 text-white rounded-md">
                            Top Right
                        </button>
                    </template>
                </c-dropdown>

                <c-dropdown v-model="selectedItem" :options="menuOptions" position="bottom-left">
                    <template #activator>
                        <button class="px-4 py-2 bg-neutral-500 text-white rounded-md">
                            Bottom Left
                        </button>
                    </template>
                </c-dropdown>

                <c-dropdown v-model="selectedItem" :options="menuOptions" position="bottom-right">
                    <template #activator>
                        <button class="px-4 py-2 bg-neutral-500 text-white rounded-md">
                            Bottom Right
                        </button>
                    </template>
                </c-dropdown>

                <c-dropdown v-model="selectedItem" :options="menuOptions" position="bottom-center">
                    <template #activator>
                        <button class="px-4 py-2 bg-neutral-500 text-white rounded-md">
                            Bottom Center
                        </button>
                    </template>
                </c-dropdown>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-dropdown
        v-model="selectedItem"
        :options="menuOptions"
        position="top-left"
    &gt;
        &lt;template #activator&gt;
            &lt;button class="px-4 py-2 bg-neutral-500 text-white rounded-md"&gt;
                Top Left
            &lt;/button&gt;
        &lt;/template&gt;
    &lt;/c-dropdown&gt;

    &lt;c-dropdown
        v-model="selectedItem"
        :options="menuOptions"
        position="top-right"
    &gt;
        &lt;template #activator&gt;
            &lt;button class="px-4 py-2 bg-neutral-500 text-white rounded-md"&gt;
                Top Right
            &lt;/button&gt;
        &lt;/template&gt;
    &lt;/c-dropdown&gt;

    &lt;c-dropdown
        v-model="selectedItem"
        :options="menuOptions"
        position="bottom-left"
    &gt;
        &lt;template #activator&gt;
            &lt;button class="px-4 py-2 bg-neutral-500 text-white rounded-md"&gt;
                Bottom Left
            &lt;/button&gt;
        &lt;/template&gt;
    &lt;/c-dropdown&gt;

    &lt;c-dropdown
        v-model="selectedItem"
        :options="menuOptions"
        position="bottom-right"
    &gt;
        &lt;template #activator&gt;
            &lt;button class="px-4 py-2 bg-neutral-500 text-white rounded-md"&gt;
                Bottom Right
            &lt;/button&gt;
        &lt;/template&gt;
    &lt;/c-dropdown&gt;

    &lt;c-dropdown
        v-model="selectedItem"
        :options="menuOptions"
        position="bottom-center"
    &gt;
        &lt;template #activator&gt;
            &lt;button class="px-4 py-2 bg-neutral-500 text-white rounded-md"&gt;
                Bottom Center
            &lt;/button&gt;
        &lt;/template&gt;
    &lt;/c-dropdown&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Toolbar Menu Icons</h3>

        <p>
            Dropdowns can be used in a toolbar layout with icons as activators. This pattern works well for
            application headers, providing a clean interface for navigation and actions.
        </p>

        <card-docs>
            <div class="mx-auto p-4 flex justify-center">
                <div class="bg-white dark:bg-neutral-900 shadow rounded-lg p-4 w-full max-w-2xl h-[300px]">
                    <div class="flex items-center gap-x-3 justify-center py-2">
                        <c-dropdown position="bottom-right" :options="toolbarOptions">
                            <template #activator>
                                <c-button
                                    bgColor="bg-white dark:bg-neutral-900"
                                    textColor="text-neutral-600 dark:text-neutral-200"
                                    class="border border-neutral-200 dark:border-neutral-800"
                                    >Feedback</c-button
                                >
                            </template>
                        </c-dropdown>

                        <c-dropdown position="bottom-right" :options="notificationOptions">
                            <template #activator>
                                <c-button class="bg-transparent hover:bg-neutral-300 dark:hover:bg-neutral-700">
                                    <icon-inbox
                                        class="h-5 w-5 text-neutral-600 dark:text-white cursor-pointer"
                                        aria-hidden="true"
                                        size="sm"
                                    />
                                </c-button>
                            </template>
                            <template #items>
                                <li class="p-4 border-b border-neutral-200 dark:border-neutral-700">
                                    <div class="font-medium">Notifications</div>
                                    <div class="text-sm text-neutral-500">You have 3 unread messages</div>
                                </li>
                                <li class="px-4 py-2 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700">
                                    <div class="flex items-center">
                                        <icon-user class="w-4 h-4 mr-2 text-blue-500" />
                                        <span>New message from Sarah</span>
                                    </div>
                                </li>
                                <li class="px-4 py-2 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700">
                                    <div class="flex items-center">
                                        <icon-document class="w-4 h-4 mr-2 text-green-500" />
                                        <span>Document updated</span>
                                    </div>
                                </li>
                            </template>
                        </c-dropdown>

                        <c-dropdown position="bottom-right" :options="helpOptions">
                            <template #activator>
                                <c-button class="bg-transparent hover:bg-neutral-300 dark:hover:bg-neutral-700">
                                    <icon-question-mark-circle
                                        class="h-5 w-5 text-neutral-600 dark:text-white cursor-pointer"
                                        aria-hidden="true"
                                        size="sm"
                                    />
                                </c-button>
                            </template>
                            <template #content>
                                <div class="p-4">
                                    <h3 class="font-medium mb-2">Help Center</h3>
                                    <ul class="space-y-2">
                                        <li class="text-sm">
                                            <a href="#" class="text-blue-500 hover:text-blue-600">Documentation</a>
                                        </li>
                                        <li class="text-sm">
                                            <a href="#" class="text-blue-500 hover:text-blue-600">FAQs</a>
                                        </li>
                                        <li class="text-sm">
                                            <a href="#" class="text-blue-500 hover:text-blue-600">Contact Support</a>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                        </c-dropdown>

                        <c-button
                            size="sm"
                            textColor="text-neutral-600 dark:text-neutral-200"
                            bgColor="bg-white dark:bg-neutral-900"
                            class="border border-neutral-200 dark:border-neutral-800">
                            <icon-moon class="h-5 w-5" />
                        </c-button>
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;div class="flex items-center gap-x-3 justify-center py-2"&gt;
    &lt;c-dropdown position="bottom-right" :options="feedbackOptions"&gt;
        &lt;template #activator&gt;
            &lt;c-button
                bgColor="bg-white dark:bg-neutral-900"
                textColor="text-neutral-600 dark:text-neutral-200"
                class="border border-neutral-200 dark:border-neutral-800"
                &gt;Feedback&lt;/c-button
            &gt;
        &lt;/template&gt;
    &lt;/c-dropdown&gt;

    &lt;c-dropdown position="bottom-right" :options="notificationOptions"&gt;
        &lt;template #activator&gt;
            &lt;icon-inbox
                class="h-5 w-5 text-neutral-600 dark:text-white cursor-pointer"
                aria-hidden="true"
                size="sm"
            /&gt;
        &lt;/template&gt;
        &lt;template #items&gt;
            &lt;li class="p-4 border-b border-neutral-200 dark:border-neutral-700"&gt;
                &lt;div class="font-medium"&gt;Notifications&lt;/div&gt;
                &lt;div class="text-sm text-neutral-500"&gt;You have 3 unread messages&lt;/div&gt;
            &lt;/li&gt;
            &lt;li class="px-4 py-2 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"&gt;
                &lt;div class="flex items-center"&gt;
                    &lt;icon-user class="w-4 h-4 mr-2 text-blue-500" /&gt;
                    &lt;span&gt;New message from Sarah&lt;/span&gt;
                &lt;/div&gt;
            &lt;/li&gt;
            &lt;li class="px-4 py-2 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"&gt;
                &lt;div class="flex items-center"&gt;
                    &lt;icon-document class="w-4 h-4 mr-2 text-green-500" /&gt;
                    &lt;span&gt;Document updated&lt;/span&gt;
                &lt;/div&gt;
            &lt;/li&gt;
        &lt;/template&gt;
    &lt;/c-dropdown&gt;

    &lt;c-dropdown position="bottom-right" :options="helpOptions"&gt;
        &lt;template #activator&gt;
            &lt;icon-question-mark-circle
                class="h-5 w-5 text-neutral-600 dark:text-white cursor-pointer"
                aria-hidden="true"
                size="sm"
            /&gt;
        &lt;/template&gt;
        &lt;template #content&gt;
            &lt;div class="p-4"&gt;
                &lt;h3 class="font-medium mb-2"&gt;Help Center&lt;/h3&gt;
                &lt;ul class="space-y-2"&gt;
                    &lt;li class="text-sm"&gt;
                        &lt;a href="#" class="text-blue-500 hover:text-blue-600"&gt;Documentation&lt;/a&gt;
                    &lt;/li&gt;
                    &lt;li class="text-sm"&gt;
                        &lt;a href="#" class="text-blue-500 hover:text-blue-600"&gt;FAQs&lt;/a&gt;
                    &lt;/li&gt;
                    &lt;li class="text-sm"&gt;
                        &lt;a href="#" class="text-blue-500 hover:text-blue-600"&gt;Contact Support&lt;/a&gt;
                    &lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-dropdown&gt;

    &lt;c-button
        size="sm"
        textColor="text-neutral-600 dark:text-neutral-200"
        bgColor="bg-white dark:bg-neutral-900"
        class="border border-neutral-200 dark:border-neutral-800"&gt;
        &lt;icon-moon class="h-5 w-5" /&gt;
    &lt;/c-button&gt;
&lt;/div&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Card" previousLink="/card" next="Navbar" nextLink="/navbar" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import IconCheckCircle from "@components/icons/IconCheckCircle.vue";
import IconUser from "@components/icons/IconUser.vue";
import IconDocument from "@components/icons/IconDocument.vue";
import IconInbox from "@components/icons/IconInbox.vue";
import IconQuestionMarkCircle from "@components/icons/IconQuestionMarkCircle.vue";
import IconMoon from "@components/icons/IconMoon.vue";

const selectedItem = ref(null);
const menuOptions = ref([
    { value: "home", label: "Home" },
    { value: "profile", label: "Profile" },
    { value: "settings", label: "Settings" }
]);

const toolbarOptions = ref([
    { value: "bug", label: "Report Bug" },
    { value: "feature", label: "Request Feature" },
    { value: "feedback", label: "General Feedback" }
]);

const notificationOptions = ref([
    { value: "message", label: "New message from Sarah" },
    { value: "update", label: "Document updated" },
    { value: "invite", label: "Team invite" }
]);

const helpOptions = ref([
    { value: "docs", label: "Documentation" },
    { value: "faqs", label: "FAQs" },
    { value: "support", label: "Contact Support" }
]);
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
