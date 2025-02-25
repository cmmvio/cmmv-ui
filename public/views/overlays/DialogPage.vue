<template>
    <BaseLayout>
        <h1>Dialog</h1>

        <p>
            The <code>CDialog</code> component provides a flexible and accessible modal dialog.
            It supports customization of background color, text color, border color, and more.
            The dialog can be opened programmatically or via a slot activator.
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
                    <td class="border-b px-4 py-2">modelValue</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Controls the visibility of the dialog.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">modal</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Prevents closing the dialog when clicking outside.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">fullscreen</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Expands the dialog to full-screen mode.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">closable</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Enables or disables the close button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">overlayBgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">#000</td>
                    <td class="border-b px-4 py-2">Background color of the overlay.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">overlayOpacity</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">50</td>
                    <td class="border-b px-4 py-2">Opacity of the overlay background.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Dialog</h3>

        <p>
            The <strong>Basic Dialog</strong> example demonstrates how to use the <code>CDialog</code> component with an activator slot.
        </p>

        <card-docs>
            <c-dialog v-model="showDialog" class="m-auto" closable>
                <template #activator>
                    <c-button @click="showDialog = true">Open Dialog</c-button>
                </template>

                <template #header>
                    <h3 class="font-bold">Dialog Header</h3>
                </template>

                <template #content>
                    <p class="mb-0 text-sm opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae feugiat nisi. Aliquam consectetur ex neque, at sagittis ante elementum a. Duis semper gravida semper. Ut sollicitudin diam ut risus suscipit, in tristique metus mollis. Donec sit amet sapien magna. Nunc interdum laoreet fermentum. Fusce condimentum vehicula sapien, nec efficitur enim placerat eget. Mauris urna quam, mollis at consequat a, aliquam non nisi. Donec arcu nisi, mollis id posuere vel, consequat quis nisl. Suspendisse cursus et nisi ac condimentum. Donec non cursus arcu. Ut rhoncus elit leo, vel facilisis sapien ullamcorper id. Aenean non condimentum purus, ac congue diam.</p>

                    <p class="mb-0 text-sm opacity-75">Donec et est orci. Nulla pretium, nisi vel consectetur porttitor, enim neque viverra lacus, nec aliquet nisl leo sed lectus. Phasellus vitae lacus id lorem consectetur vehicula faucibus a augue. Aliquam sit amet massa sollicitudin, efficitur sapien at, porttitor ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam ultrices sapien, eget aliquam tellus pharetra et. Nam bibendum justo a enim convallis, a tincidunt augue maximus. Sed lacinia varius nibh, eget sollicitudin urna tempus a. Curabitur rutrum mollis augue at tincidunt. Suspendisse ultrices hendrerit elit consectetur finibus. Praesent quis sapien sodales felis aliquam cursus vel mollis sem. Nam nec mauris mauris. Fusce vitae dapibus libero.</p>
                </template>

                <template #actions>
                    <c-button
                        @click="showDialog = false"
                    >Close</c-button>
                </template>
            </c-dialog>
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-dialog v-model="showDialog" closable&gt;
    &lt;template #activator&gt;
        &lt;c-button @click="showDialog = true"&gt;Open Dialog&lt;/c-button&gt;
    &lt;/template&gt;

    &lt;template #header&gt;
        Dialog Title
    &lt;/template&gt;

    &lt;template #content&gt;
        This is the dialog content area. You can place any elements here.
    &lt;/template&gt;

    &lt;template #actions&gt;
        &lt;c-button variant="text" @click="showDialog = false"&gt;Close&lt;/c-button&gt;
    &lt;/template&gt;
&lt;/c-dialog&gt;</code>
        </pre>

        <h3>Fullscreen Dialog</h3>

        <p>
            The <code>fullscreen</code> prop expands the dialog to cover the entire screen.
        </p>

        <card-docs>
            <c-dialog
                v-model="fullscreenDialog"
                class="m-auto"
                fullscreen
                closable
            >
                <template #activator>
                    <c-button
                        @click="fullscreenDialog = true"
                    >Open Fullscreen Dialog</c-button>
                </template>

                <template #header>
                    <h3 class="font-bold">Fullscreen Dialog</h3>
                </template>

                <template #content>
                    <p class="mb-0 text-sm opacity-75">This dialog takes up the entire screen.</p>
                </template>

                <template #actions>
                    <c-button @click="fullscreenDialog = false">Close</c-button>
                </template>
            </c-dialog>
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-dialog v-model="fullscreenDialog" fullscreen closable&gt;
    &lt;template #activator&gt;
        &lt;c-button @click="fullscreenDialog = true"&gt;Open Fullscreen Dialog&lt;/c-button&gt;
    &lt;/template&gt;

    &lt;template #header&gt;
        Fullscreen Dialog
    &lt;/template&gt;

    &lt;template #content&gt;
        This dialog takes up the entire screen.
    &lt;/template&gt;

    &lt;template #actions&gt;
        &lt;c-button variant="text" @click="fullscreenDialog = false"&gt;Close&lt;/c-button&gt;
    &lt;/template&gt;
&lt;/c-dialog&gt;</code>
        </pre>

        <PagePagination
            previous="Toggle"
            previousLink="/toggle"
            next="Notification"
            nextLink="/notification"
        />
    </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const showDialog = ref(false);
const fullscreenDialog = ref(false);
</script>
