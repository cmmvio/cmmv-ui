<template>
    <BaseLayout>
        <h1>Datepicker</h1>

        <p>The <code>CDatepicker (alias: c-datepicker)</code> component allows users to select a date through an
            interactive calendar. It supports custom formatting, minimum and maximum dates, validation, and interaction
            states.</p>

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
                    <td class="border-b px-4 py-2">Date | Array</td>
                    <td class="border-b px-4 py-2">null</td>
                    <td class="border-b px-4 py-2">The selected date or date range, bound using <code>v-model</code>.
                        For range selection, it's an array of dates.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">min</td>
                    <td class="border-b px-4 py-2">Date</td>
                    <td class="border-b px-4 py-2">null</td>
                    <td class="border-b px-4 py-2">Minimum selectable date.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">max</td>
                    <td class="border-b px-4 py-2">Date</td>
                    <td class="border-b px-4 py-2">null</td>
                    <td class="border-b px-4 py-2">Maximum selectable date.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">placeholder</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'Select a date'</td>
                    <td class="border-b px-4 py-2">Placeholder text for the input field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">format</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'dd/MM/yyyy'</td>
                    <td class="border-b px-4 py-2">Date display format (e.g., 'dd/MM/yyyy', 'yyyy-MM-dd').</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Disables the component, making it non-interactive.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rules</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Validation rules for the date field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">range</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Enables date range selection mode, allowing selection of start and
                        end dates.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Basic Examples -->
        <h3>Basic Examples</h3>

        <p>
            The <code>CDatepicker</code> component provides a user-friendly date selection interface with a calendar
            dropdown.
            Below are basic examples demonstrating its functionality with minimal configuration.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[400px]">
                <div class="w-full max-w-[400px]">
                    <c-datepicker id="example1" label="Basic Datepicker" v-model="basicDate" />
                </div>

                <p class="text-neutral-600 dark:text-neutral-300">Value: {{ basicDate ? formatDateFn(basicDate,
                    'dd/MM/yyyy') : 'No date selected' }}</p>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-datepicker
        id="example1"
        label="Basic Datepicker"
        v-model="date"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const date = ref(null);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Custom Format -->
        <h3>Custom Format</h3>

        <p>
            The <code>CDatepicker</code> component allows you to customize the date format displayed in the input field.
            Use the <code>format</code> prop to specify your preferred date format.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[400px]">
                <div class="w-full max-w-[400px]">
                    <c-datepicker id="format" label="Custom Format" format="MM/dd/yyyy" v-model="customFormatDate" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-datepicker
        id="format"
        label="Custom Format"
        format="MM/dd/yyyy"
        v-model="date"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const date = ref(null);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Min and Max Dates -->
        <h3>Minimum and Maximum Dates</h3>

        <p>
            You can restrict the date selection range using the <code>min</code> and <code>max</code> props.
            This is useful for scenarios like preventing selection of past dates or limiting selection to a specific
            range.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[400px]">
                <div class="w-full max-w-[400px]">
                    <c-datepicker id="minmax" label="Date Range (This month only)" v-model="rangeDate" :min="minDate"
                        :max="maxDate" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-datepicker
        id="minmax"
        label="Date Range (This month only)"
        v-model="date"
        :min="minDate"
        :max="maxDate"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const date = ref(null);
const today = new Date();
const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Validation -->
        <h3>Validation</h3>

        <p>
            The <code>CDatepicker</code> component supports validation rules to ensure users select appropriate dates.
            You can provide custom validation messages when a date is required or doesn't meet specific criteria.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[400px]">
                <div class="w-full max-w-[400px]">
                    <c-datepicker id="validation" label="Required Date" v-model="validationDate"
                        :rules="[value => (value ? null : 'Please select a date')]" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-datepicker
        id="validation"
        label="Required Date"
        v-model="date"
        :rules="[value => (value ? null : 'Please select a date')]"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const date = ref(null);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Disabled State -->
        <h3>Disabled State</h3>

        <p>
            Use the <code>disabled</code> prop to render the datepicker in a disabled state,
            preventing user interaction when needed.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[400px]">
                    <c-datepicker id="disabled" label="Disabled Datepicker" disabled v-model="disabledDate" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-datepicker
        id="disabled"
        label="Disabled Datepicker"
        disabled
        v-model="date"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const date = ref(new Date());
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Date Range Selection -->
        <h3>Date Range Selection</h3>

        <p>
            The <code>CDatepicker</code> component supports selecting a date range, such as for travel bookings with
            departure
            and return dates.
            Use the <code>range</code> prop to enable this feature. The component ensures that the return date cannot be
            before
            the departure date.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[400px]">
                <div class="w-full max-w-[300px]">
                    <c-datepicker id="range" label="Travel Dates" v-model="travelDates" range
                        placeholder="Select departure and return dates" />
                </div>

                <div v-if="travelDates && travelDates.length" class="text-sm text-neutral-600 dark:text-neutral-300">
                    <div v-if="travelDates.length >= 1">Departure: {{ formatDateFn(travelDates[0], 'dd/MM/yyyy') }}
                    </div>
                    <div v-if="travelDates.length >= 2">Return: {{ formatDateFn(travelDates[1], 'dd/MM/yyyy') }}</div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-datepicker
        id="range"
        label="Travel Dates"
        v-model="travelDates"
        range
        placeholder="Select departure and return dates"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const travelDates = ref([]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Combobox" previousLink="/combobox" next="File Upload" nextLink="/file-upload" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";

const basicDate = ref(null);
const customFormatDate = ref(null);
const rangeDate = ref(null);
const validationDate = ref(null);
const disabledDate = ref(new Date());
const travelDates = ref([]);

const today = new Date();
const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

const formatDateFn = (date, format = 'dd/MM/yyyy') => {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
        return '';
    }

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return format
        .replace('dd', day)
        .replace('MM', month)
        .replace('yyyy', year.toString())
        .replace('yy', year.toString().slice(-2));
};
</script>
