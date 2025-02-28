<template>
    <BaseLayout>
        <h1>Loader</h1>

        <p>
            The <code>CLoader (alias: c-loader)</code> component is a flexible wrapper designed for displaying custom loading animations or SVGs.
            It provides properties for controlling the width, height, and color of the content, with a dynamic slot to adapt custom loading designs.
            The default SVG animations used in examples are taken from the <a href="https://github.com/n3r4zzurr0/svg-spinners" target="_blank" rel="noopener noreferrer">SVG Spinners</a> project.
        </p>

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
                    <td class="border-b px-4 py-2">width</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"24"</td>
                    <td class="border-b px-4 py-2">Defines the width of the loading animation in pixels or any valid CSS unit.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">height</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"24"</td>
                    <td class="border-b px-4 py-2">Defines the height of the loading animation in pixels or any valid CSS unit.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">color</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"#FFFFFF"</td>
                    <td class="border-b px-4 py-2">Specifies the color of the loading animation. This value is passed to the slot as a scoped property.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Slots</h3>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Name</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">default</td>
                    <td class="border-b px-4 py-2">
                    The default slot accepts custom loading animations or content.
                    It provides scoped properties: <code>color</code>, <code>width</code>, and <code>height</code> to dynamically adapt the content.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Usage</h3>

        <p>
            The basic usage example demonstrates how to quickly integrate the <code>CLoader</code> component with minimal configuration. By setting properties like <code>width</code>, <code>height</code>, and <code>color</code>, you can easily customize the appearance of the loading animation to fit your design needs.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-center">
                <Loader90Ring width="64" height="64" color="text-neutral-800 dark:text-white"></Loader90Ring>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-loader :width="64" :height="64" color="text-neutral-800 dark:text-white"&gt;
        &lt;template #default="{ color, width, height }"&gt;
            &lt;svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :class="color" viewBox="0 0 24 24"&gt;
                &lt;path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"&gt;
                    &lt;animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/&gt;
                &lt;/path&gt;
            &lt;/svg&gt;
        &lt;/template&gt;
    &lt;/c-loader&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Sizes and Colors</h3>

        <p>
            The <code>CLoader</code> component is highly customizable, allowing you to adjust the size and color to match your application's design system. The examples below demonstrate different size and color combinations.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-wrap items-center justify-center gap-8">
                <div class="flex flex-col items-center">
                    <Loader90Ring width="24" height="24" color="text-neutral-800 dark:text-white"></Loader90Ring>
                    <span class="text-xs mt-2">Small (24px)</span>
                </div>
                <div class="flex flex-col items-center">
                    <Loader90Ring width="36" height="36" color="text-neutral-800 dark:text-white"></Loader90Ring>
                    <span class="text-xs mt-2">Medium (36px)</span>
                </div>
                <div class="flex flex-col items-center">
                    <Loader90Ring width="48" height="48" color="text-neutral-800 dark:text-white"></Loader90Ring>
                    <span class="text-xs mt-2">Large (48px)</span>
                </div>
                <div class="flex flex-col items-center">
                    <Loader90Ring width="64" height="64" color="text-neutral-800 dark:text-white"></Loader90Ring>
                    <span class="text-xs mt-2">Extra Large (64px)</span>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;!-- Small Loader --&gt;
    &lt;Loader90Ring width="24" height="24" color="text-neutral-800 dark:text-white"&gt;&lt;/Loader90Ring&gt;

    &lt;!-- Medium Loader --&gt;
    &lt;Loader90Ring width="36" height="36" color="text-neutral-800 dark:text-white"&gt;&lt;/Loader90Ring&gt;

    &lt;!-- Large Loader --&gt;
    &lt;Loader90Ring width="48" height="48" color="text-neutral-800 dark:text-white"&gt;&lt;/Loader90Ring&gt;

    &lt;!-- Extra Large Loader --&gt;
    &lt;Loader90Ring width="64" height="64" color="text-neutral-800 dark:text-white"&gt;&lt;/Loader90Ring&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Loader Styles</h3>

        <p>
            The <code>CLoader</code> component allows you to integrate custom loading animations effortlessly. Below are a few examples using different loaders, which can be styled dynamically through the component's properties. These examples demonstrate how to utilize the scoped slot to render tailored SVG-based animations with varying colors, sizes, and designs.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-wrap items-center justify-center gap-8">
                <div class="flex flex-col items-center">
                    <Loader270Ring width="32" height="32" color="text-slate-500"></Loader270Ring>
                    <span class="text-xs mt-2">270° Ring</span>
                </div>
                <div class="flex flex-col items-center">
                    <Loader3DotsBounce width="32" height="32" color="text-red-600"></Loader3DotsBounce>
                    <span class="text-xs mt-2">3 Dots Bounce</span>
                </div>
                <div class="flex flex-col items-center">
                    <Loader6DotsScaleMiddle width="32" height="32" color="text-green-500"></Loader6DotsScaleMiddle>
                    <span class="text-xs mt-2">6 Dots Scale</span>
                </div>
                <div class="flex flex-col items-center">
                    <Loader90Ring width="32" height="32" color="text-blue-600"></Loader90Ring>
                    <span class="text-xs mt-2">90° Ring</span>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;!-- 270° Ring Loader --&gt;
    &lt;Loader270Ring width="32" height="32" color="text-slate-500"&gt;&lt;/Loader270Ring&gt;

    &lt;!-- 3 Dots Bounce Loader --&gt;
    &lt;Loader3DotsBounce width="32" height="32" color="text-red-600"&gt;&lt;/Loader3DotsBounce&gt;

    &lt;!-- 6 Dots Scale Middle Loader --&gt;
    &lt;Loader6DotsScaleMiddle width="32" height="32" color="text-green-500"&gt;&lt;/Loader6DotsScaleMiddle&gt;

    &lt;!-- 90° Ring Loader --&gt;
    &lt;Loader90Ring width="32" height="32" color="text-blue-600"&gt;&lt;/Loader90Ring&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Usage in Components</h3>

        <p>
            Loaders are commonly used to indicate loading states in various UI components. Below are examples of how to integrate loaders into buttons and cards to provide visual feedback during asynchronous operations.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-center space-y-8">
                <!-- Button with loader -->
                <div class="flex flex-col items-center space-y-2">
                    <h4 class="text-sm font-medium">Button with Loader</h4>
                    <c-button variant="primary" class="flex items-center gap-2">
                        <Loader3DotsBounce width="16" height="16" color="text-white"></Loader3DotsBounce>
                        Loading...
                    </c-button>
                </div>

                <!-- Card with loader -->
                <div class="flex flex-col items-center space-y-2">
                    <h4 class="text-sm font-medium">Card with Loader</h4>
                    <c-card class="w-64 h-40 flex items-center justify-center w-full">
                        <div class="flex flex-col items-center gap-2 m-auto justify-center ">
                            <Loader90Ring width="32" height="32" color="text-blue-600"></Loader90Ring>
                            <span class="text-sm text-gray-500">Loading content...</span>
                        </div>
                    </c-card>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;!-- Button with Loader --&gt;
    &lt;c-button variant="primary" class="flex items-center gap-2"&gt;
        &lt;Loader3DotsBounce width="16" height="16" color="text-white"&gt;&lt;/Loader3DotsBounce&gt;
        Loading...
    &lt;/c-button&gt;

    &lt;!-- Card with Loader --&gt;
    &lt;c-card class="w-64 h-40 flex items-center justify-center"&gt;
        &lt;div class="flex flex-col items-center gap-2"&gt;
            &lt;Loader90Ring width="32" height="32" color="text-blue-600"&gt;&lt;/Loader90Ring&gt;
            &lt;span class="text-sm text-gray-500"&gt;Loading content...&lt;/span&gt;
        &lt;/div&gt;
    &lt;/c-card&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Creating Custom Loaders</h3>

        <p>
            You can create your own custom loaders by using the <code>CLoader</code> component as a wrapper and providing your SVG animation in the default slot. The example below demonstrates how to create a custom pulse loader.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-center">
                <c-loader width="48" height="48" color="text-blue-600">
                    <template #default="{ color, width, height }">
                        <svg :width="width" :height="height" viewBox="0 0 24 24" :class="color">
                            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2">
                                <animate attributeName="r" from="8" to="12" dur="1.5s" begin="0s" repeatCount="indefinite" />
                                <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="2">
                                <animate attributeName="r" from="4" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                                <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                            </circle>
                        </svg>
                    </template>
                </c-loader>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-loader width="48" height="48" color="text-blue-600"&gt;
        &lt;template #default="{ color, width, height }"&gt;
            &lt;svg :width="width" :height="height" viewBox="0 0 24 24" :class="color"&gt;
                &lt;circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"&gt;
                    &lt;animate attributeName="r" from="8" to="12" dur="1.5s" begin="0s" repeatCount="indefinite" /&gt;
                    &lt;animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" /&gt;
                &lt;/circle&gt;
                &lt;circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="2"&gt;
                    &lt;animate attributeName="r" from="4" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" /&gt;
                    &lt;animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" /&gt;
                &lt;/circle&gt;
            &lt;/svg&gt;
        &lt;/template&gt;
    &lt;/c-loader&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- All Loaders Library -->
        <h3>Loader Library</h3>

        <p>
            This section provides a complete list of available loaders, allowing developers to quickly browse and select the most suitable animation for their applications. Each loader is optimized for performance and fully supports dynamic customization through properties like <code>width</code>, <code>height</code>, and <code>color</code>.
        </p>

        <p>
            By clicking on a loader, its implementation code is automatically copied to the clipboard, making it easy to integrate into your project. This feature streamlines the development workflow, ensuring a seamless experience when working with loading indicators across different UI components.
        </p>

        <c-card
            variant="flat"
            class="m-auto mt-4 px-4 py-10 items-center"
        >
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-4">
                <div
                    v-for="loader in resolvedIcons"
                    :key="loader.name"
                    class="relative flex flex-col items-center justify-center cursor-pointer group"
                    @click="copyToClipboard(loader.code)"
                >
                    <c-tooltip :content="loader.name" position="top">
                        <component :is="loader.component" width="32" height="32" color="text-neutral-600 dark:text-white" aria-hidden="true" />
                    </c-tooltip>
                    <span class="text-xs text-center text-gray-500 dark:text-neutral-400 mt-2 truncate w-full">{{ loader.name }}</span>
                </div>
            </div>
        </c-card>

        <c-notification ref="notification" iconColor="text-green-500"></c-notification>

        <br/>

        <PagePagination
            previous="Icon"
            previousLink="/icon"
            next="Progress Bar"
            nextLink="/progress-bar"
        />
    </BaseLayout>
