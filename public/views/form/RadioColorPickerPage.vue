<template>
    <BaseLayout>
        <h1>Radio Color Picker</h1>

        <p>
            The <code>CRadioColorPicker (alias: c-radio-color-picker)</code> component provides an intuitive and
            visually appealing way for users to select colors. Built on top of the <code>CRadio</code> component,
            it offers various customization options to fit your design needs.
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
                    <td>String</td>
                    <td>""</td>
                    <td>The selected color value, bound using <code>v-model</code>.</td>
                </tr>
                <tr>
                    <td>colors</td>
                    <td>Array</td>
                    <td>Basic color array</td>
                    <td>Array of color objects with format: <code>{ name: 'Red', value: 'red', bgClass: 'bg-red-500' }</code></td>
                </tr>
                <tr>
                    <td>defaultValue</td>
                    <td>String</td>
                    <td>""</td>
                    <td>Default selected color if no v-model value is provided.</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>String</td>
                    <td>"Choose a color"</td>
                    <td>Label text displayed above the color picker.</td>
                </tr>
                <tr>
                    <td>showLabels</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>Whether to show color names next to each color option.</td>
                </tr>
                <tr>
                    <td>showCheck</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>Whether to show checkmark icon inside the selected color.</td>
                </tr>
                <tr>
                    <td>showSelected</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>Whether to show the currently selected color name below the picker.</td>
                </tr>
                <tr>
                    <td>orientation</td>
                    <td>String</td>
                    <td>"horizontal"</td>
                    <td>Layout of color options: "horizontal" or "vertical".</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>String</td>
                    <td>"md"</td>
                    <td>Size of color swatches: "sm", "md", or "lg".</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>Disables the color picker component.</td>
                </tr>
                <tr>
                    <td>required</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>Adds an asterisk (*) to the label to indicate required field.</td>
                </tr>
                <tr>
                    <td>ringClass</td>
                    <td>String</td>
                    <td>"ring-2 ring-offset-2"</td>
                    <td>Tailwind classes for the selection ring around active color.</td>
                </tr>
                <tr>
                    <td>containerClass</td>
                    <td>String</td>
                    <td>""</td>
                    <td>Additional CSS classes for the main container.</td>
                </tr>
                <tr>
                    <td>labelClass</td>
                    <td>String</td>
                    <td>Text neutral class</td>
                    <td>Custom styling for the main component label.</td>
                </tr>
                <tr>
                    <td>labelTextClass</td>
                    <td>String</td>
                    <td>Text neutral class</td>
                    <td>Custom styling for color name labels.</td>
                </tr>
                <tr>
                    <td>helperTextClass</td>
                    <td>String</td>
                    <td>Subdued text class</td>
                    <td>Custom styling for helper text showing selected color.</td>
                </tr>
                <tr>
                    <td>customClass</td>
                    <td>String</td>
                    <td>""</td>
                    <td>Additional CSS classes for the group of color options.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Usage</h3>

        <p>
            A simple color picker with default settings.
        </p>

        <card-docs>
            <div class="mx-auto p-4 flex justify-center">
                <c-radio-color-picker v-model="selectedColor" />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-radio-color-picker v-model="selectedColor" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const selectedColor = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Colors</h3>

        <p>
            You can provide a custom array of colors with your own values, names, and Tailwind color classes.
        </p>

        <card-docs>
            <div class="mx-auto p-4 flex justify-center">
                <c-radio-color-picker
                    v-model="selectedThemeColor"
                    :colors="themeColors"
                    label="Theme color"
                    required
                />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-radio-color-picker
        v-model="selectedThemeColor"
        :colors="themeColors"
        label="Theme color"
        required
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const selectedThemeColor = ref("");
const themeColors = [
    { name: 'Primary', value: 'primary', bgClass: 'bg-indigo-600' },
    { name: 'Success', value: 'success', bgClass: 'bg-green-600' },
    { name: 'Warning', value: 'warning', bgClass: 'bg-yellow-500' },
    { name: 'Danger', value: 'danger', bgClass: 'bg-red-600' },
    { name: 'Info', value: 'info', bgClass: 'bg-sky-500' },
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Different Sizes</h3>

        <p>
            The component supports different sizes for the color swatches to fit various designs.
        </p>

        <card-docs>
            <div class="mx-auto p-4 space-y-6 flex flex-col items-center">
                <c-radio-color-picker
                    v-model="smallColorSize"
                    label="Small size"
                    size="sm"
                    :defaultValue="'blue'"
                />

                <c-radio-color-picker
                    v-model="mediumColorSize"
                    label="Medium size (default)"
                    size="md"
                    :defaultValue="'green'"
                />

                <c-radio-color-picker
                    v-model="largeColorSize"
                    label="Large size"
                    size="lg"
                    :defaultValue="'purple'"
                />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-radio-color-picker
        v-model="smallColorSize"
        label="Small size"
        size="sm"
        defaultValue="blue"
    /&gt;

    &lt;c-radio-color-picker
        v-model="mediumColorSize"
        label="Medium size (default)"
        size="md"
        defaultValue="green"
    /&gt;

    &lt;c-radio-color-picker
        v-model="largeColorSize"
        label="Large size"
        size="lg"
        defaultValue="purple"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const smallColorSize = ref("");
const mediumColorSize = ref("");
const largeColorSize = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Disabled State</h3>

        <p>
            The color picker can be disabled when needed.
        </p>

        <card-docs>
            <div class="mx-auto p-4 flex justify-center">
                <c-radio-color-picker
                    v-model="disabledColor"
                    label="Disabled color picker"
                    disabled
                    defaultValue="red"
                />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-radio-color-picker
        v-model="disabledColor"
        label="Disabled color picker"
        disabled
        defaultValue="red"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const disabledColor = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Radio" previousLink="/radio" next="Slider" nextLink="/slider" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CRadioColorPicker from "@components/forms/CRadioColorPicker.vue";

// Basic example
const selectedColor = ref("");

// Custom colors example
const selectedThemeColor = ref("");
const themeColors = [
    { name: 'Primary', value: 'primary', bgClass: 'bg-indigo-600' },
    { name: 'Success', value: 'success', bgClass: 'bg-green-600' },
    { name: 'Warning', value: 'warning', bgClass: 'bg-yellow-500' },
    { name: 'Danger', value: 'danger', bgClass: 'bg-red-600' },
    { name: 'Info', value: 'info', bgClass: 'bg-sky-500' },
];

// With labels example
const selectedColorWithLabel = ref("");
const brandColors = [
    { name: 'Brand Blue', value: 'brand-blue', bgClass: 'bg-blue-700' },
    { name: 'Brand Green', value: 'brand-green', bgClass: 'bg-emerald-600' },
    { name: 'Brand Purple', value: 'brand-purple', bgClass: 'bg-violet-700' },
];

// Different sizes
const smallColorSize = ref("");
const mediumColorSize = ref("");
const largeColorSize = ref("");

// Custom styled
const customStyledColor = ref("");

// Disabled
const disabledColor = ref("");
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
