<template>
    <BaseLayout>
        <h1>Toggle</h1>

        <p>The <code>CToggle (alias: c-toggle)</code> component in the <code>@cmmv/ui</code> framework provides a customizable switch element with various sizes, states, and interactive ripple effects. It supports binding via <code>v-model</code> and is ideal for enabling or disabling settings.</p>

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
                    <td class="border-b px-4 py-2">modelValue</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">undefined</td>
                    <td class="border-b px-4 py-2">The binding value for the toggle state. Allows usage with <code>v-model</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">checked</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">The initial state of the toggle if <code>v-model</code> is not used.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">label</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Text label displayed next to the toggle.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Disables the toggle and prevents user interaction.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Controls the size of the toggle. Options: <code>sm</code>, <code>md</code>, <code>lg</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-blue-600"</td>
                    <td class="border-b px-4 py-2">Custom background color for the track when the toggle is checked.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">thumbColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-white"</td>
                    <td class="border-b px-4 py-2">Custom color for the thumb (toggle button).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">trackColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-blue-600"</td>
                    <td class="border-b px-4 py-2">Custom color for the track when checked.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <c-toggle v-model="liveToggle" label="Live Update Toggle" />
                <p class="text-gray-700 dark:text-white">Toggle Value: <span class="font-bold" v-html="liveToggle?.toString()"></span></p>
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-toggle v-model="liveToggle" label="Live Update Toggle" /&gt;
    &lt;p&gt;Toggle Value: {{ liveToggle }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const liveToggle = ref(false);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Disabled</h3>

        <p>The <code>CToggle</code> component includes a <code>disabled</code> property that prevents user interaction with the toggle. When the <code>disabled</code> state is active, the toggle appears dimmed and its cursor changes to indicate that it is non-interactive. This is useful for situations where the toggle represents a feature or setting that cannot currently be modified.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <c-toggle v-model="toggle2" label="Disabled Toggle" disabled />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-toggle v-model="toggle2" label="Disabled Toggle" disabled /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const toggle2 = ref(false);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Size Variants -->
        <h3>Size Variants</h3>

        <p>The <code>CToggle</code> component supports multiple sizes for better adaptability in different contexts. Available sizes include <code>sm</code>, <code>md</code>, and <code>lg</code>.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <c-toggle v-model="toggleSmall" size="sm" label="Small Toggle" />
                <c-toggle v-model="toggleMedium" size="md" label="Medium Toggle" />
                <c-toggle v-model="toggleLarge" size="lg" label="Large Toggle" />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-toggle v-model="toggleSmall" size="sm" label="Small Toggle" /&gt;
    &lt;c-toggle v-model="toggleMedium" size="md" label="Medium Toggle" /&gt;
    &lt;c-toggle v-model="toggleLarge" size="lg" label="Large Toggle" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const toggleSmall = ref(false);
const toggleMedium = ref(false);
const toggleLarge = ref(false);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Custom Colors -->
        <h3>Custom Colors</h3>

        <p>The <code>CToggle</code> component allows customization of the track and thumb colors through the <code>bgColor</code> and <code>thumbColor</code> props, respectively.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <c-toggle
                    v-model="toggleCustom1"
                    label="Custom Blue Track"
                    bgColor="bg-blue-600 dark:bg-blue-900"
                    trackColor="bg-blue-500 dark:bg-blue-700"
                    thumbColor="bg-white"
                    thumbBorderColor="border-blue-500"
                />
                <c-toggle
                    v-model="toggleCustom2"
                    label="Custom Red Track"
                    bgColor="bg-red-900"
                    trackColor="bg-red-700"
                    thumbColor="bg-white"
                    thumbBorderColor="border-red-500"
                />
                <c-toggle
                    v-model="toggleCustom3"
                    label="Custom Thumb"
                    bgColor="bg-purple-900"
                    trackColor="bg-purple-700"
                    thumbColor="bg-white"
                    thumbBorderColor="border-purple-500"
                />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-toggle
        v-model="toggleCustom1"
        label="Custom Blue Track"
        bgColor="bg-blue-600 dark:bg-blue-900"
        trackColor="bg-blue-500 dark:bg-blue-700"
        thumbColor="bg-white"
        thumbBorderColor="border-blue-500"
    /&gt;
    &lt;c-toggle
        v-model="toggleCustom2"
        label="Custom Red Track"
        bgColor="bg-red-900"
        trackColor="bg-red-700"
        thumbColor="bg-white"
        thumbBorderColor="border-red-500"
    /&gt;
    &lt;c-toggle
        v-model="toggleCustom3"
        label="Custom Thumb"
        bgColor="bg-purple-900"
        trackColor="bg-purple-700"
        thumbColor="bg-white"
        thumbBorderColor="border-purple-500"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const toggleCustom1 = ref(false);
const toggleCustom2 = ref(false);
const toggleCustom3 = ref(false);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="Timepicker"
            previousLink="/timepicker"
            next="Dialog"
            nextLink="/dialog"
        />
    </BaseLayout>
</template>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const liveToggle = ref(false);
const toggle2 = ref(false);
const toggleSmall = ref(false);
const toggleMedium = ref(false);
const toggleLarge = ref(false);
const toggleCustom1 = ref(false);
const toggleCustom2 = ref(false);
const toggleCustom3 = ref(false);
</script>
