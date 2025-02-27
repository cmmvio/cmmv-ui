<template>
    <BaseLayout>
        <h1>Combobox</h1>

        <p>
            The <code>CCombobox (alias: c-combobox)</code> component in the <code>@cmmv/ui</code> framework provides a customizable dropdown menu for selecting options from a list. It supports dynamic data binding, custom styling, and advanced interaction features, making it ideal for forms, filters, and navigation menus.
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
                    <td class="border-b px-4 py-2"><code>""</code></td>
                    <td class="border-b px-4 py-2">The value bound to the dropdown field using <code>v-model</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">options</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2"><code>[]</code></td>
                    <td class="border-b px-4 py-2">The list of options formatted as <code>{ value: '', label: '' }</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">label</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>undefined</code></td>
                    <td class="border-b px-4 py-2">The label displayed above the dropdown field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">placeholder</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"Select an option"</code></td>
                    <td class="border-b px-4 py-2">Placeholder text shown when no option is selected.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"md"</code></td>
                    <td class="border-b px-4 py-2">Controls the dropdown size. Options: <code>sm</code>, <code>md</code>, <code>lg</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"default"</code></td>
                    <td class="border-b px-4 py-2">Defines the border radius. Options: <code>none</code>, <code>default</code>, <code>full</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">variant</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"default"</code></td>
                    <td class="border-b px-4 py-2">Defines the dropdown style. Options: <code>default</code>, <code>outlined</code>, <code>filled</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2"><code>false</code></td>
                    <td class="border-b px-4 py-2">Disables the dropdown field, making it non-interactive.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"bg-white dark:bg-neutral-900"</code></td>
                    <td class="border-b px-4 py-2">Custom background color class for the dropdown.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>""</code></td>
                    <td class="border-b px-4 py-2">Custom text color class for the dropdown text.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">borderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"focus:ring focus:ring-zinc-700 focus:ring-opacity-50"</code></td>
                    <td class="border-b px-4 py-2">Custom border and focus ring styles for the dropdown.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            The basic usage of the <code>CCombobox</code> component is simple and effective. By binding it to a variable using <code>v-model</code>,
            you can dynamically update and retrieve the selected value. The component also supports labels and a set of predefined options.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full max-w-[400px]">
                    <c-combobox v-model="basicValue" label="Select an option" :options="basicOptions" />
                    <p class="mt-2 text-gray-600 dark:text-gray-300">Selected: {{ basicValue }}</p>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-combobox
        v-model="basicValue"
        label="Select an option"
        :options="basicOptions"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const basicOptions = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" }
];

const basicValue = ref(1);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Size Variants</h3>

        <p>
            The <code>CCombobox</code> component supports multiple size variations to fit different UI layouts.
            You can choose between small, medium, and large sizes depending on the context of your application.
            Use <code>size="sm"</code> for compact elements and <code>size="lg"</code> for prominent dropdowns.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full max-w-[400px] space-y-4">
                    <c-combobox v-model="sizeSm" label="Small" size="sm" :options="basicOptions" />
                    <c-combobox v-model="sizeMd" label="Medium" size="md" :options="basicOptions" />
                    <c-combobox v-model="sizeLg" label="Large" size="lg" :options="basicOptions" />
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-combobox v-model="sizeSm" label="Small" size="sm" :options="basicOptions" /&gt;
    &lt;c-combobox v-model="sizeMd" label="Medium" size="md" :options="basicOptions" /&gt;
    &lt;c-combobox v-model="sizeLg" label="Large" size="lg" :options="basicOptions" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const basicOptions = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" }
];

