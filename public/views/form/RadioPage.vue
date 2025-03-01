<template>
    <BaseLayout>
        <h1>Radio</h1>

        <p>
            The <code>CRadio (alias: c-radio)</code> component in the <code>@cmmv/ui</code> framework provides a
            flexible and customizable radio button element. It supports dynamic labels, two-way binding using
            <code>v-model</code>, and customizable styles for various use cases. With built-in support for sizes,
            colors, and accessibility features, the <code>CRadio</code> is ideal for forms, filters, and other
            interactive UI components.
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
                    <td class="border-b px-4 py-2">String | Number</td>
                    <td class="border-b px-4 py-2">undefined</td>
                    <td class="border-b px-4 py-2">The value bound to the radio group using <code>v-model</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">value</td>
                    <td class="border-b px-4 py-2">String | Number</td>
                    <td class="border-b px-4 py-2">null</td>
                    <td class="border-b px-4 py-2">The specific value of the radio button within the group.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">label</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Optional label displayed next to the radio button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Disables the radio button, making it non-interactive.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Specifies the size of the radio button. Options: <code>sm</code>,
                        <code>md</code>, <code>lg</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-blue-600"</td>
                    <td class="border-b px-4 py-2">Background color of the radio button when selected.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">borderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"border-blue-600"</td>
                    <td class="border-b px-4 py-2">Border color of the radio button when selected.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Radio</h3>

        <p>
            The following example demonstrates a basic radio button with a dynamic label. The label changes based on the
            <code>v-model</code> binding, reflecting the current state of the selected option.
        </p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-radio v-model="selectedOption" value="option1" label="Option 1"></c-radio>
                <c-radio v-model="selectedOption" value="option2" label="Option 2"></c-radio>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-radio
        v-model="selectedOption"
        value="option1"
        label="Option 1"
    /&gt;
    &lt;c-radio
        v-model="selectedOption"
        value="option2"
        label="Option 2"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const selectedOption = ref("option1");
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Size Variants -->
        <h3>Size Variants</h3>

        <p>
            The <code>CRadio</code> supports multiple sizes to fit different UI contexts. Use the <code>size</code> prop
            to
            customize the radio button dimensions. Available sizes include <code>sm</code>, <code>md</code>, and
            <code>lg</code>.
        </p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-radio label="Small" size="sm" value="small" checked />
                <c-radio label="Medium" size="md" value="medium" checked />
                <c-radio label="Large" size="lg" value="large" checked />
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-radio label="Small" size="sm" value="small" checked /&gt;
    &lt;c-radio label="Medium" size="md" value="medium" checked /&gt;
    &lt;c-radio label="Large" size="lg" value="large" checked /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Disabled -->
        <h3>Disabled</h3>

        <p>
            The <code>disabled</code> prop can be used to disable the radio button, making it non-interactive.
        </p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-radio label="Disabled" checked disabled />
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-radio label="Disabled" disabled checked /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Color Variations -->
        <h3>Color Variations</h3>

        <p>
            The <code>CRadio</code> supports color customization. Use the <code>bgColor</code> and
            <code>borderColor</code>
            props to style the radio button with custom colors.
        </p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-radio label="Blue" bgColor="bg-blue-600" borderColor="border-blue-800" value="blue" checked />
                <c-radio label="Green" bgColor="bg-green-600" borderColor="border-green-800" value="green" checked />
                <c-radio label="Red" bgColor="bg-red-600" borderColor="border-red-800" value="red" checked />
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-radio
        label="Blue"
        bgColor="bg-blue-600"
        borderColor="border-blue-800"
        value="blue"
        checked
    /&gt;
    &lt;c-radio
        label="Green"
        bgColor="bg-green-600"
        borderColor="border-green-800"
        value="green"
        checked
    /&gt;
    &lt;c-radio
        label="Red"
        bgColor="bg-red-600"
        borderColor="border-red-800"
        value="red"
        checked
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Custom Template with Color Picker -->
        <h3>Custom Template - Color Picker</h3>

        <p>
            The <code>CRadio</code> component supports full layout customization using slots. This example demonstrates
            how to
            create a color picker using the default slot.
        </p>

        <card-docs>
            <div class="mx-auto">
                <div class="m-auto justify-center flex flex-col items-center w-[300px]">
                    <div class="flex items-center gap-x-3">
                        <c-radio v-for="color in colorOptions" :key="color.name" v-model="selectedColorValue"
                            :value="color.value">
                            <template v-slot="{ checked }">
                                <div :class="[
                                    color.bgClass,
                                    checked ? 'ring ring-offset-1' : '',
                                    'relative flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                ]">
                                    <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black/10"
                                        :class="color.bgClass" />
                                </div>
                            </template>
                        </c-radio>
                    </div>
                    <p class="mt-4 text-sm text-gray-700 dark:text-gray-300">
                        Selected color: <span class="font-semibold">{{ selectedColorName }}</span>
                    </p>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;div class="mx-auto"&gt;
        &lt;div class="m-auto justify-center flex flex-col items-center w-[300px]"&gt;
            &lt;div class="flex items-center gap-x-3"&gt;
                &lt;c-radio
                    v-for="color in colorOptions"
                    :key="color.name"
                    v-model="selectedColorValue"
                    :value="color.value"
                &gt;
                    &lt;template v-slot="{ checked }"&gt;
                        &lt;div
                            :class="[
                                color.bgClass,
                                checked ? 'ring ring-offset-1' : '',
                                'relative flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            ]"
                        &gt;
                            &lt;span
                                aria-hidden="true"
                                class="h-8 w-8 rounded-full border border-black/10"
                                :class="color.bgClass"
                            /&gt;
                        &lt;/div&gt;
                    &lt;/template&gt;
                &lt;/c-radio&gt;
            &lt;/div&gt;
            &lt;p class="mt-4 text-sm text-gray-700 dark:text-gray-300"&gt;
                Selected color: &lt;span class="font-semibold"&gt;&#223;&#223; selectedColorName &#225;&#225;&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed } from "vue";
