
<template>
    <BaseLayout>
        <h1>Progress Circlar</h1>

        <p>The <code>CProgressCircular</code> component is a flexible and customizable progress indicator for both determinate and indeterminate states. Below, you'll find examples and detailed usage of all the props supported by this component.</p>

        <c-card 
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

        <h2>Slot Content</h2> 

        <p>Use the default slot to add custom content inside the progress circle.</p>

        <c-card 
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

        <h2>Indeterminate Progress</h2>
        <p>The <code>indeterminate</code> prop creates an animated loading indicator, ideal for scenarios where the progress is unknown.</p>
        
        <c-card 
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

        <h2>Size Prop</h2>
        <p>The <code>size</code> prop defines the diameter of the progress circle in pixels.</p>
        
        <c-card 
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

        <h2>Rotate Prop</h2>
        <p>The <code>rotate</code> prop adjusts the starting position of the progress arc. It ranges from 0 to 360 degrees.</p>

        <c-card 
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

        <h2>Background Color</h2>
        <p>The <code>bgColor</code> prop sets the background circle's stroke color.</p>

        <c-card 
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

        <h2>Real-Time Progress</h2>
        <p>This example demonstrates a real-time progress animation. The progress value updates dynamically, and when it reaches 100%, it resets to 0 and starts again.</p>

        <c-card 
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
    </BaseLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BaseLayout from "../layout/BaseLayout.vue";
const value = ref(90);
const dynamicValue = ref(0);

onMounted(() => {
    setInterval(() => {
        dynamicValue.value = (dynamicValue.value + 1) % 101; // Increment and reset at 100
    }, 100); // Update every 100ms
});
</script>