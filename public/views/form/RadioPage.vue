<template>
    <BaseLayout>
        <h1>Radio</h1>

        <p>
            The <code>CRadio</code> (alias: c-radio) component in the <code>@cmmv/ui</code> framework provides a flexible and customizable radio button element. It supports dynamic labels, two-way binding using <code>v-model</code>, and customizable styles for various use cases. With built-in support for sizes, colors, and accessibility features, the <code>CRadio</code> is ideal for forms, filters, and other interactive UI components.
        </p>

        <table class="w-full text-left border-collapse border-0">
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
        </table>

        <h2 class="text-lg font-semibold mt-8">Basic Radio</h2>

        <p>
            The following example demonstrates a basic radio button with a dynamic label. The label changes based on the <code>v-model</code> binding, reflecting the current state of the selected option.
        </p>

        <card-docs class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
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
        </card-docs>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-radio v-model=&quot;selectedOption&quot; value=&quot;option1&quot; label=&quot;Option 1&quot; /&gt;
    &lt;c-radio v-model=&quot;selectedOption&quot; value=&quot;option2&quot; label=&quot;Option 2&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import CRadio from &quot;@cmmv/ui/components/CRadio.vue&quot;;
import { ref } from &quot;vue&quot;;
const selectedOption = ref(&quot;option1&quot;);
&lt;/script&gt;</code>
        </pre>

        <!-- Size Variants -->
        <h2 class="text-lg font-semibold">Size Variants</h2>

        <p>
            The <code>CRadio</code> supports multiple sizes to fit different UI contexts. Use the <code>size</code> prop to customize the radio button dimensions. Available sizes include <code>sm</code>, <code>md</code>, and <code>lg</code>.
        </p>

        <card-docs class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
            <c-radio label="Small" size="sm" value="small" checked />
            <c-radio label="Medium" size="md" value="medium" checked />
            <c-radio label="Large" size="lg" value="large" checked />
        </card-docs>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-radio label=&quot;Small&quot; size=&quot;sm&quot; value=&quot;small&quot; /&gt;
    &lt;c-radio label=&quot;Medium&quot; size=&quot;md&quot; value=&quot;medium&quot; /&gt;
    &lt;c-radio label=&quot;Large&quot; size=&quot;lg&quot; value=&quot;large&quot; /&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Disabled -->
        <h2 class="text-lg font-semibold">Disabled</h2>

        <p>
            The <code>disabled</code> prop can be used to disable the radio button, making it non-interactive.
        </p>

        <card-docs class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
            <c-radio label="Disabled" checked disabled />
        </card-docs>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-radio label=&quot;Disabled&quot; disabled /&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Color Variations -->
        <h2 class="text-lg font-semibold">Color Variations</h2>

        <p>
            The <code>CRadio</code> supports color customization. Use the <code>bgColor</code> and <code>borderColor</code> props to style the radio button with custom colors.
        </p>

        <card-docs class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
            <c-radio label="Blue" bgColor="bg-blue-600" borderColor="border-blue-800" value="blue" checked />
            <c-radio label="Green" bgColor="bg-green-600" borderColor="border-green-800" value="green" checked />
            <c-radio label="Red" bgColor="bg-red-600" borderColor="border-red-800" value="red" checked />
        </card-docs>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-radio label=&quot;Blue&quot; bgColor=&quot;bg-blue-600&quot; borderColor=&quot;border-blue-800&quot; value=&quot;blue&quot; /&gt;
    &lt;c-radio label=&quot;Green&quot; bgColor=&quot;bg-green-600&quot; borderColor=&quot;border-green-800&quot; value=&quot;green&quot; /&gt;
    &lt;c-radio label=&quot;Red&quot; bgColor=&quot;bg-red-600&quot; borderColor=&quot;border-red-800&quot; value=&quot;red&quot; /&gt;
&lt;/template&gt;</code>
        </pre>
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import CRadio from "@components/forms/CRadio.vue";

const selectedOption = ref("option1");
</script>
