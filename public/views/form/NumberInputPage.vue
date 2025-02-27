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
                    <td><code>modelValue</code></td>
                    <td>Number</td>
                    <td>Required</td>
                    <td>Bound value for the input field.</td>
                </tr>
                <tr>
                    <td><code>min</code></td>
                    <td>Number</td>
                    <td><code>0</code></td>
                    <td>Minimum allowed value.</td>
                </tr>
                <tr>
                    <td><code>max</code></td>
                    <td>Number</td>
                    <td><code>99999</code></td>
                    <td>Maximum allowed value.</td>
                </tr>
                <tr>
                    <td><code>step</code></td>
                    <td>Number</td>
                    <td><code>1</code></td>
                    <td>Step value for increments/decrements.</td>
                </tr>
                <tr>
                    <td><code>disabled</code></td>
                    <td>Boolean</td>
                    <td><code>false</code></td>
                    <td>Disables the input and buttons.</td>
                </tr>
                <tr>
                    <td><code>label</code></td>
                    <td>String</td>
                    <td><code>""</code></td>
                    <td>Label text above the input field.</td>
                </tr>
                <tr>
                    <td><code>helperText</code></td>
                    <td>String</td>
                    <td><code>""</code></td>
                    <td>Helper text displayed below the input field.</td>
                </tr>
                <tr>
                    <td><code>id</code></td>
                    <td>String</td>
                    <td><code>"number-input"</code></td>
                    <td>Unique identifier for the input field.</td>
                </tr>
                <tr>
                    <td><code>size</code></td>
                    <td>String</td>
                    <td><code>"md"</code></td>
                    <td>Size of the input field: <code>sm</code>, <code>md</code>, <code>lg</code>.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <c-card variant="flat" class="mx-auto p-4 flex flex-col items-center">
            <c-number-input v-model="quantity" :min="1" :max="10" />
        </c-card>

        <pre>
            <code class="code-highlight language-html">&lt;c-number-input v-model="quantity" :min="1" :max="10" /&gt;</code>
        </pre>

        <h3>With Label and Helper Text</h3>

        <p>
            You can add a label and helper text to provide more context to the input field.
        </p>

        <c-card variant="flat" class="mx-auto p-4 flex flex-col items-center">
            <c-number-input
                v-model="quantityLabelHelper"
                label="Choose quantity:"
                helperText="Select a value between 1 and 100."
                :min="1"
                :max="100"
            />
        </c-card>

        <pre>
            <code class="code-highlight language-html">&lt;c-number-input
    v-model="quantity"
    label="Choose quantity:"
    helperText="Select a value between 1 and 100."
    :min="1"
    :max="100"
/&gt;</code>
        </pre>

        <h3>Custom Step Value</h3>

        <p>
            Adjust the <code>step</code> property to control how much the value increases or decreases when clicking the buttons.
        </p>

        <c-card variant="flat" class="mx-auto p-4 flex flex-col items-center">
            <c-number-input v-model="quantityCustomStep" :min="0" :max="50" :step="5" />
        </c-card>

        <pre>
            <code class="code-highlight language-html">&lt;c-number-input v-model="quantity" :min="0" :max="50" :step="5" /&gt;</code>
        </pre>

        <h3>Disabled State</h3>

        <p>
            Set <code>disabled</code> to <code>true</code> to prevent user interaction.
        </p>

        <c-card variant="flat" class="mx-auto p-4 flex flex-col items-center">
            <c-number-input v-model="quantityDisabled" :min="1" :max="10" disabled />
        </c-card>

        <pre>
            <code class="code-highlight language-html">&lt;c-number-input v-model="quantity" :min="1" :max="10" disabled /&gt;</code>
        </pre>

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

const quantity = ref(5);
const quantityLabelHelper = ref(5);
const quantityCustomStep = ref(5);
const quantityDisabled = ref(5);
</script>
