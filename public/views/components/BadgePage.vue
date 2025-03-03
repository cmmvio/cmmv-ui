<template>
    <BaseLayout>
        <h1>Badge</h1>

        <p>
            The <code>CBadge (alias: c-badge)</code> component is a versatile utility for adding small count indicators,
            status dots, or labels to elements like buttons, icons, or other components. It offers extensive
            customization options for appearance and placement.
        </p>

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
                    <td class="border-b px-4 py-2">content</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">The content displayed inside the badge. Used for numbers or labels.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">bg-red-500</td>
                    <td class="border-b px-4 py-2">Sets the background color of the badge, based on Tailwind classes.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">text-white</td>
                    <td class="border-b px-4 py-2">Defines the text color of the badge content.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">inline</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">If true, the badge is displayed inline with other elements.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">floating</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">When true, positions the badge absolutely relative to its parent.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">dot</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Displays the badge as a small dot, typically used for status
                        indicators.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">offsetX</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"0"</td>
                    <td class="border-b px-4 py-2">Sets the horizontal offset for floating badges.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">offsetY</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"0"</td>
                    <td class="border-b px-4 py-2">Sets the vertical offset for floating badges.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"rounded-full"</td>
                    <td class="border-b px-4 py-2">Defines the border radius of the badge.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">customClass</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Additional custom classes for advanced styling.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Badge</h3>

        <p>A simple badge with default styles, typically used to indicate counts or notifications.</p>

        <card-docs>
            <div class="flex justify-center">
                <c-button type="button" variant="plain" rounded="md" shadow="" class="relative shadow-none">
                    <IconBell class="text-neutral-600 dark:text-white" />
                    <c-badge content="5" class="absolute top-0 right-0" />
                </c-button>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-button
    type="button"
    variant="plain"
    rounded="full"
    class="relative shadow-none"
&gt;
    &lt;IconBell class="text-neutral-600 dark:text-white" /&gt;
    &lt;c-badge content="5" class="absolute top-0 right-0" /&gt;
&lt;/c-button&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Text Badge</h3>

        <p>
            The <code>CBadge</code> component allows you to display text labels with customizable colors.
            You can use different background and text colors to create visually appealing badges that match your design.
            This type of badge is ideal for displaying categories, tags, or status labels within your UI.
        </p>

        <card-docs>
            <div class="flex flex-wrap items-center justify-center gap-2">
                <c-badge bgColor="bg-blue-100 dark:bg-blue-900" textColor="text-blue-800 dark:text-blue-300"
                    rounded="rounded-md" customClass="px-2.5 py-0.5">
                    Blue
                </c-badge>

                <c-badge bgColor="bg-neutral-100 dark:bg-neutral-900" textColor="text-neutral-800 dark:text-neutral-300"
                    rounded="rounded-md" customClass="px-2.5 py-0.5">
                    Dark
                </c-badge>

                <c-badge bgColor="bg-red-100 dark:bg-red-900" textColor="text-red-800 dark:text-red-300"
                    rounded="rounded-md" customClass="px-2.5 py-0.5">
                    Red
                </c-badge>

                <c-badge bgColor="bg-green-100 dark:bg-green-900" textColor="text-green-800 dark:text-green-300"
                    rounded="rounded-md" customClass="px-2.5 py-0.5">
                    Green
                </c-badge>

                <c-badge bgColor="bg-yellow-100 dark:bg-yellow-900" textColor="text-yellow-800 dark:text-yellow-300"
                    rounded="rounded-md" customClass="px-2.5 py-0.5">
                    Yellow
                </c-badge>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;!-- Blue Badge --&gt;
&lt;c-badge
    bgColor="bg-blue-100 dark:bg-blue-900"
    textColor="text-blue-800 dark:text-blue-300"
    rounded="rounded-md"
    customClass="px-2.5 py-0.5"
&gt;
    Blue
&lt;/c-badge&gt;

&lt;!-- Dark Badge --&gt;
&lt;c-badge
    bgColor="bg-neutral-100 dark:bg-neutral-900"
    textColor="text-neutral-800 dark:text-neutral-300"
    rounded="rounded-md"
    customClass="px-2.5 py-0.5"
&gt;
    Dark
&lt;/c-badge&gt;

&lt;!-- Add more badges as needed --&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Dot Badge</h3>

        <p>Use the <code>dot</code> prop to display a badge as a small circular dot, ideal for status indicators.</p>

        <card-docs>
            <div class="flex justify-center gap-4">
                <c-button type="button" variant="plain" rounded="full" class="relative shadow-none">
                    <IconBell class="text-neutral-800 dark:text-white" />
                    <c-badge dot floating bgColor="bg-green-500" class="absolute top-0 right-0" />
                </c-button>

                <c-button type="button" variant="plain" rounded="full" class="relative shadow-none">
                    <IconBell class="text-neutral-800 dark:text-white" />
                    <c-badge dot floating bgColor="bg-red-500" class="absolute top-0 right-0" />
                </c-button>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;!-- Green Dot Badge (Status: Active) --&gt;
&lt;c-button type="button" class="relative shadow-none"&gt;
    &lt;IconBell class="text-neutral-800 dark:text-white" /&gt;
    &lt;c-badge dot floating bgColor="bg-green-500" class="absolute top-0 right-0" /&gt;
