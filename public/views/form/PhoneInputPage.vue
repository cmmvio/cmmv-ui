<template>
  <BaseLayout>
    <c-seo
      section="Phone Input Component"
      description="Learn how to use the CPhoneInput component in CMMV UI. An international phone number input component with country selection, formatting, and validation for phone numbers."
      :keywords="['phone input', 'component', 'ui', 'international', 'phone number', 'validation']"
    />

    <h1>Phone Input</h1>

    <p>
      The <code>CPhoneInput (alias: c-phone-input)</code> component combines a country selector with a phone number
      input field. It provides international phone number formatting based on the selected country, country flag display,
      and automatic country detection when typing a country code.
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
          <td class="border-b px-4 py-2">String</td>
          <td class="border-b px-4 py-2">""</td>
          <td class="border-b px-4 py-2">The formatted phone number with country code (e.g., "+1 (555) 123-4567").</td>
        </tr>
        <tr>
          <td class="border-b px-4 py-2">label</td>
          <td class="border-b px-4 py-2">String</td>
          <td class="border-b px-4 py-2">"Phone"</td>
          <td class="border-b px-4 py-2">The label displayed above the phone input field.</td>
        </tr>
        <tr>
          <td class="border-b px-4 py-2">placeholder</td>
          <td class="border-b px-4 py-2">String</td>
          <td class="border-b px-4 py-2">"Enter phone number"</td>
          <td class="border-b px-4 py-2">Placeholder text for the phone number input field.</td>
        </tr>
        <tr>
          <td class="border-b px-4 py-2">size</td>
          <td class="border-b px-4 py-2">String</td>
          <td class="border-b px-4 py-2">"md"</td>
          <td class="border-b px-4 py-2">Controls the size of the input. Options: <code>sm</code>, <code>md</code>, <code>lg</code>.</td>
        </tr>
        <tr>
          <td class="border-b px-4 py-2">rounded</td>
          <td class="border-b px-4 py-2">String</td>
          <td class="border-b px-4 py-2">"default"</td>
          <td class="border-b px-4 py-2">Border radius style. Options: <code>none</code>, <code>default</code>, <code>full</code>.</td>
        </tr>
        <tr>
          <td class="border-b px-4 py-2">variant</td>
          <td class="border-b px-4 py-2">String</td>
          <td class="border-b px-4 py-2">"default"</td>
          <td class="border-b px-4 py-2">Visual style variant. Options: <code>default</code>, <code>outlined</code>, <code>filled</code>.</td>
        </tr>
        <tr>
          <td class="border-b px-4 py-2">disabled</td>
          <td class="border-b px-4 py-2">Boolean</td>
          <td class="border-b px-4 py-2">false</td>
          <td class="border-b px-4 py-2">When true, disables the input field and country selector.</td>
        </tr>
        <tr>
          <td class="border-b px-4 py-2">required</td>
          <td class="border-b px-4 py-2">Boolean</td>
          <td class="border-b px-4 py-2">false</td>
          <td class="border-b px-4 py-2">When true, displays an asterisk next to the label and enables HTML5 required validation.</td>
        </tr>
        <tr>
          <td class="border-b px-4 py-2">rules</td>
          <td class="border-b px-4 py-2">Array</td>
          <td class="border-b px-4 py-2">[]</td>
          <td class="border-b px-4 py-2">Array of validation functions for the phone number input.</td>
        </tr>
        <tr>
          <td class="border-b px-4 py-2">hint</td>
          <td class="border-b px-4 py-2">String</td>
          <td class="border-b px-4 py-2">null</td>
          <td class="border-b px-4 py-2">Optional hint text displayed below the input field.</td>
        </tr>
        <tr>
          <td class="border-b px-4 py-2">defaultCountry</td>
          <td class="border-b px-4 py-2">String</td>
          <td class="border-b px-4 py-2">"us"</td>
          <td class="border-b px-4 py-2">ISO code for the default selected country (e.g., "us", "gb", "fr").</td>
        </tr>
      </tbody>
    </table-docs>

    <h3>Basic Usage</h3>

    <p>
      The basic usage of the <code>CPhoneInput</code> component allows users to select a country and enter a phone
      number. The component automatically formats the number based on the selected country.
    </p>

    <card-docs>
      <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
        <div class="w-full max-w-md">
          <c-phone-input v-model="phoneBasic" label="Phone Number" />
          <div class="mt-2 text-neutral-600 dark:text-neutral-300">Value: {{ phoneBasic }}</div>
        </div>
      </div>

      <template #code>
        <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-phone-input
    v-model="phoneNumber"
    label="Phone Number"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const phoneNumber = ref("");
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <h3>Different Country Defaults</h3>

    <p>
      You can specify a default country using the <code>defaultCountry</code> prop with an ISO country code.
    </p>

    <card-docs>
      <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
        <div class="w-full max-w-md space-y-4">
          <c-phone-input v-model="phoneBR" label="Brazil Phone" defaultCountry="br" />
          <c-phone-input v-model="phoneJP" label="Japan Phone" defaultCountry="jp" />
          <c-phone-input v-model="phoneDE" label="Germany Phone" defaultCountry="de" />
        </div>
      </div>

      <template #code>
        <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-phone-input
    v-model="phoneBR"
    label="Brazil Phone"
    defaultCountry="br"
  /&gt;

  &lt;c-phone-input
    v-model="phoneJP"
    label="Japan Phone"
    defaultCountry="jp"
  /&gt;

  &lt;c-phone-input
    v-model="phoneDE"
    label="Germany Phone"
    defaultCountry="de"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const phoneBR = ref("");
