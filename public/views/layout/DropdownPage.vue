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
                    <td>Defines dropdown positioning: <code>top-left</code>, <code>top-right</code>, <code>bottom-left</code>, <code>bottom-right</code>, <code>bottom-center</code>, <code>top-center</code>.</td>
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
                        <c-button
                            size="lg"
                            class="px-4 py-2 bg-blue-500 text-white rounded-md "
                        >
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
                        <c-button
                            size="lg"
                            bgColor="bg-green-600 hover:bg-green-500"
                            class="px-4 py-2 bg-green-500 text-white rounded-md"
                        >
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
            You can control where the dropdown appears relative to the activator button using the <code>position</code> prop.
            The default position is <code>bottom-left</code>, but you can choose from other options like <code>top-left</code>, <code>top-right</code>, <code>bottom-right</code>, and <code>bottom-center</code>.
        </p>

        <card-docs>
            <div class="p-40 grid gap-6 h-[600px]">
                <c-dropdown v-model="selectedItem" :options="menuOptions" position="top-left">
                    <template #activator>
                        <button class="px-4 py-2 bg-gray-500 text-white rounded-md">
                            Top Left
                        </button>
                    </template>
                </c-dropdown>

                <c-dropdown v-model="selectedItem" :options="menuOptions" position="top-right">
                    <template #activator>
                        <button class="px-4 py-2 bg-gray-500 text-white rounded-md">
                            Top Right
                        </button>
                    </template>
                </c-dropdown>

                <c-dropdown v-model="selectedItem" :options="menuOptions" position="bottom-left">
                    <template #activator>
                        <button class="px-4 py-2 bg-gray-500 text-white rounded-md">
                            Bottom Left
                        </button>
                    </template>
                </c-dropdown>

                <c-dropdown v-model="selectedItem" :options="menuOptions" position="bottom-right">
                    <template #activator>
                        <button class="px-4 py-2 bg-gray-500 text-white rounded-md">
                            Bottom Right
                        </button>
                    </template>
                </c-dropdown>

                <c-dropdown v-model="selectedItem" :options="menuOptions" position="bottom-center">
                    <template #activator>
                        <button class="px-4 py-2 bg-gray-500 text-white rounded-md">
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
            &lt;button class="px-4 py-2 bg-gray-500 text-white rounded-md"&gt;
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
            &lt;button class="px-4 py-2 bg-gray-500 text-white rounded-md"&gt;
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
            &lt;button class="px-4 py-2 bg-gray-500 text-white rounded-md"&gt;
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
            &lt;button class="px-4 py-2 bg-gray-500 text-white rounded-md"&gt;
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
            &lt;button class="px-4 py-2 bg-gray-500 text-white rounded-md"&gt;
                Bottom Center
            &lt;/button&gt;
        &lt;/template&gt;
    &lt;/c-dropdown&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="Card"
            previousLink="/card"
            next="Sidebar"
            nextLink="/sidebar"
        />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import IconCheckCircle from "@components/icons/IconCheckCircle.vue";

const selectedItem = ref(null);
const menuOptions = ref([
    { value: "home", label: "Home" },
    { value: "profile", label: "Profile" },
    { value: "settings", label: "Settings" }
]);
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
