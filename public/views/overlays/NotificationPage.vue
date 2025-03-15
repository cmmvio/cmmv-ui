<template>
    <BaseLayout>
        <c-seo
            section="Notification Component"
            description="Learn how to use the CNotification component in CMMV UI. A flexible notification system for displaying toast messages, alerts, and feedback with customizable positioning and animations."
            :keywords="['notification', 'component', 'ui', 'toast', 'alert', 'feedback']"
        />

        <h1>Notification</h1>

        <p>
            The <code>CNotification (alias: c-notification)</code> is designed to display temporary or persistent
            notifications with optional icons, titles, and progress bars. Notifications are positioned in the top-right
            corner by default and can be dismissed manually or automatically after a set duration. The component
            supports transitions for smooth appearance and dismissal.
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
                    <td class="border-b px-4 py-2">maxWidth</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">0</td>
                    <td class="border-b px-4 py-2">Specifies the maximum width of the notification container.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">position</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"top-right"</td>
                    <td class="border-b px-4 py-2">Controls the position of notifications. Options: "top-right",
                        "top-left", "bottom-right", "bottom-left", "top-center", "bottom-center".</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-white dark:bg-zinc-800"</td>
                    <td class="border-b px-4 py-2">Sets the default background color of notifications.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text-black dark:text-white"</td>
                    <td class="border-b px-4 py-2">Sets the default text color of notifications.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">iconColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text-blue-500 dark:text-blue-400"</td>
                    <td class="border-b px-4 py-2">Sets the default color of notification icons.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">permanent</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">Determines whether notifications persist until manually dismissed.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">width</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"w-full"</td>
                    <td class="border-b px-4 py-2">Sets the default width class for notifications.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">limit</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">5</td>
                    <td class="border-b px-4 py-2">Maximum number of notifications to display at once.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Methods</h3>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Method</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Parameters</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">showNotification</td>
                    <td class="border-b px-4 py-2">options: Object</td>
                    <td class="border-b px-4 py-2">Displays a new notification with the specified options. Returns the
                        notification ID.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">updateNotification</td>
                    <td class="border-b px-4 py-2">id: Number, options: Object</td>
                    <td class="border-b px-4 py-2">Updates an existing notification with new options.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">closeNotification</td>
                    <td class="border-b px-4 py-2">id: Number</td>
                    <td class="border-b px-4 py-2">Closes a specific notification by its ID.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">clearAllNotifications</td>
                    <td class="border-b px-4 py-2">None</td>
                    <td class="border-b px-4 py-2">Closes all active notifications.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Notification Options</h3>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Option</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Type</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">newTitle</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Title text for the notification.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">newContent</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Main content text for the notification.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">newIcon</td>
                    <td class="border-b px-4 py-2">Component</td>
                    <td class="border-b px-4 py-2">Icon component to display in the notification.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">newDuration</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">Duration in milliseconds before the notification auto-dismisses.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">permanent</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">Whether the notification should persist until manually dismissed.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Background color class for this specific notification.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Text color class for this specific notification.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">iconColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Icon color class for this specific notification.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">accentColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Color for the left border accent (CSS color value).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">elevated</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">Whether to apply elevated shadow styling.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Slots</h3>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Slot</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">icon</td>
                    <td class="border-b px-4 py-2">Slot for a custom icon component or SVG to display in the
                        notification.</td>
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
        </table-docs>

        <h3>Basic Usage</h3>

        <p>
            Below is an example of how to use the <code>CNotification</code> component to show a notification with an
            icon, title, and content.
        </p>

        <card-docs>
            <div class="flex items-center justify-center gap-x-4">
                <c-button type="button" size="2xl" class="m-auto" @click="triggerBasicNotification">
                    Show Notification
                </c-button>
            </div>

            <c-notification ref="basicNotification" />

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-notification ref="notification" /&gt;

    &lt;c-button
        type="button"
        size="2xl"
        @click="triggerNotification"
    &gt;
        Show Notification
    &lt;/c-button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";
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
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Notification Positions</h3>

        <p>
            The <code>CNotification</code> component supports multiple positions for displaying notifications.
        </p>

        <card-docs>
            <div class="flex flex-wrap items-center justify-center gap-4">
                <c-button v-for="position in positions" :key="position" type="button"
                    @click="() => showPositionedNotification(position)">
                    {{ position }}
                </c-button>
            </div>

            <c-notification ref="positionNotification" />

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-notification ref="notification" /&gt;

    &lt;div class="flex flex-wrap gap-4"&gt;
        &lt;c-button
            v-for="pos in positions"
            :key="pos"
            @click="() => showPositionedNotification(pos)"
        &gt;
            {{ pos }}
        &lt;/c-button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";
