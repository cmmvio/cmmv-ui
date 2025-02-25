<template>
    <BaseLayout>
        <h1>Badge</h1>

        <p>
            The <code>CBadge (alias: c-badge)</code> component is a versatile utility for adding small count indicators, status dots, or labels to elements like buttons, icons, or other components. It offers extensive customization options for appearance and placement.
        </p>

        <table class="w-full text-left border-collapse border-0 rounded-md doc-table">
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
                    <td class="border-b px-4 py-2">content</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">The content displayed inside the badge. Used for numbers or labels.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">bg-red-500</td>
                    <td class="border-b px-4 py-2">Sets the background color of the badge, based on Tailwind classes.</td>
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
                    <td class="border-b px-4 py-2">When true, positions the badge absolutely relative to its parent.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">dot</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Displays the badge as a small dot, typically used for status indicators.</td>
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
            </tbody>
        </table>

        <h3>Examples</h3>

        <p>A simple badge with default styles, typically used to indicate counts or notifications.</p>

        <card-docs>
            <c-button
                type="button"
                variant="plain"
                bgColor="bg-zinc-800 hover:bg-zinc-700"
                rounded="full"
                class="m-auto"
            >
                <IconBell class="text-white" />
                <c-badge content="5" />
            </c-button>
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-button
    type="button"
    variant="plain"
    bgColor="bg-zinc-800 hover:bg-zinc-700"
    rounded="full"
    class="m-auto"
&gt;
    Notifications
    &lt;c-badge content="5" class="absolute top-0 right-0" /&gt;
&lt;/c-button&gt;</code>
        </pre>

        <h3>Text</h3>

        <p>
            The <code>CBadge</code> component allows you to display text labels with customizable colors.
            You can use different background and text colors to create visually appealing badges that match your design.
            This type of badge is ideal for displaying categories, tags, or status labels within your UI.
        </p>

        <card-docs>
            <div class="flex items-center justify-center gap-x-4">
                <c-badge
                    bgColor="bg-blue-100 dark:bg-blue-900"
                    textColor="text-blue-800 dark:text-blue-300"
                    rounded="rounded-md"
                    customClass="me-2 px-2.5 py-0.5"
                >
                    Blue
                </c-badge>

                <c-badge
                    bgColor="bg-neutral-100 dark:bg-neutral-900"
                    textColor="text-neutral-800 dark:text-neutral-300"
                    rounded="rounded-md"
                    customClass="me-2 px-2.5 py-0.5"
                >
                    Dark
                </c-badge>

                <c-badge
                    bgColor="bg-red-100 dark:bg-red-900"
                    textColor="text-red-800 dark:text-red-300"
                    rounded="rounded-md"
                    customClass="me-2 px-2.5 py-0.5"
                >
                    Red
                </c-badge>

                <c-badge
                    bgColor="bg-green-100 dark:bg-green-900"
                    textColor="text-green-800 dark:text-green-300"
                    rounded="rounded-md"
                    customClass="me-2 px-2.5 py-0.5"
                >
                    Green
                </c-badge>

                <c-badge
                    bgColor="bg-yellow-100 dark:bg-yellow-900"
                    textColor="text-yellow-800 dark:text-yellow-300"
                    rounded="rounded-md"
                    customClass="me-2 px-2.5 py-0.5"
                >
                    Yellow
                </c-badge>

                <c-badge
                    bgColor="bg-indigo-100 dark:bg-indigo-900"
                    textColor="text-indigo-800 dark:text-indigo-300"
                    rounded="rounded-md"
                    customClass="me-2 px-2.5 py-0.5"
                >
                    Indigo
                </c-badge>

                <c-badge
                    bgColor="bg-purple-100 dark:bg-purple-900"
                    textColor="text-purple-800 dark:text-purple-300"
                    rounded="rounded-md"
                    customClass="me-2 px-2.5 py-0.5"
                >
                    Purple
                </c-badge>

                <c-badge
                    bgColor="bg-pink-100 dark:bg-pink-900"
                    textColor="text-pink-800 dark:text-pink-300"
                    rounded="rounded-md"
                    customClass="me-2 px-2.5 py-0.5"
                >
                    Pink
                </c-badge>
            </div>
        </card-docs>

        <pre>
    <code class="code-highlight language-html">&lt;div class="flex items-center justify-center gap-x-4"&gt;
    &lt;c-badge bgColor="bg-blue-100 dark:bg-blue-900" textColor="text-blue-800 dark:text-blue-300" rounded="rounded-md" customClass="me-2 px-2.5 py-0.5"&gt;
        Blue
    &lt;/c-badge&gt;

    &lt;c-badge bgColor="bg-neutral-100 dark:bg-neutral-900" textColor="text-neutral-800 dark:text-neutral-300" rounded="rounded-md" customClass="me-2 px-2.5 py-0.5"&gt;
        Dark
    &lt;/c-badge&gt;

    &lt;c-badge bgColor="bg-red-100 dark:bg-red-900" textColor="text-red-800 dark:text-red-300" rounded="rounded-md" customClass="me-2 px-2.5 py-0.5"&gt;
        Red
    &lt;/c-badge&gt;

    &lt;c-badge bgColor="bg-green-100 dark:bg-green-900" textColor="text-green-800 dark:text-green-300" rounded="rounded-md" customClass="me-2 px-2.5 py-0.5"&gt;
        Green
    &lt;/c-badge&gt;

    &lt;c-badge bgColor="bg-yellow-100 dark:bg-yellow-900" textColor="text-yellow-800 dark:text-yellow-300" rounded="rounded-md" customClass="me-2 px-2.5 py-0.5"&gt;
        Yellow
    &lt;/c-badge&gt;

    &lt;c-badge bgColor="bg-indigo-100 dark:bg-indigo-900" textColor="text-indigo-800 dark:text-indigo-300" rounded="rounded-md" customClass="me-2 px-2.5 py-0.5"&gt;
        Indigo
    &lt;/c-badge&gt;

    &lt;c-badge bgColor="bg-purple-100 dark:bg-purple-900" textColor="text-purple-800 dark:text-purple-300" rounded="rounded-md" customClass="me-2 px-2.5 py-0.5"&gt;
        Purple
    &lt;/c-badge&gt;

    &lt;c-badge bgColor="bg-pink-100 dark:bg-pink-900" textColor="text-pink-800 dark:text-pink-300" rounded="rounded-md" customClass="me-2 px-2.5 py-0.5"&gt;
        Pink
    &lt;/c-badge&gt;
