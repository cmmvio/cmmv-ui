<template>
    <BaseLayout>
        <h1>Accordion</h1>

        <p>
            The <code>CAccordion (alias: c-accordion)</code> component allows users to toggle between different sections of content.
            It supports multiple configurations, such as always open mode, color customization, flush styling, and different arrow styles.
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
                    <td>items</td>
                    <td>Array</td>
                    <td>[]</td>
                    <td>Array of objects with title and content properties for each accordion item.</td>
                </tr>
                <tr>
                    <td>alwaysOpen</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>When true, multiple accordion items can be open simultaneously.</td>
                </tr>
                <tr>
                    <td>flush</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>Removes borders and shadows for a cleaner design.</td>
                </tr>
                <tr>
                    <td>headerColor</td>
                    <td>String</td>
                    <td>"bg-gray-100 dark:bg-gray-800"</td>
                    <td>CSS classes for styling the accordion header background and text.</td>
                </tr>
                <tr>
                    <td>bgColor</td>
                    <td>String</td>
                    <td>"bg-white dark:bg-gray-900"</td>
                    <td>CSS classes for styling the accordion background.</td>
                </tr>
                <tr>
                    <td>bgColorContent</td>
                    <td>String</td>
                    <td>"bg-white dark:bg-gray-900"</td>
                    <td>CSS classes for styling the accordion content background.</td>
                </tr>
                <tr>
                    <td>textColor</td>
                    <td>String</td>
                    <td>"text-gray-800 dark:text-white"</td>
                    <td>CSS classes for styling the accordion content text.</td>
                </tr>
                <tr>
                    <td>borderColor</td>
                    <td>String</td>
                    <td>"border-gray-200 dark:border-gray-700"</td>
                    <td>CSS classes for styling the accordion borders.</td>
                </tr>
                <tr>
                    <td>arrowType</td>
                    <td>String</td>
                    <td>"chevron"</td>
                    <td>Type of arrow icon to use. Options: "chevron", "plus", "arrow".</td>
                </tr>
            </tbody>
        </table-docs>

        <card-docs>
            <c-accordion :items="accordionItems" />

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-accordion :items="accordionItems" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const accordionItems = [
    { title: "First Item", content: "This is the first item's content." },
    { title: "Second Item", content: "This is the second item's content." },
    { title: "Third Item", content: "This is the third item's content." },
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Always Open</h3>

        <p>
            The <code>alwaysOpen</code> prop allows multiple accordion items to remain expanded at the same time.
        </p>

        <card-docs>
            <c-accordion :items="accordionItems" alwaysOpen />

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-accordion
        :items="accordionItems"
        alwaysOpen
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const accordionItems = [
    { title: "First Item", content: "This is the first item's content." },
    { title: "Second Item", content: "This is the second item's content." },
    { title: "Third Item", content: "This is the third item's content." },
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Flush Accordion</h3>

        <p>
            The <code>flush</code> variant removes borders and shadows for a cleaner design.
        </p>

        <card-docs>
            <c-accordion :items="accordionItems" flush />

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-accordion
        :items="accordionItems"
        flush
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const accordionItems = [
    { title: "First Item", content: "This is the first item's content." },
    { title: "Second Item", content: "This is the second item's content." },
    { title: "Third Item", content: "This is the third item's content." },
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Colors</h3>

        <p>
            You can set different colors for the accordion header, background, and text using <code>headerColor</code>, <code>bgColor</code>, and <code>textColor</code> props.
        </p>

        <card-docs>
            <c-accordion
                :items="accordionItems"
                headerColor="bg-blue-500 text-white"
                bgColorContent="bg-blue-800"
                bgColor="bg-blue-100"
                borderColor="border-blue-300 dark:border-blue-700"
                textColor="text-white"
            />

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-accordion
        :items="accordionItems"
        headerColor="bg-blue-500 text-white"
        bgColorContent="bg-blue-800"
        bgColor="bg-blue-100"
        borderColor="border-blue-300 dark:border-blue-700"
        textColor="text-white"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const accordionItems = [
    { title: "First Item", content: "This is the first item's content." },
    { title: "Second Item", content: "This is the second item's content." },
    { title: "Third Item", content: "This is the third item's content." },
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="Table"
            previousLink="/table"
            next="Alert"
            nextLink="/alert"
        />
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const accordionItems = [
    { title: "First Item", content: "This is the first item's content." },
    { title: "Second Item", content: "This is the second item's content." },
    { title: "Third Item", content: "This is the third item's content." },
];
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
