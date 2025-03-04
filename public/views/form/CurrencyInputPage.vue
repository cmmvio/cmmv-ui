<template>
    <BaseLayout>
        <h1>Currency Input</h1>

        <p>
            Currency Input component extends the standard input with automatic currency formatting based on the selected
            currency code.
            It provides proper localization for currency symbols, decimal separators, and thousands separators.
        </p>

        <!-- Props -->
        <table-docs>
            <thead>
                <tr class="border-b border-gray-200">
                    <th class="py-3 px-4 text-left font-medium text-sm">Name</th>
                    <th class="py-3 px-4 text-left font-medium text-sm">Type</th>
                    <th class="py-3 px-4 text-left font-medium text-sm">Default</th>
                    <th class="py-3 px-4 text-left font-medium text-sm">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-sm">modelValue</td>
                    <td class="py-3 px-4 text-sm font-mono">String, Number</td>
                    <td class="py-3 px-4 text-sm font-mono">''</td>
                    <td class="py-3 px-4 text-sm">The input value</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-sm">label</td>
                    <td class="py-3 px-4 text-sm font-mono">String</td>
                    <td class="py-3 px-4 text-sm font-mono">''</td>
                    <td class="py-3 px-4 text-sm">Input label</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-sm">placeholder</td>
                    <td class="py-3 px-4 text-sm font-mono">String</td>
                    <td class="py-3 px-4 text-sm font-mono">''</td>
                    <td class="py-3 px-4 text-sm">Input placeholder</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-sm">size</td>
                    <td class="py-3 px-4 text-sm font-mono">String</td>
                    <td class="py-3 px-4 text-sm font-mono">'md'</td>
                    <td class="py-3 px-4 text-sm">Input size (sm, md, lg)</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-sm">variant</td>
                    <td class="py-3 px-4 text-sm font-mono">String</td>
                    <td class="py-3 px-4 text-sm font-mono">'outline'</td>
                    <td class="py-3 px-4 text-sm">Input style variant (outline, filled, underlined)</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-sm">rounded</td>
                    <td class="py-3 px-4 text-sm font-mono">String</td>
                    <td class="py-3 px-4 text-sm font-mono">'md'</td>
                    <td class="py-3 px-4 text-sm">Border radius (none, sm, md, lg, full)</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-sm">disabled</td>
                    <td class="py-3 px-4 text-sm font-mono">Boolean</td>
                    <td class="py-3 px-4 text-sm font-mono">false</td>
                    <td class="py-3 px-4 text-sm">Whether the input is disabled</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-sm">readonly</td>
                    <td class="py-3 px-4 text-sm font-mono">Boolean</td>
                    <td class="py-3 px-4 text-sm font-mono">false</td>
                    <td class="py-3 px-4 text-sm">Whether the input is readonly</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-sm">required</td>
                    <td class="py-3 px-4 text-sm font-mono">Boolean</td>
                    <td class="py-3 px-4 text-sm font-mono">false</td>
                    <td class="py-3 px-4 text-sm">Whether the field is required</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-sm">error</td>
                    <td class="py-3 px-4 text-sm font-mono">String</td>
                    <td class="py-3 px-4 text-sm font-mono">''</td>
                    <td class="py-3 px-4 text-sm">Error message for validation</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-sm">hint</td>
                    <td class="py-3 px-4 text-sm font-mono">String</td>
                    <td class="py-3 px-4 text-sm font-mono">''</td>
                    <td class="py-3 px-4 text-sm">Help text shown below the input</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-sm">floatingLabel</td>
                    <td class="py-3 px-4 text-sm font-mono">Boolean</td>
                    <td class="py-3 px-4 text-sm font-mono">false</td>
                    <td class="py-3 px-4 text-sm">Use floating label style</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-sm">currencyCode</td>
                    <td class="py-3 px-4 text-sm font-mono">String</td>
                    <td class="py-3 px-4 text-sm font-mono">'USD'</td>
                    <td class="py-3 px-4 text-sm">Currency code (USD, EUR, GBP, etc.)</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-sm">showCurrencySymbol</td>
                    <td class="py-3 px-4 text-sm font-mono">Boolean</td>
                    <td class="py-3 px-4 text-sm font-mono">true</td>
                    <td class="py-3 px-4 text-sm">Whether to show the currency symbol</td>
                </tr>
            </tbody>
        </table-docs>

        <card-docs>
            <div class="p-4 bg-gray-100 rounded-lg">
                <c-currency-input v-model="basic" label="Amount" placeholder="Enter amount" showCurrencySymbol />
            </div>
            <div class="mt-4 bg-gray-50 p-4 rounded">
                <pre class="text-xs">{{ basic }}</pre>
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-currency-input
  v-model="amount"
  label="Amount"
  placeholder="Enter amount"
/&gt;</code></pre>
            </template>
        </card-docs>

        <card-docs>
            <div class="p-4 bg-gray-100 rounded-lg space-y-4">
                <c-currency-input v-model="usd" label="Dollar (USD)" currency-code="USD"
                    placeholder="Enter USD amount" showCurrencySymbol />
                <c-currency-input v-model="eur" label="Euro (EUR)" currency-code="EUR" placeholder="Enter EUR amount" showCurrencySymbol />
                <c-currency-input v-model="gbp" label="Pound (GBP)" currency-code="GBP"
                    placeholder="Enter GBP amount" showCurrencySymbol />
                <c-currency-input v-model="jpy" label="Yen (JPY)" currency-code="JPY"
                    placeholder="Enter JPY amount" showCurrencySymbol />
                <c-currency-input v-model="brl" label="Real (BRL)" currency-code="BRL"
                    placeholder="Enter BRL amount" showCurrencySymbol />
            </div>
            <div class="mt-4 bg-gray-50 p-4 rounded">
                <p>USD: <code>{{ usd }}</code></p>
                <p>EUR: <code>{{ eur }}</code></p>
                <p>GBP: <code>{{ gbp }}</code></p>
                <p>JPY: <code>{{ jpy }}</code></p>
                <p>BRL: <code>{{ brl }}</code></p>
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-currency-input
  v-model="usd"
  label="US Dollar (USD)"
  currency-code="USD"
  placeholder="Enter USD amount"
/&gt;

&lt;c-currency-input
  v-model="eur"
  label="Euro (EUR)"
  currency-code="EUR"
  placeholder="Enter EUR amount"
/&gt;

&lt;c-currency-input
  v-model="gbp"
  label="British Pound (GBP)"
  currency-code="GBP"
  placeholder="Enter GBP amount"
/&gt;

&lt;c-currency-input
  v-model="jpy"
  label="Japanese Yen (JPY)"
  currency-code="JPY"
  placeholder="Enter JPY amount"
/&gt;

&lt;c-currency-input
  v-model="brl"
  label="Real (BRL)"
  currency-code="BRL"
  placeholder="Enter BRL amount"
/&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Combobox" previousLink="/combobox" next="Datepicker" nextLink="/datepicker" />
    </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";

const basic = ref('');
const usd = ref('');
const eur = ref('');
const gbp = ref('');
const jpy = ref('');
const brl = ref('');

const validInput = ref('');
const validError = ref('');

const validate = () => {
    if (!validInput.value) {
        validError.value = 'Amount is required';
    } else {
        validError.value = '';
    }
};

const hintInput = ref('');
</script>
