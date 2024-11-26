<template>
    <BaseLayout>
        <h1>Input</h1>
        
        <p>The <code>CInput</code> (alias: c-input) component in the <code>@cmmv/ui</code> framework provides a flexible input field with advanced customization options for size, variants, rounding, and interaction states. It also supports validation, clearable functionality, and dynamic hints or error messages.</p>

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
                    <td class="border-b px-4 py-2">The value bound to the input field using <code>v-model</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">label</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">undefined</td>
                    <td class="border-b px-4 py-2">The label displayed above the input field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">placeholder</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">undefined</td>
                    <td class="border-b px-4 py-2">Placeholder text shown in the input field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">type</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text"</td>
                    <td class="border-b px-4 py-2">The type of the input field (e.g., <code>text</code>, <code>number</code>, <code>password</code>).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">name</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">undefined</td>
                    <td class="border-b px-4 py-2">The name attribute for the input field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Specifies the size of the input field. Options: <code>sm</code>, <code>md</code>, <code>lg</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"default"</td>
                    <td class="border-b px-4 py-2">Controls the border radius of the input field. Options: <code>none</code>, <code>default</code>, <code>full</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">variant</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"default"</td>
                    <td class="border-b px-4 py-2">Styling variant for the input. Options: <code>default</code>, <code>outlined</code>, <code>filled</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Disables the input field, making it non-interactive.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">clearable</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Adds a clear button to the input field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rules</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Validation rules for the input field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">hint</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">null</td>
                    <td class="border-b px-4 py-2">Hint text displayed below the input field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">hintFixed</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Ensures the hint text remains visible regardless of focus.</td>
                </tr>
            </tbody>
        </table>


        <!-- Basic Examples -->
        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <div class="w-2/5">
                <c-input id="example1" label="Basic Input" />
                <c-input id="example2" label="Input with Placeholder" placeholder="Enter text..." />
                <c-input id="example3" label="Disabled Input" disabled />
            </div>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-input 
        id=&quot;example1&quot; 
        label=&quot;Basic Input&quot; 
    /&gt;
    &lt;c-input 
        id=&quot;example2&quot; 
        label=&quot;Input with Placeholder&quot; 
        placeholder=&quot;Enter text...&quot; 
    /&gt;
    &lt;c-input 
        id=&quot;example3&quot; 
        label=&quot;Disabled Input&quot; 
        disabled 
    /&gt;
&lt;/template&gt;

&lt;script&gt;
import CInput from &quot;@cmmv/ui/components/CInput.vue&quot;;
&lt;/script&gt;</code>
        </pre>

        <!-- Size Variants -->
        <h2>Size Variants</h2>
        <p>The <code>CInput</code> component supports size variations for better responsiveness and design adaptability. Available sizes include <code>sm</code>, <code>md</code>, and <code>lg</code>.</p>

        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <div class="w-2/5">
                <c-input id="small" label="Small Input" size="sm" />
                <c-input id="medium" label="Medium Input" size="md" />
                <c-input id="large" label="Large Input" size="lg" />
            </div>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-input 
        id=&quot;small&quot; 
        label=&quot;Small Input&quot; 
        size=&quot;sm&quot; 
    /&gt;
    &lt;c-input 
        id=&quot;medium&quot; 
        label=&quot;Medium Input&quot; 
        size=&quot;md&quot; 
    /&gt;
    &lt;c-input 
        id=&quot;large&quot; 
        label=&quot;Large Input&quot; 
        size=&quot;lg&quot; 
    /&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Variants -->
        <h2>Variants</h2>
        <p>The <code>CInput</code> component supports visual <code>variant</code> styles, including <code>default</code>, <code>outlined</code>, and <code>filled</code>. These styles allow you to align the input field with your application's design language.</p>

        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <div class="w-2/5">
                <c-input id="default" label="Default Variant" variant="default" />
                <c-input id="outlined" label="Outlined Variant" variant="outlined" />
                <c-input id="filled" label="Filled Variant" variant="filled" />
            </div>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-input id=&quot;default&quot; label=&quot;Default Variant&quot; variant=&quot;default&quot; /&gt;
    &lt;c-input id=&quot;outlined&quot; label=&quot;Outlined Variant&quot; variant=&quot;outlined&quot; /&gt;
    &lt;c-input id=&quot;filled&quot; label=&quot;Filled Variant&quot; variant=&quot;filled&quot; /&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Validation -->
        <h2>Validation</h2>
        <p>The <code>CInput</code> component supports custom validation rules. Error messages are displayed below the input field if a rule fails.</p>

        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <div class="w-2/5">
                <c-input 
                    id="validation" 
                    label="Input with Validation" 
                    :rules="[value => (value ? null : 'This field is required')]" 
                />
            </div>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-input 
        id=&quot;validation&quot; 
        label=&quot;Input with Validation&quot; 
        :rules=&quot;[value =&gt; (value ? null : 'This field is required')]&quot; 
    /&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Clearable -->
        <h2>Clearable</h2>
        <p>The <code>clearable</code> property enables a button to clear the input field's content.</p>

        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <div class="w-2/5">
                <c-input id="clearable" label="Clearable Input" clearable />
            </div>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-input id=&quot;clearable&quot; label=&quot;Clearable Input&quot; clearable /&gt;
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
import BaseLayout from "../layout/BaseLayout.vue";
</script>