const phoneJP = ref("");
const phoneDE = ref("");
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <h3>Sizes and Variants</h3>

    <p>
      The component supports different sizes and visual variants to match your design requirements.
    </p>

    <card-docs>
      <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
        <div class="w-full max-w-md space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <c-phone-input v-model="phoneSm" label="Small" size="sm" />
            <c-phone-input v-model="phoneMd" label="Medium" size="md" />
            <c-phone-input v-model="phoneLg" label="Large" size="lg" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <c-phone-input v-model="phoneDefault" label="Default" variant="default" />
            <c-phone-input v-model="phoneOutlined" label="Outlined" variant="outlined" />
            <c-phone-input v-model="phoneFilled" label="Filled" variant="filled" />
          </div>
        </div>
      </div>

      <template #code>
        <pre><code class="code-highlight language-html">&lt;!-- Different Sizes --&gt;
&lt;c-phone-input v-model="phoneSm" label="Small" size="sm" /&gt;
&lt;c-phone-input v-model="phoneMd" label="Medium" size="md" /&gt;
&lt;c-phone-input v-model="phoneLg" label="Large" size="lg" /&gt;

&lt;!-- Different Variants --&gt;
&lt;c-phone-input v-model="phoneDefault" label="Default" variant="default" /&gt;
&lt;c-phone-input v-model="phoneOutlined" label="Outlined" variant="outlined" /&gt;
&lt;c-phone-input v-model="phoneFilled" label="Filled" variant="filled" /&gt;</code></pre>
      </template>
    </card-docs>

    <h3>Validation</h3>

    <p>
      The component supports validation using the <code>rules</code> prop. Rules are functions that return either
      <code>null</code> (valid) or an error message string (invalid).
    </p>

    <card-docs>
      <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
        <div class="w-full max-w-md">
          <c-phone-input
            v-model="phoneValidated"
            label="Phone Number"
            :rules="[
              value => value.replace(/\D/g, '').length >= 10 ? null : 'Phone number must have at least 10 digits',
              value => /^\+\d+\s\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value) ? null : 'Invalid phone format'
            ]"
            hint="Enter a valid US phone number"
          />
        </div>
      </div>

      <template #code>
        <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-phone-input
    v-model="phoneValidated"
    label="Phone Number"
    :rules="[
      value => value.replace(/\D/g, '').length >= 10 ? null : 'Phone number must have at least 10 digits',
      value => /^\+\d+\s\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value) ? null : 'Invalid phone format'
    ]"
    hint="Enter a valid US phone number"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const phoneValidated = ref("");
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <h3>Auto-Detection</h3>

    <p>
      The component can automatically detect the country when the user types a country code. Try typing
      "+44" (UK), "+55" (Brazil), or "+33" (France) in the input field below to see how the component
      automatically selects the corresponding country.
    </p>

    <card-docs>
      <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
        <div class="w-full max-w-md">
          <c-phone-input
            v-model="phoneAutoDetect"
            label="Try typing +44, +55, or +33"
            hint="The component will detect the country automatically"
          />
          <div class="mt-2 text-neutral-600 dark:text-neutral-300">Value: {{ phoneAutoDetect }}</div>
        </div>
      </div>

      <template #code>
        <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-phone-input
    v-model="phoneAutoDetect"
    label="Try typing +44, +55, or +33"
    hint="The component will detect the country automatically"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const phoneAutoDetect = ref("");
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <h3>Disabled State</h3>

    <p>
      You can disable the component using the <code>disabled</code> prop.
    </p>

    <card-docs>
      <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
        <div class="w-full max-w-md">
          <c-phone-input
            v-model="phoneDisabled"
            label="Disabled Phone Input"
            disabled
          />
        </div>
      </div>

      <template #code>
        <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-phone-input
    v-model="phoneDisabled"
    label="Disabled Phone Input"
    disabled
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const phoneDisabled = ref("+1 (555) 123-4567");
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <h3>Events</h3>

    <p>
      The <code>CPhoneInput</code> component emits the following events:
    </p>

    <table-docs>
      <thead>
        <tr>
          <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Event</th>
          <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Payload</th>
          <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border-b px-4 py-2">update:modelValue</td>
          <td class="border-b px-4 py-2">String</td>
          <td class="border-b px-4 py-2">Emitted when the phone number or country changes.</td>
        </tr>
        <tr>
          <td class="border-b px-4 py-2">country-changed</td>
          <td class="border-b px-4 py-2">Object</td>
          <td class="border-b px-4 py-2">Emitted when the selected country changes, with the country object as payload.</td>
        </tr>
      </tbody>
    </table-docs>

    <h3>Methods</h3>

    <p>
      The component exposes the following methods through a template ref:
    </p>

    <table-docs>
      <thead>
        <tr>
          <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Method</th>
          <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border-b px-4 py-2">validate()</td>
          <td class="border-b px-4 py-2">Triggers validation and returns a boolean indicating if the input is valid.</td>
        </tr>
        <tr>
          <td class="border-b px-4 py-2">focus()</td>
          <td class="border-b px-4 py-2">Sets focus to the phone number input field.</td>
        </tr>
      </tbody>
    </table-docs>

    <h3>Tracking Country Changes</h3>

    <p>
      You can listen to country changes using the <code>country-changed</code> event.
    </p>

    <card-docs>
      <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
        <div class="w-full max-w-md">
          <c-phone-input
            v-model="phoneWithCountry"
            label="Phone with Country Tracking"
            @country-changed="onCountryChanged"
          />
          <div class="mt-2 text-neutral-600 dark:text-neutral-300" v-if="selectedCountry">
            Selected country: {{ selectedCountry.name }} ({{ selectedCountry.iso.toUpperCase() }})
          </div>
        </div>
      </div>

      <template #code>
        <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-phone-input
    v-model="phoneWithCountry"
    label="Phone with Country Tracking"
    @country-changed="onCountryChanged"
  /&gt;
  &lt;div v-if="selectedCountry"&gt;
    Selected country: &#123;&#123; selectedCountry.name &#125;&#125; (&#123;&#123; selectedCountry.iso.toUpperCase() &#125;&#125;)
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const phoneWithCountry = ref("");
const selectedCountry = ref(null);

const onCountryChanged = (country) => {
  selectedCountry.value = country;
};
&lt;/script&gt;</code></pre>
      </template>
    </card-docs>

    <PagePagination previous="Number Input" previousLink="/number-input" next="Radio" nextLink="/radio" />
  </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

// Basic example
const phoneBasic = ref("");

// Country examples
const phoneBR = ref("");
const phoneJP = ref("");
const phoneDE = ref("");

// Size examples
const phoneSm = ref("");
const phoneMd = ref("");
const phoneLg = ref("");

// Variant examples
const phoneDefault = ref("");
const phoneOutlined = ref("");
const phoneFilled = ref("");

// Validation example
const phoneValidated = ref("");

// Auto-detection example
const phoneAutoDetect = ref("");

// Disabled example
const phoneDisabled = ref("+1 (555) 123-4567");

// Country tracking example
const phoneWithCountry = ref("");
const selectedCountry = ref(null);

const onCountryChanged = (country) => {
  selectedCountry.value = country;
};
</script>