&lt;/div&gt;</code>
</pre>

        <h3>Dot Badge</h3>

        <p>Use the <code>dot</code> prop to display a badge as a small circular dot, ideal for status indicators.</p>

        <card-docs>
            <c-button
                type="button"
                variant="plain"
                bgColor="bg-zinc-800 hover:bg-zinc-700"
                rounded="full"
                class="m-auto"
            >
                <IconBell class="text-white" />
                <c-badge dot floating bgColor="bg-green-500" class="absolute top-0 right-0" />
            </c-button>
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-button type="button" class="relative"&gt;
    Messages
    &lt;c-badge dot floating bgColor="bg-green-500" class="absolute top-0 right-0" /&gt;
&lt;/c-button&gt;</code>
        </pre>

        <h3>Custom Colors</h3>

        <p>Badges support fully customizable background and text colors using Tailwind classes.</p>

        <card-docs>
            <c-button
                type="button"
                variant="plain"
                bgColor="bg-zinc-800"
                class="px-6 m-auto"
            >
                <IconBell class="text-white" />
                <c-badge
                    content="99+"
                    bgColor="bg-blue-600"
                    textColor="text-white"
                    class="absolute"
                    style="right: 0px; top: 0px;"
                />
            </c-button>
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-button type="button" class="relative"&gt;
    &lt;IconBell class="text-white" /&gt;
    &lt;c-badge
        content="99+"
        bgColor="bg-blue-600"
        textColor="text-white"
        class="absolute"
        style="right: 0px; top: 0px;"
    /&gt;