import IconBolt from "@components/icons/IconBolt.vue";

const notification = ref(null);
const positions = [
    "top-right",
    "top-left",
    "bottom-right",
    "bottom-left",
    "top-center",
    "bottom-center"
];

function showPositionedNotification(position) {
    notification.value.showNotification({
        newTitle: `${position} Notification`,
        newContent: `This notification appears in the ${position} position.`,
        newIcon: IconBolt,
        newDuration: 3000,
        position: position
    });
}
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Styled Notifications</h3>

        <p>
            You can customize the appearance of notifications with different colors, accents, and styles.
        </p>

        <card-docs>
            <div class="flex flex-wrap items-center justify-center gap-4">
                <c-button variant="success" @click="showSuccessNotification">
                    Success
                </c-button>
                <c-button variant="error" @click="showErrorNotification">
                    Error
                </c-button>
                <c-button variant="warning" @click="showWarningNotification">
                    Warning
                </c-button>
                <c-button variant="info" @click="showInfoNotification">
                    Info
                </c-button>
            </div>

            <c-notification ref="styledNotification" />

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-notification ref="notification" /&gt;

    &lt;div class="flex flex-wrap gap-4"&gt;
        &lt;c-button variant="success" @click="showSuccessNotification"&gt;Success&lt;/c-button&gt;
        &lt;c-button variant="error" @click="showErrorNotification"&gt;Error&lt;/c-button&gt;
        &lt;c-button variant="warning" @click="showWarningNotification"&gt;Warning&lt;/c-button&gt;
        &lt;c-button variant="info" @click="showInfoNotification"&gt;Info&lt;/c-button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";
import IconCheck from "@components/icons/IconCheck.vue";
import IconXCircle from "@components/icons/IconXCircle.vue";
import IconShieldExclamation from "@components/icons/IconShieldExclamation.vue";

const notification = ref(null);

function showSuccessNotification() {
    notification.value.showNotification({
        newTitle: "Success!",
        newContent: "Operation completed successfully.",
        newIcon: IconCheck,
        bgColor: "bg-green-50 dark:bg-green-900",
        textColor: "text-green-800 dark:text-green-100",
        iconColor: "text-green-500",
        accentColor: "#22c55e", // green-500
        progressClass: "bg-green-500",
        newDuration: 3000,
    });
}

function showErrorNotification() {
    notification.value.showNotification({
        newTitle: "Error!",
        newContent: "Something went wrong.",
        newIcon: IconXCircle,
        bgColor: "bg-red-50 dark:bg-red-900",
        textColor: "text-red-800 dark:text-red-100",
        iconColor: "text-red-500",
        accentColor: "#ef4444", // red-500
        progressClass: "bg-red-500",
        newDuration: 3000,
    });
}

function showWarningNotification() {
    notification.value.showNotification({
        newTitle: "Warning!",
        newContent: "Please check your input.",
        newIcon: IconShieldExclamation,
        bgColor: "bg-yellow-50 dark:bg-yellow-900",
        textColor: "text-yellow-800 dark:text-yellow-100",
        iconColor: "text-yellow-500",
        accentColor: "#eab308", // yellow-500
        progressClass: "bg-yellow-500",
        newDuration: 3000,
    });
}

function showInfoNotification() {
    notification.value.showNotification({
        newTitle: "Information",
        newContent: "Here's something you should know.",
        newIcon: IconCheck,
        bgColor: "bg-blue-50 dark:bg-blue-900",
        textColor: "text-blue-800 dark:text-blue-100",
        iconColor: "text-blue-500",
        accentColor: "#3b82f6", // blue-500
        progressClass: "bg-blue-500",
        newDuration: 3000,
    });
}
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Multiple Notifications</h3>

        <p>
            The <code>CNotification</code> component can display multiple notifications simultaneously.
        </p>

        <card-docs>
            <div class="flex items-center justify-center gap-x-4">
                <c-button type="button" @click="showMultipleNotifications">
                    Show Multiple Notifications
                </c-button>
            </div>

            <c-notification ref="multipleNotification" />

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-notification ref="notification" /&gt;

    &lt;c-button @click="showMultipleNotifications"&gt;
        Show Multiple Notifications
    &lt;/c-button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";
