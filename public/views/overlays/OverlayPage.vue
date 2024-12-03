<template>
    <BaseLayout>

        <h1>Overlay</h1>
        <p>
            The <code>COverlay</code>(alias c-overlay) component provides a full-screen overlay that can be used for modals, loading states, or any scenario requiring a dimmed background. It is highly customizable and integrates seamlessly with other components.
        </p>

        <h2>Props</h2>
        <table class="w-full text-left border-collapse border-0">
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
                <td class="border-b px-4 py-2">modelValue</td>
                <td class="border-b px-4 py-2">Boolean</td>
                <td class="border-b px-4 py-2">false</td>
                <td class="border-b px-4 py-2">
                Controls the visibility of the overlay. Use with <code>v-model</code> to toggle its display.
                </td>
            </tr>
            <tr>
                <td class="border-b px-4 py-2">bgColor</td>
                <td class="border-b px-4 py-2">String</td>
                <td class="border-b px-4 py-2">"bg-white"</td>
                <td class="border-b px-4 py-2">
                Sets the background color of the overlay. Accepts TailwindCSS classes for customization.
                </td>
            </tr>
            <tr>
                <td class="border-b px-4 py-2">opacity</td>
                <td class="border-b px-4 py-2">Number</td>
                <td class="border-b px-4 py-2">50</td>
                <td class="border-b px-4 py-2">
                Adjusts the overlay's opacity level (0-100), where 0 is fully transparent and 100 is completely opaque.
                </td>
            </tr>
            <tr>
                <td class="border-b px-4 py-2">zIndex</td>
                <td class="border-b px-4 py-2">Number</td>
                <td class="border-b px-4 py-2">50</td>
                <td class="border-b px-4 py-2">
                Determines the stacking order of the overlay by setting its <code>z-index</code>.
                </td>
            </tr>
            <tr>
                <td class="border-b px-4 py-2">closeOnClick</td>
                <td class="border-b px-4 py-2">Boolean</td>
                <td class="border-b px-4 py-2">true</td>
                <td class="border-b px-4 py-2">
                Enables closing the overlay by clicking on the background. Set to <code>false</code> to disable.
                </td>
            </tr>
            </tbody>
        </table>

        <h2>Slots</h2>
        <p>The <code>COverlay</code> component includes a default slot for placing custom content inside the overlay.</p>

        <h2>Events</h2>
        <table class="w-full text-left border-collapse border-0">
            <thead>
            <tr>
                <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Event</th>
                <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="border-b px-4 py-2">update:modelValue</td>
                <td class="border-b px-4 py-2">
                Emitted when the overlay visibility is toggled.
                </td>
            </tr>
            </tbody>
        </table>

        <h2>Example Usage</h2>
        <p>The following example demonstrates how to use <code>COverlay</code> for a basic full-screen overlay.</p>

        <card-docs>
            <c-button 
                size="2xl"
                @click="isOverlayVisible = true" 
                class="w-6/12 py-6 m-auto"
            >Show Overlay</c-button>
        </card-docs>

        <c-overlay v-model="isOverlayVisible">
            <c-card class="text-center p-4">
                <h1 class="text-2xl font-bold">Overlay Content</h1>
                <p>This is a customizable overlay.</p>
                <c-button @click="isOverlayVisible = false">Close Overlay</c-button>
            </c-card>
        </c-overlay>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
        &lt;div&gt;
            &lt;c-overlay v-model=&quot;isOverlayVisible&quot;&gt;
            &lt;div class=&quot;text-center&quot;&gt;
                &lt;h1 class=&quot;text-2xl font-bold&quot;&gt;Overlay Content&lt;/h1&gt;
                &lt;p&gt;This is a customizable overlay.&lt;/p&gt;
                &lt;c-button @click=&quot;isOverlayVisible = false&quot;&gt;Close Overlay&lt;/c-button&gt;
            &lt;/div&gt;
            &lt;/c-overlay&gt;

            &lt;c-button @click=&quot;isOverlayVisible = true&quot;&gt;Show Overlay&lt;/c-button&gt;
        &lt;/div&gt;
        &lt;/template&gt;

        &lt;script setup&gt;
        import { ref } from &quot;vue&quot;;
        const isOverlayVisible = ref(false);
        &lt;/script&gt;</code>
        </pre>
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
const isOverlayVisible = ref(false);
</script>
