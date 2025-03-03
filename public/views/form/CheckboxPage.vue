<template>
    <BaseLayout>
        <h1>Checkbox</h1>

        <p>
            The <code>CCheckbox (alias: c-checkbox)</code> component in the <code>@cmmv/ui</code> framework provides a
            customizable and versatile checkbox element. It supports dynamic labels, two-way binding using
            <code>v-model</code>, and customizable styles for various use cases. With built-in support for sizes,
            colors, and indeterminate states, the <code>c-checkbox</code> is ideal for forms, filters, and other
            interactive UI components.
        </p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Prop</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Type</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Default</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">modelValue</td>
                    <td class="border-b px-4 py-2">Boolean | Array</td>
                    <td class="border-b px-4 py-2"><code>undefined</code></td>
                    <td class="border-b px-4 py-2">The value bound to the checkbox, supporting both single and
                        array-based binding for groups of checkboxes.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">value</td>
                    <td class="border-b px-4 py-2">String | Number | Boolean</td>
                    <td class="border-b px-4 py-2"><code>null</code></td>
                    <td class="border-b px-4 py-2">The value used when the checkbox is part of an array-based model.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">checked</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2"><code>false</code></td>
                    <td class="border-b px-4 py-2">Initial checked state for the checkbox when not using
                        <code>v-model</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">indeterminate</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2"><code>false</code></td>
                    <td class="border-b px-4 py-2">Sets the checkbox to an indeterminate state, typically used for mixed
                        selection groups.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">label</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>""</code></td>
                    <td class="border-b px-4 py-2">Optional label displayed next to the checkbox.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2"><code>false</code></td>
                    <td class="border-b px-4 py-2">Disables the checkbox, making it non-interactive.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"md"</code></td>
                    <td class="border-b px-4 py-2">Specifies the size of the checkbox. Options: <code>sm</code>,
                        <code>md</code>, <code>lg</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"bg-blue-600"</code></td>
                    <td class="border-b px-4 py-2">Background color of the checkbox when checked.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">borderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"border-blue-600"</code></td>
                    <td class="border-b px-4 py-2">Border color of the checkbox when checked.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"text-white"</code></td>
                    <td class="border-b px-4 py-2">Text color of the check or indeterminate icon.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rules</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2"><code>[]</code></td>
                    <td class="border-b px-4 py-2">Array of validation functions that return error messages or null when
                        valid.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Checkbox</h3>

        <p>
            The following example demonstrates a basic checkbox with dynamic label support. The label changes based on
            the <code>v-model</code> binding, reflecting the current state of the checkbox.
        </p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-checkbox v-model="checked" :label="checked ? 'Checked' : 'Unchecked'"></c-checkbox>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-checkbox v-model=&quot;checked&quot; :label=&quot;checked ? &#39;Checked&#39; : &#39;Unchecked&#39;&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &quot;vue&quot;;
const checked = ref(true);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Validation</h3>

        <p>
            The <code>CCheckbox</code> component supports custom validation rules using the <code>rules</code> prop.
            These rules
            allow you to define custom logic for validating the checkbox state. If a rule fails, an error message is
            displayed
            below the checkbox. Validation can be useful for ensuring that specific options are selected or to enforce
            other
            custom behaviors.
        </p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-checkbox v-model="isChecked" label="I accept the terms and conditions"
                    :rules="[value => value ? null : 'You must accept the terms and conditions.']" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-checkbox
        v-model="isChecked"
        label="I accept the terms and conditions"
        :rules="[value => value ? null : 'You must accept the terms and conditions.']"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";
const isChecked = ref(false);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Size Variants -->
        <h3>Size Variants</h3>

        <p>
            The <code>CCheckbox</code> supports multiple sizes to fit different UI contexts. Use the <code>size</code>
            prop to
            customize the checkbox dimensions. Available sizes include <code>sm</code>, <code>md</code>, and
            <code>lg</code>.
        </p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-checkbox label="Small" size="sm" />
                <c-checkbox label="Medium" size="md" />
                <c-checkbox label="Large" size="lg" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-checkbox label=&quot;Small&quot; size=&quot;sm&quot; /&gt;
    &lt;c-checkbox label=&quot;Medium&quot; size=&quot;md&quot; /&gt;
    &lt;c-checkbox label=&quot;Large&quot; size=&quot;lg&quot; /&gt;
