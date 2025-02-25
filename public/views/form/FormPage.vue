<template>
    <BaseLayout>
        <h1>Form</h1>

        <p>
            The <code>CForm (alias: c-form)</code> component in the <code>@cmmv/ui</code> framework provides an easy-to-use form container with built-in support for validation, submission handling, and data binding via <code>v-model</code>. It is designed to work seamlessly with input components like <code>CInput</code>, allowing developers to create robust forms with minimal effort.
        </p>

        <!-- Basic Example -->
        <h3 class="text-lg font-semibold mt-8">Example</h3>

        <p>
            Below is a basic example of using the <code>CForm</code> component to create a login form. It demonstrates the integration with <code>CInput</code> for validation and <code>CButton</code> for form submission.
        </p>

        <c-card
            variant="flat"
            bgColor="bg-white dark:bg-zinc-800 w-6/12 m-auto"
            class="p-8"
        >
            <div class="m-auto w-6/12 mb-2 max-w-[500px]">
                <h1 class="mb-4">Login</h1>

                <c-form
                    v-model="form"
                    @submit.prevent="handleSubmit"
                >
                    <c-input
                        v-model="data.email"
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        hint="Enter your email to login"
                        :rules="[value => !value && 'Email is required']"
                        clearable
                    />

                    <c-input
                        v-model="data.password"
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        :rules="[value => !value && 'Password is required']"
                    />

                    <c-button
                        class="w-full pb-4 pt-4"
                        type="submit"
                        buttonType="button"
                        size="2xl"
                        :disabled="!form"
                    >Login</c-button>
                </c-form>
            </div>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-card
        bgColor=&quot;bg-white dark:bg-zinc-800 w-6/12 m-auto&quot;
        class=&quot;p-8&quot;
    &gt;
        &lt;h1 class=&quot;mb-4&quot;&gt;Login&lt;/h1&gt;

        &lt;c-form
            v-model=&quot;form&quot;
            @submit.prevent=&quot;handleSubmit&quot;
        &gt;
            &lt;div class="m-auto w-6/12"&gt;
                &lt;c-input
                    v-model=&quot;data.email&quot;
                    label=&quot;Email&quot;
                    type=&quot;email&quot;
                    placeholder=&quot;Enter your email&quot;
                    :rules=&quot;[value =&gt; !value &amp;&amp; 'Email is required']&quot;
                    clearable
                /&gt;

                &lt;c-input
                    v-model=&quot;data.password&quot;
                    type=&quot;password&quot;
                    label=&quot;Password&quot;
                    placeholder=&quot;Enter your password&quot;
                    :rules=&quot;[value =&gt; !value &amp;&amp; 'Password is required']&quot;
                /&gt;

                &lt;c-button
                    class=&quot;w-full pb-4 pt-4&quot;
                    type=&quot;submit&quot;
                    buttonType=&quot;button&quot;
                    size=&quot;2xl&quot;
                    :disabled=&quot;!form&quot;
                &gt;Login&lt;/c-button&gt;
            &lt;/div&gt;
        &lt;/c-form&gt;
    &lt;/c-card&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &quot;vue&quot;;

const data = ref({
    email: &quot;&quot;,
    password: &quot;&quot;
});

const handleSubmit = () =&gt; {
    console.log(&quot;Form Submitted&quot;, data.value);
};
&lt;/script&gt;</code>
</pre>

        <!-- Features -->
        <h3>Features</h3>

        <br/>

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
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Prop</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Type</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Default</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
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
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Event</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2"><code>submit</code></td>
                    <td class="border-b px-4 py-2">Emitted when the form is submitted.</td>
                </tr>
            </tbody>
        </table-docs>

        <PagePagination
            previous="Checkbox"
            previousLink="/checkbox"
            next="Input"
            nextLink="/input"
        />
    </BaseLayout>
</template>

<style scoped>
.code-hightlight {
    white-space: pre;
}
</style>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CCard from "@components/layout/CCard.vue";
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
