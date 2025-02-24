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

        <h2>Examples</h2>

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

        <h2>Dot Badge</h2>

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

        <h2>Custom Colors</h2>

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

        <h2>Floating Badge</h2>

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
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
</script>
