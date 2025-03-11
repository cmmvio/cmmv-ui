<template>
    <BaseLayout>
        <h1>OTP Input</h1>

        <p>The <code>COtpInput (alias: c-otp-input)</code> component in the <code>@cmmv/ui</code> framework provides a
            multi-digit input field, designed for OTP (One-Time Password) or similar use cases. It offers customization
            for length, validation, error states, loading overlays, and seamless interaction via keyboard.</p>

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
                    <td class="border-b px-4 py-2">The value bound to the OTP input field using <code>v-model</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">length</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">6</td>
                    <td class="border-b px-4 py-2">Specifies the number of input boxes (OTP length). Allowed range: 4 to
                        8.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">error</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Highlights the input fields with a red border to indicate a
                        validation error.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">loading</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Displays a loading overlay to disable interactions with the input
                        fields.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-white dark:bg-zinc-800"</td>
                    <td class="border-b px-4 py-2">Sets the background color of the input boxes. Accepts TailwindCSS
                        classes.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text-black dark:text-white"</td>
                    <td class="border-b px-4 py-2">Sets the text color of the input boxes. Accepts TailwindCSS classes.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">borderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"border-zinc-800 dark:border-zinc-600 focus:ring-blue-500"</td>
                    <td class="border-b px-4 py-2">Sets the border and focus ring color of the input boxes. Accepts
                        TailwindCSS classes.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Basic -->
        <h3>Basic</h3>

        <p>The <code>COTPInput</code> component is easy to use with minimal configuration.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-otp-input v-model="otpValue" />

                    <div class="text-center">Value: {{ otpValue }}</div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-otp-input v-model="otpValue" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const otpValue = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Custom Length -->
        <h3>Custom Length</h3>

        <p>You can customize the OTP length to match specific requirements, ranging from 4 to 8 digits.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-otp-input v-model="otpValueLength8" :length="8" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-otp-input v-model="otpValueLength8" :length="8" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const otpValueLength8 = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Error State -->
        <h3>Error State</h3>

        <p>The <code>isError</code> property highlights the input fields in red when validation fails.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-otp-input v-model="otpErrorValue" error />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-otp-input v-model="otpErrorValue" error /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const otpErrorValue = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Custom Colors -->
        <h3>Custom Colors</h3>

        <p>
            Customize the component's appearance by changing background, text, and border colors
            to fit your application's design.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-otp-input v-model="otpCustomValue" bgColor="bg-blue-100" textColor="text-blue-800"
                        borderColor="focus:ring-blue-400 border-blue-200" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-otp-input
        v-model="otpCustomValue"
        bgColor="bg-blue-100"
        textColor="text-blue-800"
        borderColor="focus:ring-blue-400 border-blue-200"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const otpCustomValue = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Multiple Instances -->
        <h3>Multiple Instances</h3>

        <p>
            Multiple OTP inputs can be used on a single page, each with independent values and styling.
            This is useful for multi-step authentication flows.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="lg:w-2/5 w-full">
                    <c-otp-input v-model="otpInstance1" />
                    <c-otp-input v-model="otpInstance2" :length="8" bgColor="bg-neutral-100"
                        textColor="text-neutral-800" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-otp-input v-model="otpInstance1" /&gt;
    &lt;c-otp-input
        v-model="otpInstance2"
        :length="8"
        bgColor="bg-neutral-100"
        textColor="text-neutral-800"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const otpInstance1 = ref("");
const otpInstance2 = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Exemples</h3>

        <p>Here is an example of using the <code>c-otp-input</code> component within a card layout to create a
            verification
            screen. The card contains a title, instructions for entering a verification code, and a button to proceed
            with the
            verification. Additionally, it includes a link for users to resend the code if they didn't receive it. This
            implementation demonstrates a practical use case of combining multiple <code>@cmmv/ui</code> components to
            create an
            interactive and visually appealing UI.</p>

        <card-docs>
            <c-card bgColor="bg-neutral-100 dark:bg-neutral-900" textColor="text-neutral-600 dark:text-white"
                maxWidth="300px" rounded="md">
                <template #header>
                    <div class="flex items-center space-x-3 p-3">
                        <h3 class="text-2xl m-auto mt-4 font-bold">Verify Your Account</h3>
                    </div>
                </template>

                <template #content>
                    <div class="py-10 pt-4 text-sm px-8 text-center">
                        <div class="mb-2">
                            A verification code has been sent to and..@gmail.com. Please check your inbox and enter the
                            code below to verify your email address.
                        </div>

                        <c-otp-input v-model="otpValue" />

                        <c-button size="2xl" type="button" class="w-8/12 my-4" :disabled="otpValue.length < 6">
                            VERIFY
                        </c-button>

                        <div>Didn't receive the code? <a href="#">Resend</a></div>
                    </div>
                </template>
            </c-card>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-card
        bgColor="bg-neutral-100 dark:bg-neutral-900"
        textColor="text-neutral-600 dark:text-white"
        maxWidth="400px"
        rounded="md"
    &gt;
        &lt;template #header&gt;
            &lt;div class="flex items-center space-x-3 p-3"&gt;
                &lt;h3 class="text-2xl m-auto mt-4 font-bold"&gt;Verify Your Account&lt;/h3&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        &lt;template #content&gt;
            &lt;div class="py-10 pt-4 text-sm px-8 text-center"&gt;
                &lt;div class="mb-2"&gt;
                    A verification code has been sent to and..@gmail.com.
                    Please check your inbox and enter the code below to verify your email address.
                &lt;/div&gt;

                &lt;c-otp-input v-model="otpValue" /&gt;

                &lt;c-button
                    size="2xl"
                    type="button"
                    class="w-8/12 my-4"
                    :disabled="otpValue.length &lt; 6"
                &gt;
                    VERIFY
                &lt;/c-button&gt;

                &lt;div&gt;Didn't receive the code? &lt;a href="#"&gt;Resend&lt;/a&gt;&lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-card&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const otpValue = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Number Input" previousLink="/number-input" next="Password Input" nextLink="/password-input" />
    </BaseLayout>
</template>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const otpValue = ref("");
const otpValueLength8 = ref("");
const otpErrorValue = ref("");
const otpCustomValue = ref("");
const otpInstance1 = ref("");
const otpInstance2 = ref("");
</script>
