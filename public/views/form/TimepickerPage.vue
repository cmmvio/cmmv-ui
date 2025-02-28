<template>
    <BaseLayout>
        <h1>TimePicker</h1>

        <p>
            The <code>CTimepicker (alias:c-timepicker)</code> component provides an interactive way to select a time, supporting
            both 12-hour (AM/PM) and 24-hour formats. It allows customization of the time intervals to fit
            different scheduling needs.
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
                    <td>String</td>
                    <td>""</td>
                    <td>Selected time in "HH:mm" format, bound using <code>v-model</code>.</td>
                </tr>
                <tr>
                    <td>format</td>
                    <td>String</td>
                    <td>"24h"</td>
                    <td>Time format, supports "12h" (AM/PM) or "24h".</td>
                </tr>
                <tr>
                    <td>step</td>
                    <td>Number</td>
                    <td>30</td>
                    <td>Defines the time intervals (in minutes) available for selection.</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>String</td>
                    <td>""</td>
                    <td>Optional label to describe the purpose of the time picker.</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>String</td>
                    <td>"Pick a time"</td>
                    <td>Placeholder text when no time is selected.</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>Disables the time picker, preventing user interaction.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            The simplest usage of the <code>c-timepicker</code>, allowing the user to select a time using the default 24-hour format.
        </p>

        <card-docs>
            <div class="mx-auto p-4 flex flex-col items-center">
                <c-timepicker v-model="selectedTime" />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-timepicker v-model="selectedTime" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const selectedTime = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>12-Hour Format (AM/PM)</h3>

        <p>
            By setting the <code>format</code> prop to <code>"12h"</code>, the time picker will display and accept values in 12-hour format with AM/PM notation.
        </p>

        <card-docs>
            <div class="mx-auto p-4 flex flex-col items-center">
                <c-timepicker v-model="selectedTime12h" format="12h" />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-timepicker v-model="selectedTime12h" format="12h" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const selectedTime12h = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Step Interval</h3>

        <p>
            The <code>step</code> prop allows you to define intervals between available times.
            In this example, the picker shows options every **15 minutes** instead of the default **30 minutes**.
        </p>

        <card-docs>
            <div class="mx-auto p-4 flex flex-col items-center">
                <c-timepicker v-model="selectedTimeStep" :step="15" />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-timepicker v-model="selectedTimeStep" :step="15" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const selectedTimeStep = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="Textarea"
            previousLink="/textarea"
            next="Toggle"
            nextLink="/toggle"
        />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const selectedTime = ref("");
const selectedTime12h = ref("");
const selectedTimeStep = ref("");
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
