<template>
    <BaseLayout>
        <h1>Autocomplete</h1>

        <p>
            The <code>CAutocomplete (alias: c-autocomplete)</code> component in the <code>@cmmv/ui</code> framework
            provides a user-friendly autocomplete input field with advanced customization options for size, variants,
            rounding, and interaction states. It supports real-time filtering, selection, and displays a dropdown for
            suggested values.
        </p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white" width="20%">Prop</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Type</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white" width="20%">Default
                    </th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">modelValue</td>
                    <td class="border-b px-4 py-2">String | Number</td>
                    <td class="border-b px-4 py-2"><code>""</code></td>
                    <td class="border-b px-4 py-2">The value bound to the autocomplete field using <code>v-model</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">options</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2"><code>[]</code></td>
                    <td class="border-b px-4 py-2">The list of options for the autocomplete dropdown, formatted as
                        <code>{ value: '', label: '' }</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">label</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>undefined</code></td>
                    <td class="border-b px-4 py-2">The label displayed above the autocomplete field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">placeholder</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>undefined</code></td>
                    <td class="border-b px-4 py-2">Placeholder text shown in the autocomplete field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"md"</code></td>
                    <td class="border-b px-4 py-2">Specifies the size of the autocomplete field. Options:
                        <code>sm</code>, <code>md</code>, <code>lg</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"default"</code></td>
                    <td class="border-b px-4 py-2">Controls the border radius of the autocomplete field. Options:
                        <code>none</code>, <code>default</code>, <code>full</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">variant</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"default"</code></td>
                    <td class="border-b px-4 py-2">Styling variant for the autocomplete. Options: <code>default</code>,
                        <code>outlined</code>, <code>filled</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2"><code>false</code></td>
                    <td class="border-b px-4 py-2">Disables the autocomplete field, making it non-interactive.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">clearable</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2"><code>false</code></td>
                    <td class="border-b px-4 py-2">Adds a clear button to the input field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rules</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2"><code>[]</code></td>
                    <td class="border-b px-4 py-2">Array of validation functions that return error messages or null when
                        valid.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>""</code></td>
                    <td class="border-b px-4 py-2">Custom background color class for the autocomplete.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>""</code></td>
                    <td class="border-b px-4 py-2">Custom text color class for the autocomplete and label.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">maxHeight</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"300px"</code></td>
                    <td class="border-b px-4 py-2">Maximum height of the dropdown menu before scrolling.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Basic Examples -->
        <h3>Basic Examples</h3>

        <p>
            The <code>CAutocomplete</code> component provides a simple way to enable user-friendly suggestions for input
            fields.
            Below are basic examples demonstrating its functionality with minimal configuration.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[300px]">
                <div class="w-full max-w-[400px]">
                    <c-autocomplete id="example1" label="Basic Autocomplete" v-model="basicValue"
                        :options="basicOptions" />
                </div>

                <p class="text-neutral-600 dark:text-neutral-300">Value: {{ basicValue }}</p>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-autocomplete
        id=&quot;example1&quot;
        label=&quot;Basic Autocomplete&quot;
        v-model=&quot;value&quot;
        :options=&quot;basicOptions&quot;
    /&gt;

    &lt;c-autocomplete
        id=&quot;example2&quot;
        label=&quot;Autocomplete with Placeholder&quot;
        placeholder=&quot;Start typing...&quot;
        v-model=&quot;value&quot;
        :options=&quot;basicOptions&quot;
    /&gt;

    &lt;c-autocomplete
        id=&quot;example3&quot;
        label=&quot;Disabled Autocomplete&quot;
        v-model=&quot;value&quot;
        :options=&quot;basicOptions&quot;
        disabled
    /&gt;
&lt;/template&gt;

&lt;script&gt;
import CAutocomplete from &quot;@cmmv/ui/components/CAutocomplete.vue&quot;;