</template>

<script setup>
import { ref, markRaw, reactive, onMounted } from "vue";
import LoaderList from "@composables/LoaderList.ts";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import IconCheck from "@components/icons/IconCheck.vue";
import CCard from "@components/layout/CCard.vue";
import CButton from "@components/components/CButton.vue";
import CLoader from "@components/components/CLoader.vue";
import CTooltip from "@components/components/CTooltip.vue";
import Loader270Ring from "@components/loader/Loader270Ring.vue";
import Loader3DotsBounce from "@components/loader/Loader3DotsBounce.vue";
import Loader6DotsScaleMiddle from "@components/loader/Loader6DotsScaleMiddle.vue";
import Loader90Ring from "@components/loader/Loader90Ring.vue";
import * as Icons from "../../../src";

const notification = ref(null);
const loaders = LoaderList;
const resolvedIcons = reactive([]);

onMounted(async () => {
    for (const loader of loaders) {
        if(process.env.NODE_ENV === "production"){
            resolvedIcons.push({
                ...loader,
                component: markRaw(Icons[loader.path.replace("components/loader/", "").replace(".vue", "")]),
            });
        }
        else {
            const component = await import(`../../../src/${loader.path}`);

            resolvedIcons.push({
                ...loader,
                component: markRaw(component.default),
            });
        }
    }
});

function copyToClipboard(code) {
    navigator.clipboard.writeText(code).then(() => {
        triggerNotification();
    });
}

function triggerNotification() {
    notification.value.showNotification({
        newTitle: "Success",
        newContent: "Loader code copied to clipboard!",
        newIcon: IconCheck,
        newDuration: 2000,
    });
}
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
