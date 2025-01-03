<template>
    <BaseLayout>
        <h1>Autocomplete</h1>

        <p>The <code>CAutocomplete</code> (alias: c-autocomplete) component in the <code>@cmmv/ui</code> framework provides a user-friendly autocomplete input field with advanced customization options for size, variants, rounding, and interaction states. It supports real-time filtering, selection, and displays a dropdown for suggested values.</p>

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
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">The value bound to the autocomplete field using <code>v-model</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">options</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">The list of options for the autocomplete dropdown, formatted as <code>{ value: '', label: '' }</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">label</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">undefined</td>
                    <td class="border-b px-4 py-2">The label displayed above the autocomplete field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">placeholder</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">undefined</td>
                    <td class="border-b px-4 py-2">Placeholder text shown in the autocomplete field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Specifies the size of the autocomplete field. Options: <code>sm</code>, <code>md</code>, <code>lg</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"default"</td>
                    <td class="border-b px-4 py-2">Controls the border radius of the autocomplete field. Options: <code>none</code>, <code>default</code>, <code>full</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">variant</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"default"</td>
                    <td class="border-b px-4 py-2">Styling variant for the autocomplete. Options: <code>default</code>, <code>outlined</code>, <code>filled</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Disables the autocomplete field, making it non-interactive.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Custom background color class for the autocomplete.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Custom text color class for the autocomplete and label.</td>
                </tr>
            </tbody>
        </table>

        <!-- Basic Examples -->
        <h2>Basic Examples</h2>
        
        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <div class="lg:w-2/5 w-full">
                <c-autocomplete 
                    id="example1" 
                    label="Basic Autocomplete" 
                    v-model="basicValue"
                    :options="basicOptions" 
                />
            </div>

            Value: {{ basicValue }}
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-autocomplete 
        id=&quot;example1&quot; 
        label=&quot;Basic Autocomplete&quot; 
        :options=&quot;basicOptions&quot; 
    /&gt;

    &lt;c-autocomplete 
        id=&quot;example2&quot; 
        label=&quot;Autocomplete with Placeholder&quot; 
        placeholder=&quot;Start typing...&quot; 
        :options=&quot;basicOptions&quot; 
    /&gt;

    &lt;c-autocomplete 
        id=&quot;example3&quot; 
        label=&quot;Disabled Autocomplete&quot; 
        :options=&quot;basicOptions&quot; 
        disabled 
    /&gt;
&lt;/template&gt;

&lt;script&gt;
import CAutocomplete from &quot;@cmmv/ui/components/CAutocomplete.vue&quot;;

const basicOptions = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" }
];
&lt;/script&gt;</code>
        </pre>

        <!-- Size Variants -->
        <h2>Size Variants</h2>
        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <div class="lg:w-2/5 w-full">
                <c-autocomplete id="small" label="Small Autocomplete" size="sm" :options="basicOptions" />
                <c-autocomplete id="medium" label="Medium Autocomplete" size="md" :options="basicOptions" />
                <c-autocomplete id="large" label="Large Autocomplete" size="lg" :options="basicOptions" />
            </div>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-autocomplete id=&quot;small&quot;  label=&quot;Small Autocomplete&quot; size=&quot;sm&quot; :options=&quot;basicOptions&quot; /&gt;
    &lt;c-autocomplete id=&quot;medium&quot; label=&quot;Medium Autocomplete&quot; size=&quot;md&quot; :options=&quot;basicOptions&quot; /&gt;
    &lt;c-autocomplete id=&quot;large&quot; label=&quot;Large Autocomplete&quot; size=&quot;lg&quot; :options=&quot;basicOptions&quot; /&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Validation -->
        <h2>Validation</h2>
        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <div class="lg:w-2/5 w-full">
                <c-autocomplete 
                    id="validation" 
                    label="Autocomplete with Validation" 
                    :rules="[value => (value ? null : 'This field is required')]" 
                    :options="basicOptions" 
                    v-model="validableValue"
                />
            </div>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-autocomplete 
        id=&quot;validation&quot; 
        label=&quot;Autocomplete with Validation&quot; 
        :rules=&quot;[value =&gt; (value ? null : 'This field is required')]&quot; 
        :options=&quot;basicOptions&quot; 
    /&gt;
&lt;/template&gt;</code>
        </pre>
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

const basicOptions = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" }
];

const basicValue = ref("");
const validableValue = ref("");
</script>
