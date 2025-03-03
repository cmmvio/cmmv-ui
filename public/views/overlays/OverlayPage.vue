<template>
    <BaseLayout>
        <h1>Overlay</h1>

        <p>
            The <code>COverlay (alias c-overlay)</code> component provides a full-screen overlay that can be used for
            modals, loading states, or any scenario requiring a dimmed background. It is highly customizable and
            integrates seamlessly with other components.
        </p>

        <h3>Props</h3>

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
                        Adjusts the overlay's opacity level (0-100), where 0 is fully transparent and 100 is completely
                        opaque.
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
        </table-docs>

        <h3>Slots</h3>

        <p>The <code>COverlay</code> component includes a default slot for placing custom content inside the overlay.
        </p>

        <h3>Events</h3>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Event</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
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
        </table-docs>

        <h3>Example Usage</h3>

        <p>The following example demonstrates how to use <code>COverlay</code> for a basic full-screen overlay.</p>

        <card-docs>
            <div class="flex items-center justify-center gap-x-4">
                <c-button size="2xl" @click="isOverlayVisible = true" class="w-6/12 py-6 m-auto">Show Overlay</c-button>
            </div>

            <c-overlay v-model="isOverlayVisible">
                <c-card class="text-center p-4">
                    <h1 class="text-2xl font-bold">Overlay Content</h1>
                    <p>This is a customizable overlay.</p>
                    <c-button @click="isOverlayVisible = false">Close Overlay</c-button>
                </c-card>
            </c-overlay>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;div&gt;
        &lt;c-button @click=&quot;isOverlayVisible = true&quot;&gt;Show Overlay&lt;/c-button&gt;

        &lt;c-overlay v-model=&quot;isOverlayVisible&quot;&gt;
            &lt;c-card class=&quot;text-center p-4&quot;&gt;
                &lt;h1 class=&quot;text-2xl font-bold&quot;&gt;Overlay Content&lt;/h1&gt;
                &lt;p&gt;This is a customizable overlay.&lt;/p&gt;
                &lt;c-button @click=&quot;isOverlayVisible = false&quot;&gt;Close Overlay&lt;/c-button&gt;
            &lt;/c-card&gt;
        &lt;/c-overlay&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &quot;vue&quot;;

const isOverlayVisible = ref(false);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Customized Overlay</h3>

        <p>You can customize the overlay's appearance by adjusting its background color, opacity, and z-index.</p>

        <card-docs>
            <div class="flex items-center justify-center gap-x-4">
                <c-button size="2xl" variant="primary" @click="isCustomOverlayVisible = true"
                    class="w-6/12 py-6 m-auto">Show
                    Custom Overlay</c-button>
            </div>

            <c-overlay v-model="isCustomOverlayVisible" bg-color="bg-blue-500" :opacity="70" :z-index="100">
                <c-card class="text-center p-4">
                    <h1 class="text-2xl font-bold">Custom Overlay</h1>
                    <p>This overlay has custom background color and opacity.</p>
                    <c-button @click="isCustomOverlayVisible = false">Close</c-button>
                </c-card>
            </c-overlay>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;div&gt;
        &lt;c-button @click=&quot;isCustomOverlayVisible = true&quot;&gt;Show Custom Overlay&lt;/c-button&gt;

        &lt;c-overlay
            v-model=&quot;isCustomOverlayVisible&quot;
            bg-color=&quot;bg-blue-500&quot;
            :opacity=&quot;70&quot;
            :z-index=&quot;100&quot;
        &gt;
            &lt;c-card class=&quot;text-center p-4 shadow-xl&quot;&gt;
                &lt;h1 class=&quot;text-2xl font-bold&quot;&gt;Custom Overlay&lt;/h1&gt;
                &lt;p&gt;This overlay has custom background color and opacity.&lt;/p&gt;
                &lt;c-button @click=&quot;isCustomOverlayVisible = false&quot;&gt;Close&lt;/c-button&gt;
            &lt;/c-card&gt;
        &lt;/c-overlay&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &quot;vue&quot;;

const isCustomOverlayVisible = ref(false);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Preventing Close on Click</h3>

        <p>You can prevent the overlay from closing when clicked by setting the <code>closeOnClick</code> prop to
            <code>false</code>.
        </p>

        <card-docs>
            <div class="flex items-center justify-center gap-x-4">
                <c-button size="2xl" variant="warning" @click="isModalOverlayVisible = true"
                    class="w-6/12 py-6 m-auto">Show
                    Modal Overlay</c-button>
            </div>

            <c-overlay v-model="isModalOverlayVisible" :close-on-click="false">
                <c-card class="text-center p-4">
                    <h1 class="text-2xl font-bold">Modal Overlay</h1>
                    <p>This overlay won't close when you click outside. You must use the button.</p>
                    <c-button @click="isModalOverlayVisible = false">Close Modal</c-button>
                </c-card>
            </c-overlay>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;div&gt;
        &lt;c-button @click=&quot;isModalOverlayVisible = true&quot;&gt;Show Modal Overlay&lt;/c-button&gt;

        &lt;c-overlay
            v-model=&quot;isModalOverlayVisible&quot;
            :close-on-click=&quot;false&quot;
        &gt;
            &lt;c-card class=&quot;text-center p-4&quot;&gt;
                &lt;h1 class=&quot;text-2xl font-bold&quot;&gt;Modal Overlay&lt;/h1&gt;
                &lt;p&gt;This overlay won't close when you click outside. You must use the button.&lt;/p&gt;
                &lt;c-button @click=&quot;isModalOverlayVisible = false&quot;&gt;Close Modal&lt;/c-button&gt;
            &lt;/c-card&gt;
        &lt;/c-overlay&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &quot;vue&quot;;

const isModalOverlayVisible = ref(false);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Notification" previousLink="/notification" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const isOverlayVisible = ref(false);
const isCustomOverlayVisible = ref(false);
const isModalOverlayVisible = ref(false);
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
