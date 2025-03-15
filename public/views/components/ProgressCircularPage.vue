<template>
    <BaseLayout>
        <c-seo
            section="Progress Circular Component"
            description="Learn how to use the CProgressCircular component in CMMV UI. A circular progress indicator for displaying progress or loading states with customizable size, color, and animation options."
            :keywords="['progress circular', 'component', 'ui', 'spinner', 'loading', 'circular progress']"
        />

        <h1>Progress Circular</h1>

        <p>The <code>CProgressCircular (alias: c-progress-circular)</code> component is a flexible and customizable
            circular progress indicator for both determinate and indeterminate states. Below, you'll find examples and
            detailed usage of all the props supported by this component.</p>

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
                    <td class="border-b px-4 py-2">value</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">0</td>
                    <td class="border-b px-4 py-2">The progress value ranging from 0 to 100 for determinate mode.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">100</td>
                    <td class="border-b px-4 py-2">Specifies the diameter of the progress circle in pixels.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">width</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">10</td>
                    <td class="border-b px-4 py-2">Defines the thickness of the progress stroke.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"#d3d3d3"</td>
                    <td class="border-b px-4 py-2">Sets the background stroke color for the circular progress.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">fillColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"#4caf50"</td>
                    <td class="border-b px-4 py-2">Specifies the color of the progress stroke.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">indeterminate</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">When true, displays an animated indeterminate progress indicator.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rotate</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">0</td>
                    <td class="border-b px-4 py-2">Adjusts the starting position of the progress arc (0-360 degrees).
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Progress Circles</h3>

        <p>Circular progress indicators are perfect for displaying progress in a compact, visually appealing way. You
            can customize the size, color, and thickness to match your application's design.</p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-progress-circular :value="20" :size="50" :fillColor="'#4caf50'" :width="10"></c-progress-circular>
                <c-progress-circular :value="40" :size="70" :fillColor="'#ff9800'" :width="10"></c-progress-circular>
                <c-progress-circular :value="60" :size="90" :fillColor="'#2196f3'" :width="8"></c-progress-circular>
                <c-progress-circular :value="80" :size="110" :fillColor="'#f44336'" :width="10"></c-progress-circular>
                <c-progress-circular :value="100" :size="130" :fillColor="'#9c27b0'" :width="10"></c-progress-circular>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div class="flex space-x-4"&gt;
        &lt;c-progress-circular
            :value="20"
            :size="50"
            :fillColor="'#4caf50'"
            :width="5"
        /&gt;
        &lt;c-progress-circular
            :value="40"
            :size="70"
            :fillColor="'#ff9800'"
            :width="10"
        /&gt;
        &lt;c-progress-circular
            :value="60"
            :size="90"
            :fillColor="'#2196f3'"
            :width="8"
        /&gt;
        &lt;c-progress-circular
            :value="80"
            :size="110"
            :fillColor="'#f44336'"
            :width="12"
        /&gt;
        &lt;c-progress-circular
            :value="100"
            :size="130"
            :fillColor="'#9c27b0'"
            :width="15"
        /&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Content Inside Progress Circle</h3>

        <p>Use the default slot to add custom content inside the progress circle, such as text, percentages, or icons.
        </p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-progress-circular :value="75" :size="100" :fillColor="'#4caf50'" :width="8">
                    <template v-slot:default>
                        75%
                    </template>
                </c-progress-circular>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-progress-circular
        :value="75"
        :size="100"
        :fillColor="'#4caf50'"
        :width="8"&gt;
        &lt;template v-slot:default&gt;
            75%
        &lt;/template&gt;
    &lt;/c-progress-circular&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Indeterminate Progress</h3>

        <p>The <code>indeterminate</code> prop creates an animated loading indicator, ideal for scenarios where the
            progress is
            unknown or cannot be calculated, such as initial loading states or background processes.</p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-progress-circular indeterminate :size="100" :fillColor="'#4caf50'" :width="8" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-progress-circular
        indeterminate
        :size="100"
        :fillColor="'#4caf50'"
        :width="8"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Different Sizes</h3>

        <p>The <code>size</code> prop defines the diameter of the progress circle in pixels, allowing you to create
            indicators
            that fit perfectly in your UI, from small inline indicators to large, prominent displays.</p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-progress-circular :value="50" :size="80" :fillColor="'#ff5722'" :width="10"></c-progress-circular>
                <c-progress-circular :value="50" :size="120" :fillColor="'#03a9f4'" :width="10"></c-progress-circular>
                <c-progress-circular :value="50" :size="160" :fillColor="'#e91e63'" :width="10"></c-progress-circular>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div class="flex space-x-4"&gt;
        &lt;c-progress-circular
            :value="50"
            :size="80"
            :fillColor="'#ff5722'"
            :width="10"
        /&gt;
        &lt;c-progress-circular
            :value="50"
            :size="120"
            :fillColor="'#03a9f4'"
            :width="10"
        /&gt;
        &lt;c-progress-circular
            :value="50"
            :size="160"
            :fillColor="'#e91e63'"
            :width="10"
        /&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Rotation</h3>

        <p>The <code>rotate</code> prop adjusts the starting position of the progress arc, ranging from 0 to 360
            degrees. This
            allows you to create unique visual effects or align multiple progress circles in different orientations.</p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-progress-circular :value="25" :rotate="0" :fillColor="'#ff9800'" :size="100"
                    :width="8"></c-progress-circular>
                <c-progress-circular :value="50" :rotate="90" :fillColor="'#4caf50'" :size="100"
                    :width="8"></c-progress-circular>
                <c-progress-circular :value="75" :rotate="180" :fillColor="'#2196f3'" :size="100"
                    :width="8"></c-progress-circular>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div class="flex space-x-4"&gt;
        &lt;c-progress-circular
            :value="25"
            :rotate="0"
            :fillColor="'#ff9800'"
            :size="100"
            :width="8"
        /&gt;
        &lt;c-progress-circular
            :value="50"
            :rotate="90"
            :fillColor="'#4caf50'"
            :size="100"
            :width="8"
        /&gt;
        &lt;c-progress-circular
            :value="75"
            :rotate="180"
            :fillColor="'#2196f3'"
            :size="100"
            :width="8"
        /&gt;
    &lt;/div&gt;
    &lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Background Color</h3>

        <p>The <code>bgColor</code> prop sets the background circle's stroke color, allowing you to create high-contrast
            indicators or match your application's color scheme.</p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-progress-circular :value="70" :fillColor="'#8e44ad'" :bgColor="'#000000'" :size="100"
                    :width="8"></c-progress-circular>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-progress-circular
        :value="70"
        :fillColor="'#8e44ad'"
        :bgColor="'#000000'"
        :size="100"
        :width="8"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Real-Time Progress Animation</h3>

        <p>This example demonstrates a real-time progress animation with dynamic updates. The progress value increases
            continuously and resets when it reaches 100%, creating a looping effect that's perfect for ongoing processes
            or
            demonstrations.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-center space-y-4">
                <c-progress-circular :value="dynamicValue" :fillColor="'#03a9f4'" :size="120" :width="10">
                    <template v-slot:default>
                        {{ dynamicValue }}%
                    </template>
                </c-progress-circular>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div&gt;
        &lt;c-progress-circular
            :value="dynamicValue"
            :fillColor="'#03a9f4'"
            :size="120"
            :width="10"
        &gt;
            &lt;template v-slot:default&gt;
                &#123;&#123; dynamicValue &#125;&#125;%
            &lt;/template&gt;
        &lt;/c-progress-circular&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
    import { ref, onMounted } from "vue";

    const dynamicValue = ref(0);

    onMounted(() => {
        setInterval(() => {
            dynamicValue.value = (dynamicValue.value + 1) % 101; // Increment and reset at 100
        }, 100); // Update every 100ms
    });
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Dashboard Example</h3>

        <p>Circular progress indicators are perfect for dashboards and analytics displays. This example shows how to
            create a
            set of indicators for different metrics with custom styling and content.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md flex flex-col items-center">
                        <h4 class="text-lg font-medium mb-4 text-neutral-800 dark:text-white">CPU Usage</h4>
                        <c-progress-circular :value="65" :fillColor="'#f44336'" :size="120" :width="10">
                            <template v-slot:default>
                                <div class="text-center">
                                    <div class="text-xl font-bold">65%</div>
                                    <div class="text-xs text-neutral-500">4.2 GHz</div>
                                </div>
                            </template>
                        </c-progress-circular>
                    </div>

                    <div class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md flex flex-col items-center">
                        <h4 class="text-lg font-medium mb-4 text-neutral-800 dark:text-white">Memory</h4>
                        <c-progress-circular :value="42" :fillColor="'#4caf50'" :size="120" :width="10">
                            <template v-slot:default>
                                <div class="text-center">
                                    <div class="text-xl font-bold">42%</div>
                                    <div class="text-xs text-neutral-500">6.7 GB</div>
                                </div>
                            </template>
                        </c-progress-circular>
                    </div>

                    <div class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md flex flex-col items-center">
                        <h4 class="text-lg font-medium mb-4 text-neutral-800 dark:text-white">Disk Space</h4>
                        <c-progress-circular :value="78" :fillColor="'#2196f3'" :size="120" :width="10">
                            <template v-slot:default>
                                <div class="text-center">
                                    <div class="text-xl font-bold">78%</div>
                                    <div class="text-xs text-neutral-500">234 GB</div>
                                </div>
                            </template>
                        </c-progress-circular>
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div class="grid grid-cols-1 md:grid-cols-3 gap-6"&gt;
        &lt;div class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md flex flex-col items-center"&gt;
            &lt;h4 class="text-lg font-medium mb-4 text-neutral-800 dark:text-white"&gt;CPU Usage&lt;/h4&gt;
            &lt;c-progress-circular
                :value="65"
                :fillColor="'#f44336'"
                :size="120"
                :width="10"
            &gt;
                &lt;template v-slot:default&gt;
                    &lt;div class="text-center"&gt;
                        &lt;div class="text-xl font-bold"&gt;65%&lt;/div&gt;
                        &lt;div class="text-xs text-neutral-500"&gt;4.2 GHz&lt;/div&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/c-progress-circular&gt;
        &lt;/div&gt;

        &lt;div class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md flex flex-col items-center"&gt;
            &lt;h4 class="text-lg font-medium mb-4 text-neutral-800 dark:text-white"&gt;Memory&lt;/h4&gt;
            &lt;c-progress-circular
                :value="42"
                :fillColor="'#4caf50'"
                :size="120"
                :width="10"
            &gt;
                &lt;template v-slot:default&gt;
                    &lt;div class="text-center"&gt;
                        &lt;div class="text-xl font-bold"&gt;42%&lt;/div&gt;
                        &lt;div class="text-xs text-neutral-500"&gt;6.7 GB&lt;/div&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/c-progress-circular&gt;
        &lt;/div&gt;

        &lt;div class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md flex flex-col items-center"&gt;
            &lt;h4 class="text-lg font-medium mb-4 text-neutral-800 dark:text-white"&gt;Disk Space&lt;/h4&gt;
            &lt;c-progress-circular
                :value="78"
                :fillColor="'#2196f3'"
                :size="120"
                :width="10"
            &gt;
                &lt;template v-slot:default&gt;
                    &lt;div class="text-center"&gt;
                        &lt;div class="text-xl font-bold"&gt;78%&lt;/div&gt;
                        &lt;div class="text-xs text-neutral-500"&gt;234 GB&lt;/div&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/c-progress-circular&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Progress Bar" previousLink="/progress-bar" next="Rating" nextLink="/rating" />
    </BaseLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import PagePagination from "../../layout/PagePagination.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import CProgressCircular from "@components/components/CProgressCircular.vue";

const value = ref(90);
const dynamicValue = ref(0);

onMounted(() => {
    setInterval(() => {
        dynamicValue.value = (dynamicValue.value + 1) % 101; // Increment and reset at 100
    }, 100); // Update every 100ms
});
</script>

<style scoped>
.code-highlight {
    white-space: pre;
    font-family: monospace;
}
</style>
