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
                    <td><code>actions</code></td>
                    <td>Array</td>
                    <td><code>[]</code></td>
                    <td>List of actions, each containing a label and an icon.</td>
                </tr>
                <tr>
                    <td><code>position</code></td>
                    <td>String</td>
                    <td><code>"bottom-right"</code></td>
                    <td>Defines the position of the speed dial: <code>top-left</code>, <code>top-right</code>, <code>bottom-left</code>, <code>bottom-right</code>.</td>
                </tr>
                <tr>
                    <td><code>vertical</code></td>
                    <td>Boolean</td>
                    <td><code>true</code></td>
                    <td>Defines if the actions are displayed vertically or horizontally.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            Below is a basic usage example of the <code>c-speed-dial</code> component. Click the floating button to expand the actions.
        </p>

        <c-card variant="flat" class="relative mx-auto flex flex-col min-h-[400px] items-center p-10">
            <c-speed-dial
                :actions="sampleActions"
                absolute
                position="bottom-right"
                @select="handleAction"
            />
        </c-card>

        <pre>
            <code class="code-highlight language-html">&lt;c-speed-dial
    :actions="[
        { label: 'Share', icon: IconShare },
        { label: 'Print', icon: IconPrint },
        { label: 'Download', icon: IconDownload },
        { label: 'Copy', icon: IconCopy }
    ]"
    position="bottom-right"
    @select="handleAction"
/&gt;</code>
</pre>

        <h3>Different Positions</h3>

        <p>
            You can change the position of the speed dial by setting the <code>position</code> prop.
        </p>

        <c-card variant="flat" class="p-10 grid grid-cols-2 gap-10 relative min-h-[400px]">
            <c-speed-dial absolute :actions="sampleActions" position="top-left" />
            <c-speed-dial absolute :actions="sampleActions" position="top-right" />
            <c-speed-dial absolute :actions="sampleActions" position="bottom-left" />
            <c-speed-dial absolute :actions="sampleActions" position="bottom-right" />
        </c-card>

        <pre>
            <code class="code-highlight language-html">&lt;c-speed-dial :actions="sampleActions" position="top-left" /&gt;
&lt;c-speed-dial :actions="sampleActions" position="top-right" /&gt;
&lt;c-speed-dial :actions="sampleActions" position="bottom-left" /&gt;
&lt;c-speed-dial :actions="sampleActions" position="bottom-right" /&gt;
</code>
</pre>

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
