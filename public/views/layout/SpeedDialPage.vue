<template>
    <BaseLayout>
        <h1>Speed Dial</h1>

        <p>
            The <code>c-speed-dial</code> component provides a floating action button that expands to show multiple quick actions.
            It supports different positions, vertical and horizontal layouts, and customizable icons.
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
                    <td>actions</td>
                    <td>Array</td>
                    <td>[]</td>
                    <td>List of actions, each containing a label and an icon.</td>
                </tr>
                <tr>
                    <td>position</td>
                    <td>String</td>
                    <td>"bottom-right"</td>
                    <td>Defines the position of the speed dial: <code>top-left</code>, <code>top-right</code>, <code>bottom-left</code>, <code>bottom-right</code>.</td>
                </tr>
                <tr>
                    <td>vertical</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>Defines if the actions are displayed vertically or horizontally.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            Below is a basic usage example of the <code>c-speed-dial</code> component. Click the floating button to expand the actions.
        </p>

        <card-docs>
            <div class="relative mx-auto flex flex-col min-h-[400px] items-center p-10">
                <c-speed-dial
                    :actions="sampleActions"
                    absolute
                    position="bottom-right"
                    @select="handleAction"
                />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;div class="relative min-h-[400px]"&gt;
        &lt;c-speed-dial
            :actions="sampleActions"
            absolute
            position="bottom-right"
            @select="handleAction"
        /&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";
import IconShare from "@components/icons/IconShare.vue";
import IconPrinter from "@components/icons/IconPrinter.vue";
import IconCloudArrowDown from "@components/icons/IconCloudArrowDown.vue";
import IconDocumentDuplicate from "@components/icons/IconDocumentDuplicate.vue";

const sampleActions = ref([
    { label: "Share", icon: IconShare },
    { label: "Print", icon: IconPrinter },
    { label: "Download", icon: IconCloudArrowDown },
    { label: "Copy", icon: IconDocumentDuplicate },
]);

const handleAction = (action) => {
    console.log("Selected action:", action.label);
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Different Positions</h3>

        <p>
            You can change the position of the speed dial by setting the <code>position</code> prop.
        </p>

        <card-docs>
            <div class="p-10 grid grid-cols-2 gap-10 relative min-h-[400px]">
                <c-speed-dial absolute :actions="sampleActions" position="top-left" />
                <c-speed-dial absolute :actions="sampleActions" position="top-right" />
                <c-speed-dial absolute :actions="sampleActions" position="bottom-left" />
                <c-speed-dial absolute :actions="sampleActions" position="bottom-right" />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;div class="grid grid-cols-2 gap-10 relative min-h-[400px]"&gt;
        &lt;c-speed-dial
            absolute
            :actions="sampleActions"
            position="top-left"
        /&gt;
        &lt;c-speed-dial
            absolute
            :actions="sampleActions"
            position="top-right"
        /&gt;
        &lt;c-speed-dial
            absolute
            :actions="sampleActions"
            position="bottom-left"
        /&gt;
        &lt;c-speed-dial
            absolute
            :actions="sampleActions"
            position="bottom-right"
        /&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="Sidebar"
            previousLink="/sidebar"
            next="Tabs"
            nextLink="/tabs" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

import IconShare from "@components/icons/IconShare.vue";
import IconPrinter from "@components/icons/IconPrinter.vue";
import IconCloudArrowDown from "@components/icons/IconCloudArrowDown.vue";
import IconDocumentDuplicate from "@components/icons/IconDocumentDuplicate.vue";

const sampleActions = ref([
    { label: "Share", icon: IconShare },
    { label: "Print", icon: IconPrinter },
    { label: "Download", icon: IconCloudArrowDown },
    { label: "Copy", icon: IconDocumentDuplicate },
]);

const handleAction = (action) => {
    console.log("Selected action:", action.label);
};
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
