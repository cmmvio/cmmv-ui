<template>
    <BaseLayout>
        <h1>Progress Bar</h1>

        <p>The <code>CProgressBar (alias: c-progress-bar)</code> component is a flexible and customizable progress indicator for determinate, indeterminate, buffering, and striped states. Below, you'll find examples and detailed usage of all the props supported by this component.</p>

        <table class="w-full text-left border-collapse border-0 rounded-md">
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
                    <td class="border-b px-4 py-2">bufferValue</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">100</td>
                    <td class="border-b px-4 py-2">Defines the buffering value ranging from 0 to 100.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">height</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">20</td>
                    <td class="border-b px-4 py-2">Specifies the height of the progress bar in pixels.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"#e0e0e0"</td>
                    <td class="border-b px-4 py-2">Sets the background color of the progress bar.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bufferColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"#c0c0c0"</td>
                    <td class="border-b px-4 py-2">Specifies the color of the buffer bar in buffering mode.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">fillColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"#4caf50"</td>
                    <td class="border-b px-4 py-2">Defines the color of the progress bar fill.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">striped</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Adds a striped pattern to the progress bar with animation.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">indeterminate</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Displays an animated indeterminate progress indicator.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">buffering</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Enables a buffering bar behind the main progress.</td>
                </tr>
            </tbody>
        </table>

        <h2>Examples</h2>

        <p>Determinate progress bars are perfect for tasks where the progress percentage is calculable, such as file uploads or data processing. This example showcases how varying <code>height</code> and <code>fillColor</code> can enhance the visual appeal of the progress bar. By customizing these properties, you can align the component's design with your application’s theme and user needs.</p>

        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6">
            <c-progress-bar :value="25" :height="10" fillColor="#4caf50" class="mb-4"></c-progress-bar>
            <c-progress-bar :value="50" :height="20" fillColor="#ff5722" class="mb-4"></c-progress-bar>
            <c-progress-bar :value="75" :height="30" fillColor="#03a9f4"></c-progress-bar>
        </c-card>

        <pre>
    <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-progress-bar :value="25" :height="10" fillColor="#4caf50"&gt;&lt;/c-progress-bar&gt;
    &lt;c-progress-bar :value="50" :height="20" fillColor="#ff5722"&gt;&lt;/c-progress-bar&gt;
    &lt;c-progress-bar :value="75" :height="30" fillColor="#03a9f4"&gt;&lt;/c-progress-bar&gt;
&lt;/template&gt;</code>
        </pre>

        <h3>Buffering Progress with Animation</h3>

        <p>Buffering progress bars excel in scenarios like streaming or file transfers, where preloading occurs alongside primary task progress. The bufferValue and buffering props work together to create a seamless dual-progress effect. Animation adds a dynamic touch, ensuring users remain engaged while understanding the buffering process.</p>

        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6">
            <c-progress-bar 
                :value="dynamicValue" 
                :bufferValue="dynamicValueBuffer" 
                :buffering="true" 
                :height="20" 
                fillColor="#2196f3" 
                bufferColor="#7cc0f4"
            ></c-progress-bar>
        </c-card>
        <pre>
    <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-progress-bar 
        :value="60" 
        :bufferValue="80" 
        :buffering="true" 
        :height="20" 
        fillColor="#2196f3" 
        bufferColor="#bbdefb"
    &gt;&lt;/c-progress-bar&gt;
&lt;/template&gt;</code>
        </pre>

        <h3>Indeterminate Progress</h3>

        <p>Indeterminate progress bars are ideal for situations where the completion time is unknown, such as network requests or background tasks. The continuous animation conveys ongoing activity, assuring users that the system is working even when specific progress metrics aren't available. This mode enhances user trust and reduces perceived wait times.</p>

        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6">
            <c-progress-bar indeterminate :height="20" fillColor="#f44336"></c-progress-bar>
        </c-card>
        <pre>
    <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-progress-bar indeterminate :height="20" fillColor="#f44336"&gt;&lt;/c-progress-bar&gt;
&lt;/template&gt;</code>
        </pre>

        <h3>Striped Progress with Animation</h3>

        <p>The striped mode brings a modern, dynamic visual to progress bars, making them stand out for active or foreground tasks. Combined with animation, the diagonal stripes add motion that captures user attention. This is especially useful for visually emphasizing processes like data loading or intensive computations.</p>

        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6">
            <c-progress-bar :value="70" :striped="true" :height="20" fillColor="#ff9800"></c-progress-bar>
            <c-progress-bar :value="dynamicValue" :striped="true" :height="30" fillColor="#FF0000" class="mt-4"></c-progress-bar>
            <c-progress-bar :value="90" :striped="true" :height="50" fillColor="#0000FF" class="mt-4"></c-progress-bar>
        </c-card>
        <pre>
    <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-progress-bar :value="70" :striped="true" :height="20" fillColor="#ff9800"&gt;&lt;/c-progress-bar&gt;
