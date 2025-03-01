<template>
    <BaseLayout>
        <h1>Radio</h1>

        <p>
            The <code>CRadio (alias: c-radio)</code> component in the <code>@cmmv/ui</code> framework provides a flexible and customizable radio button element. It supports dynamic labels, two-way binding using <code>v-model</code>, and customizable styles for various use cases. With built-in support for sizes, colors, and accessibility features, the <code>CRadio</code> is ideal for forms, filters, and other interactive UI components.
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
                    <td class="border-b px-4 py-2">modelValue</td>
                    <td class="border-b px-4 py-2">String | Number</td>
                    <td class="border-b px-4 py-2">undefined</td>
                    <td class="border-b px-4 py-2">The value bound to the radio group using <code>v-model</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">value</td>
                    <td class="border-b px-4 py-2">String | Number</td>
                    <td class="border-b px-4 py-2">null</td>
                    <td class="border-b px-4 py-2">The specific value of the radio button within the group.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">label</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Optional label displayed next to the radio button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Disables the radio button, making it non-interactive.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Specifies the size of the radio button. Options: <code>sm</code>, <code>md</code>, <code>lg</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-blue-600"</td>
                    <td class="border-b px-4 py-2">Background color of the radio button when selected.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">borderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"border-blue-600"</td>
                    <td class="border-b px-4 py-2">Border color of the radio button when selected.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Radio</h3>

        <p>
            The following example demonstrates a basic radio button with a dynamic label. The label changes based on the <code>v-model</code> binding, reflecting the current state of the selected option.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-radio
                    v-model="selectedOption"
                    value="option1"
                    label="Option 1"
                ></c-radio>
                <c-radio
                    v-model="selectedOption"
                    value="option2"
                    label="Option 2"
                ></c-radio>
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-radio
        v-model="selectedOption"
        value="option1"
        label="Option 1"
    /&gt;
    &lt;c-radio
        v-model="selectedOption"
        value="option2"
        label="Option 2"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const selectedOption = ref("option1");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Size Variants -->
        <h3>Size Variants</h3>

        <p>
            The <code>CRadio</code> supports multiple sizes to fit different UI contexts. Use the <code>size</code> prop to customize the radio button dimensions. Available sizes include <code>sm</code>, <code>md</code>, and <code>lg</code>.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-radio label="Small" size="sm" value="small" checked />
                <c-radio label="Medium" size="md" value="medium" checked />
                <c-radio label="Large" size="lg" value="large" checked />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-radio label="Small" size="sm" value="small" checked /&gt;
    &lt;c-radio label="Medium" size="md" value="medium" checked /&gt;
    &lt;c-radio label="Large" size="lg" value="large" checked /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Disabled -->
        <h3>Disabled</h3>

        <p>
            The <code>disabled</code> prop can be used to disable the radio button, making it non-interactive.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-radio label="Disabled" checked disabled />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-radio label="Disabled" disabled checked /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Color Variations -->
        <h3>Color Variations</h3>

        <p>
            The <code>CRadio</code> supports color customization. Use the <code>bgColor</code> and <code>borderColor</code> props to style the radio button with custom colors.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-radio label="Blue" bgColor="bg-blue-600" borderColor="border-blue-800" value="blue" checked />
                <c-radio label="Green" bgColor="bg-green-600" borderColor="border-green-800" value="green" checked />
                <c-radio label="Red" bgColor="bg-red-600" borderColor="border-red-800" value="red" checked />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-radio
        label="Blue"
        bgColor="bg-blue-600"
        borderColor="border-blue-800"
        value="blue"
        checked
    /&gt;
    &lt;c-radio
        label="Green"
        bgColor="bg-green-600"
        borderColor="border-green-800"
        value="green"
        checked
    /&gt;
    &lt;c-radio
        label="Red"
        bgColor="bg-red-600"
        borderColor="border-red-800"
        value="red"
        checked
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="OTP Input"
            previousLink="/otp-input"
            next="Slider"
            nextLink="/slider"
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
import CRadio from "@components/forms/CRadio.vue";

const selectedOption = ref("option1");
</script>
