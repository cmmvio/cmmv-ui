<template>
    <BaseLayout>
        <c-seo
            section="Timepicker Component"
            description="Learn how to use the CTimepicker component in CMMV UI. A time selection component with 12/24 hour format support, minute intervals, and customizable time restrictions."
            :keywords="['timepicker', 'component', 'ui', 'time selection', 'time input', 'form control']"
        />

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
                    <td>"Select time"</td>
                    <td>Placeholder text when no time is selected.</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>Disables the time picker, preventing user interaction.</td>
                </tr>
                <tr>
                    <td>minTime</td>
                    <td>String</td>
                    <td>""</td>
                    <td>Minimum time that can be selected in "HH:mm" format.</td>
                </tr>
                <tr>
                    <td>maxTime</td>
                    <td>String</td>
                    <td>""</td>
                    <td>Maximum time that can be selected in "HH:mm" format.</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>String</td>
                    <td>"md"</td>
                    <td>Size of the input field: <code>sm</code>, <code>md</code>, <code>lg</code>.</td>
                </tr>
                <tr>
                    <td>rounded</td>
                    <td>String</td>
                    <td>"default"</td>
                    <td>Border radius: <code>none</code>, <code>default</code>, <code>full</code>.</td>
                </tr>
                <tr>
                    <td>variant</td>
                    <td>String</td>
                    <td>"default"</td>
                    <td>Styling variant: <code>default</code>, <code>outlined</code>, <code>filled</code>.</td>
                </tr>
                <tr>
                    <td>bgColor</td>
                    <td>String</td>
                    <td>"bg-white dark:bg-neutral-900"</td>
                    <td>Background color class for the input.</td>
                </tr>
                <tr>
                    <td>textColor</td>
                    <td>String</td>
                    <td>""</td>
                    <td>Text color class for the input.</td>
                </tr>
                <tr>
                    <td>required</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>Whether the field is required.</td>
                </tr>
                <tr>
                    <td>helperText</td>
                    <td>String</td>
                    <td>""</td>
                    <td>Helper text displayed below the input.</td>
                </tr>
                <tr>
                    <td>hiddenHint</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>Whether to hide the helper text.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            The simplest usage of the <code>c-timepicker</code>, allowing the user to select a time using the default 24-hour format.
        </p>

        <card-docs>
            <div class="mx-auto p-4">
                <c-timepicker v-model="selectedTime" label="Select Time" />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-timepicker v-model="selectedTime" label="Select Time" /&gt;
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
            <div class="mx-auto p-4">
                <c-timepicker
                    v-model="selectedTime12h"
                    format="12h"
                    label="12-Hour Format"
                    helperText="Uses AM/PM format"
                />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-timepicker
        v-model="selectedTime12h"
        format="12h"
        label="12-Hour Format"
        helperText="Uses AM/PM format"
    /&gt;
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
            <div class="mx-auto p-4">
                <c-timepicker
                    v-model="selectedTimeStep"
                    :step="15"
                    label="15-Minute Intervals"
                    helperText="Intervals every 15 minutes"
                />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-timepicker
        v-model="selectedTimeStep"
        :step="15"
        label="15-Minute Intervals"
        helperText="Intervals every 15 minutes"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const selectedTimeStep = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Different Sizes and Variants</h3>

        <p>
            The time picker supports different sizes and style variants to match your design.
        </p>

        <card-docs>
            <div class="mx-auto p-4 space-y-4">
                <c-timepicker v-model="timeSmall" size="sm" label="Small size" />
                <c-timepicker v-model="timeOutlined" variant="outlined" label="Outlined variant" />
                <c-timepicker v-model="timeFilled" variant="filled" label="Filled variant" />
                <c-timepicker v-model="timeRounded" rounded="full" label="Rounded full" />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-timepicker v-model="time1" size="sm" label="Small size" /&gt;
    &lt;c-timepicker v-model="time2" variant="outlined" label="Outlined variant" /&gt;
    &lt;c-timepicker v-model="time3" variant="filled" label="Filled variant" /&gt;
    &lt;c-timepicker v-model="time4" rounded="full" label="Rounded full" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const time1 = ref("");
const time2 = ref("");
const time3 = ref("");
const time4 = ref("");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Time Range Limitation</h3>

        <p>
            You can set minimum and maximum times to limit the range of selectable times.
        </p>

        <card-docs>
            <div class="mx-auto p-4">
                <c-timepicker
                    v-model="timeRange"
                    minTime="09:00"
                    maxTime="17:00"
                    label="Business Hours"
                    helperText="Limited to 9 AM - 5 PM"
                    required
                />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-timepicker
        v-model="timeRange"
        minTime="09:00"
        maxTime="17:00"
        label="Business Hours"
        helperText="Limited to 9 AM - 5 PM"
        required
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const timeRange = ref("");
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
const timeSmall = ref("");
const timeOutlined = ref("");
const timeFilled = ref("");
const timeRounded = ref("");
const timeRange = ref("");
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
