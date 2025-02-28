<template>
    <BaseLayout>
        <h1>Input</h1>

        <p>The <code>CInput (alias: c-input)</code> component in the <code>@cmmv/ui</code> framework provides a flexible input field with advanced customization options for size, variants, rounding, and interaction states. It also supports validation, clearable functionality, and dynamic hints or error messages.</p>

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
        </table-docs>

        <!-- Basic Examples -->
        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-input v-model="example1" id="example1" label="Basic Input" />
                    <c-input v-model="example2" id="example2" label="Input with Placeholder" placeholder="Enter text..." />
                    <c-input v-model="example3" id="example3" label="Disabled Input" disabled />
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-input
        id="example1"
        label="Basic Input"
    /&gt;
    &lt;c-input
        id="example2"
        label="Input with Placeholder"
        placeholder="Enter text..."
    /&gt;
    &lt;c-input
        id="example3"
        label="Disabled Input"
        disabled
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const example1 = ref("");
const example2 = ref("");
const example3 = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Validation -->
        <h3>Validation</h3>

        <p>The <code>CInput</code> component supports custom validation rules. Error messages are displayed below the input field if a rule fails.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-input
                        id="validation"
                        label="Input with Validation"
                        :rules="[value => (value ? null : 'This field is required')]"
                        v-model="validableValue"
                    />
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-input
        id="validation"
        label="Input with Validation"
        :rules="[value => (value ? null : 'This field is required')]"
        v-model="validableValue"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const validableValue = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Size Variants -->
        <h3>Size Variants</h3>

        <p>The <code>CInput</code> component supports size variations for better responsiveness and design adaptability. Available sizes include <code>sm</code>, <code>md</code>, and <code>lg</code>.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-input v-model="example4" id="small" label="Small Input" size="sm" />
                    <c-input v-model="example5" id="medium" label="Medium Input" size="md" />
                    <c-input v-model="example6" id="large" label="Large Input" size="lg" />
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-input id="small" label="Small Input" size="sm" /&gt;
    &lt;c-input id="medium" label="Medium Input" size="md" /&gt;
    &lt;c-input id="large" label="Large Input" size="lg" /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Variants -->
        <h3>Variants</h3>

        <p>The <code>CInput</code> component supports visual <code>variant</code> styles, including <code>default</code>, <code>outlined</code>, and <code>filled</code>. These styles allow you to align the input field with your application's design language.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-input id="default" label="Default Variant" variant="default" />
                    <c-input id="outlined" label="Outlined Variant" variant="outlined" />
                    <c-input id="filled" label="Filled Variant" variant="filled" />
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-input id="default" label="Default Variant" variant="default" /&gt;
    &lt;c-input id="outlined" label="Outlined Variant" variant="outlined" /&gt;
    &lt;c-input id="filled" label="Filled Variant" variant="filled" /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Password -->
        <h3>Password</h3>

        <p>The <code>CInput</code> component supports password fields with an optional visibility toggle. By specifying the type="password" prop, the input field will display an eye icon for toggling the visibility of the password. This feature uses the IconEye and IconEyeSlash components to provide a seamless user experience.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-input
                        v-model="passwordValue"
                        id="password"
                        label="Password"
                        type="password"
                    />
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-input
        v-model="passwordValue"
        id="password"
        label="Password"
        type="password"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const passwordValue = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Clearable -->
        <h3>Clearable</h3>

        <p>The <code>clearable</code> property enables a button to clear the input field's content.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-input v-model="clearableValue" id="clearable" label="Clearable Input" clearable />
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-input
        v-model="clearableValue"
        id="clearable"
        label="Clearable Input"
        clearable
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const clearableValue = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Loading -->
        <h3>Loading</h3>

        <p>The <code>loading</code> property enables a button to clear the input field's content.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-input id="loading" label="Loading Input" loading />
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-input id="loading" label="Loading Input" loading /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Icon -->
        <h3>Icon</h3>

        <p>The Input component does not include a dedicated <code>icon</code> prop. Instead, it utilizes a slot to allow for greater flexibility in customizing the icon within the input field. This approach provides developers with more control over the design and behavior of the icon. By adding an icon through the icon slot, you can seamlessly align it to the left of the input field, enhancing the user experience with contextual cues, such as a magnifying glass for search fields.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-input id="search" label="Search Input">
                        <template #icon>
                            <IconMagnifyingGlass class="w-6 h-6 text-gray-600 dark:text-white" aria-hidden="true" />
                        </template>
                    </c-input>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-input id="search" label="Search Input"&gt;
        &lt;template #icon&gt;
            &lt;IconMagnifyingGlass class="w-6 h-6 text-gray-600 dark:text-white" aria-hidden="true" /&gt;
        &lt;/template&gt;
    &lt;/c-input&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Custom Colors -->
        <h3>Custom Colors</h3>

        <p>The <code>CInput</code> component supports <strong>custom colors</strong> for the input field, label, and border. You can use the following props to style the input field as per your application's design requirements:</p>

        <ul>
            <li><strong><code>bgColor</code></strong>: Adjusts the background color of the input.</li>
            <li><strong><code>textColor</code></strong>: Modifies the color of the input text and label.</li>
            <li><strong><code>borderColor</code></strong>: Sets the color and styles for the input's border during interactions such as focus.</li>
        </ul>

        <p>This flexibility allows for dynamic and visually appealing designs, tailored to specific use cases or branding guidelines.</p>

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
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Custom background color class for the input.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Custom text color class for the input and label.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">borderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Custom border color class for the input.</td>
                </tr>
            </tbody>
        </table-docs>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-input
                        id="custom"
                        label="Custom Input"
                        bgColor="bg-blue-600"
                        textColor="text-white"
                        borderColor="focus:ring focus:ring-purple-700 focus:ring-opacity-50"
                    ></c-input>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-input
        id="custom"
        label="Custom Input"
        bgColor="bg-blue-600"
        textColor="text-white"
        borderColor="focus:ring focus:ring-purple-700 focus:ring-opacity-50"
    &gt;&lt;/c-input&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="Form"
            previousLink="/form"
            next="Number Input"
            nextLink="/number-input"
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
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";

const example1 = ref("");
const example2 = ref("");
const example3 = ref("");
const example4 = ref("");
const example5 = ref("");
const example6 = ref("");
const clearableValue = ref("");
const validableValue = ref("");
const passwordValue = ref("");
</script>
