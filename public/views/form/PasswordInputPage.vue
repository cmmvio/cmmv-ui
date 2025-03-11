<template>
    <BaseLayout>
        <h1>Password Input</h1>

        <p>The <code>CPasswordInput (alias: c-password-input)</code> component extends the standard input field with specialized features for password management, including strength evaluation, requirement validation, and visual feedback. It offers a comprehensive solution for creating secure password fields with built-in validation rules and visual indicators of password strength.</p>

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
                <!-- Standard Input props -->
                <tr>
                    <td class="border-b px-4 py-2">modelValue</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">The value bound to the password input field using <code>v-model</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">label</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"Password"</td>
                    <td class="border-b px-4 py-2">The label displayed for the password field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">placeholder</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"Enter your password"</td>
                    <td class="border-b px-4 py-2">Placeholder text shown in the password field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Specifies the size of the input field. Options: <code>sm</code>,
                        <code>md</code>, <code>lg</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"default"</td>
                    <td class="border-b px-4 py-2">Controls the border radius of the input field. Options:
                        <code>none</code>, <code>default</code>, <code>full</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">variant</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"default"</td>
                    <td class="border-b px-4 py-2">Styling variant for the input. Options: <code>default</code>,
                        <code>outlined</code>, <code>filled</code>.
                    </td>
                </tr>
                <!-- Password-specific props -->
                <tr>
                    <td class="border-b px-4 py-2">requireUppercase</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Requires at least one uppercase letter in the password.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">requireLowercase</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Requires at least one lowercase letter in the password.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">requireNumbers</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Requires at least one number in the password.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">requireSpecialChars</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Requires at least one special character in the password.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">minLength</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">8</td>
                    <td class="border-b px-4 py-2">Minimum length required for the password.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showStrengthBar</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Shows a visual indicator of password strength.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showRequirements</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Shows a checklist of password requirements.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Basic Examples -->
        <h3>Basic Example</h3>

        <p>The most basic implementation of the <code>CPasswordInput</code> component with default settings.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[400px]">
                    <c-password-input v-model="basicPassword" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-password-input v-model="password" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const password = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Custom Requirements -->
        <h3>Custom Requirements</h3>

        <p>You can customize which password requirements are enforced by using the corresponding props.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[400px]">
                    <c-password-input
                        v-model="customRequirementsPassword"
                        label="Custom Requirements"
                        :requireUppercase="true"
                        :requireLowercase="true"
                        :requireNumbers="true"
                        :requireSpecialChars="false"
                        :minLength="6"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-password-input
        v-model="password"
        label="Custom Requirements"
        :requireUppercase="true"
        :requireLowercase="true"
        :requireNumbers="true"
        :requireSpecialChars="false"
        :minLength="6"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const password = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Always visible feedback -->
        <h3>Always Visible Feedback</h3>

        <p>By default, the strength bar and requirements checklist are only visible when the user starts typing a password. If you want these elements to be visible right from the start, even when the password field is empty, you can modify the <code>CPasswordInput</code> component:</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[400px]">
                    <c-password-input
                        v-model="alwaysVisiblePassword"
                        label="Always Visible Feedback"
                        class="always-visible-feedback"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;!-- Apply a custom class to the component --&gt;
    &lt;c-password-input
        v-model="password"
        label="Always Visible Feedback"
        class="always-visible-feedback"
    /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
/* Override the conditional visibility with CSS */
.always-visible-feedback :deep(.c-password-input > div) {
    display: block !important;
}
&lt;/style&gt;

&lt;script setup&gt;
import { ref } from "vue";

const password = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <p>Alternatively, you can modify the original component to create a variant that always shows the feedback elements:</p>

        <card-docs>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;!-- AlwaysVisiblePasswordInput.vue --&gt;