import CRadio from "@components/forms/CRadio.vue";

const colorOptions = [
    { name: 'Pink', value: 'pink', bgClass: 'bg-pink-500' },
    { name: 'Purple', value: 'purple', bgClass: 'bg-purple-500' },
    { name: 'Blue', value: 'blue', bgClass: 'bg-blue-500' },
    { name: 'Green', value: 'green', bgClass: 'bg-green-500' },
    { name: 'Yellow', value: 'yellow', bgClass: 'bg-yellow-500' },
];

const selectedColorValue = ref('purple');

const selectedColorName = computed(() => {
    const selected = colorOptions.find(color => color.value === selectedColorValue.value);
    return selected ? selected.name : '';
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Mailing List Selection Example -->
        <h3>Mailing List Selection</h3>

        <p>
            This example demonstrates how to build a card-based selection interface using <code>CRadio</code>'s custom
            template.
            Each card represents a mailing list with detailed information, and provides clear visual feedback for the
            selected
            item.
        </p>

        <card-docs>
            <div class="mx-auto justify-center text-center">
                <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 max-w-[700px] mx-auto">
                    <c-radio v-for="mailingList in mailingLists" :key="mailingList.id" v-model="selectedMailingList"
                        :value="mailingList" :aria-label="mailingList.title">
                        <template v-slot="{ checked }">
                            <div :class="[
                                checked ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300',
                                'relative flex cursor-pointer rounded-lg border bg-white dark:bg-zinc-800 p-4 shadow-sm focus:outline-none'
                            ]">
                                <span class="flex flex-1">
                                    <span class="flex flex-col">
                                        <span
                                            class="text-left block text-sm font-medium text-gray-900 dark:text-white">{{
                                                mailingList.title }}</span>
                                        <span class="mt-1 text-left text-sm text-gray-500 dark:text-gray-400">{{
                                            mailingList.description }}</span>
                                        <span
                                            class="text-left  mt-6 text-sm font-medium text-gray-900 dark:text-white">{{
                                                mailingList.users }}</span>
                                    </span>
                                </span>
                                <icon-check-circle v-if="checked"
                                    class="w-6 h-6 -mt-2 -mr-2 size-5 text-indigo-600 absolute top-4 right-4"
                                    aria-hidden="true" />
                                <span :class="[
                                    checked ? 'border-indigo-600' : 'border-transparent',
                                    'pointer-events-none absolute -inset-px rounded-lg border-2'
                                ]" aria-hidden="true" />
                            </div>
                        </template>
                    </c-radio>
                </div>
                <p class="m-auto mt-4 text-sm text-gray-700 dark:text-gray-300" v-if="selectedMailingList">
                    Selected: <span class="font-semibold">{{ selectedMailingList.title }}</span>
                </p>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;h4 class="text-sm/6 font-semibold text-gray-900 dark:text-white"&gt;Select a mailing list&lt;/h4&gt;
    &lt;div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"&gt;
        &lt;c-radio
            v-for="mailingList in mailingLists"
            :key="mailingList.id"
            v-model="selectedMailingList"
            :value="mailingList"
            :aria-label="mailingList.title"
        &gt;
            &lt;template v-slot="{ checked }"&gt;
                &lt;div :class="[
                    checked ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300',
                    'relative flex cursor-pointer rounded-lg border bg-white dark:bg-zinc-800 p-4 shadow-sm focus:outline-none'
                ]"&gt;
                    &lt;span class="flex flex-1"&gt;
                        &lt;span class="flex flex-col"&gt;
                            &lt;span class="block text-sm font-medium text-gray-900 dark:text-white"&gt;&#223;&#223; mailingList.title &#225;&#225;&lt;/span&gt;
                            &lt;span class="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400"&gt;&#223;&#223; mailingList.description &#225;&#225;&lt;/span&gt;
                            &lt;span class="mt-6 text-sm font-medium text-gray-900 dark:text-white"&gt;&#223;&#223; mailingList.users &#225;&#225;&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/span&gt;
                    &lt;svg v-if="checked" class="h-5 w-5 text-indigo-600 absolute top-4 right-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"&gt;
                        &lt;path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /&gt;
                    &lt;/svg&gt;
                    &lt;span :class="[
                        checked ? 'border-indigo-600' : 'border-transparent',
                        'pointer-events-none absolute -inset-px rounded-lg border-2'
                    ]" aria-hidden="true" /&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        &lt;/c-radio&gt;
    &lt;/div&gt;
    &lt;p class="mt-4 text-sm text-gray-700 dark:text-gray-300" v-if="selectedMailingList"&gt;
        Selected: &lt;span class="font-semibold"&gt;&#223;&#223; selectedMailingList.title &#225;&#225;&lt;/span&gt;
    &lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import CRadio from "@components/forms/CRadio.vue";