&lt;/template&gt;</code>
        </pre>

        <h3>Real-Time Progress with Slot</h3>

        <p>Using the default slot, you can inject custom content, such as progress percentages or status messages, directly into the progress bar. This example demonstrates real-time updates, where the progress value changes dynamically. This feature is particularly useful for applications requiring live feedback, like dashboards or monitoring tools.</p>

        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6">
            <c-progress-bar :value="dynamicValue" :height="20" fillColor="#03a9f4" class="text-black">
                <template v-slot:default>{{ dynamicValue }}%</template>
            </c-progress-bar>
        </c-card>

        <pre>
    <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-progress-bar 
        :value="dynamicValue" 
        :height="20" 
        fillColor="#03a9f4"
        class="text-black"
    &gt;
        &lt;template&gt;&#123;&#123; dynamicValue &#125;&#125;%&lt;/template&gt;
    &lt;/c-progress-bar&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted } from "vue";

const dynamicValue = ref(0);

onMounted(() => {
    setInterval(() => {
        dynamicValue.value = (dynamicValue.value + 1) % 101;
    }, 100);
});
&lt;/script&gt;</code>
        </pre>

        <h3>Sample Loader</h3>

        <p>This example demonstrates the integration of the CProgressBar component in an application loader. It uses the following components:</p>

        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6">
            <div class="md:w-6/12 sm:w-full m-auto rounded-md">
                <c-toolbar class="bg-purple-800 text-white rounded-t-md">
                    <c-app-bar-nav />
                    <c-toolbar-title>My App</c-toolbar-title>
                    <c-spacer />

                    <c-button 
                        type="button" 
                        variant="plain" 
                        rounded="full" 
                        bgColor="bg-purple-800 hover:bg-purple-500" 
                    >
                        <IconMagnifyingGlass class="text-white" />
                    </c-button>
                </c-toolbar>

                <c-container style="height: 400px;" class="bg-zinc-900 flex justify-center items-center">
                    <div class="text-center w-6/12">
                        <span class="text-white text-sm block mb-4">Getting your files</span>

                        <c-progress-bar 
                            :height="8" 
                            fillColor="#6B21A8" 
                            bgColor="#8f45d1"
                            class="rounded-md w-2/6 m-auto" 
                            indeterminate
                        ></c-progress-bar>
                    </div>
                </c-container>
            </div>
        </c-card>

        <pre>
    <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-card class="mx-auto mt-4 px-4 py-5 sm:p-6"&gt;
        &lt;div class="md:w-6/12 sm:w-full m-auto rounded-md"&gt;
            &lt;c-toolbar class="bg-purple-800 text-white rounded-t-md"&gt;
                &lt;c-app-bar-nav /&gt;
                &lt;c-toolbar-title&gt;My App&lt;/c-toolbar-title&gt;
                &lt;c-spacer /&gt;

                &lt;c-button 
                    type="button" 
                    variant="plain" 
                    rounded="full" 
                    bgColor="bg-purple-800 hover:bg-purple-500" 
                &gt;
                    &lt;IconMagnifyingGlass class="text-white" /&gt;
                &lt;/c-button&gt;
            &lt;/c-toolbar&gt;

            &lt;c-container 
                style="height: 400px;" 
                class="bg-zinc-900 flex justify-center items-center"
            &gt;
                &lt;div class="text-center w-full"&gt;
                    &lt;span class="text-white text-sm block mb-4"&gt;Getting your files&lt;/span&gt;

                    &lt;c-progress-bar 
                        :height="8" 
                        fillColor="#6B21A8" 
                        bgColor="#8f45d1"
                        class="rounded-md w-2/6 m-auto" 
                        indeterminate
                    &gt;&lt;/c-progress-bar&gt;
                &lt;/div&gt;
            &lt;/c-container&gt;
        &lt;/div&gt;
    &lt;/c-card&gt;
&lt;/template&gt;</code>
</pre>

    </BaseLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";

const dynamicValue = ref(0);
const dynamicValueBuffer = ref(20);

onMounted(() => {
    setInterval(() => {
        dynamicValue.value = (dynamicValue.value + 1) % 101; // Reset at 100
        dynamicValueBuffer.value = (dynamicValueBuffer.value + 2) % 101; // Reset at 100
    }, 100); // Update every 100ms
});
</script>