&lt;/c-button&gt;</code>
        </pre>

        <h3>Floating Badge</h3>

        <p>Floating badges can be precisely positioned using <code>offsetX</code> and <code>offsetY</code>.</p>

        <card-docs>
            <c-button
                type="button"
                variant="plain"
                bgColor="bg-zinc-800"
                class="px-6 py-4 m-auto relative"
            >
                <IconBell class="text-white" />
                <c-badge content="3" floating offsetX="10px" offsetY="0px" bgColor="bg-yellow-800" class="absolute" />
            </c-button>
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-button type="button" class="relative"&gt;
    &lt;IconBell class="text-white" /&gt;
    &lt;c-badge
        content="3"
        floating
        offsetX="10px"
        offsetY="0px"
        bgColor="bg-yellow-800"
        class="absolute"
    /&gt;
&lt;/c-button&gt;</code>
        </pre>

        <h3>Button with badge</h3>

        <p>
            The <code>CBadge</code> component can be used inside buttons to display notifications, message counts, or any relevant information.
            This setup is useful for indicating updates or alerts within interactive elements.
        </p>

        <card-docs>
            <c-button
                type="button"
                class="px-6 py-4 m-auto relative"
                inline
            >
                Messages
                <c-badge
                    content="3"
                    bgColor="bg-indigo-500"
                    customClass="inline-flex ml-1 items-center justify-center px-2 py-0.5 text-xs font-semibold"
                />
            </c-button>
        </card-docs>

        <pre>
    <code class="code-highlight language-html">&lt;c-button type="button" class="px-6 py-4 m-auto relative" inline&gt;
    Messages
    &lt;c-badge
        content="3"
        bgColor="bg-indigo-500"
        customClass="inline-flex ml-1 items-center justify-center px-2 py-0.5 text-xs font-semibold"
    /&gt;
&lt;/c-button&gt;</code>
</pre>

        <h3>Badge with icon</h3>

        <p>
            The <code>CBadge</code> component supports icons, allowing you to display symbols inside the badge.
            This is ideal for representing statuses, alerts, or action indicators.
        </p>

        <card-docs>
            <div class="flex items-center justify-center gap-x-4">
                <c-badge
                    bgColor="bg-gray-500"
                    customClass="inline-flex ml-1 items-center justify-center w-6 h-6 me-2 text-sm font-semibold"
                    icon="IconCheck"
                >
                    <IconCheck class="w-4 h-3 text-white" aria-hidden="true" />
                </c-badge>

                <c-badge
                    bgColor="bg-gray-500"
                    customClass="inline-flex ml-1 items-center justify-center w-6 h-6 me-2 text-sm font-semibold"
                    icon="IconCheck"
                >
                    <IconBolt class="w-4 h-3 text-yellow-500" aria-hidden="true" />
                </c-badge>

                <c-badge
                    bgColor="bg-gray-500"
                    customClass="inline-flex ml-1 items-center justify-center w-6 h-6 me-2 text-sm font-semibold"
                    icon="IconCheck"
                >
                    <IconCog class="w-4 h-3 text-gray-800" aria-hidden="true" />
                </c-badge>
            </div>
        </card-docs>

        <pre>
    <code class="code-highlight language-html">&lt;div class="flex items-center justify-center gap-x-4"&gt;
    &lt;c-badge bgColor="bg-gray-500" customClass="inline-flex ml-1 items-center justify-center w-6 h-6 me-2 text-sm font-semibold" icon="IconCheck"&gt;
        &lt;IconCheck class="w-4 h-3 text-white" aria-hidden="true" /&gt;
    &lt;/c-badge&gt;

    &lt;c-badge bgColor="bg-gray-500" customClass="inline-flex ml-1 items-center justify-center w-6 h-6 me-2 text-sm font-semibold" icon="IconBolt"&gt;
        &lt;IconBolt class="w-4 h-3 text-yellow-500" aria-hidden="true" /&gt;
    &lt;/c-badge&gt;

    &lt;c-badge bgColor="bg-gray-500" customClass="inline-flex ml-1 items-center justify-center w-6 h-6 me-2 text-sm font-semibold" icon="IconCog"&gt;
        &lt;IconCog class="w-4 h-3 text-gray-800" aria-hidden="true" /&gt;
    &lt;/c-badge&gt;
&lt;/div&gt;</code>
</pre>

    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import IconCheck from '@components/icons/IconCheck.vue';
import IconBolt from '@components/icons/IconBolt.vue';
import IconCog from '@components/icons/IconCog.vue';
</script>