import IconBolt from "@components/icons/IconBolt.vue";
import IconCheck from "@components/icons/IconCheck.vue";
import IconXCircle from "@components/icons/IconXCircle.vue";

const notification = ref(null);

function showMultipleNotifications() {
    multipleNotification.value.showNotification({
        newTitle: "First Notification",
        newContent: "This is the first notification.",
        newIcon: IconBolt,
        newDuration: 5000,
    });

    setTimeout(() => {
        multipleNotification.value.showNotification({
            newTitle: "Second Notification",
            newContent: "This is the second notification.",
            newIcon: IconCheck,
            newDuration: 5000,
        });
    }, 500);

    setTimeout(() => {
        multipleNotification.value.showNotification({
            newTitle: "Third Notification",
            newContent: "This is the third notification.",
            newIcon: IconXCircle,
            newDuration: 5000,
        });
    }, 1000);
}
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Permanent Notifications</h3>

        <p>
            You can create permanent notifications that remain visible until manually dismissed.
        </p>

        <card-docs>
            <div class="flex items-center justify-center gap-x-4">
                <c-button type="button" @click="showPermanentNotification">
                    Show Permanent Notification
                </c-button>
            </div>

            <c-notification ref="permanentNotification" />

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-notification ref="notification" /&gt;

    &lt;c-button @click="showPermanentNotification"&gt;
        Show Permanent Notification
    &lt;/c-button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";
import IconShieldExclamation from "@components/icons/IconShieldExclamation.vue";

const notification = ref(null);

function showPermanentNotification() {
    notification.value.showNotification({
        newTitle: "Important Notice",
        newContent: "This notification will remain visible until you dismiss it.",
        newIcon: IconShieldExclamation,
        permanent: true,
        elevated: true,
        bgColor: "bg-purple-50 dark:bg-purple-900",
        textColor: "text-purple-800 dark:text-purple-100",
        iconColor: "text-purple-500",
        accentColor: "#a855f7", // purple-500
    });
}
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Updating Notifications</h3>

        <p>
            You can update the content of an existing notification using its ID.
        </p>

        <card-docs>
            <div class="flex items-center justify-center gap-x-4">
                <c-button type="button" @click="showUpdatingNotification">
                    Show Updating Notification
                </c-button>
            </div>

            <c-notification ref="updatingNotification" />

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-notification ref="notification" /&gt;

    &lt;c-button @click="showUpdatingNotification"&gt;
        Show Updating Notification
    &lt;/c-button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";
import IconBolt from "@components/icons/IconBolt.vue";
import IconCheck from "@components/icons/IconCheck.vue";

const notification = ref(null);

function showUpdatingNotification() {
    // Show initial notification
    const id = notification.value.showNotification({
        newTitle: "Processing...",
        newContent: "Your request is being processed.",
        newIcon: IconBolt,
        permanent: true,
        bgColor: "bg-blue-50 dark:bg-blue-900",
        textColor: "text-blue-800 dark:text-blue-100",
        iconColor: "text-blue-500",
    });

    // Update after 3 seconds
    setTimeout(() => {
        notification.value.updateNotification(id, {
            newTitle: "Completed!",
            newContent: "Your request has been processed successfully.",
            newIcon: IconCheck,
            permanent: false,
            newDuration: 3000,
            bgColor: "bg-green-50 dark:bg-green-900",
            textColor: "text-green-800 dark:text-green-100",
            iconColor: "text-green-500",
            accentColor: "#22c55e", // green-500
        });
    }, 3000);
}
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Dialog" previousLink="/dialog" next="Overlay" nextLink="/overlay" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import IconCheck from "@components/icons/IconCheck.vue";
import IconX from "@components/icons/IconX.vue";
import IconXCircle from "@components/icons/IconXCircle.vue";
import IconBolt from "@components/icons/IconBolt.vue";
import IconShieldExclamation from "@components/icons/IconShieldExclamation.vue";

// Basic notification
const basicNotification = ref(null);
function triggerBasicNotification() {
    basicNotification.value.showNotification({
        newTitle: "Success!",
        newContent: "Your operation was successful.",
        newIcon: IconCheck,
        newDuration: 3000,
    });
}

