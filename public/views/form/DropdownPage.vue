<template>
    <BaseLayout>
        <h1>Dropdown</h1>

        <p>
            The <code>CDropdown (alias: c-dropdown)</code> component in the <code>@cmmv/ui</code> framework provides a customizable dropdown menu.
            It supports various sizes, styles, and advanced interaction features to enhance user experience in forms and navigation.
        </p>

        <table-docs>
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>modelValue</td>
                    <td>String | Number</td>
                    <td>""</td>
                    <td>The value bound to the dropdown field using <code>v-model</code>.</td>
                </tr>
                <tr>
                    <td>options</td>
                    <td>Array</td>
                    <td>[]</td>
                    <td>The list of options formatted as <code>{ value: '', label: '' }</code>.</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>String</td>
                    <td>undefined</td>
                    <td>The label displayed above the dropdown field.</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>String</td>
                    <td>"md"</td>
                    <td>Controls the dropdown size. Options: <code>sm</code>, <code>md</code>, <code>lg</code>.</td>
                </tr>
                <tr>
                    <td>rounded</td>
                    <td>String</td>
                    <td>"default"</td>
                    <td>Defines the border radius. Options: <code>none</code>, <code>default</code>, <code>full</code>.</td>
                </tr>
                <tr>
                    <td>variant</td>
                    <td>String</td>
                    <td>"default"</td>
                    <td>Defines the dropdown style. Options: <code>default</code>, <code>outlined</code>, <code>filled</code>.</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>Disables the dropdown field.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            The basic usage of the <code>CDropdown</code> component is simple and effective. By binding it to a variable using <code>v-model</code>,
            you can dynamically update and retrieve the selected value. The component also supports labels and a set of predefined options.
        </p>

        <c-card variant="flat" class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <div class="lg:w-2/5 w-full max-w-[400px] text-center">
                <c-dropdown v-model="basicValue" label="Select an option" :options="basicOptions" />
                <p>Selected: {{ basicValue }}</p>
            </div>
        </c-card>

        <pre>
            <code>&lt;c-dropdown
    v-model="basicValue"
    label="Select an option"
    :options="basicOptions"
/&gt;

&lt;script setup&gt;
const basicOptions = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" }
];

const basicValue = ref("");
&lt;/script&gt;
</code>
        </pre>

        <h3>Size Variants</h3>

        <p>
            The <code>CDropdown</code> component supports multiple size variations to fit different UI layouts.
            You can choose between small, medium, and large sizes depending on the context of your application.
            Use <code>size="sm"</code> for compact elements and <code>size="lg"</code> for prominent dropdowns.
        </p>

        <c-card variant="flat" class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <div class="lg:w-2/5 w-full max-w-[400px] text-center space-y-4">
                <c-dropdown v-model="sizeSm" label="Small" size="sm" :options="basicOptions" />
                <c-dropdown v-model="sizeMd" label="Medium" size="md" :options="basicOptions" />
                <c-dropdown v-model="sizeLg" label="Large" size="lg" :options="basicOptions" />
            </div>
        </c-card>

        <pre>
            <code>&lt;c-dropdown v-model="sizeSm" label="Small" size="sm" :options="basicOptions" /&gt;
&lt;c-dropdown v-model="sizeMd" label="Medium" size="md" :options="basicOptions" /&gt;
&lt;c-dropdown v-model="sizeLg" label="Large" size="lg" :options="basicOptions" /&gt;</code>
        </pre>

        <h3>Variants</h3>

        <p>
            You can customize the appearance of the dropdown using the <code>variant</code> prop.
            The available styles include:
        </p>

        <ul>
            <li><strong>Default</strong>: A simple style with no additional borders.</li>
            <li><strong>Outlined</strong>: Adds a border around the dropdown for better contrast.</li>
            <li><strong>Filled</strong>: Provides a shaded background for a more pronounced look.</li>
        </ul>

        <c-card variant="flat" class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <div class="lg:w-2/5 w-full max-w-[400px] text-center space-y-4">
                <c-dropdown v-model="variantDefault" label="Default" variant="default" :options="basicOptions" />
                <c-dropdown v-model="variantOutlined" label="Outlined" variant="outlined" :options="basicOptions" />
                <c-dropdown v-model="variantFilled" label="Filled" variant="filled" :options="basicOptions" />
            </div>
        </c-card>

        <pre>
            <code>&lt;c-dropdown
    v-model="variantDefault"
    label="Default"
    variant="default"
    :options="basicOptions"
/&gt;

&lt;c-dropdown
    v-model="variantOutlined"
    label="Outlined"
    variant="outlined"
    :options="basicOptions"
/&gt;

&lt;c-dropdown
    v-model="variantFilled"
    label="Filled"
    variant="filled"
    :options="basicOptions"
/&gt;</code>
</pre>

        <h3>Disabled State</h3>

        <p>
            If you need to prevent users from interacting with the dropdown, you can use the <code>disabled</code> prop.
            This ensures that the dropdown remains visible but non-interactive, which can be useful for form validation or
            conditional input scenarios.
        </p>

        <c-card variant="flat" class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <div class="lg:w-2/5 w-full max-w-[400px] text-center">
                <c-dropdown v-model="disabledExample" label="Disabled Dropdown" :options="basicOptions" disabled />
            </div>
        </c-card>

        <br/>

        <h3>Custom Template</h3>

        <p>
            The <code>CDropdown</code> component allows full customization of both the selected value display and the options list using Vue slots.
            This is useful for presenting complex data such as country flags, icons, or formatted text.
            By using the <code>#selected</code> and <code>#option</code> slots, you can define how the selected value appears
            and how each option is rendered in the dropdown.
        </p>

        <p>
            In this example, the dropdown is customized to display a flag icon alongside the language code.
            The <code>#selected</code> slot defines how the selected language appears, while the <code>#option</code> slot
            customizes each option inside the dropdown list.
        </p>

        <c-card variant="flat" class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <div class="lg:w-2/5 w-full max-w-[400px] text-center">
                <c-dropdown
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
                </c-dropdown>
            </div>
        </c-card>

        <pre>
    <code>&lt;template&gt;
    &lt;c-dropdown
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
    &lt;/c-dropdown&gt;
&lt;/template&gt;

&lt;script setup&gt;
const languageOptions = [
    { value: 1, label: "English", iso: "us" },
    { value: 2, label: "Português (Brasil)", iso: "br" },
    { value: 3, label: "Español", iso: "es" }
];

const languageValue = ref(1);
&lt;/script&gt;
</code>
</pre>

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

const basicValue = ref(1);
const sizeSm = ref(1);
const sizeMd = ref(1);
const sizeLg = ref(1);
const variantDefault = ref(1);
const variantOutlined = ref(1);
const variantFilled = ref(1);
const languageValue = ref(1);
</script>
