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
                <tr style="border-bottom: 1px solid #ccc;">
                    <th style="text-align: left; padding: 8px;">Prop</th>
                    <th style="text-align: left; padding: 8px;">Type</th>
                    <th style="text-align: left; padding: 8px;">Default</th>
                    <th style="text-align: left; padding: 8px;">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px;">width</td>
                    <td style="padding: 8px;">String</td>
                    <td style="padding: 8px;">"24"</td>
                    <td style="padding: 8px;">Defines the width of the loading animation in pixels or any valid CSS unit.</td>
                </tr>
                <tr>
                    <td style="padding: 8px;">height</td>
                    <td style="padding: 8px;">String</td>
                    <td style="padding: 8px;">"24"</td>
                    <td style="padding: 8px;">Defines the height of the loading animation in pixels or any valid CSS unit.</td>
                </tr>
                <tr>
                    <td style="padding: 8px;">color</td>
                    <td style="padding: 8px;">String</td>
                    <td style="padding: 8px;">"#FFFFFF"</td>
                    <td style="padding: 8px;">Specifies the color of the loading animation. This value is passed to the slot as a scoped property.</td>
                </tr>
            </tbody>
        </table-docs>

        <br/>

        <h3>Slots</h3>

        <table-docs>
            <thead>
                <tr style="border-bottom: 1px solid #ccc;">
                    <th style="text-align: left; padding: 8px;">Name</th>
                    <th style="text-align: left; padding: 8px;">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px;">default</td>
                    <td style="padding: 8px;">
                    The default slot accepts custom loading animations or content.
                    It provides scoped properties: <code>color</code>, <code>width</code>, and <code>height</code> to dynamically adapt the content.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <br/>

        <h3>Basic Usage</h3>

        <p>
            The basic usage example demonstrates how to quickly integrate the <code>CLoader</code> component with minimal configuration. By setting properties like <code>width</code>, <code>height</code>, and <code>color</code>, you can easily customize the appearance of the loading animation to fit your design needs.
        </p>

        <c-card
            variant="flat"
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <Loader90Ring width="64" height="64" color="text-neutral-800 dark:text-white"></Loader90Ring>
        </c-card>

        <pre>
    <code>&lt;c-loading :width="48" :height="48" color="#3498db"&gt;
    &lt;template #default="{ color, width, height }"&gt;
        &lt;svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="color" viewBox="0 0 24 24"&gt;
            &lt;path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
                &lt;animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/>
            &lt;/path>
        &lt;/svg&gt;
    &lt;/template&gt;
&lt;/c-loading&gt;</code>
  </pre>

        <h3>Custom</h3>

        <p>
            The <code>CLoader</code> component allows you to integrate custom loading animations effortlessly. Below are a few examples using different loaders, which can be styled dynamically through the component's properties. These examples demonstrate how to utilize the scoped slot to render tailored SVG-based animations with varying colors, sizes, and designs.
        </p>

        <c-card
            variant="flat"
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <Loader270Ring width="24" height="24" color="text-slate-500"></Loader270Ring>

            <Loader3DotsBounce width="32" height="32" color="text-red-600"></Loader3DotsBounce>

            <Loader6DotsScaleMiddle width="48" height="48" color="text-green-500"></Loader6DotsScaleMiddle>

            <Loader90Ring width="64" height="64" color="text-blue-600"></Loader90Ring>
        </c-card>

        <pre>
      <code>&lt;Loader270Ring width="24" height="24" color="text-slate-500"&gt;&lt;/Loader270Ring&gt;

&lt;Loader3DotsBounce width="32" height="32" color="text-red-600"&gt;&lt;/Loader3DotsBounce&gt;

&lt;Loader6DotsScaleMiddle width="48" height="48" color="text-green-500"&gt;&lt;/Loader6DotsScaleMiddle&gt;

&lt;Loader90Ring width="64" height="64" color="text-blue-600"&gt;&lt;/Loader90Ring&gt;</code>
    </pre>

        <!-- All -->
        <h3>All Loading</h3>

        <p>
            This section provides a complete list of available loaders, allowing developers to quickly browse and select the most suitable animation for their applications. Each loader is optimized for performance and fully supports dynamic customization through properties like <code>width</code>, <code>height</code>, and <code>color</code>.
        </p>

        <p>
            By clicking on a loader, its implementation code is automatically copied to the clipboard, making it easy to integrate into your project. This feature streamlines the development workflow, ensuring a seamless experience when working with loading indicators across different UI components.
        </p>

        <c-card
            class="m-auto mt-4 px-4 py-10 items-center grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-4"
        >
            <div
                v-for="loader in resolvedIcons"
                :key="loader.name"
                class="relative flex items-center justify-center cursor-pointer group"
                @click="copyToClipboard(loader.code)"
            >
                <c-tooltip :content="loader.name" position="top">
                    <component :is="loader.component" width="32" height="32" color="text-neutral-600 dark:text-white" aria-hidden="true" />
                </c-tooltip>
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
import PagePagination from "../../layout/PagePagination.vue";
import IconCheck from "@components/icons/IconCheck.vue";
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