&lt;/template&gt;
</code></pre>
            </template>
        </card-docs>

        <!-- Indeterminate State -->
        <h3>Indeterminate State</h3>

        <p>
            The <code>indeterminate</code> prop allows the checkbox to be displayed in an indeterminate state. This is
            useful
            for multi-selection scenarios where only some options are selected, such as in hierarchical lists or "select
            all"
            implementations.
        </p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-checkbox label="Indeterminate" indeterminate />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-checkbox label=&quot;Indeterminate&quot; indeterminate /&gt;
&lt;/template&gt;
</code></pre>
            </template>
        </card-docs>

        <!-- Disabled State -->
        <h3>Disabled State</h3>

        <p>
            The <code>disabled</code> prop can be used to disable the checkbox, making it non-interactive. This is
            useful for
            scenarios where the checkbox state should not be modified by the user, such as in forms with conditional
            fields or
            when displaying read-only information.
        </p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-checkbox label="Disabled" disabled />
                <c-checkbox label="Disabled Checked" disabled checked />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-checkbox label=&quot;Disabled&quot; disabled /&gt;
    &lt;c-checkbox label=&quot;Disabled Checked&quot; disabled checked /&gt;
&lt;/template&gt;
</code></pre>
            </template>
        </card-docs>

        <!-- Color Variations -->
        <h3>Color Variations</h3>

        <p>
            The <code>CCheckbox</code> supports color customization to align with your application's design. Use the
            <code>bgColor</code>, <code>borderColor</code>, and <code>textColor</code> props to style the checkbox with
            any
            desired color theme. Below are examples of checkboxes with different color combinations.
        </p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-checkbox label="Blue" bgColor="bg-blue-600" borderColor="border-blue-800" textColor="text-white"
                    checked />
                <c-checkbox label="Green" bgColor="bg-green-600" borderColor="border-green-800" textColor="text-white"
                    checked />
                <c-checkbox label="Red" bgColor="bg-red-600" borderColor="border-red-800" textColor="text-white"
                    checked />
                <c-checkbox label="Yellow" bgColor="bg-yellow-500" borderColor="border-yellow-800"
                    textColor="text-white" checked />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-checkbox
        label="Blue"
        bgColor="bg-blue-600"
        borderColor="border-blue-800"
        textColor="text-white"
        checked
    /&gt;

    &lt;c-checkbox
        label="Green"
        bgColor="bg-green-600"
        borderColor="border-green-800"
        textColor="text-white"
        checked
    /&gt;

    &lt;c-checkbox
        label="Red"
        bgColor="bg-red-600"
        borderColor="border-red-800"
        textColor="text-white"
        checked
    /&gt;

    &lt;c-checkbox
        label="Yellow"
        bgColor="bg-yellow-500"
        borderColor="border-yellow-800"
        textColor="text-white"
        checked
    /&gt;
&lt;/template&gt;
</code></pre>
            </template>
        </card-docs>

        <h3>Multiple Selection with Arrays</h3>

        <p>
            The <code>CCheckbox</code> supports array-based bindings for managing multiple selections. Using the
            <code>v-model</code> directive with an array allows you to bind multiple checkboxes to a single model,
            making it
            easy to manage grouped options. This is particularly useful for forms with multiple choice selections or
            filter
            interfaces.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6">
                <div
                    class="flex flex-col justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                    <c-checkbox v-model="selectedOptions" value="option1" label="Option 1" />
                    <c-checkbox v-model="selectedOptions" value="option2" label="Option 2" />
                    <c-checkbox v-model="selectedOptions" value="option3" label="Option 3" />
                </div>

                <div
                    class="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700 text-center text-neutral-600 dark:text-neutral-300">
                    Selected Options: {{ selectedOptions }}
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div&gt;
        &lt;c-checkbox v-model=&quot;selectedOptions&quot; value=&quot;option1&quot; label=&quot;Option 1&quot; /&gt;
        &lt;c-checkbox v-model=&quot;selectedOptions&quot; value=&quot;option2&quot; label=&quot;Option 2&quot; /&gt;
        &lt;c-checkbox v-model=&quot;selectedOptions&quot; value=&quot;option3&quot; label=&quot;Option 3&quot; /&gt;

        &lt;div class=&quot;mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700 text-center&quot;&gt;
            Selected Options: {{ selectedOptions }}
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &quot;vue&quot;;
const selectedOptions = ref([]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Autocomplete" previousLink="/autocomplete" next="Chips Input" nextLink="/chips-input" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CCheckbox from "@components/forms/CCheckbox.vue";

const checked = ref(true);
const selectedOptions = ref([]);
const isChecked = ref(false);
const newsletterConsent = ref(false);
const termsAccepted = ref(false);
</script>

<style scoped>
.code-highlight {
    white-space: pre;
    font-family: monospace;
}
</style>