const value = ref('');
const basicOptions = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" }
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Size Variants -->
        <h3>Size Variants</h3>

        <p>
            The <code>CAutocomplete</code> component supports multiple size options to fit different UI layouts.
            Choose between small, medium, or large sizes to provide the best user experience based on your application's
            needs.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[300px]">
                <div class="w-full max-w-[400px]">
                    <c-autocomplete id="small" label="Small Autocomplete" size="sm" :options="basicOptions"
                        class="mb-4" />
                    <c-autocomplete id="medium" label="Medium Autocomplete" size="md" :options="basicOptions"
                        class="mb-4" />
                    <c-autocomplete id="large" label="Large Autocomplete" size="lg" :options="basicOptions" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-autocomplete
        v-model=&quot;small&quot;
        label=&quot;Small Autocomplete&quot;
        size=&quot;sm&quot;
        :options=&quot;basicOptions&quot;
    /&gt;
    &lt;c-autocomplete
        v-model=&quot;medium&quot;
        label=&quot;Medium Autocomplete&quot;
        size=&quot;md&quot;
        :options=&quot;basicOptions&quot;
    /&gt;
    &lt;c-autocomplete
        v-model=&quot;large&quot;
        label=&quot;Large Autocomplete&quot;
        size=&quot;lg&quot;
        :options=&quot;basicOptions&quot;
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Validation -->
        <h3>Validation</h3>

        <p>
            The <code>CAutocomplete</code> component allows validation rules to be applied, ensuring users enter the
            correct
            data.
            Custom validation messages can be displayed when the field is left empty or contains invalid values.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[300px]">
                <div class="w-full max-w-[400px]">
                    <c-autocomplete id="validation" label="Autocomplete with Validation"
                        :rules="[value => (value ? null : 'This field is required')]" :options="basicOptions"
                        v-model="validableValue" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-autocomplete
        v-model=&quot;validation&quot;
        label=&quot;Autocomplete with Validation&quot;
        :rules=&quot;[value =&gt; (value ? null : 'This field is required')]&quot;
        :options=&quot;basicOptions&quot;
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Clearable -->
        <h3>Clearable</h3>

        <p>The <code>clearable</code> property enables a button to clear the input field's content.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[300px]">
                <div class="w-full max-w-[400px]">
                    <c-autocomplete v-model="clearableValue" id="clearable" label="Clearable Input"
                        :options="basicOptions" clearable />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-autocomplete
        v-model=&quot;clearable&quot;
        label=&quot;Clearable Input&quot;
        :options=&quot;basicOptions&quot;
        clearable
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Icon -->
        <h3>Icon</h3>

        <p>The Autocomplete component provides an <code>icon</code> slot to allow for greater flexibility in customizing
            the
            icon within the input field. This approach provides developers with more control over the design and
            behavior of the
            icon. By adding an icon through the icon slot, you can seamlessly align it to the left of the input field,
            enhancing
            the user experience with contextual cues, such as a magnifying glass for search fields.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[300px]">
                <div class="w-full max-w-[400px]">
                    <c-autocomplete v-model="search" label="Search Input" :options="basicOptions" floatingLabel>
                        <template #icon>
                            <IconMagnifyingGlass class="w-6 h-6 text-neutral-600 dark:text-white" aria-hidden="true" />
                        </template>
                    </c-autocomplete>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-autocomplete v-model=&quot;search&quot; label=&quot;Search Input&quot;&gt;
        &lt;template #icon&gt;
            &lt;IconMagnifyingGlass
                class=&quot;w-6 h-6 text-neutral-600 dark:text-white&quot;
                aria-hidden=&quot;true&quot;
            /&gt;
        &lt;/template&gt;
    &lt;/c-autocomplete&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Custom Styling -->
        <h3>Custom Styling</h3>

        <p>
            The <code>CAutocomplete</code> component can be customized with the <code>bgColor</code> and
            <code>textColor</code>
            props
            to match your application's design system. You can also apply additional classes to further customize the
            appearance.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[300px]">
                <div class="w-full max-w-[400px]">
                    <c-autocomplete v-model="customStyle" label="Custom Styled Autocomplete" :options="basicOptions"
                        bgColor="bg-blue-50 dark:bg-blue-900" textColor="text-blue-800 dark:text-blue-100"
                        class="border-blue-300 dark:border-blue-700 rounded-xl" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-autocomplete
        v-model=&quot;customStyle&quot;
        label=&quot;Custom Styled Autocomplete&quot;
        :options=&quot;basicOptions&quot;
        bgColor=&quot;bg-blue-50 dark:bg-blue-900&quot;
        textColor=&quot;text-blue-800 dark:text-blue-100&quot;
        class=&quot;border-blue-300 dark:border-blue-700 rounded-xl&quot;
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Tree View" previousLink="/tree-view" next="Checkbox" nextLink="/checkbox" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const basicOptions = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" }
];

const basicValue = ref("");
const validableValue = ref("");
const clearableValue = ref("");
const search = ref("");
const customStyle = ref("");
</script>
