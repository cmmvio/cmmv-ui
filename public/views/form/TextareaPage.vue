<template>
    <BaseLayout>
        <h1>Textarea</h1>

        <p>The <code>CTextarea (alias: c-textarea)</code> component in the <code>@cmmv/ui</code> framework provides a
            flexible, multi-line input field with advanced customization options for size, variants, rounding, and
            interaction states. It supports features like dynamic labels, character counters, and hints or error
            messages for enhanced user experience.</p>

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
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">The value bound to the textarea field using <code>v-model</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">label</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">undefined</td>
                    <td class="border-b px-4 py-2">The label displayed above the textarea field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">placeholder</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">undefined</td>
                    <td class="border-b px-4 py-2">Placeholder text shown in the textarea field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">name</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">undefined</td>
                    <td class="border-b px-4 py-2">The name attribute for the textarea field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Specifies the size of the textarea field. Options: <code>sm</code>,
                        <code>md</code>, <code>lg</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"default"</td>
                    <td class="border-b px-4 py-2">Controls the border radius of the textarea field. Options:
                        <code>none</code>, <code>default</code>, <code>full</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">variant</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"default"</td>
                    <td class="border-b px-4 py-2">Styling variant for the textarea. Options: <code>default</code>,
                        <code>outlined</code>, <code>filled</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">maxlength</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">255</td>
                    <td class="border-b px-4 py-2">Sets the maximum number of characters allowed in the textarea.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">lengthCount</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Displays the character count below the textarea.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Custom background color class for the textarea.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Custom text color class for the textarea and label.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">borderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Custom border color class for the textarea.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Disables the textarea, making it non-interactive.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">resize</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Enables or disables resizing of the textarea.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">autoresize</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Automatically adjusts the height of the textarea to fit the content
                        dynamically.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-textarea label="Input with Placeholder" placeholder="Enter the text..."></c-textarea>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-textarea
        label="Textarea with Placeholder"
        placeholder="Enter text here..."
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Validation</h3>

        <p>
            The <code>CTextarea</code> component supports custom validation rules. Error messages are displayed below
            the
            textarea if a rule fails. Use the <code>rules</code> prop to define an array of validation functions. Each
            function
            receives the current value as a parameter and should return an error message or <code>null</code>.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-textarea label="Textarea with Validation"
                        :rules="[value => (value ? null : 'This field is required')]" v-model="validableValue"
                        placeholder="Enter text here..." />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-textarea
        label="Textarea with Validation"
        :rules="[value => (value ? null : 'This field is required')]"
        v-model="validableValue"
        placeholder="Enter text here..."
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const validableValue = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Size Variants</h3>

        <p>The <code>CTextarea</code> component supports size variations: <code>sm</code>, <code>md</code>, and
            <code>lg</code>.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-textarea label="Small Textarea" placeholder="Enter text here..." size="sm" />
                    <c-textarea label="Medium Textarea" placeholder="Enter text here..." size="md" />
                    <c-textarea label="Large Textarea" placeholder="Enter text here..." size="lg" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-textarea label="Small Textarea" placeholder="Enter text here..." size="sm" /&gt;
    &lt;c-textarea label="Medium Textarea" placeholder="Enter text here..." size="md" /&gt;
    &lt;c-textarea label="Large Textarea" placeholder="Enter text here..." size="lg" /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Length Count -->
        <h3>Length Count</h3>

        <p>
            The <code>lengthCount</code> property enables a character counter below the textarea. The counter displays
            the
            number of characters entered relative to the maximum allowed length, defined by the <code>maxlength</code>
            property.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-textarea label="Textarea with Length Count" lengthCount maxlength="100"
                        placeholder="Enter up to 100 characters..." />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-textarea
        label="Textarea with Length Count"
        lengthCount
        maxlength="100"
        placeholder="Enter up to 100 characters..."
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Auto Resize -->
        <h3>Auto Resize</h3>

        <p>
            The <code>autoresize</code> property enables dynamic height adjustment for the
            <code>CTextarea</code> component. This ensures that the textarea expands vertically to fit the content as
            the user
            types, avoiding scrollbars and improving readability.
            By default, <code>autoresize</code> is enabled, but it can be disabled if fixed-height behavior is required.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-textarea label="Autoresize Enabled" placeholder="Type something..." />

                    <c-textarea label="Autoresize Disabled" placeholder="Fixed height textarea" :autoresize="false" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;!-- Default autoresize enabled --&gt;
    &lt;c-textarea
        label="Autoresize Enabled"
        placeholder="Type something..."
    /&gt;

    &lt;!-- Explicitly disabling autoresize --&gt;
    &lt;c-textarea
        label="Autoresize Disabled"
        placeholder="Fixed height textarea"
        :autoresize="false"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Custom Colors -->
        <h3>Custom Colors</h3>

        <p>
            The <code>CTextarea</code> component supports <strong>custom colors</strong> for the background, text, and
            border.
            Use the following props to style the textarea:
        </p>

        <ul>
            <li><strong><code>bgColor</code></strong>: Adjusts the background color of the textarea.</li>
            <li><strong><code>textColor</code></strong>: Modifies the color of the text and label.</li>
            <li><strong><code>borderColor</code></strong>: Sets the color and styles for the border during interactions
                such as
                focus.</li>
        </ul>

        <p>
            This flexibility allows for dynamic and visually appealing designs tailored to your application's branding.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-textarea label="Custom Background" placeholder="Custom Background"
                        bgColor="bg-blue-100 dark:bg-blue-900" textColor="text-blue-700 dark:text-blue-300"
                        borderColor="focus:ring focus:ring-blue-500" />
                    <c-textarea label="Custom Text Color" placeholder="Custom Text Color"
                        bgColor="bg-neutral-100 dark:bg-neutral-800" textColor="text-green-600 dark:text-green-400"
                        borderColor="focus:ring focus:ring-green-600" />
                    <c-textarea label="Custom Border" placeholder="Custom Border"
                        bgColor="bg-yellow-50 dark:bg-yellow-900" textColor="text-yellow-700 dark:text-yellow-300"
                        borderColor="focus:ring focus:ring-yellow-500" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-textarea
        label="Custom Background"
        placeholder="Custom Background"
        bgColor="bg-blue-100 dark:bg-blue-900"
        textColor="text-blue-700 dark:text-blue-300"
        borderColor="focus:ring focus:ring-blue-500"
    /&gt;
    &lt;c-textarea
        label="Custom Text Color"
        placeholder="Custom Text Color"
        bgColor="bg-neutral-100 dark:bg-neutral-800"
        textColor="text-green-600 dark:text-green-400"
        borderColor="focus:ring focus:ring-green-600"
    /&gt;
    &lt;c-textarea
        label="Custom Border"
        placeholder="Custom Border"
        bgColor="bg-yellow-50 dark:bg-yellow-900"
        textColor="text-yellow-700 dark:text-yellow-300"
        borderColor="focus:ring focus:ring-yellow-500"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Slider" previousLink="/slider" next="Timepicker" nextLink="/timepicker" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const validableValue = ref("");
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