const sizeSm = ref(1);
const sizeMd = ref(1);
const sizeLg = ref(1);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Variants</h3>

        <p>
            You can customize the appearance of the dropdown using the <code>variant</code> prop.
            The available styles include <code>default</code>, <code>outlined</code>, and <code>filled</code>,
            each providing a different visual style to match your application's design.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full max-w-[400px] space-y-4">
                    <c-combobox v-model="variantDefault" label="Default" variant="default" :options="basicOptions" />
                    <c-combobox v-model="variantOutlined" label="Outlined" variant="outlined" :options="basicOptions" />
                    <c-combobox v-model="variantFilled" label="Filled" variant="filled" :options="basicOptions" />
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-combobox
        v-model="variantDefault"
        label="Default"
        variant="default"
        :options="basicOptions"
    /&gt;

    &lt;c-combobox
        v-model="variantOutlined"
        label="Outlined"
        variant="outlined"
        :options="basicOptions"
    /&gt;

    &lt;c-combobox
        v-model="variantFilled"
        label="Filled"
        variant="filled"
        :options="basicOptions"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Rounded Corners</h3>

        <p>
            The <code>rounded</code> prop allows you to control the border radius of the combobox.
            Choose from <code>none</code> (square corners), <code>default</code> (slightly rounded),
            or <code>full</code> (fully rounded) to match your design preferences.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full max-w-[400px] space-y-4">
                    <c-combobox v-model="roundedNone" label="No Rounding" rounded="none" :options="basicOptions" />
                    <c-combobox v-model="roundedDefault" label="Default Rounding" rounded="default" :options="basicOptions" />
                    <c-combobox v-model="roundedFull" label="Full Rounding" rounded="full" :options="basicOptions" />
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-combobox
        v-model="roundedNone"
        label="No Rounding"
        rounded="none"
        :options="basicOptions"
    /&gt;

    &lt;c-combobox
        v-model="roundedDefault"
        label="Default Rounding"
        rounded="default"
        :options="basicOptions"
    /&gt;

    &lt;c-combobox
        v-model="roundedFull"
        label="Full Rounding"
        rounded="full"
        :options="basicOptions"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Disabled State</h3>

        <p>
            If you need to prevent users from interacting with the dropdown, you can use the <code>disabled</code> prop.
            This ensures that the dropdown remains visible but non-interactive, which can be useful for form validation or
            conditional input scenarios.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full max-w-[400px]">
                    <c-combobox v-model="disabledExample" label="Disabled Dropdown" :options="basicOptions" disabled />
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-combobox
        v-model="disabledExample"
        label="Disabled Dropdown"
        :options="basicOptions"
        disabled
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const disabledExample = ref(1);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Template</h3>

        <p>
            The <code>CCombobox</code> component allows full customization of both the selected value display and the options list using Vue slots.
            This is useful for presenting complex data such as country flags, icons, or formatted text.
            By using the <code>#selected</code> and <code>#option</code> slots, you can define how the selected value appears
            and how each option is rendered in the dropdown.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full max-w-[400px]">
                    <c-combobox
                        v-model="languageValue"
                        label="Languages Dropdown"
                        :options="languageOptions"
                    >
                        <template #selected="{ data }">
                            <div class="flex flex-1 -mt-1">
                                <c-flag :iso="data.iso" size="sm" riyb />
                                <div class="ml-2 mt-0.5">{{ data.label }}</div>
                            </div>
                        </template>

                        <template #option="{ data }">
                            <div class="flex flex-1">
                                <c-flag :iso="data.iso" size="sm" riyb />
                                <div class="ml-2 mt-0.5">{{ data.label }}</div>
                            </div>
                        </template>
                    </c-combobox>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-combobox
        v-model="languageValue"
        label="Languages Dropdown"
        :options="languageOptions"
    &gt;
        &lt;template #selected="{ data }"&gt;
            &lt;div class="flex items-center"&gt;
                &lt;c-flag :iso="data.iso" size="sm" /&gt;
                &lt;div class="ml-2"&gt;&#123;&#123; data.label &#125;&#125;&lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        &lt;template #option="{ data }"&gt;
            &lt;div class="flex items-center"&gt;
                &lt;c-flag :iso="data.iso" size="sm" /&gt;
                &lt;div class="ml-2"&gt;&#123;&#123; data.label &#125;&#125;&lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-combobox&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const languageOptions = [
    { value: 1, label: "English", iso: "us" },
    { value: 2, label: "Português (Brasil)", iso: "br" },
    { value: 3, label: "Español", iso: "es" }
];

const languageValue = ref(1);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>


        <PagePagination
            previous="Checkbox"
            previousLink="/checkbox"
            next="Form"
            nextLink="/form"
        />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";

const basicOptions = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" }
];

const languageOptions = [
    { value: 1, label: "English", iso: "us" },
    { value: 2, label: "Português (Brasil)", iso: "br" },
    { value: 3, label: "Español", iso: "es" }
];

const categoryOptions = [
    { value: 1, label: "Electronics" },
    { value: 2, label: "Clothing" },
    { value: 3, label: "Home & Garden" }
];

const productOptions = [
    { value: 1, label: "Smartphone" },
    { value: 2, label: "Laptop" },
    { value: 3, label: "Headphones" }
];

const basicValue = ref(1);
const sizeSm = ref(1);
const sizeMd = ref(1);
const sizeLg = ref(1);
const variantDefault = ref(1);
const variantOutlined = ref(1);
const variantFilled = ref(1);
const languageValue = ref(1);
const disabledExample = ref(1);
const roundedNone = ref(1);
const roundedDefault = ref(1);
const roundedFull = ref(1);
const orderCategory = ref(null);
const orderProduct = ref(null);
const orderQuantity = ref(1);
</script>
