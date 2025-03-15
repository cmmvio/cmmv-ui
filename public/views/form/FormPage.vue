<template>
    <BaseLayout>
        <c-seo
            section="Form Component"
            description="Learn how to use the CForm component in CMMV UI. A flexible form component for handling form submissions, validation, and data management with built-in features and customization options."
            :keywords="['form', 'component', 'ui', 'validation', 'form handling', 'data management']"
        />

        <h1>Form</h1>

        <p>
            The <code>CForm (alias: c-form)</code> component in the <code>@cmmv/ui</code> framework provides an
            easy-to-use form container with built-in support for validation, submission handling, and data binding via
            <code>v-model</code>. It is designed to work seamlessly with input components like <code>CInput</code>,
            allowing developers to create robust forms with minimal effort.
        </p>

        <h3 class="text-lg font-semibold mt-8">Example</h3>

        <p>
            Below is a basic example of using the <code>CForm</code> component to create a login form. It demonstrates
            the integration with <code>CInput</code> for validation and <code>CButton</code> for form submission.
        </p>

        <card-docs>
            <div class="m-auto mb-2 max-w-[300px]">
                <h1 class="mb-4">Login</h1>

                <c-form v-model="form" @submit.prevent="handleSubmit">
                    <c-input v-model="data.email" label="Email" type="email" placeholder="Enter your email"
                        hint="Enter your email to login" :rules="[value => !value && 'Email is required']" class="mb-4"
                        clearable />

                    <c-input v-model="data.password" type="password" label="Password" placeholder="Enter your password"
                        :rules="[value => !value && 'Password is required']" class="mb-4" />

                    <c-button class="w-full pb-4 pt-4" type="submit" buttonType="button" size="2xl"
                        :disabled="!form">Login</c-button>
                </c-form>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-form
        v-model="form"
        @submit.prevent="handleSubmit"
    &gt;
        &lt;c-input
            v-model="data.email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            hint="Enter your email to login"
            :rules="[value => !value && 'Email is required']"
            clearable
        /&gt;

        &lt;c-input
            v-model="data.password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            :rules="[value => !value && 'Password is required']"
        /&gt;

        &lt;c-button
            class="w-full pb-4 pt-4"
            type="submit"
            buttonType="button"
            size="2xl"
            :disabled="!form"
        &gt;Login&lt;/c-button&gt;
    &lt;/c-form&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const data = ref({
    email: "",
    password: ""
});

const form = ref(false);

const handleSubmit = () => {
    console.log("Form Submitted", data.value);
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Features -->
        <h3>Features</h3>

        <br />

        <ul class="list-disc pl-6">
            <li><strong>Two-way Binding:</strong> Sync form data effortlessly using <code>v-model</code>.</li>
            <li><strong>Validation:</strong> Supports inline validation rules for child inputs.</li>
            <li><strong>Submission Handling:</strong> Emits a <code>submit</code> event for custom logic.</li>
            <li><strong>Accessibility:</strong> Ensures proper keyboard and screen reader support.</li>
        </ul>

        <!-- Props -->
        <h3>Props</h3>

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
                    <td class="border-b px-4 py-2"><code>v-model</code></td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2"><code>false</code></td>
                    <td class="border-b px-4 py-2">Tracks the validation state of the form.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Events -->
        <h3>Events</h3>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Event</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2"><code>submit</code></td>
                    <td class="border-b px-4 py-2">Emitted when the form is submitted.</td>
                </tr>
            </tbody>
        </table-docs>

        <PagePagination previous="File Upload" previousLink="/file-upload" next="Form Builder" nextLink="/form-builder" />
    </BaseLayout>
</template>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";
import CForm from "@components/forms/CForm.vue";
import CInput from "@components/forms/CInput.vue";
import CButton from "@components/components/CButton.vue";
import { ref } from "vue";

const data = ref({
    email: "",
    password: ""
});

const form = ref(false);

const handleSubmit = () => {
    alert(`Form Submitted ${JSON.stringify(data.value)}`);
};
</script>
