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


        <c-card variant="flat" class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <c-toggle v-model="liveToggle" label="Live Update Toggle" />
            <p class="text-gray-700 dark:text-white">Toggle Value: <span class="font-bold" v-html="liveToggle?.toString()"></span></p>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-toggle v-model=&quot;liveToggle&quot; label=&quot;Live Update Toggle&quot; /&gt;
    &lt;p&gt;Toggle Value: &#123;&#123; liveToggle &#125;&#125;&lt;/p&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref } from "vue";
const liveToggle = ref(false);
&lt;/script&gt;</code>
        </pre>

        <h3>Disabled</h3>

        <p>The <code>CToggle</code> component includes a <code>disabled</code> property that prevents user interaction with the toggle. When the <code>disabled</code> state is active, the toggle appears dimmed and its cursor changes to indicate that it is non-interactive. This is useful for situations where the toggle represents a feature or setting that cannot currently be modified.</p>

        <c-card variant="flat" class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <c-toggle v-model="toggle2" label="Disabled Toggle" disabled />
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-toggle v-model=&quot;toggle2&quot; label=&quot;Disabled Toggle&quot; disabled /&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Size Variants -->
        <h3>Size Variants</h3>

        <p>The <code>CToggle</code> component supports multiple sizes for better adaptability in different contexts. Available sizes include <code>sm</code>, <code>md</code>, and <code>lg</code>.</p>

        <c-card variant="flat" class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <c-toggle v-model="toggleSmall" size="sm" label="Small Toggle" />
            <c-toggle v-model="toggleMedium" size="md" label="Medium Toggle" />
            <c-toggle v-model="toggleLarge" size="lg" label="Large Toggle" />
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-toggle v-model=&quot;toggleSmall&quot; size=&quot;sm&quot; label=&quot;Small Toggle&quot; /&gt;
    &lt;c-toggle v-model=&quot;toggleMedium&quot; size=&quot;md&quot; label=&quot;Medium Toggle&quot; /&gt;
    &lt;c-toggle v-model=&quot;toggleLarge&quot; size=&quot;lg&quot; label=&quot;Large Toggle&quot; /&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Custom Colors -->
        <h3>Custom Colors</h3>

        <p>The <code>CToggle</code> component allows customization of the track and thumb colors through the <code>bgColor</code> and <code>thumbColor</code> props, respectively.</p>

        <c-card variant="flat" class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <c-toggle
                v-model="toggleCustom1"
                label="Custom Blue Track"
                bgColor="bg-blue-600 dark:bg-blue-900"
                trackColor="bg-blue-500 dark:bg-blue-700"
                thumbColor="bg-blue-400 dark:bg-blue-500"
                thumbBorderColor="border-blue-500"
            />
            <c-toggle
                v-model="toggleCustom2"
                label="Custom Red Track"
                bgColor="bg-red-900"
                trackColor="bg-red-700"
                thumbColor="bg-red-500"
                thumbBorderColor="border-red-500"
            />
            <c-toggle
                v-model="toggleCustom3"
                label="Custom Thumb"
                bgColor="bg-purple-900"
                trackColor="bg-purple-700"
                thumbColor="bg-purple-500"
                thumbBorderColor="border-purple-500"
            />
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-toggle
        v-model=&quot;toggleCustom1&quot;
        label=&quot;Custom Blue Track&quot;
        bgColor=&quot;bg-blue-600 dark:bg-blue-900&quot;
        trackColor=&quot;bg-blue-500 dark:bg-blue-700&quot;
        thumbColor=&quot;bg-blue-400 dark:bg-blue-500&quot;
    /&gt;
    &lt;c-toggle
        v-model=&quot;toggleCustom2&quot;
        label=&quot;Custom Red Track&quot;
        bgColor=&quot;bg-red-900&quot;
        trackColor=&quot;bg-red-700&quot;
        thumbColor=&quot;bg-red-500&quot;
    /&gt;
    &lt;c-toggle
        v-model=&quot;toggleCustom3&quot;
        label=&quot;Custom Thumb&quot;
        bgColor=&quot;bg-purple-900&quot;
        trackColor=&quot;bg-purple-700&quot;
        thumbColor=&quot;bg-purple-500&quot;
    /&gt;
&lt;/template&gt;</code>
        </pre>

        <PagePagination
            previous="Textarea"
            previousLink="/textarea"
            next="Dialog"
            nextLink="/dialog"
        />
    </BaseLayout>
</template>

<style scoped>
.code-hightlight {
    white-space: pre;
}
</style>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CCard from "@components/layout/CCard.vue";
const liveToggle = ref(false);
</script>