// Position notification
const positionNotification = ref(null);
const positions = [
    "top-right",
    "top-left",
    "bottom-right",
    "bottom-left",
    "top-center",
    "bottom-center"
];
function showPositionedNotification(position) {
    positionNotification.value.showNotification({
        newTitle: `${position} Notification`,
        newContent: `This notification appears in the ${position} position.`,
        newIcon: IconBolt,
        newDuration: 3000,
        position: position
    });
}

// Styled notifications
const styledNotification = ref(null);
function showSuccessNotification() {
    styledNotification.value.showNotification({
        newTitle: "Success!",
        newContent: "Operation completed successfully.",
        newIcon: IconCheck,
        bgColor: "bg-green-50 dark:bg-green-900",
        textColor: "text-green-800 dark:text-green-100",
        iconColor: "text-green-500",
        accentColor: "#22c55e", // green-500
        progressClass: "bg-green-500",
        newDuration: 3000,
    });
}

function showErrorNotification() {
    styledNotification.value.showNotification({
        newTitle: "Error!",
        newContent: "Something went wrong.",
        newIcon: IconXCircle,
        bgColor: "bg-red-50 dark:bg-red-900",
        textColor: "text-red-800 dark:text-red-100",
        iconColor: "text-red-500",
        accentColor: "#ef4444", // red-500
        progressClass: "bg-red-500",
        newDuration: 3000,
    });
}

function showWarningNotification() {
    styledNotification.value.showNotification({
        newTitle: "Warning!",
        newContent: "Please check your input.",
        newIcon: IconShieldExclamation,
        bgColor: "bg-yellow-50 dark:bg-yellow-900",
        textColor: "text-yellow-800 dark:text-yellow-100",
        iconColor: "text-yellow-500",
        accentColor: "#eab308", // yellow-500
        progressClass: "bg-yellow-500",
        newDuration: 3000,
    });
}

function showInfoNotification() {
    styledNotification.value.showNotification({
        newTitle: "Information",
        newContent: "Here's something you should know.",
        newIcon: IconCheck,
        bgColor: "bg-blue-50 dark:bg-blue-900",
        textColor: "text-blue-800 dark:text-blue-100",
        iconColor: "text-blue-500",
        accentColor: "#3b82f6", // blue-500
        progressClass: "bg-blue-500",
        newDuration: 3000,
    });
}

// Multiple notifications
const multipleNotification = ref(null);
function showMultipleNotifications() {
    multipleNotification.value.showNotification({
        newTitle: "First Notification",
        newContent: "This is the first notification.",
        newIcon: IconBolt,
        newDuration: 5000,
    });

    setTimeout(() => {
        multipleNotification.value.showNotification({
            newTitle: "Second Notification",
            newContent: "This is the second notification.",
            newIcon: IconCheck,
            newDuration: 5000,
        });
    }, 500);

    setTimeout(() => {
        multipleNotification.value.showNotification({
            newTitle: "Third Notification",
            newContent: "This is the third notification.",
            newIcon: IconXCircle,
            newDuration: 5000,
        });
    }, 1000);
}

// Permanent notification
const permanentNotification = ref(null);
function showPermanentNotification() {
    permanentNotification.value.showNotification({
        newTitle: "Important Notice",
        newContent: "This notification will remain visible until you dismiss it.",
        newIcon: IconShieldExclamation,
        permanent: true,
        elevated: true,
        bgColor: "bg-purple-50 dark:bg-purple-900",
        textColor: "text-purple-800 dark:text-purple-100",
        iconColor: "text-purple-500",
        accentColor: "#a855f7", // purple-500
    });
}

// Updating notification
const updatingNotification = ref(null);
function showUpdatingNotification() {
    // Show initial notification
    const id = updatingNotification.value.showNotification({
        newTitle: "Processing...",
        newContent: "Your request is being processed.",
        newIcon: IconBolt,
        permanent: true,
        bgColor: "bg-blue-50 dark:bg-blue-900",
        textColor: "text-blue-800 dark:text-blue-100",
        iconColor: "text-blue-500",
    });

    // Update after 3 seconds
    setTimeout(() => {
        updatingNotification.value.updateNotification(id, {
            newTitle: "Completed!",
            newContent: "Your request has been processed successfully.",
            newIcon: IconCheck,
            permanent: false,
            newDuration: 3000,
            bgColor: "bg-green-50 dark:bg-green-900",
            textColor: "text-green-800 dark:text-green-100",
            iconColor: "text-green-500",
            accentColor: "#22c55e", // green-500
        });
    }, 3000);
}
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