const mailingLists = [
    { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
    { id: 2, title: 'Existing customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
    { id: 3, title: 'Trial users', description: 'Last message sent 4 days ago', users: '2740 users' },
];

const selectedMailingList = ref(mailingLists[0]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="OTP Input" previousLink="/otp-input" next="Slider" nextLink="/slider" />
    </BaseLayout>
</template>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>

<script setup>
import { ref, computed } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CRadio from "@components/forms/CRadio.vue";

const selectedOption = ref("option1");

// Color Picker Example
const colorOptions = [
    { name: 'Pink', value: 'pink', bgClass: 'bg-pink-500' },
    { name: 'Purple', value: 'purple', bgClass: 'bg-purple-500' },
    { name: 'Blue', value: 'blue', bgClass: 'bg-blue-500' },
    { name: 'Green', value: 'green', bgClass: 'bg-green-500' },
    { name: 'Yellow', value: 'yellow', bgClass: 'bg-yellow-500' },
];

const selectedColorValue = ref('purple');

const selectedColorName = computed(() => {
    const selected = colorOptions.find(color => color.value === selectedColorValue.value);
    return selected ? selected.name : '';
});

// Add the new example data in the script section
const mailingLists = [
    { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
    { id: 2, title: 'Existing customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
    { id: 3, title: 'Trial users', description: 'Last message sent 4 days ago', users: '2740 users' },
];

const selectedMailingList = ref(mailingLists[0]);
</script>
