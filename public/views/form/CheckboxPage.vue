
<template>
    <BaseLayout>
        <h1>Checkbox</h1>

        <p>
            The <code>CCheckbox</code> (alias: c-checkbox) component in the <code>@cmmv/ui</code> framework provides a customizable and versatile checkbox element. It supports dynamic labels, two-way binding using <code>v-model</code>, and customizable styles for various use cases. With built-in support for sizes, colors, and indeterminate states, the <code>c-checkbox</code> is ideal for forms, filters, and other interactive UI components.
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
                    <td class="border-b px-4 py-2">Boolean | Array</td>
                    <td class="border-b px-4 py-2">undefined</td>
                    <td class="border-b px-4 py-2">The value bound to the checkbox, supporting both single and array-based binding for groups of checkboxes.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">value</td>
                    <td class="border-b px-4 py-2">String | Number | Boolean</td>
                    <td class="border-b px-4 py-2">null</td>
                    <td class="border-b px-4 py-2">The value used when the checkbox is part of an array-based model.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">checked</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Initial checked state for the checkbox when not using <code>v-model</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">indeterminate</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Sets the checkbox to an indeterminate state, typically used for mixed selection groups.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">label</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Optional label displayed next to the checkbox.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Disables the checkbox, making it non-interactive.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Specifies the size of the checkbox. Options: <code>sm</code>, <code>md</code>, <code>lg</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-blue-600"</td>
                    <td class="border-b px-4 py-2">Background color of the checkbox when checked.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">borderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"border-blue-600"</td>
                    <td class="border-b px-4 py-2">Border color of the checkbox when checked.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text-white"</td>
                    <td class="border-b px-4 py-2">Text color of the check or indeterminate icon.</td>
                </tr>
            </tbody>
        </table>


        <h2 class="text-lg font-semibold mt-8">Basic Checkbox</h2>

        <p>
            The following example demonstrates a basic checkbox with dynamic label support. The label changes based on the <code>v-model</code> binding, reflecting the current state of the checkbox.
        </p>

        <card-docs
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-checkbox
                v-model="checked"
                :label="checked ? 'Checked' : 'Unchecked'"
            ></c-checkbox>
        </card-docs>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-checkbox v-model=&quot;checked&quot; :label=&quot;checked ? &#39;Checked&#39; : &#39;Unchecked&#39;&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import CCheckbox from &quot;@cmmv/ui/components/CCheckbox.vue&quot;;
import { ref } from &quot;vue&quot;;
const checked = ref(true);
&lt;/script&gt;</code>
        </pre>

        <!-- Size Variants -->
        <h2 class="text-lg font-semibold">Size Variants</h2>

        <p>
            The <code>CCheckbox</code> supports multiple sizes to fit different UI contexts. Use the <code>size</code> prop to customize the checkbox dimensions. Available sizes include <code>sm</code>, <code>md</code>, and <code>lg</code>.
        </p>

        <card-docs
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-checkbox label="Small" size="sm" />
            <c-checkbox label="Medium" size="md" />
            <c-checkbox label="Large" size="lg" />
        </card-docs>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-checkbox label=&quot;Small&quot; size=&quot;sm&quot; /&gt;
    &lt;c-checkbox label=&quot;Medium&quot; size=&quot;md&quot; /&gt;
    &lt;c-checkbox label=&quot;Large&quot; size=&quot;lg&quot; /&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Indeterminate State -->
        <h2 class="text-lg font-semibold">Indeterminate State</h2>

        <p>
            The <code>indeterminate</code> prop allows the checkbox to be displayed in an indeterminate state. This is useful for multi-selection scenarios where only some options are selected.
        </p>

        <card-docs
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-checkbox label="Indeterminate" indeterminate />
        </card-docs>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-checkbox label=&quot;Indeterminate&quot; indeterminate /&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Disabled State -->
        <h2 class="text-lg font-semibold">Disabled</h2>

        <p>
            The <code>disabled</code> prop can be used to disable the checkbox, making it non-interactive. This is useful for scenarios where the checkbox state should not be modified by the user.
        </p>

        <card-docs
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-checkbox label="Disabled" disabled />
        </card-docs>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-checkbox label=&quot;Disabled&quot; disabled /&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Color Variations -->
<h2>Color Variations</h2>

<p>
    The <code>CCheckbox</code> supports color customization to align with your application's design. Use the <code>bgColor</code> and <code>textColor</code> props to style the checkbox with any desired color. Below are examples of checkboxes with different color themes.
</p>

<card-docs
    class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
>
    <c-checkbox label="Blue" bgColor="bg-blue-600" borderColor="border-blue-800" textColor="text-white" checked />
    <c-checkbox label="Green" bgColor="bg-green-600" borderColor="border-green-800" textColor="text-white" checked />
    <c-checkbox label="Red" bgColor="bg-red-600" borderColor="border-red-800" textColor="text-white" checked />
    <c-checkbox label="Yellow" bgColor="bg-yellow-500" borderColor="border-yellow-800" textColor="text-white" checked />
</card-docs>

<pre>
    <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-checkbox 
        label="Blue" 
        bgColor="bg-blue-600" 
        borderColor="border-blue-800" 
        textColor="text-white" 
    /&gt;

    &lt;c-checkbox 
        label="Green" 
        bgColor="bg-green-600" 
        borderColor="border-green-800" 
        textColor="text-white" 
    /&gt;

    &lt;c-checkbox 
        label="Red" 
        bgColor="bg-red-600" 
        borderColor="border-red-800" 
        textColor="text-white" 
    /&gt;

    &lt;c-checkbox 
        label="Yellow" 
        bgColor="bg-yellow-500" 
        borderColor="border-yellow-800" 
        textColor="text-white" 
    /&gt;
&lt;/template&gt;</code>
</pre>

        <h2 class="text-lg font-semibold">Multiple Selection with Arrays</h2>

        <p>
            The <code>CCheckbox</code> now supports array-based bindings for managing multiple selections. Using the <code>v-model</code> directive with an array allows you to bind multiple checkboxes to a single model, making it easy to manage grouped options.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-6 flex flex-col  justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-checkbox v-model="selectedOptions" value="option1" label="Option 1" />
                <c-checkbox v-model="selectedOptions" value="option2" label="Option 2" />
                <c-checkbox v-model="selectedOptions" value="option3" label="Option 3" />
            </div>

            <div class="border-t border-t-zinc-700 mt-4 pt-4 items-center text-center">
                Selected Options: {{ selectedOptions }}
            </div>
        </card-docs>
        
<pre>
    <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-checkbox v-model=&quot;selectedOptions&quot; value=&quot;option1&quot; label=&quot;Option 1&quot; /&gt;
    &lt;c-checkbox v-model=&quot;selectedOptions&quot; value=&quot;option2&quot; label=&quot;Option 2&quot; /&gt;
    &lt;c-checkbox v-model=&quot;selectedOptions&quot; value=&quot;option3&quot; label=&quot;Option 3&quot; /&gt;

    &lt;div class=&quot;border-t border-t-zinc-700 mt-4 pt-4 items-center text-center&quot;&gt;
        Selected Options: &#123;&#123; selectedOptions &#125;&#125;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &quot;vue&quot;;
const selectedOptions = ref([]);
&lt;/script&gt;</code>
</pre>
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import CCheckbox from "@components/forms/CCheckbox.vue";

const checked = ref(true);
const selectedOptions = ref([]);
</script>