&lt;/c-button&gt;

&lt;!-- Red Dot Badge (Status: Alert) --&gt;
&lt;c-button type="button" class="relative shadow-none"&gt;
    &lt;IconBell class="text-neutral-800 dark:text-white" /&gt;
    &lt;c-badge dot floating bgColor="bg-red-500" class="absolute top-0 right-0" /&gt;
&lt;/c-button&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Colors</h3>

        <p>Badges support fully customizable background and text colors using Tailwind classes.</p>

        <card-docs>
            <div class="flex justify-center">
                <c-button type="button" variant="plain" shadow="" class="px-6 relative">
                    <IconBell class="text-neutral-800 dark:text-white" />
                    <c-badge content="99+" bgColor="bg-blue-600" textColor="text-white" class="absolute"
                        style="right: 0px; top: 0px;" />
                </c-button>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-button type="button" class="px-6 relative"&gt;
    &lt;IconBell class="text-neutral-800 dark:text-white" /&gt;
    &lt;c-badge
        content="99+"
        bgColor="bg-blue-600"
        textColor="text-white"
        class="absolute"
        style="right: 0px; top: 0px;"
    /&gt;
&lt;/c-button&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Floating Badge</h3>

        <p>Floating badges can be precisely positioned using <code>offsetX</code> and <code>offsetY</code>.</p>

        <card-docs>
            <div class="flex justify-center">
                <c-button type="button" variant="plain" shadow="" class="px-6 py-4 relative">
                    <IconBell class="text-neutral-800 dark:text-white" />
                    <c-badge content="3" floating offsetX="10px" offsetY="0px" bgColor="bg-yellow-800"
                        class="absolute" />
                </c-button>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-button type="button" class="px-6 py-4 relative"&gt;
    &lt;IconBell class="text-neutral-800 dark:text-white" /&gt;
    &lt;c-badge
        content="3"
        floating
        offsetX="10px"
        offsetY="0px"
        bgColor="bg-yellow-800"
        class="absolute"
    /&gt;
&lt;/c-button&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Button with Badge</h3>

        <p>
            The <code>CBadge</code> component can be used inside buttons to display notifications, message counts, or
            any
            relevant information.
            This setup is useful for indicating updates or alerts within interactive elements.
        </p>

        <card-docs>
            <div class="flex justify-center">
                <c-button type="button" class="px-6 py-2" inline>
                    Messages
                    <c-badge content="3" bgColor="bg-indigo-500"
                        customClass="inline-flex ml-1 items-center justify-center px-2 py-0.5 text-xs font-semibold" />
                </c-button>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-button type="button" class="px-6 py-2" inline&gt;
    Messages
    &lt;c-badge
        content="3"
        bgColor="bg-indigo-500"
        customClass="inline-flex ml-1 items-center justify-center px-2 py-0.5 text-xs font-semibold"
    /&gt;
&lt;/c-button&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Badge with Icon</h3>

        <p>
            The <code>CBadge</code> component supports icons, allowing you to display symbols inside the badge.
            This is ideal for representing statuses, alerts, or action indicators.
        </p>

        <card-docs>
            <div class="flex items-center justify-center gap-x-4">
                <c-badge bgColor="bg-neutral-500"
                    customClass="inline-flex items-center justify-center w-6 h-6 text-sm font-semibold rounded-full">
                    <IconCheck class="w-4 h-3 text-white" aria-hidden="true" />
                </c-badge>

                <c-badge bgColor="bg-neutral-500"
                    customClass="inline-flex items-center justify-center w-6 h-6 text-sm font-semibold rounded-full">
                    <IconBolt class="w-4 h-3 text-yellow-500" aria-hidden="true" />
                </c-badge>

                <c-badge bgColor="bg-neutral-500"
                    customClass="inline-flex items-center justify-center w-6 h-6 text-sm font-semibold rounded-full">
                    <IconCog class="w-4 h-3 text-neutral-800" aria-hidden="true" />
                </c-badge>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;!-- Badge with check icon --&gt;
&lt;c-badge
    bgColor="bg-neutral-500"
    customClass="inline-flex items-center justify-center w-6 h-6 text-sm font-semibold rounded-full"
&gt;
    &lt;IconCheck class="w-4 h-3 text-white" aria-hidden="true" /&gt;
&lt;/c-badge&gt;

&lt;!-- Badge with bolt icon --&gt;
&lt;c-badge
    bgColor="bg-neutral-500"
    customClass="inline-flex items-center justify-center w-6 h-6 text-sm font-semibold rounded-full"
&gt;
    &lt;IconBolt class="w-4 h-3 text-yellow-500" aria-hidden="true" /&gt;
&lt;/c-badge&gt;</code></pre>
            </template>
        </card-docs>


        <PagePagination previous="AI Chat" previousLink="/ai-chat" next="Button" nextLink="/button" />
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import IconCheck from '@components/icons/IconCheck.vue';
import IconBolt from '@components/icons/IconBolt.vue';
import IconCog from '@components/icons/IconCog.vue';
import IconBell from '@components/icons/IconBell.vue';
</script>

<style scoped>
.code-highlight {
    white-space: pre;
    font-family: monospace;
}
</style>
