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
                <tr>
                    <td class="border-b px-4 py-2">floatingLabel</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Determines if the label floats outside the input when it receives focus.</td>
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
    &lt;c-input v-model="example1" id="example1" label="Basic Input" /&gt;
    &lt;c-input v-model="example2" id="example2" label="Input with Placeholder" placeholder="Enter text..." /&gt;
    &lt;c-input v-model="example3" id="example3" label="Disabled Input" disabled /&gt;
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

        <!-- Floating Label -->
        <h3>Floating Label</h3>

        <p>The <code>CInput</code> component supports two different label behavior styles. By default, the label stays inside the input and scales down when the input receives focus. Alternatively, with <code>floatingLabel</code> set to <code>true</code>, the label completely moves out of the input, floating above it when it receives focus.</p>

        <p><strong>Note:</strong> When an icon is added to the input using the <code>#icon</code> slot, the label should use the floating behavior to prevent overlapping with the icon.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-input
                        v-model="defaultLabel"
                        id="default-label"
                        label="Default Label (inside)"
                        class="mb-4"
                    />
                    <c-input
                        v-model="floatingLabelValue"
                        id="floating-label"
                        label="Floating Label (outside)"
                        floatingLabel
                    />
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;!-- Default label (stays inside the input when focused) --&gt;
    &lt;c-input
        v-model="defaultLabel"
        id="default-label"
        label="Default Label (inside)"
    /&gt;

    &lt;!-- Floating label (moves outside the input when focused) --&gt;
    &lt;c-input
        v-model="floatingLabelValue"
        id="floating-label"
        label="Floating Label (outside)"
        floatingLabel
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const defaultLabel = ref("");
const floatingLabelValue = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Icon -->
        <h3>Icon</h3>

        <p>The Input component does not include a dedicated <code>icon</code> prop. Instead, it utilizes a slot to allow for greater flexibility in customizing the icon within the input field. This approach provides developers with more control over the design and behavior of the icon. By adding an icon through the icon slot, you can seamlessly align it to the left of the input field, enhancing the user experience with contextual cues, such as a magnifying glass for search fields.</p>

        <p><strong>Note:</strong> When an icon is present, it's recommended to use the <code>floatingLabel</code> property to ensure the label doesn't overlap with the icon.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-input id="search" label="Search Input" floatingLabel>
                        <template #icon>
                            <IconMagnifyingGlass class="w-6 h-6 text-gray-600 dark:text-white" aria-hidden="true" />
                        </template>
                    </c-input>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-input id="search" label="Search Input" floatingLabel&gt;
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

        <!-- Grouped Inputs -->
        <h3>Grouped Inputs</h3>

        <p>The <code>CInput</code> component can be combined with other components to create compound form controls. By using flexbox utilities from Tailwind CSS, you can create seamlessly integrated input groups that function as a single component.</p>

        <!-- Input with Button -->
        <h4>Input with Button</h4>

        <p>A common UI pattern is to combine a text input with a button, such as for search forms or code verification inputs. This example shows how to create an input field with a button positioned to its right.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-3/5 w-full">
                    <div class="flex items-stretch">
                        <c-input
                            v-model="searchQuery"
                            id="search-with-button"
                            label="Search"
                            placeholder="Search anything..."
                            customClass="!rounded-r-none !border-r-0"
                        >

                        </c-input>

                        <c-button
                            variant="primary"
                            size="lg"
                            class="!rounded-l-none mb-[1.25rem] w-[100px] px-6 flex items-center justify-center"
                            @click="handleSearch"
                        >
                            <IconMagnifyingGlass class="w-6 h-6 text-white mr-2" aria-hidden="true" /> Search
                        </c-button>
                    </div>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div class="flex items-stretch"&gt;
        &lt;c-input
            v-model="searchQuery"
            id="search-with-button"
            label="Search"
            placeholder="Search anything..."
            customClass="!rounded-r-none !border-r-0"
        &gt;
        &lt;/c-input&gt;
        &lt;c-button
            variant="primary"
            size="lg"
            class="!rounded-l-none mb-[1.25rem] w-[100px] px-2 flex items-center justify-center"
            @click="handleSearch"
        &gt;
            &lt;IconMagnifyingGlass class="w-6 h-6 text-white mr-2" aria-hidden="true" /&gt; Search
        &lt;/c-button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const searchQuery = ref("");

function handleSearch() {
    // Handle search functionality
    console.log("Searching for:", searchQuery.value);
}
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Input with Combobox -->
        <h4>Input with Combobox</h4>

        <p>Another useful pattern is combining an input with a combobox (dropdown) for cases like entering values with units or currency selection. This example demonstrates how to create an input field with an attached combobox.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[300px]">
                <div class="lg:w-2/5 w-full">
                    <div class="flex items-stretch">
                        <c-input
                            v-model="amountValue"
                            id="amount-with-select"
                            label="Amount"
                            type="number"
                            floatingLabel
                            customClass="!rounded-r-none border-r-1"
                        />

                        <c-combobox
                            v-model="selectedCurrency"
                            :options="currencyOptions"
                            size="lg"
                            class="!rounded-l-none min-w-[120px]"
                            customClass="!rounded-l-none border-l-0"
                        />
                    </div>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div class="flex items-stretch"&gt;
        &lt;c-input
            v-model="amountValue"
            id="amount-with-select"
            label="Amount"
            type="number"
            floatingLabel
            customClass="!rounded-r-none border-r-1"
        /&gt;

        &lt;c-combobox
            v-model="selectedCurrency"
            :options="currencyOptions"
            size="lg"
            class="!rounded-l-none min-w-[120px]"
            customClass="!rounded-l-none border-l-0"
        /&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const amountValue = ref("");
const selectedCurrency = ref("USD");
const currencyOptions = [
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
    { label: "GBP", value: "GBP" },
    { label: "JPY", value: "JPY" }
];
&lt;/script&gt;</code></pre>
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
const defaultLabel = ref("");
const floatingLabelValue = ref("");
const searchQuery = ref("");
const amountValue = ref("");
const selectedCurrency = ref("USD");
const currencyOptions = [
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
    { label: "GBP", value: "GBP" },
    { label: "JPY", value: "JPY" }
];

function handleSearch() {
    // Handle search functionality
    console.log("Searching for:", searchQuery.value);
}
</script>
