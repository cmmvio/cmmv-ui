
<template>
    <BaseLayout>
        <h1>Progress Circlar</h1>

        <p>The <code>CProgressCircular (alias: c-progress-circular)</code> component is a flexible and customizable progress indicator for both determinate and indeterminate states. Below, you'll find examples and detailed usage of all the props supported by this component.</p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Prop</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Type</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Default</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
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
                    <td class="border-b px-4 py-2">When true, displays an animated indeterminate progress indicator.</td>
                </tr>
            </tbody>
        </table-docs>

        <c-card
            variant="flat"
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-progress-circular :value="20" :size="50" :fillColor="'#4caf50'" :width="10"></c-progress-circular>
            <c-progress-circular :value="40" :size="70" :fillColor="'#ff9800'" :width="10"></c-progress-circular>
            <c-progress-circular :value="60" :size="90" :fillColor="'#2196f3'" :width="8"></c-progress-circular>
            <c-progress-circular :value="80" :size="110" :fillColor="'#f44336'" :width="10"></c-progress-circular>
            <c-progress-circular :value="100" :size="130" :fillColor="'#9c27b0'" :width="10"></c-progress-circular>
        </c-card>

        <pre>
    <code class="code-highlight language-vue">&lt;template&gt;
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
&lt;/template&gt;</code>
</pre>

        <h3>Slot Content</h3>

        <p>Use the default slot to add custom content inside the progress circle.</p>

        <c-card
            variant="flat"
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-progress-circular :value="75" :size="100" :fillColor="'#4caf50'" :width="8">
                <template v-slot:default>
                    75%
                </template>
            </c-progress-circular>
        </c-card>

        <pre>
    <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-progress-circular
        :value="75"
        :size="100"
        :fillColor="'#4caf50'"
        :width="8"&gt;
        &lt;template v-slot:default&gt;
            75%
        &lt;/template&gt;
    &lt;/c-progress-circular&gt;
&lt;/template&gt;</code>
</pre>

        <br/>

        <h3>Indeterminate Progress</h3>

        <p>The <code>indeterminate</code> prop creates an animated loading indicator, ideal for scenarios where the progress is unknown.</p>

        <c-card
            variant="flat"
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-progress-circular
                indeterminate
                :size="100"
                :fillColor="'#4caf50'"
                :width="8"
            />
        </c-card>

        <pre>
    <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-progress-circular
        indeterminate
        :size="100"
        :fillColor="'#4caf50'"
        :width="8"
    /&gt;
&lt;/template&gt;</code>
</pre>

        <h3>Size Prop</h3>

        <p>The <code>size</code> prop defines the diameter of the progress circle in pixels.</p>

        <c-card
            variant="flat"
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-progress-circular :value="50" :size="80" :fillColor="'#ff5722'" :width="10"></c-progress-circular>
            <c-progress-circular :value="50" :size="120" :fillColor="'#03a9f4'" :width="10"></c-progress-circular>
            <c-progress-circular :value="50" :size="160" :fillColor="'#e91e63'" :width="10"></c-progress-circular>
        </c-card>

        <pre>
    <code class="code-highlight language-vue">&lt;template&gt;
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
&lt;/template&gt;</code>
</pre>

        <h3>Rotate Prop</h3>

        <p>The <code>rotate</code> prop adjusts the starting position of the progress arc. It ranges from 0 to 360 degrees.</p>

        <c-card
            variant="flat"
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-progress-circular :value="25" :rotate="0" :fillColor="'#ff9800'" :size="100" :width="8"></c-progress-circular>
            <c-progress-circular :value="50" :rotate="90" :fillColor="'#4caf50'" :size="100" :width="8"></c-progress-circular>
            <c-progress-circular :value="75" :rotate="180" :fillColor="'#2196f3'" :size="100" :width="8"></c-progress-circular>
        </c-card>

        <pre>
    <code class="code-highlight language-vue">&lt;template&gt;
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
    &lt;/template&gt;</code>
</pre>

        <h3>Background Color</h3>

        <p>The <code>bgColor</code> prop sets the background circle's stroke color.</p>

        <c-card
            variant="flat"
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-progress-circular
                :value="70"
                :fillColor="'#8e44ad'"
                :bgColor="'#000000'"
                :size="100"
                :width="8"
            ></c-progress-circular>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
            &lt;c-progress-circular
                :value="70"
                :fillColor="'#8e44ad'"
                :bgColor="'#000000'"
                :size="100"
                :width="8"
            /&gt;
            &lt;/template&gt;</code>
        </pre>

        <h3>Real-Time Progress</h3>

        <p>This example demonstrates a real-time progress animation. The progress value updates dynamically, and when it reaches 100%, it resets to 0 and starts again.</p>

        <c-card
            variant="flat"
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-center space-y-4"
        >
            <c-progress-circular
                :value="dynamicValue"
                :fillColor="'#03a9f4'"
                :size="120"
                :width="10"
            >
                <template v-slot:default>
                    {{ dynamicValue }}%
                </template>
            </c-progress-circular>
        </c-card>

        <pre>
    <code class="code-highlight language-vue">&lt;template&gt;
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
&lt;/script&gt;</code>
        </pre>

        <PagePagination
            previous="Progress Bar"
            previousLink="/progress-bar"
            next="Rating"
            nextLink="/rating"
        />
    </BaseLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import PagePagination from "../../layout/PagePagination.vue";
import TableDocs from "../../components/TableDocs.vue";
const value = ref(90);
const dynamicValue = ref(0);

onMounted(() => {
    setInterval(() => {
        dynamicValue.value = (dynamicValue.value + 1) % 101; // Increment and reset at 100
    }, 100); // Update every 100ms
});
</script>
