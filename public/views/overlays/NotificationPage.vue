<template>
    <BaseLayout>
        <h1>Notification</h1>

        <p>
            The <code>CNotification (alias: c-notification)</code> is designed to display temporary or persistent notifications with optional icons, titles, and progress bars. Notifications are positioned in the top-right corner by default and can be dismissed manually or automatically after a set duration. The component supports transitions for smooth appearance and dismissal.
        </p>

        <h3>Props</h3>

        <table class="w-full text-left border-collapse border-0 doc-table">
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
                    <td class="border-b px-4 py-2">maxWidth</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">0</td>
                    <td class="border-b px-4 py-2">Specifies the maximum width of the notification container.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">top</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"top-40"</td>
                    <td class="border-b px-4 py-2">Controls the vertical positioning of the notification.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-gray-200 dark:bg-zinc-900"</td>
                    <td class="border-b px-4 py-2">Sets the background color of the notification.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text-black dark:text-white"</td>
                    <td class="border-b px-4 py-2">Sets the text color of the notification.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">iconColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text-blue-800"</td>
                    <td class="border-b px-4 py-2">Sets the color of the notification icon.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">permanent</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Determines whether the notification persists until manually dismissed.</td>
                </tr>
            </tbody>
        </table>

        <h3>Slots</h3>

        <table class="w-full text-left border-collapse border-0 doc-table">
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Slot</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">icon</td>
                    <td class="border-b px-4 py-2">Slot for a custom icon component or SVG to display in the notification.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">title</td>
                    <td class="border-b px-4 py-2">Slot for the notification title text.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">content</td>
                    <td class="border-b px-4 py-2">Slot for the main content of the notification.</td>
                </tr>
            </tbody>
        </table>

        <h3>Usage</h3>

        <p>
            Below is an example of how to use the <code>CNotification</code> component to show a notification with an icon, title, and content.
        </p>

        <card-docs>
            <c-button
                type="button"
                size="2xl"
                class="m-auto"
                @click="triggerNotification"
            >
                Show Notification
            </c-button>

            <c-notification ref="notification" />
        </card-docs>

        <pre>
            <code class="code-highlight language-vue">&lt;template/&gt;
    &lt;c-notification ref="notification" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import IconCheck from "@components/icons/IconCheck.vue";

const notification = ref(null);

function triggerNotification() {
    notification.value.showNotification({
        newTitle: "Success!",
        newContent: "Your operation was successful.",
        newIcon: IconCheck,
        newDuration: 3000,
    });
}
&lt;/script&gt;</code>
        </pre>


    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import IconCheck from "@components/icons/IconCheck.vue";

const notification = ref(null);

function triggerNotification() {
    notification.value.showNotification({
        newTitle: "Success!",
        newContent: "Your operation was successful.",
        newIcon: IconCheck,
        newDuration: 3000,
    });
}
</script>
