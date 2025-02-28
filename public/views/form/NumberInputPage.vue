<template>
    <BaseLayout>
        <h1>Number Input</h1>

        <p>
            The <code>c-number-input</code> component provides a flexible numeric input field with increment and decrement buttons.
            It supports customization options such as min/max values, step increments, sizes, and accessibility features.
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
                    <td>Number</td>
                    <td>Required</td>
                    <td>Bound value for the input field.</td>
                </tr>
                <tr>
                    <td>min</td>
                    <td>Number</td>
                    <td><code>0</code></td>
                    <td>Minimum allowed value.</td>
                </tr>
                <tr>
                    <td>max</td>
                    <td>Number</td>
                    <td><code>99999</code></td>
                    <td>Maximum allowed value.</td>
                </tr>
                <tr>
                    <td>step</td>
                    <td>Number</td>
                    <td><code>1</code></td>
                    <td>Step value for increments/decrements.</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>Boolean</td>
                    <td><code>false</code></td>
                    <td>Disables the input and buttons.</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>String</td>
                    <td><code>""</code></td>
                    <td>Label text above the input field.</td>
                </tr>
                <tr>
                    <td>helperText</td>
                    <td>String</td>
                    <td><code>""</code></td>
                    <td>Helper text displayed below the input field.</td>
                </tr>
                <tr>
                    <td>id</td>
                    <td>String</td>
                    <td><code>"number-input"</code></td>
                    <td>Unique identifier for the input field.</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>String</td>
                    <td><code>"md"</code></td>
                    <td>Size of the input field: <code>sm</code>, <code>md</code>, <code>lg</code>.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <card-docs>
            <div class="mx-auto p-4 flex flex-col items-center">
                <c-number-input v-model="quantity" :min="1" :max="10" />
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-number-input v-model="quantity" :min="1" :max="10" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const quantity = ref(5);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>With Label and Helper Text</h3>

        <p>
            You can add a label and helper text to provide more context to the input field.
        </p>

        <card-docs>
            <div class="mx-auto p-4 flex flex-col items-center">
                <c-number-input
                    v-model="quantityLabelHelper"
                    label="Choose quantity:"
                    helperText="Select a value between 1 and 100."
                    :min="1"
                    :max="100"
                />
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-number-input
        v-model="quantity"
        label="Choose quantity:"
        helperText="Select a value between 1 and 100."
        :min="1"
        :max="100"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const quantity = ref(5);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Step Value</h3>

        <p>
            Adjust the <code>step</code> property to control how much the value increases or decreases when clicking the buttons.
        </p>

        <card-docs>
            <div class="mx-auto p-4 flex flex-col items-center">
                <c-number-input v-model="quantityCustomStep" :min="0" :max="50" :step="5" />
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-number-input v-model="quantity" :min="0" :max="50" :step="5" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const quantity = ref(5);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Disabled State</h3>

        <p>
            Set <code>disabled</code> to <code>true</code> to prevent user interaction.
        </p>

        <card-docs>
            <div class="mx-auto p-4 flex flex-col items-center">
                <c-number-input v-model="quantityDisabled" :min="1" :max="10" disabled />
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-number-input v-model="quantity" :min="1" :max="10" disabled /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const quantity = ref(5);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="Input"
            previousLink="/input"
            next="OTP Input"
            nextLink="/otp-input"
        />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";

const quantity = ref(5);
const quantityLabelHelper = ref(5);
const quantityCustomStep = ref(5);
const quantityDisabled = ref(5);
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