&lt;template&gt;
    &lt;div class="c-password-input"&gt;
        &lt;!-- Same as CPasswordInput but remove the password condition from v-if directives --&gt;
        &lt;c-input
            v-model="password"
            type="password"
            :label="label"
            :placeholder="placeholder"
            v-bind="$attrs"
            ref="inputRef"
        &gt;
            &lt;template v-if="$slots.icon" #icon&gt;
                &lt;slot name="icon"&gt;&lt;/slot&gt;
            &lt;/template&gt;
        &lt;/c-input&gt;

        &lt;!-- Strength bar - removed "password" from condition --&gt;
        &lt;div v-if="showStrengthBar" class="mt-2"&gt;
            &lt;!-- Strength bar contents --&gt;
        &lt;/div&gt;

        &lt;!-- Requirements list - removed "password" from condition --&gt;
        &lt;div v-if="showRequirements" class="mt-2 text-sm"&gt;
            &lt;!-- Requirements list contents --&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Strength Bar Only -->
        <h3>Strength Bar Only</h3>

        <p>You can show only the strength bar without displaying the requirements checklist.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[400px]">
                    <c-password-input
                        v-model="strengthBarOnlyPassword"
                        label="With Strength Bar Only"
                        :showStrengthBar="true"
                        :showRequirements="false"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-password-input
        v-model="password"
        label="With Strength Bar Only"
        :showStrengthBar="true"
        :showRequirements="false"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const password = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Requirements Only -->
        <h3>Requirements Checklist Only</h3>

        <p>You can show only the requirements checklist without displaying the strength bar.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[400px]">
                    <c-password-input
                        v-model="requirementsOnlyPassword"
                        label="With Requirements Only"
                        :showStrengthBar="false"
                        :showRequirements="true"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-password-input
        v-model="password"
        label="With Requirements Only"
        :showStrengthBar="false"
        :showRequirements="true"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const password = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Simple Password Input -->
        <h3>Simple Password Input</h3>

        <p>For a more minimal experience, you can disable both the strength bar and requirements checklist.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[400px]">
                    <c-password-input
                        v-model="simplePassword"
                        label="Simple Password Input"
                        :showStrengthBar="false"
                        :showRequirements="false"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-password-input
        v-model="password"
        label="Simple Password Input"
        :showStrengthBar="false"
        :showRequirements="false"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const password = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Variants -->
        <h3>Variants</h3>

        <p>The <code>CPasswordInput</code> component inherits all styling variants from the base input component.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[400px]">
                    <c-password-input
                        v-model="defaultVariantPassword"
                        label="Default Variant"
                        variant="default"
                        class="mb-4"
                        :showRequirements="false"
                    />
                    <c-password-input
                        v-model="outlinedVariantPassword"
                        label="Outlined Variant"
                        variant="outlined"
                        class="mb-4"
                        :showRequirements="false"
                    />
                    <c-password-input
                        v-model="filledVariantPassword"
                        label="Filled Variant"
                        variant="filled"
                        :showRequirements="false"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-password-input
        v-model="defaultPassword"
        label="Default Variant"
        variant="default"
    /&gt;
    &lt;c-password-input
        v-model="outlinedPassword"
        label="Outlined Variant"
        variant="outlined"
    /&gt;
    &lt;c-password-input
        v-model="filledPassword"
        label="Filled Variant"
        variant="filled"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const defaultPassword = ref("");
const outlinedPassword = ref("");
const filledPassword = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- With Icon -->
        <h3>With Icon</h3>

        <p>You can add an icon to the password input using the icon slot, similar to the base input component.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[400px]">
                    <c-password-input
                        v-model="iconPassword"
                        label="Password with Icon"
                        floatingLabel
                        :showRequirements="false"
                    >
                        <template #icon>
                            <IconLockClosed class="w-6 h-6 text-neutral-600 dark:text-white" aria-hidden="true" />
                        </template>
                    </c-password-input>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-password-input
        v-model="password"
        label="Password with Icon"
        floatingLabel
    &gt;
        &lt;template #icon&gt;
            &lt;IconLockClosed class="w-6 h-6 text-neutral-600 dark:text-white" aria-hidden="true" /&gt;
        &lt;/template&gt;
    &lt;/c-password-input&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const password = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Working with Validation -->
        <h3>Working with Validation</h3>

        <p>The <code>CPasswordInput</code> component exposes methods and computed properties to work with validation in your forms.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[400px]">
                    <c-password-input
                        v-model="validationPassword"
                        label="Create Password"
                        ref="passwordRef"
                    />

                    <div class="mt-4">
                        <c-button @click="validatePassword" variant="primary">Validate Password</c-button>
                    </div>

                    <div v-if="validationResult !== null" class="mt-4 p-3 rounded" :class="validationResult ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                        {{ validationResult ? 'Password is valid!' : 'Password does not meet all requirements.' }}
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-password-input
        v-model="password"
        label="Create Password"
        ref="passwordRef"
    /&gt;

    &lt;div class="mt-4"&gt;
        &lt;c-button @click="validatePassword" variant="primary"&gt;Validate Password&lt;/c-button&gt;
    &lt;/div&gt;

    &lt;div v-if="validationResult !== null" class="mt-4 p-3 rounded" :class="validationResult ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"&gt;
        &123;&123; validationResult ? 'Password is valid!' : 'Password does not meet all requirements.' &125;&125;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const password = ref("");
