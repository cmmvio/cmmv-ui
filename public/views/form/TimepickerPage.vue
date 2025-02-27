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
                    <td><code>modelValue</code></td>
                    <td>String</td>
                    <td><code>""</code></td>
                    <td>Selected time in "HH:mm" format, bound using <code>v-model</code>.</td>
                </tr>
                <tr>
                    <td><code>format</code></td>
                    <td>String</td>
                    <td><code>"24h"</code></td>
                    <td>Time format, supports "12h" (AM/PM) or "24h".</td>
                </tr>
                <tr>
                    <td><code>step</code></td>
                    <td>Number</td>
                    <td><code>30</code></td>
                    <td>Defines the time intervals (in minutes) available for selection.</td>
                </tr>
                <tr>
                    <td><code>label</code></td>
                    <td>String</td>
                    <td><code>""</code></td>
                    <td>Optional label to describe the purpose of the time picker.</td>
                </tr>
                <tr>
                    <td><code>placeholder</code></td>
                    <td>String</td>
                    <td><code>"Pick a time"</code></td>
                    <td>Placeholder text when no time is selected.</td>
                </tr>
                <tr>
                    <td><code>disabled</code></td>
                    <td>Boolean</td>
                    <td><code>false</code></td>
                    <td>Disables the time picker, preventing user interaction.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            The simplest usage of the <code>c-timepicker</code>, allowing the user to select a time using the default 24-hour format.
        </p>

        <c-card variant="flat" class="mx-auto p-4 flex flex-col items-center">
            <c-timepicker v-model="selectedTime" />
        </c-card>

        <pre>
            <code class="code-highlight language-html">&lt;c-timepicker v-model="selectedTime" /&gt;</code>
        </pre>

        <h3>12-Hour Format (AM/PM)</h3>

        <p>
            By setting the <code>format</code> prop to <code>"12h"</code>, the time picker will display and accept values in 12-hour format with AM/PM notation.
        </p>

        <c-card variant="flat" class="mx-auto p-4 flex flex-col items-center">
            <c-timepicker v-model="selectedTime12h" format="12h" />
        </c-card>

        <pre>
            <code class="code-highlight language-html">&lt;c-timepicker v-model="selectedTime12h" format="12h" /&gt;</code>
        </pre>

        <h3>Custom Step Interval</h3>

        <p>
            The <code>step</code> prop allows you to define intervals between available times.
            In this example, the picker shows options every **15 minutes** instead of the default **30 minutes**.
        </p>

        <c-card variant="flat" class="mx-auto p-4 flex flex-col items-center">
            <c-timepicker v-model="selectedTimeStep" :step="15" />
        </c-card>

        <pre>
            <code class="code-highlight language-html">&lt;c-timepicker v-model="selectedTimeStep" :step="15" /&gt;</code>
        </pre>

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
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const selectedTime = ref("");
const selectedTime12h = ref("");
const selectedTimeStep = ref("");
</script>