const passwordRef = ref(null);
const validationResult = ref(null);

function validatePassword() {
    validationResult.value = passwordRef.value.isValid;
}
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Password Confirmation -->
        <h3>Password Confirmation</h3>

        <p>Here's an example of using two <code>CPasswordInput</code> components for password creation and confirmation.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[400px]">
                    <c-password-input
                        v-model="createPassword"
                        label="Create Password"
                        class="mb-4"
                    />
                    <c-password-input
                        v-model="confirmPassword"
                        label="Confirm Password"
                        :rules="[value => value === createPassword || 'Passwords do not match']"
                        :showStrengthBar="false"
                        :showRequirements="false"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-password-input
        v-model="createPassword"
        label="Create Password"
    /&gt;
    &lt;c-password-input
        v-model="confirmPassword"
        label="Confirm Password"
        :rules="[value => value === createPassword || 'Passwords do not match']"
        :showStrengthBar="false"
        :showRequirements="false"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const createPassword = ref("");
const confirmPassword = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Exposed Properties and Methods -->
        <h3>Exposed Properties and Methods</h3>

        <p>The <code>CPasswordInput</code> component exposes several useful properties and methods:</p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Name</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Type</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">validate</td>
                    <td class="border-b px-4 py-2">Method</td>
                    <td class="border-b px-4 py-2">Validates the password against all rules and requirements.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">isValid</td>
                    <td class="border-b px-4 py-2">Computed Boolean</td>
                    <td class="border-b px-4 py-2">Returns whether the password meets all requirements.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">strengthPercentage</td>
                    <td class="border-b px-4 py-2">Computed Number</td>
                    <td class="border-b px-4 py-2">Returns the calculated strength of the password as a percentage (0-100).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">strengthLabel</td>
                    <td class="border-b px-4 py-2">Computed String</td>
                    <td class="border-b px-4 py-2">Returns a human-readable label of the password strength (Very Weak, Weak, Moderate, Strong, Very Strong).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">inputRef</td>
                    <td class="border-b px-4 py-2">Ref</td>
                    <td class="border-b px-4 py-2">Reference to the underlying CInput component.</td>
                </tr>
            </tbody>
        </table-docs>

        <PagePagination previous="Input" previousLink="/input" next="Number Input" nextLink="/number-input" />
    </BaseLayout>
</template>

<style scoped>
.code-highlight {
    white-space: pre;
}

/* Override for always visible feedback example */
.always-visible-feedback :deep(.c-password-input > div) {
    display: block !important;
}
</style>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";
import IconLockClosed from "../../../src/components/icons/IconLockClosed.vue";

// Example passwords
const basicPassword = ref("");
const customRequirementsPassword = ref("");
const strengthBarOnlyPassword = ref("");
const requirementsOnlyPassword = ref("");
const simplePassword = ref("");
const defaultVariantPassword = ref("");
const outlinedVariantPassword = ref("");
const filledVariantPassword = ref("");
const iconPassword = ref("");
const validationPassword = ref("");
const createPassword = ref("");
const confirmPassword = ref("");
const alwaysVisiblePassword = ref("");

// Reference to password component for validation example
const passwordRef = ref(null);
const validationResult = ref(null);

// Validation function
function validatePassword() {
    validationResult.value = passwordRef.value?.isValid;
}
</script>
